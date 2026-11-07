// HOLLOW VALE — core engine: settings, save, procedural textures, audio synth, input
import * as THREE from 'three';

/* ---------------- math utils ---------------- */
export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const dist2D = (ax: number, az: number, bx: number, bz: number) => Math.hypot(ax - bx, az - bz);
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- settings ---------------- */
export type Quality = 'low' | 'medium' | 'high';
export interface Settings {
  quality: Quality;
  sensitivity: number;
  invertY: boolean;
  volume: number;
  camMode: 'first' | 'third';
  serverUrl: string;
  showTouch: 'auto' | 'on' | 'off';
  playerName: string;
}
const SET_KEY = 'hv_settings_v1';
export function defaultSettings(): Settings {
  const touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  const cfg = (window as unknown as { HV_CONFIG?: { serverUrl?: string } }).HV_CONFIG || {};
  return {
    quality: touch ? 'medium' : 'high',
    sensitivity: 1.0,
    invertY: false,
    volume: 0.8,
    camMode: 'third',
    serverUrl: cfg.serverUrl || '',
    showTouch: 'auto',
    playerName: 'Survivor',
  };
}
export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SET_KEY);
    if (raw) return { ...defaultSettings(), ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return defaultSettings();
}
export function saveSettings(s: Settings) {
  try { localStorage.setItem(SET_KEY, JSON.stringify(s)); } catch { /* ignore */ }
}

/* ---------------- singleplayer save ---------------- */
export interface SPProgress {
  chapter: number;
  inventory: Record<string, number>;
  weapons: string[];
  notes: string[];
  flags: Record<string, unknown>;
  playTime: number;
  pos?: { x: number; z: number };
}
const SP_KEY = 'hv_sp_v1';
export function loadSPProgress(): SPProgress | null {
  try {
    const raw = localStorage.getItem(SP_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return null;
}
export function saveSPProgress(p: SPProgress) {
  try { localStorage.setItem(SP_KEY, JSON.stringify(p)); } catch { /* ignore */ }
}
export function clearSPProgress() { try { localStorage.removeItem(SP_KEY); } catch { /* ignore */ } }

/* ---------------- procedural textures ---------------- */
type TexName = 'dirt' | 'grass' | 'plank' | 'plankdark' | 'stone' | 'roof' | 'bark' | 'cloth' | 'metal' | 'paper' | 'ground' | 'curtain';
const texCache = new Map<string, THREE.Texture>();

function noiseCanvas(size: number, base: string, variants: string[], grain: number, seed = 1): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  const rnd = mulberry32(seed);
  g.fillStyle = base;
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < variants.length; i++) {
    g.fillStyle = variants[i];
    for (let n = 0; n < size * size * 0.02; n++) {
      const x = rnd() * size, y = rnd() * size, r = 1 + rnd() * (size / 32);
      g.globalAlpha = 0.12 + rnd() * 0.22;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
  }
  g.globalAlpha = 1;
  const img = g.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (rnd() - 0.5) * grain;
    img.data[i] = clamp(img.data[i] + n, 0, 255);
    img.data[i + 1] = clamp(img.data[i + 1] + n, 0, 255);
    img.data[i + 2] = clamp(img.data[i + 2] + n, 0, 255);
  }
  g.putImageData(img, 0, 0);
  return c;
}

