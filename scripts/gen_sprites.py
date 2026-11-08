#!/usr/bin/env python3
# HOLLOW VALE v5 — sprite sheet 1024x1024 (8x8 grid of 128px cells, drawn at 4x and downsampled)
# Tile indices MUST match World.java (T_HUNTER0..T_LEVER) and tileForItem().
import math, random
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

GRID = 8
CELL = 128
SS = 4                      # supersample factor
CS = CELL * SS              # 512 working canvas per cell

def cell_canvas():
    return Image.new("RGBA", (CS, CS), (0, 0, 0, 0))

def finish_cell(img):
    return img.resize((CELL, CELL), Image.LANCZOS)

def noise_shade(img, amt=14, seed=7):
    """Add subtle per-pixel shading so flat fills feel textured."""
    arr = np.asarray(img, np.float32)
    n = np.random.default_rng(seed).normal(0, amt, arr.shape[:2])[..., None]
    arr[..., :3] = np.clip(arr[..., :3] + n, 0, 255)
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA")

def glow(img, cx, cy, rad, color, steps=4):
    """Soft additive aura: blurred ellipse layer composited over the sprite."""
    lay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    dl = ImageDraw.Draw(lay)
    dl.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=color + (64,))
    lay = lay.filter(ImageFilter.GaussianBlur(max(1.0, rad * 0.38)))
    img.alpha_composite(lay)

def shadow(d, cx, gy, w, alpha=120):
    d.ellipse([cx - w, gy - w * 0.22, cx + w, gy + w * 0.22], fill=(0, 0, 0, alpha))

def jagged(d, pts, seed, jag=6, fill=(0, 0, 0, 255)):
    """Polygon with torn edges (tattered cloth)."""
    rr = random.Random(seed)
    out = []
    for i in range(len(pts)):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % len(pts)]
        out.append((x0, y0))
        for k in range(1, 3):
            t = k / 3
            mx = x0 + (x1 - x0) * t + rr.uniform(-jag, jag)
            my = y0 + (y1 - y0) * t + rr.uniform(-jag, jag)
            out.append((mx, my))
    d.polygon(out, fill=fill)

# ---------------------------------------------------------------- creatures
def hunter_frame(pose, seed):
    """Dark hunched hunter — fills ~90% of the cell height (engine maps cell to sprite size)."""
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    cx = CS * 0.5
    gy = CS * 0.97                      # ground line
    TOP = CS * 0.07                     # top of head
    H = gy - TOP
    dark = (13, 11, 15, 255)
    dark2 = (24, 20, 28, 255)
    skin = (46, 38, 42, 255)
    shadow(d, cx, gy, 150)
    lean = pose.get("lean", 0) * CS * 0.010
    # legs
    hipY = TOP + H * 0.60
    for (ln, hl) in [(pose.get("legL", 14), -1), (pose.get("legR", -14), 1)]:
        kx = cx + ln * CS * 0.012
        d.line([cx + lean * 0.5, hipY, kx, gy - CS * 0.05], fill=dark, width=int(CS * 0.058))
        d.line([kx, gy - CS * 0.05, kx + hl * CS * 0.02, gy - CS * 0.02], fill=dark, width=int(CS * 0.040))
    # torso — hunched, tattered
    shY = TOP + H * 0.22
    jagged(d, [(cx - CS * 0.17 + lean, shY + CS * 0.03),
               (cx - CS * 0.14 + lean * 1.2, shY - CS * 0.01),
               (cx + CS * 0.14 + lean * 1.2, shY - CS * 0.01),
               (cx + CS * 0.17 + lean, shY + CS * 0.03),
               (cx + CS * 0.12, hipY + CS * 0.02),
               (cx - CS * 0.12, hipY + CS * 0.02)], seed, jag=CS * 0.02, fill=dark)
    d.ellipse([cx - CS * 0.13 + lean, shY - CS * 0.02, cx + CS * 0.13 + lean, shY + CS * 0.10], fill=dark2)
    # arms — long, clawed, swinging
    for (sw, hl) in [(pose.get("armL", 30), -1), (pose.get("armR", -30), 1)]:
        sx = cx + hl * CS * 0.14 + lean
        sy = shY + CS * 0.04
        ex = sx + hl * CS * 0.06 + sw * CS * 0.006
        ey = sy + H * 0.34 + sw * CS * 0.004
        d.line([sx, sy, ex, ey], fill=dark, width=int(CS * 0.044))
        for k in range(-2, 3):
            d.line([ex, ey, ex + k * CS * 0.012 + hl * CS * 0.008, ey + CS * 0.045 + abs(k) * CS * 0.006],
                   fill=skin, width=int(CS * 0.008))
    # head — small, tilted forward
    hx = cx + lean * 1.6
    hy = TOP + CS * 0.055
    d.ellipse([hx - CS * 0.052, hy - CS * 0.052, hx + CS * 0.052, hy + CS * 0.052], fill=dark2)
    d.ellipse([hx - CS * 0.036, hy - CS * 0.030, hx + CS * 0.036, hy + CS * 0.044], fill=skin)
    for ex_off in (-CS * 0.020, CS * 0.020):
        ex = hx + ex_off
        ey = hy + CS * 0.004
        glow(img, ex, ey, CS * 0.036, (255, 40, 30), 4)
        d.ellipse([ex - CS * 0.010, ey - CS * 0.008, ex + CS * 0.010, ey + CS * 0.008], fill=(255, 64, 44, 255))
    if pose.get("mouth"):
        d.ellipse([hx - CS * 0.020, hy + CS * 0.020, hx + CS * 0.020, hy + CS * 0.046], fill=(6, 4, 4, 255))
        for k in range(-2, 3):
            d.line([hx + k * CS * 0.010, hy + CS * 0.022, hx + k * CS * 0.010, hy + CS * 0.040],
                   fill=(206, 196, 176, 200), width=int(CS * 0.004))
    return finish_cell(noise_shade(img, 10, seed))

