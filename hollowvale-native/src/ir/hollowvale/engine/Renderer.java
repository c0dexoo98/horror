package ir.hollowvale.engine;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import ir.hollowvale.game.Items;
import ir.hollowvale.game.Map;
import ir.hollowvale.game.World;

/** Software raycaster: walls, billboard sprites, flashlight mask, post FX. */
public final class Renderer {
    private Bitmap buf, lightBmp, grain;
    private Canvas bc, lc;
    private float[] zbuf;
    public int BW, BH;
    private float scale = 0.5f;
    private int scrW, scrH;

    private Bitmap[] wallTex;
    private Bitmap monsterTex, eyesTex, graveTex, battTex, keyTex, talisTex, noteTex;

    private final Paint pWall = new Paint(), pShade = new Paint(), pSprite = new Paint(),
            pFx = new Paint(), pScale = new Paint(), pGrain = new Paint();
    private Paint pPool1, pPool2, pPunch;
    private Paint pVig, pFear;
    private final Rect srcR = new Rect();
    private final RectF dstF = new RectF();
    private final Map.Ray ray = new Map.Ray();
    private final Random rng = new Random();

    // deferred (re)initialization: setScale() only records a request; the actual
    // bitmap (re)allocation happens at the start of render(), on the game thread.
    // This removes the UI-thread/game-thread race that caused black frames.
    private volatile boolean needsInit = true;
    private float pendScale = 0.5f;
    private int pendW = 960, pendH = 540;

    // sprite scratch
    private static final int MAXS = 96;
    private final Bitmap[] sTex = new Bitmap[MAXS];
    private final float[] sX = new float[MAXS], sY = new float[MAXS], sW = new float[MAXS], sH = new float[MAXS];
    private final boolean[] sGlow = new boolean[MAXS];
    private int sCount;

    private final List<float[]> punches = new ArrayList<>();

    public Bitmap face() { return TextureGen.face; }

    public void setScale(float s, int sw, int sh) {
        pendScale = s;
        pendW = sw;
        pendH = sh;
        needsInit = true;
    }

    private void applyPending() {
        if (!needsInit) return;
        needsInit = false;
        scale = pendScale;
        init(pendW, pendH);
    }

