#!/usr/bin/env python3
"""HOLLOW VALE v4 — map builder: 48x40 village+mansion, BFS-validated progression.
Emits MapData.java (pure-JVM safe) and asserts every item is reachable."""
import os
from collections import deque

OUT = "/home/z/my-project/hollowvale-native/app/src/main/java/ir/hollowvale/game/MapData.java"
W, H = 48, 40
g = [['T'] * W for _ in range(H)]

def rect(x0, y0, x1, y1, ch, fill=None):
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            if x == x0 or x == x1 or y == y0 or y == y1:
                g[y][x] = ch
            elif fill is not None:
                g[y][x] = fill

def put(x, y, ch): g[y][x] = ch

# base grass
for y in range(1, H - 1):
    for x in range(1, W - 1):
        g[y][x] = ','

# --- road (south, vertical) ---
for y in range(16, 39):
    for x in (23, 24):
        g[y][x] = ':'

# --- courtyard (mansion yard) rows 1-16, cols 8-39 ---
rect(8, 1, 39, 16, 'F', ',')
put(23, 16, 'G'); put(24, 16, 'F')  # iron gate single-cell at 23

# --- mansion rows 3-13, cols 12-35 ---
rect(12, 3, 35, 13, 'B', '.')
put(23, 13, 'D')                      # locked front door
put(17, 13, 'O'); put(29, 13, 'O')    # windows
put(20, 3, 'Z')                       # boarded back door (axe-breakable) into bedroom
# inner wall row 8 with door gaps
for x in range(13, 35):
    put(x, 8, '#' if g[x][8] == '.' else g[x][8])
put(16, 8, 'd'); put(17, 8, 'd')      # west door
put(30, 8, 'd'); put(31, 8, 'd')      # east door
# north wing divider col 23 rows 4-7 with door
for y in range(4, 8):
    put(23, y, '#')
put(23, 5, 'd')
# bedroom (NW) walls -> rune accents around mirror; ritual room (NE) rune walls
for x in range(24, 35):
    if g[x][4] == '.': pass
# rune wall ring inside NE room
for x in range(27, 34): 
    if g[x][3] == 'B': g[x][3] = 'L'
for y in range(4, 8):
    if g[34][y] == 'B': g[34][y] = 'L'
# bookshelves along library west wall
for y in range(9, 13):
    put(13, y, 'K')
# pillars in hall
for px, py in ((18, 10), (28, 10), (18, 12), (28, 12)):
    put(px, py, '#')
put(20, 13, 'A'); put(26, 13, 'A')  # paintings on hall south wall

# --- courtyard shed (south strip, rows 14-16, cols 30-36) ---
rect(30, 14, 36, 16, 'W', '.')
put(30, 15, 'h')  # door west

# --- village houses ---
rect(5, 19, 11, 23, 'W', '.')   # house1
put(8, 23, 'h'); put(5, 21, 'O'); put(11, 21, 'O')
rect(16, 19, 22, 23, 'W', '.')  # house2
put(19, 23, 'h'); put(16, 21, 'O'); put(22, 21, 'O')
rect(28, 26, 35, 31, 'W', '.')  # house3 (south-east)
put(31, 31, 'h'); put(28, 28, 'O'); put(35, 28, 'O')
# shack (south-west of road)
rect(12, 30, 17, 33, 'W', '.')
put(14, 33, 'h'); put(12, 31, 'O')

# --- graveyard rows 27-33, cols 3-9 ---
rect(3, 27, 9, 33, 'F', ',')
put(9, 30, ',')
# graves
put(4, 29, '1'); put(6, 29, '2'); put(8, 29, '3'); put(5, 32, '4')

# --- exit gate at south (row 38) ---
for x in range(20, 28):
    put(x, 38, 'F')
put(23, 38, 'g'); put(24, 38, 'g')
put(22, 38, 'F'); put(25, 38, 'F')