def hunter_dead():
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    gy = CS * 0.86
    shadow(d, CS * 0.5, gy, 150, 140)
    dark = (16, 13, 18, 255)
    # crumpled body lying sideways
    jagged(d, [(CS * 0.18, gy), (CS * 0.30, gy - 70), (CS * 0.52, gy - 92),
               (CS * 0.72, gy - 60), (CS * 0.84, gy)], 77, jag=10, fill=dark)
    # arm flopped out
    d.line([CS * 0.52, gy - 60, CS * 0.70, gy - 18], fill=dark, width=int(16))
    # head
    d.ellipse([CS * 0.62, gy - 108, CS * 0.78, gy - 74], fill=(30, 24, 30, 255))
    d.ellipse([CS * 0.66, gy - 100, CS * 0.76, gy - 78], fill=(52, 40, 44, 255))
    # blood pool
    d.ellipse([CS * 0.30, gy - 14, CS * 0.86, gy + 10], fill=(110, 12, 10, 200))
    d.ellipse([CS * 0.38, gy - 8, CS * 0.78, gy + 6], fill=(140, 18, 14, 220))
    return finish_cell(noise_shade(img, 9, 66))

def shadow_blob():
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    cx, gy = CS * 0.5, CS * 0.7
    for i in range(3):
        w = 120 - i * 26
        d.ellipse([cx - w, gy - w * 0.34, cx + w, gy + w * 0.34], fill=(8, 6, 10, 110 - i * 26))
    glow(img, cx - 30, gy - 30, 14, (200, 30, 24), 3)
    return finish_cell(img.filter(ImageFilter.GaussianBlur(6)))

def mother_frame(sw):
    """Ghostly bride — tall, white tattered gown, black hair veil, pale face sliver."""
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    cx = CS * 0.5 + sw * CS * 0.008
    gy = CS * 0.97
    TOP = CS * 0.05
    H = gy - TOP
    dress = (214, 210, 202, 255)
    dress2 = (182, 178, 172, 255)
    hair = (10, 8, 12, 255)
    shadow(d, cx, gy, 110, 90)
    # gown — wide torn bell
    jagged(d, [(cx - CS * 0.26, gy),
               (cx - CS * 0.17, gy - H * 0.42),
               (cx - CS * 0.10, gy - H * 0.62),
               (cx + CS * 0.10, gy - H * 0.62),
               (cx + CS * 0.17, gy - H * 0.42),
               (cx + CS * 0.26, gy)],
           91 + int(abs(sw)), jag=CS * 0.022, fill=dress)
    # fold shading
    for fx in (-CS * 0.13, -CS * 0.04, CS * 0.06, CS * 0.15):
        d.line([cx + fx, gy - CS * 0.015, cx + fx * 0.55, gy - H * 0.60], fill=dress2, width=int(CS * 0.012))
    # pale arms hanging out of sleeves
    shY = gy - H * 0.66
    for hl in (-1, 1):
        d.line([cx + hl * CS * 0.085, shY, cx + hl * CS * 0.13, shY + H * 0.22], fill=(196, 186, 182, 255), width=int(CS * 0.024))
        d.line([cx + hl * CS * 0.13, shY + H * 0.22, cx + hl * CS * 0.135, shY + H * 0.28], fill=(178, 166, 164, 255), width=int(CS * 0.020))
    # head
    headY = TOP + H * 0.10
    d.ellipse([cx - CS * 0.055, headY - CS * 0.055, cx + CS * 0.055, headY + CS * 0.055], fill=(206, 198, 192, 255))
    # black hair: crown + long streams to the waist
    d.ellipse([cx - CS * 0.062, headY - CS * 0.066, cx + CS * 0.062, headY - CS * 0.005], fill=hair)
    d.polygon([(cx - CS * 0.062, headY - CS * 0.03), (cx - CS * 0.085, headY + H * 0.22),
               (cx - CS * 0.045, headY + H * 0.24), (cx - CS * 0.030, headY + CS * 0.01)], fill=hair)
    d.polygon([(cx + CS * 0.062, headY - CS * 0.03), (cx + CS * 0.085, headY + H * 0.22),
               (cx + CS * 0.045, headY + H * 0.24), (cx + CS * 0.030, headY + CS * 0.01)], fill=hair)
    # pale face sliver under the veil
    d.ellipse([cx - CS * 0.026, headY - CS * 0.012, cx + CS * 0.026, headY + CS * 0.042], fill=(214, 204, 198, 245))
    d.ellipse([cx - CS * 0.015, headY + CS * 0.004, cx - CS * 0.005, headY + CS * 0.014], fill=(28, 20, 26, 255))
    d.ellipse([cx + CS * 0.005, headY + CS * 0.004, cx + CS * 0.015, headY + CS * 0.014], fill=(28, 20, 26, 255))
    d.line([cx - CS * 0.010, headY + CS * 0.032, cx + CS * 0.010, headY + CS * 0.032], fill=(120, 80, 80, 200), width=int(CS * 0.004))
    # cold aura
    glow(img, cx, gy - H * 0.45, CS * 0.24, (150, 170, 215), 3)
    return finish_cell(noise_shade(img, 8, 92 + int(abs(sw))))

