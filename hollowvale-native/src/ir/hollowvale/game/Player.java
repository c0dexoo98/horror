package ir.hollowvale.game;

/** Player: movement with sliding collision, stamina, battery, fear, view bob. */
public final class Player {
    public double x, y, ang;
    public boolean lightOn = true, sneaking = false, running = false;
    public double battery = 100, stamina = 100, health = 100, fear = 0;
    public double bob; // view-bob phase

    private double staminaDelay = 0;

    public Player(double x, double y, double ang) {
        this.x = x; this.y = y; this.ang = ang;
    }

    public boolean moving() { return lastMoved > 0.0005; }
    private double lastMoved;

    public double noiseRadius() {
        if (lastMoved <= 0.0005) return 0;
        if (sneaking) return 1.6;
        if (running) return 13;
        return 7;
    }

    public void update(double dt, Map map, Ctrl c) {
        ang += c.lookDX;
        while (ang > Math.PI) ang -= 2 * Math.PI;
        while (ang < -Math.PI) ang += 2 * Math.PI;

        double f = c.fwd, s = c.strafe;
        double mx = Math.cos(ang) * f - Math.sin(ang) * s;
        double my = Math.sin(ang) * f + Math.cos(ang) * s;
        double ml = Math.sqrt(mx * mx + my * my);
        double mag = Math.min(1, ml);
        if (ml > 1) { mx /= ml; my /= ml; }

        boolean wantRun = c.run && !sneaking && mag > 0.55;
        running = wantRun && stamina > 1;
        double speed = sneaking ? 1.35 : running ? 4.2 : 2.5;
        if (mag < 0.02) { running = false; lastMoved = 0; }

        double vx = mx * speed * dt * mag, vy = my * speed * dt * mag;
        double ox = x, oy = y;
        if (vx != 0 && !map.circleBlocked(x + vx, y, 0.22)) x += vx;
        if (vy != 0 && !map.circleBlocked(x, y + vy, 0.22)) y += vy;
        lastMoved = Math.sqrt((x - ox) * (x - ox) + (y - oy) * (y - oy));

        if (lastMoved > 0.001) bob += dt * (running ? 12 : sneaking ? 4.5 : 7.5) * Math.min(1, mag + 0.3);

        if (running && lastMoved > 0.001) {
            stamina = Math.max(0, stamina - 20 * dt);
            staminaDelay = 0.7;
        } else {
            staminaDelay -= dt;
            if (staminaDelay <= 0) stamina = Math.min(100, stamina + 13 * dt);
        }

        if (lightOn) {
            battery = Math.max(0, battery - 0.5 * dt);
            if (battery <= 0) lightOn = false;
        }
    }
}