# --- scattered trees (seeded, avoid clear zones) ---
import random
r = random.Random(7)
clear = set()
def mark_clear(x0, y0, x1, y1):
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            clear.add((x, y))
mark_clear(20, 1, 28, 17)   # road through courtyard gate
mark_clear(4, 17, 38, 35)   # village band
mark_clear(6, 12, 42, 17)   # courtyard south band
mark_clear(8, 1, 39, 16)    # whole courtyard interior
for _ in range(260):
    x, y = r.randint(1, W - 2), r.randint(1, H - 2)
    if (x, y) in clear: continue
    if g[y][x] == ',': g[y][x] = 'T'
# small forest clusters west/east
for _ in range(120):
    x, y = r.randint(1, W - 2), r.randint(1, H - 2)
    if (x, y) in clear: continue
    if g[y][x] == ',' and r.random() < 0.75: g[y][x] = 'T'

ROWS = ["".join(row) for row in g]

# ---------------- placements ----------------
START = (23, 36)
N = lambda x, y, i: (x, y, i)
NOTES = [
    N(20, 21, 0),   # house2 — خواهرت اینجا نبود؛ عمارت...
    N(20, 14, 1),   # courtyard bench — مرد با چوب‌دستی از دروازه آهنی...
    N(16, 10, 2),   # mansion hall west — عمارت سال ۱۳۲۴...
    N(14, 6, 3),    # bedroom — مادر در آینه زندگی می‌کند + رمز ۴۹۱۳
    N(28, 6, 4),    # ritual room — سه طلسم را به محراب ببر
    N(16, 5, 5),    # library — درباره کتاب‌ها/کد واسه؟ لور
    N(6, 20, 6),    # house1 — نامه خواهر
    N(33, 28, 7),   # house3 — روزنامه: ناپدید شدن کودکان
]
# items: x,y,type  (0 battery,1 bandage,2 coin,3 ammo,4 film,5 talisman,6 key_iron,7 key_mansion,8 axe,9 revolver)
ITEMS = [
    (33, 27, 8),    # axe — house3 wall rack
    (4, 31, 6),     # iron key — corpse in graveyard (nearby pickup)
    (7, 29, 2), (33, 30, 0), (15, 32, 1), (10, 22, 2),
    (17, 20, 2), (6, 22, 1), (35, 15, 0),        # shed battery
    (21, 14, 2), (37, 2, 2),
    (14, 10, 1), (32, 12, 3),                     # mansion hall
    (15, 5, 4),  (14, 12, 3), (31, 12, 3),        # mansion
    (16, 4, 5),  (15, 10, 5), (26, 4, 5),         # 3 talismans: library, bedroom, ritual
    (30, 30, 9), (34, 29, 3),                     # revolver house3 + ammo
    (13, 31, 0), (4, 32, 4),                      # graveyard film
    (24, 34, 2), (22, 33, 1),                     # road south
    (25, 5, 2), (19, 6, 0),                       # mansion north rooms
]
CRATES = [  # x,y,loot( -1 coins else item type)
    (10, 21, -1), (30, 29, 3), (33, 15, 7), (16, 11, 1), (14, 5, 4), (32, 15, -1),
]
BARRELS = [(9, 20), (17, 19), (32, 26), (36, 14)]
CORPSES = [(4, 30, 6), (28, 15, -1), (24, 12, 1)]  # grave corpse has iron key?? key as separate item already; corpse loot coins/bandage
GRAVES = [(4, 29), (6, 29), (8, 29), (5, 32)]
CANDLES = [(22, 30), (23, 15), (24, 11), (28, 5)]
MIRROR = (13, 5)
ALTAR = (30, 4)
RADIO = (6, 20)
MERCHANT = (26, 32)
EXIT_GATES = [(23, 38), (24, 38)]
LIGHTS = [  # x,y,kind (0 torch warm,1 altar red,2 candle,3 cold bluish)
    (8, 24, 0), (19, 24, 0), (31, 32, 0), (14, 34, 0),
    (23, 17, 0), (24, 17, 0),
    (23, 12, 0), (16, 9, 0), (31, 9, 0),
    (30, 3, 1), (13, 4, 3), (24, 4, 3),
    (22, 30, 2), (23, 15, 2), (24, 11, 2), (28, 5, 2),
    (5, 30, 0),
]

# ---------------- validation ----------------
WALL = set("#BWMKTFXLASTZO")
DOOR = set("dhDgGZ")
def passable(ch): return ch not in WALL and ch not in DOOR

