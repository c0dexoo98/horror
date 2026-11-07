package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.Random;

/** Game world glue: items, quests, noises, interactions, ritual, win/lose. */
public final class World {
    public final Map map = new Map();
    public final Player player;
    public final Monster monster;
    public final ArrayList<Items.Item> items;
    public final Quests quests = new Quests();
    public final ArrayList<double[]> graves = new ArrayList<>();
    public final Random rng = new Random(777);

    public static final class Noise { public double x, y, r, life; }
    public static final class Msg { public String text; public double t; }

    public final ArrayList<Noise> noises = new ArrayList<>();
    public final ArrayList<Msg> messages = new ArrayList<>();
    private ArrayList<String> sounds = new ArrayList<>();

    public boolean hasKey = false, banished = false, gameOver = false, win = false;
    public boolean readIntro = false, readRitual = false, churchOpen = false;
    public int talismans = 0;
    public double ritualT = 0;
    public boolean ritualActive = false;
    public double bloodT = 0, flashT = 0, time = 0;
    public String prompt = "";
    private double stepAcc = 0, lightningT = 22;
    private int patrolI = 0;

    public World() {
        player = new Player(MapData.START[0] + 0.5, MapData.START[1] + 0.5, -Math.PI / 2);
        items = Items.load();
        monster = new Monster(MapData.MONSTER_SPAWN[0] + 0.5, MapData.MONSTER_SPAWN[1] + 0.5);
        for (int[] g : MapData.GRAVES) graves.add(new double[]{g[0] + 0.5, g[1] + 0.5});
        message("Hollow Vale. 3:07 AM.");
        message("Something is out there. Find a way to break Her curse.");
    }

    public int[] patrolPoint(int i) {
        int[][] P = MapData.PATROL;
        return P[((i % P.length) + P.length) % P.length];
    }

    public void tick(double dt, Ctrl c) {
        if (gameOver || win) return;
        time += dt;

        if (c.lightEdge) {
            c.lightEdge = false;
            if (player.battery > 0) { player.lightOn = !player.lightOn; sound("click"); }
        }
        player.sneaking = c.sneak;

        double ox = player.x, oy = player.y;
        player.update(dt, map, c);
        double mdx = player.x - ox, mdy = player.y - oy;
        double moved = Math.sqrt(mdx * mdx + mdy * mdy);

        map.markExplored(player.x, player.y, 6);

        if (moved > 0.0005) {
            stepAcc += moved;
            double stepLen = player.running ? 2.0 : player.sneaking ? 1.5 : 1.8;
            if (stepAcc >= stepLen) {
                stepAcc = 0;
                sound(player.sneaking ? null : player.running ? "stepRun" : "step");
                addNoise(player.x, player.y, player.sneaking ? 1.6 : player.running ? 13 : 7);
            }
        }

        // fear
        boolean seesM = canPlayerSeeMonster();
        double dm = Math.sqrt((monster.x - player.x) * (monster.x - player.x) + (monster.y - player.y) * (monster.y - player.y));
        double fearUp = 0;
        if (seesM) fearUp += 9;
        if (dm < 7 && !monster.banished) fearUp += 4;
        if (!player.lightOn) fearUp += 2.2;
        if (fearUp > 0) player.fear = Math.min(100, player.fear + fearUp * dt);
        else player.fear = Math.max(0, player.fear - 5.5 * dt);

        for (int i = noises.size() - 1; i >= 0; i--) {
            Noise n = noises.get(i);
            n.life -= dt;
            if (n.life <= 0) noises.remove(i);
        }

        monster.update(dt, this);

        // banishing ritual
        boolean nearAltar = dist(player.x, player.y, MapData.ALTAR[0] + 0.5, MapData.ALTAR[1] + 0.5) < 1.7;
        ritualActive = false;
        if (nearAltar && talismans >= 5 && c.useHeld && !banished) {
            ritualActive = true;
            ritualT += dt;
            if (ritualT >= 4) {
                banished = true;
                monster.banished = true;
                quests.complete(5);
                sound("banish");
                message("A shriek tears the night. She is gone.");
                message("The south gate is open. RUN.");
            }
        } else if (!banished) {
            ritualT = Math.max(0, ritualT - dt * 1.5);
        }

        if (!quests.done[4] && talismans >= 5) quests.complete(4);

        flashT = Math.max(0, flashT - dt);
        lightningT -= dt;
        if (lightningT <= 0) {
            lightningT = 30 + rng.nextInt(45);
            flashT = 0.35;
            sound("thunder");
        }

        bloodT = Math.max(0, bloodT - dt);

        prompt = probe();
        if (c.useEdge) {
            c.useEdge = false;
            interact();
            prompt = probe();
        }

        for (int i = messages.size() - 1; i >= 0; i--) {
            Msg m = messages.get(i);
            m.t -= dt;
            if (m.t <= 0) messages.remove(i);
        }
    }

