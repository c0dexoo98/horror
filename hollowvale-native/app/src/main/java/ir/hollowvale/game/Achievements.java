package ir.hollowvale.game;

import java.util.HashSet;
import java.util.Set;

/** HOLLOW VALE v4 — achievement registry (logic only; persistence handled by app layer). */
public final class Achievements {
    public final boolean[] unlocked = new boolean[Str.ACH_COUNT];
    public final Set<Integer> pending = new HashSet<Integer>(); // newly unlocked, not yet shown

    /** load persisted unlocks (contents copied). */
    public void setAll(boolean[] u) {
        if (u == null) return;
        for (int i = 0; i < unlocked.length && i < u.length; i++) unlocked[i] = u[i];
    }

    public boolean unlock(int id) {
        if (id < 0 || id >= Str.ACH_COUNT || unlocked[id]) return false;
        unlocked[id] = true;
        pending.add(id);
        return true;
    }

    public void clearPending() { pending.clear(); }

    public int count() {
        int c = 0;
        for (boolean u : unlocked) if (u) c++;
        return c;
    }

    // ids (order matches Str.ACH_NAMES)
    public static final int A_FIRST_STEP = 0;
    public static final int A_ALL_NOTES = 1;
    public static final int A_IRON_KEY = 2;
    public static final int A_TALISMANS = 3;
    public static final int A_BACKSTAB = 4;
    public static final int A_GUN_KILL = 5;
    public static final int A_PHOTO_STUN = 6;
    public static final int A_NO_LIGHT = 7;
    public static final int A_COINS = 8;
    public static final int A_ALTAR = 9;
    public static final int A_END_ESCAPE = 10;
    public static final int A_END_BANISH = 11;
    public static final int A_END_MOTHER = 12;
    public static final int A_NO_DEATH = 13;
}
