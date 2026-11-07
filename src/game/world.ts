// HOLLOW VALE — world builder: cursed village map, collision, lighting, interactables registry
import * as THREE from 'three';
import { getTexture, repeatTex, mulberry32 } from './core';

export interface AABB { minX: number; maxX: number; minZ: number; maxZ: number }
export interface Interactable {
  id: string;
  pos: THREE.Vector3;
  radius: number;
  prompt: string;
  enabled: boolean;
  once?: boolean;
  used?: boolean;
  onInteract: (player: unknown) => void;
  highlight?: THREE.Object3D;
}
export interface LampRef { light: THREE.PointLight; base: number; phase: number }
export interface BrazierRef { id: string; pos: THREE.Vector3; light: THREE.PointLight | null; flame: THREE.Mesh | null; lit: boolean; pos3: THREE.Vector3 }
export interface DoorRef { id: string; locked: boolean; open: boolean; pivot: THREE.Object3D; collider: AABB }

export interface WorldRefs {
  root: THREE.Group;
  colliders: AABB[];
  occluders: THREE.Mesh[];
  interactables: Interactable[];
  lamps: LampRef[];
  braziers: BrazierRef[];
  doors: Map<string, DoorRef>;
  gatePivot: THREE.Object3D | null;
  stars: THREE.Points;
  moonMesh: THREE.Mesh;
  groundMesh: THREE.Mesh;
  wellBucket: THREE.Object3D | null;
  wellRope: THREE.Mesh | null;
}

export const SHEPHERD_WAYPOINTS: THREE.Vector3[] = [
  new THREE.Vector3(0, 0, 14), new THREE.Vector3(14, 0, 2), new THREE.Vector3(10, 0, -16),
  new THREE.Vector3(-12, 0, -18), new THREE.Vector3(-22, 0, 0), new THREE.Vector3(-14, 0, 18),
  new THREE.Vector3(4, 0, 28), new THREE.Vector3(24, 0, 8), new THREE.Vector3(-30, 0, -22),
  new THREE.Vector3(30, 0, -22), new THREE.Vector3(0, 0, 42),
];

export const PLAYER_SPAWN = new THREE.Vector3(0, 0, 52);

const rnd = mulberry32(20240613);

function boxMesh(
  w: number, h: number, d: number, mat: THREE.Material,
  x: number, y: number, z: number, ry = 0,
  parent?: THREE.Object3D
): THREE.Mesh {
  const geo = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.y = ry;
  if (parent) parent.add(m);
  return m;
}

export function aabbFromCenter(cx: number, cz: number, w: number, d: number): AABB {
  return { minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2 };
}

export function resolveCollisions(pos: THREE.Vector3, radius: number, colliders: AABB[]) {
  for (const c of colliders) {
    const cx = Math.max(c.minX, Math.min(pos.x, c.maxX));
    const cz = Math.max(c.minZ, Math.min(pos.z, c.maxZ));
    const dx = pos.x - cx, dz = pos.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 < radius * radius) {
      if (d2 > 1e-8) {
        const d = Math.sqrt(d2);
        pos.x = cx + (dx / d) * radius;
        pos.z = cz + (dz / d) * radius;
      } else {
        // inside: push out along smallest penetration axis
        const px = Math.min(pos.x - c.minX, c.maxX - pos.x);
        const pz = Math.min(pos.z - c.minZ, c.maxZ - pos.z);
        if (px < pz) pos.x = (pos.x - c.minX < c.maxX - pos.x) ? c.minX - radius : c.maxX + radius;
        else pos.z = (pos.z - c.minZ < c.maxZ - pos.z) ? c.minZ - radius : c.maxZ + radius;
      }
    }
  }
}

const _ray = new THREE.Raycaster();
export function raycastClear(from: THREE.Vector3, to: THREE.Vector3, occluders: THREE.Object3D[]): boolean {
  const dir = new THREE.Vector3().subVectors(to, from);
  const len = dir.length();
  if (len < 0.01) return true;
  dir.normalize();
  _ray.set(from, dir);
  _ray.far = len - 0.1;
  const hits = _ray.intersectObjects(occluders, false);
  return hits.length === 0;
}

