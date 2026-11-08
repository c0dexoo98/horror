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

/**
 * HOLLOW VALE v4 — cinematic VIDEO splash.
 * Startup: the user's splash.mp4 (with its own audio), full-bleed cover scaling,
 * tap-to-skip, and NEVER crashes: any error falls back to an animated canvas
 * splash, then continues to the next stage.
 */
public class SplashActivity extends Activity {
    private CoverVideoView video;
    private FallbackSplashView fallback;
    private boolean done = false;
    private String which = "splash";
    private String then = "menu";

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        immersive();
        which = getIntent().getStringExtra("video");
        if (which == null || which.isEmpty()) which = "splash";
        String t2 = getIntent().getStringExtra("then");
        then = t2 == null || t2.isEmpty() ? "menu" : t2;

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF000000);
        setContentView(root);

        video = new CoverVideoView(this, which, true, 1.0f, false, new CoverVideoView.Listener() {
            @Override
            public void onVideoFailed() {
                useFallback();
            }
        });
        video.setOnCompleted(new Runnable() {
            @Override
            public void run() {
                finishTo();
            }
        });
        root.addView(video, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        // skip to fallback if the raw file is missing entirely
        int id = getResources().getIdentifier(which, "raw", getPackageName());
        if (id == 0) {
            postFallback();
        } else {
            video.start();
        }

        // "skip" button (top-left)
        android.widget.TextView skip = new android.widget.TextView(this);
        skip.setText("رد شدن ✕");
        skip.setTextColor(0xAAE8E0C8);
        skip.setTextSize(16);
        skip.setTypeface(Fonts.vazirBold(this));
        skip.setPadding(40, 30, 40, 30);
        skip.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishTo();
            }
        });
        root.addView(skip, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT, FrameLayout.LayoutParams.WRAP_CONTENT));

        // tap anywhere to skip as well
        root.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishTo();
            }
        });
    }

    private void postFallback() {
        video.postDelayed(new Runnable() {
            @Override
            public void run() {
                useFallback();
            }
        }, 120);
    }

    private void useFallback() {
        if (done) return;
        if (fallback != null) return;
        try {
            if (video != null) video.setVisibility(View.GONE);
        } catch (Throwable ignored) {
        }
        fallback = new FallbackSplashView(this, "ending".equals(which));
        addContentView(fallback, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        fallback.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishTo();
            }
        });
        // also auto-continue after 5s
        fallback.postDelayed(new Runnable() {
            @Override
            public void run() {
                finishTo();
            }
        }, 5200);
    }

    private synchronized void finishTo() {
        if (done) return;
        done = true;
        if ("game".equals(then)) {
            startActivity(new Intent(this, GameActivity.class));
        } else {
            startActivity(new Intent(this, MenuActivity.class));
        }
        finish();
    }

    @Override
    public void onBackPressed() {
        finishTo();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        try {
            if (video != null) video.release();
        } catch (Throwable ignored) {
        }
    }

    private void immersive() {
        View d = getWindow().getDecorView();
        d.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        // true full-bleed: extend into the display notch/cutout area (API 28+)
        if (Build.VERSION.SDK_INT >= 28) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
    }
}
