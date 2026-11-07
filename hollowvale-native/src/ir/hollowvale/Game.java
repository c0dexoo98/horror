package ir.hollowvale;

import ir.hollowvale.engine.Audio;
import ir.hollowvale.engine.Renderer;
import ir.hollowvale.game.Ctrl;
import ir.hollowvale.game.World;

/** Game state machine + glue. */
public final class Game {
    public enum State { MENU, HOWTO, PLAYING, PAUSED, DEAD, WIN }

    public State state = State.MENU;
    public World world;
    public Audio audio;
    public Renderer renderer;
    public boolean soundOn = true, mapOn = true, tasksOpen = false;
    public long playTicks;
    public double jumpT;
    private double hbT = 0;

    public void newGame() {
        world = new World();
        playTicks = 0;
        jumpT = 0;
        tasksOpen = false;
        state = State.PLAYING;
    }

    public void update(double dt, Ctrl c) {
        if (state == State.DEAD && jumpT > 0) jumpT = Math.max(0, jumpT - dt);
        if (state != State.PLAYING || world == null) return;

        if (c.mapEdge) { c.mapEdge = false; mapOn = !mapOn; }
        if (c.tasksEdge) { c.tasksEdge = false; tasksOpen = !tasksOpen; }
        if (tasksOpen) { c.useEdge = false; c.useHeld = false; return; }

        playTicks++;
        world.tick(dt, c);

        for (String s : world.consumeSounds()) {
            play(s);
        }
        if (world.gameOver) {
            state = State.DEAD;
            jumpT = 1.5;
            play("scream");
        }
        if (world.win) {
            state = State.WIN;
            play("win");
        }

        double fear = world.player.fear;
        if (fear > 45) {
            hbT -= dt;
            if (hbT <= 0) {
                hbT = 1.15 - 0.62 * (fear - 45) / 55;
                audio.play("heartbeat", 0.25f + 0.55f * (float) (fear / 100.0), 1f);
            }
        }
        if (audio != null) audio.tick(world.monster.isChasing(), (float) dt);
    }

    private void play(String s) {
        if (audio == null || !soundOn) return;
        float v;
        switch (s) {
            case "step": v = 0.5f; break;
            case "stepRun": v = 0.72f; break;
            case "click": v = 0.6f; break;
            case "pickup": v = 0.7f; break;
            case "paper": v = 0.6f; break;
            case "creak": v = 0.85f; break;
            case "locked": v = 0.6f; break;
            case "growl": v = 1.0f; break;
            case "thunder": v = 0.75f; break;
            case "hit": v = 0.95f; break;
            case "banish": case "scream": case "gate": v = 1.0f; break;
            case "win": v = 0.8f; break;
            default: v = 0.8f;
        }
        float rate = 1f;
        if (s.equals("step") || s.equals("stepRun")) rate = 0.9f + (float) Math.random() * 0.18f;
        audio.play(s, v, rate);
    }

    public void togglePause() {
        if (state == State.PLAYING) {
            state = State.PAUSED;
            tasksOpen = false;
        } else if (state == State.PAUSED) {
            state = State.PLAYING;
        }
    }

    public String playTimeString() {
        long s = playTicks / 60;
        return String.format("%02d:%02d", s / 60, s % 60);
    }

    /** UI taps from Input (menu screens, overlays). */
    public void onTap(float x, float y) {
        Hud h = hudRef;
        if (h == null) return;
        h.handleTap(x, y);
    }

    public Hud hudRef;
}
