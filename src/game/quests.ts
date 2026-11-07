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
];
const START_HIDDEN = new Set(['pk_iron_key', 'pk_amulet']);

const PICKUP_COLORS: Record<string, number> = {
  ammo_pistol: 0xb08a3e, ammo_rifle: 0x8a6a2e, bandage: 0xd8d2c4, pills: 0x9fd0c0,
  battery: 0x7fa8d8, grenade: 0xc46a3a, herb: 0x5a8a3a, church_key: 0xd8c46a,
  iron_key: 0xc8b45a, amulet: 0x8a5adf, rifle_stock: 0x6a4a2a, rifle_barrel: 0x8a8f94,
  note_priest: 0xcfc7ab, note_miller: 0xcfc7ab, note_clinic: 0xcfc7ab, note_barn: 0xcfc7ab,
  note_farm: 0xcfc7ab, note_annex: 0xcfc7ab, note_hunter: 0xcfc7ab, note_cemetery: 0xcfc7ab,
};
const NOTE_IDS = new Set(['note_priest', 'note_miller', 'note_clinic', 'note_barn', 'note_farm', 'note_annex', 'note_hunter', 'note_cemetery']);

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
}

export class Quests {
  state: QuestState = {
    stage: 0, braziersLit: [], picked: [], notesRead: [], rifleCrafted: false,
    doctorDone: false, whisperReward: false, gateOpen: false, shepherdActive: false,
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
      } else if (p.type === 'church_key' || p.type === 'iron_key') {
        const mat = new THREE.MeshStandardMaterial({ color: PICKUP_COLORS[p.type], metalness: 0.6, roughness: 0.4 });
        const shank = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.26), mat);
        shank.position.z = 0.06;
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 12), mat);
        ring.position.z = -0.1;
        const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.05), mat);
        teeth.position.set(0, -0.05, 0.16);
        g.add(shank, ring, teeth);
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
    if (!this.state.whisperReward) sides.push(`Whispers of the Dead: notes ${this.state.notesRead.length}/8`);
    return { main: mains[Math.min(s, mains.length - 1)], sides };
  }

  serialize(): QuestState { return { ...this.state }; }
  restore(s: Partial<QuestState>) {
    Object.assign(this.state, s);
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
