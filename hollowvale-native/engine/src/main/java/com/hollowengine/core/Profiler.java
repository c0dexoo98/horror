package com.hollowengine.core;

import java.util.Locale;

/**
 * HollowEngine — frame profiler: rolling FPS, min/avg frame time, and a
 * one-call-per-frame {@link #frame(float)} API. Cheap enough to leave on in debug.
 */
public final class Profiler {
    private float avgDt = 1f / 60f;
    private float minDt = Float.MAX_VALUE;
    private float maxDt;
    private float windowAcc = 0;
    private int windowN = 0;
    private float fps = 60;
    private int frames;

    /** call once per rendered frame with the real delta seconds. */
    public void frame(float dt) {
        if (dt <= 0) dt = 1e-4f;
        frames++;
        avgDt += (dt - avgDt) * 0.08f;             // EMA
        if (dt < minDt) minDt = dt;
        if (dt > maxDt) maxDt = dt;
        windowAcc += dt;
        windowN++;
        if (windowAcc >= 0.5f) {                    // refresh public fps twice a second
            fps = windowN / windowAcc;
            windowAcc = 0;
            windowN = 0;
        }
    }

    public float fps() { return fps; }

    public float avgMs() { return avgDt * 1000f; }

    public float minMs() { return minDt * 1000f; }

    public float maxMs() { return maxDt * 1000f; }

    public long frames() { return frames; }

    public void reset() {
        avgDt = 1f / 60f;
        minDt = Float.MAX_VALUE;
        maxDt = 0;
        windowAcc = 0;
        windowN = 0;
        frames = 0;
    }

    public String summary() {
        return String.format(Locale.US, "%.0f fps | avg %.2f ms | min %.2f | max %.2f",
                fps, avgMs(), minMs(), maxMs());
    }
}
