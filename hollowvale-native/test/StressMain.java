import ir.hollowvale.game.*;

import java.util.Random;

/** Extended headless stress: long fuzz, edge-button storms, stuck-monster checks. */
public class StressMain {
    static int failed = 0;

    static void check(boolean cond, String name) {
        if (!cond) { failed++; System.out.println("FAIL  " + name); }
        else System.out.println("PASS  " + name);
    }

    public static void main(String[] args) {
        Random rng = new Random(1337);

        // --- 60k-tick chaos fuzz incl. all edge buttons + tasks overlay ---
        World wf = new World();
        Ctrl cf = new Ctrl();
        boolean ok = true;
        int deaths = 0, wins = 0, restarts = 0;
        for (int i = 0; i < 60000; i++) {
            cf.fwd = rng.nextDouble() * 2 - 1;
            cf.strafe = rng.nextDouble() * 2 - 1;
            cf.lookDX = (rng.nextDouble() - 0.5) * 0.4;
            cf.run = rng.nextBoolean();
            cf.sneak = rng.nextBoolean();
            if (rng.nextInt(20) == 0) cf.useEdge = true;
            if (rng.nextInt(7) == 0) cf.useHeld = rng.nextBoolean();
            if (rng.nextInt(30) == 0) cf.lightEdge = true;
            if (rng.nextInt(50) == 0) cf.mapEdge = true;
            if (rng.nextInt(50) == 0) cf.tasksEdge = true;
            double dt = 0.008 + rng.nextDouble() * 0.09; // irregular frame pacing
            wf.tick(dt, cf);
            if (!Double.isFinite(wf.player.x) || !Double.isFinite(wf.player.y)
                    || !Double.isFinite(wf.monster.x) || !Double.isFinite(wf.monster.y)
                    || !Double.isFinite(wf.player.fear) || !Double.isFinite(wf.ritualT)) { ok = false; break; }
            // player must never end up inside a solid tile
            if (wf.map.solid((int) wf.player.x, (int) wf.player.y)) { ok = false; System.out.println("FAIL player inside solid at tick " + i + " pos=" + wf.player.x + "," + wf.player.y); break; }
            if (wf.gameOver) { deaths++; wf = new World(); restarts++; }
            if (wf.win) { wins++; wf = new World(); restarts++; }
        }
        check(ok, "60k chaos fuzz: finite, never inside walls");
        System.out.println("      deaths=" + deaths + " wins=" + wins + " restarts=" + restarts);
        check(deaths + wins + restarts > 0, "chaos fuzz reached game end states");

        // --- monster never permanently stuck: teleport to every walkable tile ---
        World w2 = new World();
        w2.monster.banished = false;
        Map map = w2.map;
        int stuck = 0;
        StringBuilder stuckTiles = new StringBuilder();
        for (int ty = 1; ty < MapData.H - 1; ty += 2) {
            for (int tx = 1; tx < MapData.W - 1; tx += 2) {
                if (map.solid(tx, ty)) continue;
                // fresh world per tile: otherwise a single kill by the (working!)
                // AI poisons every later tile via the gameOver early-return
                w2 = new World();
                map = w2.map;
                w2.monster.x = tx + 0.5; w2.monster.y = ty + 0.5;
                w2.monster.state = Monster.State.PATROL;
                w2.monster.banished = false;
                double mx0 = w2.monster.x, my0 = w2.monster.y;
                Ctrl c2 = new Ctrl();
                for (int i = 0; i < 180; i++) w2.tick(0.05, c2); // 9 seconds
                double moved = Math.sqrt((w2.monster.x - mx0) * (w2.monster.x - mx0) + (w2.monster.y - my0) * (w2.monster.y - my0));
                if (moved < 0.5) {
                    // enclosed pocket? (no path to plaza = unreachable for player too)
                    boolean isolated = map.findPath(tx, ty, 21, 16, true).isEmpty();
                    if (!isolated) { stuck++; stuckTiles.append(" (").append(tx).append(",").append(ty).append(")"); }
                }
            }
        }
        check(stuck == 0, "monster patrols from every player-reachable tile (stuck=" + stuck + stuckTiles + ")");

        // --- ritual with interrupted hold (release & re-press) still completes ---
        World w3 = new World();
        w3.player.x = MapData.ALTAR[0] + 0.5; w3.player.y = MapData.ALTAR[1] + 1.0;
        for (int[] t : MapData.TALISMANS) { /* give 5 talismans directly */ }
        w3.talismans = 5;
        Ctrl c3 = new Ctrl();
        // hold 2s, release 1s, hold to completion
        c3.useHeld = true;
        for (int i = 0; i < 20; i++) w3.tick(0.1, c3);
        c3.useHeld = false;
        for (int i = 0; i < 10; i++) w3.tick(0.1, c3);
        check(w3.ritualT < 1.5, "ritual decays when released (t=" + String.format("%.2f", w3.ritualT) + ")");
        c3.useHeld = true;
        for (int i = 0; i < 40; i++) w3.tick(0.1, c3);
        check(w3.banished, "interrupted ritual completes on re-hold");

        // --- battery math: full drain time sane (no instant death of light) ---
        World w4 = new World();
        w4.monster.banished = true; // idle player would be caught otherwise (AI working as intended)
        Ctrl c4 = new Ctrl();
        double tSum = 0;
        while (w4.player.lightOn && tSum < 400) { w4.tick(0.1, c4); tSum += 0.1; }
        check(!w4.player.lightOn && tSum > 180 && tSum < 220, "battery 100%->0 lasts ~200s (" + String.format("%.0f", tSum) + "s)");

        // --- fear decays when safe and light on ---
        World w5 = new World();
        w5.monster.banished = true; // idle player would be caught otherwise (AI working as intended)
        w5.player.fear = 80;
        Ctrl c5 = new Ctrl();
        for (int i = 0; i < 320; i++) w5.tick(0.05, c5); // 16s: (80-5)/5.5 ≈ 13.6s needed
        check(w5.player.fear < 5, "fear decays to calm (f=" + String.format("%.1f", w5.player.fear) + ")");

        System.out.println("\n" + (failed == 0 ? "ALL STRESS TESTS PASSED" : failed + " FAILURES"));
        System.exit(failed == 0 ? 0 : 1);
    }
}
