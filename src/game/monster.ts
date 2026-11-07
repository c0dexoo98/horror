// HOLLOW VALE — The Shepherd (pursuer AI) & Husks (minor enemies)
import * as THREE from 'three';
import { clamp, mulberry32, AudioEngine } from './core';
import { WorldRefs, resolveCollisions, raycastClear, SHEPHERD_WAYPOINTS } from './world';

const rnd = mulberry32(777);

type SState = 'patrol' | 'investigate' | 'chase' | 'search' | 'stagger' | 'down';

function makeShepherdModel(scene: THREE.Scene): { group: THREE.Group; parts: Record<string, THREE.Object3D>; eyes: THREE.Mesh[] } {
  const g = new THREE.Group();
  const cloth = new THREE.MeshStandardMaterial({ color: 0x14120f, roughness: 1 });
  const skin = new THREE.MeshStandardMaterial({ color: 0x8a8078, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 1.15, 4, 8), cloth);
  body.position.y = 1.55;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), skin);
  head.position.y = 2.42;
  head.scale.set(0.9, 1.25, 0.9);
  g.add(head);
  const cowl = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.55, 8), cloth);
  cowl.position.y = 2.62;
  g.add(cowl);
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 1.05, 3, 6), skin);
  armL.position.set(-0.34, 1.7, 0);
  const armR = armL.clone(); armR.position.x = 0.34;
  g.add(armL, armR);
  const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.85, 3, 6), skin);
  legL.position.set(-0.14, 0.55, 0);
  const legR = legL.clone(); legR.position.x = 0.14;
  g.add(legL, legR);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffb32a });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
  eyeL.position.set(-0.07, 2.44, 0.17);
  const eyeR = eyeL.clone(); eyeR.position.x = 0.07;
  g.add(eyeL, eyeR);
  const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.26, 0.18), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xff8c1a, emissiveIntensity: 0.9 }));
  lantern.position.set(-0.34, 0.55, 0.18);
  g.add(lantern);
  const lanternLight = new THREE.PointLight(0xff8c1a, 5, 9, 1.8);
  lanternLight.position.set(-0.34, 0.7, 0.2);
  g.add(lanternLight);
  g.visible = false;
  scene.add(g);
  return { group: g, parts: { body, head, cowl, armL, armR, legL, legR, lantern }, eyes: [eyeL, eyeR] };
}

export class Shepherd {
  pos = new THREE.Vector3(20, 0, 40);
  state: SState = 'patrol';
  group: THREE.Group;
  private parts: Record<string, THREE.Object3D>;
  private eyes: THREE.Mesh[];
  private target = new THREE.Vector3();
  private stateT = 0;
  private wpIndex = 0;
  private poise = 0;
  private attackCd = 0;
  private stuckT = 0;
  private lastPos = new THREE.Vector3();
  private stepDist = 0;
  private twitchT = 0;
  private animT = 0;
  controlled = false; // versus mode: player controls
  netPos = new THREE.Vector3();
  netYaw = 0;
  active = false;
  rage = 0; // 0..1 chapter scaling

  constructor(scene: THREE.Scene) {
    const m = makeShepherdModel(scene);
    this.group = m.group;
    this.parts = m.parts;
    this.eyes = m.eyes;
  }

  spawn(p: THREE.Vector3) {
    this.pos.copy(p);
    this.group.visible = true;
    this.active = true;
    this.state = 'patrol';
  }
  despawn() { this.active = false; this.group.visible = false; }

