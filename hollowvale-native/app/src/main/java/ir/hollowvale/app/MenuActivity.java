package ir.hollowvale.app;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import ir.hollowvale.game.GameConfig;

/** HOLLOW VALE v4 — main menu host. */
public class MenuActivity extends Activity {
    private MenuView view;
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
        view = new MenuView(this, this, cfg, audio);
        setContentView(view);
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
    }

    @Override
    protected void onPause() {
        super.onPause();
        SaveIO.saveConfig(this, cfg);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (view != null) view.release();
        if (audio != null) audio.release();
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
    }
}
