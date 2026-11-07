// HOLLOW VALE — player: movement, 1st/3rd person cameras, weapons, inventory, fear/health
import * as THREE from 'three';
import { clamp, Input, AudioEngine, getTexture } from './core';
import { WorldRefs, resolveCollisions, raycastClear } from './world';

export type WeaponId = 'knife' | 'pistol' | 'rifle';

export interface WeaponDef {
  id: WeaponId; name: string; melee: boolean;
  dmg: number; rate: number; range: number;
  magSize: number; reloadTime: number; ammoKey: string;
}

export const WEAPONS: Record<WeaponId, WeaponDef> = {
  knife: { id: 'knife', name: 'Knife', melee: true, dmg: 26, rate: 0.55, range: 2.0, magSize: 0, reloadTime: 0, ammoKey: '' },
  pistol: { id: 'pistol', name: 'Revolver', melee: false, dmg: 14, rate: 0.5, range: 60, magSize: 6, reloadTime: 1.9, ammoKey: 'ammo_pistol' },
  rifle: { id: 'rifle', name: "Hunter's Rifle", melee: false, dmg: 48, rate: 1.25, range: 80, magSize: 2, reloadTime: 2.9, ammoKey: 'ammo_rifle' },
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
  inv: Record<string, number> = { bandage: 1, pills: 1, grenade: 0, battery: 0, ammo_pistol: 6, ammo_rifle: 0, herb: 0, church_key: 0, iron_key: 0, amulet: 0, rifle_stock: 0, rifle_barrel: 0 };
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

  private cam = new THREE.PerspectiveCamera(70, 1, 0.1, 400);
  private flash: THREE.SpotLight;
  private flashTarget = new THREE.Object3D();
  private model: THREE.Group;
  private bobT = 0;
  private muzzle: THREE.PointLight;
  private shakeT = 0; shakeAmp = 0;
  private lowBatFlicker = 0;
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

    // third-person model
    this.model = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: 0x5a544c, roughness: 0.9 });
    const coat = new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.95 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.7, 4, 8), coat);
    body.position.y = 1.05;
    this.model.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), skin);
    head.position.y = 1.68;
    this.model.add(head);
    const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.5, 3, 6), skin);
    legL.position.set(-0.12, 0.35, 0);
    const legR = legL.clone(); legR.position.x = 0.12;
    this.model.add(legL, legR);
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.2), new THREE.MeshStandardMaterial({ map: getTexture('cloth'), roughness: 1 }));
    pack.position.set(0, 1.15, -0.26);
    this.model.add(pack);
    this.model.visible = false;
    scene.add(this.model);
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

  damage(amount: number, byMonster: boolean) {
    if (this.dead) return;
    if (this.fearPills > 0 && byMonster && amount <= 25) amount *= 0.85;
    this.health = clamp(this.health - amount, 0, 100);
    this.fear = clamp(this.fear + amount * 0.5, 0, 100);
    this.addShake(0.5, 0.35);
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
        this.inv.bandage--; this.heal(40); audio.play('heal', 0.6); return true;
      case 'pills':
        this.inv.pills--; this.calmFear(50); this.fearPills = 45; audio.play('heal', 0.5); return true;
      case 'battery':
        this.inv.battery--; this.battery = 100; audio.play('flash', 0.6); return true;
      default: return false;
    }
  }

  reload(audio: AudioEngine) {
    const w = this.weaponDef();
    if (w.melee || this.reloadT > 0) return;
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
            break;
          }
        }
      }
      return 'melee';
    }
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

  toggleFlashlight(audio: AudioEngine) {
    if (this.battery <= 0 && !this.flashlightOn) return;
    this.flashlightOn = !this.flashlightOn;
    audio.play('flash', 0.5);
  }

  update(dt: number, input: Input, world: WorldRefs, audio: AudioEngine, camMode: 'first' | 'third', sensitivity: number, invertY: boolean, darkness: boolean, monsterVisible: boolean, frozen: boolean) {
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

    // movement
    const mv = frozen ? { x: 0, y: 0 } : input.moveVector();
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
        const noiseR = this.sprinting ? 16 : this.crouching ? 2.6 : 7.5;
        if (this.onNoise) this.onNoise(this.pos.clone(), noiseR);
      }
    }

    // flashlight battery
    if (this.flashlightOn) {
      this.battery = clamp(this.battery - dt * 0.55, 0, 100);
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

    // fear dynamics
    if (this.fearPills <= 0) {
      if (darkness) this.fear = clamp(this.fear + dt * 1.05, 0, 100);
      else this.fear = clamp(this.fear - dt * 2.4, 0, 100);
      if (monsterVisible) this.fear = clamp(this.fear + dt * 5.5, 0, 100);
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

    // model (third person)
    this.model.visible = camMode === 'third';
    this.model.position.copy(this.pos);
    this.model.rotation.y = this.yaw + Math.PI;
    const walk = this.moving ? Math.sin(this.bobT * 9) * 0.5 : 0;
    this.model.children[2].rotation.x = walk * 0.6;
    this.model.children[3].rotation.x = -walk * 0.6;
    this.model.scale.y = this.crouching ? 0.72 : 1;
    if (this.downed) { this.model.rotation.x = Math.PI / 2.2; this.model.position.y = 0.3; }
    else { this.model.rotation.x = 0; this.model.position.y = 0; }
  }

  serialize() {
    return { id: this.id, name: this.name, x: this.pos.x, z: this.pos.z, yaw: this.yaw, pitch: this.pitch,
      hp: this.health, downed: this.downed, dead: this.dead, crouch: this.crouching, moving: this.moving,
      weapon: this.current, flash: this.flashlightOn, color: this.color };
  }
}