def ghost():
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    cx = CS * 0.5
    gy = CS * 0.90
    TOP = CS * 0.10
    H = gy - TOP
    robe = (118, 128, 144, 200)
    robe2 = (88, 96, 112, 210)
    # hooded specter, floating with wispy hem
    jagged(d, [(cx - CS * 0.20, gy),
               (cx - CS * 0.13, gy - H * 0.45),
               (cx - CS * 0.07, TOP),
               (cx + CS * 0.07, TOP),
               (cx + CS * 0.13, gy - H * 0.45),
               (cx + CS * 0.20, gy)],
           111, jag=CS * 0.025, fill=robe)
    # hood — pointed cowl
    d.polygon([(cx - CS * 0.10, TOP + H * 0.24), (cx, TOP - CS * 0.01), (cx + CS * 0.10, TOP + H * 0.24),
               (cx + CS * 0.075, TOP + H * 0.30), (cx - CS * 0.075, TOP + H * 0.30)], fill=robe2)
    # hollow face
    d.ellipse([cx - CS * 0.055, TOP + H * 0.08, cx + CS * 0.055, TOP + H * 0.24], fill=(6, 8, 14, 235))
    d.ellipse([cx - CS * 0.030, TOP + H * 0.13, cx - CS * 0.008, TOP + H * 0.175], fill=(196, 214, 236, 210))
    d.ellipse([cx + CS * 0.008, TOP + H * 0.13, cx + CS * 0.030, TOP + H * 0.175], fill=(196, 214, 236, 210))
    d.line([cx - CS * 0.018, TOP + H * 0.21, cx + CS * 0.018, TOP + H * 0.21], fill=(30, 40, 60, 160), width=int(CS * 0.006))
    # wispy trail under
    d.ellipse([cx - CS * 0.10, gy - CS * 0.06, cx + CS * 0.10, gy + CS * 0.04], fill=(96, 104, 120, 70))
    glow(img, cx, TOP + H * 0.4, CS * 0.24, (110, 130, 180), 3)
    return finish_cell(img.filter(ImageFilter.GaussianBlur(2)))

def merchant():
    img = cell_canvas()
    d = ImageDraw.Draw(img)
    cx = CS * 0.5
    gy = CS * 0.97
    TOP = CS * 0.08
    H = gy - TOP
    cloak = (56, 46, 38, 255)
    cloak2 = (40, 32, 26, 255)
    shadow(d, cx, gy, 130)
    # cloak
    jagged(d, [(cx - CS * 0.19, gy),
               (cx - CS * 0.13, gy - H * 0.40),
               (cx - CS * 0.07, TOP),
               (cx + CS * 0.07, TOP),
               (cx + CS * 0.13, gy - H * 0.40),
               (cx + CS * 0.19, gy)],
           131, jag=CS * 0.018, fill=cloak)
    d.polygon([(cx - CS * 0.06, gy - CS * 0.02), (cx, gy - H * 0.18), (cx + CS * 0.06, gy - CS * 0.02)], fill=cloak2)
    # hood + glowing eyes in shadow
    d.ellipse([cx - CS * 0.065, TOP, cx + CS * 0.065, TOP + H * 0.18], fill=cloak2)
    d.ellipse([cx - CS * 0.040, TOP + H * 0.045, cx + CS * 0.040, TOP + H * 0.145], fill=(8, 6, 6, 255))
    for hl in (-1, 1):
        d.ellipse([cx + hl * CS * 0.018 - CS * 0.008, TOP + H * 0.085 - CS * 0.006,
                   cx + hl * CS * 0.018 + CS * 0.008, TOP + H * 0.085 + CS * 0.006], fill=(232, 190, 92, 230))
    # staff + lantern
    d.line([cx + CS * 0.15, gy - CS * 0.02, cx + CS * 0.17, TOP + H * 0.10], fill=(38, 28, 18, 255), width=int(CS * 0.022))
    lx, ly = cx + CS * 0.17, gy - H * 0.38
    d.rectangle([lx - CS * 0.045, ly, lx + CS * 0.045, ly + CS * 0.10], fill=(22, 18, 14, 255))
    d.rectangle([lx - CS * 0.030, ly + CS * 0.014, lx + CS * 0.030, ly + CS * 0.086], fill=(242, 184, 92, 255))
    glow(img, lx, ly + CS * 0.05, CS * 0.13, (240, 180, 90), 4)
    return finish_cell(noise_shade(img, 8, 141))

