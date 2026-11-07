// HOLLOW VALE — main orchestrator: game states, loop, combat, networking, saves
import * as THREE from 'three';
import {
  AudioEngine, Input, loadSettings, saveSettings, loadSPProgress, saveSPProgress, clearSPProgress,
  clamp, type Settings,
} from './core';
import { buildWorld, resolveCollisions, type WorldRefs, type Interactable as InteractableEntry } from './world';
import { Player, WEAPONS, type HitTarget, type WeaponId } from './player';
import { Shepherd, Husk, HUSK_SPAWNS, setHuskScene } from './monster';
import { Quests, NOTES, type NoteDef } from './quests';
import { UI } from './ui';
import { NetClient, type Snapshot } from './net';

type GameState = 'menu' | 'loading' | 'playing' | 'paused' | 'dead' | 'note' | 'win';
type Mode = 'sp' | 'coop' | 'versus';

const TIPS = [
  'they hear everything',
  'crouch to move in silence',
  'the torch is a beacon — and a comfort',
  'gunshots buy seconds, not safety',
  'three flames, three calls',
  'the bell remembers who drowned it',
];

interface Grenade { mesh: THREE.Mesh; vel: THREE.Vector3; t: number }

class Game {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private settings: Settings;
  private audio = new AudioEngine();
  private input = new Input();
  private ui!: UI;
  private net = new NetClient();
  private world: WorldRefs | null = null;
  private player: Player | null = null;
  private shepherd: Shepherd | null = null;
  private husks: Husk[] = [];
  private quests: Quests | null = null;
  private grenades: Grenade[] = [];
  private halluc: THREE.Mesh | null = null;
  private hallucT = 0;
  private whisperT = 8;

  state: GameState = 'menu';
  private mode: Mode = 'sp';
  private camMode: 'first' | 'third' = 'third';
  private timeLeft = 720;
  private sendT = 0;
  private playTime = 0;
  private monsterHp = 500;
  private netPlayerId = 'p0';
  private isHost = false;
  private lastStageRage = -1;
  private downedBleed = 0;
  private respawnTimer = -1;
  private escapedSent = false;
  private gameEnded = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.settings = loadSettings();
    this.camMode = this.settings.camMode;
    this.renderer = new THREE.WebGLRenderer({ antialias: this.settings.quality !== 'low', powerPreference: 'high-performance' });
    this.applyQuality();
    container.appendChild(this.renderer.domElement);
    this.scene.background = new THREE.Color(0x04060c);
    this.scene.fog = new THREE.FogExp2(0x04060c, 0.032);
    this.input.attach(this.renderer.domElement);
    this.net.setScene(this.scene);
    setHuskScene(this.scene);

    this.ui = new UI(container, this.input, this.settings, {
      onStartSP: (cont) => this.startSP(cont),
      onCreateRoom: (name, mode) => this.createRoom(name, mode),
      onJoinRoom: (name, code) => this.joinRoom(name, code),
      onStartGame: () => this.net.start(),
      onLeaveRoom: () => this.net.leave(),
      onRespawn: () => this.respawn(),
      onQuitToMenu: () => this.quitToMenu(),
      onResume: () => this.resume(),
      onSettingsChanged: (s) => this.applySettings(s),
    });
    this.ui.onSprintToggle = () => { /* sprint handled via input.buttons */ };

