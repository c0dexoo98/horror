// HOLLOW VALE — world builder: cursed village map, collision, lighting, interactables registry
// Graphics overhaul: bump maps, env reflections, stained glass, volumetric light, fog, dust, crows, loot, ritual
import * as THREE from 'three';
import { getTexture, repeatTex, getSpriteTexture, mulberry32 } from './core';

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

export interface PuddleRef { pos: THREE.Vector3; radius: number; mesh: THREE.Mesh }
export interface LootCrateRef { id: string; rarity: 'green' | 'blue' | 'purple' | 'gold'; pos: THREE.Vector3; opened: boolean }
export interface CrowRef { pos: THREE.Vector3; group: THREE.Group; flown: boolean; fly(): void }

interface CrowBird { bird: THREE.Group; wl: THREE.Mesh; wr: THREE.Mesh; phase: number; ang0: number; spin: number }
interface CrowState { group: THREE.Group; birds: CrowBird[]; flying: boolean; t: number; done: boolean }
interface ChimneyRef { x: number; z: number; topY: number }
interface SmokeRef { s: THREE.Sprite; mat: THREE.SpriteMaterial; x: number; z: number; topY: number; phase: number }
interface FogRef { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; rotSpeed: number; phase: number; x: number; z: number; target: number }
interface LampFx { lamp: LampRef; glowMat: THREE.SpriteMaterial | null; shaftMat: THREE.MeshBasicMaterial | null }

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
  updateAmbient(dt: number, playerPos: THREE.Vector3, elapsed: number): void;
  setEnv(rain: number, storm: number): void;
  dust: { object: THREE.Object3D };
  puddles: PuddleRef[];
  crowSpots: CrowRef[];
  graveArea: { minX: number; minZ: number; maxX: number; maxZ: number };
  gravePoints: THREE.Vector3[];
  mirrorPos: THREE.Vector3;
  mirrorNormal: THREE.Vector3;
  merchantPos: THREE.Vector3;
  lootCrates: LootCrateRef[];
  moonLight: THREE.DirectionalLight;
  ritualPos: THREE.Vector3;
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

/* ---------------- canvas helpers (module-level painters) ---------------- */

function envGradientCanvas(top: string, bottom: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 0, 64);
  grad.addColorStop(0, top);
  grad.addColorStop(1, bottom);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

// tiny night-sky cube for glass/metal/water reflections
function makeEnvCube(): THREE.CubeTexture {
  const faces = [
    envGradientCanvas('#1a2436', '#05060a'), // px
    envGradientCanvas('#1a2436', '#05060a'), // nx
    envGradientCanvas('#243049', '#1a2436'), // py (up)
    envGradientCanvas('#05060a', '#030406'), // ny (down)
    envGradientCanvas('#1a2436', '#05060a'), // pz
    envGradientCanvas('#1a2436', '#05060a'), // nz
  ];
  const cube = new THREE.CubeTexture(faces);
  cube.colorSpace = THREE.SRGBColorSpace;
  cube.needsUpdate = true;
  return cube;
}