  mesh(): THREE.Object3D { return this.group; }
  headPos(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, this.pos.y + 2.3, this.pos.z); }

  hear(pos: THREE.Vector3, radius: number) {
    if (!this.active || this.controlled) return;
    if (this.state === 'chase' || this.state === 'stagger' || this.state === 'down') return;
    const d = this.pos.distanceTo(pos);
    const eff = radius * (1 + this.rage * 0.35);
    if (d < eff) {
      this.state = 'investigate';
      this.target.copy(pos);
      this.stateT = 0;
    }
  }

  onHit(dmg: number, heavy: boolean, audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number) {
    if (!this.active) return;
    audio.play3d('flesh', listener, listenerYaw, this.pos, 0.8);
    if (heavy) {
      this.knockdown(5.5);
      return;
    }
    this.poise += dmg;
    if (this.poise >= 55) {
      this.poise = 0;
      this.knockdown(5.0);
    } else {
      this.state = 'stagger';
      this.stateT = 1.4;
    }
  }
  knockdown(t: number) {
    this.state = 'down';
    this.stateT = t;
    this.poise = 0;
    this.group.rotation.z = 1.2;
  }

  update(dt: number, world: WorldRefs, players: { pos: THREE.Vector3; crouching: boolean; sprinting: boolean; flashlightOn: boolean; downed: boolean; dead: boolean }[], audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number, onCatch: (p: (typeof players)[number]) => void) {
    if (!this.active) { audio.setGrowl(0); return; }
    if (this.controlled) {
      // networked control: interpolate
      this.pos.lerp(this.netPos, clamp(dt * 8, 0, 1));
      this.group.position.copy(this.pos);
      this.group.rotation.y = this.netYaw;
      return;
    }
    this.stateT -= dt;
    this.attackCd -= dt;
    this.animT += dt;

    if (this.state === 'stagger') {
      this.group.rotation.z = Math.sin(this.animT * 30) * 0.08;
      if (this.stateT <= 0) { this.state = 'chase'; this.group.rotation.z = 0; }
    } else if (this.state === 'down') {
      if (this.stateT <= 0) {
        this.state = 'search';
        this.stateT = 6;
        this.target.copy(players[0] ? players[0].pos : this.pos);
        this.group.rotation.z = 0;
      }
    } else {
      // vision check every frame is fine (few players)
      let seen: (typeof players)[number] | null = null;
      for (const p of players) {
        if (p.dead) continue;
        const eye = this.headPos();
        const pp = new THREE.Vector3(p.pos.x, 1.5, p.pos.z);
        const d = eye.distanceTo(pp);
        const maxD = p.flashlightOn ? 34 : 26;
        if (d < 5.5 || (d < maxD && this.inFov(pp) && raycastClear(eye, pp, world.occluders))) {
          seen = p; break;
        }
      }
      if (seen && this.state !== 'chase') {
        this.state = 'chase';
        this.stateT = 0;
        audio.play3d('scream', listener, listenerYaw, this.pos, 0.95);
      }
      switch (this.state) {
        case 'patrol': {
          if (this.stateT <= 0 || this.target.distanceTo(this.pos) < 1.2) {
            this.wpIndex = (this.wpIndex + 1 + Math.floor(rnd() * 2)) % SHEPHERD_WAYPOINTS.length;
            this.target.copy(SHEPHERD_WAYPOINTS[this.wpIndex]);
            this.stateT = 30;
          }
          this.moveTowards(this.target, (1.65 + this.rage * 0.5) * dt, world);
          break;
        }
        case 'investigate': {
          this.moveTowards(this.target, (2.5 + this.rage * 0.7) * dt, world);
          if (this.target.distanceTo(this.pos) < 1.4) {
            this.state = 'search'; this.stateT = 5;
            this.target.copy(this.pos).add(new THREE.Vector3((rnd() - 0.5) * 14, 0, (rnd() - 0.5) * 14));
          }
          break;
        }
        case 'chase': {
          let best: (typeof players)[number] | null = null;
          let bestD = 1e9;
          for (const p of players) {
            if (p.dead) continue;
            const d = this.pos.distanceTo(p.pos);
            if (d < bestD) { bestD = d; best = p; }
          }
          if (!best) { this.state = 'patrol'; break; }
          this.target.copy(best.pos);
          this.moveTowards(this.target, (3.45 + this.rage * 0.85) * dt, world);
          if (bestD < 1.9 && this.attackCd <= 0 && !best.downed) {
            this.attackCd = 1.6;
            onCatch(best);
            this.state = 'stagger';
            this.stateT = 2.1;
            audio.play3d('scream', listener, listenerYaw, this.pos, 1);
          }
          // lose sight after 6s without re-see (seen refreshed above each frame while visible)
          if (!seen) {
            if (this.stateT <= -6) {
              this.state = 'search';
              this.stateT = 9;
              this.target.copy(best.pos);
            }
          } else this.stateT = 0;
          break;
        }
        case 'search': {
          this.moveTowards(this.target, 2.1 * dt, world);
          if (this.target.distanceTo(this.pos) < 1.4 || this.stateT <= 0) {
            if (this.stateT <= 0) { this.state = 'patrol'; this.stateT = 0; }
            else this.target.copy(this.pos).add(new THREE.Vector3((rnd() - 0.5) * 18, 0, (rnd() - 0.5) * 18));
          }
          break;
        }
      }
    }

    // teleport catch-up when far & not chasing
    if (this.state === 'patrol' && players[0]) {
      let nearest = 1e9;
      for (const p of players) nearest = Math.min(nearest, this.pos.distanceTo(p.pos));
      if (nearest > 75) {
        const p = players[Math.floor(rnd() * players.length)];
        const ang = rnd() * Math.PI * 2;
        const np = new THREE.Vector3(p.pos.x + Math.cos(ang) * 34, 0, p.pos.z + Math.sin(ang) * 34);
        resolveCollisions(np, 0.5, world.colliders);
        this.pos.copy(np);
      }
    }

    // unstick
    if (this.pos.distanceTo(this.lastPos) < 0.02 && this.state !== 'down' && this.state !== 'stagger') {
      this.stuckT += dt;
      if (this.stuckT > 1.1) {
        this.target.copy(this.pos).add(new THREE.Vector3((rnd() - 0.5) * 12, 0, (rnd() - 0.5) * 12));
        this.stuckT = 0;
      }
    } else this.stuckT = 0;
    this.lastPos.copy(this.pos);

    // animation
    const speed = this.state === 'chase' ? 2.2 : this.state === 'down' ? 0 : 1.1;
    const s = Math.sin(this.animT * speed * 4.5);
    this.parts.legL.rotation.x = s * 0.55;
    this.parts.legR.rotation.x = -s * 0.55;
    this.parts.armL.rotation.x = this.state === 'chase' ? -1.1 + Math.sin(this.animT * 9) * 0.25 : s * 0.3;
    this.parts.armR.rotation.x = -s * 0.35;
    this.twitchT -= dt;
    if (this.twitchT <= 0) {
      this.twitchT = this.state === 'chase' ? 0.12 : 0.8 + rnd() * 1.6;
      this.parts.head.rotation.z = (rnd() - 0.5) * 0.5;
      this.parts.head.rotation.x = (rnd() - 0.5) * 0.3;
    }
    const eyeGlow = this.state === 'chase' ? 2.6 : 1.2;
    this.eyes.forEach(e => { (e.material as THREE.MeshBasicMaterial).color.setHex(this.state === 'chase' ? 0xff3b1f : 0xffb32a); });
    void eyeGlow;
    this.group.position.copy(this.pos);
    const faceDir = new THREE.Vector3().subVectors(this.target, this.pos);
    if (faceDir.lengthSq() > 0.01) this.group.rotation.y = Math.atan2(faceDir.x, faceDir.z);

    // steps + growl audio
    this.stepDist += this.pos.distanceTo(this.lastPos);
    if (this.stepDist > 1.6 && this.state !== 'down') {
      this.stepDist = 0;
      audio.play3d('step', listener, listenerYaw, this.pos, 1.4);
    }
    const d = listener ? this.pos.distanceTo(listener) : 99;
    const growlGain = this.state === 'chase' ? clamp(0.28 * (1 - d / 34), 0, 0.3) : clamp(0.07 * (1 - d / 20), 0, 0.08);
    audio.setGrowl(growlGain, this.state === 'chase' ? 66 : 52);
  }

  private inFov(p: THREE.Vector3): boolean {
    const to = new THREE.Vector3(p.x - this.pos.x, 0, p.z - this.pos.z).normalize();
    const fwd = new THREE.Vector3(Math.sin(this.group.rotation.y), 0, Math.cos(this.group.rotation.y));
    return to.dot(fwd) > 0.15;
  }

  private moveTowards(target: THREE.Vector3, step: number, world: WorldRefs) {
    const dir = new THREE.Vector3(target.x - this.pos.x, 0, target.z - this.pos.z);
    const len = dir.length();
    if (len < 0.01) return;
    dir.divideScalar(len);
    const nx = this.pos.x + dir.x * step;
    const nz = this.pos.z + dir.z * step;
    const before = this.pos.clone();
    this.pos.set(nx, 0, nz);
    resolveCollisions(this.pos, 0.5, world.colliders);
    const moved = this.pos.distanceTo(before);
    if (moved < step * 0.35) {
      // slide perpendicular
      const perp = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(rnd() < 0.5 ? 1 : -1);
      this.pos.addScaledVector(perp, step * 0.9);
      resolveCollisions(this.pos, 0.5, world.colliders);
    }
  }
}

