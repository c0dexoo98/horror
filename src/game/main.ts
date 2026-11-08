// HOLLOW VALE — main orchestrator: game states, loop, combat, networking, saves,
// weather + lightning, post-processing, ghosts, camera/radio, merchant, loot, electric water
import * as THREE from 'three';
import {
  AudioEngine, Input, loadSettings, saveSettings, loadSPProgress, saveSPProgress, clearSPProgress,
  clamp, EnvState, getSpriteTexture, type Settings,
} from './core';
import { buildWorld, resolveCollisions, type WorldRefs, type Interactable as InteractableEntry } from './world';
import { Player, WEAPONS, type HitTarget, type WeaponId } from './player';
import { Shepherd, Mother, Husk, HUSK_SPAWNS, MOTHER_SPAWN, makeGraveHusk, setHuskScene, type StalkerPlayer } from './monster';
import { Quests, NOTES, type NoteDef } from './quests';
import { UI } from './ui';
import { makeHumanoid, animIdle, type Humanoid } from './characters';
import { NetClient, type Snapshot } from './net';

type GameState = 'menu' | 'loading' | 'playing' | 'paused' | 'dead' | 'note' | 'win' | 'overlay';
type Mode = 'sp' | 'coop' | 'versus';

const TIPS = [
  'they hear everything',
  'crouch to move in silence',
  'hold your breath when they are close',
  'the torch is a beacon — and a comfort',
  'gunshots buy seconds, not safety',
  'three flames, three calls',
  'the lens shows what the eye denies',
  'static gathers where they walk',
  'the crows know before you do',
  'water carries lightning',
  'the bell remembers who drowned it',
];

interface Projectile { mesh: THREE.Mesh; vel: THREE.Vector3; t: number; kind: 'grenade' | 'bottle' | 'brick' }
interface CandleRef { light: THREE.PointLight; flame: THREE.Sprite; t: number }
interface GhostRef { humanoid: Humanoid; anchor: THREE.Vector3; t: number; hiddenT: number; captured: boolean }

/* ---------------- post-processing (film grain, vignette, CA, blur, filters) ---------------- */
const POST_VERT = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;
const POST_FRAG = `
varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uTime, uGrain, uVig, uCA, uBlur, uFlash, uDamage, uFear, uPoison, uCamMode;
float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec2 uv = vUv;
  uv += vec2(sin(uv.y * 18.0 + uTime * 2.2), cos(uv.x * 15.0 + uTime * 1.7)) * (uFear * 0.0045);
  vec2 center = uv - 0.5;
  float r2 = dot(center, center);
  vec3 col;
  if (uBlur > 0.02) {
    col = vec3(0.0);
    for (int i = 0; i < 5; i++) {
      float t = float(i) / 4.0;
      col += texture2D(tDiffuse, uv - center * uBlur * 0.055 * t).rgb;
    }
    col /= 5.0;
  } else {
    col = texture2D(tDiffuse, uv).rgb;
  }
  float ca = uCA * (0.4 + r2 * 2.2);
  col.r = texture2D(tDiffuse, uv + center * ca).r;
  col.b = texture2D(tDiffuse, uv - center * ca).b;
  col += (rand(uv * (1.0 + fract(uTime) * 7.0)) - 0.5) * uGrain;
  float vig = smoothstep(0.92, 0.22, r2 * (1.0 + uVig * 1.6));
  col *= mix(1.0, vig, clamp(uVig + 0.25, 0.0, 1.0));
  col = mix(col, col * vec3(0.72, 1.08, 0.78), uPoison * 0.7);
  col = mix(col, vec3(0.42, 0.03, 0.03), uDamage * smoothstep(0.04, 0.5, r2));
  if (uCamMode > 0.01) {
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 sepia = vec3(lum) * vec3(1.18, 1.02, 0.78);
    col = mix(col, sepia, uCamMode * 0.94);
    col += (rand(uv * 3.7 + uTime) - 0.5) * 0.16 * uCamMode;
    col *= 1.0 - smoothstep(0.12, 0.55, r2) * 0.6 * uCamMode;
  }
  col += vec3(uFlash);
  gl_FragColor = vec4(col, 1.0);
}
`;

