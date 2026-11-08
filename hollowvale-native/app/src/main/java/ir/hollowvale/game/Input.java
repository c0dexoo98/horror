package ir.hollowvale.game;

/** HOLLOW VALE v4 — per-frame input state (filled by Android touch layer). */
public final class Input {
    public float moveX, moveY;      // -1..1 (strafe, forward)
    public float lookDX, lookDY;    // radians delta this frame
    public boolean run, crouch;
    public boolean interactPressed; // edge-triggered
    public boolean attackPressed;   // edge-triggered
    public boolean lightToggled;    // edge-triggered
    public boolean cameraPressed;   // edge-triggered (antique camera)
    public boolean gunPressed;      // edge-triggered (revolver)
    public boolean strugTaps;       // struggle mashing taps since last tick

    public void consumeEdges() {
        interactPressed = false;
        attackPressed = false;
        lightToggled = false;
        cameraPressed = false;
        gunPressed = false;
        strugTaps = false;
        lookDX = 0;
        lookDY = 0;
    }

    public void clear() {
        moveX = moveY = 0;
        consumeEdges();
        run = crouch = false;
    }
}
