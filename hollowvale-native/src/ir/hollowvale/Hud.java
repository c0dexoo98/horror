package ir.hollowvale;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.Typeface;

import ir.hollowvale.engine.TextureGen;
import ir.hollowvale.game.Quests;
import ir.hollowvale.game.World;

/** HUD, minimap, task list with green checks, and all menu screens. */
public final class Hud {
    private final Game game;
    private int sw, sh;
    private float dp;

    private final Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint txt = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint txtB = new Paint(Paint.ANTI_ALIAS_FLAG);

    // menu buttons
    public final RectF mbNew = new RectF(), mbHow = new RectF(), mbSound = new RectF();
    public final RectF mbBack = new RectF();
    public final RectF dRetry = new RectF(), dMenu = new RectF();
    public final RectF wAgain = new RectF(), wMenu = new RectF();
    public final RectF paResume = new RectF(), paMenu = new RectF(), paSound = new RectF();

    public Hud(Game game) { this.game = game; }

    public void layout(int w, int h) {
        sw = w; sh = h;
        dp = Math.min(w, h) / 400f;
        float bw = Math.min(340 * dp, w * 0.6f), bh = 46 * dp, cx = w / 2f;
        menuRect(mbNew, cx, h * 0.52f, bw, bh);
        menuRect(mbHow, cx, h * 0.52f + bh * 1.45f, bw, bh);
        menuRect(mbSound, cx, h * 0.52f + bh * 2.9f, bw, bh);
        menuRect(mbBack, cx, h * 0.82f, bw, bh);
        menuRect(dRetry, cx, h * 0.62f, bw, bh);
        menuRect(dMenu, cx, h * 0.62f + bh * 1.45f, bw, bh);
        menuRect(wAgain, cx, h * 0.62f, bw, bh);
        menuRect(wMenu, cx, h * 0.62f + bh * 1.45f, bw, bh);
        menuRect(paResume, cx, h * 0.40f, bw, bh);
        menuRect(paMenu, cx, h * 0.40f + bh * 1.45f, bw, bh);
        menuRect(paSound, cx, h * 0.40f + bh * 2.9f, bw, bh);
        txtB.setTypeface(Typeface.create(Typeface.SANS_SERIF, Typeface.BOLD));
        txt.setTypeface(Typeface.SANS_SERIF);
    }

    private void menuRect(RectF r, float cx, float cy, float bw, float bh) {
        r.set(cx - bw / 2, cy - bh / 2, cx + bw / 2, cy + bh / 2);
    }

    private boolean in(RectF r, float x, float y) { return r.contains(x, y); }

    public void handleTap(float x, float y) {
        Game g = game;
        switch (g.state) {
            case MENU:
                if (in(mbNew, x, y)) g.newGame();
                else if (in(mbHow, x, y)) g.state = Game.State.HOWTO;
                else if (in(mbSound, x, y)) g.soundOn = !g.soundOn;
                break;
            case HOWTO:
                if (in(mbBack, x, y)) g.state = Game.State.MENU;
                break;
            case DEAD:
                if (g.jumpT > 0) break;
                if (in(dRetry, x, y)) g.newGame();
                else if (in(dMenu, x, y)) g.state = Game.State.MENU;
                break;
            case WIN:
                if (in(wAgain, x, y)) g.newGame();
                else if (in(wMenu, x, y)) g.state = Game.State.MENU;
                break;
            case PAUSED:
                if (in(paResume, x, y)) g.togglePause();
                else if (in(paMenu, x, y)) g.state = Game.State.MENU;
                else if (in(paSound, x, y)) g.soundOn = !g.soundOn;
                break;
            case PLAYING:
                if (g.tasksOpen) g.tasksOpen = false;
                break;
        }
    }

    public void draw(Canvas c, Game g) {
        switch (g.state) {
            case MENU: drawMenu(c, g); break;
            case HOWTO: drawHowto(c, g); break;
            case PLAYING: drawGame(c, g); break;
            case PAUSED: drawGame(c, g); drawPause(c, g); break;
            case DEAD: drawGame(c, g); drawDead(c, g); break;
            case WIN: drawGame(c, g); drawWin(c, g); break;
        }
    }

