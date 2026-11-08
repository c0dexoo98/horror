package ir.hollowvale.game;

/** HOLLOW VALE v4 — map access + collision + CPU raycast (pure JVM, shader does the rendering). */
public final class Raycast {

    // ---- cell classification (must match World) ----
    public static boolean isWall(char c) {
        return "#BWMKTFXLASTZO".indexOf(c) >= 0;
    }

    public static boolean isDoor(char c) {
        return c == 'd' || c == 'h' || c == 'D' || c == 'G' || c == 'g' || c == 'Z';
    }

    public static boolean isWindow(char c) { return c == 'O'; }

    public static boolean solid(char c, World w, int cx, int cy) {
        if (isWall(c)) return true;
        if (isDoor(c)) return w.doorOpenAmount(cx, cy) < 0.75f;
        return false;
    }

    /** DDA raycast. Returns distance to first solid cell or maxDist. */
    public static float cast(World w, float px, float py, float dx, float dy, float maxDist) {
        int mx = (int) px, my = (int) py;
        float ddx = dx == 0 ? 1e30f : Math.abs(1f / dx);
        float ddy = dy == 0 ? 1e30f : Math.abs(1f / dy);
        float sx = dx < 0 ? -1 : 1, sy = dy < 0 ? -1 : 1;
        float sdx = dx < 0 ? (px - mx) : (mx + 1 - px);
        float sdy = dy < 0 ? (py - my) : (my + 1 - py);
        float tdx = sdx * ddx, tdy = sdy * ddy;
        float dist = 0;
        for (int i = 0; i < 160 && dist < maxDist; i++) {
            if (tdx < tdy) {
                dist = tdx; tdx += ddx; mx += (int) sx;
            } else {
                dist = tdy; tdy += ddy; my += (int) sy;
            }
            if (dist >= maxDist) return maxDist;
            if (mx < 0 || my < 0 || mx >= MapData.W || my >= MapData.H) return maxDist;
            char c = w.cell(mx, my);
            if (solid(c, w, mx, my)) return dist;
        }
        return maxDist;
    }

    /** true if line of sight between two points is clear (doors >75% open count as open). */
    public static boolean los(World w, float x0, float y0, float x1, float y1) {
        float dx = x1 - x0, dy = y1 - y0;
        float d = (float) Math.sqrt(dx * dx + dy * dy);
        if (d < 0.001f) return true;
        return cast(w, x0, y0, dx / d, dy / d, d) >= d - 0.01f;
    }

    /** circle-vs-grid sliding collision: returns corrected [x,y]. */
    public static float[] move(World w, float x, float y, float vx, float vy, float r) {
        float nx = x + vx;
        if (blocked(w, nx, y, r)) {
            // try axis slide
            nx = x;
        }
        float ny = y + vy;
        if (blocked(w, nx, ny, r)) {
            ny = y;
        }
        return new float[]{nx, ny};
    }

    private static boolean blocked(World w, float x, float y, float r) {
        int x0 = (int) (x - r), x1 = (int) (x + r);
        int y0 = (int) (y - r), y1 = (int) (y + r);
        for (int cy = y0; cy <= y1; cy++) {
            for (int cx = x0; cx <= x1; cx++) {
                char c = w.cellAt(cx, cy); // '#' outside map
                if (!solid(c, w, cx, cy)) continue;
                float bx0 = cx, by0 = cy, bx1 = cx + 1, by1 = cy + 1;
                if (x + r > bx0 && x - r < bx1 && y + r > by0 && y - r < by1) return true;
            }
        }
        return false;
    }

    private Raycast() { }
}
