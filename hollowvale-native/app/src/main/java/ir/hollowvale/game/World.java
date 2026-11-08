package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

/**
 * HOLLOW VALE v4 — the world: map state, items, interactions, quests, events, save/load.
 * Pure JVM (no android.*) so the headless test suite can validate every system.
 */
public class World {

    // ---------------- item types ----------------
    public static final int IT_BATTERY = 0, IT_BANDAGE = 1, IT_COIN = 2, IT_AMMO = 3, IT_FILM = 4;
    public static final int IT_TALISMAN = 5, IT_KEY_IRON = 6, IT_KEY_MANSION = 7, IT_AXE = 8, IT_REVOLVER = 9;
    public static final int IT_NOTE = 10;

    // sprite atlas tiles (must match sprites.png grid)
    public static final int T_HUNTER0 = 0, T_HUNTER_DEAD = 5, T_MOTHER0 = 8, T_GHOST = 10, T_MERCHANT = 11;
    public static final int T_CORPSE1 = 32, T_CORPSE2 = 33, T_BARREL = 34, T_CRATE = 35, T_GRAVE = 36;
    public static final int T_MIRROR = 37, T_ALTAR = 38, T_RADIO = 39, T_CANDLES = 40, T_LEVER = 41;

    // game states
    public static final int PLAY = 0, DIALOGUE = 1, NOTE = 2, CODE = 3, DEAD = 4, ENDING = 5, STRUGGLE = 6, CUTSCENE = 7;

    // interactable kinds
    static final int K_CRATE = 0, K_BARREL = 1, K_CORPSE = 2, K_GRAVE = 3, K_CANDLE = 4,
            K_MIRROR = 5, K_ALTAR = 6, K_RADIO = 7, K_MERCHANT = 8;

    public static final Random RNG = new Random(1324);

    // ---------------- state ----------------
    public Player player = new Player();
    public Hunter hunter;
    public Mother mother = new Mother();
    public Quests quests = new Quests();
    public Achievements ach = new Achievements();

    public int gameState = CUTSCENE;
    public int endingId = -1;

    public final Map<Integer, Float> doorCur = new HashMap<Integer, Float>();   // idx → 0..1
    public final Map<Integer, Float> doorTarget = new HashMap<Integer, Float>();
    public final Set<Integer> brokenDoors = new HashSet<Integer>();
    public int gateCodeOpen = 0;   // 1 after correct code

    public static final class FloorItem extends Ent {
        public int type;      // item type or IT_NOTE
        public int noteId = -1;

        public FloorItem(float x, float y, int tile, float scale, int type) {
            super(x, y, tile, scale);
            this.type = type;
        }
    }

    public static final class Inter extends Ent {
        public int kind;
        public int idx;
        public int loot = -1;
        public boolean used = false;   // looted/searched/broken/lit...

        public Inter(float x, float y, int tile, float scale, int kind, int idx) {
            super(x, y, tile, scale);
            this.kind = kind;
            this.idx = idx;
        }
    }

    public final List<FloorItem> items = new ArrayList<FloorItem>();
    public final List<Inter> inters = new ArrayList<Inter>();
    public final List<Ent> fx = new ArrayList<Ent>(); // hallucinations & transient sprites

    public Inter mirror, altar, radio, merchant;
    public int[] merchantStock = new int[]{2, 3, 2, 2}; // battery, bandage, ammo, film
    public boolean merchantGone = false;

    public final Set<Integer> notesFound = new HashSet<Integer>();
    public int noteShowing = -1;
    public boolean codeKnown = false;
    public String codeInput = "";
    public Dialogue dialogue;
    public int altarChoicePending = 0;

    public float playTime = 0;
    public int deaths = 0;
    public int coinsTotal = 0;
    public float noLightTime = 0;
    public boolean movedOnce = false;
    public int whisperCd = 0;

    // effects for renderer/audio
    public float lightning = 0, damageFlash = 0, pickFlash = 0, camFlash = 0;
    public float chaseMusic = 0;
    public float shake = 0;
    public final List<String> sounds = new ArrayList<String>();
    public final List<String> toasts = new ArrayList<String>();
    public String toastText = "";
    public float toastT = 0;

    // struggle
    public float struggleTime = 0, struggleNeed = 0, struggleTaps = 0;

    // intro cutscene
    public String[] cutLines;
    public int cutIdx = 0;

    private float lightningNext = 8;
    private float halluCd = 20;
    private float whisperT = 0;
    private boolean mansionEntered = false;

    // ---------------------------------------------------------------- setup
    public World() {
        newGame();
    }

    private void loadStatic() {
        // doors
        for (int y = 0; y < MapData.H; y++) {
            String row = MapData.ROWS[y];
            for (int x = 0; x < MapData.W; x++) {
                char c = row.charAt(x);
                if (Raycast.isDoor(c)) {
                    doorCur.put(idx(x, y), 0f);
                    doorTarget.put(idx(x, y), 0f);
                }
            }
        }
        // floor items
        int[] it = MapData.ITEMS;
        for (int i = 0; i + 2 < it.length; i += 3) {
            items.add(new FloorItem(it[i] + 0.5f, it[i + 1] + 0.5f, tileForItem(it[i + 2]), 0.45f, it[i + 2]));
        }
        int[] nt = MapData.NOTES;
        for (int i = 0; i + 2 < nt.length; i += 3) {
            FloorItem f = new FloorItem(nt[i] + 0.5f, nt[i + 1] + 0.5f, 21, 0.4f, IT_NOTE);
            f.noteId = nt[i + 2];
            items.add(f);
        }
        int i = 0;
        int[] cr = MapData.CRATES;
        for (i = 0; i + 2 < cr.length; i += 3) {
            Inter e = new Inter(cr[i] + 0.5f, cr[i + 1] + 0.5f, T_CRATE, 0.85f, K_CRATE, i / 3);
            e.loot = cr[i + 2];
            inters.add(e);
        }
        int[] ba = MapData.BARRELS;
        for (i = 0; i < ba.length; i += 2) {
            inters.add(new Inter(ba[i] + 0.5f, ba[i + 1] + 0.5f, T_BARREL, 0.8f, K_BARREL, i / 2));
        }
        int[] co = MapData.CORPSES;
        for (i = 0; i + 2 < co.length; i += 3) {
            Inter e = new Inter(co[i] + 0.5f, co[i + 1] + 0.5f, T_CORPSE1, 0.75f, K_CORPSE, i / 3);
            e.loot = co[i + 2];
            inters.add(e);
        }
        int[] gr = MapData.GRAVES;
        for (i = 0; i < gr.length; i += 2) {
            inters.add(new Inter(gr[i] + 0.5f, gr[i + 1] + 0.5f, T_GRAVE, 0.9f, K_GRAVE, i / 2));
        }
        int[] ca = MapData.CANDLES;
        for (i = 0; i < ca.length; i += 2) {
            Inter e = new Inter(ca[i] + 0.5f, ca[i + 1] + 0.5f, 25, 0.5f, K_CANDLE, i / 2);
            inters.add(e);
        }
        int[] sp = MapData.SPECIAL;
        for (i = 0; i + 2 < sp.length; i += 3) {
            int kind = sp[i + 2];
            int tile2 = kind == 0 ? T_MIRROR : kind == 1 ? T_ALTAR : kind == 2 ? T_RADIO : T_MERCHANT;
            float sc = kind == 0 ? 1.1f : kind == 1 ? 1.0f : 0.9f;
            Inter e = new Inter(sp[i] + 0.5f, sp[i + 1] + 0.5f, tile2, sc,
                    kind == 0 ? K_MIRROR : kind == 1 ? K_ALTAR : kind == 2 ? K_RADIO : K_MERCHANT, i / 3);
            if (kind == 0) mirror = e;
            else if (kind == 1) altar = e;
            else if (kind == 2) radio = e;
            else merchant = e;
            if (kind != 3) inters.add(e);
        }
        cutLines = Str.INTRO_TEXTS.split("\\|");
        hunter = new Hunter(MapData.START_X + 6.5f, 18.5f); // spawns dormant in the forest
    }

