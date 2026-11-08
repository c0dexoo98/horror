import ir.hollowvale.game.*;

import java.util.List;
import java.util.Random;

/**
 * HOLLOW VALE v4 — headless JVM test suite (pure game logic, no Android).
 * Covers: json, map integrity, collision, interactions, doors+keys+code, quests flow,
 * hunter AI (hearing/vision/path/struggle/kill), mother, merchant, save/load, endings, fuzz.
 */
public class TestMain {
    static int passed = 0, failed = 0;

    static void check(boolean cond, String name) {
        if (cond) { passed++; System.out.println("PASS  " + name); }
        else { failed++; System.out.println("FAIL  " + name); }
    }

    static Input input;

    static Input inp() {
        if (input == null) input = new Input();
        input.clear();
        return input;
    }

    public static void main(String[] args) {
        try {
            jsonTests();
            worldTests();
            interactionTests();
            doorTests();
            hunterTests();
            motherTests();
            merchantTests();
            saveLoadTests();
            questEndingTests();
            fuzzTests();
        } catch (Throwable t) {
            failed++;
            System.out.println("EXCEPTION: " + t);
            t.printStackTrace(System.out);
        }
        System.out.println("\n" + passed + " passed, " + failed + " failed");
        if (failed > 0) System.exit(1);
    }

    // --------------------------------------------------
    static void jsonTests() {
        String s = Json.write(new Object[]{"abc", 12, 3.5, true, null,
                new java.util.HashMap<String, Object>() {{
                    put("k", "v\"x\n");
                    put("n", 7.25);
                    put("l", java.util.Arrays.asList((Object) 1.0, 2.0, 3.0));
                }}});
        Object o = Json.read(s);
        List<Object> l = Json.listOf(o);
        check(l.size() == 6 && "abc".equals(l.get(0)) && Json.intOf(l.get(1), 0) == 12
                        && Math.abs(Json.num(l.get(2), 0) - 3.5) < 1e-9
                        && Json.boolOf(l.get(3), false) && l.get(4) == null,
                "json roundtrip basics");
        java.util.Map<String, Object> m = (java.util.Map<String, Object>) l.get(5);
        check("v\"x\n".equals(Json.strOf(m.get("k"), "")) && Math.abs(Json.num(m.get("n"), 0) - 7.25) < 1e-9
                && Json.listOf(m.get("l")).size() == 3, "json nested escape");
        GameConfig c1 = new GameConfig();
        c1.sens = 2.2f;
        c1.buttons.put("fire", new float[]{0.9f, 0.8f, 1.2f, 0.7f});
        GameConfig c2 = new GameConfig();
        c2.deserialize(c1.serialize());
        check(Math.abs(c2.sens - 2.2f) < 1e-4 && c2.buttons.containsKey("fire"), "config roundtrip");
    }

    // --------------------------------------------------
    static void worldTests() {
        World w = new World();
        check(w.gameState == World.CUTSCENE, "starts in cutscene");
        Input in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.PLAY, "cutscene completes to PLAY");
        check(w.player.x > 1 && w.player.y > 1, "player in map");

        float sy = w.player.y;
        for (int i = 0; i < 120; i++) {
            Input t = inp();
            t.moveY = -1; // forward = north (facing -y)
            w.tick(0.016f, t);
        }
        check(w.player.y < sy - 1f, "moved north");

