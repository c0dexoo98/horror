#!/usr/bin/env python3
"""HOLLOW VALE v3 — asset generator.
Generates every bundled asset of the game:
  - res/raw/*.wav   40+ sound effects (mono) + 5 music layers (stereo, loopable)
  - res/mipmap-*/ic_launcher.png + adaptive icon layers
All synthesized from scratch (numpy). No external assets.
"""
import math, os, random, wave, struct
import numpy as np

SR = 22050
ROOT = "/home/z/my-project/hollowvale-native/app/src/main/res"
RAW = os.path.join(ROOT, "raw")

os.makedirs(RAW, exist_ok=True)
for d in ["mipmap-mdpi", "mipmap-hdpi", "mipmap-xhdpi", "mipmap-xxhdpi", "mipmap-xxxhdpi"]:
    os.makedirs(os.path.join(ROOT, d), exist_ok=True)

# ---------------------------------------------------------------- helpers
def t_axis(dur):
    return np.arange(int(SR * dur)) / SR

def noise(n, seed=0):
    r = np.random.RandomState(seed)
    return r.uniform(-1, 1, n)

def sine(f, t, ph=0.0):
    return np.sin(2 * np.pi * f * t + ph)

def saw(f, t):
    return 2 * ((f * t) % 1.0) - 1

def tri(f, t):
    return 2 * np.abs(2 * ((f * t) % 1.0) - 1) - 1

def env_exp(n, attack, k, sr=SR):
    e = np.exp(-np.arange(n) / sr * k)
    a = int(attack * sr)
    if a > 0:
        e[:a] *= np.linspace(0, 1, a)
    return e

def lowpass(x, cutoff, sr=SR):
    """one-pole lowpass via exponential kernel — FFT convolution (fast)."""
    if cutoff >= sr * 0.45:
        return x.copy()
    a = math.exp(-2 * math.pi * cutoff / sr)
    L = min(len(x), max(8, int(sr * 0.4)))
    k = a ** np.arange(L)
    k /= k.sum()
    n = len(x)
    nfft = 1 << int(np.ceil(np.log2(n + L)))
    Xf = np.fft.rfft(x, nfft)
    Kf = np.fft.rfft(k, nfft)
    y = np.fft.irfft(Xf * Kf, nfft)
    start = (L - 1) // 2
    return y[start:start + n]

def highpass(x, cutoff, sr=SR):
    return x - lowpass(x, cutoff, sr)

def shift(x, d):
    if d <= 0:
        return x.copy()
    out = np.zeros(len(x))
    if d < len(x):
        out[d:] = x[: len(x) - d]
    return out

def reverb(x, wet=0.28, sr=SR):
    y = x.copy()
    for d in (0.017, 0.029, 0.043, 0.061):
        y = y + wet * 0.6 * shift(x, int(d * sr))
    for d in (0.107, 0.139):
        y = y + wet * 0.4 * shift(x, int(d * sr))
    return y * (1 - 0.35 * wet)

def norm(x, gain=0.9):
    m = np.max(np.abs(x)) + 1e-9
    return x * (gain / m)

def clip(x, drive=1.5):
    return np.tanh(x * drive)