    public void init(int sw, int sh) {
        scrW = sw; scrH = sh;
        BW = (int) (sw * scale);
        BW = Math.max(240, Math.min(600, BW));
        BH = Math.max(160, (int) ((long) BW * sh / Math.max(1, sw)));
        buf = Bitmap.createBitmap(BW, BH, Bitmap.Config.ARGB_8888);
        bc = new Canvas(buf);
        lightBmp = Bitmap.createBitmap(BW, BH, Bitmap.Config.ARGB_8888);
        lc = new Canvas(lightBmp);
        zbuf = new float[BW];

        TextureGen.buildAll();
        wallTex = TextureGen.walls;
        monsterTex = TextureGen.monster;
        eyesTex = TextureGen.eyes;
        graveTex = TextureGen.grave;
        battTex = TextureGen.battery;
        keyTex = TextureGen.key;
        talisTex = TextureGen.talis;
        noteTex = TextureGen.note;

        pWall.setFilterBitmap(true);
        pSprite.setFilterBitmap(true);
        pScale.setFilterBitmap(true);
        pGrain.setFilterBitmap(true);

        pPool1 = new Paint(Paint.ANTI_ALIAS_FLAG);
        pPool1.setShader(new RadialGradient(BW / 2f, BH * 0.70f, BW * 0.62f,
                new int[]{0xFFFFFFFF, 0xE6FFFFFF, 0x00FFFFFF}, new float[]{0f, 0.5f, 1f}, Shader.TileMode.CLAMP));
        pPool1.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.DST_OUT));
        pPool2 = new Paint(Paint.ANTI_ALIAS_FLAG);
        pPool2.setShader(new RadialGradient(BW / 2f, BH * 0.46f, BW * 0.92f,
                new int[]{0xCCFFFFFF, 0x00FFFFFF}, new float[]{0f, 1f}, Shader.TileMode.CLAMP));
        pPool2.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.DST_OUT));

        // one reusable punch paint (was allocated + shader created EVERY frame)
        pPunch = new Paint(Paint.ANTI_ALIAS_FLAG);
        pPunch.setShader(new RadialGradient(0, 0, 1, new int[]{0xFFFFFFFF, 0x00FFFFFF}, new float[]{0f, 1f}, Shader.TileMode.CLAMP));
        pPunch.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.DST_OUT));

        pVig = new Paint();
        pVig.setShader(new RadialGradient(BW / 2f, BH / 2f, BW * 0.72f,
                new int[]{0x00000000, 0x66000000, 0xB4000000}, new float[]{0f, 0.62f, 1f}, Shader.TileMode.CLAMP));
        pFear = new Paint();
        pFear.setShader(new RadialGradient(BW / 2f, BH / 2f, BW * 0.70f,
                new int[]{0x00000000, 0x883A0008, 0xE85A0008}, new float[]{0f, 0.6f, 1f}, Shader.TileMode.CLAMP));

        grain = Bitmap.createBitmap(BW, BH, Bitmap.Config.ARGB_8888);
        Canvas gc = new Canvas(grain);
        Paint gp = new Paint();
        for (int i = 0; i < BW * BH / 220; i++) {
            int a = 14 + rng.nextInt(30);
            int v = rng.nextInt(255);
            gp.setColor(Color.argb(a, v, v, v));
            gc.drawCircle(rng.nextInt(BW), rng.nextInt(BH), 0.5f + rng.nextFloat(), gp);
        }
    }

    public void render(World w) {
        applyPending(); // safe: runs on the game thread only
        float px = (float) w.player.x, py = (float) w.player.y;
        double t = w.time;
        double dirX = Math.cos(w.player.ang), dirY = Math.sin(w.player.ang);
        double planeX = -dirY * 0.66, planeY = dirX * 0.66;
        float horizon = BH / 2f + (float) (Math.sin(w.player.bob) * BH * 0.012);
        boolean beam = w.player.lightOn && w.player.battery > 0;
        double flick = 0.9 + 0.1 * Math.sin(t * 31.7) * Math.sin(t * 17.3);
        Map map = w.map;

        // ceiling / floor
        pFx.setShader(new LinearGradient(0f, 0f, 0f, Math.max(1f, horizon),
                0xFF0b0d15L, 0xFF1a1e2cL, Shader.TileMode.CLAMP));
        bc.drawRect(0, 0, BW, horizon, pFx);
        pFx.setShader(new LinearGradient(0f, horizon, 0f, BH,
                0xFF14100bL, 0xFF33291aL, Shader.TileMode.CLAMP));
        bc.drawRect(0, horizon, BW, BH, pFx);
        pFx.setShader(null);

        // walls
        for (int x = 0; x < BW; x++) {
            double camX = 2.0 * x / BW - 1.0;
            double rdx = dirX + planeX * camX, rdy = dirY + planeY * camX;
            map.cast(px, py, rdx, rdy, 22, ray);
            if (!ray.hit) { zbuf[x] = 22; continue; }
            double d = ray.dist;
            zbuf[x] = (float) Math.max(0.03, d);
            float lineH = (float) (BH / d);
            float y0 = horizon - lineH / 2f, y1 = horizon + lineH / 2f;
            Bitmap tex = wallTex[ray.tile];
            if (tex != null) {
                int txI = (int) (ray.wallX * 63) & 63;
                srcR.set(txI, 0, txI + 1, 64);
                dstF.set(x, y0, x + 1, y1);
                bc.drawBitmap(tex, srcR, dstF, pWall);
            }
            double li = beam ? 0.085 : 0.11; // moonlight ambient floor
            if (beam) {
                double b = Math.max(0, 1 - Math.abs(camX) / 0.62);
                double reach = Math.max(0, 1 - d / 20);
                li += Math.pow(b, 1.5) * flick * reach * reach * 0.98;
            }
            if (ray.side == 1) li *= 0.8;
            li = Math.min(1, li);
            int a = (int) ((1 - li) * 248);
            if (a > 2) {
                pShade.setColor(Color.argb(Math.min(a, 246), 2, 2, 7));
                bc.drawRect(x, y0, x + 1, y1, pShade);
            }
        }

        // sprites
        punches.clear();
        sCount = 0;
        for (Items.Item it : w.items) {
            if (it.taken || sCount >= MAXS) continue;
            sTex[sCount] = it.type == Items.Type.BATTERY ? battTex : it.type == Items.Type.KEY ? keyTex
                    : it.type == Items.Type.TALISMAN ? talisTex : noteTex;
            sX[sCount] = (float) it.x; sY[sCount] = (float) it.y;
            sW[sCount] = 0.34f; sH[sCount] = 0.34f;
            sGlow[sCount] = true;
            sCount++;
        }
        for (double[] g : w.graves) {
            if (sCount >= MAXS) break;
            sTex[sCount] = graveTex;
            sX[sCount] = (float) g[0]; sY[sCount] = (float) g[1];
            sW[sCount] = 0.5f; sH[sCount] = 0.62f;
            sGlow[sCount] = false;
            sCount++;
        }
        if (!w.monster.banished) {
            if (sCount < MAXS) {
                sTex[sCount] = monsterTex;
                sX[sCount] = (float) w.monster.x; sY[sCount] = (float) w.monster.y;
                sW[sCount] = 0.78f; sH[sCount] = 1.02f;
                sGlow[sCount] = false;
                sCount++;
            }
        }
        // painter's order: far -> near (insertion sort)
        for (int i = 1; i < sCount; i++) {
            Bitmap tB = sTex[i]; float tx = sX[i], ty = sY[i], tw = sW[i], th = sH[i]; boolean tg = sGlow[i];
            float di = (tx - px) * (tx - px) + (ty - py) * (ty - py);
            int j = i - 1;
            while (j >= 0) {
                float dj = (sX[j] - px) * (sX[j] - px) + (sY[j] - py) * (sY[j] - py);
                if (dj >= di) break;
                sTex[j + 1] = sTex[j]; sX[j + 1] = sX[j]; sY[j + 1] = sY[j]; sW[j + 1] = sW[j]; sH[j + 1] = sH[j]; sGlow[j + 1] = sGlow[j];
                j--;
            }
            sTex[j + 1] = tB; sX[j + 1] = tx; sY[j + 1] = ty; sW[j + 1] = tw; sH[j + 1] = th; sGlow[j + 1] = tg;
        }

        double invDet = 1.0 / (planeX * dirY - dirX * planeY);
        boolean monsterVisible = false;
        float mScreenX = 0, mTop = 0, mH = 0, mW = 0, mTrY = 0;

        for (int i = 0; i < sCount; i++) {
            double relX = sX[i] - px, relY = sY[i] - py;
            double trX = invDet * (dirY * relX - dirX * relY);
            double trY = invDet * (-planeY * relX + planeX * relY);
            if (trY < 0.15 || trY > 21) continue;
            double sxc = (BW / 2.0) * (1 + trX / trY);
            double bottom = horizon + 0.5 * BH / trY;
            double hpx = sH[i] * BH / trY;
            double wpx = sW[i] * BH / trY;
            double top = bottom - hpx;
            int x0 = (int) Math.max(0, sxc - wpx / 2), x1 = (int) Math.min(BW - 1, sxc + wpx / 2);
            Bitmap tex = sTex[i];
            if (tex == null) continue;
            int texW = tex.getWidth(), texH = tex.getHeight();
            float leftEdge = (float) (sxc - wpx / 2);
            int run = -1;
            for (int x = x0; x <= x1 + 1; x++) {
                boolean vis = x <= x1 && trY < zbuf[x];
                if (vis && run < 0) run = x;
                if ((!vis || x == x1 + 1) && run >= 0) {
                    int sx0 = (int) ((run - leftEdge) / wpx * texW);
                    int sx1 = (int) ((x - leftEdge) / wpx * texW);
                    sx0 = Math.max(0, Math.min(texW - 1, sx0));
                    sx1 = Math.max(sx0 + 1, Math.min(texW, sx1));
                    srcR.set(sx0, 0, sx1, texH);
                    dstF.set(run, (float) top, x, (float) bottom);
                    float al = 255f - Math.max(0f, Math.min(1f, (float) ((trY - 0.6) / 15))) * 232f;
                    if (Math.abs(sxc - BW / 2) < BW * 0.30 && beam) al = Math.min(255, al + 55);
                    pSprite.setAlpha((int) al);
                    bc.drawBitmap(tex, srcR, dstF, pSprite);
                    if (sGlow[i] && trY < 7) {
                        punches.add(new float[]{(float) sxc, (float) (bottom - hpx * 0.5f),
                                (float) (14 + 26 / (trY + 1)), (float) Math.min(170, 210 / (trY * 0.5f + 0.6f))});
                    }
                    run = -1;
                }
            }
            if (tex == monsterTex) {
                monsterVisible = x1 >= x0 && trY < zbuf[Math.max(0, Math.min(BW - 1, (int) sxc))];
                mScreenX = (float) sxc; mTop = (float) top; mH = (float) hpx; mW = (float) wpx; mTrY = (float) trY;
            }
        }

        // flashlight mask
        int maskA = beam ? 150 : 205;
        lc.drawColor(Color.argb(maskA, 0, 0, 0), android.graphics.PorterDuff.Mode.SRC);
        if (beam) {
            lc.drawCircle(BW / 2f, BH * 0.70f, BW * 0.62f, pPool1);
            lc.drawCircle(BW / 2f, BH * 0.46f, BW * 0.92f, pPool2);
        }
        for (float[] p : punches) {
            pPunch.setAlpha((int) Math.min(255, p[3]));
            lc.save();
            lc.translate(p[0], p[1]);
            lc.scale(p[2], p[2]);
            lc.drawCircle(0, 0, 1, pPunch);
            lc.restore();
        }
        bc.drawBitmap(lightBmp, 0, 0, null);

        // monster eyes glow in the dark
        if (monsterVisible && mTrY < 13) {
            pFx.setColor(Color.rgb(255, 70, 34));
            pFx.setAlpha((int) (150 + 90 * Math.sin(t * 3.3)));
            dstF.set(mScreenX - mW * 0.22f, mTop + mH * 0.07f, mScreenX + mW * 0.22f, mTop + mH * 0.13f);
            bc.drawBitmap(eyesTex, null, dstF, pFx);
            pFx.setAlpha(255);
        }

        // post fx
        pFx.setShader(pVig.getShader());
        bc.drawRect(0, 0, BW, BH, pFx);
        if (w.player.fear > 40) {
            pFx.setShader(pFear.getShader());
            pFx.setAlpha((int) Math.min(230, (w.player.fear - 40) / 60.0 * (150 + 60 * Math.sin(t * 5))));
            bc.drawRect(0, 0, BW, BH, pFx);
            pFx.setAlpha(255);
        }
        if (w.bloodT > 0) {
            pFx.setShader(null);
            pFx.setColor(Color.argb((int) (Math.min(1, w.bloodT) * 135), 96, 4, 8));
            bc.drawRect(0, 0, BW, BH, pFx);
        }
        if (w.flashT > 0) {
            pFx.setShader(null);
            pFx.setColor(Color.argb((int) (w.flashT / 0.35 * 110), 200, 210, 255));
            bc.drawRect(0, 0, BW, BH, pFx);
        }
        if (w.ritualActive) {
            pFx.setShader(null);
            pFx.setColor(Color.argb((int) (46 + 26 * Math.sin(t * 10)), 255, 196, 90));
            bc.drawRect(0, 0, BW, BH, pFx);
        }
        // film grain
        int gox = rng.nextInt(24) - 12, goy = rng.nextInt(24) - 12;
        pGrain.setAlpha(11);
        bc.drawBitmap(grain, gox, goy, pGrain);
        pGrain.setAlpha(255);
        pFx.setShader(null);
    }

    public void drawTo(Canvas canvas) {
        dstF.set(0, 0, scrW, scrH);
        canvas.drawBitmap(buf, null, dstF, pScale);
    }
}
