#!/usr/bin/env python3
# CPU simulation of the NEW raycast_frag.txt — validates 8x8 atlas mapping,
# per-cell floor/ceiling channels, outdoor sky, colored fog, wall AO, sprites.
import re, math
import numpy as np
from PIL import Image

BASE = '/home/z/my-project/hollowvale-native/app/src/main'

# ---- parse map ----
src = open(BASE + '/java/ir/hollowvale/game/MapData.java').read()
rows = re.findall(r'"([#.A-Z:,gzZDdhwW]+)"', src)
W, H = len(rows[0]), len(rows)
grid = [list(r) for r in rows]

def wall_tile(c):
    m = {'B':0,'P':1,'#':2,'W':3,'X':7,'K':8,'M':9,'S':10,'L':11,'F':12,'T':13,'A':15,'O':6}
    return m.get(c, 0)
def door_tile(c):
    m = {'g':14,'G':5,'Z':3,'D':4,'d':4,'h':4}
    return m.get(c, 0)
def floor_tile(c):
    m = {':':19,'.':16,'h':16,'d':16,'D':16,'Z':16,'g':16,'G':16}
    return m.get(c, 18)
def ceil_tile(c):
    m = {'.':25,'h':24,'d':24,'D':24,'Z':24,'g':24,'G':24}
    return m.get(c, 0)

# map texture: R=wall tile, G=door open, B=ceil, A=floor
maptex = np.zeros((H, W, 4), np.uint8)
for y in range(H):
    for x in range(W):
        c = grid[y][x]
        t = 0; op = 0
        if c in 'd h D G g Z'.split() or c in 'dhDGgZ':
            t = door_tile(c)
        elif wall_tile(c) > 0:
            t = wall_tile(c)
        maptex[y, x] = (t, int(op * 255), ceil_tile(c), floor_tile(c))

# lights (kind 0 warm,1 altar,2 candle lit?,3 moon) — treat all as lit for preview
lights = re.search(r'LIGHTS = \{(.*?)\}', src, re.S).group(1)
L = [int(v) for v in re.findall(r'-?\d+', lights)]
light_list = []
for i in range(0, len(L), 3):
    x, y, k = L[i], L[i + 1], L[i + 2]
    if k == 0: light_list.append((x+.5, y+.5, (1,.62,.28), 1.05, 6.5))
    elif k == 1: light_list.append((x+.5, y+.5, (1,.22,.15), 1.25, 5.5))
    elif k == 2: light_list.append((x+.5, y+.5, (1,.75,.4), .8, 3.6))
    else: light_list.append((x+.5, y+.5, (.55,.65,1), .55, 5))

atlas = np.asarray(Image.open(BASE + '/res/drawable-nodpi/atlas.png'), np.float32) / 255
sprites = np.asarray(Image.open(BASE + '/res/drawable-nodpi/sprites.png'), np.float32) / 255
AD = 8.0
FOG = 1.35
fogCol = np.array([0.013, 0.017, 0.027], np.float32)

def lighting(wp, flash=None):
    l = np.array([0.135, 0.145, 0.175], np.float32)
    for (lx, ly, col, inten, rad) in light_list:
        d = math.hypot(wp[0]-lx, wp[1]-ly)
        att = max(0.0, 1.0 - d/rad) ** 2
        l += np.array(col, np.float32) * att * inten
    if flash is not None:
        fx, fy, fdir = flash
        to = np.array([wp[0]-fx, wp[1]-fy], np.float32)
        td = max(np.linalg.norm(to), 1e-4)
        ca = float(np.dot(to/td, fdir))
        cone = min(max((ca-0.72)/0.23, 0), 1); cone = cone*cone*(3-2*cone)
        fall = max(0.0, 1.0 - td/9.5)
        l += np.array([1.0, .94, .80], np.float32) * (cone * fall*fall * 1.7)
    return l

def sky(up, az):
    c = np.array([0.050,0.060,0.088], np.float32) * (1-up) + np.array([0.008,0.010,0.020], np.float32) * up
    # moon glow approximation at fixed azimuth 0.68 rad
    moonaz = 0.68
    d = abs(az - moonaz)
    glow = max(0.0, 1.0 - d*2.2) ** 2 * up
    c += np.array([0.30,0.18,0.12], np.float32) * glow * 0.8
    if d < 0.008 and up > 0.30:
        c = np.array([0.88, 0.74, 0.58], np.float32)
    # stars
    return c

