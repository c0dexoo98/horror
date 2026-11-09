package com.hollowengine.graphics;

import android.graphics.Bitmap;
import android.opengl.GLES20;
import android.opengl.GLUtils;

import java.nio.ByteBuffer;

/**
 * HollowEngine — GL 2D texture with the options real games need:
 * filtering (nearest/linear), mipmaps + trilinear, anisotropic filtering (when
 * the extension exists), and wrap modes. Upload from Bitmap, RGBA bytes or raw buffer.
 */
public final class Texture {
    public final int id;
    public final int width, height;
    private boolean valid = true;

    public static final int NEAREST = GLES20.GL_NEAREST;
    public static final int LINEAR = GLES20.GL_LINEAR;
    public static final int REPEAT = GLES20.GL_REPEAT;
    public static final int CLAMP = GLES20.GL_CLAMP_TO_EDGE;

    private Texture(int id, int w, int h) {
        this.id = id;
        this.width = w;
        this.height = h;
    }

    /** nearest-filtered, repeated — the classic pixel-art / data-texture default. */
    public static Texture nearest(Bitmap b) {
        return fromBitmap(b, NEAREST, NEAREST, REPEAT, false, 0f);
    }

    /** linear-filtered, mipmapped + anisotropic — the quality default for color textures. */
    public static Texture highQuality(Bitmap b) {
        return fromBitmap(b, GLES20.GL_LINEAR_MIPMAP_LINEAR, GLES20.GL_LINEAR, REPEAT, true, 4f);
    }

    public static Texture fromBitmap(Bitmap b, int minFilter, int magFilter, int wrap,
                                     boolean mipmaps, float maxAniso) {
        if (b == null) throw new IllegalArgumentException("null bitmap");
        int id = Gfx.genTexture();
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, id);
        GLUtils.texImage2D(GLES20.GL_TEXTURE_2D, 0, b, 0);
        applyParams(minFilter, magFilter, wrap, mipmaps, maxAniso);
        return new Texture(id, b.getWidth(), b.getHeight());
    }

    public static Texture fromRgba(ByteBuffer rgba, int w, int h, int minFilter, int magFilter,
                                   int wrap, boolean mipmaps, float maxAniso) {
        int id = Gfx.genTexture();
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, id);
        GLES20.glTexImage2D(GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA, w, h, 0,
                GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE, rgba);
        applyParams(minFilter, magFilter, wrap, mipmaps, maxAniso);
        return new Texture(id, w, h);
    }

    /** RGBA data texture (nearest, clamp) — lookup tables, tile maps, entity buffers. */
    public static Texture dataTexture(ByteBuffer rgba, int w, int h) {
        return fromRgba(rgba, w, h, NEAREST, NEAREST, CLAMP, false, 0f);
    }

    private static void applyParams(int minFilter, int magFilter, int wrap,
                                    boolean mipmaps, float maxAniso) {
        Gfx.texParams(minFilter, magFilter, wrap, wrap);
        if (mipmaps) {
            GLES20.glGenerateMipmap(GLES20.GL_TEXTURE_2D);
            // anisotropic filtering (extension is near-universal; ignored if absent)
            try {
                float[] max = new float[1];
                GLES20.glGetFloatv(0x84FF /* GL_TEXTURE_MAX_ANISOTROPY_EXT */, max, 0);
                if (max[0] >= 2f) {
                    float want = maxAniso <= 0 ? 4f : Math.min(maxAniso, max[0]);
                    GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D, 0x84FF, want);
                }
            } catch (Throwable ignored) {
            }
        }
    }

    public void bind(int unit) {
        Gfx.bindTexture(unit, id);
    }

    public void release() {
        if (valid) {
            Gfx.deleteTexture(id);
            valid = false;
        }
    }

    public boolean isValid() { return valid; }
}
