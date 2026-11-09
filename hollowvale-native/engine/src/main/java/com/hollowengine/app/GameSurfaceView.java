package com.hollowengine.app;

import android.content.Context;
import android.opengl.GLSurfaceView;

/**
 * HollowEngine — GL surface (GLES2, continuous rendering, EGL context preserved
 * across pauses so textures/FBOs survive backgrounding when possible).
 */
public class GameSurfaceView extends GLSurfaceView {
    public GameSurfaceView(Context context, GLSurfaceView.Renderer r) {
        super(context);
        setEGLContextClientVersion(2);
        setRenderer(r);
        setRenderMode(RENDERMODE_CONTINUOUSLY);
        setPreserveEGLContextOnPause(true);
    }
}
