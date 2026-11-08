package ir.hollowvale.engine;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;

import java.util.Random;

import ir.hollowvale.game.Map;

/** Procedurally generated wall textures and sprites — zero external assets. */
public final class TextureGen {
    public static Bitmap[] walls = new Bitmap[Map.TEX_COUNT];
    public static Bitmap monster, eyes, grave, battery, key, talis, note, face;

    private TextureGen() {}

    public static void buildAll() {
        if (walls[Map.STONE] != null) return;
        walls[Map.EMPTY] = solid(Color.BLACK);
        walls[Map.STONE] = stone();
        walls[Map.BRICK] = brick();
        walls[Map.CHURCH] = church();
        walls[Map.DOOR] = door(false);
        walls[Map.CDOOR] = door(true);
        walls[Map.GATE] = gate();
        walls[Map.PILLAR] = pillar();
        walls[Map.ALTAR] = altar();
        walls[Map.FOUNTAIN] = fountain();
        walls[Map.TREE] = bark();
        monster = monsterSprite();
        eyes = eyesSprite();
        grave = graveSprite();
        battery = batterySprite();
        key = keySprite();
        talis = talisSprite();
        note = noteSprite();
        face = faceSprite();
    }

    private static Paint P() {
        return new Paint(Paint.ANTI_ALIAS_FLAG);
    }

    private static Bitmap solid(int c) {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        b.eraseColor(c);
        return b;
    }

    private static void speckle(Canvas c, int n, int alpha, int seedShift) {
        Random r = new Random(900 + seedShift);
        Paint p = P();
        for (int i = 0; i < n; i++) {
            int a = 8 + r.nextInt(alpha);
            p.setColor(Color.argb(a, r.nextInt(60) + 10, r.nextInt(60) + 10, r.nextInt(60) + 12));
            c.drawCircle(r.nextInt(64), r.nextInt(64), 0.6f + r.nextFloat() * 1.4f, p);
        }
    }