def write_wav(path, x, stereo=False, gain=0.9):
    x = np.asarray(x, dtype=np.float64)
    if stereo and x.ndim == 1:
        x = np.stack([x, x], axis=1)
    peak = np.max(np.abs(x)) + 1e-9
    x = x * (gain / peak)
    xi = np.clip(x * 32767, -32768, 32767).astype(np.int16)
    with wave.open(path, "wb") as w:
        w.setnchannels(2 if stereo else 1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(xi.tobytes())
    return os.path.getsize(path)

def loopify(x, fade=0.35):
    """crossfade the tail into the head so the loop point is seamless."""
    n = int(fade * SR)
    if len(x) > 2 * n:
        x[:n] = x[:n] * np.linspace(0, 1, n) + x[-n:] * np.linspace(1, 0, n)
        x = x[:-n]
    return x

def stereo_wide(l, r_shift=0.013, r_hp=120):
    r = shift(l, int(r_shift * SR))
    r = highpass(r, r_hp)
    n = min(len(l), len(r))
    return np.stack([l[:n], r[:n]], axis=1)

# ---------------------------------------------------------------- SFX
def sfx_click():
    t = t_axis(0.07)
    return sine(1500, t) * np.exp(-t * 180) * 0.7 + noise(len(t), 1) * np.exp(-t * 250) * 0.4

def sfx_empty():
    t = t_axis(0.18)
    a = sine(900, t) * np.exp(-t * 120)
    b = noise(len(t), 2) * np.exp(-t * 160) * 0.5
    return a + b

def sfx_pickup():
    t = t_axis(0.4)
    f = np.where(t < 0.12, 660, 990)
    ph = np.cumsum(2 * np.pi * f / SR)
    return np.sin(ph) * np.exp(-t * 6) * 1.1

def sfx_paper():
    t = t_axis(0.4)
    e = (np.exp(-((t - 0.06) * 40) ** 2) + np.exp(-((t - 0.17) * 45) ** 2)
         + np.exp(-((t - 0.28) * 55) ** 2))
    return lowpass(noise(len(t), 3), 3500) * e * 4.5

def sfx_creak():
    t = t_axis(0.95)
    f = 120 - 40 * t
    ph = np.cumsum(2 * np.pi * f / SR) + 0.35 * sine(2.3, t)
    v = saw(1, ph / (2 * np.pi)) if False else (2 * ((ph / (2 * np.pi)) % 1.0) - 1)
    v *= (0.4 + 0.6 * sine(7.3, t)) * np.minimum(1, t * 14) * np.exp(-np.maximum(0, t - 0.65) * 5)
    return v * 0.85 + noise(len(t), 4) * 0.02

def sfx_locked():
    t = t_axis(0.3)
    a = sine(95, t) * np.exp(-t * 55)
    b = shift(sine(80, t) * np.exp(-t * 60), int(0.1 * SR))[: len(t)]
    return (a + b) * 1.6

def sfx_step(seed, hard=False):
    dur = 0.16 if hard else 0.13
    t = t_axis(dur)
    n = lowpass(noise(len(t), seed), 900 if hard else 700)
    v = n * np.exp(-t * (36 if hard else 44)) * 4.5
    if hard:
        v += sine(66, t) * np.exp(-t * 42) * 0.6
    return v

def sfx_hurt():
    t = t_axis(0.5)
    ph = np.cumsum(2 * np.pi * (170 - 60 * t) / SR)
    v = np.sin(ph) * env_exp(len(t), 0.01, 7)
    v += lowpass(noise(len(t), 6), 500) * np.exp(-t * 9) * 0.5
    return clip(v, 1.3)

def sfx_heartbeat():
    t = t_axis(0.55)
    a = sine(54, t) * np.exp(-t * 26)
    b = shift(sine(48, t) * np.exp(-t * 30), int(0.19 * SR))[: len(t)]
    return (a + 0.8 * b) * 1.5

def sfx_thunder():
    t = t_axis(2.4)
    n = lowpass(noise(len(t), 7), 300)
    v = (n * 7 + sine(40, t) * 0.3) * np.exp(-t * 1.6) * (1 + 0.35 * sine(0.7, t))
    return reverb(v, 0.4)

def sfx_growl_ghoul():
    t = t_axis(1.5)
    wob = 0.55 + 0.45 * sine(3.1, t)
    v = (saw(64, t) + 0.6 * saw(81, t)) * wob * env_exp(len(t), 0.12, 2.4)
    return clip(lowpass(v, 900) + noise(len(t), 8) * 0.08 * env_exp(len(t), 0.1, 3), 1.4)

def sfx_scream_ghoul():
    t = t_axis(1.1)
    f = 620 - 350 * t + 40 * sine(9, t)
    ph = np.cumsum(2 * np.pi * f / SR)
    v = np.sin(ph) + 0.5 * np.sin(2 * ph)
    return clip(v * env_exp(len(t), 0.02, 3.2) * 1.2 + noise(len(t), 9) * 0.1, 1.6)

def sfx_die_ghoul():
    t = t_axis(1.2)
    f = 300 - 220 * t
    ph = np.cumsum(2 * np.pi * f / SR)
    v = np.sin(ph) * env_exp(len(t), 0.02, 4)
    v += lowpass(noise(len(t), 10), 600) * np.exp(-t * 3) * 0.4
    return clip(v, 1.3)

def sfx_spit():
    t = t_axis(0.5)
    ph = np.cumsum(2 * np.pi * (900 - 700 * t) / SR)
    v = np.sin(ph) * env_exp(len(t), 0.005, 9)
    return v + lowpass(noise(len(t), 11), 2500) * env_exp(len(t), 0.005, 12) * 0.6

def sfx_die_spitter():
    t = t_axis(1.3)
    ph = np.cumsum(2 * np.pi * (240 - 160 * t) / SR)
    v = np.sin(ph + 0.8 * sine(13, t)) * env_exp(len(t), 0.02, 3.5)
    v += lowpass(noise(len(t), 12), 400) * np.exp(-t * 2.5) * 0.5
    return clip(v, 1.4)

def sfx_roar_brute():
    t = t_axis(1.7)
    wob = 0.6 + 0.4 * sine(2.2, t)
    v = (saw(38, t) + 0.7 * saw(49, t) + 0.3 * saw(76, t)) * wob
    v = lowpass(v, 500) * env_exp(len(t), 0.15, 1.6)
    return clip(v + noise(len(t), 13) * env_exp(len(t), 0.1, 2) * 0.25, 1.6)

def sfx_die_brute():
    t = t_axis(1.5)
    ph = np.cumsum(2 * np.pi * (120 - 90 * t) / SR)
    v = np.sin(ph) * env_exp(len(t), 0.03, 2.5)
    v += lowpass(noise(len(t), 14), 250) * np.exp(-t * 2) * 0.7
    return reverb(clip(v, 1.3), 0.25)

def sfx_scream_mother():
    t = t_axis(1.6)
    f = 780 - 430 * t + 60 * sine(6, t)
    ph = np.cumsum(2 * np.pi * f / SR)
    v = saw(1, ph / (2 * np.pi)) if False else (2 * ((ph / (2 * np.pi)) % 1) - 1)
    v = clip(v * (1 + 0.5 * sine(28, t)), 2.2)
    return v * env_exp(len(t), 0.02, 2.4) * 1.1 + noise(len(t), 15) * 0.1

def sfx_die_mother():
    t = t_axis(2.4)
    f = 500 - 460 * np.minimum(1, t / 1.2)
    ph = np.cumsum(2 * np.pi * f / SR)
    v = np.sin(ph) * env_exp(len(t), 0.02, 1.8)
    v += sine(55, t) * np.exp(-t * 1.5) * 0.6
    v += lowpass(noise(len(t), 16), 700) * np.exp(-t * 1.8) * 0.5
    return reverb(v, 0.35)

def _banish():
    t = t_axis(2.3)
    f = 180 + 320 * np.minimum(1, t / 1.4)
    ph = np.cumsum(2 * np.pi * f / SR)
    ph2 = np.cumsum(2 * np.pi * f * 1.5 / SR)
    v = np.sin(ph) * 0.3 + np.sin(ph2) * 0.12
    m = t > 1.5
    v[m] += sine(45, t[m] - 1.5) * np.exp(-(t[m] - 1.5) * 6) * 1.3
    v *= np.minimum(1, t * 9)
    return reverb(v, 0.3)

def sfx_gate():
    t = t_axis(1.3)
    ph = np.cumsum(2 * np.pi * (58 + 4 * sine(1.2, t)) / SR)
    v = (2 * ((ph / (2 * np.pi)) % 1) - 1) * (0.4 + 0.6 * sine(5, t)) * 0.5
    m = t > 0.08
    v[m] += (sine(420, t[m] - 0.08) * np.exp(-(t[m] - 0.08) * 11) * 0.5
             + sine(633, t[m] - 0.08) * np.exp(-(t[m] - 0.08) * 13) * 0.3)
    return v

def sfx_hit_flesh():
    t = t_axis(0.3)
    v = sine(70, t) * np.exp(-t * 30) * 1.4
    v += lowpass(noise(len(t), 17), 1800) * np.exp(-t * 55) * 0.9
    return v

def sfx_hit_wall():
    t = t_axis(0.3)
    v = noise(len(t), 18) * np.exp(-t * 60)
    v += sine(1800, t) * np.exp(-t * 90) * 0.4 + sine(2600, t) * np.exp(-t * 110) * 0.3
    return v * 1.2

def sfx_knife_swing():
    t = t_axis(0.3)
    n = noise(len(t), 19)
    f = 600 + 2400 * np.minimum(1, t / 0.12) - 1800 * np.maximum(0, (t - 0.12) / 0.18)
    v = np.zeros(len(t))
    # swept bandpass approx: modulate lowpass cutoff over time via masking
    for i in range(0, len(t), 512):
        seg = n[i:i + 512]
        v[i:i + 512] = highpass(lowpass(seg, f[i] + 900), max(200, f[i] - 900))
    return v * env_exp(len(t), 0.02, 12) * 3.0

def sfx_knife_hit():
    t = t_axis(0.35)
    v = sine(110, t) * np.exp(-t * 40) * 1.2
    v += lowpass(noise(len(t), 20), 2400) * np.exp(-t * 70) * 0.8
    return v

def gun_base(dur, body_f, noise_amt, crack, rvb):
    t = t_axis(dur)
    n = noise(len(t), 21)
    v = lowpass(n, 3800) * np.exp(-t * 26) * noise_amt          # body noise
    v += highpass(n, 3000) * np.exp(-t * 90) * crack            # crack
    thump = np.cumsum(2 * np.pi * (body_f * np.exp(-t * 18)) / SR)
    v += np.sin(thump) * np.exp(-t * 14) * 1.1                  # low thump
    v = clip(v, 2.0)
    return reverb(v, rvb) if rvb > 0 else v

def sfx_revolver():
    return gun_base(0.55, 95, 2.2, 0.7, 0.18)

def sfx_shotgun():
    t = t_axis(0.9)
    v = gun_base(0.9, 70, 2.6, 0.5, 0.22)
    dbl = gun_base(0.5, 60, 1.6, 0.3, 0)
    sh = np.zeros(len(t))
    o = int(0.06 * SR)
    end = min(len(t), o + len(dbl))
    sh[o:end] = dbl[: end - o]
    return v + sh * 0.7

def sfx_smg():
    return gun_base(0.22, 110, 1.9, 0.6, 0.1)

def reload_seq(times, freqs, seed):
    total = times[-1] + 0.25
    out = np.zeros(int(total * SR))
    r = np.random.RandomState(seed)
    for i, (st, f) in enumerate(zip(times, freqs)):
        d = 0.05 + 0.06 * r.uniform()
        n = int(d * SR)
        seg = lowpass(noise(n, seed + i), f) * env_exp(n, 0.004, 30)
        ping = sine(f * 6, np.arange(n) / SR) * env_exp(n, 0.002, 60) * 0.5
        s = seg + ping
        o = int(st * SR)
        out[o:o + n] += s[: len(out) - o] if o + n > len(out) else s
    return out * 1.8

def sfx_revolver_reload():
    return reload_seq([0.0, 0.28, 0.62, 0.85, 1.05], [900, 1200, 800, 1400, 1000], 31)

def sfx_shotgun_pump():
    return reload_seq([0.0, 0.22, 0.4], [700, 500, 900], 32)

def sfx_smg_reload():
    return reload_seq([0.0, 0.25, 0.55, 0.8, 1.05, 1.25], [800, 1100, 700, 1000, 900, 1300], 33)

def sfx_explosion():
    t = t_axis(1.7)
    n = lowpass(noise(len(t), 22), 220)
    v = n * 8 * np.exp(-t * 2.2)
    th = np.cumsum(2 * np.pi * (50 * np.exp(-t * 6)) / SR)
    v += np.sin(th) * np.exp(-t * 3) * 1.4
    crack = highpass(noise(len(t), 23), 1500) * np.exp(-t * 25) * 1.2
    return reverb(clip(v + crack, 1.8), 0.35)

def sfx_flash_cam():
    t = t_axis(0.6)
    v = highpass(noise(len(t), 24), 2500) * np.exp(-t * 22) * 1.4
    v += sine(3300, t) * np.exp(-t * 30) * 0.5
    mech = shift(sine(1800, t) * np.exp(-t * 70) * 0.4, int(0.25 * SR))[: len(t)]
    return v + mech

def sfx_quest():
    t = t_axis(1.3)
    notes = [392, 523.25, 659.25]
    v = np.zeros(len(t))
    for i, f in enumerate(notes):
        st = i * 0.14
        m = t >= st
        v[m] += sine(f, t[m] - st) * np.minimum(1, (t[m] - st) * 5) * np.exp(-(t[m] - st) * 2.2) * 0.4
    return reverb(v, 0.3)

def sfx_wave_start():
    t = t_axis(2.0)
    ph = np.cumsum(2 * np.pi * (85 + 40 * sine(1.1, t)) / SR)
    v = (2 * ((ph / (2 * np.pi)) % 1) - 1) * env_exp(len(t), 0.05, 1.4) * 0.5
    for st, f in [(0.3, 220), (0.6, 155), (0.95, 110)]:
        m = t >= st
        v[m] += sine(f, t[m] - st) * np.exp(-(t[m] - st) * 5) * 0.35
    v += lowpass(noise(len(t), 25), 300) * env_exp(len(t), 0.05, 2) * 0.4
    return clip(v, 1.3)

def sfx_buy():
    t = t_axis(0.5)
    ph = np.cumsum(2 * np.pi * np.where(t < 0.08, 700, 1050) / SR)
    return np.sin(ph) * np.exp(-t * 8) * 0.9

def sfx_secret():
    t = t_axis(1.6)
    notes = [523.25, 622.25, 784, 1046.5]
    v = np.zeros(len(t))
    for i, f in enumerate(notes):
        st = 0.1 * i
        m = t >= st
        v[m] += sine(f, t[m] - st) * np.minimum(1, (t[m] - st) * 8) * np.exp(-(t[m] - st) * 3) * 0.35
    return reverb(v, 0.35)

def sfx_trap():
    t = t_axis(0.5)
    v = highpass(noise(len(t), 26), 2000) * np.exp(-t * 45) * 1.6
    v += sine(240, t) * np.exp(-t * 50) * 0.9
    v += shift(sine(190, t) * np.exp(-t * 60) * 0.7, int(0.05 * SR))[: len(t)]
    return v

def sfx_heal():
    t = t_axis(0.7)
    ph = np.cumsum(2 * np.pi * (330 + 220 * np.minimum(1, t / 0.3)) / SR)
    return np.sin(ph) * env_exp(len(t), 0.02, 4) * 0.7

def sfx_exhaust():
    t = t_axis(0.9)
    v = lowpass(noise(len(t), 27), 600) * (0.5 + 0.5 * sine(3.5, t))
    e = env_exp(len(t), 0.05, 2.5)
    return v * e * 2.2

def sfx_bell():
    t = t_axis(3.0)
    v = np.zeros(len(t))
    for f, a in [(196, 1.0), (392.4, 0.55), (588, 0.3), (784, 0.18)]:
        v += sine(f, t) * np.exp(-t * 1.1) * a
    v += lowpass(noise(len(t), 28), 1500) * np.exp(-t * 30) * 0.25
    return reverb(v * 0.4, 0.5)

def sfx_crows():
    t = t_axis(1.3)
    r = np.random.RandomState(29)
    v = np.zeros(len(t))
    for _ in range(4):
        st = r.uniform(0, 1.0)
        dur = 0.09
        n = int(dur * SR)
        seg_t = np.arange(n) / SR
        f = 700 + 500 * r.uniform()
        ph = np.cumsum(2 * np.pi * (f * (1 + 0.35 * sine(38, seg_t))) / SR)
        seg = np.sin(ph) * env_exp(n, 0.004, 28)
        o = int(st * SR)
        end = min(len(v), o + n)
        v[o:end] += seg[: end - o] * 0.5
    return reverb(v, 0.3)

def sfx_stab():
    t = t_axis(0.4)
    v = lowpass(noise(len(t), 30), 3000) * np.exp(-t * 35) * 1.2
    v += sine(90, t) * np.exp(-t * 28) * 1.0
    return v

# ---------------------------------------------------------------- MUSIC
def chord(freqs, t, amp=0.3, det=1.003, cutoff=900):
    v = np.zeros(len(t))
    for f in freqs:
        v += saw(f, t) + saw(f * det, t) + 0.5 * saw(f / det, t)
    return lowpass(v, cutoff) * amp / max(1, len(freqs))

def mus_ambient():
    dur = 46.0
    t = t_axis(dur)
    lfo1, lfo2 = sine(0.037, t), sine(0.019, t, 1.7)
    drone = chord([55, 55.4, 82.4], t, 0.30, 1.002, 320)
    drone += 0.16 * np.sin(2 * np.pi * 110.3 * t) * (0.5 + 0.5 * lfo1)
    drone += 0.10 * np.sin(2 * np.pi * 164.8 * t) * (0.5 + 0.5 * lfo2)
    wind = lowpass(noise(len(t), 41), 380) * (0.35 + 0.3 * lfo1)
    gust = lowpass(noise(len(t), 42), 220) * np.clip(0.5 + 0.5 * sine(0.023, t, 0.5), 0, 1) * 0.5
    sub = 0.14 * np.sin(2 * np.pi * 27.5 * t) * (0.5 + 0.5 * lfo2)
    v = drone + wind + gust + sub
    # distant bells
    for st in [9.2, 25.6, 37.8]:
        m = t >= st
        if m.any():
            tt = t[m] - st
            for f, a in [(98, 1.0), (196.2, 0.5), (294, 0.25)]:
                v[m] += np.sin(2 * np.pi * f * tt) * np.exp(-tt * 1.4) * a * 0.06
    v = loopify(v)
    return stereo_wide(v, 0.011)

def mus_tension():
    dur = 26.0
    t = t_axis(dur)
    lfo = sine(0.09, t)
    pad = chord([110, 116.5, 220], t, 0.22, 1.004, 700) * (0.6 + 0.4 * lfo)
    pad += 0.10 * np.sin(2 * np.pi * 233.1 * t) * (0.4 + 0.6 * sine(0.05, t))
    pulse = np.zeros(len(t))
    beat = 0.85
    n = int(beat * SR)
    for i in range(0, len(t), n):
        seg = np.minimum(1, np.arange(n) / SR * 180) * np.exp(-np.arange(n) / SR * 8)
        end = min(len(t), i + n)
        pulse[i:end] += seg[: end - i]
    pulse = lowpass(pulse, 500) * 0.22
    eerie = 0.06 * np.sin(np.cumsum(2 * np.pi * (660 + 90 * sine(0.13, t)) / SR)) * (0.5 + 0.5 * sine(0.07, t, 2))
    tick = highpass(noise(len(t), 43), 4500) * pulse * 0.12
    v = pad + pulse + eerie + tick
    v = loopify(v)
    return stereo_wide(v, 0.009)

def mus_chase():
    dur = 22.0
    t = t_axis(dur)
    bpm = 148
    step = 60.0 / bpm
    v = np.zeros(len(t))
    # kick
    for i in range(0, len(t), int(step * SR)):
        n = int(0.16 * SR)
        tt = np.arange(n) / SR
        th = np.cumsum(2 * np.pi * (150 * np.exp(-tt * 22)) / SR)
        k = np.sin(th) * np.exp(-tt * 18) * 0.9
        end = min(len(v), i + n)
        v[i:end] += k[: end - i]
    # hats
    n = len(t)
    hat = highpass(noise(n, 44), 6000) * 0.16
    gate = np.zeros(n)
    for i in range(0, n, int(step / 2 * SR)):
        seg_len = int(0.04 * SR)
        end = min(n, i + seg_len)
        gate[i:end] = np.exp(-np.arange(end - i) / SR * 60)
    v += hat * gate
    # snare
    sn = lowpass(noise(n, 45), 3200)
    gate2 = np.zeros(n)
    for i in range(int(step * SR), n, int(2 * step * SR)):
        seg_len = int(0.12 * SR)
        end = min(n, i + seg_len)
        gate2[i:end] = np.exp(-np.arange(end - i) / SR * 22)
    v += sn * gate2 * 0.5
    # dissonant stab layer
    stab = chord([220, 233.1, 311.1], t, 0.30, 1.003, 1600) * (0.5 + 0.5 * sine(bpm / 60.0 * np.pi, t))
    v += stab
    # rising shepard-ish
    ris = np.sin(np.cumsum(2 * np.pi * (180 + 520 * (t % 5.5) / 5.5) / SR)) * 0.07 * (0.6 + 0.4 * sine(0.5, t))
    v += ris
    v = clip(v, 1.7)
    v = loopify(v)
    return stereo_wide(v, 0.007)

def mus_boss():
    dur = 20.0
    t = t_axis(dur)
    v = chord([36.7, 38.9, 73.4], t, 0.42, 1.006, 460)
    tritone = 0.16 * np.sin(2 * np.pi * 104.6 * t) * (0.5 + 0.5 * sine(1.8, t))
    v += tritone
    n = len(t)
    slam = np.zeros(n)
    for i in range(0, n, int(1.1 * SR)):
        seg = int(0.4 * SR)
        end = min(n, i + seg)
        th = np.cumsum(2 * np.pi * (90 * np.exp(-np.arange(end - i) / SR * 9)) / SR)
        slam[i:end] += np.sin(th[: end - i]) * np.exp(-np.arange(end - i) / SR * 6)
    v += slam * 0.7
    v += lowpass(noise(n, 46), 900) * (0.2 + 0.2 * sine(3.7, t))
    v = clip(v, 1.8)
    v = loopify(v)
    return stereo_wide(v, 0.008)

def mus_menu():
    dur = 24.0
    t = t_axis(dur)
    v = 0.22 * np.sin(2 * np.pi * 49 * t) + 0.12 * np.sin(2 * np.pi * 73.4 * t + 0.9)
    v += lowpass(noise(len(t), 47), 300) * (0.3 + 0.25 * sine(0.021, t))
    for st in [6.4, 17.2]:
        m = t >= st
        tt = t[m] - st
        for f, a in [(123.5, 1.0), (246.9, 0.45)]:
            v[m] += np.sin(2 * np.pi * f * tt) * np.exp(-tt * 1.2) * a * 0.07
    whisper = highpass(noise(len(t), 48), 3200) * (np.clip(sine(0.04, t), 0, None) ** 3) * 0.05
    v += whisper
    v = loopify(v)
    return stereo_wide(v, 0.012)

def mus_win():
    dur = 8.0
    t = t_axis(dur)
    v = np.zeros(len(t))
    seq = [261.6, 329.6, 392.0, 523.25, 659.25]
    for i, f in enumerate(seq):
        st = 0.45 * i
        m = t >= st
        tt = t[m] - st
        v[m] += np.sin(2 * np.pi * f * tt) * np.minimum(1, tt * 6) * np.exp(-tt * 1.4) * 0.22
    pad = chord([130.8, 196.0, 261.6], t, 0.16, 1.004, 1100)
    v += pad * np.minimum(1, t / 1.2)
    return stereo_wide(v, 0.01)

def mus_survival():
    dur = 24.0
    t = t_axis(dur)
    v = chord([82.4, 87.3, 164.8], t, 0.34, 1.005, 520)
    n = len(t)
    pulse = np.zeros(n)
    for i in range(0, n, int(0.5 * SR)):
        seg = int(0.1 * SR)
        end = min(n, i + seg)
        pulse[i:end] += np.exp(-np.arange(end - i) / SR * 14)
    v += lowpass(pulse, 700) * 0.5
    v += highpass(noise(n, 49), 5000) * pulse * 0.1
    v = clip(v, 1.6)
    v = loopify(v)
    return stereo_wide(v, 0.008)

# ---------------------------------------------------------------- icons (PIL)
def gen_icons():
    from PIL import Image, ImageDraw, ImageFilter

    def base_art(size, adaptive=False):
        img = Image.new("RGB", (size, size))
        d = ImageDraw.Draw(img)
        # night sky gradient
        for y in range(size):
            k = y / size
            r = int(14 + 26 * k)
            g = int(8 + 10 * k)
            b = int(16 + 22 * k)
            d.line([(0, y), (size, y)], fill=(r, g, b))
        # blood moon
        mx, my, mr = size * 0.62, size * 0.34, size * 0.16
        d.ellipse([mx - mr, my - mr, mx + mr, my + mr], fill=(168, 40, 30))
        d.ellipse([mx - mr * 0.55, my - mr * 0.7, mx - mr * 0.1, my - mr * 0.2], fill=(140, 30, 24))
        d.ellipse([mx + mr * 0.1, my + mr * 0.25, mx + mr * 0.6, my + mr * 0.7], fill=(150, 34, 26))
        glow = Image.new("RGB", (size, size), (0, 0, 0))
        dg = ImageDraw.Draw(glow)
        dg.ellipse([mx - mr * 1.5, my - mr * 1.5, mx + mr * 1.5, my + mr * 1.5], fill=(90, 20, 16))
        glow = glow.filter(ImageFilter.GaussianBlur(size * 0.06))
        img = Image.blend(img, Image.composite(glow, Image.new("RGB", (size, size), (0, 0, 0)),
                                               Image.new("L", (size, size), 0)), 0) if False else img
        from PIL import ImageChops
        img = ImageChops.add(img, glow)
        d = ImageDraw.Draw(img)
        # mountain silhouettes
        d.polygon([(0, size * 0.72), (size * 0.18, size * 0.5), (size * 0.34, size * 0.68),
                   (size * 0.52, size * 0.46), (size * 0.7, size * 0.7), (size, size * 0.56), (size, size), (0, size)],
                  fill=(8, 7, 10))
        # second ridge
        d.polygon([(0, size * 0.84), (size * 0.3, size * 0.7), (size * 0.6, size * 0.86),
                   (size, size * 0.74), (size, size), (0, size)], fill=(4, 4, 6))
        # dead trees
        for tx, th in [(size * 0.16, 0.3), (size * 0.78, 0.26), (size * 0.9, 0.2)]:
            d.line([(tx, size * 0.86), (tx, size * 0.86 - size * th)], fill=(5, 4, 6), width=max(1, size // 64))
            d.line([(tx, size * 0.86 - size * th * 0.6), (tx - size * 0.07, size * 0.86 - size * th * 0.9)],
                   fill=(5, 4, 6), width=max(1, size // 90))
            d.line([(tx, size * 0.86 - size * th * 0.75), (tx + size * 0.08, size * 0.86 - size * th)],
                   fill=(5, 4, 6), width=max(1, size // 90))
        # two glowing eyes in the dark (the Mother)
        ex, ey = size * 0.38, size * 0.62
        er = max(1, size * 0.018)
        d.ellipse([ex - er * 2.4, ey - er, ex - er * 0.4, ey + er], fill=(255, 120, 40))
        d.ellipse([ex + er * 0.4, ey - er, ex + er * 2.4, ey + er], fill=(255, 120, 40))
        # fog band
        fog = Image.new("L", (size, size), 0)
        df = ImageDraw.Draw(fog)
        df.ellipse([size * 0.1, size * 0.62, size * 0.9, size * 0.8], fill=70)
        fog = fog.filter(ImageFilter.GaussianBlur(size * 0.05))
        img = Image.composite(Image.new("RGB", (size, size), (60, 58, 66)), img, fog.point(lambda p: p // 2))
        if not adaptive:
            # vignette border for legacy icons
            vin = Image.new("L", (size, size), 0)
            dv = ImageDraw.Draw(vin)
            dv.rectangle([0, 0, size, size], fill=255)
            dv.rectangle([size * 0.06, size * 0.06, size * 0.94, size * 0.94], fill=0)
            vin = vin.filter(ImageFilter.GaussianBlur(size * 0.05))
            black = Image.new("RGB", (size, size), (0, 0, 0))
            img = Image.composite(black, img, vin)
        return img

    sizes = {"mipmap-mdpi": 48, "mipmap-hdpi": 72, "mipmap-xhdpi": 96,
             "mipmap-xxhdpi": 144, "mipmap-xxxhdpi": 192}
    for folder, s in sizes.items():
        img = base_art(s)
        img.save(os.path.join(ROOT, folder, "ic_launcher.png"))
    # adaptive layers (foreground within safe zone = centered 66%)
    fg = base_art(432, adaptive=True)
    bg = Image.new("RGB", (432, 432))
    db = ImageDraw.Draw(bg)
    for y in range(432):
        k = y / 432
        db.line([(0, y), (432, y)], fill=(int(10 + 18 * k), int(6 + 8 * k), int(12 + 16 * k)))
    fg_big = Image.new("RGB", (432, 432))
    inner = int(432 * 0.72)
    fg_resized = fg.resize((inner, inner), Image.LANCZOS)
    fg_big.paste(fg_resized, ((432 - inner) // 2, (432 - inner) // 2))
    fg_big.save(os.path.join(ROOT, "mipmap-xxxhdpi", "ic_launcher_fg.png"))
    bg.save(os.path.join(ROOT, "mipmap-xxxhdpi", "ic_launcher_bg.png"))
    print("icons OK")

# ---------------------------------------------------------------- main
def main():
    print("== HOLLOW VALE asset generator ==")
    sfx = {
        "sfx_click": sfx_click, "sfx_empty": sfx_empty, "sfx_pickup": sfx_pickup,
        "sfx_paper": sfx_paper, "sfx_creak": sfx_creak, "sfx_locked": sfx_locked,
        "sfx_step": lambda: sfx_step(51), "sfx_step_run": lambda: sfx_step(52, True),
        "sfx_hurt": sfx_hurt, "sfx_heartbeat": sfx_heartbeat, "sfx_thunder": sfx_thunder,
        "sfx_growl_ghoul": sfx_growl_ghoul, "sfx_scream_ghoul": sfx_scream_ghoul,
        "sfx_die_ghoul": sfx_die_ghoul, "sfx_spit": sfx_spit,
        "sfx_die_spitter": sfx_die_spitter, "sfx_roar_brute": sfx_roar_brute,
        "sfx_die_brute": sfx_die_brute, "sfx_scream_mother": sfx_scream_mother,
        "sfx_die_mother": sfx_die_mother, "sfx_banish": _banish, "sfx_gate": sfx_gate,
        "sfx_hit_flesh": sfx_hit_flesh, "sfx_hit_wall": sfx_hit_wall,
        "sfx_knife_swing": sfx_knife_swing, "sfx_knife_hit": sfx_knife_hit,
        "sfx_revolver_fire": sfx_revolver, "sfx_revolver_reload": sfx_revolver_reload,
        "sfx_shotgun_fire": sfx_shotgun, "sfx_shotgun_pump": sfx_shotgun_pump,
        "sfx_smg_fire": sfx_smg, "sfx_smg_reload": sfx_smg_reload,
        "sfx_explosion": sfx_explosion, "sfx_flash_cam": sfx_flash_cam,
        "sfx_quest": sfx_quest, "sfx_wave_start": sfx_wave_start, "sfx_buy": sfx_buy,
        "sfx_secret": sfx_secret, "sfx_trap": sfx_trap, "sfx_heal": sfx_heal,
        "sfx_exhaust": sfx_exhaust, "sfx_bell": sfx_bell, "sfx_crows": sfx_crows,
        "sfx_stab": sfx_stab,
    }
    total = 0
    for name, fn in sfx.items():
        p = os.path.join(RAW, name + ".wav")
        sz = write_wav(p, norm(fn(), 0.92), stereo=False)
        total += sz
    print(f"SFX: {len(sfx)} files, {total/1024:.0f} KB")

    music = {
        "mus_ambient": mus_ambient, "mus_tension": mus_tension, "mus_chase": mus_chase,
        "mus_boss": mus_boss, "mus_menu": mus_menu, "mus_win": mus_win,
        "mus_survival": mus_survival,
    }
    total = 0
    for name, fn in music.items():
        p = os.path.join(RAW, name + ".wav")
        x = fn()
        sz = write_wav(p, x, stereo=True, gain=0.88)
        total += sz
        print(f"  {name}: {sz/1048576:.2f} MB")
    print(f"music total: {total/1048576:.2f} MB")

    gen_icons()
    print("ALL ASSETS DONE")

if __name__ == "__main__":
    main()
