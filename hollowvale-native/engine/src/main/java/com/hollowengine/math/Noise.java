package com.hollowengine.math;

/** HollowEngine — 2D value noise + fBm (pure JVM, deterministic, no allocations in hot path). */
public final class Noise {
    private Noise() { }

    private static int hash(int x, int y, long seed) {
        long h = seed ^ (x * 374761393L) ^ (y * 668265263L);
        h = (h ^ (h >>> 13)) * 1274126177L;
        return (int) ((h ^ (h >>> 16)) & 0x7FFFFFFFL);
    }

    private static float grad(int cell, int x, int y, long seed) {
        return (hash(x, y, seed) + cell * 1013904223) / (float) 0x7FFFFFFF;
    }

    /** smooth value noise in [0,1). */
    public static float value(float x, float y, long seed) {
        int xi = MathX.floor(x), yi = MathX.floor(y);
        float xf = x - xi, yf = y - yi;
        xf = xf * xf * (3 - 2 * xf);
        yf = yf * yf * (3 - 2 * yf);
        float a = grad(0, xi, yi, seed);
        float b = grad(0, xi + 1, yi, seed);
        float c = grad(0, xi, yi + 1, seed);
        float d = grad(0, xi + 1, yi + 1, seed);
        return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
    }

    /** fractal Brownian motion (sum of octaves) normalized to ~[0,1). */
    public static float fbm(float x, float y, int octaves, float lacunarity, float gain, long seed) {
        float sum = 0, amp = 1, norm = 0;
        float fx = x, fy = y;
        for (int i = 0; i < octaves; i++) {
            sum += value(fx, fy, seed + i * 1013L) * amp;
            norm += amp;
            amp *= gain;
            fx *= lacunarity;
            fy *= lacunarity;
        }
        return sum / Math.max(norm, 1e-6f);
    }

    /** 1D smooth noise in [0,1) — useful for flicker/wobble curves. */
    public static float value1(float x, long seed) {
        return value(x, 0.371f, seed);
    }
}
