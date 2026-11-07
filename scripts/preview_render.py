#!/usr/bin/env python3
"""Visual preview of the native raycaster math (mirrors Renderer.java formulas)
using the exact same generated map. Renders 3 scenes for eyeball verification."""
import re, math, zlib, struct

# --- load ROWS from MapData.java ---
src = open('/home/z/my-project/hollowvale-native/src/ir/hollowvale/game/MapData.java').read()
rows = re.findall(r'"([#BSDCGPAFT.,]+)"', src)
H, W = len(rows), len(rows[0])
SOLID = set('#BSDCGPAFT')

def tile(tx, ty):
    if tx < 0 or ty < 0 or tx >= W or ty >= H: return '#'
    return rows[ty][tx]

def cast(px, py, rdx, rdy, maxd=22.0):
    mx, my = int(px), int(py)
    if (mx, my) != (int(px), int(py)): pass
    if tile(mx, my) in SOLID: return 0.0, '#', 0, 0.0
    ddx = abs(1.0/rdx) if rdx != 0 else 1e30
    ddy = abs(1.0/rdy) if rdy != 0 else 1e30
    sx = -1 if rdx < 0 else 1; sy = -1 if rdy < 0 else 1
    sdx = (px-mx)*ddx if rdx < 0 else (mx+1-px)*ddx
    sdy = (py-my)*ddy if rdy < 0 else (my+1-py)*ddy
    side = 0; dist = 0.0
    for _ in range(200):
        if sdx < sdy: dist = sdx; sdx += ddx; mx += sx; side = 0
        else: dist = sdy; sdy += ddy; my += sy; side = 1
        if dist > maxd: return maxd, '.', 0, 0.0
        if tile(mx, my) in SOLID:
            wx = (py + dist*rdy) if side == 0 else (px + dist*rdx)
            wx -= math.floor(wx)
            if side == 0 and rdx > 0: wx = 1-wx
            if side == 1 and rdy < 0: wx = 1-wx
            return dist, tile(mx, my), side, wx
    return maxd, '.', 0, 0.0

def tex_color(t, wx, wy_frac):
    # stylized procedural colors per tile type (mirrors palette of TextureGen)
    base = {'#': (72,72,84), 'B': (96,58,52), 'S': (96,92,112), 'D': (110,80,48),
            'C': (62,46,36), 'G': (56,60,70), 'P': (88,88,102), 'A': (70,66,84),
            'F': (78,82,92), 'T': (46,42,34)}[t]
    n = ((int(wx*63) * 7 + int(wy_frac*63) * 13) % 17) / 17.0
    f = 0.82 + 0.18 * n
    return (int(base[0]*f), int(base[1]*f), int(base[2]*f))

BW, BH = 480, 270

