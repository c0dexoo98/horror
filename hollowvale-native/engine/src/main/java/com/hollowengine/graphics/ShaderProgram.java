package com.hollowengine.graphics;

import android.opengl.GLES20;

import java.nio.FloatBuffer;
import java.util.HashMap;

/**
 * HollowEngine — compiled GLSL program with cached uniform locations and
 * crash-free setters. Uniform names are looked up once and reused every frame.
 */
public final class ShaderProgram {
    public final int id;
    private final String tag;
    private final HashMap<String, Integer> locs = new HashMap<String, Integer>();
    private boolean valid = true;

    public ShaderProgram(String vertSrc, String fragSrc, String tag) {
        this.tag = tag;
        int v = 0, f = 0;
        try {
            v = Gfx.compileShader(GLES20.GL_VERTEX_SHADER, vertSrc, tag + ".vert");
            f = Gfx.compileShader(GLES20.GL_FRAGMENT_SHADER, fragSrc, tag + ".frag");
            this.id = Gfx.linkProgram(v, f, tag);
        } catch (Throwable t) {
            // id must be assigned: rethrow through a failure state
            throw new RuntimeException(t);
        } finally {
            // shaders can be flagged for deletion once linked
            if (v != 0) GLES20.glDeleteShader(v);
            if (f != 0) GLES20.glDeleteShader(f);
        }
    }

    public boolean isValid() { return valid; }

    public void bind() {
        if (valid) GLES20.glUseProgram(id);
    }

    public void release() {
        if (valid) {
            Gfx.deleteProgram(id);
            valid = false;
        }
    }

    public int attrib(String name) {
        return GLES20.glGetAttribLocation(id, name);
    }

    public int loc(String name) {
        Integer l = locs.get(name);
        if (l == null) {
            l = GLES20.glGetUniformLocation(id, name);
            locs.put(name, l);
        }
        return l;
    }

    // ---- setters (all safe no-ops when the uniform doesn't exist, location -1) ----

    public void set(String name, int v) {
        int l = loc(name);
        if (l >= 0) GLES20.glUniform1i(l, v);
    }

    public void set(String name, float v) {
        int l = loc(name);
        if (l >= 0) GLES20.glUniform1f(l, v);
    }

    public void set(String name, float a, float b) {
        int l = loc(name);
        if (l >= 0) GLES20.glUniform2f(l, a, b);
    }

    public void set(String name, float a, float b, float c) {
        int l = loc(name);
        if (l >= 0) GLES20.glUniform3f(l, a, b, c);
    }

    public void set(String name, float a, float b, float c, float d) {
        int l = loc(name);
        if (l >= 0) GLES20.glUniform4f(l, a, b, c, d);
    }

    public void setVec3Array(String name, FloatBuffer data, int count) {
        int l = loc(name);
        if (l >= 0) {
            data.position(0);
            GLES20.glUniform3fv(l, count, data);
        }
    }

    public void setVec4Array(String name, FloatBuffer data, int count) {
        int l = loc(name);
        if (l >= 0) {
            data.position(0);
            GLES20.glUniform4fv(l, count, data);
        }
    }

    @Override
    public String toString() { return "ShaderProgram(" + tag + ")"; }
}
