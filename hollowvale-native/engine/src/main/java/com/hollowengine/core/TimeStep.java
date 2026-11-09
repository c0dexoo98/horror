package com.hollowengine.core;

/**
 * HollowEngine — fixed-timestep accumulator.
 * The classic "update at fixed Hz, render every frame" pattern used by serious engines:
 *   loop: acc += frameDt; while (acc >= step) { update(step); acc -= step; }
 */
public final class TimeStep {
    private final float step;
    private final int maxCatchUp;
    private float acc;
    private float alpha;   // leftover/step — interpolation factor for rendering

    public TimeStep(float stepHz, int maxCatchUpSteps) {
        this.step = 1f / stepHz;
        this.maxCatchUp = Math.max(1, maxCatchUpSteps);
    }

    /** Feed the real frame delta; returns how many fixed updates to run this frame. */
    public int advance(float frameDt) {
        acc += Math.min(frameDt, step * maxCatchUp);
        int n = 0;
        while (acc >= step && n < maxCatchUp) {
            acc -= step;
            n++;
        }
        if (n == maxCatchUp) acc = 0; // drop the backlog, never spiral
        alpha = acc / step;
        return n;
    }

    public float step() { return step; }

    /** interpolation alpha between previous and current update state (0..1). */
    public float alpha() { return alpha; }

    public void reset() { acc = 0; alpha = 0; }
}
