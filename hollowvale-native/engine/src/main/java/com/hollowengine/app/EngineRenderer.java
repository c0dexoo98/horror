package com.hollowengine.app;

import android.opengl.GLSurfaceView;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

/**
 * HollowEngine — renderer contract for GL game screens.
 * onFrame(dt) is the game-logic hook called at the top of every rendered frame
 * (on the GL thread), before drawing — the pattern used by raycast/2D screens
 * that need synchronized input+state updates.
 */
public interface EngineRenderer extends GLSurfaceView.Renderer {
    /** game logic tick tied to the render loop (GL thread). */
    void onFrame(float dt);

    @Override
    void onSurfaceCreated(GL10 gl, EGLConfig config);

    @Override
    void onSurfaceChanged(GL10 gl, int width, int height);

    @Override
    void onDrawFrame(GL10 gl);
}
