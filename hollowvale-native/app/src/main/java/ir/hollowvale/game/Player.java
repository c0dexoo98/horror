package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.List;

/** HOLLOW VALE v4 — player state + movement/needs. */
public final class Player {
    public float x, y;          // position (tiles)
    public float dir;           // radians, 0 = +x
    public float pitch;         // -0.6..0.6
    public float bob;           // head bob phase
    public float bobAmt;        // smoothed bob intensity

    public float health = 100;
    public float sanity = 100;
    public float stamina = 100;
    public float battery = 100;
    public boolean bleeding = false;
    public boolean flashlight = false;

    public final List<Integer> inv = new ArrayList<Integer>(); // item types, max 8
    public int coins = 0;
    public boolean hasAxe, hasRevolver;
    public int ammo = 0;       // loaded
    public int film = 0;
    public int talismans = 0;

    public float hurtCd = 0;   // invulnerability window
    public float stepDist = 0; // accumulated distance for footstep sounds
    public boolean crouching = false;
    public float noise;        // current noise radius (tiles)

    public static final int INV_MAX = 8;

    public void give(int item) {
        switch (item) {
            case World.IT_COIN: coins++; return;
            case World.IT_AXE: hasAxe = true; return;
            case World.IT_REVOLVER: hasRevolver = true; return;
            case World.IT_TALISMAN: talismans++; return;
            case World.IT_FILM: film += 4; return;
            case World.IT_AMMO: ammo += 4; return;
            default: inv.add(item);
        }
    }

    public boolean hasItem(int type) {
        for (int i : inv) if (i == type) return true;
        return false;
    }

    public boolean consume(int type) {
        Integer rem = null;
        for (int i : inv) if (i == type) { rem = i; break; }
        return rem != null && inv.remove(rem);
    }

    public boolean invFull() { return inv.size() >= INV_MAX; }

    public float moveSpeed(World w) {
        if (crouching) return 1.15f;
        return 2.2f;
    }

    public void hurt(float dmg, World w) {
        if (hurtCd > 0) return;
        health -= dmg;
        hurtCd = 0.9f;
        w.damageFlash = 1f;
        w.snd("hurt_player");
        if (dmg >= 18f && !bleeding) {
            bleeding = true;
            w.toast("خون‌ریزی! از بانداژ استفاده کن");
        }
        if (health <= 0) {
            health = 0;
            w.onPlayerDeath();
        }
    }

    public void heal(float v) {
        health = Math.min(100, health + v);
    }
}
