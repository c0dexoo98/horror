package com.hollowengine.core;

import android.util.Log;

/** HollowEngine — central logging facade (strips noise in release builds via level gate). */
public final class EngineLog {
    public static final int V = 0, D = 1, I = 2, W = 3, E = 4, NONE = 5;
    /** Global gate — set to I (or higher) in release builds. */
    public static int level = D;

    private EngineLog() { }

    public static void v(String tag, String msg) { if (level <= V) Log.v(tag, msg); }

    public static void d(String tag, String msg) { if (level <= D) Log.d(tag, msg); }

    public static void i(String tag, String msg) { if (level <= I) Log.i(tag, msg); }

    public static void w(String tag, String msg) { if (level <= W) Log.w(tag, msg); }

    public static void w(String tag, String msg, Throwable t) { if (level <= W) Log.w(tag, msg, t); }

    public static void e(String tag, String msg) { if (level <= E) Log.e(tag, msg); }

    public static void e(String tag, String msg, Throwable t) { if (level <= E) Log.e(tag, msg, t); }
}