        w.player.x = 1.5f;
        w.player.y = 1.5f;
        w.player.dir = (float) Math.PI; // face +x east
        for (int i = 0; i < 90; i++) {
            Input t = inp();
            t.moveY = 1;
            w.tick(0.016f, t);
        }
        boolean inside = w.player.x >= 1.0f && w.player.y >= 1.0f && w.player.x < MapData.W && w.player.y < MapData.H;
        check(inside, "collision keeps player in bounds");
        int cx = (int) w.player.x, cy = (int) w.player.y;
        char cell = w.cellAt(cx, cy);
        check(!Raycast.solid(cell, w, cx, cy), "not inside solid cell");
    }

    // --------------------------------------------------
    static void interactionTests() {
        World w = new World();
        skipCut(w);
        w.player.x = 20.5f;
        w.player.y = 22.5f;
        Input in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.NOTE && w.noteShowing == 0, "note opens reader");
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.PLAY && w.notesFound.contains(0), "note registered");
        check(w.quests.isDone(0) && w.quests.isActive(1), "quest 0 -> 1 via note");

        w.player.x = 34.4f;
        w.player.y = 27.6f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.player.hasAxe, "axe picked up");

        w.player.x = 30.5f;
        w.player.y = 30.4f;
        w.player.dir = (float) Math.atan2(29.5f - w.player.y, 30.5f - w.player.x);
        in = inp();
        in.attackPressed = true;
        w.tick(0.016f, in);
        boolean ammoSpawned = false;
        for (World.FloorItem f : w.items) if (f.type == World.IT_AMMO) ammoSpawned = true;
        check(ammoSpawned, "crate dropped ammo");
        w.player.x = 31.3f;
        w.player.y = 29.9f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.player.ammo >= 4, "ammo in pocket");
        w.player.x = 30.5f;
        w.player.y = 30.4f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.player.hasRevolver, "revolver picked up");

        w.player.battery = 20;
        String res = w.useItem(World.IT_BATTERY);
        check(w.player.battery > 50 && res != null, "battery use works");

        w.player.bleeding = true;
        w.player.health = 40;
        w.useItem(World.IT_BANDAGE);
        check(!w.player.bleeding && w.player.health > 55, "bandage heals and stops bleeding");
    }

    // --------------------------------------------------
    static void doorTests() {
        World w = new World();
        skipCut(w);
        w.player.x = 23.5f;
        w.player.y = 17.6f;
        w.player.dir = -(float) Math.PI / 2f;
        Input in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.doorTarget.get(World.idx(23, 16)) < 0.5f, "gate locked without key");
        w.player.give(World.IT_KEY_IRON);
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.doorTarget.get(World.idx(23, 16)) > 0.5f, "gate opens with iron key");

        w.player.x = 23.5f;
        w.player.y = 14.2f;
        w.player.dir = -(float) Math.PI / 2f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.doorTarget.get(World.idx(23, 13)) < 0.5f, "mansion door locked");
        w.player.give(World.IT_KEY_MANSION);
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.doorTarget.get(World.idx(23, 13)) > 0.5f, "mansion door opens with key");

        w.player.give(World.IT_AXE);
        w.player.x = 20.5f;
        w.player.y = 2.5f;
        w.player.dir = (float) Math.PI / 2f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.brokenDoors.contains(World.idx(20, 3)), "boarded door broken by axe");

        w.notesFound.add(3);
        w.codeKnown = true;
        w.player.x = 23.5f;
        w.player.y = 37.4f;
        w.player.dir = (float) Math.PI / 2f;
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.CODE, "code UI opens");
        for (String d : new String[]{"4", "9", "1", "3"}) w.submitCodeDigit(d);
        w.submitCodeDigit("OK");
        check(w.gateCodeOpen == 1, "correct code opens exit");

        // wrong code while closed: simulate fresh closed gate (reuse another world)
        World w2 = new World();
        skipCut(w2);
        w2.codeKnown = true;
        w2.player.x = 23.5f;
        w2.player.y = 37.4f;
        w2.player.dir = (float) Math.PI / 2f;
        Input i2 = inp();
        i2.interactPressed = true;
        w2.tick(0.016f, i2);
        w2.submitCodeDigit("1");
        w2.submitCodeDigit("OK");
        check(w2.gateCodeOpen == 0, "wrong code rejected");
    }

    // --------------------------------------------------
    static void hunterTests() {
        World w = new World();
        skipCut(w);
        w.hunter.wake(w);
        check(w.hunter.state == Hunter.PATROL, "hunter wakes to patrol");
        w.hunter.x = 20.5f;
        w.hunter.y = 20.5f;
        w.player.x = 21.5f;
        w.player.y = 20.5f;
        w.hunter.hear(w, w.player.x, w.player.y, 6);
        check(w.hunter.state == Hunter.INVESTIGATE, "hunter investigates noise");
        boolean path = w.hunter.findPath(w, 21, 20);
        check(path && !w.hunter.path.isEmpty(), "BFS path found");
        w.hunter.faceDir = 0;
        boolean sees = w.hunter.canSeePlayer(w);
        check(sees, "hunter sees player in front");
        for (int i = 0; i < 30; i++) w.hunter.tick(w, 0.05f);
        check(w.hunter.state == Hunter.CHASE, "hunter enters chase");

        w.player.hurtCd = 0;
        w.startStruggle();
        check(w.gameState == World.STRUGGLE, "struggle starts");
        for (int i = 0; i < 9; i++) {
            Input t = inp();
            t.strugTaps = true;
            w.tick(0.016f, t);
        }
        check(w.gameState == World.PLAY, "mashing escapes struggle");
        check(w.hunter.state == Hunter.STUNNED, "hunter stunned after escape");

        // backstab
        w.player.give(World.IT_AXE);
        w.hunter.stun(0f);
        w.hunter.state = Hunter.CHASE;
        w.hunter.faceDir = 0; // hunter faces +x; player approaches from +x behind? behind = opposite of facing
        w.player.crouching = true;
        w.player.x = w.hunter.x + 0.9f;
        w.player.y = w.hunter.y;
        w.player.dir = (float) Math.PI; // look toward hunter (-x)
        Input t = inp();
        t.crouch = true; // crouch must be held for backstab
        t.attackPressed = true;
        w.tick(0.016f, t);
        check(w.hunter.state == Hunter.DEAD, "backstab kills hunter");
        check(w.ach.unlocked[Achievements.A_BACKSTAB], "backstab achievement");

        // revolver kill in open courtyard
        w.hunter = new Hunter(24.5f, 15.5f);
        w.hunter.state = Hunter.CHASE;
        w.player.hasRevolver = true;
        w.player.ammo = 2;
        w.player.crouching = false;
        w.player.x = 28.5f;
        w.player.y = 15.5f;
        w.player.dir = (float) Math.PI; // look at hunter
        Input g = inp();
        g.gunPressed = true;
        w.tick(0.016f, g);
        check(w.player.ammo == 1, "shot consumed ammo");
        check(w.hunter.state == Hunter.DEAD, "revolver kills hunter");
        check(w.ach.unlocked[Achievements.A_GUN_KILL], "gun kill achievement");
    }

    // --------------------------------------------------
    static void motherTests() {
        World w = new World();
        skipCut(w);
        w.mother.appear(w, 24.5f, 10.5f);
        check(w.mother.threatening(), "mother appears");
        float s0 = w.player.sanity;
        w.player.x = 24.5f;
        w.player.y = 13.5f;
        w.player.dir = -(float) Math.PI / 2f;
        for (int i = 0; i < 30; i++) w.mother.tick(w, 0.05f);
        check(w.player.sanity < s0, "looking at mother drains sanity");
        w.player.film = 4;
        int filmBefore = w.filmCount();
        Input in = inp();
        in.cameraPressed = true;
        w.tick(0.016f, in);
        check(w.filmCount() == filmBefore - 1, "photo uses film");
        check(w.mother.state == Mother.FROZEN, "photo stuns mother");
        check(w.ach.unlocked[Achievements.A_PHOTO_STUN], "photo achievement");
        w.mother.state = Mother.STALK;
        w.mother.banish(w);
        check(!w.mother.threatening(), "banished mother no threat");
        w.mother.state = Mother.STALK;
        w.mother.x = w.player.x + 0.3f;
        w.mother.y = w.player.y;
        w.mother.tick(w, 0.016f);
        check(w.gameState == World.DEAD, "mother touch kills");
    }

    // --------------------------------------------------
    static void merchantTests() {
        World w = new World();
        skipCut(w);
        w.player.coins = 5;
        w.inters.add(w.merchant);
        w.player.x = w.merchant.x - 1f;
        w.player.y = w.merchant.y;
        w.player.dir = 0;
        Input in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.DIALOGUE && w.dialogue != null
                && w.dialogue.kind == Dialogue.DLG_MERCHANT, "merchant dialogue opens");
        w.chooseOption(1); // bandage for 1 coin
        check(w.player.coins == 4, "purchase consumed coin");
        boolean hasBand = false;
        for (int i : w.player.inv) if (i == World.IT_BANDAGE) hasBand = true;
        check(hasBand, "bandage bought");
        w.chooseOption(4); // leave
        check(w.gameState == World.PLAY, "merchant bye");
    }

    // --------------------------------------------------
    static void saveLoadTests() {
        World w = new World();
        skipCut(w);
        w.player.x = 30.5f;
        w.player.y = 28.5f;
        w.player.give(World.IT_AXE);
        w.player.give(World.IT_COIN);
        w.player.give(World.IT_COIN);
        w.player.health = 66;
        w.player.sanity = 41;
        w.player.dir = 1.2f;
        w.notesFound.add(0);
        w.notesFound.add(2);
        w.quests.complete(0);
        w.quests.activate(1);
        w.playTime = 123.4f;
        w.deaths = 2;
        w.setDoorOpen(8, 23, 1f);
        w.doorCur.put(World.idx(8, 23), 1f);
        String s = w.serialize();
        check(s.length() > 100, "save serialized");
        World w2 = new World();
        w2.deserialize(s);
        check(Math.abs(w2.player.x - 30.5f) < 0.01f, "pos restored");
        check(Math.abs(w2.player.dir - 1.2f) < 0.001f, "dir restored");
        check(Math.abs(w2.player.health - 66) < 0.01f, "hp restored");
        check(Math.abs(w2.player.sanity - 41) < 0.01f, "sanity restored");
        check(w2.player.hasAxe && w2.player.coins == 2, "inventory restored");
        check(w2.notesFound.contains(0) && w2.notesFound.contains(2), "notes restored");
        check(w2.quests.isDone(0) && w2.quests.isActive(1), "quests restored");
        check(Math.abs(w2.playTime - 123.4f) < 0.5f && w2.deaths == 2, "stats restored");
        check(w2.doorTarget.get(World.idx(8, 23)) > 0.5f, "door state restored");
        check(w2.gameState == World.PLAY, "state=PLAY after load");
        for (int i = 0; i < 120; i++) w2.tick(0.016f, inp());
        check(true, "post-load sim ok");
    }

    // --------------------------------------------------
    static void questEndingTests() {
        World w = new World();
        skipCut(w);
        w.player.x = w.altar.x - 1f;
        w.player.y = w.altar.y;
        w.player.dir = 0;
        Input in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.PLAY, "altar refuses without talismans");
        w.player.give(World.IT_TALISMAN);
        w.player.give(World.IT_TALISMAN);
        w.player.give(World.IT_TALISMAN);
        in = inp();
        in.interactPressed = true;
        w.tick(0.016f, in);
        check(w.gameState == World.DIALOGUE && w.dialogue.kind == Dialogue.DLG_ALTAR, "altar choice opens");
        w.chooseOption(0);
        check(w.gameState == World.ENDING && w.endingId == 1, "banish ending");
        check(w.ach.unlocked[Achievements.A_END_BANISH], "banish achievement");

        World w2 = new World();
        skipCut(w2);
        w2.gateCodeOpen = 1;
        for (int i = 0; i < MapData.EXIT_GATES.length; i += 2) {
            w2.setDoorOpen(MapData.EXIT_GATES[i], MapData.EXIT_GATES[i + 1], 1f);
            w2.doorCur.put(World.idx(MapData.EXIT_GATES[i], MapData.EXIT_GATES[i + 1]), 1f);
        }
        w2.player.x = MapData.EXIT_GATES[0] + 0.5f;
        w2.player.y = MapData.EXIT_GATES[1] + 0.9f;
        Input t = inp();
        t.moveY = 1;
        for (int i = 0; i < 40 && w2.gameState == World.PLAY; i++) w2.tick(0.016f, t);
        check(w2.gameState == World.ENDING && w2.endingId == 0, "escape ending by walking out");

        World w3 = new World();
        skipCut(w3);
        w3.player.health = 5;
        w3.player.hurtCd = 0;
        w3.player.hurt(50, w3);
        check(w3.gameState == World.DEAD, "death state");
    }

    // --------------------------------------------------
    static void fuzzTests() {
        World w = new World();
        skipCut(w);
        Random r = new Random(99);
        w.hunter.wake(w);
        w.player.give(World.IT_AXE);
        w.player.give(World.IT_REVOLVER);
        w.player.ammo = 6;
        w.player.film = 8;
        w.cfgSens = 1f;
        for (int i = 0; i < 6000; i++) {
            Input t = inp();
            t.moveX = r.nextFloat() * 2 - 1;
            t.moveY = r.nextFloat() * 2 - 1;
            t.lookDX = (r.nextFloat() - 0.5f) * 40;
            t.lookDY = (r.nextFloat() - 0.5f) * 20;
            t.run = r.nextBoolean();
            t.crouch = r.nextBoolean();
            if (r.nextInt(30) == 0) t.interactPressed = true;
            if (r.nextInt(40) == 0) t.attackPressed = true;
            if (r.nextInt(60) == 0) t.gunPressed = true;
            if (r.nextInt(60) == 0) t.cameraPressed = true;
            if (r.nextInt(50) == 0) t.lightToggled = true;
            if (r.nextInt(80) == 0) t.strugTaps = true;
            w.tick(0.016f, t);
            if (w.gameState == World.ENDING || w.gameState == World.DEAD) break;
        }
        check(true, "fuzz 6000 ticks no crash");
        check(!Float.isNaN(w.player.x) && !Float.isNaN(w.player.y), "no NaN position");
        check(w.player.x >= 0 && w.player.y >= 0 && w.player.x < MapData.W && w.player.y < MapData.H, "player in map after fuzz");
    }

    // --------------------------------------------------
    static void skipCut(World w) {
        while (w.gameState == World.CUTSCENE) {
            Input t = inp();
            t.interactPressed = true;
            w.tick(0.016f, t);
        }
    }
}