    public String probe() {
        if (win || gameOver) return "";
        Items.Item best = null; double bd = 1.25;
        for (Items.Item it : items) {
            if (it.taken) continue;
            double d = dist(player.x, player.y, it.x, it.y);
            if (d < bd) { bd = d; best = it; }
        }
        if (best != null) return "[USE] " + actionFor(best);
        Map.Ray r = new Map.Ray();
        map.cast(player.x, player.y, Math.cos(player.ang), Math.sin(player.ang), 1.35, r);
        if (r.hit) {
            if (r.tile == Map.DOOR) return "[USE] Open door";
            if (r.tile == Map.CDOOR) return hasKey ? "[USE] Unlock the church" : "Locked. A rusted key might fit.";
            if (r.tile == Map.GATE) return banished ? "[USE] Escape through the gate" : "Sealed by an old curse.";
            if (r.tile == Map.ALTAR) return altarPrompt();
        }
        if (dist(player.x, player.y, MapData.ALTAR[0] + 0.5, MapData.ALTAR[1] + 0.5) < 1.7) return altarPrompt();
        return "";
    }

    private String altarPrompt() {
        if (banished) return "";
        if (talismans >= 5) return ritualActive ? "BANISHING... " + (int) Math.ceil(4 - ritualT) : "[HOLD USE] Begin the ritual";
        return "The altar wants five wax talismans. (" + talismans + "/5)";
    }

    private String actionFor(Items.Item it) {
        switch (it.type) {
            case BATTERY: return "Take battery";
            case KEY: return "Take the rusted key";
            case TALISMAN: return "Take wax talisman";
            default: return "Read the " + it.label.toLowerCase();
        }
    }

    public void interact() {
        Items.Item best = null; double bd = 1.25;
        for (Items.Item it : items) {
            if (it.taken) continue;
            double d = dist(player.x, player.y, it.x, it.y);
            if (d < bd) { bd = d; best = it; }
        }
        if (best != null) { pick(best); return; }
        Map.Ray r = new Map.Ray();
        map.cast(player.x, player.y, Math.cos(player.ang), Math.sin(player.ang), 1.35, r);
        if (!r.hit) return;
        if (r.tile == Map.DOOR) {
            openDoor(r.mapX, r.mapY);
        } else if (r.tile == Map.CDOOR) {
            if (hasKey) {
                openDoor(r.mapX, r.mapY);
                churchOpen = true;
                quests.complete(2);
                message("The church door groans open.");
            } else {
                sound("locked");
                message("Locked tight. It wants a rusted key.");
            }
        } else if (r.tile == Map.GATE) {
            if (banished && !win) {
                map.setOpen(21, 33);
                map.setOpen(22, 33);
                win = true;
                quests.complete(6);
                sound("gate");
            } else if (!banished) {
                sound("locked");
                message("Sealed by an old curse. The church may know the way.");
            }
        }
    }

