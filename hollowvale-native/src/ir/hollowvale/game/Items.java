package ir.hollowvale.game;

import java.util.ArrayList;

/** World items and graveyard decor definitions. */
public final class Items {
    public enum Type { BATTERY, KEY, TALISMAN, NOTE }

    public static final class Item {
        public Type type;
        public String id, label;
        public double x, y;
        public boolean taken;
    }

    private static void add(ArrayList<Item> L, Type t, String id, String label, int tx, int ty) {
        Item it = new Item();
        it.type = t; it.id = id; it.label = label;
        it.x = tx + 0.5; it.y = ty + 0.5;
        L.add(it);
    }

    public static ArrayList<Item> load() {
        ArrayList<Item> L = new ArrayList<>();
        int i = 0;
        for (int[] t : MapData.TALISMANS) add(L, Type.TALISMAN, "talisman" + (i++), "Wax talisman", t[0], t[1]);
        i = 0;
        for (int[] t : MapData.BATTERIES) add(L, Type.BATTERY, "battery" + (i++), "Battery", t[0], t[1]);
        add(L, Type.KEY, "key", "Rusted key", MapData.KEY[0], MapData.KEY[1]);
        add(L, Type.NOTE, "note_intro", "Note", MapData.NOTE_INTRO[0], MapData.NOTE_INTRO[1]);
        add(L, Type.NOTE, "note_ritual", "Old letter", MapData.NOTE_RITUAL[0], MapData.NOTE_RITUAL[1]);
        return L;
    }
}
