package com.hollowengine.scene;

import com.hollowengine.math.Vec2;

import java.util.ArrayList;
import java.util.List;

/**
 * HollowEngine — minimal 2D scene graph.
 * Entities have a transform (position/rotation/scale), optional parent, and
 * update()/draw() hooks. Scenes tick all entities in insertion order.
 * Intentionally tiny: real engines drown in hierarchy features nobody uses.
 */
public class Scene {
    public final List<Entity> entities = new ArrayList<Entity>();
    public boolean running = true;

    public <T extends Entity> T add(T e) {
        entities.add(e);
        e.scene = this;
        e.onEnter();
        return e;
    }

    public void remove(Entity e) {
        entities.remove(e);
        e.scene = null;
    }

    public void update(float dt) {
        if (!running) return;
        for (int i = 0; i < entities.size(); i++) {
            Entity e = entities.get(i);
            if (!e.enabled) continue;
            e.update(dt);
        }
    }

    public void clear() {
        for (Entity e : entities) e.scene = null;
        entities.clear();
    }

    public int count() { return entities.size(); }

    /** base entity. */
    public static class Entity {
        public final Vec2 pos = new Vec2();
        public float rotation;
        public float scale = 1f;
        public boolean enabled = true;
        public String tag;
        Scene scene;

        protected void onEnter() { }

        public void update(float dt) { }

        public void draw(Object renderer) { }   // host casts to its own renderer type
    }
}
