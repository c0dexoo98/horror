package ir.hollowvale.game;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/** HOLLOW VALE v4 — "The Hunter" enemy: patrol/investigate/chase/search AI with BFS pathfinding. */
public final class Hunter extends Ent {
    public static final int DORMANT = 0, PATROL = 1, INVESTIGATE = 2, CHASE = 3, SEARCH = 4, STUNNED = 5, DEAD = 6;

    public int state = DORMANT;
    public float stateT = 0;
    public float speed = 1.5f;
    public float frame = 0;
    public float hp = 100;
    public float stunDur = 0;
    public float lastSeenX, lastSeenY;
    public float repathT = 0;
    public float soundT = 0;      // growl timer
    public List<int[]> path = new ArrayList<int[]>();
    public int pathIdx = 0;
    public float alertT = 0;      // time remaining in heightened awareness

    private static final Random R = new Random(20261);
    private int[] patrolTarget = null;

    public Hunter(float x, float y) {
        super(x, y, 0, 1.35f);
        state = DORMANT;
    }

    public boolean blocksPlayer() { return state != DEAD && state != DORMANT; }

    public void wake(World w) {
        if (state == DORMANT) {
            // make sure spawn cell is walkable
            for (int r = 0; r < 6 && !walkableFor(w, (int) x, (int) y); r++) {
                for (int dy = -r; dy <= r; dy++)
                    for (int dx = -r; dx <= r; dx++) {
                        if (walkableFor(w, (int) x + dx, (int) y + dy)) {
                            x += dx;
                            y += dy;
                            dx = r + 1;
                            dy = r + 1;
                            break;
                        }
                    }
            }
            state = PATROL;
            stateT = 0;
            pickPatrol(w);
            w.snd("enemy_growl");
        }
    }

    public void stun(float t) {
        state = STUNNED;
        stateT = 0;
        stunDur = t;
        path.clear();
    }

    public void kill(World w) {
        state = DEAD;
        tile = 5; // dead sprite
        scale = 1.0f;
        w.snd("enemy_die");
    }

    private void pickPatrol(World w) {
        for (int tries = 0; tries < 40; tries++) {
            int tx = 2 + R.nextInt(MapData.W - 4);
            int ty = 2 + R.nextInt(MapData.H - 4);
            char c = w.cell(tx, ty);
            if (!Raycast.solid(c, w, tx, ty) && c != 'g') {
                patrolTarget = new int[]{tx, ty};
                return;
            }
        }
        patrolTarget = new int[]{MapData.START_X, MapData.START_Y};
    }

    private static boolean walkableFor(World w, int x, int y) {
        if (x < 0 || y < 0 || x >= MapData.W || y >= MapData.H) return false;
        char c = w.cell(x, y);
        if (Raycast.isWall(c)) return false;
        if (c == 'd' || c == 'h') return true;          // hunter opens normal doors
        if (Raycast.isDoor(c)) return false;            // locked/boarded/code gates block it
        return true;
    }

    /** BFS path to (tx,ty). Returns true if path found. */
    public boolean findPath(World w, int tx, int ty) {
        int W = MapData.W, H = MapData.H;
        int[] prev = new int[W * H];
        for (int i = 0; i < prev.length; i++) prev[i] = -1;
        ArrayDeque<Integer> q = new ArrayDeque<Integer>();
        int s = (int) y * W + (int) x;
        int goal = ty * W + tx;
        if (!walkableFor(w, tx, ty)) {
            // nudge goal to nearest walkable
            goal = -1;
            outer:
            for (int r = 1; r <= 4; r++) {
                for (int dy = -r; dy <= r; dy++)
                    for (int dx = -r; dx <= r; dx++) {
                        int nx = tx + dx, ny = ty + dy;
                        if (nx > 0 && ny > 0 && nx < W && ny < H && walkableFor(w, nx, ny)) {
                            goal = ny * W + nx;
                            break outer;
                        }
                    }
            }
            if (goal < 0) return false;
        }
        prev[s] = s;
        q.add(s);
        while (!q.isEmpty()) {
            int cur = q.poll();
            if (cur == goal) break;
            int cx = cur % W, cy = cur / W;
            for (int d = 0; d < 4; d++) {
                int nx = cx + (d == 0 ? 1 : d == 1 ? -1 : 0);
                int ny = cy + (d == 2 ? 1 : d == 3 ? -1 : 0);
                int ni = ny * W + nx;
                if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
                if (prev[ni] != -1 || !walkableFor(w, nx, ny)) continue;
                prev[ni] = cur;
                q.add(ni);
            }
        }
        if (prev[goal] == -1) return false;
        path.clear();
        int cur = goal;
        while (cur != s) {
            path.add(new int[]{cur % W, cur / W});
            cur = prev[cur];
            if (path.size() > 600) break;
        }
        java.util.Collections.reverse(path);
        pathIdx = 0;
        return true;
    }

