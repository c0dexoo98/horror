// HOLLOW VALE — Standalone Multiplayer Server
// Run this on your PC (or Termux on Android) so friends can join your rooms via your IP.
//
//   1) Install:      npm install
//   2) Start:        npm start   (or: node server.js)
//   3) In-game:      Settings -> Multiplayer server ->  ws://YOUR-IP:8787
//      then Multiplayer -> Create Room, and share the room code.
//
// Port can be changed:  PORT=9000 node server.js
const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = Number(process.env.PORT || 8787);

const httpServer = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HOLLOW VALE multiplayer server is running.');
});

const io = new Server(httpServer, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
  pingTimeout: 60000,
  pingInterval: 25000,
});

const rooms = new Map();
const COLORS = [0x7a8a9a, 0x8a7a5a, 0x6a8a6a, 0x8a5a6a];

function makeCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let c;
  do {
    c = '';
    for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)];
  } while (rooms.has(c));
  return c;
}

function roomInfo(room) {
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

function snapshot(room) {
  return {
    players: Array.from(room.players.entries()).map(([id, p]) => ({
      id, name: p.name,
      x: p.state.x ?? 0, z: p.state.z ?? 0, yaw: p.state.yaw ?? 0, pitch: p.state.pitch ?? 0,
      hp: p.state.hp ?? 100, downed: !!p.state.downed, dead: !!p.state.dead,
      crouch: !!p.state.crouch, moving: !!p.state.moving,
      weapon: p.state.weapon || 'knife', flash: !!p.state.flash, color: p.color,
    })),
    monster: room.monsterState,
    stage: room.stage,
    time: room.time,
  };
}

io.on('connection', (socket) => {
  let myRoom = null;

  socket.on('room:create', (d = {}) => {
    if (myRoom) return;
    const room = {
      code: makeCode(),
      mode: d.mode === 'versus' ? 'versus' : 'coop',
      players: new Map(), hostId: socket.id, started: false, stage: 0,
      time: 720, shepherdId: null, monsterState: null, ended: false,
    };
    room.players.set(socket.id, { name: String(d.name || 'Survivor').slice(0, 14), color: COLORS[0], state: {} });
    if (room.mode === 'versus') room.shepherdId = socket.id;
    rooms.set(room.code, room);
    myRoom = room;
    socket.join(room.code);
    socket.emit('room:update', roomInfo(room));
    console.log(`[room] ${room.code} created by ${room.players.get(socket.id).name} (${room.mode})`);
  });

  socket.on('room:join', (d = {}) => {
    const room = rooms.get(String(d.code || '').toUpperCase().trim());
    if (!room) return socket.emit('room:error', { message: 'No such room. Check the code.' });
    if (room.started) return socket.emit('room:error', { message: 'That night already began.' });
    if (room.players.size >= 4) return socket.emit('room:error', { message: 'The room is full (max 4).' });
    if (myRoom) return;
    room.players.set(socket.id, { name: String(d.name || 'Survivor').slice(0, 14), color: COLORS[room.players.size % COLORS.length], state: {} });
    myRoom = room;
    socket.join(room.code);
    io.to(room.code).emit('room:update', roomInfo(room));
    console.log(`[room] ${room.code} joined by ${d.name}`);
  });

  socket.on('room:leave', () => {
    if (!myRoom) return;
    const room = myRoom;
    room.players.delete(socket.id);
    socket.leave(room.code);
    myRoom = null;
    if (room.players.size === 0) { rooms.delete(room.code); console.log(`[room] ${room.code} closed`); return; }
    if (room.hostId === socket.id) {
      room.hostId = room.players.keys().next().value;
      if (room.mode === 'versus' && room.shepherdId === socket.id) room.shepherdId = room.hostId;
    }
    io.to(room.code).emit('room:update', roomInfo(room));
  });

  socket.on('game:start', () => {
    if (!myRoom || myRoom.hostId !== socket.id) return;
    myRoom.started = true;
    myRoom.ended = false;
    myRoom.time = 720;
    io.to(myRoom.code).emit('game:start', roomInfo(myRoom));
    console.log(`[room] ${myRoom.code} started`);
  });

  socket.on('pstate', (s = {}) => {
    if (!myRoom) return;
    const p = myRoom.players.get(socket.id);
    if (p) p.state = { ...p.state, ...s };
  });

  socket.on('mstate', (m = {}) => {
    if (!myRoom || myRoom.shepherdId !== socket.id) return;
    myRoom.monsterState = m;
  });

  socket.on('noise', (d) => {
    if (myRoom) socket.to(myRoom.code).emit('gevent', { event: 'noise', data: d });
  });

  socket.on('qevent', (d = {}) => {
    if (!myRoom) return;
    if (d.event === 'stage' && typeof (d.data || {}).stage === 'number') {
      myRoom.stage = Math.max(myRoom.stage, d.data.stage);
    }
    socket.to(myRoom.code).emit('qevent', d);
  });

  socket.on('gevent', (d = {}) => {
    if (!myRoom || myRoom.ended) return;
    socket.to(myRoom.code).emit('gevent', d);
    if (d.event === 'escaped') {
      end(myRoom, 'survivors', 'A survivor escaped the vale.');
    }
    if (d.event === 'died' && myRoom.mode === 'versus') {
      setTimeout(() => {
        if (!rooms.has(myRoom.code) || myRoom.ended) return;
        let survivors = 0;
        for (const [id, p] of myRoom.players) {
          if (id !== myRoom.shepherdId && !p.state.dead) survivors++;
        }
        if (survivors === 0) end(myRoom, 'monster', 'The bell tolled for everyone.');
      }, 800);
    }
  });

  function end(room, winner, text) {
    if (room.ended) return;
    room.ended = true;
    io.to(room.code).emit('gevent', { event: 'gameover', data: { winner, text } });
    console.log(`[room] ${room.code} over — winner: ${winner}`);
    setTimeout(() => rooms.delete(room.code), 120000);
  }

  const iv = setInterval(() => {
    if (!myRoom || !myRoom.started || myRoom.ended) return;
    if (myRoom.mode === 'versus' && myRoom.shepherdId === socket.id) {
      myRoom.time = Math.max(0, myRoom.time - 0.083);
      if (myRoom.time <= 0) return end(myRoom, 'survivors', 'Dawn breaks. The lantern flickers out.');
    }
    io.to(myRoom.code).emit('snap', snapshot(myRoom));
  }, 83);

  socket.on('disconnect', () => {
    clearInterval(iv);
    if (!myRoom) return;
    const room = myRoom;
    room.players.delete(socket.id);
    if (room.players.size === 0) { rooms.delete(room.code); return; }
    if (room.hostId === socket.id) {
      room.hostId = room.players.keys().next().value;
      if (room.mode === 'versus' && room.shepherdId === socket.id) room.shepherdId = room.hostId;
    }
    io.to(room.code).emit('room:update', roomInfo(room));
  });
});

httpServer.listen(PORT, () => {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════╗');
  console.log('  ║   HOLLOW VALE — multiplayer server        ║');
  console.log(`  ║   listening on port ${String(PORT).padEnd(24)}║`);
  console.log('  ║   Friends connect with:  ws://YOUR-IP:' + String(PORT).padEnd(9) + '║');
  console.log('  ╚═══════════════════════════════════════════╝');
  console.log('');
});
