package ir.hollowvale.app;

import android.content.Context;

import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;

import ir.hollowvale.game.GameConfig;

/** HOLLOW VALE v4 — file IO for save slots, settings, achievements. */
public final class SaveIO {

    public static File dir(Context c) {
        File f = new File(c.getFilesDir(), "saves");
        if (!f.exists()) f.mkdirs();
        return f;
    }

    public static File file(Context c, String name) {
        return new File(dir(c), name);
    }

    public static boolean write(Context c, String name, String data) {
        try {
            FileOutputStream fo = new FileOutputStream(file(c, name));
            fo.write(data.getBytes(StandardCharsets.UTF_8));
            fo.close();
            return true;
        } catch (Throwable t) {
            return false;
        }
    }

    public static String read(Context c, String name) {
        try {
            File f = file(c, name);
            if (!f.exists()) return null;
            FileInputStream fi = new FileInputStream(f);
            byte[] b = new byte[(int) f.length()];
            fi.read(b);
            fi.close();
            return new String(b, StandardCharsets.UTF_8);
        } catch (Throwable t) {
            return null;
        }
    }

    public static boolean exists(Context c, String name) {
        return file(c, name).exists() && file(c, name).length() > 10;
    }

    public static boolean delete(Context c, String name) {
        return file(c, name).delete();
    }

    /** meta of a save: playtime/chapter/notes for the menu. */
    public static String meta(Context c, String name) {
        String s = read(c, name);
        if (s == null) return null;
        try {
            JSONObject o = new JSONObject(s);
            JSONObject p = o.optJSONObject("p");
            double x = p == null ? 0 : p.optDouble("x", 0);
            double y = p == null ? 0 : p.optDouble("y", 0);
            double pt = o.optDouble("pt", 0);
            double deaths = o.optDouble("deaths", 0);
            org.json.JSONArray qs = o.optJSONArray("quests");
            int done = 0;
            if (qs != null) for (int i = 0; i < qs.length(); i++) if (qs.optDouble(i, 0) == 2) done++;
            // coarse location label
            String loc;
            if (y <= 16.5) loc = "عمارت";
            else if (y <= 25) loc = "حیاط و جنگل";
            else if (x >= 26 && y >= 26) loc = "خانهٔ شرقی";
            else loc = "دهکده";
            long mins = (long) (pt / 60);
            return loc + " • " + mins + " دقیقه • " + (int) deaths + " مرگ • " + done + "/۷ هدف";
        } catch (Throwable t) {
            return null;
        }
    }

    // ---------------- settings ----------------
    public static void saveConfig(Context c, GameConfig cfg) {
        write(c, "settings.json", cfg.serialize());
    }

    public static GameConfig loadConfig(Context c) {
        GameConfig cfg = new GameConfig();
        String s = read(c, "settings.json");
        if (s != null) cfg.deserialize(s);
        return cfg;
    }

    // ---------------- achievements ----------------
    public static boolean[] loadAch(Context c) {
        boolean[] u = new boolean[ir.hollowvale.game.Str.ACH_COUNT];
        String s = read(c, "ach.json");
        if (s != null) {
            try {
                org.json.JSONArray a = new org.json.JSONArray(s);
                for (int i = 0; i < a.length() && i < u.length; i++) u[i] = a.getBoolean(i);
            } catch (Throwable ignored) {
            }
        }
        return u;
    }

    public static void saveAch(Context c, boolean[] u) {
        StringBuilder b = new StringBuilder("[");
        for (int i = 0; i < u.length; i++) {
            if (i > 0) b.append(",");
            b.append(u[i]);
        }
        b.append("]");
        write(c, "ach.json", b.toString());
    }

    // ---------------- stats ----------------
    public static int loadDeaths(Context c) {
        String s = read(c, "stats.json");
        if (s == null) return 0;
        try {
            return new JSONObject(s).optInt("deaths", 0);
        } catch (Throwable t) {
            return 0;
        }
    }

    public static void saveDeaths(Context c, int d) {
        try {
            JSONObject o = new JSONObject();
            o.put("deaths", d);
            write(c, "stats.json", o.toString());
        } catch (Throwable ignored) {
        }
    }

    private SaveIO() { }
}
