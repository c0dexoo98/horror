// HOLLOW VALE — multiplayer server: rooms (co-op / versus), state relay, win conditions
import { createServer } from 'http';
import { Server, type Socket } from 'socket.io';

const PORT = Number(process.env.GAME_PORT || 3003);

const httpServer = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HOLLOW VALE multiplayer server');
});

const io = new Server(httpServer, {
  path: '/',
  cors: { origin: '*', methods: ['GET', 'POST'] },
  pingTimeout: 60000,
  pingInterval: 25000,
});

interface PState {
  id: string; name: string; x: number; z: number; yaw: number; pitch: number;
  hp: number; downed: boolean; dead: boolean; crouch: boolean; moving: boolean;
  weapon: string; flash: boolean; color: number;
}

interface Room {
  code: string;
  mode: 'coop' | 'versus';
  players: Map<string, { name: string; color: number; state: Partial<PState> }>;
  hostId: string;
  started: boolean;
  stage: number;
  time: number;
  shepherdId: string | null;
  monsterState: { x: number; z: number; yaw: number; state: string } | null;
  ended: boolean;
}

const rooms = new Map<string, Room>();
const COLORS = [0x7a8a9a, 0x8a7a5a, 0x6a8a6a, 0x8a5a6a];

function code(): string {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let c = '';
  do {
    c = '';
    for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)];
  } while (rooms.has(c));
  return c;
}

function roomInfo(room: Room) {
  return {
    code: room.code,
    mode: room.mode,
    started: room.started,
    shepherdId: room.shepherdId,
    players: Array.from(room.players.entries()).map(([id, p], i) => ({
      id, name: p.name, isHost: id === room.hostId, color: COLORS[i % COLORS.length],
    })),
  };
}

function snapshot(room: Room) {
  const players = Array.from(room.players.entries()).map(([id, p]) => ({
    id, name: p.name,
    x: p.state.x ?? 0, z: p.state.z ?? 0, yaw: p.state.yaw ?? 0, pitch: p.state.pitch ?? 0,
    hp: p.state.hp ?? 100, downed: !!p.state.downed, dead: !!p.state.dead,
    crouch: !!p.state.crouch, moving: !!p.state.moving,
    weapon: p.state.weapon || 'knife', flash: !!p.state.flash,
    color: p.color,
  }));
  return {
    players,
    monster: room.monsterState,
    stage: room.stage,
    time: room.time,
  };
}

function aliveCount(room: Room): number {
  let n = 0;
  for (const [, p] of room.players) if (!p.state.dead) n++;
  return n;
}

function endRoom(io: Server, room: Room, winner: 'monster' | 'survivors', text: string) {
  if (room.ended) return;
  room.ended = true;
  io.to(room.code).emit('gevent', { event: 'gameover', data: { winner, text } });
  setTimeout(() => rooms.delete(room.code), 120000);
}