    private void followPath(World w, float dt, float spd) {
        if (pathIdx >= path.size()) return;
        int[] wp = path.get(pathIdx);
        float tx = wp[0] + 0.5f, ty = wp[1] + 0.5f;
        // open normal doors on the way
        char c = w.cell(wp[0], wp[1]);
        if ((c == 'd' || c == 'h') && w.doorOpenAmount(wp[0], wp[1]) < 1f) {
            w.setDoorOpen(wp[0], wp[1], 1f);
            w.snd("door_open");
        }
        float dx = tx - x, dy = ty - y;
        float d = (float) Math.sqrt(dx * dx + dy * dy);
        if (d < 0.15f) {
            pathIdx++;
            return;
        }
        float[] mv = Raycast.move(w, x, y, dx / d * spd * dt, dy / d * spd * dt, 0.3f);
        x = mv[0]; y = mv[1];
        frame += dt * 6 * spd;
        tile = ((int) frame) % 4;
    }

    public boolean canSeePlayer(World w) {
        Player p = w.player;
        if (w.gameState != World.PLAY && w.gameState != World.STRUGGLE) return false;
        float dx = p.x - x, dy = p.y - y;
        float d = (float) Math.sqrt(dx * dx + dy * dy);
        float range = 9f;
        if (p.flashlight && p.battery > 0) range = 11.5f;
        if (p.crouching) range -= 2.5f;
        if (d > range) return false;
        if (!Raycast.los(w, x, y, p.x, p.y)) return false;
        if (d < 1.8f) return true; // very close: senses you
        // FOV check ~110° relative to hunter's facing
        float facing = (float) Math.atan2(dy, dx);
        float ang = Math.abs(normAngle(facing - faceDir));
        return ang < 0.96f;
    }

    private static float normAngle(float a) {
        while (a > Math.PI) a -= 2 * Math.PI;
        while (a < -Math.PI) a += 2 * Math.PI;
        return a;
    }

    public float faceDir = 0;

    public void hear(World w, float px, float py, float loudness) {
        if (state == DEAD || state == DORMANT || state == STUNNED) return;
        float d = (float) Math.sqrt((px - x) * (px - x) + (py - y) * (py - y));
        if (d < loudness) {
            if (state != CHASE) {
                state = INVESTIGATE;
                stateT = 0;
                lastSeenX = px;
                lastSeenY = py;
                repathT = 0;
            }
        }
    }

    public void tick(World w, float dt) {
        stateT += dt;
        Player p = w.player;
        float pdx = p.x - x, pdy = p.y - y;
        float pd = (float) Math.sqrt(pdx * pdx + pdy * pdy);

        switch (state) {
            case DORMANT:
                return;

            case STUNNED:
                tile = 4;
                if (stateT > stunDur) {
                    state = CHASE;
                    stateT = 0;
                    repathT = 0;
                }
                return;

            case DEAD:
                return;

            case PATROL: {
                speed = 1.5f;
                if (canSeePlayer(w)) {
                    enterChase(w);
                    break;
                }
                soundT += dt;
                if (soundT > 7f) {
                    soundT = 0;
                    if (pd < 12) w.snd("enemy_growl");
                }
                if (patrolTarget == null || pathIdx >= path.size()) {
                    pickPatrol(w);
                    findPath(w, patrolTarget[0], patrolTarget[1]);
                }
                followPath(w, dt, speed);
                break;
            }

            case INVESTIGATE: {
                speed = 2.1f;
                if (canSeePlayer(w)) {
                    enterChase(w);
                    break;
                }
                repathT -= dt;
                if (repathT <= 0) {
                    repathT = 0.7f;
                    findPath(w, (int) lastSeenX, (int) lastSeenY);
                }
                followPath(w, dt, speed);
                if (pathIdx >= path.size()) {
                    state = SEARCH;
                    stateT = 0;
                }
                break;
            }

            case CHASE: {
                speed = 2.85f;
                if (canSeePlayer(w)) {
                    lastSeenX = p.x;
                    lastSeenY = p.y;
                    alertT = 4f;
                } else {
                    alertT -= dt;
                }
                faceDir = (float) Math.atan2(pdy, pdx);
                repathT -= dt;
                if (repathT <= 0) {
                    repathT = 0.4f;
                    findPath(w, (int) lastSeenX, (int) lastSeenY);
                }
                followPath(w, dt, speed);
                w.chaseMusic = Math.min(1f, w.chaseMusic + dt * 2f);
                if (pd < 0.75f && p.hurtCd <= 0) {
                    w.startStruggle();
                }
                if (alertT <= 0 && !canSeePlayer(w)) {
                    state = SEARCH;
                    stateT = 0;
                    w.chaseMusic = 0f;
                }
                break;
            }

            case SEARCH: {
                speed = 1.9f;
                if (canSeePlayer(w)) {
                    enterChase(w);
                    break;
                }
                repathT -= dt;
                if (repathT <= 0) {
                    repathT = 1.2f;
                    int rx = (int) lastSeenX + R.nextInt(7) - 3;
                    int ry = (int) lastSeenY + R.nextInt(7) - 3;
                    findPath(w, rx, ry);
                }
                followPath(w, dt, speed);
                if (stateT > 14f) {
                    state = PATROL;
                    stateT = 0;
                    patrolTarget = null;
                }
                break;
            }
        }
    }

    private void enterChase(World w) {
        if (state != CHASE) {
            w.snd("chase_scream");
            state = CHASE;
            stateT = 0;
            repathT = 0;
            alertT = 4f;
            lastSeenX = w.player.x;
            lastSeenY = w.player.y;
        }
    }
}
