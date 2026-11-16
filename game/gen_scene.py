#!/usr/bin/env python3
# Hollow Vale — HollowEngine edition. Generates scene.hscene (deterministic).
# Village: spawn south, well center, church north (locked door + altar),
# 6 houses, 2 lanterns, south gate, 4 ghoul nests, 8 notes, 5 charms.
import json, sys

B = []  # children

def mesh(name, x, y, z, sx, sy, sz, color, dynamic=False, bounce=None):
    n = {"name": name, "type": "mesh", "position": [x, y, z], "rotation": [0, 0, 0],
         "scale": [sx, sy, sz], "visible": True, "mesh": "cube.obj", "color": color,
         "children": []}
    if dynamic:
        n["dynamic"] = True
        if bounce is not None:
            n["bounciness"] = bounce
    B.append(n)
    return n

def light(name, x, y, z, rx, ry, color, intensity, reach):
    B.append({"name": name, "type": "light", "position": [x, y, z],
              "rotation": [rx, ry, 0], "scale": [1, 1, 1], "visible": True,
              "color": color, "intensity": intensity, "reach": reach, "children": []})

DARK = "#3a3f44"; HOUSE = "#2b2b30"; ROOF = "#1f2126"; WOOD = "#5a3d22"
GROUND = "#3b5e3e"; ALTAR = "#8a6d3b"; NEST = "#6b1f1f"; PAPER = "#d8d3c0"

# ground + border walls (the Vale is enclosed)
mesh("ground", 0, -1.05, 0, 33, 0.1, 33, GROUND)
mesh("wall_n", 0, 1, -27.5, 33, 2, 1, DARK)
mesh("wall_s", 0, 1, 27.5, 33, 2, 1, DARK)
mesh("wall_e", 16.5, 1, 0, 1, 2, 33, DARK)
mesh("wall_w", -16.5, 1, 0, 1, 2, 33, DARK)

# church (north, 10 wide x 8 deep, opening 2.4 in south wall filled by the door)
mesh("ch_n", 0, 1.4, -19.5, 10, 1.8, 0.6, DARK)
mesh("ch_w", -4.7, 1.4, -16, 0.6, 1.8, 7.4, DARK)
mesh("ch_e", 4.7, 1.4, -16, 0.6, 1.8, 7.4, DARK)
mesh("ch_s1", -3.7, 1.4, -12.5, 2.6, 1.8, 0.6, DARK)
mesh("ch_s2", 3.7, 1.4, -12.5, 2.6, 1.8, 0.6, DARK)
mesh("door_church", 0, 1.0, -12.5, 2.4, 1.8, 0.3, WOOD)          # slides up when unlocked
mesh("altar", 0, 0.9, -18.3, 1.4, 0.5, 0.9, ALTAR)
mesh("pedestal", 0, 0.3, -18.3, 1.8, 1.0, 1.3, "#6e5636")
mesh("cross", 0, 2.6, -18.3, 0.2, 1.0, 0.2, "#c9b070")
mesh("candle_a", -3, 0.4, -17, 0.2, 0.8, 0.2, "#e8dfc8")
mesh("candle_b", 3, 0.4, -17, 0.2, 0.8, 0.2, "#e8dfc8")
light("candle_light_a", -3, 1.4, -17, -80, 0, "#ff9d45", 1.1, 8)
light("candle_light_b", 3, 1.4, -17, -80, 0, "#ff9d45", 1.1, 8)

# houses
for i, (hx, hz) in enumerate([(-12, 5), (12, 8), (-14, -4), (15, -2), (-10, -10), (10, -12)]):
    mesh(f"house_{i+1}", hx, 1.4, hz, 4, 1.6, 3, HOUSE)
    mesh(f"roof_{i+1}", hx, 2.45, hz, 4.4, 0.35, 3.4, ROOF)