/* ---------------- Husks ---------------- */
interface HuskDef { pos: THREE.Vector3; }

function makeHusk(): { group: THREE.Group; parts: Record<string, THREE.Object3D> } {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0x6e675e, roughness: 1 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.6, 4, 7), skin);
  body.position.y = 0.85;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 7), skin);
  head.position.y = 1.36;
  head.rotation.x = 0.5;
  g.add(head);
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.62, 3, 5), skin);
  armL.position.set(-0.24, 1.05, 0.18);
  armL.rotation.x = -0.7;
  const armR = armL.clone(); armR.position.x = 0.24;
  g.add(armL, armR);
  const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.42, 3, 5), skin);
  legL.position.set(-0.11, 0.3, 0);
  const legR = legL.clone(); legR.position.x = 0.11;
  g.add(legL, legR);
  scene2add(g);
  return { group: g, parts: { body, head, armL, armR, legL, legR } };
}

// placeholder to satisfy module scoping; replaced at runtime via setScene
let _scene: THREE.Scene | null = null;
export function setHuskScene(s: THREE.Scene) { _scene = s; }
function scene2add(g: THREE.Group) { if (_scene) _scene.add(g); }

export class Husk {
  group: THREE.Group;
  parts: Record<string, THREE.Object3D>;
  pos: THREE.Vector3;
  home: THREE.Vector3;
  hp = 40;
  dead = false;
  deadT = 0;
  private target: THREE.Vector3;
  private animT = rnd() * 10;
  private attackCd = 0;
  private wanderT = 0;

