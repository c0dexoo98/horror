#!/usr/bin/env python3
"""HOLLOW VALE v4 — cinematic videos (final). intro.mp4 (12s) + ending.mp4 (10s)."""
import math, os, random, subprocess, tempfile, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance
import arabic_reshaper
from bidi.algorithm import get_display

W, H, FPS = 1280, 720, 24
RAW = "/home/z/my-project/hollowvale-native/app/src/main/res/raw"
os.makedirs(RAW, exist_ok=True)
F_TITLE = ImageFont.truetype("/tmp/Cinzel.ttf", 122)
F_FA_BIG = ImageFont.truetype("/tmp/Vazirmatn-Bold.ttf", 64)
F_FA_MID = ImageFont.truetype("/tmp/Vazirmatn-Regular.ttf", 36)

def fa(s): return get_display(arabic_reshaper.reshape(s))

_rr = np.random.RandomState(77)
STARS = [(_rr.randint(0, H - 280), _rr.randint(0, W)) for _ in range(140)]
_rd = random.Random(55)
DUST = [(_rd.random(), _rd.random(), _rd.uniform(-25, 25)) for _ in range(40)]

SKY_U8 = np.zeros((H, W, 4), np.uint8)
gy = np.linspace(0, 1, H)[:, None]
SKY_U8[..., 0] = np.clip(8 + 10 * gy, 0, 255)
SKY_U8[..., 1] = np.clip(7 + 9 * gy, 0, 255)
SKY_U8[..., 2] = np.clip(14 + 14 * gy, 0, 255)
SKY_U8[..., 3] = 255
SKY_E_U8 = np.zeros((H, W, 4), np.uint8)
SKY_E_U8[..., 0] = np.clip(24 + 66 * gy, 0, 255)
SKY_E_U8[..., 1] = np.clip(22 + 50 * gy, 0, 255)
SKY_E_U8[..., 2] = np.clip(32 + 32 * gy, 0, 255)
SKY_E_U8[..., 3] = 255

def fog_layer(w, h, seed, blur=14):
    r = np.random.RandomState(seed)
    img = Image.fromarray((r.randint(0, 255, (h, w))).astype(np.uint8)).filter(ImageFilter.GaussianBlur(blur))
    return np.array(img, np.float32) / 255.0

FOG_RAW = [fog_layer(640, 160, 91, 18), fog_layer(640, 120, 92, 12), fog_layer(640, 90, 93, 8)]
# feather top/bottom so fog has no hard edges
def feather(a):
    hgt = a.shape[0]
    m = np.ones(hgt, np.float32)
    f = int(hgt * 0.35)
    m[:f] = np.linspace(0, 1, f); m[-f:] = np.linspace(1, 0, f)
    return a * m[:, None]
FOG_RAW = [feather(f) for f in FOG_RAW]
FOG_RAW = [np.clip((f - 0.44) * 2.4, 0, 1) for f in FOG_RAW]  # keep only dense pockets
FOG_IMG = [Image.fromarray((f * 255).astype(np.uint8)) for f in FOG_RAW]

