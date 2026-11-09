package com.hollowengine.input;

/**
 * HollowEngine — per-frame input snapshot (virtual pad semantics).
 * Continuous axes + edge-triggered actions; the host fills it from touch events
 * and a game loop consumes + clears it each tick. Thread-safe by synchronized copy.
 */
public class InputFrame {
    public float moveX, moveY;       // -1..1 analog stick
    public float lookDX, lookDY;     // relative look delta (radians or px)
    public boolean run, crouch;
    public boolean interactPressed, attackPressed, gunPressed, cameraPressed;
    public boolean lightToggled;
    public boolean mashingTaps;      // rapid-tap detection (QTE / struggle)

    /** clear only the edge-triggered inputs (call after each game tick). */
    public synchronized void consumeEdges() {
        interactPressed = false;
        attackPressed = false;
        gunPressed = false;
        cameraPressed = false;
        lightToggled = false;
        mashingTaps = false;
        lookDX = 0;
        lookDY = 0;
    }

    /** clear everything (mode switches, pauses). */
    public synchronized void clear() {
        moveX = moveY = 0;
        consumeEdges();
        run = crouch = false;
    }

    /** copy the current state into another frame (for tick-thread consumption). */
    public synchronized void copyInto(InputFrame o) {
        o.moveX = moveX;
        o.moveY = moveY;
        o.lookDX = lookDX;
        o.lookDY = lookDY;
        o.run = run;
        o.crouch = crouch;
        o.interactPressed = interactPressed;
        o.attackPressed = attackPressed;
        o.gunPressed = gunPressed;
        o.cameraPressed = cameraPressed;
        o.lightToggled = lightToggled;
        o.mashingTaps = mashingTaps;
    }
}
