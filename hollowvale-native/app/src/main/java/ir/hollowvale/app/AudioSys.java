package ir.hollowvale.app;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.media.SoundPool;

import java.util.HashMap;

import ir.hollowvale.game.GameConfig;

/**
 * HOLLOW VALE v4 — sound engine: SoundPool for SFX, MediaPlayer crossfading music loops.
 * All sounds are res/raw resources; missing entries are silently ignored.
 */
public final class AudioSys {
    private final Context ctx;
    private SoundPool pool;
    private final HashMap<String, Integer> ids = new HashMap<String, Integer>();
    private GameConfig cfg;
    private MediaPlayer music;
    private String musicName = "";
    private float musicTargetVol = 0.6f;
    private float musicVol = 0.2f;

    private static final String[] SFX = {
            "ui_move", "ui_select", "ui_back", "save_chime", "achievement", "start_game", "game_over",
            "pickup", "drop", "note_open", "note_close", "write", "unlock",
            "door_open", "door_close", "door_locked", "door_break", "gate_open", "crate_break",
            "candle_light", "flashlight_click", "battery_insert", "heal_bandage", "camera_shutter",
            "secret", "axe_swing", "axe_hit", "backstab", "revolver_shot", "revolver_empty", "reload",
            "enemy_attack", "hurt_player", "struggle_hit", "enemy_die", "gun_hit",
            "enemy_growl", "chase_scream", "mother_hum", "whisper_loop", "heartbeat_loop",
            "thunder", "thunder_far", "wind_hit", "step_walk", "step_run", "step_crouch",
            "stinger_ghost", "stinger_find"
    };

    public AudioSys(Context c, GameConfig cfg) {
        this.ctx = c.getApplicationContext();
        this.cfg = cfg;
        try {
            AudioAttributes aa = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_GAME)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build();
            pool = new SoundPool.Builder().setMaxStreams(8).setAudioAttributes(aa).build();
        } catch (Throwable t) {
            pool = null;
        }
        if (pool != null) {
            for (String s : SFX) {
                try {
                    int id = ctx.getResources().getIdentifier(s, "raw", ctx.getPackageName());
                    if (id != 0) {
                        int sid = pool.load(ctx, id, 1);
                        ids.put(s, sid);
                    }
                } catch (Throwable ignored) {
                }
            }
        }
    }

    /** volume ~0..2, pitch jitter adds variation. */
    public void play(String name, float volume, float pitchJitter) {
        if (pool == null) return;
        Integer sid = ids.get(name);
        if (sid == null) return;
        try {
            float v = Math.max(0f, Math.min(1f, volume * cfg.volSfx * cfg.volMaster));
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

    /** looped ambience/music via MediaPlayer with gentle fade-in. */
    public void music(String name, float vol) {
        musicTargetVol = Math.max(0f, Math.min(1f, vol)) * cfg.volMusic * cfg.volMaster;
        if (name == null || name.equals(musicName)) return;
        musicName = name == null ? "" : name;
        try {
            if (music != null) {
                music.stop();
                music.release();
                music = null;
            }
        } catch (Throwable ignored) {
        }
        if (musicName.isEmpty()) return;
        try {
            int id = ctx.getResources().getIdentifier(musicName, "raw", ctx.getPackageName());
            if (id == 0) return;
            music = MediaPlayer.create(ctx, id);
            if (music == null) return;
            music.setLooping(true);
            music.setVolume(musicVol * musicTargetVol, musicVol * musicTargetVol);
            music.start();
        } catch (Throwable t) {
            music = null;
        }
    }

    /** call each frame: fades music volume toward target. */
    public void update(float dt) {
        if (musicVol < 1f) {
            musicVol = Math.min(1f, musicVol + dt * 0.8f);
        }
        if (music != null) {
            try {
                float v = musicVol * musicTargetVol;
                music.setVolume(v, v);
            } catch (Throwable ignored) {
            }
        }
    }

    /** separate ambience loop channel. */
    public void ambient(String name, float vol) {
        ambTargetVol = Math.max(0f, Math.min(1f, vol)) * cfg.volMaster;
        if (name == null || name.equals(ambName)) return;
        ambName = name == null ? "" : name;
        try {
            if (amb != null) {
                amb.stop();
                amb.release();
                amb = null;
            }
        } catch (Throwable ignored) {
        }
        if (ambName.isEmpty()) return;
        try {
            int id = ctx.getResources().getIdentifier(ambName, "raw", ctx.getPackageName());
            if (id == 0) return;
            amb = MediaPlayer.create(ctx, id);
            if (amb == null) return;
            amb.setLooping(true);
            amb.setVolume(0.7f * ambTargetVol, 0.7f * ambTargetVol);
            amb.start();
        } catch (Throwable t) {
            amb = null;
        }
    }

    private MediaPlayer amb;
    private String ambName = "";
    private float ambTargetVol = 0.5f;

    public void stopMusic() {
        musicName = "";
        try {
            if (music != null) {
                music.stop();
                music.release();
            }
            if (amb != null) {
                amb.stop();
                amb.release();
            }
        } catch (Throwable ignored) {
        }
        music = null;
        amb = null;
        ambName = "";
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

    public void setConfig(GameConfig c) {
        this.cfg = c;
    }

    public void release() {
        stopMusic();
        try {
            if (pool != null) {
                pool.release();
                pool = null;
            }
        } catch (Throwable ignored) {
        }
    }
}
