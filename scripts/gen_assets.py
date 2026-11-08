#!/usr/bin/env python3
"""HOLLOW VALE v4 — full asset generator (pure synthesis, zero external assets).
Outputs into hollowvale-native/app/src/main/:
  res/raw/*.wav     ~40 SFX (mono 22050)
  res/raw/*.ogg     6 music/ambience loops (ffmpeg vorbis)
  res/drawable-nodpi/atlas.png   1024x1024 wall atlas (4x4 tiles of 256)
  res/drawable-nodpi/sprites.png 512x512 sprite atlas (8x8 tiles of 64)
  assets/fonts/*.ttf             Vazirmatn (fa) + Cinzel (title)
  res/mipmap-*/ic_launcher.png   adaptive icon layers
"""
import math, os, random, subprocess, tempfile, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SR = 22050
APP = "/home/z/my-project/hollowvale-native/app/src/main"
RAW = os.path.join(APP, "res", "raw")
NODPI = os.path.join(APP, "res", "drawable-nodpi")
FONTS = os.path.join(APP, "assets", "fonts")
for d in (RAW, NODPI, FONTS):
    os.makedirs(d, exist_ok=True)
for d in ["mipmap-mdpi", "mipmap-hdpi", "mipmap-xhdpi", "mipmap-xxhdpi", "mipmap-xxxhdpi"]:
    os.makedirs(os.path.join(APP, "res", d), exist_ok=True)

rng_global = np.random.RandomState(20261)

# ------------------------------------------------------------------ DSP kit
def t_ax(dur): return np.arange(int(SR * dur)) / SR
def noise(n, seed=0): return np.random.RandomState(seed).uniform(-1, 1, n)
def sine(f, t, ph=0.0): return np.sin(2 * np.pi * f * t + ph)
def saw(f, t): return 2 * ((f * t) % 1.0) - 1.0
def tri(f, t): return 2 * np.abs(2 * ((f * t) % 1.0) - 1.0) - 1.0
def sq(f, t, duty=0.5): return np.where((f * t) % 1.0 < duty, 1.0, -1.0)

def _filt_kernel(cutoff, sr):
    a = math.exp(-2 * math.pi * cutoff / sr)
    L = max(8, int(sr * 0.4))
    k = a ** np.arange(L); k /= k.sum(); return k

def lowpass(x, cutoff, sr=SR):
    if cutoff >= sr * 0.45: return x.copy()
    k = _filt_kernel(cutoff, sr); n = len(x)
    nfft = 1 << int(np.ceil(np.log2(n + len(k))))
    y = np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(k, nfft), nfft)
    s = (len(k) - 1) // 2
    return y[s:s + n]

def highpass(x, cutoff, sr=SR): return x - lowpass(x, cutoff, sr)

def bandpass(x, lo, hi, sr=SR):
    y = highpass(lowpass(x, hi, sr), lo, sr)
    m = np.max(np.abs(y)) + 1e-9
    return y * (np.max(np.abs(x)) + 1e-9) / m * 0.9 if m > 0 else y

def env_exp(n, k, attack=0.002, sr=SR):
    e = np.exp(-np.arange(n) / sr * k)
    a = int(attack * sr)
    if a > 0: e[:a] *= np.linspace(0, 1, a)
    return e

def env_ad(n, a_frac, d_curve=3.0):
    e = np.ones(n); a = max(1, int(n * a_frac))
    e[:a] = np.linspace(0, 1, a)
    e[a:] = np.exp(-d_curve * np.linspace(0, 1, n - a))
    return e

def shift(x, d):
    if d <= 0: return x.copy()
    out = np.zeros(len(x));
    if d < len(x): out[d:] = x[:len(x) - d]
    return out

def reverb(x, wet=0.3):
    y = x.copy()
    for d, g in ((0.017, .6), (0.029, .6), (0.043, .55), (0.061, .5), (0.107, .4), (0.149, .35), (0.211, .3)):
        y = y + wet * g * shift(x, int(d * SR))
    return y * (1 - 0.3 * wet)

def norm(x, gain=0.88):
    return x * (gain / (np.max(np.abs(x)) + 1e-9))

def clip(x, drive=1.6): return np.tanh(x * drive)

def fades(x, fin=0.004, fout=0.01):
    x = x.copy(); n = len(x)
    a, b = int(fin * SR), int(fout * SR)
    if a > 0: x[:a] *= np.linspace(0, 1, a)
    if b > 0: x[-b:] *= np.linspace(1, 0, b)
    return x

def loopify(x, fade=0.4):
    n = int(fade * SR); body = x[:-n].copy(); tail = x[-n:]
    w = np.linspace(0, 1, n)
    body[:n] = body[:n] * w + tail * (1 - w)
    return body

