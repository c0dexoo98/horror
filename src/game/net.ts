// HOLLOW VALE — net client: rooms, co-op/versus sync, remote players
import * as THREE from 'three';
import { io, type Socket } from 'socket.io-client';
import type { Settings } from './core';

export interface RoomPlayer { id: string; name: string; isHost: boolean; color: string }
export interface RoomInfo {
  code: string; mode: 'coop' | 'versus'; isHost: boolean; started: boolean;
  players: RoomPlayer[]; shepherdId: string | null;
}

export interface SnapshotPlayer {
  id: string; name: string; x: number; z: number; yaw: number; pitch: number;
  hp: number; downed: boolean; dead: boolean; crouch: boolean; moving: boolean;
  weapon: string; flash: boolean; color: number;
}
export interface Snapshot {
  players: SnapshotPlayer[];
  monster?: { x: number; z: number; yaw: number; state: string } | null;
  stage?: number;
  time?: number;
}

const PLAYER_COLORS = [0x7a8a9a, 0x8a7a5a, 0x6a8a6a, 0x8a5a6a];

interface RemoteEntry {
  id: string; name: string; color: number;
  group: THREE.Group; head: THREE.Mesh;
  tx: number; tz: number; tyaw: number; tpitch: number;
  moving: boolean; crouch: boolean; downed: boolean; dead: boolean; flash: boolean;
  walkT: number;
}

export class NetClient {
  socket: Socket | null = null;
  connected = false;
  connecting = false;
  room: RoomInfo | null = null;
  isShepherd = false;
  myColor = 0x7a8a9a;
  private remotes = new Map<string, RemoteEntry>();
  private scene: THREE.Scene | null = null;
  lastSnap: Snapshot | null = null;

  onLobby: ((room: RoomInfo) => void) | null = null;
  onError: ((msg: string) => void) | null = null;
  onStart: ((room: RoomInfo) => void) | null = null;
  onSnap: ((snap: Snapshot) => void) | null = null;
  onQuestEvent: ((event: string, data: Record<string, unknown>) => void) | null = null;
  onGameEvent: ((event: string, data: Record<string, unknown>) => void) | null = null;
  onDisconnected: (() => void) | null = null;

  setScene(s: THREE.Scene) { this.scene = s; }