# ---------------------------------------------------------------- items
def item_battery():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.56
    w, h = 66, 130
    d.rounded_rectangle([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2], 14, fill=(30, 30, 36, 255))
    d.rounded_rectangle([cx - w / 2 + 8, cy - h / 2 + 8, cx + w / 2 - 8, cy + h / 2 - 8], 10, fill=(48, 48, 58, 255))
    d.rectangle([cx - 14, cy - h / 2 - 16, cx + 14, cy - h / 2], fill=(90, 90, 100, 255))
    d.rectangle([cx - w / 2 + 10, cy - 26, cx + w / 2 - 10, cy + 34], fill=(226, 186, 40, 255))
    d.rectangle([cx - w / 2 + 16, cy - 18, cx + w / 2 - 16, cy + 8], fill=(255, 220, 90, 255))
    d.rectangle([cx - 20, cy + h / 2 - 26, cx + 20, cy + h / 2 - 10], fill=(200, 60, 40, 255))
    return finish_cell(noise_shade(img, 7, 160))

def item_bandage():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.58
    # rolled bandage
    d.ellipse([cx - 64, cy - 44, cx + 64, cy + 44], fill=(214, 206, 192, 255))
    d.ellipse([cx - 30, cy - 20, cx + 30, cy + 20], fill=(150, 142, 128, 255))
    d.ellipse([cx - 22, cy - 14, cx + 22, cy + 14], fill=(200, 192, 178, 255))
    # tail
    d.polygon([(cx + 40, cy - 10), (cx + 96, cy + 18), (cx + 92, cy + 30), (cx + 36, cy + 14)], fill=(206, 198, 184, 255))
    d.arc([cx - 64, cy - 44, cx + 64, cy + 44], 200, 340, fill=(120, 112, 100, 255), width=int(4))
    return finish_cell(noise_shade(img, 6, 170))

def item_medkit():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.58
    w, h = 128, 92
    d.rounded_rectangle([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2], 12, fill=(168, 30, 28, 255))
    d.rounded_rectangle([cx - w / 2 + 10, cy - h / 2 + 10, cx + w / 2 - 10, cy + h / 2 - 10], 8, fill=(196, 44, 40, 255))
    d.rectangle([cx - 16, cy - 24, cx + 16, cy + 24], fill=(236, 232, 224, 255))
    d.rectangle([cx - 24, cy - 16, cx + 24, cy + 16], fill=(236, 232, 224, 255))
    d.rectangle([cx - 26, cy - h / 2, cx + 26, cy - h / 2 + 12], fill=(90, 24, 22, 255))
    return finish_cell(noise_shade(img, 6, 180))

def item_key():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.52
    d.ellipse([cx - 44, cy - 60, cx + 24, cy + 8], outline=(216, 178, 60, 255), width=int(16))
    d.line([cx, cy + 4, cx, cy + 96], fill=(216, 178, 60, 255), width=int(16))
    d.line([cx, cy + 96, cx + 28, cy + 96], fill=(216, 178, 60, 255), width=int(12))
    d.line([cx, cy + 74, cx + 20, cy + 74], fill=(216, 178, 60, 255), width=int(12))
    d.ellipse([cx - 32, cy - 48, cx + 12, cy - 4], fill=(30, 24, 16, 255))
    return finish_cell(noise_shade(img, 5, 190))

def item_talisman():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.50
    d.polygon([(cx, cy - 66), (cx + 54, cy), (cx, cy + 66), (cx - 54, cy)], fill=(196, 158, 52, 255))
    d.polygon([(cx, cy - 50), (cx + 40, cy), (cx, cy + 50), (cx - 40, cy)], fill=(140, 108, 34, 255))
    d.polygon([(cx, cy - 32), (cx + 26, cy), (cx, cy + 32), (cx - 26, cy)], fill=(228, 52, 52, 255))
    d.polygon([(cx, cy - 20), (cx + 16, cy), (cx, cy + 20), (cx - 16, cy)], fill=(255, 96, 88, 255))
    d.line([cx, cy - 66, cx, cy - 96], fill=(120, 96, 34, 255), width=int(8))
    d.ellipse([cx - 10, cy - 100, cx + 10, cy - 84], fill=(120, 96, 34, 255))
    glow(img, cx, cy, 46, (230, 170, 70), 3)
    return finish_cell(noise_shade(img, 5, 200))

