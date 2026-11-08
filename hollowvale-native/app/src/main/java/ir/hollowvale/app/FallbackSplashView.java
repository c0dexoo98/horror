package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.view.Choreographer;
import android.view.View;

import java.util.Random;

/** HOLLOW VALE v4 — animated canvas splash used if the video cannot play (never crashes). */
public class FallbackSplashView extends View implements Choreographer.FrameCallback {
    private final boolean ending;
    private final Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Random r = new Random(13);
    private float t = 0;
    private long last = 0;
    private float[][] dust = new float[40][3];
    private float lightning = 0, next = 2.2f;

    public FallbackSplashView(Context c, boolean ending) {
        super(c);
        this.ending = ending;
        for (float[] d : dust) {
            d[0] = r.nextFloat();
            d[1] = r.nextFloat();
            d[2] = r.nextFloat() * 6.28f;
        }
        Choreographer.getInstance().postFrameCallback(this);
    }

    @Override
    public void doFrame(long n) {
        float dt = last == 0 ? 0.016f : Math.min(0.05f, (n - last) / 1e9f);
        last = n;
        t += dt;
        if (lightning > 0) lightning -= dt * 2.2f;
        next -= dt;
        if (next <= 0) {
            next = 3 + r.nextFloat() * 4;
            lightning = 0.8f;
        }
        invalidate();
        Choreographer.getInstance().postFrameCallback(this);
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        Choreographer.getInstance().removeFrameCallback(this);
    }

    @Override
    protected void onDraw(Canvas c) {
        int w = getWidth(), h = getHeight();
        float dp = getResources().getDisplayMetrics().density;
        p.setShader(new LinearGradient(0, 0, 0, h, Color.rgb(10, 8, 14), Color.rgb(18, 15, 26), Shader.TileMode.CLAMP));
        c.drawRect(0, 0, w, h, p);
        p.setShader(null);
        if (!ending) {
            float mx = w * 0.8f, my = h * 0.18f;
            p.setShader(new RadialGradient(mx, my, 80 * dp,
                    new int[]{0x40A02020, 0x00A02020}, null, Shader.TileMode.CLAMP));
            c.drawCircle(mx, my, 80 * dp, p);
            p.setShader(null);
            p.setColor(0xFFB02828);
            c.drawCircle(mx, my, 34 * dp, p);
        } else {
            p.setShader(new RadialGradient(w / 2f, h * 0.7f, h * 0.7f,
                    new int[]{0x30C8A060, 0x00C8A060}, null, Shader.TileMode.CLAMP));
            c.drawCircle(w / 2f, h * 0.7f, h * 0.7f, p);
            p.setShader(null);
        }
        for (float[] d : dust) {
            p.setColor(Color.argb((int) (28 + 20 * Math.sin(t * 2 + d[2])), 210, 205, 215));
            c.drawPoint(((d[0] + t * 0.01f) % 1f) * w, d[1] * h, p);
        }
        if (lightning > 0) {
            p.setColor(Color.argb((int) (60 * lightning), 130, 135, 170));
            c.drawRect(0, 0, w, h, p);
        }
        p.setTextAlign(Paint.Align.CENTER);
        p.setTypeface(Fonts.title(getContext()));
        float ts = Math.min(52 * dp, w / 10f);
        p.setTextSize(ts);
        p.setShadowLayer(14 * dp, 0, 0, 0xCC801010);
        p.setColor(0xFFE03028);
        c.drawText("HOLLOW VALE", w / 2, h * 0.44f, p);
        p.setShadowLayer(0, 0, 0, 0);
        p.setTypeface(Fonts.vazirBold(getContext()));
        p.setTextSize(ts * 0.4f);
        p.setColor(0xFFC8BFA8);
        c.drawText("درهٔ توخالی", w / 2, h * 0.54f, p);
        p.setTypeface(null);
    }
}
