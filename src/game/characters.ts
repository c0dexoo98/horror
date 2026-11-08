// HOLLOW VALE — shared character model library: humanoids with faces, hair, clothes, animation rigs
import * as THREE from 'three';
import { mulberry32 } from './core';

const rnd = mulberry32(4242);

/* ---------- face texture generator (drawn onto sphere UV front) ---------- */
export type FaceKind = 'player' | 'husk' | 'mother' | 'shepherd' | 'merchant' | 'ghost' | 'priest';

const faceCache = new Map<string, THREE.Texture>();

export function faceTexture(kind: FaceKind, tint = '#8a7f70'): THREE.Texture {
  const key = kind + tint;
  const hit = faceCache.get(key);
  if (hit) return hit;
  const S = 256;
  const c = document.createElement('canvas');
  c.width = S; c.height = S;
  const g = c.getContext('2d')!;
  // base skin
  g.fillStyle = tint;
  g.fillRect(0, 0, S, S);
  // skin mottling
  for (let i = 0; i < 220; i++) {
    g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${0.02 + rnd() * 0.05})`;
    g.beginPath(); g.arc(rnd() * S, rnd() * S, 2 + rnd() * 9, 0, Math.PI * 2); g.fill();
  }
  const eyeY = S * 0.42;
  const eyeDX = S * 0.115;
  const drawEye = (x: number, y: number, r: number, iris: string, pupil: string, glow = false) => {
    if (glow) {
      const gr = g.createRadialGradient(x, y, 1, x, y, r * 3);
      gr.addColorStop(0, iris); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r * 3, 0, Math.PI * 2); g.fill();
    } else {
      g.fillStyle = '#d8d2c4';
      g.beginPath(); g.ellipse(x, y, r, r * 0.62, 0, 0, Math.PI * 2); g.fill();
    }
    g.fillStyle = iris;
    g.beginPath(); g.arc(x, y, r * 0.55, 0, Math.PI * 2); g.fill();
    g.fillStyle = pupil;
    g.beginPath(); g.arc(x, y, r * 0.26, 0, Math.PI * 2); g.fill();
  };
  switch (kind) {
    case 'player': {
      drawEye(S / 2 - eyeDX, eyeY, 11, '#4a5a3a', '#101410');
      drawEye(S / 2 + eyeDX, eyeY, 11, '#4a5a3a', '#101410');
      // brows
      g.strokeStyle = 'rgba(30,22,14,0.9)'; g.lineWidth = 5; g.lineCap = 'round';
      g.beginPath(); g.moveTo(S / 2 - eyeDX - 16, eyeY - 20); g.lineTo(S / 2 - eyeDX + 12, eyeY - 26); g.stroke();
      g.beginPath(); g.moveTo(S / 2 + eyeDX - 12, eyeY - 26); g.lineTo(S / 2 + eyeDX + 16, eyeY - 20); g.stroke();
      // nose + mouth + beard shadow
      g.strokeStyle = 'rgba(40,30,20,0.5)'; g.lineWidth = 3;
      g.beginPath(); g.moveTo(S / 2, eyeY + 6); g.lineTo(S / 2 - 6, eyeY + 34); g.stroke();
      g.strokeStyle = 'rgba(50,26,20,0.85)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - 14, S * 0.62); g.quadraticCurveTo(S / 2, S * 0.64, S / 2 + 14, S * 0.62); g.stroke();
      g.fillStyle = 'rgba(30,22,14,0.25)';
      g.beginPath(); g.ellipse(S / 2, S * 0.70, 26, 14, 0, 0, Math.PI * 2); g.fill();
      break;
    }
    case 'husk': {
      // sunken black eyes, slack mouth
      g.fillStyle = 'rgba(8,6,6,0.95)';
      g.beginPath(); g.ellipse(S / 2 - eyeDX, eyeY, 15, 11, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(S / 2 + eyeDX, eyeY, 15, 11, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(120,100,90,0.4)';
      g.beginPath(); g.ellipse(S / 2 - eyeDX, eyeY + 10, 20, 8, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(S / 2 + eyeDX, eyeY + 10, 20, 8, 0, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(20,10,8,0.9)'; g.lineWidth = 5;
      g.beginPath(); g.moveTo(S / 2 - 16, S * 0.64); g.quadraticCurveTo(S / 2, S * 0.70, S / 2 + 16, S * 0.62); g.stroke();
      // dried blood streaks
      g.strokeStyle = 'rgba(70,10,8,0.5)'; g.lineWidth = 3;
      for (let i = 0; i < 5; i++) {
        const x = S * 0.3 + rnd() * S * 0.4;
        g.beginPath(); g.moveTo(x, eyeY + 18 + rnd() * 10); g.lineTo(x + (rnd() - 0.5) * 8, S * 0.8); g.stroke();
      }
      break;
    }
    case 'mother': {
      // pale, wide glassy eyes, black tear streaks, tiny mouth
      drawEye(S / 2 - eyeDX, eyeY, 14, '#cfd8d8', '#0a0a0c');
      drawEye(S / 2 + eyeDX, eyeY, 14, '#cfd8d8', '#0a0a0c');
      g.strokeStyle = 'rgba(6,6,8,0.85)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - eyeDX, eyeY + 14); g.lineTo(S / 2 - eyeDX - 4, S * 0.72); g.stroke();
      g.beginPath(); g.moveTo(S / 2 + eyeDX, eyeY + 14); g.lineTo(S / 2 + eyeDX + 4, S * 0.72); g.stroke();
      g.strokeStyle = 'rgba(40,16,18,0.9)'; g.lineWidth = 3;
      g.beginPath(); g.moveTo(S / 2 - 9, S * 0.66); g.quadraticCurveTo(S / 2, S * 0.69, S / 2 + 9, S * 0.66); g.stroke();
      break;
    }
    case 'shepherd': {
      // glowing amber eyes + stitched mouth — the horror
      drawEye(S / 2 - eyeDX, eyeY, 12, '#ffb32a', '#3a1600', true);
      drawEye(S / 2 + eyeDX, eyeY, 12, '#ffb32a', '#3a1600', true);
      g.strokeStyle = 'rgba(14,10,8,0.95)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - 20, S * 0.63); g.lineTo(S / 2 + 20, S * 0.63); g.stroke();
      g.lineWidth = 2.4;
      for (let x = -16; x <= 16; x += 8) {
        g.beginPath(); g.moveTo(S / 2 + x, S * 0.63 - 7); g.lineTo(S / 2 + x, S * 0.63 + 7); g.stroke();
      }
      // scar across cheek
      g.strokeStyle = 'rgba(30,16,12,0.7)'; g.lineWidth = 3;
      g.beginPath(); g.moveTo(S / 2 + 22, eyeY - 14); g.lineTo(S / 2 + 34, eyeY + 30); g.stroke();
      break;
    }
    case 'merchant': {
      drawEye(S / 2 - eyeDX, eyeY, 10, '#3a2a18', '#0e0a06');
      drawEye(S / 2 + eyeDX, eyeY, 10, '#3a2a18', '#0e0a06');
      g.strokeStyle = 'rgba(30,22,14,0.9)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - eyeDX - 14, eyeY - 18); g.lineTo(S / 2 - eyeDX + 12, eyeY - 24); g.stroke();
      g.beginPath(); g.moveTo(S / 2 + eyeDX - 12, eyeY - 24); g.lineTo(S / 2 + eyeDX + 14, eyeY - 18); g.stroke();
      // smile + stubble
      g.strokeStyle = 'rgba(50,26,20,0.85)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - 13, S * 0.62); g.quadraticCurveTo(S / 2, S * 0.66, S / 2 + 13, S * 0.62); g.stroke();
      g.fillStyle = 'rgba(30,22,14,0.3)';
      g.beginPath(); g.ellipse(S / 2, S * 0.70, 24, 12, 0, 0, Math.PI * 2); g.fill();
      break;
    }
    case 'priest': {
      drawEye(S / 2 - eyeDX, eyeY, 11, '#8a9aa8', '#0a0c10');
      drawEye(S / 2 + eyeDX, eyeY, 11, '#8a9aa8', '#0a0c10');
      g.strokeStyle = 'rgba(20,14,10,0.9)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - 12, S * 0.63); g.lineTo(S / 2 + 12, S * 0.63); g.stroke();
      break;
    }
    case 'ghost': {
      drawEye(S / 2 - eyeDX, eyeY, 13, '#0c0c10', '#000', false);
      drawEye(S / 2 + eyeDX, eyeY, 13, '#0c0c10', '#000', false);
      g.strokeStyle = 'rgba(10,10,14,0.8)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(S / 2 - 15, S * 0.64); g.quadraticCurveTo(S / 2, S * 0.6, S / 2 + 15, S * 0.64); g.stroke();
      break;
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  faceCache.set(key, t);
  return t;
}

/* ---------- cloth texture generator for outfits ---------- */
const clothCache = new Map<string, THREE.Texture>();
export function outfitTexture(kind: 'coat' | 'dress' | 'apron' | 'robe' | 'rags' | 'shirt'): THREE.Texture {
  const hit = clothCache.get(kind);
  if (hit) return hit;
  const S = 256;
  const c = document.createElement('canvas');
  c.width = S; c.height = S;
  const g = c.getContext('2d')!;
  const bases: Record<string, [string, string[]]> = {
    coat: ['#2b313c', ['#232833', '#343b48']],
    dress: ['#6a6560', ['#57534e', '#7a756e']],
    apron: ['#4a3a2c', ['#3c2f24', '#56452f']],
    robe: ['#1c1a20', ['#141318', '#26242c']],
    rags: ['#4a4438', ['#3c362c', '#565044']],
    shirt: ['#5a5248', ['#4c453c', '#675e52']],
  };
  const [base, vars] = bases[kind];
  g.fillStyle = base; g.fillRect(0, 0, S, S);
  for (const v of vars) {
    g.fillStyle = v;
    for (let i = 0; i < 140; i++) {
      g.globalAlpha = 0.1 + rnd() * 0.2;
      g.beginPath(); g.arc(rnd() * S, rnd() * S, 2 + rnd() * 10, 0, Math.PI * 2); g.fill();
    }
  }
  g.globalAlpha = 1;
  // weave lines
  g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 1;
  for (let y = 0; y < S; y += 4) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
  if (kind === 'rags') {
    // stains + tears
    g.fillStyle = 'rgba(60,14,10,0.35)';
    for (let i = 0; i < 8; i++) { g.beginPath(); g.arc(rnd() * S, rnd() * S, 6 + rnd() * 16, 0, Math.PI * 2); g.fill(); }
  }
  if (kind === 'apron') {
    g.fillStyle = 'rgba(200,190,170,0.16)';
    g.fillRect(S * 0.3, S * 0.15, S * 0.4, S * 0.75);
  }
  if (kind === 'robe') {
    g.strokeStyle = 'rgba(90,14,14,0.5)'; g.lineWidth = 6;
    g.beginPath(); g.moveTo(S / 2, 0); g.lineTo(S / 2, S); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  clothCache.set(kind, t);
  return t;
}

/* ---------- humanoid rig ---------- */
export interface HumanoidOpts {
  scale?: number;              // overall height scale (1 = 1.75m)
  skin?: string;               // hex string
  outfit?: 'coat' | 'dress' | 'apron' | 'robe' | 'rags' | 'shirt';
  outfitTint?: number;
  face?: FaceKind;
  hair?: 'none' | 'short' | 'long' | 'bald' | 'hat' | 'cowl';
  hairColor?: string;
  boots?: boolean;
  pack?: boolean;
  eyes?: string;               // override glow eye color (basic material)
  glowEyes?: boolean;
  lantern?: boolean;           // add lantern prop in left hand
  name?: string;
}

export interface Humanoid {
  group: THREE.Group;
  parts: {
    torso: THREE.Mesh; head: THREE.Mesh; hair: THREE.Object3D | null;
    armL: THREE.Group; armR: THREE.Group; legL: THREE.Group; legR: THREE.Group;
  };
  headPivot: THREE.Group;
}

function limb(geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number): THREE.Group {
  const pivot = new THREE.Group();
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  pivot.add(m);
  return pivot;
}

export function makeHumanoid(opts: HumanoidOpts = {}): Humanoid {
  const scale = opts.scale ?? 1;
  const g = new THREE.Group();
  const skinColor = opts.skin ?? '#8a7f70';
  const face = faceTexture(opts.face ?? 'player', skinColor);
  const skinMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(skinColor), roughness: 0.85 });
  const faceMat = new THREE.MeshStandardMaterial({ map: face, roughness: 0.8 });
  const clothMat = new THREE.MeshStandardMaterial({
    map: outfitTexture(opts.outfit ?? 'coat'), roughness: 0.95,
    color: opts.outfitTint !== undefined ? new THREE.Color(opts.outfitTint) : 0xffffff,
  });

  // torso (tapered)
  const torsoGeo = new THREE.CylinderGeometry(0.16, 0.20, 0.62, 8);
  const torso = new THREE.Mesh(torsoGeo, clothMat);
  torso.position.y = 1.12;
  torso.castShadow = true;
  g.add(torso);
  // shoulders
  const shoulders = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.14, 8), clothMat);
  shoulders.position.y = 1.4;
  g.add(shoulders);

  // head: sphere with face texture on front hemisphere (UV sphere: face occupies middle of texture)
  const headPivot = new THREE.Group();
  headPivot.position.y = 1.62;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 12), faceMat);
  head.castShadow = true;
  headPivot.add(head);
  // rotate sphere so the textured front faces -Z (forward used by most models)
  head.rotation.y = Math.PI;
  headPivot.add(head);
  // hair
  let hair: THREE.Object3D | null = null;
  const hairColor = opts.hairColor ?? '#241c12';
  if (opts.hair === 'short' || !opts.hair || opts.hair === 'long') {
    const hm = new THREE.MeshStandardMaterial({ color: new THREE.Color(hairColor), roughness: 1 });
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.165, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hm);
    cap.position.y = 0.02;
    headPivot.add(cap);
    if (opts.hair === 'long') {
      const back = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 0.42, 8, 1, true), hm);
      back.position.set(0, -0.18, -0.05);
      headPivot.add(back);
      hair = back;
    } else hair = cap;
  } else if (opts.hair === 'hat') {
    const hm = new THREE.MeshStandardMaterial({ color: 0x2a2420, roughness: 0.95 });
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.03, 12), hm);
    brim.position.y = 0.1;
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.22, 10), hm);
    top.position.y = 0.22;
    headPivot.add(brim, top);
    hair = brim;
  } else if (opts.hair === 'cowl') {
    const hm = new THREE.MeshStandardMaterial({ color: 0x14120f, roughness: 1 });
    const cowl = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.5, 8), hm);
    cowl.position.y = 0.18;
    headPivot.add(cowl);
    hair = cowl;
  }
  g.add(headPivot);

  // arms (pivot at shoulder)
  const armGeo = new THREE.CapsuleGeometry(0.055, 0.5, 3, 6);
  const armL = limb(armGeo, clothMat, 0, -0.26, 0);
  armL.position.set(-0.3, 1.38, 0);
  const armR = limb(armGeo, clothMat, 0, -0.26, 0);
  armR.position.set(0.3, 1.38, 0);
  // hands
  const handL = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), skinMat);
  handL.position.set(0, -0.56, 0); armL.add(handL);
  const handR = handL.clone(); armR.add(handR);
  g.add(armL, armR);

  // legs (pivot at hip)
  const legGeo = new THREE.CapsuleGeometry(0.075, 0.52, 3, 6);
  const legMat = clothMat;
  const legL = limb(legGeo, legMat, 0, -0.32, 0);
  legL.position.set(-0.11, 0.78, 0);
  const legR = limb(legGeo, legMat, 0, -0.32, 0);
  legR.position.set(0.11, 0.78, 0);
  if (opts.boots !== false) {
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x1c1610, roughness: 1 });
    const bL = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.09, 0.22), bootMat);
    bL.position.set(0, -0.62, 0.03); legL.add(bL);
    const bR = bL.clone(); legR.add(bR);
  }
  g.add(legL, legR);

  // backpack
  if (opts.pack) {
    const packMat = new THREE.MeshStandardMaterial({ color: 0x3a3226, roughness: 1 });
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.18), packMat);
    pack.position.set(0, 1.12, -0.24);
    g.add(pack);
  }

  // glow eyes overlay (small basic-material spheres slightly in front of face)
  if (opts.glowEyes) {
    const em = new THREE.MeshBasicMaterial({ color: opts.eyes ?? 0xffb32a });
    const eL = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 6), em);
    eL.position.set(-0.06, 1.64, -0.13);
    const eR = eL.clone(); eR.position.x = 0.06;
    g.add(eL, eR);
  }

  // lantern prop
  if (opts.lantern) {
    const lg = new THREE.Group();
    const cage = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.2, 0.14), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.5 }));
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.13, 0.09), new THREE.MeshStandardMaterial({ color: 0x221a08, emissive: 0xff8c1a, emissiveIntensity: 1.6 }));
    const light = new THREE.PointLight(0xff8c1a, 4.5, 9, 1.8);
    light.position.y = 0.1;
    lg.add(cage, core, light);
    lg.position.set(-0.42, 0.72, 0.12);
    g.add(lg);
  }

  g.scale.setScalar(scale);
  g.traverse(o => { o.castShadow = true; });
  return {
    group: g,
    parts: { torso, head, hair, armL, armR, legL, legR },
    headPivot,
  };
}

/* ---------- animation helpers ---------- */
export function animWalk(h: Humanoid, t: number, speed: number, amp = 0.55) {
  const s = Math.sin(t * speed);
  h.parts.legL.rotation.x = s * amp;
  h.parts.legR.rotation.x = -s * amp;
  h.parts.armL.rotation.x = -s * amp * 0.7;
  h.parts.armR.rotation.x = s * amp * 0.7;
  h.parts.torso.rotation.z = Math.sin(t * speed) * 0.03;
}
export function animIdle(h: Humanoid, t: number) {
  h.parts.legL.rotation.x *= 0.9;
  h.parts.legR.rotation.x *= 0.9;
  h.parts.armL.rotation.x = Math.sin(t * 1.2) * 0.05;
  h.parts.armR.rotation.x = -Math.sin(t * 1.2) * 0.05;
  h.parts.torso.rotation.z = Math.sin(t * 0.8) * 0.015;
}
export function headLookAt(h: Humanoid, worldTarget: THREE.Vector3, maxAngle = 0.9) {
  const local = h.group.worldToLocal(worldTarget.clone());
  const yaw = Math.atan2(-local.x, -local.z);
  const pitch = Math.atan2(local.y - 1.62, Math.hypot(local.x, local.z));
  h.headPivot.rotation.y = THREE.MathUtils.clamp(yaw, -maxAngle, maxAngle) * 0.6;
  h.headPivot.rotation.x = THREE.MathUtils.clamp(-pitch, -0.5, 0.5) * 0.6;
}