export function getTexture(name: TexName): THREE.Texture {
  const cached = texCache.get(name);
  if (cached) return cached;
  const S = 256;
  let c = noiseCanvas(S, '#333', ['#2a2a2a'], 10, 1);
  const g2 = c.getContext('2d')!;
  switch (name) {
    case 'ground':
      c = noiseCanvas(S, '#2b2a24', ['#232420', '#332f26', '#1d1e19'], 26, 11);
      break;
    case 'dirt':
      c = noiseCanvas(S, '#3a3227', ['#2e2820', '#453a2c'], 22, 22);
      break;
    case 'grass':
      c = noiseCanvas(S, '#252e1c', ['#1c2416', '#2e3a22', '#161c10'], 30, 33);
      break;
    case 'plank': {
      c = noiseCanvas(S, '#4a3a28', ['#3c2f20', '#55422e'], 14, 44);
      g2.strokeStyle = 'rgba(20,14,8,0.9)';
      for (let y = 0; y < S; y += 32) {
        g2.lineWidth = 2; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke();
        g2.lineWidth = 1; g2.beginPath(); g2.moveTo(0, y + 16 + Math.random() * 4); g2.lineTo(S, y + 14 + Math.random() * 6); g2.stroke();
      }
      break;
    }
    case 'plankdark': {
      c = noiseCanvas(S, '#2e2618', ['#241d12', '#382e1e'], 16, 55);
      g2.strokeStyle = 'rgba(10,8,4,0.9)';
      for (let y = 0; y < S; y += 32) { g2.lineWidth = 2; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke(); }
      break;
    }
    case 'stone': {
      c = noiseCanvas(S, '#4a4a48', ['#3c3c3a', '#565652', '#323230'], 20, 66);
      g2.strokeStyle = 'rgba(18,18,16,0.85)';
      for (let y = 0; y < S; y += 42) {
        g2.lineWidth = 2.5; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke();
        const off = (y / 42) % 2 === 0 ? 0 : 32;
        for (let x = off; x < S; x += 64) { g2.beginPath(); g2.moveTo(x, y); g2.lineTo(x, Math.min(S, y + 42)); g2.stroke(); }
      }
      break;
    }
    case 'roof': {
      c = noiseCanvas(S, '#33262a', ['#281d21', '#3e2e33'], 18, 77);
      g2.strokeStyle = 'rgba(12,8,10,0.9)';
      for (let y = 0; y < S; y += 20) { g2.lineWidth = 3; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke(); }
      for (let y = 0; y < S; y += 40) { for (let x = ((y / 40) % 2) * 20; x < S; x += 40) { g2.beginPath(); g2.moveTo(x, y); g2.lineTo(x, y + 20); g2.stroke(); } }
      break;
    }
    case 'bark': {
      c = noiseCanvas(S, '#2c231a', ['#221b13', '#382c1f'], 30, 88);
      g2.strokeStyle = 'rgba(14,10,6,0.5)';
      for (let i = 0; i < 40; i++) { const x = Math.random() * S; g2.lineWidth = 1 + Math.random() * 2; g2.beginPath(); g2.moveTo(x, 0); g2.bezierCurveTo(x + 8, S / 3, x - 8, 2 * S / 3, x + 3, S); g2.stroke(); }
      break;
    }
    case 'cloth':
      c = noiseCanvas(S, '#3a3630', ['#302c26', '#443f38'], 24, 99);
      break;
    case 'metal':
      c = noiseCanvas(S, '#3c4044', ['#303438', '#484c50'], 12, 111);
      break;
    case 'curtain':
      c = noiseCanvas(S, '#2a2028', ['#221a20', '#342832'], 18, 122);
      break;
    case 'paper':
      c = noiseCanvas(S, '#c9bfa4', ['#bfb498', '#d4cab0'], 10, 133);
      break;
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  texCache.set(name, t);
  return t;
}

export function repeatTex(t: THREE.Texture, rx: number, ry: number) {
  const c = t.clone();
  c.needsUpdate = true;
  c.repeat.set(rx, ry);
  return c;
}

/* ---------------- audio engine (fully procedural) ---------------- */
export class AudioEngine {
  ctx: AudioContext | null = null;
  master: GainNode | null = null;
  private windGain: GainNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private dissGain: GainNode | null = null;
  private growlGain: GainNode | null = null;
  private growlOsc: OscillatorNode | null = null;
  private heartTimer = 0;
  danger = 0; // 0..1 drives heartbeat & tension layers
  volume = 0.8;

  ensure() {
    if (this.ctx) { if (this.ctx.state === 'suspended') void this.ctx.resume(); return; }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
    this.startAmbience();
  }

  setVolume(v: number) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  private noiseBuffer(seconds = 2): AudioBuffer {
    const ctx = this.ctx!;
    const buf = ctx.createBuffer(1, Math.max(1, Math.floor(ctx.sampleRate * seconds)), ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < d.length; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.2;
    }
    return buf;
  }

  private startAmbience() {
    const ctx = this.ctx!;
    // wind
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(4); src.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; lp.Q.value = 0.6;
    this.windGain = ctx.createGain(); this.windGain.gain.value = 0.14;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.05;
    lfo.connect(lfoG); lfoG.connect(this.windGain.gain);
    src.connect(lp); lp.connect(this.windGain); this.windGain.connect(this.master!);
    src.start(); lfo.start();
    // dread drone
    this.droneOsc = ctx.createOscillator(); this.droneOsc.type = 'sine'; this.droneOsc.frequency.value = 46;
    const dr2 = ctx.createOscillator(); dr2.type = 'sine'; dr2.frequency.value = 46.7;
    this.droneGain = ctx.createGain(); this.droneGain.gain.value = 0.05;
    this.dissGain = ctx.createGain(); this.dissGain.gain.value = 0.0;
    const diss = ctx.createOscillator(); diss.type = 'sawtooth'; diss.frequency.value = 92;
    const dissLp = ctx.createBiquadFilter(); dissLp.type = 'lowpass'; dissLp.frequency.value = 300;
    this.droneOsc.connect(this.droneGain); dr2.connect(this.droneGain);
    this.droneGain.connect(this.master!);
    diss.connect(dissLp); dissLp.connect(this.dissGain); this.dissGain.connect(this.master!);
    this.droneOsc.start(); dr2.start(); diss.start();
    // monster growl loop (gain driven per-frame)
    this.growlOsc = ctx.createOscillator(); this.growlOsc.type = 'sawtooth'; this.growlOsc.frequency.value = 58;
    const growlLp = ctx.createBiquadFilter(); growlLp.type = 'lowpass'; growlLp.frequency.value = 190;
    const growlLfo = ctx.createOscillator(); growlLfo.frequency.value = 5.2;
    const growlLfoG = ctx.createGain(); growlLfoG.gain.value = 14;
    growlLfo.connect(growlLfoG); growlLfoG.connect(this.growlOsc.frequency);
    this.growlGain = ctx.createGain(); this.growlGain.gain.value = 0;
    this.growlOsc.connect(growlLp); growlLp.connect(this.growlGain); this.growlGain.connect(this.master!);
    this.growlOsc.start(); growlLfo.start();
  }

  update(dt: number) {
    if (!this.ctx || !this.droneGain || !this.droneOsc || !this.dissGain) return;
    const t = this.ctx.currentTime;
    this.droneGain.gain.setTargetAtTime(0.04 + this.danger * 0.09, t, 0.4);
    this.droneOsc.frequency.setTargetAtTime(46 + this.danger * 10, t, 0.6);
    this.dissGain.gain.setTargetAtTime(this.danger * 0.045, t, 0.5);
    if (this.windGain) this.windGain.gain.setTargetAtTime(0.10 + this.danger * 0.08, t, 1.2);
    // heartbeat
    if (this.danger > 0.25) {
      this.heartTimer -= dt;
      if (this.heartTimer <= 0) {
        const bpm = 42 + this.danger * 78;
        this.heartTimer = 60 / bpm;
        this.thump(0.5 + this.danger * 0.5);
        setTimeout(() => this.thump(0.35 + this.danger * 0.35), 150);
      }
    }
  }

  private thump(vol: number) {
    const ctx = this.ctx; if (!ctx || !this.master) return;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(58, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol * 0.5, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    o.connect(g); g.connect(this.master);
    o.start(); o.stop(ctx.currentTime + 0.25);
  }

  private env(node: AudioNode, vol: number, dur: number, attack = 0.005): GainNode {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    node.connect(g); g.connect(this.master!);
    return g;
  }

  // spatial helper: returns [gain, pan]
  spatial(listener: THREE.Vector3 | null, listenerYaw: number, pos: THREE.Vector3 | null, base: number): [number, number] {
    if (!listener || !pos) return [base, 0];
    const dx = pos.x - listener.x, dz = pos.z - listener.z;
    const d = Math.hypot(dx, dz);
    const gain = base * clamp(1 - d / 38, 0, 1) ** 1.4;
    const ang = Math.atan2(dx, dz) - listenerYaw;
    const pan = clamp(Math.sin(ang), -1, 1) * clamp(1 - d / 40, 0, 1);
    return [gain, pan];
  }

  play3d(name: string, listener: THREE.Vector3 | null, listenerYaw: number, pos: THREE.Vector3 | null, base = 0.5) {
    const [gain, pan] = this.spatial(listener, listenerYaw, pos, base);
    if (gain < 0.004) return;
    this.play(name, gain, pan);
  }

  play(name: string, vol = 0.5, pan = 0) {
    const ctx = this.ctx; if (!ctx || !this.master) return;
    const out = ctx.createStereoPanner(); out.pan.value = clamp(pan, -1, 1); out.connect(this.master);
    const t = ctx.currentTime;
    switch (name) {
      case 'step': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.1);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 240 + Math.random() * 160; f.Q.value = 1.1;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.1);
        break;
      }
      case 'shot': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.4);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass';
        f.frequency.setValueAtTime(3200, t); f.frequency.exponentialRampToValueAtTime(180, t + 0.28);
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
        f.connect(g); g.connect(out);
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.16);
        const g2 = ctx.createGain(); g2.gain.setValueAtTime(vol * 0.9, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
        o.connect(g2); g2.connect(out);
        s.start(); s.stop(t + 0.4); o.start(); o.stop(t + 0.22);
        break;
      }
      case 'dry': { this.blip(out, 1400, 0.04, vol * 0.4, 'square'); break; }
      case 'reload': { this.blip(out, 900, 0.05, vol * 0.5, 'square'); setTimeout(() => this.blip(out, 620, 0.06, vol * 0.5, 'square'), 130); setTimeout(() => this.blip(out, 1100, 0.05, vol * 0.6, 'square'), 300); break; }
      case 'knife': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.2);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 2.5;
        f.frequency.setValueAtTime(600, t); f.frequency.exponentialRampToValueAtTime(3600, t + 0.12);
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.7, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.2);
        break;
      }
      case 'flesh': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.25);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.9, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.25);
        break;
      }
      case 'pickup': { this.tone(out, 520, 0.09, vol * 0.35, 'sine'); setTimeout(() => this.tone(out, 780, 0.12, vol * 0.35, 'sine'), 80); break; }
      case 'paper': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.3);
        const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1800;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.35, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.3);
        break;
      }
      case 'door': {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.setValueAtTime(85, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.7);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 300; f.Q.value = 4;
        o.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.45, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
        f.connect(g); g.connect(out); o.start(); o.stop(t + 0.8);
        break;
      }
      case 'brazier': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(1.2);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass';
        f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(2400, t + 0.5);
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.8, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 1.2);
        break;
      }
      case 'click': { this.blip(out, 2000, 0.03, vol * 0.3, 'square'); break; }
      case 'flash': { this.blip(out, 2600, 0.025, vol * 0.35, 'square'); break; }
      case 'scare': {
        for (let i = 0; i < 5; i++) {
          const o = ctx.createOscillator(); o.type = 'sawtooth';
          const base = 620 + i * 47;
          o.frequency.setValueAtTime(base, t);
          o.frequency.linearRampToValueAtTime(base * 1.9, t + 0.5);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, t);
          g.gain.linearRampToValueAtTime(vol * 0.16, t + 0.03);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
          o.connect(g); g.connect(out); o.start(); o.stop(t + 0.6);
        }
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.6);
        const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 900;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.6);
        break;
      }
      case 'scream': {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.setValueAtTime(780, t);
        o.frequency.exponentialRampToValueAtTime(160, t + 0.9);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 2;
        o.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.55, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.95);
        f.connect(g); g.connect(out); o.start(); o.stop(t + 1);
        break;
      }
      case 'whisper': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(1.4);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1150; f.Q.value = 6;
        const lfo = ctx.createOscillator(); lfo.frequency.value = 6.5;
        const lg = ctx.createGain(); lg.gain.value = 420;
        lfo.connect(lg); lg.connect(f.frequency);
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(vol * 0.28, t + 0.4);
        g.gain.linearRampToValueAtTime(0.0001, t + 1.3);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 1.4); lfo.start(); lfo.stop(t + 1.4);
        break;
      }
      case 'bang': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.8);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass';
        f.frequency.setValueAtTime(5200, t); f.frequency.exponentialRampToValueAtTime(120, t + 0.5);
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.8);
        const o = ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.5);
        const g2 = ctx.createGain(); g2.gain.setValueAtTime(vol * 0.9, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
        o.connect(g2); g2.connect(out); o.start(); o.stop(t + 0.65);
        break;
      }
      case 'heal': { this.tone(out, 420, 0.15, vol * 0.3, 'sine'); setTimeout(() => this.tone(out, 560, 0.2, vol * 0.3, 'sine'), 140); break; }
      case 'craft': { this.blip(out, 500, 0.07, vol * 0.5, 'square'); setTimeout(() => this.blip(out, 760, 0.07, vol * 0.5, 'square'), 120); setTimeout(() => this.blip(out, 1000, 0.1, vol * 0.5, 'square'), 240); break; }
      case 'win': {
        const notes = [392, 494, 587, 784];
        notes.forEach((n, i) => setTimeout(() => this.tone(out, n, 0.5, vol * 0.25, 'sine'), i * 220));
        break;
      }
      case 'lose': {
        const notes = [392, 330, 262, 175];
        notes.forEach((n, i) => setTimeout(() => this.tone(out, n, 0.6, vol * 0.3, 'sine'), i * 300));
        break;
      }
      case 'bell': {
        const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 660;
        const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 663;
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.4, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
        o.connect(g); o2.connect(g); g.connect(out); o.start(); o2.start(); o.stop(t + 2.5); o2.stop(t + 2.5);
        break;
      }
    }
  }

  private blip(out: AudioNode, freq: number, dur: number, vol: number, type: OscillatorType) {
    const ctx = this.ctx!; const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out); o.start(); o.stop(t + dur + 0.01);
  }
  private tone(out: AudioNode, freq: number, dur: number, vol: number, type: OscillatorType) {
    this.blip(out, freq, dur, vol, type);
  }

  setGrowl(gain: number, pitch = 58) {
    if (!this.growlGain || !this.growlOsc || !this.ctx) return;
    this.growlGain.gain.setTargetAtTime(gain, this.ctx.currentTime, 0.15);
    this.growlOsc.frequency.setTargetAtTime(pitch, this.ctx.currentTime, 0.2);
  }
}

