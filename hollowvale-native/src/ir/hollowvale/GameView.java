package ir.hollowvale;

import android.content.Context;
import android.graphics.Canvas;
import android.view.MotionEvent;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import ir.hollowvale.engine.Audio;
import ir.hollowvale.engine.Input;
import ir.hollowvale.engine.Renderer;
import ir.hollowvale.game.Ctrl;

/** SurfaceView + game thread + adaptive resolution. */
public final class GameView extends SurfaceView implements SurfaceHolder.Callback, Runnable {
    private Thread thread;
    private volatile boolean running;
    private volatile boolean surfaceReady;

    final Game game = new Game();
    private final Input input = new Input(game);
    private final Hud hud = new Hud(game);
    private final Renderer renderer = new Renderer();

    private int w, h;
    private float frameAvg = 16;
    private float curScale = 0.5f;

    public GameView(Context context) {
        super(context);
        getHolder().addCallback(this);
        setFocusable(true);
        game.audio = new Audio();
        game.audio.init(context);
        game.renderer = renderer;
        game.hudRef = hud;
    }

    @Override public void surfaceCreated(SurfaceHolder holder) { }
    @Override public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
        w = width; h = height;
        // Deferred: only store the request here. init() must never run on the UI
        // thread while the game thread is mid-render (was a crash/black-frame race).
        renderer.setScale(curScale, width, height);
        input.layout(width, height);
        hud.layout(width, height);
        if (!surfaceReady) {
            surfaceReady = true;
            startThread();
        }
    }
    @Override public void surfaceDestroyed(SurfaceHolder holder) {
        surfaceReady = false;
        stopThread();
    }

    private void startThread() {
        if (thread != null && thread.isAlive()) return;
        running = true;
        thread = new Thread(this, "hv-game");
        thread.start();
    }

    private void stopThread() {
        running = false;
        if (thread != null) {
            try { thread.join(1200); } catch (InterruptedException ignored) { }
            thread = null;
        }
    }

    @Override
    public void run() {
        long last = System.nanoTime();
        while (running) {
            if (!surfaceReady || w == 0) {
                try { Thread.sleep(16); } catch (InterruptedException ignored) { }
                last = System.nanoTime();
                continue;
            }
            // Any uncaught exception here used to kill the thread and freeze the
            // game forever. Catch everything, log it, keep the loop alive.
            long now = System.nanoTime();
            float dtms = (now - last) / 1e6f;
            last = now;
            double dt = Math.min(0.05, dtms / 1000.0);
            Canvas cv = null;
            try {
                game.update(dt, input.getCtrl());
                input.afterFrame();

                cv = getHolder().lockCanvas();
                if (cv != null) {
                    if (game.state == Game.State.MENU || game.state == Game.State.HOWTO) {
                        cv.drawColor(0xFF050509);
                    } else if (game.world != null) {
                        renderer.render(game.world);
                        renderer.drawTo(cv);
                    } else {
                        cv.drawColor(0xFF050509);
                    }
                    input.draw(cv, game);
                    hud.draw(cv, game);
                }
            } catch (Throwable t) {
                t.printStackTrace();
                errorStreak++;
                if (errorStreak > 90) { // totally broken -> back to menu instead of frozen screen
                    errorStreak = 0;
                    game.state = Game.State.MENU;
                    game.world = null;
                }
            } finally {
                if (cv != null) {
                    try { getHolder().unlockCanvasAndPost(cv); } catch (Exception ignored) { }
                }
            }
            errorStreak = Math.max(0, errorStreak - 1);
            autoPerf(dtms);
        }
    }

    private int errorStreak;

    private void autoPerf(float dtms) {
        frameAvg = frameAvg * 0.94f + dtms * 0.06f;
        if (frameAvg > 38 && curScale > 0.34f) {
            curScale -= 0.07f;
            frameAvg = 24;
            renderer.setScale(curScale, w, h); // applied lazily inside render()
        } else if (frameAvg < 20 && curScale < 0.58f) {
            curScale += 0.04f;
            frameAvg = 30;
            renderer.setScale(curScale, w, h);
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent e) {
        input.onTouch(e, game);
        return true;
    }

    public void hostPause() {
        if (game.state == Game.State.PLAYING) game.togglePause();
        game.audio.setPaused(true);
    }

    public void hostResume() {
        game.audio.setPaused(false);
    }
}