    public static int tileForItem(int type) {
        switch (type) {
            case IT_BATTERY: return 16;
            case IT_BANDAGE: return 17;
            case IT_COIN: return 22;
            case IT_AMMO: return 23;
            case IT_FILM: return 24;
            case IT_TALISMAN: return 20;
            case IT_KEY_IRON:
            case IT_KEY_MANSION: return 19;
            case IT_AXE: return 26;
            case IT_REVOLVER: return 27;
            default: return 21;
        }
    }

    public void newGame() {
        player = new Player();
        player.x = MapData.START_X + 0.5f;
        player.y = MapData.START_Y + 0.5f;
        player.dir = -(float) Math.PI / 2f; // face north
        quests = new Quests();
        notesFound.clear();
        codeKnown = false;
        codeInput = "";
        playTime = 0;
        coinsTotal = 0;
        noLightTime = 0;
        movedOnce = false;
        mansionEntered = false;
        merchantGone = false;
        merchantStock = new int[]{2, 3, 2, 2};
        mother = new Mother();
        hunter = new Hunter(MapData.START_X + 6.5f, 18.5f);
        for (Map.Entry<Integer, Float> e : doorCur.entrySet()) e.setValue(0f);
        for (Map.Entry<Integer, Float> e : doorTarget.entrySet()) e.setValue(0f);
        brokenDoors.clear();
        gateCodeOpen = 0;
        items.clear();
        inters.clear();
        fx.clear();
        loadStatic();
        gameState = CUTSCENE;
        cutIdx = 0;
        endingId = -1;
        dialogue = null;
        noteShowing = -1;
        lightning = 0;
        chaseMusic = 0;
        toasts.clear();
        toastText = "";
        toastT = 0;
        snd("start_game");
    }

    // ---------------------------------------------------------------- map helpers
    public static int idx(int x, int y) { return y * MapData.W + x; }

    public boolean inBounds(int x, int y) {
        return x >= 0 && y >= 0 && x < MapData.W && y < MapData.H;
    }

    /** raw map char; '#' outside. */
    public char cellAt(int x, int y) {
        if (!inBounds(x, y)) return '#';
        return MapData.ROWS[y].charAt(x);
    }

    public char cell(int x, int y) { return cellAt(x, y); }

    public float doorOpenAmount(int x, int y) {
        if (brokenDoors.contains(idx(x, y))) return 1f;
        Float f = doorCur.get(idx(x, y));
        return f == null ? 0f : f;
    }

    public void setDoorOpen(int x, int y, float target) {
        Integer k = idx(x, y);
        if (doorTarget.containsKey(k)) doorTarget.put(k, target);
    }

    // ---------------------------------------------------------------- utilities
    public void snd(String s) {
        if (sounds.size() < 12) sounds.add(s);
    }

    public void toast(String t) {
        toastText = t;
        toastT = 3.2f;
    }

    public boolean unlockAch(int id) {
        boolean u = ach.unlock(id);
        if (u) snd("achievement");
        return u;
    }

    public float distToPlayer(float x, float y) {
        float dx = x - player.x, dy = y - player.y;
        return (float) Math.sqrt(dx * dx + dy * dy);
    }