/* ------------------------------------------------ */

export function buildWorld(scene: THREE.Scene, quality: 'low' | 'medium' | 'high'): WorldRefs {
  const root = new THREE.Group();
  scene.add(root);
  const colliders: AABB[] = [];
  const occluders: THREE.Mesh[] = [];
  const interactables: Interactable[] = [];
  const lamps: LampRef[] = [];
  const braziers: BrazierRef[] = [];
  const doors = new Map<string, DoorRef>();

  const shadows = quality === 'high';

  // ---------- materials ----------
  const matGround = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('ground'), 48, 48), roughness: 1 });
  const matDirt = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('dirt'), 8, 3), roughness: 1 });
  const matPlank = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('plank'), 2, 1), roughness: 0.95 });
  const matPlankDark = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('plankdark'), 2, 1), roughness: 0.95 });
  const matStone = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('stone'), 3, 1.5), roughness: 0.9 });
  const matRoof = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('roof'), 3, 2), roughness: 0.9 });
  const matBark = new THREE.MeshStandardMaterial({ map: getTexture('bark'), roughness: 1 });
  const matFoliage = new THREE.MeshStandardMaterial({ color: 0x16210f, roughness: 1 });
  const matWood = new THREE.MeshStandardMaterial({ map: getTexture('plankdark'), roughness: 0.95 });
  const matMetal = new THREE.MeshStandardMaterial({ map: getTexture('metal'), roughness: 0.6, metalness: 0.5 });
  const matStoneDark = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('stone'), 1, 1), roughness: 0.95, color: 0x8a8a88 });
  const matGlass = new THREE.MeshStandardMaterial({ color: 0x2a3438, roughness: 0.2, metalness: 0.4, transparent: true, opacity: 0.55 });
  const matFireOff = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 1 });

  // ---------- ground & roads ----------
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(180, 180), matGround);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = shadows;
  root.add(ground);
  const road = (x: number, z: number, w: number, d: number) => {
    const r = new THREE.Mesh(new THREE.PlaneGeometry(w, d), matDirt);
    r.rotation.x = -Math.PI / 2;
    r.position.set(x, 0.02, z);
    root.add(r);
  };
  road(0, 20, 4, 66);          // main: square to gate (south)
  road(0, -16, 4, 30);         // square to church
  road(16, -8, 34, 3.4);       // to barn
  road(-16, 8, 26, 3.4);       // to clinic
  road(-12, -20, 24, 3.2);     // to cemetery
  road(12, -24, 18, 3.2);      // to annex
  road(16, 10, 14, 3.2);       // to farmhouse
  road(2, 24, 18, 3.2);        // to workshop

  // ---------- sky: stars + moon ----------
  const starGeo = new THREE.BufferGeometry();
  const starPos: number[] = [];
  for (let i = 0; i < 500; i++) {
    const a = rnd() * Math.PI * 2, r = 300 + rnd() * 100;
    const y = 60 + rnd() * 160;
    starPos.push(Math.cos(a) * r, y, Math.sin(a) * r);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x9fb4d8, size: 1.4, sizeAttenuation: true, fog: false }));
  root.add(stars);
  const moonMesh = new THREE.Mesh(
    new THREE.CircleGeometry(9, 32),
    new THREE.MeshBasicMaterial({ color: 0xcfd8e8, fog: false, transparent: true, opacity: 0.9 })
  );
  moonMesh.position.set(-120, 110, -160);
  moonMesh.lookAt(0, 0, 0);
  root.add(moonMesh);

  // ---------- global lights ----------
  const hemi = new THREE.HemisphereLight(0x27334d, 0x0a0c08, 0.72);
  scene.add(hemi);
  const moon = new THREE.DirectionalLight(0x8ea6cc, 0.68);
  moon.position.set(-60, 90, -80);
  if (shadows) {
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    moon.shadow.camera.left = -90; moon.shadow.camera.right = 90;
    moon.shadow.camera.top = 90; moon.shadow.camera.bottom = -90;
    moon.shadow.camera.far = 260;
  }
  scene.add(moon);

  // ---------- helpers ----------
  const addCollider = (c: AABB) => colliders.push(c);
  const wall = (x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material, solid = true) => {
    const m = boxMesh(w, h, d, mat, x, y, z);
    m.castShadow = shadows; m.receiveShadow = shadows;
    root.add(m);
    occluders.push(m);
    if (solid) addCollider(aabbFromCenter(x, z, w, d));
    return m;
  };

  // gable roof: two slanted boxes
  const gableRoof = (x: number, y: number, z: number, w: number, d: number) => {
    const s = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, 0.25, d * 0.78), matRoof);
    s.position.set(x, y + d * 0.19, z - d * 0.22);
    s.rotation.x = Math.atan2(d * 0.5, d * 0.42) * 0.9;
    s.castShadow = shadows;
    root.add(s); occluders.push(s);
    const s2 = s.clone();
    s2.position.z = z + d * 0.22;
    s2.rotation.x = -s.rotation.x;
    root.add(s2); occluders.push(s2);
    const ridge = boxMesh(w + 0.9, 0.3, 0.6, matWood, x, y + d * 0.36, z);
    root.add(ridge);
  };

  // window: dark emissive pane
  const windowPane = (x: number, y: number, z: number, ry: number, lit: boolean) => {
    const m = boxMesh(1.3, 1.1, 0.08, new THREE.MeshStandardMaterial({
      color: lit ? 0xffb45a : 0x0c0f14, emissive: lit ? 0xff9a2e : 0x000000, emissiveIntensity: lit ? 0.7 : 0, roughness: 0.4,
    }), x, y, z, ry);
    root.add(m);
    return m;
  };

  const lampPost = (x: number, z: number) => {
    const post = boxMesh(0.16, 3.2, 0.16, matWood, x, 1.6, z);
    root.add(post);
    const head = boxMesh(0.5, 0.5, 0.5, matMetal, x, 3.3, z);
    root.add(head);
    const glass = boxMesh(0.36, 0.36, 0.36, new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffa53a, emissiveIntensity: 1.4 }), x, 3.3, z);
    root.add(glass);
    addCollider(aabbFromCenter(x, z, 0.3, 0.3));
    const light = new THREE.PointLight(0xff9a3a, 9, 17, 1.7);
    light.position.set(x, 3.4, z);
    root.add(light);
    lamps.push({ light, base: 9, phase: rnd() * 10 });
  };

  const brazier = (id: string, x: number, z: number) => {
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 0.5, 10), matMetal);
    bowl.position.set(x, 0.9, z);
    root.add(bowl);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.14, 0.8, 8), matMetal);
    leg.position.set(x, 0.4, z);
    root.add(leg);
    addCollider(aabbFromCenter(x, z, 0.9, 0.9));
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.8, 8), matFireOff);
    flame.position.set(x, 1.55, z);
    root.add(flame);
    const b: BrazierRef = { id, pos: new THREE.Vector3(x, 1.2, z), light: null, flame, lit: false, pos3: new THREE.Vector3(x, 1.2, z) };
    braziers.push(b);
    interactables.push({
      id, pos: new THREE.Vector3(x, 1.2, z), radius: 2.4, prompt: 'Light the brazier', enabled: true, once: true,
      highlight: bowl,
      onInteract: () => { /* handled by quests */ },
    });
  };

  // interior furniture
  const furn = (kind: string, x: number, z: number, ry = 0) => {
    switch (kind) {
      case 'table':
        boxMesh(1.8, 0.08, 1.0, matWood, x, 0.78, z, ry, root);
        boxMesh(0.12, 0.78, 0.12, matWood, x - 0.75, 0.39, z - 0.35, 0, root);
        boxMesh(0.12, 0.78, 0.12, matWood, x + 0.75, 0.39, z - 0.35, 0, root);
        boxMesh(0.12, 0.78, 0.12, matWood, x - 0.75, 0.39, z + 0.35, 0, root);
        boxMesh(0.12, 0.78, 0.12, matWood, x + 0.75, 0.39, z + 0.35, 0, root);
        addCollider(aabbFromCenter(x, z, 1.8, 1.0));
        break;
      case 'bed':
        boxMesh(1.2, 0.35, 2.2, matWood, x, 0.28, z, ry, root);
        boxMesh(1.1, 0.18, 1.9, new THREE.MeshStandardMaterial({ map: getTexture('cloth'), roughness: 1 }), x, 0.55, z, ry, root);
        addCollider(aabbFromCenter(x, z, 1.3, 2.3));
        break;
      case 'shelf':
        boxMesh(0.4, 1.8, 1.6, matWood, x, 0.9, z, ry, root);
        addCollider(aabbFromCenter(x, z, 0.5, 1.7));
        break;
      case 'crate':
        boxMesh(0.9, 0.9, 0.9, matPlank, x, 0.45, z, ry + (rnd() - 0.5) * 0.4, root);
        addCollider(aabbFromCenter(x, z, 1.0, 1.0));
        break;
      case 'hay':
        boxMesh(1.4, 1.0, 1.4, new THREE.MeshStandardMaterial({ color: 0x6b5a2a, roughness: 1 }), x, 0.5, z, ry, root);
        addCollider(aabbFromCenter(x, z, 1.5, 1.5));
        break;
      case 'pew':
        boxMesh(2.4, 0.45, 0.5, matWood, x, 0.45, z, ry, root);
        boxMesh(2.4, 0.5, 0.12, matWood, x, 0.85, z - 0.2, ry, root);
        addCollider(aabbFromCenter(x, z, 2.5, 0.6));
        break;
      case 'mortar': {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.24, 10), matStoneDark);
        m.position.set(x, 0.92, z);
        root.add(m);
        break;
      }
      case 'workbench':
        boxMesh(2.2, 0.1, 0.9, matPlank, x, 0.85, z, ry, root);
        boxMesh(0.15, 0.85, 0.15, matWood, x - 0.9, 0.42, z - 0.3, 0, root);
        boxMesh(0.15, 0.85, 0.15, matWood, x + 0.9, 0.42, z - 0.3, 0, root);
        boxMesh(0.15, 0.85, 0.15, matWood, x - 0.9, 0.42, z + 0.3, 0, root);
        boxMesh(0.15, 0.85, 0.15, matWood, x + 0.9, 0.42, z + 0.3, 0, root);
        addCollider(aabbFromCenter(x, z, 2.3, 1.0));
        break;
      case 'grave': {
        const st = boxMesh(0.7, 0.9 + rnd() * 0.3, 0.16, matStoneDark, x, 0.5, z, (rnd() - 0.5) * 0.2);
        st.castShadow = shadows;
        root.add(st);
        addCollider(aabbFromCenter(x, z, 0.8, 0.5));
        break;
      }
    }
  };

  // house with a door gap on one side. N = -z, S = +z, W = -x, E = +x
  interface HouseCfg {
    x: number; z: number; w: number; d: number; h: number;
    door: 'N' | 'S' | 'E' | 'W';
    doorW?: number;
    locked?: string; // door id if locked
    windows?: { side: 'N' | 'S' | 'E' | 'W'; off: number; lit?: boolean }[];
    interior?: [string, number, number, number?][];
    roof?: boolean;
    stone?: boolean;
  }
  const makeHouse = (cfg: HouseCfg) => {
    const { x, z, w, d, h } = cfg;
    const mat = cfg.stone ? matStone : matPlank;
    const dw = cfg.doorW ?? 1.4;
    const wallSegs = (side: 'N' | 'S' | 'E' | 'W', winOffs: number[]) => {
      const horiz = side === 'N' || side === 'S';
      const fixed = side === 'N' ? z - d / 2 : side === 'S' ? z + d / 2 : side === 'W' ? x - w / 2 : x + w / 2;
      const len = horiz ? w : d;
      const isDoorSide = side === cfg.door;
      const segments: [number, number][] = isDoorSide
        ? [[-len / 2, -dw / 2], [dw / 2, len / 2]]
        : [[-len / 2, len / 2]];
      for (const [a, b] of segments) {
        const segLen = b - a;
        if (segLen < 0.05) continue;
        const mid = (a + b) / 2;
        if (horiz) wall(x + mid, h / 2, fixed, segLen, h, 0.3, mat);
        else wall(fixed, h / 2, z + mid, 0.3, h, segLen, mat);
      }
      // lintel above door
      if (isDoorSide) {
        if (horiz) wall(x, h - 0.35, fixed, dw, 0.7, 0.3, mat, false);
        else wall(fixed, h - 0.35, z, 0.3, 0.7, dw, mat, false);
      }
      for (const off of winOffs) {
        if (isDoorSide && Math.abs(off) < 2) continue;
        const wy = h * 0.55;
        if (horiz) windowPane(x + off, wy, fixed + (side === 'N' ? -0.18 : 0.18), 0, !!cfg.windows?.find(ww => ww.off === off)?.lit);
        else windowPane(fixed + (side === 'W' ? -0.18 : 0.18), wy, z + off, Math.PI / 2, !!cfg.windows?.find(ww => ww.off === off)?.lit);
      }
    };
    (['N', 'S', 'E', 'W'] as const).forEach(side => {
      const wins = (cfg.windows || []).filter(v => v.side === side).map(v => v.off);
      wallSegs(side, wins);
    });
    // floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), matWood);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, 0.03, z);
    root.add(floor);
    if (cfg.roof !== false) gableRoof(x, h, z, w, d);
    (cfg.interior || []).forEach(([kind, ix, iz, r]) => furn(kind, x + ix, z + iz, r || 0));
  };

  // locked door leaf
  const makeDoor = (id: string, x: number, z: number, ry: number, locked: boolean) => {
    const pivot = new THREE.Object3D();
    pivot.position.set(x, 0, z);
    pivot.rotation.y = ry;
    const leaf = boxMesh(1.36, 2.2, 0.12, matPlankDark, 0.68, 1.1, 0);
    leaf.castShadow = shadows;
    pivot.add(leaf);
    const knob = boxMesh(0.1, 0.1, 0.16, matMetal, 1.15, 1.05, 0);
    pivot.add(knob);
    root.add(pivot);
    // collider approximated as closed door across gap
    const horiz = Math.abs(Math.sin(ry)) < 0.5;
    const col = horiz ? aabbFromCenter(x + 0.68 * Math.cos(ry), z, 1.4, 0.5) : aabbFromCenter(x, z + 0.68 * Math.cos(ry), 0.5, 1.4);
    addCollider(col);
    const d: DoorRef = { id, locked, open: false, pivot, collider: col };
    doors.set(id, d);
    interactables.push({
      id: 'door_' + id,
      pos: new THREE.Vector3(x, 1.2, z),
      radius: 2.6,
      prompt: locked ? 'Locked' : 'Open door',
      enabled: true,
      onInteract: () => { /* handled by quests */ },
    });
    return d;
  };

  /* ---------------- BUILDINGS ---------------- */

  // Church (north) — big stone
  makeHouse({
    x: 0, z: -30, w: 15, d: 10, h: 5, stone: true, door: 'S',
    windows: [{ side: 'E', off: -3, lit: false }, { side: 'W', off: 3, lit: false }],
    interior: [
      ['pew', -3, -2.5, 0], ['pew', 0, -2.5, 0], ['pew', 3, -2.5, 0],
      ['pew', -3, 0.5, 0], ['pew', 3, 0.5, 0],
      ['table', 0, -4.2, 0],
    ],
  });
  // church spire
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.6, 4.5, 4), matRoof);
  spire.position.set(0, 8, -34.5);
  spire.castShadow = shadows;
  root.add(spire);
  wall(0, 7, -34.5, 2.6, 4.5, 2.6, matStone, false);
  const churchDoor = makeDoor('church', 0.75, -24.9, 0, true);
  // altar cross
  boxMesh(0.14, 1.6, 0.14, matWood, 0, 4.3, -34.4, 0, root);
  boxMesh(0.8, 0.14, 0.14, matWood, 0, 4.6, -34.4, 0, root);

  // Barn (east)
  makeHouse({
    x: 28, z: -8, w: 13, d: 9, h: 4.2, door: 'W', doorW: 2.2,
    interior: [['hay', 3.5, -2], ['hay', 3.5, 1.5], ['crate', -3, -2.5], ['crate', -1.5, 2.8, 0.5], ['workbench', 1, 3.6, 0]],
  });
  // barn silo
  const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 6, 12), matMetal);
  silo.position.set(36.5, 3, -11);
  silo.castShadow = shadows;
  root.add(silo); occluders.push(silo);
  addCollider(aabbFromCenter(36.5, -11, 3.4, 3.4));

  // Miller's house (south-west) — brazier #1
  makeHouse({
    x: -20, z: 12, w: 10, d: 8, h: 3.4, door: 'E',
    windows: [{ side: 'S', off: -2, lit: true }, { side: 'W', off: 0 }],
    interior: [['table', -2.5, -2], ['bed', 3, -2.2, 0], ['shelf', -4.4, 1.5, Math.PI / 2], ['crate', 2, 2.6]],
  });

  // Farmhouse (south-east) — brazier #2
  makeHouse({
    x: 22, z: 18, w: 12, d: 9, h: 3.6, door: 'W',
    windows: [{ side: 'S', off: -3, lit: true }, { side: 'N', off: 2 }],
    interior: [['table', 2.5, -2.4], ['bed', -4, -2.6], ['shelf', 5.4, 2, Math.PI / 2], ['crate', -2, 2.8], ['crate', 0.5, 3.2]],
  });

  // Chapel annex (north-east) — brazier #3
  makeHouse({
    x: 18, z: -28, w: 8, d: 7, h: 3.4, stone: true, door: 'S',
    windows: [{ side: 'W', off: 0 }],
    interior: [['table', 0, -2.4], ['pew', 0, 1.2, 0]],
  });

  // Clinic (west) — mortar + beds
  makeHouse({
    x: -28, z: 10, w: 10, d: 8, h: 3.4, door: 'E',
    windows: [{ side: 'N', off: -2, lit: false }, { side: 'S', off: 2, lit: true }],
    interior: [['bed', -3, -2.2], ['bed', -3, 1.4], ['table', 2.8, -2], ['mortar', 2.8, -2], ['shelf', -4.4, 0, Math.PI / 2]],
  });

  // Workshop (south)
  makeHouse({
    x: -5, z: 30, w: 7, d: 6, h: 3, door: 'N',
    interior: [['workbench', 0, -1.6, 0], ['crate', 2.4, 1.8], ['crate', -2.2, 1.6, 0.7]],
  });

  // Hunter's cabin (far east)
  makeHouse({
    x: 45, z: -30, w: 7, d: 6, h: 3, door: 'W',
    interior: [['bed', 1.8, -1.5], ['shelf', -2.9, 0, Math.PI / 2], ['crate', 1.5, 1.8]],
  });

  // Greenhouse (near clinic)
  const gh = new THREE.Group();
  const ghFrame = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 4.4), matGlass);
  ghFrame.position.set(-40, 1.3, 20);
  gh.add(ghFrame);
  const ghFrameBars = boxMesh(6.2, 0.12, 4.6, matWood, -40, 2.6, 20);
  root.add(ghFrameBars);
  gh.position.set(0, 0, 0);
  root.add(gh);
  addCollider(aabbFromCenter(-40, 20, 6.2, 4.6));

  // Cemetery (north-west): fence + graves + dead tree + altar
  const fenceMat = matWood;
  const fence = (x: number, z: number, w: number, d: number) => {
    wall(x, 0.75, z, w, 1.5, 0.18, fenceMat);
  };
  fence(-33, -46.4, 26, 0.18);
  fence(-33, -24.4, 26, 0.18);
  fence(-46.4, -35.4, 0.18, 22);
  fence(-19.6, -40, 0.18, 14); // gap at south entrance
  for (let gx = -44; gx <= -24; gx += 4) {
    for (let gz = -44; gz <= -28; gz += 4) {
      if (rnd() < 0.75) furn('grave', gx + (rnd() - 0.5), gz + (rnd() - 0.5));
    }
  }
  // cemetery altar
  const altar = boxMesh(1.6, 1.0, 1.0, matStoneDark, -33, 0.5, -41);
  altar.castShadow = shadows;
  root.add(altar);
  addCollider(aabbFromCenter(-33, -41, 1.7, 1.1));
  interactables.push({
    id: 'cemetery_altar', pos: new THREE.Vector3(-33, 1, -41), radius: 2.6, prompt: 'Place the amulet', enabled: true, once: true,
    highlight: altar, onInteract: () => { /* quests */ },
  });

  // Well (center square)
  const wellX = 0, wellZ = 2;
  const wellBody = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.4, 1.2, 12), matStoneDark);
  wellBody.position.set(wellX, 0.6, wellZ);
  root.add(wellBody); occluders.push(wellBody);
  addCollider(aabbFromCenter(wellX, wellZ, 2.6, 2.6));
  boxMesh(0.12, 2.4, 0.12, matWood, wellX - 1.1, 1.2, wellZ, 0, root);
  boxMesh(0.12, 2.4, 0.12, matWood, wellX + 1.1, 1.2, wellZ, 0, root);
  gableRoof(wellX, 2.4, wellZ, 3, 2.4);
  const wellRope = boxMesh(0.03, 2.0, 0.03, new THREE.MeshStandardMaterial({ color: 0x8a7a5a }), wellX, 1.4, wellZ);
  root.add(wellRope);
  const wellBucket = boxMesh(0.4, 0.35, 0.4, matWood, wellX, 0.5, wellZ);
  root.add(wellBucket);
  const crank = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 8), matMetal);
  crank.rotation.z = Math.PI / 2;
  crank.position.set(wellX, 2.1, wellZ);
  root.add(crank);
  interactables.push({
    id: 'well_crank', pos: new THREE.Vector3(wellX + 1.4, 1.4, wellZ), radius: 2.6, prompt: 'Turn the crank', enabled: true, once: false,
    highlight: crank, onInteract: () => { /* quests */ },
  });

  // Gate (south) — big wooden gate in palisade
  const gateZ = 55;
  wall(-6.5, 1.6, gateZ, 9, 3.2, 0.5, matPlankDark);
  wall(6.5, 1.6, gateZ, 9, 3.2, 0.5, matPlankDark);
  const gatePivot = new THREE.Object3D();
  gatePivot.position.set(-1.8, 0, gateZ);
  const gateLeaf = boxMesh(3.5, 3.0, 0.3, matPlankDark, 1.75, 1.5, 0);
  gatePivot.add(gateLeaf);
  boxMesh(0.25, 0.25, 0.5, matMetal, 3.3, 1.5, 0, 0, gatePivot);
  root.add(gatePivot);
  addCollider(aabbFromCenter(0, gateZ, 3.8, 0.7));
  interactables.push({
    id: 'forest_gate', pos: new THREE.Vector3(0, 1.4, gateZ), radius: 3.2, prompt: 'Open the gate', enabled: true, once: false,
    highlight: gateLeaf, onInteract: () => { /* quests */ },
  });

  // village fountain ruins (decor)
  const rubble = boxMesh(1.2, 0.5, 1.2, matStoneDark, 8, 0.25, 8, 0.4);
  root.add(rubble);
  addCollider(aabbFromCenter(8, 8, 1.3, 1.3));

  /* ---------------- lamps ---------------- */
  lampPost(-6, 8); lampPost(6, 8); lampPost(-4, -18); lampPost(4, 42); lampPost(24, -14); lampPost(-26, 6);

  /* ---------------- braziers (quest targets) ---------------- */
  brazier('brazier_miller', -20, 15.2);   // inside miller house corner
  brazier('brazier_farm', 22, 21.2);      // farmhouse
  brazier('brazier_annex', 18, -30.2);    // annex

  /* ---------------- trees (instanced) ---------------- */
  const treeCount = quality === 'low' ? 90 : 150;
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.34, 5.5, 6);
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, matBark, treeCount);
  const folGeo1 = new THREE.ConeGeometry(1.9, 4.6, 7);
  const folGeo2 = new THREE.ConeGeometry(1.4, 3.4, 7);
  const fol1 = new THREE.InstancedMesh(folGeo1, matFoliage, treeCount);
  const fol2 = new THREE.InstancedMesh(folGeo2, matFoliage, treeCount);
  const dummy = new THREE.Object3D();
  let placed = 0;
  const treeRings: [number, number, number, number][] = [
    // border bands: x range, z range
    [-88, 88, -88, -66], [-88, 88, 66, 88],
    [-88, -66, -66, 66], [66, 88, -66, 66],
    [-88, -52, 26, 52], [52, 88, 8, 48], [-52, -44, 28, 44],
    [30, 50, 26, 44], [-58, -40, -58, -46], [36, 56, -52, -34],
  ];
  while (placed < treeCount) {
    const band = treeRings[placed % treeRings.length];
    const x = band[0] + rnd() * (band[1] - band[0]);
    const z = band[2] + rnd() * (band[3] - band[2]);
    const s = 0.8 + rnd() * 0.9;
    dummy.position.set(x, 2.6 * s, z);
    dummy.scale.setScalar(s);
    dummy.rotation.y = rnd() * Math.PI;
    dummy.updateMatrix();
    trunkMesh.setMatrixAt(placed, dummy.matrix);
    dummy.position.y = 5.6 * s;
    dummy.updateMatrix();
    fol1.setMatrixAt(placed, dummy.matrix);
    dummy.position.y = 7.6 * s;
    dummy.updateMatrix();
    fol2.setMatrixAt(placed, dummy.matrix);
    colliders.push(aabbFromCenter(x, z, 0.7, 0.7));
    placed++;
  }
  trunkMesh.instanceMatrix.needsUpdate = true;
  fol1.instanceMatrix.needsUpdate = true;
  fol2.instanceMatrix.needsUpdate = true;
  root.add(trunkMesh, fol1, fol2);

  // dead tree in cemetery
  const deadTrunk = boxMesh(0.5, 5, 0.5, matBark, -33, 2.5, -33, 0.2);
  deadTrunk.castShadow = shadows;
  root.add(deadTrunk);
  boxMesh(0.2, 2.4, 0.2, matBark, -32, 5.6, -33, 0.7, root);
  boxMesh(0.2, 2.0, 0.2, matBark, -34, 5.2, -33.2, -0.6, root);
  addCollider(aabbFromCenter(-33, -33, 0.8, 0.8));

  // boundary walls (invisible)
  const B = 62;
  addCollider({ minX: -B - 6, maxX: -B, minZ: -B - 6, maxZ: B + 6 });
  addCollider({ minX: B, maxX: B + 6, minZ: -B - 6, maxZ: B + 6 });
  addCollider({ minX: -B - 6, maxX: B + 6, minZ: -B - 6, maxZ: -B });
  addCollider({ minX: -B - 6, maxX: B + 6, minZ: B, maxZ: B + 6 });

  return {
    root, colliders, occluders, interactables, lamps, braziers, doors, gatePivot,
    stars, moonMesh, groundMesh: ground, wellBucket, wellRope,
  };
}
