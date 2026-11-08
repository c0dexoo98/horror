import ir.hollowvale.game.*;

import java.util.Random;

/** Stress: long-running fuzz with combat, survival waves, save/load cycles + perf timing. */
public class StressMain {
    public static void main(String[] args) {
        Str.lang = Str.EN;
        Random rng = new Random(1337);
        long t0 = System.nanoTime();
        int restarts = 0, saves = 0;

        // 1) heavy campaign fuzz with combat
        World w = new World(World.MODE_CAMPAIGN, 2);
        Ctrl c = new Ctrl();
        w.player.ownedWeapon[Weapons.SMG] = true;
        w.player.curWeapon = Weapons.SMG;
        w.player.mag[Weapons.SMG] = 30;
        w.player.reserve[2] = 999;
        for (int i = 0; i < 30000; i++) {
            c.fwd = rng.nextDouble() * 2 - 1;
            c.strafe = rng.nextDouble() * 2 - 1;
            c.lookDX = (rng.nextDouble() - 0.5) * 0.4;
            c.pitchDY = (rng.nextDouble() - 0.5) * 0.2;
            c.run = rng.nextBoolean();
            c.sneak = rng.nextInt(4) == 0;
            c.fireHeld = rng.nextInt(3) == 0;
            c.fireEdge = rng.nextInt(30) == 0;
            if (rng.nextInt(50) == 0) c.useEdge = true;
            if (rng.nextInt(70) == 0) c.reloadEdge = true;
            if (rng.nextInt(90) == 0) c.switchEdge = true;
            if (rng.nextInt(120) == 0) c.lightEdge = true;
            if (rng.nextInt(300) == 0) c.camEdge = true;
            if (rng.nextInt(250) == 0) c.useHeld = rng.nextBoolean();
            if (w.player.mag[Weapons.SMG] == 0) w.player.mag[Weapons.SMG] = 30;
            w.tick(0.033, c);
            if (w.gameOver || w.win) { w = new World(World.MODE_CAMPAIGN, rng.nextInt(3)); restarts++; }
            if (i % 5000 == 0) {
                String sv = SaveLoad.save(w);
                World lw = SaveLoad.load(sv);
                if (lw == null) { System.out.println("STRESS FAIL: save/load at " + i); System.exit(1); }
                saves++;
            }
        }
        System.out.println("campaign fuzz: 30000 ticks OK, restarts=" + restarts + " save/loads=" + saves);

        // 2) survival marathon: 12 waves
        World sw = new World(World.MODE_SURVIVAL, 1);
        Ctrl sc = new Ctrl();
        sw.player.ownedWeapon[Weapons.SMG] = true;
        sw.player.curWeapon = Weapons.SMG;
        int guard = 0, idleHunt = 0;
        while (sw.wave < 12 && guard++ < 400000) {
            sw.player.health = sw.player.maxHealth;
            if (sw.player.mag[Weapons.SMG] == 0) { sw.player.mag[Weapons.SMG] = 30; sw.player.reserve[2] = 999; }
            sc.fireHeld = true;
            Enemy tgt = null;
            double bestD = 1e18;
            for (Enemy e : sw.enemies) {
                if (!e.alive()) continue;
                double d = World.dist(e.x, e.y, sw.player.x, sw.player.y);
                if (d < bestD) { bestD = d; tgt = e; }
            }
            if (tgt != null && bestD < 9) {
                idleHunt = 0;
                sw.player.ang = Math.atan2(tgt.y - sw.player.y, tgt.x - sw.player.x);
                if (sw.player.fireCd <= 0) {
                    sw.tick(0.033, sc);
                } else {
                    sc.fireHeld = false;
                    sw.tick(0.033, sc);
                    sc.fireHeld = true;
                }
            } else {
                idleHunt++;
                sc.fireHeld = false;
                if (idleHunt > 150 && tgt != null) {
                    idleHunt = 0;
                    double a = rng.nextDouble() * Math.PI * 2;
                    double nx = tgt.x + Math.cos(a) * 2, ny = tgt.y + Math.sin(a) * 2;
                    if (!sw.map.circleBlocked(nx, ny, 0.25)) { sw.player.x = nx; sw.player.y = ny; }
                }
                sw.tick(0.033, sc);
                sc.fireHeld = true;
            }
        }
        System.out.println("survival marathon: reached wave " + sw.wave + ", kills=" + sw.stats.kills
                + ", enemies alive=" + sw.enemies.stream().filter(Enemy::alive).count()
                + ", souls=" + sw.souls);

        // 3) pathfinding soak: A* across the whole map from every torch
        Map map = new Map();
        long pT = System.nanoTime();
        int paths = 0;
        for (int[] t : MapData.TORCHES) {
            for (int[] g : MapData.GRAVES) {
                java.util.List<int[]> p = map.findPath(t[0], t[1], g[0], g[1], true);
                if (!p.isEmpty()) paths++;
            }
        }
        System.out.println("pathfinding soak: " + paths + "/196 torch->grave paths, "
                + (System.nanoTime() - pT) / 1000000 + " ms");

        // 4) raycast soak: 100k casts
        pT = System.nanoTime();
        Map.Ray r = new Map.Ray();
        for (int i = 0; i < 100000; i++) {
            double a = rng.nextDouble() * Math.PI * 2;
            map.cast(21.5, 16.5, Math.cos(a), Math.sin(a), 24, r);
        }
        System.out.println("raycast soak: 100k casts, " + (System.nanoTime() - pT) / 1000000 + " ms");

        // 5) tick perf: simulate 2000 ticks at fixed dt, measure
        World pw = new World(World.MODE_CAMPAIGN, 1);
        pT = System.nanoTime();
        Ctrl pc = new Ctrl();
        pc.fwd = 1;
        for (int i = 0; i < 2000; i++) pw.tick(0.033, pc);
        double msPerTick = (System.nanoTime() - pT) / 1000000.0 / 2000;
        System.out.printf("tick perf: %.3f ms/tick (target < 4ms for 30fps headroom)%n", msPerTick);

        long total = (System.nanoTime() - t0) / 1000000;
        System.out.println("STRESS ALL OK in " + total + " ms");
        System.exit(0);
    }
}
