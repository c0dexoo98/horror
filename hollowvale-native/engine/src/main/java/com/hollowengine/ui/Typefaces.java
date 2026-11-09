package com.hollowengine.ui;

import android.content.Context;
import android.graphics.Typeface;

import java.util.HashMap;

/**
 * HollowEngine — Typeface cache. Loads TTFs from assets/fonts/<name>.ttf once
 * and reuses them; wrong paths degrade to the system default instead of crashing.
 */
public final class Typefaces {
    private static final HashMap<String, Typeface> CACHE = new HashMap<String, Typeface>();

    private Typefaces() { }

    public static Typeface get(Context c, String name) {
        Typeface t = CACHE.get(name);
        if (t == null) {
            try {
                t = Typeface.createFromAsset(c.getAssets(), "fonts/" + name + ".ttf");
            } catch (Throwable e) {
                t = Typeface.DEFAULT;
            }
            CACHE.put(name, t);
        }
        return t;
    }

    /** custom font from any asset path (null → DEFAULT). */
    public static Typeface fromPath(Context c, String assetPath) {
        try {
            return Typeface.createFromAsset(c.getAssets(), assetPath);
        } catch (Throwable t) {
            return Typeface.DEFAULT;
        }
    }

    public static void clear() { CACHE.clear(); }
}
