# ============================================================
#  HOLLOW VALE — HollowEngine edition
#  داستان: خواهرت گم شده. درهٔ توخالی. کلیسا. مادر.
#  کمپین ۸ مرحله‌ای: یادداشت → کلید → کلیسا → نامه → ۵ طلسم
#  → آیین طرد → مادر → فرار از دروازهٔ جنوبی
#  پایان‌ها: ESCAPED / BANISHED(DARKNESS)
#  هدلس: بات قطعی بازی را کامل می‌بازد (hollow run)
#  ادیتور: F5 + WASD/جهت‌ها + Q دویدن + C خزیدن + E عمل
#          + F چاقو + G شلیک + R خشاب + T چراغ‌قوه + X فلاش
# ============================================================

srand(1969)

var M = 0                # mission 0..7
var END = ""
var hp = 100
var sanity = 100
var battery = 100
var clip = 6
var reserve = 24
var coins = 0
var notes_found = 0
var charms = 0
var has_key = false
var door_open = false
var torch = true
var t = 0
var flash_stuns = 0
var mother_vulnerable = false
var exposed_at = -1.0
var slash_cd = 0.0
var shoot_cd = 0.0
var flash_cd = 0.0
var hurt_cd = 0.0
var noise = 0.0
var kb_x = 0.0
var kb_z = 0.0
var last_key = -99.0
var story = ""
var story_until = 0.0
var ghouls = []
var mother = null
var m6_phase = 0
var m6_wp = 0
var m7_wp = 0
# anti-stuck: sidestep perpendicular when blocked
var stuck_t = 0.0
var dodge_t = 0.0
var dodge_flip = 1
var last_x = 0.0
var last_z = 0.0

# ---------- helpers ----------

func dist(ax, az, bx, bz):
    var dx = bx - ax
    var dz = bz - az
    return sqrt(dx * dx + dz * dz)

func steer(node, dx, dz, speed):
    var d = sqrt(dx * dx + dz * dz)
    if d < 0.01:
        node.velocity_x = 0
        node.velocity_z = 0
        return false
    node.velocity_x = dx / d * speed
    node.velocity_z = dz / d * speed
    return true

func face(node, dx, dz):
    if abs(dx) + abs(dz) < 0.01:
        return
    node.rotation_y = atan2(-dx, -dz)

func say(msg, seconds):
    story = msg
    story_until = t + seconds

func hurt(dmg):
    if hurt_cd > 0:
        return
    hp = hp - dmg
    hurt_cd = 1.0
    sanity = sanity - 2

# ---------- enemies ----------

class Ghoul:
    var node = null
    var hp = 70
    var state = "patrol"
    var home_x = 0.0
    var home_z = 0.0
    var atk_cd = 0.0

    func _init(node, hx, hz):
        self.node = node
        self.node.dynamic = true
        self.node.bounciness = 0
        self.home_x = hx
        self.home_z = hz

    func tick(delta, player):
        if self.hp <= 0:
            return
        var px = player.position_x
        var pz = player.position_z
        var dx = px - self.node.position_x
        var dz = pz - self.node.position_z
        var d = dist(self.node.position_x, self.node.position_z, px, pz)
        if d < 4 or (noise > 0.5 and d < 10):
            self.state = "hunt"
        elif d > 15 and self.state == "hunt":
            self.state = "patrol"
            say("IT LOST YOU.", 2)
        if self.state == "hunt":
            steer(self.node, dx, dz, 2.6)
            face(self.node, dx, dz)
        else:
            var hx = self.home_x - self.node.position_x
            var hz = self.home_z - self.node.position_z
            if dist(self.node.position_x, self.node.position_z, self.home_x, self.home_z) > 3:
                steer(self.node, hx, hz, 0.8)
            else:
                self.node.velocity_x = cos(t * 0.011 + self.home_x) * 0.7
                self.node.velocity_z = sin(t * 0.011 + self.home_x) * 0.7
        if d < 1.5 and self.atk_cd <= 0:
            hurt(5)
            self.atk_cd = 1.5
        if self.atk_cd > 0:
            self.atk_cd = self.atk_cd - delta

