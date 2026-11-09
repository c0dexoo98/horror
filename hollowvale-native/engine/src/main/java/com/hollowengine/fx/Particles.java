package com.hollowengine.fx;

import com.hollowengine.math.MathX;
import com.hollowengine.math.Rng;

import java.util.Arrays;

/**
 * HollowEngine — CPU particle system (structural arrays, zero GC in steady state).
 * Generic enough for dust motes, embers, blood puffs, rain, snow, magic…
 */
public final class Particles {
    public float[] x, y, vx, vy, life, maxLife, size, sizeEnd;
    public float[] colR, colG, colB, colA, alphaStart;
    public boolean[] alive;
    private final int cap;
    private int cursor = 0;
    private final Rng rng = new Rng();
    public float gravityY = 0;
    public float drag = 0;      // per-second velocity damping 0..1
    public float timeScale = 1;

    public Particles(int capacity) {
        cap = capacity;
        x = new float[cap];
        y = new float[cap];
        vx = new float[cap];
        vy = new float[cap];
        life = new float[cap];
        maxLife = new float[cap];
        size = new float[cap];
        sizeEnd = new float[cap];
        colR = new float[cap];
        colG = new float[cap];
        colB = new float[cap];
        colA = new float[cap];
        alphaStart = new float[cap];
        alive = new boolean[cap];
    }

    /** spawn one particle; overwrites the oldest slot when full (ring buffer). */
    public void emit(float px, float py, float velX, float velY, float lifeSec,
                     float sizeStart, float sizeEnd, float r, float g, float b, float a) {
        int i = cursor;
        cursor = (cursor + 1) % cap;
        x[i] = px;
        y[i] = py;
        vx[i] = velX;
        vy[i] = velY;
        life[i] = lifeSec;
        maxLife[i] = lifeSec;
        size[i] = sizeStart;
        this.sizeEnd[i] = sizeEnd;
        colR[i] = r;
        colG[i] = g;
        colB[i] = b;
        colA[i] = a;
        alphaStart[i] = a;
        alive[i] = true;
    }

    public void update(float dt) {
        dt *= timeScale;
        float dragKeep = 1f - MathX.clamp(drag, 0f, 1f) * dt;
        for (int i = 0; i < cap; i++) {
            if (!alive[i]) continue;
            life[i] -= dt;
            if (life[i] <= 0) {
                alive[i] = false;
                continue;
            }
            vy[i] += gravityY * dt;
            vx[i] *= dragKeep;
            vy[i] *= dragKeep;
            x[i] += vx[i] * dt;
            y[i] += vy[i] * dt;
        }
    }

    /** current visual size of slot i. */
    public float sizeNow(int i) {
        float t = 1f - life[i] / Math.max(maxLife[i], 1e-5f);
        return MathX.lerp(size[i], sizeEnd[i], t);
    }

    /** current alpha of slot i (fades linearly out). */
    public float alphaNow(int i) {
        return MathX.clamp01(life[i] / Math.max(maxLife[i], 1e-5f)) * alphaStart[i];
    }

    public int capacity() { return cap; }

    public void clear() {
        Arrays.fill(alive, false);
    }

    public Rng rng() { return rng; }
}
