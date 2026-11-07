package ir.hollowvale.engine;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.SoundPool;

import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Map;

/** All sounds are synthesized to WAV at first launch — no bundled audio assets. */
public final class Audio {
    private SoundPool sp;
    private final Map<String, Integer> ids = new HashMap<>();
    private final Map<String, Integer> vols = new HashMap<>();
    private volatile boolean ready = false;
    private volatile boolean muted = false, paused = false;
    private int loaded = 0, total = 0;
    private int ambStream = 0, chaseStream = 0;
    private float ambV = 0, chaseV = 0;

    private static final int SR = 22050;

    public void init(Context ctx) {
        sp = new SoundPool.Builder()
                .setMaxStreams(8)
                .setAudioAttributes(new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_GAME)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                        .build())
                .build();
        sp.setOnLoadCompleteListener((spl, sampleId, status) -> {
            loaded++;
            if (loaded >= total) {
                ambStream = sp.play(ids.get("ambient"), 0f, 0f, 0, -1, 1f);
                chaseStream = sp.play(ids.get("chase"), 0f, 0f, 0, -1, 1f);
                ready = true;
            }
        });
        final Context c = ctx.getApplicationContext();
        new Thread(() -> {
            try {
                gen(c, "ambient", 4.0, Audio::ambient);
                gen(c, "chase", 2.0, Audio::chase);
                gen(c, "heartbeat", 0.46, Audio::heartbeat);
                gen(c, "step", 0.13, Audio::step);
                gen(c, "stepRun", 0.15, Audio::stepRun);
                gen(c, "click", 0.06, Audio::click);
                gen(c, "pickup", 0.32, Audio::pickup);
                gen(c, "paper", 0.32, Audio::paper);
                gen(c, "creak", 0.85, Audio::creak);
                gen(c, "locked", 0.24, Audio::locked);
                gen(c, "growl", 1.5, Audio::growl);
                gen(c, "scream", 1.15, Audio::scream);
                gen(c, "thunder", 1.8, Audio::thunder);
                gen(c, "banish", 2.0, Audio::banish);
                gen(c, "gate", 1.1, Audio::gate);
                gen(c, "hit", 0.32, Audio::hit);
                gen(c, "win", 2.4, Audio::win);
                loadAll(c);
            } catch (Throwable t) {
                total = -1; // disable audio on failure
            }
        }, "hv-audio").start();
    }

    private void loadAll(Context c) {
        for (String name : new String[]{"ambient", "chase", "heartbeat", "step", "stepRun", "click",
                "pickup", "paper", "creak", "locked", "growl", "scream", "thunder", "banish",
                "gate", "hit", "win"}) {
            File f = new File(c.getCacheDir(), "hv_" + name + ".wav");
            if (f.exists()) {
                int id = sp.load(f.getAbsolutePath(), 1);
                ids.put(name, id);
            }
        }
        total = ids.size();
    }

    private interface Fn { double at(double t, double dur); }

    private void gen(Context c, String name, double dur, Fn fn) throws Exception {
        int n = (int) (SR * dur);
        double[] s = new double[n];
        double max = 1e-9;
        for (int i = 0; i < n; i++) {
            s[i] = fn.at(i / (double) SR, dur);
            max = Math.max(max, Math.abs(s[i]));
        }
        double g = 0.86 / max;
        byte[] wav = new byte[44 + n * 2];
        putStr(wav, 0, "RIFF");
        putI32(wav, 4, 36 + n * 2);
        putStr(wav, 8, "WAVE");
        putStr(wav, 12, "fmt ");
        putI32(wav, 16, 16);
        putI16(wav, 20, (short) 1);
        putI16(wav, 22, (short) 1);
        putI32(wav, 24, SR);
        putI32(wav, 28, SR * 2);
        putI16(wav, 32, (short) 2);
        putI16(wav, 34, (short) 16);
        putStr(wav, 36, "data");
        putI32(wav, 40, n * 2);
        for (int i = 0; i < n; i++) {
            int v = (int) Math.max(-32767, Math.min(32767, s[i] * g * 32767));
            wav[44 + i * 2] = (byte) v;
            wav[45 + i * 2] = (byte) (v >> 8);
        }
        File f = new File(c.getCacheDir(), "hv_" + name + ".wav");
        FileOutputStream fo = new FileOutputStream(f);
        fo.write(wav);
        fo.close();
    }

    private static void putStr(byte[] b, int o, String s) {
        for (int i = 0; i < s.length(); i++) b[o + i] = (byte) s.charAt(i);
    }

    private static void putI32(byte[] b, int o, int v) {
        b[o] = (byte) v; b[o + 1] = (byte) (v >> 8); b[o + 2] = (byte) (v >> 16); b[o + 3] = (byte) (v >> 24);
    }

    private static void putI16(byte[] b, int o, short v) {
        b[o] = (byte) v; b[o + 1] = (byte) (v >> 8);
    }

    // ---------- synth definitions ----------
    private static double saw(double ph) { return 2 * (ph - Math.floor(ph)) - 1; }
    private static double env(double t, double a, double k) { return t < a ? t / a : Math.exp(-(t - a) * k); }
    private static double lp = 0; // simple filter state per-sample (approximate)

    private static double noise() { return Math.random() * 2 - 1; }

    private static double ambient(double t, double d) {
        double e = Math.sin(Math.PI * t / d); // loop-safe window
        double v = 0.20 * Math.sin(2 * Math.PI * 55 * t)
                + 0.15 * Math.sin(2 * Math.PI * 82.4 * t + 1.3)
                + 0.10 * Math.sin(2 * Math.PI * 110.3 * t) * (0.5 + 0.5 * Math.sin(2 * Math.PI * t / d * 2));
        lp = lp * 0.985 + noise() * 0.015;
        return v + lp * 2.2 * (0.4 + 0.6 * e);
    }

    private static double chase(double t, double d) {
        double pulse = 0.55 + 0.45 * Math.sin(2 * Math.PI * 3.1 * t);
        double v = saw(110 * t) * 0.16 * pulse
                + 0.10 * Math.sin(2 * Math.PI * 233 * t)
                + 0.11 * Math.sin(2 * Math.PI * 246.9 * t)
                + 0.09 * saw(55.4 * t);
        if (t < 0.09) v += Math.sin(2 * Math.PI * 52 * t) * Math.exp(-t * 38) * 0.9;
        if (t > 0.98 && t < 1.07) v += Math.sin(2 * Math.PI * 52 * (t - 0.98)) * Math.exp(-(t - 0.98) * 38) * 0.9;
        return v;
    }

    private static double heartbeat(double t, double d) {
        double a = Math.sin(2 * Math.PI * 54 * t) * Math.exp(-t * 26);
        double b = t > 0.18 ? Math.sin(2 * Math.PI * 48 * (t - 0.18)) * Math.exp(-(t - 0.18) * 30) : 0;
        return (a + 0.85 * b) * 1.5;
    }

    private static double step(double t, double d) {
        lp = lp * 0.90 + noise() * 0.10;
        return lp * Math.exp(-t * 42) * 4.5;
    }

    private static double stepRun(double t, double d) {
        lp = lp * 0.88 + noise() * 0.12;
        return lp * Math.exp(-t * 32) * 5.2 + Math.sin(2 * Math.PI * 65 * t) * Math.exp(-t * 40) * 0.5;
    }

    private static double click(double t, double d) {
        return Math.sin(2 * Math.PI * 1500 * t) * Math.exp(-t * 160) * 0.7 + noise() * Math.exp(-t * 220) * 0.4;
    }

    private static double pickup(double t, double d) {
        double f = t < 0.12 ? 660 : 990;
        return Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 7) * 1.2;
    }

    private static double paper(double t, double d) {
        double e = Math.exp(-Math.pow((t - 0.05) * 42, 2)) + Math.exp(-Math.pow((t - 0.15) * 50, 2))
                + Math.exp(-Math.pow((t - 0.25) * 58, 2));
        lp = lp * 0.93 + noise() * 0.07;
        return lp * e * 5.0;
    }

    private static double creak(double t, double d) {
        double f = 130 - 42 * t;
        return saw(f * t + 0.3 * Math.sin(2 * Math.PI * 2.2 * t)) * (0.45 + 0.55 * Math.sin(2 * Math.PI * 7.3 * t))
                * Math.min(1, t * 12) * Math.exp(-Math.max(0, t - 0.6) * 6) * 0.9 + noise() * 0.03;
    }

    private static double locked(double t, double d) {
        double a = Math.sin(2 * Math.PI * 95 * t) * Math.exp(-t * 48);
        double b = t > 0.09 ? Math.sin(2 * Math.PI * 80 * (t - 0.09)) * Math.exp(-(t - 0.09) * 50) : 0;
        return (a + b) * 1.6;
    }

    private static double growl(double t, double d) {
        double wob = 0.55 + 0.45 * Math.sin(2 * Math.PI * 2.6 * t);
        double e = env(t, 0.12, 2.2);
        return (saw(52 * t) + 0.7 * saw(65.3 * t)) * wob * e * 0.9 + noise() * 0.10 * e;
    }

    private static double scream(double t, double d) {
        double f = 760 - 430 * t;
        double v = saw(f * t) * (1 + 0.5 * Math.sin(2 * Math.PI * 31 * t));
        v = Math.tanh(v * 2.2);
        return v * env(t, 0.02, 2.6) * 1.1 + noise() * 0.12;
    }

    private static double thunder(double t, double d) {
        lp = lp * 0.995 + noise() * 0.006;
        return (lp * 9 + Math.sin(2 * Math.PI * 43 * t) * 0.28) * Math.exp(-t * 1.9) * (1 + 0.3 * Math.sin(2 * Math.PI * 0.9 * t));
    }

    private static double banish(double t, double d) {
        double f = 200 + 330 * t / 1.4;
        double v = Math.sin(2 * Math.PI * f * t) * 0.30 + Math.sin(2 * Math.PI * f * 1.5 * t) * 0.12;
        if (t > 0.9) v += Math.sin(2 * Math.PI * 660 * t) * 0.14 * Math.exp(-(t - 0.9) * 2);
        if (t > 1.5) v += Math.sin(2 * Math.PI * 45 * (t - 1.5)) * Math.exp(-(t - 1.5) * 7) * 1.2;
        return v * Math.min(1, t * 10);
    }

    private static double gate(double t, double d) {
        double v = saw(60 * t) * (0.45 + 0.55 * Math.sin(2 * Math.PI * 5 * t)) * 0.5;
        if (t > 0.05) v += Math.sin(2 * Math.PI * 420 * (t - 0.05)) * Math.exp(-(t - 0.05) * 12) * 0.5
                + Math.sin(2 * Math.PI * 633 * (t - 0.05)) * Math.exp(-(t - 0.05) * 14) * 0.3;
        return v;
    }

    private static double hit(double t, double d) {
        return Math.sin(2 * Math.PI * 70 * t) * Math.exp(-t * 30) * 1.4 + noise() * Math.exp(-t * 60) * 0.8;
    }

    private static double win(double t, double d) {
        double[] f = {392, 494, 587, 784};
        double v = 0;
        for (int i = 0; i < 4; i++) {
            double st = i * 0.28;
            if (t > st) v += Math.sin(2 * Math.PI * f[i] * (t - st)) * Math.min(1, (t - st) * 4) * Math.exp(-(t - st) * 1.1) * 0.5;
        }
        return v;
    }

    // ---------- runtime ----------
    public boolean isReady() { return ready; }

    public void play(String name, float vol) {
        play(name, vol, 1f);
    }

    public void play(String name, float vol, float rate) {
        if (!ready || muted || paused) return;
        Integer id = ids.get(name);
        if (id == null) return;
        try {
            sp.play(id, vol, vol, 1, 0, rate);
        } catch (Exception ignored) {
        }
    }

    public void tick(boolean chasing, float dt) {
        if (!ready) return;
        float ta = (chasing || muted || paused) ? (chasing ? 0.06f : 0f) : 0.42f;
        float tc = (chasing && !muted && !paused) ? 0.42f : 0f;
        float k = Math.min(1, dt * 3f);
        ambV += (ta - ambV) * k;
        chaseV += (tc - chaseV) * k;
        try {
            if (ambStream != 0) sp.setVolume(ambStream, ambV, ambV);
            if (chaseStream != 0) sp.setVolume(chaseStream, chaseV, chaseV);
        } catch (Exception ignored) {
        }
    }

    public void setPaused(boolean p) {
        paused = p;
    }
}