def draw_mansion(scale=1.0, color=(6, 5, 9, 255)):
    img = Image.new("RGBA", (900, 420), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    c = color
    d.polygon([(60, 420), (60, 240), (140, 150), (220, 240), (220, 420)], fill=c)
    d.polygon([(220, 420), (220, 200), (330, 90), (440, 200), (440, 420)], fill=c)
    d.polygon([(318, 98), (330, 58), (342, 98)], fill=c)
    d.polygon([(440, 420), (440, 250), (520, 170), (600, 250), (600, 420)], fill=c)
    d.polygon([(600, 420), (600, 280), (660, 220), (720, 280), (720, 420)], fill=c)
    d.rectangle([326, 330, 384, 420], fill=c)
    if color[0] < 30:
        for wx, wy in [(90, 270), (160, 270), (90, 330), (160, 330), (280, 240), (360, 240), (280, 310), (360, 310), (480, 280), (545, 280), (480, 350), (545, 350), (630, 310), (675, 310)]:
            lit = (wx + wy) % 3 == 0
            d.rectangle([wx, wy, wx + 16, wy + 22], fill=(200, 130, 34, 255) if lit else (16, 12, 18, 255))
    if scale != 1.0:
        img = img.resize((int(900 * scale), int(420 * scale)), Image.NEAREST)
    return img

def draw_trees(color=(4, 3, 6, 255)):
    img = Image.new("RGBA", (1280, 260), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = random.Random(99)
    for i in range(14):
        x = 20 + i * 95 + r.randint(-25, 25)
        h = r.randint(120, 230)
        d.line([(x, 260), (x + r.randint(-8, 8), 260 - h)], fill=color, width=r.randint(5, 9))
        for b in range(r.randint(3, 5)):
            bx = x + r.randint(-30, 30); by = 260 - h + r.randint(0, 60)
            d.line([(x, 260 - h + r.randint(0, 30)), (bx, by)], fill=color, width=3)
            d.line([(bx, by), (bx + r.randint(-25, 25), by - r.randint(12, 34))], fill=color, width=2)
    return img

TREES = draw_trees()
TREE_DARK = draw_trees((10, 9, 12, 255))
MAN_CACHE = [draw_mansion(1.0 + 0.10 * i / 23.0) for i in range(24)]
MAN_LIT = [draw_mansion(1.0 + 0.10 * i / 23.0, (70, 76, 100, 160)) for i in range(24)]
MOON_POS = (960, 120)

def text_sprite(text, font, fill, glow=None, glow2=None):
    pad = 40
    bbox = font.getbbox(text)
    w = bbox[2] - bbox[0] + pad * 2
    h = bbox[3] - bbox[1] + pad * 2
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    if glow:
        gl = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        ImageDraw.Draw(gl).text((pad, pad), text, font=font, fill=glow)
        img = Image.alpha_composite(img, gl.filter(ImageFilter.GaussianBlur(12)))
    if glow2:
        gl2 = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        ImageDraw.Draw(gl2).text((pad, pad), text, font=font, fill=glow2)
        img = Image.alpha_composite(img, gl2.filter(ImageFilter.GaussianBlur(4)))
    d = ImageDraw.Draw(img)  # draw on the CURRENT image
    for ox, oy in ((-2, 0), (2, 0), (0, -2), (0, 2)):
        d.text((pad + ox, pad + oy), text, font=font, fill=(0, 0, 0, 220))
    d.text((pad, pad), text, font=font, fill=fill)
    return img

TITLE_EN = text_sprite("HOLLOW VALE", F_TITLE, (225, 45, 40, 255), glow=(140, 10, 10, 200), glow2=(255, 90, 60, 150))
TITLE_FA = text_sprite(fa("درهٔ توخالی"), F_FA_BIG, (205, 190, 180, 255), glow=(90, 30, 30, 140))
TAG_FA = text_sprite(fa("هیچ‌کس از دره بیرون نمی‌رود…"), F_FA_MID, (160, 150, 145, 255))
TXT1 = text_sprite(fa("تو فرار کردی…"), F_FA_BIG, (225, 215, 195, 255), glow=(80, 60, 30, 140))
TXT2 = text_sprite(fa("ولی دره همیشه صدایت را می‌زند"), F_FA_MID, (185, 172, 158, 255), glow=(60, 45, 25, 120))
LOGO = text_sprite("HOLLOW VALE", F_TITLE, (248, 228, 185, 255), glow=(130, 90, 30, 190))
END_FA = text_sprite(fa("پایان"), F_FA_MID, (170, 155, 135, 255))

_BAND_CACHE = {}
def band(base, y0, y1, alpha=110):
    key = (y0, y1)
    if key not in _BAND_CACHE:
        ov = Image.new("RGBA", base.size, (0, 0, 0, 0))
        ImageDraw.Draw(ov).rectangle([0, y0, base.size[0], y1], fill=(0, 0, 0, 255))
        _BAND_CACHE[key] = ov.filter(ImageFilter.GaussianBlur(22))
    ov = _BAND_CACHE[key].copy()
    ov.putalpha(ov.getchannel("A").point(lambda v: int(v * alpha / 110.0)))
    base.alpha_composite(ov)

def lightning_curve(tt, flashes):
    f = 0.0
    for t0, amp, dur in flashes:
        if t0 <= tt < t0 + dur:
            ph = (tt - t0) / dur
            f = max(f, amp * (1 - ph) * (0.55 + 0.45 * math.sin(ph * 22)))
    return f

YY, XX = np.mgrid[0:H, 0:W]
DX = (XX - W / 2) / (W / 2); DY = (YY - H / 2) / (H / 2)
VIG = (1 - 0.55 * np.clip(DX * DX + DY * DY - 0.25, 0, 1.4))[..., None].astype(np.float32)

def post(img_rgba, fi, grain=10):
    arr = np.asarray(img_rgba.convert("RGB"), np.float32)
    r = np.random.RandomState(fi)
    n = r.randint(-grain, grain + 1, arr.shape[:2])[..., None]
    a = (arr + n) * VIG
    a[..., 0] = np.roll(a[..., 0], 1, axis=1) * 0.5 + a[..., 0] * 0.5
    a[..., 2] = np.roll(a[..., 2], -1, axis=1) * 0.5 + a[..., 2] * 0.5
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))

