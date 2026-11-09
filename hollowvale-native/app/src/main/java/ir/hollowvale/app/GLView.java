package ir.hollowvale.app;

import android.content.Context;

import com.hollowengine.app.GameSurfaceView;

/** HOLLOW VALE v6 — GL surface facade over the engine GameSurfaceView (GLES2, continuous). */
public class GLView extends GameSurfaceView {
    public GLView(Context context, Renderer r) {
        super(context, r);
    }
}
