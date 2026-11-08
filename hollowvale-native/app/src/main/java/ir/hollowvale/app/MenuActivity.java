package ir.hollowvale.app;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;

import ir.hollowvale.game.GameConfig;

/**
 * HOLLOW VALE v4 — main menu host.
 * A looping cinematic video (menubg.mp4, the user's background.mp4) plays
 * full-bleed behind the menu; its quiet eerie audio is layered UNDER the
 * menu music (use both). If video fails, MenuView falls back to the
 * procedural painted scene automatically.
 */
public class MenuActivity extends Activity {
    private MenuView view;
    private CoverVideoView bgVideo;
    private AudioSys audio;
    private GameConfig cfg;
    private boolean[] ach;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        immersive();
        cfg = SaveIO.loadConfig(this);
        ach = SaveIO.loadAch(this);
        audio = new AudioSys(this, cfg);

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF000000);

        // cinematic looping background video (own audio as a low ambience layer)
        bgVideo = new CoverVideoView(this, "menubg", true, 0.45f, true, new CoverVideoView.Listener() {
            @Override
            public void onVideoFailed() {
                if (view != null) view.setVideoBackground(false);
            }
        });
        root.addView(bgVideo, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        view = new MenuView(this, this, cfg, audio);
        view.setVideoBackground(true);
        root.addView(view, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        setContentView(root);
        bgVideo.start();
    }

    public boolean[] achievements() {
        return ach;
    }

    public void startGame(boolean load, String slot) {
        Intent i = new Intent(this, GameActivity.class);
        i.putExtra("load", load);
        i.putExtra("slot", slot == null ? "slot_auto.json" : slot);
        startActivity(i);
    }

    @Override
    protected void onResume() {
        super.onResume();
        immersive();
        if (view != null) view.refreshSaves();
        if (bgVideo != null) bgVideo.resumePlayback();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SaveIO.saveConfig(this, cfg);
        if (bgVideo != null) bgVideo.pausePlayback();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (view != null) view.release();
        if (audio != null) audio.release();
        if (bgVideo != null) bgVideo.release();
    }

    @Override
    public void onBackPressed() {
        if (view != null) view.tap(view.getWidth() - 30, 20);
    }

    private void immersive() {
        View d = getWindow().getDecorView();
        d.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        // true full-bleed: extend into the display notch/cutout area (API 28+)
        if (Build.VERSION.SDK_INT >= 28) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
    }
}