    // ---------------- in-game HUD ----------------
    private void drawGame(Canvas c, Game g) {
        World w = g.world;
        if (w == null) return;
        float pad = 14 * dp;

        // task overlay
        if (g.tasksOpen) { drawTasks(c, g); return; }

        // battery bar
        float bw = 150 * dp, bh = 9 * dp;
        float bx = pad, by = pad;
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.argb(110, 10, 10, 14));
        c.drawRoundRect(new RectF(bx - 6 * dp, by - 6 * dp, bx + bw + 6 * dp, by + bh * 3.4f + 6 * dp), 6 * dp, 6 * dp, p);
        p.setColor(Color.argb(70, 255, 255, 255));
        c.drawRoundRect(new RectF(bx, by, bx + bw, by + bh), 2, 2, p);
        boolean low = w.player.battery < 22;
        int batCol = low ? Color.rgb(220, 60, 40) : Color.rgb(255, 190, 70);
        if (!low || (System.nanoTime() >> 26) % 2 == 0) {
            p.setColor(batCol);
            c.drawRoundRect(new RectF(bx, by, bx + bw * (float) w.player.battery / 100f, by + bh), 2, 2, p);
        }
        txt.setTextSize(9 * dp);
        txt.setColor(Color.argb(200, 230, 225, 210));
        c.drawText("BATTERY " + (int) w.player.battery + "%", bx + 4 * dp, by + bh - 1.5f * dp, txt);

        // health
        float hy = by + bh * 1.4f;
        p.setColor(Color.argb(70, 255, 255, 255));
        c.drawRoundRect(new RectF(bx, hy, bx + bw, hy + bh), 2, 2, p);
        p.setColor(Color.rgb(190, 40, 40));
        c.drawRoundRect(new RectF(bx, hy, bx + bw * (float) w.player.health / 100f, hy + bh), 2, 2, p);

        // stamina
        float sy = hy + bh * 1.4f;
        p.setColor(Color.argb(50, 255, 255, 255));
        c.drawRoundRect(new RectF(bx, sy, bx + bw, sy + bh * 0.6f), 2, 2, p);
        p.setColor(Color.rgb(150, 170, 200));
        c.drawRoundRect(new RectF(bx, sy, bx + bw * (float) w.player.stamina / 100f, sy + bh * 0.6f), 2, 2, p);

        // objective + compass arrow
        Quests q = w.quests;
        int cur = q.current();
        txtB.setTextSize(13 * dp);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setColor(Color.argb(215, 235, 230, 215));
        c.drawText(q.title(cur), sw / 2f, pad + 10 * dp, txtB);
        double[] tgt = w.objectiveTarget();
        if (tgt != null) {
            double ang = Math.atan2(tgt[1] - w.player.y, tgt[0] - w.player.x) - w.player.ang;
            float ax = sw / 2f, ay = pad + 22 * dp;
            c.save();
            c.rotate((float) Math.toDegrees(ang), ax, ay);
            p.setColor(Color.argb(200, 255, 200, 80));
            c.drawCircle(ax, ay, 9 * dp, p);
            p.setColor(Color.argb(230, 30, 24, 20));
            drawArrow(c, ax, ay);
            c.restore();
        }

        // minimap
        if (g.mapOn) drawMinimap(c, g, tgt);

        // crosshair
        p.setColor(Color.argb(80, 255, 255, 255));
        c.drawCircle(sw / 2f, sh / 2f, 2.2f * dp, p);

        // prompt
        if (w.prompt != null && !w.prompt.isEmpty()) {
            txtB.setTextAlign(Paint.Align.CENTER);
            txtB.setTextSize(14 * dp);
            float tw = txtB.measureText(w.prompt);
            RectF pr = new RectF(sw / 2f - tw / 2 - 16 * dp, sh * 0.62f - 16 * dp,
                    sw / 2f + tw / 2 + 16 * dp, sh * 0.62f + 14 * dp);
            p.setColor(Color.argb(120, 8, 8, 12));
            c.drawRoundRect(pr, 8 * dp, 8 * dp, p);
            txtB.setColor(Color.argb(235, 240, 235, 220));
            c.drawText(w.prompt, sw / 2f, sh * 0.62f + 3 * dp, txtB);
        }

        // messages
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setTextSize(12.5f * dp);
        int i = 0;
        for (World.Msg m : w.messages) {
            int a = (int) Math.min(235, m.t * 130);
            txt.setColor(Color.argb(a, 225, 220, 205));
            c.drawText(m.text, sw / 2f, sh * 0.70f + i * 17 * dp, txt);
            i++;
        }