def item_note():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.55
    w, h = 96, 118
    d.polygon([(cx - w / 2, cy - h / 2), (cx + w / 2 - 18, cy - h / 2), (cx + w / 2, cy - h / 2 + 18),
               (cx + w / 2, cy + h / 2), (cx - w / 2, cy + h / 2)], fill=(222, 210, 178, 255))
    d.polygon([(cx + w / 2 - 18, cy - h / 2), (cx + w / 2, cy - h / 2 + 18), (cx + w / 2 - 18, cy - h / 2 + 18)], fill=(180, 168, 140, 255))
    for k in range(5):
        d.line([cx - 32, cy - 30 + k * 16, cx + 28 - (k % 3) * 8, cy - 30 + k * 16], fill=(90, 76, 56, 255), width=int(5))
    return finish_cell(noise_shade(img, 5, 210))

def item_coin():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.5
    d.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], fill=(150, 116, 34, 255))
    d.ellipse([cx - 32, cy - 32, cx + 32, cy + 32], fill=(206, 162, 52, 255))
    d.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], outline=(120, 90, 26, 255), width=int(5))
    d.ellipse([cx - 26, cy - 30, cx + 2, cy - 4], fill=(240, 204, 100, 180))
    return finish_cell(noise_shade(img, 5, 220))

def item_ammo():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    for i, bx in enumerate((-40, 0, 40)):
        cx = CS * 0.5 + bx
        cy = CS * 0.55
        d.rounded_rectangle([cx - 13, cy - 34, cx + 13, cy + 52], 10, fill=(160, 126, 44, 255))
        d.ellipse([cx - 13, cy - 44, cx + 13, cy - 24], fill=(214, 190, 120, 255))
        d.rectangle([cx - 13, cy + 30, cx + 13, cy + 52], fill=(90, 70, 30, 255))
    return finish_cell(noise_shade(img, 5, 230))

def item_film():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.55
    d.rounded_rectangle([cx - 66, cy - 44, cx + 66, cy + 44], 8, fill=(26, 26, 30, 255))
    d.rounded_rectangle([cx - 56, cy - 34, cx + 56, cy + 34], 6, fill=(44, 44, 52, 255))
    for k in range(2):
        wx = cx - 30 + k * 60
        d.ellipse([wx - 18, cy - 14, wx + 18, cy + 22], fill=(70, 70, 80, 255))
        d.ellipse([wx - 6, cy - 2, wx + 6, cy + 10], fill=(20, 20, 24, 255))
    d.rectangle([cx - 40, cy - 8, cx + 40, cy + 6], fill=(120, 30, 30, 255))
    return finish_cell(noise_shade(img, 5, 240))

def item_candle():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.62, CS * 0.6
    d.rectangle([cx - 22, cy - 60, cx + 22, cy + 50], fill=(226, 216, 196, 255))
    d.ellipse([cx - 22, cy - 66, cx + 22, cy - 44], fill=(238, 230, 210, 255))
    d.line([cx - 2, cy - 74, cx + 2, cy - 58], fill=(40, 30, 20, 255), width=int(4))
    d.ellipse([cx - 40, cy + 46, cx + 40, cy + 62], fill=(90, 70, 40, 255))
    return finish_cell(noise_shade(img, 5, 250))

def item_axe():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    d.line([CS * 0.36, CS * 0.88, CS * 0.62, CS * 0.22], fill=(92, 62, 36, 255), width=int(20))
    d.line([CS * 0.38, CS * 0.84, CS * 0.60, CS * 0.30], fill=(120, 88, 52, 255), width=int(10))
    d.polygon([(CS * 0.54, CS * 0.30), (CS * 0.84, CS * 0.12), (CS * 0.80, CS * 0.40), (CS * 0.60, CS * 0.42)], fill=(148, 148, 156, 255))
    d.polygon([(CS * 0.60, CS * 0.34), (CS * 0.78, CS * 0.22), (CS * 0.76, CS * 0.36)], fill=(196, 196, 206, 255))
    return finish_cell(noise_shade(img, 5, 260))

def item_revolver():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.48, CS * 0.5
    d.rounded_rectangle([cx - 20, cy - 40, cx + 60, cy - 18], 6, fill=(44, 44, 50, 255))
    d.ellipse([cx - 30, cy - 12, cx + 8, cy + 26], fill=(56, 56, 64, 255))
    d.ellipse([cx - 20, cy - 2, cx + -2, cy + 16], fill=(30, 30, 36, 255))
    d.polygon([(cx - 6, cy + 20), (cx + 10, cy + 60), (cx + 26, cy + 56), (cx + 16, cy + 16)], fill=(70, 48, 30, 255))
    d.rectangle([cx + 12, cy - 36, cx + 18, cy - 16], fill=(70, 70, 78, 255))
    return finish_cell(noise_shade(img, 5, 270))

