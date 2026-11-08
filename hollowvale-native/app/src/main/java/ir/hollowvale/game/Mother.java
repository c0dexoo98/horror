package ir.hollowvale.game;

/** HOLLOW VALE v4 — "Mother": unkillable apparition; drains sanity when looked at. */
public final class Mother extends Ent {
    public static final int HIDDEN = 0, STALK = 1, FROZEN = 2, BANISHED = 3;

    public int state = HIDDEN;
    public float stateT = 0;
    public float frame = 0;
    public float life = 0;        // total stalk duration
    public float lookAccum = 0;   // how long the player has stared

    public Mother() {
        super(0, 0, 8, 1.5f);
        vOffset = -0.08f;
    }

    public void appear(World w, float x, float y) {
        if (state == BANISHED || state == STALK) return;
        this.x = x;
        this.y = y;
        state = STALK;
        stateT = 0;
        life = 0;
        lookAccum = 0;
        w.snd("stinger_ghost");
        w.snd("mother_hum");
    }

    public void banish(World w) {
        state = BANISHED;
        w.snd("enemy_die");
    }

    public void stunByPhoto(World w) {
        if (state == STALK) {
            state = FROZEN;
            stateT = 0;
            w.snd("camera_shutter");
            w.unlockAch(6);
        }
    }

    public void tick(World w, float dt) {
        if (state == HIDDEN || state == BANISHED) return;
        stateT += dt;
        Player p = w.player;

        if (state == FROZEN) {
            if (stateT > 5.5f) {
                state = STALK;
                stateT = 0;
            }
            return;
        }

        life += dt;
        frame += dt * 1.6f;
        tile = 8 + (((int) frame) % 2);

        // look-at drain
        float dx = x - p.x, dy = y - p.y;
        float dist = (float) Math.sqrt(dx * dx + dy * dy);
        boolean facingMe = false;
        if (dist < 8.5f && Raycast.los(w, p.x, p.y, x, y)) {
            float angTo = (float) Math.abs(angDiff((float) Math.atan2(dy, dx), p.dir));
            if (angTo < 0.7f) facingMe = true;
        }
        if (facingMe) {
            lookAccum += dt;
            p.sanity = Math.max(0, p.sanity - dt * 7f);
            if (lookAccum > 0.2f && lookAccum % 1f < dt) {
                w.snd("whisper_loop");
            }
        }

        // slow relentless approach
        float spd = 0.92f;
        if (dist > 0.6f) {
            float[] mv = Raycast.move(w, x, y, dx / dist * spd * dt, dy / dist * spd * dt, 0.3f);
            x = mv[0];
            y = mv[1];
        }

        // touch = death (no struggle against Mother... unless photo left)
        if (dist < 0.8f) {
            w.onPlayerDeath();
            return;
        }

        // give up if too far or too long
        if ((life > 30f && dist > 7f) || dist > 16f) {
            state = HIDDEN;
        }
    }

    public boolean threatening() { return state == STALK || state == FROZEN; }

    static float angDiff(float a, float b) {
        float d = a - b;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        return d;
    }
}