/* keyboard normalization: fall back to e.key when e.code is empty (some webviews) */
const KEY_MAP: Record<string, string> = {
  w: 'KeyW', a: 'KeyA', s: 'KeyS', d: 'KeyD', e: 'KeyE', r: 'KeyR', f: 'KeyF', q: 'KeyQ',
  h: 'KeyH', v: 'KeyV', c: 'KeyC', i: 'KeyI', escape: 'Escape', shift: 'ShiftLeft',
  control: 'ControlLeft', '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', ' ': 'Space',
  arrowup: 'ArrowUp', arrowdown: 'ArrowDown', arrowleft: 'ArrowLeft', arrowright: 'ArrowRight',
};
function normalizeKey(e: KeyboardEvent): string {
  if (e.code) return e.code;
  const k = e.key.toLowerCase();
  return KEY_MAP[k] || 'Key_' + k.toUpperCase();
}

/* ---------------- input ---------------- */
export class Input {
  keys: Record<string, boolean> = {};
  buttons: Record<string, boolean> = {}; // unified action buttons (touch + kb)
  look = { x: 0, y: 0 }; // consumed each frame
  touchMove = { x: 0, y: 0 };
  pointerLocked = false;
  private el: HTMLElement | null = null;
  onKeyExtra: ((code: string) => void) | null = null;