/* ---------------- world-space decals (bullet holes / blood) ---------------- */
class DecalManager {
  private pool: THREE.Mesh[] = [];
  private idx = 0;
  constructor(scene: THREE.Scene, private holeTex: THREE.Texture, private bloodTex: THREE.Texture) {
    const geo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 44; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        map: holeTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
      }));
      m.visible = false;
      scene.add(m);
      this.pool.push(m);
    }
  }
  place(pos: THREE.Vector3, normal: THREE.Vector3, kind: 'hole' | 'blood') {
    const m = this.pool[this.idx];
    this.idx = (this.idx + 1) % this.pool.length;
    const mat = m.material as THREE.MeshBasicMaterial;
    mat.map = kind === 'hole' ? this.holeTex : this.bloodTex;
    mat.needsUpdate = true;
    m.position.copy(pos).addScaledVector(normal, 0.02);
    const look = pos.clone().add(normal);
    m.lookAt(look);
    const s = kind === 'hole' ? 0.16 + Math.random() * 0.07 : 1.1 + Math.random() * 0.9;
    m.scale.setScalar(s);
    if (kind === 'blood') m.rotation.z = Math.random() * Math.PI * 2;
    m.visible = true;
  }
}

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
  private mother: Mother | null = null;
  private husks: Husk[] = [];
  private quests: Quests | null = null;
  private projectiles: Projectile[] = [];
  private halluc: THREE.Mesh | null = null;
  private hallucT = 0;
  private whisperT = 8;
  private decals: DecalManager | null = null;
  private candles: CandleRef[] = [];
  private ghosts: GhostRef[] = [];
  private merchant: Humanoid | null = null;
  private graveTriggered = false;
  private electrified = new Map<number, number>(); // puddle index -> seconds left
  private doorHits = new Map<string, number>();
  private lootStock: Record<string, Record<string, number>> = {};

  state: GameState = 'menu';
  private mode: Mode = 'sp';
  private camMode: 'first' | 'third' = 'third';
  private timeLeft = 720;
  private sendT = 0;
  private playTime = 0;
  private monsterHp = 500;
  private netPlayerId = 'p0';
  private isHost = false;
  private downedBleed = 0;
  private respawnTimer = -1;
  private escapedSent = false;
  private gameEnded = false;
  private overlayOpen = false;
  private overlayName: 'map' | 'quest' | 'radio' | 'trade' | null = null;

  // camera item (feature 50)
  private camView = false;
  private cameraFilm = 0;
  private radioFreq = 94.7;
  private radioMsgT = 0;

  // weather (features 14/111/119)
  private weatherT = 20;
  private weatherPhase: 'clear' | 'mist' | 'rain' | 'storm' = 'clear';
  private rain: THREE.Points | null = null;
  private rainPos: Float32Array | null = null;
  private lightningT = 8;
  private flashV = 0;
  private flashBoost = 0;

  // post-processing
  private rt: THREE.WebGLRenderTarget | null = null;
  private postScene = new THREE.Scene();
  private postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private postUniforms = {
    tDiffuse: { value: null as THREE.Texture | null },
    uTime: { value: 0 }, uGrain: { value: 0.045 }, uVig: { value: 0.5 }, uCA: { value: 0.0016 },
    uBlur: { value: 0 }, uFlash: { value: 0 }, uDamage: { value: 0 }, uFear: { value: 0 },
    uPoison: { value: 0 }, uCamMode: { value: 0 },
  };
  private postEnabled = false;
  private damageV = 0;

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
    this.buildPostFX();

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
      onToggleOverlay: (name) => this.toggleOverlay(name),
      onCycleWeapon: () => this.cycleWeapon(),
      onRadioTune: (f) => { this.radioFreq = f; this.radioMsgT = 0; },
    });
    this.ui.onSprintToggle = () => { /* sprint handled via input.buttons */ };

    this.input.onKeyExtra = (code) => this.onKey(code);
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.state === 'playing' && !this.isTouch() && !this.overlayOpen) this.pause();
    });
    window.addEventListener('blur', () => { if (this.state === 'playing') this.pause(); });

    this.renderer.domElement.addEventListener('click', () => {
      this.audio.ensure();
      if (this.state === 'playing' && !this.isTouch() && !this.overlayOpen) this.input.requestLock();
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
    this.renderer.toneMappingExposure = 1.22;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.postEnabled = q !== 'low';
    this.resize();
  }

  private buildPostFX() {
    const mat = new THREE.ShaderMaterial({
      uniforms: this.postUniforms,
      vertexShader: POST_VERT,
      fragmentShader: POST_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    quad.frustumCulled = false;
    this.postScene.add(quad);
  }

  private resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    if (this.postEnabled) {
      const v = new THREE.Vector2();
      this.renderer.getDrawingBufferSize(v);
      if (!this.rt) this.rt = new THREE.WebGLRenderTarget(Math.max(2, v.x), Math.max(2, v.y));
      else this.rt.setSize(Math.max(2, v.x), Math.max(2, v.y));
    }
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
    if (this.state === 'overlay') {
      if (code === 'KeyM' || code === 'KeyJ' || code === 'KeyU' || code === 'Escape' || code === 'T_pause') this.closeOverlay();
      return;
    }
    if (this.state === 'playing' && this.player) {
      switch (code) {
        case 'KeyE': case 'T_interact': this.tryInteract(); break;
        case 'KeyR': case 'T_reload': if (this.player) { this.player.reload(this.audio); } break;
        case 'KeyF': case 'T_flash': this.player.toggleFlashlight(this.audio); break;
        case 'KeyQ': case 'T_grenade': this.throwGrenade(); break;
        case 'KeyH': case 'T_heal': this.autoHeal(); break;
        case 'KeyV': case 'T_cam': this.camMode = this.camMode === 'first' ? 'third' : 'first'; break;
        case 'KeyG': case 'T_throw': this.throwSupply(); break;
        case 'KeyT': this.placeCandle(); break;
        case 'KeyX': this.useCables(); break;
        case 'KeyI': this.toggleCameraView(); break;
        case 'KeyM': this.toggleOverlay('map'); break;
        case 'KeyJ': this.toggleOverlay('quest'); break;
        case 'KeyU': this.toggleOverlay('radio'); break;
        case 'Digit1': this.switchWeapon('knife'); break;
        case 'Digit2': this.switchWeapon('pistol'); break;
        case 'Digit3': this.switchWeapon('rifle'); break;
        case 'Digit4': this.switchWeapon('axe'); break;
        case 'Digit5': this.switchWeapon('torch'); break;
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

  private cycleWeapon() {
    if (!this.player) return;
    const order: WeaponId[] = ['knife', 'pistol', 'rifle', 'axe', 'torch'];
    const owned = order.filter(w => this.player!.hasWeapon(w));
    if (owned.length < 2) return;
    const idx = owned.indexOf(this.player.current);
    this.switchWeapon(owned[(idx + 1) % owned.length]);
  }

  /* ---------------- overlays (map / journal / radio / trade) ---------------- */
  private toggleOverlay(name: 'map' | 'quest' | 'radio') {
    if (this.overlayOpen && this.overlayName === name) { this.closeOverlay(); return; }
    if (this.overlayOpen) this.closeOverlay();
    if (this.state !== 'playing' || !this.player || !this.quests) return;
    this.overlayOpen = true;
    this.overlayName = name;
    this.state = 'overlay';
    this.input.exitLock();
    const close = () => { this.closeOverlay(); };
    if (name === 'map') this.ui.openMap(close);
    else if (name === 'radio') { this.refreshRadio(); this.ui.openRadio(close); }
    else this.ui.showQuestLog(this.quests.getQuestLog(), close);
    this.audio.play('paper', 0.4);
  }
  private closeOverlay() {
    if (!this.overlayOpen) return;
    this.overlayOpen = false;
    this.overlayName = null;
    this.ui.show(null);
    if (this.state === 'overlay') this.state = 'playing';
    if (!this.isTouch()) setTimeout(() => this.input.requestLock(), 50);
  }
  private refreshRadio() {
    const near = this.nearestHunterDist();
    const level = near < 4 ? 5 : near < 8 ? 4 : near < 14 ? 3 : near < 22 ? 2 : near < 34 ? 1 : 0;
    let msg: string | null = null;
    if (Math.abs(this.radioFreq - 94.7) < 0.15) msg = '. .. / 7 3 1 9 / the shed by the farm remembers';
    else if (Math.abs(this.radioFreq - 101.3) < 0.15) msg = '...do not let it ring again... we were starving...';
    else if (Math.abs(this.radioFreq - 88.3) < 0.15) msg = 'salt... three circles... at the old stones...';
    this.ui.setRadioData({ freq: this.radioFreq, level, message: msg });
  }
  private nearestHunterDist(): number {
    let d = 1e9;
    const p = this.player?.pos;
    if (!p) return 1e9;
    if (this.shepherd?.active) d = Math.min(d, this.shepherd.pos.distanceTo(p));
    if (this.mother?.active) d = Math.min(d, this.mother.pos.distanceTo(p));
    for (const h of this.husks) if (!h.dead) d = Math.min(d, h.pos.distanceTo(p));
    return d;
  }

  /* ---------------- camera item (feature 50 + 9) ---------------- */
  private toggleCameraView() {
    if (!this.player || (this.player.inv.camera || 0) <= 0) {
      this.ui.message('You have no camera');
      return;
    }
    if (this.camView) { this.camView = false; }
    else {
      if (this.cameraFilm <= 0) { this.ui.message('The film is spent'); return; }
      this.camView = true;
    }
    this.audio.play('click', 0.5);
    this.ui.setCameraMode(this.camView, this.cameraFilm);
  }

  private updateGhosts(dt: number) {
    if (!this.player || !this.world) return;
    const p = this.player;
    for (const g of this.ghosts) {
      g.t += dt;
      if (g.hiddenT > 0) g.hiddenT -= dt;
      // drift in a slow circle around the anchor
      const a = g.t * 0.05;
      const h = g.humanoid;
      h.group.position.set(g.anchor.x + Math.cos(a) * 1.6, 0.05 + Math.sin(g.t * 0.7) * 0.06, g.anchor.z + Math.sin(a) * 1.6);
      h.group.rotation.y = a + Math.PI / 2;
      animIdle(h, g.t);
      // visible only through the lens (or the mirror)
      const nearMirror = h.group.position.distanceTo(this.world.mirrorPos) < 4.5;
      const lookingAtMirror = p.pos.distanceTo(this.world.mirrorPos) < 5.5 &&
        new THREE.Vector3().subVectors(this.world.mirrorPos, p.pos).normalize()
          .dot(new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw))) > 0.4;
      const visible = this.camView || (nearMirror && lookingAtMirror);
      h.group.visible = visible && g.hiddenT <= 0;
      if (visible && g.hiddenT <= 0) {
        const d = h.group.position.distanceTo(p.pos);
        if (d < 12) {
          this.whisperT -= dt * 2.5;
          if (Math.random() < dt * 0.25) this.audio.play3d('whisper', p.pos, p.yaw, h.group.position, 0.5);
        }
      }
    }
  }

  private photograph() {
    if (!this.player) return;
    if (this.cameraFilm <= 0) { this.ui.message('The film is spent'); this.camView = false; this.ui.setCameraMode(false, 0); return; }
    this.cameraFilm--;
    this.audio.play('shutter', 0.8);
    this.ui.setCameraMode(this.camView, this.cameraFilm);
    // did we capture a ghost?
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.player.camera.quaternion);
    for (const g of this.ghosts) {
      if (g.hiddenT > 0) continue;
      const gp = g.humanoid.group.position.clone().add(new THREE.Vector3(0, 1.2, 0));
      const to = gp.clone().sub(this.player.eyePos);
      const d = to.length();
      if (d < 20 && to.normalize().dot(camDir) > 0.93) {
        g.hiddenT = 30;
        this.player.calmFear(35);
        this.audio.play('chime', 0.6);
        this.ui.message('The lens drank its image. You feel lighter.', false);
        return;
      }
    }
    this.ui.message('Nothing but the dark on this frame', false);
  }

  /* ---------------- weather / lightning (14, 119) ---------------- */
  private stepWeather(dt: number) {
    this.weatherT -= dt;
    if (this.weatherT <= 0) {
      const order: Record<string, 'mist' | 'rain' | 'storm' | 'clear'> = {
        clear: 'mist', mist: 'rain', rain: 'storm', storm: 'clear',
      };
      this.weatherPhase = order[this.weatherPhase];
      this.weatherT = this.weatherPhase === 'clear' ? 70 + Math.random() * 50
        : this.weatherPhase === 'mist' ? 40
          : this.weatherPhase === 'rain' ? 55 + Math.random() * 35 : 30 + Math.random() * 25;
    }
    const targetRain = this.weatherPhase === 'rain' ? 0.55 : this.weatherPhase === 'storm' ? 1 : 0;
    const targetStorm = this.weatherPhase === 'storm' ? 1 : 0;
    EnvState.rain += (targetRain - EnvState.rain) * clamp(dt * 0.35, 0, 1);
    EnvState.storm += (targetStorm - EnvState.storm) * clamp(dt * 0.3, 0, 1);
    this.audio.setRain(EnvState.rain);
    this.world?.setEnv(EnvState.rain, EnvState.storm);

    // rain particles follow the player
    if (this.rain && this.rainPos && this.player) {
      const n = this.rainPos.length / 3;
      const fall = 24 * dt;
      for (let i = 0; i < n; i++) {
        let y = this.rainPos[i * 3 + 1] - fall;
        if (y < 0) {
          y = 16 + Math.random() * 3;
          this.rainPos[i * 3] = (Math.random() - 0.5) * 34;
          this.rainPos[i * 3 + 2] = (Math.random() - 0.5) * 34;
        }
        this.rainPos[i * 3 + 1] = y;
      }
      (this.rain.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      this.rain.position.set(this.player.pos.x, 0, this.player.pos.z);
      (this.rain.material as THREE.PointsMaterial).opacity = 0.06 + EnvState.rain * 0.4;
      this.rain.visible = EnvState.rain > 0.04;
    }

    // lightning (feature 119)
    if (EnvState.storm > 0.5) {
      this.lightningT -= dt;
      if (this.lightningT <= 0) {
        this.lightningT = 5 + Math.random() * 9;
        this.flashV = 0.85 + Math.random() * 0.15;
        this.flashBoost = 0.18;
        const delay = 350 + Math.random() * 1200;
        setTimeout(() => this.audio.play('thunder', 0.9), delay);
        // strike water: anything standing in a puddle gets a shock
        if (this.world) {
          for (let i = 0; i < this.world.puddles.length; i++) {
            const pd = this.world.puddles[i];
            const hit = (m: { pos: THREE.Vector3 }) => m.pos.distanceTo(pd.pos) < pd.radius + 0.6;
            if (this.shepherd?.active && hit(this.shepherd)) { this.shepherd.knockdown(4.5); this.audio.play('sizzle', 0.7); }
            if (this.mother?.active && hit(this.mother)) { this.mother.knockdown(4.5); this.audio.play('sizzle', 0.7); }
            for (const h of this.husks) if (!h.dead && hit(h)) h.onHit(45);
          }
        }
      }
    }
    // flash decay handled once in loop()
    if (this.world) {
      const base = 1.05 - EnvState.storm * 0.3;
      this.world.moonLight.intensity = base + this.flashBoost * 4;
    }
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
      this.player!.weapons = (save.weapons.filter(w => w === 'knife' || w === 'pistol' || w === 'rifle' || w === 'axe' || w === 'torch')) as WeaponId[];
      if (this.player!.weapons.length === 0) this.player!.weapons = ['knife'];
      this.quests!.restore({ ...save.flags, notesRead: save.notes } as never);
      this.playTime = save.playTime || 0;
      const st = save.stats || {};
      if (st.batteryType === 1) this.player!.batteryType = 'lith';
      else if (st.batteryType === 2) this.player!.batteryType = 'nuc';
      this.player!.ritualBlessed = !!st.ritualBlessed;
      this.cameraFilm = st.cameraFilm || 0;
      this.graveTriggered = !!st.graveTriggered;
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
    if (this.mother) { this.scene.remove(this.mother.mesh()); this.mother = null; }
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    this.projectiles = [];
    for (const c of this.candles) { this.scene.remove(c.light); this.scene.remove(c.flame); }
    this.candles = [];
    for (const g of this.ghosts) this.scene.remove(g.humanoid.group);
    this.ghosts = [];
    if (this.merchant) { this.scene.remove(this.merchant.group); this.merchant = null; }
    this.graveTriggered = false;
    this.electrified.clear();
    this.doorHits.clear();
    this.net.clearRemotes();

    this.ui.loading(0.3, 'raising the houses...');
    await frame();
    this.world = buildWorld(this.scene, this.settings.quality);
    this.ui.loading(0.62, 'waking the dead...');
    await frame();

    this.decals = new DecalManager(this.scene, getSpriteTexture('hole'), getSpriteTexture('blood'));

    // rain particles
    const RAIN_N = this.settings.quality === 'low' ? 350 : 800;
    this.rainPos = new Float32Array(RAIN_N * 3);
    for (let i = 0; i < RAIN_N; i++) {
      this.rainPos[i * 3] = (Math.random() - 0.5) * 34;
      this.rainPos[i * 3 + 1] = Math.random() * 18;
      this.rainPos[i * 3 + 2] = (Math.random() - 0.5) * 34;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(this.rainPos, 3));
    this.rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({
      map: getSpriteTexture('rain'), size: 0.85, transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true,
    }));
    this.rain.visible = false;
    this.scene.add(this.rain);

    // ghosts (feature 9) — visible only through the antique camera / mirror
    for (const anchor of [new THREE.Vector3(1.6, 0, -33), new THREE.Vector3(-36, 0, -39)]) {
      const gh = makeHumanoid({ face: 'ghost', outfit: 'robe', skin: '#cfd4dc', scale: 1.04, glowEyes: false });
      gh.group.traverse(o => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.transparent = true;
          mat.opacity = 0.4;
          mat.depthWrite = false;
          mat.emissive = new THREE.Color(0x1a2028);
          mat.emissiveIntensity = 0.5;
        }
      });
      gh.group.visible = false;
      this.scene.add(gh.group);
      this.ghosts.push({ humanoid: gh, anchor, t: Math.random() * 20, hiddenT: 0, captured: false });
    }

    this.player = new Player(this.scene);
    this.player.id = this.netPlayerId;
    this.player.name = this.settings.playerName;
    this.player.onNoise = (pos, r) => {
      if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
        this.shepherd?.hear(pos, r);
        this.mother?.hear(pos, r);
        for (const h of this.husks) h.hear(pos, r);
      } else {
        this.net.sendNoise(pos.x, pos.z, r);
      }
    };
    this.player.onDamage = () => {
      this.ui.flashDamage();
      this.damageV = 0.85;
      this.audio.play('flesh', 0.8);
      if (this.decals && this.player) this.decals.place(new THREE.Vector3(this.player.pos.x + (Math.random() - 0.5), 0.03, this.player.pos.z + (Math.random() - 0.5)), new THREE.Vector3(0, 1, 0), 'blood');
      if (this.player && this.player.downed) {
        this.downedBleed = 60;
        this.ui.message(this.mode === 'versus' ? 'You are dying...' : 'You are down — crawl to a friend', true);
      }
    };
    this.player.onBulletImpact = (pos, normal) => this.decals?.place(pos, normal, 'hole');
    this.player.onCandlePlace = (pos) => this.spawnCandle(pos);

    this.shepherd = new Shepherd(this.scene);
    this.shepherd.controlled = false;
    this.mother = new Mother(this.scene);
    this.mother.controlled = false;

    for (const p of HUSK_SPAWNS) this.husks.push(new Husk({ pos: p }));

    // merchant (feature 56)
    this.merchant = makeHumanoid({ face: 'merchant', outfit: 'apron', hair: 'hat', skin: '#8a7f70', scale: 1.02 });
    this.merchant.group.position.copy(this.world.merchantPos);
    this.merchant.group.rotation.y = Math.PI;
    this.scene.add(this.merchant.group);
    this.world.interactables.push({
      id: 'peddler', pos: this.world.merchantPos.clone().setY(1.2), radius: 2.8, prompt: 'Trade with the peddler', enabled: true,
      onInteract: () => this.openTrade(),
    });

    // loot crates (feature 55)
    this.lootStock = {
      green: { cloth: 2, bottle: 1, bandage: 1 },
      blue: { bandage: 1, ammo_pistol: 6, battery: 1, brick: 1 },
      purple: { ammo_rifle: 4, pills: 2, battery_lith: 1, grenade: 1 },
      gold: { ammo_rifle: 4, bandage: 2, battery_nuc: 1, grenade: 2, trinket: 2 },
    };
    this.world.lootCrates.forEach((c, i) => {
      const it: InteractableEntry | undefined = this.world!.interactables.find(x => x.id === c.id);
      if (it) it.onInteract = () => this.openCrate(i);
    });

    this.ui.loading(0.85, 'binding the curse...');
    await frame();
    const hooks = {
      message: (t: string, big?: boolean) => this.ui.message(t, big),
      subtitle: (t: string, d?: number) => this.ui.subtitle(t, d),
      onNoise: (pos: THREE.Vector3, r: number) => {
        if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
          this.shepherd?.hear(pos, r);
          this.mother?.hear(pos, r);
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

  private spawnCandle(pos: THREE.Vector3) {
    if (this.candles.length >= 4) {
      const old = this.candles.shift()!;
      this.scene.remove(old.light);
      this.scene.remove(old.flame);
    }
    const light = new THREE.PointLight(0xffb060, 3.5, 7, 1.8);
    light.position.copy(pos).add(new THREE.Vector3(0, 0.25, 0));
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({
      map: getSpriteTexture('flame'), transparent: true, depthWrite: false, opacity: 0.9,
    }));
    flame.scale.setScalar(0.3);
    flame.position.copy(light.position);
    this.scene.add(light, flame);
    this.candles.push({ light, flame, t: 480 });
    this.audio.play('brazier', 0.3);
    this.ui.message('A candle keeps the dread at arm\'s length');
  }

  private openCrate(i: number) {
    if (!this.world || !this.player) return;
    const crate = this.world.lootCrates[i];
    if (!crate || crate.opened) return;
    crate.opened = true;
    const it = this.world.interactables.find(x => x.id === crate.id);
    if (it) { it.used = true; it.enabled = false; }
    const stock = this.lootStock[crate.rarity] || {};
    const keys = Object.keys(stock);
    const give: Record<string, number> = {};
    const n = 2 + Math.floor(Math.random() * 2);
    for (let k = 0; k < n && keys.length; k++) {
      const key = keys.splice(Math.floor(Math.random() * keys.length), 1)[0];
      give[key] = stock[key];
    }
    for (const [k, v] of Object.entries(give)) {
      this.player.inv[k] = (this.player.inv[k] || 0) + v;
    }
    if (give.ammo_pistol) this.player.mag.pistol = Math.min(WEAPONS.pistol.magSize, this.player.mag.pistol);
    this.audio.play('pickup', 0.7);
    const names = Object.entries(give).map(([k, v]) => `${k.replace('_', ' ')} x${v}`).join(', ');
    const rarityLabel = crate.rarity === 'gold' ? 'GOLD cache' : crate.rarity === 'purple' ? 'violet cache' : crate.rarity === 'blue' ? 'blue cache' : 'worn cache';
    this.ui.message(`${rarityLabel}: ${names}`, crate.rarity === 'gold' || crate.rarity === 'purple');
  }

  private openTrade() {
    if (!this.player) return;
    const t = this.player.inv.trinket || 0;
    const trades = [
      { label: `Bandage — 1 trinket (you have ${t})`, afford: t >= 1, give: { bandage: 1 }, cost: 1 },
      { label: `Revolver Ammo x6 — 1 trinket`, afford: t >= 1, give: { ammo_pistol: 6 }, cost: 1 },
      { label: `Nightshade Sprig — 1 trinket`, afford: t >= 1, give: { herb: 1 }, cost: 1 },
      { label: `Lithium Cell — 2 trinkets`, afford: t >= 2, give: { battery_lith: 1 }, cost: 2 },
      { label: `Morphine Pills — 1 trinket`, afford: t >= 1, give: { pills: 1 }, cost: 1 },
      { label: `Fresh Candle — 1 trinket`, afford: t >= 1, give: { candle: 1 }, cost: 1 },
    ];
    this.ui.showTrade(
      trades.map(x => ({ label: x.label, afford: x.afford })),
      (i) => {
        const deal = trades[i];
        if (!deal || (this.player!.inv.trinket || 0) < deal.cost) return;
        this.player!.inv.trinket -= deal.cost;
        for (const [k, v] of Object.entries(deal.give)) this.player!.inv[k] = (this.player!.inv[k] || 0) + v;
        this.audio.play('pickup', 0.6);
        this.openTrade(); // re-render with new stock
      },
      () => { /* closed */ },
    );
    if (this.state === 'playing') {
      this.overlayOpen = true;
      this.overlayName = 'trade';
      this.state = 'overlay';
      this.input.exitLock();
    }
  }

  /* ---------------- electric water (feature 37) ---------------- */
  private useCables() {
    if (!this.player || !this.world) return;
    if ((this.player.inv.cables || 0) <= 0) { this.ui.message('You have no splice cables'); return; }
    let bestI = -1, bestD = 3.6;
    this.world.puddles.forEach((pd, i) => {
      const d = pd.pos.distanceTo(this.player!.pos);
      if (d < bestD) { bestD = d; bestI = i; }
    });
    if (bestI < 0) { this.ui.message('No water here to splice into'); return; }
    this.player.inv.cables--;
    this.electrified.set(bestI, 25);
    const mat = this.world.puddles[bestI].mesh.material as THREE.MeshStandardMaterial;
    mat.emissive = new THREE.Color(0x2affd8);
    this.audio.play('sizzle', 0.8);
    this.ui.message('The water hums with current — lure them in', true);
  }

  private stepElectric(dt: number) {
    if (!this.world) return;
    for (const [i, tLeft] of [...this.electrified.entries()]) {
      const nt = tLeft - dt;
      if (nt <= 0) {
        this.electrified.delete(i);
        const mat = this.world.puddles[i].mesh.material as THREE.MeshStandardMaterial;
        mat.emissive = new THREE.Color(0x000000);
      } else {
        this.electrified.set(i, nt);
        if (Math.random() < dt * 2) this.audio.play3d('sizzle', this.player?.pos ?? null, this.player?.yaw ?? 0, this.world.puddles[i].pos, 0.25);
      }
    }
    const check = (m: { pos: THREE.Vector3 }, shock: () => void) => {
      for (const [i, tLeft] of this.electrified) {
        const pd = this.world!.puddles[i];
        if (tLeft > 0 && m.pos.distanceTo(pd.pos) < pd.radius + 0.5) { shock(); break; }
      }
    };
    if (this.shepherd?.active) check(this.shepherd, () => { if (this.shepherd!.state !== 'down') { this.shepherd!.knockdown(8); this.audio.play('sizzle', 0.9); this.ui.message('The Shepherd convulses in the charged water', false); } });
    if (this.mother?.active) check(this.mother, () => { if (this.mother!.state !== 'down') { this.mother!.knockdown(8); this.audio.play('sizzle', 0.9); this.ui.message('The Mother collapses in the charged water', false); } });
    for (const h of this.husks) {
      if (h.dead) continue;
      check(h, () => h.onHit(60));
    }
  }

  /* ---------------- crows (feature 13) ---------------- */
  private stepCrows() {
    if (!this.world) return;
    for (const c of this.world.crowSpots) {
      if (c.flown) continue;
      const near = this.nearestHunterDistTo(c.pos);
      if (near < 14) {
        c.fly();
        this.audio.play('crow', 0.75);
      }
    }
  }
  private nearestHunterDistTo(pos: THREE.Vector3): number {
    let d = 1e9;
    if (this.shepherd?.active) d = Math.min(d, this.shepherd.pos.distanceTo(pos));
    if (this.mother?.active) d = Math.min(d, this.mother.pos.distanceTo(pos));
    return d;
  }

  /* ---------------- grave husks (feature 11) ---------------- */
  private stepGraves() {
    if (!this.world || !this.player || this.graveTriggered) return;
    const a = this.world.graveArea;
    const p = this.player.pos;
    if (p.x > a.minX && p.x < a.maxX && p.z > a.minZ && p.z < a.maxZ) {
      this.graveTriggered = true;
      const pts = [...this.world.gravePoints].sort(() => Math.random() - 0.5).slice(0, 3);
      for (const pt of pts) {
        const h = makeGraveHusk(pt.clone());
        this.husks.push(h);
      }
      this.audio.play('scare', 0.9);
      this.ui.subtitle('The ground gives them back. Walk softly among the graves.', 5);
    }
  }

  /* ---------------- stealth kill (feature 36) ---------------- */
  /* the onStealthKill callback is bound to the specific husk in tryInteract() */

  private stealthPrompt(): string | null {
    if (!this.player || !this.quests) return null;
    if (this.player.current !== 'knife' || this.player.stealthKillT > 0) return null;
    for (const h of this.husks) {
      if (h.dead) continue;
      const d = h.pos.distanceTo(this.player.pos);
      if (d > 1.8) continue;
      // must be behind the husk and it must be unaware
      const fwd = new THREE.Vector3(Math.sin(h.group.rotation.y), 0, Math.cos(h.group.rotation.y));
      const to = new THREE.Vector3().subVectors(this.player.pos, h.pos).normalize();
      if (fwd.dot(to) > 0.45 && h.target.distanceTo(h.pos) > 3) return 'E — Silent kill';
    }
    return null;
  }

  /* ---------------- begin play ---------------- */
  private beginPlay() {
    this.state = 'playing';
    this.gameEnded = false;
    this.escapedSent = false;
    this.overlayOpen = false;
    this.ui.show(null);
    this.ui.setHUDEnabled(true);
    this.ui.fadeIn();
    if (!this.isTouch()) setTimeout(() => this.input.requestLock(), 60);
    this.timeLeft = 720;
    if (this.mode === 'versus' && this.net.isShepherd) {
      this.shepherd!.spawn(new THREE.Vector3(0, 0, -40));
      this.shepherd!.controlled = true;
      this.shepherd!.active = true;
      this.shepherd!.group.visible = true;
      this.camMode = 'third';
      this.player!.pos.set(0, 0, -36);
      this.ui.message('You are THE SHEPHERD. Ring the bell one last time.', true);
    } else if (this.mode === 'versus') {
      this.shepherd!.despawn();
      this.mother!.despawn();
      this.player!.pos.set(0, 0, 52);
      this.ui.message('Survive. The Shepherd walks tonight.', true);
    } else {
      this.player!.pos.y = 0;
      this.shepherd!.despawn();
      this.mother!.despawn();
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
        if (data.what === 'remedy') this.ui.message('The remedy is brewed');
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
    // The Mother wakes at chapter IV in singleplayer (feature 1)
    if (this.mother && this.mode === 'sp') {
      if (stage >= 3 && !this.mother.active) {
        this.mother.spawn(MOTHER_SPAWN.clone());
        this.ui.subtitle('A second lantern? No — a long white dress drifts past the eastern fields.', 7);
        this.audio.play('coo', 0.8);
      }
      this.mother.rage = clamp(stage * 0.12, 0, 0.7);
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
        cloth: ['cloth', 1], splint: ['splint', 1], battery_lith: ['battery_lith', 1], battery_nuc: ['battery_nuc', 1],
        lockpick: ['lockpick', 1], camera: ['camera', 1], radio: ['radio', 1], candle: ['candle', 1],
        bottle: ['bottle', 1], brick: ['brick', 1], trinket: ['trinket', 1], cables: ['cables', 1],
        master_key: ['master_key', 1], salt: ['salt', 0],
      };
      if (amounts[type]) {
        const [key, n] = amounts[type];
        if (n > 0) this.player.inv[key] = (this.player.inv[key] || 0) + n;
        if (type === 'camera') this.cameraFilm = Math.max(this.cameraFilm, 8);
        this.audio.play('pickup', 0.5);
      } else if (type === 'church_key' || type === 'iron_key') {
        this.player.inv[type] = 1;
        this.audio.play('pickup', 0.6);
      } else if (type === 'amulet') {
        this.player.inv.amulet = 1;
        this.audio.play('bell', 0.4);
      } else if (type === 'torch' || type === 'axe') {
        this.player.giveWeapon(type as WeaponId);
        this.audio.play('craft', 0.6);
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

    // stealth kill first (feature 36)
    const sk = this.stealthPrompt();
    if (sk) {
      const target = this.husks.find(h => !h.dead && h.pos.distanceTo(p) < 1.8);
      if (target) {
        const husk = target;
        this.player.beginStealthKill(this.audio, husk.pos);
        this.player.onStealthKill = () => {
          husk.onHit(999);
          if (this.decals) this.decals.place(new THREE.Vector3(husk.pos.x, 0.03, husk.pos.z), new THREE.Vector3(0, 1, 0), 'blood');
          this.audio.play('stab', 0.8);
        };
        return;
      }
    }
    // loot corpses (feature 18)
    for (const h of this.husks) {
      if (h.dead && h.lootable && !h.looted && h.pos.distanceTo(p) < 2.2) {
        const loot = h.searchLoot();
        if (loot) {
          for (const [k, v] of Object.entries(loot)) this.player.inv[k] = (this.player.inv[k] || 0) + v;
          this.audio.play('paper', 0.5);
          this.ui.message('Searched the remains: ' + Object.entries(loot).map(([k, v]) => `${k} x${v}`).join(', '));
        }
        return;
      }
    }
    // axe breaks locked wooden doors (feature 22)
    if (this.player.current === 'axe') {
      for (const [did, door] of this.world.doors) {
        if (!door.locked) continue;
        if (did !== 'barn_storage' && did !== 'clinic_back') continue;
        if (Math.hypot(door.pivot.position.x - p.x, door.pivot.position.z - p.z) < 2.6) {
          const hits = (this.doorHits.get(did) || 0) + 1;
          this.doorHits.set(did, hits);
          this.audio.play('bang', 0.5);
          this.player.addShake(0.3, 0.15);
          if (hits >= 3) {
            door.locked = false;
            this.ui.message('The door bursts open under the axe', true);
          } else {
            this.ui.message(`The axe bites the wood (${hits}/3)`);
          }
          return;
        }
      }
    }

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
        onHit: (dmg, heavy) => {
          this.shepherd!.onHit(dmg, heavy, this.audio, this.player!.pos.clone(), this.player!.yaw);
          if (this.decals) this.decals.place(new THREE.Vector3(this.shepherd!.pos.x, 0.03, this.shepherd!.pos.z), new THREE.Vector3(0, 1, 0), 'blood');
        },
      });
    }
    if (this.mother && this.mother.active && !this.mother.controlled) {
      out.push({
        mesh: this.mother.mesh(),
        pos: () => new THREE.Vector3(this.mother!.pos.x, 1.45, this.mother!.pos.z),
        onHit: (dmg, heavy) => {
          this.mother!.onHit(dmg, heavy, this.audio, this.player!.pos.clone(), this.player!.yaw);
          if (this.decals) this.decals.place(new THREE.Vector3(this.mother!.pos.x, 0.03, this.mother!.pos.z), new THREE.Vector3(0, 1, 0), 'blood');
        },
      });
    }
    for (const h of this.husks) {
      if (h.dead) continue;
      out.push({
        mesh: h.mesh(), pos: () => h.chest(),
        onHit: (dmg) => {
          h.onHit(dmg);
          if (this.decals) this.decals.place(new THREE.Vector3(h.pos.x, 0.03, h.pos.z), new THREE.Vector3(0, 1, 0), 'blood');
        },
      });
    }
    return out;
  }

  private doAttack() {
    if (!this.player || this.state !== 'playing' || this.player.downed) return;
    if (this.mode === 'versus' && this.net.isShepherd) { this.shepherdAttack(); return; }
    // antique camera: LMB photographs
    if (this.camView) { this.photograph(); return; }
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.player.camera.quaternion);
    const result = this.player.fire(this.audio, this.targets(), this.world?.occluders || [], camDir);
    if (result === 'fired' || result === 'melee') {
      if (this.player.jammed && result === 'fired') this.ui.message('The gun JAMS — press R to clear it');
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
    this.projectiles.push({ mesh, vel: g.vel, t: 0, kind: 'grenade' });
  }

  private throwSupply() {
    if (!this.player || this.player.downed) return;
    const s = this.player.throwObject(this.audio);
    if (!s) { this.ui.message('Nothing to throw — find bottles or bricks'); return; }
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, s.kind === 'bottle' ? 0.16 : 0.1, 6),
      new THREE.MeshStandardMaterial({ color: s.kind === 'bottle' ? 0x4a6a5a : 0x6a4a3a, roughness: 0.5 })
    );
    mesh.position.copy(s.pos);
    this.scene.add(mesh);
    this.projectiles.push({ mesh, vel: s.vel, t: 0, kind: s.kind });
  }

  private placeCandle() {
    if (!this.player) return;
    if (!this.player.useItem('candle', this.audio)) this.ui.message('No candles left');
  }

  private autoHeal() {
    if (!this.player) return;
    if (this.player.statuses.bleeding > 0 && (this.player.inv.bandage || 0) > 0) this.player.useItem('bandage', this.audio);
    else if (this.player.statuses.poison > 0 && (this.player.inv.herb || 0) > 0) this.player.useItem('herb', this.audio);
    else if (this.player.statuses.brokenLeg > 0 && (this.player.inv.splint || 0) > 0) this.player.useItem('splint', this.audio);
    else if (this.player.health < 60 && (this.player.inv.bandage || 0) > 0) this.player.useItem('bandage', this.audio);
    else if ((this.player.inv.pills || 0) > 0) this.player.useItem('pills', this.audio);
    else if ((this.player.inv.bandage || 0) > 0) this.player.useItem('bandage', this.audio);
    else this.ui.message('Nothing left to ease the pain');
  }

  /* ---------------- monster vs local ---------------- */
  private monsterAttackLocal(dmg: number) {
    if (!this.player || this.player.dead) return;
    this.audio.play('scare', 0.9);
    const heavy = dmg >= 40;
    this.player.damage(dmg, true, heavy);
    // knockback
    const src = this.shepherd?.active ? this.shepherd : this.mother?.active ? this.mother : null;
    if (src) {
      const dir = new THREE.Vector3().subVectors(this.player.pos, src.pos).normalize();
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
      stats: {
        batteryType: this.player.batteryType === 'lith' ? 1 : this.player.batteryType === 'nuc' ? 2 : 0,
        ritualBlessed: this.player.ritualBlessed ? 1 : 0,
        cameraFilm: this.cameraFilm,
        graveTriggered: this.graveTriggered ? 1 : 0,
      },
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
    this.audio.setChase(0);
    if (this.player) { this.scene.remove(this.player.camera); this.player = null; }
    if (this.shepherd) { this.scene.remove(this.shepherd.mesh()); this.shepherd = null; }
    if (this.mother) { this.scene.remove(this.mother.mesh()); this.mother = null; }
    for (const h of this.husks) this.scene.remove(h.mesh());
    this.husks = [];
    if (this.world) { this.scene.remove(this.world.root); this.world = null; }
    this.quests = null;
    // rebuild menu screen state
    location.reload();
  }

  private respawn() {
    if (!this.player) return;
    // death has a price: half of the consumables are lost (feature 74)
    const consumables = ['bandage', 'pills', 'battery', 'battery_lith', 'battery_nuc', 'ammo_pistol', 'ammo_rifle',
      'grenade', 'bottle', 'brick', 'cloth', 'candle', 'herb', 'splint', 'salt'];
    for (const key of consumables) {
      const n = this.player.inv[key] || 0;
      if (n > 0) this.player.inv[key] = Math.floor(n / 2);
    }
    this.player.downed = false;
    this.player.dead = false;
    this.player.health = 50;
    this.player.fear = 45;
    this.player.statuses.bleeding = 0;
    this.player.statuses.poison = 0;
    this.player.pos.set(0, 0, -20);
    this.state = 'playing';
    this.ui.show(null);
    this.ui.message('You lost half your supplies to the dark', false);
    this.respawnTimer = -1;
  }

  private endGame(win: boolean, text: string) {
    if (this.gameEnded) return;
    this.gameEnded = true;
    this.state = 'win';
    this.audio.play(win ? 'win' : 'lose', 0.9);
    this.audio.setGrowl(0);
    this.audio.setChase(0);
    this.input.exitLock();
    const purified = this.quests?.state.ritualDone;
    const stats = [
      `Time in the vale: ${Math.floor(this.playTime / 60)}m ${Math.floor(this.playTime % 60)}s`,
      `Notes found: ${this.quests?.state.notesRead.length ?? 0} / ${NOTES.length}`,
      `Chapter reached: ${this.quests?.state.stage ?? 0} / 6`,
      purified ? 'The ritual of salts was completed' : '',
      this.mode !== 'sp' ? `Survivors: ${this.net.lastSnap?.players.filter(p => !p.dead).length ?? '?'}` : '',
    ].filter(Boolean).join('<br>');
    if (win) {
      const finalText = purified && text.includes('gate')
        ? 'The bell sleeps. You walked out of Hollow Vale alive — and free.'
        : text;
      this.ui.showWin(stats, finalText);
    } else {
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
    this.postUniforms.uTime.value = now * 0.001;

    if (this.state === 'playing' && this.player && this.world && this.quests) {
      this.playTime += dt;
      this.step(dt);
    } else if (this.world && this.player === null) {
      this.world.updateAmbient(dt, new THREE.Vector3(), this.playTime);
    }

    // post-processing uniforms
    if (this.player) {
      this.postUniforms.uBlur.value += ((this.player.sprinting ? 0.8 : 0) - this.postUniforms.uBlur.value) * clamp(dt * 6, 0, 1);
      const fearW = this.player.fear > 70 ? (this.player.fear - 70) / 30 : 0;
      this.postUniforms.uFear.value += (fearW - this.postUniforms.uFear.value) * clamp(dt * 3, 0, 1);
      this.postUniforms.uPoison.value += ((this.player.statuses.poison > 0 ? 1 : 0) - this.postUniforms.uPoison.value) * clamp(dt * 4, 0, 1);
      this.postUniforms.uVig.value = 0.45 + this.player.fear / 260 + (this.player.health < 35 ? 0.25 : 0);
    }
    this.flashV = Math.max(0, this.flashV - dt * 1.8);
    this.flashBoost = Math.max(0, this.flashBoost - dt * 0.9);
    this.damageV = Math.max(0, this.damageV - dt * 1.4);
    this.postUniforms.uFlash.value = this.flashV;
    this.postUniforms.uDamage.value = this.damageV;
    this.postUniforms.uCamMode.value += ((this.camView ? 1 : 0) - this.postUniforms.uCamMode.value) * clamp(dt * 8, 0, 1);

    // overlay live data (map redraw / radio static) — overlays pause step(), so drive them here
    if (this.overlayOpen && this.player && this.quests) {
      if (this.overlayName === 'map') {
        this.ui.setMapData({ px: this.player.pos.x, pz: this.player.pos.z, yaw: this.player.yaw, target: this.quests.currentTarget(), visited: this.mapVisited });
      } else if (this.overlayName === 'radio') {
        this.refreshRadio();
      }
    }

    // render
    const cam = this.player ? this.player.camera : this.menuCam;
    if (this.postEnabled && this.rt) {
      this.renderer.setRenderTarget(this.rt);
      this.renderer.render(this.scene, cam);
      this.renderer.setRenderTarget(null);
      this.postUniforms.tDiffuse.value = this.rt.texture;
      this.renderer.render(this.postScene, this.postCam);
    } else {
      this.renderer.render(this.scene, cam);
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
      if (this.perfTier === 2) {
        if (this.scene.fog instanceof THREE.FogExp2) this.scene.fog.density = 0.045;
        this.postEnabled = false; // drop post-processing under heavy load
      }
      this.resize();
    }
  }

  private step(dt: number) {
    const player = this.player!, world = this.world!, quests = this.quests!;

    world.updateAmbient(dt, player.pos, this.playTime);
    this.stepWeather(dt);
    this.stepElectric(dt);
    this.stepCrows();
    this.stepGraves();
    this.updateGhosts(dt);

    // merchant idle
    if (this.merchant) animIdle(this.merchant, this.playTime);

    // candles burn down
    for (let i = this.candles.length - 1; i >= 0; i--) {
      const c = this.candles[i];
      c.t -= dt;
      c.light.intensity = 3.5 * (0.85 + Math.random() * 0.3) * clamp(c.t / 30, 0, 1);
      c.flame.material.opacity = 0.9 * clamp(c.t / 30, 0, 1);
      if (c.t <= 0) {
        this.scene.remove(c.light);
        this.scene.remove(c.flame);
        this.candles.splice(i, 1);
      }
    }

    // darkness check: no flashlight and not near a lit lamp/brazier/candle
    let nearLight = false;
    for (const l of world.lamps) {
      if (l.light.position.distanceTo(player.pos) < 9) { nearLight = true; break; }
    }
    if (!nearLight) for (const b of world.braziers) {
      if (b.lit && b.pos3.distanceTo(player.pos) < 8) { nearLight = true; break; }
    }
    if (!nearLight) for (const c of this.candles) {
      if (c.light.position.distanceTo(player.pos) < 6) { nearLight = true; break; }
    }
    if (!nearLight && player.current === 'torch') nearLight = true; // carrying a lit torch
    const darkness = !player.flashlightOn && !nearLight;

    // monster visible? (any hunter)
    let monsterVisible = false;
    const visCheck = (pos: THREE.Vector3, headY: number) => {
      const d = pos.distanceTo(player.pos);
      if (d < 40) {
        const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(player.camera.quaternion);
        const to = new THREE.Vector3(pos.x, headY, pos.z).sub(player.eyePos).normalize();
        if (dir.dot(to) > 0.5) monsterVisible = true;
      }
    };
    if (this.shepherd && this.shepherd.active && this.shepherd.group.visible) visCheck(this.shepherd.pos, 2.3);
    if (this.mother && this.mother.active && this.mother.group.visible) visCheck(this.mother.pos, 2.1);

    const breathHold = this.input.down('KeyB') || this.input.down('breath');
    player.update(dt, this.input, world, this.audio, this.camMode, this.settings.sensitivity, this.settings.invertY, darkness, monsterVisible, false, { breathHold });

    // hand dynamo (feature 47)
    if (this.input.down('KeyN') || this.input.down('dynamo')) {
      player.chargeDynamo(dt, this.audio, (pos, r) => {
        if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
          this.shepherd?.hear(pos, r);
          this.mother?.hear(pos, r);
        } else this.net.sendNoise(pos.x, pos.z, r);
      });
    }

    // attack (mouse/touch hold)
    if (this.input.buttons['attack'] && !this.isTouchHeld()) {
      if (!this._attackHeld) { this._attackHeld = true; this.doAttack(); }
    } else if (this.input.buttons['attack'] && this.isTouchHeld()) {
      if (player.fireCd <= 0) this.doAttack();
    } else this._attackHeld = false;

    // interact prompt
    let prompt: string | null = this.stealthPrompt();
    const isMonsterPlayer = this.mode === 'versus' && this.net.isShepherd;
    if (!prompt && !isMonsterPlayer) {
      // corpse search prompt (18)
      for (const h of this.husks) {
        if (h.dead && h.lootable && !h.looted && h.pos.distanceTo(player.pos) < 2.2) { prompt = 'E — Search the remains'; break; }
      }
    }
    if (!prompt && !isMonsterPlayer) {
      for (const it of world.interactables) {
        if (!it.enabled || it.used) continue;
        const d = Math.hypot(it.pos.x - player.pos.x, it.pos.z - player.pos.z);
        if (d < it.radius) {
          const doorBehind = it.id.startsWith('door_');
          if (doorBehind) {
            const did = it.id.slice(5);
            const door = world.doors.get(did);
            if (door?.locked) {
              if (did === 'barn_storage' || did === 'clinic_back') prompt = player.current === 'axe' ? 'E — Break it down (axe)' : 'E — Locked (pick or axe)';
              else prompt = 'E — Locked';
            } else prompt = door?.open ? 'E — Close door' : 'E — Open door';
          } else prompt = 'E — ' + it.prompt;
          break;
        }
      }
    }
    // revive prompt
    if (!prompt && this.mode !== 'sp') {
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

    // hunters sim (sp always; coop host; versus none)
    const playersForAI: StalkerPlayer[] = [
      { pos: player.pos, crouching: player.crouching, sprinting: player.sprinting, flashlightOn: player.flashlightOn, downed: player.downed, dead: player.dead, breathHold: player.breathT > 1 },
      ...this.net.remoteList().map(r => {
        const sp = this.net.lastSnap?.players.find(p => p.id === r.id);
        return { pos: r.pos, crouching: !!sp?.crouch, sprinting: !!sp?.moving && !sp?.crouch, flashlightOn: !!sp?.flash, downed: !!sp?.downed, dead: !!sp?.dead, breathHold: false };
      }),
    ];
    if (this.shepherd) {
      const simulate = this.mode === 'sp' || (this.mode === 'coop' && this.isHost);
      if (simulate && this.shepherd.active) {
        this.shepherd.update(dt, world, playersForAI, this.audio, player.pos.clone(), player.yaw, (target) => {
          if (target === playersForAI[0]) this.monsterAttackLocal(40);
          else {
            const idx = playersForAI.indexOf(target);
            const rp = this.net.remoteList()[idx - 1];
            if (rp) this.net.sendGame('mhit', { target: rp.id, dmg: 40 });
          }
        });
        this.net.sendMonster({ x: this.shepherd.pos.x, z: this.shepherd.pos.z, yaw: this.shepherd.group.rotation.y, state: this.shepherd.state });
      } else if (!simulate) {
        this.shepherd.update(dt, world, [], this.audio, player.pos.clone(), player.yaw, () => { /* noop */ });
      }
    }
    // The Mother (sp only — she hunts alone)
    if (this.mother && this.mode === 'sp' && this.mother.active) {
      this.mother.update(dt, world, playersForAI, this.audio, player.pos.clone(), player.yaw, (target) => {
        if (target === playersForAI[0]) this.monsterAttackLocal(24);
      });
    }

    // husks
    for (const h of this.husks) {
      h.update(dt, world, playersForAI, this.audio, player.pos.clone(), player.yaw, (target, dmg) => {
        if (target === playersForAI[0]) this.monsterAttackLocal(dmg);
      });
    }
    // purge fully-removed husks
    this.husks = this.husks.filter(h => !(h.dead && !h.lootable && !h.group.visible));

    // coordination (feature 10): a scream from one sends the other
    if (this.shepherd && this.mother && this.shepherd.active && this.mother.active) {
      if (this.shepherd.state === 'chase' && this.mother.state !== 'chase') {
        this.mother.hear(player.pos.clone(), 999);
      }
      if (this.mother.state === 'chase' && this.shepherd.state !== 'chase') {
        this.shepherd.hear(player.pos.clone(), 999);
      }
    }

    // projectiles (grenades + thrown bottles/bricks)
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const g = this.projectiles[i];
      g.t += dt;
      g.vel.y -= 12 * dt;
      g.mesh.position.addScaledVector(g.vel, dt);
      g.mesh.rotation.x += dt * 6;
      if (g.mesh.position.y < 0.08) {
        if (g.kind === 'grenade') {
          g.mesh.position.y = 0.08;
          g.vel.y *= -0.35;
          g.vel.x *= 0.7;
          g.vel.z *= 0.7;
        } else {
          // bottle/brick shatters — noise lure (features 24/68)
          const pos = g.mesh.position.clone().setY(0.1);
          this.audio.play('glass', 0.9);
          this.player?.addShake(0.15, 0.1);
          if (this.mode === 'sp' || (this.mode === 'coop' && this.isHost)) {
            this.shepherd?.hear(pos, 17);
            this.mother?.hear(pos, 6);
            for (const h of this.husks) h.hear(pos, 12);
          } else this.net.sendNoise(pos.x, pos.z, 17);
          this.scene.remove(g.mesh);
          this.projectiles.splice(i, 1);
          continue;
        }
      }
      resolveCollisions(g.mesh.position, 0.1, world.colliders);
      if (g.t > 1.6 && g.kind === 'grenade') {
        this.audio.play('bang', 1);
        this.player?.addShake(0.6, 0.3);
        const pos = g.mesh.position.clone();
        if (this.shepherd && this.shepherd.active && this.shepherd.pos.distanceTo(pos) < 13) this.shepherd.knockdown(6);
        if (this.mother && this.mother.active && this.mother.pos.distanceTo(pos) < 13) this.mother.knockdown(6);
        for (const h of this.husks) if (!h.dead && h.pos.distanceTo(pos) < 6) h.onHit(100);
        this.shepherd?.hear(pos, 60);
        this.mother?.hear(pos, 20);
        for (const h of this.husks) h.hear(pos, 30);
        if (this.mode !== 'sp') this.net.sendNoise(pos.x, pos.z, 60);
        this.scene.remove(g.mesh);
        this.projectiles.splice(i, 1);
      }
    }

    quests.update(dt);

    // the ritual of salts blesses the survivor (feature 93)
    if (quests.state.ritualDone && !player.ritualBlessed) {
      player.ritualBlessed = true;
      this.ui.message('A quiet calm settles over you. Fear loosens its grip.', false);
    }

    // hallucinations at high fear (feature 64)
    if (player.fear > 82) {
      this.hallucT -= dt;
      if (this.hallucT <= 0) {
        this.hallucT = 6 + Math.random() * 8;
        this.spawnHallucination();
        if (Math.random() < 0.4) this.audio.play('step', 0.4); // fake footsteps
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
      if (player.fear > 45 || (this.shepherd?.active && this.shepherd.pos.distanceTo(player.pos) < 26) || (this.mother?.active && this.mother.pos.distanceTo(player.pos) < 26)) {
        this.audio.play('whisper', 0.5 + player.fear / 200);
      }
    }

    // danger meter + chase music (user requirement)
    let danger = 0;
    let anyChase = false;
    if (this.shepherd?.active) {
      const d = this.shepherd.pos.distanceTo(player.pos);
      danger = Math.max(danger, clamp(1 - d / 30, 0, 1));
      if (this.shepherd.state === 'chase') { danger = Math.max(danger, 0.75); anyChase = true; }
    }
    if (this.mother?.active) {
      const d = this.mother.pos.distanceTo(player.pos);
      danger = Math.max(danger, clamp(1 - d / 26, 0, 1));
      if (this.mother.state === 'chase') { danger = Math.max(danger, 0.8); anyChase = true; }
    }
    // proximity heartbeat (feature 65)
    const nearest = this.nearestHunterDist();
    if (nearest < 12) danger = Math.max(danger, 0.35);
    danger = Math.max(danger, player.fear / 160);
    this.audio.danger += (danger - this.audio.danger) * clamp(dt * 2, 0, 1);
    this.audio.setChase(anyChase ? 1 : 0);

    // versus timer
    if (this.mode === 'versus') {
      this.timeLeft -= dt;
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

    // networking
    if (this.mode !== 'sp' && this.net.connected) {
      this.sendT -= dt;
      if (this.sendT <= 0) {
        this.sendT = 0.08;
        this.net.sendState(player.serialize());
      }
      this.net.update(dt);
    }

    // HUD + compass + map data
    const alive = this.net.lastSnap?.players.filter(p => !p.dead).length ?? 1;
    this.ui.updateHUD(player, quests, {
      versus: this.mode === 'versus',
      timeLeft: this.timeLeft,
      isMonster: this.mode === 'versus' && this.net.isShepherd,
      coopAlive: this.mode === 'coop' ? alive : undefined,
      coopTotal: this.mode === 'coop' ? (this.net.lastSnap?.players.length ?? 1) : undefined,
    });
    const target = quests.currentTarget();
    if (target) {
      const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
      const angF = Math.atan2(fx, fz);
      const tox = target.x - player.pos.x, toz = target.z - player.pos.z;
      const angT = Math.atan2(tox, toz);
      let bearing = angF - angT;
      while (bearing > Math.PI) bearing -= Math.PI * 2;
      while (bearing < -Math.PI) bearing += Math.PI * 2;
      this.ui.setCompass(bearing, target.label);
    } else this.ui.setCompass(null, '');
    // explored grid (feature 52)
    const visited = this.mapVisited;
    const cx = Math.floor(player.pos.x / 4), cz = Math.floor(player.pos.z / 4);
    for (let ox = -1; ox <= 1; ox++) for (let oz = -1; oz <= 1; oz++) visited.add(`${cx + ox},${cz + oz}`);
    if (this.overlayOpen && this.overlayName === 'radio') this.refreshRadio();

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
  private mapVisited = new Set<string>();

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