class Mother:
    var node = null
    var hp = 150
    var tp_timer = 6.0
    var frozen = 0.0

    func _init(node):
        self.node = node
        self.node.dynamic = true
        self.node.bounciness = 0

    func tick(delta, player, scene):
        var glow = scene.find("mother_glow")
        if glow != null:
            glow.position_x = self.node.position_x
            glow.position_z = self.node.position_z
        if self.frozen > 0:
            self.frozen = self.frozen - delta
            self.node.velocity_x = 0
            self.node.velocity_z = 0
            return
        var px = player.position_x
        var pz = player.position_z
        var d = dist(self.node.position_x, self.node.position_z, px, pz)
        steer(self.node, px - self.node.position_x, pz - self.node.position_z, 1.6)
        face(self.node, px - self.node.position_x, pz - self.node.position_z)
        if d < 6:
            sanity = sanity - 1.8
        self.tp_timer = self.tp_timer - delta
        if self.tp_timer <= 0:
            var a = rand(0, 360)
            var r = rand(8, 12)
            self.node.position_x = px + sin(a) * r
            self.node.position_z = pz + cos(a) * r
            self.tp_timer = 6
            print("MOTHER SCREAMS FROM A NEW ANGLE")
            say("SHE IS BEHIND YOU.", 2)

# ---------- combat ----------

func nearest_ghoul(max_d):
    var best = null
    var best_d = max_d
    for g in ghouls:
        if g.hp <= 0:
            continue
        var d = dist(scene_p().position_x, scene_p().position_z, g.node.position_x, g.node.position_z)
        if d < best_d:
            best_d = d
            best = g
    return best

func scene_p():
    return scene_find_player()

func scene_find_player():
    # the engine passes the scene into events; keep a global ref up to date
    return P

var P = null

func behind(g):
    # is the player behind the ghoul? dot(facing, toPlayer) < 0
    var ry = g.node.rotation_y
    var fx = -sin(ry)
    var fz = -cos(ry)
    var tx = P.position_x - g.node.position_x
    var tz = P.position_z - g.node.position_z
    var d = sqrt(tx * tx + tz * tz)
    if d < 0.01:
        return false
    return (fx * tx / d + fz * tz / d) < 0

func kill_ghoul(g):
    for i in range(len(ghouls)):
        if ghouls[i].node.name == g.node.name:
            ghouls.pop(i)
            break
    coins = coins + 1
    S.remove(g.node.name)
    print("ghoul down — coins: " + coins)

func scene():
    return S

var S = null

func slash():
    if slash_cd > 0:
        return
    slash_cd = 0.5
    var g = nearest_ghoul(1.8)
    if g == null:
        return
    var dmg = 35
    if behind(g):
        dmg = 105
        say("BACKSTAB!", 1)
    g.hp = g.hp - dmg
    if g.hp <= 0:
        kill_ghoul(g)

func shoot():
    if shoot_cd > 0:
        return
    if clip <= 0:
        if reserve > 0:
            reload()
        return
    shoot_cd = 0.7
    clip = clip - 1
    var ry = P.rotation_y
    var fx = -sin(ry)
    var fz = -cos(ry)
    var best = null
    var best_d = 22
    for g in ghouls:
        if g.hp <= 0:
            continue
        var tx = g.node.position_x - P.position_x
        var tz = g.node.position_z - P.position_z
        var d = sqrt(tx * tx + tz * tz)
        if d > 0.1 and (fx * tx / d + fz * tz / d) > 0.85 and d < best_d:
            best_d = d
            best = g
    if mother != null and mother_vulnerable:
        var tx = mother.node.position_x - P.position_x
        var tz = mother.node.position_z - P.position_z
        var d = sqrt(tx * tx + tz * tz)
        if d > 0.1 and (fx * tx / d + fz * tz / d) > 0.85 and d < best_d:
            best_d = d
            best = mother
    if best == null:
        return
    best.hp = best.hp - 50
    if best == mother:
        if best.hp <= 0:
            banish()
        return
    if best.hp <= 0:
        kill_ghoul(best)

func reload():
    while clip < 6 and reserve > 0:
        clip = clip + 1
        reserve = reserve - 1

func flash():
    if flash_cd > 0 or battery < 15:
        return
    flash_cd = 2.0
    battery = battery - 15
    if mother != null:
        var d = dist(P.position_x, P.position_z, mother.node.position_x, mother.node.position_z)
        if d < 12:
            flash_stuns = flash_stuns + 1
            mother.frozen = 3.0
            if flash_stuns >= 3:
                mother_vulnerable = true
                exposed_at = t
                say("THE CAMERA HURTS HER. STRIKE NOW!", 4)
                print("mother exposed — strike now")
                return
            say("SHE RECOILS FROM THE FLASH (" + flash_stuns + "/3)", 2)
        else:
            say("TOO FAR FOR THE FLASH.", 1.5)

