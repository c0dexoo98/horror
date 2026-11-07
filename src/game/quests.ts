// HOLLOW VALE — quests: main chapters, side quests, notes, pickups, world interactions
import * as THREE from 'three';
import { getTexture, mulberry32 } from './core';
import { WorldRefs, type Interactable } from './world';
import type { Player } from './player';

export interface QuestHooks {
  message: (text: string, big?: boolean) => void;
  subtitle: (text: string, dur?: number) => void;
  onNoise: (pos: THREE.Vector3, radius: number) => void;
  onStage: (stage: number) => void;
  onNoteRead: (note: NoteDef) => void;
  onPickup: (id: string, type: string) => void;
  netEmit: (event: string, data: Record<string, unknown>) => void;
  isNet: () => boolean;
}

export interface NoteDef { id: string; title: string; text: string; num: number }

export const NOTES: NoteDef[] = [
  { id: 'note_priest', num: 1, title: "The Priest's Last Letter", text: "They came at dusk... the bell rang backwards...\n\nWe sealed the church, but the Shepherd knows hymns. Do not light three flames unless you are ready to know what sleeps in the well.\n\nWhoever reads this: the key to my church lies in the old barn, under the hay, where we hid from him.\n\n— Father Abeln" },
  { id: 'note_miller', num: 2, title: "Torn Page — Miller's Diary", text: "My wife walks the fields at night. She doesn't answer to her name anymore.\n\nThe doctor gives me pills that don't help. Last night I heard her humming OUR song under the window.\n\nI will not open the curtains. I will not open the curtains. I will not" },
  { id: 'note_clinic', num: 3, title: "Patient Log — Final Entry", text: "The tincture only delays it. They hear the bell in their sleep.\n\nIf you read this: nightshade, three sprigs, steeped slow at the mortar. It steadies the hands.\n\nIt does not steady the soul.\n\n— Dr. H." },
  { id: 'note_barn', num: 4, title: "Scratched Plank — Barn", text: "The rifle is split for safety. Stock here in the barn. Barrel at the hunter's cabin, north-east past the fields.\n\nA steady hand can put it back at the workshop bench.\n\nBullets don't kill him. Nothing kills him. But he KNEELS.\n\n— old man Grothe" },
  { id: 'note_farm', num: 5, title: "Recipe Card — Farmhouse", text: "Sleeping tea: valerian, honey, and a prayer you don't believe in.\n\nThe children must not see the lantern pass the window.\n\nIf the lantern STOPS outside — put out the fire, and get under the floor." },
  { id: 'note_annex', num: 6, title: "Charred Hymnal — Chapel Annex", text: "Brother Tomas scratched this before they took him:\n\nTHE FLAMES FEED IT. Three braziers, three calls. Light them and the well will give up what it swallowed.\n\nGod forgive us for what we buried with the bell." },
  { id: 'note_hunter', num: 7, title: "Hunter's Warning", text: "Shot it twice at the treeline. It knelt. Then it stood. Then it was INSIDE my house.\n\nLeft the barrel in the rack. Moving to the chapel.\n\nThe gate key comes with the amulet — after the altar takes it back. Don't wear the thing. It whispers." },
  { id: 'note_cemetery', num: 8, title: "Grave Marker — Unmarked Row", text: "Here lies the Shepherd of Hollow Vale, keeper of the bell, drowned in the well by his own flock.\n\nWe were starving. He promised a harvest. He kept his promise.\n\nDo not let it ring again.\n\n— the survivors of '43" },
  { id: 'note_s1', num: 9, title: 'Letters from the Dead I', text: '...to whoever outlives us: the shed past the farm answers only to its numbers. Seven... three... the rest the ravens took...\n\nWe were going to burn it. We were going to burn all of it.\n\n— A.' },
  { id: 'note_s2', num: 10, title: 'Letters from the Dead II', text: '...one... nine. Four numbers, two lost. If you are reading this you already know the door I mean. Take what we hid and finish what we could not.\n\n— M.' },
  { id: 'note_s3', num: 11, title: 'Letters from the Dead III', text: 'The salts bind what the bell unbinds. Three circles of salt at the old stones, after the amulet, before the gate. The village does not want your death. It wants permission to rest.\n\n— the last letter of Father Abeln' },
];

interface PickupDef {
  id: string; type: string; pos: THREE.Vector3; label: string;
}
const P = (id: string, type: string, x: number, y: number, z: number, label: string): PickupDef => ({ id, type, pos: new THREE.Vector3(x, y, z), label });

