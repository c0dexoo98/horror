import ir.hollowvale.game.*;

import java.util.List;
import java.util.Random;

/** Headless JVM smoke test of the pure game logic (no Android deps). */
public class TestMain {
    static int passed = 0, failed = 0;

    static void check(boolean cond, String name) {
        if (cond) { passed++; System.out.println("PASS  " + name); }
        else { failed++; System.out.println("FAIL  " + name); }
    }

    public static void main(String[] args) {
        // --- map integrity ---
        Map map = new Map();
        check(MapData.ROWS.length == MapData.H, "rows count");
        boolean widthsOk = true;
        for (String r : MapData.ROWS) if (r.length() != MapData.W) widthsOk = false;
        check(widthsOk, "row widths");

        // BFS reachability (wooden doors passable)
        List<int[]> p = map.findPath(21, 30, 38, 29, true);
        check(!p.isEmpty(), "start -> key reachable");
        p = map.findPath(21, 30, 2, 20, true);
        check(!p.isEmpty(), "start -> forest talisman reachable");
        p = map.findPath(21, 30, 6, 11, true);
        check(!p.isEmpty(), "start -> house1 talisman reachable");
        // church sealed without key
        p = map.findPath(21, 30, 21, 5, false);
        check(p.isEmpty(), "church sealed before unlock");
        // monster reachability
        p = map.findPath(36, 3, 21, 16, true);
        check(!p.isEmpty(), "monster -> plaza reachable");
        p = map.findPath(36, 3, 26, 29, true);
        check(!p.isEmpty(), "monster -> graveyard reachable");

        // raycast sanity
        Map.Ray r = new Map.Ray();
        map.cast(21.5, 30.5, 0, -1, 30, r); // north along road
        check(r.hit && r.tile == Map.CDOOR, "raycast north hits church door");
        check(Math.abs(r.dist - 19.5) < 0.1, "raycast distance correct (" + r.dist + ")");
        map.cast(21.5, 30.5, 1, 0, 8, r);
        check(r.hit && Math.abs(r.dist - 5.5) < 0.2, "raycast east hits graveyard wall (" + r.dist + ")");
        check(map.lineOfSight(36.5, 3.5, 39.5, 3.5), "LOS clear in spawn pocket");
        check(!map.lineOfSight(36.5, 3.5, 21.5, 30.5), "LOS blocked across village");

        // --- full quest flow ---
        World w = new World();
        Ctrl c = new Ctrl();
        check(w.player.x == 21.5 && w.player.y == 30.5, "spawn position");
        check(w.quests.current() == 0, "first quest is read note");

        // note intro at (22,30)
        w.player.x = 22.5; w.player.y = 30.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.quests.done[0], "note intro completes quest 0");

