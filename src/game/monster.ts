// HOLLOW VALE — The Shepherd (pursuer AI), The Mother (second stalker) & Husks (minor enemies)
import * as THREE from 'three';
import { clamp, lerp, mulberry32, AudioEngine, EnvState } from './core';
import { WorldRefs, resolveCollisions, raycastClear, SHEPHERD_WAYPOINTS } from './world';
import { makeHumanoid, animWalk, animIdle, headLookAt, type Humanoid } from './characters';

const rnd = mulberry32(777);

type SState = 'patrol' | 'investigate' | 'chase' | 'search' | 'stagger' | 'down';

/* ---------- AI input shapes (supersets of what main.ts passes) ---------- */
export type StalkerPlayer = {
  pos: THREE.Vector3; crouching: boolean; sprinting: boolean; flashlightOn: boolean;
  downed: boolean; dead: boolean; breathHold?: boolean;
};
export type HuskPlayer = { pos: THREE.Vector3; downed: boolean; dead: boolean; crouching?: boolean; breathHold?: boolean };

/* ---------- shared: makeHumanoid models face -Z, our AI faces +Z ---------- */
function wrapHumanoid(h: Humanoid): THREE.Group {
  h.group.rotation.y = Math.PI;
  const wrap = new THREE.Group();
  wrap.add(h.group);
  return wrap;
}

/* ================= The Shepherd ================= */

function makeShepherdModel(scene: THREE.Scene): {
  group: THREE.Group; humanoid: Humanoid; parts: Record<string, THREE.Object3D>;
  eyes: THREE.Mesh[]; lanternLight: THREE.PointLight | null;
} {
  const h = makeHumanoid({ scale: 1.42, face: 'shepherd', hair: 'cowl', outfit: 'robe', skin: '#8a8078', glowEyes: true, eyes: '#ffb32a', lantern: true });
  const wrap = wrapHumanoid(h);
  const eyes: THREE.Mesh[] = [];
  let lanternLight: THREE.PointLight | null = null;
  wrap.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh) {
      const mat = mesh.material as THREE.MeshBasicMaterial;
      if (mat && mat.isMeshBasicMaterial) eyes.push(mesh);
    }
    const li = o as THREE.PointLight;
    if (li.isPointLight) lanternLight = li;
  });
  const p = h.parts;
  const parts: Record<string, THREE.Object3D> = { torso: p.torso, head: p.head, armL: p.armL, armR: p.armR, legL: p.legL, legR: p.legR };
  wrap.visible = false;
  scene.add(wrap);
  return { group: wrap, humanoid: h, parts, eyes, lanternLight };
}

