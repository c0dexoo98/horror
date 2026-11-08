#!/usr/bin/env python3
"""HOLLOW VALE v3 — MapData generator.
Keeps the proven 44x34 village layout, then enriches it with:
torch lights, breakable crates/barrels, bear traps, pushwall secrets,
survival nests, 4 enemy types, 4 weapons, ammo/medkits/armor, 8 notes,
searchable graves. Emits MapData.java and validates everything with BFS.
"""
import os
from collections import deque

OUT = "/home/z/my-project/hollowvale-native/app/src/main/java/ir/hollowvale/game/MapData.java"

ROWS = [
    "############################################",
    "#,T,T,T,T,T,T,T,,,,,,,,,,,,,,,T,T,T,T,T,T,T#",
    "#,,,,,,,,,,,,,,SSSSSSSSSSSSSS,,T,,,,,,,T,,,#",
    "#TT,,,,,,,,,,,,S............S,,,,T,,,,,,,,T#",
    "#,,,T,,,,,,,,,,S.....A......S,,,,,,,,,,,T,,#",
    "#TTT,,,,,,,,,,,S............S,,,,,,,,,,,,TT#",
    "#,,,,BBBBBBBBB,S..P.....P...S,BBBBBBBBB,,,,#",
    "#TT,,B.......B,S............S,B.......B,,,T#",
    "#,,,,B.......B,S............S,B.......B,,,,#",
    "#TTT,B.......B,S............S,B.......B,,TT#",
    "#,,,,B.......B,SSSSSSCSSSSSSS,B.......B,,,,#",
    "#TT,,B.......B,,,,,,....,,,,,,B.......B,,,T#",
    "#,,,,BBBBDBBBB,,,,,,....,,,,,,BBBBDBBBB,T,,#",
    "#TTT,,,,,,,,,,,T,,,T....,,T,,,,,,,,,,,,,,TT#",
    "#,,,,,,,,,,,,,T....,....,,,,,,,,,,,,,,,,,,,#",
    "#TT,,,,,,,,,,,,....,....,,,,,,,,,,,,,,,,,,T#",
    "#,,..............F.......................,,#",
    "#T,......................................,,#",
    "#,,,,,,,,,,,,,,....,....,,,,,,,,,,,,,,,,,,,#",
    "#T,,T,,,,,,,,,,,,,,T....,,,,,,,,,,,,,,,,,,T#",
    "#,,,,BBBBBBBBB,,,,,,....,,,,,TBBBBBBBBB,T,,#",
    "#TTT,B.......B,,,,,,....,,,,,,B.......B,,TT#",
    "#,,,,B.......B,,,,,,....,,,,,,B.......B,,,,#",
    "#TT,,B.......D................D.......B,,,T#",
    "#,,,,B.......B,,,,,,....,,,,,,B.......B,T,,#",
    "#TTT,B.......B,,,,,,....,,,,,,B.......B,,TT#",
    "#,,,,BBBBBBBBB,,,,,,....,,,,,,BBBBBBBBB,,,,#",
    "#TT,,,,,,,,,,,,,,,,,....,,T###############,#",
    "#,,,T,,,,,,,,,T,,,,,....,,,#,,,,,,,,,,,,,#T#",
    "#TTT,,,,,,,,,,,,,,,,........,,,,,,,,,,,,,#,#",
    "#,,,,,,,,,,,,,,,,,,,....,,,#,,,,,,,,,,,,,#T#",
    "#TT,,,,,,,,,,,,,,,,,....,,,###############,#",
    "#T,,T,,T,,T,,T,,T,,,....,T,,T,,T,,T,,T,,T,,#",
    "#####################GG#####################",
]
W, H = 44, 34
assert len(ROWS) == H
for r in ROWS:
    assert len(r) == W, f"row len {len(r)}"

# legacy positions (kept from v2 — tested)
START = (21, 30)
TALISMANS = [(6, 11), (37, 7), (30, 28), (16, 14), (2, 20)]
BATTERIES = [(7, 8), (11, 25), (35, 24), (26, 8), (33, 30)]
KEY = (38, 29)
NOTE_INTRO = (22, 30)
NOTE_RITUAL = (19, 9)
MONSTER_SPAWN = (36, 3)
PATROL = [(21, 16), (21, 12), (9, 13), (27, 23), (26, 29), (17, 15)]
GRAVES = [(29, 28), (31, 28), (34, 28), (36, 28), (40, 28), (30, 29), (32, 29),
          (35, 29), (40, 29), (29, 30), (31, 30), (36, 30), (39, 30), (34, 30)]
