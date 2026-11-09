#!/usr/bin/env python3
# HOLLOW VALE v5 — cinematic PS1-horror texture atlas (2048x2048, 8x8 tiles of 256px)
# Slot map (must match Renderer.wallTileFor / doorTileFor and the raycast shader):
#   0-15  walls (indices unchanged from v4)
#   16-23 floors   24-31 ceilings   32-63 spare
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import random, math

TILE = 256
GRID = 8
SIZE = TILE * GRID
rng = np.random.default_rng(20261109)
rnd = random.Random(20261109)

# ---------------------------------------------------------------- noise utils
def vnoise(w, h, freq, seed):
    """Periodic (tileable) value noise on an fxh lattice, bilinear-interpolated."""
    r = np.random.default_rng(seed)
    g = r.random((freq, freq)).astype(np.float32)
    ys = np.linspace(0, freq, h, endpoint=False)
    xs = np.linspace(0, freq, w, endpoint=False)
    y0 = np.floor(ys).astype(int) % freq
    x0 = np.floor(xs).astype(int) % freq
    y1 = (y0 + 1) % freq
    x1 = (x0 + 1) % freq
    fy = (ys - np.floor(ys))[:, None]
    fx = (xs - np.floor(xs))[None, :]
    fy = fy * fy * (3 - 2 * fy)
    fx = fx * fx * (3 - 2 * fx)
    a = g[np.ix_(y0, x0)]
    b = g[np.ix_(y0, x1)]
    c = g[np.ix_(y1, x0)]
    d = g[np.ix_(y1, x1)]
    top = a * (1 - fx) + b * fx
    bot = c * (1 - fx) + d * fx
    return top * (1 - fy) + bot * fy

def fbm(w, h, freq, octaves, seed, gain=0.5):
    out = np.zeros((h, w), np.float32)
    amp, tot, f = 1.0, 0.0, freq
    for o in range(octaves):
        out += amp * vnoise(w, h, f, seed + o * 131)
        tot += amp
        amp *= gain
        f *= 2
    return out / tot

def warp_noise(w, h, seed, amt=18):
    """Domain-warped fbm — organic stains/clouds."""
    wx = fbm(w, h, 3, 3, seed) * amt
    wy = fbm(w, h, 3, 3, seed + 77) * amt
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    xs = np.clip(xx + wx, 0, w - 1).astype(int)
    ys = np.clip(yy + wy, 0, h - 1).astype(int)
    base = fbm(w, h, 5, 4, seed + 11)
    return base[ys, xs]

def to_img(a):
    return Image.fromarray(np.clip(a * 255, 0, 255).astype(np.uint8))

def grain(a, amt=0.05, seed=5):
    n = np.random.default_rng(seed).normal(0, amt, a.shape[:2]).astype(np.float32)
    return np.clip(a + n[..., None], 0, 1)

