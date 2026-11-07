package ir.hollowvale.game;

/** Objectives with green-check state for the task list. */
public final class Quests {
    public static final String[] TITLES = {
            "Read the note on the road",
            "Find the rusted key in the graveyard",
            "Unlock the church door",
            "Read the letter inside the church",
            "Collect the wax talismans (0/5)",
            "Perform the banishing ritual at the altar",
            "Escape through the south gate"
    };

    public final boolean[] done = new boolean[TITLES.length];
    public int talismans = 0;

    public int current() {
        for (int i = 0; i < done.length; i++) if (!done[i]) return i;
        return done.length - 1;
    }

    public void complete(int i) { done[i] = true; }

    public boolean allDone() {
        for (boolean b : done) if (!b) return false;
        return true;
    }

    public String title(int i) {
        if (i == 4) return "Collect the wax talismans (" + talismans + "/5)";
        return TITLES[i];
    }
}