ALTAR = (21, 4)
GATE = [(21, 33), (22, 33)]
CHURCH_DOOR = [(21, 10)]

# ---- new content ----
CHURCH_IN = (16, 3, 27, 9)      # x0,y0,x1,y1
HOUSES = [(6, 7, 12, 11), (31, 7, 37, 11), (6, 21, 12, 25), (31, 21, 37, 25)]
GRAVEYARD = (29, 28, 40, 30)

CRATES = [(6, 7), (31, 7), (6, 25), (37, 24), (16, 8), (16, 3), (12, 7), (32, 22)]
BARRELS = [(8, 7), (36, 9), (7, 21), (37, 21), (19, 3), (23, 17)]
TRAPS = [(8, 13), (36, 13), (22, 18), (24, 25), (33, 30)]
TORCHES = [(17, 3), (26, 3), (17, 9), (26, 9),           # church
           (6, 8), (31, 8), (6, 24), (31, 24),           # houses
           (17, 15), (26, 15),                            # plaza
           (20, 32), (23, 32),                            # gate road
           (38, 28), (30, 30)]                            # graveyard
MEDKITS = [(10, 9), (26, 8), (35, 28)]
AMMO_REV = [(9, 10), (34, 24)]
AMMO_SG = [(20, 8), (12, 22)]
AMMO_SMG = [(35, 23), (24, 20)]
ARMOR = [(27, 3), (39, 28)]
W_REVOLVER = (35, 9)
W_SHOTGUN = (18, 8)
W_SMG = (34, 22)
FLASH_CAM = (6, 22)
NOTES6 = [(2, 28), (9, 8), (36, 10), (10, 24), (24, 5), (3, 15)]
ENEMIES = [("GHOUL", 8, 9), ("GHOUL", 35, 10), ("GHOUL", 8, 23),
           ("GHOUL", 4, 16), ("GHOUL", 3, 16),
           ("SPITTER", 22, 7), ("BRUTE", 22, 26)]
NESTS = [(39, 29), (21, 12), (4, 7), (39, 7), (4, 25), (21, 17)]  # (21,5) removed: inside locked church
SEARCHABLE_GRAVES = [1, 5, 10]   # indices into GRAVES (loot: soul+ammo)

grid = [list(r) for r in ROWS]

def tile(x, y):
    return grid[y][x]

def set_tile(x, y, ch):
    grid[y][x] = ch

def empty(x, y):
    return tile(x, y) == ',' or tile(x, y) == '.'

def in_rect(x, y, r):
    return r[0] <= x <= r[2] and r[1] <= y <= r[3]

# --- validate all placements are on open floor ---
POINTS = ([("TALISMAN", x, y) for x, y in TALISMANS]
          + [("BATTERY", x, y) for x, y in BATTERIES]
          + [("KEY", *KEY), ("NOTE_INTRO", *NOTE_INTRO), ("NOTE_RITUAL", *NOTE_RITUAL)]
          + [("MEDKIT", x, y) for x, y in MEDKITS]
          + [("AMMO_REV", x, y) for x, y in AMMO_REV] + [("AMMO_SG", x, y) for x, y in AMMO_SG]
          + [("AMMO_SMG", x, y) for x, y in AMMO_SMG] + [("ARMOR", x, y) for x, y in ARMOR]
          + [("W_REVOLVER", *W_REVOLVER), ("W_SHOTGUN", *W_SHOTGUN), ("W_SMG", *W_SMG),
             ("FLASH_CAM", *FLASH_CAM)]
          + [("NOTE6", x, y) for x, y in NOTES6]
          + [("ENEMY", x, y) for _, x, y in ENEMIES]
          + [("NEST", x, y) for x, y in NESTS]
          + [("TRAP", x, y) for x, y in TRAPS] + [("TORCH", x, y) for x, y in TORCHES]
          + [("GRAVE", x, y) for x, y in GRAVES]
          + [("START", *START), ("MONSTER", *MONSTER_SPAWN)])
