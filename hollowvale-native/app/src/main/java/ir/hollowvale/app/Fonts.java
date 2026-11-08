package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Typeface;

import java.util.HashMap;

/** HOLLOW VALE v4 — font cache (Vazirmatn for fa, Cinzel for the title). */
public final class Fonts {
    private static final HashMap<String, Typeface> CACHE = new HashMap<String, Typeface>();

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

    public static Typeface vazir(Context c) { return get(c, "vazir"); }

    public static Typeface vazirBold(Context c) { return get(c, "vazir_bold"); }

    public static Typeface title(Context c) { return get(c, "cinzel"); }

    private Fonts() { }
}