# ---------- missions ----------

var CHARMS = ["charm_1", "charm_2", "charm_3", "charm_4", "charm_5"]

func charm_target():
    for i in range(len(CHARMS)):
        if S.find(CHARMS[i]) != null:
            return CHARMS[i]
    return null

func mission_target():
    if M == 0:
        return ["note_1", 0, 20.5, 1.5]
    if M == 1:
        return ["key_rusty", 0, 8, 2.7]
    if M == 2:
        return ["door_church", 0, -12.5, 2.6]
    if M == 3:
        return ["note_7", 0, -14.6, 1.8]
    if M == 4:
        var cn = charm_target()
        if cn == null:
            return ["altar", 0, -17.5, 3.0]
        var n = S.find(cn)
        return [cn, n.position_x, n.position_z, 1.6]
    if M == 5:
        return ["pedestal", 0, -17.0, 3.0]
    if M == 6:
        return ["pedestal", 0, -17.0, 3.0]
    return ["gate_bar", 0, 25, 2.2]

func mission_text():
    if M == 0:
        return "READ THE NOTE AT YOUR FEET"
    if M == 1:
        return "THE RUSTY KEY LIES AT THE WELL"
    if M == 2:
        return "UNLOCK THE CHURCH DOOR"
    if M == 3:
        return "READ THE LETTER INSIDE THE CHURCH"
    if M == 4:
        return "GATHER THE 5 WAX CHARMS (" + charms + "/5)"
    if M == 5:
        return "PERFORM THE BANISHMENT RITUAL AT THE ALTAR"
    if M == 6:
        if mother_vulnerable:
            return "STRIKE THE MOTHER DOWN"
        return "BLIND HER WITH THE CAMERA FLASH (3 CHARGES)"
    if M == 7:
        return "RUN. SOUTH GATE. NOW."
    return ""

func try_use():
    var px = P.position_x
    var pz = P.position_z
    if M == 0 and dist(px, pz, 0, 20.5) < 1.8:
        notes_found = notes_found + 1
        M = 1
        print("M1: the note reads — \"she is at the church. bring the rusty key.\"")
        say("SHE IS AT THE CHURCH. THE WELL KEEPS THE KEY.", 4)
        return true
    if M == 1 and dist(px, pz, 0, 8) < 3.2:
        S.remove("key_rusty")
        has_key = true
        M = 2
        print("M2: rusty key taken")
        say("THE RUSTY KEY. THE CHURCH WAITS.", 3)
        return true
    if M == 2 and dist(px, pz, 0, -12.5) < 2.9:
        if has_key:
            var door = S.find("door_church")
            door.position_y = 3.4
            door_open = true
            M = 3
            print("M3: the church door groans open")
            say("THE DOOR GROANS OPEN.", 3)
        else:
            say("LOCKED. A RUSTED KEYHOLE.", 2)
        return true
    if M == 3 and dist(px, pz, 0, -14.6) < 2.3:
        notes_found = notes_found + 1
        M = 4
        print("M4: the letter — \"bind her with the five wax charms. banish her at the altar.\"")
        say("FIVE WAX CHARMS. THEN THE ALTAR.", 4)
        return true
    if M == 4:
        for i in range(len(CHARMS)):
            var n = S.find(CHARMS[i])
            if n != null and dist(px, pz, n.position_x, n.position_z) < 2.1:
                S.remove(CHARMS[i])
                charms = charms + 1
                print("charm " + charms + "/5 collected")
                if charms >= 5:
                    M = 5
                    say("ALL FIVE. TO THE ALTAR.", 4)
                else:
                    say("A WAX CHARM (" + charms + "/5)", 2)
                return true
        return false
    if M == 5 and dist(px, pz, 0, -17.2) < 3.5:
        start_ritual()
        return true
    return false

func start_ritual():
    M = 6
    m6_phase = 0
    m6_wp = 0
    print("M6: the ritual burns — SHE MANIFESTS")
    say("SHE COMES. CAMERA READY. FLASH WHEN SHE IS CLOSE.", 5)
    var mnode = S.spawn("mesh", "mother")
    mnode.color = "#3d1f4a"
    mnode.scale_x = 1.5
    mnode.scale_y = 2.6
    mnode.scale_z = 1.5
    mnode.position_x = 0
    mnode.position_y = 1.3
    mnode.position_z = -20
    var glow = S.spawn("light", "mother_glow")
    glow.color = "#b06dff"
    glow.intensity = 1.0
    glow.reach = 6
    glow.position_x = 0
    glow.position_z = -20
    mother = Mother.new(mnode)