def sample_tile(tile, tx, ty):
    tu = int(tile % 8); tv = int(tile // 8)
    px = int((tu + tx % 1.0) * 256) % 2048
    py = int((tv + (1 - ty % 1.0)) * 256) % 2048
    return atlas[py, px]

def sample_map(fx, fy, ch):
    cx = int(math.floor(fx)) % W; cy = int(math.floor(fy)) % H
    return maptex[cy, cx, ch]

def render(px, py, dirx, diry, pitch, flash, W2=853, H2=384, sprite=None):
    img = np.zeros((H2, W2, 3), np.float32)
    plane = np.array([-diry, dirx], np.float32) * (0.66 * W2 / H2)
    horizon = 0.5 - pitch * 0.5
    for sx in range(W2):
        ndcX = sx / W2 * 2 - 1
        rd = np.array([dirx + plane[0]*ndcX, diry + plane[1]*ndcX], np.float32)
        n = max(np.linalg.norm(rd), 1e-6); rdn = rd / n
        mx, my = int(px), int(py)
        ddx = abs(1.0/rd[0]) if rd[0] != 0 else 1e30
        ddy = abs(1.0/rd[1]) if rd[1] != 0 else 1e30
        sdx = (px-mx)*ddx if rd[0] < 0 else (mx+1-px)*ddx
        sdy = (py-my)*ddy if rd[1] < 0 else (my+1-py)*ddy
        stepx = -1 if rd[0] < 0 else 1
        stepy = -1 if rd[1] < 0 else 1
        perp = 60.0; wallX = 0; side = 0; tile = 0; hit = False
        for i in range(72):
            if sdx < sdy:
                perp = sdx; sdx += ddx; mx += stepx; side = 0
            else:
                perp = sdy; sdy += ddy; my += stepy; side = 1
            if mx < 0 or my < 0 or mx >= W or my >= H: break
            t = maptex[my, mx, 0]; op = maptex[my, mx, 1] / 255.0
            if t > 0.5:
                hp = np.array([px + rd[0]*perp, py + rd[1]*perp], np.float32)
                wallX = hp[1] % 1.0 if side < 0.5 else hp[0] % 1.0
                if op > 0.004:
                    dx2 = wallX + op
                    if dx2 < 0.999:
                        wallX = dx2; hit = True; tile = t
                else:
                    hit = True; tile = t
            if hit: break
        lineH = 1.0 / max(perp, 0.01)
        v0 = horizon - lineH*0.5; v1 = horizon + lineH*0.5
        for sy in range(H2):
            vU = sy / H2
            if hit and v0 < vU < v1:
                ty = (vU - v0) / lineH
                tx = wallX
                if side > 0.5 and rd[0] > 0: tx = 1 - tx
                if side < 0.5 and rd[1] < 0: tx = 1 - tx
                tex = sample_tile(tile, tx, ty)
                wp = np.array([px + rd[0]*perp, py + rd[1]*perp], np.float32)
                li = lighting(wp, flash)
                ss = 0.76 if side > 0.5 else 1.0
                ao = 0.60 + 0.40*min(max((ty-0.0)/0.16, 0), 1)*(1 - min(max((ty-0.84)/0.16, 0), 1))
                fog = math.exp(-perp*perp*FOG*0.016)
                img[sy, sx] = fogCol*(1-fog) + tex*li*ss*ao*fog
            elif vU >= (v1 if hit else horizon):
                rowD = 0.5 / max(vU - horizon, 0.002)
                if (not hit) or rowD < perp:
                    fp = np.array([px + rdn[0]*rowD, py + rdn[1]*rowD], np.float32)
                    fT = sample_map(fp[0], fp[1], 3)
                    tex = sample_tile(fT, fp[0], fp[1]) * 0.62
                    li = lighting(fp, flash)
                    fog = math.exp(-rowD*rowD*FOG*0.016)
                    img[sy, sx] = fogCol*(1-fog) + tex*li*fog
                elif hit:
                    img[sy, sx] = fogCol
            elif hit:
                rowD = 0.5 / max(horizon - vU, 0.002)
                if rowD < perp:
                    fp = np.array([px + rdn[0]*rowD, py + rdn[1]*rowD], np.float32)
                    cT = sample_map(fp[0], fp[1], 2)
                    if cT < 0.5:
                        up = min(max((vU - horizon)*1.7, 0), 1)
                        az = math.atan2(rdn[1], rdn[0])
                        img[sy, sx] = sky(up, az)
                    else:
                        tex = sample_tile(cT, fp[0], fp[1]) * 0.18
                        li = lighting(fp, flash) * 0.45
                        fog = math.exp(-rowD*rowD*FOG*0.016)
                        img[sy, sx] = fogCol*(1-fog) + tex*li*fog
                else:
                    img[sy, sx] = fogCol
            else:
                up = min(max((vU - horizon)*1.7, 0), 1)
                if up > 0:
                    az = math.atan2(rdn[1], rdn[0])
                    img[sy, sx] = sky(up, az)
                else:
                    img[sy, sx] = fogCol
    # sprite overlay (single sprite for preview)
    if sprite is not None:
        (spx, spy, stile, sscale) = sprite
        rel = np.array([spx-px, spy-py], np.float32)
        invDet = 1.0 / (plane[0]*diry - dirx*plane[1])
        transX = invDet * (diry*rel[0] - dirx*rel[1])
        transY = invDet * (-plane[1]*rel[0] + plane[0]*rel[1])
        if transY > 0.22:
            sxc = transX/transY
            halfW = sscale*0.5/transY
            for sx in range(max(0, int((sxc-halfW+1)/2*W2)), min(W2, int((sxc+halfW+1)/2*W2)+1)):
                ndcX = sx/W2*2-1
                if ndcX < sxc-halfW or ndcX > sxc+halfW: continue
                u = (ndcX-(sxc-halfW))/max(2*halfW, 1e-4)
                hgt = sscale/transY
                bottom = horizon + 0.5/transY
                top = bottom - hgt
                for sy in range(max(0, int(top*H2)), min(H2, int(bottom*H2)+1)):
                    vU = sy/H2
                    if vU < top or vU > bottom: continue
                    v = (bottom-vU)/max(hgt, 1e-4)
                    tu = int(stile % 8); tv = int(stile // 8)
                    upx = int((tu + u) * 128) % 1024
                    upy = int((tv + (1-v)) * 128) % 1024
                    texa = sprites[upy, upx]
                    if texa[3] < 0.4: continue
                    li = lighting(np.array([spx, spy], np.float32), flash)
                    img[sy, sx] = texa[:3]*li
    return img

def post(img):
    # vignette + quantize (like post pass)
    Hh, Ww = img.shape[:2]
    yy, xx = np.mgrid[0:Hh, 0:Ww].astype(np.float32)
    r = np.sqrt(((xx/Ww-0.5)*1.35)**2 + ((yy/Hh-0.5)*1.35)**2)
    vig = np.clip(1 - 0.85*np.power(r, 2.6), 0, 1)[..., None]
    out = np.clip(img*vig, 0, 1)
    out = np.floor(out*31+0.5)/31
    return (np.clip(out, 0, 1)*255).astype(np.uint8)

# ---- preview 1: inside the mansion (start area, interior wood floor + beams) ----
p = (23.5, 36.2); d = (0.0, -1.0)   # facing north into the village road
img1 = render(p[0], p[1], d[0], d[1], 0.0, (p[0], p[1], np.array(d, np.float32)), sprite=(25.5, 30.5, 40, 0.8))
Image.fromarray(post(img1)).save('/tmp/vidcheck/render_village.png')

# ---- preview 2: inside mansion corridor with flashlight ----
p2 = (17.5, 7.5); d2 = (1.0, 0.0)
img2 = render(p2[0], p2[1], d2[0], d2[1], 0.0, (p2[0], p2[1], np.array(d2, np.float32)), sprite=(21.5, 7.5, 0, 0.9))
Image.fromarray(post(img2)).save('/tmp/vidcheck/render_mansion.png')
print('renders saved')
