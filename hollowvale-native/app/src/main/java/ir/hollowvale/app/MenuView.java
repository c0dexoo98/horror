package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Shader;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.view.Choreographer;
import android.view.MotionEvent;
import android.view.View;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import ir.hollowvale.game.GameConfig;
import ir.hollowvale.game.Str;

/**
 * HOLLOW VALE v4 — cinematic main menu: living background (fog, lightning, moon, mansion,
 * dust, parallax), PS1-flicker title, animated buttons, saves/settings/achievements/credits.
 */
public class MenuView extends View implements Choreographer.FrameCallback {
    public static final int SCR_START = 0, SCR_MAIN = 1, SCR_SAVES = 2, SCR_SETTINGS = 3,
            SCR_ACH = 4, SCR_CREDITS = 5, SCR_EXIT = 6;

    private final MenuActivity act;
    private final GameConfig cfg;
    private final AudioSys audio;
    private final Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
    private float w, h, dp;
    private float t = 0;
    private long lastN = 0;
    private final Random rnd = new Random(2026);

    private int screen = SCR_START;
    private float screenT = 0; // time since screen switch (for transitions)
    // when true, a looping video plays BEHIND this view; we only paint scrims/atmosphere
    private boolean videoBg = false;

    // background elements
    private float[][] stars = new float[90][3];
    private float[][] dust = new float[46][4];
    private float lightning = 0, lightningNext = 6;
    private float[] fogSeed = new float[3];
    private float parX = 0, parY = 0;
    private SensorManager sm;

    // buttons
    private class MBtn {
        String label;
        float x, y, bw, bh;
        float appear = 0;   // 0..1 slide-in
        float press = 0;
        boolean enabled = true;
        int idx;
        Runnable run;
    }

    private final List<MBtn> buttons = new ArrayList<MBtn>();
    private int focusIdx = -1;
    private String toastMsg = "";
    private float toastT = 0;

    // saves meta
    private String[] saveMeta = new String[4]; // 0=auto, 1..3
    private boolean[] saveHas = new boolean[4];

    private float creditScroll = 0;
    private SensorEventListener sensorListener;

    public MenuView(Context c, MenuActivity act, GameConfig cfg, AudioSys audio) {
        super(c);
        this.act = act;
        this.cfg = cfg;
        this.audio = audio;
        dp = c.getResources().getDisplayMetrics().density;
        for (float[] s : stars) {
            s[0] = rnd.nextFloat();
            s[1] = rnd.nextFloat() * 0.55f;
            s[2] = rnd.nextFloat() * 6.28f;
        }
        for (float[] d : dust) {
            d[0] = rnd.nextFloat();
            d[1] = rnd.nextFloat();
            d[2] = (rnd.nextFloat() - 0.5f) * 0.02f;
            d[3] = rnd.nextFloat() * 6.28f;
        }
        for (int i = 0; i < 3; i++) fogSeed[i] = rnd.nextFloat() * 100;
        try {
            sm = (SensorManager) c.getSystemService(Context.SENSOR_SERVICE);
            sensorListener = new SensorEventListener() {
                @Override
                public void onSensorChanged(SensorEvent e) {
                    if (e.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
                        parX += ((-e.values[0] / 9f) * 14 * dp - parX) * 0.08f;
                        parY += ((e.values[1] / 9f) * 8 * dp - parY) * 0.08f;
                    }
                }

                @Override
                public void onAccuracyChanged(Sensor s, int a) {
                }
            };
            sm.registerListener(sensorListener, sm.getDefaultSensor(Sensor.TYPE_ACCELEROMETER), SensorManager.SENSOR_DELAY_GAME);
        } catch (Throwable ignored) {
            sm = null;
        }
        Choreographer.getInstance().postFrameCallback(this);
        refreshSaves();
    }

    public void refreshSaves() {
        for (int i = 0; i < 4; i++) {
            String name = i == 0 ? "slot_auto.json" : ("slot" + i + ".json");
            saveHas[i] = SaveIO.exists(act, name);
            saveMeta[i] = saveHas[i] ? SaveIO.meta(act, name) : null;
        }
    }

    /** Enable/disable cinematic-video-behind-menu mode (fallback switches back to paint). */
    public void setVideoBackground(boolean on) {
        videoBg = on;
    }

    @Override
    public void doFrame(long n) {
        float dt = lastN == 0 ? 0.016f : Math.min(0.05f, (n - lastN) / 1e9f);
        lastN = n;
        t += dt;
        screenT += dt;
        if (lightning > 0) lightning -= dt * 2.4f;
        lightningNext -= dt;
        if (lightningNext <= 0) {
            lightningNext = 9 + rnd.nextFloat() * 15;
            lightning = 0.7f + rnd.nextFloat() * 0.3f;
            audio.play(rnd.nextBoolean() ? "thunder" : "thunder_far", 0.55f, 0.1f);
        }
        if (toastT > 0) toastT -= dt;
        audio.update(dt);
        // menu music
        if (screen == SCR_START) audio.music("wind_loop", 0.5f);
        else audio.music("music_menu", 0.6f);
        invalidate();
        Choreographer.getInstance().postFrameCallback(this);
    }