export const PICKUPS: PickupDef[] = [
  P('pk_church_key', 'church_key', 28, 0.5, -4.5, 'Church Key'),
  P('pk_ammo_1', 'ammo_pistol', -19, 0.8, 10.5, 'Revolver Ammo'),
  P('pk_bandage_1', 'bandage', -27, 0.9, 10, 'Bandage'),
  P('pk_ammo_2', 'ammo_pistol', 23, 0.8, 16.5, 'Revolver Ammo'),
  P('pk_battery_1', 'battery', 8, 0.4, 8.5, 'Battery'),
  P('pk_pills_1', 'pills', -28.5, 0.8, 11.5, 'Sedative Pills'),
  P('pk_battery_2', 'battery', 18.5, 0.4, -29, 'Battery'),
  P('pk_ammo_3', 'ammo_pistol', 3, 1.0, -32.5, 'Revolver Ammo'),
  P('pk_bandage_2', 'bandage', 44.5, 0.8, -31, 'Bandage'),
  P('pk_grenade_1', 'grenade', -5, 0.9, 29, 'Noise Grenade'),
  P('pk_ammo_4', 'ammo_pistol', 27.5, 1.1, -9.5, 'Revolver Ammo'),
  P('pk_battery_3', 'battery', -40, 0.6, 19, 'Battery'),
  P('pk_grenade_2', 'grenade', 21, 0.8, 19.5, 'Noise Grenade'),
  P('pk_ammo_5', 'ammo_pistol', -6.5, 0.9, -30, 'Revolver Ammo'),
  P('pk_pills_2', 'pills', -33, 0.9, -43, 'Sedative Pills'),
  P('pk_bandage_3', 'bandage', 29, 0.5, -6.5, 'Bandage'),
  P('pk_grenade_3', 'grenade', -44, 0.7, -34, 'Noise Grenade'),
  P('pk_battery_4', 'battery', 30, 0.5, 24, 'Battery'),
  P('pk_ammo_rifle_1', 'ammo_rifle', 43, 0.8, -28.5, 'Rifle Rounds'),
  P('pk_pills_3', 'pills', 0, 1.1, -35, 'Sedative Pills'),
  // side quest items
  P('pk_stock', 'rifle_stock', 29.5, 0.5, -10.5, 'Rifle Stock'),
  P('pk_barrel', 'rifle_barrel', 46.5, 0.9, -29.5, 'Rifle Barrel'),
  P('pk_herb_1', 'herb', -39, 0.6, 21, 'Nightshade Sprig'),
  P('pk_herb_2', 'herb', -35, 0.5, -38, 'Nightshade Sprig'),
  P('pk_herb_3', 'herb', 50, 0.5, 6, 'Nightshade Sprig'),
  // notes
  P('nt_priest', 'note_priest', 0, 1.15, -34.2, 'Read the letter'),
  P('nt_miller', 'note_miller', -22, 0.85, 12.5, 'Read the page'),
  P('nt_clinic', 'note_clinic', -25.2, 0.9, 8.4, 'Read the log'),
  P('nt_barn', 'note_barn', 26.5, 0.5, -11, 'Read the plank'),
  P('nt_farm', 'note_farm', 23.5, 0.85, 19.5, 'Read the card'),
  P('nt_annex', 'note_annex', 18, 1.1, -30.4, 'Read the hymnal'),
  P('nt_hunter', 'note_hunter', 43, 0.9, -29.8, "Read the warning"),
  P('nt_cemetery', 'note_cemetery', -36.5, 0.7, -40, 'Read the marker'),
  // key items
  P('pk_iron_key', 'iron_key', -33, 1.0, -38.8, 'Iron Key'),
  P('pk_amulet', 'amulet', 0, 1.35, 2, 'Drowned Amulet'),
  // survivor letters (feature 92)
  P('nt_s1', 'note_s1', 22.5, 0.85, 16.5, 'Read the letter'),
  P('nt_s2', 'note_s2', -33, 0.8, -36, 'Read the letter'),
  P('nt_s3', 'note_s3', 18, 1.1, -29.5, 'Read the letter'),
  // ritual salts (feature 93)
  P('pk_salt_1', 'salt', -40, 0.6, 21, 'Ritual Salt'),
  P('pk_salt_2', 'salt', 45, 0.8, -28, 'Ritual Salt'),
  P('pk_salt_3', 'salt', 3, 0.5, 6, 'Ritual Salt'),
  // throwables
  P('pk_bottle_1', 'bottle', 14, 0.4, 30, 'Bottle'),
  P('pk_bottle_2', 'bottle', -14, 0.4, -6, 'Bottle'),
  P('pk_bottle_3', 'bottle', 30, 0.4, 12, 'Bottle'),
  P('pk_bottle_4', 'bottle', -26, 0.4, -18, 'Bottle'),
  P('pk_brick_1', 'brick', -8, 0.4, 24, 'Brick'),
  P('pk_brick_2', 'brick', 20, 0.4, -20, 'Brick'),
  // misc gear
  P('pk_cloth_1', 'cloth', -27, 0.9, 12.5, 'Cloth'),
  P('pk_cloth_2', 'cloth', 26, 0.5, -7, 'Cloth'),
  P('pk_cloth_3', 'cloth', -4, 0.9, 29.5, 'Cloth'),
  P('pk_splint_1', 'splint', -28, 0.9, 8, 'Splint'),
  P('pk_battery_lith', 'battery_lith', 44.5, 0.8, -31.5, 'Lithium Cell'),
  P('pk_battery_nuc', 'battery_nuc', -44, 0.7, -34, 'Experimental Cell'),
  P('pk_lockpick_1', 'lockpick', 29.5, 0.5, -9, 'Lockpick'),
  P('pk_camera_1', 'camera', 0, 1.15, -33, 'Antique Camera'),
  P('pk_radio_1', 'radio', -5, 0.9, 29, 'Hand Radio'),
  P('pk_candle_1', 'candle', 18.5, 1.0, -29, 'Candle'),
  P('pk_candle_2', 'candle', -20, 0.85, 10, 'Candle'),
  P('pk_torch_1', 'torch', -5, 0.9, 30.5, 'Torch'),
  P('pk_axe_1', 'axe', 28, 0.5, -10, 'Fire Axe'),
  P('pk_trinket_1', 'trinket', 35.5, 0.6, -9, 'Trinket'),
  P('pk_trinket_2', 'trinket', -40, 0.7, 19.5, 'Trinket'),
  P('pk_trinket_3', 'trinket', 8, 0.6, 8.5, 'Trinket'),
  P('pk_cables_1', 'cables', 2, 0.9, 28, 'Splice Cables'),
];
const START_HIDDEN = new Set(['pk_iron_key', 'pk_amulet']);

const PICKUP_COLORS: Record<string, number> = {
  ammo_pistol: 0xb08a3e, ammo_rifle: 0x8a6a2e, bandage: 0xd8d2c4, pills: 0x9fd0c0,
  battery: 0x7fa8d8, grenade: 0xc46a3a, herb: 0x5a8a3a, church_key: 0xd8c46a,
  iron_key: 0xc8b45a, amulet: 0x8a5adf, rifle_stock: 0x6a4a2a, rifle_barrel: 0x8a8f94,
  note_priest: 0xcfc7ab, note_miller: 0xcfc7ab, note_clinic: 0xcfc7ab, note_barn: 0xcfc7ab,
  note_farm: 0xcfc7ab, note_annex: 0xcfc7ab, note_hunter: 0xcfc7ab, note_cemetery: 0xcfc7ab,
  note_s1: 0xcfc7ab, note_s2: 0xcfc7ab, note_s3: 0xcfc7ab,
  salt: 0xbfd8c0, bottle: 0x7fa8b8, brick: 0x8a5a42, cloth: 0xd8d2c4, splint: 0xc8b48a,
  battery_lith: 0x9fd8f0, battery_nuc: 0x8fffa8, lockpick: 0xb8b8c8, camera: 0x8a6a4a,
  radio: 0x6a5a3a, candle: 0xe8d8a8, torch: 0xc47a3a, axe: 0x9a4a3a, trinket: 0xd8b85a,
  cables: 0x8a8f94, master_key: 0xd8b85a,
};
const NOTE_IDS = new Set(['note_priest', 'note_miller', 'note_clinic', 'note_barn', 'note_farm', 'note_annex', 'note_hunter', 'note_cemetery', 'note_s1', 'note_s2', 'note_s3']);
const LETTER_IDS = ['note_s1', 'note_s2', 'note_s3'];

