package com.hollowengine.math;

/** HollowEngine — seeded RNG with game-friendly helpers (wraps java.util.Random). */
public final class Rng {
    private final java.util.Random r;
    private long seed;

    public Rng() { this((long) (System.nanoTime() ^ 0x5DEECE66DL)); }

    public Rng(long seed) {
        this.seed = seed;
        r = new java.util.Random(seed);
    }

    public long seed() { return seed; }

    public void setSeed(long s) { seed = s; r.setSeed(s); }

    public float next() { return r.nextFloat(); }

    /** uniform in [min,max) — float rounding can't leak the max value. */
    public float range(float min, float max) {
        float v = min + r.nextFloat() * (max - min);
        return v >= max ? Math.nextDown(max) : v;
    }

    public int range(int min, int maxInclusive) {
        return min + r.nextInt(maxInclusive - min + 1);
    }

    public boolean chance(float p) { return r.nextFloat() < p; }

    public boolean flip() { return r.nextBoolean(); }

    /** jittered ±amount around 1 (for sound pitch variation etc.). */
    public float jitter(float amount) { return 1f + (r.nextFloat() * 2f - 1f) * amount; }

    /** ±offset around base. */
    public float around(float base, float offset) { return base + (r.nextFloat() * 2f - 1f) * offset; }

    public int nextInt(int bound) { return r.nextInt(bound); }

    public float angle() { return r.nextFloat() * MathX.TAU; }

    /** pick a random element; null-safe for empty arrays. */
    public <T> T pick(T[] arr) {
        if (arr == null || arr.length == 0) return null;
        return arr[r.nextInt(arr.length)];
    }
}