def item_knife():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    d.polygon([(CS * 0.44, CS * 0.20), (CS * 0.60, CS * 0.16), (CS * 0.54, CS * 0.62)], fill=(170, 172, 182, 255))
    d.polygon([(CS * 0.46, CS * 0.24), (CS * 0.55, CS * 0.21), (CS * 0.51, CS * 0.56)], fill=(210, 212, 222, 255))
    d.rectangle([CS * 0.40, CS * 0.60, CS * 0.60, CS * 0.68], fill=(60, 40, 24, 255))
    d.rectangle([CS * 0.46, CS * 0.68, CS * 0.54, CS * 0.82], fill=(40, 28, 18, 255))
    return finish_cell(noise_shade(img, 5, 280))

def item_camera():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.55
    d.rounded_rectangle([cx - 62, cy - 44, cx + 62, cy + 44], 10, fill=(38, 38, 42, 255))
    d.rounded_rectangle([cx - 52, cy - 34, cx + 52, cy + 34], 8, fill=(56, 56, 62, 255))
    d.ellipse([cx - 26, cy - 22, cx + 26, cy + 30], fill=(24, 24, 28, 255))
    d.ellipse([cx - 18, cy - 14, cx + 18, cy + 22], fill=(90, 60, 40, 255))
    d.ellipse([cx - 10, cy - 6, cx + 10, cy + 14], fill=(140, 90, 50, 255))
    d.rectangle([cx + 30, cy - 40, cx + 44, cy - 30], fill=(200, 180, 120, 255))
    return finish_cell(noise_shade(img, 5, 290))

# ---------------------------------------------------------------- props
def prop_corpse1():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    gy = CS * 0.84
    d.ellipse([CS * 0.10, gy - 26, CS * 0.92, gy + 18], fill=(90, 10, 8, 170))
    d.ellipse([CS * 0.24, gy - 14, CS * 0.78, gy + 8], fill=(120, 16, 12, 190))
    dark = (28, 26, 30, 255)
    jagged(d, [(CS * 0.20, gy - 6), (CS * 0.32, gy - 44), (CS * 0.60, gy - 52),
               (CS * 0.78, gy - 34), (CS * 0.84, gy - 4)], 311, jag=8, fill=dark)
    d.ellipse([CS * 0.12, gy - 48, CS * 0.30, gy - 20], fill=(150, 132, 112, 255))
    d.ellipse([CS * 0.16, gy - 42, CS * 0.22, gy - 36], fill=(20, 16, 16, 255))
    d.ellipse([CS * 0.23, gy - 42, CS * 0.29, gy - 36], fill=(20, 16, 16, 255))
    d.line([CS * 0.56, gy - 46, CS * 0.70, gy - 12], fill=(150, 132, 112, 255), width=int(10))
    return finish_cell(noise_shade(img, 6, 311))

def prop_corpse2():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    gy = CS * 0.82
    d.ellipse([CS * 0.14, gy - 22, CS * 0.88, gy + 14], fill=(30, 26, 22, 160))
    # skull
    d.ellipse([CS * 0.36, gy - 78, CS * 0.64, gy - 34], fill=(206, 196, 176, 255))
    d.ellipse([CS * 0.40, gy - 64, CS * 0.58, gy - 40], fill=(180, 170, 152, 255))
    d.ellipse([CS * 0.42, gy - 58, CS * 0.48, gy - 50], fill=(14, 12, 12, 255))
    d.ellipse([CS * 0.52, gy - 58, CS * 0.58, gy - 50], fill=(14, 12, 12, 255))
    d.rectangle([CS * 0.45, gy - 42, CS * 0.55, gy - 36], fill=(120, 110, 96, 255))
    # bones
    d.line([CS * 0.16, gy - 12, CS * 0.80, gy - 20], fill=(196, 186, 166, 255), width=int(14))
    d.ellipse([CS * 0.10, gy - 20, CS * 0.24, gy - 4], fill=(196, 186, 166, 255))
    d.ellipse([CS * 0.74, gy - 28, CS * 0.88, gy - 12], fill=(196, 186, 166, 255))
    d.line([CS * 0.22, gy - 34, CS * 0.34, gy - 4], fill=(180, 170, 150, 255), width=int(10))
    return finish_cell(noise_shade(img, 6, 321))

def prop_barrel():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx = CS * 0.5
    d.rounded_rectangle([cx - 58, CS * 0.16, cx + 58, CS * 0.86], 34, fill=(104, 72, 40, 255))
    d.rounded_rectangle([cx - 44, CS * 0.20, cx + 44, CS * 0.82], 26, fill=(128, 92, 52, 255))
    for yy in (CS * 0.30, CS * 0.50, CS * 0.70):
        d.rectangle([cx - 58, yy - 8, cx + 58, yy + 8], fill=(58, 58, 62, 255))
        d.rectangle([cx - 58, yy - 3, cx + 58, yy + 3], fill=(90, 90, 96, 255))
    return finish_cell(noise_shade(img, 7, 341))