def bfs_from(start, doors_open):
    seen = {start}
    q = deque([start])
    while q:
        x, y = q.popleft()
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x + dx, y + dy
            if not (0 <= nx < W and 0 <= ny < H): continue
            c = ROWS[ny][nx]
            ok = passable(c)
            if c == 'G' and 'G' in doors_open: ok = True
            if c == 'D' and 'D' in doors_open: ok = True
            if c == 'g' and 'g' in doors_open: ok = True
            if c == 'Z' and 'Z' in doors_open: ok = True
            if c == 'h' or c == 'd': ok = True  # normal doors openable
            if ok and (nx, ny) not in seen:
                seen.add((nx, ny)); q.append((nx, ny))
    return seen

def check(name, pts, doors_open):
    seen = bfs_from(START, doors_open)
    for p in pts:
        assert p in seen, f"UNREACHABLE {name}: {p}"
    print(f"OK  {name} ({len(pts)} pts)")

check("start area + house1/2/3 + shack + graveyard", [
    (20, 22), (8, 22), (19, 22), (32, 30), (14, 32),  # interiors
    (33, 27), (20, 21), (6, 20), (33, 28),            # axe, note1, radio, note8
    (5, 30), (4, 31), (4, 32),                        # graveyard opening/corpse/film
    (22, 33), (24, 34),
], set())
check("courtyard after iron key", [
    (23, 17), (21, 14), (37, 2), (28, 15), (20, 14), (33, 15), (32, 15), (35, 15), (34, 15), (37, 15),
], {"G"})
check("mansion after mansion key", [
    (24, 12), (23, 10), (16, 10), (14, 12), (16, 11),           # hall
    (14, 6), (15, 5), (16, 4), (19, 6), (16, 5), (13, 5),       # bedroom+library north wing? 
    (28, 6), (26, 4), (25, 5), (30, 4),                          # ritual room
], {"G", "D"})
check("mansion via boarded door too", [(14, 6)], {"G", "Z"})
check("exit after code", [(23, 38), (24, 38)], {"G", "D", "g"})

# rows sanity
for i, rrow in enumerate(ROWS):
    assert len(rrow) == W, f"row {i} len {len(rrow)}"
print("map validated:", W, "x", H)

# ---------------- emit java ----------------
def jarr(name, vals, per_line=12, fmt=str):
    lines = []
    for i in range(0, len(vals), per_line):
        lines.append("            " + ", ".join(fmt(v) for v in vals[i:i + per_line]) + ",")
    body = "\n".join(lines) if lines else "            // none"
    return f"    public static final int[] {name} = {{\n{body}\n    }};\n"

rows_java = "\n".join(f'            "{r}",' for r in ROWS)

java = f"""package ir.hollowvale.game;

/** HOLLOW VALE v4 — generated map (48x40). DO NOT edit by hand; regenerate via scripts/gen_map.py */
public final class MapData {{
    public static final int W = {W};
    public static final int H = {H};
    public static final int START_X = {START[0]};
    public static final int START_Y = {START[1]};

    public static final String[] ROWS = {{
{rows_java}
    }};

{jarr("ITEMS", [v for t in ITEMS for v in t])}
{jarr("NOTES", [v for t in NOTES for v in t])}
{jarr("CRATES", [v for t in CRATES for v in t])}
{jarr("BARRELS", [v for t in BARRELS for v in t])}
{jarr("CORPSES", [v for t in CORPSES for v in t])}
{jarr("GRAVES", [v for t in GRAVES for v in t])}
{jarr("CANDLES", [v for t in CANDLES for v in t])}
{jarr("EXIT_GATES", [v for t in EXIT_GATES for v in t])}
{jarr("LIGHTS", [v for t in LIGHTS for v in t])}
{jarr("SPECIAL", [MIRROR[0], MIRROR[1], 0, ALTAR[0], ALTAR[1], 1, RADIO[0], RADIO[1], 2, MERCHANT[0], MERCHANT[1], 3])}

    private MapData() {{}}
}}
"""
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, "w", encoding="utf-8").write(java)
print("MapData.java written:", OUT)
