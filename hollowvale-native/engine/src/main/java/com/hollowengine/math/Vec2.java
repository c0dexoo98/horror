package com.hollowengine.math;

/** HollowEngine — minimal 2D vector (mutable, allocation-friendly for game loops). */
public class Vec2 {
    public float x, y;

    public Vec2() { }

    public Vec2(float x, float y) { this.x = x; this.y = y; }

    public Vec2 set(float x, float y) { this.x = x; this.y = y; return this; }

    public Vec2 set(Vec2 o) { this.x = o.x; this.y = o.y; return this; }

    public Vec2 add(float dx, float dy) { x += dx; y += dy; return this; }

    public Vec2 add(Vec2 o) { x += o.x; y += o.y; return this; }

    public Vec2 sub(Vec2 o) { x -= o.x; y -= o.y; return this; }

    public Vec2 scale(float s) { x *= s; y *= s; return this; }

    public float len() { return (float) Math.sqrt(x * x + y * y); }

    public float len2() { return x * x + y * y; }

    public Vec2 nor() {
        float l = len();
        if (l > 1e-8f) { x /= l; y /= l; }
        return this;
    }

    public float dot(Vec2 o) { return x * o.x + y * o.y; }

    public float cross(Vec2 o) { return x * o.y - y * o.x; }

    public float angle() { return (float) Math.atan2(y, x); }

    public Vec2 fromAngle(float rad, float len) {
        x = (float) Math.cos(rad) * len;
        y = (float) Math.sin(rad) * len;
        return this;
    }

    public Vec2 cpy() { return new Vec2(x, y); }

    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}
