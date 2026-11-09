package com.hollowengine.graphics;

import android.opengl.GLES20;

/**
 * HollowEngine — offscreen render target (FBO + color texture).
 * Used for low-res render buffers, post-processing chains, mirrors, portals…
 */
public final class RenderTarget {
    public int fbo;
    public int tex;
    public int width, height;
    private boolean valid;

    public RenderTarget(int w, int h) {
        resize(w, h);
    }

    /** (re)create the target; deletes old resources first. Sizes are clamped ≥ 2px. */
    public void resize(int w, int h) {
        release();
        width = Math.max(2, w);
        height = Math.max(2, h);
        int[] t = new int[1];
        GLES20.glGenTextures(1, t, 0);
        tex = t[0];
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, tex);
        GLES20.glTexImage2D(GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGB, width, height, 0,
                GLES20.GL_RGB, GLES20.GL_UNSIGNED_BYTE, null);
        Gfx.texParams(GLES20.GL_NEAREST, GLES20.GL_NEAREST, GLES20.GL_CLAMP_TO_EDGE, GLES20.GL_CLAMP_TO_EDGE);
        int[] f = new int[1];
        GLES20.glGenFramebuffers(1, f, 0);
        fbo = f[0];
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fbo);
        GLES20.glFramebufferTexture2D(GLES20.GL_FRAMEBUFFER, GLES20.GL_COLOR_ATTACHMENT0,
                GLES20.GL_TEXTURE_2D, tex, 0);
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, 0);
        valid = Gfx.checkError("RenderTarget.resize") == false;
    }

    public void bind() {
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fbo);
        GLES20.glViewport(0, 0, width, height);
    }

    public static void unbind(int screenW, int screenH) {
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, 0);
        GLES20.glViewport(0, 0, screenW, screenH);
    }

    public void bindTexture(int unit) {
        Gfx.bindTexture(unit, tex);
    }

    public void release() {
        if (valid) {
            Gfx.deleteFramebuffer(fbo);
            Gfx.deleteTexture(tex);
        }
        // mark as consumed even if never validated, to avoid leaks on re-create
        valid = false;
        fbo = 0;
        tex = 0;
    }

    public boolean isValid() { return valid; }
}