io.on('connection', (socket: Socket) => {
  let myRoom: Room | null = null;

  socket.on('room:create', (d: { name: string; mode: 'coop' | 'versus' }) => {
    if (myRoom) return;
    const c = code();
    const room: Room = {
      code: c, mode: d.mode === 'versus' ? 'versus' : 'coop',
      players: new Map(), hostId: socket.id, started: false, stage: 0,
      time: 720, shepherdId: null, monsterState: null, ended: false,
    };
    room.players.set(socket.id, { name: (d.name || 'Survivor').slice(0, 14), color: COLORS[0], state: {} });
    if (room.mode === 'versus') room.shepherdId = socket.id;
    rooms.set(c, room);
    myRoom = room;
    socket.join(c);
    socket.emit('room:update', roomInfo(room));
  });

  socket.on('room:join', (d: { name: string; code: string }) => {
    const room = rooms.get((d.code || '').toUpperCase().trim());
    if (!room) { socket.emit('room:error', { message: 'No such room. Check the code.' }); return; }
    if (room.started) { socket.emit('room:error', { message: 'That night already began.' }); return; }
    if (room.players.size >= 4) { socket.emit('room:error', { message: 'The room is full (max 4).' }); return; }
    if (myRoom) return;
    room.players.set(socket.id, { name: (d.name || 'Survivor').slice(0, 14), color: COLORS[room.players.size % COLORS.length], state: {} });
    myRoom = room;
    socket.join(room.code);
    io.to(room.code).emit('room:update', roomInfo(room));
  });

  socket.on('room:leave', () => {
    if (!myRoom) return;
    const room = myRoom;
    room.players.delete(socket.id);
    socket.leave(room.code);
    myRoom = null;
    if (room.players.size === 0) { rooms.delete(room.code); return; }
    if (room.hostId === socket.id) {
      room.hostId = room.players.keys().next().value as string;
      if (room.mode === 'versus' && room.shepherdId === socket.id) {
        room.shepherdId = room.hostId;
      }
    }
    io.to(room.code).emit('room:update', roomInfo(room));
  });

  socket.on('game:start', () => {
    if (!myRoom || myRoom.hostId !== socket.id) return;
    myRoom.started = true;
    myRoom.ended = false;
    myRoom.time = 720;
    io.to(myRoom.code).emit('game:start', roomInfo(myRoom));
  });

  socket.on('pstate', (s: Partial<PState>) => {
    if (!myRoom) return;
    const p = myRoom.players.get(socket.id);
    if (!p) return;
    p.state = { ...p.state, ...s };
  });

  socket.on('mstate', (m: { x: number; z: number; yaw: number; state: string }) => {
    if (!myRoom || myRoom.shepherdId !== socket.id) return;
    myRoom.monsterState = m;
  });

  socket.on('noise', (d: { x: number; z: number; radius: number }) => {
    if (!myRoom) return;
    socket.to(myRoom.code).emit('gevent', { event: 'noise', data: d });
  });

  socket.on('qevent', (d: { event: string; data: Record<string, unknown> }) => {
    if (!myRoom) return;
    if (d.event === 'stage' && typeof d.data.stage === 'number') {
      myRoom.stage = Math.max(myRoom.stage, d.data.stage);
    }
    socket.to(myRoom.code).emit('qevent', d);
  });

  socket.on('gevent', (d: { event: string; data: Record<string, unknown> }) => {
    if (!myRoom || myRoom.ended) return;
    switch (d.event) {
      case 'mhit':
      case 'revive':
      case 'died':
        socket.to(myRoom.code).emit('gevent', d);
        if (d.event === 'died' && myRoom.mode === 'versus') {
          // check all survivors dead
          setTimeout(() => {
            if (!rooms.has(myRoom!.code) || myRoom!.ended) return;
            let survivors = 0;
            for (const [id, p] of myRoom!.players) {
              if (id !== myRoom!.shepherdId && !p.state.dead) survivors++;
            }
            if (survivors === 0) endRoom(io, myRoom!, 'monster', 'The bell tolled for everyone.');
          }, 800);
        }
        break;
      case 'escaped':
        if (myRoom.mode === 'coop') {
          endRoom(io, myRoom, 'survivors', 'A survivor slipped through the gate.');
        } else if (myRoom.shepherdId !== socket.id) {
          endRoom(io, myRoom, 'survivors', 'A survivor escaped. The Shepherd dissolves with the mist.');
        }
        break;
      case 'mdamage': {
        // survivors shooting the shepherd player — relay to shepherd client
        socket.to(myRoom.code).emit('gevent', d);
        break;
      }
      default:
        socket.to(myRoom.code).emit('gevent', d);
    }
  });

  // game loop per room: broadcast snapshots ~12Hz, versus timer
  const snapIv = setInterval(() => {
    if (!myRoom || !myRoom.started || myRoom.ended) return;
    if (myRoom.mode === 'versus' && myRoom.shepherdId === socket.id) {
      myRoom.time = Math.max(0, myRoom.time - 0.083);
      if (myRoom.time <= 0) {
        endRoom(io, myRoom, 'survivors', 'Dawn breaks. The lantern flickers out.');
      }
    }
    io.to(myRoom.code).emit('snap', snapshot(myRoom));
  }, 83);

  socket.on('disconnect', () => {
    clearInterval(snapIv);
    if (!myRoom) return;
    const room = myRoom;
    room.players.delete(socket.id);
    if (room.players.size === 0) { rooms.delete(room.code); return; }
    if (room.hostId === socket.id) {
      room.hostId = room.players.keys().next().value as string;
      if (room.mode === 'versus' && room.shepherdId === socket.id) room.shepherdId = room.hostId;
    }
    io.to(room.code).emit('room:update', roomInfo(room));
  });
});

httpServer.listen(PORT, () => {
  console.log(`HOLLOW VALE multiplayer server on :${PORT}`);
});