    // ---------------------------------------------------------------- main tick
    public void tick(float dt, Input in) {
        playTime += dt;
        if (toastT > 0) toastT -= dt;

        // global effect timers
        if (lightning > 0) lightning -= dt * 2.2f;
        if (damageFlash > 0) damageFlash -= dt * 1.6f;
        if (pickFlash > 0) pickFlash -= dt * 3f;
        if (camFlash > 0) camFlash -= dt * 4f;
        if (shake > 0) shake -= dt * 2f;
        lightningNext -= dt;
        if (lightningNext <= 0) {
            lightningNext = 12 + RNG.nextFloat() * 16;
            lightning = 0.75f + RNG.nextFloat() * 0.25f;
            snd(RNG.nextBoolean() ? "thunder" : "thunder_far");
        }

        float chaseTarget = (hunter != null && hunter.state == Hunter.CHASE) ? 1f : 0f;
        if (chaseMusic < chaseTarget) chaseMusic = Math.min(chaseTarget, chaseMusic + dt * 2);
        else if (chaseMusic > chaseTarget) chaseMusic = Math.max(chaseTarget, chaseMusic - dt * 0.8f);

        switch (gameState) {
            case CUTSCENE:
                if (in.interactPressed) {
                    cutIdx++;
                    snd("ui_select");
                    if (cutIdx >= cutLines.length) {
                        gameState = PLAY;
                    }
                }
                return;

            case DIALOGUE:
                if (in.interactPressed) {
                    // handled by UI choosing options; tapping through info dialogs:
                    if (dialogue != null && (dialogue.options == null || dialogue.options.length == 0)) {
                        dialogue = null;
                        gameState = PLAY;
                        snd("ui_back");
                    }
                }
                return;

            case NOTE:
                if (in.interactPressed) {
                    noteShowing = -1;
                    gameState = PLAY;
                    snd("note_close");
                }
                return;

            case CODE:
                // digits are entered via HUD buttons calling submitCodeDigit()
                return;

            case DEAD:
            case ENDING:
                return;

            case STRUGGLE:
                struggleTime -= dt;
                struggleTaps += in.strugTaps ? 1 : 0;
                if (in.strugTaps) snd("struggle_hit");
                if (struggleTaps >= struggleNeed) {
                    // escaped
                    gameState = PLAY;
                    if (hunter != null) hunter.stun(4.5f);
                    player.hurtCd = 1.6f;
                    // knockback away from hunter
                    float dx = player.x - hunter.x, dy = player.y - hunter.y;
                    float d = (float) Math.max(0.3f, Math.sqrt(dx * dx + dy * dy));
                    float[] mv = Raycast.move(this, player.x, player.y, dx / d * 2.2f, dy / d * 2.2f, 0.32f);
                    player.x = mv[0];
                    player.y = mv[1];
                    player.sanity = Math.max(0, player.sanity - 12);
                    toast("رها شدی! فرار کن!");
                    snd("enemy_attack");
                } else if (struggleTime <= 0) {
                    onPlayerDeath();
                }
                return;

            case PLAY:
                break;
        }

        // ---------------- player movement ----------------
        Player p = player;
        if (p.hurtCd > 0) p.hurtCd -= dt;
        float spd = p.moveSpeed(this);
        boolean moving = Math.abs(in.moveX) > 0.05f || Math.abs(in.moveY) > 0.05f;
        boolean running = in.run && moving && p.stamina > 1 && !p.crouching;
        if (running) {
            spd = 3.55f;
            p.stamina = Math.max(0, p.stamina - dt * 21f);
        } else {
            p.stamina = Math.min(100, p.stamina + dt * (p.crouching ? 16f : 11f));
        }
        p.crouching = in.crouch;

        float vx = 0, vy = 0;
        if (moving) {
            float mx = in.moveX, my = in.moveY;
            float len = (float) Math.sqrt(mx * mx + my * my);
            if (len > 1) { mx /= len; my /= len; }
            float c = (float) Math.cos(p.dir), s = (float) Math.sin(p.dir);
            float f = -my; // forward (joystick up)
            vx = (c * f - s * mx) * spd * dt;
            vy = (s * f + c * mx) * spd * dt;
            float[] r = Raycast.move(this, p.x, p.y, vx, vy, 0.3f);
            p.x = r[0];
            p.y = r[1];
            p.stepDist += spd * dt;
            p.bob += dt * (running ? 11f : 6.5f);
            if (!movedOnce) {
                movedOnce = true;
                unlockAch(Achievements.A_FIRST_STEP);
            }
            // footsteps + noise
            float stride = p.crouching ? 0.85f : running ? 0.72f : 0.8f;
            if (p.stepDist > stride) {
                p.stepDist = 0;
                snd(p.crouching ? "step_crouch" : running ? "step_run" : "step_walk");
            }
        }
        p.bobAmt += ((moving ? (running ? 1f : 0.55f) : 0f) - p.bobAmt) * Math.min(1, dt * 8);
        p.noise = running ? 6.5f : p.crouching ? 0.7f : 2.6f;
        if (moving && hunter != null) hunter.hear(this, p.x, p.y, p.noise);

        // look
        float look = in.lookDX * (0.0032f * cfgSens);
        if (cfgInvert) look = -look;
        p.dir += look;
        p.pitch -= in.lookDY * (0.0026f * cfgSens) * (cfgInvert ? -1 : 1);
        p.pitch = Math.max(-0.65f, Math.min(0.65f, p.pitch));

        // flashlight & battery
        if (in.lightToggled) {
            p.flashlight = !p.flashlight;
            snd("flashlight_click");
        }
        if (p.flashlight) {
            p.battery = Math.max(0, p.battery - dt * 1.15f);
            if (p.battery <= 0) {
                p.flashlight = false;
                toast("باتری چراغ‌قوه تمام شد!");
            }
        } else {
            noLightTime += dt;
            if (noLightTime > 600) unlockAch(Achievements.A_NO_LIGHT);
        }

        // bleeding
        if (p.bleeding) {
            p.health -= dt * 0.7f;
            if (p.health <= 0) {
                p.health = 0;
                onPlayerDeath();
                return;
            }
        }

        // sanity: darkness vs candlelight
        boolean nearCandle = false;
        for (Inter e : inters) {
            if (e.kind == K_CANDLE && e.used && distToPlayer(e.x, e.y) < 2.6f) {
                nearCandle = true;
                break;
            }
        }
        if (nearCandle) {
            p.sanity = Math.min(100, p.sanity + dt * 3.5f);
        } else if (!p.flashlight) {
            p.sanity = Math.max(0, p.sanity - dt * 0.55f);
        }
        whisperT -= dt;
        if (p.sanity < 38 && whisperT <= 0) {
            whisperT = 7 + RNG.nextFloat() * 7;
            snd("whisper_loop");
            if (RNG.nextBoolean()) toast(Str.WHISPER_LINES[RNG.nextInt(Str.WHISPER_LINES.length)]);
        }
        halluCd -= dt;
        if (p.sanity < 34 && halluCd <= 0) {
            halluCd = 16 + RNG.nextFloat() * 14;
            spawnHallucination();
        }

        // heartbeat at low health/sanity
        if ((p.health < 30 || p.sanity < 18) && RNG.nextFloat() < dt * 0.9f) {
            snd("heartbeat_loop");
        }

        // ---------------- entities ----------------
        if (hunter != null) {
            hunter.tick(this, dt);
        }
        mother.tick(this, dt);

        // doors animation
        for (Map.Entry<Integer, Float> e : doorTarget.entrySet()) {
            int k = e.getKey();
            float cur = doorCur.get(k);
            float t = e.getValue();
            if (Math.abs(cur - t) > 0.001f) {
                float nv = cur + Math.signum(t - cur) * dt * 1.8f;
                nv = Math.max(0, Math.min(1, nv));
                doorCur.put(k, nv);
            }
        }

        // ---------------- edge actions ----------------
        if (in.interactPressed) doInteract();
        if (in.attackPressed) doAttack();
        if (in.gunPressed) doShoot();
        if (in.cameraPressed) doPhoto();
        if (in.crouch && in.interactPressed) { /* reserved */ }

        // exit gate escape
        if (gateCodeOpen == 1) {
            int px = (int) p.x, py = (int) p.y;
            for (int i2 = 0; i2 < MapData.EXIT_GATES.length; i2 += 2) {
                if (MapData.EXIT_GATES[i2] == px && MapData.EXIT_GATES[i2 + 1] == py) {
                    triggerEnding(0);
                    return;
                }
            }
        }

        // merchant spawn condition
        if (!merchantGone && merchant != null && player.talismans >= 2 && !inters.contains(merchant)) {
            inters.add(merchant);
            toast("کسی در دهکده منتظرت است…");
        }

        // quest trigger: mansion entered
        if (!mansionEntered && (int) p.y <= 13 && (int) p.x >= 12 && (int) p.x <= 35) {
            mansionEntered = true;
            quests.complete(2);
            quests.activate(3);
            toast(Str.QUEST_TITLES[3] + ": " + Str.QUEST_DESCS[3]);
            if (hunter != null) hunter.wake(this);
            autoSave();
        }

        in.consumeEdges();
    }

    // ---------------------------------------------------------------- actions
    public float cfgSens = 1f;
    public boolean cfgInvert = false;

