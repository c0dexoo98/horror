package com.hollowengine.ui;

import java.text.Bidi;
import java.text.CharacterIterator;
import java.text.StringCharacterIterator;

/**
 * HollowEngine — RTL / Persian text helpers.
 * Android's Paint/TextView already shape Arabic-script text correctly, but code that
 * manipulates, measures, truncates, or mixes strings manually needs these utilities to
 * avoid the classic "reversed Persian text" bug.
 */
public final class Rtl {
    private Rtl() { }

    /** true if the string contains any Arabic-script letter (Persian/Arabic/Urdu ranges). */
    public static boolean hasArabicScript(String s) {
        if (s == null) return false;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if ((c >= 0x0600 && c <= 0x06FF)   // Arabic
                    || (c >= 0x0750 && c <= 0x077F)   // Arabic supplement
                    || (c >= 0xFB50 && c <= 0xFDFF)   // presentation forms A
                    || (c >= 0xFE70 && c <= 0xFEFF))  // presentation forms B
                return true;
        }
        return false;
    }

    /** base direction of a mixed string for custom layout code (1 = RTL, 0 = LTR). */
    public static int baseDirection(String s) {
        if (s == null || s.isEmpty()) return 0;
        byte dir = new Bidi(s, Bidi.DIRECTION_DEFAULT_LEFT_TO_RIGHT).baseIsLeftToRight()
                ? (byte) 0 : (byte) 1;
        return dir;
    }

    /** logical order (what you typed) — Android text views want this. No-op passthrough. */
    public static String logical(String s) { return s; }

    /**
     * display-order string for renderers that do NOT do bidi (custom glyph blitters).
     * Only use when you draw characters yourself; TextView/Canvas+Paint must NOT use this.
     */
    public static String visualOrder(String s) {
        if (s == null || !hasArabicScript(s)) return s;
        try {
            Bidi bidi = new Bidi(s, Bidi.DIRECTION_DEFAULT_LEFT_TO_RIGHT);
            if (bidi.isLeftToRight()) return s;
            StringBuilder out = new StringBuilder(s.length());
            CharacterIterator it = new StringCharacterIterator(s);
            // reorder per run
            int runCount = bidi.getRunCount();
            for (int r = runCount - 1; r >= 0; r--) {
                int start = bidi.getRunStart(r);
                int end = bidi.getRunLimit(r);
                boolean rtl = (bidi.getRunLevel(r) & 1) == 1;
                if (rtl) {
                    for (int i = end - 1; i >= start; i--) out.append(s.charAt(i));
                } else {
                    out.append(s, start, end);
                }
            }
            it.setIndex(0);
            return out.toString();
        } catch (Throwable t) {
            return s;
        }
    }

    /** strip zero-width joiners used in Persian typing (U+200C..U+200F, U+061C). */
    public static String stripInvisibles(String s) {
        if (s == null) return null;
        return s.replace("\u200C", "").replace("\u200D", "")
                .replace("\u200E", "").replace("\u200F", "")
                .replace("\u061C", "");
    }

    /** Persian digits (۰۱۲۳۴۵۶۷۸۹) from ASCII digits — for authentic Persian UI. */
    public static String toPersianDigits(String s) {
        if (s == null) return null;
        StringBuilder b = new StringBuilder(s.length());
        for (char c : s.toCharArray()) {
            if (c >= '0' && c <= '9') b.append((char) (0x06F0 + (c - '0')));
            else b.append(c);
        }
        return b.toString();
    }

    /** ASCII digits from Persian digits (the inverse). */
    public static String toAsciiDigits(String s) {
        if (s == null) return null;
        StringBuilder b = new StringBuilder(s.length());
        for (char c : s.toCharArray()) {
            if (c >= 0x06F0 && c <= 0x06F9) b.append((char) ('0' + (c - 0x06F0)));
            else if (c >= 0x0660 && c <= 0x0669) b.append((char) ('0' + (c - 0x0660)));
            else b.append(c);
        }
        return b.toString();
    }
}
