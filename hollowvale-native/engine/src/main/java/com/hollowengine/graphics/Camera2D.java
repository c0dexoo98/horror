package com.hollowengine.graphics;

import com.hollowengine.math.MathX;

/** HollowEngine — 2D camera: position, zoom, rotation, screen<->world transforms. */
public class Camera2D {
    public float x, y;          // world center
    public float zoom = 1f;
    public float rotation;      // radians
    public float shakeAmp;      // decaying screen shake
    private float shakeX, shakeY;
    private float seed = 0.31f;

    public void update(float dt) {
        if (shakeAmp > 0.001f) {
            float t = (System.nanoTime() / 100000000f) + seed * 91f;
            shakeX = shakeAmp * (float) Math.sin(t * 7.1);
            shakeY = shakeAmp * (float) Math.cos(t * 8.3);
            shakeAmp *= (float) Math.exp(-6f * dt);
        } else {
            shakeX = shakeY = 0;
        }
    }

    public void shake(float amplitude) {
        shakeAmp = Math.max(shakeAmp, amplitude);
    }

    /** world→screen (for HUD anchoring). */
    public float toScreenX(float wx, float viewW) { return (wx - x) * zoom + viewW * 0.5f + shakeX; }

    public float toScreenY(float wy, float viewH) { return (wy - y) * zoom + viewH * 0.5f + shakeY; }

    /** screen→world (picking/touch). */
    public float toWorldX(float sx, float viewW) { return (sx - viewW * 0.5f - shakeX) / zoom + x; }

    public float toWorldY(float sy, float viewH) { return (sy - viewH * 0.5f - shakeY) / zoom + y; }

    /** smooth follow of a target point. */
    public void follow(float tx, float ty, float lambda, float dt) {
        x = MathX.damp(x, tx, lambda, dt);
        y = MathX.damp(y, ty, lambda, dt);
    }
}
