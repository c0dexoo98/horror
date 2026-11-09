package com.hollowengine.core;

import android.os.Handler;
import android.os.Looper;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * HollowEngine — threading helper: post to the Android main thread or run on a
 * small background pool. Every engine/app subsystem routes async work through here
 * so the app never spawns ad-hoc threads.
 */
public final class Tasks {
    private static final Handler MAIN = new Handler(Looper.getMainLooper());
    private static final ExecutorService POOL = Executors.newFixedThreadPool(2, r -> {
        Thread t = new Thread(r, "hollow-engine-worker");
        t.setDaemon(true);
        return t;
    });

    private Tasks() { }

    public static boolean onMainThread() {
        return Looper.myLooper() == Looper.getMainLooper();
    }

    public static void main(Runnable r) {
        if (onMainThread()) r.run();
        else MAIN.post(r);
    }

    public static void mainDelayed(Runnable r, long ms) {
        MAIN.postDelayed(r, ms);
    }

    public static void cancelMain(Runnable r) {
        MAIN.removeCallbacks(r);
    }

    public static void background(final Runnable r) {
        POOL.execute(new SafeTask(r));
    }

    /** fire-and-forget that logs instead of crashing a worker thread. */
    public static final class SafeTask implements Runnable {
        private final Runnable r;

        public SafeTask(Runnable r) { this.r = r; }

        @Override
        public void run() {
            try {
                r.run();
            } catch (Throwable t) {
                EngineLog.e("Tasks", "background task failed", t);
            }
        }
    }

    /** cooperative cancellation flag for long-running background jobs. */
    public static final class Cancel {
        private final AtomicBoolean flag = new AtomicBoolean(false);

        public boolean cancelled() { return flag.get(); }

        public void cancel() { flag.set(true); }
    }
}
