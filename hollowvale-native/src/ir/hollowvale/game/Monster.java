package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/** "The Mother" — the monster AI: patrol / investigate / chase / search / stun. */
public final class Monster {
    public enum State { PATROL, INVESTIGATE, CHASE, SEARCH, STUN }

    public double x, y, ang;
    public State state = State.PATROL;
    public boolean banished = false;

    private double stateT = 0, lostT = 0, repathT = 0, lookT = 0, wanderT = 0, stunT = 0, catchCd = 0;
    private double lsx, lsy;
    private List<int[]> path = new ArrayList<>();
    private int pathI = 0;
    private int patrolI = 0;
    private static final double FOV = Math.toRadians(115), SIGHT = 11;
    private final Random rng = new Random(999);

    public Monster(double x, double y) { this.x = x; this.y = y; }

    public boolean isChasing() { return state == State.CHASE; }

    public double speedNow() {
        switch (state) {
            case CHASE: return 3.9;
            case INVESTIGATE: case SEARCH: return 2.7;
            case STUN: return 0;
            default: return 1.8;
        }
    }

    public void update(double dt, World w) {
        if (banished) return;
        Player p = w.player;
        Map m = w.map;
        catchCd = Math.max(0, catchCd - dt);
        stateT += dt;

        double dx = p.x - x, dy = p.y - y;
        double dist = Math.sqrt(dx * dx + dy * dy);
        boolean sees = false;
        if (dist < SIGHT + (p.lightOn ? 3.5 : 0)) {
            double aTo = Math.atan2(dy, dx);
            if (Math.abs(World.angDiff(aTo, ang)) < FOV / 2 || dist < 1.8) {
                if (m.lineOfSight(x, y, p.x, p.y)) sees = true;
            }
        }
        if (sees) {
            lsx = p.x; lsy = p.y; lostT = 0;
            if (state != State.CHASE && state != State.STUN) {
                state = State.CHASE; stateT = 0; repathT = 0;
                w.sound("growl");
            }
        } else if (state == State.CHASE) {
            lostT += dt;
            if (lostT > 3.5) { state = State.SEARCH; stateT = 0; wanderT = 0; }
        }

        if (state != State.CHASE && state != State.STUN) {
            World.Noise bestN = null; double bd = 1e18;
            for (World.Noise n : w.noises) {
                double d = Math.sqrt((n.x - x) * (n.x - x) + (n.y - y) * (n.y - y));
                if (d < n.r && d < bd) { bd = d; bestN = n; }
            }
            if (bestN != null) {
                if (bd < 2.2 && bestN.r >= 7) {
                    state = State.CHASE; lsx = p.x; lsy = p.y; stateT = 0; repathT = 0;
                    w.sound("growl");
                } else if (state != State.INVESTIGATE || stateT > 3) {
                    state = State.INVESTIGATE; stateT = 0; lookT = 0;
                    setPath(m, (int) bestN.x, (int) bestN.y);
                }
            }
        }

        switch (state) {
            case STUN:
                stunT -= dt;
                if (stunT <= 0) { state = sees ? State.CHASE : State.PATROL; stateT = 0; }
                return;
            case CHASE:
                repathT -= dt;
                if (repathT <= 0) { repathT = 0.35; setPath(m, (int) p.x, (int) p.y); }
                break;
            case INVESTIGATE:
                if (pathI >= path.size()) {
                    lookT += dt;
                    ang += dt * 1.3;
                    if (lookT > 2.2) { state = State.PATROL; stateT = 0; }
                    return;
                }
                break;
            case SEARCH:
                wanderT -= dt;
                if (pathI >= path.size() || wanderT <= 0) {
                    wanderT = 2.2;
                    int rx = (int) lsx + rng.nextInt(7) - 3;
                    int ry = (int) lsy + rng.nextInt(7) - 3;
                    setPath(m, rx, ry);
                }
                if (stateT > 9) { state = State.PATROL; stateT = 0; }
                break;
            default:
                int[] wp = w.patrolPoint(patrolI++);
                if (pathI >= path.size() || path.isEmpty()) setPath(m, wp[0], wp[1]);
                break;
        }
        moveAlong(dt, w, speedNow());
        if (dist < 0.85 && catchCd <= 0 && !w.banished) {
            w.onMonsterHit();
            catchCd = 4;
            state = State.STUN; stunT = 1.25;
        }
    }

    private void setPath(Map m, int tx, int ty) {
        path = m.findPath((int) x, (int) y, tx, ty, true);
        pathI = 0;
    }

    private void moveAlong(double dt, World w, double speed) {
        if (pathI >= path.size()) {
            if (state == State.CHASE) {
                double ta = Math.atan2(w.player.y - y, w.player.x - x);
                ang += World.angDiff(ta, ang) * Math.min(1, dt * 6);
            }
            return;
        }
        int[] c = path.get(pathI);
        if (w.map.tile(c[0], c[1]) == Map.DOOR) w.openDoorAuto(c[0], c[1]);
        double cx = c[0] + 0.5, cy = c[1] + 0.5;
        double dx = cx - x, dy = cy - y;
        double d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.12) { pathI++; return; }
        double vx = dx / d * speed * dt, vy = dy / d * speed * dt;
        Map m = w.map;
        if (!m.circleBlocked(x + vx, y, 0.3)) x += vx;
        if (!m.circleBlocked(x, y + vy, 0.3)) y += vy;
        double ta = Math.atan2(dy, dx);
        ang += World.angDiff(ta, ang) * Math.min(1, dt * 8);
    }
}
