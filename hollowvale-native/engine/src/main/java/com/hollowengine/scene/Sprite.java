package com.hollowengine.scene;

import com.hollowengine.graphics.SpriteBatch;
import com.hollowengine.graphics.Texture;

/** HollowEngine — textured sprite entity drawable by a SpriteBatch. */
public class Sprite extends Scene.Entity {
    public Texture texture;
    public float width, height;      // world/px size
    public float u0, v0, u1, v1;     // source rect in the texture (0..1)
    public float r = 1, g = 1, b = 1, a = 1;

    public Sprite(Texture tex, float w, float h) {
        this.texture = tex;
        this.width = w;
        this.height = h;
        this.u0 = 0;
        this.v0 = 0;
        this.u1 = 1;
        this.v1 = 1;
    }

    /** pick a tile out of an atlas grid (col,row with gridDim tiles per side). */
    public void setAtlasTile(int tileIndex, int gridDim) {
        int col = tileIndex % gridDim;
        int row = tileIndex / gridDim;
        float s = 1f / gridDim;
        u0 = col * s;
        u1 = u0 + s;
        // atlas rows grow downward in image space; v flipped for GL
        v1 = 1f - row * s;
        v0 = v1 - s;
    }

    @Override
    public void draw(Object renderer) {
        if (renderer instanceof SpriteBatch && texture != null) {
            ((SpriteBatch) renderer).draw(texture, pos.x - width / 2, pos.y - height / 2,
                    width, height, u0, v0, u1, v1, r, g, b, a);
        }
    }
}