  constructor(def: HuskDef) {
    const m = makeHusk();
    this.group = m.group;
    this.parts = m.parts;
    this.pos = def.pos.clone();
    this.home = def.pos.clone();
    this.target = def.pos.clone();
    this.group.position.copy(this.pos);
    this.group.rotation.y = rnd() * Math.PI * 2;
  }
  mesh(): THREE.Object3D { return this.group; }
  chest(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, 1.0, this.pos.z); }

  hear(pos: THREE.Vector3, radius: number) {
    if (this.dead) return;
    if (this.pos.distanceTo(pos) < radius * 0.9) this.target.copy(pos);
  }

  onHit(dmg: number) {
    if (this.dead) return;
    this.hp -= dmg;
    if (this.hp <= 0) { this.dead = true; this.deadT = 0; }
    else { this.target.set(this.pos.x, 0, this.pos.z); }
  }

  update(dt: number, world: WorldRefs, players: { pos: THREE.Vector3; downed: boolean; dead: boolean }[], audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number, onHitPlayer: (p: (typeof players)[number], dmg: number) => void) {
    if (this.dead) {
      this.deadT += dt;
      this.group.rotation.x = clamp(this.deadT * 3, 0, Math.PI / 2);
      this.group.position.y = -clamp((this.deadT - 0.5) * 0.4, 0, 1.2);
      if (this.deadT > 12) this.group.visible = false;
      return;
    }
    this.animT += dt;
    this.attackCd -= dt;
    this.wanderT -= dt;
    // find nearest living player
    let best: (typeof players)[number] | null = null;
    let bestD = 1e9;
    for (const p of players) {
      if (p.dead) continue;
      const d = this.pos.distanceTo(p.pos);
      if (d < bestD) { bestD = d; best = p; }
    }
    if (best && bestD < 9 && raycastClear(this.chest().add(new THREE.Vector3(0, 0.4, 0)), new THREE.Vector3(best.pos.x, 1.2, best.pos.z), world.occluders)) {
      this.target.copy(best.pos);
    } else if (this.target.distanceTo(this.pos) < 0.8 && this.wanderT <= 0) {
      this.wanderT = 3 + rnd() * 5;
      this.target.copy(this.home).add(new THREE.Vector3((rnd() - 0.5) * 8, 0, (rnd() - 0.5) * 8));
    }
    const speed = best && bestD < 11 ? 1.55 : 0.85;
    const dir = new THREE.Vector3(this.target.x - this.pos.x, 0, this.target.z - this.pos.z);
    if (dir.length() > 0.6) {
      dir.normalize();
      this.pos.addScaledVector(dir, speed * dt);
      resolveCollisions(this.pos, 0.4, world.colliders);
      const s = Math.sin(this.animT * 3.2);
      this.parts.legL.rotation.x = s * 0.4;
      this.parts.legR.rotation.x = -s * 0.4;
      this.group.position.copy(this.pos);
      this.group.rotation.y = Math.atan2(dir.x, dir.z);
      this.group.position.y = Math.abs(Math.sin(this.animT * 3.2)) * 0.04;
      if (rnd() < dt * 0.7) audio.play3d('step', listener, listenerYaw, this.pos, 0.7);
    }
    if (best && bestD < 1.3 && this.attackCd <= 0 && !best.downed) {
      this.attackCd = 1.5;
      onHitPlayer(best, 12);
      audio.play3d('flesh', listener, listenerYaw, this.pos, 0.7);
    }
  }
}

export const HUSK_SPAWNS: THREE.Vector3[] = [
  new THREE.Vector3(26, 0, -6),   // barn
  new THREE.Vector3(-30, 0, 8),   // clinic
  new THREE.Vector3(-20, 0, 10),  // miller
  new THREE.Vector3(20, 0, 16),   // farmhouse
  new THREE.Vector3(-33, 0, -30), // cemetery
  new THREE.Vector3(12, 0, -20),  // near annex
  new THREE.Vector3(42, 0, -28),  // hunter cabin
  new THREE.Vector3(6, 0, 24),    // workshop road
];
