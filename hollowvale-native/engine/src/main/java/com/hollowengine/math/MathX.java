package com.hollowengine.math;

/** HollowEngine — scalar math utilities (tiny, allocation-free, branch-cheap). */
public final class MathX {
    public static final float PI = (float) Math.PI;
    public static final float TAU = (float) (Math.PI * 2.0);
    public static final float DEG = PI / 180f;
    public static final float E = 2.718281828459045f;

    private MathX() { }

    public static float clamp(float v, float min, float max) {
        return v < min ? min : (v > max ? max : v);
    }

    public static int clamp(int v, int min, int max) {
        return v < min ? min : (v > max ? max : v);
    }

    public static float clamp01(float v) { return clamp(v, 0f, 1f); }

    public static float lerp(float a, float b, float t) { return a + (b - a) * t; }

    /** inverse lerp: t of v between a and b (unclamped). */
    public static float invLerp(float a, float b, float v) { return (v - a) / (b - a); }

    /** remap v from [a0,b0] to [a1,b1] (clamped). */
    public static float remap(float v, float a0, float b0, float a1, float b1) {
        return lerp(a1, b1, clamp01(invLerp(a0, b0, v)));
    }

    public static float smoothstep(float edge0, float edge1, float x) {
        float t = clamp01((x - edge0) / (edge1 - edge0));
        return t * t * (3f - 2f * t);
    }

    /** frame-rate independent exponential approach (Freya-style damp). */
    public static float damp(float from, float to, float lambda, float dt) {
        return lerp(from, to, 1f - (float) Math.exp(-lambda * dt));
    }

    public static float min(float a, float b) { return a < b ? a : b; }

    public static float max(float a, float b) { return a > b ? a : b; }

    public static float abs(float v) { return v < 0 ? -v : v; }

    public static float sign(float v) { return v < 0 ? -1f : (v > 0 ? 1f : 0f); }

    public static float dist(float x0, float y0, float x1, float y1) {
        float dx = x1 - x0, dy = y1 - y0;
        return (float) Math.sqrt(dx * dx + dy * dy);
    }

    public static float dist2(float x0, float y0, float x1, float y1) {
        float dx = x1 - x0, dy = y1 - y0;
        return dx * dx + dy * dy;
    }

    public static float angleTo(float x0, float y0, float x1, float y1) {
        return (float) Math.atan2(y1 - y0, x1 - x0);
    }

    /** shortest signed delta between two angles (-PI..PI). */
    public static float angleDelta(float from, float to) {
        float d = (to - from) % TAU;
        if (d > PI) d -= TAU;
        if (d < -PI) d += TAU;
        return d;
    }

    /** move current angle toward target by at most maxStep radians (shortest way). */
    public static float rotateToward(float from, float to, float maxStep) {
        float d = angleDelta(from, to);
        if (d > maxStep) d = maxStep;
        if (d < -maxStep) d = -maxStep;
        return from + d;
    }

    public static int floor(float v) {
        int i = (int) v;
        return v < i ? i - 1 : i;
    }

    public static float fract(float v) { return v - floor(v); }

    public static float pingPong(float t, float len) {
        float l = repeat(t, 2f * len);
        return l > len ? 2f * len - l : l;
    }

    public static float repeat(float t, float len) {
        float l = t % len;
        return l < 0 ? l + len : l;
    }
}