    private void pick(Items.Item it) {
        it.taken = true;
        switch (it.type) {
            case BATTERY:
                player.battery = Math.min(100, player.battery + 45);
                sound("pickup");
                message("Battery restored. " + (int) player.battery + "% left.");
                break;
            case KEY:
                hasKey = true;
                sound("pickup");
                quests.complete(1);
                message("The rusted key. It smells of fresh earth.");
                break;
            case TALISMAN:
                talismans++;
                quests.talismans = talismans;
                sound("pickup");
                message("Wax talisman " + talismans + " of 5.");
                break;
            case NOTE:
                sound("paper");
                if (it.id.equals("note_intro")) {
                    readIntro = true;
                    quests.complete(0);
                    message("\"The church is sealed. The rusted key lies with the dead.");
                    message("Do not let her hear you run.\"");
                } else {
                    readRitual = true;
                    quests.complete(3);
                    message("\"Five wax talismans bind Her. Bring them to the altar and hold the rite.");
                    message("Then flee through the south gate.\"");
                }
                break;
        }
    }

    public void openDoor(int tx, int ty) {
        map.setOpen(tx, ty);
        sound("creak");
        addNoise(tx + 0.5, ty + 0.5, 9);
    }

    public void openDoorAuto(int tx, int ty) {
        if (map.tile(tx, ty) == Map.DOOR) {
            map.setOpen(tx, ty);
            sound("creak");
        }
    }

    public void onMonsterHit() {
        if (bloodT > 0.5) return;
        player.health -= 40;
        bloodT = 1.2;
        sound("hit");
        double dx = player.x - monster.x, dy = player.y - monster.y;
        double d = Math.sqrt(dx * dx + dy * dy) + 1e-6;
        double nx = player.x + dx / d * 1.1, ny = player.y + dy / d * 1.1;
        if (!map.circleBlocked(nx, player.y, 0.22)) player.x = nx;
        if (!map.circleBlocked(player.x, ny, 0.22)) player.y = ny;
        player.fear = Math.min(100, player.fear + 25);
        if (player.health <= 0) {
            player.health = 0;
            gameOver = true;
            sound("scream");
        }
    }

    public boolean canPlayerSeeMonster() {
        if (monster.banished) return false;
        double dm = dist(player.x, player.y, monster.x, monster.y);
        if (dm > 14) return false;
        double a = Math.atan2(monster.y - player.y, monster.x - player.x);
        if (Math.abs(angDiff(a, player.ang)) > 0.85) return false;
        return map.lineOfSight(player.x, player.y, monster.x, monster.y);
    }

    public void addNoise(double x, double y, double r) {
        Noise n = new Noise();
        n.x = x; n.y = y; n.r = r; n.life = 0.5;
        noises.add(n);
        if (noises.size() > 24) noises.remove(0);
    }

    public void sound(String s) { if (s != null) sounds.add(s); }

    public ArrayList<String> consumeSounds() {
        ArrayList<String> l = sounds;
        sounds = new ArrayList<>();
        return l;
    }

    public void message(String s) {
        Msg m = new Msg();
        m.text = s; m.t = 4.5;
        messages.add(m);
        if (messages.size() > 4) messages.remove(0);
    }

    public double[] objectiveTarget() {
        switch (quests.current()) {
            case 0: return new double[]{MapData.NOTE_INTRO[0] + 0.5, MapData.NOTE_INTRO[1] + 0.5};
            case 1: return new double[]{MapData.KEY[0] + 0.5, MapData.KEY[1] + 0.5};
            case 2: return new double[]{21.5, 10.5};
            case 3: return new double[]{MapData.NOTE_RITUAL[0] + 0.5, MapData.NOTE_RITUAL[1] + 0.5};
            case 4: {
                double bd = 1e18; double[] b = null;
                for (Items.Item it : items) {
                    if (!it.taken && it.type == Items.Type.TALISMAN) {
                        double d = dist(player.x, player.y, it.x, it.y);
                        if (d < bd) { bd = d; b = new double[]{it.x, it.y}; }
                    }
                }
                return b;
            }
            case 5: return new double[]{MapData.ALTAR[0] + 0.5, MapData.ALTAR[1] + 0.5};
            default: return new double[]{22.0, 32.6};
        }
    }

    public static double dist(double ax, double ay, double bx, double by) {
        double dx = ax - bx, dy = ay - by;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public static double angDiff(double a, double b) {
        double d = a - b;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        return d;
    }
}