        // early hint
        if (w.time < 14 && !q.done[0]) {
            int a = (int) (200 * Math.min(1, (14 - w.time) / 3));
            txt.setColor(Color.argb(a, 200, 200, 190));
            txt.setTextSize(11 * dp);
            c.drawText("Left side: drag to move  ·  Right side: drag to look", sw / 2f, sh - 12 * dp, txt);
        }
    }

    private void drawArrow(Canvas c, float ax, float ay) {
        android.graphics.Path pt = new android.graphics.Path();
        pt.moveTo(ax, ay - 8 * dp);
        pt.lineTo(ax - 6 * dp, ay + 6 * dp);
        pt.lineTo(ax + 6 * dp, ay + 6 * dp);
        pt.close();
        c.drawPath(pt, p);
    }

    private void drawMinimap(Canvas c, Game g, double[] tgt) {
        World w = g.world;
        float size = 120 * dp;
        float x0 = sw - size - 12 * dp, y0 = 12 * dp;
        float cs = size / Math.max(ir.hollowvale.game.MapData.W, ir.hollowvale.game.MapData.H);
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.argb(140, 6, 6, 10));
        c.drawRoundRect(new RectF(x0 - 4, y0 - 4, x0 + size + 4, y0 + size * 0.8f + 4), 4, 4, p);
        // cached tiles bitmap — rebuilt at most ~3x/s (was ~1500 drawRects per frame)
        buildMinimapCache(w, size, cs);
        if (mmCache != null) c.drawBitmap(mmCache, x0, y0, pScale);
        if (tgt != null) {
            p.setColor(Color.rgb(255, 200, 80));
            c.drawCircle(x0 + (float) tgt[0] * cs, y0 + (float) tgt[1] * cs, 3 * dp, p);
        }
        p.setColor(Color.rgb(240, 240, 250));
        c.drawCircle(x0 + (float) w.player.x * cs, y0 + (float) w.player.y * cs, 2.6f * dp, p);
        p.setColor(Color.rgb(240, 240, 250));
        p.setStrokeWidth(1.6f);
        c.drawLine(x0 + (float) w.player.x * cs, y0 + (float) w.player.y * cs,
                x0 + (float) (w.player.x + Math.cos(w.player.ang) * 2.2) * cs,
                y0 + (float) (w.player.y + Math.sin(w.player.ang) * 2.2) * cs, p);
    }

    private android.graphics.Bitmap mmCache;
    private long mmLastBuild;
    private final Paint pScale = new Paint(Paint.FILTER_BITMAP_FLAG | Paint.ANTI_ALIAS_FLAG);

    private void buildMinimapCache(World w, float size, float cs) {
        long now = System.nanoTime();
        if (mmCache != null && now - mmLastBuild < 320_000_000L) return;
        mmLastBuild = now;
        int mw = (int) (size + 2), mh = (int) (size * 0.8f + 2);
        if (mmCache == null || mmCache.getWidth() != mw || mmCache.getHeight() != mh) {
            mmCache = android.graphics.Bitmap.createBitmap(mw, mh, android.graphics.Bitmap.Config.ARGB_8888);
        }
        Canvas mc = new Canvas(mmCache);
        mc.drawColor(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.CLEAR);
        int mw2 = ir.hollowvale.game.MapData.W, mh2 = ir.hollowvale.game.MapData.H;
        for (int ty = 0; ty < mh2; ty++) {
            for (int tx = 0; tx < mw2; tx++) {
                int idx = ty * mw2 + tx;
                if (!w.map.explored[idx]) continue;
                int t = w.map.tile(tx, ty);
                if (t == 0) {
                    p.setColor(Color.argb(150, 60, 58, 54));
                } else if (t == 4 || t == 5) {
                    p.setColor(Color.argb(190, 120, 90, 50));
                } else if (t == 6) {
                    p.setColor(Color.argb(200, 200, 170, 60));
                } else if (t == 8) {
                    p.setColor(Color.argb(220, 180, 60, 60));
                } else {
                    p.setColor(Color.argb(190, 130, 130, 140));
                }
                mc.drawRect(tx * cs, ty * cs, (tx + 1) * cs, (ty + 1) * cs, p);
            }
        }
    }

    private void drawTasks(Canvas c, Game g) {
        World w = g.world;
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.argb(200, 5, 5, 9));
        c.drawRect(0, 0, sw, sh, p);
        float pw = Math.min(430 * dp, sw - 40 * dp);
        float ph = 46 * dp + Quests.TITLES.length * 30 * dp;
        RectF r = new RectF(sw / 2f - pw / 2, sh / 2f - ph / 2, sw / 2f + pw / 2, sh / 2f + ph / 2);
        p.setColor(Color.argb(235, 12, 12, 18));
        c.drawRoundRect(r, 10 * dp, 10 * dp, p);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(1.6f);
        p.setColor(Color.argb(90, 160, 150, 130));
        c.drawRoundRect(r, 10 * dp, 10 * dp, p);
        p.setStyle(Paint.Style.FILL);

        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(17 * dp);
        txtB.setColor(Color.rgb(235, 225, 205));
        c.drawText("TASKS", sw / 2f, r.top + 30 * dp, txtB);
        txt.setTextAlign(Paint.Align.LEFT);
        txt.setTextSize(13 * dp);
        txtB.setTextAlign(Paint.Align.LEFT);
        txtB.setTextSize(13 * dp);
        float y = r.top + 56 * dp;
        for (int i = 0; i < Quests.TITLES.length; i++) {
            boolean done = w.quests.done[i];
            boolean cur = i == w.quests.current();
            if (done) {
                txtB.setColor(Color.rgb(90, 220, 110)); // green check
                c.drawText("✓", r.left + 16 * dp, y, txtB);
                txt.setColor(Color.argb(150, 140, 150, 140));
                txt.setStrikeThruText(true);
            } else {
                txtB.setColor(cur ? Color.rgb(255, 200, 80) : Color.argb(120, 150, 150, 160));
                c.drawText("•", r.left + 16 * dp, y, txtB);
                txt.setColor(cur ? Color.argb(240, 240, 230, 210) : Color.argb(190, 200, 200, 195));
                txt.setStrikeThruText(false);
            }
            c.drawText(w.quests.title(i), r.left + 38 * dp, y, txt);
            y += 30 * dp;
        }
        txt.setStrikeThruText(false);
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setColor(Color.argb(130, 180, 180, 175));
        txt.setTextSize(10.5f * dp);
        c.drawText("tap anywhere to close", sw / 2f, r.bottom - 12 * dp, txt);
    }

    // ---------------- menu screens ----------------
    private void bg(Canvas c) {
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.rgb(5, 5, 9));
        c.drawRect(0, 0, sw, sh, p);
        Paint g1 = new Paint();
        g1.setShader(new android.graphics.RadialGradient(sw * 0.5f, sh * 0.42f, sw * 0.55f,
                new int[]{0xFF16141d, 0x00050509}, new float[]{0f, 1f}, android.graphics.Shader.TileMode.CLAMP));
        c.drawRect(0, 0, sw, sh, g1);
    }

    private void button(Canvas c, RectF r, String label, boolean accent) {
        p.setStyle(Paint.Style.FILL);
        p.setColor(accent ? Color.argb(200, 60, 22, 24) : Color.argb(150, 18, 18, 26));
        c.drawRoundRect(r, 8 * dp, 8 * dp, p);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(1.6f);
        p.setColor(accent ? Color.argb(220, 190, 80, 70) : Color.argb(120, 130, 125, 115));
        c.drawRoundRect(r, 8 * dp, 8 * dp, p);
        p.setStyle(Paint.Style.FILL);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(15 * dp);
        txtB.setColor(accent ? Color.rgb(240, 220, 205) : Color.rgb(205, 200, 190));
        c.drawText(label, r.centerX(), r.centerY() + 5 * dp, txtB);
    }

    private void drawMenu(Canvas c, Game g) {
        bg(c);
        float flick = 0.82f + 0.18f * (float) Math.abs(Math.sin(System.nanoTime() * 1.7e-9));
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(44 * dp);
        txtB.setLetterSpacing(0.14f);
        txtB.setColor(Color.argb((int) (245 * flick), 190, 180, 165));
        c.drawText("HOLLOW VALE", sw / 2f, sh * 0.28f, txtB);
        txtB.setLetterSpacing(0.05f);
        txtB.setTextSize(12 * dp);
        txtB.setColor(Color.argb(170, 170, 90, 80));
        c.drawText("S H E   I S   L I S T E N I N G", sw / 2f, sh * 0.28f + 26 * dp, txtB);
        button(c, mbNew, "NEW GAME", true);
        button(c, mbHow, "HOW TO PLAY", false);
        button(c, mbSound, "SOUND: " + (g.soundOn ? "ON" : "OFF"), false);
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setTextSize(9.5f * dp);
        txt.setColor(Color.argb(110, 150, 150, 145));
        c.drawText("v2.1 native · custom Java raycast engine · bug-fix build", sw / 2f, sh - 10 * dp, txt);
    }

    private void drawHowto(Canvas c, Game g) {
        bg(c);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(24 * dp);
        txtB.setColor(Color.rgb(220, 210, 195));
        c.drawText("HOW TO PLAY", sw / 2f, sh * 0.16f, txtB);
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setTextSize(12.5f * dp);
        txt.setColor(Color.argb(210, 200, 195, 185));
        String[] lines = {
                "Drag the LEFT side to move. Push to the edge to RUN — running is loud.",
                "Drag the RIGHT side to look around.",
                "USE picks things up, opens doors and works the altar.",
                "SNEAK moves silently. She cannot hear you — but she can still see you.",
                "LIGHT eats battery. In darkness, fear grows. Fear makes your heart loud.",
                "",
                "Read the note on the road. Find the rusted key among the dead.",
                "Unlock the church. Gather five wax talismans.",
                "Hold USE at the altar to banish Her — then run for the south gate.",
                "",
                "If she catches you three times, the night is over.",
                "Wooden doors creak. She opens them too."
        };
        float y = sh * 0.26f;
        for (String s : lines) { c.drawText(s, sw / 2f, y, txt); y += 19 * dp; }
        button(c, mbBack, "BACK", false);
    }

    private void drawDead(Canvas c, Game g) {
        if (g.jumpT > 0 && g.renderer != null && g.renderer.face() != null) {
            float s = Math.max(sw / 256f, sh / 256f) * (1.1f + 0.25f * (1.5f - (float) g.jumpT));
            float fx = sw / 2f - 128 * s, fy = sh / 2f - 128 * s;
            c.drawBitmap(g.renderer.face(), null, new RectF(fx, fy, fx + 256 * s, fy + 256 * s), null);
            p.setColor(Color.argb((int) (90 * g.jumpT), 120, 0, 0));
            c.drawRect(0, 0, sw, sh, p);
            return;
        }
        p.setColor(Color.argb(225, 8, 2, 4));
        c.drawRect(0, 0, sw, sh, p);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(40 * dp);
        txtB.setColor(Color.rgb(150, 30, 26));
        c.drawText("SHE FOUND YOU", sw / 2f, sh * 0.36f, txtB);
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setTextSize(13 * dp);
        txt.setColor(Color.argb(180, 190, 180, 170));
        c.drawText("The village keeps its secrets. " + g.playTimeString(), sw / 2f, sh * 0.36f + 26 * dp, txt);
        button(c, dRetry, "TRY AGAIN", true);
        button(c, dMenu, "MAIN MENU", false);
    }

    private void drawWin(Canvas c, Game g) {
        p.setColor(Color.argb(230, 4, 6, 10));
        c.drawRect(0, 0, sw, sh, p);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(38 * dp);
        txtB.setColor(Color.rgb(120, 200, 130));
        c.drawText("YOU ESCAPED", sw / 2f, sh * 0.34f, txtB);
        txt.setTextAlign(Paint.Align.CENTER);
        txt.setTextSize(13 * dp);
        txt.setColor(Color.argb(190, 200, 200, 190));
        c.drawText("Dawn finds you alive. Time: " + g.playTimeString()
                        + "  ·  Talismans: " + (g.world != null ? g.world.talismans : 0) + "/5",
                sw / 2f, sh * 0.34f + 26 * dp, txt);
        button(c, wAgain, "PLAY AGAIN", true);
        button(c, wMenu, "MAIN MENU", false);
    }

    private void drawPause(Canvas c, Game g) {
        p.setColor(Color.argb(190, 3, 3, 6));
        c.drawRect(0, 0, sw, sh, p);
        txtB.setTextAlign(Paint.Align.CENTER);
        txtB.setTextSize(30 * dp);
        txtB.setColor(Color.rgb(220, 212, 198));
        c.drawText("PAUSED", sw / 2f, sh * 0.22f, txtB);
        button(c, paResume, "RESUME", true);
        button(c, paMenu, "MAIN MENU", false);
        button(c, paSound, "SOUND: " + (g.soundOn ? "ON" : "OFF"), false);
    }
}