def write_wav(path, x, gain=0.88):
    x = norm(np.asarray(x, float), gain)
    xi = np.clip(x * 32767, -32768, 32767).astype(np.int16)
    with wave.open(path, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes(xi.tobytes())

def write_ogg(path, x, gain=0.9, quality="4"):
    x = norm(np.asarray(x, float), gain)
    xi = np.clip(x * 32767, -32768, 32767).astype(np.int16)
    tmp = tempfile.mktemp(suffix=".wav")
    with wave.open(tmp, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes(xi.tobytes())
    subprocess.run(["ffmpeg", "-y", "-nostdin", "-loglevel", "error", "-i", tmp,
                    "-c:a", "libvorbis", "-q:a", quality, path], check=True)
    os.remove(tmp)

def mix(*xs):
    n = max(len(x) for x in xs)
    out = np.zeros(n)
    for x in xs:
        x = np.asarray(x, float)
        out[:len(x)] += x
    return out

def plink(f, dur=0.8, bright=2200):
    t = t_ax(dur)
    x = tri(f, t) + 0.4 * sine(f * 2, t) + 0.15 * sine(f * 3.01, t)
    return lowpass(x * env_exp(len(t), 5), bright)

# ------------------------------------------------------------------ SFX
S = {}

S["ui_move"] = fades(lowpass(plink(1400, 0.09, 4000), 3500) * 0.5)
S["ui_select"] = fades(mix(plink(520, 0.28), 0.5 * plink(780, 0.22), clip(sine(70, t_ax(0.22)) * env_exp(int(SR*.22), 18), 2)))
S["ui_back"] = fades(plink(340, 0.16, 1200) * 0.8)
S["save_chime"] = fades(reverb(mix(plink(660, .7), 0.6 * plink(990, .6), 0.4 * plink(1320, .5)), .5) * .8)
S["achievement"] = fades(reverb(mix(plink(523, .5), .7*plink(659, .5), .5*plink(784, .6), .8*plink(1046, .9)), .55))
S["start_game"] = fades(mix(clip(sine(38, t_ax(2.2)) * env_exp(int(SR*2.2), 2.2) + 0.4*noise(int(SR*2.2), 7)*lowpass(env_exp(int(SR*2.2), 2.2), 300), 1.8), 0.3*lowpass(noise(int(SR*2.2), 3)*np.linspace(0,1,int(SR*2.2))**2, 500)))
S["game_over"] = fades(reverb(mix(plink(311, 1.6, 900), .6*plink(233, 2.0, 700), .5*plink(155, 2.6, 500)), .6))

S["pickup"] = fades(mix(lowpass(noise(int(SR*.18), 11) * env_exp(int(SR*.18), 28), 2500), .5*plink(1200, .12)))
S["drop"] = fades(mix(lowpass(noise(int(SR*.16), 12) * env_exp(int(SR*.16), 30), 900), sine(90, t_ax(.16)) * env_exp(int(SR*.16), 30)))
S["note_open"] = fades(bandpass(noise(int(SR*.35), 13), 900, 5000) * env_ad(int(SR*.35), .1, 5))
S["note_close"] = fades(bandpass(noise(int(SR*.22), 14), 600, 3800) * env_ad(int(SR*.22), .08, 8))
S["write"] = fades(bandpass(noise(int(SR*.5), 15), 2000, 7000) * (0.3 + 0.7*np.abs(sine(9, t_ax(.5)))) * env_ad(int(SR*.5), .05, 2))
S["unlock"] = fades(np.concatenate([plink(900, .1), np.zeros(int(SR*.12)), plink(1500, .08), np.zeros(int(SR*.06)), lowpass(noise(int(SR*.3), 16)*env_exp(int(SR*.3), 14), 1500)]))
S["door_open"] = t = None
def _creak(dur=1.1, f0=210, f1=340, seed=21):
    t = t_ax(dur); f = np.linspace(f0, f1, len(t)) * (1 + 0.02 * sine(8.5, t))
    ph = 2*np.pi*np.cumsum(f)/SR
    x = np.sin(ph) * (0.5 + 0.5*sine(3.2, t)) + 0.25 * bandpass(noise(len(t), seed), 400, 1800)
    return clip(x * env_ad(len(t), .15, 2.5), 1.4)
S["door_open"] = fades(reverb(_creak(), .35))
S["door_close"] = fades(clip(mix(sine(65, t_ax(.4))*env_exp(int(SR*.4), 14), lowpass(noise(int(SR*.4), 17)*env_exp(int(SR*.4), 20), 700)), 2))
S["door_locked"] = x = np.concatenate([lowpass(noise(int(SR*.1), 18)*env_exp(int(SR*.1), 30), 1200)]*3)
S["door_locked"] = fades(np.concatenate([x, np.zeros(int(SR*.05)), plink(700, .1)]))
S["door_break"] = fades(clip(lowpass(noise(int(SR*.7), 19), 1400)*env_ad(int(SR*.7), .02, 6) + sine(55, t_ax(.7))*env_exp(int(SR*.7), 8) + bandpass(noise(int(SR*.7), 20), 800, 3000)*env_ad(int(SR*.7), .01, 9), 2.2))
S["gate_open"] = t = t_ax(1.6); f = 90*(1+.15*sine(1.3, t)); ph = 2*np.pi*np.cumsum(f)/SR
S["gate_open"] = fades(reverb(clip(np.sin(ph)*(1+.5*sine(6.7, t)) + .3*lowpass(noise(len(t), 22), 500), 1.5)*env_ad(len(t), .1, 1.6), .5))
S["crate_break"] = fades(clip(mix(bandpass(noise(int(SR*.45), 23), 500, 2600)*env_ad(int(SR*.45), .01, 7), sine(80, t_ax(.45))*env_exp(int(SR*.45), 12)), 2))
S["candle_light"] = fades(mix(bandpass(noise(int(SR*.6), 24), 300, 900)*env_ad(int(SR*.6), .2, 3), .3*lowpass(noise(int(SR*.6), 25)*env_ad(int(SR*.6), .1, 2), 300)))
S["flashlight_click"] = fades(plink(2600, 0.05, 6000) * 0.7)
S["battery_insert"] = fades(mix(plink(800, .07), .4*plink(1600, .06), .3*sine(45, t_ax(.2))*env_exp(int(SR*.2), 22)))
S["heal_bandage"] = fades(bandpass(noise(int(SR*.9), 26), 400, 1600)*(0.4+0.6*np.abs(sine(2.3, t_ax(.9))))*env_ad(int(SR*.9), .05, 1.4))
S["camera_shutter"] = fades(mix(plink(3200, .04, 8000), lowpass(noise(int(SR*.12), 27)*env_exp(int(SR*.12), 40), 4000), .3*plink(600, .1)))
S["secret"] = fades(reverb(mix(plink(440, .8), .5*plink(660, .9), .35*plink(880, 1.1), .25*plink(1108, 1.3)), .6))

S["axe_swing"] = fades(bandpass(noise(int(SR*.28), 28), 500, 2400)*env_ad(int(SR*.28), .25, 4))
S["axe_hit"] = fades(clip(mix(lowpass(noise(int(SR*.25), 29), 900)*env_exp(int(SR*.25), 20), sine(95, t_ax(.25))*env_exp(int(SR*.25), 26)), 2))
S["backstab"] = fades(clip(mix(bandpass(noise(int(SR*.4), 30), 300, 1200)*env_ad(int(SR*.4), .02, 5), sine(70, t_ax(.4))*env_exp(int(SR*.4), 12), .4*bandpass(noise(int(SR*.4), 31), 1500, 4000)*env_ad(int(SR*.4), .01, 8)), 2))
S["revolver_shot"] = t = t_ax(1.1)
S["revolver_shot"] = fades(mix(clip(mix(noise(len(t), 32)*env_exp(len(t), 9), sine(50, t)*env_exp(len(t), 5), .3*noise(len(t), 33)*env_exp(len(t), 40)), 3), .25*reverb(noise(len(t), 34)*env_exp(len(t), 16), .8)))
S["revolver_empty"] = fades(mix(plink(1800, .06, 5000), .5*plink(2400, .04, 6000)))
S["reload"] = fades(mix(plink(1100, .08), np.concatenate([np.zeros(int(SR*.15)), .6*plink(1400, .07)]), np.concatenate([np.zeros(int(SR*.32)), .8*plink(900, .09)])))
S["enemy_attack"] = fades(clip(saw(140, t_ax(.5))*(1+.4*sine(11, t_ax(.5))) + .5*bandpass(noise(int(SR*.5), 35), 700, 2500), 2.4)*env_ad(int(SR*.5), .1, 3))
S["hurt_player"] = fades(clip(mix(sine(110, t_ax(.4)), .6*bandpass(noise(int(SR*.4), 36), 200, 900)), 2)*env_ad(int(SR*.4), .01, 5))
S["struggle_hit"] = fades(clip(mix(lowpass(noise(int(SR*.2), 37), 700)*env_exp(int(SR*.2), 24), sine(75, t_ax(.2))*env_exp(int(SR*.2), 30)), 2))
S["enemy_die"] = t = t_ax(1.4); f = np.linspace(300, 60, len(t)); ph = 2*np.pi*np.cumsum(f)/SR
S["enemy_die"] = fades(reverb(clip(np.sin(ph) + .4*np.sin(2.02*ph), 2)*env_ad(len(t), .05, 2.2), .6))

S["enemy_growl"] = t = t_ax(2.6)
S["enemy_growl"] = loopify(mix(clip(lowpass(saw(58, t)*(1+.3*sine(2.2, t)) + .3*lowpass(saw(87, t), 400), 500), 2.2) * env_ad(len(t), .12, .8), .2*bandpass(noise(len(t), 38), 80, 300)))
S["chase_scream"] = t = t_ax(1.5); f = np.concatenate([np.linspace(300, 950, int(len(t)*.45)), np.linspace(950, 500, len(t)-int(len(t)*.45))])
ph = 2*np.pi*np.cumsum(f)/SR
S["chase_scream"] = fades(mix(clip(np.sin(ph) + .5*np.sin(1.98*ph) + .6*bandpass(noise(len(t), 39), 800, 3000), 2.5)*env_ad(len(t), .08, 1.8), .3*bandpass(noise(len(t), 40), 400, 1600)*env_ad(len(t), .05, 1.2)))
S["mother_hum"] = t = t_ax(6.0)
mel = [(440, .8), (392, .8), (349, .8), (392, .8), (330, 1.2), (0, .4), (349, .8), (330, 1.0)]
x = np.zeros(len(t)); pos = 0
for f, d in mel:
    n = int(d*SR)
    if f > 0 and pos+n < len(x):
        tt = t_ax(d)
        vib = 1 + 0.012*np.sin(2*np.pi*5.2*tt)
        seg = sine(f*vib[0]*1.0, tt)
        seg += .3*sine(f*2.01, tt)
        seg = lowpass(seg, 1500)
        x[pos:pos+n] += seg*env_ad(n, .25, 2.2)*.8
    pos += n
S["mother_hum"] = fades(reverb(clip(x*(1+.15*sine(.5, t)), 1.6) + .06*bandpass(noise(len(t), 41), 300, 900), .65))
S["whisper_loop"] = t = t_ax(9.0)
envl = .5 + .5*np.abs(np.sin(2*np.pi*3.4*t + 3*np.sin(2*np.pi*.7*t)))
x = bandpass(noise(len(t), 42), 1000, 4200) * envl
x = bandpass(x, 900, 3500) * (0.6 + 0.4*np.sin(2*np.pi*.9*t))
S["whisper_loop"] = loopify(x * 0.75)
S["heartbeat_loop"] = t2 = t_ax(0.9); th = sine(52, t2)*env_exp(len(t2), 16)
S["heartbeat_loop"] = loopify(np.concatenate([th, th*.7, np.zeros(int(SR*.35))]) * 0.95)
S["step_walk"] = fades(mix(lowpass(noise(int(SR*.09), 90)*env_exp(int(SR*.09), 55), 420), sine(68, t_ax(.09))*env_exp(int(SR*.09), 80))*0.8)
S["step_run"] = fades(mix(lowpass(noise(int(SR*.11), 91)*env_exp(int(SR*.11), 42), 700), sine(75, t_ax(.11))*env_exp(int(SR*.11), 60)))
S["step_crouch"] = fades(mix(lowpass(noise(int(SR*.07), 92)*env_exp(int(SR*.07), 70), 300), sine(55, t_ax(.07))*env_exp(int(SR*.07), 95))*0.5)
S["gun_hit"] = fades(mix(lowpass(noise(int(SR*.22), 93), 800)*env_exp(int(SR*.22), 18), sine(90, t_ax(.22))*env_exp(int(SR*.22), 24)))

S["thunder"] = t = t_ax(4.0)
S["thunder"] = fades(clip(mix(lowpass(noise(len(t), 43), 260)*env_ad(len(t), .005, 1.4), .5*lowpass(noise(len(t), 44), 80)*env_ad(len(t), .02, .9)), 2.5))
S["thunder_far"] = fades(lowpass(noise(int(SR*5), 45), 120)*env_ad(int(SR*5), .05, 1.1)*.7)
S["wind_hit"] = fades(bandpass(noise(int(SR*2.5), 46), 200, 900)*env_ad(int(SR*2.5), .4, 2)*.8)

for name, x in S.items():
    if x is None or len(x) == 0: continue
    write_wav(os.path.join(RAW, name + ".wav"), x)
print("SFX written:", len(S))

# ------------------------------------------------------------------ MUSIC / AMBIENCE (ogg)
def pad(freqs, dur, detune=0.4, lp=900, amp=.5, seed=0):
    t = t_ax(dur); x = np.zeros(len(t))
    for i, f in enumerate(freqs):
        for dt in (-detune, 0, detune):
            x += saw(f + dt*0.01*f, t) * (0.5 + 0.5*np.sin(2*np.pi*(0.05+0.03*i) * t + i))
    x = lowpass(x, lp)
    e = np.minimum(1, np.linspace(0, 8, len(t))) * np.minimum(1, np.linspace(8, 0, len(t)))
    return x * e * amp / (len(freqs)*3)

def wind(dur, seed=50, lo=150, hi=900):
    t = t_ax(dur)
    x = noise(len(t), seed)
    x = bandpass(x, lo, hi)
    lfo = .4 + .6*(0.5 + 0.5*np.sin(2*np.pi*0.07*t + 1.7*np.sin(2*np.pi*0.013*t)))
    return x * lfo

def boom(dur=3.0, f=36, seed=60):
    t = t_ax(dur)
    return clip(sine(f, t)*env_exp(len(t), 1.8) + .4*lowpass(noise(len(t), seed), 120)*env_exp(len(t), 3.2), 2)

def musicbox(notes, dur, seed=61):
    out = np.zeros(int(SR*dur)); r = np.random.RandomState(seed); pos = int(SR*1.0)
    while pos < len(out) - SR*2:
        f, d = r.choice(notes), r.uniform(1.2, 2.4)
        n = plink(f, min(d, 2.2), 3000)*r.uniform(.12, .2)
        seg = reverb(n, .5)
        end = min(pos+len(seg), len(out)); out[pos:end] += seg[:end-pos]
        pos += int(r.uniform(2.2, 4.5)*SR)
    return out

NOTE = lambda name: 440.0 * 2 ** (name / 12.0)

# menu — dark ambient piano 64s
dur = 64
prog = [[0, 3, 7], [-4, 0, 5], [-7, -3, 0], [-5, -1, 2]]
x = np.zeros(int(SR*dur))
for rep in range(2):
    for i, ch in enumerate(prog):
        seg = pad([NOTE(n) for n in ch], dur/8, lp=650, amp=.5)
        s0 = int(((rep*4 + i) * dur/8) * SR)
        x[s0:s0+len(seg)] += seg[:len(x)-s0]
x += musicbox([NOTE(n) for n in (12, 15, 19, 22, 24, 19, 15, 10)], dur, seed=71) * 0.9
x += mix(wind(dur, seed=72) * .25, boom(3, 30, 73) * .5)
write_ogg(os.path.join(RAW, "music_menu.ogg"), x, .8)

# game ambience 96s
dur = 96
x = np.zeros(int(SR*dur))
for i, f0 in enumerate((NOTE(-33), NOTE(-27), NOTE(-21))):
    x += lowpass(saw(f0*(1+.002*i), t_ax(dur)), 240) * .16
x += lowpass(sine(27.5, t_ax(dur)), 120)*.2
x += musicbox([NOTE(n) for n in (27, 30, 34, 27, 25)], dur, seed=74)*0.7
x += wind(dur, seed=75, lo=100, hi=600)*.3
for st in (12, 38, 60, 84):
    s0 = int(st*SR); b = boom(2.6, 32, 76+st)
    x[s0:s0+len(b)] += b*.35
wh = loopify(bandpass(noise(int(SR*8), 77), 1000, 4200)*(0.5+0.5*np.abs(np.sin(2*np.pi*3.1*t_ax(8.0)))))*.12
for st in (20, 55, 88):
    s0 = int(st*SR)
    x[s0:s0+len(wh)] += wh[:len(x)-s0]
write_ogg(os.path.join(RAW, "music_game.ogg"), loopify(x, .8), .8)

# chase 24s
dur = 24; t = t_ax(dur); x = np.zeros(len(t))
bpm_pulse = ((t*2.33) % 1.0 < .12).astype(float)
x += lowpass(saw(NOTE(-33), t), 300) * bpm_pulse * .8
hb = np.zeros(len(t)); hb[::int(SR*0.43)] = 1
hb = lowpass(hb, 200)*1.2
x += sine(50, t)*hb
stab_t = np.zeros(len(t))
for st in np.arange(0, dur, 2.14):
    s0 = int(st*SR); n = int(.3*SR)
    if s0+n < len(t):
        stab_t[s0:s0+n] += clip(saw(NOTE(24), t[:n]) + saw(NOTE(25), t[:n]) + saw(NOTE(31), t[:n]), 2)*env_exp(n, 14)
x += bandpass(stab_t, 500, 3500)*.5
x += bandpass(noise(len(t), 78), 1800, 5200)*(.08+.2*(np.sin(2*np.pi*.35*t) > .7))
write_ogg(os.path.join(RAW, "music_chase.ogg"), loopify(x), .85)

# ending 32s — fragile hope
dur = 32
for i, ch in enumerate([[0, 4, 7], [-3, 0, 4], [-5, -1, 2], [-7, 0, 4]]):
    seg = pad([NOTE(n) for n in ch], dur/4, lp=1100, amp=.42, seed=80+i)
    s0 = int(i*dur/4*SR); x = seg if i == 0 else None
    if i == 0: full = seg
    else: full = np.concatenate([full, seg])
mel = [(0, 1), (4, .8), (7, 1.4), (12, 1.8), (9, .9), (7, 1.6), (4, 2.2)]
pos = int(SR*2)
for n, d in mel:
    nn = plink(NOTE(n+12), min(d*1.6, 2.4), 2600)*.22
    e = min(pos+len(nn), len(full)); full[pos:e] += nn[:e-pos]
    pos += int(d*SR*1.15)
full += wind(dur, seed=81, lo=200, hi=1100)*.15
write_ogg(os.path.join(RAW, "music_ending.ogg"), full, .8)

# short loops
wl = wind(18, seed=82, lo=90, hi=520)
write_ogg(os.path.join(RAW, "wind_loop.ogg"), loopify(wl), .6)
t = t_ax(7.0)
rainy = bandpass(noise(len(t), 83), 400, 1600)*(.3+.2*np.sin(2*np.pi*.25*t))
write_ogg(os.path.join(RAW, "cave_loop.ogg"), loopify(lowpass(noise(len(t), 84), 300)*.5 + rainy*.4), .55)

# ---- extra ambience variants + stingers (v4.1) ----
def drone_bed(dur, freqs, seed, lp=260, amp=0.16):
    x = np.zeros(int(SR*dur))
    for i, f0 in enumerate(freqs):
        x += lowpass(saw(f0*(1+0.002*i), t_ax(dur)), lp) * amp
    x += lowpass(sine(27.5, t_ax(dur)), 120)*amp
    return x

# mansion interior: creaks + deep drone + music-box echo
dur = 84
xm = drone_bed(dur, (NOTE(-33), NOTE(-28)), 301)
xm += musicbox([NOTE(n) for n in (15, 22, 27)], dur, seed=302)*0.5
xm += wind(dur, seed=303, lo=120, hi=500)*0.2
for st in (9, 30, 52, 71):  # wood creaks
    n = int(0.7*SR); tt2 = t_ax(0.7)
    f = 160*(1+0.4*np.sin(2*np.pi*3.1*tt2))
    ph2 = 2*np.pi*np.cumsum(f)/SR
    cr = np.sin(ph2)*env_ad(n, .3, 2.4)*0.18
    s0 = int(st*SR)
    xm[s0:s0+n] += cr
for st in (18, 46, 66):
    s0 = int(st*SR); b = boom(2.4, 30, 304+st)
    xm[s0:s0+len(b)] += b*0.3
write_ogg(os.path.join(RAW, "amb_mansion.ogg"), loopify(xm, .8), .8)

# graveyard: wind + distant bells + sub dread
dur = 72
xg = wind(dur, seed=310, lo=90, hi=700)*0.5
xg += drone_bed(dur, (NOTE(-36),), 311, amp=0.12)
for st in (6, 22, 40, 58):
    n = plink(NOTE(3), 2.0, 1200)*0.16
    n = reverb(n, .7)
    s0 = int(st*SR)
    xg[s0:s0+len(n)] += n[:len(xg)-s0]
for st in (14, 34, 54):
    s0 = int(st*SR); b = boom(2.8, 28, 312+st)
    xg[s0:s0+len(b)] += b*0.32
write_ogg(os.path.join(RAW, "amb_grave.ogg"), loopify(xg, .8), .75)

# village night: crickets-ish shimmer + wind + far dog? (synth ambience)
dur = 60
xv = wind(dur, seed=320, lo=200, hi=1100)*0.4
tt3 = t_ax(dur)
chirp = bandpass(noise(len(tt3), 321), 3800, 6400)*(0.5+0.5*np.sin(2*np.pi*0.5*tt3))*(0.5+0.5*np.sign(np.sin(2*np.pi*7.3*tt3)))
xv += chirp*0.06
xv += drone_bed(dur, (NOTE(-31),), 322, amp=0.08)
for st in (12, 37, 52):
    s0 = int(st*SR); b = boom(2.2, 34, 323+st)
    xv[s0:s0+len(b)] += b*0.2
write_ogg(os.path.join(RAW, "amb_village.ogg"), loopify(xv, .8), .7)

# stingers
t5 = t_ax(5.0)
sg = np.sin(2*np.pi*np.cumsum(np.linspace(660, 110, len(t5)))/SR)
sg = np.tanh(sg*1.5)*env_ad(len(t5), .02, 1.6) + .3*bandpass(noise(len(t5), 330), 300, 1400)*env_ad(len(t5), .01, 2.5)
write_ogg(os.path.join(RAW, "stinger_ghost.ogg"), reverb(sg, .6), .85)
t5 = t_ax(4.0)
sf = mix(plink(523, 1.2, 2500), .6*plink(659, 1.4, 2500), .4*plink(784, 2.2, 2200))
sf = np.concatenate([sf, np.zeros(max(0, int(SR*4) - len(sf)))])[:int(SR*4)]
write_ogg(os.path.join(RAW, "stinger_find.ogg"), reverb(sf, .6), .8)

# ------------------------------------------------------------------ TEXTURE ATLAS 1024 (4x4 of 256)
def grit(img, draw, amount=14, seed=5):
    a = np.array(img, dtype=np.int16)
    r = np.random.RandomState(seed)
    a += r.randint(-amount, amount + 1, a.shape[:2])[..., None]
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))

