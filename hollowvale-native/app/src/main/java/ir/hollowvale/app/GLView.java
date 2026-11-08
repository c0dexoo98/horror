package ir.hollowvale.app;

import android.content.Context;
import android.opengl.GLSurfaceView;

/** HOLLOW VALE v4 — GL surface (GLES2, continuous render). */
public class GLView extends GLSurfaceView {
    public GLView(Context context, Renderer r) {
        super(context);
        setEGLContextClientVersion(2);
        setRenderer(r);
        setRenderMode(RENDERMODE_CONTINUOUSLY);
        setPreserveEGLContextOnPause(true);
    }
}
