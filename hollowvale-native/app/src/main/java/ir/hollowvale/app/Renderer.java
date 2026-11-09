package ir.hollowvale.app;

import android.content.Context;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

import ir.hollowvale.game.Ent;
import ir.hollowvale.game.GameConfig;
import ir.hollowvale.game.MapData;
import ir.hollowvale.R;
import ir.hollowvale.game.World;

import com.hollowengine.assets.Assets;
import com.hollowengine.graphics.FullscreenPass;
import com.hollowengine.graphics.Gfx;
import com.hollowengine.graphics.RenderTarget;
import com.hollowengine.graphics.ShaderProgram;
import com.hollowengine.graphics.Texture;

/**
 * HOLLOW VALE v6 — renderer, rebuilt on the HollowEngine graphics core.
 *
 * Pipeline (unchanged visuals): full-screen DDA raycast shader renders the scene
 * into a low-res {@link RenderTarget}; a PS1 post shader (nearest upscale,
 * dither+quantize, grain, vignette, sanity FX) presents it to the screen.
 *
 * Engine classes used: ShaderProgram (uniform-cached, crash-safe setters),
 * RenderTarget (FBO), Texture (wall atlas now mipmapped + anisotropic for
 * noticeably better distant-wall quality; sprites stay crisp NEAREST),
 * FullscreenPass (quad), Assets (shader/bitmap loading).
 * All GL calls remain defensive: a failure degrades to a dark screen, never a crash.
 */
public class Renderer implements GLSurfaceView.Renderer {
    private final Context ctx;
    public World world;
    public GameConfig cfg;
    private final HudBridge hud;

    private ShaderProgram progRay, progPost;
    private RenderTarget target;
    private Texture atlasTex, spritesTex;
    private int mapTex = 0;   // dynamic data texture (tile ids + door openness), rebuilt live
    private int lowW = 426, lowH = 240;
    private int scrW = 1280, scrH = 720;
    private long lastNanos = 0;
    private float time = 0;
    private float[] lightBuf = new float[96];
    private int[] lightCount = new int[1];
    private java.util.ArrayList<Ent> spriteList = new java.util.ArrayList<Ent>();
    private FloatBuffer quad;
    private FloatBuffer uLightPosR, uLightColI, uSprPTile, uSprSShift;
    private boolean mapDirty = true;
    private float fps = 60;
    public volatile float fpsShown = 60;
    public volatile String fatalError = null;
    private int frameNo = 0;

    /** bridge to the HUD/controls (runs on UI thread). */
    public interface HudBridge {
        void onFrame(float dt);
    }

    public Renderer(Context ctx, World world, GameConfig cfg, HudBridge hud) {
        this.ctx = ctx;
        this.world = world;
        this.cfg = cfg;
        this.hud = hud;
        quad = FullscreenPass.quad();
        uLightPosR = Gfx.floatBuffer(12 * 3);
        uLightColI = Gfx.floatBuffer(12 * 3);
        uSprPTile = Gfx.floatBuffer(24 * 3);
        uSprSShift = Gfx.floatBuffer(24 * 3);
    }

    // ------------------------------------------------ GL setup (engine-backed)

    @Override
    public void onSurfaceCreated(GL10 gl, EGLConfig config) {
        try {
            progRay = new ShaderProgram(
                    Assets.readText(ctx, R.raw.vert_common, ""),
                    Assets.readText(ctx, R.raw.raycast_frag, ""), "raycast");
            progPost = new ShaderProgram(
                    Assets.readText(ctx, R.raw.vert_common, ""),
                    Assets.readText(ctx, R.raw.post_frag, ""), "post");
            // walls: mipmapped + trilinear + anisotropic → distant walls stop shimmering
            atlasTex = Texture.highQuality(Assets.bitmap(ctx, R.drawable.atlas));
            // sprites: classic crisp nearest (PS1 billboards)
            spritesTex = Texture.nearest(Assets.bitmap(ctx, R.drawable.sprites));
            mapTex = 0;
            buildMapTex();
            target = new RenderTarget(lowW, lowH);
        } catch (Throwable t) {
            fatalError = "GL init: " + t.getMessage();
        }
    }

