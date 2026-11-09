package com.hollowengine.graphics;

import android.opengl.GLES20;

import java.nio.FloatBuffer;
import java.util.ArrayList;
import java.util.List;

/**
 * HollowEngine — batched quad renderer (GLES2).
 * Collects textured quads (sprites, billboards, particles) into one dynamic
 * vertex buffer and flushes with a single glDrawArrays per texture — the same
 * batching philosophy modern 2D engines use.
 *
 * Vertex layout (interleaved): x y u v r g b a  → 8 floats per vertex, 4 per quad.
 */
public final class SpriteBatch {
    public static final int FLOATS_PER_VERTEX = 8;
    public static final int VERTICES_PER_QUAD = 4;
    public static final int FLOATS_PER_QUAD = FLOATS_PER_VERTEX * VERTICES_PER_QUAD;

    private final int maxQuads;
    private final FloatBuffer vertices;
    private final ShaderProgram prog;
    private final String posAttr, uvAttr, colAttr;
    private int count = 0;          // quads currently buffered
    private Texture bound;
    private int viewW = 1, viewH = 1;   // ortho size for the internal camera

    public SpriteBatch(int maxQuads, ShaderProgram prog, String posAttr, String uvAttr, String colAttr) {
        this.maxQuads = maxQuads;
        this.vertices = Gfx.floatBuffer(maxQuads * FLOATS_PER_QUAD);
        this.prog = prog;
        this.posAttr = posAttr;
        this.uvAttr = uvAttr;
        this.colAttr = colAttr;
    }

    public void setViewport(int w, int h) {
        this.viewW = Math.max(1, w);
        this.viewH = Math.max(1, h);
    }

    public void begin() {
        count = 0;
        bound = null;
        prog.bind();
        // pixel ortho: (0,0) top-left
        GLES20.glUniform2f(prog.loc("uView"), viewW, viewH);
    }

    /** queue one quad (x,y = top-left in px; u,v = texture rect in 0..1). */
    public void draw(Texture tex, float x, float y, float w, float h,
                     float u0, float v0, float u1, float v1,
                     float r, float g, float b, float a) {
        if (count >= maxQuads) flush();
        if (bound != null && bound.id != tex.id) flush();
        bound = tex;
        if (count + 1 > maxQuads) return;
        int o = count * FLOATS_PER_QUAD;
        // quad as triangle strip: TL, TR, BL, BR
        put(o, x, y, u0, v0, r, g, b, a);
        put(o + 8, x + w, y, u1, v0, r, g, b, a);
        put(o + 16, x, y + h, u0, v1, r, g, b, a);
        put(o + 24, x + w, y + h, u1, v1, r, g, b, a);
        count++;
    }

    public void draw(Texture tex, float x, float y, float w, float h) {
        draw(tex, x, y, w, h, 0, 0, 1, 1, 1, 1, 1, 1);
    }

    private void put(int base, float x, float y, float u, float v,
                     float r, float g, float b, float a) {
        vertices.put(base, x);
        vertices.put(base + 1, y);
        vertices.put(base + 2, u);
        vertices.put(base + 3, v);
        vertices.put(base + 4, r);
        vertices.put(base + 5, g);
        vertices.put(base + 6, b);
        vertices.put(base + 7, a);
    }

    /** upload + draw everything buffered so far. */
    public void flush() {
        if (count == 0 || bound == null) {
            count = 0;
            return;
        }
        bound.bind(0);
        int lp = prog.attrib(posAttr);
        int lu = prog.attrib(uvAttr);
        int lc = prog.attrib(colAttr);
        vertices.position(0);
        vertices.limit(count * FLOATS_PER_QUAD);
        if (lp >= 0) {
            GLES20.glEnableVertexAttribArray(lp);
            GLES20.glVertexAttribPointer(lp, 2, GLES20.GL_FLOAT, false, FLOATS_PER_VERTEX * 4, vertices);
        }
        if (lu >= 0) {
            GLES20.glEnableVertexAttribArray(lu);
            vertices.position(2);
            GLES20.glVertexAttribPointer(lu, 2, GLES20.GL_FLOAT, false, FLOATS_PER_VERTEX * 4, vertices);
        }
        if (lc >= 0) {
            GLES20.glEnableVertexAttribArray(lc);
            vertices.position(4);
            GLES20.glVertexAttribPointer(lc, 4, GLES20.GL_FLOAT, false, FLOATS_PER_VERTEX * 4, vertices);
        }
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP, 0, count * VERTICES_PER_QUAD);
        if (lp >= 0) GLES20.glDisableVertexAttribArray(lp);
        if (lu >= 0) GLES20.glDisableVertexAttribArray(lu);
        if (lc >= 0) GLES20.glDisableVertexAttribArray(lc);
        vertices.limit(vertices.capacity());
        count = 0;
    }

    public void end() {
        flush();
    }

    /** default built-in shader for the batch (white modulated by vertex color). */
    public static ShaderProgram defaultShader() {
        String vs = "attribute vec2 aPos;\n" +
                "attribute vec2 aUV;\n" +
                "attribute vec4 aCol;\n" +
                "uniform vec2 uView;\n" +
                "varying vec2 vUV;\n" +
                "varying vec4 vCol;\n" +
                "void main() {" +
                "  vec2 px = vec2(aPos.x / uView.x * 2.0 - 1.0, 1.0 - aPos.y / uView.y * 2.0);" +
                "  gl_Position = vec4(px, 0.0, 1.0);" +
                "  vUV = aUV; vCol = aCol;" +
                "}";
        String fs = "precision mediump float;\n" +
                "varying vec2 vUV;\n" +
                "varying vec4 vCol;\n" +
                "uniform sampler2D uTex;\n" +
                "void main() {" +
                "  gl_FragColor = texture2D(uTex, vUV) * vCol;" +
                "}";
        return new ShaderProgram(vs, fs, "SpriteBatch");
    }

    /** simple freelist of quads for callers building dynamic lists per frame. */
    public static final class Quad {
        public float x, y, w, h, u0, v0, u1, v1, r, g, b, a;
        public static final List<Quad> POOL = new ArrayList<Quad>();

        public static Quad obtain() {
            if (!POOL.isEmpty()) return POOL.remove(POOL.size() - 1);
            return new Quad();
        }

        public void free() {
            POOL.add(this);
        }
    }
}