    private static Bitmap stone() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(52, 52, 60));
        Paint p = P();
        p.setColor(Color.rgb(30, 30, 36));
        for (int y = 0; y < 64; y += 16) c.drawRect(0, y, 64, y + 2, p);
        int off = 0;
        for (int y = 0; y < 64; y += 16) {
            for (int x = off; x < 64; x += 21) c.drawRect(x, y, x + 2, y + 16, p);
            off = (off + 10) % 21;
        }
        p.setColor(Color.argb(40, 120, 120, 130));
        for (int y = 2; y < 64; y += 16) c.drawRect(0, y, 64, y + 1, p);
        speckle(c, 90, 26, 1);
        return b;
    }

    private static Bitmap brick() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(58, 36, 32));
        Paint p = P();
        p.setColor(Color.rgb(36, 22, 20));
        for (int y = 0; y < 64; y += 8) c.drawRect(0, y, 64, y + 1, p);
        int off = 0;
        for (int y = 0; y < 64; y += 8) {
            for (int x = off; x < 64; x += 16) c.drawRect(x, y, x + 1, y + 8, p);
            off = (off + 8) % 16;
        }
        Random r = new Random(55);
        for (int i = 0; i < 26; i++) {
            p.setColor(Color.argb(30 + r.nextInt(30), 90 + r.nextInt(40), 50, 44));
            float bx = r.nextInt(60), by = r.nextInt(60);
            c.drawRect(bx, by, bx + 5 + r.nextInt(8), by + 4, p);
        }
        speckle(c, 60, 20, 2);
        return b;
    }

    private static Bitmap church() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(64, 62, 74));
        Paint p = P();
        p.setColor(Color.rgb(44, 42, 52));
        for (int y = 0; y < 64; y += 21) c.drawRect(0, y, 64, y + 2, p);
        p.setColor(Color.rgb(16, 16, 24));
        RectF w = new RectF(24, 14, 40, 40);
        c.drawRoundRect(w, 8, 8, p);
        p.setColor(Color.rgb(110, 112, 130));
        c.drawRect(31, 15, 33, 39, p);
        c.drawRect(25, 24, 39, 26, p);
        p.setColor(Color.argb(60, 180, 190, 210));
        c.drawRect(28, 17, 30, 23, p);
        speckle(c, 70, 22, 3);
        return b;
    }

    private static Bitmap door(boolean church) {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(church ? Color.rgb(38, 28, 22) : Color.rgb(64, 46, 28));
        Paint p = P();
        p.setColor(Color.argb(140, 20, 12, 8));
        for (int x = 0; x < 64; x += 9) c.drawRect(x, 0, x + 1, 64, p);
        if (church) {
            p.setColor(Color.rgb(52, 54, 60));
            c.drawRect(0, 10, 64, 15, p);
            c.drawRect(0, 40, 64, 45, p);
            p.setColor(Color.rgb(90, 92, 100));
            c.drawCircle(44, 32, 3.5f, p);
        } else {
            p.setColor(Color.rgb(42, 30, 18));
            c.drawRect(0, 28, 64, 31, p);
            p.setColor(Color.rgb(160, 130, 70));
            c.drawCircle(50, 34, 3, p);
        }
        speckle(c, 40, 16, 4);
        return b;
    }

    private static Bitmap gate() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(14, 15, 18));
        Paint p = P();
        p.setColor(Color.rgb(70, 74, 84));
        for (int x = 4; x < 64; x += 12) c.drawRect(x, 0, x + 3, 64, p);
        c.drawRect(0, 8, 64, 12, p);
        c.drawRect(0, 46, 64, 50, p);
        p.setColor(Color.argb(70, 140, 150, 170));
        for (int x = 4; x < 64; x += 12) c.drawRect(x + 1, 0, x + 2, 64, p);
        return b;
    }

    private static Bitmap pillar() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(56, 56, 66));
        Paint p = P();
        p.setColor(Color.rgb(74, 74, 86));
        c.drawRect(10, 0, 54, 64, p);
        p.setColor(Color.rgb(40, 40, 48));
        c.drawRect(10, 0, 14, 64, p);
        c.drawRect(50, 0, 54, 64, p);
        c.drawRect(0, 0, 64, 6, p);
        c.drawRect(0, 58, 64, 64, p);
        speckle(c, 40, 18, 5);
        return b;
    }

    private static Bitmap altar() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(34, 32, 40));
        Paint p = P();
        p.setColor(Color.rgb(52, 50, 60));
        c.drawRect(6, 30, 58, 40, p);
        c.drawRect(10, 40, 54, 64, p);
        p.setColor(Color.rgb(70, 66, 80));
        c.drawRect(6, 30, 58, 33, p);
        p.setColor(Color.rgb(200, 190, 170));
        c.drawRect(18, 18, 23, 30, p);
        c.drawRect(41, 18, 46, 30, p);
        p.setColor(Color.rgb(255, 176, 60));
        c.drawCircle(20.5f, 15, 3.4f, p);
        c.drawCircle(43.5f, 15, 3.4f, p);
        p.setColor(Color.rgb(255, 230, 150));
        c.drawCircle(20.5f, 14, 1.6f, p);
        c.drawCircle(43.5f, 14, 1.6f, p);
        p.setColor(Color.rgb(130, 26, 26));
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(2);
        c.drawCircle(32, 48, 8, p);
        return b;
    }

    private static Bitmap fountain() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(46, 48, 54));
        Paint p = P();
        p.setColor(Color.rgb(62, 64, 72));
        c.drawCircle(32, 32, 28, p);
        p.setColor(Color.rgb(20, 24, 30));
        c.drawCircle(32, 32, 20, p);
        p.setColor(Color.rgb(70, 90, 110));
        c.drawCircle(32, 32, 17, p);
        p.setColor(Color.rgb(40, 58, 76));
        c.drawCircle(32, 32, 9, p);
        speckle(c, 40, 14, 6);
        return b;
    }

    private static Bitmap bark() {
        Bitmap b = Bitmap.createBitmap(64, 64, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(30, 28, 22));
        Paint p = P();
        Random r = new Random(77);
        for (int i = 0; i < 14; i++) {
            int x = r.nextInt(64);
            p.setColor(Color.argb(120, 18 + r.nextInt(20), 16 + r.nextInt(16), 12 + r.nextInt(10)));
            c.drawRect(x, 0, x + 1 + r.nextInt(3), 64, p);
        }
        p.setColor(Color.rgb(22, 26, 18));
        for (int i = 0; i < 8; i++) {
            float fx = r.nextInt(64), fy = r.nextInt(64);
            c.drawCircle(fx, fy, 6 + r.nextInt(10), p);
        }
        speckle(c, 50, 16, 7);
        return b;
    }

    // ---------- sprites ----------

    private static Bitmap monsterSprite() {
        Bitmap b = Bitmap.createBitmap(96, 160, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(12, 10, 14));
        c.drawRect(38, 34, 58, 150, p);
        c.drawRect(30, 60, 40, 138, p);
        c.drawRect(56, 60, 66, 142, p);
        c.drawRect(38, 148, 47, 160, p);
        c.drawRect(49, 148, 58, 160, p);
        p.setColor(Color.rgb(148, 140, 132));
        c.drawOval(new RectF(34, 6, 62, 40), p);
        p.setColor(Color.rgb(110, 102, 96));
        c.drawRect(44, 40, 52, 60, p);
        p.setColor(Color.rgb(8, 6, 8));
        c.drawOval(new RectF(40, 16, 49, 24), p);
        c.drawOval(new RectF(50, 16, 59, 24), p);
        c.drawOval(new RectF(43, 30, 56, 38), p);
        p.setColor(Color.rgb(10, 8, 12));
        for (int i = 0; i < 7; i++) {
            float fx = 30 + i * 6;
            c.drawRect(fx, 118 + (i % 3) * 8, fx + 5, 150, p);
        }
        return b;
    }

    private static Bitmap eyesSprite() {
        Bitmap b = Bitmap.createBitmap(32, 16, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(255, 60, 30));
        c.drawCircle(9, 8, 4.4f, p);
        c.drawCircle(23, 8, 4.4f, p);
        p.setColor(Color.rgb(255, 190, 120));
        c.drawCircle(9, 8, 1.9f, p);
        c.drawCircle(23, 8, 1.9f, p);
        return b;
    }

    private static Bitmap graveSprite() {
        Bitmap b = Bitmap.createBitmap(48, 72, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(72, 74, 82));
        c.drawRoundRect(new RectF(8, 8, 40, 72), 14, 6, p);
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(2);
        p.setColor(Color.rgb(52, 54, 60));
        c.drawRoundRect(new RectF(8, 8, 40, 72), 14, 6, p);
        p.setStyle(Paint.Style.FILL);
        p.setColor(Color.rgb(40, 42, 48));
        c.drawRect(22, 18, 26, 38, p);
        c.drawRect(15, 24, 33, 28, p);
        return b;
    }

    private static Bitmap batterySprite() {
        Bitmap b = Bitmap.createBitmap(48, 48, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(40, 92, 48));
        c.drawRoundRect(new RectF(17, 10, 31, 40), 3, 3, p);
        p.setColor(Color.rgb(150, 150, 150));
        c.drawRect(21, 6, 27, 11, p);
        p.setColor(Color.rgb(220, 220, 210));
        c.drawRect(19, 22, 29, 26, p);
        p.setColor(Color.rgb(24, 56, 30));
        c.drawRect(17, 33, 31, 40, p);
        return b;
    }

    private static Bitmap keySprite() {
        Bitmap b = Bitmap.createBitmap(48, 48, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(168, 128, 60));
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(4);
        c.drawCircle(17, 17, 8, p);
        p.setStyle(Paint.Style.FILL);
        c.drawRect(22, 21, 27, 42, p);
        c.drawRect(27, 34, 34, 38, p);
        c.drawRect(27, 41, 32, 44, p);
        return b;
    }

    private static Bitmap talisSprite() {
        Bitmap b = Bitmap.createBitmap(48, 48, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(206, 186, 140));
        c.drawRoundRect(new RectF(12, 8, 36, 42), 4, 4, p);
        p.setColor(Color.rgb(150, 40, 34));
        p.setStyle(Paint.Style.STROKE);
        p.setStrokeWidth(2.4f);
        c.drawCircle(24, 24, 9, p);
        c.drawLine(24, 12, 24, 36, p);
        c.drawLine(15, 24, 33, 24, p);
        p.setStyle(Paint.Style.FILL);
        c.drawCircle(24, 24, 2.6f, p);
        return b;
    }

    private static Bitmap noteSprite() {
        Bitmap b = Bitmap.createBitmap(48, 48, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        Paint p = P();
        p.setColor(Color.rgb(214, 208, 192));
        c.drawRect(11, 7, 37, 43, p);
        p.setColor(Color.rgb(90, 86, 76));
        for (int y = 14; y < 42; y += 6) c.drawRect(15, y, 33, y + 1.4f, p);
        p.setColor(Color.rgb(120, 40, 34));
        c.drawRect(15, 8, 33, 10, p);
        return b;
    }

    private static Bitmap faceSprite() {
        Bitmap b = Bitmap.createBitmap(256, 256, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(b);
        c.drawColor(Color.rgb(6, 2, 4));
        Paint p = P();
        p.setColor(Color.rgb(158, 148, 140));
        c.drawOval(new RectF(58, 30, 198, 226), p);
        p.setColor(Color.rgb(112, 104, 98));
        c.drawOval(new RectF(58, 30, 198, 226), p);
        p.setColor(Color.rgb(4, 2, 4));
        c.drawOval(new RectF(88, 92, 132, 140), p);
        c.drawOval(new RectF(128, 92, 172, 140), p);
        p.setColor(Color.rgb(255, 240, 220));
        c.drawCircle(110, 116, 6, p);
        c.drawCircle(150, 116, 6, p);
        p.setColor(Color.rgb(4, 2, 4));
        c.drawOval(new RectF(96, 168, 164, 224), p);
        p.setColor(Color.rgb(60, 40, 40));
        for (int i = 0; i < 5; i++) c.drawRect(102 + i * 13, 170, 108 + i * 13, 180, p);
        return b;
    }
}
