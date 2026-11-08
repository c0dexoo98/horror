package ir.hollowvale.game;

/** HOLLOW VALE v4 — world entity rendered as a sprite (pure data; renderer reads it). */
public class Ent {
    public float x, y;
    public int tile;          // sprite atlas index
    public float scale = 1f;  // world height in tiles
    public float vOffset = 0; // vertical offset (0 = on floor)
    public float brightness = 1f;
    public boolean remove = false;

    public Ent(float x, float y, int tile, float scale) {
        this.x = x; this.y = y; this.tile = tile; this.scale = scale;
    }
}
