package com.hollowengine.assets;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * HollowEngine — asset reading: raw resource text/binary, asset files, bitmaps.
 * Every method returns null / fallback instead of throwing, so hosts can degrade.
 */
public final class Assets {
    private Assets() { }

    /** read a raw resource as UTF-8 text; fallback returned when missing. */
    public static String readText(Context c, int resId, String fallback) {
        try {
            InputStream in = c.getResources().openRawResource(resId);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] b = new byte[4096];
            int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            in.close();
            return new String(out.toByteArray(), StandardCharsets.UTF_8);
        } catch (Throwable t) {
            return fallback;
        }
    }

    /** read a file from assets/ as UTF-8 text (null when missing). */
    public static String readAssetText(Context c, String path) {
        try {
            InputStream in = c.getAssets().open(path);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] b = new byte[4096];
            int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            in.close();
            return new String(out.toByteArray(), StandardCharsets.UTF_8);
        } catch (Throwable t) {
            return null;
        }
    }

    /** decode a bitmap from res/drawable by generated R id (null on failure). */
    public static Bitmap bitmap(Context c, int resId) {
        try {
            return BitmapFactory.decodeResource(c.getResources(), resId);
        } catch (Throwable t) {
            return null;
        }
    }

    /** decode a bitmap from assets/ (null on failure). */
    public static Bitmap assetBitmap(Context c, String path) {
        try {
            InputStream in = c.getAssets().open(path);
            Bitmap b = BitmapFactory.decodeStream(in);
            in.close();
            return b;
        } catch (Throwable t) {
            return null;
        }
    }

    /** raw resource binary (null on failure). */
    public static byte[] readBytes(Context c, int resId) {
        try {
            InputStream in = c.getResources().openRawResource(resId);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] b = new byte[4096];
            int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            in.close();
            return out.toByteArray();
        } catch (Throwable t) {
            return null;
        }
    }
}