def cracks(draw, n, w, h, col=(0, 0, 0, 90), seed=6):
    r = np.random.RandomState(seed)
    for _ in range(n):
        x, y = r.randint(0, w), r.randint(0, h)
        pts = [(x, y)]
        for _ in range(r.randint(4, 9)):
            x += r.randint(-22, 23); y += r.randint(6, 26)
            pts.append((x, y))
        draw.line(pts, fill=col, width=r.randint(1, 2))

def tiles():
    A = 256
    def base(c1, c2, seed, var=16):
        r = np.random.RandomState(seed)
        a = np.zeros((A, A, 3), np.int16)
        grad = np.linspace(0, 1, A)[:, None]
        for i, (lo, hi) in enumerate(zip(c1, c2)):
            a[..., i] = (lo + (hi - lo) * grad * 0.6 + r.randint(-var, var, (A, A)))
        return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).convert("RGB")

    t = []
    # 0 mossy brick
    img = base((52, 44, 40), (78, 66, 58), 1); d = ImageDraw.Draw(img)
    for row in range(8):
        off = (row % 2) * 32
        for col in range(-1, 5):
            x0, y0 = col*64+off, row*32
            d.rectangle([x0+2, y0+2, x0+62, y0+30], outline=(30, 26, 22), width=2)
    r = np.random.RandomState(2)
    for _ in range(90):
        x, y = r.randint(0, 250), r.randint(0, 250)
        d.ellipse([x, y, x+r.randint(4, 14), y+r.randint(3, 10)], fill=(46+ r.randint(0,30), 70+r.randint(0,30), 34, 60))
    cracks(d, 6, 256, 256, seed=3); t.append(grit(img, d, 12, 4))
    # 1 faded wallpaper
    img = base((74, 62, 52), (98, 84, 68), 5); d = ImageDraw.Draw(img)
    for x in range(0, 256, 32):
        d.line([(x, 0), (x, 256)], fill=(60, 50, 40), width=1)
    for y in range(0, 256, 64):
        for x in range(0, 256, 32):
            d.ellipse([x+10, y+22, x+22, y+42], outline=(88, 66, 50), width=2)
    stains = Image.new("L", (256, 256), 0); ds = ImageDraw.Draw(stains)
    r = np.random.RandomState(8)
    for _ in range(7):
        x, y = r.randint(0, 256), r.randint(0, 256); rr = r.randint(30, 80)
        ds.ellipse([x-rr, y-rr, x+rr, y+rr], fill=r.randint(30, 80))
    stains = stains.filter(ImageFilter.GaussianBlur(18))
    img = Image.composite(Image.new("RGB", (256, 256), (40, 30, 22)), img, stains)
    t.append(grit(img, d, 10, 9))
    # 2 stone
    img = base((58, 60, 64), (86, 88, 92), 10); d = ImageDraw.Draw(img)
    r = np.random.RandomState(11)
    blocks = [(0,0,128,86),(128,0,256,86),(0,86,86,172),(86,86,192,172),(192,86,256,172),(0,172,110,256),(110,172,256,256)]
    for b in blocks:
        d.rectangle(b, outline=(34, 34, 38), width=3)
        fill = r.randint(-12, 12)
        d.rectangle([b[0]+2, b[1]+2, b[2]-2, b[3]-2], outline=(70+fill, 72+fill, 76+fill), width=1)
    cracks(d, 8, 256, 256, seed=12); t.append(grit(img, d, 14, 13))
    # 3 wood planks
    img = base((60, 42, 28), (88, 62, 40), 14); d = ImageDraw.Draw(img)
    for y in range(0, 256, 42):
        d.line([(0, y), (256, y)], fill=(30, 20, 12), width=3)
        r = np.random.RandomState(15+y)
        for _ in range(5):
            x0, yy = r.randint(0, 220), y + r.randint(4, 36)
            d.line([(x0, yy), (x0+r.randint(30, 80), yy)], fill=(40, 28, 16), width=1)
    for x in (64, 150, 210):
        d.line([(x, 0), (x, 256)], fill=(34, 24, 14), width=2)
    t.append(grit(img, d, 12, 16))
    # 4 wooden door (with iron bands)
    img = base((70, 48, 30), (96, 66, 40), 18); d = ImageDraw.Draw(img)
    for y in range(0, 256, 36): d.line([(0, y), (256, y)], fill=(32, 22, 12), width=3)
    d.rectangle([8, 8, 248, 248], outline=(28, 20, 12), width=4)
    for y in (52, 200):
        d.rectangle([6, y-9, 250, y+9], fill=(52, 52, 56), outline=(28, 28, 30), width=2)
        for x in range(18, 250, 34): d.ellipse([x-2, y-2, x+2, y+2], fill=(24, 24, 26))
    d.ellipse([196, 118, 216, 138], fill=(70, 62, 30), outline=(30, 26, 14), width=2)
    t.append(grit(img, d, 10, 19))
    # 5 iron gate
    img = base((30, 30, 34), (48, 48, 54), 20); d = ImageDraw.Draw(img)
    for x in range(12, 256, 34): d.rectangle([x, 0, x+7, 256], fill=(58, 58, 64), outline=(26, 26, 30))
    for y in (28, 128, 224): d.rectangle([0, y, 256, y+10], fill=(50, 50, 56), outline=(26, 26, 30))
    d.ellipse([108, 112, 148, 152], outline=(70, 66, 40), width=5)
    t.append(grit(img, d, 14, 21))
    # 6 window night
    img = base((46, 38, 32), (66, 54, 44), 22); d = ImageDraw.Draw(img)
    d.rectangle([28, 24, 228, 200], fill=(12, 14, 26))
    d.rectangle([28, 24, 228, 200], outline=(24, 18, 12), width=8)
    d.line([(128, 24), (128, 200)], fill=(24, 18, 12), width=6)
    d.line([(28, 112), (228, 112)], fill=(24, 18, 12), width=6)
    d.ellipse([170, 40, 205, 75], fill=(150, 130, 90))  # moon glow
    r = np.random.RandomState(23)
    for _ in range(24):
        x, y = r.randint(36, 220), r.randint(32, 190)
        d.point((x, y), fill=(180, 180, 200))
    d.polygon([(40, 200), (90, 150), (130, 200)], fill=(8, 10, 16))
    d.polygon([(150, 200), (190, 140), (228, 200)], fill=(8, 10, 16))
    t.append(grit(img, d, 8, 24))
    # 7 blood wall
    img = base((64, 40, 36), (92, 58, 52), 25); d = ImageDraw.Draw(img)
    r = np.random.RandomState(26)
    for _ in range(9):
        x, y = r.randint(20, 230), r.randint(10, 90)
        ln = r.randint(30, 140)
        d.line([(x, y), (x+r.randint(-6, 6), y+ln)], fill=(96, 10, 10), width=r.randint(2, 6))
        d.ellipse([x-5, y-4, x+5, y+4], fill=(110, 12, 12))
    for _ in range(30):
        x, y = r.randint(0, 250), r.randint(0, 250)
        d.ellipse([x, y, x+r.randint(2, 9), y+r.randint(2, 7)], fill=(80, 8, 8, 120))
    cracks(d, 5, 256, 256, seed=27); t.append(grit(img, d, 13, 28))
    # 8 bookshelf
    img = base((44, 30, 20), (64, 44, 28), 30); d = ImageDraw.Draw(img)
    for sy in (10, 90, 170, 246):
        d.rectangle([6, sy, 250, sy+10], fill=(30, 20, 12))
    r = np.random.RandomState(31); cols = [(96,40,36),(52,66,92),(60,84,52),(110,88,40),(80,44,70),(44,60,66)]
    for sy in (10, 90, 170):
        xx = 10
        while xx < 240:
            w = r.randint(10, 20); h = r.randint(52, 66)
            c = cols[r.randint(0, len(cols))]
            d.rectangle([xx, sy+10+(68-h), xx+w, sy+78], fill=c, outline=(20, 14, 10))
            xx += w + r.randint(0, 4)
    t.append(grit(img, d, 10, 32))
    # 9 mansion facade
    img = base((40, 38, 44), (62, 58, 64), 34); d = ImageDraw.Draw(img)
    for row in range(4):
        for col in range(4):
            x0, y0 = col*64+((row%2)*32), row*64
            d.rectangle([x0+3, y0+3, x0+61, y0+61], outline=(30, 28, 34), width=2)
    cracks(d, 9, 256, 256, (0,0,0,110), seed=35)
    r = np.random.RandomState(36)
    for _ in range(40):
        x, y = r.randint(0, 250), r.randint(0, 250)
        d.ellipse([x, y, x+r.randint(3, 10), y+r.randint(2, 8)], fill=(38, 52, 34))
    t.append(grit(img, d, 12, 37))
    # 10 basement tile
    img = base((66, 70, 66), (92, 96, 90), 40); d = ImageDraw.Draw(img)
    for x in range(0, 256, 32): d.line([(x, 0), (x, 256)], fill=(46, 50, 46), width=2)
    for y in range(0, 256, 32): d.line([(0, y), (256, y)], fill=(46, 50, 46), width=2)
    r = np.random.RandomState(41)
    for _ in range(12):
        x, y = r.randint(0, 220), r.randint(0, 220)
        d.ellipse([x, y, x+r.randint(8, 30), y+r.randint(6, 24)], fill=(58, 66, 50))
    t.append(grit(img, d, 9, 42))
    # 11 altar/rune wall
    img = base((34, 26, 32), (56, 42, 52), 44); d = ImageDraw.Draw(img)
    d.circle([128, 110], 74, outline=(150, 30, 30), width=3)
    d.circle([128, 110], 56, outline=(110, 24, 24), width=2)
    for i in range(5):
        ang = i*2*math.pi/5 - math.pi/2
        x0, y0 = 128 + 74*math.cos(ang), 110 + 74*math.sin(ang)
        ang2 = ((i+2) % 5)*2*math.pi/5 - math.pi/2
        x1, y1 = 128 + 74*math.cos(ang2), 110 + 74*math.sin(ang2)
        d.line([(x0, y0), (x1, y1)], fill=(130, 26, 26), width=2)
    r = np.random.RandomState(45)
    for _ in range(16):
        x, y = r.randint(8, 240), r.randint(8, 240)
        d.line([(x, y), (x+r.randint(-8, 8), y+r.randint(-14, 14))], fill=(90, 18, 18), width=2)
    t.append(grit(img, d, 10, 46))
    # 12 fence
    img = base((36, 40, 34), (56, 60, 50), 48); d = ImageDraw.Draw(img)
    for x in range(8, 256, 30):
        d.polygon([(x, 40), (x+8, 40), (x+8, 256), (x, 256)], fill=(64, 52, 36), outline=(30, 24, 16))
    d.rectangle([0, 70, 256, 84], fill=(58, 46, 32)); d.rectangle([0, 180, 256, 194], fill=(58, 46, 32))
    t.append(grit(img, d, 12, 49))
    # 13 bark
    img = base((44, 34, 26), (70, 54, 40), 52); d = ImageDraw.Draw(img)
    r = np.random.RandomState(53)
    for x in range(0, 256, 18):
        wob = r.randint(-4, 4)
        d.line([(x+wob, 0), (x+wob+r.randint(-6, 6), 256)], fill=(30, 22, 16), width=r.randint(2, 4))
    for _ in range(20):
        x, y = r.randint(0, 240), r.randint(0, 240)
        d.ellipse([x, y, x+r.randint(6, 18), y+r.randint(4, 12)], fill=(52, 40, 28))
    t.append(grit(img, d, 14, 54))
    # 14 exit gate
    img = base((30, 32, 36), (52, 54, 60), 56); d = ImageDraw.Draw(img)
    d.rectangle([16, 8, 240, 248], outline=(70, 70, 78), width=6)
    for x in range(40, 232, 26): d.rectangle([x, 8, x+5, 248], fill=(62, 62, 70))
    d.rectangle([16, 120, 240, 132], fill=(70, 70, 78))
    d.ellipse([110, 96, 146, 132], outline=(160, 140, 60), width=4)
    t.append(grit(img, d, 10, 57))
    # 15 painting wall
    img = base((56, 46, 38), (80, 66, 54), 60); d = ImageDraw.Draw(img)
    d.rectangle([38, 30, 218, 190], fill=(96, 78, 40), outline=(40, 30, 18), width=4)
    d.rectangle([48, 40, 208, 180], fill=(24, 26, 34))
    d.ellipse([92, 60, 148, 116], fill=(180, 150, 120))  # pale face
    d.ellipse([102, 74, 114, 86], fill=(10, 10, 14)); d.ellipse([126, 74, 138, 86], fill=(10, 10, 14))
    d.line([(108, 102), (132, 102)], fill=(40, 20, 20), width=3)
    d.rectangle([60, 140, 196, 180], fill=(36, 30, 44))
    t.append(grit(img, d, 10, 61))
    return t

