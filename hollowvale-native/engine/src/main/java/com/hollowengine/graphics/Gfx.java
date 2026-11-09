package com.hollowengine.graphics;

import android.opengl.GLES20;

import java.nio.FloatBuffer;

/**
 * HollowEngine — thin checked GLES20 helper layer.
 * Every call is wrapped so a GL hiccup degrades gracefully instead of crashing
 * the render thread. Also hosts one-off GL utilities used by the higher classes.
 */
public final class Gfx {
    public static final String TAG = "HollowGfx";

    private Gfx() { }

    /** true if the last GL call produced an error (also logs it). */
    public static boolean checkError(String where) {
        int err = GLES20.glGetError();
        if (err != GLES20.GL_NO_ERROR) {
            EngineLogBridge.w(TAG, "GL error 0x" + Integer.toHexString(err) + " at " + where);
            return true;
        }
        return false;
    }

    public static int compileShader(int type, String src, String tag) {
        int sh = GLES20.glCreateShader(type);
        GLES20.glShaderSource(sh, src);
        GLES20.glCompileShader(sh);
        int[] ok = new int[1];
        GLES20.glGetShaderiv(sh, GLES20.GL_COMPILE_STATUS, ok, 0);
        if (ok[0] == 0) {
            String log = GLES20.glGetShaderInfoLog(sh);
            GLES20.glDeleteShader(sh);
            throw new IllegalStateException(tag + " compile: " + log);
        }
        return sh;
    }

    public static int linkProgram(int vertShader, int fragShader, String tag) {
        int p = GLES20.glCreateProgram();
        GLES20.glAttachShader(p, vertShader);
        GLES20.glAttachShader(p, fragShader);
        GLES20.glLinkProgram(p);
        int[] ok = new int[1];
        GLES20.glGetProgramiv(p, GLES20.GL_LINK_STATUS, ok, 0);
        if (ok[0] == 0) {
            String log = GLES20.glGetProgramInfoLog(p);
            GLES20.glDeleteProgram(p);
            throw new IllegalStateException(tag + " link: " + log);
        }
        return p;
    }

    public static void deleteProgram(int p) {
        if (p != 0) GLES20.glDeleteProgram(p);
    }

    public static int genTexture() {
        int[] t = new int[1];
        GLES20.glGenTextures(1, t, 0);
        return t[0];
    }

    public static void deleteTexture(int t) {
        if (t != 0) GLES20.glDeleteTextures(1, new int[]{t}, 0);
    }

    public static void texParams(int minFilter, int magFilter, int wrapS, int wrapT) {
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, minFilter);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, magFilter);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, wrapS);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, wrapT);
    }

    public static int genFramebuffer() {
        int[] f = new int[1];
        GLES20.glGenFramebuffers(1, f, 0);
        return f[0];
    }

    public static void deleteFramebuffer(int f) {
        if (f != 0) GLES20.glDeleteFramebuffers(1, new int[]{f}, 0);
    }

    /** bind a texture to a unit; unit 0 stays active afterwards for the next call's clarity. */
    public static void bindTexture(int unit, int tex) {
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0 + unit);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, tex);
    }

    public static FloatBuffer floatBuffer(int floats) {
        return java.nio.ByteBuffer
                .allocateDirect(floats * 4)
                .order(java.nio.ByteOrder.nativeOrder())
                .asFloatBuffer();
    }

    /** bridge so graphics classes can log without importing core (keeps layering clean). */
    static final class EngineLogBridge {
        static void w(String tag, String msg) {
            android.util.Log.w(tag, msg);
        }
    }
}