  private url(settings: Settings): { uri: string; opts: Record<string, unknown> } {
    if (settings.serverUrl) {
      let u = settings.serverUrl.trim();
      if (!/^wss?:\/\//.test(u) && !/^https?:\/\//.test(u)) u = 'ws://' + u;
      return { uri: u, opts: { transports: ['websocket'], path: '/socket.io', reconnection: true, reconnectionAttempts: 6 } };
    }
    return { uri: '/?XTransformPort=3003', opts: { transports: ['websocket', 'polling'], forceNew: true, reconnection: true, reconnectionAttempts: 6, reconnectionDelay: 1000, timeout: 10000 } };
  }

  connect(settings: Settings): Promise<void> {
    if (this.connected) return Promise.resolve();
    if (this.connecting) return new Promise((res, rej) => {
      const iv = setInterval(() => {
        if (this.connected) { clearInterval(iv); res(); }
        else if (!this.connecting) { clearInterval(iv); rej(new Error('failed')); }
      }, 200);
      setTimeout(() => { clearInterval(iv); rej(new Error('timeout')); }, 12000);
    });
    this.connecting = true;
    return new Promise((resolve, reject) => {
      const { uri, opts } = this.url(settings);
      this.socket = io(uri, opts as never);
      const to = setTimeout(() => { this.connecting = false; reject(new Error('Connection timeout')); }, 12000);
      this.socket.on('connect', () => {
        clearTimeout(to);
        this.connected = true;
        this.connecting = false;
        resolve();
      });
      this.socket.on('connect_error', (e: Error) => {
        if (!this.connected) { clearTimeout(to); this.connecting = false; reject(e); }
      });
      this.socket.on('disconnect', () => {
        this.connected = false;
        if (this.onDisconnected) this.onDisconnected();
      });
      this.socket.on('room:update', (room: RoomInfo) => {
        this.room = room;
        if (this.onLobby) this.onLobby(room);
      });
      this.socket.on('room:error', (d: { message: string }) => {
        if (this.onError) this.onError(d.message);
      });
      this.socket.on('game:start', (room: RoomInfo) => {
        this.room = room;
        this.isShepherd = room.shepherdId === this.socket?.id;
        this.myColor = 0x7a8a9a;
        if (this.onStart) this.onStart(room);
      });
      this.socket.on('snap', (snap: Snapshot) => {
        this.lastSnap = snap;
        if (this.onSnap) this.onSnap(snap);
      });
      this.socket.on('qevent', (d: { event: string; data: Record<string, unknown> }) => {
        if (this.onQuestEvent) this.onQuestEvent(d.event, d.data);
      });
      this.socket.on('gevent', (d: { event: string; data: Record<string, unknown> }) => {
        if (this.onGameEvent) this.onGameEvent(d.event, d.data);
      });
    });
  }

  create(name: string, mode: 'coop' | 'versus') {
    this.socket?.emit('room:create', { name, mode });
  }
  join(name: string, code: string) {
    this.socket?.emit('room:join', { name, code });
  }
  leave() {
    this.socket?.emit('room:leave');
    this.clearRemotes();
    this.room = null;
  }
  start() {
    this.socket?.emit('game:start');
  }
  sendState(s: Record<string, unknown>) {
    if (this.connected && this.room?.started) this.socket?.emit('pstate', s);
  }
  sendMonster(s: Record<string, unknown>) {
    if (this.connected && this.room?.started) this.socket?.emit('mstate', s);
  }
  sendNoise(x: number, z: number, radius: number) {
    if (this.connected && this.room?.started) this.socket?.emit('noise', { x, z, radius });
  }
  sendQuest(event: string, data: Record<string, unknown>) {
    if (this.connected && this.room?.started) this.socket?.emit('qevent', { event, data });
  }
  sendGame(event: string, data: Record<string, unknown>) {
    if (this.connected && this.room?.started) this.socket?.emit('gevent', { event, data });
  }

  /* ---------- remote players ---------- */
  private ensureRemote(p: SnapshotPlayer): RemoteEntry {
    let e = this.remotes.get(p.id);
    if (e) return e;
    const group = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: 0x5a544c, roughness: 0.9 });
    const coat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.95 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.7, 4, 8), coat);
    body.position.y = 1.05;
    group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), skin);
    head.position.y = 1.68;
    group.add(head);
    const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.5, 3, 6), skin);
    legL.position.set(-0.12, 0.35, 0);
    const legR = legL.clone(); legR.position.x = 0.12;
    group.add(legL, legR);
    const torch = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0x333330 }));
    torch.position.set(0.3, 1.1, 0.15);
    torch.rotation.x = Math.PI / 2;
    group.add(torch);
    if (this.scene) this.scene.add(group);
    e = { id: p.id, name: p.name, color: p.color, group, head, tx: p.x, tz: p.z, tyaw: p.yaw, tpitch: p.pitch, moving: p.moving, crouch: p.crouch, downed: p.downed, dead: p.dead, flash: p.flash, walkT: 0 };
    this.remotes.set(p.id, e);
    return e;
  }

  clearRemotes() {
    for (const [, e] of this.remotes) {
      if (this.scene) this.scene.remove(e.group);
    }
    this.remotes.clear();
  }

  applySnapshot(snap: Snapshot) {
    const seen = new Set<string>();
    for (const p of snap.players) {
      seen.add(p.id);
      const e = this.ensureRemote(p);
      e.tx = p.x; e.tz = p.z; e.tyaw = p.yaw; e.tpitch = p.pitch;
      e.moving = p.moving; e.crouch = p.crouch; e.downed = p.downed; e.dead = p.dead; e.flash = p.flash;
      e.name = p.name;
    }
    for (const [id, e] of this.remotes) {
      if (!seen.has(id)) {
        if (this.scene) this.scene.remove(e.group);
        this.remotes.delete(id);
      }
    }
  }

  update(dt: number) {
    for (const [, e] of this.remotes) {
      const g = e.group;
      const dx = e.tx - g.position.x, dz = e.tz - g.position.z;
      const k = Math.min(1, dt * 10);
      g.position.x += dx * k;
      g.position.z += dz * k;
      g.rotation.y = e.tyaw + Math.PI;
      g.scale.y = e.crouch ? 0.72 : 1;
      g.visible = !e.dead;
      if (e.downed) { g.rotation.x = Math.PI / 2.2; g.position.y = 0.3; }
      else g.rotation.x = 0;
      const d = Math.hypot(dx, dz);
      if (d > 0.01) {
        e.walkT += dt * 9;
        g.children[2].rotation.x = Math.sin(e.walkT) * 0.55;
        g.children[3].rotation.x = -Math.sin(e.walkT) * 0.55;
      } else {
        g.children[2].rotation.x *= 0.8;
        g.children[3].rotation.x *= 0.8;
      }
    }
  }

  remoteList(): { id: string; pos: THREE.Vector3 }[] {
    const out: { id: string; pos: THREE.Vector3 }[] = [];
    for (const [id, e] of this.remotes) out.push({ id, pos: new THREE.Vector3(e.tx, 1, e.tz) });
    return out;
  }
}

export { PLAYER_COLORS };
