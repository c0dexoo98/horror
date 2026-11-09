package ir.hollowvale.app;

import android.content.Context;

import com.hollowengine.audio.AudioEngine;

import ir.hollowvale.game.GameConfig;

/**
 * HOLLOW VALE v6 — sound facade over the HollowEngine AudioEngine.
 * Identical behavior to the v4 system (SoundPool SFX + crossfading music +
 * ambience loop), now implemented by the engine. Volume buses map 1:1 to GameConfig.
 */
public final class AudioSys extends AudioEngine {

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
        super(c, volumesOf(cfg));
        loadSfx(SFX);
    }

    private static Volumes volumesOf(GameConfig cfg) {
        Volumes v = new Volumes();
        if (cfg != null) {
            v.master = cfg.volMaster;
            v.music = cfg.volMusic;
            v.sfx = cfg.volSfx;
        }
        return v;
    }

    /** live-update the buses when the player changes settings. */
    public void setConfig(GameConfig c) {
        Volumes v = volumesOf(c);
        vol.master = v.master;
        vol.music = v.music;
        vol.sfx = v.sfx;
    }

    /** engine name kept explicit for the game code paths. */
    public void stopMusic() {
        stopAll();
    }
}