func banish():
    print("THE MOTHER BURNS INTO WAX SMOKE — the gate is open")
    say("SHE IS GONE. THE GATE IS OPEN. RUN!", 6)
    sanity = sanity + 60
    hp = hp + 40
    S.remove("mother")
    S.remove("mother_glow")
    mother = null
    M = 7
    m7_wp = 0
    var bar = S.find("gate_bar")
    bar.position_y = 4.2

# ---------- bot (deterministic headless autopilot) ----------

func bot(delta):
    var tgt = mission_target()
    var tx = tgt[1]
    var tz = tgt[2]
    var reach = tgt[3]
    # church routing: notes/altar inside go through the doorway first
    if (M == 3 or M == 5) and P.position_z > -12.0:
        tx = 0
        tz = -13.3
        reach = 0.9
    # M6 phase 0: leave the church (explicit waypoints); phase 1: hunt in the open
    if M == 6 and mother != null and m6_phase == 0:
        if m6_wp >= 2:
            m6_phase = 1
        else:
            var wz = -16.2
            if m6_wp == 1:
                wz = -11.2
            tx = 0
            tz = wz
            reach = 0.8
            if dist(P.position_x, P.position_z, 0, wz) < 0.9:
                m6_wp = m6_wp + 1
    if M == 6 and mother != null and m6_phase == 1:
        tx = mother.node.position_x
        tz = mother.node.position_z
        reach = 2.0
    # M7 escape: doorway → out → swing west past the well → gate
    if M == 7:
        if m7_wp == 0:
            tx = 0
            tz = -16.2
        elif m7_wp == 1:
            tx = 0
            tz = -13.3
        elif m7_wp == 2:
            tx = -4
            tz = 3
        else:
            tx = 0
            tz = 26.8
        reach = 0.8
        if dist(P.position_x, P.position_z, tx, tz) < 0.9:
            m7_wp = m7_wp + 1
    if M == 6 and mother != null:
        var md = dist(P.position_x, P.position_z, mother.node.position_x, mother.node.position_z)
        if not mother_vulnerable and md < 10 and battery >= 15:
            flash()
        if mother_vulnerable:
            if md > 2.2:
                if clip > 0:
                    face(P, mother.node.position_x - P.position_x, mother.node.position_z - P.position_z)
                    shoot()
                elif reserve > 0:
                    reload()
            elif md <= 2.2:
                slash()
    var g = nearest_ghoul(1.7)
    if g != null:
        slash()
    var gh = nearest_ghoul(14)
    if gh != null and gh.state == "hunt":
        var d = dist(P.position_x, P.position_z, gh.node.position_x, gh.node.position_z)
        if d > 2.5 and d < 15:
            if clip > 0:
                face(P, gh.node.position_x - P.position_x, gh.node.position_z - P.position_z)
                shoot()
            elif reserve > 0:
                reload()
    # movement
    var near_gh = nearest_ghoul(11) != null
    var speed = 3.4
    noise = 0.55
    if not near_gh and mother == null:
        speed = 5.2
        noise = 1.0
    if mother_vulnerable:
        speed = 5.2
    if mother != null and not mother_vulnerable:
        if M == 6:
            speed = 2.0
            noise = 0.2
    var dx = tx - P.position_x
    var dz = tz - P.position_z
    if M == 7 and (t * 60) % 120 < 1.0:
        print("DBG m7 pos", P.position_x, P.position_z, " hp", round(hp), " san", round(sanity), " stuck", stuck_t)
    if sqrt(dx * dx + dz * dz) < reach:
        P.velocity_x = 0
        P.velocity_z = 0
        if M == 6 and mother_vulnerable and mother != null:
            slash()
        try_use()
    else:
        # blocked? sidestep perpendicular for a beat, then push on
        if dist(P.position_x, P.position_z, last_x, last_z) < 0.03:
            stuck_t = stuck_t + delta
        else:
            stuck_t = 0
        last_x = P.position_x
        last_z = P.position_z
        if stuck_t > 0.4 and dodge_t <= 0:
            dodge_t = 1.0
            stuck_t = 0
            dodge_flip = -dodge_flip
        if dodge_t > 0:
            dodge_t = dodge_t - delta
            steer(P, -dz * dodge_flip, dx * dodge_flip, speed)
        else:
            steer(P, dx, dz, speed)
            face(P, dx, dz)

