package com.hollowengine.core;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * HollowEngine — timer/scheduler utility: delayed calls, repeating timers,
 * and per-second tickers. Update it once per frame with dt.
 */
public final class Scheduler {
    private static final class Task {
        float delay;        // seconds until fire
        float repeat;       // 0 = one-shot
        final Runnable run;
        boolean cancelled;

        Task(float delay, float repeat, Runnable run) {
            this.delay = delay;
            this.repeat = repeat;
            this.run = run;
        }
    }

    private final List<Task> tasks = new ArrayList<Task>();
    private final List<Task> pending = new ArrayList<Task>();

    /** schedule a one-shot call after delaySec. */
    public void after(float delaySec, Runnable r) {
        pending.add(new Task(delaySec, 0, r));
    }

    /** schedule a repeating call; returns a handle object you can .cancel via {@link #cancel(Runnable)}. */
    public void every(float intervalSec, Runnable r) {
        pending.add(new Task(intervalSec, intervalSec, r));
    }

    /** cancel all tasks whose runnable == r. */
    public void cancel(Runnable r) {
        for (Task t : tasks) if (t.run == r) t.cancelled = true;
        for (Task t : pending) if (t.run == r) t.cancelled = true;
    }

    public void update(float dt) {
        tasks.addAll(pending);
        pending.clear();
        Iterator<Task> it = tasks.iterator();
        while (it.hasNext()) {
            Task t = it.next();
            if (t.cancelled) {
                it.remove();
                continue;
            }
            t.delay -= dt;
            if (t.delay <= 0) {
                try {
                    t.run.run();
                } catch (Throwable ignored) {
                }
                if (t.repeat > 0) t.delay += t.repeat;
                else it.remove();
            }
        }
    }

    public void clear() {
        tasks.clear();
        pending.clear();
    }
}