def prop_crate():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    x0, y0, x1, y1 = CS * 0.14, CS * 0.24, CS * 0.86, CS * 0.86
    d.rectangle([x0, y0, x1, y1], fill=(118, 88, 50, 255))
    d.rectangle([x0 + 8, y0 + 8, x1 - 8, y1 - 8], fill=(142, 106, 60, 255))
    d.line([x0 + 8, y0 + 8, x1 - 8, y1 - 8], fill=(96, 68, 36, 255), width=int(14))
    d.line([x1 - 8, y0 + 8, x0 + 8, y1 - 8], fill=(96, 68, 36, 255), width=int(14))
    d.rectangle([x0, y0, x1, y1], outline=(60, 42, 22, 255), width=int(6))
    return finish_cell(noise_shade(img, 6, 351))

def prop_grave():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    gy = CS * 0.88
    d.ellipse([CS * 0.08, gy - 14, CS * 0.92, gy + 12], fill=(28, 28, 22, 180))
    # stone
    d.rounded_rectangle([CS * 0.30, CS * 0.18, CS * 0.70, gy], 40, fill=(96, 98, 92, 255))
    d.rounded_rectangle([CS * 0.36, CS * 0.24, CS * 0.64, gy - 6], 32, fill=(118, 120, 112, 255))
    d.rectangle([CS * 0.47, CS * 0.36, CS * 0.53, CS * 0.62], fill=(60, 60, 58, 255))
    d.rectangle([CS * 0.40, CS * 0.44, CS * 0.60, CS * 0.50], fill=(60, 60, 58, 255))
    # grass tufts
    for gx in (0.22, 0.72, 0.5):
        d.line([CS * gx, gy, CS * gx - 8, gy - 16], fill=(60, 74, 40, 255), width=int(5))
        d.line([CS * gx, gy, CS * gx + 8, gy - 14], fill=(52, 66, 36, 255), width=int(5))
    return finish_cell(noise_shade(img, 6, 361))

def prop_mirror():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx = CS * 0.5
    d.rounded_rectangle([cx - 14, CS * 0.62, cx + 14, CS * 0.90], 6, fill=(70, 52, 30, 255))
    d.ellipse([cx - 52, CS * 0.10, cx + 52, CS * 0.70], fill=(120, 96, 52, 255))
    d.ellipse([cx - 42, CS * 0.16, cx + 42, CS * 0.64], fill=(18, 22, 30, 255))
    d.ellipse([cx - 34, CS * 0.20, cx + 34, CS * 0.60], fill=(30, 38, 48, 255))
    # faint pale reflection
    d.ellipse([cx - 14, CS * 0.26, cx + 14, CS * 0.52], fill=(150, 150, 158, 90))
    d.ellipse([cx - 7, CS * 0.32, cx - 2, CS * 0.37], fill=(20, 20, 24, 120))
    d.ellipse([cx + 2, CS * 0.32, cx + 7, CS * 0.37], fill=(20, 20, 24, 120))
    d.arc([cx - 42, CS * 0.16, cx + 42, CS * 0.64], 300, 60, fill=(190, 170, 120, 140), width=int(5))
    return finish_cell(noise_shade(img, 5, 371))

def prop_altar():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx = CS * 0.5
    gy = CS * 0.88
    d.rectangle([cx - 64, gy - 90, cx + 64, gy], fill=(70, 68, 64, 255))
    d.rectangle([cx - 56, gy - 82, cx + 56, gy - 8], fill=(88, 86, 80, 255))
    d.rectangle([cx - 64, gy - 90, cx + 64, gy - 80], fill=(104, 100, 94, 255))
    # rune carvings
    d.ellipse([cx - 30, gy - 66, cx + 30, gy - 26], outline=(150, 30, 30, 200), width=int(4))
    d.line([cx - 20, gy - 56, cx + 20, gy - 36], fill=(150, 30, 30, 200), width=int(3))
    d.line([cx - 20, gy - 36, cx + 20, gy - 56], fill=(150, 30, 30, 200), width=int(3))
    # candle + flame
    d.rectangle([cx - 8, gy - 122, cx + 8, gy - 90], fill=(220, 210, 190, 255))
    glow(img, cx, gy - 132, 40, (250, 190, 90), 4)
    d.polygon([(cx, gy - 148), (cx + 9, gy - 126), (cx - 9, gy - 126)], fill=(255, 210, 110, 255))
    d.polygon([(cx, gy - 140), (cx + 4, gy - 127), (cx - 4, gy - 127)], fill=(255, 250, 200, 255))
    return finish_cell(noise_shade(img, 6, 381))