# ---------- events ----------

func on_start(node, scene):
    P = scene.find("player")
    S = scene
    print("HOLLOW VALE — find your sister. light is short.")
    say("HOLLOW VALE. READ THE NOTE.", 5)
    for i in range(4):
        var nest = scene.find("nest_" + (i + 1))
        var gn = scene.spawn("mesh", "ghoul_" + (i + 1))
        gn.color = "#6b1f1f"
        gn.scale_x = 0.7
        gn.scale_y = 1.5
        gn.scale_z = 0.7
        gn.position_x = nest.position_x
        gn.position_z = nest.position_z + 2
        ghouls.append(Ghoul.new(gn, nest.position_x, nest.position_z))

func on_update(node, scene, delta):
    t = t + delta
    P = scene.find("player")
    S = scene
    if END != "":
        hud("ENDING: " + END)
        hud("THE VALE REMEMBERS YOU.")
        return
    if slash_cd > 0:
        slash_cd = slash_cd - delta
    if shoot_cd > 0:
        shoot_cd = shoot_cd - delta
    if flash_cd > 0:
        flash_cd = flash_cd - delta
    if hurt_cd > 0:
        hurt_cd = hurt_cd - delta

    # movement intent: keyboard wins for half a second after a press
    if t - last_key < 0.5:
        var kd = sqrt(kb_x * kb_x + kb_z * kb_z)
        if kd > 0:
            noise = 0.55
            if sneak_kb():
                P.velocity_x = kb_x * 1.3
                P.velocity_z = kb_z * 1.3
                noise = 0.15
            else:
                P.velocity_x = kb_x * 3.4
                P.velocity_z = kb_z * 3.4
            face(P, P.velocity_x, P.velocity_z)
        else:
            bot(delta)
    else:
        bot(delta)

    # camera: third person behind the player
    var cam = scene.find("camera")
    var yaw = P.rotation_y
    cam.position_x = P.position_x + sin(yaw) * 5
    cam.position_z = P.position_z + cos(yaw) * 5
    cam.position_y = 2.6
    cam.rotation_x = -24
    cam.rotation_y = yaw

    # flashlight follows the player, flickers, drains
    var fl = scene.find("flashlight")
    fl.position_x = P.position_x - sin(yaw) * 0.4
    fl.position_z = P.position_z - cos(yaw) * 0.4
    fl.position_y = 0.7
    fl.rotation_x = -10
    fl.rotation_y = yaw
    if torch and battery > 0:
        battery = battery - 0.015
        var flick = 0.8 + 0.2 * sin(t * 0.7)
        if battery < 25:
            flick = flick * (battery / 25)
        fl.intensity = 1.35 * flick
    else:
        fl.intensity = 0

    # enemies
    for g in ghouls:
        g.tick(delta, P)
    if mother != null:
        mother.tick(delta, P, scene)

    # fear takes its toll
    if sanity <= 0:
        hp = hp - 1.5 * delta
        sanity = 0

    # endings
    if hp <= 0:
        END = "DARKNESS"
        print("DIED AT", P.position_x, P.position_z, " mission", M, " sanity", round(sanity))
        print("ENDING: DARKNESS — the vale keeps you")
        return
    if M == 7 and P.position_z > 25.7:
        END = "ESCAPED"
        print("ENDING: ESCAPED — you cross the south gate")
        print("STATS: coins " + coins + "  notes " + notes_found + "  charms " + charms + "  hp " + round(hp))
        return

    # hud
    hud("HP " + round(hp) + "  SANITY " + round(sanity) + "  BATTERY " + round(battery))
    hud("M" + M + "/7: " + mission_text())
    hud("AMMO " + clip + "/" + reserve + "  COINS " + coins + "  CHARMS " + charms + "/5")
    if story != "" and t < story_until:
        hud(story)

var sneak = false

func sneak_kb():
    return sneak

func on_input(node, scene, key):
    last_key = t
    if key == "up":
        kb_z = -1
    elif key == "down":
        kb_z = 1
    elif key == "left":
        kb_x = -1
    elif key == "right":
        kb_x = 1
    elif key == "space":
        kb_z = -1
    elif key == "run":
        kb_x = kb_x
        kb_z = kb_z
    elif key == "sneak":
        sneak = not sneak
    elif key == "use":
        try_use()
    elif key == "slash":
        slash()
    elif key == "shoot":
        shoot()
    elif key == "reload":
        reload()
    elif key == "torch":
        torch = not torch
    elif key == "flash":
        flash()
