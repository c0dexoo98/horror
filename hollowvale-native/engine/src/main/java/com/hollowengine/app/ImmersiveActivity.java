package com.hollowengine.app;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

/**
 * HollowEngine — base activity for fullscreen games.
 * Applies the standard immersive full-bleed setup (sticky immersive, hidden nav,
 * layout into display cutouts) in one place, with hooks for per-screen tweaks.
 */
public abstract class ImmersiveActivity extends Activity {

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
        onConfigureWindow();
        applyImmersive();
    }

    /** override to set orientation, brightness, KEEP_SCREEN_ON, etc. */
    protected void onConfigureWindow() { }

    /** re-apply immersive flags (call from onResume too — the system restores bars). */
    protected void applyImmersive() {
        View d = getWindow().getDecorView();
        d.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        if (Build.VERSION.SDK_INT >= 28) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        applyImmersive();
    }

    /** extra immersive flags some screens want (layout fullscreen/hide-nav). */
    protected static int extraLayoutFlags() {
        return View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION;
    }
}