    this.input.onKeyExtra = (code) => this.onKey(code);
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.state === 'playing' && !this.isTouch()) this.pause();
    });
    window.addEventListener('blur', () => { if (this.state === 'playing') this.pause(); });

    this.renderer.domElement.addEventListener('click', () => {
      this.audio.ensure();
      if (this.state === 'playing' && !this.isTouch()) this.input.requestLock();
    });

    this.resize();
    this.loop();
  }

  /* ---------------- helpers ---------------- */
  private isTouch() { return matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window; }

  private applyQuality() {
    const q = this.settings.quality;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, q === 'low' ? 1 : q === 'medium' ? 1.35 : 2));
    this.renderer.shadowMap.enabled = q === 'high';
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.resize();
  }

  private resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    if (this.player) {
      this.player.camera.aspect = w / h;
      this.player.camera.updateProjectionMatrix();
    }
  }

  private applySettings(s: Settings) {
    const qChanged = s.quality !== this.settings.quality;
    this.settings = s;
    saveSettings(s);
    this.audio.setVolume(s.volume);
    this.camMode = s.camMode;
    this.ui.refreshTouch(s);
    if (qChanged) this.applyQuality();
  }

  private onKey(code: string) {
    if (code === 'T_pause' && this.state === 'playing') { this.pause(); return; }
    if (this.state === 'playing' && this.player) {
      switch (code) {
        case 'KeyE': case 'T_interact': this.tryInteract(); break;
        case 'KeyR': case 'T_reload': if (this.player) { this.player.reload(this.audio); } break;
        case 'KeyF': case 'T_flash': this.player.toggleFlashlight(this.audio); break;
        case 'KeyQ': case 'T_grenade': this.throwGrenade(); break;
        case 'KeyH': case 'T_heal': this.autoHeal(); break;
        case 'KeyV': case 'T_cam': this.camMode = this.camMode === 'first' ? 'third' : 'first'; break;
        case 'Digit1': this.switchWeapon('knife'); break;
        case 'Digit2': this.switchWeapon('pistol'); break;
        case 'Digit3': this.switchWeapon('rifle'); break;
      }
    }
  }

  private switchWeapon(w: WeaponId) {
    if (!this.player || !this.player.hasWeapon(w)) return;
    if (this.player.current === w) return;
    this.player.current = w;
    this.player.reloadT = 0;
    this.audio.play('click', 0.4);
  }

  /* ---------------- menu / start ---------------- */
  private async startSP(cont: boolean) {
    this.audio.ensure();
    this.mode = 'sp';
    this.isHost = true;
    this.ui.show('loading');
    this.ui.loading(0.05, TIPS[Math.floor(Math.random() * TIPS.length)]);
    await this.buildGame();
    const save = cont ? loadSPProgress() : null;
    if (cont && save) {
      this.player!.pos.set(save.pos?.x ?? 0, 0, save.pos?.z ?? 52);
      this.player!.inv = { ...this.player!.inv, ...save.inventory };
      this.player!.weapons = (save.weapons.filter(w => w === 'knife' || w === 'pistol' || w === 'rifle')) as WeaponId[];
      if (this.player!.weapons.length === 0) this.player!.weapons = ['knife'];
      this.quests!.restore({ ...save.flags, notesRead: save.notes } as never);
      this.playTime = save.playTime || 0;
      this.ui.message('Welcome back to Hollow Vale', true);
    } else {
      clearSPProgress();
      this.player!.pos.set(0, 0, 52);
      this.ui.subtitle('Hollow Vale, 1897. The village answered a bell that never rang...', 6);
    }
    this.beginPlay();
  }

  private async createRoom(name: string, mode: 'coop' | 'versus') {
    this.audio.ensure();
    this.ui.mpStatus('Connecting to the night...');
    try {
      await this.net.connect(this.settings);
      this.net.create(name, mode);
      this.ui.mpStatus('');
    } catch {
      this.ui.mpStatus('Cannot reach the server. Check the address in Settings.');
    }
  }
  private async joinRoom(name: string, code: string) {
    this.audio.ensure();
    if (!code) { this.ui.mpStatus('Enter a room code.'); return; }
    this.ui.mpStatus('Knocking on the door...');
    try {
      await this.net.connect(this.settings);
      this.net.join(name, code);
    } catch {
      this.ui.mpStatus('Cannot reach the server. Check the address in Settings.');
    }
  }

  private async buildGame() {
    // dispose previous
    if (this.world) {
      this.scene.remove(this.world.root);
      this.world = null;
    }
    for (const h of this.husks) this.scene.remove(h.mesh());
    this.husks = [];
    if (this.shepherd) { this.scene.remove(this.shepherd.mesh()); this.shepherd = null; }
    for (const g of this.grenades) this.scene.remove(g.mesh);
    this.grenades = [];
    this.net.clearRemotes();

    this.ui.loading(0.3, 'raising the houses...');
    await frame();
    this.world = buildWorld(this.scene, this.settings.quality);
    this.ui.loading(0.62, 'waking the dead...');
    await frame();

    this.player = new Player(this.scene);
    this.player.id = this.netPlayerId;
    this.player.name = this.settings.playerName;
    this.player.onNoise = (pos, r) => {
      if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
        this.shepherd?.hear(pos, r);
        for (const h of this.husks) h.hear(pos, r);
      } else {
        this.net.sendNoise(pos.x, pos.z, r);
      }
    };
    this.player.onDamage = () => {
      this.ui.flashDamage();
      this.audio.play('flesh', 0.8);
      if (this.player && this.player.downed) {
        this.downedBleed = 60;
        this.ui.message(this.mode === 'versus' ? 'You are dying...' : 'You are down — crawl to a friend', true);
      }
    };

    this.shepherd = new Shepherd(this.scene);
    this.shepherd.controlled = false;

    for (const p of HUSK_SPAWNS) this.husks.push(new Husk({ pos: p }));

    this.ui.loading(0.85, 'binding the curse...');
    await frame();
    const hooks = {
      message: (t: string, big?: boolean) => this.ui.message(t, big),
      subtitle: (t: string, d?: number) => this.ui.subtitle(t, d),
      onNoise: (pos: THREE.Vector3, r: number) => {
        if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
          this.shepherd?.hear(pos, r);
          for (const h of this.husks) h.hear(pos, r);
        } else this.net.sendNoise(pos.x, pos.z, r);
      },
      onStage: (stage: number) => this.onStage(stage),
      onNoteRead: (note: NoteDef) => { this.pendingNote = note; },
      onPickup: (id: string, type: string) => this.onPickup(id, type),
      netEmit: (event: string, data: Record<string, unknown>) => this.questEmit(event, data),
      isNet: () => this.mode !== 'sp',
    };
    this.quests = new Quests(this.world, hooks);
    this.quests.localPlayerRef = this.player;
    this.ui.loading(1, 'ready...');
    await frame();
  }
  private pendingNote: NoteDef | null = null;

  private beginPlay() {
    this.state = 'playing';
    this.gameEnded = false;
    this.escapedSent = false;
    this.ui.show(null);
    this.ui.setHUDEnabled(true);
    this.ui.fadeIn();
    if (!this.isTouch()) setTimeout(() => this.input.requestLock(), 60);
    this.timeLeft = 720;
    if (this.mode === 'versus' && this.net.isShepherd) {
      // player is the monster
      this.shepherd!.spawn(new THREE.Vector3(0, 0, -40));
      this.shepherd!.controlled = true;
      this.shepherd!.active = true;
      this.shepherd!.group.visible = true;
      this.camMode = 'third';
      this.player!.pos.set(0, 0, -36);
      this.ui.message('You are THE SHEPHERD. Ring the bell one last time.', true);
    } else if (this.mode === 'versus') {
      this.shepherd!.despawn();
      this.player!.pos.set(0, 0, 52);
      this.ui.message('Survive. The Shepherd walks tonight.', true);
    } else {
      this.player!.pos.y = 0;
      if (!this.world!.doors.get('church')!.locked) { /* keep */ }
      // sp/coop start with shepherd dormant until stage 1
      this.shepherd!.despawn();
    }
  }

  /* ---------------- net wiring ---------------- */
  wireNet() {
    this.net.onLobby = (room) => { this.ui.show('lobby'); this.ui.lobbyUpdate({ ...room, isHost: room.players[0]?.isHost || false }); };
    this.net.onError = (msg) => this.ui.mpStatus(msg);
    this.net.onStart = async (room) => {
      this.mode = room.mode === 'versus' ? 'versus' : 'coop';
      this.isHost = room.players[0]?.isHost || false;
      this.netPlayerId = this.net.socket?.id || 'p' + Math.floor(Math.random() * 999);
      this.ui.show('loading');
      this.ui.loading(0.2, 'summoning the others...');
      await this.buildGame();
      if (this.mode === 'coop') this.isHost = true; // first client simulates AI
      if (this.mode === 'versus') this.isHost = false;
      this.beginPlay();
    };
    this.net.onSnap = (snap) => this.applySnap(snap);
    this.net.onQuestEvent = (event, data) => {
      if (!this.quests) return;
      this.quests.applyRemote(event, data);
      if (event === 'give' && this.player) this.quests.giveToPlayer(this.player, data.items as Record<string, number>);
      if (event === 'craft') {
        if (data.what === 'rifle') this.ui.message("Someone crafted the Hunter's Rifle");
        if (data.what === 'remedy') this.ui.message("The remedy is brewed");
      }
    };
    this.net.onGameEvent = (event, data) => this.applyGameEvent(event, data);
    this.net.onDisconnected = () => {
      if (this.state === 'playing') {
        this.ui.message('Connection lost — the night swallows you', true);
        this.quitToMenu();
      }
    };
  }

  private applySnap(snap: Snapshot) {
    if (!this.player) return;
    this.net.applySnapshot(snap);
    if (snap.monster && this.shepherd) {
      this.shepherd.netPos.set(snap.monster.x, 0, snap.monster.z);
      this.shepherd.netYaw = snap.monster.yaw;
      this.shepherd.group.visible = true;
      this.shepherd.active = true;
      this.shepherd.state = snap.monster.state as never;
    }
    if (typeof snap.time === 'number') this.timeLeft = snap.time;
  }

  private applyGameEvent(event: string, data: Record<string, unknown>) {
    switch (event) {
      case 'mhit': {
        if (data.target === this.netPlayerId && this.player && !this.player.downed) {
          this.monsterAttackLocal(data.dmg as number);
        }
        break;
      }
      case 'revive': {
        if (data.target === this.netPlayerId && this.player) {
          this.player.downed = false;
          this.player.dead = false;
          this.player.health = 40;
          this.ui.message('Your friend pulled you back from the dark', true);
        }
        break;
      }
      case 'died': {
        this.ui.message(`${data.name || 'A friend'} was taken`);
        break;
      }
      case 'escaped': {
        if (!this.gameEnded) this.endGame(true, 'A survivor slipped through the gate.');
        break;
      }
      case 'gameover': {
        if (!this.gameEnded) {
          if (data.winner === 'monster') this.endGame(false, (data.text as string) || 'The Shepherd claimed the night.');
        }
        break;
      }
      case 'noise': {
        if (this.mode === 'coop' && this.isHost && this.shepherd) {
          this.shepherd.hear(new THREE.Vector3(data.x as number, 0, data.z as number), data.radius as number);
          for (const h of this.husks) h.hear(new THREE.Vector3(data.x as number, 0, data.z as number), data.radius as number);
        }
        break;
      }
    }
  }

  /* ---------------- quest events ---------------- */
  private questEmit(event: string, data: Record<string, unknown>) {
    switch (event) {
      case 'give': {
        if (this.player && this.quests) this.quests.giveToPlayer(this.player, data.items as Record<string, number>);
        this.net.sendQuest('give', data);
        break;
      }
      case 'craft': {
        if (data.what === 'rifle' && this.player) {
          this.player.giveWeapon('rifle');
          this.player.inv.rifle_stock = 0;
          this.player.inv.rifle_barrel = 0;
          this.player.inv.ammo_rifle = (this.player.inv.ammo_rifle || 0) + 6;
          this.switchWeapon('rifle');
        }
        this.net.sendQuest('craft', data);
        break;
      }
      case 'pickup': {
        this.net.sendQuest('pickup', data);
        break;
      }
      default:
        this.net.sendQuest(event, data);
    }
  }

  private onStage(stage: number) {
    if (this.mode === 'sp') {
      this.saveGame();
    }
    if (this.shepherd && (this.mode === 'sp' || (this.mode === 'coop' && this.isHost))) {
      if (stage >= 1 && !this.shepherd.active) {
        this.shepherd.spawn(new THREE.Vector3(24, 0, 30));
        this.ui.subtitle('Something answered. The lantern light drifts between the houses...', 6);
        this.audio.play('bell', 0.5);
      }
      this.shepherd.rage = clamp(stage * 0.14, 0, 0.85);
    }
    const chapterNames: Record<number, string> = {
      1: 'CHAPTER II — THE CHURCH OF THE BACKWARDS BELL',
      2: 'CHAPTER III — THREE FLAMES',
      3: 'CHAPTER IV — THE DROWNED AMULET',
      4: 'CHAPTER V — THE UNMAKING',
      5: 'CHAPTER VI — RUN FOR THE GATE',
    };
    if (chapterNames[stage]) this.ui.message(chapterNames[stage], true);
  }

  private onPickup(id: string, type: string) {
    this.questEmit('pickup', { id });
    if (this.player && this.quests) {
      const amounts: Record<string, [string, number]> = {
        ammo_pistol: ['ammo_pistol', 6], ammo_rifle: ['ammo_rifle', 4], bandage: ['bandage', 1],
        pills: ['pills', 1], battery: ['battery', 1], grenade: ['grenade', 1], herb: ['herb', 1],
      };
      if (amounts[type]) {
        const [key, n] = amounts[type];
        this.player.inv[key] = (this.player.inv[key] || 0) + n;
        this.audio.play('pickup', 0.5);
      } else if (type === 'church_key' || type === 'iron_key') {
        this.player.inv[type] = 1;
        this.audio.play('pickup', 0.6);
      } else if (type === 'amulet') {
        this.player.inv.amulet = 1;
        this.audio.play('bell', 0.4);
      } else {
        this.audio.play('pickup', 0.4);
      }
    }
  }

  /* ---------------- interactions ---------------- */
  private tryInteract() {
    if (!this.player || !this.world || !this.quests || this.player.downed) return;
    if (this.mode === 'versus' && this.net.isShepherd) return;
    const p = this.player.pos;
    let best: { it: InteractableEntry; d: number } | null = null;
    for (const it of this.world.interactables) {
      if (!it.enabled || it.used) continue;
      const d = Math.hypot(it.pos.x - p.x, it.pos.z - p.z);
      if (d < it.radius && (!best || d < best.d)) best = { it, d };
    }
    if (!best) return;
    // revive first (co-op)
    if (this.mode !== 'sp') {
      const downedRemote = this.net.remoteList().find(r => {
        const snapP = this.net.lastSnap?.players.find(pp => pp.id === r.id);
        return snapP?.downed && !snapP.dead;
      });
      if (downedRemote && Math.hypot(downedRemote.pos.x - p.x, downedRemote.pos.z - p.z) < 2.4) {
        this.net.sendGame('revive', { target: downedRemote.id });
        this.ui.message('Reviving...', false);
        return;
      }
    }
    this.audio.play('click', 0.3);
    best.it.onInteract(this.player);
  }

  /* ---------------- combat ---------------- */
  private targets(): HitTarget[] {
    const out: HitTarget[] = [];
    if (!this.player) return out;
    if (this.shepherd && this.shepherd.active && !this.shepherd.controlled) {
      out.push({
        mesh: this.shepherd.mesh(),
        pos: () => new THREE.Vector3(this.shepherd!.pos.x, 1.55, this.shepherd!.pos.z),
        onHit: (dmg, heavy) => this.shepherd!.onHit(dmg, heavy, this.audio, this.player!.pos.clone(), this.player!.yaw),
      });
    }
    for (const h of this.husks) {
      if (h.dead) continue;
      out.push({ mesh: h.mesh(), pos: () => h.chest(), onHit: (dmg) => h.onHit(dmg) });
    }
    return out;
  }

  private doAttack() {
    if (!this.player || this.state !== 'playing' || this.player.downed) return;
    if (this.mode === 'versus' && this.net.isShepherd) { this.shepherdAttack(); return; }
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.player.camera.quaternion);
    const result = this.player.fire(this.audio, this.targets(), this.world?.occluders || [], camDir);
    if (result === 'fired' || result === 'melee') {
      // vs-mode: shooting the player-monster
      if (this.mode === 'versus' && this.shepherd && this.shepherd.active) {
        const d = this.shepherd.pos.distanceTo(this.player.pos);
        if (d < 40) {
          const dir = new THREE.Vector3().subVectors(this.shepherd.pos, this.player.pos).normalize();
          const fwd = camDir.clone();
          if (dir.dot(fwd) > 0.985) {
            this.net.sendGame('mdamage', { dmg: WEAPONS[this.player.current].dmg });
          }
        }
      }
    }
  }

  private throwGrenade() {
    if (!this.player || this.player.downed) return;
    const g = this.player.throwGrenade(this.audio);
    if (!g) return;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xc46a3a, emissive: 0x602000, emissiveIntensity: 0.5 })
    );
    mesh.position.copy(g.pos);
    this.scene.add(mesh);
    this.grenades.push({ mesh, vel: g.vel, t: 0 });
  }

  private autoHeal() {
    if (!this.player) return;
    if (this.player.health < 60 && (this.player.inv.bandage || 0) > 0) this.player.useItem('bandage', this.audio);
    else if ((this.player.inv.pills || 0) > 0) this.player.useItem('pills', this.audio);
    else if ((this.player.inv.bandage || 0) > 0) this.player.useItem('bandage', this.audio);
    else this.ui.message('Nothing left to ease the pain');
  }

  /* ---------------- monster vs local ---------------- */
  private monsterAttackLocal(dmg: number) {
    if (!this.player || this.player.dead) return;
    this.audio.play('scare', 0.9);
    this.player.damage(dmg, true);
    // knockback
    if (this.shepherd) {
      const dir = new THREE.Vector3().subVectors(this.player.pos, this.shepherd.pos).normalize();
      this.player.pos.addScaledVector(dir, 2.4);
      resolveCollisions(this.player.pos, 0.42, this.world?.colliders || []);
    }
  }

  private shepherdAttack() {
    // local player IS the shepherd (versus)
    if (!this.shepherd || !this.player) return;
    this.audio.play('knife', 0.6);
    for (const r of this.net.remoteList()) {
      const d = r.pos.distanceTo(this.shepherd.pos);
      if (d < 2.2) {
        this.net.sendGame('mhit', { target: r.id, dmg: 30 });
        this.audio.play('flesh', 0.8);
      }
    }
  }

  /* ---------------- state ---------------- */
  private pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.ui.show('pause');
    this.input.exitLock();
    if (this.mode === 'sp') this.saveGame();
  }
  private resume() {
    this.state = 'playing';
    this.ui.show(null);
    if (!this.isTouch()) setTimeout(() => this.input.requestLock(), 50);
  }

  private saveGame() {
    if (this.mode !== 'sp' || !this.player || !this.quests) return;
    saveSPProgress({
      chapter: this.quests.state.stage,
      inventory: { ...this.player.inv },
      weapons: [...this.player.weapons],
      notes: [...this.quests.state.notesRead],
      flags: { ...this.quests.state },
      playTime: this.playTime,
      pos: { x: this.player.pos.x, z: this.player.pos.z },
    });
  }

  private quitToMenu() {
    this.saveGame();
    this.state = 'menu';
    this.mode = 'sp';
    this.ui.resetSprintToggle();
    this.ui.setHUDEnabled(false);
    this.ui.show('menu');
    this.net.leave();
    this.audio.danger = 0;
    this.audio.setGrowl(0);
    if (this.player) { this.scene.remove(this.player.camera); this.player = null; }
    if (this.shepherd) { this.scene.remove(this.shepherd.mesh()); this.shepherd = null; }
    for (const h of this.husks) this.scene.remove(h.mesh());
    this.husks = [];
    if (this.world) { this.scene.remove(this.world.root); this.world = null; }
    this.quests = null;
    // rebuild menu screen state
    location.reload();
  }

  private respawn() {
    if (!this.player) return;
    this.player.downed = false;
    this.player.dead = false;
    this.player.health = 50;
    this.player.fear = 45;
    this.player.pos.set(0, 0, -20);
    this.state = 'playing';
    this.ui.show(null);
    this.respawnTimer = -1;
  }

  private endGame(win: boolean, text: string) {
    if (this.gameEnded) return;
    this.gameEnded = true;
    this.state = 'win';
    this.audio.play(win ? 'win' : 'lose', 0.9);
    this.audio.setGrowl(0);
    this.input.exitLock();
    const stats = [
      `Time in the vale: ${Math.floor(this.playTime / 60)}m ${Math.floor(this.playTime % 60)}s`,
      `Notes found: ${this.quests?.state.notesRead.length ?? 0} / ${NOTES.length}`,
      `Chapter reached: ${this.quests?.state.stage ?? 0} / 6`,
      this.mode !== 'sp' ? `Survivors: ${this.net.lastSnap?.players.filter(p => !p.dead).length ?? '?'}` : '',
    ].filter(Boolean).join('<br>');
    if (win) this.ui.showWin(stats, text);
    else {
      const t = document.querySelector('#hv-death .hv-title');
      if (t) t.textContent = 'THE NIGHT WINS';
      const b = document.getElementById('hv-respawn-btn');
      if (b) b.classList.add('hv-hidden');
      this.ui.show('death');
      const sub = document.querySelector('#hv-death .hv-sub');
      if (sub) sub.textContent = text;
    }
  }

  /* ---------------- main loop ---------------- */
  private loop = () => {
    requestAnimationFrame(this.loop);
    const now = performance.now();
    const rawDt = (now - this._last) / 1000;
    this._last = now;
    const dt = Math.min(0.1, rawDt);
    this.ui.update(dt);
    this.audio.update(dt);
    this.autoPerf(rawDt);

    if (this.state === 'playing' && this.player && this.world && this.quests) {
      this.playTime += dt;
      this.step(dt);
    }
    if (this.player) {
      this.renderer.render(this.scene, this.player.camera);
    } else {
      // menu backdrop: render empty scene slowly rotating? keep last frame
      this.renderer.render(this.scene, this.menuCam);
    }
  };
  private _last = performance.now();
  private menuCam = new THREE.PerspectiveCamera(60, 1, 0.1, 400);
  private perfEma = 60; private perfTier = 0; private perfT = 0;

  private autoPerf(rawDt: number) {
    if (this.state !== 'playing') return;
    const fps = 1 / Math.max(rawDt, 0.001);
    this.perfEma = this.perfEma * 0.95 + fps * 0.05;
    this.perfT += rawDt;
    if (this.perfT < 4) return;
    this.perfT = 0;
    if (this.perfEma < 24 && this.perfTier < 2) {
      this.perfTier++;
      const pr = this.renderer.getPixelRatio();
      this.renderer.setPixelRatio(Math.max(0.66, pr - 0.35));
      this.renderer.shadowMap.enabled = false;
      if (this.perfTier === 2 && this.scene.fog instanceof THREE.FogExp2) this.scene.fog.density = 0.045;
      this.resize();
    }
  }

  private step(dt: number) {
    const player = this.player!, world = this.world!, quests = this.quests!;

    // darkness check: no flashlight and not near a lit lamp/brazier
    let nearLight = false;
    for (const l of world.lamps) {
      if (l.light.position.distanceTo(player.pos) < 9) { nearLight = true; break; }
    }
    if (!nearLight) for (const b of world.braziers) {
      if (b.lit && b.pos3.distanceTo(player.pos) < 8) { nearLight = true; break; }
    }
    const darkness = !player.flashlightOn && !nearLight;

    // monster visible?
    let monsterVisible = false;
    if (this.shepherd && this.shepherd.active && this.shepherd.group.visible) {
      const d = this.shepherd.pos.distanceTo(player.pos);
      if (d < 40) {
        const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(player.camera.quaternion);
        const to = new THREE.Vector3().subVectors(this.shepherd.headPos(), player.eyePos).normalize();
        if (dir.dot(to) > 0.5) monsterVisible = true;
      }
    }

    const frozen = false;
    player.update(dt, this.input, world, this.audio, this.camMode, this.settings.sensitivity, this.settings.invertY, darkness, monsterVisible, frozen);

    // attack (mouse/touch hold)
    if (this.input.buttons['attack'] && !this.isTouchHeld()) {
      // mouse: fire once per press
      if (!this._attackHeld) { this._attackHeld = true; this.doAttack(); }
    } else if (this.input.buttons['attack'] && this.isTouchHeld()) {
      if (player.fireCd <= 0) this.doAttack();
    } else this._attackHeld = false;

    // interact prompt
    let prompt: string | null = null;
    const isMonsterPlayer = this.mode === 'versus' && this.net.isShepherd;
    if (!isMonsterPlayer) {
      for (const it of world.interactables) {
        if (!it.enabled || it.used) continue;
        const d = Math.hypot(it.pos.x - player.pos.x, it.pos.z - player.pos.z);
        if (d < it.radius) {
          const doorBehind = it.id.startsWith('door_');
          if (doorBehind) {
            const did = it.id.slice(5);
            const door = world.doors.get(did);
            if (door?.locked) prompt = 'E — Locked';
            else prompt = door?.open ? 'E — Close door' : 'E — Open door';
          } else prompt = 'E — ' + it.prompt;
          break;
        }
      }
    }
    // revive prompt
    if (this.mode !== 'sp') {
      for (const rp of this.net.remoteList()) {
        const snapP = this.net.lastSnap?.players.find(pp => pp.id === rp.id);
        if (snapP?.downed && !snapP.dead && Math.hypot(rp.pos.x - player.pos.x, rp.pos.z - player.pos.z) < 2.4) {
          prompt = 'HOLD E — Revive ' + snapP.name;
          break;
        }
      }
    }
    this.ui.prompt(prompt);

    // downed handling
    if (player.downed && !player.dead) {
      this.downedBleed -= dt;
      if (this.downedBleed <= 0) {
        player.dead = true;
        player.downed = false;
        this.audio.play('lose', 0.8);
        if (this.mode === 'sp') {
          this.state = 'dead';
          this.ui.showDeath(true);
        } else if (this.mode === 'coop') {
          this.respawnTimer = 25;
          this.net.sendGame('died', { name: player.name });
          this.ui.showDeath(true);
          this.ui.message('You will rise at the church in 25s', true);
        } else {
          this.net.sendGame('died', { name: player.name });
          this.state = 'dead';
          this.ui.showDeath(false);
        }
      }
    }
    if (this.respawnTimer > 0 && this.state !== 'menu') {
      this.respawnTimer -= dt;
      if (this.respawnTimer <= 0 && this.mode === 'coop') {
        this.respawn();
        this.ui.message('The church floor accepts you back', false);
      }
    }

    // shepherd sim (sp always; coop host; versus none)
    const playersForAI = [
      { pos: player.pos, crouching: player.crouching, sprinting: player.sprinting, flashlightOn: player.flashlightOn, downed: player.downed, dead: player.dead },
      ...this.net.remoteList().map(r => {
        const sp = this.net.lastSnap?.players.find(p => p.id === r.id);
        return { pos: r.pos, crouching: !!sp?.crouch, sprinting: !!sp?.moving && !sp?.crouch, flashlightOn: !!sp?.flash, downed: !!sp?.downed, dead: !!sp?.dead };
      }),
    ];
    if (this.shepherd) {
      const simulate = this.mode === 'sp' || (this.mode === 'coop' && this.isHost);
      if (simulate && this.shepherd.active) {
        this.shepherd.update(dt, world, playersForAI, this.audio, player.pos.clone(), player.yaw, (target) => {
          if (target === playersForAI[0]) this.monsterAttackLocal(40);
          else {
            // find which remote
            const idx = playersForAI.indexOf(target);
            const rp = this.net.remoteList()[idx - 1];
            if (rp) this.net.sendGame('mhit', { target: rp.id, dmg: 40 });
          }
        });
        this.net.sendMonster({ x: this.shepherd.pos.x, z: this.shepherd.pos.z, yaw: this.shepherd.group.rotation.y, state: this.shepherd.state });
      } else if (!simulate) {
        this.shepherd.update(dt, world, [], this.audio, player.pos.clone(), player.yaw, () => { /* noop */ });
      }
      // shepherd vs local player collision catch in versus (remote monster attacks via mhit)
    }

    // husks
    for (const h of this.husks) {
      h.update(dt, world, playersForAI, this.audio, player.pos.clone(), player.yaw, (target, dmg) => {
        if (target === playersForAI[0]) this.monsterAttackLocal(dmg);
      });
    }

    // grenades
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.t += dt;
      g.vel.y -= 12 * dt;
      g.mesh.position.addScaledVector(g.vel, dt);
      if (g.mesh.position.y < 0.08) { g.mesh.position.y = 0.08; g.vel.y *= -0.35; g.vel.x *= 0.7; g.vel.z *= 0.7; }
      resolveCollisions(g.mesh.position, 0.1, world.colliders);
      if (g.t > 1.6) {
        this.audio.play('bang', 1);
        this.player?.addShake(0.6, 0.3);
        const pos = g.mesh.position.clone();
        if (this.shepherd && this.shepherd.active && this.shepherd.pos.distanceTo(pos) < 13) this.shepherd.knockdown(6);
        for (const h of this.husks) if (!h.dead && h.pos.distanceTo(pos) < 6) h.onHit(100);
        this.shepherd?.hear(pos, 60);
        for (const h of this.husks) h.hear(pos, 30);
        if (this.mode !== 'sp') this.net.sendNoise(pos.x, pos.z, 60);
        this.scene.remove(g.mesh);
        this.grenades.splice(i, 1);
      }
    }

    quests.update(dt);

    // hallucinations at high fear
    if (player.fear > 82) {
      this.hallucT -= dt;
      if (this.hallucT <= 0) {
        this.hallucT = 6 + Math.random() * 8;
        this.spawnHallucination();
      }
    } else this.hallucT = 4;
    if (this.halluc) {
      this.hallucT -= dt;
      const m = this.halluc.material as THREE.MeshBasicMaterial;
      m.opacity = clamp(this.hallucT * 2, 0, 0.75);
      if (this.hallucT <= 0) { this.scene.remove(this.halluc); this.halluc = null; }
    }

    // whispers
    this.whisperT -= dt;
    if (this.whisperT <= 0) {
      this.whisperT = 14 + Math.random() * 20;
      if (player.fear > 45 || (this.shepherd?.active && this.shepherd.pos.distanceTo(player.pos) < 26)) {
        this.audio.play('whisper', 0.5 + player.fear / 200);
      }
    }

    // danger meter
    let danger = 0;
    if (this.shepherd?.active) {
      const d = this.shepherd.pos.distanceTo(player.pos);
      danger = clamp(1 - d / 30, 0, 1);
      if (this.shepherd.state === 'chase') danger = Math.max(danger, 0.75);
    }
    danger = Math.max(danger, player.fear / 160);
    this.audio.danger += (danger - this.audio.danger) * clamp(dt * 2, 0, 1);

    // versus timer
    if (this.mode === 'versus') {
      this.timeLeft -= dt;
      if (this.isHost || this.net.socket === null) { /* authoritative-ish */ }
      if (this.timeLeft <= 0 && !this.gameEnded) {
        this.endGame(!this.net.isShepherd, 'Dawn breaks. The lantern flickers out.');
      }
    }

    // win check: through the gate
    if (quests.state.gateOpen && player.pos.z > 56.5 && !this.escapedSent && !this.net.isShepherd) {
      this.escapedSent = true;
      if (this.mode === 'sp') this.endGame(true, 'You crossed the treeline as the bell fell silent.');
      else {
        this.net.sendGame('escaped', {});
        this.endGame(true, 'You escaped the vale.');
      }
    }
    // versus: monster kills all? handled by server gameover event

    // networking
    if (this.mode !== 'sp' && this.net.connected) {
      this.sendT -= dt;
      if (this.sendT <= 0) {
        this.sendT = 0.08;
        this.net.sendState(player.serialize());
      }
      this.net.update(dt);
    }

    // HUD
    const alive = this.net.lastSnap?.players.filter(p => !p.dead).length ?? 1;
    this.ui.updateHUD(player, quests, {
      versus: this.mode === 'versus',
      timeLeft: this.timeLeft,
      isMonster: this.mode === 'versus' && this.net.isShepherd,
      coopAlive: this.mode === 'coop' ? alive : undefined,
      coopTotal: this.mode === 'coop' ? (this.net.lastSnap?.players.length ?? 1) : undefined,
    });

    // pending note modal
    if (this.pendingNote && this.state === 'playing') {
      const note = this.pendingNote;
      this.pendingNote = null;
      this.state = 'note';
      this.audio.play('paper', 0.5);
      this.ui.showNote(note, () => { this.state = 'playing'; if (!this.isTouch()) setTimeout(() => this.input.requestLock(), 50); });
    }
  }
  private _attackHeld = false;
  private isTouchHeld() { return false; }

  private spawnHallucination() {
    if (!this.player) return;
    if (!this.halluc) {
      const geo = new THREE.CapsuleGeometry(0.3, 1.4, 3, 6);
      const mat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.7, fog: true });
      this.halluc = new THREE.Mesh(geo, mat);
      this.halluc.scale.y = 1.5;
    }
    const ang = Math.random() * Math.PI * 2;
    const d = 7 + Math.random() * 4;
    this.halluc.position.set(this.player.pos.x + Math.cos(ang) * d, 1.6, this.player.pos.z + Math.sin(ang) * d);
    (this.halluc.material as THREE.MeshBasicMaterial).opacity = 0.75;
    this.hallucT = 0.7;
    this.scene.add(this.halluc);
    this.audio.play('whisper', 0.7);
  }
}

function frame(): Promise<void> { return new Promise(r => requestAnimationFrame(() => r())); }

let booted = false;
export function launch(container: HTMLElement) {
  if (booted) return;
  booted = true;
  const g = new Game(container);
  g.wireNet();
  (window as unknown as Record<string, unknown>).hvGame = g;
  void g;
}
