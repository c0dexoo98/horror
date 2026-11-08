package ir.hollowvale.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;

import ir.hollowvale.game.GameConfig;
import ir.hollowvale.game.Str;
import ir.hollowvale.game.World;

/** HOLLOW VALE v4 — the game screen: GL raycast view + HUD overlay. */
public class GameActivity extends Activity implements Renderer.HudBridge {
    public World world;
    private GameConfig cfg;
    private AudioSys audio;
    private GLView gl;
    private HudView hud;
    private Renderer renderer;
    private volatile String prompt = "";
    private boolean fromSave;
    private String saveSlot;
    private boolean endingHandled = false;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON,
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        immersive();

        cfg = SaveIO.loadConfig(this);
        audio = new AudioSys(this, cfg);
        fromSave = getIntent().getBooleanExtra("load", false);
        saveSlot = getIntent().getStringExtra("slot");

        world = new World();
        world.ach.setAll(SaveIO.loadAch(this));
        world.cfgSens = cfg.sens;
        world.cfgInvert = cfg.invertLook;
        if (fromSave) {
            String data = SaveIO.read(this, saveSlot);
            if (data != null) {
                world.deserialize(data);
            }
        }

        renderer = new Renderer(this, world, cfg, this);
        gl = new GLView(this, renderer);
        hud = new HudView(this, world, cfg, audio, this);

        FrameLayout root = new FrameLayout(this);
        root.addView(gl, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        root.addView(hud, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
    }

    @Override
    public void onFrame(float dt) {
        // GL thread
        hud.frame(dt);
        prompt = world.promptText() == null ? "" : world.promptText();
        if (world.gameState == World.ENDING && !endingHandled) {
            endingHandled = true;
            runOnUiThread(new Runnable() {
                public void run() {
                    hud.invalidate();
                }
            });
        }
    }

    public String currentPrompt() {
        return prompt;
    }

    public float rendererFps() {
        return renderer == null ? 0 : renderer.fpsShown;
    }

    public void openJournal() {
        runOnUiThread(new Runnable() {
            public void run() {
                hud.setMode(HudView.M_JOURNAL);
                hud.invalidate();
            }
        });
    }

    public void onQualityChanged() {
        if (renderer != null && gl != null) {
            gl.queueEvent(new Runnable() {
                public void run() {
                    renderer.onQualityChanged();
                }
            });
        }
    }

    /** the save slot this session belongs to (slot1..3 or auto). */
    public String sessionSlot() {
        return saveSlot == null ? "slot_auto.json" : saveSlot;
    }

    public void loadAutosave() {
        String data = SaveIO.read(this, "slot_auto.json");
        if (data != null) {
            world.deserialize(data);
            hud.invalidate();
        } else {
            quitToMenu();
        }
    }

    public void quitToMenu() {
        try {
            SaveIO.saveConfig(this, cfg);
        } catch (Throwable ignored) {
        }
        startActivity(new Intent(this, MenuActivity.class));
        finish();
    }

    /** called when ending overlay is tapped: play cutscene video then menu. */
    public void onEndingShown() {
        if (world.endingId == 0 || world.endingId == 1) {
            Intent i = new Intent(this, SplashActivity.class);
            i.putExtra("video", world.endingId == 0 ? "ending" : "ending");
            i.putExtra("then", "menu");
            startActivity(i);
        } else {
            quitToMenu();
        }
        finish();
    }

    @Override
    protected void onResume() {
        super.onResume();
        immersive();
        if (gl != null) gl.onResume();
        if (hud != null) hud.paused = false;
        if (audio != null) audio.resumeAll();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (gl != null) gl.onPause();
        if (hud != null) hud.paused = true;
        if (audio != null) audio.pauseAll();
        // autosave on background
        try {
            if (world != null && world.gameState == ir.hollowvale.game.World.PLAY) {
                SaveIO.write(this, "slot_auto.json", world.serialize());
            }
            SaveIO.saveConfig(this, cfg);
            SaveIO.saveAch(this, world.ach.unlocked);
        } catch (Throwable ignored) {
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (audio != null) audio.release();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent e) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (hud != null && hud.mode != HudView.M_PLAY) {
                hud.setMode(HudView.M_PLAY);
                hud.invalidate();
                return true;
            }
            if (hud != null && world.gameState == ir.hollowvale.game.World.PLAY) {
                hud.setMode(HudView.M_PAUSE);
                hud.invalidate();
                return true;
            }
            return true; // swallow back on overlays
        }
        return super.onKeyDown(keyCode, e);
    }

    private void immersive() {
        View d = getWindow().getDecorView();
        d.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        WindowManager.LayoutParams lp = getWindow().getAttributes();
        lp.screenBrightness = 1f;
        getWindow().setAttributes(lp);
    }
}