    @Override
    public void onSurfaceChanged(GL10 gl, int width, int height) {
        scrW = Math.max(1, width);
        scrH = Math.max(1, height);
        rebuildTarget();
        GLES20.glViewport(0, 0, scrW, scrH);
    }

    private void rebuildTarget() {
        int h = cfg.renderHeight();
        int w = (int) ((long) h * scrW / Math.max(1, scrH));
        if (target == null) target = new RenderTarget(w, h);
        else target.resize(w, h);
        lowW = target.width;
        lowH = target.height;
    }

    @Override
    public void onDrawFrame(GL10 gl) {
        long now = System.nanoTime();
        float dt = lastNanos == 0 ? 0.016f : (float) ((now - lastNanos) / 1e9);
        lastNanos = now;
        dt = Math.min(dt, 0.05f);
        time += dt;
        frameNo++;
        if (frameNo % 15 == 0) {
            fps = 1f / Math.max(dt, 0.001f);
            fpsShown = fps;
        }
        if (hud != null) hud.onFrame(dt);
        if (fatalError != null || progRay == null || !progRay.isValid()) {
            FullscreenPass.clear(0.01f, 0.01f, 0.02f, 1);
            return;
        }
        buildMapTex(); // tiny 48x40; doors update live

        world.buildLights(lightBuf, lightCount);
        world.buildSprites(spriteList);

        // low-res raycast pass
        target.bind();
        progRay.bind();
        atlasTex.bind(1);
        spritesTex.bind(3);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, mapTex);

        progRay.set("uMap", 0);
        progRay.set("uAtlas", 1);
        progRay.set("uSprites", 3);
        progRay.set("uMapSize", (float) MapData.W, (float) MapData.H);
        progRay.set("uPos", world.player.x, world.player.y);
        progRay.set("uDir", (float) Math.cos(world.player.dir), (float) Math.sin(world.player.dir));
        progRay.set("uPitch", world.player.pitch + world.player.bobAmt * 0.035f * (float) Math.sin(world.player.bob * 2f));
        progRay.set("uFov", 0.66f);
        progRay.set("uTime", time);
        progRay.set("uAspect", (float) lowW / Math.max(1, lowH));
        progRay.set("uFog", cfg.fog ? 1.35f : 2.6f);
        progRay.set("uLightning", Math.max(0, world.lightning));
        progRay.set("uFlashOn", world.player.flashlight && world.player.battery > 0 ? 1f : 0f);
        progRay.set("uFlashBat", world.player.battery / 100f);
        progRay.set("uLightCount", lightCount[0]);
        uLightPosR.clear();
        uLightColI.clear();
        for (int i = 0; i < 12; i++) {
            // lightBuf layout: [0]=x [1]=y [2..4]=rgb [5]=intensity [6]=radius [7]=seed
            uLightPosR.put(lightBuf[i * 8]).put(lightBuf[i * 8 + 1]).put(lightBuf[i * 8 + 6]); // x, y, RADIUS
            uLightColI.put(lightBuf[i * 8 + 2] * lightBuf[i * 8 + 5])
                    .put(lightBuf[i * 8 + 3] * lightBuf[i * 8 + 5])
                    .put(lightBuf[i * 8 + 4] * lightBuf[i * 8 + 5]);                           // rgb × intensity
        }
        uLightPosR.position(0);
        uLightColI.position(0);
        progRay.setVec3Array("uLightPosR", uLightPosR, 12);
        progRay.setVec3Array("uLightColI", uLightColI, 12);

        int n = Math.min(24, spriteList.size());
        progRay.set("uSpriteCount", n);
        uSprPTile.clear();
        uSprSShift.clear();
        for (int i = 0; i < 24; i++) {
            if (i < n) {
                Ent e = spriteList.get(i);
                uSprPTile.put(e.x).put(e.y).put(e.tile);
                uSprSShift.put(e.scale).put(e.vOffset).put(e.brightness);
            } else {
                uSprPTile.put(0).put(0).put(0);
                uSprSShift.put(0).put(0).put(0);
            }
        }
        uSprPTile.position(0);
        uSprSShift.position(0);
        progRay.setVec3Array("uSprPTile", uSprPTile, 24);
        progRay.setVec3Array("uSprSShift", uSprSShift, 24);

