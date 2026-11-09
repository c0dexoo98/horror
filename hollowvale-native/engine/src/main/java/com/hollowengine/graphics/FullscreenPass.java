package com.hollowengine.graphics;

import android.opengl.GLES20;

import java.nio.FloatBuffer;

/**
 * HollowEngine — full-screen quad pass.
 * One shared unit-square vertex buffer + a draw call bound to a program's "aPos"
 * attribute. The standard way every screen-space effect (raycast scenes, post
 * processing, fades) is drawn in HollowEngine-based games.
 */
public final class FullscreenPass {
    private static FloatBuffer quad;
    private static FloatBuffer quadUV;

    private FullscreenPass() { }

    /** XY quad in clip space (-1..1), as a triangle strip. */
    public static FloatBuffer quad() {
        if (quad == null) {
            float[] q = {-1, -1, 1, -1, -1, 1, 1, 1};
            quad = Gfx.floatBuffer(8);
            quad.put(q).position(0);
        }
        return quad;
    }

    /** matching UVs (0..1). */
    public static FloatBuffer quadUV() {
        if (quadUV == null) {
            float[] q = {0, 0, 1, 0, 0, 1, 1, 1};
            quadUV = Gfx.floatBuffer(8);
            quadUV.put(q).position(0);
        }
        return quadUV;
    }

    /** draw the quad using program's aPos attribute. */
    public static void draw(ShaderProgram prog, String posAttr) {
        int loc = prog.attrib(posAttr);
        if (loc < 0) return;
        GLES20.glEnableVertexAttribArray(loc);
        quad().position(0);
        GLES20.glVertexAttribPointer(loc, 2, GLES20.GL_FLOAT, false, 8, quad());
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP, 0, 4);
        GLES20.glDisableVertexAttribArray(loc);
    }

    /** draw quad with both position and uv attributes. */
    public static void draw(ShaderProgram prog, String posAttr, String uvAttr) {
        int lp = prog.attrib(posAttr);
        int lu = prog.attrib(uvAttr);
        if (lp >= 0) {
            GLES20.glEnableVertexAttribArray(lp);
            quad().position(0);
            GLES20.glVertexAttribPointer(lp, 2, GLES20.GL_FLOAT, false, 8, quad());
        }
        if (lu >= 0) {
            GLES20.glEnableVertexAttribArray(lu);
            quadUV().position(0);
            GLES20.glVertexAttribPointer(lu, 2, GLES20.GL_FLOAT, false, 8, quadUV());
        }
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP, 0, 4);
        if (lp >= 0) GLES20.glDisableVertexAttribArray(lp);
        if (lu >= 0) GLES20.glDisableVertexAttribArray(lu);
    }

    /** clear helper. */
    public static void clear(float r, float g, float b, float a) {
        GLES20.glClearColor(r, g, b, a);
        GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT);
    }
}
