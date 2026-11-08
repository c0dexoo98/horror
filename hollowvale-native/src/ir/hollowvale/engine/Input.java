package ir.hollowvale.engine;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.view.MotionEvent;

import ir.hollowvale.game.Ctrl;
import ir.hollowvale.Game;

/** Touch controls: virtual joystick, look-drag, icon buttons. */
public final class Input {
    private final Ctrl ctrl = new Ctrl();
    private final Game game;

    private int movePid = -1, lookPid = -1, usePid = -1;
    private float jBaseX, jBaseY, jKnobX, jKnobY;
    private float lastLookX;
    private float jR = 90;

    private final RectF bLight = new RectF(), bUse = new RectF(), bSneak = new RectF(),
            bMap = new RectF(), bTasks = new RectF(), bPause = new RectF();
    private float rBig, rSmall;
    private int sw, sh;

    private final Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint pTxt = new Paint(Paint.ANTI_ALIAS_FLAG);

    public Input(Game game) { this.game = game; }

    public void layout(int w, int h) {
        sw = w; sh = h;
        jR = Math.max(60, Math.min(115, Math.min(w, h) * 0.10f));
        rBig = Math.max(46, Math.min(76, h * 0.082f));
        rSmall = rBig * 0.72f;
        setCircle(bLight, w - 2.5f * rBig, h - 1.7f * rBig, rBig);
        setCircle(bUse, w - 4.9f * rBig, h - 1.6f * rBig, rBig);
        setCircle(bSneak, w - 3.7f * rBig, h - 3.6f * rBig, rSmall);
        setCircle(bMap, w - 1.4f * rBig, h - 3.9f * rBig, rSmall);
        setCircle(bTasks, w - 1.4f * rBig, h - 5.9f * rBig, rSmall);
        // PAUSE: small button in the top-left, right of the battery/health bars
        float d = Math.min(w, h) / 400f;
        float pr = Math.max(17, 16 * d);
        setCircle(bPause, 14 * d + 150 * d + 20 * d, 14 * d + pr, pr);
        pTxt.setTextAlign(Paint.Align.CENTER);
        pTxt.setFakeBoldText(true);
    }

    private void setCircle(RectF r, float cx, float cy, float rad) {
        r.set(cx - rad, cy - rad, cx + rad, cy + rad);
    }

    private boolean hit(RectF r, float x, float y) {
        float cx = r.centerX(), cy = r.centerY();
        float rad = r.width() / 2f + 8;
        return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= rad * rad;
    }

    public Ctrl getCtrl() {
        ctrl.fwd = 0; ctrl.strafe = 0;
        if (movePid >= 0) {
            float dx = (jKnobX - jBaseX) / jR, dy = (jKnobY - jBaseY) / jR;
            float len = (float) Math.hypot(dx, dy);
            if (len > 1) { dx /= len; dy /= len; }
            ctrl.strafe = Math.max(-1, Math.min(1, dx));
            ctrl.fwd = Math.max(-1, Math.min(1, -dy));
            ctrl.run = Math.hypot(ctrl.fwd, ctrl.strafe) > 0.93;
        } else {
            ctrl.run = false; // was latching true after joystick release
        }
        return ctrl;
    }

    public void afterFrame() {
        ctrl.lookDX = 0;
    }

    private void press(float x, float y, int pid) {
        if (hit(bPause, x, y)) {
            game.tasksOpen = false;
            ctrl.useHeld = false;
            game.togglePause();
            return;
        }
        if (hit(bUse, x, y)) { ctrl.useEdge = true; ctrl.useHeld = true; usePid = pid; return; }
        if (hit(bLight, x, y)) { ctrl.lightEdge = true; return; }
        if (hit(bSneak, x, y)) { ctrl.sneak = !ctrl.sneak; return; }
        if (hit(bMap, x, y)) { ctrl.mapEdge = true; return; }
        if (hit(bTasks, x, y)) { ctrl.tasksEdge = true; return; }
        if (x < sw * 0.42f && movePid < 0) {
            movePid = pid;
            jBaseX = jKnobX = x; jBaseY = jKnobY = y;
        } else if (lookPid < 0) {
            lookPid = pid;
            lastLookX = x;
        }
    }