# ---------------- INTRO ----------------
DUR_I = 12.0
N_I = int(DUR_I * FPS)
FL_I = [(2.5, 0.55, 0.30), (5.1, 0.35, 0.22), (8.5, 0.8, 0.40), (10.6, 1.0, 0.5)]

def frame_intro(fi):
    tt = fi / FPS
    im = Image.fromarray(SKY_U8).copy()
    md = ImageDraw.Draw(im, "RGBA")
    for (sy, sx) in STARS:
        tw = 0.5 + 0.5 * math.sin(tt * 2.0 + sx)
        if tw > 0.55:
            md.point((sx, sy), fill=(210, 210, 225, int(170 * tw)))
    glow_r = 60 + 6 * math.sin(tt * 1.4)
    for gr, ga in ((glow_r * 2.4, 30), (glow_r * 1.5, 45), (glow_r, 65)):
        md.ellipse([MOON_POS[0] - gr, MOON_POS[1] - gr, MOON_POS[0] + gr, MOON_POS[1] + gr], fill=(160, 32, 32, ga))
    md.ellipse([MOON_POS[0] - 34, MOON_POS[1] - 34, MOON_POS[0] + 34, MOON_POS[1] + 34], fill=(180, 40, 40, 255))
    md.ellipse([MOON_POS[0] - 12, MOON_POS[1] - 20, MOON_POS[0] + 16, MOON_POS[1] + 6], fill=(148, 28, 28, 255))
    lf = lightning_curve(tt, FL_I)
    if lf > 0:
        md.rectangle([0, 0, W, H], fill=(80, 90, 130, int(120 * lf)))
    zoom_i = min(23, int((tt / DUR_I) * 23 + 0.5))
    im.paste(TREES, (0, 470 - int(8 * math.sin(tt * .5))), TREES)
    man = MAN_CACHE[zoom_i]
    im.paste(man, ((W - man.width) // 2, 720 - man.height + 30), man)
    if lf > 0.02:
        ml = MAN_LIT[zoom_i]
        im.paste(ml, ((W - ml.width) // 2, 720 - ml.height + 30), ml)
    im.paste(TREES, (-30, 500), TREES)
    for li, fz in enumerate(FOG_IMG):
        off = int((tt * (12 + li * 9))) % 640
        tile = np.tile(np.roll(np.array(fz), off, axis=1), (1, 3))[:, :W]
        y0 = 420 + li * 80
        amp = (0.16 + 0.07 * li) * (1 + lf * 1.0)
        fog_rgba = np.zeros((tile.shape[0], W, 4), np.uint8)
        fog_rgba[..., 0] = np.clip(108 + 60 * lf, 0, 255)
        fog_rgba[..., 1] = np.clip(110 + 64 * lf, 0, 255)
        fog_rgba[..., 2] = np.clip(126 + 72 * lf, 0, 255)
        fog_rgba[..., 3] = np.clip(tile * min(255, amp * 255), 0, 255)
        im.alpha_composite(Image.fromarray(fog_rgba), (0, y0))
    dd = ImageDraw.Draw(im, "RGBA")
    for dseed in range(40):
        rx = (DUST[dseed][0] * W + tt * DUST[dseed][2]) % W
        ry = (DUST[dseed][1] * H + 12 * math.sin(tt * .7 + dseed)) % H
        br = int(45 + 45 * math.sin(tt * 2.0 + dseed))
        if br > 10:
            dd.point((int(rx), int(ry)), fill=(210, 210, 220, br))
    if tt >= 6.3:
        band(im, 200, 560, 120)
        ta = min(1.0, (tt - 6.3) / 1.6)
        if tt < 8.0: ta *= 0.75 + 0.25 * math.sin(tt * 31)
        if random.random() > 0.06 or tt > 9.0:
            jx, jy = random.randint(-2, 2), random.randint(-1, 1)
            tx = (W - TITLE_EN.width) // 2 + jx
            ty = 225 + jy
            red = Image.new("RGBA", TITLE_EN.size, (0, 0, 0, 0))
            red.paste(Image.new("RGBA", TITLE_EN.size, (255, 30, 20, int(140 * ta))), (0, 0), TITLE_EN)
            cyn = Image.new("RGBA", TITLE_EN.size, (0, 0, 0, 0))
            cyn.paste(Image.new("RGBA", TITLE_EN.size, (30, 210, 255, int(110 * ta))), (0, 0), TITLE_EN)
            im.alpha_composite(cyn, (tx + 2, ty))
            im.alpha_composite(red, (tx - 2, ty))
            timg = TITLE_EN if ta >= 1.0 else TITLE_EN.copy()
            if ta < 1.0: timg.putalpha(timg.getchannel("A").point(lambda v: int(v * ta)))
            im.alpha_composite(timg, (tx, ty))
        if tt >= 7.6:
            al = min(1.0, (tt - 7.6) / 1.4)
            f2 = TITLE_FA if al >= 1.0 else TITLE_FA.copy()
            if al < 1.0: f2.putalpha(f2.getchannel("A").point(lambda v: int(v * al)))
            im.alpha_composite(f2, ((W - TITLE_FA.width) // 2, 378))
        if tt >= 9.2:
            al = min(1.0, (tt - 9.2) / 1.2)
            f3 = TAG_FA if al >= 1.0 else TAG_FA.copy()
            if al < 1.0: f3.putalpha(f3.getchannel("A").point(lambda v: int(v * al)))
            im.alpha_composite(f3, ((W - TAG_FA.width) // 2, 478))
    if tt < 1.0:
        im = ImageEnhance.Brightness(im.convert("RGB")).enhance(tt).convert("RGBA")
    if tt > DUR_I - 1.2:
        im = ImageEnhance.Brightness(im.convert("RGB")).enhance(max(0.0, (DUR_I - tt) / 1.2)).convert("RGBA")
    return im

# ---------------- ENDING ----------------
DUR_E = 10.0
N_E = int(DUR_E * FPS)

def frame_ending(fi):
    tt = fi / FPS
    im = Image.fromarray(SKY_E_U8).copy()
    gate_open = min(1.0, tt / 4.5)
    for li, fz in enumerate(FOG_IMG):
        off = int((tt * (6 + li * 5))) % 640
        tile = np.tile(np.roll(np.array(fz), off, axis=1), (1, 3))[:, :W]
        y0 = 360 + li * 90
        amp = max(0.0, (0.20 - 0.018 * tt) * (0.5 + 0.5 * li))
        fog_rgba = np.zeros((tile.shape[0], W, 4), np.uint8)
        fog_rgba[..., 0] = np.clip(185, 0, 255)
        fog_rgba[..., 1] = np.clip(158, 0, 255)
        fog_rgba[..., 2] = np.clip(140, 0, 255)
        fog_rgba[..., 3] = np.clip(tile * min(255, amp * 255), 0, 255)
        im.alpha_composite(Image.fromarray(fog_rgba), (0, y0))
    dd = ImageDraw.Draw(im, "RGBA")
    light_w = int(200 + 500 * gate_open)
    dd.rectangle([(W - light_w) // 2, 0, (W + light_w) // 2, H], fill=(150, 120, 70, int(55 + 80 * gate_open)))
    im.paste(TREE_DARK, (0, 460), TREE_DARK)
    gtw = int(90 * (1 - gate_open))
    if gtw > 6:
        for gx in ((W // 2 - gtw - 60), (W // 2 + 60)):
            for bx in range(0, gtw, 26):
                dd.rectangle([gx + bx, 300, gx + bx + 9, H], fill=(16, 14, 16, 255))
            dd.rectangle([gx, 470, gx + gtw, 482], fill=(16, 14, 16, 255))
    im.paste(TREES, (0, 470), TREES)
    if 1.2 <= tt < 6.0:
        al = min(1, (tt - 1.2) / 1.0) * min(1, (6.0 - tt) / 1.0)
        band(im, 210, 340, int(100 * al))
        t1 = TXT1.copy(); t1.putalpha(t1.getchannel("A").point(lambda v: int(v * al)))
        im.alpha_composite(t1, ((W - TXT1.width) // 2, 240))
    if 3.4 <= tt < 6.8:
        al = min(1, (tt - 3.4) / 1.0) * min(1, (6.8 - tt) / 0.8)
        t2 = TXT2.copy(); t2.putalpha(t2.getchannel("A").point(lambda v: int(v * al)))
        im.alpha_composite(t2, ((W - TXT2.width) // 2, 330))
    if tt >= 6.8:
        al = min(1, (tt - 6.8) / 1.2)
        band(im, 220, 420, int(120 * al))
        lg = LOGO.copy(); lg.putalpha(lg.getchannel("A").point(lambda v: int(v * al)))
        im.alpha_composite(lg, ((W - LOGO.width) // 2, 225))
        ef = END_FA.copy(); ef.putalpha(ef.getchannel("A").point(lambda v: int(v * al)))
        im.alpha_composite(ef, ((W - END_FA.width) // 2, 368))
    if tt < 0.8:
        im = ImageEnhance.Brightness(im.convert("RGB")).enhance(tt / 0.8).convert("RGBA")
    if tt > DUR_E - 1.0:
        im = ImageEnhance.Brightness(im.convert("RGB")).enhance(max(0, (DUR_E - tt) / 1.0)).convert("RGBA")
    return im

# ---------------- AUDIO ----------------
SR = 22050
def t_ax(d): return np.arange(int(SR * d)) / SR
def sine(f, t): return np.sin(2 * np.pi * f * t)
def noise(n, seed): return np.random.RandomState(seed).uniform(-1, 1, n)
def lowpass(x, cutoff):
    a = math.exp(-2 * math.pi * cutoff / SR); L = max(8, int(SR * .4))
    k = a ** np.arange(L); k /= k.sum()
    nfft = 1 << int(np.ceil(np.log2(len(x) + L)))
    y = np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(k, nfft), nfft)
    s = (L - 1) // 2
    return y[s:s + len(x)]
def bandpass(x, lo, hi): return lowpass(x - lowpass(x, hi), lo)
def env_exp(n, k): return np.exp(-np.arange(n) / SR * k)
def norm(x, g=.9): return x * (g / (np.max(np.abs(x)) + 1e-9))
def saw(f, t): return 2 * ((f * t) % 1.0) - 1.0

def build_audio(dur, flashes, hum=True, dawn=False):
    t = t_ax(dur); x = np.zeros(len(t))
    x += bandpass(noise(len(t), 200), 150, 800) * (0.05 + 0.03 * np.sin(2 * np.pi * .13 * t))
    if dawn:
        for f in (130.8, 164.8, 196.0):
            x += lowpass(saw(f, t), 500) * 0.05 * np.minimum(1, t / 4)
        x += lowpass(noise(len(t), 201), 300) * 0.03
    else:
        x += lowpass(saw(27.5, t), 130) * 0.22 * np.minimum(1, t / 3)
        x += lowpass(saw(41.2, t), 160) * 0.10
        if hum:
            mel = [(440, 1.1), (392, 1.1), (349, 1.1), (392, 1.4), (330, 1.6)]
            pos = int(2.8 * SR)
            for f, d in mel:
                n = int(d * SR)
                if pos + n > len(x): break
                tt2 = t_ax(d)
                seg = (sine(f * 0.997, tt2) + .25 * sine(f * 2.01, tt2)) * env_exp(n, 1.6)
                x[pos:pos + n] += seg * 0.12
                pos += int(d * SR * .9)
        hb_t = t_ax(.9); th = sine(50, hb_t) * env_exp(len(hb_t), 12)
        beat = np.concatenate([th, th * .7, np.zeros(int(SR * .3))])
        p = int(4.0 * SR)
        while p + len(beat) < len(x):
            x[p:p + len(beat)] += beat * 0.30 * min(1.0, (p - 4.0 * SR) / (6 * SR))
            p += len(beat)
    for t0, amp, d in flashes:
        n = int(4.0 * SR)
        rumble = lowpass(noise(n, int(t0 * 7) + 300), 200) * env_exp(n, 1.2)
        s0 = int(t0 * SR)
        if s0 + n < len(x): x[s0:s0 + n] += rumble * (0.9 * amp)
        cn = int(.3 * SR)
        if s0 + cn < len(x):
            x[s0:s0 + cn] += bandpass(noise(cn, int(t0 * 11) + 301), 700, 3000) * env_exp(cn, 18) * amp
    if not dawn:
        n = int(2.5 * SR)
        scream_f = np.linspace(300, 900, n)
        scr = np.sin(2 * np.pi * np.cumsum(scream_f) / SR) + .4 * bandpass(noise(n, 205), 800, 3000)
        s0 = int(8.5 * SR)
        if s0 + n < len(x): x[s0:s0 + n] += np.tanh(scr * 1.8) * env_exp(n, 2.0) * 0.28
    return norm(np.tanh(x * 1.4), .85)

def encode(frames, audio, out, start=0):
    tmpw = tempfile.mktemp(suffix=".wav")
    with wave.open(tmpw, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes(np.clip(audio * 32767, -32768, 32767).astype(np.int16).tobytes())
    subprocess.run(["ffmpeg", "-y", "-nostdin", "-loglevel", "error", "-framerate", str(FPS),
                    "-start_number", str(start), "-i", f"{frames}/%04d.png",
                    "-i", tmpw, "-c:v", "libx264", "-preset", "faster", "-crf", "23",
                    "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-shortest", out], check=True)
    os.remove(tmpw)

import sys
STAGE = os.environ.get("STAGE", "both")
fd = tempfile.mkdtemp()
for fi in range(N_I):
    if STAGE not in ("both", "intro"): break
    post(frame_intro(fi), 1000 + fi, 10).save(f"{fd}/{fi:04d}.png")
    if fi % 96 == 0: print("intro", fi, "/", N_I)
if STAGE in ("both", "intro"):
    encode(fd, build_audio(DUR_I, FL_I), os.path.join(RAW, "intro.mp4"))
    print("intro.mp4 OK", os.path.getsize(os.path.join(RAW, "intro.mp4")) // 1024, "KB")

for fi in range(N_E):
    if STAGE not in ("both", "ending"): break
    post(frame_ending(fi), 5000 + fi, 7).save(f"{fd}/{5000 + fi:04d}.png")
    if fi % 96 == 0: print("ending", fi, "/", N_E)
if STAGE in ("both", "ending"):
    encode(fd, build_audio(DUR_E, [(1.2, 0.25, .8), (6.8, 0.3, 1.2)], hum=False, dawn=True), os.path.join(RAW, "ending.mp4"), start=5000)
    print("ending.mp4 OK", os.path.getsize(os.path.join(RAW, "ending.mp4")) // 1024, "KB")
print("VIDEOS COMPLETE")
