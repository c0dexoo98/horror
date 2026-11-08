package ir.hollowvale.game;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/** Tile world: collision, DDA raycast, line of sight, BFS pathfinding, exploration. */
public final class Map {
    public static final int EMPTY = 0, STONE = 1, BRICK = 2, CHURCH = 3, DOOR = 4, CDOOR = 5,
            GATE = 6, PILLAR = 7, ALTAR = 8, FOUNTAIN = 9, TREE = 10;
    public static final int TEX_COUNT = 11;

    public final int W, H;
    private final byte[] grid;
    public final boolean[] explored;

    public Map() {
        W = MapData.W; H = MapData.H;
        grid = new byte[W * H];
        for (int y = 0; y < H; y++) {
            String row = MapData.ROWS[y];
            for (int x = 0; x < W; x++) {
                byte t;
                switch (row.charAt(x)) {
                    case '#': t = STONE; break;
                    case 'B': t = BRICK; break;
                    case 'S': t = CHURCH; break;
                    case 'D': t = DOOR; break;
                    case 'C': t = CDOOR; break;
                    case 'G': t = GATE; break;
                    case 'P': t = PILLAR; break;
                    case 'A': t = ALTAR; break;
                    case 'F': t = FOUNTAIN; break;
                    case 'T': t = TREE; break;
                    default: t = EMPTY;
                }
                grid[y * W + x] = t;
            }
        }
        explored = new boolean[W * H];
    }

    public int tile(int tx, int ty) {
        if (tx < 0 || ty < 0 || tx >= W || ty >= H) return STONE;
        return grid[ty * W + tx] & 0xFF;
    }

    public boolean solid(int tx, int ty) { return tile(tx, ty) != EMPTY; }

    public boolean circleBlocked(double x, double y, double r) {
        int x0 = (int) Math.floor(x - r), x1 = (int) Math.floor(x + r);
        int y0 = (int) Math.floor(y - r), y1 = (int) Math.floor(y + r);
        for (int ty = y0; ty <= y1; ty++) {
            for (int tx = x0; tx <= x1; tx++) {
                if (!solid(tx, ty)) continue;
                double cx = Math.max(tx, Math.min(x, tx + 1.0));
                double cy = Math.max(ty, Math.min(y, ty + 1.0));
                double dx = x - cx, dy = y - cy;
                if (dx * dx + dy * dy < r * r) return true;
            }
        }
        return false;
    }

    public void setOpen(int tx, int ty) {
        if (tx >= 0 && ty >= 0 && tx < W && ty < H) grid[ty * W + tx] = EMPTY;
    }

    public static final class Ray {
        public boolean hit;
        public double dist, wallX;
        public int tile, side, mapX, mapY;
    }

    /** DDA raycast. With a normalized direction, dist is the euclidean distance;
     *  with a camera-plane ray it is the perpendicular wall distance. */
    public void cast(double px, double py, double rdx, double rdy, double maxDist, Ray out) {
        out.hit = false; out.dist = maxDist; out.tile = STONE; out.side = 0; out.wallX = 0;
        int mapX = (int) px, mapY = (int) py;
        if (solid(mapX, mapY)) {
            out.hit = true; out.dist = 0; out.tile = tile(mapX, mapY);
            out.mapX = mapX; out.mapY = mapY;
            return;
        }
        double ddx = rdx == 0 ? 1e30 : Math.abs(1.0 / rdx);
        double ddy = rdy == 0 ? 1e30 : Math.abs(1.0 / rdy);
        int stepX, stepY; double sdx, sdy;
        if (rdx < 0) { stepX = -1; sdx = (px - mapX) * ddx; } else { stepX = 1; sdx = (mapX + 1 - px) * ddx; }
        if (rdy < 0) { stepY = -1; sdy = (py - mapY) * ddy; } else { stepY = 1; sdy = (mapY + 1 - py) * ddy; }
        int side = 0; double dist = 0; int t = 0;
        while (t++ < 200) {
            if (sdx < sdy) { dist = sdx; sdx += ddx; mapX += stepX; side = 0; }
            else { dist = sdy; sdy += ddy; mapY += stepY; side = 1; }
            if (dist > maxDist) return;
            if (solid(mapX, mapY)) {
                out.hit = true; out.dist = dist; out.side = side;
                out.mapX = mapX; out.mapY = mapY; out.tile = tile(mapX, mapY);
                double wx = side == 0 ? py + dist * rdy : px + dist * rdx;
                wx -= Math.floor(wx);
                if (side == 0 && rdx > 0) wx = 1 - wx;
                if (side == 1 && rdy < 0) wx = 1 - wx;
                out.wallX = wx;
                return;
            }
        }
    }

    public boolean lineOfSight(double x0, double y0, double x1, double y1) {
        double dx = x1 - x0, dy = y1 - y0;
        double d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.0001) return true;
        Ray r = new Ray();
        cast(x0, y0, dx / d, dy / d, d + 0.001, r);
        return !r.hit;
    }

    /** BFS on tiles. Wooden doors (DOOR) are passable when doorsOpenable. */
    public List<int[]> findPath(int sx, int sy, int tx, int ty, boolean doorsOpenable) {
        List<int[]> empty = new ArrayList<>();
        if (sx == tx && sy == ty) return empty;
        if (tx < 0 || ty < 0 || tx >= W || ty >= H) return empty;
        boolean[] vis = new boolean[W * H];
        int[] prev = new int[W * H];
        Arrays.fill(prev, -1);
        ArrayDeque<Integer> q = new ArrayDeque<>();
        int s = sy * W + sx, t = ty * W + tx;
        vis[s] = true; q.add(s);
        while (!q.isEmpty()) {
            int cur = q.poll();
            if (cur == t) break;
            int cx = cur % W, cy = cur / W;
            for (int k = 0; k < 4; k++) {
                int nx = cx + (k == 0 ? 1 : k == 1 ? -1 : 0);
                int ny = cy + (k == 2 ? 1 : k == 3 ? -1 : 0);
                if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
                int ni = ny * W + nx;
                if (vis[ni]) continue;
                int tl = grid[ni] & 0xFF;
                boolean pass = tl == EMPTY || (doorsOpenable && tl == DOOR);
                if (!pass) continue;
                vis[ni] = true; prev[ni] = cur; q.add(ni);
            }
        }
        if (!vis[t]) return empty;
        ArrayList<int[]> out = new ArrayList<>();
        int cur = t;
        while (cur != s && cur >= 0) { out.add(new int[]{cur % W, cur / W}); cur = prev[cur]; }
        Collections.reverse(out);
        return out;
    }

    public void markExplored(double px, double py, double r) {
        int cx = (int) px, cy = (int) py, R = (int) Math.ceil(r);
        for (int ty = cy - R; ty <= cy + R; ty++) {
            for (int tx = cx - R; tx <= cx + R; tx++) {
                if (tx < 0 || ty < 0 || tx >= W || ty >= H) continue;
                if ((tx - cx) * (tx - cx) + (ty - cy) * (ty - cy) <= r * r) explored[ty * W + tx] = true;
            }
        }
    }
}