    public void onTouch(MotionEvent e, Game g) {
        switch (e.getActionMasked()) {
            case MotionEvent.ACTION_DOWN: {
                if (g.state != Game.State.PLAYING) { g.onTap(e.getX(), e.getY()); return; }
                if (g.tasksOpen) { g.tasksOpen = false; ctrl.useEdge = false; ctrl.useHeld = false; return; } // any tap closes the task list
                press(e.getX(), e.getY(), e.getPointerId(0));
                break;
            }
            case MotionEvent.ACTION_POINTER_DOWN: {
                if (g.state != Game.State.PLAYING) { g.onTap(e.getX(e.getActionIndex()), e.getY(e.getActionIndex())); return; }
                if (g.tasksOpen) { g.tasksOpen = false; return; }
                int i = e.getActionIndex();
                press(e.getX(i), e.getY(i), e.getPointerId(i));
                break;
            }
            case MotionEvent.ACTION_MOVE: {
                for (int i = 0; i < e.getPointerCount(); i++) {
                    int pid = e.getPointerId(i);
                    float x = e.getX(i), y = e.getY(i);
                    if (pid == movePid) {
                        float dx = x - jBaseX, dy = y - jBaseY;
                        float len = (float) Math.hypot(dx, dy);
                        if (len > jR) { dx = dx / len * jR; dy = dy / len * jR; }
                        jKnobX = jBaseX + dx; jKnobY = jBaseY + dy;
                    } else if (pid == lookPid) {
                        ctrl.lookDX += (x - lastLookX) * 0.0042f;
                        lastLookX = x;
                    } else if (pid == usePid && !hit(bUse, x, y)) {
                        usePid = -1; ctrl.useHeld = false;
                    }
                }
                break;
            }
            case MotionEvent.ACTION_POINTER_UP:
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL: {
                int i = e.getActionIndex();
                if (i < 0 || i >= e.getPointerCount()) i = 0;
                int pid = e.getPointerId(i);
                if (pid == movePid) { movePid = -1; }
                if (pid == lookPid) lookPid = -1;
                if (pid == usePid) { usePid = -1; ctrl.useHeld = false; }
                if (e.getActionMasked() == MotionEvent.ACTION_CANCEL) {
                    movePid = -1; lookPid = -1; usePid = -1; ctrl.useHeld = false;
                }
                break;
            }
        }
    }

    public void draw(Canvas c, Game g) {
        if (g.state != Game.State.PLAYING) return;
        // joystick
        float baseA = movePid >= 0 ? 46 : 22;
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(3);
        p.setColor(Color.argb((int) baseA, 210, 210, 220));
        float bx = movePid >= 0 ? jBaseX : sw * 0.16f;
        float by = movePid >= 0 ? jBaseY : sh - rBig * 1.6f;
        c.drawCircle(bx, by, jR, p);
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.argb(movePid >= 0 ? 90 : 40, 220, 220, 230));
        float kx = movePid >= 0 ? jKnobX : bx, ky = movePid >= 0 ? jKnobY : by;
        c.drawCircle(kx, ky, jR * 0.36f, p);