    private void spawnHallucination() {
        for (int tries = 0; tries < 24; tries++) {
            float ang = RNG.nextFloat() * (float) Math.PI * 2;
            float d = 3 + RNG.nextFloat() * 3.5f;
            float hx = player.x + (float) Math.cos(ang) * d;
            float hy = player.y + (float) Math.sin(ang) * d;
            int cx = (int) hx, cy = (int) hy;
            if (!inBounds(cx, cy)) continue;
            char c = cell(cx, cy);
            if (Raycast.solid(c, this, cx, cy)) continue;
            Ent e = new Ent(hx, hy, RNG.nextBoolean() ? T_HUNTER0 : T_MOTHER0, 1.3f);
            e.brightness = 0.55f;
            fx.add(e);
            snd("whisper_loop");
            return;
        }
    }

    private void doInteract() {
        Player p = player;
        // 1) floor items first (nearest within 1.15)
        FloorItem best = null;
        float bd = 1.3f;
        for (FloorItem f : items) {
            float d = distToPlayer(f.x, f.y);
            if (d < bd) {
                bd = d;
                best = f;
            }
        }
        if (best != null) {
            pickUp(best);
            return;
        }
        // 2) interactables (proximity + facing)
        Inter target = null;
        float btd = 1.55f;
        float fx2 = (float) Math.cos(p.dir), fy2 = (float) Math.sin(p.dir);
        for (Inter e : inters) {
            if (e.used && (e.kind == K_CRATE || e.kind == K_BARREL || e.kind == K_CORPSE || e.kind == K_GRAVE)) continue;
            if (merchantGone && e.kind == K_MERCHANT) continue;
            float dx = e.x - p.x, dy = e.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d > btd) continue;
            float dot = (dx * fx2 + dy * fy2) / Math.max(0.001f, d);
            if (dot < 0.45f && d > 0.75f) continue;
            btd = d;
            target = e;
        }
        if (target != null) {
            interactWith(target);
            return;
        }
        // 3) doors / gate via raycast
        float hit = Raycast.cast(this, p.x, p.y, fx2, fy2, 1.8f);
        int hx = (int) (p.x + fx2 * (hit + 0.05f));
        int hy = (int) (p.y + fy2 * (hit + 0.05f));
        char c = cell(hx, hy);
        if (Raycast.isDoor(c)) {
            interactDoor(hx, hy, c);
        }
    }

    /** dry-run of doInteract for the HUD prompt (Persian action text or null). */
    public String promptText() {
        Player pl = player;
        float bd = 1.3f;
        FloorItem best = null;
        for (FloorItem f : items) {
            float d = distToPlayer(f.x, f.y);
            if (d < bd) {
                bd = d;
                best = f;
            }
        }
        if (best != null) {
            if (best.type == IT_NOTE) return Str.P_READ;
            return Str.P_PICKUP + ": " + Str.ITEM_NAME.get(best.type);
        }
        float btd = 1.55f;
        Inter target = null;
        float fx2 = (float) Math.cos(pl.dir), fy2 = (float) Math.sin(pl.dir);
        for (Inter e : inters) {
            if (e.used && (e.kind == K_CRATE || e.kind == K_BARREL || e.kind == K_CORPSE || e.kind == K_GRAVE)) continue;
            if (merchantGone && e.kind == K_MERCHANT) continue;
            float dx = e.x - pl.x, dy = e.y - pl.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d > btd) continue;
            float dot = (dx * fx2 + dy * fy2) / Math.max(0.001f, d);
            if (dot < 0.45f && d > 0.75f) continue;
            btd = d;
            target = e;
        }
        if (target != null) {
            switch (target.kind) {
                case K_CRATE:
                case K_BARREL:
                    return pl.hasAxe ? Str.P_BREAK : Str.P_AXE_NEEDED;
                case K_CORPSE:
                    return Str.P_LOOT;
                case K_GRAVE:
                    return Str.P_SEARCH;
                case K_CANDLE:
                    return target.used ? "شمع روشن است" : Str.P_CANDLE;
                case K_MIRROR:
                    return Str.P_MIRROR;
                case K_ALTAR:
                    return Str.P_ALTAR;
                case K_RADIO:
                    return Str.P_RADIO;
                case K_MERCHANT:
                    return Str.P_TALK;
            }
        }
        float hit = Raycast.cast(this, pl.x, pl.y, fx2, fy2, 1.8f);
        int hx = (int) (pl.x + fx2 * (hit + 0.05f));
        int hy = (int) (pl.y + fy2 * (hit + 0.05f));
        char c = cell(hx, hy);
        if (Raycast.isDoor(c)) {
            switch (c) {
                case 'd':
                case 'h': {
                    float t = doorTarget.containsKey(idx(hx, hy)) ? doorTarget.get(idx(hx, hy)) : 0f;
                    return t < 0.5f ? Str.P_OPEN : Str.P_CLOSE;
                }
                case 'D': return pl.hasItem(IT_KEY_MANSION) ? Str.P_OPEN : Str.P_NEED_KEY_MANSION;
                case 'G': return pl.hasItem(IT_KEY_IRON) ? Str.P_OPEN : Str.P_NEED_KEY_IRON;
                case 'g': return gateCodeOpen == 1 ? Str.P_EXIT : Str.P_CODE;
                case 'Z': return pl.hasAxe ? Str.P_BREAK : "در تخته‌شده. " + Str.P_AXE_NEEDED;
            }
        }
        return null;
    }

    private void pickUp(FloorItem f) {
        Player pl = player;
        if (f.type == IT_NOTE) {
            notesFound.add(f.noteId);
            noteShowing = f.noteId;
            gameState = NOTE;
            snd("note_open");
            items.remove(f);
            if (f.noteId == 3) {
                codeKnown = true;
                quests.complete(4);
            }
            if (notesFound.size() >= 8) unlockAch(Achievements.A_ALL_NOTES);
            // quest flow
            if (f.noteId == 0 || f.noteId == 6) {
                quests.complete(0);
                quests.activate(1);
            }
            return;
        }
        if (pl.invFull() && stackable(f.type) == 0) {
            toast(Str.INV_FULL);
            return;
        }
        // keys / tools bypass inventory-full
        pl.give(f.type);
        coinsTotal = Math.max(coinsTotal, pl.coins);
        if (pl.coins >= 10) unlockAch(Achievements.A_COINS);
        switch (f.type) {
            case IT_KEY_IRON:
                unlockAch(Achievements.A_IRON_KEY);
                quests.complete(1);
                quests.activate(2);
                toast("کلید آهنی گرفتی! دروازهٔ حیاط عمارت باز است");
                break;
            case IT_KEY_MANSION:
                toast("کلید عمارت گرفتی");
                break;
            case IT_TALISMAN:
                toast("طلسم (" + pl.talismans + "/3)");
                if (pl.talismans >= 3) {
                    unlockAch(Achievements.A_TALISMANS);
                    snd("stinger_find");
                    quests.complete(3);
                    quests.activate(4);
                    if (codeKnown) quests.activate(5);
                }
                break;
            case IT_AXE:
                toast("تبر آتش‌نشانی! حالا می‌توانی درهای تخته‌شده و جعبه‌ها را بشکنی");
                break;
            case IT_REVOLVER:
                toast("سسور قدیمی — صدایش همه را خبر می‌کند");
                break;
            default:
                toast(Str.ITEM_NAME.get(f.type) + " برداشته شد");
        }
        snd("pickup");
        pickFlash = 1f;
        items.remove(f);
    }

    private int stackable(int t) {
        switch (t) {
            case IT_BATTERY:
            case IT_BANDAGE:
            case IT_AMMO:
            case IT_FILM:
                return 1;
            default:
                return 0;
        }
    }

    private void interactWith(Inter e) {
        Player pl = player;
        switch (e.kind) {
            case K_CRATE: {
                if (!pl.hasAxe) {
                    toast(Str.P_AXE_NEEDED);
                    snd("door_locked");
                    return;
                }
                e.used = true;   // renderer hides used crates
                snd("crate_break");
                spawnLoot(e.x, e.y, e.loot);
                break;
            }
            case K_BARREL: {
                if (!pl.hasAxe) {
                    toast(Str.P_AXE_NEEDED);
                    snd("door_locked");
                    return;
                }
                e.used = true;
                snd("crate_break");
                if (RNG.nextBoolean()) spawnLoot(e.x, e.y, IT_COIN);
                break;
            }
            case K_CORPSE: {
                e.used = true;
                snd("pickup");
                spawnLoot(e.x, e.y, e.loot);
                pl.sanity = Math.max(0, pl.sanity - 6);
                toast("جسد را جست‌وجو کردی…");
                break;
            }
            case K_GRAVE: {
                e.used = true;
                snd("write");
                if (RNG.nextFloat() < 0.55f) spawnLoot(e.x, e.y, RNG.nextBoolean() ? IT_COIN : IT_BATTERY);
                else {
                    pl.sanity = Math.max(0, pl.sanity - 9);
                    toast("قبر خالی بود… ولی کسی صدایش آمد.");
                    snd("whisper_loop");
                }
                break;
            }
            case K_CANDLE: {
                if (!e.used) {
                    e.used = true;
                    e.tile = T_CANDLES;
                    e.scale = 0.75f;
                    snd("candle_light");
                    autoSave();
                    toast(Str.SAVED_OK);
                    pl.sanity = Math.min(100, pl.sanity + 15);
                } else {
                    toast("شمع روشن است — اینجا امن است");
                }
                break;
            }
            case K_MIRROR: {
                if (!e.used) {
                    e.used = true;
                    dialogue = Dialogue.info("آینه", Str.MIRROR_SEEN);
                    gameState = DIALOGUE;
                    pl.sanity = Math.max(0, pl.sanity - 22);
                    mother.appear(this, e.x + 1.5f, e.y);
                    snd("mother_hum");
                } else {
                    pl.sanity = Math.max(0, pl.sanity - 4);
                    toast("باز هم پشت سرت را در شیشه دیدی…");
                }
                break;
            }
            case K_RADIO: {
                e.used = true;
                dialogue = Dialogue.info("رادیو", Str.RADIO_ON);
                gameState = DIALOGUE;
                snd("write");
                break;
            }
            case K_ALTAR: {
                unlockAch(Achievements.A_ALTAR);
                if (pl.talismans >= 3) {
                    altarChoicePending = 1;
                    dialogue = new Dialogue("محراب",
                            "سه طلسم روی سنگ جایش را باز کرد. شعله‌های سرخ از شیارها بالا می‌آیند.\n"
                            + "انتخاب با توست: بسوزان تا مادر رها شود، یا نگه‌دار تا او به تو برسد.",
                            new String[]{"طلسم‌ها را بسوزان (رهایی)", "طلسم‌ها را نگه‌دار (او بیاید)", "پس بکش"}, Dialogue.DLG_ALTAR);
                    gameState = DIALOGUE;
                } else {
                    toast("محراب سه طلسم می‌خواهد (" + pl.talismans + "/3)");
                    snd("door_locked");
                }
                break;
            }
            case K_MERCHANT: {
                openMerchant();
                break;
            }
        }
    }

    private void spawnLoot(float x, float y, int loot) {
        if (loot < 0) loot = IT_COIN;
        items.add(new FloorItem(x + 0.2f, y + 0.2f, tileForItem(loot), 0.45f, loot));
        snd("pickup");
    }

    private void interactDoor(int x, int y, char c) {
        Player pl = player;
        Integer k = idx(x, y);
        switch (c) {
            case 'd':
            case 'h': {
                float t = doorTarget.containsKey(k) ? doorTarget.get(k) : 0f;
                boolean opening = t < 0.5f;
                setDoorOpen(x, y, opening ? 1f : 0f);
                snd(opening ? "door_open" : "door_close");
                hunter.hear(this, x + 0.5f, y + 0.5f, 8f);
                break;
            }
            case 'D': {
                if (!pl.hasItem(IT_KEY_MANSION)) {
                    toast(Str.P_NEED_KEY_MANSION);
                    snd("door_locked");
                    return;
                }
                setDoorOpen(x, y, 1f);
                snd("unlock");
                snd("door_open");
                toast("درِ عمارت باز شد…");
                break;
            }
            case 'G': {
                if (!pl.hasItem(IT_KEY_IRON)) {
                    toast(Str.P_NEED_KEY_IRON);
                    snd("door_locked");
                    return;
                }
                setDoorOpen(x, y, 1f);
                snd("gate_open");
                toast("دروازهٔ آهنی با صدایی سنگین باز شد");
                if (hunter != null) hunter.hear(this, x, y, 14f);
                break;
            }
            case 'g': {
                if (gateCodeOpen == 1) {
                    toast("دروازه باز است — فرار کن!");
                    return;
                }
                if (!codeKnown) {
                    toast("رمزی نمی‌دانی… شاید در نوشته‌ها باشد");
                    snd("door_locked");
                    return;
                }
                gameState = CODE;
                codeInput = "";
                snd("ui_select");
                break;
            }
            case 'Z': {
                if (!pl.hasAxe) {
                    toast("در تخته‌شده است. " + Str.P_AXE_NEEDED);
                    snd("door_locked");
                    return;
                }
                brokenDoors.add(k);
                snd("door_break");
                shake = 1f;
                toast("درِ تخته‌شده شکست!");
                hunter.hear(this, x, y, 12f);
                break;
            }
        }
    }

    public void submitCodeDigit(String d) {
        if (gameState != CODE) return;
        if ("DEL".equals(d)) {
            if (!codeInput.isEmpty()) codeInput = codeInput.substring(0, codeInput.length() - 1);
            snd("ui_back");
            return;
        }
        if ("OK".equals(d)) {
            if (Str.NOTE_CODE.equals(codeInput)) {
                gateCodeOpen = 1;
                // open both exit gate cells
                for (int i = 0; i < MapData.EXIT_GATES.length; i += 2) {
                    setDoorOpen(MapData.EXIT_GATES[i], MapData.EXIT_GATES[i + 1], 1f);
                }
                quests.complete(4);
                quests.activate(6);
                gameState = PLAY;
                snd("gate_open");
                toast("دروازهٔ جنوبی باز شد! فرار کن!");
            } else {
                codeInput = "";
                snd("door_locked");
            }
            return;
        }
        if (codeInput.length() < 4) {
            codeInput += d;
            snd("ui_move");
        }
    }

    /** UI picked a dialogue option. */
    public void chooseOption(int i) {
        if (dialogue == null) return;
        if (dialogue.kind == Dialogue.DLG_ALTAR) {
            if (i == 0) { // burn
                while (player.talismans > 0) player.talismans--;
                mother.banish(this);
                quests.complete(5);
                toast(Str.BANISH_DONE);
                snd("secret");
                triggerEnding(1);
            } else if (i == 1) { // keep → mother
                quests.complete(5);
                mother.appear(this, altar.x, altar.y + 1.5f);
                triggerEnding(2);
            } else {
                toast("از محراب عقب کشیدی…");
                dialogue = null;
                gameState = PLAY;
                snd("ui_select");
            }
            return;
        }
        if (dialogue.kind == Dialogue.DLG_MERCHANT) {
            buyMerchant(i);
            return;
        }
        // info
        dialogue = null;
        gameState = PLAY;
        snd("ui_back");
    }

    private void openMerchant() {
        StringBuilder sb = new StringBuilder(Str.MERCHANT_HELLO);
        sb.append("\n\nسکه: ").append(player.coins);
        dialogue = new Dialogue(Str.MERCHANT_NAME, sb.toString(), Str.MERCHANT_OPTIONS, Dialogue.DLG_MERCHANT);
        gameState = DIALOGUE;
        snd("ui_select");
    }

    private void buyMerchant(int opt) {
        int cost = opt == 0 ? 2 : opt == 1 ? 1 : opt == 2 ? 2 : 2;
        int type = opt == 0 ? IT_BATTERY : opt == 1 ? IT_BANDAGE : opt == 2 ? IT_AMMO : IT_FILM;
        if (opt >= 4) {
            dialogue = Dialogue.info(Str.MERCHANT_NAME, Str.MERCHANT_BYE);
            merchantGone = true;
            inters.remove(merchant);
            snd("ui_back");
            gameState = PLAY;
            return;
        }
        if (merchantStock[opt] <= 0) {
            dialogue = Dialogue.info(Str.MERCHANT_NAME, "«این جنس تموم شد. دستِ خودم هم با سکه نمی‌شه خرید.»");
            snd("door_locked");
            return;
        }
        if (player.coins < cost) {
            dialogue = Dialogue.info(Str.MERCHANT_NAME, Str.MERCHANT_NO_COIN);
            snd("door_locked");
            return;
        }
        player.coins -= cost;
        merchantStock[opt]--;
        player.give(type);
        snd("pickup");
        openMerchant(); // refresh
    }

    private void doAttack() {
        Player p = player;
        if (!p.hasAxe) {
            toast("سلاح نداری! تبر پیدا کن");
            return;
        }
        snd("axe_swing");
        float fx2 = (float) Math.cos(p.dir), fy2 = (float) Math.sin(p.dir);
        // breakables in front
        for (int i = inters.size() - 1; i >= 0; i--) {
            Inter e = inters.get(i);
            if (e.kind != K_CRATE && e.kind != K_BARREL) continue;
            if (e.used) continue;
            float dx = e.x - p.x, dy = e.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d < 1.5f && (dx * fx2 + dy * fy2) / Math.max(0.01f, d) > 0.5f) {
                e.used = true;
                snd("crate_break");
                if (e.loot >= 0) spawnLoot(e.x, e.y, e.loot);
                else if (RNG.nextBoolean()) spawnLoot(e.x, e.y, IT_COIN);
                return;
            }
        }
        // hunter
        if (hunter != null && hunter.blocksPlayer()) {
            float dx = hunter.x - p.x, dy = hunter.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d < 1.6f) {
                float dot = (dx * fx2 + dy * fy2) / Math.max(0.01f, d);
                if (dot > 0.4f) {
                    if (p.crouching) {
                        // backstab check: player behind hunter
                        float behind = (float) Math.cos(hunter.faceDir - (float) Math.atan2(-dy, -dx));
                        if (behind > 0.2f || d < 1.1f) {
                            hunter.kill(this);
                            snd("backstab");
                            unlockAch(Achievements.A_BACKSTAB);
                            toast("ضربهٔ غافلگیرانه! شکارچی از پا افتاد");
                            return;
                        }
                    }
                    hunter.hp -= 34;
                    snd("axe_hit");
                    hunter.stun(0.8f);
                    if (hunter.hp <= 0) {
                        hunter.kill(this);
                        toast("شکارچی مُرد");
                    }
                    return;
                }
            }
        }
        // nothing
        hunter.hear(this, p.x, p.y, 5f);
    }

    private void doShoot() {
        Player p = player;
        if (!p.hasRevolver) return;
        if (p.ammo <= 0) {
            snd("revolver_empty");
            toast("فشنگی نمانده!");
            return;
        }
        p.ammo--;
        snd("revolver_shot");
        shake = 1f;
        hunter.hear(this, p.x, p.y, 26f);
        float fx2 = (float) Math.cos(p.dir), fy2 = (float) Math.sin(p.dir);
        if (hunter != null && hunter.blocksPlayer()) {
            float dx = hunter.x - p.x, dy = hunter.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d < 11f && Raycast.los(this, p.x, p.y, hunter.x, hunter.y)) {
                float dot = (dx * fx2 + dy * fy2) / Math.max(0.01f, d);
                if (dot > 0.93f) {
                    snd("gun_hit");
                    hunter.kill(this);
                    unlockAch(Achievements.A_GUN_KILL);
                    toast("با یک شلیک از پا درآمد");
                    return;
                }
            }
        }
        if (mother.threatening()) {
            float dx = mother.x - p.x, dy = mother.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d < 11f && Raycast.los(this, p.x, p.y, mother.x, mother.y)) {
                float dot = (dx * fx2 + dy * fy2) / Math.max(0.01f, d);
                if (dot > 0.93f) {
                    toast("…گلوله از او گذشت، انگار از مه.");
                    snd("whisper_loop");
                }
            }
        }
    }

    private void doPhoto() {
        Player p = player;
        if (filmCount() <= 0) {
            toast("فیلمی نمانده!");
            return;
        }
        useFilm();
        camFlash = 1f;
        snd("camera_shutter");
        // stun mother if in frame
        if (mother.threatening()) {
            float dx = mother.x - p.x, dy = mother.y - p.y;
            float d = (float) Math.sqrt(dx * dx + dy * dy);
            if (d < 9 && Raycast.los(this, p.x, p.y, mother.x, mother.y)) {
                float dot = (float) ((dx * Math.cos(p.dir) + dy * Math.sin(p.dir)) / Math.max(0.01f, d));
                if (dot > 0.55f) {
                    mother.stunByPhoto(this);
                    toast("مادر در عکس ماند… برای چند لحظه.");
                    return;
                }
            }
        }
        // reveals hidden things: random whisper sanity reward
        if (RNG.nextFloat() < 0.3f) {
            toast("در عکس، چیزی بود که چشمت ندیده بود…");
            p.sanity = Math.max(0, p.sanity - 4);
        }
    }

    public int filmCount() {
        return player.film;
    }

    public void useFilm() {
        player.film = Math.max(0, player.film - 1);
    }

    // ---------------- inventory use (HUD buttons) ----------------
    public String useItem(int type) {
        Player p = player;
        switch (type) {
            case IT_BANDAGE: {
                if (!p.bleeding && p.health > 96) return "به بانداژ نیازی نیست";
                p.bleeding = false;
                p.heal(22);
                p.consume(IT_BANDAGE);
                snd("heal_bandage");
                return "بانداژ زده شد";
            }
            case IT_BATTERY: {
                if (p.battery > 92) return "باتری چراغ‌قوه پُر است";
                p.battery = Math.min(100, p.battery + 42);
                p.consume(IT_BATTERY);
                snd("battery_insert");
                return "باتری تعویض شد";
            }
            case IT_AMMO: {
                p.ammo += 4;
                p.consume(IT_AMMO);
                snd("reload");
                return "فشنگ‌ها گذاشته شد (" + p.ammo + ")";
            }
            case IT_FILM: {
                p.film += 4;
                p.consume(IT_FILM);
                snd("write");
                return "فیلم گذاشته شد (" + p.film + ")";
            }
            case IT_TALISMAN:
                return "طلسم: «سه‌تایش به محراب برسد…»";
            case IT_KEY_IRON:
            case IT_KEY_MANSION:
                return "کلید — نزدیک درِ مربوطه استفاده کن";
            default:
                return "همین‌جا به کار نمی‌آید";
        }
    }

    // ---------------- flow ----------------
    public void startStruggle() {
        gameState = STRUGGLE;
        struggleTime = 4.2f;
        struggleNeed = 8;
        struggleTaps = 0;
        snd("enemy_attack");
        shake = 1f;
    }

    public void onPlayerDeath() {
        if (gameState == DEAD || gameState == ENDING) return;
        deaths++;
        gameState = DEAD;
        snd("game_over");
        snd("mother_hum");
    }

    public void triggerEnding(int id) {
        endingId = id;
        gameState = ENDING;
        switch (id) {
            case 0:
                unlockAch(Achievements.A_END_ESCAPE);
                break;
            case 1:
                unlockAch(Achievements.A_END_BANISH);
                break;
            case 2:
                unlockAch(Achievements.A_END_MOTHER);
                break;
        }
        if (deaths == 0) unlockAch(Achievements.A_NO_DEATH);
        snd("music_ending");
    }

    public void autoSave() {
        autoSaveData = serialize();
        autoSaveFlag = true;
    }

    public boolean autoSaveFlag = false;
    public String autoSaveData = null;

    // ---------------------------------------------------------------- save/load
    public String serialize() {
        Map<String, Object> m = new HashMap<String, Object>();
        Player p = player;
        Map<String, Object> pm = new HashMap<String, Object>();
        pm.put("x", (double) p.x);
        pm.put("y", (double) p.y);
        pm.put("dir", (double) p.dir);
        pm.put("hp", (double) p.health);
        pm.put("san", (double) p.sanity);
        pm.put("st", (double) p.stamina);
        pm.put("bat", (double) p.battery);
        pm.put("bl", p.bleeding);
        pm.put("fl", p.flashlight);
        pm.put("inv", new ArrayList<Object>(p.inv));
        pm.put("coins", (double) p.coins);
        pm.put("axe", p.hasAxe);
        pm.put("rev", p.hasRevolver);
        pm.put("ammo", (double) p.ammo);
        pm.put("film", (double) p.film);
        pm.put("tal", (double) p.talismans);
        m.put("p", pm);

        List<Object> dl = new ArrayList<Object>();
        for (Map.Entry<Integer, Float> e : doorTarget.entrySet()) {
            if (e.getValue() > 0.5f) dl.add((double) (e.getKey() * 2 + 1));
        }
        m.put("doors", dl);
        List<Object> bd = new ArrayList<Object>();
        for (Integer k : brokenDoors) bd.add((double) k);
        m.put("bdoor", bd);
        m.put("gate", (double) gateCodeOpen);

        // items left on floor
        List<Object> il = new ArrayList<Object>();
        for (FloorItem f : items) {
            List<Object> e = new ArrayList<Object>();
            e.add((double) f.x);
            e.add((double) f.y);
            e.add((double) f.type);
            e.add((double) f.noteId);
            il.add(e);
        }
        m.put("items", il);

        // interactables used flags
        List<Object> used = new ArrayList<Object>();
        for (Inter e : inters) used.add(e.used ? 1.0 : 0.0);
        m.put("used", used);
        List<Object> gone = new ArrayList<Object>();
        for (Inter e : inters) gone.add(inters.contains(e) && e.remove ? 1.0 : 0.0);
        m.put("gone", gone);

        List<Object> nf = new ArrayList<Object>();
        for (Integer n : notesFound) nf.add((double) n);
        m.put("notes", nf);
        m.put("codeKnown", codeKnown);
        m.put("gateOpen", (double) gateCodeOpen);

        List<Object> qs = new ArrayList<Object>();
        for (int s : quests.state) qs.add((double) s);
        m.put("quests", qs);

        m.put("pt", (double) playTime);
        m.put("deaths", (double) deaths);
        m.put("coinsTot", (double) coinsTotal);
        m.put("noLight", (double) noLightTime);
        m.put("moved", movedOnce);
        m.put("mansion", mansionEntered);
        m.put("mgone", merchantGone);
        List<Object> ms = new ArrayList<Object>();
        for (int s : merchantStock) ms.add((double) s);
        m.put("mstock", ms);
        if (hunter != null) {
            m.put("hx", (double) hunter.x);
            m.put("hy", (double) hunter.y);
            m.put("hstate", (double) hunter.state);
            m.put("hhp", (double) hunter.hp);
        }
        m.put("mstate", (double) mother.state);
        return Json.write(m);
    }

    public void deserialize(String s) {
        Map<String, Object> m = Json.readObj(s);
        if (m.isEmpty()) return;
        Map<String, Object> pm = asMap(m.get("p"));
        player.x = (float) Json.num(pm.get("x"), player.x);
        player.y = (float) Json.num(pm.get("y"), player.y);
        player.dir = (float) Json.num(pm.get("dir"), player.dir);
        player.health = (float) Json.num(pm.get("hp"), 100);
        player.sanity = (float) Json.num(pm.get("san"), 100);
        player.stamina = (float) Json.num(pm.get("st"), 100);
        player.battery = (float) Json.num(pm.get("bat"), 100);
        player.bleeding = Json.boolOf(pm.get("bl"), false);
        player.flashlight = Json.boolOf(pm.get("fl"), false);
        player.inv.clear();
        for (Object o : Json.listOf(pm.get("inv"))) player.inv.add(Json.intOf(o, 0));
        player.coins = Json.intOf(pm.get("coins"), 0);
        player.hasAxe = Json.boolOf(pm.get("axe"), false);
        player.hasRevolver = Json.boolOf(pm.get("rev"), false);
        player.ammo = Json.intOf(pm.get("ammo"), 0);
        player.film = Json.intOf(pm.get("film"), 0);
        player.talismans = Json.intOf(pm.get("tal"), 0);

        for (Object o : Json.listOf(m.get("doors"))) {
            int code = Json.intOf(o, -1);
            if (code >= 0 && code % 2 == 1) {
                int k = code / 2;
                doorTarget.put(k, 1f);
                doorCur.put(k, 1f);
            }
        }
        brokenDoors.clear();
        for (Object o : Json.listOf(m.get("bdoor"))) brokenDoors.add(Json.intOf(o, -1));
        gateCodeOpen = Json.intOf(m.get("gate"), 0);

        items.clear();
        for (Object o : Json.listOf(m.get("items"))) {
            List<Object> e = Json.listOf(o);
            if (e.size() >= 4) {
                FloorItem f = new FloorItem((float) Json.num(e.get(0), 0), (float) Json.num(e.get(1), 0),
                        tileForItem(Json.intOf(e.get(2), 0)), 0.45f, Json.intOf(e.get(2), 0));
                f.noteId = Json.intOf(e.get(3), -1);
                if (f.type == IT_NOTE) f.tile = 21;
                items.add(f);
            }
        }

        List<Object> used = Json.listOf(m.get("used"));
        for (int i = 0; i < inters.size() && i < used.size(); i++) {
            inters.get(i).used = Json.num(used.get(i), 0) > 0.5;
        }
        List<Object> gone = Json.listOf(m.get("gone"));
        for (int i = inters.size() - 1; i >= 0 && i < gone.size(); i--) {
            if (Json.num(gone.get(i), 0) > 0.5) inters.remove(i);
        }

        notesFound.clear();
        for (Object o : Json.listOf(m.get("notes"))) notesFound.add(Json.intOf(o, 0));
        codeKnown = Json.boolOf(m.get("codeKnown"), false);

        List<Object> qs = Json.listOf(m.get("quests"));
        for (int i = 0; i < quests.state.length && i < qs.size(); i++) {
            quests.state[i] = Json.intOf(qs.get(i), 0);
        }

        playTime = (float) Json.num(m.get("pt"), 0);
        deaths = Json.intOf(m.get("deaths"), 0);
        coinsTotal = Json.intOf(m.get("coinsTot"), 0);
        noLightTime = (float) Json.num(m.get("noLight"), 0);
        movedOnce = Json.boolOf(m.get("moved"), true);
        mansionEntered = Json.boolOf(m.get("mansion"), false);
        merchantGone = Json.boolOf(m.get("mgone"), false);
        List<Object> ms = Json.listOf(m.get("mstock"));
        for (int i = 0; i < merchantStock.length && i < ms.size(); i++) {
            merchantStock[i] = Json.intOf(ms.get(i), 1);
        }
        hunter = new Hunter((float) Json.num(m.get("hx"), hunter.x), (float) Json.num(m.get("hy"), hunter.y));
        hunter.state = Json.intOf(m.get("hstate"), Hunter.DORMANT);
        hunter.hp = (float) Json.num(m.get("hhp"), 100);
        mother = new Mother();
        mother.state = Json.intOf(m.get("mstate"), Mother.HIDDEN);
        if (mother.state != Mother.HIDDEN) mother.state = Mother.HIDDEN; // mother respawns via events only

        gameState = PLAY;
        dialogue = null;
        noteShowing = -1;
        cutIdx = cutLines.length;
    }

    private void newGameStateNoReset() { }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> asMap(Object o) {
        return o instanceof Map ? (Map<String, Object>) o : new HashMap<String, Object>();
    }

    // sprite list for the renderer
    public void buildSprites(List<Ent> out) {
        out.clear();
        if (hunter != null && hunter.state != Hunter.DORMANT) out.add(hunter);
        if (mother.threatening()) out.add(mother);
        for (Inter e : inters) {
            if (e.kind == K_CANDLE && !e.used) {
                // unlit candle uses small item tile
                e.tile = 25;
            }
            out.add(e);
        }
        for (FloorItem f : items) out.add(f);
        for (int i = fx.size() - 1; i >= 0; i--) {
            Ent e = fx.get(i);
            e.brightness -= 0.02f;
            if (e.brightness <= 0.05f) fx.remove(i);
            else out.add(e);
        }
    }

    /** light list for shader: [x,y,r,g,b,intensity,radius,flickerSeed] per light. */
    public void buildLights(float[] out, int[] count) {
        int n = 0;
        // static torch lights from map
        int[] L = MapData.LIGHTS;
        for (int i = 0; i + 2 < L.length && n < 12; i += 3) {
            int x = L[i], y = L[i + 1], kind = L[i + 2];
            if (kind == 2) { // candle light only when lit
                boolean lit = false;
                for (Inter e : inters) {
                    if (e.kind == K_CANDLE && (int) e.x == x && (int) e.y == y && e.used) {
                        lit = true;
                        break;
                    }
                }
                if (!lit) continue;
            }
            int o = n * 8;
            out[o] = x + 0.5f;
            out[o + 1] = y + 0.5f;
            if (kind == 0) { // warm torch
                out[o + 2] = 1f; out[o + 3] = 0.62f; out[o + 4] = 0.28f;
                out[o + 5] = 1.05f; out[o + 6] = 6.5f; out[o + 7] = i;
            } else if (kind == 1) { // altar red
                out[o + 2] = 1f; out[o + 3] = 0.22f; out[o + 4] = 0.15f;
                out[o + 5] = 1.25f; out[o + 6] = 5.5f; out[o + 7] = i + 40;
            } else if (kind == 2) { // candle
                out[o + 2] = 1f; out[o + 3] = 0.75f; out[o + 4] = 0.4f;
                out[o + 5] = 0.8f; out[o + 6] = 3.6f; out[o + 7] = i + 80;
            } else { // cold moonlight patch
                out[o + 2] = 0.55f; out[o + 3] = 0.65f; out[o + 4] = 1f;
                out[o + 5] = 0.55f; out[o + 6] = 5f; out[o + 7] = i + 120;
            }
            n++;
        }
        count[0] = n;
    }
}
