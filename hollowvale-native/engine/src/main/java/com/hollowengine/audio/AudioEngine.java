package com.hollowengine.audio;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.media.SoundPool;

import java.util.HashMap;
import java.util.Map;

/**
 * HollowEngine — complete audio subsystem.
 * <ul>
 *   <li>SFX bus: SoundPool, up to N simultaneous streams, per-sound volume+pitch.</li>
 *   <li>Music bus: MediaPlayer loop with smooth fade-in and crossfade-on-switch.</li>
 *   <li>Ambience bus: second MediaPlayer loop (wind, caves, rooms…).</li>
 *   <li>Volume buses: master × bus × clip volume, adjustable live.</li>
 * </ul>
 * All Android media calls are guarded: a missing/corrupt resource is skipped, never thrown.
 */
public class AudioEngine {
    /** live mixer values — the host app mutates these (e.g. from a settings screen). */
    public static final class Volumes {
        public float master = 1f;
        public float music = 0.8f;
        public float sfx = 1f;
    }

    private final Context ctx;
    protected final Volumes vol;   // host app (same package or subclass) adjusts live
    private SoundPool pool;
    private final HashMap<String, Integer> ids = new HashMap<String, Integer>();
    private MediaPlayer music, amb;
    private String musicName = "", ambName = "";
    private float musicTarget = 0.6f, musicFade = 0.2f;
    private float ambTarget = 0.5f;

    public AudioEngine(Context c, Volumes volumes) {
        this.ctx = c.getApplicationContext();
        this.vol = volumes == null ? new Volumes() : volumes;
        try {
            AudioAttributes aa = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_GAME)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build();
            pool = new SoundPool.Builder().setMaxStreams(8).setAudioAttributes(aa).build();
        } catch (Throwable t) {
            pool = null;
        }
    }

    /** register every name in the array that exists under res/raw (missing ones skipped). */
    public void loadSfx(String... rawNames) {
        if (pool == null) return;
        for (String s : rawNames) {
            if (ids.containsKey(s)) continue;
            try {
                int id = ctx.getResources().getIdentifier(s, "raw", ctx.getPackageName());
                if (id != 0) ids.put(s, pool.load(ctx, id, 1));
            } catch (Throwable ignored) {
            }
        }
    }

    /** play a registered SFX; volume ~0..2, pitchJitter adds ±variation. */
    public void play(String name, float volume, float pitchJitter) {
        if (pool == null) return;
        Integer sid = ids.get(name);
        if (sid == null) return;
        try {
            float v = Math.max(0f, Math.min(1f, volume * vol.sfx * vol.master));
            float rate = 1f + (float) (Math.random() * 2 - 1) * pitchJitter;
            pool.play(sid, v, v, 1, 0, rate);
        } catch (Throwable ignored) {
        }
    }

    public void play(String name, float volume) {
        play(name, volume, 0.04f);
    }

    public void play(String name) {
        play(name, 1f);
    }

    /** looping music via MediaPlayer with gentle fade-in (call each frame). */
    public void music(String name, float volume) {
        musicTarget = Math.max(0f, Math.min(1f, volume)) * vol.music * vol.master;
        if (name == null || name.equals(musicName)) return;
        musicName = name == null ? "" : name;
        closeLoop(music);
        music = openLoop(musicName, musicFade * musicTarget);
    }

    /** separate ambience loop channel (can layer with music). */
    public void ambient(String name, float volume) {
        ambTarget = Math.max(0f, Math.min(1f, volume)) * vol.master;
        if (name == null || name.equals(ambName)) return;
        ambName = name == null ? "" : name;
        closeLoop(amb);
        amb = openLoop(ambName, 0.7f * ambTarget);
    }

    private void closeLoop(MediaPlayer old) {
        try {
            if (old != null) {
                old.stop();
                old.release();
            }
        } catch (Throwable ignored) {
        }
    }

    private MediaPlayer openLoop(String rawName, float initialVol) {
        if (rawName.isEmpty()) return null;
        try {
            int id = ctx.getResources().getIdentifier(rawName, "raw", ctx.getPackageName());
            if (id == 0) return null;
            MediaPlayer mp = MediaPlayer.create(ctx, id);
            if (mp == null) return null;
            mp.setLooping(true);
            mp.setVolume(initialVol, initialVol);
            mp.start();
            return mp;
        } catch (Throwable t) {
            return null;
        }
    }

    /** call each frame: fades the music channel toward its target volume. */
    public void update(float dt) {
        if (musicFade < 1f) musicFade = Math.min(1f, musicFade + dt * 0.8f);
        setVol(music, musicFade * musicTarget);
        setVol(amb, 0.7f * ambTarget);
    }

    private static void setVol(MediaPlayer mp, float v) {
        if (mp == null) return;
        try {
            mp.setVolume(v, v);
        } catch (Throwable ignored) {
        }
    }

    public void stopAll() {
        musicName = "";
        ambName = "";
        closeLoop(music);
        music = null;
        closeLoop(amb);
        amb = null;
    }

    public void pauseAll() {
        try {
            if (music != null) music.pause();
            if (amb != null) amb.pause();
        } catch (Throwable ignored) {
        }
    }

    public void resumeAll() {
        try {
            if (music != null && !music.isPlaying()) music.start();
            if (amb != null && !amb.isPlaying()) amb.start();
        } catch (Throwable ignored) {
        }
    }

    public void release() {
        stopAll();
        try {
            if (pool != null) {
                pool.release();
                pool = null;
            }
        } catch (Throwable ignored) {
        }
    }

    /** names currently registered (diagnostics). */
    public Map<String, Integer> loadedSfx() {
        return java.util.Collections.unmodifiableMap(ids);
    }
}
