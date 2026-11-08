package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.List;

/** HOLLOW VALE v4 — quest/objective tracking with checkmarks. */
public final class Quests {
    /** per quest: 0 locked, 1 active, 2 done */
    public final int[] state = new int[Str.QUEST_TITLES.length];

    public Quests() {
        state[0] = 1;
        for (int i = 1; i < state.length; i++) state[i] = 0;
    }

    public void activate(int id) {
        if (id >= 0 && id < state.length && state[id] == 0) {
            state[id] = 1;
        }
    }

    public void complete(int id) {
        if (id >= 0 && id < state.length) state[id] = 2;
    }

    public boolean isDone(int id) { return state[id] == 2; }

    public boolean isActive(int id) { return state[id] == 1; }

    /** first active quest id, or -1. */
    public int firstActive() {
        for (int i = 0; i < state.length; i++) if (state[i] == 1) return i;
        return -1;
    }

    public List<Integer> activeIds() {
        List<Integer> r = new ArrayList<Integer>();
        for (int i = 0; i < state.length; i++) if (state[i] == 1) r.add(i);
        return r;
    }

    public int doneCount() {
        int c = 0;
        for (int s : state) if (s == 2) c++;
        return c;
    }
}
