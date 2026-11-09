package ir.hollowvale.app;

import android.content.Context;

import com.hollowengine.assets.Assets;

/** HOLLOW VALE v6 — raw text facade over engine Assets (shader sources). */
public final class Raw {
    public static String read(Context c, int resId) {
        return Assets.readText(c, resId, "void main(){}");
    }

    private Raw() { }
}