tiles_list = tiles()
atlas = Image.new("RGB", (1024, 1024))
for i, im in enumerate(tiles_list):
    atlas.paste(im, ((i % 4) * 256, (i // 4) * 256))
atlas.save(os.path.join(NODPI, "atlas.png"))
print("atlas.png", atlas.size)

# ------------------------------------------------------------------ SPRITE ATLAS 512 (8x8 of 64)
def spr_canvas(): 
    img = Image.new("RGBA", (64, 64), (0, 0, 0, 0)); return img, ImageDraw.Draw(img)

SP = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
dd = ImageDraw.Draw(SP)

def put(idx, img):
    SP.paste(img, ((idx % 8) * 64, (idx // 8) * 64), img)

def glow_eyes(d, x, y, r=2.2, col=(255, 60, 40)):
    for sx in (-1, 1):
        d.ellipse([x + sx*4 - r, y - r, x + sx*4 + r, y + r], fill=col)
        d.ellipse([x + sx*4 - r*1.8, y - r*1.8, x + sx*4 + r*1.8, y + r*1.8], outline=(120, 20, 10, 120))

def hunter(frame):
    img, d = spr_canvas()
    sw = math.sin(frame*1.6)*4 if frame < 4 else (6 if frame == 4 else 0)
    # legs
    d.line([(30, 40), (26 + sw, 60)], fill=(16, 14, 16), width=6)
    d.line([(34, 40), (40 - sw, 60)], fill=(16, 14, 16), width=6)
    # torso hunched
    d.polygon([(22, 44), (26, 18), (40, 16), (46, 44)], fill=(22, 19, 22))
    # long arms
    d.line([(24, 22), (14 - sw*.5, 48)], fill=(18, 16, 18), width=5)
    d.line([(44, 22), (54 + sw*.5, 48)], fill=(18, 16, 18), width=5)
    # claws
    for cx, cy in ((12, 50), (56, 50)):
        d.line([(cx-3, cy), (cx+3, cy)], fill=(60, 55, 58), width=2)
    # head
    d.ellipse([25, 4, 43, 22], fill=(26, 22, 26))
    glow_eyes(d, 34, 12)
    return img

for i in range(4): put(i, hunter(i))
put(4, hunter(4.0))  # attack pose (arms wide)
# dead
img, d = spr_canvas()
d.ellipse([8, 44, 56, 62], fill=(20, 17, 20))
d.ellipse([40, 36, 58, 50], fill=(24, 20, 24))
d.ellipse([47, 40, 52, 45], fill=(60, 8, 8))
put(5, img)

def mother(frame):
    img, d = spr_canvas()
    sway = math.sin(frame*1.3)*2
    d.polygon([(24, 62), (26 + sway, 20), (38 - sway, 20), (40, 62)], fill=(200, 198, 205, 235))  # white dress
    d.polygon([(27, 62), (37, 62), (39, 40), (25, 40)], fill=(170, 168, 178, 220))
    d.line([(25, 26), (20 + sway, 44)], fill=(205, 200, 210, 230), width=4)
    d.line([(39, 26), (44 - sway, 44)], fill=(205, 200, 210, 230), width=4)
    d.ellipse([26, 6, 38, 20], fill=(222, 216, 214))  # pale face
    d.polygon([(24, 8), (40, 8), (44, 40), (36, 12), (28, 12), (20, 40)], fill=(12, 10, 12, 245))  # black hair
    d.ellipse([29, 12, 32, 15], fill=(30, 8, 8)); d.ellipse([33, 12, 36, 15], fill=(30, 8, 8))
    d.line([(30, 18), (34, 18)], fill=(90, 20, 20, 160), width=1)
    return img

put(8, mother(0)); put(9, mother(1))
# ghost girl
img, d = spr_canvas()
d.polygon([(26, 62), (28, 24), (36, 24), (38, 62)], fill=(150, 170, 180, 120))
d.ellipse([28, 10, 36, 20], fill=(190, 205, 210, 150))
d.polygon([(27, 10), (37, 10), (40, 34), (24, 34)], fill=(20, 24, 30, 160))
d.ellipse([30, 14, 32, 16], fill=(20, 40, 60, 200)); d.ellipse([33, 14, 35, 16], fill=(20, 40, 60, 200))
put(10, img)
# merchant
img, d = spr_canvas()
d.polygon([(20, 60), (24, 26), (40, 26), (44, 60)], fill=(52, 40, 30))
d.ellipse([26, 10, 38, 24], fill=(150, 120, 90))
d.polygon([(22, 12), (42, 12), (38, 2), (26, 2)], fill=(40, 34, 26))
d.ellipse([29, 15, 32, 18], fill=(20, 20, 20)); d.ellipse([33, 15, 36, 18], fill=(20, 20, 20))
d.rectangle([22, 26, 42, 34], fill=(70, 56, 36))
d.ellipse([46, 30, 56, 44], fill=(90, 74, 40, 255), outline=(40, 32, 18))
put(11, img)

items = {
    16: ("battery", (30, 40, 46, 54), (40, 44, 52), (220, 200, 60)),
    17: ("bandage", (24, 44, 44, 56), (210, 205, 190), (150, 40, 40)),
    18: ("medkit", (22, 42, 46, 58), (180, 40, 40), (230, 230, 230)),
    19: ("key", None, (200, 170, 60), None),
    20: ("talisman", None, (180, 40, 60), (220, 180, 80)),
    21: ("note", None, (200, 190, 160), (60, 50, 40)),
    22: ("coin", None, (190, 150, 50), None),
    23: ("ammo", None, (120, 110, 70), (200, 180, 90)),
    24: ("film", None, (60, 60, 66), (180, 180, 190)),
    25: ("candle", None, (220, 210, 190), (255, 180, 60)),
    26: ("axe", None, (110, 80, 50), (180, 180, 190)),
    27: ("revolver", None, (70, 70, 76), (140, 140, 150)),
    28: ("knife", None, (90, 92, 100), (60, 50, 40)),
    29: ("camera", None, (80, 70, 56), (120, 120, 130)),
}
for idx, (name, body, c1, c2) in items.items():
    img, d = spr_canvas()
    cx = 32
    if name == "battery":
        d.rounded_rectangle([26, 42, 40, 58], 3, fill=c1); d.rectangle([30, 38, 36, 43], fill=(200, 200, 210)); d.line([(33, 46), (33, 54)], fill=c2, width=2)
    elif name == "bandage":
        d.ellipse([22, 44, 44, 60], fill=c1); d.ellipse([27, 48, 39, 56], fill=(150, 40, 40)); d.arc([22, 44, 44, 60], 0, 360, fill=(120, 120, 120))
    elif name == "medkit":
        d.rounded_rectangle([20, 42, 46, 60], 3, fill=c1); d.rectangle([31, 46, 35, 56], fill=c2); d.rectangle([27, 49, 39, 53], fill=c2)
    elif name == "key":
        d.ellipse([22, 40, 36, 54], outline=c1, width=4); d.line([(34, 50), (46, 58)], fill=c1, width=4); d.line([(42, 54), (46, 50)], fill=c1, width=3); d.line([(45, 57), (49, 53)], fill=c1, width=3)
    elif name == "talisman":
        d.polygon([(32, 38), (44, 50), (32, 62), (20, 50)], outline=c2, width=3); d.polygon([(32, 44), (38, 50), (32, 56), (26, 50)], fill=c1)
    elif name == "note":
        d.polygon([(22, 40), (40, 38), (44, 60), (24, 62)], fill=c1)
        for i in range(4): d.line([(26, 45+i*4), (40, 44+i*4)], fill=c2, width=1)
    elif name == "coin":
        d.ellipse([26, 44, 40, 58], fill=c1, outline=(120, 90, 30)); d.line([(33, 47), (33, 55)], fill=(120, 90, 30), width=2)
    elif name == "ammo":
        for i in range(3): d.rectangle([24+i*6, 44, 28+i*6, 58], fill=c1, outline=(40, 36, 20)); d.ellipse([24+i*6, 41, 28+i*6, 46], fill=c2)
    elif name == "film":
        d.rectangle([20, 44, 46, 58], fill=c1)
        for x in range(22, 45, 6): d.rectangle([x, 45, x+3, 49], fill=(20, 20, 22))
        d.rectangle([24, 51, 42, 56], fill=(90, 90, 100))
    elif name == "candle":
        d.rectangle([29, 46, 37, 60], fill=c1); d.polygon([(33, 34), (37, 42), (29, 42)], fill=c2); d.line([(33, 42), (33, 46)], fill=(40, 40, 40))
    elif name == "axe":
        d.line([(26, 58), (38, 30)], fill=(90, 60, 36), width=5); d.polygon([(34, 24), (48, 30), (44, 42), (34, 34)], fill=c1, outline=(60, 60, 66))
    elif name == "revolver":
        d.rectangle([20, 42, 46, 48], fill=c1); d.polygon([(24, 48), (32, 48), (30, 58), (26, 58)], fill=(50, 50, 56)); d.ellipse([44, 43, 48, 47], fill=c2)
    elif name == "knife":
        d.polygon([(26, 56), (40, 36), (44, 40), (30, 60)], fill=c1); d.line([(26, 56), (22, 60)], fill=c2, width=4)
    elif name == "camera":
        d.rounded_rectangle([22, 42, 44, 58], 3, fill=c1); d.ellipse([28, 46, 38, 56], fill=(30, 30, 34), outline=c2); d.rectangle([36, 40, 42, 43], fill=c2)
    put(idx, img)

props = {
    32: "corpse1", 33: "corpse2", 34: "barrel", 35: "crate", 36: "grave",
    37: "mirror", 38: "altar", 39: "radio", 40: "safe_candle", 41: "gate_lever",
}
for idx, name in props.items():
    img, d = spr_canvas()
    if name == "corpse1":
        d.ellipse([10, 48, 54, 60], fill=(50, 44, 40))
        d.ellipse([40, 44, 52, 54], fill=(150, 130, 110))
        d.line([(14, 50), (38, 46)], fill=(60, 30, 30), width=5)
    elif name == "corpse2":
        d.ellipse([14, 50, 50, 62], fill=(44, 38, 36))
        d.ellipse([16, 42, 28, 52], fill=(140, 120, 100))
        d.polygon([(20, 42), (26, 42), (24, 34)], fill=(90, 20, 20))
    elif name == "barrel":
        d.rounded_rectangle([18, 26, 46, 62], 6, fill=(84, 60, 36), outline=(40, 28, 16), width=2)
        d.rectangle([18, 34, 46, 38], fill=(60, 60, 66)); d.rectangle([18, 52, 46, 56], fill=(60, 60, 66))
    elif name == "crate":
        d.rectangle([14, 34, 50, 62], fill=(96, 70, 42), outline=(50, 36, 20), width=2)
        d.line([(14, 34), (50, 62)], fill=(50, 36, 20), width=3); d.line([(50, 34), (14, 62)], fill=(50, 36, 20), width=3)
    elif name == "grave":
        d.polygon([(20, 62), (20, 36), (32, 24), (44, 36), (44, 62)], fill=(90, 92, 96), outline=(50, 52, 56))
        d.line([(26, 42), (38, 42)], fill=(60, 62, 66), width=2); d.line([(32, 36), (32, 50)], fill=(60, 62, 66), width=2)
        d.rectangle([8, 58, 56, 64], fill=(40, 46, 36))
    elif name == "mirror":
        d.rounded_rectangle([22, 6, 42, 50], 8, outline=(90, 76, 40), width=4)
        d.rounded_rectangle([26, 10, 38, 46], 6, fill=(60, 70, 80))
        d.ellipse([28, 18, 36, 28], fill=(140, 150, 160))
        d.line([(28, 50), (28, 60)], fill=(60, 50, 28), width=3); d.line([(36, 50), (36, 60)], fill=(60, 50, 28), width=3)
    elif name == "altar":
        d.rectangle([12, 40, 52, 62], fill=(70, 68, 74), outline=(40, 38, 44), width=2)
        d.rectangle([16, 34, 48, 42], fill=(86, 84, 90))
        d.polygon([(32, 8), (38, 20), (32, 18), (26, 20)], fill=(180, 40, 40))
        d.line([(32, 20), (32, 34)], fill=(120, 30, 30), width=3)
    elif name == "radio":
        d.rounded_rectangle([16, 34, 48, 58], 3, fill=(70, 66, 58), outline=(36, 34, 30), width=2)
        d.rounded_rectangle([20, 38, 34, 48], 2, fill=(40, 60, 40))
        d.ellipse([38, 40, 45, 47], fill=(50, 50, 54)); d.line([(22, 34), (30, 18)], fill=(60, 60, 64), width=2)
    elif name == "safe_candle":
        for i, x in enumerate((20, 32, 44)):
            d.rectangle([x-2, 48+i, x+2, 62], fill=(210, 200, 180))
            d.polygon([(x, 36+i*3), (x+3, 44+i*3), (x-3, 44+i*3)], fill=(255, 170, 50))
        d.ellipse([10, 58, 54, 66], fill=(60, 56, 50))
    elif name == "gate_lever":
        d.rectangle([26, 44, 38, 62], fill=(60, 60, 66))
        d.line([(32, 52), (44, 30)], fill=(90, 90, 98), width=5)
        d.ellipse([41, 25, 49, 33], fill=(160, 40, 40))
    put(idx, img)

SP.save(os.path.join(NODPI, "sprites.png"))
print("sprites.png", SP.size)

# ------------------------------------------------------------------ ICONS
def draw_icon(size):
    img = Image.new("RGB", (size, size), (10, 8, 14))
    d = ImageDraw.Draw(img)
    s = size / 108.0
    # red moon
    d.ellipse([66*s, 10*s, 100*s, 44*s], fill=(140, 30, 30))
    d.ellipse([62*s, 6*s, 104*s, 48*s], outline=(90, 18, 18), width=2)
    # mansion silhouette
    d.polygon([(8*s, 96*s), (8*s, 60*s), (20*s, 44*s), (32*s, 60*s), (32*s, 96*s)], fill=(4, 3, 6))
    d.polygon([(32*s, 96*s), (32*s, 52*s), (54*s, 30*s), (76*s, 52*s), (76*s, 96*s)], fill=(6, 5, 8))
    d.polygon([(76*s, 96*s), (76*s, 62*s), (88*s, 50*s), (100*s, 62*s), (100*s, 96*s)], fill=(4, 3, 6))
    d.polygon([(50*s, 30*s), (54*s, 22*s), (58*s, 30*s)], fill=(4, 3, 6))
    # windows
    for wx, wy in ((40, 64), (60, 64), (40, 80), (60, 80)):
        d.rectangle([wx*s, wy*s, (wx+7)*s, (wy+9)*s], fill=(200, 150, 40) if (wx+wy) % 2 else (30, 22, 12))
    # fog
    fgi = Image.new("RGBA", (size, size), (0, 0, 0, 0)); fd = ImageDraw.Draw(fgi)
    for i in range(5):
        y = (86 + i*4) * s
        fd.ellipse([-20*s, y, size+20*s, y+12*s], fill=(120, 110, 130, 26))
    fgi = fgi.filter(ImageFilter.GaussianBlur(3*s))
    img.paste(fgi, (0, 0), fgi)
    return img

sizes = {"mdpi": 48, "hdpi": 72, "xhdpi": 96, "xxhdpi": 144, "xxxhdpi": 192}
for dk, px in sizes.items():
    draw_icon(px).save(os.path.join(APP, "res", "mipmap-" + dk, "ic_launcher.png"))
    draw_icon(px).save(os.path.join(APP, "res", "mipmap-" + dk, "ic_launcher_round.png"))
fg = Image.new("RGBA", (432, 432), (0, 0, 0, 0)); d = ImageDraw.Draw(fg)
d.polygon([(96, 384), (96, 240), (160, 160), (224, 240), (224, 384)], fill=(10, 8, 14, 255))
d.polygon([(224, 384), (224, 220), (300, 140), (376, 220), (376, 384)], fill=(14, 12, 18, 255))
d.ellipse([270, 40, 390, 160], fill=(150, 34, 34, 255))
fg.save(os.path.join(APP, "res", "mipmap-xxxhdpi", "ic_launcher_fg.png"))
bg = Image.new("RGBA", (432, 432), (12, 9, 18, 255)); bg.save(os.path.join(APP, "res", "mipmap-xxxhdpi", "ic_launcher_bg.png"))
print("icons done")

# ------------------------------------------------------------------ FONTS into assets
import shutil
shutil.copy("/tmp/Vazirmatn-Regular.ttf", os.path.join(FONTS, "vazir.ttf"))
shutil.copy("/tmp/Vazirmatn-Bold.ttf", os.path.join(FONTS, "vazir_bold.ttf"))
shutil.copy("/tmp/Cinzel.ttf", os.path.join(FONTS, "cinzel.ttf"))
print("fonts copied")
print("ASSETS COMPLETE")
