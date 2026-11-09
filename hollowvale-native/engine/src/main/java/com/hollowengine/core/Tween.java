package com.hollowengine.core;

/**
 * HollowEngine — lightweight tween/timeline driver.
 * Values are computed lazily by the caller each frame: store Tween objects, call
 * {@link #value()} after advancing, or use the static helpers directly.
 */
public final class Tween {
    /** progress p in 0..1 → eased value. */
    public interface Ease {
        float apply(float p);
    }

    public static final Ease LINEAR = p -> p;
    public static final Ease EASE_IN = p -> p * p;
    public static final Ease EASE_OUT = p -> 1f - (1f - p) * (1f - p);
    public static final Ease EASE_IN_OUT = p -> p < 0.5f ? 2f * p * p : 1f - 2f * (1f - p) * (1f - p);
    public static final Ease SMOOTH = p -> p * p * (3f - 2f * p);
    public static final Ease BACK_OUT = p -> {
        float c = 1.70158f;
        p -= 1f;
        return p * p * ((c + 1f) * p + c) + 1f;
    };
    public static final Ease ELASTIC_OUT = p -> {
        if (p <= 0f) return 0f;
        if (p >= 1f) return 1f;
        return (float) (Math.pow(2, -10 * p) * Math.sin((p - 0.075) * (2 * Math.PI) / 0.3) + 1);
    };

    public final float from, to, duration;
    public final Ease ease;
    private float t;
    private boolean done;

    public Tween(float from, float to, float durationSec, Ease ease) {
        this.from = from;
        this.to = to;
        this.duration = Math.max(1e-6f, durationSec);
        this.ease = ease == null ? LINEAR : ease;
    }

    /** advance by dt seconds; returns true the frame it completes. */
    public boolean update(float dt) {
        if (done) return false;
        t += dt;
        if (t >= duration) {
            t = duration;
            done = true;
            return true;
        }
        return false;
    }

    public float value() {
        return from + (to - from) * ease.apply(MathX01());
    }

    public float progress() { return MathX01(); }

    private float MathX01() {
        float p = t / duration;
        return p < 0 ? 0 : (p > 1 ? 1 : p);
    }

    public boolean isDone() { return done; }

    public void finish() { t = duration; done = true; }

    public void reset() { t = 0; done = false; }

    // ---- static one-shot helpers -------------------------------------------------

    public static float ease(Ease e, float p) {
        return e.apply(p < 0 ? 0 : (p > 1 ? 1 : p));
    }

    /** eased interpolation a→b. */
    public static float lerp(float a, float b, float p, Ease e) {
        return a + (b - a) * ease(e, p);
    }

    /** pulse curve 0→1→0 over the period (for flashing UI). */
    public static float pulse(float timeSec, float periodSec) {
        float p = (timeSec % periodSec) / periodSec;
        return 1f - Math.abs(p * 2f - 1f);
    }
}