for name, x, y in POINTS:
    if not empty(x, y):
        raise SystemExit(f"!! {name} at {(x, y)} is not open floor ('{tile(x, y)}')")

# crates/barrels replace open floor (become solid until broken)
for x, y in CRATES:
    if not empty(x, y):
        raise SystemExit(f"crate at {(x, y)} not on floor")
    set_tile(x, y, 'K')
for x, y in BARRELS:
    if not empty(x, y):
        raise SystemExit(f"barrel at {(x, y)} not on floor")
    set_tile(x, y, 'R')

# secrets: find pushwall candidates — wall tile with open floor on opposite sides
cands = []
for y in range(1, H - 1):
    for x in range(1, W - 1):
        if tile(x, y) in '#BS':
            if (empty(x - 1, y) and empty(x + 1, y)) or (empty(x, y - 1) and empty(x, y + 1)):
                cands.append((x, y))
# deterministic pick: one near church east wall, one in graveyard south wall
def near(p, q):
    return abs(p[0] - q[0]) + abs(p[1] - q[1])
secret_church = min([c for c in cands if 15 <= c[0] <= 28 and 2 <= c[1] <= 10], key=lambda c: near(c, (28, 6)))
secret_grave = min([c for c in cands if 27 <= c[0] <= 41 and 27 <= c[1] <= 31 and c not in [secret_church]], key=lambda c: near(c, (36, 31)))
SECRETS = [secret_church, secret_grave]
for x, y in SECRETS:
    set_tile(x, y, 'H')

# ---------------- BFS validation (mirrors Java Map.findPath) ----------------
def bfs_passable(ch):
    return ch in ',.D'

def reachable(sx, sy, tx, ty, extra_open=()):
    g = [row[:] for row in grid]
    for x, y in extra_open:
        g[y][x] = ','
    if not bfs_passable(g[ty][tx]):
        return False
    seen = [[False] * W for _ in range(H)]
    q = deque([(sx, sy)])
    seen[sy][sx] = True
    while q:
        x, y = q.popleft()
        if (x, y) == (tx, ty):
            return True
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < W and 0 <= ny < H and not seen[ny][nx] and bfs_passable(g[ny][nx]):
                seen[ny][nx] = True
                q.append((nx, ny))
    return False

# every item / enemy / nest / trap must be reachable from START with doors open
opens = [CHURCH_DOOR[0]]
for name, x, y in POINTS:
    if not reachable(START[0], START[1], x, y, opens):
        raise SystemExit(f"!! {name} at {(x, y)} NOT reachable from start")
for x, y in [(21, 32), (22, 32)]:   # tiles in front of the gate
    if not reachable(START[0], START[1], x, y, opens):
        raise SystemExit("gate approach not reachable")
print("BFS reachability: OK for", len(POINTS), "placements")

# ---------------- floor / ceiling theme grids ----------------
F_DIRT, F_GRASS, F_COBBLE, F_WOOD, F_STONE = 0, 1, 2, 3, 4
C_SKY, C_WOOD, C_STONE = 0, 1, 2
floor = [[F_DIRT] * W for _ in range(H)]
ceil = [[C_SKY] * W for _ in range(H)]
for y in range(H):
    for x in range(W):
        if in_rect(x, y, CHURCH_IN):
            floor[y][x] = F_STONE; ceil[y][x] = C_STONE
        elif any(in_rect(x, y, h) for h in HOUSES):
            floor[y][x] = F_WOOD; ceil[y][x] = C_WOOD
        elif in_rect(x, y, GRAVEYARD):
            floor[y][x] = F_GRASS; ceil[y][x] = C_SKY
        elif grid[y][x] == '.' and 14 <= y <= 19:
            floor[y][x] = F_COBBLE

# ---------------- emit Java ----------------
def jarr2(name, pts):
    """Multi-point array -> int[][] of {x,y} pairs."""
    return "    public static final int[][] %s = {%s};" % (name, ", ".join("{%d, %d}" % p for p in pts))

def jarr1(name, pt):
    """Single point -> flat int[]{x, y}."""
    return "    public static final int[] %s = {%d, %d};" % (name, pt[0], pt[1])

