#!/usr/bin/env python3
# Generates MapData.java for HOLLOW VALE native (custom Android engine)
import os

W, H = 44, 34
g = [[' '] * W for _ in range(H)]
for y in range(H):
    for x in range(W):
        g[y][x] = ','

def put(x, y, c):
    if 0 <= x < W and 0 <= y < H:
        g[y][x] = c

def border():
    for x in range(W):
        put(x, 0, '#'); put(x, H-1, '#')
    for y in range(H):
        put(0, y, '#'); put(W-1, y, '#')

def rect_room(x0, y0, x1, y1, wall):
    for x in range(x0, x1+1):
        put(x, y0, wall); put(x, y1, wall)
    for y in range(y0, y1+1):
        put(x0, y, wall); put(x1, y, wall)
    for y in range(y0+1, y1):
        for x in range(x0+1, x1):
            put(x, y, '.')

def protect_list():
    prot = set()
    def addr(x0, y0, x1, y1):
        for y in range(y0, y1+1):
            for x in range(x0, x1+1):
                prot.add((x, y))
    addr(15, 2, 28, 10)      # church
    addr(5, 6, 13, 12)       # house1
    addr(5, 20, 13, 26)      # house2
    addr(30, 6, 38, 12)      # house3
    addr(30, 20, 38, 26)     # house4
    addr(27, 27, 41, 31)     # graveyard
    addr(15, 14, 18, 18)     # plaza
    addr(20, 11, 23, 32)     # vertical road
    addr(3, 16, 40, 17)      # horizontal road
    addr(14, 23, 29, 23)     # alleys
    addr(24, 29, 26, 29)     # graveyard path
    addr(34, 2, 38, 4)       # monster spawn pocket
    addr(21, 33, 22, 33)     # gate
    addr(2, 16, 2, 20)       # forest pocket (talisman)
    return prot

border()

# --- roads ---
for y in range(11, 33):
    for x in (20, 21, 22, 23):
        put(x, y, '.')
for y in (16, 17):
    for x in range(3, 41):
        if g[y][x] == '#':
            continue
        put(x, y, '.')
# alleys to south houses
for x in range(14, 20):
    put(x, 23, '.')
for x in range(24, 30):
    put(x, 23, '.')

# --- plaza + fountain ---
for y in range(14, 19):
    for x in range(15, 19):
        put(x, y, '.')
put(17, 16, 'F')

# --- church ---
rect_room(15, 2, 28, 10, 'S')
put(21, 10, 'C')     # locked church door
put(21, 4, 'A')      # altar
put(18, 6, 'P'); put(24, 6, 'P')

# --- houses ---
rect_room(5, 6, 13, 12, 'B');  put(9, 12, 'D')
rect_room(5, 20, 13, 26, 'B'); put(13, 23, 'D')
rect_room(30, 6, 38, 12, 'B'); put(34, 12, 'D')
rect_room(30, 20, 38, 26, 'B'); put(30, 23, 'D')

# --- graveyard ---
rect_room(27, 27, 41, 31, '#')
for y in range(28, 31):
    for x in range(28, 41):
        put(x, y, ',')
put(27, 29, '.')  # entrance gap
for x in range(24, 27):
    put(x, 29, '.')

# --- gate ---
put(21, 33, 'G'); put(22, 33, 'G')

# --- trees ---
prot = protect_list()
trees = []
trees += [(1, y) for y in range(3, 32, 2)]
trees += [(2, y) for y in [3, 5, 7, 9, 11, 13, 15, 21, 23, 25, 27, 29, 31]]
trees += [(3, y) for y in [5, 9, 13, 21, 25, 29]]
trees += [(4, 4), (4, 19), (4, 28)]
trees += [(x, 1) for x in [2, 4, 6, 8, 10, 12, 14, 30, 32, 34, 36, 38, 40, 42]]
trees += [(33, 3), (31, 2), (39, 2)]
trees += [(42, y) for y in [3, 5, 7, 9, 11, 13, 15, 19, 21, 23, 25]]
trees += [(41, y) for y in [5, 9, 13, 21, 25]]
trees += [(40, 4), (40, 12), (40, 20), (40, 24)]
trees += [(x, 32) for x in [1, 4, 7, 10, 13, 16, 25, 28, 31, 34, 37, 40]]
trees += [(42, 28), (42, 30)]
trees += [(15, 13), (26, 13), (29, 20), (14, 28), (26, 27), (14, 14), (19, 13), (19, 19)]
n_trees = 0
for (x, y) in trees:
    if (x, y) in prot:
        continue
    if g[y][x] == ',':
        put(x, y, 'T'); n_trees += 1