    // ------------------------------------------------ touch
    @Override
    public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX(), y = e.getY();
        if (e.getActionMasked() == MotionEvent.ACTION_DOWN || e.getActionMasked() == MotionEvent.ACTION_POINTER_DOWN) {
            tap(x, y);
        }
        return true;
    }

    public void tap(float x, float y) {
        if (screen == SCR_START) {
            go(SCR_MAIN);
            audio.play("start_game");
            return;
        }
        if (screen == SCR_CREDITS) {
            go(SCR_MAIN);
            return;
        }
        if (screen == SCR_ACH) {
            go(SCR_MAIN);
            return;
        }
        if (screen == SCR_EXIT) {
            if (y > h * 0.6f) {
                if (x < w / 2) {
                    act.finishAffinity();
                } else {
                    go(SCR_MAIN);
                }
            }
            return;
        }
        // buttons
        for (int i = 0; i < buttons.size(); i++) {
            MBtn b = buttons.get(i);
            if (!b.enabled) continue;
            if (x >= b.x - b.bw / 2 && x <= b.x + b.bw / 2 && y >= b.y && y <= b.y + b.bh) {
                b.press = 1;
                audio.play("ui_select");
                if (b.run != null) b.run.run();
                return;
            }
        }
        // settings interactions
        if (screen == SCR_SETTINGS) settingsTap(x, y);
        if (screen == SCR_SAVES) savesTap(x, y);
        // back area (top-right corner)
        if (x > w - 70 * dp && y < 60 * dp) {
            go(SCR_MAIN);
            audio.play("ui_back");
        }
    }

    private void go(int s) {
        screen = s;
        screenT = 0;
        if (s == SCR_SAVES) refreshSaves();
    }

    private void settingsTap(float x, float y) {
        float y0 = h * 0.30f;
        float sh = 40 * dp;
        for (int i = 0; i < 4; i++) {
            float sy = y0 + i * sh;
            if (y >= sy && y <= sy + 22 * dp && x >= 130 * dp && x <= w - 130 * dp) {
                float v = (x - 130 * dp) / (w - 260 * dp);
                v = Math.max(0.02f, Math.min(1f, v));
                switch (i) {
                    case 0: cfg.sens = 0.2f + v * 2.8f; break;
                    case 1: cfg.volMaster = v; break;
                    case 2: cfg.volMusic = v; break;
                    case 3: cfg.volSfx = v; break;
                }
                audio.play("ui_move", 0.4f);
                SaveIO.saveConfig(act, cfg);
                return;
            }
        }
        float qy = y0 + 4 * sh;
        for (int i = 0; i < 3; i++) {
            float bx = w * 0.5f + (i - 1) * 90 * dp;
            if (x >= bx - 40 * dp && x <= bx + 40 * dp && y >= qy && y <= qy + 26 * dp) {
                cfg.quality = i;
                SaveIO.saveConfig(act, cfg);
                audio.play("ui_select");
                return;
            }
        }
        for (int i = 0; i < 5; i++) {
            float ty = qy + 40 * dp + i * 32 * dp;
            if (x >= w - 150 * dp && x <= w - 40 * dp && y >= ty && y <= ty + 26 * dp) {
                switch (i) {
                    case 0: cfg.fog = !cfg.fog; break;
                    case 1: cfg.grain = !cfg.grain; break;
                    case 2: cfg.invertLook = !cfg.invertLook; break;
                    case 3: cfg.vibrate = !cfg.vibrate; break;
                    case 4: cfg.showFps = !cfg.showFps; break;
                }
                audio.play("ui_select", 0.7f);
                SaveIO.saveConfig(act, cfg);
                return;
            }
        }
    }

    private void savesTap(float x, float y) {
        float bw = Math.min(w * 0.62f, 460 * dp);
        float bh = 52 * dp;
        float x0 = w / 2 - bw / 2;
        float y0 = h * 0.24f;
        int idx = (int) ((y - y0) / (bh + 12 * dp));
        if (idx < 0 || idx > 3 || x < x0 || x > x0 + bw) return;
        if (!saveHas[idx]) {
            // start new game into this slot
            if (idx > 0) act.startGame(false, "slot" + idx + ".json");
            return;
        }
        // load zone vs delete zone
        if (x < x0 + bw - 60 * dp) {
            act.startGame(true, idx == 0 ? "slot_auto.json" : "slot" + idx + ".json");
        } else if (idx > 0) {
            SaveIO.delete(act, "slot" + idx + ".json");
            refreshSaves();
            audio.play("ui_back");
        }
    }

    // ------------------------------------------------ frame
    @Override
    protected void onDraw(Canvas c) {
        try {
            drawAll(c);
        } catch (Throwable t) {
            c.drawColor(0xFF060608);
        }
    }

    private void drawAll(Canvas c) {
        w = getWidth();
        h = getHeight();
        drawBackground(c);
        switch (screen) {
            case SCR_START:
                drawStart(c);
                break;
            case SCR_MAIN:
                drawTitle(c);
                drawMainButtons(c);
                break;
            case SCR_SAVES:
                drawTitleSmall(c);
                drawSaves(c);
                break;
            case SCR_SETTINGS:
                drawTitleSmall(c);
                drawSettings(c);
                break;
            case SCR_ACH:
                drawTitleSmall(c);
                drawAch(c);
                break;
            case SCR_CREDITS:
                drawCredits(c);
                break;
            case SCR_EXIT:
                drawTitleSmall(c);
                drawExit(c);
                break;
        }
        drawToast(c);
    }

    // ------------------------------------------------ background
    private void drawBackground(Canvas c) {
        if (videoBg) {
            drawVideoBackground(c);
            return;
        }
        // sky
        p.setShader(new LinearGradient(0, 0, 0, h,
                Color.rgb(9, 8, 14), Color.rgb(16, 13, 24), Shader.TileMode.CLAMP));
        c.drawRect(0, 0, w, h, p);
        p.setShader(null);
        // stars
        for (float[] s : stars) {
            float tw = 0.5f + 0.5f * (float) Math.sin(t * 1.7 + s[2]);
            if (tw > 0.4f) {
                p.setColor(Color.argb((int) (140 * tw), 200, 200, 215));
                c.drawPoint(s[0] * w + parX * 0.2f, s[1] * h + parY * 0.2f, p);
            }
        }
        // moon
        float mx = w * 0.78f + parX * 0.5f, my = h * 0.20f + parY * 0.5f;
        p.setShader(new RadialGradient(mx, my, 90 * dp,
                new int[]{0x50A02020, 0x28801A1A, 0x00801A1A}, null, Shader.TileMode.CLAMP));
        c.drawCircle(mx, my, 90 * dp, p);
        p.setShader(null);
        p.setColor(0xFFB02828);
        c.drawCircle(mx, my, 40 * dp, p);
        p.setColor(0xFF982020);
        c.drawCircle(mx - 10 * dp, my + 8 * dp, 12 * dp, p);
        c.drawCircle(mx + 14 * dp, my - 10 * dp, 8 * dp, p);
        if (lightning > 0) {
            p.setColor(Color.argb((int) (70 * lightning), 120, 130, 170));
            c.drawRect(0, 0, w, h, p);
        }
        // hills
        p.setColor(0xFF0D0B12);
        Path hill = new Path();
        hill.moveTo(-50, h);
        hill.quadTo(w * 0.2f, h * 0.72f, w * 0.5f, h * 0.80f);
        hill.quadTo(w * 0.8f, h * 0.88f, w + 50, h * 0.74f);
        hill.lineTo(w + 50, h);
        hill.close();
        c.drawPath(hill, p);
        // mansion silhouette
        drawMansion(c, w * 0.5f + parX, h * 0.66f + parY * 0.4f, 1f, 0xFF0A0810, lightning);
        // trees
        p.setColor(0xFF070610);
        for (int i = 0; i < 7; i++) {
            float tx = w * (0.04f + i * 0.155f) + parX * (0.3f + i * 0.05f);
            float baseY = h * (0.82f + 0.02f * ((i * 7) % 3));
            float th = h * (0.13f + 0.03f * ((i * 5) % 4));
            c.drawLine(tx, baseY, tx + 6 * dp * ((i % 2) == 0 ? 1 : -1), baseY - th, p);
            c.drawLine(tx + 2 * dp, baseY - th * 0.5f, tx - 16 * dp, baseY - th * 0.75f, p);
            c.drawLine(tx + 2 * dp, baseY - th * 0.6f, tx + 20 * dp, baseY - th * 0.9f, p);
        }
        // fog layers
        for (int i = 0; i < 3; i++) {
            float fy = h * (0.68f + i * 0.09f);
            float amp = 0.16f + 0.07f * i;
            p.setShader(new LinearGradient(0, fy - 40 * dp, 0, fy + 60 * dp,
                    Color.argb(0, 130, 130, 145), Color.argb((int) (38 * (1 + lightning)), 130, 130, 148),
                    Shader.TileMode.CLAMP));
            p.setColor(Color.argb((int) (30 + 10 * i + 60 * lightning), 120 + (int) (40 * lightning),
                    120 + (int) (42 * lightning), 135 + (int) (48 * lightning)));
            Path fog = new Path();
            fog.moveTo(-20, h);
            float ph1 = fogSeed[i];
            for (float fx = -20; fx <= w + 40; fx += 24) {
                float yy = fy + (float) Math.sin(fx * 0.006f / dp * 0.3f + t * (0.25f + i * 0.12f) + ph1) * (14 + i * 8) * dp
                        + (float) Math.sin(fx * 0.0017f + t * 0.1f + ph1 * 2f) * 20 * dp;
                fog.lineTo(fx, yy);
            }
            fog.lineTo(w + 40, h);
            fog.close();
            c.drawPath(fog, p);
            p.setShader(null);
        }
        // dust
        for (float[] d : dust) {
            d[0] += d[2] * 0.016f;
            if (d[0] < 0) d[0] += 1;
            if (d[0] > 1) d[0] -= 1;
            float yy = d[1] * h + 10 * dp * (float) Math.sin(t * 0.6f + d[3]);
            p.setColor(Color.argb((int) (30 + 22 * Math.sin(t * 2 + d[3])), 210, 205, 215));
            c.drawPoint(d[0] * w, yy, p);
        }
    }

    /**
     * Atmosphere painted OVER the looping background video: soft scrims so the
     * UI stays readable, plus lightning flashes, drifting fog and dust that
     * blend the footage into the game's horror mood.
     */
    private void drawVideoBackground(Canvas c) {
        // vertical scrim: darker top & bottom bands, clearer window in the middle
        p.setShader(new LinearGradient(0, 0, 0, h, new int[]{
                Color.argb(150, 4, 4, 8),
                Color.argb(38, 4, 4, 8),
                Color.argb(20, 4, 4, 8),
                Color.argb(120, 3, 3, 7)},
                new float[]{0f, 0.32f, 0.62f, 1f}, Shader.TileMode.CLAMP));
        c.drawRect(0, 0, w, h, p);
        p.setShader(null);
        // pulsing red vignette tint (heartbeat of the vale)
        float beat = 0.5f + 0.5f * (float) Math.sin(t * 1.05);
        p.setShader(new RadialGradient(w * 0.5f, h * 0.46f, Math.max(w, h) * 0.75f,
                new int[]{0x00000000,
                        Color.argb((int) (26 + 14 * beat), 20, 0, 2),
                        Color.argb((int) (95 + 40 * beat), 8, 0, 1)},
                null, Shader.TileMode.CLAMP));
        c.drawRect(0, 0, w, h, p);
        p.setShader(null);
        // lightning flash over footage
        if (lightning > 0) {
            p.setColor(Color.argb((int) (52 * lightning), 120, 130, 170));
            c.drawRect(0, 0, w, h, p);
        }
        // drifting fog (thinner so the footage stays visible)
        for (int i = 0; i < 2; i++) {
            float fy = h * (0.74f + i * 0.14f);
            p.setColor(Color.argb((int) (20 + 8 * i + 40 * lightning), 120, 120, 135));
            Path fog = new Path();
            fog.moveTo(-20, h);
            float ph1 = fogSeed[i];
            for (float fx = -20; fx <= w + 40; fx += 26) {
                float yy = fy + (float) Math.sin(fx * 0.006f / dp * 0.3f + t * (0.22f + i * 0.1f) + ph1) * (10 + i * 7) * dp
                        + (float) Math.sin(fx * 0.0017f + t * 0.1f + ph1 * 2f) * 16 * dp;
                fog.lineTo(fx, yy);
            }
            fog.lineTo(w + 40, h);
            fog.close();
            c.drawPath(fog, p);
        }
        // floating dust catching the light
        for (float[] d : dust) {
            d[0] += d[2] * 0.016f;
            if (d[0] < 0) d[0] += 1;
            if (d[0] > 1) d[0] -= 1;
            float yy = d[1] * h + 10 * dp * (float) Math.sin(t * 0.6f + d[3]);
            p.setColor(Color.argb((int) (26 + 20 * Math.sin(t * 2 + d[3])), 210, 205, 215));
            c.drawPoint(d[0] * w, yy, p);
        }
    }

    private void drawMansion(Canvas c, float cx, float baseY, float scale, int col, float lit) {
        p.setColor(col);
        float u = 1.15f * dp * scale * (w / 1280f > 1 ? w / 1280f : 1f);
        // left wing
        c.drawRect(cx - 190 * u, baseY - 120 * u, cx - 90 * u, baseY, p);
        tri(c, cx - 195 * u, baseY - 120 * u, cx - 140 * u, baseY - 185 * u, cx - 85 * u, baseY - 120 * u, p);
        // main tower
        c.drawRect(cx - 80 * u, baseY - 170 * u, cx + 80 * u, baseY, p);
        tri(c, cx - 88 * u, baseY - 170 * u, cx, baseY - 260 * u, cx + 88 * u, baseY - 170 * u, p);
        // right wing
        c.drawRect(cx + 80 * u, baseY - 130 * u, cx + 190 * u, baseY, p);
        tri(c, cx + 75 * u, baseY - 130 * u, cx + 140 * u, baseY - 200 * u, cx + 195 * u, baseY - 130 * u, p);
        // door
        p.setColor(0xFF05040A);
        c.drawRect(cx - 16 * u, baseY - 46 * u, cx + 16 * u, baseY, p);
        // windows (some lit)
        float[][] wins = {{-160, -80}, {-160, -40}, {-40, -140}, {40, -140}, {-40, -80}, {40, -80},
                {110, -90}, {110, -50}, {-10, -210}};
        for (float[] wd : wins) {
            boolean on = ((int) Math.abs(wd[0] + wd[1] * 3) % 3) == 0;
            if (on) {
                float fl = 0.75f + 0.25f * (float) Math.sin(t * 7 + wd[0]);
                p.setColor(Color.argb((int) (200 * fl), 210, 150, 40));
            } else {
                p.setColor(0xFF151020);
            }
            c.drawRect(cx + wd[0] * u, baseY + wd[1] * u, cx + wd[0] * u + 13 * u, baseY + wd[1] * u + 18 * u, p);
        }
        if (lit > 0.02f) {
            p.setColor(Color.argb((int) (36 * lit), 100, 110, 150));
            c.drawRect(cx - 190 * u, baseY - 260 * u, cx + 190 * u, baseY, p);
        }
    }

    private static void tri(Canvas c, float x0, float y0, float x1, float y1, float x2, float y2, Paint p) {
        Path t = new Path();
        t.moveTo(x0, y0);
        t.lineTo(x1, y1);
        t.lineTo(x2, y2);
        t.close();
        c.drawPath(t, p);
    }

    // ------------------------------------------------ screens
    private void drawStart(Canvas c) {
        drawTitle(c);
        p.setTextAlign(Paint.Align.CENTER);
        float a = 0.55f + 0.45f * (float) Math.sin(t * 2.6f);
        p.setColor(Color.argb((int) (a * 255), 220, 210, 190));
        p.setTextSize(17 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        c.drawText(Str.TAP_TO_START, w / 2, h * 0.86f, p);
        p.setTypeface(null);
    }

    private void drawTitle(Canvas c) {
        float ty = h * 0.30f + parY * 0.8f;
        // glow
        p.setShader(new RadialGradient(w / 2, ty, 150 * dp,
                new int[]{0x38B02020, 0x18801515, 0x00000000}, null, Shader.TileMode.CLAMP));
        c.drawCircle(w / 2, ty, 150 * dp, p);
        p.setShader(null);
        // flicker
        boolean flicker = rnd.nextFloat() > 0.965;
        int alpha = flicker ? 90 : 255;
        float jx = (rnd.nextFloat() - 0.5f) * 2.2f * dp * (flicker ? 3 : 1);
        float jy = (rnd.nextFloat() - 0.5f) * 1.2f * dp;
        p.setTypeface(Fonts.title(getContext()));
        p.setTextAlign(Paint.Align.CENTER);
        float ts = Math.min(58 * dp, w / 9f);
        p.setTextSize(ts);
        // RGB split
        p.setColor(Color.argb((int) (alpha * 0.5f), 255, 40, 30));
        c.drawText(Str.GAME_TITLE, w / 2 + 2.5f * dp + jx, ty + jy, p);
        p.setColor(Color.argb((int) (alpha * 0.4f), 40, 180, 255));
        c.drawText(Str.GAME_TITLE, w / 2 - 2.5f * dp + jx, ty + jy, p);
        p.setShadowLayer(16 * dp, 0, 0, 0xCC801010);
        p.setColor(Color.argb(alpha, 224, 48, 40));
        c.drawText(Str.GAME_TITLE, w / 2 + jx, ty + jy, p);
        p.setShadowLayer(0, 0, 0, 0);
        // subtitle
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(ts * 0.38f);
        p.setColor(0xFFC8BFA8);
        c.drawText(Str.TITLE_FA, w / 2, ty + 44 * dp, p);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setTextSize(ts * 0.22f);
        p.setColor(0xFF8A8578);
        c.drawText(Str.TAGLINE, w / 2, ty + 74 * dp, p);
        p.setTypeface(null);
    }

    private void drawTitleSmall(Canvas c) {
        p.setTypeface(Fonts.title(getContext()));
        p.setTextAlign(Paint.Align.CENTER);
        p.setTextSize(30 * dp);
        p.setShadowLayer(10 * dp, 0, 0, 0xAA801010);
        p.setColor(0xFFC83830);
        c.drawText(Str.GAME_TITLE, w / 2, 44 * dp, p);
        p.setShadowLayer(0, 0, 0, 0);
        p.setTypeface(null);
        // back
        p.setColor(0x88FFFFFF);
        p.setTextSize(15 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        c.drawText("‹ بازگشت", w - 24 * dp, 42 * dp, p);
        p.setTypeface(null);
    }

    private void buildMainButtons() {
        buttons.clear();
        float bw = Math.min(250 * dp, w * 0.44f), bh = 44 * dp;
        String[] labels = {Str.BTN_NEW, Str.BTN_CONTINUE, Str.BTN_SAVES, Str.BTN_SETTINGS, Str.BTN_ACH, Str.BTN_CREDITS, Str.BTN_EXIT};
        boolean cont = SaveIO.exists(act, "slot_auto.json");
        for (int i = 0; i < labels.length; i++) {
            MBtn b = new MBtn();
            b.label = labels[i];
            b.bw = bw;
            b.bh = bh;
            b.idx = i;
            b.appear = Math.max(0, screenT * 2.2f - i * 0.12f);
            b.x = w * 0.26f;
            b.y = h * 0.50f + i * (bh + 10 * dp) - (labels.length * (bh + 10 * dp)) / 2f + 30 * dp;
            b.enabled = !(i == 1 && !cont);
            final int fi = i;
            b.run = new Runnable() {
                public void run() {
                    switch (fi) {
                        case 0:
                            act.startGame(false, null);
                            break;
                        case 1:
                            act.startGame(true, "slot_auto.json");
                            break;
                        case 2:
                            go(SCR_SAVES);
                            break;
                        case 3:
                            go(SCR_SETTINGS);
                            break;
                        case 4:
                            go(SCR_ACH);
                            break;
                        case 5:
                            go(SCR_CREDITS);
                            break;
                        default:
                            go(SCR_EXIT);
                            break;
                    }
                }
            };
            buttons.add(b);
        }
    }

    private void drawMainButtons(Canvas c) {
        buildMainButtons();
        p.setTextAlign(Paint.Align.CENTER);
        for (MBtn b : buttons) {
            if (!b.enabled) continue;
            float ap = Math.min(1, b.appear);
            float slide = (1 - ap) * 60 * dp;
            float pulse = 1f + 0.012f * (float) Math.sin(t * 3 + b.idx);
            float press = b.press > 0 ? b.press * 6 * dp : 0;
            if (b.press > 0) b.press = Math.max(0, b.press - 0.08f);
            float bx = b.x + slide - press;
            float by = b.y;
            float bw = b.bw * pulse;
            // panel
            p.setColor(Color.argb(200, 18, 16, 22));
            c.drawRoundRect(bx - bw / 2, by, bx + bw / 2, by + b.bh, 12, 12, p);
            // red edge glow on hover-ish pulse
            p.setColor(Color.argb((int) (90 + 40 * Math.sin(t * 2.4 + b.idx)), 150, 30, 30));
            p.setStyle(Paint.Style.STROKE);
            p.setStrokeWidth(1.6f * dp);
            c.drawRoundRect(bx - bw / 2, by, bx + bw / 2, by + b.bh, 12, 12, p);
            p.setStyle(Paint.Style.FILL);
            // corner accents
            p.setColor(0xFFB04040);
            c.drawCircle(bx - bw / 2 + 10 * dp, by + b.bh / 2, 2.5f * dp, p);
            c.drawCircle(bx + bw / 2 - 10 * dp, by + b.bh / 2, 2.5f * dp, p);
            p.setColor(Color.argb((int) (235 * ap), 235, 226, 200));
            p.setTextSize(16 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(b.label, bx, by + b.bh / 2 + 6 * dp, p);
            p.setTypeface(null);
        }
        // version
        p.setColor(0x66AAAAAA);
        p.setTextSize(11 * dp);
        p.setTypeface(Fonts.vazir(getContext()));
        c.drawText("نسخه ۴.۲ — موتور Raycast اختصاصی", w / 2, h - 12 * dp, p);
        p.setTypeface(null);
    }

    private void drawSaves(Canvas c) {
        float bw = Math.min(w * 0.62f, 460 * dp);
        float bh = 52 * dp;
        float x0 = w / 2 - bw / 2;
        float y0 = h * 0.24f;
        String[] names = {Str.AUTOSAVE, Str.SLOT + " ۱", Str.SLOT + " ۲", Str.SLOT + " ۳"};
        p.setTextAlign(Paint.Align.CENTER);
        for (int i = 0; i < 4; i++) {
            float y = y0 + i * (bh + 12 * dp);
            p.setColor(saveHas[i] ? 0xFF201820 : 0xFF16161C);
            c.drawRoundRect(x0, y, x0 + bw, y + bh, 12, 12, p);
            p.setColor(0xFF5A2828);
            p.setStyle(Paint.Style.STROKE);
            p.setStrokeWidth(1.4f * dp);
            c.drawRoundRect(x0, y, x0 + bw, y + bh, 12, 12, p);
            p.setStyle(Paint.Style.FILL);
            p.setTextAlign(Paint.Align.RIGHT);
            p.setColor(saveHas[i] ? 0xFFE8E0C8 : 0xFF777777);
            p.setTextSize(15 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(names[i], x0 + bw - 14 * dp, y + 21 * dp, p);
            p.setTypeface(Fonts.vazir(getContext()));
            p.setTextSize(11 * dp);
            p.setColor(0xFF999988);
            c.drawText(saveHas[i] && saveMeta[i] != null ? saveMeta[i] : Str.EMPTY_SLOT, x0 + bw - 14 * dp, y + 41 * dp, p);
            p.setTypeface(null);
            if (saveHas[i]) {
                p.setTextAlign(Paint.Align.LEFT);
                p.setColor(0xFFC8A050);
                p.setTextSize(13 * dp);
                p.setTypeface(Fonts.vazirBold(getContext()));
                c.drawText("بارگذاری", x0 + 14 * dp, y + 25 * dp, p);
                if (i > 0) {
                    p.setColor(0xFFB05050);
                    p.setTextSize(12 * dp);
                    c.drawText("حذف", x0 + bw - 68 * dp, y + 25 * dp, p);
                }
                p.setTypeface(null);
            } else if (i > 0) {
                p.setTextAlign(Paint.Align.LEFT);
                p.setColor(0xFF8A8478);
                p.setTextSize(12 * dp);
                p.setTypeface(Fonts.vazir(getContext()));
                c.drawText("شروع بازی جدید", x0 + 14 * dp, y + 25 * dp, p);
                p.setTypeface(null);
            }
            p.setTextAlign(Paint.Align.CENTER);
        }
    }

    private float setY0, setSH;

    private void drawSettings(Canvas c) {
        setY0 = h * 0.30f;
        setSH = 40 * dp;
        float tx0 = 130 * dp, tx1 = w - 130 * dp;
        for (int i = 0; i < 4; i++) {
            float sy = setY0 + i * setSH;
            String name = i == 0 ? Str.SET_SENS : i == 1 ? Str.SET_VOL_MASTER : i == 2 ? Str.SET_VOL_MUSIC : Str.SET_VOL_SFX;
            float v = i == 0 ? cfg.sens / 3f : i == 1 ? cfg.volMaster : i == 2 ? cfg.volMusic : cfg.volSfx;
            String txt = i == 0 ? String.format("%.1f", cfg.sens) : (int) (v * 100) + "٪";
            // track FIRST, labels ON TOP (fix: text was buried under the track)
            p.setColor(0xFF202028);
            c.drawRoundRect(tx0, sy, tx1, sy + 22 * dp, 11, 11, p);
            p.setColor(0xFF7A2A2A);
            c.drawRoundRect(tx0, sy, tx0 + (tx1 - tx0) * v, sy + 22 * dp, 11, 11, p);
            p.setColor(0xFFE8E0C8);
            c.drawCircle(tx0 + (tx1 - tx0) * v, sy + 11 * dp, 8 * dp, p);
            // labels on top of the track, with a soft shadow for readability
            p.setShadowLayer(5 * dp, 0, 0, 0xB4000000);
            p.setTextAlign(Paint.Align.RIGHT);
            p.setColor(0xFFEDE5CF);
            p.setTextSize(14 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(name, tx1 - 14 * dp, sy + 16 * dp, p);
            p.setTextAlign(Paint.Align.LEFT);
            p.setTypeface(Fonts.vazir(getContext()));
            p.setColor(0xFFD8D0B8);
            c.drawText(txt, tx0 + 14 * dp, sy + 16 * dp, p);
            p.setShadowLayer(0, 0, 0, 0);
            p.setTypeface(null);
        }
        float qy = setY0 + 4 * setSH;
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFFCCCCCC);
        p.setTextSize(14 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        c.drawText(Str.SET_QUALITY, w - 130 * dp, qy + 18 * dp, p);
        p.setTypeface(null);
        String[] qs = {Str.QUALITY_LOW, Str.QUALITY_MED, Str.QUALITY_HIGH};
        for (int i = 0; i < 3; i++) {
            float bx = w * 0.5f + (i - 1) * 90 * dp;
            p.setColor(cfg.quality == i ? 0xFF7A2A2A : 0xFF202028);
            c.drawRoundRect(bx - 40 * dp, qy, bx + 40 * dp, qy + 26 * dp, 8, 8, p);
            // fix: center-align the quality labels (were right-aligned → off-center)
            p.setTextAlign(Paint.Align.CENTER);
            p.setColor(cfg.quality == i ? 0xFFFFE0C0 : 0xFF999999);
            p.setTextSize(12 * dp);
            p.setTypeface(Fonts.vazir(getContext()));
            c.drawText(qs[i], bx, qy + 17 * dp, p);
            p.setTypeface(null);
        }
        for (int i = 0; i < 5; i++) {
            float ty = qy + 40 * dp + i * 32 * dp;
            String name = i == 0 ? Str.SET_FOG : i == 1 ? Str.SET_GRAIN : i == 2 ? Str.SET_INVERT
                    : i == 3 ? Str.SET_VIBRATE : Str.SET_SHOWFPS;
            boolean val = i == 0 ? cfg.fog : i == 1 ? cfg.grain : i == 2 ? cfg.invertLook
                    : i == 3 ? cfg.vibrate : cfg.showFps;
            // pill on the right edge; label sits to its LEFT (no overlap)
            p.setTextAlign(Paint.Align.RIGHT);
            p.setColor(0xFFCCCCCC);
            p.setTextSize(13 * dp);
            p.setTypeface(Fonts.vazir(getContext()));
            c.drawText(name, w - 160 * dp, ty + 18 * dp, p);
            p.setTypeface(null);
            p.setColor(val ? 0xFF3F9B4F : 0xFF553333);
            c.drawRoundRect(w - 150 * dp, ty, w - 40 * dp, ty + 26 * dp, 13 * dp, 13 * dp, p);
            // fix: center ON/OFF inside the pill (was right-aligned → off-center)
            p.setTextAlign(Paint.Align.CENTER);
            p.setColor(0xFFFFFFFF);
            p.setTextSize(11 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(val ? Str.ON : Str.OFF, w - 95 * dp, ty + 17 * dp, p);
            p.setTypeface(null);
        }
    }

    private void drawAch(Canvas c) {
        boolean[] u = act.achievements();
        float cellW = Math.min(w / 4f, 150 * dp);
        int cols = Math.max(2, (int) (w / cellW));
        float cw = w / cols;
        p.setTextAlign(Paint.Align.CENTER);
        for (int i = 0; i < Str.ACH_COUNT; i++) {
            int cx = i % cols, cy = i / cols;
            float x = cw * cx + cw / 2;
            float y = h * 0.16f + cy * 74 * dp;
            if (y > h - 40 * dp) break;
            p.setColor(u[i] ? 0xFF2A2226 : 0xFF15151A);
            c.drawRoundRect(x - cw / 2 + 6 * dp, y, x + cw / 2 - 6 * dp, y + 64 * dp, 10, 10, p);
            p.setColor(u[i] ? 0xFFC8A050 : 0xFF555555);
            p.setStyle(Paint.Style.STROKE);
            p.setStrokeWidth(1.4f * dp);
            c.drawRoundRect(x - cw / 2 + 6 * dp, y, x + cw / 2 - 6 * dp, y + 64 * dp, 10, 10, p);
            p.setStyle(Paint.Style.FILL);
            p.setTextSize(17 * dp);
            c.drawText(u[i] ? "★" : "☆", x, y + 22 * dp, p);
            p.setColor(u[i] ? 0xFFE8E0C8 : 0xFF888888);
            p.setTextSize(11 * dp);
            p.setTypeface(Fonts.vazirBold(getContext()));
            c.drawText(Str.ACH_NAMES[i], x, y + 40 * dp, p);
            p.setTypeface(Fonts.vazir(getContext()));
            p.setTextSize(8.5f * dp);
            p.setColor(0xFF999988);
            String d = Str.ACH_DESCS[i];
            if (p.measureText(d) > cw - 16 * dp) d = d.substring(0, Math.max(1, (int) (d.length() * (cw - 16 * dp) / p.measureText(d)))) + "…";
            c.drawText(d, x, y + 55 * dp, p);
            p.setTypeface(null);
        }
        p.setTextAlign(Paint.Align.RIGHT);
        p.setColor(0xFF999988);
        p.setTextSize(11 * dp);
        p.setTypeface(Fonts.vazir(getContext()));
        int cnt = 0;
        for (boolean b : u) if (b) cnt++;
        c.drawText(cnt + "/" + Str.ACH_COUNT, w - 16 * dp, h * 0.13f, p);
        p.setTypeface(null);
    }

    private void drawCredits(Canvas c) {
        creditScroll += 0.35f;
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazir(getContext()));
        String[] lines = Str.CREDITS.split("\n");
        float total = lines.length * 26 * dp + h;
        float y = h + 40 * dp - ((creditScroll * dp) % total);
        for (int pass = 0; pass < 2; pass++) {
            float yy = y + pass * total;
            for (String ln : lines) {
                if (yy > -20 && yy < h + 20) {
                    boolean title = ln.startsWith("HOLLOW") || ln.contains("—");
                    p.setTextSize(title ? 18 * dp : 13 * dp);
                    p.setColor(title ? 0xFFC8A050 : 0xFFC0BAAC);
                    c.drawText(ln, w / 2, yy, p);
                }
                yy += 26 * dp;
            }
        }
        p.setTextSize(12 * dp);
        p.setColor(0xFF777777);
        c.drawText("لمس برای بازگشت", w / 2, h - 14 * dp, p);
        p.setTypeface(null);
    }

    private void drawExit(Canvas c) {
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(20 * dp);
        p.setColor(0xFFE8E0C8);
        c.drawText(Str.EXIT_CONFIRM, w / 2, h * 0.42f, p);
        p.setTypeface(null);
        float bw = 160 * dp, bh = 46 * dp;
        p.setColor(0xFF3A2020);
        c.drawRoundRect(w / 2 - bw - 12 * dp, h * 0.6f, w / 2 - 12 * dp, h * 0.6f + bh, 12, 12, p);
        p.setColor(0xFF20242A);
        c.drawRoundRect(w / 2 + 12 * dp, h * 0.6f, w / 2 + bw + 12 * dp, h * 0.6f + bh, 12, 12, p);
        p.setColor(0xFFE8E0C8);
        p.setTextSize(16 * dp);
        p.setTypeface(Fonts.vazirBold(getContext()));
        c.drawText(Str.YES, w / 2 - bw / 2, h * 0.6f + 29 * dp, p);
        c.drawText(Str.NO, w / 2 + bw / 2, h * 0.6f + 29 * dp, p);
        p.setTypeface(null);
    }

    private void drawToast(Canvas c) {
        if (toastT <= 0) return;
        p.setTextAlign(Paint.Align.CENTER);
        p.setTextSize(13 * dp);
        p.setTypeface(Fonts.vazir(getContext()));
        p.setColor((((int) (200 * Math.min(1, toastT))) << 24) | 0xE0D8C0);
        c.drawText(toastMsg, w / 2, h * 0.92f, p);
        p.setTypeface(null);
    }

    public void toast(String m) {
        toastMsg = m;
        toastT = 2.6f;
    }

    public void release() {
        Choreographer.getInstance().removeFrameCallback(this);
        try {
            if (sm != null && sensorListener != null) sm.unregisterListener(sensorListener);
        } catch (Throwable ignored) {
        }
    }
}
