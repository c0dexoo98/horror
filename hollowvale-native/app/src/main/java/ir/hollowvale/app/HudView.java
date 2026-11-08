package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.MotionEvent;
import android.view.View;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import ir.hollowvale.game.Achievements;
import ir.hollowvale.game.Dialogue;
import ir.hollowvale.game.GameConfig;
import ir.hollowvale.game.Input;
import ir.hollowvale.game.Player;
import ir.hollowvale.game.Str;
import ir.hollowvale.R;
import ir.hollowvale.game.World;

/**
 * HOLLOW VALE v4 — in-game HUD: touch controls (fully customizable), bars, prompts,
 * dialogue, notes, code gate, inventory, pause, struggle, death/ending/cutscene overlays.
 */
public class HudView extends View {
    public World world;
    public GameConfig cfg;
    public AudioSys audio;
    public GameActivity act;

    private final Input input = new Input();
    private Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
    private Bitmap sprites;
    private float dp; // density scale

    // touch state
    private int joyId = -1, lookId = -1;
    private float joyCX, joyCY, joyX, joyY;
    private float lookLastX, lookLastY;
    private boolean lookIsButton = false;

    // modes
    public static final int M_PLAY = 0, M_PAUSE = 1, M_INV = 2, M_SETTINGS = 3, M_CUSTOM = 4, M_JOURNAL = 5;
    public int mode = M_PLAY;
    public boolean paused = false;

    private long now = 0;
    private float prevHealth = -1;
    private int lastDeaths = -1;
    private float w, h;
    private boolean invDirty = true;

    private List<float[]> customRects = new ArrayList<float[]>(); // for customization hit-test
    private String customDrag = null;
    private float customOffX, customOffY;
    private float customScale = 1, customAlpha = 1;

    private static class Btn {
        String id, label;
        float x, y, r;      // center + radius in px
        boolean visible, down;
        int icon = -1;      // sprites.png tile or -1 (text)
        Runnable onTap;

        Btn(String id, String label, float x, float y, float r, boolean visible, int icon) {
            this.id = id; this.label = label; this.x = x; this.y = y; this.r = r;
            this.visible = visible; this.icon = icon;
        }
    }

    private final List<Btn> buttons = new ArrayList<Btn>();

    public HudView(Context c, World w, GameConfig cfg, AudioSys audio, GameActivity act) {
        super(c);
        this.world = w;
        this.cfg = cfg;
        this.audio = audio;
        this.act = act;
        sprites = BitmapFactory.decodeResource(c.getResources(), R.drawable.sprites);
        dp = c.getResources().getDisplayMetrics().density;
        setLayerType(View.LAYER_TYPE_HARDWARE, null);
    }

    // -------------------------------------------------- layout
    private int layW = -1, layH = -1, layMode = -1;

    private void layoutButtons() {
        if (layW == (int) w && layH == (int) h && layMode == mode && !buttons.isEmpty()) return;
        layW = (int) w;
        layH = (int) h;
        layMode = mode;
        buttons.clear();
        float r = 30 * dp;
        // right cluster (action buttons), defaults; customizable via cfg.buttons
        float bx = w - 90 * dp, by = h - 78 * dp;
        buttons.add(mk("interact", "✚", bx, by - 62 * dp, r + 6 * dp, true, -1));
        buttons.add(mk("attack", "", bx, by, r, world.player.hasAxe, 26));
        buttons.add(mk("gun", "", bx - 66 * dp, by + 26 * dp, r - 4 * dp, world.player.hasRevolver, 27));
        buttons.add(mk("camera", "", bx - 58 * dp, by - 52 * dp, r - 8 * dp, world.player.film > 0, 29));
        buttons.add(mk("light", "", bx - 118 * dp, by - 20 * dp, r - 6 * dp, true, 25));
        buttons.add(mk("crouch", "نشستن", bx - 6 * dp, by - 120 * dp, r - 8 * dp, true, -1));
        buttons.add(mk("run", "دویدن", 84 * dp, h - 46 * dp, r - 6 * dp, true, -1));
        buttons.add(mk("inv", "کوله", w - 34 * dp, 84 * dp, r - 10 * dp, true, -1));
        buttons.add(mk("journal", "دفتر", w - 92 * dp, 40 * dp, r - 12 * dp, true, -1));
        buttons.add(mk("pause", "II", 34 * dp, 40 * dp, r - 12 * dp, true, -1));
        // apply custom positions
        for (Btn b : buttons) {
            float[] f = cfg.buttons.get(b.id);
            if (f != null && f.length >= 4) {
                b.x = f[0] * w;
                b.y = f[1] * h;
                b.r = (f[2]) * (30 * dp);
            }
        }
    }

    private Btn mk(String id, String label, float x, float y, float r, boolean visible, int icon) {
        Btn b = new Btn(id, label, x, y, r, visible, icon);
        b.onTap = buildTap(id);
        return b;
    }

    private Runnable buildTap(String id) {
        if ("interact".equals(id)) return new Runnable() { public void run() { input.interactPressed = true; } };
        if ("attack".equals(id)) return new Runnable() { public void run() { input.attackPressed = true; } };
        if ("gun".equals(id)) return new Runnable() { public void run() { input.gunPressed = true; } };
        if ("camera".equals(id)) return new Runnable() { public void run() { input.cameraPressed = true; } };
        if ("light".equals(id)) return new Runnable() { public void run() { input.lightToggled = true; } };
        if ("crouch".equals(id)) return new Runnable() { public void run() { input.crouch = !input.crouch; } };
        if ("run".equals(id)) return new Runnable() { public void run() { input.run = !input.run; } };
        if ("inv".equals(id)) return new Runnable() { public void run() { toggleInv(); } };
        if ("journal".equals(id)) return new Runnable() { public void run() { act.openJournal(); } };
        if ("pause".equals(id)) return new Runnable() { public void run() { setMode(M_PAUSE); } };
        return null;
    }

    public void setMode(int m) {
        mode = m;
        if (audio != null) audio.play(m == M_PLAY ? "ui_back" : "ui_select");
        invDirty = true;
    }

    private void toggleInv() {
        mode = mode == M_INV ? M_PLAY : M_INV;
        audio.play("ui_move");
    }