        FullscreenPass.draw(progRay, "aPos");

        // post pass to screen
        RenderTarget.unbind(scrW, scrH);
        progPost.bind();
        target.bindTexture(0);
        progPost.set("uTex", 0);
        progPost.set("uTime", time);
        progPost.set("uGrain", cfg.grain ? 0.055f : 0.0f);
        progPost.set("uDamage", Math.max(0, Math.min(1, world.damageFlash)));
        float san = 1f - world.player.sanity / 100f;
        progPost.set("uSanity", san * san);
        progPost.set("uFlash", Math.max(0, Math.min(1, world.camFlash)));
        progPost.set("uVignette", 0.85f);
        progPost.set("uLightning", Math.max(0, world.lightning));
        FullscreenPass.draw(progPost, "aPos");
    }

    // ------------------------------------------------ dynamic map data texture

    private void buildMapTex() {
        int[] t = new int[1];
        if (mapTex == 0) GLES20.glGenTextures(1, t, 0);
        else t[0] = mapTex;
        mapTex = t[0];
        ByteBuffer b = ByteBuffer.allocateDirect(MapData.W * MapData.H * 4).order(ByteOrder.nativeOrder());
        for (int y = 0; y < MapData.H; y++) {
            String row = MapData.ROWS[y];
            for (int x = 0; x < MapData.W; x++) {
                char c = row.charAt(x);
                int tile = wallTileFor(c);
                float open = 0f;
                if (ir.hollowvale.game.Raycast.isDoor(c)) {
                    tile = doorTileFor(c);
                    open = world.doorOpenAmount(x, y);
                    if (tile == 0) open = 0;
                }
                b.put((byte) tile);
                b.put((byte) (int) (open * 255f));
                b.put((byte) ceilTileFor(c));
                b.put((byte) floorTileFor(c));
            }
        }
        b.position(0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, mapTex);
        GLES20.glTexImage2D(GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA, MapData.W, MapData.H, 0,
                GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE, b);
        Gfx.texParams(GLES20.GL_NEAREST, GLES20.GL_NEAREST, GLES20.GL_CLAMP_TO_EDGE, GLES20.GL_CLAMP_TO_EDGE);
        mapDirty = false;
    }

    private static int wallTileFor(char c) {
        switch (c) {
            case 'B': return 0;      // mossy brick
            case 'P': return 1;      // wallpaper
            case '#': return 2;      // stone
            case 'W': return 3;      // wood
            case 'X': return 7;      // blood
            case 'K': return 8;      // bookshelf
            case 'M': return 9;      // mansion
            case 'S': return 10;     // basement
            case 'L': return 11;     // rune
            case 'F': return 12;     // fence
            case 'T': return 13;     // bark
            case 'A': return 15;     // painting
            case 'O': return 6;      // window
            default: return 0;       // floor / unknown
        }
    }

    private static int doorTileFor(char c) {
        switch (c) {
            case 'g': return 14;     // exit gate (code)
            case 'G': return 5;      // iron gate
            case 'Z': return 3;      // boarded wood
            case 'D':
            case 'd':
            case 'h': return 4;      // wooden door
            default: return 0;
        }
    }

    /** floor tile per area: interiors wood, church path stone, outdoors dirt. */
    private static int floorTileFor(char c) {
        switch (c) {
            case ':': return 19;     // paved stone road to the gates
            case '.': return 16;     // interior wood planks
            case 'h': case 'd': case 'D': case 'Z': return 16;
            case 'g': case 'G': return 16;
            default: return 18;      // outdoor dirt/grass
        }
    }

    /** ceiling tile per area: 0 = open sky. */
    private static int ceilTileFor(char c) {
        switch (c) {
            case '.': return 25;     // wood beams
            case 'h': case 'd': case 'D': case 'Z': return 24; // plaster
            case 'g': case 'G': return 24;
            default: return 0;       // outdoors → sky
        }
    }

    /** trigger map texture rebuild (door states changed). */
    public void markMapDirty() {
        mapDirty = true;
    }

    public void onQualityChanged() {
        rebuildTarget();
    }
}