def wrap_draw(size, fn):
    """Call fn(draw, ox, oy) for 9 offsets so shapes wrap seamlessly."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for ox in (-size, 0, size):
        for oy in (-size, 0, size):
            fn(ImageDraw.Draw(img), ox, oy)
    return img

def overlay(base_img, layer):
    # paste with alpha mask mutates in place for RGB or RGBA bases
    base_img.paste(layer, (0, 0), layer)
    return base_img

def finish(arr, tint=None, contrast=1.0, bright=1.0):
    a = arr.astype(np.float32)
    m = a.mean()
    a = np.clip((a - m) * contrast + m, 0, 1) * bright
    if tint is not None:
        a = a * np.array(tint, np.float32)[None, None, :]
    return grain(a, 0.030)

def stain_layer(size, n, colors, rmin, rmax, alpha=(30, 90), seed=1, blur=8):
    """Random organic stains that wrap at tile edges."""
    r = random.Random(seed)
    def paint(d, ox, oy):
        for i in range(n):
            cx = r.uniform(0, size) + ox
            cy = r.uniform(0, size) + oy
            rad = r.uniform(rmin, rmax)
            col = colors[r.randrange(len(colors))]
            a = r.randint(alpha[0], alpha[1])
            d.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=col + (a,))
    layer = wrap_draw(size, paint).filter(ImageFilter.GaussianBlur(blur))
    return layer

def drip_layer(size, n, colors, seed=1, blur=2):
    r = random.Random(seed)
    def paint(d, ox, oy):
        for i in range(n):
            cx = r.uniform(0, size) + ox
            cy = r.uniform(-20, size * 0.4) + oy
            ln = r.uniform(size * 0.2, size * 0.75)
            w = r.uniform(2, 6)
            col = colors[r.randrange(len(colors))]
            a = r.randint(70, 150)
            d.line([cx, cy, cx + r.uniform(-3, 3), cy + ln], fill=col + (a,), width=int(w))
            d.ellipse([cx - w, cy + ln - w, cx + w, cy + ln + w], fill=col + (a,))
    return wrap_draw(size, paint).filter(ImageFilter.GaussianBlur(blur))

def cracks(size, n, seed, color=(0, 0, 0), alpha=160, width=2):
    r = random.Random(seed)
    def paint(d, ox, oy):
        for i in range(n):
            x = r.uniform(0, size) + ox
            y = r.uniform(0, size) + oy
            steps = r.randint(6, 14)
            ang = r.uniform(0, 6.28)
            for s in range(steps):
                nx = x + math.cos(ang) * r.uniform(8, 26)
                ny = y + math.sin(ang) * r.uniform(8, 26)
                d.line([x, y, nx, ny], fill=color + (alpha,), width=width)
                x, y = nx, ny
                ang += r.uniform(-0.9, 0.9)
    return wrap_draw(size, paint).filter(ImageFilter.GaussianBlur(1))

def normalize(a):
    lo, hi = a.min(), a.max()
    return (a - lo) / max(hi - lo, 1e-5)

# ---------------------------------------------------------------- painters
W = H = TILE

def t_mossy_brick():
    bh, bw = 32, 64
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    row = np.floor(yy / bh).astype(int)
    off = (row % 2) * (bw // 2)
    bx = ((xx + off) % bw) / bw
    by = (yy % bh) / bh
    mortar = (bx < 0.055) | (bx > 0.945) | (by < 0.10) | (by > 0.90)
    mortar = mortar | (np.abs(bx - 0.5) < 0.02)
    bricknoise = fbm(W, H, 8, 4, 11)
    base = np.zeros((H, W, 3), np.float32)
    brick = np.array([0.30, 0.26, 0.23], np.float32)[None, None, :] + (bricknoise - 0.5)[..., None] * 0.14
    base[:] = brick
    mrow = fbm(W, H, 6, 3, 21)
    base[mortar] = np.array([0.20, 0.19, 0.18], np.float32) * (0.8 + mrow[mortar] * 0.4)[..., None]
    img = to_img(finish(base, contrast=1.1))
    moss = warp_noise(W, H, 33, 26)
    moss_a = np.clip((moss - 0.62) * 2.6, 0, 1) * 200
    moss_col = np.zeros((H, W, 4), np.uint8)
    moss_col[..., 0] = 60; moss_col[..., 1] = 95; moss_col[..., 2] = 45
    moss_col[..., 3] = moss_a.astype(np.uint8)
    overlay(img, Image.fromarray(moss_col, "RGBA").filter(ImageFilter.GaussianBlur(3)))
    overlay(img, cracks(TILE, 5, 44, alpha=110, width=1))
    overlay(img, stain_layer(TILE, 5, [(10, 8, 6)], 20, 55, (35, 80), 55, 12))
    return np.asarray(img, np.float32) / 255

def t_wallpaper():
    # aged green damask wallpaper with peeling patches (Silent-Hill hallway, like the video)
    base = np.zeros((H, W, 3), np.float32)
    base[:] = np.array([0.36, 0.38, 0.27], np.float32)
    stripe = (np.sin(np.linspace(0, np.pi * 16, W)) * 0.5 + 0.5) * 0.03
    base += stripe[None, :, None]
    img = to_img(finish(base, contrast=1.05))
    d = ImageDraw.Draw(img)
    rr = random.Random(9)
    for gy in range(4):
        for gx in range(4):
            cx, cy = gx * 64 + 32, gy * 64 + 32
            col = (52, 66, 40, 120)
            d.ellipse([cx - 12, cy - 16, cx + 12, cy + 16], outline=col, width=3)
            d.ellipse([cx - 6, cy - 9, cx + 6, cy + 9], outline=col, width=2)
            for a2 in range(4):
                an = a2 * math.pi / 2 + 0.6
                x2 = cx + math.cos(an) * 20; y2 = cy + math.sin(an) * 22
                d.line([cx + math.cos(an) * 8, cy + math.sin(an) * 9, x2, y2], fill=col, width=2)
                d.ellipse([x2 - 4, y2 - 4, x2 + 4, y2 + 4], fill=col)
    img = img.filter(ImageFilter.GaussianBlur(1))
    # peeling patches → plaster beneath
    r = random.Random(31)
    peel = Image.new("RGBA", (TILE, TILE), (0, 0, 0, 0))
    pd = ImageDraw.Draw(peel)
    for i in range(4):
        cx, cy = r.uniform(0, TILE), r.uniform(0, TILE)
        rad = r.uniform(26, 60)
        for ox in (-TILE, 0, TILE):
            for oy in (-TILE, 0, TILE):
                pts = []
                for k in range(12):
                    an = k / 12 * 6.28
                    rd = rad * r.uniform(0.55, 1.25)
                    pts.append((cx + ox + math.cos(an) * rd, cy + oy + math.sin(an) * rd * 0.8))
                pd.polygon(pts, fill=(150, 138, 118, 210))
    overlay(img, peel.filter(ImageFilter.GaussianBlur(2)))
    overlay(img, stain_layer(TILE, 7, [(30, 26, 14), (18, 20, 12)], 14, 44, (40, 100), 61, 10))
    overlay(img, cracks(TILE, 4, 71, alpha=90, width=1))
    return np.asarray(img, np.float32) / 255

def t_stone():
    bh, bw = 64, 128
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    row = np.floor(yy / bh).astype(int)
    off = (row % 2) * (bw // 2)
    bx = ((xx + off) % bw) / bw
    by = (yy % bh) / bh
    gap = (bx < 0.03) | (bx > 0.97) | (by < 0.035) | (by > 0.965)
    n = fbm(W, H, 7, 5, 101)
    base = np.array([0.32, 0.33, 0.34], np.float32)[None, None, :] * (0.75 + n * 0.5)[..., None]
    # per-block tint
    for rr in range(H // bh):
        for cc in range(2):
            tone = 0.85 + 0.3 * ((rr * 3 + cc * 7) % 5) / 5
            x_lo = cc * bw - (rr % 2) * bw // 2
            x_hi = x_lo + bw
            mask = (yy >= rr * bh) & (yy < (rr + 1) * bh) & (xx >= x_lo % W if x_lo >= 0 else True) & False
    img = to_img(finish(base, contrast=1.15))
    overlay(img, cracks(TILE, 7, 103, alpha=140, width=2))
    overlay(img, stain_layer(TILE, 6, [(20, 22, 18), (35, 30, 20)], 16, 50, (30, 80), 105, 12))
    d = ImageDraw.Draw(img)
    for rr in range(0, H, bh):
        d.line([0, rr, W, rr], fill=(12, 12, 12, 190), width=2)
        shift = (rr // bh) % 2 * bw // 2
        for cc in range(0, W + bw, bw):
            x = (cc + shift) % W
            d.line([x, rr, x, min(rr + bh, H)], fill=(12, 12, 12, 190), width=2)
    return np.asarray(img, np.float32) / 255

def t_wood_wall():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    plank = 32
    row = np.floor(xx / plank).astype(int)
    grainx = (xx % plank) / plank
    warp = fbm(W, H, 4, 3, 200) * 6
    g = np.sin((yy + warp + row * 40) * 0.35) * 0.5 + 0.5
    n = fbm(W, H, 12, 4, 201)
    base = np.array([0.34, 0.26, 0.18], np.float32)[None, None, :] * (0.72 + g * 0.22 + n * 0.16)[..., None]
    img = to_img(finish(base, contrast=1.12))
    d = ImageDraw.Draw(img)
    for r2 in range(0, W, plank):
        d.line([r2, 0, r2, H], fill=(10, 6, 4, 200), width=2)
    rr = random.Random(202)
    for i in range(5):
        px = rr.uniform(0, TILE); py = rr.uniform(0, TILE)
        rad = rr.uniform(3, 6)
        d.ellipse([px - rad, py - rad, px + rad, py + rad], fill=(52, 38, 24, 235))
        d.ellipse([px - rad * 0.5, py - rad * 0.5, px + rad * 0.5, py + rad * 0.5], fill=(28, 20, 12, 235))
    overlay(img, stain_layer(TILE, 4, [(24, 16, 8)], 18, 48, (30, 70), 205, 10))
    return np.asarray(img, np.float32) / 255

def t_door():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(58, 42, 26))
    # panels
    for (x0, y0, x1, y1) in [(28, 20, W - 28, H // 2 - 14), (28, H // 2 + 14, W - 28, H - 46)]:
        d.rectangle([x0, y0, x1, y1], fill=(72, 52, 30), outline=(30, 20, 12), width=4)
        d.rectangle([x0 + 10, y0 + 10, x1 - 10, y1 - 10], outline=(38, 28, 16), width=3)
    # planks vertical shading
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    g = np.sin(xx * 0.5) * 0.5 + 0.5
    base = np.asarray(img, np.float32) / 255
    base *= (0.92 + g * 0.16)[..., None]
    img = to_img(np.clip(base, 0, 1))
    d = ImageDraw.Draw(img)
    # iron ring handle
    d.ellipse([W // 2 - 20, H // 2 + 4, W // 2 + 20, H // 2 + 44], outline=(70, 66, 60), width=6)
    d.ellipse([W // 2 - 10, H // 2 + 14, W // 2 + 10, H // 2 + 34], outline=(28, 26, 24), width=4)
    d.rectangle([W // 2 - 6, H // 2 - 8, W // 2 + 6, H // 2 + 12], fill=(50, 46, 42))
    # hinges
    for hy in (40, H - 90):
        d.rectangle([10, hy, 26, hy + 30], fill=(55, 50, 44))
        for k in range(3):
            d.rectangle([12, hy + 4 + k * 9, 24, hy + 9 + k * 9], fill=(30, 28, 26))
    overlay(img, stain_layer(TILE, 5, [(20, 14, 6)], 16, 44, (40, 80), 301, 10))
    overlay(img, cracks(TILE, 3, 302, alpha=90, width=1))
    return np.asarray(img, np.float32) / 255

def t_iron_gate():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(10, 10, 12))
    # rusty bars
    bar = (86, 62, 40)
    for x in range(10, W, 26):
        d.rectangle([x - 5, 0, x + 5, H], fill=bar)
        d.rectangle([x - 2, 0, x + 2, H], fill=(120, 88, 52))
    for y in (30, H // 2, H - 30):
        d.rectangle([0, y - 6, W, y + 6], fill=bar)
        d.rectangle([0, y - 2, W, y + 2], fill=(110, 80, 48))
    # rivets
    rr = random.Random(401)
    for x in range(0, W, 26):
        d.ellipse([x - 8, 24, x - 2, 30], fill=(40, 30, 22))
        d.ellipse([x + 2, H - 36, x + 8, H - 30], fill=(40, 30, 22))
    overlay(img, stain_layer(TILE, 8, [(60, 34, 12), (30, 20, 10)], 10, 34, (50, 110), 402, 8))
    return np.asarray(img, np.float32) / 255

def t_window():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    # night sky through window
    sky = np.zeros((H, W, 3), np.float32)
    yy = np.linspace(0, 1, H)[:, None]
    top = np.array([0.10, 0.13, 0.22]); bot = np.array([0.04, 0.05, 0.09])
    sky[:] = top * (1 - yy) + bot * yy
    stars = (rng.random((H, W)) > 0.9985).astype(np.float32)
    sky += stars[..., None] * 0.8
    img = to_img(np.clip(sky, 0, 1))
    d = ImageDraw.Draw(img)
    # mountains
    d.polygon([(0, H), (40, 190), (95, H)], fill=(6, 6, 10))
    d.polygon([(60, H), (140, 160), (220, H)], fill=(5, 5, 8))
    # moon
    d.ellipse([W - 92, 40, W - 44, 88], fill=(200, 190, 170))
    d.ellipse([W - 84, 50, W - 78, 58], fill=(170, 165, 150))
    d.ellipse([W - 62, 62, W - 54, 70], fill=(175, 168, 152))
    # dead tree silhouette
    d.line([70, H, 64, 120], fill=(4, 4, 6), width=6)
    d.line([64, 130, 40, 96], fill=(4, 4, 6), width=4)
    d.line([66, 140, 92, 110], fill=(4, 4, 6), width=4)
    # frame + cross
    d.rectangle([0, 0, W, 18], fill=(38, 28, 18))
    d.rectangle([0, H - 18, W, H], fill=(38, 28, 18))
    d.rectangle([0, 0, 18, H], fill=(38, 28, 18))
    d.rectangle([W - 18, 0, W, H], fill=(38, 28, 18))
    d.rectangle([W // 2 - 9, 0, W // 2 + 9, H], fill=(38, 28, 18))
    d.rectangle([0, H // 2 - 9, W, H // 2 + 9], fill=(38, 28, 18))
    d.rectangle([6, 6, W - 6, H - 6], outline=(20, 14, 8), width=3)
    return np.asarray(img, np.float32) / 255

def t_blood():
    base = np.array([0.44, 0.42, 0.38], np.float32)[None, None, :] * (0.8 + fbm(W, H, 8, 4, 501) * 0.4)[..., None]
    img = to_img(finish(base, contrast=1.05))
    overlay(img, drip_layer(TILE, 6, [(120, 10, 10), (90, 6, 6)], 502, 2))
    overlay(img, stain_layer(TILE, 5, [(110, 12, 12)], 10, 26, (90, 170), 503, 4))
    overlay(img, cracks(TILE, 4, 504, alpha=80, width=1))
    return np.asarray(img, np.float32) / 255

def t_bookshelf():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(30, 22, 14))
    rr = random.Random(601)
    shelf_h = H // 3
    for s in range(3):
        y0 = s * shelf_h
        y1 = y0 + shelf_h - 14
        d.rectangle([0, y1, W, y1 + 14], fill=(48, 34, 20))
        x = 8
        while x < W - 12:
            bw2 = rr.uniform(10, 22)
            bh2 = rr.uniform(shelf_h - 44, shelf_h - 24)
            cols = [(70, 44, 34), (46, 60, 44), (58, 50, 70), (80, 66, 34), (40, 44, 56), (66, 30, 28)]
            col = cols[rr.randrange(len(cols))]
            d.rectangle([x, y1 - bh2, x + bw2, y1], fill=col)
            d.rectangle([x + 2, y1 - bh2 + 3, x + bw2 - 2, y1 - 3], outline=(20, 14, 10), width=1)
            x += int(bw2) + rr.randint(1, 4)
    d.rectangle([0, 0, W, 10], fill=(52, 38, 22))
    overlay(img, stain_layer(TILE, 3, [(16, 10, 4)], 20, 50, (40, 70), 602, 12))
    return np.asarray(img, np.float32) / 255

def t_mansion_wall():
    # upper damaged plaster + lower wood wainscot
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    split = int(H * 0.62)
    plaster = np.array([0.46, 0.44, 0.40], np.float32) * (0.82 + fbm(W, split, 8, 4, 701) * 0.30)[..., None]
    img.paste(to_img(np.clip(grain(plaster, 0.03, 11), 0, 1)), (0, 0))
    wood = np.array([0.30, 0.22, 0.15], np.float32) * (0.8 + fbm(W, H - split, 6, 3, 702) * 0.3)[..., None]
    img.paste(to_img(np.clip(grain(wood, 0.03, 12), 0, 1)), (0, split))
    d = ImageDraw.Draw(img)
    d.rectangle([0, split - 6, W, split + 6], fill=(52, 38, 24))
    d.rectangle([0, split - 6, W, split - 2], fill=(80, 60, 36))
    for x in range(0, W, 42):
        d.line([x, split + 8, x, H], fill=(30, 20, 12, 180), width=2)
    d.rectangle([0, H - 14, W, H], fill=(36, 26, 16))
    overlay(img, stain_layer(TILE, 6, [(40, 34, 22), (20, 22, 14)], 14, 48, (40, 95), 703, 10))
    overlay(img, cracks(TILE, 4, 704, alpha=110, width=1))
    return np.asarray(img, np.float32) / 255

def t_concrete():
    n = fbm(W, H, 6, 5, 801)
    base = np.array([0.30, 0.30, 0.29], np.float32)[None, None, :] * (0.78 + n * 0.42)[..., None]
    img = to_img(finish(base, contrast=1.1))
    # water streaks
    streak = drip_layer(TILE, 5, [(20, 22, 20)], 802, 6)
    overlay(img, streak)
    overlay(img, cracks(TILE, 6, 803, alpha=130, width=2))
    overlay(img, stain_layer(TILE, 5, [(14, 16, 12)], 18, 52, (35, 80), 804, 12))
    return np.asarray(img, np.float32) / 255

def t_rune():
    n = fbm(W, H, 5, 4, 901)
    base = np.array([0.16, 0.14, 0.16], np.float32)[None, None, :] * (0.7 + n * 0.5)[..., None]
    img = to_img(finish(base, contrast=1.15))
    d = ImageDraw.Draw(img)
    cx, cy, R = W // 2, H // 2, 92
    # pentagram
    pts = []
    for k in range(5):
        an = -math.pi / 2 + k * 2 * math.pi / 5
        pts.append((cx + math.cos(an) * R, cy + math.sin(an) * R))
    col = (150, 24, 24, 220)
    d.ellipse([cx - R, cy - R, cx + R, cy + R], outline=col, width=4)
    for k in range(5):
        d.line([pts[k], pts[(k + 2) % 5]], fill=col, width=3)
    # scratches
    overlay(img, cracks(TILE, 5, 902, alpha=100, width=1))
    overlay(img, stain_layer(TILE, 4, [(60, 8, 8)], 14, 40, (40, 90), 903, 8))
    return np.asarray(img, np.float32) / 255

def t_fence():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(14, 16, 12))
    pw = 30
    for i, x in enumerate(range(0, W, pw)):
        top = 18 + (i % 3) * 6
        d.polygon([(x + 4, top + 12), (x + pw - 4, top + 12), (x + pw / 2, top)], fill=(44, 36, 24))
        d.rectangle([x + 4, top + 12, x + pw - 4, H], fill=(40, 33, 22))
        d.rectangle([x + 8, top + 16, x + pw - 8, H], fill=(52, 43, 30))
    d.rectangle([0, H * 0.42, W, H * 0.42 + 10], fill=(30, 24, 16))
    d.rectangle([0, H * 0.74, W, H * 0.74 + 10], fill=(30, 24, 16))
    overlay(img, stain_layer(TILE, 5, [(18, 22, 12)], 12, 34, (45, 90), 1001, 8))
    return np.asarray(img, np.float32) / 255

def t_bark():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    warp = fbm(W, H, 5, 3, 1101) * 14
    ridge = (np.sin((xx * 3.2 + warp) * 0.5) * 0.5 + 0.5)
    n = fbm(W, H, 12, 4, 1102)
    base = np.array([0.23, 0.20, 0.17], np.float32)[None, None, :] * (0.55 + ridge * 0.45 + n * 0.22)[..., None]
    img = to_img(finish(base, contrast=1.2))
    overlay(img, cracks(TILE, 6, 1103, alpha=120, width=2))
    overlay(img, stain_layer(TILE, 4, [(30, 42, 20)], 12, 30, (40, 80), 1104, 8))
    return np.asarray(img, np.float32) / 255

def t_exit_gate():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(12, 12, 14))
    for x in range(6, W, 22):
        d.rectangle([x - 4, 0, x + 4, H], fill=(52, 54, 58))
        d.rectangle([x - 1, 0, x + 2, H], fill=(78, 80, 84))
    for y in (24, H - 24):
        d.rectangle([0, y - 5, W, y + 5], fill=(60, 62, 66))
    # keypad box
    d.rectangle([W // 2 - 34, H // 2 - 46, W // 2 + 34, H // 2 + 46], fill=(24, 24, 26), outline=(70, 70, 74), width=3)
    d.rectangle([W // 2 - 24, H // 2 - 36, W // 2 + 24, H // 2 - 16], fill=(90, 20, 16))
    for r2 in range(3):
        for cc in range(3):
            bx = W // 2 - 18 + cc * 13; by = H // 2 - 6 + r2 * 13
            d.rectangle([bx, by, bx + 9, by + 9], fill=(46, 46, 50), outline=(20, 20, 22))
    d.text = None
    overlay(img, stain_layer(TILE, 5, [(50, 30, 14)], 10, 28, (40, 90), 1201, 6))
    return np.asarray(img, np.float32) / 255

def t_painting():
    img = to_img(np.zeros((H, W, 3), np.float32))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, H], fill=(42, 34, 20))
    d.rectangle([10, 10, W - 10, H - 10], fill=(120, 100, 50))
    d.rectangle([18, 18, W - 18, H - 18], fill=(28, 26, 24))
    # dim portrait: pale face, dark eyes
    d.ellipse([W // 2 - 44, 66, W // 2 + 44, 168], fill=(150, 132, 112))
    d.ellipse([W // 2 - 58, 46, W // 2 + 58, 120], fill=(26, 20, 16))  # hair
    d.ellipse([W // 2 - 40, 58, W // 2 + 40, 160], fill=(148, 130, 110))
    d.ellipse([W // 2 - 26, 96, W // 2 - 10, 108], fill=(10, 8, 8))
    d.ellipse([W // 2 + 10, 96, W // 2 + 26, 108], fill=(10, 8, 8))
    d.line([W // 2 - 14, 136, W // 2 + 14, 136], fill=(60, 30, 26), width=3)
    d.rectangle([W // 2 - 40, 168, W // 2 + 40, H - 24], fill=(22, 20, 20))
    overlay(img, stain_layer(TILE, 4, [(14, 10, 6)], 16, 44, (60, 110), 1301, 10))
    overlay(img, cracks(TILE, 3, 1302, alpha=70, width=1))
    return np.asarray(img, np.float32) / 255

# ---------------- floors
def t_wood_floor():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    plank = 42
    row = np.floor(yy / plank).astype(int)
    warp = fbm(W, H, 4, 3, 1401) * 5
    g = np.sin((xx + warp + row * 55) * 0.30) * 0.5 + 0.5
    n = fbm(W, H, 10, 4, 1402)
    base = np.array([0.30, 0.24, 0.17], np.float32)[None, None, :] * (0.72 + g * 0.2 + n * 0.18)[..., None]
    img = to_img(finish(base, contrast=1.12))
    d = ImageDraw.Draw(img)
    for r2 in range(0, H, plank):
        d.line([0, r2, W, r2], fill=(12, 8, 5, 200), width=2)
        seam = random.Random(1400 + r2).uniform(0.2, 0.8)
        d.line([int(W * seam), r2, int(W * seam), min(r2 + plank, H)], fill=(14, 10, 6, 160), width=2)
    overlay(img, stain_layer(TILE, 5, [(22, 15, 8)], 16, 46, (35, 75), 1403, 10))
    return np.asarray(img, np.float32) / 255

def t_checker_floor():
    cell = 32
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    ck = ((np.floor(xx / cell).astype(int) + np.floor(yy / cell).astype(int)) % 2).astype(np.float32)
    n = fbm(W, H, 8, 4, 1501)
    light = np.array([0.50, 0.50, 0.47], np.float32)
    dark = np.array([0.14, 0.14, 0.15], np.float32)
    base = (light[None, None, :] * ck[..., None] + dark[None, None, :] * (1 - ck[..., None])) * (0.8 + n * 0.4)[..., None]
    img = to_img(finish(base, contrast=1.1))
    d = ImageDraw.Draw(img)
    for r2 in range(0, H, cell):
        d.line([0, r2, W, r2], fill=(8, 8, 8, 140), width=2)
        d.line([r2, 0, r2, H], fill=(8, 8, 8, 140), width=2)
    overlay(img, stain_layer(TILE, 8, [(24, 20, 10), (40, 14, 10), (16, 18, 12)], 10, 38, (45, 110), 1502, 9))
    overlay(img, cracks(TILE, 4, 1503, alpha=90, width=1))
    return np.asarray(img, np.float32) / 255

def t_dirt():
    n = warp_noise(W, H, 1601, 22)
    base = np.array([0.24, 0.22, 0.15], np.float32)[None, None, :] * (0.65 + n * 0.7)[..., None]
    img = to_img(finish(base, contrast=1.15))
    # grass tufts
    rr = random.Random(1602)
    d = ImageDraw.Draw(img)
    for i in range(26):
        cx, cy = rr.uniform(0, TILE), rr.uniform(0, TILE)
        col = (44, 58, 26, 200)
        for k in range(5):
            an = rr.uniform(0, 6.28)
            ln = rr.uniform(4, 11)
            d.line([cx, cy, cx + math.cos(an) * ln, cy + math.sin(an) * ln], fill=col, width=2)
    # pebbles
    for i in range(14):
        cx, cy = rr.uniform(0, TILE), rr.uniform(0, TILE)
        rad = rr.uniform(2, 5)
        d.ellipse([cx - rad, cy - rad * 0.7, cx + rad, cy + rad * 0.7], fill=(70, 66, 58, 220))
    return np.asarray(img, np.float32) / 255

def t_stone_floor():
    bh, bw = 64, 64
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    row = np.floor(yy / bh).astype(int)
    off = (row % 2) * (bw // 2)
    bx = ((xx + off) % bw) / bw
    by = (yy % bh) / bh
    gap = (bx < 0.04) | (bx > 0.96) | (by < 0.05) | (by > 0.95)
    n = fbm(W, H, 8, 5, 1701)
    base = np.array([0.34, 0.33, 0.31], np.float32)[None, None, :] * (0.75 + n * 0.42)[..., None]
    img = to_img(finish(base, contrast=1.12))
    d = ImageDraw.Draw(img)
    for r2 in range(0, H, bh):
        shift = (r2 // bh) % 2 * bw // 2
        d.line([0, r2, W, r2], fill=(12, 12, 12, 200), width=2)
        for cc in range(0, W + bw, bw):
            x = (cc + shift) % W
            d.line([x, r2, x, min(r2 + bh, H)], fill=(12, 12, 12, 200), width=2)
    overlay(img, stain_layer(TILE, 6, [(20, 22, 16)], 12, 40, (40, 95), 1702, 10))
    return np.asarray(img, np.float32) / 255

def t_cobble():
    rr = random.Random(1801)
    img = Image.new("RGB", (TILE, TILE), (16, 16, 14))
    stones = []
    for gy in range(5):
        for gx in range(6):
            cx = gx * 44 + (gy % 2) * 22 + rr.uniform(-4, 4)
            cy = gy * 52 + rr.uniform(-4, 4)
            rad = rr.uniform(16, 22)
            tone = rr.uniform(0.55, 1.0)
            col = (int(58 * tone), int(56 * tone), int(50 * tone))
            for ox in (-TILE, 0, TILE):
                for oy in (-TILE, 0, TILE):
                    d = ImageDraw.Draw(img)
                    d.ellipse([cx + ox - rad, cy + oy - rad * 0.8, cx + ox + rad, cy + oy + rad * 0.8], fill=col)
    a = np.asarray(img, np.float32) / 255
    n = fbm(W, H, 10, 4, 1802)
    a *= (0.8 + n * 0.35)[..., None]
    return finish(a, contrast=1.1)

def t_cave_floor():
    n = warp_noise(W, H, 1901, 26)
    base = np.array([0.16, 0.15, 0.14], np.float32)[None, None, :] * (0.55 + n * 0.85)[..., None]
    img = to_img(finish(base, contrast=1.2))
    overlay(img, cracks(TILE, 5, 1902, alpha=110, width=2))
    return np.asarray(img, np.float32) / 255

def t_carpet():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    n = fbm(W, H, 14, 4, 2001)
    base = np.array([0.30, 0.08, 0.08], np.float32)[None, None, :] * (0.7 + n * 0.45)[..., None]
    # worn border pattern
    pat = (np.sin(xx * 0.14) * np.sin(yy * 0.14) > 0.4).astype(np.float32) * 0.25
    base *= (1 - pat[..., None])
    img = to_img(finish(base, contrast=1.05))
    overlay(img, stain_layer(TILE, 5, [(16, 10, 6)], 14, 40, (40, 90), 2002, 10))
    return np.asarray(img, np.float32) / 255

def t_mud():
    n = warp_noise(W, H, 2101, 30)
    base = np.array([0.15, 0.13, 0.10], np.float32)[None, None, :] * (0.6 + n * 0.8)[..., None]
    img = to_img(finish(base, contrast=1.15))
    # puddle sheen
    wet = np.clip((fbm(W, H, 4, 3, 2102) - 0.62) * 3, 0, 1)
    img = to_img(np.clip(np.asarray(img, np.float32) / 255 + wet[..., None] * 0.10, 0, 1))
    return np.asarray(img, np.float32) / 255

# ---------------- ceilings
def t_plaster_ceil():
    n = fbm(W, H, 5, 4, 2201)
    base = np.array([0.36, 0.36, 0.34], np.float32)[None, None, :] * (0.8 + n * 0.35)[..., None]
    img = to_img(finish(base, contrast=1.05))
    # water stains (brownish rings)
    rr = random.Random(2202)
    d = ImageDraw.Draw(img)
    for i in range(4):
        cx, cy = rr.uniform(0, TILE), rr.uniform(0, TILE)
        rad = rr.uniform(24, 55)
        for ox in (-TILE, 0, TILE):
            for oy in (-TILE, 0, TILE):
                for k in range(3):
                    rr2 = rad * (1 - k * 0.22)
                    d.ellipse([cx + ox - rr2, cy + oy - rr2, cx + ox + rr2, cy + oy + rr2],
                              outline=(96, 78, 52, 90 - k * 20), width=6)
    overlay(img, stain_layer(TILE, 4, [(70, 56, 34)], 20, 50, (40, 80), 2203, 12))
    overlay(img, cracks(TILE, 3, 2204, alpha=90, width=1))
    return np.asarray(img, np.float32) / 255

def t_beam_ceil():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    beamw = 52
    isbeam = ((xx % beamw) < 20).astype(np.float32)
    n = fbm(W, H, 8, 3, 2301)
    wood = np.array([0.24, 0.18, 0.12], np.float32)
    dark = np.array([0.06, 0.05, 0.05], np.float32)
    base = wood[None, None, :] * (0.75 + n * 0.4)[..., None] * isbeam[..., None] + dark[None, None, :] * (1 - isbeam[..., None])
    img = to_img(finish(base, contrast=1.12))
    d = ImageDraw.Draw(img)
    for x in range(0, W, beamw):
        d.rectangle([x, 0, x + 20, H], outline=(14, 10, 6, 160), width=2)
    overlay(img, stain_layer(TILE, 3, [(20, 12, 6)], 16, 40, (35, 70), 2302, 10))
    return np.asarray(img, np.float32) / 255

def t_rock_ceil():
    n = warp_noise(W, H, 2401, 28)
    base = np.array([0.13, 0.12, 0.12], np.float32)[None, None, :] * (0.5 + n * 0.95)[..., None]
    img = to_img(finish(base, contrast=1.25))
    overlay(img, cracks(TILE, 5, 2402, alpha=110, width=2))
    return np.asarray(img, np.float32) / 255

def t_tile_ceil():
    # grimy institutional tiles (like the corridor in the background video)
    cell = 64
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    n = fbm(W, H, 6, 4, 2501)
    base = np.array([0.44, 0.44, 0.42], np.float32)[None, None, :] * (0.78 + n * 0.32)[..., None]
    img = to_img(finish(base, contrast=1.08))
    d = ImageDraw.Draw(img)
    for r2 in range(0, H, cell):
        d.line([0, r2, W, r2], fill=(20, 20, 18, 220), width=3)
        d.line([r2, 0, r2, H], fill=(20, 20, 18, 220), width=3)
    overlay(img, stain_layer(TILE, 7, [(40, 34, 18), (60, 44, 20), (20, 22, 14)], 10, 40, (45, 110), 2502, 9))
    overlay(img, cracks(TILE, 3, 2503, alpha=80, width=1))
    return np.asarray(img, np.float32) / 255

def t_wood_ceil():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    plank = 36
    row = np.floor(yy / plank).astype(int)
    g = np.sin(xx * 0.28 + row * 40) * 0.5 + 0.5
    n = fbm(W, H, 10, 4, 2601)
    base = np.array([0.22, 0.17, 0.12], np.float32)[None, None, :] * (0.7 + g * 0.2 + n * 0.2)[..., None]
    img = to_img(finish(base, contrast=1.12))
    d = ImageDraw.Draw(img)
    for r2 in range(0, H, plank):
        d.line([0, r2, W, r2], fill=(8, 6, 4, 200), width=2)
    return np.asarray(img, np.float32) / 255

def t_dark_void():
    n = fbm(W, H, 4, 3, 2701)
    base = np.array([0.015, 0.015, 0.02], np.float32)[None, None, :] * (0.6 + n * 0.6)[..., None]
    return finish(base, contrast=1.0)

def t_concrete_ceil():
    n = fbm(W, H, 5, 4, 2801)
    base = np.array([0.26, 0.26, 0.25], np.float32)[None, None, :] * (0.75 + n * 0.4)[..., None]
    img = to_img(finish(base, contrast=1.1))
    overlay(img, drip_layer(TILE, 4, [(20, 22, 20)], 2802, 6))
    overlay(img, cracks(TILE, 4, 2803, alpha=110, width=2))
    return np.asarray(img, np.float32) / 255

def t_red_ceil():
    n = fbm(W, H, 5, 4, 2901)
    base = np.array([0.16, 0.05, 0.05], np.float32)[None, None, :] * (0.7 + n * 0.5)[..., None]
    img = to_img(finish(base, contrast=1.15))
    overlay(img, stain_layer(TILE, 5, [(70, 8, 8)], 14, 42, (40, 90), 2902, 10))
    return np.asarray(img, np.float32) / 255

# ---------------------------------------------------------------- assemble
PAINTERS = {
    0: t_mossy_brick, 1: t_wallpaper, 2: t_stone, 3: t_wood_wall,
    4: t_door, 5: t_iron_gate, 6: t_window, 7: t_blood,
    8: t_bookshelf, 9: t_mansion_wall, 10: t_concrete, 11: t_rune,
    12: t_fence, 13: t_bark, 14: t_exit_gate, 15: t_painting,
    16: t_wood_floor, 17: t_checker_floor, 18: t_dirt, 19: t_stone_floor,
    20: t_cobble, 21: t_cave_floor, 22: t_carpet, 23: t_mud,
    24: t_plaster_ceil, 25: t_beam_ceil, 26: t_rock_ceil, 27: t_wood_ceil,
    28: t_tile_ceil, 29: t_dark_void, 30: t_concrete_ceil, 31: t_red_ceil,
}

atlas = Image.new("RGB", (SIZE, SIZE), (2, 2, 3))
for idx, fn in PAINTERS.items():
    tile = fn()  # float 0..1
    im = Image.fromarray(np.clip(tile * 255, 0, 255).astype(np.uint8))
    tx = (idx % GRID) * TILE
    ty = (idx // GRID) * TILE
    atlas.paste(im, (tx, ty))
    print("tile", idx, "ok")

atlas.save("/home/z/my-project/hollowvale-native/app/src/main/res/drawable-nodpi/atlas.png", optimize=True)
print("atlas saved", atlas.size)