    // -------------------------------------------------- input collection (GL thread)
    public void collect(Input out) {
        synchronized (this) {
            out.moveX = clamp1((joyX - joyCX) / (46 * dp));
            out.moveY = clamp1((joyY - joyCY) / (46 * dp));
            if (Math.abs(out.moveX) < 0.12f) out.moveX = 0;
            if (Math.abs(out.moveY) < 0.12f) out.moveY = 0;
            out.lookDX = input.lookDX;
            out.lookDY = input.lookDY;
            out.run = input.run;
            out.crouch = input.crouch;
            out.interactPressed = input.interactPressed;
            out.attackPressed = input.attackPressed;
            out.gunPressed = input.gunPressed;
            out.cameraPressed = input.cameraPressed;
            out.lightToggled = input.lightToggled;
            out.strugTaps = input.strugTaps;
            input.lookDX = 0;
            input.lookDY = 0;
            input.interactPressed = false;
            input.attackPressed = false;
            input.gunPressed = false;
            input.cameraPressed = false;
            input.lightToggled = false;
            input.strugTaps = false;
        }
    }

    private static float clamp1(float v) {
        return v < -1 ? -1 : v > 1 ? 1 : v;
    }

    // -------------------------------------------------- touch
    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        now = System.currentTimeMillis();
        float x = ev.getX(ev.getActionIndex() >= 0 ? ev.getActionIndex() : 0);
        float y = ev.getY(ev.getActionIndex() >= 0 ? ev.getActionIndex() : 0);
        switch (ev.getActionMasked()) {
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_POINTER_DOWN: {
                if (handleTap(x, y)) return true;
                if (x < w * 0.42f && joyId < 0 && mode == M_PLAY && world.gameState == World.PLAY) {
                    joyId = ev.getPointerId(ev.getActionIndex());
                    joyCX = x;
                    joyCY = y;
                    joyX = x;
                    joyY = y;
                } else if (lookId < 0 && (mode == M_PLAY || world.gameState == World.STRUGGLE)) {
                    lookId = ev.getPointerId(ev.getActionIndex());
                    lookLastX = x;
                    lookLastY = y;
                }
                return true;
            }
            case MotionEvent.ACTION_MOVE: {
                for (int i = 0; i < ev.getPointerCount(); i++) {
                    int id = ev.getPointerId(i);
                    float px = ev.getX(i), py = ev.getY(i);
                    if (id == joyId) {
                        joyX = px;
                        joyY = py;
                    } else if (id == lookId) {
                        synchronized (this) {
                            input.lookDX += (px - lookLastX);
                            input.lookDY += (py - lookLastY);
                        }
                        lookLastX = px;
                        lookLastY = py;
                    } else if (customDrag != null && mode == M_CUSTOM) {
                        dragCustom(px, py);
                    }
                }
                if (mode == M_CUSTOM && customDrag != null) {
                    dragCustom(x, y);
                }
                return true;
            }
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_POINTER_UP:
            case MotionEvent.ACTION_CANCEL: {
                int id = ev.getPointerId(ev.getActionIndex());
                if (id == joyId) {
                    joyId = -1;
                    joyX = joyCX;
                    joyY = joyCY;
                }
                if (id == lookId) lookId = -1;
                for (Btn b : buttons) b.down = false;
                break;
            }
        }
        return true;
    }

    private boolean handleTap(float x, float y) {
        // global overlays first
        switch (world.gameState) {
            case World.CUTSCENE:
                input.interactPressed = true;
                audio.play("ui_select");
                return true;
            case World.NOTE:
                input.interactPressed = true;
                return true;
            case World.STRUGGLE:
                synchronized (this) {
                    input.strugTaps = true;
                }
                audio.play("struggle_hit", 0.7f);
                return true;
            case World.DEAD:
                if (y > h * 0.62f) {
                    if (x < w / 2) act.loadAutosave();
                    else act.quitToMenu();
                }
                return true;
            case World.ENDING:
                act.onEndingShown();
                return true;
            case World.CODE:
                return codeTap(x, y);
            case World.DIALOGUE:
                return dialogueTap(x, y);
        }
        if (mode == M_PAUSE) return pauseTap(x, y);
        if (mode == M_SETTINGS) return settingsTap(x, y);
        if (mode == M_INV) return invTap(x, y);
        if (mode == M_CUSTOM) return customTap(x, y);
        if (mode == M_JOURNAL) { setMode(M_PLAY); return true; }

        // play mode buttons
        for (int i = buttons.size() - 1; i >= 0; i--) {
            Btn b = buttons.get(i);
            if (!b.visible) continue;
            float dx = x - b.x, dy = y - b.y;
            if (dx * dx + dy * dy <= (b.r + 8 * dp) * (b.r + 8 * dp)) {
                b.down = true;
                if (b.onTap != null) b.onTap.run();
                audio.play("ui_move", 0.5f);
                return true;
            }
        }
        return false;
    }

    // -------------------------------------------------- per-frame (GL thread)
    public void frame(float dt) {
        if (paused) return;
        collect(input);
        world.cfgSens = cfg.sens;
        world.cfgInvert = cfg.invertLook;
        try {
            world.tick(dt, input);
        } catch (Throwable t) {
            // never kill the render loop
        }
        input.consumeEdges();
        drainAudio();
        if (world.autoSaveFlag) {
            world.autoSaveFlag = false;
            if (world.autoSaveData != null) {
                SaveIO.write(act, "slot_auto.json", world.autoSaveData);
                if (act.sessionSlot() != null && !"slot_auto.json".equals(act.sessionSlot())) {
                    SaveIO.write(act, act.sessionSlot(), world.autoSaveData);
                }
            }
        }
        // achievements → persist
        if (!world.ach.pending.isEmpty()) {
            List<Integer> list = new ArrayList<Integer>(world.ach.pending);
            world.ach.clearPending();
            SaveIO.saveAch(act, world.ach.unlocked);
            for (int id : list) {
                android.widget.Toast t = android.widget.Toast.makeText(act,
                        "🏆 " + Str.ACH_NAMES[id], android.widget.Toast.LENGTH_LONG);
                t.show();
            }
        }
        // deaths stat (only on change)
        if (world.deaths != lastDeaths) {
            lastDeaths = world.deaths;
            SaveIO.saveDeaths(act, Math.max(SaveIO.loadDeaths(act), world.deaths));
        }
        // music + region ambience
        if (world.chaseMusic > 0.5f) {
            audio.music("music_chase", 0.85f);
        } else if (world.gameState == World.ENDING) {
            audio.music("music_ending", 0.8f);
        } else {
            audio.music("music_game", 0.55f);
        }
        float px = world.player.x, py = world.player.y;
        String amb;
        if (py <= 16.5f) amb = "amb_mansion";
        else if (px < 11f && py > 26f) amb = "amb_grave";
        else amb = "amb_village";
        audio.ambient(amb, 0.6f);
        // haptics on damage
        if (cfg.vibrate && world.damageFlash > 0.92f && prevHealth < 0) {
            prevHealth = world.player.health;
            try {
                android.os.Vibrator v = (android.os.Vibrator) getContext().getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null) v.vibrate(70);
            } catch (Throwable ignored) {
            }
        }
        if (Math.abs(world.player.health - prevHealth) > 0.01f) prevHealth = world.player.health;
        audio.update(dt);
    }

    private void drainAudio() {
        for (int i = 0; i < world.sounds.size(); i++) {
            String s = world.sounds.get(i);
            float v = 1f;
            if (s.startsWith("step_")) v = 0.45f;
            if (s.equals("whisper_loop")) v = 0.8f;
            if (s.equals("heartbeat_loop")) v = 0.9f;
            audio.play(s, v, s.startsWith("step_") ? 0.12f : 0.05f);
        }
        world.sounds.clear();
    }

    // -------------------------------------------------- drawing
    @Override
    protected void onDraw(Canvas c) {
        try {
            drawAll(c);
        } catch (Throwable t) {
            // never crash the UI
        }
    }

    private void drawAll(Canvas c) {
        w = getWidth();
        h = getHeight();
        layoutButtons();
        switch (world.gameState) {
            case World.CUTSCENE:
                drawCutscene(c);
                break;
            case World.NOTE:
                drawNote(c);
                break;
            case World.CODE:
                drawCode(c);
                break;
            case World.DIALOGUE:
                drawDialogue(c);
                break;
            case World.STRUGGLE:
                drawStruggle(c);
                drawBars(c);
                break;
            case World.DEAD:
                drawDead(c);
                break;
            case World.ENDING:
                drawEnding(c);
                break;
            default:
                drawBars(c);
                drawPrompt(c);
                drawToast(c);
                if (mode == M_PAUSE) drawPause(c);
                else if (mode == M_SETTINGS) drawSettings(c);
                else if (mode == M_INV) drawInv(c);
                else if (mode == M_CUSTOM) drawCustom(c);
                else if (mode == M_JOURNAL) drawJournal(c);
                else drawButtons(c);
                drawObjective(c);
                break;
        }
        if (cfg.showFps) {
            p.setColor(0x88FFAA00);
            p.setTextSize(12 * dp);
            p.setTextAlign(Paint.Align.LEFT);
            c.drawText(String.format("%.0f FPS", act.rendererFps()), 8 * dp, h - 8 * dp, p);
        }
    }

    private void drawBars(Canvas c) {
        float bw = 118 * dp, bh = 9 * dp;
        float x = 30 * dp, y = 30 * dp;
        bar(c, x, y, bw, bh, world.player.health / 100f, 0xFFB02020, "سلامتی");
        bar(c, x, y + 14 * dp, bw, bh, world.player.sanity / 100f, 0xFF7A4FB0, "روان");
        bar(c, x, y + 28 * dp, bw, bh, world.player.stamina / 100f, 0xFF3F9B4F, "انرژی");
        bar(c, x, y + 42 * dp, bw, bh, world.player.battery / 100f,
                world.player.battery < 20 ? 0xFFD08020 : 0xFFC9C226, null);
        p.setColor(world.player.flashlight ? 0xFFE8D890 : 0x66AAAAAA);
        p.setTextSize(10 * dp);
        p.setTextAlign(Paint.Align.LEFT);
        c.drawText(world.player.flashlight ? "روشن" : "خاموش", x + bw + 6 * dp, y + 50 * dp, p);
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFFFFFFFF);
        c.drawText("سکه: " + world.player.coins, w - 30 * dp, 132 * dp, p);
        if (world.player.bleeding) {
            p.setColor(0xFFFF5050);
            c.drawText("خون‌ریزی!", w - 30 * dp, 148 * dp, p);
        }
    }

    private void bar(Canvas c, float x, float y, float bw, float bh, float v, int col, String label) {
        p.setColor(0x66000000);
        c.drawRect(x - 2, y - 2, x + bw + 2, y + bh + 2, p);
        p.setColor(0x33000000);
        c.drawRect(x, y, x + bw, y + bh, p);
        p.setColor(col);
        c.drawRect(x, y, x + bw * Math.max(0, Math.min(1, v)), y + bh, p);
        if (label != null) {
            p.setColor(0xAAFFFFFF);
            p.setTextSize(9 * dp);
            p.setTextAlign(Paint.Align.LEFT);
            c.drawText(label, x + 3 * dp, y + bh - 1.5f * dp, p);
        }
    }

    private void drawObjective(Canvas c) {
        int q = world.quests.firstActive();
        if (q < 0) return;
        String s = "هدف: " + Str.QUEST_TITLES[q];
        p.setColor(0xB0FFFFFF);
        p.setTextSize(13 * dp);
        p.setTextAlign(Paint.Align.RIGHT);
        p.setTypeface(Fonts.vazirBold(getContext()));
        float y = 34 * dp;
        c.drawText(s, w - 30 * dp, y, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(11 * dp);
        p.setColor(0x99DDDDDD);
        c.drawText(Str.QUEST_DESCS[q], w - 30 * dp, y + 17 * dp, p);
        p.setTypeface(null);
    }

    private void drawButtons(Canvas c) {
        for (Btn b : buttons) {
            if (!b.visible) continue;
            float alpha = 0.62f;
            float[] f = cfg.buttons.get(b.id);
            if (f != null && f.length >= 4) alpha *= f[3];
            p.setColor(b.down ? 0x90E8D8A0 : (int) (0x66FFFFFF * alpha) << 24 | 0x22111111);
            p.setColor((b.down ? 0xB0E8D8A0 : 0x50101014));
            c.drawCircle(b.x, b.y, b.r, p);
            p.setColor(0x66D0C0A0);
            p.setStyle(Paint.Style.STROKE);
            p.setStrokeWidth(1.5f * dp);
            c.drawCircle(b.x, b.y, b.r, p);
            p.setStyle(Paint.Style.FILL);
            if (b.icon >= 0 && sprites != null) {
                int ts = 64;
                int tx = (b.icon % 8) * ts, ty = (b.icon / 8) * ts;
                Rect src = new Rect(tx, ty, tx + ts, ty + ts);
                float s = b.r * 1.35f;
                RectF dst = new RectF(b.x - s / 2, b.y - s / 2, b.x + s / 2, b.y + s / 2);
                c.drawBitmap(sprites, src, dst, p);
            }
            if (b.label != null && !b.label.isEmpty()) {
                p.setColor(0xFFE8E0C8);
                p.setTextSize(b.r * 0.62f);
                p.setTextAlign(Paint.Align.CENTER);
                p.setTypeface(Fonts.vazirBold(getContext()));
                c.drawText(b.label, b.x, b.y + b.r * 0.22f, p);
                p.setTypeface(null);
            }
        }
        // joystick
        if (joyId >= 0) {
            p.setColor(0x30FFFFFF);
            c.drawCircle(joyCX, joyCY, 46 * dp, p);
            p.setColor(0x60E8DCA0);
            float lx = joyX - joyCX, ly = joyY - joyCY;
            float l = (float) Math.sqrt(lx * lx + ly * ly);
            float mx = 46 * dp;
            if (l > mx) {
                lx = lx / l * mx;
                ly = ly / l * mx;
            }
            c.drawCircle(joyCX + lx, joyCY + ly, 20 * dp, p);
        }
    }

    private void drawPrompt(Canvas c) {
        String s = act.currentPrompt();
        if (s == null || s.isEmpty()) return;
        p.setTextAlign(Paint.Align.CENTER);
        p.setTextSize(15 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        float y = h - 170 * dp;
        p.setColor(0x99000000);
        float tw = p.measureText(s);
        c.drawRect(w / 2 - tw / 2 - 14 * dp, y - 20 * dp, w / 2 + tw / 2 + 14 * dp, y + 8 * dp, p);
        p.setColor(0xFFF0E6C8);
        c.drawText(s, w / 2, y, p);
        p.setTypeface(null);
    }

    private void drawToast(Canvas c) {
        if (world.toastT <= 0 || world.toastText.isEmpty()) return;
        float a = Math.min(1, world.toastT);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTextSize(14 * dp);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setColor((((int) (0xD0 * a)) << 24) | 0xF0E0C0);
        c.drawText(world.toastText, w / 2, h * 0.22f, p);
        p.setTypeface(null);
    }

    private void drawCutscene(Canvas c) {
        c.drawColor(0xF8EDEDE8 & 0xFFFFFFFF);
        c.drawColor(0xFF060608);
        String[] lines = world.cutLines;
        int i = Math.min(world.cutIdx, lines.length - 1);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(19 * dp);
        p.setColor(0xFFD8D2C4);
        float y = h * 0.42f;
        String[] parts = lines[i].split(" ");
        // simple wrap
        StringBuilder line = new StringBuilder();
        for (String wd : parts) {
            if (p.measureText(line + " " + wd) > w * 0.8f) {
                c.drawText(line.toString(), w / 2, y, p);
                y += 30 * dp;
                line = new StringBuilder();
            }
            if (line.length() > 0) line.append(" ");
            line.append(wd);
        }
        c.drawText(line.toString(), w / 2, y, p);
        p.setTextSize(12 * dp);
        p.setColor(0xFF8A8578);
        c.drawText("برای ادامه لمس کن (" + (world.cutIdx + 1) + "/" + lines.length + ")", w / 2, h * 0.85f, p);
        p.setTypeface(null);
    }

    private void drawNote(Canvas c) {
        c.drawColor(0xFF060608);
        // paper
        float pw = w * 0.86f, ph = h * 0.8f;
        float px = (w - pw) / 2, py = (h - ph) / 2;
        p.setColor(0xFF2A2018);
        c.drawRoundRect(px - 8, py - 8, px + pw + 8, py + ph + 8, 10, 10, p);
        p.setColor(0xFFD8C9A0);
        c.drawRoundRect(px, py, px + pw, py + ph, 6, 6, p);
        int id = Math.max(0, Math.min(7, world.noteShowing));
        p.setColor(0xFF4A3826);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        c.drawText(Str.NOTE_TITLES[id], w / 2, py + 40 * dp, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(15 * dp);
        p.setColor(0xFF3A2E20);
        String[] rows = Str.NOTE_TEXTS[id].split("\n");
        float y = py + 78 * dp;
        for (String r0 : rows) {
            StringBuilder line = new StringBuilder();
            for (String wd : r0.split(" ")) {
                if (p.measureText(line + " " + wd) > pw - 40 * dp) {
                    c.drawText(line.toString(), w / 2, y, p);
                    y += 24 * dp;
                    line = new StringBuilder();
                }
                if (line.length() > 0) line.append(" ");
                line.append(wd);
            }
            c.drawText(line.toString(), w / 2, y, p);
            y += 26 * dp;
        }
        p.setTypeface(null);
        p.setColor(0xFF7A6A50);
        p.setTextSize(11 * dp);
        c.drawText("برای بستن لمس کن", w / 2, py + ph - 14 * dp, p);
    }

    private void drawCode(Canvas c) {
        c.drawColor(0xD0101014);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText(Str.P_CODE, w / 2, h * 0.18f, p);
        StringBuilder disp = new StringBuilder();
        for (int i = 0; i < 4; i++) {
            disp.append(i < world.codeInput.length() ? world.codeInput.charAt(i) : "–");
            if (i < 3) disp.append("  ");
        }
        p.setTextSize(34 * dp);
        p.setColor(0xFFD04848);
        c.drawText(disp.toString(), w / 2, h * 0.28f, p);
        p.setTypeface(null);
        // keypad
        float kw = Math.min(w * 0.7f, 340 * dp);
        float kh = kh = kw * 0.62f;
        float kx = (w - kw) / 2, ky = h * 0.36f;
        p.setColor(0xFF2A2A30);
        p.setTextAlign(Paint.Align.CENTER);
        for (int r = 0; r < 4; r++) {
            String[] row = r < 3
                    ? new String[]{String.valueOf(r * 3 + 1), String.valueOf(r * 3 + 2), String.valueOf(r * 3 + 3)}
                    : new String[]{"حذف", "0", "تأیید"};
            for (int cidx = 0; cidx < 3; cidx++) {
                float bx = kx + cidx * kw / 3, by = ky + r * kh / 4;
                p.setColor(r == 3 && cidx == 2 ? 0xFF5A2A2A : 0xFF26262C);
                c.drawRoundRect(bx + 4, by + 4, bx + kw / 3 - 4, by + kh / 4 - 4, 8, 8, p);
                p.setColor(0xFFE8E0C8);
                p.setTextSize(20 * dp);
                c.drawText(row[cidx], bx + kw / 6, by + kh / 8 + 7 * dp, p);
            }
        }
    }

    private boolean codeTap(float x, float y) {
        float kw = Math.min(w * 0.7f, 340 * dp);
        float kh = kw * 0.62f;
        float kx = (w - kw) / 2, ky = h * 0.36f;
        if (x < kx || x > kx + kw || y < ky || y > ky + kh) return true;
        int cidx = (int) ((x - kx) / (kw / 3));
        int r = (int) ((y - ky) / (kh / 4));
        if (r < 3) {
            world.submitCodeDigit(String.valueOf(r * 3 + cidx + 1));
        } else {
            if (cidx == 0) world.submitCodeDigit("DEL");
            else if (cidx == 1) world.submitCodeDigit("0");
            else world.submitCodeDigit("OK");
        }
        return true;
    }

    private void drawDialogue(Canvas c) {
        drawBars(c);
        drawButtons(c);
        float ph = h * 0.34f;
        float py = h - ph;
        p.setColor(0xE0141418);
        c.drawRoundRect(16 * dp, py, w - 16 * dp, h - 8 * dp, 12, 12, p);
        p.setColor(0xFF6A2A2A);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(1.5f * dp);
        c.drawRoundRect(16 * dp, py, w - 16 * dp, h - 8 * dp, 12, 12, p);
        p.setStyle(Paint.Style.FILL);
        if (world.dialogue == null) return;
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFFD04848);
        p.setTextSize(15 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        c.drawText(world.dialogue.speaker, w - 30 * dp, py + 26 * dp, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(14 * dp);
        p.setColor(0xFFE8E0CC);
        float y = py + 52 * dp;
        for (String r0 : world.dialogue.text.split("\n")) {
            StringBuilder line = new StringBuilder();
            for (String wd : r0.split(" ")) {
                if (p.measureText(line + " " + wd) > w - 80 * dp) {
                    c.drawText(line.toString(), w - 30 * dp, y, p);
                    y += 21 * dp;
                    line = new StringBuilder();
                }
                if (line.length() > 0) line.append(" ");
                line.append(wd);
            }
            c.drawText(line.toString(), w - 30 * dp, y, p);
            y += 22 * dp;
        }
        // options
        String[] opts = world.dialogue.options;
        if (opts != null && opts.length > 0) {
            float oy = h - 12 * dp - opts.length * 30 * dp - 6 * dp;
            for (int i = 0; i < opts.length; i++) {
                float by = oy + i * 30 * dp;
                boolean hot = y > py + 60 * dp; // just style
                p.setColor(0xFF26262E);
                c.drawRoundRect(28 * dp, by, w - 28 * dp, by + 26 * dp, 8, 8, p);
                p.setColor(0xFFC8B87A);
                p.setTextSize(13 * dp);
                c.drawText((i + 1) + ". " + opts[i], w - 40 * dp, by + 18 * dp, p);
            }
        }
        p.setTypeface(null);
    }

    private boolean dialogueTap(float x, float y) {
        if (world.dialogue == null) {
            world.gameState = World.PLAY;
            return true;
        }
        String[] opts = world.dialogue.options;
        if (opts == null || opts.length == 0) {
            world.chooseOption(0);
            return true;
        }
        float oy = h - 12 * dp - opts.length * 30 * dp - 6 * dp;
        for (int i = 0; i < opts.length; i++) {
            float by = oy + i * 30 * dp;
            if (y >= by && y <= by + 26 * dp && x >= 28 * dp && x <= w - 28 * dp) {
                world.chooseOption(i);
                return true;
            }
        }
        return true;
    }

    private void drawStruggle(Canvas c) {
        c.drawColor(0x66280808);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(24 * dp);
        p.setColor(0xFFFF4040);
        c.drawText("شکارچی تو را گرفته!", w / 2, h * 0.24f, p);
        p.setTextSize(16 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText(Str.STRUGGLE_HINT, w / 2, h * 0.32f, p);
        // progress
        float pw2 = w * 0.6f;
        p.setColor(0x88000000);
        c.drawRect(w / 2 - pw2 / 2, h * 0.40f, w / 2 + pw2 / 2, h * 0.40f + 16 * dp, p);
        p.setColor(0xFFD04848);
        float prog = world.struggleTaps / world.struggleNeed;
        c.drawRect(w / 2 - pw2 / 2, h * 0.40f, w / 2 - pw2 / 2 + pw2 * Math.min(1, prog), h * 0.40f + 16 * dp, p);
        // timer
        p.setColor(0xFFAAAAAA);
        p.setTextSize(13 * dp);
        c.drawText("زمان: " + String.format("%.1f", Math.max(0, world.struggleTime)) + " ثانیه", w / 2, h * 0.48f, p);
        // mash button
        p.setColor(0x66D04848);
        c.drawCircle(w / 2, h * 0.66f, 70 * dp, p);
        p.setColor(0xFFFFD0D0);
        p.setTextSize(22 * dp);
        c.drawText("بجنگ!", w / 2, h * 0.66f + 8 * dp, p);
        p.setTypeface(null);
    }

    private void drawDead(Canvas c) {
        c.drawColor(0xE00A0406);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(30 * dp);
        p.setColor(0xFFB02020);
        c.drawText("تو مُردی", w / 2, h * 0.30f, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(16 * dp);
        p.setColor(0xFFC8C0B0);
        c.drawText(Str.DEATH_TEXT, w / 2, h * 0.42f, p);
        float bw = 170 * dp, bh = 46 * dp;
        p.setColor(0xFF2A222A);
        c.drawRoundRect(w / 2 - bw - 10 * dp, h * 0.62f, w / 2 - 10 * dp, h * 0.62f + bh, 10, 10, p);
        c.drawRoundRect(w / 2 + 10 * dp, h * 0.62f, w / 2 + bw + 10 * dp, h * 0.62f + bh, 10, 10, p);
        p.setColor(0xFFE8E0C8);
        p.setTextSize(15 * dp);
        c.drawText("ادامه از ذخیرهٔ خودکار", w / 2 - bw / 2, h * 0.62f + 28 * dp, p);
        c.drawText("بازگشت به منو", w / 2 + bw / 2, h * 0.62f + 28 * dp, p);
        p.setTypeface(null);
    }

    private void drawEnding(Canvas c) {
        c.drawColor(0xF2050508);
        int id = Math.max(0, world.endingId);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.title(getContext()));
        p.setTextSize(26 * dp);
        p.setColor(0xFFC8A050);
        c.drawText(Str.ENDING_TITLES[id].toUpperCase(), w / 2, h * 0.28f, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(15 * dp);
        p.setColor(0xFFD8D2C4);
        float y = h * 0.40f;
        for (String r0 : Str.ENDING_TEXTS[id].split("\n")) {
            c.drawText(r0, w / 2, y, p);
            y += 26 * dp;
        }
        p.setColor(0xFF7A7468);
        p.setTextSize(12 * dp);
        c.drawText("برای ادامه لمس کن…", w / 2, h * 0.86f, p);
        p.setTypeface(null);
    }

    // ---------------- pause / settings / inventory / customize ----------------
    private void drawPause(Canvas c) {
        c.drawColor(0xC808080C);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.title(getContext()));
        p.setTextSize(26 * dp);
        p.setColor(0xFFC8A050);
        c.drawText("HOLLOW VALE", w / 2, h * 0.16f, p);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(16 * dp);
        p.setColor(0xFFD8D2C4);
        c.drawText("توقف", w / 2, h * 0.24f, p);
        p.setTypeface(null);
        float bw = 220 * dp, bh = 44 * dp;
        String[] items = {"ادامه", "تنظیمات سریع", "ذخیرهٔ بازی", "شخصی‌سازی کنترل‌ها", "خروج به منو"};
        for (int i = 0; i < items.length; i++) {
            float y = h * 0.32f + i * (bh + 12 * dp);
            p.setColor(0xFF202028);
            c.drawRoundRect(w / 2 - bw / 2, y, w / 2 + bw / 2, y + bh, 10, 10, p);
            p.setColor(0xFFE8E0C8);
            p.setTextSize(15 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(items[i], w / 2, y + bh / 2 + 5 * dp, p);
        }
        p.setTypeface(null);
    }

    private boolean pauseTap(float x, float y) {
        float bh = 44 * dp;
        int idx = (int) ((y - h * 0.32f) / (bh + 12 * dp));
        if (x < w / 2 - 110 * dp || x > w / 2 + 110 * dp) return true;
        if (idx < 0 || idx > 4) return true;
        switch (idx) {
            case 0:
                setMode(M_PLAY);
                break;
            case 1:
                setMode(M_SETTINGS);
                break;
            case 2:
                world.autoSaveData = world.serialize();
                world.autoSaveFlag = false;
                SaveIO.write(act, "slot_auto.json", world.autoSaveData);
                if (!"slot_auto.json".equals(act.sessionSlot())) {
                    SaveIO.write(act, act.sessionSlot(), world.autoSaveData);
                }
                world.toast(Str.SAVED_OK);
                audio.play("save_chime");
                break;
            case 3:
                setMode(M_CUSTOM);
                break;
            case 4:
                act.quitToMenu();
                break;
        }
        return true;
    }

    private float sliderY0, sliderH;

    private void drawSettings(Canvas c) {
        c.drawColor(0xE808080C);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText("تنظیمات", w / 2, h * 0.10f, p);
        p.setTypeface(null);
        sliderY0 = h * 0.16f;
        sliderH = 44 * dp;
        slider(c, 0, Str.SET_SENS, cfg.sens / 3f, String.format("%.1f", cfg.sens));
        slider(c, 1, Str.SET_VOL_MASTER, cfg.volMaster, pct(cfg.volMaster));
        slider(c, 2, Str.SET_VOL_MUSIC, cfg.volMusic, pct(cfg.volMusic));
        slider(c, 3, Str.SET_VOL_SFX, cfg.volSfx, pct(cfg.volSfx));
        // quality row
        float y = sliderY0 + 4 * sliderH;
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFFCCCCCC);
        p.setTextSize(13 * dp);
        c.drawText(Str.SET_QUALITY, w - 40 * dp, y + 14 * dp, p);
        String[] qs = {Str.QUALITY_LOW, Str.QUALITY_MED, Str.QUALITY_HIGH};
        for (int i = 0; i < 3; i++) {
            float bx = w * 0.55f - i * 80 * dp;
            boolean sel = cfg.quality == i;
            p.setColor(sel ? 0xFF7A2A2A : 0xFF202028);
            c.drawRoundRect(bx - 34 * dp, y, bx + 34 * dp, y + 26 * dp, 8, 8, p);
            p.setColor(sel ? 0xFFFFE0C0 : 0xFF999999);
            c.drawText(qs[i], bx, y + 17 * dp, p);
        }
        // toggles
        for (int i = 0; i < 5; i++) {
            float ty = y + 40 * dp + i * 34 * dp;
            String name;
            boolean val;
            switch (i) {
                case 0: name = Str.SET_FOG; val = cfg.fog; break;
                case 1: name = Str.SET_GRAIN; val = cfg.grain; break;
                case 2: name = Str.SET_INVERT; val = cfg.invertLook; break;
                case 3: name = Str.SET_VIBRATE; val = cfg.vibrate; break;
                default: name = Str.SET_SHOWFPS; val = cfg.showFps; break;
            }
            p.setTextAlign(Paint.Align.RIGHT);
            p.setColor(0xFFCCCCCC);
            p.setTextSize(13 * dp);
            c.drawText(name, w - 40 * dp, ty + 18 * dp, p);
            p.setColor(val ? 0xFF3F9B4F : 0xFF553333);
            c.drawRoundRect(40 * dp, ty, 110 * dp, ty + 26 * dp, 13 * dp, 13 * dp, p);
            p.setColor(0xFFFFFFFF);
            p.setTextSize(11 * dp);
            c.drawText(val ? Str.ON : Str.OFF, 75 * dp, ty + 17 * dp, p);
        }
        p.setTextAlign(Paint.Align.CENTER);
        p.setColor(0xFF888888);
        p.setTextSize(12 * dp);
        c.drawText("بازگشت: لمس جای خالی", w / 2, h - 12 * dp, p);
    }

    private String pct(float v) {
        return (int) (v * 100) + "٪";
    }

    private void slider(Canvas c, int idx, String name, float v01, String txt) {
        float y = sliderY0 + idx * sliderH;
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFFCCCCCC);
        p.setTextSize(13 * dp);
        c.drawText(name, w - 40 * dp, y + 14 * dp, p);
        p.setTextAlign(Paint.Align.LEFT);
        c.drawText(txt, 40 * dp, y + 14 * dp, p);
        p.setColor(0xFF202028);
        c.drawRoundRect(120 * dp, y, w - 120 * dp, y + 20 * dp, 10, 10, p);
        p.setColor(0xFF7A2A2A);
        c.drawRoundRect(120 * dp, y, 120 * dp + (w - 240 * dp) * Math.max(0, Math.min(1, v01)), y + 20 * dp, 10, 10, p);
        p.setColor(0xFFE8E0C8);
        c.drawCircle(120 * dp + (w - 240 * dp) * Math.max(0, Math.min(1, v01)), y + 10 * dp, 9 * dp, p);
    }

    private boolean settingsTap(float x, float y) {
        for (int i = 0; i < 4; i++) {
            float sy = sliderY0 + i * sliderH;
            if (y >= sy - 6 * dp && y <= sy + 28 * dp && x >= 120 * dp && x <= w - 120 * dp) {
                float v = (x - 120 * dp) / (w - 240 * dp);
                v = Math.max(0, Math.min(1, v));
                switch (i) {
                    case 0: cfg.sens = 0.2f + v * 2.8f; break;
                    case 1: cfg.volMaster = v; break;
                    case 2:
                        cfg.volMusic = v;
                        audio.setConfig(cfg);
                        break;
                    case 3: cfg.volSfx = v; break;
                }
                SaveIO.saveConfig(act, cfg);
                audio.play("ui_move", 0.4f);
                return true;
            }
        }
        float qy = sliderY0 + 4 * sliderH;
        if (y >= qy && y <= qy + 26 * dp && x >= w * 0.55f - 240 * dp && x <= w * 0.55f + 34 * dp) {
            int i = (int) Math.round((w * 0.55f - x) / 80 * dp / dp);
            if (i >= 0 && i <= 2 && i != cfg.quality) {
                cfg.quality = i;
                SaveIO.saveConfig(act, cfg);
                act.onQualityChanged();
                audio.play("ui_select");
            }
            return true;
        }
        for (int i = 0; i < 5; i++) {
            float ty = qy + 40 * dp + i * 34 * dp;
            if (y >= ty && y <= ty + 26 * dp && x >= 40 * dp && x <= 110 * dp) {
                switch (i) {
                    case 0: cfg.fog = !cfg.fog; break;
                    case 1: cfg.grain = !cfg.grain; break;
                    case 2: cfg.invertLook = !cfg.invertLook; break;
                    case 3: cfg.vibrate = !cfg.vibrate; break;
                    case 4: cfg.showFps = !cfg.showFps; break;
                }
                SaveIO.saveConfig(act, cfg);
                audio.play("ui_select", 0.7f);
                return true;
            }
        }
        setMode(M_PAUSE);
        return true;
    }

    private void drawInv(Canvas c) {
        c.drawColor(0xE0101014);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText("کوله‌پشتی", w / 2, h * 0.10f, p);
        p.setTypeface(null);
        float cell = Math.min(64 * dp, w / 10f);
        float gx = w / 2 - cell * 4.5f, gy = h * 0.16f;
        for (int i = 0; i < Player.INV_MAX; i++) {
            float cx = gx + (i % 8 + 0.5f) * cell;
            float cy = gy + (i / 8 + 0.5f) * cell;
            p.setColor(0xFF1E1E24);
            c.drawRoundRect(cx - cell / 2 + 3, cy - cell / 2 + 3, cx + cell / 2 - 3, cy + cell / 2 - 3, 8, 8, p);
            if (i < world.player.inv.size() && sprites != null) {
                int t = world.player.inv.get(i);
                int tile = World.tileForItem(t);
                int ts = 64;
                Rect src = new Rect((tile % 8) * ts, (tile / 8) * ts, (tile % 8) * ts + ts, (tile / 8) * ts + ts);
                RectF dst = new RectF(cx - cell / 2 + 6, cy - cell / 2 + 6, cx + cell / 2 - 6, cy + cell / 2 - 6);
                c.drawBitmap(sprites, src, dst, p);
            }
        }
        // info row
        p.setColor(0xFFC8B87A);
        p.setTextSize(13 * dp);
        p.setTypeface(Fonts.vazir(getContext()));
        c.drawText("سکه: " + world.player.coins + "   فشنگ: " + world.player.ammo
                + "   فیلم: " + world.player.film + "   طلسم: " + world.player.talismans, w / 2, gy + 3.4f * cell, p);
        // talismans etc as tap-to-use hint
        int n = world.player.inv.size();
        for (int i = 0; i < n; i++) {
            int t = world.player.inv.get(i);
            float cx = gx + (i % 8 + 0.5f) * cell;
            float cy = gy + (i / 8 + 0.5f) * cell;
            String nm = Str.ITEM_NAME.containsKey(t) ? Str.ITEM_NAME.get(t) : "?";
            p.setColor(0xFFAAAAAA);
            p.setTextSize(10 * dp);
            c.drawText(nm, cx, cy + cell / 2 + 12 * dp, p);
        }
        p.setColor(0xFF888888);
        p.setTextSize(12 * dp);
        c.drawText("برای استفاده روی آیتم بزن — برای بستن جای خالی", w / 2, h - 14 * dp, p);
        p.setTypeface(null);
    }

    private boolean invTap(float x, float y) {
        float cell = Math.min(64 * dp, w / 10f);
        float gx = w / 2 - cell * 4.5f, gy = h * 0.16f;
        int col = (int) ((x - gx) / cell);
        int row = (int) ((y - gy) / cell);
        if (col >= 0 && col < 8 && row >= 0 && row < 2) {
            int idx = row * 8 + col;
            if (idx < world.player.inv.size()) {
                int t = world.player.inv.get(idx);
                String res = world.useItem(t);
                world.toast(res);
                audio.play("ui_select", 0.6f);
                return true;
            }
        }
        setMode(M_PLAY);
        return true;
    }

    // ---------------- journal ----------------
    private void drawJournal(Canvas c) {
        c.drawColor(0xEE101014);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText("دفتر خاطرات", w / 2, h * 0.08f, p);
        p.setTypeface(Fonts.vazir(getContext()));
        // quests
        p.setTextAlign(Paint.Align.RIGHT);
        p.setTextSize(14 * dp);
        float y = h * 0.16f;
        p.setColor(0xFFC8A050);
        c.drawText("اهداف", w - 30 * dp, y, p);
        y += 22 * dp;
        for (int q = 0; q < Str.QUEST_TITLES.length; q++) {
            int st = world.quests.state[q];
            if (st == 0) continue;
            p.setColor(st == 2 ? 0xFF6A9B5F : 0xFFE8E0C8);
            String mark = st == 2 ? "✓ " : "• ";
            c.drawText(mark + Str.QUEST_TITLES[q], w - 30 * dp, y, p);
            if (st == 1) {
                p.setColor(0xFF999988);
                p.setTextSize(11 * dp);
                c.drawText(Str.QUEST_DESCS[q], w - 52 * dp, y + 15 * dp, p);
                p.setTextSize(14 * dp);
            }
            y += st == 1 ? 34 * dp : 22 * dp;
        }
        // notes
        y += 6 * dp;
        p.setColor(0xFFC8A050);
        c.drawText("یادداشت‌های پیدا شده", w - 30 * dp, y, p);
        y += 22 * dp;
        p.setColor(0xFFB0A890);
        p.setTextSize(12 * dp);
        int found = 0;
        for (int nId = 0; nId < 8; nId++) {
            if (world.notesFound.contains(nId)) {
                found++;
                c.drawText("✓ " + Str.NOTE_TITLES[nId], w - 30 * dp, y, p);
                y += 19 * dp;
            }
        }
        c.drawText(found + "/۸", w - 30 * dp, y + 6 * dp, p);
        p.setTextAlign(Paint.Align.CENTER);
        p.setColor(0xFF777777);
        c.drawText("برای بستن لمس کن", w / 2, h - 12 * dp, p);
        p.setTypeface(null);
    }

    // ---------------- control customization ----------------
    private void drawCustom(Canvas c) {
        c.drawColor(0xB808080C);
        drawButtons(c);
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(16 * dp);
        p.setColor(0xFFFFE0A0);
        c.drawText("حالت شخصی‌سازی: دکمه‌ها را بکش", w / 2, h * 0.08f, p);
        p.setTypeface(null);
        // selected control panel
        p.setColor(0xE0202026);
        c.drawRoundRect(w / 2 - 150 * dp, h - 110 * dp, w / 2 + 150 * dp, h - 14 * dp, 12, 12, p);
        p.setColor(0xFFE8E0C8);
        p.setTextSize(13 * dp);
        c.drawText("دکمه: " + (customDrag == null ? "— یکی را لمس کن —" : customDrag), w / 2, h - 86 * dp, p);
        // scale/alpha buttons
        p.setColor(0xFF26262E);
        c.drawRoundRect(w / 2 - 130 * dp, h - 74 * dp, w / 2 - 66 * dp, h - 46 * dp, 8, 8, p);
        c.drawRoundRect(w / 2 - 58 * dp, h - 74 * dp, w / 2 + 6 * dp, h - 46 * dp, 8, 8, p);
        c.drawRoundRect(w / 2 + 14 * dp, h - 74 * dp, w / 2 + 78 * dp, h - 46 * dp, 8, 8, p);
        c.drawRoundRect(w / 2 + 86 * dp, h - 74 * dp, w / 2 + 130 * dp, h - 46 * dp, 8, 8, p);
        p.setColor(0xFFE8E0C8);
        c.drawText("−", w / 2 - 98 * dp, h - 54 * dp, p);
        c.drawText("+", w / 2 - 26 * dp, h - 54 * dp, p);
        p.setTextSize(11 * dp);
        c.drawText("شفافیت", w / 2 + 46 * dp, h - 55 * dp, p);
        c.drawText("ریست", w / 2 + 108 * dp, h - 55 * dp, p);
        p.setColor(0xFF888888);
        p.setTextSize(11 * dp);
        c.drawText("پایان: لمس بالای صفحه", w / 2, h - 18 * dp, p);
        p.setTypeface(null);
    }

    private boolean customTap(float x, float y) {
        if (y < h * 0.6f && y > h * 0.12f) {
            // panel? no — treat top strip as exit
            if (y < h * 0.14f) {
                if (customDrag != null) saveCustom();
                customDrag = null;
                setMode(M_PLAY);
                return true;
            }
        }
        // panel buttons
        float py = h - 110 * dp;
        if (y >= h - 74 * dp && y <= h - 46 * dp && customDrag != null) {
            float[] f = cfg.buttons.get(customDrag);
            if (x >= w / 2 - 130 * dp && x <= w / 2 - 66 * dp) { // minus
                if (f == null) {
                    f = defFor(customDrag);
                    cfg.buttons.put(customDrag, f);
                }
                f[2] = Math.max(0.6f, f[2] - 0.1f);
            } else if (x >= w / 2 - 58 * dp && x <= w / 2 + 6 * dp) { // plus
                if (f == null) {
                    f = defFor(customDrag);
                    cfg.buttons.put(customDrag, f);
                }
                f[2] = Math.min(1.8f, f[2] + 0.1f);
            } else if (x >= w / 2 + 14 * dp && x <= w / 2 + 78 * dp) { // alpha
                if (f == null) {
                    f = defFor(customDrag);
                    cfg.buttons.put(customDrag, f);
                }
                f[3] = f[3] >= 0.95f ? 0.45f : Math.min(1f, f[3] + 0.25f);
            } else if (x >= w / 2 + 86 * dp && x <= w / 2 + 130 * dp) { // reset
                cfg.buttons.remove(customDrag);
            }
            SaveIO.saveConfig(act, cfg);
            audio.play("ui_move", 0.5f);
            return true;
        }
        // pick a button to drag
        for (int i = buttons.size() - 1; i >= 0; i--) {
            Btn b = buttons.get(i);
            float dx = x - b.x, dy = y - b.y;
            if (dx * dx + dy * dy <= (b.r + 10 * dp) * (b.r + 10 * dp)) {
                customDrag = b.id;
                customOffX = x - b.x;
                customOffY = y - b.y;
                audio.play("ui_select", 0.5f);
                return true;
            }
        }
        return true;
    }

    private void dragCustom(float x, float y) {
        if (customDrag == null) return;
        for (Btn b : buttons) {
            if (b.id.equals(customDrag)) {
                b.x = Math.max(30 * dp, Math.min(w - 30 * dp, x - customOffX));
                b.y = Math.max(80 * dp, Math.min(h - 60 * dp, y - customOffY));
                float[] f = cfg.buttons.get(b.id);
                if (f == null) {
                    f = defFor(b.id);
                    cfg.buttons.put(b.id, f);
                }
                f[0] = b.x / w;
                f[1] = b.y / h;
                return;
            }
        }
    }

    private void saveCustom() {
        SaveIO.saveConfig(act, cfg);
    }

    private float[] defFor(String id) {
        for (Btn b : buttons) {
            if (b.id.equals(id)) return new float[]{b.x / w, b.y / h, b.r / (30 * dp), 1f};
        }
        return new float[]{0.5f, 0.5f, 1f, 1f};
    }
}
