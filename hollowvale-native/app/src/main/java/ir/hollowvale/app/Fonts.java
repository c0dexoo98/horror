package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Typeface;

import com.hollowengine.ui.Typefaces;

/** HOLLOW VALE v6 — font facade over the engine Typeface cache (Vazirmatn for fa, Cinzel for the title). */
public final class Fonts {
    public static Typeface get(Context c, String name) {
        return Typefaces.get(c, name);
    }

    public static Typeface vazir(Context c) { return get(c, "vazir"); }

    public static Typeface vazirBold(Context c) { return get(c, "vazir_bold"); }

    public static Typeface title(Context c) { return get(c, "cinzel"); }

    private Fonts() { }
}
