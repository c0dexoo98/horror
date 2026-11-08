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

/* ---------------- global environment state (weather etc.) ---------------- */
export const EnvState = {
  rain: 0,   // 0..1 — muffles sound, wets the world
  storm: 0,  // 0..1 — lightning strikes, heavier rain
  night: 1,  // always night in Hollow Vale
};

/* ---------------- singleplayer save ---------------- */
export interface SPProgress {
  chapter: number;
  inventory: Record<string, number>;
  weapons: string[];
  notes: string[];
  flags: Record<string, unknown>;
  playTime: number;
  stats?: Record<string, number>;
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
type TexName = 'dirt' | 'grass' | 'plank' | 'plankdark' | 'stone' | 'roof' | 'bark' | 'cloth' | 'metal' | 'paper' | 'ground' | 'curtain' | 'brick' | 'shingle' | 'hay' | 'water' | 'iron' | 'corn' | 'wallpaper' | 'dress' | 'coat' | 'ritual';
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
    case 'brick': {
      c = noiseCanvas(S, '#3d2c26', ['#332420', '#48352c'], 16, 144);
      g2.strokeStyle = 'rgba(16,12,10,0.9)';
      for (let y = 0; y < S; y += 26) {
        g2.lineWidth = 2.5; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke();
        const off = (y / 26) % 2 === 0 ? 0 : 26;
        for (let x = off; x < S; x += 52) { g2.beginPath(); g2.moveTo(x, y); g2.lineTo(x, Math.min(S, y + 26)); g2.stroke(); }
      }
      break;
    }
    case 'shingle': {
      c = noiseCanvas(S, '#26222b', ['#1d1a22', '#302a35'], 14, 155);
      g2.strokeStyle = 'rgba(10,8,12,0.95)';
      for (let y = 0; y < S; y += 18) {
        g2.lineWidth = 2; g2.beginPath(); g2.moveTo(0, y); g2.lineTo(S, y); g2.stroke();
        const off = ((y / 18) % 2) * 14;
        for (let x = off; x < S; x += 28) { g2.beginPath(); g2.arc(x + 14, y, 14, Math.PI, 0); g2.stroke(); }
      }
      break;
    }
    case 'hay':
      c = noiseCanvas(S, '#6b5a2a', ['#57491f', '#7d6b34', '#4a3d18'], 34, 166);
      break;
    case 'water':
      c = noiseCanvas(S, '#101c20', ['#0c161a', '#14242a', '#0a1216'], 10, 177);
      break;
    case 'iron': {
      c = noiseCanvas(S, '#26282c', ['#1c1e22', '#303338'], 14, 188);
      g2.strokeStyle = 'rgba(70,60,40,0.35)';
      for (let i = 0; i < 22; i++) {
        const x = Math.random() * S, y = Math.random() * S, r = 2 + Math.random() * 7;
        g2.beginPath(); g2.arc(x, y, r, 0, Math.PI * 2); g2.stroke();
      }
      break;
    }
    case 'corn': {
      c = noiseCanvas(S, '#1a2410', ['#131c0b', '#223016'], 26, 199);
      g2.strokeStyle = 'rgba(50,72,28,0.8)';
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * S;
        g2.lineWidth = 1.5;
        g2.beginPath(); g2.moveTo(x, S); g2.quadraticCurveTo(x + 8, S / 2, x + 2, 0); g2.stroke();
      }
      break;
    }
    case 'wallpaper': {
      c = noiseCanvas(S, '#3a3226', ['#312a20', '#443a2c'], 18, 211);
      g2.strokeStyle = 'rgba(90,74,50,0.4)';
      for (let y = 8; y < S; y += 32) for (let x = 8; x < S; x += 32) {
        g2.beginPath(); g2.arc(x, y, 5, 0, Math.PI * 2); g2.stroke();
      }
      break;
    }
    case 'dress':
      c = noiseCanvas(S, '#6a6560', ['#57534e', '#7a756e', '#48443f'], 22, 222);
      break;
    case 'coat':
      c = noiseCanvas(S, '#2c3038', ['#232730', '#363c46'], 18, 233);
      break;
    case 'ritual': {
      c = noiseCanvas(S, '#20261e', ['#181d16', '#2a3226'], 20, 244);
      g2.strokeStyle = 'rgba(120,140,90,0.5)';
      for (let i = 0; i < 5; i++) { g2.beginPath(); g2.arc(S / 2, S / 2, 30 + i * 22, 0, Math.PI * 2); g2.stroke(); }
      break;
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  texCache.set(name, t);
  return t;
}

