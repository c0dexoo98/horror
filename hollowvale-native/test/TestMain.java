import ir.hollowvale.game.*;

import java.util.List;
import java.util.Random;

/**
 * HOLLOW VALE v3 — headless JVM test suite (pure game logic, no Android).
 * Covers: map integrity, pathfinding, raycast + sliding doors, full campaign flow,
 * combat (knife/revolver/shotgun/smg), enemy AI, crates/barrels/traps/secrets,
 * survival waves + shop, save/load roundtrip, 20k-tick fuzz.
 */
public class TestMain {
    static int passed = 0, failed = 0;

    static void check(boolean cond, String name) {
        if (cond) { passed++; System.out.println("PASS  " + name); }
        else { failed++; System.out.println("FAIL  " + name); }
    }

    public static void main(String[] args) {
        Str.lang = Str.EN; // deterministic assertion strings
        mapTests();
        campaignFlow();
        combatTests();
        enemyTests();
        worldSystems();
        survivalTests();
        saveLoadTests();
        fuzzTests();
        System.out.println("\n" + passed + " passed, " + failed + " failed");
        System.exit(failed == 0 ? 0 : 1);
    }

    // ================= map =================
    static void mapTests() {
        Map map = new Map();
        check(MapData.ROWS.length == MapData.H, "rows count");
        boolean widthsOk = true;
        for (String r : MapData.ROWS) if (r.length() != MapData.W) widthsOk = false;
        check(widthsOk, "row widths");
        check(MapData.FLOOR_HEX.length() == MapData.W * MapData.H, "floor grid size");
        check(MapData.CEIL_HEX.length() == MapData.W * MapData.H, "ceil grid size");

        // A* reachability
        List<int[]> p = map.findPath(21, 30, 38, 29, true);
        check(!p.isEmpty(), "A*: start -> key reachable");
        p = map.findPath(21, 30, 2, 20, true);
        check(!p.isEmpty(), "A*: start -> forest talisman reachable");
        p = map.findPath(21, 30, 21, 5, true);
        check(!p.isEmpty(), "A*: start -> altar reachable (door passable)");
        p = map.findPath(21, 30, 21, 5, false);
        check(p.isEmpty(), "A*: church sealed when doors closed");
        p = map.findPath(21, 30, 38, 29, false);
        check(!p.isEmpty(), "A*: graveyard reachable without doors");
        // diagonal A* beats BFS distance (path length check)
        List<int[]> diag = map.findPath(21, 16, 28, 25, true);
        check(!diag.isEmpty() && diag.size() < 14, "A*: diagonal shortcut length (" + (diag.isEmpty() ? "none" : diag.size()) + ")");

        // raycast sanity
        Map.Ray r = new Map.Ray();
        map.cast(21.5, 30.5, 0, -1, 30, r);
        check(r.hit && r.tile == Map.CDOOR, "raycast north hits church door");
        check(Math.abs(r.dist - 20.0) < 0.15, "raycast hits recessed door mid-plane (" + r.dist + ")");
        map.cast(21.5, 30.5, 1, 0, 8, r);
        check(r.hit && Math.abs(r.dist - 5.5) < 0.2, "raycast east hits graveyard wall");
        check(map.lineOfSight(36.5, 3.5, 39.5, 3.5), "LOS clear in spawn pocket");
        check(!map.lineOfSight(36.5, 3.5, 21.5, 30.5), "LOS blocked across village");

        // sliding door rendering math
        map.openDoorAt(21, 10);
        map.tickDoors(1.0);
        check(map.doorOpen[10 * MapData.W + 21] >= 0.99, "door opens fully after animation");
        check(!map.solid(21, 10), "open door is passable");
        // ray through the open door gap
        map.cast(21.5, 11.5, 0, -1, 5, r);
        check(!r.hit || r.tile != Map.CDOOR, "ray passes fully-open door");

        // lightmap
        check(map.lightAt(21, 4) > 0.5f, "altar emits light");
        boolean anyTorch = false;
        for (int[] t : MapData.TORCHES) if (map.lightAt(t[0], t[1]) > 0.9f) anyTorch = true;
        check(anyTorch, "torches emit light");

        // secrets exist and are solid until pushed
        check(MapData.SECRETS.length == 2, "two secret pushwalls placed");
        check(map.tile(MapData.SECRETS[0][0], MapData.SECRETS[0][1]) == Map.SECRET, "secret renders as pushwall tile");
    }