def prop_radio():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, cy = CS * 0.5, CS * 0.56
    d.rounded_rectangle([cx - 66, cy - 40, cx + 66, cy + 44], 10, fill=(66, 60, 44, 255))
    d.rounded_rectangle([cx - 56, cy - 30, cx + 56, cy + 34], 8, fill=(86, 78, 56, 255))
    d.rectangle([cx - 44, cy - 18, cx + 4, cy + 20], fill=(40, 38, 30, 255))
    d.rectangle([cx - 40, cy - 14, cx + 0, cy + 6], fill=(70, 66, 50, 255))
    for k, rx in enumerate((20, 38)):
        d.ellipse([cx + rx - 8, cy - 8, cx + rx + 8, cy + 8], fill=(40, 38, 32, 255))
        d.line([cx + rx, cy, cx + rx + 6 * math.cos(k * 2), cy - 6 * math.sin(k * 2)], fill=(120, 110, 80, 255), width=int(3))
    d.line([cx + 40, cy - 40, cx + 72, cy - 104], fill=(60, 58, 50, 255), width=int(6))
    return finish_cell(noise_shade(img, 6, 391))

def prop_candles():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    d.ellipse([CS * 0.12, CS * 0.82, CS * 0.88, CS * 0.94], fill=(50, 44, 34, 255))
    for i, px in enumerate((0.30, 0.50, 0.70)):
        cx = CS * px
        base = CS * 0.84
        hgt = [64, 84, 54][i]
        d.rectangle([cx - 12, base - hgt, cx + 12, base], fill=(220, 210, 190, 255))
        d.ellipse([cx - 12, base - hgt - 6, cx + 12, base - hgt + 8], fill=(234, 226, 206, 255))
        glow(img, cx, base - hgt - 18, 30, (250, 190, 90), 4)
        d.polygon([(cx, base - hgt - 34), (cx + 7, base - hgt - 14), (cx - 7, base - hgt - 14)], fill=(255, 214, 120, 255))
        d.polygon([(cx, base - hgt - 27), (cx + 3, base - hgt - 15), (cx - 3, base - hgt - 15)], fill=(255, 252, 210, 255))
    return finish_cell(noise_shade(img, 5, 401))

def prop_lever():
    img = cell_canvas(); d = ImageDraw.Draw(img)
    cx, gy = CS * 0.5, CS * 0.84
    d.rectangle([cx - 34, gy - 26, cx + 34, gy], fill=(60, 58, 54, 255))
    d.rectangle([cx - 26, gy - 20, cx + 26, gy - 6], fill=(80, 78, 72, 255))
    d.line([cx, gy - 18, cx + 34, gy - 88], fill=(70, 68, 64, 255), width=int(14))
    d.ellipse([cx + 24, gy - 108, cx + 46, gy - 86], fill=(190, 30, 26, 255))
    d.ellipse([cx + 28, gy - 104, cx + 38, gy - 94], fill=(230, 60, 50, 255))
    return finish_cell(noise_shade(img, 5, 411))

# ---------------------------------------------------------------- assemble
SHEET = {
    0: lambda: hunter_frame({"legL": 20, "legR": -18, "armL": 30, "armR": -34, "lean": 4}, 11),
    1: lambda: hunter_frame({"legL": -6, "legR": 6, "armL": 10, "armR": -12, "lean": 2}, 12),
    2: lambda: hunter_frame({"legL": -20, "legR": 18, "armL": -30, "armR": 34, "lean": -4}, 13),
    3: lambda: hunter_frame({"legL": 8, "legR": -4, "armL": 22, "armR": -18, "lean": 0}, 14),
    4: lambda: hunter_frame({"legL": 26, "legR": -26, "armL": 70, "armR": -70, "lean": 10, "mouth": True}, 15),
    5: hunter_dead,
    6: shadow_blob,
    8: lambda: mother_frame(-8),
    9: lambda: mother_frame(8),
    10: ghost,
    11: merchant,
    16: item_battery, 17: item_bandage, 18: item_medkit, 19: item_key,
    20: item_talisman, 21: item_note, 22: item_coin, 23: item_ammo,
    24: item_film, 25: item_candle, 26: item_axe, 27: item_revolver,
    28: item_knife, 29: item_camera,
    32: prop_corpse1, 33: prop_corpse2, 34: prop_barrel, 35: prop_crate,
    36: prop_grave, 37: prop_mirror, 38: prop_altar, 39: prop_radio,
    40: prop_candles, 41: prop_lever,
}

sheet = Image.new("RGBA", (CELL * GRID, CELL * GRID), (0, 0, 0, 0))
for idx, fn in SHEET.items():
    tile = fn()
    tx = (idx % GRID) * CELL
    ty = (idx // GRID) * CELL
    sheet.paste(tile, (tx, ty))
    print("sprite", idx, "ok")

sheet.save("/home/z/my-project/hollowvale-native/app/src/main/res/drawable-nodpi/sprites.png")
print("sprites saved", sheet.size)