// stained glass: mosaic of deep red/blue/gold panes with lead lines (128x192)
function stainedGlassTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 192;
  const g = c.getContext('2d')!;
  const gr = mulberry32(777);
  g.fillStyle = '#141008';
  g.fillRect(0, 0, 128, 192);
  const panes = ['#5a1010', '#10204a', '#6a5210', '#3a1030', '#0e2a22', '#4a1808'];
  const cell = 16;
  for (let yy = 0; yy < 192; yy += cell) {
    for (let xx = 0; xx < 128; xx += cell) {
      g.fillStyle = panes[Math.floor(gr() * panes.length)];
      g.fillRect(xx + 1, yy + 1, cell - 2, cell - 2);
    }
  }
  // lead lines
  g.strokeStyle = 'rgba(12,10,8,0.95)';
  g.lineWidth = 2;
  for (let yy = 0; yy <= 192; yy += cell) { g.beginPath(); g.moveTo(0, yy); g.lineTo(128, yy); g.stroke(); }
  for (let xx = 0; xx <= 128; xx += cell) { g.beginPath(); g.moveTo(xx, 0); g.lineTo(xx, 192); g.stroke(); }
  // medallion
  g.strokeStyle = '#7a5e18';
  g.lineWidth = 3;
  g.beginPath(); g.arc(64, 96, 30, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.arc(64, 96, 16, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const GRAVE_TEXTS = [
  'RIP|1843', 'MOTHER|1831 - 1859', 'THE|SHEPHERD', 'ELIAS|1802 - 1843',
  'ABIGAIL|1851', 'FATHER|REST HERE', 'MARTHA|1877', 'THE WATCHER|1843',
];

// engraved gravestone face (stone bg + chiseled text)
function makeGravestoneTexture(i: number): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 96;
  const g = c.getContext('2d')!;
  const gr = mulberry32(500 + i * 31);
  g.fillStyle = '#585850';
  g.fillRect(0, 0, 64, 96);
  for (let n = 0; n < 240; n++) {
    const v = gr();
    g.fillStyle = v < 0.5 ? 'rgba(40,40,38,0.35)' : 'rgba(110,110,104,0.3)';
    g.fillRect(gr() * 64, gr() * 96, 1 + gr() * 2, 1 + gr() * 2);
  }
  g.strokeStyle = 'rgba(30,30,28,0.6)';
  g.lineWidth = 2;
  g.strokeRect(4, 4, 56, 88);
  const lines = GRAVE_TEXTS[i % GRAVE_TEXTS.length].split('|');
  g.textAlign = 'center';
  g.font = 'bold 10px monospace';
  lines.forEach((ln, k) => {
    const y = 34 + k * 18;
    g.fillStyle = 'rgba(190,190,182,0.28)';
    g.fillText(ln, 33, y + 1);
    g.fillStyle = 'rgba(26,26,24,0.92)';
    g.fillText(ln, 32, y);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// arch triangle placed atop stained windows
const archShape = new THREE.Shape();
archShape.moveTo(-0.65, 0);
archShape.lineTo(0.65, 0);
archShape.lineTo(0, 0.62);
archShape.closePath();
const archGeo = new THREE.ShapeGeometry(archShape);

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

  // ambient systems registries
  const chimneys: ChimneyRef[] = [];
  const smokeSprites: SmokeRef[] = [];
  const fogPlanes: FogRef[] = [];
  const lampFx: LampFx[] = [];
  const crowStates: CrowState[] = [];
  const crowSpots: CrowRef[] = [];
  const puddles: PuddleRef[] = [];
  const lootCrates: LootCrateRef[] = [];
  let glowMul = 1; // rain dims lamp glows
  let fogTargetOp = 0.15;

  // ---------- materials ----------
  const matGround = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('ground'), 48, 48), bumpMap: repeatTex(getTexture('ground'), 48, 48), bumpScale: 0.03, roughness: 1,
  });
  const matDirt = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('dirt'), 8, 3), roughness: 1 });
  const matPlank = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('plank'), 2, 1), bumpMap: repeatTex(getTexture('plank'), 2, 1), bumpScale: 0.02, roughness: 0.95,
  });
  const matPlankDark = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('plankdark'), 2, 1), bumpMap: repeatTex(getTexture('plankdark'), 2, 1), bumpScale: 0.02, roughness: 0.95,
  });
  const matStone = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('stone'), 3, 1.5), bumpMap: repeatTex(getTexture('stone'), 3, 1.5), bumpScale: 0.025, roughness: 0.9,
  });
  const matRoof = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('shingle'), 3, 2), bumpMap: repeatTex(getTexture('shingle'), 3, 2), bumpScale: 0.02, roughness: 0.9,
  });
  const matBrick = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('brick'), 1, 1), bumpMap: repeatTex(getTexture('brick'), 1, 1), bumpScale: 0.03, roughness: 0.95,
  });
  const matIron = new THREE.MeshStandardMaterial({ map: getTexture('iron'), color: 0x9aa0a8, metalness: 0.75, roughness: 0.5 });
  const matBark = new THREE.MeshStandardMaterial({ map: getTexture('bark'), roughness: 1 });
  const matFoliage = new THREE.MeshStandardMaterial({ color: 0x16210f, roughness: 1 });
  const matWood = new THREE.MeshStandardMaterial({ map: getTexture('plankdark'), roughness: 0.95 });
  const matMetal = new THREE.MeshStandardMaterial({ map: getTexture('metal'), roughness: 0.6, metalness: 0.5 });
  const matStoneDark = new THREE.MeshStandardMaterial({ map: repeatTex(getTexture('stone'), 1, 1), roughness: 0.95, color: 0x8a8a88 });
  const matGlass = new THREE.MeshStandardMaterial({ color: 0x2a3438, roughness: 0.2, metalness: 0.4, transparent: true, opacity: 0.55 });
  const matGlassDark = new THREE.MeshStandardMaterial({
    color: 0x18222a, metalness: 0.9, roughness: 0.15, envMapIntensity: 1.3, transparent: true, opacity: 0.85,
  });
  const matGlassLit = new THREE.MeshStandardMaterial({
    color: 0x18222a, metalness: 0.9, roughness: 0.15, envMapIntensity: 1.3, transparent: true, opacity: 0.85,
    emissive: 0xff9a2e, emissiveIntensity: 0.9,
  });
  const matCandle = new THREE.MeshStandardMaterial({ color: 0xcfc4a2, roughness: 0.85 });
  const matBrass = new THREE.MeshStandardMaterial({ color: 0x8a6a2a, metalness: 0.9, roughness: 0.3 });
  const matCrowBody = new THREE.MeshStandardMaterial({ color: 0x0b0b0e, roughness: 0.9 });
  const matCrowWing = new THREE.MeshStandardMaterial({ color: 0x0b0b0e, roughness: 0.9, side: THREE.DoubleSide });
  const matBeak = new THREE.MeshBasicMaterial({ color: 0xb8701e });
  const matFireOff = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 1 });

  // ---------- environment reflections (night sky cube) ----------
  scene.environment = makeEnvCube();
  (scene as unknown as { environmentIntensity: number }).environmentIntensity = 0.3;

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
  const hemi = new THREE.HemisphereLight(0x2c3a56, 0x0d100b, 1.0);
  scene.add(hemi);
  const moonBase = 1.05;
  const moon = new THREE.DirectionalLight(0x8ea6cc, moonBase);
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

  // gable roof: two slanted shingle slabs + fascia boards under the eaves
  const gableRoof = (x: number, y: number, z: number, w: number, d: number) => {
    const rx = Math.max(1, w / 2), ry2 = Math.max(1, d / 2);
    const rMat = new THREE.MeshStandardMaterial({
      map: repeatTex(getTexture('shingle'), rx, ry2), bumpMap: repeatTex(getTexture('shingle'), rx, ry2), bumpScale: 0.02, roughness: 0.9,
    });
    const rot = Math.atan2(d * 0.5, d * 0.42) * 0.9;
    const s = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, 0.25, d * 0.78), rMat);
    s.position.set(x, y + d * 0.19, z - d * 0.22);
    s.rotation.x = rot;
    s.castShadow = shadows;
    root.add(s); occluders.push(s);
    const s2 = s.clone();
    s2.position.z = z + d * 0.22;
    s2.rotation.x = -s.rotation.x;
    root.add(s2); occluders.push(s2);
    const ridge = boxMesh(w + 0.9, 0.3, 0.6, matWood, x, y + d * 0.36, z);
    root.add(ridge);
    // fascia boards under both eaves
    const eaveZ = d * 0.22 + d * 0.39 * Math.cos(rot);
    const eaveY = y + d * 0.19 - d * 0.39 * Math.sin(rot);
    root.add(boxMesh(w + 0.8, 0.22, 0.12, matWood, x, eaveY + 0.04, z - eaveZ - 0.02));
    root.add(boxMesh(w + 0.8, 0.22, 0.12, matWood, x, eaveY + 0.04, z + eaveZ + 0.02));
  };

  // window: wood frame + glassy pane (dark reflective, or warm lit)
  const windowPane = (x: number, y: number, z: number, ry: number, lit: boolean) => {
    const grp = new THREE.Group();
    grp.position.set(x, y, z);
    grp.rotation.y = ry;
    boxMesh(1.48, 0.1, 0.14, matWood, 0, 0.6, 0, 0, grp);
    boxMesh(1.48, 0.1, 0.14, matWood, 0, -0.6, 0, 0, grp);
    boxMesh(0.1, 1.3, 0.14, matWood, -0.69, 0, 0, 0, grp);
    boxMesh(0.1, 1.3, 0.14, matWood, 0.69, 0, 0, 0, grp);
    boxMesh(0.05, 1.1, 0.06, matWood, 0, 0, 0.01, 0, grp);
    boxMesh(1.3, 0.05, 0.06, matWood, 0, 0, 0.01, 0, grp);
    boxMesh(1.3, 1.1, 0.05, lit ? matGlassLit : matGlassDark, 0, 0, 0, 0, grp);
    root.add(grp);
    return grp;
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
    const ref: LampRef = { light, base: 9, phase: rnd() * 10 };
    lamps.push(ref);
    // glow sprite + volumetric shaft (skipped on low quality)
    let glowMat: THREE.SpriteMaterial | null = null;
    let shaftMat: THREE.MeshBasicMaterial | null = null;
    if (quality !== 'low') {
      glowMat = new THREE.SpriteMaterial({ map: getSpriteTexture('glow'), transparent: true, opacity: 0.5, depthWrite: false });
      const glow = new THREE.Sprite(glowMat);
      glow.scale.setScalar(2.2);
      glow.position.set(x, 3.35, z);
      root.add(glow);
      shaftMat = new THREE.MeshBasicMaterial({
        color: 0xffa53a, transparent: true, opacity: 0.045, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const shaft = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.4, 12, 1, true), shaftMat);
      shaft.position.set(x, 1.6, z); // apex up at the lamp head
      root.add(shaft);
    }
    lampFx.push({ lamp: ref, glowMat, shaftMat });
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

  /* ---------------- overhaul helpers ---------------- */

  // brick chimney poking through a roof edge; registers smoke anchor
  const addChimney = (x: number, z: number, h: number) => {
    const body = boxMesh(0.7, 1.6, 0.7, matBrick, x, h + 0.2, z);
    body.castShadow = shadows;
    root.add(body); occluders.push(body);
    boxMesh(0.92, 0.12, 0.92, matStoneDark, x, h + 1.06, z, 0, root);
    const ember = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.36), new THREE.MeshBasicMaterial({ color: 0xff5a1a }));
    ember.rotation.x = -Math.PI / 2;
    ember.position.set(x, h + 1.0, z);
    root.add(ember);
    chimneys.push({ x, z, topY: h + 1.1 });
  };

  // iron fence run: instanced vertical bars + top rail (collider matches old wooden fence)
  const ironBarGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.5, 6);
  const ironFence = (x: number, z: number, w: number, d: number) => {
    addCollider(aabbFromCenter(x, z, w, d));
    const horiz = w > d;
    const len = horiz ? w : d;
    const count = Math.max(2, Math.floor(len / 0.5));
    const bars = new THREE.InstancedMesh(ironBarGeo, matIron, count);
    const dm = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const t = -len / 2 + 0.25 + (i * (len - 0.5)) / (count - 1);
      if (horiz) dm.position.set(x + t, 0.75, z);
      else dm.position.set(x, 0.75, z + t);
      dm.updateMatrix();
      bars.setMatrixAt(i, dm.matrix);
    }
    bars.instanceMatrix.needsUpdate = true;
    root.add(bars);
    const rail = boxMesh(horiz ? len : 0.09, 0.09, horiz ? 0.09 : len, matIron, x, 1.52, z);
    root.add(rail);
    occluders.push(rail);
  };

  // gravestone with random shape + engraved face plane
  const gravestone = (i: number, x: number, z: number) => {
    const grp = new THREE.Group();
    grp.position.set(x, 0, z);
    grp.rotation.y = (rnd() - 0.5) * 0.7;
    if (rnd() < 0.35) grp.rotation.z = (rnd() < 0.5 ? -1 : 1) * 0.12;
    const kind = Math.floor(rnd() * 3);
    const h = 0.95 + rnd() * 0.3;
    const gTex = makeGravestoneTexture(i);
    const faceMat = new THREE.MeshStandardMaterial({ map: gTex, bumpMap: gTex, bumpScale: 0.02, roughness: 0.95 });
    if (kind === 0) {
      // slab
      const st = boxMesh(0.7, h, 0.16, matStoneDark, 0, h / 2, 0, 0, grp);
      st.castShadow = shadows;
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.56, Math.min(0.8, h - 0.15)), faceMat);
      face.position.set(0, h / 2 - 0.05, 0.085);
      grp.add(face);
    } else if (kind === 1) {
      // cross
      boxMesh(0.5, 0.25, 0.3, matStoneDark, 0, 0.125, 0, 0, grp);
      const vert = boxMesh(0.16, h, 0.14, matStoneDark, 0, 0.25 + h / 2, 0, 0, grp);
      vert.castShadow = shadows;
      boxMesh(0.56, 0.15, 0.14, matStoneDark, 0, 0.25 + h * 0.72, 0, 0, grp);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.55), faceMat);
      face.position.set(0, 0.25 + h * 0.45, 0.075);
      grp.add(face);
    } else {
      // obelisk (tapered 4-sided)
      const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.2, h + 0.4, 4), matStoneDark);
      ob.position.y = (h + 0.4) / 2;
      ob.rotation.y = Math.PI / 4;
      ob.castShadow = shadows;
      grp.add(ob);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.6), faceMat);
      face.position.set(0, (h + 0.4) * 0.45, 0.148);
      grp.add(face);
    }
    root.add(grp);
    addCollider(aabbFromCenter(x, z, 0.8, 0.5));
  };

  // bare dead tree: bark trunk + branch cones
  const deadTree = (x: number, z: number, h: number) => {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.3, h, 6), matBark);
    trunk.position.set(x, h / 2, z);
    trunk.castShadow = shadows;
    root.add(trunk); occluders.push(trunk);
    for (let b = 0; b < 4; b++) {
      const bl = 0.9 + rnd() * 0.9;
      const br = new THREE.Mesh(new THREE.ConeGeometry(0.05, bl, 5), matBark);
      br.position.set(x + Math.cos(b * 1.7) * 0.35, h * (0.62 + b * 0.09), z + Math.sin(b * 1.7) * 0.35);
      br.rotation.z = (b % 2 === 0 ? 1 : -1) * (0.8 + rnd() * 0.5);
      br.rotation.x = (rnd() - 0.5) * 0.8;
      root.add(br);
    }
    addCollider(aabbFromCenter(x, z, 0.7, 0.7));
  };

  // stained glass window + arch top
  const stainedMat = new THREE.MeshBasicMaterial({ map: stainedGlassTexture(), side: THREE.DoubleSide });
  const stainedWindow = (x: number, y: number, z: number) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.9), stainedMat);
    p.position.set(x, y, z);
    root.add(p);
    const a = new THREE.Mesh(archGeo, stainedMat);
    a.position.set(x, y + 0.95, z);
    root.add(a);
  };

  // crow perch spot: 3 birds (idle bob; fly() => spiral ascent, wings flap, vanish after 4s)
  const wingGeoL = new THREE.PlaneGeometry(0.24, 0.1);
  wingGeoL.translate(0.12, 0, 0);
  const wingGeoR = new THREE.PlaneGeometry(0.24, 0.1);
  wingGeoR.translate(-0.12, 0, 0);
  const makeCrowSpot = (x: number, y: number, z: number) => {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    root.add(group);
    const st: CrowState = { group, birds: [], flying: false, t: 0, done: false };
    const offs: [number, number, number][] = [[0, 0, 0], [0.3, 0.02, -0.2], [-0.24, 0.04, 0.16]];
    for (let b = 0; b < 3; b++) {
      const bird = new THREE.Group();
      bird.position.set(offs[b][0], offs[b][1], offs[b][2]);
      bird.rotation.y = rnd() * Math.PI * 2;
      const body = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), matCrowBody);
      body.scale.set(0.09, 0.07, 0.16);
      bird.add(body);
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.15, 5), matCrowBody);
      tail.rotation.x = Math.PI / 2 - 0.35;
      tail.position.set(0, 0.01, 0.17);
      bird.add(tail);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.07, 5), matBeak);
      beak.rotation.x = -Math.PI / 2;
      beak.position.set(0, 0.005, -0.18);
      bird.add(beak);
      const wl = new THREE.Mesh(wingGeoL, matCrowWing);
      wl.position.set(0.03, 0.03, 0);
      wl.rotation.z = 0.95;
      bird.add(wl);
      const wr = new THREE.Mesh(wingGeoR, matCrowWing);
      wr.position.set(-0.03, 0.03, 0);
      wr.rotation.z = -0.95;
      bird.add(wr);
      group.add(bird);
      st.birds.push({ bird, wl, wr, phase: rnd() * 10, ang0: rnd() * Math.PI * 2, spin: 1.5 + rnd() });
    }
    const spot: CrowRef = {
      pos: new THREE.Vector3(x, y, z), group, flown: false,
      fly: () => {
        if (!st.flying && !st.done) { st.flying = true; st.t = 0; spot.flown = true; }
      },
    };
    crowStates.push(st);
    crowSpots.push(spot);
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

  // stained glass: flanking the door + behind the altar
  stainedWindow(-3.4, 2.3, -24.83);
  stainedWindow(3.4, 2.3, -24.83);
  stainedWindow(0, 2.5, -34.83);

  // chandelier: metal ring + 6 candles, ceiling center
  const chand = new THREE.Group();
  chand.position.set(0, 4.2, -30);
  root.add(chand);
  boxMesh(0.05, 0.7, 0.05, matMetal, 0, 0.45, 0, 0, chand);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.045, 8, 24), matMetal);
  ring.rotation.x = Math.PI / 2;
  chand.add(ring);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    const cx = Math.cos(a) * 0.55, cz = Math.sin(a) * 0.55;
    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.048, 0.3, 8), matCandle);
    candle.position.set(cx, -0.18, cz);
    chand.add(candle);
    const fl = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffcf7a }));
    fl.position.set(cx, -0.36, cz);
    chand.add(fl);
  }
  const chandLight = new THREE.PointLight(0xffb060, 7, 12, 1.8);
  chandLight.position.set(0, 3.85, -30);
  root.add(chandLight);
  lamps.push({ light: chandLight, base: 7, phase: rnd() * 10 });

  // bell in the tower, seen through a dark opening + 2 corner posts
  const bellHole = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.35), new THREE.MeshBasicMaterial({ color: 0x05060a }));
  bellHole.position.set(0, 6.2, -33.19);
  root.add(bellHole);
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 10), matBrass);
  bell.scale.y = 1.25;
  bell.position.set(0, 6.2, -33.02);
  bell.castShadow = shadows;
  root.add(bell);
  boxMesh(0.16, 1.5, 0.16, matStoneDark, -0.88, 6.2, -33.1, 0, root);
  boxMesh(0.16, 1.5, 0.16, matStoneDark, 0.88, 6.2, -33.1, 0, root);

  // stone door frame around the church door
  boxMesh(0.3, 2.6, 0.42, matStoneDark, -0.86, 1.3, -24.72, 0, root);
  boxMesh(0.3, 2.6, 0.42, matStoneDark, 0.86, 1.3, -24.72, 0, root);
  boxMesh(2.02, 0.3, 0.42, matStoneDark, 0, 2.6, -24.72, 0, root);

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
  addChimney(-16.6, 9.2, 3.4);

  // Farmhouse (south-east) — brazier #2
  makeHouse({
    x: 22, z: 18, w: 12, d: 9, h: 3.6, door: 'W',
    windows: [{ side: 'S', off: -3, lit: true }, { side: 'N', off: 2 }],
    interior: [['table', 2.5, -2.4], ['bed', -4, -2.6], ['shelf', 5.4, 2, Math.PI / 2], ['crate', -2, 2.8], ['crate', 0.5, 3.2]],
  });
  addChimney(25.6, 15.2, 3.6);

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
  addChimney(-31.4, 7.4, 3.4);

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

  // Cemetery (north-west): iron fence + graves + dead trees + altar
  ironFence(-33, -46.4, 26, 0.18);
  ironFence(-33, -24.4, 26, 0.18);
  ironFence(-46.4, -35.4, 0.18, 22);
  ironFence(-19.6, -40, 0.18, 14); // gap at south entrance
  const graveKeepClear: [number, number][] = [
    [-44, -30], [-33, -41], [-33, -33], [-30, -38], [-28, -43], [-41, -36],
  ];
  let gIdx = 0;
  for (let gx = -44; gx <= -24; gx += 4) {
    for (let gz = -44; gz <= -28; gz += 4) {
      if (rnd() < 0.75) {
        const px = gx + (rnd() - 0.5), pz = gz + (rnd() - 0.5);
        let blocked = false;
        for (const q of graveKeepClear) {
          if (Math.hypot(px - q[0], pz - q[1]) < 2.3) { blocked = true; break; }
        }
        if (!blocked) gravestone(gIdx++, px, pz);
      }
    }
  }
  deadTree(-28, -43, 4.6);
  deadTree(-41, -36, 5.2);
  // cemetery altar
  const altar = boxMesh(1.6, 1.0, 1.0, matStoneDark, -33, 0.5, -41);
  altar.castShadow = shadows;
  root.add(altar);
  addCollider(aabbFromCenter(-33, -41, 1.7, 1.1));
  interactables.push({
    id: 'cemetery_altar', pos: new THREE.Vector3(-33, 1, -41), radius: 2.6, prompt: 'Place the amulet', enabled: true, once: true,
    highlight: altar, onInteract: () => { /* quests */ },
  });
  const graveArea = { minX: -46, minZ: -46, maxX: -20, maxZ: -24 };
  const gravePoints: THREE.Vector3[] = [
    new THREE.Vector3(-42, 0, -41), new THREE.Vector3(-26, 0, -42), new THREE.Vector3(-42, 0, -27),
    new THREE.Vector3(-25, 0, -26.5), new THREE.Vector3(-38, 0, -33), new THREE.Vector3(-27, 0, -33),
  ];

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

  /* ---------------- puddles (reflective) ---------------- */
  const matPuddle = new THREE.MeshStandardMaterial({
    map: repeatTex(getTexture('water'), 2, 2), color: 0x0a1218, metalness: 0.9, roughness: 0.08, envMapIntensity: 1.6,
  });
  const puddleDefs: [number, number, number][] = [
    [2, 20, 2.2], [-3, 34, 1.8], [18, 8, 2.4], [-16, 6, 2.0], [8, -14, 1.6], [-22, -18, 2.6],
  ];
  for (const pd of puddleDefs) {
    const mesh = new THREE.Mesh(new THREE.CircleGeometry(pd[2], 22), matPuddle);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = rnd() * Math.PI * 2;
    mesh.position.set(pd[0], 0.035, pd[1]);
    root.add(mesh);
    puddles.push({ pos: new THREE.Vector3(pd[0], 0, pd[1]), radius: pd[2], mesh });
  }

  /* ---------------- ground fog planes ---------------- */
  const fogSpots: [number, number][] = [
    [0, 14], [-8, 24], [10, 34], [-14, 6], [12, -6], [0, -12],
    [-30, -34], [-24, -26], [26, -14], [34, 6], [-8, 44], [14, 24],
  ];
  const fogCount = quality === 'low' ? 6 : 12;
  for (let i = 0; i < fogCount; i++) {
    const fx = fogSpots[i][0], fz = fogSpots[i][1];
    const fMat = new THREE.MeshBasicMaterial({ map: getSpriteTexture('puff'), transparent: true, opacity: 0.15, depthWrite: false });
    const fm = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), fMat);
    fm.rotation.x = -Math.PI / 2;
    fm.rotation.z = rnd() * Math.PI * 2;
    fm.position.set(fx, 0.35, fz);
    root.add(fm);
    fogPlanes.push({ mesh: fm, mat: fMat, rotSpeed: (rnd() - 0.5) * 0.08, phase: rnd() * Math.PI * 2, x: fx, z: fz, target: 0.15 });
  }

  /* ---------------- dust motes (Points, wrapped around player) ---------------- */
  const dustN = quality === 'low' ? 0 : quality === 'medium' ? 160 : 250;
  const dustGeo = new THREE.BufferGeometry();
  const dustArr = new Float32Array(dustN * 3);
  const dustPhase = new Float32Array(dustN);
  for (let i = 0; i < dustN; i++) {
    dustArr[i * 3] = (rnd() - 0.5) * 40;
    dustArr[i * 3 + 1] = 0.2 + rnd() * 6.6;
    dustArr[i * 3 + 2] = (rnd() - 0.5) * 40;
    dustPhase[i] = rnd() * Math.PI * 2;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustArr, 3));
  const dustObj = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    map: getSpriteTexture('puff'), size: 0.14, transparent: true, opacity: 0.22,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  dustObj.frustumCulled = false;
  root.add(dustObj);

  /* ---------------- cornfield (east of barn) ---------------- */
  const cornGroup = new THREE.Group();
  cornGroup.position.set(43, 0, 5); // pivot at field center for cheap sway
  root.add(cornGroup);
  const cornGeo = new THREE.PlaneGeometry(0.55, 1.9);
  cornGeo.translate(0, 0.95, 0);
  const matCorn = new THREE.MeshStandardMaterial({ map: getTexture('corn'), side: THREE.DoubleSide, roughness: 1 });
  const cornA = new THREE.InstancedMesh(cornGeo, matCorn, 130);
  const cornB = new THREE.InstancedMesh(cornGeo, matCorn, 130);
  {
    const cd = new THREE.Object3D();
    let ci = 0;
    while (ci < 130) {
      const px = 34 + rnd() * 18;
      const pz = -4 + rnd() * 18;
      if (pz > 8 && pz < 10 && px < 40) continue;           // keep road corridor clear
      if (Math.hypot(px - 44, pz - 4) < 1.4) continue;      // keep loot crate clear
      const s = 0.8 + rnd() * 0.4;
      cd.position.set(px - 43, 0, pz - 5);
      cd.scale.set(s, s * (0.95 + rnd() * 0.1), s);
      cd.rotation.set((rnd() - 0.5) * 0.16, rnd() * Math.PI, (rnd() - 0.5) * 0.12);
      cd.updateMatrix();
      cornA.setMatrixAt(ci, cd.matrix);
      cd.rotation.y += Math.PI / 2;                          // crossed quad
      cd.updateMatrix();
      cornB.setMatrixAt(ci, cd.matrix);
      ci++;
    }
    cornA.instanceMatrix.needsUpdate = true;
    cornB.instanceMatrix.needsUpdate = true;
  }
  cornGroup.add(cornA, cornB);
  addCollider(aabbFromCenter(43, -4.6, 19.6, 1.2));  // field edge (north)
  addCollider(aabbFromCenter(43, 14.6, 19.6, 1.2));  // field edge (south)
  addCollider(aabbFromCenter(52.6, 5, 1.2, 19.2));   // field edge (east; west side open)

  /* ---------------- merchant cart near the gate ---------------- */
  const merchantPos = new THREE.Vector3(10, 0, 48);
  const cart = new THREE.Group();
  cart.position.set(10, 0, 48);
  cart.rotation.y = 0.12;
  root.add(cart);
  const cartBody = boxMesh(1.2, 0.8, 2.2, matPlank, 0, 0.9, 0, 0, cart);
  cartBody.castShadow = shadows;
  for (const side of [-1, 1]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.09, 12), matPlankDark);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(side * 0.66, 0.45, 0);
    wheel.castShadow = shadows;
    cart.add(wheel);
    boxMesh(0.08, 0.08, 1.7, matWood, side * 0.4, 0.7, -1.75, 0, cart); // handle shafts
  }
  const canopyGeo = new THREE.CylinderGeometry(1.1, 1.1, 2.2, 10, 1, true, 0, Math.PI);
  canopyGeo.rotateZ(Math.PI / 2);
  canopyGeo.rotateY(Math.PI / 2);
  const canopy = new THREE.Mesh(canopyGeo, new THREE.MeshStandardMaterial({
    map: getTexture('cloth'), color: 0x9a9080, side: THREE.DoubleSide, roughness: 1,
  }));
  canopy.position.set(0, 0.75, 0);
  canopy.castShadow = shadows;
  cart.add(canopy);
  const rugRoll = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.1, 8), new THREE.MeshStandardMaterial({ color: 0x5a2c2c, roughness: 1 }));
  rugRoll.rotation.z = Math.PI / 2;
  rugRoll.position.set(-0.25, 1.36, 0.3);
  cart.add(rugRoll);
  boxMesh(0.07, 1.7, 0.07, matWood, 0.75, 0.85, 1.25, 0, cart);       // lantern post
  boxMesh(0.32, 0.06, 0.06, matWood, 0.6, 1.62, 1.25, 0, cart);       // arm
  boxMesh(0.16, 0.22, 0.16, new THREE.MeshStandardMaterial({ color: 0x221a10, emissive: 0xffb050, emissiveIntensity: 1.6 }), 0.45, 1.44, 1.25, 0, cart);
  const cartLight = new THREE.PointLight(0xffb060, 6, 9, 1.8);
  cartLight.position.set(10.45, 1.5, 49.25);
  root.add(cartLight);
  lamps.push({ light: cartLight, base: 6, phase: rnd() * 10 });
  boxMesh(0.75, 0.75, 0.75, matPlank, 8.4, 0.38, 47.1, 0.3, root);    // crates beside cart
  boxMesh(0.75, 0.75, 0.75, matPlank, 11.5, 0.38, 46.5, -0.2, root);
  addCollider(aabbFromCenter(10, 48, 2.7, 3.4));

  /* ---------------- ritual circle (cemetery) ---------------- */
  const ritualPos = new THREE.Vector3(-30, 0, -38);
  const ritualGround = new THREE.Mesh(new THREE.CircleGeometry(2.4, 24), new THREE.MeshStandardMaterial({
    map: getTexture('ritual'), emissive: 0x1a2418, emissiveIntensity: 0.3, roughness: 1,
  }));
  ritualGround.rotation.x = -Math.PI / 2;
  ritualGround.position.set(-30, 0.02, -38);
  root.add(ritualGround);
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 + 0.2;
    const sx = -30 + Math.cos(a) * 2.2, sz = -38 + Math.sin(a) * 2.2;
    const sh = 0.75 + rnd() * 0.35;
    const stone = boxMesh(0.34, sh, 0.24, matStoneDark, sx, sh / 2, sz, a);
    stone.castShadow = shadows;
    root.add(stone);
    addCollider(aabbFromCenter(sx, sz, 0.5, 0.5));
  }
  for (let k = 0; k < 5; k++) {
    const a = rnd() * Math.PI * 2, r = 1.1 + rnd() * 0.8;
    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.22, 8), matCandle);
    candle.position.set(-30 + Math.cos(a) * r, 0.11, -38 + Math.sin(a) * r);
    root.add(candle);
  }
  boxMesh(0.14, 0.14, 1.3, matBark, -31.4, 0.09, -39.4, 0.2, root);
  boxMesh(0.14, 0.14, 1.3, matBark, -31.5, 0.09, -39.2, -0.4, root);
  boxMesh(0.14, 0.14, 1.2, matBark, -31.45, 0.24, -39.3, 0.9, root);

  /* ---------------- loot caches ---------------- */
  const crateDefs: { rarity: LootCrateRef['rarity']; color: number; x: number; y: number; z: number; ry: number }[] = [
    { rarity: 'green', color: 0x2a8f3a, x: -44, y: 0.7, z: -30, ry: 0.4 },
    { rarity: 'blue', color: 0x2a5a9f, x: 30, y: 0.4, z: -11.6, ry: 0.2 },
    { rarity: 'blue', color: 0x2a5a9f, x: 45, y: 0.4, z: -32, ry: -0.3 },
    { rarity: 'purple', color: 0x6a2a9f, x: -36.6, y: 0.6, z: 20, ry: Math.PI / 2 },
    { rarity: 'purple', color: 0x6a2a9f, x: 44, y: 0.5, z: 4, ry: 0.7 },
    { rarity: 'gold', color: 0xcfa030, x: -5, y: 0.4, z: 31.4, ry: 0 },
  ];
  crateDefs.forEach((cdef, i) => {
    const id = 'lootcrate_' + i;
    if (i === 0) boxMesh(1.0, 0.5, 1.0, matStoneDark, cdef.x, 0.25, cdef.z, 0, root); // plinth under cemetery crate
    const grpC = new THREE.Group();
    grpC.position.set(cdef.x, cdef.y, cdef.z);
    grpC.rotation.y = cdef.ry;
    const body = boxMesh(0.8, 0.8, 0.8, matPlank, 0, 0, 0, 0, grpC);
    body.castShadow = shadows;
    boxMesh(0.84, 0.09, 0.84, matMetal, 0, 0.2, 0, 0, grpC);
    boxMesh(0.84, 0.09, 0.84, matMetal, 0, -0.2, 0, 0, grpC);
    const rune = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), new THREE.MeshBasicMaterial({ color: cdef.color }));
    rune.position.set(0, 0, 0.41);
    grpC.add(rune);
    const cl = new THREE.PointLight(cdef.color, 0.9, 3, 2);
    cl.position.set(0, 0.35, 0.55);
    grpC.add(cl);
    root.add(grpC);
    lootCrates.push({ id, rarity: cdef.rarity, pos: new THREE.Vector3(cdef.x, cdef.y, cdef.z), opened: false });
    interactables.push({
      id, pos: new THREE.Vector3(cdef.x, cdef.y + 0.4, cdef.z), radius: 2.1, prompt: 'Search the cache',
      enabled: true, once: true, onInteract: () => { /* handled by quests */ },
    });
    addCollider(aabbFromCenter(cdef.x, cdef.z, 0.95, 0.95));
  });

  /* ---------------- mirror (church west interior wall) ---------------- */
  const mirrorPos = new THREE.Vector3(-7.35, 1.6, -30);
  const mirrorNormal = new THREE.Vector3(1, 0, 0);
  const mirror = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.5), new THREE.MeshStandardMaterial({
    color: 0x6a7888, metalness: 1, roughness: 0.06, envMapIntensity: 2.2,
  }));
  mirror.position.copy(mirrorPos);
  mirror.rotation.y = Math.PI / 2; // faces +X
  root.add(mirror);
  boxMesh(0.1, 1.66, 0.12, matWood, -7.38, 1.6, -30.61, 0, root);
  boxMesh(0.1, 1.66, 0.12, matWood, -7.38, 1.6, -29.39, 0, root);
  boxMesh(0.1, 0.12, 1.34, matWood, -7.38, 2.41, -30, 0, root);
  boxMesh(0.1, 0.12, 1.34, matWood, -7.38, 0.79, -30, 0, root);

  /* ---------------- locked sheds (wired by quests later) ---------------- */
  makeHouse({ x: -12, z: 30, w: 3, d: 2.2, h: 2.4, door: 'N', interior: [['crate', 0.8, 0.3], ['shelf', -1.1, 0]] });
  makeDoor('barn_storage', -12.7, 28.9, 0, true);
  makeHouse({ x: -28, z: 4.5, w: 2.8, d: 2.2, h: 2.3, door: 'N', interior: [['crate', 0.7, 0], ['shelf', -1.0, 0]] });
  makeDoor('clinic_back', -28.7, 3.4, 0, true);
  makeHouse({ x: 14, z: 22, w: 3, d: 2.4, h: 2.4, stone: true, door: 'S', interior: [['crate', 0.8, 0.4], ['shelf', -1.1, 0]] });
  makeDoor('shed', 13.3, 23.4, 0, true);

  /* ---------------- interior dressing ---------------- */
  const rug = (x: number, z: number, color: number, ry = 0) => {
    const r = boxMesh(2.2, 0.02, 1.4, new THREE.MeshStandardMaterial({ color, roughness: 1 }), x, 0.045, z, ry);
    r.receiveShadow = shadows;
    root.add(r);
  };
  rug(-20.5, 12.5, 0x4a1c1c);            // miller
  rug(23, 18.5, 0x3a3a20);               // farmhouse
  rug(0, -31.2, 0x4a1c1c, Math.PI / 2);  // church aisle runner

  // fireplace in miller house east interior wall
  const fpX = -15.27, fpZ = 12.5;
  const fpBody = boxMesh(0.5, 1.4, 1.6, matBrick, fpX, 0.7, fpZ);
  fpBody.castShadow = shadows;
  root.add(fpBody); occluders.push(fpBody);
  const fpHole = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.7), new THREE.MeshBasicMaterial({ color: 0x0a0705 }));
  fpHole.position.set(fpX + 0.256, 0.5, fpZ);
  fpHole.rotation.y = Math.PI / 2;
  root.add(fpHole);
  const fpEmber = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.45), new THREE.MeshBasicMaterial({ color: 0xff6a1e }));
  fpEmber.rotation.x = -Math.PI / 2;
  fpEmber.position.set(fpX + 0.45, 0.05, fpZ);
  root.add(fpEmber);
  const fpLight = new THREE.PointLight(0xff7a30, 5, 8, 1.8);
  fpLight.position.set(fpX + 0.6, 0.9, fpZ);
  root.add(fpLight);
  lamps.push({ light: fpLight, base: 5, phase: rnd() * 10 });

  // bottles on the clinic shelf
  const bottleMats = [
    new THREE.MeshStandardMaterial({ color: 0x3a6a4a, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.55 }),
    new THREE.MeshStandardMaterial({ color: 0x3a4a6a, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.55 }),
    new THREE.MeshStandardMaterial({ color: 0x6a5a2a, metalness: 0.2, roughness: 0.15, transparent: true, opacity: 0.55 }),
  ];
  bottleMats.forEach((bm, i) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.2, 8), bm);
    b.position.set(-32.9 + i * 0.32, 1.92, 10 + (i % 2 === 0 ? 0.05 : -0.06));
    root.add(b);
  });

  // hanging lamp in clinic
  boxMesh(0.04, 0.5, 0.04, matMetal, -26.5, 3.1, 9, 0, root);
  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.18, 10), matMetal);
  shade.position.set(-26.5, 2.78, 9);
  root.add(shade);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
  bulb.position.set(-26.5, 2.68, 9);
  root.add(bulb);
  const clinicLight = new THREE.PointLight(0xffc070, 4, 9, 1.8);
  clinicLight.position.set(-26.5, 2.6, 9);
  root.add(clinicLight);
  lamps.push({ light: clinicLight, base: 4, phase: rnd() * 10 });

  /* ---------------- chimney smoke sprites ---------------- */
  const puffTex = getSpriteTexture('puff');
  const smokeChimneys = quality === 'low' ? chimneys.slice(0, 1) : chimneys;
  for (const ch of smokeChimneys) {
    for (let k = 0; k < 3; k++) {
      const sMat = new THREE.SpriteMaterial({ map: puffTex, transparent: true, opacity: 0, depthWrite: false });
      const sp = new THREE.Sprite(sMat);
      sp.scale.setScalar(0.8);
      sp.position.set(ch.x, ch.topY, ch.z);
      root.add(sp);
      smokeSprites.push({ s: sp, mat: sMat, x: ch.x, z: ch.z, topY: ch.topY, phase: k / 3 });
    }
  }

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

  /* ---------------- crows ---------------- */
  const flapOK = quality !== 'low';
  makeCrowSpot(28, 7.75, -8);     // barn roof ridge
  makeCrowSpot(-33, 5.3, -33);    // cemetery dead tree
  makeCrowSpot(0, 3.5, 2);        // well roof

  // boundary walls (invisible)
  const B = 62;
  addCollider({ minX: -B - 6, maxX: -B, minZ: -B - 6, maxZ: B + 6 });
  addCollider({ minX: B, maxX: B + 6, minZ: -B - 6, maxZ: B + 6 });
  addCollider({ minX: -B - 6, maxX: B + 6, minZ: -B - 6, maxZ: -B });
  addCollider({ minX: -B - 6, maxX: B + 6, minZ: B, maxZ: B + 6 });

  /* ---------------- ambient animation & weather ---------------- */
  const updateAmbient = (dt: number, playerPos: THREE.Vector3, elapsed: number) => {
    // lamp flicker (all registered lamps incl. chandelier/fireplace/lantern)
    for (const lp of lamps) {
      let f = 0.86 + 0.14 * Math.sin(elapsed * 7 + lp.phase);
      if (Math.sin(elapsed * 13 + lp.phase) > 0.985) f *= 0.35;
      lp.light.intensity = lp.base * f;
    }
    // glow sprites + light shafts pulse in sync with their lamp
    for (const fx of lampFx) {
      let f = 0.86 + 0.14 * Math.sin(elapsed * 7 + fx.lamp.phase);
      if (Math.sin(elapsed * 13 + fx.lamp.phase) > 0.985) f *= 0.35;
      if (fx.glowMat) fx.glowMat.opacity = glowMul * 0.5 * f;
      if (fx.shaftMat) fx.shaftMat.opacity = 0.045 * f;
    }
    // chimney smoke: rise 1.5m, fade, loop; slight wind drift
    for (const sm of smokeSprites) {
      const life = (elapsed * 0.22 + sm.phase) % 1;
      sm.s.position.set(
        sm.x + life * 0.55 + Math.sin(elapsed * 0.7 + sm.phase * 9) * 0.12,
        sm.topY + life * 1.5,
        sm.z + Math.cos(elapsed * 0.5 + sm.phase * 7) * 0.1
      );
      sm.mat.opacity = 0.34 * Math.sin(life * Math.PI) * (0.75 + 0.25 * Math.sin(elapsed * 1.3 + sm.phase * 5));
      sm.s.scale.setScalar(0.7 + life * 1.2);
    }
    // fog planes: slow spin + drift + storm opacity
    for (const fp of fogPlanes) {
      fp.mesh.rotation.z += fp.rotSpeed * dt;
      fp.mesh.position.x = fp.x + Math.sin(elapsed * 0.05 + fp.phase) * 0.5;
      fp.mesh.position.z = fp.z + Math.cos(elapsed * 0.04 + fp.phase) * 0.4;
      fp.mat.opacity += (fp.target - fp.mat.opacity) * Math.min(1, dt * 1.5);
    }
    // dust: upward drift + sine sway, wrapped in a box centered on the player
    if (dustN > 0) {
      const arr = dustArr;
      const cx = playerPos.x, cz = playerPos.z;
      for (let i = 0; i < dustN; i++) {
        const j = i * 3;
        arr[j + 1] += 0.05 * dt;
        arr[j] += Math.sin(elapsed * 0.35 + dustPhase[i]) * 0.12 * dt;
        let dx = arr[j] - cx; dx = ((dx % 40) + 40) % 40 - 20; arr[j] = cx + dx;
        let dz = arr[j + 2] - cz; dz = ((dz % 40) + 40) % 40 - 20; arr[j + 2] = cz + dz;
        if (arr[j + 1] > 7) arr[j + 1] = 0.1;
      }
      dustGeo.attributes.position.needsUpdate = true;
    }
    // crows: idle bob / flying spiral
    for (const st of crowStates) {
      if (st.flying) {
        st.t += dt;
        if (st.t >= 4) { st.group.visible = false; st.flying = false; st.done = true; continue; }
        for (const b of st.birds) {
          const k = st.t / 4;
          const ang = b.ang0 + b.spin * st.t;
          const rad = 0.3 + st.t * 0.9;
          b.bird.position.set(Math.cos(ang) * rad, k * k * 3.4 + 0.15, Math.sin(ang) * rad);
          b.bird.rotation.y = -ang;
          if (flapOK) {
            const flap = Math.sin(elapsed * 16 + b.phase) * 0.55;
            b.wl.rotation.z = 0.25 + flap;
            b.wr.rotation.z = -0.25 - flap;
          }
        }
      } else if (!st.done) {
        for (const b of st.birds) b.bird.rotation.x = Math.sin(elapsed * 1.9 + b.phase) * 0.05;
      }
    }
    // cornfield sway (whole group, cheap)
    cornGroup.rotation.z = Math.sin(elapsed * 0.55) * 0.005;
    // puddles: subtle reflection strength pulse
    const pPulse = 1.6 + Math.sin(elapsed * 0.8) * 0.18;
    for (const p of puddles) (p.mesh.material as THREE.MeshStandardMaterial).envMapIntensity = pPulse;
  };

  const setEnv = (rain: number, storm: number) => {
    matGround.roughness = 1 - rain * 0.45;
    matGround.envMapIntensity = rain * 0.5;
    fogTargetOp = 0.15 + storm * 0.12;
    for (const fp of fogPlanes) fp.target = fogTargetOp;
    glowMul = 1 - rain * 0.25;
    moon.intensity = moonBase - storm * 0.25;
  };

  return {
    root, colliders, occluders, interactables, lamps, braziers, doors, gatePivot,
    stars, moonMesh, groundMesh: ground, wellBucket, wellRope,
    updateAmbient, setEnv,
    dust: { object: dustObj },
    puddles, crowSpots, graveArea, gravePoints,
    mirrorPos, mirrorNormal, merchantPos, lootCrates,
    moonLight: moon, ritualPos,
  };
}