def render(px, py, ang, beam=True, fname='p1.png', monster=None):
    dirx, diry = math.cos(ang), math.sin(ang)
    plx, ply = -diry*0.66, dirx*0.66
    horizon = BH//2
    buf = bytearray(BW*BH*3)
    # ceiling/floor gradients (same values as Java)
    for y in range(BH):
        f = y / BH
        if y < BH//2:
            c0, c1 = (0x0b,0x0d,0x15), (0x1a,0x1e,0x2c)
            t2 = y / max(1, BH//2)
        else:
            c0, c1 = (0x14,0x10,0x0b), (0x33,0x29,0x1a)
            t2 = (y - BH/2) / max(1, BH/2)
        col = tuple(int(c0[i] + (c1[i]-c0[i])*t2) for i in range(3))
        for x in range(BW):
            o = (y*BW+x)*3
            buf[o:o+3] = bytes(col)
    zbuf = [22.0]*BW
    for x in range(BW):
        camx = 2.0*x/BW - 1.0
        rdx, rdy = dirx + plx*camx, diry + ply*camx
        d, t, side, wx = cast(px, py, rdx, rdy)
        if t not in SOLID:
            zbuf[x] = 22; continue
        zbuf[x] = d
        lh = BH/d
        y0, y1 = max(0, int(horizon-lh/2)), min(BH, int(horizon+lh/2))
        wy = (y0 - (horizon-lh/2)) / max(1, lh)
        # light per column (same formula)
        li = 0.085 if beam else 0.11
        if beam:
            b = max(0, 1-abs(camx)/0.62)
            reach = max(0, 1-d/20)
            li += (b**1.5) * reach * reach * 0.98
        if side == 1: li *= 0.8
        li = min(1, li)
        for y in range(y0, y1):
            c = tex_color(t, wx, y/lh)
            v = tuple(int(c[i]*li + 3*(1-li)) for i in range(3))
            o = (y*BW+x)*3
            buf[o:o+3] = bytes(v)
    # light mask punch (radial approximations, same centers/radii)
    for y in range(BH):
        for x in range(BW):
            if beam:
                a1 = 1.0 - min(1, math.hypot(x-BW/2, y-BH*0.70)/(BW*0.62))
                a2 = 0.80 - 0.80*min(1, math.hypot(x-BW/2, y-BH*0.46)/(BW*0.92))
                punch = max(0.0, min(1.0, a1, 1.0)) + 0.6*max(0.0, min(1.0, a2))
                punch = min(1.0, punch)
            else:
                punch = 0.0
            dark = (0.588 if beam else 0.804) * (1.0-punch)
            o = (y*BW+x)*3
            buf[o] = int(buf[o]*(1-dark)); buf[o+1] = int(buf[o+1]*(1-dark)); buf[o+2] = int(buf[o+2]*(1-dark))
    # sprite: monster billboard with zbuffer + glowing eyes
    if monster:
        sx, sy = monster
        relx, rely = sx-px, sy-py
        inv = 1.0/(plx*diry - dirx*ply)
        trx = inv*(diry*relx - dirx*rely)
        try_ = inv*(-ply*relx + plx*rely)
        if try_ > 0.15:
            sxc = (BW/2)*(1+trx/try_)
            bottom = horizon + 0.5*BH/try_
            hpx = 1.02*BH/try_; wpx = 0.78*BH/try_
            top = bottom - hpx
            for x in range(max(0,int(sxc-wpx/2)), min(BW,int(sxc+wpx/2))):
                if try_ < zbuf[x]:
                    u = (x-(sxc-wpx/2))/wpx
                    for y in range(max(0,int(top)), min(BH,int(bottom))):
                        v = (y-top)/hpx
                        o = (y*BW+x)*3
                        # silhouette with pale head
                        if 0.04 < v < 0.25 and 0.3 < u < 0.7:
                            buf[o:o+3] = bytes((148*max(0.2,li) if False else 120, 112, 104))
                        elif 0.25 <= v < 0.94:
                            buf[o:o+3] = bytes((14, 11, 16))
                        if 0.09 < v < 0.13 and (0.38 < u < 0.46 or 0.54 < u < 0.62):
                            buf[o:o+3] = bytes((255, 70, 40))
    # vignette
    for y in range(BH):
        for x in range(BW):
            dv = math.hypot((x-BW/2)/(BW*0.72), (y-BH/2)/(BH*0.9))
            vg = max(0.0, min(1.0, (dv-0.55)/0.75)) * 0.55
            o = (y*BW+x)*3
            buf[o] = int(buf[o]*(1-vg)); buf[o+1] = int(buf[o+1]*(1-vg)); buf[o+2] = int(buf[o+2]*(1-vg))
    # write PPM -> PNG
    raw = b''.join(b'\x00' + bytes(buf[y*BW*3:(y+1)*BW*3]) for y in range(BH))
    def chunk(t_, data):
        c = struct.pack('>I', len(data)) + t_ + data
        return c + struct.pack('>I', zlib.crc32(t_ + data) & 0xffffffff)
    png = (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', BW, BH, 8, 2, 0, 0, 0))
           + chunk(b'IDAT', zlib.compress(raw, 6)) + chunk(b'IEND', b''))
    open(fname, 'wb').write(png)
    print('wrote', fname)

import os
os.makedirs('/tmp/render', exist_ok=True)
# 1: spawn on road, church ahead
render(21.5, 30.5, -math.pi/2, True, '/tmp/render/hv_spawn.png')
# 2: inside graveyard looking at graves area (turn toward key)
render(33.5, 29.5, 0.0, True, '/tmp/render/hv_graveyard.png', monster=(38.5, 30.5))
# 3: crossroads plaza with fountain, flashlight OFF (dark)
render(21.5, 17.0, math.pi, False, '/tmp/render/hv_dark.png')