        // buttons
        boolean beam = g.world != null && g.world.player.lightOn && g.world.player.battery > 0;
        boolean lowBat = g.world != null && g.world.player.battery < 22;
        boolean prompt = g.world != null && g.world.prompt != null && !g.world.prompt.isEmpty();
        drawBtn(c, bLight, beam ? Color.argb(120, 170, 130, 40) : Color.argb(70, 30, 30, 36),
                beam ? 0xFFFFC860 : 0xFF8A8A96);
        if (lowBat && beam) { // blink ring when battery low
            p.setStyle(Paint.Style.STROKE);
            p.setStrokeWidth(4);
            p.setColor(Color.argb((int) (120 + 100 * Math.sin(System.nanoTime() * 6e-9)), 255, 70, 50));
            c.drawCircle(bLight.centerX(), bLight.centerY(), rBig - 4, p);
        }
        flashlightIcon(c, bLight.centerX(), bLight.centerY(), rBig * 0.62f, beam ? 0xFFFFC860 : 0xFFB9B9C4);
        drawBtn(c, bUse, prompt ? Color.argb(120, 60, 110, 60) : Color.argb(70, 30, 30, 36),
                prompt ? 0xFF9CE89C : 0xFF8A8A96);
        pTxt.setColor(prompt ? 0xFF9CE89C : 0xFFB9B9C4);
        pTxt.setTextSize(rBig * 0.42f);
        c.drawText("USE", bUse.centerX(), bUse.centerY() + pTxt.getTextSize() * 0.35f, pTxt);
        drawBtn(c, bSneak, ctrl.sneak ? Color.argb(120, 40, 70, 130) : Color.argb(60, 26, 26, 32),
                ctrl.sneak ? 0xFF8FC2FF : 0xFF9A9AA6);
        pTxt.setColor(ctrl.sneak ? 0xFF8FC2FF : 0xFF9A9AA6);
        pTxt.setTextSize(rSmall * 0.34f);
        c.drawText("SNEAK", bSneak.centerX(), bSneak.centerY() + pTxt.getTextSize() * 0.35f, pTxt);
        drawBtn(c, bMap, g.mapOn ? Color.argb(110, 70, 60, 30) : Color.argb(60, 26, 26, 32),
                g.mapOn ? 0xFFFFD97A : 0xFF9A9AA6);
        pTxt.setColor(g.mapOn ? 0xFFFFD97A : 0xFF9A9AA6);
        pTxt.setTextSize(rSmall * 0.34f);
        c.drawText("MAP", bMap.centerX(), bMap.centerY() + pTxt.getTextSize() * 0.35f, pTxt);
        drawBtn(c, bTasks, Color.argb(60, 26, 26, 32), 0xFF9A9AA6);
        pTxt.setColor(0xFF9A9AA6);
        pTxt.setTextSize(rSmall * 0.30f);
        c.drawText("TASKS", bTasks.centerX(), bTasks.centerY() + pTxt.getTextSize() * 0.35f, pTxt);

        // pause button (two bars)
        drawBtn(c, bPause, Color.argb(70, 30, 30, 36), 0xFF9A9AA6);
        p.setColor(0xFFB9B9C4);
        float px = bPause.centerX(), py = bPause.centerY();
        float gap = bPause.width() * 0.10f, bw2 = Math.max(2.5f, bPause.width() * 0.11f);
        c.drawRoundRect(new RectF(px - gap - bw2, py - bPause.height() * 0.22f, px - gap, py + bPause.height() * 0.22f), 2, 2, p);
        c.drawRoundRect(new RectF(px + gap, py - bPause.height() * 0.22f, px + gap + bw2, py + bPause.height() * 0.22f), 2, 2, p);
    }

    private void drawBtn(Canvas c, RectF r, int fill, int stroke) {
        float cx = r.centerX(), cy = r.centerY(), rad = r.width() / 2f;
        p.setStyle(Paint.Style.FILL);
        p.setColor(fill);
        c.drawCircle(cx, cy, rad, p);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(2.5f);
        p.setColor(stroke);
        c.drawCircle(cx, cy, rad, p);
        p.setStyle(Paint.Style.FILL);
    }

    private void flashlightIcon(Canvas c, float cx, float cy, float s, int color) {
        p.setColor(color);
        c.save();
        c.translate(cx, cy);
        c.rotate(-35);
        c.drawRoundRect(new RectF(-s * 0.16f, -s * 0.1f, s * 0.5f, s * 0.1f), 3, 3, p);
        c.drawRoundRect(new RectF(-s * 0.42f, -s * 0.24f, -s * 0.16f, s * 0.24f), 3, 3, p);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(2.4f);
        c.drawLine(-s * 0.5f, -s * 0.34f, -s * 0.68f, -s * 0.5f, p);
        c.drawLine(-s * 0.52f, 0, -s * 0.74f, 0, p);
        c.drawLine(-s * 0.5f, s * 0.34f, -s * 0.68f, s * 0.5f, p);
        p.setStyle(Paint.Style.FILL);
        c.restore();
    }
}
