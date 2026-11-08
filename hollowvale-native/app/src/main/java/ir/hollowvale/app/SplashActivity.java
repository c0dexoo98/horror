package ir.hollowvale.app;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.VideoView;

/**
 * HOLLOW VALE v4 — cinematic VIDEO splash (intro/ending).
 * Plays res/raw/intro.mp4 (or ending.mp4), tap-to-skip, and NEVER crashes:
 * any error falls back to an animated canvas splash, then continues.
 */
public class SplashActivity extends Activity {
    private VideoView video;
    private MediaPlayer player;
    private FallbackSplashView fallback;
    private boolean done = false;
    private String which = "intro";
    private String then = "menu";

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        immersive();
        which = getIntent().getStringExtra("video");
        if (which == null || which.isEmpty()) which = "intro";
        String t2 = getIntent().getStringExtra("then");
        then = t2 == null || t2.isEmpty() ? "menu" : t2;

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF000000);

        video = new VideoView(this);
        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
        root.addView(video, lp);
        setContentView(root);

        // "skip" button (top-left)
        android.widget.TextView skip = new android.widget.TextView(this);
        skip.setText("رد شدن ✕");
        skip.setTextColor(0xAAE8E0C8);
        skip.setTextSize(16);
        skip.setTypeface(Fonts.vazirBold(this));
        skip.setPadding(40, 30, 40, 30);
        root.addView(skip, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT, FrameLayout.LayoutParams.WRAP_CONTENT));
        skip.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishTo();
            }
        });

        boolean started = false;
        try {
            int id = getResources().getIdentifier(which, "raw", getPackageName());
            if (id != 0) {
                final String path = "android.resource://" + getPackageName() + "/" + id;
                video.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                    @Override
                    public void onCompletion(MediaPlayer mp) {
                        finishTo();
                    }
                });
                video.setOnErrorListener(new MediaPlayer.OnErrorListener() {
                    @Override
                    public boolean onError(MediaPlayer mp, int what, int extra) {
                        useFallback();
                        return true;
                    }
                });
                video.setVideoPath(path);
                video.start();
                started = true;
            }
        } catch (Throwable ignored) {
            started = false;
        }
        if (!started) useFallback();
    }

    private void useFallback() {
        if (done) return;
        try {
            if (video != null) video.setVisibility(View.GONE);
        } catch (Throwable ignored) {
        }
        if (fallback == null) {
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
            video.postDelayed(new Runnable() {
                @Override
                public void run() {
                    finishTo();
                }
            }, 5200);
        }
    }

    private synchronized void finishTo() {
        if (done) return;
        done = true;
        try {
            if (player != null) {
                player.stop();
                player.release();
            }
        } catch (Throwable ignored) {
        }
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
            if (video != null) video.stopPlayback();
        } catch (Throwable ignored) {
        }
        try {
            if (player != null) {
                player.release();
                player = null;
            }
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
    }
}