export class Shepherd {
  pos = new THREE.Vector3(20, 0, 40);
  state: SState = 'patrol';
  group: THREE.Group;
  private humanoid: Humanoid;
  private headPivot: THREE.Group;
  private parts: Record<string, THREE.Object3D>;
  private eyes: THREE.Mesh[];
  private lanternLight: THREE.PointLight | null;
  private target = new THREE.Vector3();
  private stateT = 0;
  private wpIndex = 0;
  private poise = 0;
  private attackCd = 0;
  private windupT = 0;
  private pendingCatch: StalkerPlayer | null = null;
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
    this.humanoid = m.humanoid;
    this.headPivot = m.humanoid.headPivot;
    this.parts = m.parts;
    this.eyes = m.eyes;
    this.lanternLight = m.lanternLight;
  }

  spawn(p: THREE.Vector3) {
    this.pos.copy(p);
    this.group.visible = true;
    this.active = true;
    this.state = 'patrol';
    this.windupT = 0;
    this.pendingCatch = null;
    this.poise = 0;
  }
  despawn() { this.active = false; this.group.visible = false; }

  mesh(): THREE.Object3D { return this.group; }
  headPos(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, this.pos.y + 2.3, this.pos.z); }

  hear(pos: THREE.Vector3, radius: number) {
    if (!this.active || this.controlled) return;
    if (this.state === 'chase' || this.state === 'stagger' || this.state === 'down') return;
    const d = this.pos.distanceTo(pos);
    // rain muffles, storm deafens further, rage sharpens
    const eff = radius * (1 - 0.45 * EnvState.rain) * (1 - 0.15 * EnvState.storm) * (1 + this.rage * 0.35);
    if (d < eff) {
      this.state = 'investigate';
      this.target.copy(pos);
      this.stateT = 0;
    }
  }

  onHit(dmg: number, heavy: boolean, audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number) {
    if (!this.active) return;
    audio.play3d('flesh', listener, listenerYaw, this.pos, 0.8);
    this.windupT = 0;
    this.pendingCatch = null;
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
    this.windupT = 0;
    this.pendingCatch = null;
    this.group.rotation.z = 1.2;
  }

  update(dt: number, world: WorldRefs, players: StalkerPlayer[], audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number, onCatch: (p: StalkerPlayer) => void) {
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
    this.twitchT -= dt;

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
      // vision: flashlight betrays its bearer (longer range, wider fov), crouching hides
      let seen: StalkerPlayer | null = null;
      for (const p of players) {
        if (p.dead) continue;
        const eye = this.headPos();
        const pp = new THREE.Vector3(p.pos.x, 1.5, p.pos.z);
        const d = eye.distanceTo(pp);
        let maxD = 26;
        if (p.flashlightOn) maxD = p.crouching ? 24 : 38;
        else if (p.crouching) maxD = 15;
        // close-range auto-detect (hearing them breathe); breath hold shrinks it
        const closeD = p.breathHold ? 2.6 : 5.5;
        const dot = this.fovDot(pp);
        const fovNeed = p.flashlightOn ? 0.05 : 0.34;
        if (d < closeD || (d < maxD && dot > fovNeed && raycastClear(eye, pp, world.occluders))) {
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
          let best: StalkerPlayer | null = null;
          let bestD = 1e9;
          for (const p of players) {
            if (p.dead) continue;
            const d = this.pos.distanceTo(p.pos);
            if (d < bestD) { bestD = d; best = p; }
          }
          if (!best) { this.state = 'patrol'; this.windupT = 0; this.pendingCatch = null; break; }
          // wind-up: frozen, arm raised; strike only with LOS at the final moment
          if (this.windupT > 0) {
            this.windupT -= dt;
            this.target.copy(best.pos);
            if (this.windupT <= 0) {
              const t = this.pendingCatch;
              this.pendingCatch = null;
              if (t && !t.dead && raycastClear(this.headPos(), new THREE.Vector3(t.pos.x, 1.3, t.pos.z), world.occluders)) {
                this.humanoid.parts.armR.rotation.x = 0.7;
                audio.play3d('scream', listener, listenerYaw, this.pos, 1);
                onCatch(t);
                this.state = 'stagger';
                this.stateT = 2.1;
              }
              // LOS lost mid-windup: cancel silently, no damage through walls
            }
            break;
          }
          this.target.copy(best.pos);
          this.moveTowards(this.target, (3.45 + this.rage * 0.85) * (1 - 0.08 * EnvState.storm) * dt, world);
          if (bestD < 1.9 && this.attackCd <= 0 && !best.downed
            && raycastClear(this.headPos(), new THREE.Vector3(best.pos.x, 1.3, best.pos.z), world.occluders)) {
            this.attackCd = 1.6;
            this.windupT = 0.42;
            this.pendingCatch = best;
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

    const frameMove = this.pos.distanceTo(this.lastPos);
    this.lastPos.copy(this.pos);

    // animation
    const chase = this.state === 'chase';
    const moving = frameMove > 0.01 && this.state !== 'down' && this.state !== 'stagger';
    if (this.state === 'down') animIdle(this.humanoid, this.animT);
    else if (moving) animWalk(this.humanoid, this.animT, chase ? 9 : 4.5, chase ? 0.75 : 0.5);
    else animIdle(this.humanoid, this.animT);
    if (chase) {
      const pr = this.humanoid.parts;
      pr.armL.rotation.x = -1.1 + Math.sin(this.animT * 9) * 0.2;
      if (this.windupT > 0) pr.armR.rotation.x = lerp(pr.armR.rotation.x, -2.5, clamp(dt * 14, 0, 1));
      else pr.armR.rotation.x = -0.9 + Math.sin(this.animT * 9 + 1.2) * 0.2;
    }
    // head tracking toward nearest player of interest, else idle twitch
    let headT: THREE.Vector3 | null = null;
    if (this.state === 'investigate' || chase || this.state === 'search') {
      let nd = 20;
      for (const p of players) {
        if (p.dead) continue;
        const d = this.pos.distanceTo(p.pos);
        if (d < nd) { nd = d; headT = new THREE.Vector3(p.pos.x, 1.6, p.pos.z); }
      }
    }
    if (headT) {
      headLookAt(this.humanoid, headT, 0.9);
      this.twitchT = Math.max(this.twitchT, 0.35);
    } else if (this.twitchT <= 0) {
      this.twitchT = chase ? 0.12 : 0.8 + rnd() * 1.6;
      this.headPivot.rotation.z = (rnd() - 0.5) * 0.5;
      this.headPivot.rotation.x = (rnd() - 0.5) * 0.3;
      this.headPivot.rotation.y *= 0.6;
    }
    if (this.lanternLight) this.lanternLight.intensity = 4.5 * (0.85 + 0.15 * Math.sin(this.animT * 11));
    for (const e of this.eyes) (e.material as THREE.MeshBasicMaterial).color.setHex(chase ? 0xff3b1f : 0xffb32a);

    this.group.position.copy(this.pos);
    const faceDir = new THREE.Vector3().subVectors(this.target, this.pos);
    if (faceDir.lengthSq() > 0.01) this.group.rotation.y = Math.atan2(faceDir.x, faceDir.z);

    // steps (frameMove is real distance travelled this frame)
    this.stepDist += frameMove;
    if (this.stepDist > 1.6 && this.state !== 'down') {
      this.stepDist = 0;
      audio.play3d('step', listener, listenerYaw, this.pos, 1.4);
    }
    const dL = listener ? this.pos.distanceTo(listener) : 99;
    const growlGain = chase ? clamp(0.28 * (1 - dL / 34), 0, 0.3) : clamp(0.07 * (1 - dL / 20), 0, 0.08);
    audio.setGrowl(growlGain, chase ? 66 : 52);
  }

  private fovDot(p: THREE.Vector3): number {
    const to = new THREE.Vector3(p.x - this.pos.x, 0, p.z - this.pos.z).normalize();
    const fwd = new THREE.Vector3(Math.sin(this.group.rotation.y), 0, Math.cos(this.group.rotation.y));
    return to.dot(fwd);
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

/* ================= The Mother (second stalker) ================= */

export const MOTHER_SPAWN = new THREE.Vector3(38, 0, 8);

function makeMotherModel(scene: THREE.Scene): { group: THREE.Group; humanoid: Humanoid } {
  const h = makeHumanoid({ scale: 1.36, face: 'mother', hair: 'long', hairColor: '#0a0a0c', outfit: 'dress', skin: '#b8b2ac', glowEyes: true, eyes: '#d8e8f0' });
  const wrap = wrapHumanoid(h);
  wrap.visible = false;
  scene.add(wrap);
  return { group: wrap, humanoid: h };
}

export class Mother {
  pos = MOTHER_SPAWN.clone();
  state: SState = 'patrol';
  group: THREE.Group;
  private humanoid: Humanoid;
  private headPivot: THREE.Group;
  private target = new THREE.Vector3();
  private stateT = 0;
  private wpIndex = 0;
  private poise = 0;
  private attackCd = 0;
  private windupT = 0;
  private pendingCatch: StalkerPlayer | null = null;
  private stuckT = 0;
  private lastPos = new THREE.Vector3();
  private stepDist = 0;
  private twitchT = 0;
  private moanT = 4 + rnd() * 8;
  private animT = rnd() * 10;
  controlled = false;
  netPos = new THREE.Vector3();
  netYaw = 0;
  active = false;
  rage = 0;

  constructor(scene: THREE.Scene) {
    const m = makeMotherModel(scene);
    this.group = m.group;
    this.humanoid = m.humanoid;
    this.headPivot = m.humanoid.headPivot;
  }

  spawn(p: THREE.Vector3) {
    this.pos.copy(p);
    this.group.visible = true;
    this.active = true;
    this.state = 'patrol';
    this.windupT = 0;
    this.pendingCatch = null;
    this.poise = 0;
  }
  despawn() { this.active = false; this.group.visible = false; }

  mesh(): THREE.Object3D { return this.group; }
  headPos(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, this.pos.y + 2.2, this.pos.z); }

  hear(pos: THREE.Vector3, radius: number) {
    if (!this.active || this.controlled) return;
    if (this.state === 'chase' || this.state === 'stagger' || this.state === 'down') return;
    // nearly deaf: everything multiplied by 0.3 (rain/storm mute her further)
    const d = this.pos.distanceTo(pos);
    const eff = radius * 0.3 * (1 - 0.45 * EnvState.rain) * (1 - 0.15 * EnvState.storm) * (1 + this.rage * 0.35);
    if (d < eff) {
      this.state = 'investigate';
      this.target.copy(pos);
      this.stateT = 0;
    }
  }

  onHit(dmg: number, heavy: boolean, audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number) {
    if (!this.active) return;
    audio.play3d('flesh', listener, listenerYaw, this.pos, 0.8);
    this.windupT = 0;
    this.pendingCatch = null;
    if (heavy) {
      this.knockdown(5);
      return;
    }
    this.poise += dmg;
    if (this.poise >= 70) {
      this.poise = 0;
      this.knockdown(5);
    } else {
      this.state = 'stagger';
      this.stateT = 1.4;
    }
  }
  knockdown(t: number) {
    this.state = 'down';
    this.stateT = t;
    this.poise = 0;
    this.windupT = 0;
    this.pendingCatch = null;
    this.group.rotation.z = 1.2;
  }

  update(dt: number, world: WorldRefs, players: StalkerPlayer[], audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number, onCatch: (p: StalkerPlayer) => void) {
    if (!this.active) return; // the Shepherd owns the growl; the Mother is silent when away
    if (this.controlled) {
      this.pos.lerp(this.netPos, clamp(dt * 8, 0, 1));
      this.animT += dt;
      this.group.position.copy(this.pos);
      this.group.position.y = 0.06 + Math.sin(this.animT * 1.7) * 0.04;
      this.group.rotation.y = this.netYaw;
      return;
    }
    this.stateT -= dt;
    this.attackCd -= dt;
    this.animT += dt;
    this.twitchT -= dt;

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
      // sight: far, near-omnidirectional; crouch and breath-hold are the only mercy
      let seen: StalkerPlayer | null = null;
      for (const p of players) {
        if (p.dead) continue;
        const eye = this.headPos();
        const pp = new THREE.Vector3(p.pos.x, 1.5, p.pos.z);
        const d = eye.distanceTo(pp);
        let maxD = 44;
        if (p.flashlightOn) maxD = 48;
        if (p.crouching) maxD = 18;
        const closeD = p.breathHold ? 3.0 : 4.5;
        const dot = this.fovDot(pp);
        if (d < closeD || (d < maxD && dot > 0.0 && raycastClear(eye, pp, world.occluders))) {
          seen = p; break;
        }
      }
      if (seen && this.state !== 'chase') {
        this.state = 'chase';
        this.stateT = 0;
        audio.play3d('coo', listener, listenerYaw, this.pos, 0.95);
      }
      switch (this.state) {
        case 'patrol': {
          if (this.stateT <= 0 || this.target.distanceTo(this.pos) < 1.2) {
            this.wpIndex = (this.wpIndex + 1 + Math.floor(rnd() * 2)) % SHEPHERD_WAYPOINTS.length;
            this.target.copy(SHEPHERD_WAYPOINTS[this.wpIndex]);
            this.stateT = 30;
          }
          this.moveTowards(this.target, 2.4 * dt, world);
          break;
        }
        case 'investigate': {
          this.moveTowards(this.target, 3.2 * dt, world);
          if (this.target.distanceTo(this.pos) < 1.4) {
            this.state = 'search'; this.stateT = 5;
            this.target.copy(this.pos).add(new THREE.Vector3((rnd() - 0.5) * 14, 0, (rnd() - 0.5) * 14));
          }
          break;
        }
        case 'chase': {
          let best: StalkerPlayer | null = null;
          let bestD = 1e9;
          for (const p of players) {
            if (p.dead) continue;
            const d = this.pos.distanceTo(p.pos);
            if (d < bestD) { bestD = d; best = p; }
          }
          if (!best) { this.state = 'patrol'; this.windupT = 0; this.pendingCatch = null; break; }
          if (this.windupT > 0) {
            this.windupT -= dt;
            this.target.copy(best.pos);
            if (this.windupT <= 0) {
              const t = this.pendingCatch;
              this.pendingCatch = null;
              if (t && !t.dead && raycastClear(this.headPos(), new THREE.Vector3(t.pos.x, 1.3, t.pos.z), world.occluders)) {
                this.humanoid.parts.armR.rotation.x = 0.6;
                audio.play3d('flesh', listener, listenerYaw, this.pos, 0.9);
                onCatch(t);
                this.state = 'stagger';
                this.stateT = 1.6;
              }
            }
            break;
          }
          this.target.copy(best.pos);
          this.moveTowards(this.target, (4.9 + this.rage * 0.4) * (1 - 0.08 * EnvState.storm) * dt, world);
          if (bestD < 2.0 && this.attackCd <= 0 && !best.downed
            && raycastClear(this.headPos(), new THREE.Vector3(best.pos.x, 1.3, best.pos.z), world.occluders)) {
            this.attackCd = 1.4;
            this.windupT = 0.32;
            this.pendingCatch = best;
          }
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
          this.moveTowards(this.target, 2.2 * dt, world);
          if (this.target.distanceTo(this.pos) < 1.4 || this.stateT <= 0) {
            if (this.stateT <= 0) { this.state = 'patrol'; this.stateT = 0; }
            else this.target.copy(this.pos).add(new THREE.Vector3((rnd() - 0.5) * 18, 0, (rnd() - 0.5) * 18));
          }
          break;
        }
      }
      // mournful ambience while unaware
      if (this.state === 'patrol' || this.state === 'investigate') {
        this.moanT -= dt;
        if (this.moanT <= 0) {
          this.moanT = 3 + rnd() * 8;
          audio.play3d('moan', listener, listenerYaw, this.pos, 0.5);
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

    const frameMove = this.pos.distanceTo(this.lastPos);
    this.lastPos.copy(this.pos);

    // animation: hovering dress, limp arms that rise when she hunts
    const chase = this.state === 'chase';
    const moving = frameMove > 0.01 && this.state !== 'down' && this.state !== 'stagger';
    if (this.state === 'down') animIdle(this.humanoid, this.animT);
    else if (moving) animWalk(this.humanoid, this.animT, chase ? 7 : 3.6, chase ? 0.6 : 0.42);
    else animIdle(this.humanoid, this.animT);
    const armTarget = chase ? -1.35 : 0.15;
    const armK = clamp(dt * (chase ? 5 : 3), 0, 1);
    this.humanoid.parts.armL.rotation.x = lerp(this.humanoid.parts.armL.rotation.x, armTarget, armK);
    this.humanoid.parts.armR.rotation.x = lerp(this.humanoid.parts.armR.rotation.x, armTarget, armK);
    if (chase && this.windupT > 0) this.humanoid.parts.armR.rotation.x = lerp(this.humanoid.parts.armR.rotation.x, -2.2, clamp(dt * 14, 0, 1));
    let headT: THREE.Vector3 | null = null;
    if (this.state === 'investigate' || chase || this.state === 'search') {
      let nd = 20;
      for (const p of players) {
        if (p.dead) continue;
        const d = this.pos.distanceTo(p.pos);
        if (d < nd) { nd = d; headT = new THREE.Vector3(p.pos.x, 1.6, p.pos.z); }
      }
    }
    if (headT) {
      headLookAt(this.humanoid, headT, 0.9);
      this.twitchT = Math.max(this.twitchT, 0.35);
    } else if (this.twitchT <= 0) {
      this.twitchT = chase ? 0.12 : 0.8 + rnd() * 1.6;
      this.headPivot.rotation.z = (rnd() - 0.5) * 0.4;
      this.headPivot.rotation.x = (rnd() - 0.5) * 0.25;
      this.headPivot.rotation.y *= 0.6;
    }

    this.group.position.copy(this.pos);
    this.group.position.y = this.state === 'down' ? 0.02 : 0.06 + Math.sin(this.animT * 1.7) * 0.04;
    const faceDir = new THREE.Vector3().subVectors(this.target, this.pos);
    if (faceDir.lengthSq() > 0.01) this.group.rotation.y = Math.atan2(faceDir.x, faceDir.z);

    // soft footsteps
    this.stepDist += frameMove;
    if (this.stepDist > 1.7 && this.state !== 'down') {
      this.stepDist = 0;
      audio.play3d('step', listener, listenerYaw, this.pos, 0.8);
    }
  }

  private fovDot(p: THREE.Vector3): number {
    const to = new THREE.Vector3(p.x - this.pos.x, 0, p.z - this.pos.z).normalize();
    const fwd = new THREE.Vector3(Math.sin(this.group.rotation.y), 0, Math.cos(this.group.rotation.y));
    return to.dot(fwd);
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
      const perp = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(rnd() < 0.5 ? 1 : -1);
      this.pos.addScaledVector(perp, step * 0.9);
      resolveCollisions(this.pos, 0.5, world.colliders);
    }
  }
}

/* ---------------- Husks ---------------- */
interface HuskDef { pos: THREE.Vector3; }

const HUSK_SKINS = ['#6e675e', '#66665a', '#5e6458', '#6a6a5c'];
let huskCounter = 0;

function makeHuskModel(skin: string, scale: number): { group: THREE.Group; humanoid: Humanoid } {
  const h = makeHumanoid({ scale, face: 'husk', outfit: 'rags', skin });
  const wrap = wrapHumanoid(h);
  scene2add(wrap);
  return { group: wrap, humanoid: h };
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
  lootable = false;
  looted = false;
  emerging = 0;
  private humanoid: Humanoid;
  private headPivot: THREE.Group;
  target: THREE.Vector3;  // public: main.ts reads it for stealth-kill awareness checks
  private animT = rnd() * 10;
  private attackCd = 0;
  private wanderT = 0;

  constructor(def: HuskDef, opts?: { skin?: string; emerging?: number }) {
    const idx = huskCounter++;
    const m = makeHuskModel(opts?.skin ?? HUSK_SKINS[idx % HUSK_SKINS.length], 0.88 + (idx % 6) * 0.02);
    this.group = m.group;
    this.humanoid = m.humanoid;
    this.headPivot = m.humanoid.headPivot;
    const p = m.humanoid.parts;
    this.parts = { torso: p.torso, head: p.head, armL: p.armL, armR: p.armR, legL: p.legL, legR: p.legR };
    this.pos = def.pos.clone();
    this.home = def.pos.clone();
    this.target = def.pos.clone();
    this.emerging = opts?.emerging ?? 0;
    this.group.position.copy(this.pos);
    if (this.emerging > 0) this.group.position.y = -1.15;
    this.group.rotation.y = rnd() * Math.PI * 2;
  }
  mesh(): THREE.Object3D { return this.group; }
  chest(): THREE.Vector3 { return new THREE.Vector3(this.pos.x, 1.0, this.pos.z); }

  hear(pos: THREE.Vector3, radius: number) {
    if (this.dead || this.emerging > 0) return;
    if (this.pos.distanceTo(pos) < radius * 0.9) this.target.copy(pos);
  }

  onHit(dmg: number) {
    if (this.dead) return;
    this.hp -= dmg;
    if (this.hp <= 0) {
      this.dead = true;
      this.deadT = 0;
      this.lootable = true;
      this.looted = false;
    } else {
      this.target.set(this.pos.x, 0, this.pos.z);
    }
  }

  /** Lootable corpse (feature 18): one weighted random bundle, then spent. */
  searchLoot(): Record<string, number> | null {
    if (!this.lootable || this.looted) return null;
    this.looted = true;
    const r = rnd();
    if (r < 0.35) return { cloth: 1 };
    if (r < 0.55) return { ammo_pistol: 3 };
    if (r < 0.7) return { herb: 1 };
    if (r < 0.82) return { battery: 1 };
    if (r < 0.92) return { trinket: 1 };
    return { bandage: 1 };
  }

  update(dt: number, world: WorldRefs, players: HuskPlayer[], audio: AudioEngine, listener: THREE.Vector3 | null, listenerYaw: number, onHitPlayer: (p: HuskPlayer, dmg: number) => void) {
    if (this.dead) {
      this.deadT += dt;
      this.group.rotation.x = clamp(this.deadT * 3, 0, Math.PI / 2);
      this.group.position.y = -clamp((this.deadT - 0.5) * 0.12, 0, 0.25); // shallow sink: stays lootable
      if (this.deadT > 30) { this.group.visible = false; this.lootable = false; }
      return;
    }
    if (this.emerging > 0) {
      this.emerging -= dt;
      this.group.position.y = -1.15 * clamp(this.emerging / 1.4, 0, 1);
      if (rnd() < dt * 3) audio.play3d('flesh', listener, listenerYaw, this.pos, 0.8);
      return;
    }
    this.animT += dt;
    this.attackCd -= dt;
    this.wanderT -= dt;
    // find nearest living player
    let best: HuskPlayer | null = null;
    let bestD = 1e9;
    for (const p of players) {
      if (p.dead) continue;
      const d = this.pos.distanceTo(p.pos);
      if (d < bestD) { bestD = d; best = p; }
    }
    // aggro: facing + LOS required; crouch/breath-hold shrink the radius, rain muffles it
    let aggro = false;
    if (best) {
      let radius = best.breathHold ? 4.0 : best.crouching ? 5.5 : 9;
      radius *= 1 - 0.3 * EnvState.rain;
      const toX = best.pos.x - this.pos.x;
      const toZ = best.pos.z - this.pos.z;
      const len = Math.hypot(toX, toZ);
      // d<2.5 bypasses the facing cone, EXCEPT when the player crouches behind us (stealth kills stay viable)
      const behindQuiet = best.crouching && len > 0.001 && ((toX / len) * Math.sin(this.group.rotation.y) + (toZ / len) * Math.cos(this.group.rotation.y)) <= 0.05;
      const facing = (bestD < 2.5 && !behindQuiet) || (len > 0.001 && ((toX / len) * Math.sin(this.group.rotation.y) + (toZ / len) * Math.cos(this.group.rotation.y)) > 0.05);
      aggro = bestD < radius && facing
        && raycastClear(this.chest().add(new THREE.Vector3(0, 0.4, 0)), new THREE.Vector3(best.pos.x, 1.2, best.pos.z), world.occluders);
      if (aggro) this.target.copy(best.pos);
    }
    if (!aggro && this.target.distanceTo(this.pos) < 0.8 && this.wanderT <= 0) {
      this.wanderT = 3 + rnd() * 5;
      this.target.copy(this.home).add(new THREE.Vector3((rnd() - 0.5) * 8, 0, (rnd() - 0.5) * 8));
    }
    const speed = best && bestD < 11 ? 1.55 : 0.85;
    const dir = new THREE.Vector3(this.target.x - this.pos.x, 0, this.target.z - this.pos.z);
    const walking = dir.length() > 0.6;
    if (walking) {
      dir.normalize();
      this.pos.addScaledVector(dir, speed * dt);
      resolveCollisions(this.pos, 0.4, world.colliders);
      animWalk(this.humanoid, this.animT, 3.2, 0.4);
      this.humanoid.parts.legR.rotation.x *= 0.45; // asymmetric limp
      this.group.position.copy(this.pos);
      this.group.rotation.y = Math.atan2(dir.x, dir.z);
      this.group.position.y = Math.abs(Math.sin(this.animT * 3.2)) * 0.04;
      if (rnd() < dt * 0.7) audio.play3d('step', listener, listenerYaw, this.pos, 0.7);
    } else {
      animIdle(this.humanoid, this.animT);
      this.group.position.copy(this.pos);
    }
    // arms rise zombie-style when a player is close
    const near = best !== null && bestD < 6;
    if (near) {
      const k = clamp(dt * 5, 0, 1);
      this.humanoid.parts.armL.rotation.x = lerp(this.humanoid.parts.armL.rotation.x, -0.95, k);
      this.humanoid.parts.armR.rotation.x = lerp(this.humanoid.parts.armR.rotation.x, -0.95, k);
    } else if (!walking) {
      const k = clamp(dt * 2, 0, 1);
      this.humanoid.parts.armL.rotation.x = lerp(this.humanoid.parts.armL.rotation.x, 0, k);
      this.humanoid.parts.armR.rotation.x = lerp(this.humanoid.parts.armR.rotation.x, 0, k);
    }
    // lolling head
    this.headPivot.rotation.z = 0.28 + Math.sin(this.animT * 2.3) * 0.05;
    // attack: LOS required — no damage through walls
    if (best && bestD < 1.3 && this.attackCd <= 0 && !best.downed
      && raycastClear(this.chest().add(new THREE.Vector3(0, 0.4, 0)), new THREE.Vector3(best.pos.x, 1.3, best.pos.z), world.occluders)) {
      this.attackCd = 1.5;
      onHitPlayer(best, 12);
      audio.play3d('flesh', listener, listenerYaw, this.pos, 0.7);
    }
  }
}

/** Grave husk (feature 11): claws out of the soil over 1.4s, then behaves normally. */
export function makeGraveHusk(pos: THREE.Vector3): Husk {
  return new Husk({ pos }, { skin: '#565048', emerging: 1.4 });
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