# lanterns + well
mesh("lantern_a", -12, 1.1, 8.4, 0.4, 1.2, 0.4, "#6e5636")
mesh("lantern_b", 12, 1.1, 10.4, 0.4, 1.2, 0.4, "#6e5636")
light("lantern_light_a", -12, 2.2, 8.4, -80, 0, "#ffb050", 1.0, 9)
light("lantern_light_b", 12, 2.2, 10.4, -80, 0, "#ffb050", 1.0, 9)
mesh("well", 0, 0.5, 8, 1.4, 1.2, 1.4, "#55606a")
mesh("well_post", 0, 1.5, 8, 1.0, 0.25, 0.25, WOOD)

# gate (south) — slides open at the end
mesh("gate_post_e", 3.6, 1.2, 25, 0.7, 2.6, 0.7, WOOD)
mesh("gate_post_w", -3.6, 1.2, 25, 0.7, 2.6, 0.7, WOOD)
mesh("gate_bar", 0, 1.6, 25, 6.5, 0.7, 0.5, "#4a3421")
mesh("gate_sign", 0, 2.6, 25, 1.6, 0.5, 0.15, "#4a3421")

# items: 8 notes, 5 charms, rusty key
mesh("note_1", 0, 0.35, 20.5, 0.3, 0.08, 0.22, PAPER)
mesh("note_2", -4.5, 0.35, 12, 0.3, 0.08, 0.22, PAPER)
mesh("note_3", 6.5, 0.35, 3, 0.3, 0.08, 0.22, PAPER)
mesh("note_4", 0, 0.35, -2, 0.3, 0.08, 0.22, PAPER)
mesh("note_5", -8, 0.35, -8, 0.3, 0.08, 0.22, PAPER)
mesh("note_6", 7, 0.35, -7, 0.3, 0.08, 0.22, PAPER)
mesh("note_7", 0, 1.35, -14.6, 0.3, 0.08, 0.22, PAPER)      # inside church porch
mesh("note_8", -2.6, 1.05, -17.2, 0.3, 0.08, 0.22, PAPER)   # by the altar
mesh("key_rusty", 0, 1.35, 8, 0.28, 0.1, 0.28, "#b08030")   # on the well
for i, (cx, cz) in enumerate([(-12, 10.5), (12, 13), (-14, 1.5), (10, -6.5), (-6, 14)]):
    mesh(f"charm_{i+1}", cx, 0.35, cz, 0.3, 0.3, 0.3, "#d8b64a")

# ghoul nests
for i, (nx, nz) in enumerate([(-15, -8), (15, -6), (-8, -16), (8, -16)]):
    mesh(f"nest_{i+1}", nx, 0.35, nz, 1.0, 0.7, 1.0, NEST)

# player + camera + script
mesh("player", 0, 0.2, 22, 0.8, 0.8, 0.8, "#c9b070", dynamic=True, bounce=0.1)
light("moon", 0, 30, -5, -55, 20, "#a8b6ff", 0.9, 0)
light("flashlight", 0, 0.6, 22, -12, 0, "#e6d9a8", 1.5, 16)  # torch: script aims it
B.append({"name": "camera", "type": "camera", "position": [0, 3, 28],
          "rotation": [-22, 0, 0], "scale": [1, 1, 1], "visible": True,
          "fov": 60, "near": 0.1, "far": 200, "active": True, "children": []})

B.append({"name": "game", "type": "script", "position": [0, 0, 0], "rotation": [0, 0, 0],
          "scale": [1, 1, 1], "visible": True, "path": "vale.hs", "children": []})

scene = {
    "hscene": 2, "name": "hollow-vale", "clear_color": "#05060a",
    "ambient": 0.18, "gravity": 9.8, "fog": 0.35, "shadow_plane_y": -1.0,
    "vignette": 0.45,
    "root": {"name": "root", "type": "node", "position": [0, 0, 0], "rotation": [0, 0, 0],
             "scale": [1, 1, 1], "visible": True, "children": B},
}
out = __file__.replace("gen_scene.py", "scene.hscene")
with open(out, "w") as f:
    json.dump(scene, f, indent=1)
print("wrote", out, f"({len(B)} nodes)")