def jarr3(name, pts):
    """Triple array -> int[][] of {a, b, c}."""
    return "    public static final int[][] %s = {%s};" % (name, ", ".join("{%d, %d, %d}" % tuple(p) for p in pts))

def jarr2s(name, items):
    return "    public static final String[] %s = {%s};" % (name, ", ".join('"%s", %d, %d' % e for e in items))

lines = []
a = lines.append
a("package ir.hollowvale.game;")
a("/** GENERATED by scripts/gen_map_native.py (v3) — do not edit by hand. */")
a("public final class MapData {")
a("    public static final int W = %d, H = %d;" % (W, H))
a("    public static final String[] ROWS = {")
for r in grid:
    a('        "%s",' % "".join(r))
a("    };")
a(jarr1("START_A", START))
a("    public static final int[] START = START_A;")
a(jarr2("TALISMANS", TALISMANS))
a(jarr2("BATTERIES", BATTERIES))
a(jarr1("KEY_A", KEY))
a("    public static final int[] KEY = KEY_A;")
a(jarr1("NOTE_INTRO_A", NOTE_INTRO))
a("    public static final int[] NOTE_INTRO = NOTE_INTRO_A;")
a(jarr1("NOTE_RITUAL_A", NOTE_RITUAL))
a("    public static final int[] NOTE_RITUAL = NOTE_RITUAL_A;")
a(jarr2("MEDKITS", MEDKITS))
a(jarr2("AMMO_REV", AMMO_REV))
a(jarr2("AMMO_SG", AMMO_SG))
a(jarr2("AMMO_SMG", AMMO_SMG))
a(jarr2("ARMOR", ARMOR))
a(jarr1("W_REVOLVER_A", W_REVOLVER))
a("    public static final int[] W_REVOLVER = W_REVOLVER_A;")
a(jarr1("W_SHOTGUN_A", W_SHOTGUN))
a("    public static final int[] W_SHOTGUN = W_SHOTGUN_A;")
a(jarr1("W_SMG_A", W_SMG))
a("    public static final int[] W_SMG = W_SMG_A;")
a(jarr1("FLASH_CAM_A", FLASH_CAM))
a("    public static final int[] FLASH_CAM = FLASH_CAM_A;")
a(jarr2("NOTES6", NOTES6))
a(jarr1("MONSTER_SPAWN_A", MONSTER_SPAWN))
a("    public static final int[] MONSTER_SPAWN = MONSTER_SPAWN_A;")
a(jarr2("PATROL", PATROL))
a(jarr2("GRAVES", GRAVES))
a(jarr1("ALTAR_A", ALTAR))
a("    public static final int[] ALTAR = ALTAR_A;")
a(jarr2("GATE", GATE))
a(jarr1("CHURCH_DOOR_A", CHURCH_DOOR[0]))
a("    public static final int[] CHURCH_DOOR = CHURCH_DOOR_A;")
a(jarr2("TRAPS", TRAPS))
a(jarr2("TORCHES", TORCHES))
a(jarr2("NESTS", NESTS))
a(jarr2("SECRETS", SECRETS))
a("    public static final int[] SEARCHABLE_GRAVES = {%s};" % ", ".join(map(str, SEARCHABLE_GRAVES)))
ENEMY_ORD = {"GHOUL": 0, "SPITTER": 1, "BRUTE": 2, "MOTHER": 3}
a(jarr3("ENEMIES", [(ENEMY_ORD[t], x, y) for t, x, y in ENEMIES]))
a("    public static final int[] SEARCH_LOOT = {3, 8}; // souls granted per searchable grave")
# floor/ceiling packed into strings of hex digits for compactness
fs = "".join("%X" % floor[y][x] for y in range(H) for x in range(W))
cs = "".join("%X" % ceil[y][x] for y in range(H) for x in range(W))
a('    public static final String FLOOR_HEX = "%s";' % fs)
a('    public static final String CEIL_HEX = "%s";' % cs)
a("}")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w") as f:
    f.write("\n".join(lines) + "\n")
print("MapData.java written:", OUT)
print("secrets:", SECRETS)
print("rows with K/R/H:", sum(1 for r in grid if any(c in "KRH" for c in r)))