export interface QuestState {
  stage: number;
  braziersLit: string[];
  picked: string[];
  notesRead: string[];
  rifleCrafted: boolean;
  doctorDone: boolean;
  whisperReward: boolean;
  gateOpen: boolean;
  shepherdActive: boolean;
  lettersFound: string[];
  shedOpen: boolean;
  ritualDone: boolean;
  salts: number;
  codeKnown: boolean;
}

export class Quests {
  state: QuestState = {
    stage: 0, braziersLit: [], picked: [], notesRead: [], rifleCrafted: false,
    doctorDone: false, whisperReward: false, gateOpen: false, shepherdActive: false,
    lettersFound: [], shedOpen: false, ritualDone: false, salts: 0, codeKnown: false,
  };
  world: WorldRefs;
  hooks: QuestHooks;
  private pickupMeshes = new Map<string, THREE.Group>();
  private rnd = mulberry32(555);
  private amuletSpawned = false;
  private wellAnimating = 0;

  constructor(world: WorldRefs, hooks: QuestHooks) {
    this.world = world;
    this.hooks = hooks;
    // Master Key (feature 57): one random spot per run, deterministic from seeded rng
    if (!PICKUPS.some(p => p.id === 'pk_master_key')) {
      const spots = [
        { id: 'well', pos: new THREE.Vector3(0.9, 0.6, 3.2) },
        { id: 'miller', pos: new THREE.Vector3(-21, 0.85, 14) },
        { id: 'silo', pos: new THREE.Vector3(35.5, 0.6, -9) },
      ];
      const pick = spots[Math.floor(this.rnd() * 3)];
      PICKUPS.push({ id: 'pk_master_key', type: 'master_key', pos: pick.pos, label: 'Master Key' });
    }
    this.buildPickups();
    this.wireWorld();
  }