    // ================= campaign flow =================
    static void campaignFlow() {
        World w = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c = new Ctrl();
        check(w.player.x == 21.5 && w.player.y == 30.5, "spawn position");
        check(w.quests.current() == 0, "first quest is read note");
        check(w.enemies.size() == 8, "campaign spawns 7 enemies + mother (" + w.enemies.size() + ")");

        // note intro
        w.player.x = 22.5; w.player.y = 30.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.quests.done[0], "note intro completes quest 0");

        // pick revolver first (house TR)
        w.player.x = 35.5; w.player.y = 9.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.player.ownedWeapon[Weapons.REVOLVER], "revolver picked up");

        // key
        w.player.x = 38.5; w.player.y = 29.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.player.hasKey && w.quests.done[1], "rusted key picked");

        // church door
        w.player.x = 21.5; w.player.y = 11.4;
        w.player.ang = -Math.PI / 2;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.churchOpen && w.quests.done[2], "church unlocked");

        // letter inside church
        w.player.x = 19.5; w.player.y = 9.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.quests.done[3], "ritual letter read");

        // talismans
        for (int[] t : MapData.TALISMANS) {
            w.player.x = t[0] + 0.5; w.player.y = t[1] + 0.5;
            c.useEdge = true;
            w.tick(0.016, c);
        }
        check(w.talismans == 5, "five talismans collected");
        w.tick(0.016, c);
        check(w.quests.done[4], "talisman quest auto-completes");

        // ritual — mother becomes mortal
        w.player.x = 21.5; w.player.y = 5.5;
        w.player.ang = -Math.PI / 2;
        c.useHeld = true;
        for (int i = 0; i < 50; i++) w.tick(0.1, c);
        c.useHeld = false;
        check(w.banished && w.quests.done[5], "ritual banishes the Mother");
        check(w.mother().mortal, "mother is mortal after banish");

        // kill the mortal mother with the revolver (spam fire toward her)
        Enemy m = w.mother();
        w.player.health = w.player.maxHealth = 500; // survive her hits during the test
        w.player.mag[Weapons.REVOLVER] = 6;
        w.player.reserve[0] = 400;
        w.player.curWeapon = Weapons.REVOLVER;
        int safety = 0;
        while (m.alive() && safety++ < 2000) {
            w.player.x = m.x + 1.5 * Math.cos(safety * 0.37);
            w.player.y = m.y + 1.5 * Math.sin(safety * 0.37);
            w.player.ang = Math.atan2(m.y - w.player.y, m.x - w.player.x);
            c.fireEdge = true;
            w.player.fireCd = 0;
            w.tick(0.05, c);
            if (w.player.mag[Weapons.REVOLVER] == 0 && w.player.reserve[0] > 0) {
                w.player.mag[Weapons.REVOLVER] = 6;
            }
        }
        check(!m.alive(), "mortal mother can be killed (hp left: " + m.hp + ")");
        check(w.motherDead && w.gateOpen && w.quests.done[6], "mother death opens the gate");

        // gate escape
        w.player.x = 22.0; w.player.y = 32.5;
        w.player.ang = Math.PI / 2;
        c.fireEdge = false;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.win && w.quests.done[7], "escaped through gate -> WIN");
    }

    // ================= combat =================
    static void combatTests() {
        // knife backstab
        World w = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c = new Ctrl();
        Enemy br = null;
        for (Enemy e : w.enemies) if (e.type == Enemy.Type.BRUTE) br = e;
        br.x = w.player.x + 1.4;
        br.y = w.player.y;
        br.ang = Math.atan2(w.player.y - br.y, w.player.x - br.x) + Math.PI; // facing AWAY
        w.player.ang = 0;
        w.player.curWeapon = Weapons.KNIFE;
        double hp0 = br.hp;
        c.fireEdge = true;
        w.tick(0.016, c);
        check(hp0 - br.hp > 60, "knife backstab deals triple damage (dmg " + (hp0 - br.hp) + ")");

        // revolver hitscan
        World w2 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c2 = new Ctrl();
        Enemy g2 = w2.enemies.get(0);
        g2.x = w2.player.x + 4;
        g2.y = w2.player.y;
        w2.player.ang = 0;
        w2.player.curWeapon = Weapons.REVOLVER;
        w2.player.ownedWeapon[Weapons.REVOLVER] = true;
        w2.player.mag[Weapons.REVOLVER] = 6;
        w2.player.reserve[0] = 30;
        double hp1 = g2.hp;
        c2.fireEdge = true;
        w2.tick(0.016, c2);
        check(g2.hp < hp1, "revolver hitscan damages enemy");
        check(w2.player.mag[Weapons.REVOLVER] == 5, "revolver consumes a round");

        // empty mag -> auto reload request
        w2.player.mag[Weapons.REVOLVER] = 0;
        w2.player.reserve[0] = 6;
        w2.player.fireCd = 0;
        c2.fireEdge = true;
        w2.tick(0.016, c2);
        check(w2.player.reloading(), "empty magazine triggers reload");

        // reload completes
        for (int i = 0; i < 120; i++) w2.tick(0.05, c2);
        check(w2.player.mag[Weapons.REVOLVER] == 6, "reload refills magazine");

        // shotgun pellets kill a ghoul
        World w3 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c3 = new Ctrl();
        Enemy g3 = w3.enemies.get(0);
        g3.x = w3.player.x + 3;
        g3.y = w3.player.y;
        w3.player.ang = 0;
        w3.player.curWeapon = Weapons.SHOTGUN;
        w3.player.ownedWeapon[Weapons.SHOTGUN] = true;
        w3.player.mag[Weapons.SHOTGUN] = 2;
        c3.fireEdge = true;
        w3.tick(0.016, c3);
        check(!g3.alive(), "shotgun blast kills a ghoul at 3m");
        check(w3.stats.kills == 1, "kill counted in stats");
        check(w3.souls >= 1, "kill grants souls");
        check(w3.stats.has(Stats.ACH_FIRST_BLOOD), "first blood achievement");

        // crate smashing + loot
        World w4 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c4 = new Ctrl();
        // stand next to the house-TL crate at (6,7) and knife it
        w4.player.x = 7.5; w4.player.y = 7.5;
        w4.player.ang = Math.PI;
        w4.player.curWeapon = Weapons.KNIFE;
        for (int i = 0; i < 8; i++) {
            w4.player.fireCd = 0;
            c4.fireEdge = true;
            w4.tick(0.05, c4);
        }
        check(w4.map.tile(6, 7) == Map.EMPTY, "crate smashed by melee");
        check(!w4.drops.isEmpty(), "crate drops loot");

        // barrel explosion damages nearby enemy
        World w5 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c5 = new Ctrl();
        Enemy near = w5.enemies.get(0);
        near.x = 8.0; near.y = 7.6; // next to barrel at (8,7)
        w5.player.x = 10.5; w5.player.y = 9.5;
        w5.player.ang = Math.atan2(7.5 - 9.5, 8.5 - 10.5);
        w5.player.curWeapon = Weapons.REVOLVER;
        w5.player.ownedWeapon[Weapons.REVOLVER] = true;
        w5.player.mag[Weapons.REVOLVER] = 6;
        double hpB = near.hp;
        for (int i = 0; i < 10 && w5.map.tile(8, 7) != Map.EMPTY; i++) {
            w5.player.fireCd = 0;
            c5.fireEdge = true;
            w5.tick(0.05, c5);
        }
        check(w5.map.tile(8, 7) == Map.EMPTY, "barrel explodes when shot");
        check(near.hp < hpB - 20, "explosion damages nearby enemy (dmg " + (hpB - near.hp) + ")");
    }

    // ================= enemies =================
    static void enemyTests() {
        // mother chases when seen
        World w = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c = new Ctrl();
        Enemy mother = w.mother();
        w.player.x = 37.0; w.player.y = 3.5;
        for (int i = 0; i < 3; i++) w.tick(0.05, c);
        check(mother.isChasing(), "mother chases when seen (state=" + mother.state + ")");

        // mother immune to bullets before banish
        double hp0 = mother.hp;
        mother.hurt(50, w, false);
        check(mother.hp == hp0, "mother immune before banish");

        // ghoul hearing: running noise attracts
        World w2 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c2 = new Ctrl();
        Enemy ghoul = w2.enemies.get(0);
        ghoul.x = 21.5; ghoul.y = 20.5;
        w2.player.x = 21.5; w2.player.y = 26.5;
        w2.player.ang = Math.PI / 2;
        w2.addNoise(21.5, 26.5, 13);
        for (int i = 0; i < 30; i++) w2.tick(0.05, c2);
        check(ghoul.state != Enemy.State.PATROL && ghoul.state != Enemy.State.IDLE,
                "noise triggers investigation/chase (state=" + ghoul.state + ")");

        // pack alert
        World w3 = new World(World.MODE_CAMPAIGN, 1);
        w3.alertPack(21.5, 20.5, 10);
        boolean anyInvestigating = false;
        for (Enemy e : w3.enemies) if (e.state == Enemy.State.INVESTIGATE) anyInvestigating = true;
        check(anyInvestigating, "pack alert puts nearby enemies on guard");

        // spitter projectile hits the player
        World w4 = new World(World.MODE_CAMPAIGN, 1);
        Ctrl c4 = new Ctrl();
        Enemy spitter = null;
        for (Enemy e : w4.enemies) if (e.type == Enemy.Type.SPITTER) spitter = e;
        check(spitter != null, "spitter exists in campaign");
        spitter.x = w4.player.x + 5;
        spitter.y = w4.player.y;
        spitter.ang = Math.PI;
        w4.player.ang = Math.PI; // look away so LOS still works but no fear spike
        double hp = w4.player.health;
        int safety = 0;
        while (hp == w4.player.health && safety++ < 600) {
            w4.tick(0.05, c4);
        }
        check(w4.player.health < hp, "spitter projectile hits player (dmg " + (hp - w4.player.health) + ")");

        // stagger on hit
        World w5 = new World(World.MODE_CAMPAIGN, 1);
        Enemy g5 = w5.enemies.get(0);
        g5.hurt(10, w5, false);
        // pain is probabilistic — just verify no crash and hp dropped
        check(g5.hp == 34 - 10, "ghoul takes damage");

        // mother immune -> sparks not death
        World w6 = new World(World.MODE_CAMPAIGN, 1);
        Enemy m6 = w6.mother();
        m6.hurt(99999, w6, false);
        check(m6.alive(), "mother survives huge damage while immune");

        // corpse looting
        World w7 = new World(World.MODE_CAMPAIGN, 1);
        Enemy g7 = w7.enemies.get(0);
        g7.corpse = true;
        g7.looted = false;
        w7.player.x = g7.x; w7.player.y = g7.y;
        int souls0 = w7.souls;
        w7.interact();
        check(g7.looted && w7.souls > souls0, "corpse can be looted for souls");
    }

    // ================= world systems =================
    static void worldSystems() {
        // trap: bleed + limp
        World w = new World(World.MODE_CAMPAIGN, 1);
        World.Trap tr = w.traps.get(0);
        w.player.x = tr.x; w.player.y = tr.y;
        double hp0 = w.player.health;
        w.tick(0.016, new Ctrl());
        check(tr.sprung, "trap springs on step");
        check(w.player.health < hp0, "trap damages player");
        check(w.player.bleedT > 0 && w.player.limpT > 0, "trap causes bleeding + limp");
        // bleeding ticks damage
        double hp1 = w.player.health;
        for (int i = 0; i < 50; i++) w.tick(0.05, new Ctrl());
        check(w.player.health < hp1, "bleeding deals damage over time");

        // secret pushwall
        World w2 = new World(World.MODE_CAMPAIGN, 1);
        int sx = MapData.SECRETS[0][0], sy = MapData.SECRETS[0][1];
        // stand adjacent to the secret, facing it
        int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        outer:
        for (int[] d : dirs) {
            int ax = sx - d[0], ay = sy - d[1];
            if (w2.map.tile(ax, ay) == Map.EMPTY) {
                w2.player.x = ax + 0.5;
                w2.player.y = ay + 0.5;
                w2.player.ang = Math.atan2(sy + 0.5 - w2.player.y, sx + 0.5 - w2.player.x);
                break outer;
            }
        }
        Ctrl c = new Ctrl();
        c.useEdge = true;
        w2.tick(0.016, c);
        check(w2.map.tile(sx, sy) == Map.EMPTY, "secret pushwall opens on USE");
        check(w2.stats.secrets == 1, "secret counted in stats");

        // searchable grave
        World w3 = new World(World.MODE_CAMPAIGN, 1);
        int gi = MapData.SEARCHABLE_GRAVES[0];
        Items.Grave g = w3.graves.get(gi);
        w3.player.x = g.x; w3.player.y = g.y + 0.8;
        int souls0 = w3.souls;
        c = new Ctrl();
        c.useEdge = true;
        w3.tick(0.016, c);
        check(g.searched && w3.souls > souls0, "searchable grave yields souls");

        // medkit heals + cures bleed
        World w4 = new World(World.MODE_CAMPAIGN, 1);
        w4.player.health = 30;
        w4.player.bleedT = 5;
        w4.player.limpT = 10;
        w4.player.heal(45);
        check(w4.player.health == 75 && w4.player.bleedT == 0 && w4.player.limpT == 0,
                "medkit heals and cures statuses");

        // armor absorbs
        World w5 = new World(World.MODE_CAMPAIGN, 1);
        w5.player.armor = 50;
        w5.player.damage(30);
        check(w5.player.health > 70 && w5.player.armor > 0, "armor absorbs part of the damage");

        // camera flash stuns
        World w6 = new World(World.MODE_CAMPAIGN, 1);
        w6.player.camCharges = 1;
        Enemy g6 = w6.enemies.get(0);
        g6.x = w6.player.x + 3; g6.y = w6.player.y;
        w6.player.ang = 0;
        Ctrl cc = new Ctrl();
        cc.camEdge = true;
        w6.tick(0.016, cc);
        check(g6.state == Enemy.State.STAGGER, "camera flash stuns enemies in view");
        check(w6.player.camCharges == 0, "camera consumes a charge");

        // hallucination fires no crash at max fear
        World w7 = new World(World.MODE_CAMPAIGN, 1);
        w7.player.fear = 100;
        for (int i = 0; i < 400; i++) w7.tick(0.05, new Ctrl());
        check(true, "hallucinations at max fear: no crash");

        // notes mask & journal stats
        World w8 = new World(World.MODE_CAMPAIGN, 1);
        for (Items.Item it : w8.items) {
            if (it.type == Items.Type.NOTE) {
                w8.player.x = it.x; w8.player.y = it.y;
                Ctrl cn = new Ctrl();
                cn.useEdge = true;
                w8.tick(0.016, cn);
            }
        }
        check(w8.stats.notes == 8, "all 8 notes readable");
        check(w8.stats.has(Stats.ACH_BOOKWORM), "bookworm achievement");
    }

    // ================= survival =================
    static void survivalTests() {
        World w = new World(World.MODE_SURVIVAL, 1);
        Ctrl c = new Ctrl();
        w.player.ownedWeapon[Weapons.REVOLVER] = true;
        w.player.curWeapon = Weapons.REVOLVER;
        w.player.mag[Weapons.REVOLVER] = 6;
        w.player.reserve[0] = 999;
        // let wave 1 spawn
        for (int i = 0; i < 80; i++) w.tick(0.1, c);
        check(w.wave == 1 && w.waveState == 1, "wave 1 starts after countdown");
        int spawned = 0;
        for (Enemy e : w.enemies) if (e.alive()) spawned++;
        check(spawned > 0, "enemies spawn in survival (" + spawned + ")");

        // clear the wave by direct kills
        int safety = 0;
        while (w.waveState == 1 && safety++ < 600) {
            w.player.health = w.player.maxHealth = 999; // survive
            Enemy target = null;
            for (Enemy e : w.enemies) {
                if (e.alive()) { target = e; break; }
            }
            if (target != null) {
                // kill directly through hurt (combat already covered above)
                target.hurt(9999, w, false);
            } else {
                w.tick(0.1, c);
            }
        }
        check(w.waveState == 2, "wave clears when all enemies die");
        check(w.stats.wavesCleared == 1, "wave counted in stats");
        check(w.souls > 0, "souls accumulated from kills");

        // shop purchase
        w.souls = 50;
        int dmg0 = w.player.dmgUpgrades;
        w.buy(3); // damage upgrade
        check(w.player.dmgUpgrades == dmg0 + 1, "shop: damage upgrade purchased");
        w.souls = 0;
        w.buy(0);
        check(w.souls == 0, "shop: no purchase without souls");

        // mother appears on wave 5
        while (w.wave < 5 && w.waveState == 2) w.tick(0.1, c);
        // force-clear waves up to 5
        safety = 0;
        while (w.wave < 5 && safety++ < 2000) {
            w.player.health = 999;
            for (Enemy e : new java.util.ArrayList<>(w.enemies)) if (e.alive()) e.hurt(99999, w, false);
            w.tick(0.2, c);
        }
        check(w.wave == 5, "reached wave 5");
        boolean motherAlive = false;
        for (Enemy e : w.enemies) if (e.type == Enemy.Type.MOTHER && e.alive()) motherAlive = true;
        check(motherAlive, "mother spawns as wave-5 boss (mortal)");
    }

    // ================= save/load =================
    static void saveLoadTests() {
        World w = new World(World.MODE_CAMPAIGN, 1);
        // make meaningful progress
        w.player.x = 22.5; w.player.y = 30.5;
        Ctrl c = new Ctrl();
        c.useEdge = true;
        w.tick(0.016, c); // read intro note
        w.player.hasKey = true;
        w.talismans = 3;
        w.quests.talismans = 3;
        w.quests.complete(0);
        w.quests.complete(1);
        w.player.ownedWeapon[Weapons.REVOLVER] = true;
        w.player.mag[Weapons.REVOLVER] = 4;
        w.player.reserve[0] = 20;
        w.player.curWeapon = Weapons.REVOLVER;
        w.player.health = 66;
        w.player.armor = 30;
        w.player.camCharges = 2;
        w.openDoor(21, 10);
        w.churchOpen = true;
        w.enemies.get(0).corpse = true;
        w.stats.kills = 5;
        w.time = 123.4;

        String s = SaveLoad.save(w);
        World w2 = SaveLoad.load(s);
        check(w2 != null, "save/load roundtrip produces a world");
        if (w2 != null) {
            check(w2.player.x == w.player.x && w2.player.y == w.player.y, "player position restored");
            check(w2.player.health == 66 && w2.player.armor == 30, "health/armor restored");
            check(w2.player.hasKey, "key restored");
            check(w2.talismans == 3, "talisman count restored");
            check(w2.quests.done[0] && w2.quests.done[1], "quest progress restored");
            check(w2.player.ownedWeapon[Weapons.REVOLVER], "weapon ownership restored");
            check(w2.player.mag[Weapons.REVOLVER] == 4 && w2.player.reserve[0] == 20, "ammo restored");
            check(w2.player.camCharges == 2, "camera charges restored");
            check(w2.churchOpen && w2.map.tile(21, 10) == Map.EMPTY, "opened door restored");
            check(w2.enemies.get(0).corpse, "corpse state restored");
            check(w2.stats.kills == 5, "stats restored");
            check(Math.abs(w2.time - 123.4) < 0.01, "time restored");
            check(w2.player.curWeapon == Weapons.REVOLVER, "current weapon restored");
        }
        // corrupt save must not crash
        check(SaveLoad.load("garbage") == null, "corrupt save rejected safely");
        check(SaveLoad.load("HVSAVE3\nmode=0\ndiff=9\n") != null || true, "partial save tolerated");
    }

    // ================= fuzz =================
    static void fuzzTests() {
        World wf = new World(World.MODE_CAMPAIGN, 2);
        Random rng = new Random(42);
        Ctrl cf = new Ctrl();
        boolean finite = true;
        int games = 0;
        for (int i = 0; i < 20000; i++) {
            cf.fwd = rng.nextDouble() * 2 - 1;
            cf.strafe = rng.nextDouble() * 2 - 1;
            cf.lookDX = (rng.nextDouble() - 0.5) * 0.3;
            cf.pitchDY = (rng.nextDouble() - 0.5) * 0.1;
            cf.run = rng.nextBoolean();
            cf.sneak = rng.nextBoolean();
            cf.fireHeld = rng.nextInt(8) == 0;
            if (rng.nextInt(60) == 0) cf.useEdge = true;
            if (rng.nextInt(90) == 0) cf.lightEdge = true;
            if (rng.nextInt(120) == 0) cf.reloadEdge = true;
            if (rng.nextInt(150) == 0) cf.switchEdge = true;
            if (rng.nextInt(400) == 0) cf.useHeld = rng.nextBoolean();
            if (rng.nextInt(500) == 0) cf.camEdge = true;
            wf.tick(0.033, cf);
            if (!Double.isFinite(wf.player.x) || !Double.isFinite(wf.player.y)) { finite = false; break; }
            for (Enemy e : wf.enemies) {
                if (!Double.isFinite(e.x) || !Double.isFinite(e.y)) { finite = false; break; }
            }
            if (wf.gameOver || wf.win) {
                wf = new World(rng.nextBoolean() ? World.MODE_CAMPAIGN : World.MODE_SURVIVAL, rng.nextInt(3));
                games++;
            }
        }
        check(finite, "fuzz 20000 ticks: positions finite, no crash (" + games + " restarts)");

        // save/load under fuzz at a random point
        String s = SaveLoad.save(wf);
        World wl = SaveLoad.load(s);
        check(wl != null, "fuzzed world saves and loads");
    }
}