/* soft radial sprite used by fog planes, glow, smoke, lightning dust */
export function getSpriteTexture(kind: 'puff' | 'flame' | 'glow' | 'blood' | 'hole' | 'rain'): THREE.Texture {
  const key = 'sprite_' + kind;
  const cached = texCache.get(key);
  if (cached) return cached;
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d')!;
  if (kind === 'puff' || kind === 'glow' || kind === 'flame') {
    const grad = g.createRadialGradient(S / 2, S / 2, 2, S / 2, S / 2, S / 2);
    if (kind === 'puff') { grad.addColorStop(0, 'rgba(180,185,200,0.55)'); grad.addColorStop(0.5, 'rgba(150,155,175,0.22)'); grad.addColorStop(1, 'rgba(140,145,165,0)'); }
    else if (kind === 'glow') { grad.addColorStop(0, 'rgba(255,214,150,0.9)'); grad.addColorStop(0.4, 'rgba(255,170,80,0.35)'); grad.addColorStop(1, 'rgba(255,150,50,0)'); }
    else { grad.addColorStop(0, 'rgba(255,235,190,0.95)'); grad.addColorStop(0.35, 'rgba(255,160,60,0.8)'); grad.addColorStop(0.7, 'rgba(200,70,20,0.35)'); grad.addColorStop(1, 'rgba(120,30,10,0)'); }
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
  } else if (kind === 'blood') {
    const rnd2 = mulberry32(31);
    g.fillStyle = 'rgba(90,8,8,0.9)';
    g.beginPath(); g.arc(S / 2, S / 2, S * 0.22, 0, Math.PI * 2); g.fill();
    for (let i = 0; i < 26; i++) {
      const a = rnd2() * Math.PI * 2, d = S * (0.16 + rnd2() * 0.3);
      g.beginPath(); g.arc(S / 2 + Math.cos(a) * d, S / 2 + Math.sin(a) * d, 1.5 + rnd2() * 5, 0, Math.PI * 2);
      g.fillStyle = `rgba(${70 + rnd2() * 40},6,6,${0.5 + rnd2() * 0.45})`; g.fill();
    }
  } else if (kind === 'hole') {
    const grad = g.createRadialGradient(S / 2, S / 2, 1, S / 2, S / 2, S / 2);
    grad.addColorStop(0, 'rgba(8,8,8,0.95)'); grad.addColorStop(0.35, 'rgba(20,18,16,0.8)'); grad.addColorStop(0.6, 'rgba(40,36,30,0.35)'); grad.addColorStop(1, 'rgba(40,36,30,0)');
    g.fillStyle = grad; g.fillRect(0, 0, S, S);
  } else {
    // rain streak
    const grad = g.createLinearGradient(0, 0, 0, S);
    grad.addColorStop(0, 'rgba(160,180,210,0)'); grad.addColorStop(0.5, 'rgba(170,190,220,0.5)'); grad.addColorStop(1, 'rgba(160,180,210,0)');
    g.fillStyle = grad; g.fillRect(S / 2 - 1, 0, 2, S);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, t);
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
  private rainGain: GainNode | null = null;
  private chaseGain: GainNode | null = null;
  private chaseOsc: OscillatorNode | null = null;

  /** 0..1 — intense chase music layer (pounding strings + pulse) */
  setChase(x: number) {
    if (!this.chaseGain || !this.ctx) return;
    this.chaseGain.gain.setTargetAtTime(clamp(x, 0, 1) * 0.16, this.ctx.currentTime, 0.35);
    if (this.chaseOsc) this.chaseOsc.frequency.setTargetAtTime(98 + x * 40, this.ctx.currentTime, 0.5);
  }

  /** 0..1 — rain ambience loop */
  setRain(x: number) {
    if (!this.rainGain || !this.ctx) return;
    this.rainGain.gain.setTargetAtTime(clamp(x, 0, 1) * 0.16, this.ctx.currentTime, 1.2);
  }

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
    // rain loop
    const rainSrc = ctx.createBufferSource(); rainSrc.buffer = this.noiseBuffer(3); rainSrc.loop = true;
    const rainHp = ctx.createBiquadFilter(); rainHp.type = 'highpass'; rainHp.frequency.value = 1400;
    const rainLp2 = ctx.createBiquadFilter(); rainLp2.type = 'lowpass'; rainLp2.frequency.value = 6500;
    this.rainGain = ctx.createGain(); this.rainGain.gain.value = 0;
    rainSrc.connect(rainHp); rainHp.connect(rainLp2); rainLp2.connect(this.rainGain); this.rainGain.connect(this.master!);
    rainSrc.start();
    // chase layer: two detuned saws + pounding pulse
    this.chaseGain = ctx.createGain(); this.chaseGain.gain.value = 0;
    this.chaseOsc = ctx.createOscillator(); this.chaseOsc.type = 'sawtooth'; this.chaseOsc.frequency.value = 98;
    const chOsc2 = ctx.createOscillator(); chOsc2.type = 'sawtooth'; chOsc2.frequency.value = 98.9;
    const chLp = ctx.createBiquadFilter(); chLp.type = 'lowpass'; chLp.frequency.value = 700;
    const chTrem = ctx.createOscillator(); chTrem.type = 'sine'; chTrem.frequency.value = 7.4;
    const chTremG = ctx.createGain(); chTremG.gain.value = 0.5;
    const chTremOff = ctx.createGain(); chTremOff.gain.value = 0.5;
    chTrem.connect(chTremG);
    this.chaseOsc.connect(chLp); chOsc2.connect(chLp);
    chLp.connect(chTremOff); chTremG.connect(chTremOff.gain); chTremOff.connect(this.chaseGain); this.chaseGain.connect(this.master!);
    this.chaseOsc.start(); chOsc2.start(); chTrem.start();
    // chase pulse (kick)
    const pulseOsc = ctx.createOscillator(); pulseOsc.type = 'sine'; pulseOsc.frequency.value = 55;
    const pulseG = ctx.createGain(); pulseG.gain.value = 0;
    const pulseLfo = ctx.createOscillator(); pulseLfo.type = 'square'; pulseLfo.frequency.value = 2.2;
    const pulseLfoG = ctx.createGain(); pulseLfoG.gain.value = 0.06;
    pulseLfo.connect(pulseLfoG); pulseLfoG.connect(pulseG.gain);
    pulseOsc.connect(pulseG); pulseG.connect(this.chaseGain);
    pulseOsc.start(); pulseLfo.start();
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
      case 'thunder': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(2.6);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass';
        f.frequency.setValueAtTime(1400, t); f.frequency.exponentialRampToValueAtTime(60, t + 2.2);
        s.connect(f);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol * 0.9, t + 0.08);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 2.6);
        const o = ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(44, t); o.frequency.exponentialRampToValueAtTime(24, t + 1.8);
        const g2 = ctx.createGain(); g2.gain.setValueAtTime(vol * 0.5, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 1.9);
        o.connect(g2); g2.connect(out); o.start(); o.stop(t + 2);
        break;
      }
      case 'crow': {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            const o = ctx.createOscillator(); o.type = 'sawtooth';
            o.frequency.setValueAtTime(720 + Math.random() * 120, ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.14);
            const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 1.6;
            o.connect(f);
            const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);
            f.connect(g); g.connect(out); o.start(); o.stop(ctx.currentTime + 0.18);
          }, i * 170);
        }
        break;
      }
      case 'crank': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.3);
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 500 + Math.random() * 300; f.Q.value = 3;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.3, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.3);
        break;
      }
      case 'shutter': { this.blip(out, 1800, 0.03, vol * 0.5, 'square'); setTimeout(() => this.blip(out, 900, 0.04, vol * 0.4, 'square'), 60); break; }
      case 'static': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.5);
        const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1200;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.5);
        break;
      }
      case 'unjam': { this.blip(out, 420, 0.07, vol * 0.5, 'square'); setTimeout(() => this.blip(out, 300, 0.09, vol * 0.5, 'square'), 120); break; }
      case 'stab': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.3);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.85, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.32);
        this.blip(out, 90, 0.2, vol * 0.4, 'sine');
        break;
      }
      case 'glass': {
        for (let i = 0; i < 6; i++) {
          setTimeout(() => this.blip(out, 2200 + Math.random() * 2600, 0.05, vol * 0.2, 'triangle'), i * 40);
        }
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(0.3);
        const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2600;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.4, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 0.3);
        break;
      }
      case 'chime': {
        const notes = [523, 659, 784];
        notes.forEach((n, i) => setTimeout(() => this.tone(out, n, 0.4, vol * 0.2, 'sine'), i * 120));
        break;
      }
      case 'sizzle': {
        const s = ctx.createBufferSource(); s.buffer = this.noiseBuffer(1.0);
        const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 3000;
        s.connect(f);
        const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.3, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
        f.connect(g); g.connect(out); s.start(); s.stop(t + 1);
        break;
      }
      case 'moan': {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.setValueAtTime(210, t);
        o.frequency.linearRampToValueAtTime(150, t + 1.1);
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 2;
        o.connect(f);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol * 0.4, t + 0.25);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
        f.connect(g); g.connect(out); o.start(); o.stop(t + 1.3);
        break;
      }
      case 'coo': {
        const seq = [0, 180, 360];
        seq.forEach((d, i) => setTimeout(() => {
          const o = ctx.createOscillator(); o.type = 'sine';
          o.frequency.setValueAtTime(330 + i * 20, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + 0.15);
          const g = ctx.createGain(); g.gain.setValueAtTime(vol * 0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
          o.connect(g); g.connect(out); o.start(); o.stop(ctx.currentTime + 0.2);
        }, d));
        break;
      }
      case 'ritual': {
        const notes = [196, 233, 175, 147];
        notes.forEach((n, i) => setTimeout(() => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = n;
          const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = n * 1.005;
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, ctx.currentTime); g.gain.linearRampToValueAtTime(vol * 0.22, ctx.currentTime + 0.4);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);
          o.connect(g); o2.connect(g); g.connect(out); o.start(); o2.start(); o.stop(ctx.currentTime + 1.7); o2.stop(ctx.currentTime + 1.7);
        }, i * 500));
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
  control: 'ControlLeft', '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', '4': 'Digit4', '5': 'Digit5', ' ': 'Space',
  g: 'KeyG', m: 'KeyM', j: 'KeyJ', b: 'KeyB', n: 'KeyN', u: 'KeyU', t: 'KeyT', x: 'KeyX',
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

