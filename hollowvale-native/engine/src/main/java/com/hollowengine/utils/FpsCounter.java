package com.hollowengine.utils;

/** HollowEngine — rolling FPS counter (simple, allocation-free). */
public final class FpsCounter {
    private float ema = 60;
    private float display = 60;
    private float acc = 0;
    private int n = 0;

    public void tick(float dt) {
        if (dt <= 0) return;
        ema += (1f / dt - ema) * 0.05f;
        acc += dt;
        n++;
        if (acc >= 0.5f) {
            display = n / acc;
            acc = 0;
            n = 0;
        }
    }

    public float fps() { return display; }

    public float smooth() { return ema; }
}
