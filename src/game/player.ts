// HOLLOW VALE — player: movement, 1st/3rd person cameras, weapons, inventory, fear/health
import * as THREE from 'three';
import { clamp, Input, AudioEngine, getSpriteTexture } from './core';
import { WorldRefs, resolveCollisions, raycastClear } from './world';
import { makeHumanoid, animWalk, animIdle, type Humanoid } from './characters';

export type WeaponId = 'knife' | 'pistol' | 'rifle' | 'axe' | 'torch';

export interface WeaponDef {
  id: WeaponId; name: string; melee: boolean;
  dmg: number; rate: number; range: number;
  magSize: number; reloadTime: number; ammoKey: string;
}

export const WEAPONS: Record<WeaponId, WeaponDef> = {
  knife: { id: 'knife', name: 'Knife', melee: true, dmg: 26, rate: 0.55, range: 2.0, magSize: 0, reloadTime: 0, ammoKey: '' },
  pistol: { id: 'pistol', name: 'Revolver', melee: false, dmg: 14, rate: 0.5, range: 60, magSize: 6, reloadTime: 1.9, ammoKey: 'ammo_pistol' },
  rifle: { id: 'rifle', name: "Hunter's Rifle", melee: false, dmg: 48, rate: 1.25, range: 80, magSize: 2, reloadTime: 2.9, ammoKey: 'ammo_rifle' },
  axe: { id: 'axe', name: 'Fire Axe', melee: true, dmg: 55, rate: 1.15, range: 2.3, magSize: 0, reloadTime: 0, ammoKey: '' },
  torch: { id: 'torch', name: 'Torch', melee: true, dmg: 20, rate: 0.75, range: 2.1, magSize: 0, reloadTime: 0, ammoKey: '' },
};

export interface HitTarget { mesh: THREE.Object3D; onHit: (dmg: number, headshot: boolean) => void; pos: () => THREE.Vector3 }

export class Player {
  pos = new THREE.Vector3(0, 0, 52);
  yaw = 0; pitch = 0;
  vel = new THREE.Vector3();
  health = 100; maxHealth = 100;
  stamina = 100; fear = 0;
  crouching = false; sprinting = false;
  flashlightOn = true; battery = 100;
  weapons: WeaponId[] = ['knife'];
  current: WeaponId = 'knife';
  mag: Record<string, number> = { pistol: 6, rifle: 0 };
  inv: Record<string, number> = { bandage: 1, pills: 1, grenade: 0, battery: 0, battery_lith: 0, battery_nuc: 0, splint: 0, herb: 0, candle: 0, bottle: 0, brick: 0, ammo_pistol: 6, ammo_rifle: 0, church_key: 0, iron_key: 0, amulet: 0, rifle_stock: 0, rifle_barrel: 0 };
  downed = false; dead = false;
  downTimer = 0;
  moving = false;
  stepDist = 0;
  fireCd = 0; reloadT = 0; knifeAnim = 0;
  fearPills = 0; // seconds of fear immunity
  interactTarget: { id: string; prompt: string } | null = null;
  name = 'Survivor';
  color = 0x8899aa;
  id = 'p0';
  isLocal = true;

  // status effects (seconds remaining)
  statuses = { bleeding: 0, poison: 0, brokenLeg: 0 };
  jammed = false;
  batteryType: 'std' | 'lith' | 'nuc' = 'std';
  breathT = 0;                 // remaining breath-hold seconds
  stealthKillT = 0;            // >0 while sneaking-kill anim plays
  stealthTarget: THREE.Vector3 | null = null;
  stealthLanded = false;       // set when the stab lands; main consumes
  onStealthKill: (() => void) | null = null;   // fired once when the stab lands
  onBulletImpact: ((pos: THREE.Vector3, normal: THREE.Vector3) => void) | null = null;  // decals
  onCandlePlace: ((pos: THREE.Vector3) => void) | null = null;
  ritualBlessed = false;       // no fear gain after ritual

  get batteryCap(): number { return this.batteryType === 'lith' ? 200 : this.batteryType === 'nuc' ? 300 : 100; }