  attach(el: HTMLElement) {
    this.el = el;
    window.addEventListener('keydown', this.kd);
    window.addEventListener('keyup', this.ku);
    el.addEventListener('mousedown', this.md);
    window.addEventListener('mouseup', this.mu);
    window.addEventListener('mousemove', this.mm);
    document.addEventListener('pointerlockchange', this.plc);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  detach() {
    window.removeEventListener('keydown', this.kd);
    window.removeEventListener('keyup', this.ku);
    window.removeEventListener('mouseup', this.mu);
    window.removeEventListener('mousemove', this.mm);
    document.removeEventListener('pointerlockchange', this.plc);
  }
  private kd = (e: KeyboardEvent) => {
    if (e.repeat) { return; }
    const code = normalizeKey(e);
    this.keys[code] = true;
    if (this.onKeyExtra) this.onKeyExtra(code);
    if (['Space', 'Tab'].includes(code)) e.preventDefault();
  };
  private ku = (e: KeyboardEvent) => { this.keys[normalizeKey(e)] = false; };
  private md = (e: MouseEvent) => {
    if (!this.pointerLocked && this.el) { void this.el.requestPointerLock?.(); }
    if (e.button === 0) this.buttons['attack'] = true;
    if (e.button === 2) this.buttons['aim'] = true;
  };
  private mu = (e: MouseEvent) => {
    if (e.button === 0) this.buttons['attack'] = false;
    if (e.button === 2) this.buttons['aim'] = false;
  };
  private mm = (e: MouseEvent) => {
    if (!this.pointerLocked) return;
    this.look.x += e.movementX * 0.0022;
    this.look.y += e.movementY * 0.0022;
  };
  private plc = () => { this.pointerLocked = document.pointerLockElement === this.el; };

  requestLock() { if (this.el && !this.pointerLocked) void this.el.requestPointerLock?.(); }
  exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  // touch hooks (called from ui.ts)
  touchLook(dx: number, dy: number) { this.look.x += dx * 0.0045; this.look.y += dy * 0.0045; }
  touchMoveVec(x: number, y: number) { this.touchMove.x = x; this.touchMove.y = y; }
  setButton(name: string, down: boolean) { this.buttons[name] = down; if (down && this.onKeyExtra) this.onKeyExtra('T_' + name); }

  consumeLook(): { x: number, y: number } {
    const r = { x: this.look.x, y: this.look.y };
    this.look.x = 0; this.look.y = 0;
    return r;
  }
  moveVector(): { x: number, y: number } {
    let x = 0, y = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) y -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) y += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    if (Math.hypot(this.touchMove.x, this.touchMove.y) > 0.12) { x = this.touchMove.x; y = this.touchMove.y; }
    return { x, y };
  }
  down(code: string) { return !!this.keys[code] || !!this.buttons[code]; }
}