        // key at (38,29)
        w.player.x = 38.5; w.player.y = 29.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.hasKey && w.quests.done[1], "rusted key picked");

        // church door
        w.player.x = 21.5; w.player.y = 11.4;
        w.player.ang = -Math.PI / 2;
        String pr = w.probe();
        check(pr.contains("Unlock"), "church prompt shows unlock (got: " + pr + ")");
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.churchOpen && w.quests.done[2], "church unlocked");
        check(w.map.tile(21, 10) == Map.EMPTY, "church door tile open");

        // letter inside church
        w.player.x = 19.5; w.player.y = 9.5;
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.quests.done[3], "ritual letter read");

        // talismans
        int[][] tal = MapData.TALISMANS;
        for (int[] t : tal) {
            w.player.x = t[0] + 0.5; w.player.y = t[1] + 0.5;
            c.useEdge = true;
            w.tick(0.016, c);
        }
        check(w.talismans == 5, "five talismans collected");
        w.tick(0.016, c);
        check(w.quests.done[4], "talisman quest auto-completes");

        // ritual
        w.player.x = 21.5; w.player.y = 5.5;
        w.player.ang = -Math.PI / 2;
        c.useHeld = true;
        for (int i = 0; i < 50; i++) w.tick(0.1, c);
        c.useHeld = false;
        check(w.banished && w.quests.done[5], "ritual banishes the Mother");

        // gate escape
        w.player.x = 22.0; w.player.y = 32.5;
        w.player.ang = Math.PI / 2;
        pr = w.probe();
        check(pr.contains("Escape"), "gate prompt after banish (got: " + pr + ")");
        c.useEdge = true;
        w.tick(0.016, c);
        check(w.win && w.quests.done[6], "escaped through gate -> WIN");

        // --- monster AI ---
        World w2 = new World();
        Ctrl c2 = new Ctrl();
        w2.player.x = 39.5; w2.player.y = 3.5; // right in front of monster facing east
        w2.tick(0.05, c2); w2.tick(0.05, c2);
        check(w2.monster.state == Monster.State.CHASE, "monster chases when seen (state=" + w2.monster.state + ")");
        check(w2.monster.isChasing(), "chase flag for music");
        for (int i = 0; i < 16; i++) w2.tick(0.05, c2); // closes in and strikes
        check(w2.player.health == 60, "chasing monster catches and wounds player (hp=" + w2.player.health + ")");
        check(w2.monster.state == Monster.State.STUN, "monster stunned after strike (state=" + w2.monster.state + ")");

        // hiding: teleport far away -> search -> patrol
        w2.player.x = 2.5; w2.player.y = 30.5;
        for (int i = 0; i < 90; i++) w2.tick(0.05, c2);
        check(w2.monster.state == Monster.State.SEARCH || w2.monster.state == Monster.State.PATROL,
                "monster loses player (state=" + w2.monster.state + ")");
        for (int i = 0; i < 240; i++) w2.tick(0.05, c2);
        check(w2.monster.state == Monster.State.PATROL, "monster returns to patrol (state=" + w2.monster.state + ")");

        // hearing: run noise attracts
        World w3 = new World();
        Ctrl c3 = new Ctrl();
        c3.run = true; c3.fwd = 1;
        for (int i = 0; i < 40; i++) w3.tick(0.05, c3);
        check(!w3.noises.isEmpty() || w3.monster.state != Monster.State.PATROL, "running emits noises");
        w3.monster.x = 21.5; w3.monster.y = 20.5;
        w3.player.x = 21.5; w3.player.y = 26.5;
        w3.player.ang = Math.PI / 2;
        w3.addNoise(21.5, 26.5, 13);
        for (int i = 0; i < 30; i++) w3.tick(0.05, c3);
        check(w3.monster.state != Monster.State.PATROL, "noise triggers investigation/chase (state=" + w3.monster.state + ")");

        // hit & death
        World w4 = new World();
        w4.bloodT = 0;
        w4.onMonsterHit();
        check(w4.player.health == 60 && w4.bloodT > 0, "monster hit damages player");
        w4.bloodT = 0; w4.onMonsterHit(); w4.bloodT = 0; w4.onMonsterHit();
        check(w4.gameOver, "three hits kill");

        // battery drain
        World w5 = new World();
        w5.player.battery = 0.05;
        w5.tick(0.2, new Ctrl());
        check(!w5.player.lightOn, "flashlight dies at 0 battery");
        w5.player.battery = 50;
        w5.player.lightOn = true;
        double b0 = w5.player.battery;
        w5.tick(1.0, new Ctrl());
        check(w5.player.battery < b0 && w5.player.lightOn, "battery drains while on");

        // stealth: sneaking is quiet
        World w6 = new World();
        Ctrl c6 = new Ctrl();
        c6.sneak = true; c6.fwd = 1;
        for (int i = 0; i < 60; i++) w6.tick(0.05, c6);
        boolean noisy = false;
        for (World.Noise n : w6.noises) if (n.r > 2) noisy = true;
        check(!noisy, "sneaking makes no noise");

        // --- fuzz: random inputs, no crash, no NaN ---
        World wf = new World();
        Random rng = new Random(42);
        Ctrl cf = new Ctrl();
        boolean finite = true;
        for (int i = 0; i < 6000; i++) {
            cf.fwd = rng.nextDouble() * 2 - 1;
            cf.strafe = rng.nextDouble() * 2 - 1;
            cf.lookDX = (rng.nextDouble() - 0.5) * 0.3;
            cf.run = rng.nextBoolean();
            cf.sneak = rng.nextBoolean();
            if (rng.nextInt(60) == 0) cf.useEdge = true;
            if (rng.nextInt(90) == 0) cf.lightEdge = true;
            if (rng.nextInt(400) == 0) cf.useHeld = rng.nextBoolean();
            wf.tick(0.033, cf);
            if (!Double.isFinite(wf.player.x) || !Double.isFinite(wf.player.y)
                    || !Double.isFinite(wf.monster.x) || !Double.isFinite(wf.monster.y)) { finite = false; break; }
            if (wf.gameOver || wf.win) { wf = new World(); }
        }
        check(finite, "fuzz 6000 ticks: positions finite, no crash");

        System.out.println("\n" + passed + " passed, " + failed + " failed");
        System.exit(failed == 0 ? 0 : 1);
    }
}