  private cam = new THREE.PerspectiveCamera(70, 1, 0.1, 400);
  private flash: THREE.SpotLight;
  private flashTarget = new THREE.Object3D();
  private model: THREE.Group;
  private humanoid: Humanoid;
  private bobT = 0;
  private muzzle: THREE.PointLight;
  private torchLight: THREE.PointLight;
  private shakeT = 0; shakeAmp = 0;
  private lowBatFlicker = 0;
  private heartT = 0;          // heartbeat shake timer
  private unjamT = 0;
  private crankT = 0;
  private weaponProps: { id: WeaponId; group: THREE.Group }[] = [];
  onNoise: ((pos: THREE.Vector3, radius: number) => void) | null = null;
  onDamage: ((amount: number, byMonster: boolean) => void) | null = null;

  constructor(scene: THREE.Scene) {
    this.cam.name = 'playerCam';
    scene.add(this.cam);
    this.flash = new THREE.SpotLight(0xffe9c4, 0, 30, 0.46, 0.5, 1.4);
    this.flash.position.set(0, 0, 0);
    scene.add(this.flash);
    scene.add(this.flashTarget);
    this.flash.target = this.flashTarget;
    this.muzzle = new THREE.PointLight(0xffc36a, 0, 9, 1.8);
    scene.add(this.muzzle);
    this.torchLight = new THREE.PointLight(0xff9a40, 0, 9, 1.8);
    scene.add(this.torchLight);

    // third-person model: rigged humanoid (no more primitive hacks)
    this.humanoid = makeHumanoid({ scale: 1, face: 'player', outfit: 'coat', outfitTint: 0x39424e, hair: 'short', pack: true, skin: '#8a7f70' });
    this.model = this.humanoid.group;
    this.buildWeaponProps();
    this.model.visible = false;
    scene.add(this.model);
  }