/* ---------------- touch control layout (draggable / resizable, persisted) ---------------- */
export interface TouchBtnLayout { x: number; y: number; scale: number }
export type TouchLayout = Record<string, TouchBtnLayout>;
const LAYOUT_KEY = 'hv_touch_layout_v1';
export function loadTouchLayout(): TouchLayout | null {
  try {
    const raw = localStorage.getItem(LAYOUT_KEY);
    if (raw) return JSON.parse(raw) as TouchLayout;
  } catch { /* ignore */ }
  return null;
}
export function saveTouchLayout(l: TouchLayout) {
  try { localStorage.setItem(LAYOUT_KEY, JSON.stringify(l)); } catch { /* ignore */ }
}
export function clearTouchLayout() { try { localStorage.removeItem(LAYOUT_KEY); } catch { /* ignore */ } }

/* ---------------- vector icon set (inline SVG) for touch buttons & UI ---------------- */
const RAW_ICONS: Record<string, string> = {
  run: '<circle cx="15.5" cy="4.5" r="2" fill="currentColor" stroke="none"/><path d="M4 21.5l4.5-7-2-3.5 4-4.5 3.5 3 4.5 1.2"/><path d="M10.5 10.5L7 14l-3.5-.8"/><path d="M12.5 9.5l-1.5 6 3.5 2.5 1 4"/>',
  crouch: '<circle cx="12" cy="5" r="2" fill="currentColor" stroke="none"/><path d="M12 7.5v4l-3.5 2.5 1 6"/><path d="M12 11.5l3.5 2.5-1 6"/><path d="M5 21.5h14"/>',
  attack: '<path d="M4 20L17 4l3 3L8 21l-5 1z"/><path d="M14 7l3 3"/>',
  interact: '<path d="M8 12V5.5a1.5 1.5 0 013 0V11"/><path d="M11 11V4.5a1.5 1.5 0 013 0V11"/><path d="M14 11V6a1.5 1.5 0 013 0v6.5"/><path d="M17 12.5l2.2-1.8c.9-.7 2 .4 1.4 1.4L17 19c-1 1.6-2.6 2.5-4.5 2.5H10c-2 0-3.4-.8-4.5-2.5L3.6 15c-.6-1 .5-2.1 1.4-1.4L8 16"/>',
  reload: '<path d="M19.5 12a7.5 7.5 0 11-2.2-5.3"/><path d="M19.5 3.5v4h-4"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  flash: '<path d="M6 3h8l2 4v2l-2 2v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V11L6 9V7z"/><path d="M6 7h10"/><path d="M9 13h2"/>',
  cam: '<path d="M4 9a8 8 0 0114-3"/><path d="M18 2.5V6h-3.5"/><path d="M20 15a8 8 0 01-14 3"/><path d="M6 21.5V18h3.5"/>',
  grenade: '<circle cx="10.5" cy="14.5" r="6"/><path d="M13 9l2-3 3-1"/><path d="M18 5l1.5-1.5"/><path d="M8.5 12.5a3 3 0 013-2"/>',
  heal: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',
  pause: '<rect x="6.5" y="4.5" width="4" height="15" rx="1"/><rect x="13.5" y="4.5" width="4" height="15" rx="1"/>',
  throw: '<path d="M3 19c3-6 8-10 14-11"/><path d="M15 6l4 1 1 4-3 2-3-3z"/><circle cx="6" cy="19" r="1.5" fill="currentColor" stroke="none"/>',
  map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
  quest: '<path d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/><path d="M14.5 17.5l1.5 1.5 3-3"/>',
  dynamo: '<circle cx="12" cy="13" r="7"/><path d="M12 6V3"/><path d="M9 3h6"/><path d="M12 13l3-2.5"/>',
  radio: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M6 8l9-5"/><circle cx="8" cy="14" r="2.4"/><path d="M14 12h4M14 15h4"/>',
  breath: '<path d="M3 8h7a2.5 2.5 0 100 5H5"/><path d="M3 17h9a3 3 0 110 6"/><path d="M16 6c2.5 0 2.5 4 0 4s-2.5 4 0 4 2.5 4 0 4"/>',
  edit: '<path d="M12 3l1.2 3 3.2-.8 1.4 2.8 3 1.2-1.2 3 2.4 2.3-2.4 2.3 1.2 3-3 1.2-1.4 2.8-3.2-.8L12 27" transform="scale(0.82) translate(2.6 -1)"/><circle cx="12" cy="12" r="3"/>',
  swap: '<path d="M6 8h10l-2.5-2.5M18 16H8l2.5 2.5"/><path d="M16 8a7 7 0 01-8 11"/><path d="M8 16a7 7 0 018-11"/>',
  torch: '<path d="M12 2c2.8 3 4.5 5.2 4.5 8a4.5 4.5 0 11-9 0c0-2.8 1.7-5 4.5-8z"/><path d="M12 21v-5"/><path d="M9 22h6"/>',
  axe: '<path d="M13 6l6 6"/><path d="M11 8l5-5c2 1 3.5 2.5 4.5 4.5L15 12z"/><path d="M12 9L4 20l1.5 1.5L15 12"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  battery: '<rect x="3" y="8" width="16" height="8" rx="2"/><path d="M21 10.5v3"/><path d="M7 10.5v3M10.5 10.5v3"/>',
  skull: '<path d="M12 3a7 7 0 00-7 7c0 2.6 1.4 4.4 3 5.4V19h8v-3.6c1.6-1 3-2.8 3-5.4a7 7 0 00-7-7z"/><circle cx="9.5" cy="11" r="1.4" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r="1.4" fill="currentColor" stroke="none"/><path d="M10 19v2M14 19v2"/>',
  drop: '<path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"/>',
  bone: '<path d="M7 10l7-7 3 3-7 7"/><path d="M7 10c-2 0-3.5 1.5-3.5 3.5S5 17 7 17s3.5-1.5 3.5-3.5"/><path d="M17 14c2 0 3.5 1.5 3.5 3.5S19 21 17 21s-3.5-1.5-3.5-3.5"/><path d="M10 13.5L13.5 17"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/>',
  film: '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="10" r="2.6"/><path d="M8 20c.8-2.4 2.2-3.6 4-3.6s3.2 1.2 4 3.6"/>',
};

export function iconSvg(name: string, size = 24): string {
  const body = RAW_ICONS[name] || RAW_ICONS.interact;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="display:block">${body}</svg>`;
}
export function hasIcon(name: string): boolean { return !!RAW_ICONS[name]; }