# --- validation ---
from collections import deque
def passable(x, y, doors):
    c = g[y][x]
    if c in '.,':
        return True
    if doors and c == 'D':
        return True
    return False

def bfs(sx, sy, doors=True):
    seen = {(sx, sy)}
    q = deque([(sx, sy)])
    while q:
        x, y = q.popleft()
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < W and 0 <= ny < H and (nx, ny) not in seen and passable(nx, ny, doors):
                seen.add((nx, ny)); q.append((nx, ny))
    return seen

start = (21, 30)
reach = bfs(*start, doors=True)
items_open = [(22,30), (7,8), (11,25), (35,24), (38,29),
              (6,11), (37,7), (30,28), (16,14), (2,20)]
for it in items_open:
    assert it in reach, f"item unreachable: {it}"
# church-internal items validated by adjacency to church door (21,10)
church_adj = any((21+dx, 10+dy) in reach for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)))
assert church_adj, "church door not approachable"
assert (21, 32) in reach and (22, 32) in reach, "gate not approachable"
assert g[30][21] == '.', "start not on road"
# monster reachability (doors openable, church/gate blocked)
mreach = bfs(36, 3, doors=True)
for p in [(21,16),(21,12),(9,13),(27,23),(26,29),(17,15)]:
    assert p in mreach, f"patrol unreachable: {p}"

# --- emit MapData.java ---
rows = [''.join(r) for r in g]
def arr2(name, pairs):
    body = ', '.join('{%d,%d}' % (a, b) for a, b in pairs)
    return f'    public static final int[][] {name} = {{{body}}};\n'

java = []
java.append('package ir.hollowvale.game;\n')
java.append('/** GENERATED by scripts/gen_map_native.py — do not edit by hand. */\n')
java.append('public final class MapData {\n')
java.append(f'    public static final int W = {W}, H = {H};\n')
java.append('    public static final String[] ROWS = {\n')
for r in rows:
    java.append(f'        "{r}",\n')
java.append('    };\n')
def arr1(name, x, y):
    return f'    public static final int[] {name} = {{{x},{y}}};\n'
java.append(arr1('START', start[0], start[1]))
java.append(arr2('TALISMANS', [(6,11),(37,7),(30,28),(16,14),(2,20)]))
java.append(arr2('BATTERIES', [(7,8),(11,25),(35,24),(26,8),(33,30)]))
java.append(arr1('KEY', 38, 29))
java.append(arr1('NOTE_INTRO', 22, 30))
java.append(arr1('NOTE_RITUAL', 19, 9))
java.append(arr1('MONSTER_SPAWN', 36, 3))
java.append(arr2('PATROL', [(21,16),(21,12),(9,13),(27,23),(26,29),(17,15)]))
graves = [(29,28),(31,28),(34,28),(36,28),(40,28),(30,29),(32,29),(35,29),(40,29),
          (29,30),(31,30),(36,30),(39,30),(34,30)]
java.append(arr2('GRAVES', graves))
java.append(arr1('ALTAR', 21, 4))
java.append(arr2('GATE', [(21,33),(22,33)]))
java.append(arr2('CHURCH_DOOR', [(21,10)]))
java.append('}\n')

out = '/home/z/my-project/hollowvale-native/src/ir/hollowvale/game/MapData.java'
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, 'w').write(''.join(java))
print(f"MapData.java written: {W}x{H}, {n_trees} trees, all validation checks PASSED")
for r in rows:
    print(r)