  /* ---------- pickups ---------- */
  private buildPickups() {
    const paperMat = new THREE.MeshStandardMaterial({ map: getTexture('paper'), roughness: 0.9 });
    for (const p of PICKUPS) {
      const g = new THREE.Group();
      if (NOTE_IDS.has(p.type)) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.4), paperMat);
        g.add(m);
      } else if (p.type === 'church_key' || p.type === 'iron_key' || p.type === 'master_key') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type] || 0xd8b85a, metalness: 0.6, roughness: 0.4 });
        const shank = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.26), mat);
        shank.position.z = 0.06;
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 12), mat);
        ring.position.z = -0.1;
        const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.05), mat);
        teeth.position.set(0, -0.05, 0.16);
        g.add(shank, ring, teeth);
        if (p.type === 'master_key') g.add(new THREE.PointLight(0xd8b85a, 0.7, 2.5));
      } else if (p.type === 'amulet') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type], metalness: 0.7, roughness: 0.3, emissive: 0x3a1a6a, emissiveIntensity: 0.6 });
        g.add(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 8, 16), mat));
        const gem = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1a0a2a, emissive: 0x6a2aff, emissiveIntensity: 1 }));
        gem.position.z = 0.09;
        g.add(gem);
      } else if (p.type === 'herb') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type], roughness: 1 });
        for (let i = 0; i < 3; i++) {
          const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.18, 5), mat);
          leaf.position.set((this.rnd() - 0.5) * 0.12, 0.09, (this.rnd() - 0.5) * 0.12);
          leaf.rotation.z = (this.rnd() - 0.5) * 0.8;
          g.add(leaf);
        }
      } else if (p.type === 'salt') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.salt, roughness: 0.9 });
        const pouch = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), mat);
        pouch.scale.set(1, 0.75, 1);
        const tie = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.045, 0.05, 6), new THREE.MeshStandardMaterial({ color: 0x8a7a5a }));
        tie.position.y = 0.09;
        g.add(pouch, tie);
      } else if (p.type === 'bottle') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.bottle, roughness: 0.25, metalness: 0.1 });
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.2, 8), mat);
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.09, 8), mat);
        neck.position.y = 0.14;
        g.add(body, neck);
      } else if (p.type === 'brick') {
        g.add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 0.11), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.brick, roughness: 0.95 })));
      } else if (p.type === 'cloth') {
        g.add(new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.2), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.cloth, roughness: 1 })));
      } else if (p.type === 'splint') {
        const wood = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.splint, roughness: 0.9 });
        const a = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24, 5), wood);
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24, 5), wood);
        b.position.x = 0.05;
        const band = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 6, 10), new THREE.MeshStandardMaterial({ color: 0xb0a090 }));
        band.position.y = 0.02;
        band.rotation.x = Math.PI / 2;
        g.add(a, b, band);
      } else if (p.type === 'battery_lith' || p.type === 'battery_nuc') {
        const stripe = p.type === 'battery_lith' ? 0x3a8ad8 : 0x3ad86a;
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.12), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type], roughness: 0.5, metalness: 0.3 }));
        const band = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.04, 0.125), new THREE.MeshStandardMaterial({ color: stripe, emissive: stripe, emissiveIntensity: 1 }));
        band.position.y = 0.05;
        g.add(body, band);
      } else if (p.type === 'lockpick') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.lockpick, metalness: 0.85, roughness: 0.3 });
        const a = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.24), mat);
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.24), mat);
        a.rotation.y = -Math.PI / 2.4;
        b.rotation.y = Math.PI / 2.4;
        g.add(a, b);
      } else if (p.type === 'camera') {
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.1), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.camera, roughness: 0.7 }));
        const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.06, 10), new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.3, metalness: 0.5 }));
        lens.rotation.x = Math.PI / 2;
        lens.position.z = 0.08;
        g.add(body, lens);
      } else if (p.type === 'radio') {
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.06), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.radio, roughness: 0.8 }));
        const dial = new THREE.Mesh(new THREE.CircleGeometry(0.03, 10), new THREE.MeshStandardMaterial({ color: 0xd8b85a, emissive: 0xd8b85a, emissiveIntensity: 0.8 }));
        dial.position.set(0.03, 0.02, 0.032);
        g.add(body, dial);
      } else if (p.type === 'candle') {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.16, 8), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.candle, roughness: 0.6 }));
        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.06, 6), new THREE.MeshBasicMaterial({ color: 0xffb84a }));
        flame.position.y = 0.11;
        g.add(body, flame);
      } else if (p.type === 'torch') {
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.3, 6), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.torch, roughness: 0.9 }));
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff8a2a }));
        head.position.y = 0.18;
        g.add(handle, head);
      } else if (p.type === 'axe') {
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.34, 6), new THREE.MeshStandardMaterial({ color: 0x6a4a2a, roughness: 0.9 }));
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.03), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.axe, metalness: 0.6, roughness: 0.35 }));
        head.position.set(0.05, 0.15, 0);
        g.add(handle, head);
      } else if (p.type === 'trinket') {
        g.add(new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.02, 6, 12), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.trinket, metalness: 0.9, roughness: 0.25 })));
      } else if (p.type === 'cables') {
        const coil = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.02, 6, 14), new THREE.MeshStandardMaterial({ color: PICKUP_COLORS.cables, roughness: 0.6 }));
        const red = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.03), new THREE.MeshStandardMaterial({ color: 0xc03828 }));
        red.position.set(0.09, 0.03, 0);
        const blk = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.03), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        blk.position.set(-0.09, -0.03, 0);
        g.add(coil, red, blk);
      } else {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type] || 0xaaaaaa, roughness: 0.6, metalness: p.type.startsWith('ammo') ? 0.4 : 0.1 });
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.16), mat);
        g.add(m);
        if (p.type.startsWith('ammo')) {
          for (let i = 0; i < 3; i++) {
            const bullet = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.09, 6), new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 0.7, roughness: 0.35 }));
            bullet.position.set(-0.06 + i * 0.06, 0.12, 0);
            g.add(bullet);
          }
        }
      }
      g.position.copy(p.pos);
      g.visible = !START_HIDDEN.has(p.id);
      this.world.root.add(g);
      this.pickupMeshes.set(p.id, g);
      const entry: Interactable = {
        id: p.id, pos: p.pos.clone(), radius: 2.1, prompt: NOTE_IDS.has(p.type) ? p.label : 'Take ' + p.label,
        enabled: !START_HIDDEN.has(p.id), once: true, highlight: g,
        onInteract: () => this.takePickup(p.id),
      };
      this.world.interactables.push(entry);
      if (START_HIDDEN.has(p.id)) entry.used = true;
    }
  }

  private takePickup(id: string) {
    const def = PICKUPS.find(p => p.id === id);
    if (!def || this.state.picked.includes(id)) return;
    this.state.picked.push(id);
    const mesh = this.pickupMeshes.get(id);
    if (mesh) mesh.visible = false;
    this.disableInteractable(id);
    if (NOTE_IDS.has(def.type)) {
      const note = NOTES.find(n => n.id === def.type);
      if (note) {
        if (!this.state.notesRead.includes(def.type)) this.state.notesRead.push(def.type);
        this.hooks.onNoteRead(note);
        this.checkWhispers();
        this.checkPriestNote(def.type);
      }
      if (LETTER_IDS.includes(def.type)) {
        if (!this.state.lettersFound.includes(def.type)) this.state.lettersFound.push(def.type);
        if (!this.state.codeKnown && this.state.lettersFound.includes('note_s1') && this.state.lettersFound.includes('note_s2')) {
          this.state.codeKnown = true;
          this.hooks.message('You remember the numbers: 7 3 1 9', true);
        }
      }
      this.hooks.onPickup(id, def.type);
      return;
    }
    this.hooks.onPickup(id, def.type);
    switch (def.type) {
      case 'church_key':
        this.hooks.message('Church Key acquired', true);
        this.setStage(1);
        break;
      case 'iron_key':
        this.hooks.message('Iron Key acquired', true);
        this.setStage(5);
        break;
      case 'amulet':
        this.hooks.message('The Drowned Amulet', true);
        this.setStage(4);
        break;
      case 'rifle_stock': this.hooks.message('Rifle Stock acquired'); break;
      case 'rifle_barrel': this.hooks.message('Rifle Barrel acquired'); break;
      case 'herb': {
        const count = ['pk_herb_1', 'pk_herb_2', 'pk_herb_3'].filter(h => this.state.picked.includes(h)).length;
        this.hooks.message(`Nightshade (${count}/3)`);
        break;
      }
      case 'salt': {
        this.state.salts++;
        this.hooks.message(`Ritual Salt (${this.state.salts}/3)`);
        break;
      }
      case 'master_key':
        this.hooks.message('The Master Key — it fits every locked thing in the vale', true);
        this.hooks.netEmit('give', { items: { master_key: 1 } });
        break;
      case 'camera': this.hooks.message('Antique Camera acquired — press I to raise it'); break;
      case 'radio': this.hooks.message('Hand Radio acquired — press U to listen'); break;
      case 'torch': this.hooks.message('Torch acquired — press 5'); break;
      case 'axe': this.hooks.message('Fire Axe acquired — press 4'); break;
      case 'bottle':
      case 'brick': this.hooks.message('Throwable acquired — press G'); break;
      case 'candle': this.hooks.message('Candle acquired — press T to place'); break;
      case 'cloth': this.hooks.message('Cloth acquired'); break;
      case 'splint': this.hooks.message('Splint acquired'); break;
      case 'battery_lith': this.hooks.message('Lithium Cell acquired'); break;
      case 'battery_nuc': this.hooks.message('Experimental Cell acquired'); break;
      case 'lockpick': this.hooks.message('Lockpick acquired'); break;
      case 'trinket': this.hooks.message('Trinket acquired — the peddler pays for these'); break;
      case 'cables': this.hooks.message('Splice Cables acquired — use X near water'); break;
      default: break;
    }
  }

  private checkPriestNote(noteId: string) {
    if (noteId === 'note_priest' && this.state.stage === 1) {
      this.setStage(2);
      this.hooks.subtitle('Three flames. Three calls. The braziers wait in the houses.', 6);
    }
  }

  private checkWhispers() {
    if (this.state.whisperReward) return;
    if (this.state.notesRead.length >= NOTES.length) {
      this.state.whisperReward = true;
      this.hooks.message('All whispers collected: Revolver Ammo +6, Pills +2', true);
      this.hooks.subtitle('The last page reveals the gate-ward sigil. The village finally rests.', 6);
      this.hooks.netEmit('give', { items: { ammo_pistol: 6, pills: 2 } });
    }
  }

  /* ---------- world interactions ---------- */
  private wireWorld() {
    const byId = new Map<string, (typeof this.world.interactables)[number]>();
    for (const it of this.world.interactables) byId.set(it.id, it);

    // doors
    for (const [id, door] of this.world.doors) {
      const it = byId.get('door_' + id);
      if (it) {
        it.prompt = door.locked ? 'Locked — needs a key' : 'Open door';
        it.onInteract = () => this.useDoor(id);
      }
    }

    // braziers
    for (const b of this.world.braziers) {
      const it = byId.get(b.id);
      if (it) it.onInteract = () => this.lightBrazier(b.id);
    }

    // well
    const well = byId.get('well_crank');
    if (well) well.onInteract = () => this.useWell();

    // cemetery altar
    const altar = byId.get('cemetery_altar');
    if (altar) altar.onInteract = () => this.useAltar();

    // gate
    const gate = byId.get('forest_gate');
    if (gate) gate.onInteract = () => this.useGate();

    // stations: workbench + mortar
    this.world.interactables.push({
      id: 'workbench', pos: new THREE.Vector3(-4, 0.9, 28.4), radius: 2.6, prompt: 'Use workbench', enabled: true,
      onInteract: () => this.useWorkbench(),
    });
    this.world.interactables.push({
      id: 'mortar', pos: new THREE.Vector3(-25.2, 0.9, 8), radius: 2.6, prompt: 'Use mortar', enabled: true,
      onInteract: () => this.useMortar(),
    });

    // ritual circle (feature 93) — world.ritualPos is a newer WorldRefs field; guard for older builds
    const rp = this.ritualSpot();
    if (rp) {
      this.world.interactables.push({
        id: 'ritual_circle', pos: rp.clone().setY(0.6), radius: 2.8, prompt: 'Perform the ritual', enabled: true,
        onInteract: () => this.useRitual(),
      });
    }
  }

  useDoor(id: string) {
    const door = this.world.doors.get(id);
    if (!door) return;
    if (door.locked) {
      if (id === 'church') {
        if ((this.localPlayerRef?.inv.church_key || 0) > 0) {
          door.locked = false;
          this.hooks.message('Unlocked the church', true);
          this.openDoor(id);
        } else {
          this.hooks.subtitle('Locked. The keyhole is cold iron. The key is somewhere in the barn.', 4);
        }
      }
      if (id === 'shed') {
        if (this.state.codeKnown) {
          door.locked = false;
          this.state.shedOpen = true;
          this.hooks.message('The combination turns — 7319 accepted', true);
          this.openDoor('shed');
          this.hooks.netEmit('shed', { open: true });
        } else {
          this.hooks.subtitle('A combination lock. Four digits. The letters might remember.', 4);
        }
        return;
      }
      if (id === 'barn_storage' || id === 'clinic_back') {
        if (this.localPlayerRef && this.localPlayerRef.inv.lockpick > 0) {
          door.locked = false;
          this.hooks.message('The pick springs the lock');
          this.openDoor(id);
          this.hooks.netEmit('door', { id, open: true });
        } else {
          this.hooks.subtitle('Locked — a thin pick could open this.', 4);
        }
        return;
      }
      return;
    }
    if (door.open) { this.closeDoor(id); } else { this.openDoor(id); }
  }

  localPlayerRef: Player | null = null;

  openDoor(id: string) {
    const door = this.world.doors.get(id);
    if (!door || door.open) return;
    door.open = true;
    door.pivot.rotation.y = -Math.PI * 0.55;
    const ci = this.world.colliders.indexOf(door.collider);
    if (ci >= 0) this.world.colliders.splice(ci, 1);
    this.hooks.onNoise(door.pivot.position, 11);
    this.hooks.netEmit('door', { id, open: true });
  }
  closeDoor(id: string) {
    const door = this.world.doors.get(id);
    if (!door || !door.open) return;
    door.open = false;
    door.pivot.rotation.y = 0;
    this.world.colliders.push(door.collider);
    this.hooks.onNoise(door.pivot.position, 9);
    this.hooks.netEmit('door', { id, open: false });
  }

  lightBrazier(id: string) {
    const b = this.world.braziers.find(x => x.id === id);
    if (!b || b.lit) return;
    if (this.state.stage < 2) {
      this.hooks.subtitle('The coals are dead. Something must call the flame first.', 4);
      return;
    }
    b.lit = true;
    this.state.braziersLit.push(id);
    const light = new THREE.PointLight(0xff7a1a, 16, 14, 1.6);
    light.position.copy(b.pos3).add(new THREE.Vector3(0, 0.6, 0));
    this.world.root.add(light);
    b.light = light;
    b.flame!.material = new THREE.MeshBasicMaterial({ color: 0xff8a2a });
    b.flame!.scale.setScalar(1.4);
    this.hooks.onNoise(b.pos3, 34);
    this.hooks.netEmit('brazier', { id });
    this.hooks.message(`Brazier lit (${this.state.braziersLit.length}/3)`, true);
    if (this.state.braziersLit.length >= 3 && this.state.stage === 2) {
      this.setStage(3);
      this.hooks.subtitle('A bell tolls far away. The well is calling something up.', 6);
    }
  }

  useWell() {
    if (this.wellAnimating > 0) return;
    if (this.state.stage < 3) {
      this.hooks.subtitle('The rope is frozen in the crank. Nothing answers your pull.', 4);
      return;
    }
    if (this.amuletSpawned) {
      this.hooks.subtitle('The well is quiet now. What it held is already in your hands.', 4);
      return;
    }
    this.wellAnimating = 3;
    this.hooks.subtitle('The crank groans... the rope strains... something heavy rises.', 5);
    this.hooks.onNoise(this.world.wellBucket ? this.world.wellBucket.position : new THREE.Vector3(0, 0, 2), 42);
    this.hooks.netEmit('well', {});
    const t0 = performance.now();
    const anim = () => {
      const t = (performance.now() - t0) / 1000;
      if (this.world.wellBucket && this.world.wellRope) {
        const phase = t / 2.4;
        const y = phase < 0.55 ? 0.5 - phase * 2.6 : 0.5 - (1.1 - phase * 2.0) * 2.6 + (phase - 0.55) * 5.2;
        this.world.wellBucket.position.y = Math.max(0.45, Math.min(y, 1.8));
        this.world.wellRope.scale.y = clamp(1 - this.world.wellBucket.position.y * 0.45, 0.15, 1);
        this.world.wellRope.position.y = 1.4 + (2.0 - 2.0 * this.world.wellRope.scale.y) / 2;
      }
      if (t < 2.6) requestAnimationFrame(anim);
      else {
        if (!this.state.picked.includes('pk_amulet')) {
          const mesh = this.pickupMeshes.get('pk_amulet');
          if (mesh) mesh.visible = true;
          this.enableInteractable('pk_amulet');
          this.hooks.subtitle('The amulet gleams at the lip of the well.', 5);
        }
      }
    };
    requestAnimationFrame(anim);
  }

  useAltar() {
    if (this.state.stage < 4) {
      this.hooks.subtitle('The altar is cold stone. It wants what drowned.', 4);
      return;
    }
    if (!this.state.picked.includes('pk_amulet') && !this.localPlayerRef?.inv.amulet) {
      this.hooks.subtitle('You need the amulet.', 3);
      return;
    }
    if (this.localPlayerRef) this.localPlayerRef.inv.amulet = 0;
    if (!this.state.picked.includes('pk_iron_key')) {
      const altarIt = this.world.interactables.find(i => i.id === 'cemetery_altar');
      if (altarIt) { altarIt.used = true; altarIt.enabled = false; }
      this.enableInteractable('pk_iron_key');
      const mesh = this.pickupMeshes.get('pk_iron_key');
      if (mesh) mesh.visible = true;
      this.hooks.subtitle('The amulet sinks into the stone. An iron key rises from the grave dirt.', 6);
      this.hooks.onNoise(new THREE.Vector3(-33, 1, -41), 46);
      this.hooks.netEmit('altar', {});
    } else {
      this.hooks.subtitle('The stone is still warm.', 3);
    }
  }

  useGate() {
    if (this.state.gateOpen) return;
    if (this.state.stage < 5 || !(this.localPlayerRef && this.localPlayerRef.inv.iron_key > 0)) {
      this.hooks.subtitle('Locked. A sigil of three flames is carved above the keyhole.', 4);
      return;
    }
    this.state.gateOpen = true;
    this.setStage(6);
    if (this.world.gatePivot) this.world.gatePivot.rotation.y = -Math.PI * 0.5;
    const gateCollider = this.world.colliders.find(c => c.minX > -3 && c.maxX < 3 && c.minZ > 54 && c.maxZ < 56);
    if (gateCollider) {
      const ci = this.world.colliders.indexOf(gateCollider);
      if (ci >= 0) this.world.colliders.splice(ci, 1);
    }
    this.hooks.message('The gate is open — RUN.', true);
    this.hooks.onNoise(new THREE.Vector3(0, 1, 55), 40);
    this.hooks.netEmit('gate', {});
  }

  useWorkbench() {
    if (this.state.rifleCrafted) {
      this.hooks.subtitle('The bench is picked clean.', 3);
      return;
    }
    const hasStock = this.state.picked.includes('pk_stock');
    const hasBarrel = this.state.picked.includes('pk_barrel');
    if (hasStock && hasBarrel) {
      this.state.rifleCrafted = true;
      this.hooks.netEmit('craft', { what: 'rifle' });
      this.hooks.message("Hunter's Rifle crafted", true);
      this.hooks.subtitle('The old rifle clicks together. Heavy. Hungry.', 5);
      this.hooks.onNoise(new THREE.Vector3(-4, 1, 28.4), 22);
    } else {
      this.hooks.subtitle(`Missing parts. Stock ${hasStock ? '✓' : '✗'} — Barrel ${hasBarrel ? '✓' : '✗'}`, 4);
    }
  }

  private ritualSpot(): THREE.Vector3 | null {
    const w = this.world as WorldRefs & { ritualPos?: THREE.Vector3 };
    return w.ritualPos || null;
  }

  useRitual() {
    if (this.state.ritualDone) {
      this.hooks.subtitle('The stones are warm. It is done.', 4);
      return;
    }
    if (this.state.stage < 5) {
      this.hooks.subtitle('The circle is inert. Finish the unmaking first.', 4);
      return;
    }
    if (this.state.salts < 3) {
      this.hooks.subtitle(`You need three circles of salt (${this.state.salts}/3).`, 4);
      return;
    }
    this.state.ritualDone = true;
    this.hooks.netEmit('ritual', {});
    this.hooks.message('THE VILLAGE EXHALES — THE CURSE IS UNBOUND', true);
    this.hooks.subtitle('The bell will not call for you again. Walk out of Hollow Vale a free soul.', 8);
    this.hooks.onNoise(this.ritualSpot() ?? new THREE.Vector3(0, 1, 0), 30);
    this.hooks.netEmit('give', { items: { pills: 2 } });
  }

  useMortar() {
    if (this.state.doctorDone) {
      this.hooks.subtitle('The mortar smells of bitter leaves.', 3);
      return;
    }
    const herbs = ['pk_herb_1', 'pk_herb_2', 'pk_herb_3'].filter(h => this.state.picked.includes(h)).length;
    if (herbs >= 3) {
      this.state.doctorDone = true;
      this.hooks.netEmit('craft', { what: 'remedy' });
      this.hooks.message("Doctor's Remedy: Pills +3, Bandages +2", true);
      this.hooks.subtitle('The tincture settles your hands. For now.', 5);
      this.hooks.netEmit('give', { items: { pills: 3, bandage: 2 } });
    } else {
      this.hooks.subtitle(`Nightshade sprigs: ${herbs}/3. Greenhouse, cemetery, forest edge.`, 4);
    }
  }

  /* ---------- helpers ---------- */
  private disableInteractable(id: string) {
    const it = this.world.interactables.find(i => i.id === id);
    if (it) { it.enabled = false; it.used = true; }
  }
  private enableInteractable(id: string) {
    const it = this.world.interactables.find(i => i.id === id);
    if (it) { it.enabled = true; it.used = false; }
  }

  setStage(n: number) {
    if (n <= this.state.stage) return;
    this.state.stage = n;
    this.hooks.onStage(n);
    this.hooks.netEmit('stage', { stage: n });
  }

  applyRemote(event: string, data: Record<string, unknown>) {
    switch (event) {
      case 'pickup': {
        const id = data.id as string;
        if (!this.state.picked.includes(id)) {
          this.state.picked.push(id);
          const mesh = this.pickupMeshes.get(id);
          if (mesh) mesh.visible = false;
          this.disableInteractable(id);
          const def = PICKUPS.find(p => p.id === id);
          if (def && NOTE_IDS.has(def.type) && !this.state.notesRead.includes(def.type)) this.state.notesRead.push(def.type);
          if (def && LETTER_IDS.includes(def.type) && !this.state.lettersFound.includes(def.type)) this.state.lettersFound.push(def.type);
        }
        break;
      }
      case 'door': {
        const door = this.world.doors.get(data.id as string);
        if (door) {
          door.open = data.open as boolean;
          door.pivot.rotation.y = door.open ? -Math.PI * 0.55 : 0;
          const ci = this.world.colliders.indexOf(door.collider);
          if (door.open && ci >= 0) this.world.colliders.splice(ci, 1);
          if (!door.open && ci < 0) this.world.colliders.push(door.collider);
        }
        break;
      }
      case 'brazier': {
        const b = this.world.braziers.find(x => x.id === data.id);
        if (b && !b.lit) {
          b.lit = true;
          if (!this.state.braziersLit.includes(b.id)) this.state.braziersLit.push(b.id);
          const light = new THREE.PointLight(0xff7a1a, 16, 14, 1.6);
          light.position.copy(b.pos3).add(new THREE.Vector3(0, 0.6, 0));
          this.world.root.add(light);
          b.light = light;
          if (b.flame) {
            b.flame.material = new THREE.MeshBasicMaterial({ color: 0xff8a2a });
            b.flame.scale.setScalar(1.4);
          }
        }
        break;
      }
      case 'stage': this.state.stage = Math.max(this.state.stage, data.stage as number); break;
      case 'well': {
        if (!this.state.picked.includes('pk_amulet') && !this.amuletSpawned) {
          this.amuletSpawned = true;
          const mesh = this.pickupMeshes.get('pk_amulet');
          if (mesh) mesh.visible = true;
          this.enableInteractable('pk_amulet');
        }
        break;
      }
      case 'altar': {
        if (!this.state.picked.includes('pk_iron_key')) {
          const mesh = this.pickupMeshes.get('pk_iron_key');
          if (mesh) mesh.visible = true;
          this.enableInteractable('pk_iron_key');
        }
        break;
      }
      case 'gate': {
        this.state.gateOpen = true;
        if (this.world.gatePivot) this.world.gatePivot.rotation.y = -Math.PI * 0.5;
        const gc = this.world.colliders.find(c => c.minX > -3 && c.maxX < 3 && c.minZ > 54 && c.maxZ < 56);
        if (gc) { const i = this.world.colliders.indexOf(gc); if (i >= 0) this.world.colliders.splice(i, 1); }
        break;
      }
      case 'shed': {
        this.state.shedOpen = true;
        const sd = this.world.doors.get('shed');
        if (sd) {
          sd.locked = false;
          sd.open = true;
          sd.pivot.rotation.y = -Math.PI * 0.55;
          const ci = this.world.colliders.indexOf(sd.collider);
          if (ci >= 0) this.world.colliders.splice(ci, 1);
        }
        break;
      }
      case 'ritual': this.state.ritualDone = true; break;
      case 'craft': {
        if (data.what === 'rifle') this.state.rifleCrafted = true;
        if (data.what === 'remedy') this.state.doctorDone = true;
        break;
      }
    }
  }

  giveToPlayer(player: Player, items: Record<string, number>) {
    for (const [k, v] of Object.entries(items)) {
      if (k === 'ammo_pistol' || k === 'ammo_rifle') player.inv[k] = (player.inv[k] || 0) + v;
      else player.inv[k] = (player.inv[k] || 0) + v;
    }
  }

  update(dt: number) {
    // pickup bobbing
    for (const [id, g] of this.pickupMeshes) {
      if (!g.visible) continue;
      g.rotation.y += dt * 1.4;
      g.position.y = PICKUPS.find(p => p.id === id)!.pos.y + Math.sin(performance.now() * 0.002 + g.position.x) * 0.06;
    }
    // brazier flames flicker
    for (const b of this.world.braziers) {
      if (b.lit && b.light) b.light.intensity = 14 + Math.sin(performance.now() * 0.011 + b.pos3.x) * 3.5;
      if (b.lit && b.flame) b.flame.scale.y = 1.3 + Math.sin(performance.now() * 0.013 + b.pos3.z) * 0.25;
    }
  }

  objectiveText(): { main: string; sides: string[] } {
    const s = this.state.stage;
    const mains = [
      'Find the church key in the old barn (east)',
      'Unlock the church and read the priest\u2019s letter',
      `Light the three braziers (${this.state.braziersLit.length}/3) — Miller\u2019s, Farmhouse, Annex`,
      'Crank the well and take what rises',
      'Place the amulet on the cemetery altar (north-west)',
      'Open the forest gate (south) and escape',
      'Escape through the forest gate',
    ];
    const sides: string[] = [];
    if (!this.state.rifleCrafted) {
      const st = this.state.picked.includes('pk_stock') ? 1 : 0;
      const br = this.state.picked.includes('pk_barrel') ? 1 : 0;
      sides.push(`The Hunter\u2019s Rifle: stock ${st}/1, barrel ${br}/1 \u2192 workbench`);
    }
    if (!this.state.doctorDone) {
      const h = ['pk_herb_1', 'pk_herb_2', 'pk_herb_3'].filter(x => this.state.picked.includes(x)).length;
      sides.push(`Doctor\u2019s Remedy: nightshade ${h}/3 \u2192 clinic mortar`);
    }
    if (!this.state.whisperReward) sides.push(`Whispers of the Dead: notes ${this.state.notesRead.length}/${NOTES.length}`);
    if (this.state.lettersFound.length < 3) sides.push(`Letters from the Dead: ${this.state.lettersFound.length}/3`);
    if (!this.state.shedOpen) sides.push(`The Locked Shed: ${this.state.codeKnown ? 'dial in 7319' : 'find the four digits in the letters'}`);
    if (!this.state.ritualDone && (this.state.salts > 0 || s >= 5)) sides.push(`The Old Stones: salt circles ${this.state.salts}/3`);
    return { main: mains[Math.min(s, mains.length - 1)], sides };
  }

  getQuestLog(): { id: string; title: string; desc: string; done: boolean; active: boolean; side: boolean }[] {
    const s = this.state;
    const titles = ['The Key in the Barn', 'The Church of the Backwards Bell', 'Three Flames', 'What the Well Swallowed', 'The Unmaking', 'Run for the Gate'];
    const descs = [
      'Find the church key in the old barn (east)',
      "Unlock the church and read the priest's letter",
      `Light the three braziers (${s.braziersLit.length}/3) — Miller's, Farmhouse, Annex`,
      'Crank the well and take what rises',
      'Place the amulet on the cemetery altar (north-west)',
      s.stage >= 6 ? 'Escape through the forest gate' : 'Open the forest gate (south) and escape',
    ];
    const log: { id: string; title: string; desc: string; done: boolean; active: boolean; side: boolean }[] = titles.map((title, i) => ({
      id: 'm' + (i + 1), title, desc: descs[i], done: s.stage > i, active: s.stage === i, side: false,
    }));
    const st = s.picked.includes('pk_stock') ? 1 : 0;
    const br = s.picked.includes('pk_barrel') ? 1 : 0;
    const herbs = ['pk_herb_1', 'pk_herb_2', 'pk_herb_3'].filter(h => s.picked.includes(h)).length;
    log.push({ id: 's_rifle', title: "The Hunter's Rifle", desc: `stock ${st}/1, barrel ${br}/1 → workbench`, done: s.rifleCrafted, active: !s.rifleCrafted, side: true });
    log.push({ id: 's_remedy', title: "Doctor's Remedy", desc: `nightshade ${herbs}/3 → clinic mortar`, done: s.doctorDone, active: !s.doctorDone, side: true });
    log.push({ id: 's_whispers', title: 'Whispers of the Dead', desc: `notes ${s.notesRead.length}/${NOTES.length}`, done: s.whisperReward, active: !s.whisperReward, side: true });
    log.push({ id: 's_letters', title: 'Letters from the Dead', desc: `${s.lettersFound.length}/3 found`, done: s.lettersFound.length >= 3, active: s.lettersFound.length < 3, side: true });
    log.push({ id: 's_shed', title: 'The Locked Shed', desc: s.codeKnown ? 'You know the numbers — 7319' : 'Find the four digits in the letters', done: s.shedOpen, active: !s.shedOpen, side: true });
    log.push({ id: 's_ritual', title: 'The Old Stones', desc: `Salt circles ${s.salts}/3 at the old stones`, done: s.ritualDone, active: !s.ritualDone, side: true });
    return log;
  }

  currentTarget(): { x: number; z: number; label: string } | null {
    const s = this.state.stage;
    if (s === 0) return { x: 28, z: -8, label: 'Old barn' };
    if (s === 1) return { x: 0, z: -25, label: 'The church' };
    if (s === 2) {
      const b = this.world.braziers.find(x => !x.lit);
      return b ? { x: b.pos3.x, z: b.pos3.z, label: 'Brazier' } : null;
    }
    if (s === 3) return { x: 0, z: 2, label: 'The well' };
    if (s === 4) return { x: -33, z: -41, label: 'The altar' };
    if (s === 5 || s === 6) return { x: 0, z: 55, label: 'The gate' };
    return null;
  }

  serialize(): QuestState { return { ...this.state }; }
  restore(s: Partial<QuestState>) {
    Object.assign(this.state, s);
    // defaults for saves made before the letters/ritual features
    this.state.lettersFound = this.state.lettersFound || [];
    this.state.salts = this.state.salts || 0;
    this.state.codeKnown = !!this.state.codeKnown;
    this.state.shedOpen = !!this.state.shedOpen;
    this.state.ritualDone = !!this.state.ritualDone;
    // re-apply picked items
    for (const id of this.state.picked) {
      const mesh = this.pickupMeshes.get(id);
      if (mesh) mesh.visible = false;
      this.disableInteractable(id);
    }
    for (const id of this.state.braziersLit) {
      const b = this.world.braziers.find(x => x.id === id);
      if (b && !b.lit) {
        b.lit = true;
        const light = new THREE.PointLight(0xff7a1a, 16, 14, 1.6);
        light.position.copy(b.pos3).add(new THREE.Vector3(0, 0.6, 0));
        this.world.root.add(light);
        b.light = light;
        if (b.flame) {
          b.flame.material = new THREE.MeshBasicMaterial({ color: 0xff8a2a });
          b.flame.scale.setScalar(1.4);
        }
      }
    }
    if (this.state.gateOpen && this.world.gatePivot) this.world.gatePivot.rotation.y = -Math.PI * 0.5;
    const church = this.world.doors.get('church');
    if (church) {
      // stage >= 1 implies key found; church still locked until used
    }
    void church;
  }
}

function clamp(v: number, a: number, b: number) { return Math.min(b, Math.max(a, v)); }