  /* ---------- held weapon props (stylized, attached to right hand) ---------- */
  private buildWeaponProps() {
    const armR = this.humanoid.parts.armR;
    const metal = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, metalness: 0.7, roughness: 0.35 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x22242a, metalness: 0.4, roughness: 0.6 });
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b4a2a, roughness: 0.9 });
    const char = new THREE.MeshStandardMaterial({ color: 0x2a211a, roughness: 1 });
    const mk = (id: WeaponId, build: (g: THREE.Group) => void) => {
      const g = new THREE.Group();
      g.position.set(0, -0.55, 0.05); // at the hand
      build(g);
      g.visible = false;
      armR.add(g);
      this.weaponProps.push({ id, group: g });
    };
    // knife: thin silver blade
    mk('knife', (g) => {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, 0.28), metal);
      blade.position.z = 0.16;
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.045, 0.09), dark);
      grip.position.z = -0.01;
      g.add(blade, grip);
    });
    // pistol: dark box + grip
    mk('pistol', (g) => {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.09, 0.16), dark);
      body.position.z = 0.1;
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.11, 0.05), wood);
      grip.position.set(0, -0.07, 0.03);
      grip.rotation.x = 0.25;
      g.add(body, grip);
    });
    // rifle: long barrel + wood stock
    mk('rifle', (g) => {
      const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.55), dark);
      barrel.position.z = 0.22;
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.1, 0.2), wood);
      stock.position.set(0, -0.02, -0.1);
      g.add(barrel, stock);
    });
    // axe: wooden handle + steel head
    mk('axe', (g) => {
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.5, 6), wood);
      handle.rotation.x = Math.PI / 2;
      handle.position.z = 0.14;
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.1), metal);
      head.position.z = 0.36;
      g.add(handle, head);
    });
    // torch: stick + rag wrap + additive flame sprite
    mk('torch', (g) => {
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.34, 6), char);
      stick.rotation.x = Math.PI / 2;
      stick.position.z = 0.14;
      const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.07, 6), new THREE.MeshStandardMaterial({ color: 0x8a5a20, roughness: 1, emissive: 0x552200, emissiveIntensity: 0.6 }));
      wrap.rotation.x = Math.PI / 2;
      wrap.position.z = 0.28;
      const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: getSpriteTexture('flame'), color: 0xffb050, blending: THREE.AdditiveBlending, depthWrite: false }));
      flame.scale.setScalar(0.22);
      flame.position.z = 0.34;
      g.add(stick, wrap, flame);
    });
  }

  get camera(): THREE.PerspectiveCamera { return this.cam; }
  get eyePos(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, this.pos.y + (this.crouching ? 1.05 : 1.62), this.pos.z); }
  get chestPos(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, this.pos.y + 1.25, this.pos.z); }
  hasWeapon(w: WeaponId) { return this.weapons.includes(w); }
  giveWeapon(w: WeaponId) {
    if (!this.weapons.includes(w)) this.weapons.push(w);
    if (w === 'pistol') this.mag.pistol = Math.max(this.mag.pistol, 6);
    if (w === 'rifle') this.mag.rifle = Math.max(this.mag.rifle, 2);
  }
  weaponDef(): WeaponDef { return WEAPONS[this.current]; }

  addShake(amp: number, time: number) { this.shakeAmp = Math.max(this.shakeAmp, amp); this.shakeT = Math.max(this.shakeT, time); }

  damage(amount: number, byMonster: boolean, heavy = false) {
    if (this.dead) return;
    if (this.fearPills > 0 && byMonster && amount <= 25) amount *= 0.85;
    this.health = clamp(this.health - amount, 0, 100);
    this.fear = clamp(this.fear + amount * 0.5, 0, 100);
    this.addShake(0.5, 0.35);
    if (byMonster) {
      if (heavy) {
        if (Math.random() < 0.22) this.statuses.brokenLeg = 45;
        if (Math.random() < 0.3) this.statuses.bleeding = 30;
      } else {
        if (Math.random() < 0.12) this.statuses.poison = 40;
        if (Math.random() < 0.25) this.statuses.bleeding = 25;
      }
    }
    if (this.onDamage) this.onDamage(amount, byMonster);
    if (this.health <= 0) {
      this.downed = true;
      this.downTimer = 60;
    }
  }

  heal(n: number) { this.health = clamp(this.health + n, 0, this.maxHealth); }
  calmFear(n: number) { this.fear = clamp(this.fear - n, 0, 100); }

  useItem(item: string, audio: AudioEngine): boolean {
    if ((this.inv[item] || 0) <= 0) return false;
    switch (item) {
      case 'bandage':
        this.inv.bandage--; this.heal(35); this.statuses.bleeding = 0; audio.play('heal', 0.6); return true;
      case 'pills':
        this.inv.pills--; this.calmFear(50); this.fearPills = 45; audio.play('heal', 0.5); return true;
      case 'battery':
      case 'battery_std':
        this.inv[item]--; this.batteryType = 'std'; this.battery = this.batteryCap; audio.play('flash', 0.6); return true;
      case 'battery_lith':
        this.inv.battery_lith--; this.batteryType = 'lith'; this.battery = this.batteryCap; audio.play('flash', 0.6); return true;
      case 'battery_nuc':
        this.inv.battery_nuc--; this.batteryType = 'nuc'; this.battery = this.batteryCap; audio.play('flash', 0.6); return true;
      case 'splint':
        this.inv.splint--; this.statuses.brokenLeg = 0; audio.play('heal', 0.7); return true;
      case 'herb': // antidote AND calmative
        this.inv.herb--;
        if (this.statuses.poison > 0) this.statuses.poison = 0;
        else this.fear = Math.max(0, this.fear - 25);
        audio.play('heal', 0.5); return true;
      case 'candle':
        this.inv.candle--; this.onCandlePlace?.(this.chestPos.clone().setY(0.2)); audio.play('flash', 0.5); return true;
      default: return false;
    }
  }

  reload(audio: AudioEngine) {
    const w = this.weaponDef();
    if (w.melee || this.reloadT > 0) return;
    if (this.jammed) { // reload becomes unjam
      if (this.unjamT <= 0) { this.unjamT = 1.6; audio.play('unjam', 0.6); }
      return;
    }
    if (this.mag[w.id] >= w.magSize) return;
    if ((this.inv[w.ammoKey] || 0) <= 0) { audio.play('dry', 0.4); return; }
    this.reloadT = w.reloadTime;
    audio.play('reload', 0.5);
  }

  finishReload() {
    const w = this.weaponDef();
    if (w.melee) return;
    const need = w.magSize - this.mag[w.id];
    const take = Math.min(need, this.inv[w.ammoKey] || 0);
    this.mag[w.id] += take;
    this.inv[w.ammoKey] = (this.inv[w.ammoKey] || 0) - take;
  }

  beginStealthKill(audio: AudioEngine, targetPos: THREE.Vector3): boolean {
    if (this.stealthKillT > 0) return false;
    this.stealthKillT = 1.25;
    this.stealthTarget = targetPos.clone();
    audio.play('stab', 0.6);
    return true;
  }

  fire(
    audio: AudioEngine,
    targets: HitTarget[],
    occluders: THREE.Object3D[],
    camDir: THREE.Vector3
  ): 'fired' | 'empty' | 'melee' | 'cooldown' | 'reloading' {
    const w = this.weaponDef();
    if (this.fireCd > 0) return 'cooldown';
    if (this.reloadT > 0) return 'reloading';
    if (w.melee) {
      this.fireCd = w.rate;
      this.knifeAnim = 0.28;
      audio.play('knife', 0.45);
      // short-range melee cone
      const eye = this.eyePos;
      for (const t of targets) {
        const tp = t.pos();
        const d = tp.distanceTo(this.chestPos);
        if (d < w.range + 0.4) {
          const to = new THREE.Vector3().subVectors(tp, eye).normalize();
          const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)).multiplyScalar(-1);
          if (to.dot(fwd) > 0.4 && raycastClear(eye, tp, occluders)) {
            audio.play('flesh', 0.6);
            t.onHit(w.dmg, false);
            if (this.current === 'torch') audio.play('brazier', 0.35);
            break;
          }
        }
      }
      return 'melee';
    }
    if (this.jammed) { audio.play('dry', 0.5); this.fireCd = 0.25; return 'empty'; }
    if (this.mag[w.id] <= 0) {
      audio.play('dry', 0.5);
      this.fireCd = 0.3;
      return 'empty';
    }
    this.mag[w.id]--;
    this.fireCd = w.rate;
    audio.play('shot', 0.85);
    this.addShake(0.35, 0.18);
    this.muzzle.intensity = 30;
    this.muzzle.position.copy(this.chestPos).addScaledVector(camDir, 0.5);
    if (this.onNoise) this.onNoise(this.pos.clone(), 48);
    this.fear = clamp(this.fear - 3, 0, 100);
    // hitscan
    const origin = this.chestPos.clone().addScaledVector(camDir, 0.4);
    let best: { t: HitTarget; d: number } | null = null;
    const tmp = new THREE.Vector3();
    for (const t of targets) {
      const tp = t.pos();
      const dist = tp.distanceTo(origin);
      if (dist > w.range) continue;
      tmp.copy(tp).sub(origin).normalize();
      const dot = tmp.dot(camDir);
      const cone = clamp(0.986 - dist * 0.0004, 0.955, 0.986);
      if (dot > cone) {
        if (raycastClear(origin, tp, occluders)) {
          if (!best || dist < best.d) best = { t, d: dist };
        }
      }
    }
    if (best) {
      audio.play('flesh', 0.7, 0);
      best.t.onHit(w.dmg, false);
    }
    // impact decal (always when a gun fires)
    const rc = new THREE.Raycaster(origin, camDir.clone().normalize(), 0.05, w.range);
    const wallHits = rc.intersectObjects(occluders, false);
    if (wallHits.length > 0) {
      const h = wallHits[0];
      const normal = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld) : camDir.clone().negate();
      this.onBulletImpact?.(h.point.clone(), normal);
    }
    // chance to jam (10% base, +4% pistol, +8% rifle)
    const jamChance = 0.10 + (w.id === 'pistol' ? 0.04 : w.id === 'rifle' ? 0.08 : 0);
    if (Math.random() < jamChance) { this.jammed = true; audio.play('unjam', 0.5); }
    return 'fired';
  }

  throwGrenade(audio: AudioEngine): { pos: THREE.Vector3; vel: THREE.Vector3 } | null {
    if ((this.inv.grenade || 0) <= 0) return null;
    this.inv.grenade--;
    audio.play('knife', 0.3);
    const dir = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)).multiplyScalar(-1);
    const v = dir.multiplyScalar(11).add(new THREE.Vector3(0, 4.6, 0));
    return { pos: this.chestPos.clone().addScaledVector(dir, 0.6), vel: v };
  }

  throwObject(audio: AudioEngine): { pos: THREE.Vector3; vel: THREE.Vector3; kind: 'bottle' | 'brick' } | null {
    let kind: 'bottle' | 'brick';
    if ((this.inv.bottle || 0) > 0) { this.inv.bottle--; kind = 'bottle'; }
    else if ((this.inv.brick || 0) > 0) { this.inv.brick--; kind = 'brick'; }
    else return null;
    audio.play('knife', 0.25);
    const dir = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)).multiplyScalar(-1);
    const vel = dir.clone().multiplyScalar(9.5).add(new THREE.Vector3(0, 4.6, 0));
    return { pos: this.chestPos.clone().addScaledVector(dir, 0.6), vel, kind };
  }

  chargeDynamo(dt: number, audio: AudioEngine, onNoise: (pos: THREE.Vector3, r: number) => void): void {
    this.battery = Math.min(this.batteryCap, this.battery + 9 * dt);
    this.crankT -= dt;
    if (this.crankT <= 0) {
      this.crankT = 0.45;
      audio.play('crank', 0.28);
      onNoise(this.pos.clone(), 11);
    }
  }

  toggleFlashlight(audio: AudioEngine) {
    if (this.battery <= 0 && !this.flashlightOn) return;
    this.flashlightOn = !this.flashlightOn;
    audio.play('flash', 0.5);
  }

  update(dt: number, input: Input, world: WorldRefs, audio: AudioEngine, camMode: 'first' | 'third', sensitivity: number, invertY: boolean, darkness: boolean, monsterVisible: boolean, frozen: boolean, opts?: { breathHold?: boolean }) {
    // look
    const look = input.consumeLook();
    this.yaw -= look.x * sensitivity;
    this.pitch -= (invertY ? -look.y : look.y) * sensitivity;
    this.pitch = clamp(this.pitch, -1.35, 1.35);

    // timers
    if (this.fireCd > 0) this.fireCd -= dt;
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) this.finishReload(); }
    if (this.knifeAnim > 0) this.knifeAnim -= dt;
    if (this.shakeT > 0) { this.shakeT -= dt; if (this.shakeT <= 0) this.shakeAmp = 0; }
    this.muzzle.intensity = Math.max(0, this.muzzle.intensity - dt * 400);
    if (this.fearPills > 0) this.fearPills -= dt;
    if (this.unjamT > 0) { this.unjamT -= dt; if (this.unjamT <= 0) this.jammed = false; }

    // breath hold: steadies nerves, muffles steps, burns stamina
    const bh = !!opts?.breathHold && this.stamina > 2 && !this.downed;
    if (bh) {
      this.breathT = Math.min(6, this.breathT + dt * 3);
      this.stamina = clamp(this.stamina - 9 * dt, 0, 100);
    } else {
      this.breathT = Math.max(0, this.breathT - dt * 2);
    }

    // status effects
    const st = this.statuses;
    if (st.bleeding > 0) {
      if (this.health > 5) this.health = Math.max(5, this.health - 1.1 * dt); // bleeding alone can't kill below 5
      st.bleeding -= dt;
    }
    if (st.poison > 0) {
      this.health = clamp(this.health - 0.7 * dt, 0, 100);
      if (!this.ritualBlessed) this.fear = Math.min(100, this.fear + 0.6 * dt);
      st.poison -= dt;
    }
    if (st.brokenLeg > 0) st.brokenLeg -= dt;

    // movement
    const mv = (frozen || this.stealthKillT > 0) ? { x: 0, y: 0 } : input.moveVector();
    this.moving = Math.hypot(mv.x, mv.y) > 0.1;
    const wantSprint = (input.down('ShiftLeft') || input.down('ShiftRight') || input.down('sprint')) && this.moving && !this.crouching;
    if (this.downed) {
      this.sprinting = false;
    } else if (wantSprint && this.stamina > 1) {
      this.sprinting = true;
    } else {
      this.sprinting = false;
    }
    if (this.sprinting) this.stamina = clamp(this.stamina - 17 * dt, 0, 100);
    else this.stamina = clamp(this.stamina + (this.crouching ? 14 : 9) * dt, 0, 100);

    this.crouching = !this.downed && (input.down('KeyC') || input.down('ControlLeft') || input.down('crouch'));

    let speed = 3.1;
    if (this.sprinting) speed = 4.7;
    else if (this.crouching) speed = 1.55;
    if (this.downed) speed = 0.9;
    if (st.brokenLeg > 0) speed *= 0.62;
    if (st.poison > 0) speed *= 0.9;

    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const fx = -sin, fz = -cos;
    const rx = cos, rz = -sin;
    const dx = (fx * -mv.y + rx * mv.x);
    const dz = (fz * -mv.y + rz * mv.x);
    const len = Math.hypot(dx, dz) || 1;
    const nx = (dx / len) * speed * Math.min(1, Math.hypot(mv.x, mv.y));
    const nz = (dz / len) * speed * Math.min(1, Math.hypot(mv.x, mv.y));
    this.pos.x += nx * dt;
    this.pos.z += nz * dt;
    resolveCollisions(this.pos, 0.42, world.colliders);

    // footsteps + noise
    if (this.moving && !this.downed) {
      this.stepDist += Math.hypot(nx, nz) * dt;
      const stride = this.sprinting ? 1.7 : this.crouching ? 1.3 : 1.05;
      if (this.stepDist > stride) {
        this.stepDist = 0;
        audio.play('step', this.sprinting ? 0.5 : this.crouching ? 0.16 : 0.3);
        let noiseR = this.sprinting ? 16 : this.crouching ? 2.6 : 7.5;
        if (this.breathT > 1) noiseR *= 0.5;
        if (st.brokenLeg > 0 && !this.crouching) { noiseR *= 1.5; audio.play('moan', 0.12); } // painful limp
        if (this.onNoise) this.onNoise(this.pos.clone(), noiseR);
      }
    }

    // flashlight battery (drain depends on cell type)
    if (this.flashlightOn) {
      const drain = this.batteryType === 'lith' ? 0.3 : this.batteryType === 'nuc' ? 0.08 : 0.55;
      this.battery = clamp(this.battery - dt * drain, 0, this.batteryCap);
      if (this.battery <= 0) { this.flashlightOn = false; audio.play('flash', 0.4); }
    }
    let fIntensity = this.flashlightOn ? 85 : 0;
    if (this.flashlightOn && this.battery < 20) {
      this.lowBatFlicker -= dt;
      if (this.lowBatFlicker <= 0) {
        this.lowBatFlicker = 0.06 + Math.random() * 0.2;
        fIntensity *= Math.random() < 0.24 ? 0.25 : 1;
      }
    }
    this.flash.intensity = fIntensity;
    const eye = this.eyePos;
    this.flash.position.copy(eye);
    const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    this.flashTarget.position.copy(eye).addScaledVector(dir, 10);

    // torch light: warm handheld flicker
    if (this.current === 'torch') {
      this.torchLight.intensity = 22 * (0.9 + Math.random() * 0.2);
      this.torchLight.position.copy(this.chestPos).addScaledVector(dir, 0.4);
    } else {
      this.torchLight.intensity = 0;
    }

    // fear dynamics
    if (this.ritualBlessed) {
      this.fear = 0;
    } else if (this.fearPills <= 0) {
      if (darkness) this.fear = clamp(this.fear + dt * 1.05, 0, 100);
      else this.fear = clamp(this.fear - dt * 2.4, 0, 100);
      if (monsterVisible) this.fear = clamp(this.fear + dt * 5.5, 0, 100);
    }

    // heartbeat shake when terrified
    if (this.fear > 65) {
      this.heartT -= dt;
      if (this.heartT <= 0) { this.heartT = 0.9 - this.fear / 400; this.addShake(0.05, 0.12); }
    }

    // camera
    const shake = this.shakeAmp * (this.shakeT > 0 ? this.shakeT : 0);
    const bob = this.moving && camMode === 'first' ? Math.sin(this.bobT * 8.5) * 0.035 : 0;
    this.bobT += dt * (this.sprinting ? 1.5 : 1);
    const euler = new THREE.Euler(this.pitch, this.yaw, Math.sin(this.bobT * 4) * 0.012 + (Math.random() - 0.5) * shake * 0.1, 'YXZ');
    if (camMode === 'first') {
      this.cam.position.set(eye.x + (Math.random() - 0.5) * shake * 0.3, eye.y + bob, eye.z + (Math.random() - 0.5) * shake * 0.3);
      this.cam.quaternion.setFromEuler(euler);
    } else {
      const back = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
      const camWant = eye.clone().addScaledVector(back, 3.3).add(new THREE.Vector3(0, 0.85 + this.pitch * -0.4, 0));
      // wall avoid
      const toCam = new THREE.Vector3().subVectors(camWant, eye);
      const desired = toCam.length();
      toCam.normalize();
      let allowed = desired;
      const probe = eye.clone();
      for (let s = 0.4; s <= desired; s += 0.4) {
        probe.copy(eye).addScaledVector(toCam, s);
        let blocked = false;
        for (const c of world.colliders) {
          if (probe.x > c.minX - 0.25 && probe.x < c.maxX + 0.25 && probe.z > c.minZ - 0.25 && probe.z < c.maxZ + 0.25) { blocked = true; break; }
        }
        if (probe.y < 0.25) blocked = true;
        if (blocked) { allowed = Math.max(0.5, s - 0.4); break; }
      }
      this.cam.position.copy(eye).addScaledVector(toCam, allowed);
      this.cam.position.y += Math.sin(this.bobT * 4) * 0.02;
      this.cam.quaternion.setFromEuler(euler);
    }

    // model (third person only; first person keeps it hidden)
    this.model.visible = camMode === 'third';
    this.model.position.copy(this.pos);
    this.model.rotation.y = this.yaw + Math.PI;
    if (this.moving && !this.downed) animWalk(this.humanoid, this.bobT, 8.5, this.sprinting ? 0.8 : 0.55);
    else animIdle(this.humanoid, this.bobT);
    this.model.scale.set(1, this.crouching ? 0.72 : 1, 1);
    if (this.downed) { this.model.rotation.x = Math.PI / 2.2; this.model.position.y = 0.3; }
    else { this.model.rotation.x = 0; this.model.position.y = 0; }

    // stealth kill: right-arm thrust overrides idle/walk arm pose
    if (this.stealthKillT > 0) {
      this.stealthKillT -= dt;
      const p = clamp(1 - this.stealthKillT / 1.25, 0, 1);
      const armR = this.humanoid.parts.armR;
      armR.rotation.x = p < 0.35 ? -0.4 + (-1.5) * (p / 0.35) : -1.9 + 2.1 * ((p - 0.35) / 0.65);
      if (this.stealthKillT <= 0) {
        this.stealthLanded = true;
        if (this.onStealthKill) this.onStealthKill();
      }
    }

    // held weapon prop: only the current weapon is visible
    for (const wp of this.weaponProps) wp.group.visible = wp.id === this.current;
  }

  serialize() {
    return { id: this.id, name: this.name, x: this.pos.x, z: this.pos.z, yaw: this.yaw, pitch: this.pitch,
      hp: this.health, downed: this.downed, dead: this.dead, crouch: this.crouching, moving: this.moving,
      weapon: this.current, flash: this.flashlightOn, color: this.color,
      jammed: this.jammed, batteryType: this.batteryType, statuses: { ...this.statuses } };
  }
}
