package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;
import android.opengl.GLUtils;

import java.io.ByteArrayOutputStream;
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

/**
 * HOLLOW VALE v4 — GLES2 renderer: full-screen DDA raycast to a low-res FBO,
 * then a PS1 post pass (nearest upscale, dither+quantize, grain, vignette, FX).
 * All GL calls are wrapped defensively: a failure degrades to a dark screen, never a crash.
 */
public class Renderer implements GLSurfaceView.Renderer {
    private final Context ctx;
    public World world;
    public GameConfig cfg;
    private final HudBridge hud;

    private int progRay = 0, progPost = 0;
    private int fb = 0, fbTex = 0;
    private int mapTex = 0, atlasTex = 0, spritesTex = 0;
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
        quad = makeQuad();
        uLightPosR = fbuf(12 * 3);
        uLightColI = fbuf(12 * 3);
        uSprPTile = fbuf(24 * 3);
        uSprSShift = fbuf(24 * 3);
    }

    private static FloatBuffer fbuf(int n) {
        return ByteBuffer.allocateDirect(n * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
    }

    private static FloatBuffer makeQuad() {
        float[] q = {-1, -1, 1, -1, -1, 1, 1, 1};
        FloatBuffer b = ByteBuffer.allocateDirect(8 * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        b.put(q).position(0);
        return b;
    }

    // ------------------------------------------------ GL helpers
    private static int compile(int type, String src, String tag) {
        int sh = GLES20.glCreateShader(type);
        GLES20.glShaderSource(sh, src);
        GLES20.glCompileShader(sh);
        int[] ok = new int[1];
        GLES20.glGetShaderiv(sh, GLES20.GL_COMPILE_STATUS, ok, 0);
        if (ok[0] == 0) {
            String log = GLES20.glGetShaderInfoLog(sh);
            GLES20.glDeleteShader(sh);
            throw new IllegalStateException(tag + ": " + log);
        }
        return sh;
    }

    private static int program(String vs, String fs, String tag) {
        int p = GLES20.glCreateProgram();
        int v = compile(GLES20.GL_VERTEX_SHADER, vs, tag + ".vert");
        int f = compile(GLES20.GL_FRAGMENT_SHADER, fs, tag + ".frag");
        GLES20.glAttachShader(p, v);
        GLES20.glAttachShader(p, f);
        GLES20.glLinkProgram(p);
        int[] ok = new int[1];
        GLES20.glGetProgramiv(p, GLES20.GL_LINK_STATUS, ok, 0);
        if (ok[0] == 0) {
            String log = GLES20.glGetProgramInfoLog(p);
            GLES20.glDeleteProgram(p);
            throw new IllegalStateException(tag + " link: " + log);
        }
        return p;
    }

    private int loadTex(int resId, boolean nearest) {
        Bitmap b = BitmapFactory.decodeResource(ctx.getResources(), resId);
        if (b == null) return 0;
        int[] t = new int[1];
        GLES20.glGenTextures(1, t, 0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, t[0]);
        GLUtils.texImage2D(GLES20.GL_TEXTURE_2D, 0, b, 0);
        int filter = nearest ? GLES20.GL_NEAREST : GLES20.GL_LINEAR;
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, filter);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, filter);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_REPEAT);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_REPEAT);
        b.recycle();
        return t[0];
    }

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
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_NEAREST);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_NEAREST);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE);
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

    private void buildFbo(int w, int h) {
        lowW = Math.max(160, w);
        lowH = Math.max(100, h);
        if (fbTex != 0) {
            GLES20.glDeleteTextures(1, new int[]{fbTex}, 0);
            fbTex = 0;
        }
        if (fb != 0) {
            GLES20.glDeleteFramebuffers(1, new int[]{fb}, 0);
            fb = 0;
        }
        int[] t = new int[1];
        GLES20.glGenTextures(1, t, 0);
        fbTex = t[0];
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, fbTex);
        GLES20.glTexImage2D(GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGB, lowW, lowH, 0,
                GLES20.GL_RGB, GLES20.GL_UNSIGNED_BYTE, null);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_NEAREST);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_NEAREST);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE);
        int[] f = new int[1];
        GLES20.glGenFramebuffers(1, f, 0);
        fb = f[0];
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fb);
        GLES20.glFramebufferTexture2D(GLES20.GL_FRAMEBUFFER, GLES20.GL_COLOR_ATTACHMENT0,
                GLES20.GL_TEXTURE_2D, fbTex, 0);
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, 0);
    }

    @Override
    public void onSurfaceCreated(GL10 gl, EGLConfig config) {
        try {
            progRay = program(Raw.read(ctx, R.raw.vert_common), Raw.read(ctx, R.raw.raycast_frag), "raycast");
            progPost = program(Raw.read(ctx, R.raw.vert_common), Raw.read(ctx, R.raw.post_frag), "post");
            atlasTex = loadTex(R.drawable.atlas, false);
            spritesTex = loadTex(R.drawable.sprites, true);
            mapTex = 0;
            buildMapTex();
            buildFbo(lowW, lowH);
        } catch (Throwable t) {
            fatalError = "GL init: " + t.getMessage();
        }
    }

    @Override
    public void onSurfaceChanged(GL10 gl, int width, int height) {
        scrW = Math.max(1, width);
        scrH = Math.max(1, height);
        int h = cfg.renderHeight();
        int w = (int) ((long) h * scrW / Math.max(1, scrH));
        buildFbo(w, h);
        GLES20.glViewport(0, 0, scrW, scrH);
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
        if (fatalError != null || progRay == 0) {
            GLES20.glClearColor(0.01f, 0.01f, 0.02f, 1);
            GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT);
            return;
        }
        buildMapTex(); // tiny 48x40; doors update live

        world.buildLights(lightBuf, lightCount);
        world.buildSprites(spriteList);

        // low-res raycast pass
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fb);
        GLES20.glViewport(0, 0, lowW, lowH);
        GLES20.glUseProgram(progRay);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, mapTex);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE1);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, atlasTex);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE3);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, spritesTex);

        setV(progRay, "uMap", 0);
        setV(progRay, "uAtlas", 1);
        setV(progRay, "uSprites", 3);
        setF(progRay, "uMapSize", MapData.W, MapData.H);
        setF(progRay, "uPos", world.player.x, world.player.y);
        setF(progRay, "uDir", (float) Math.cos(world.player.dir), (float) Math.sin(world.player.dir));
        setF(progRay, "uPitch", world.player.pitch + world.player.bobAmt * 0.035f * (float) Math.sin(world.player.bob * 2f));
        setF(progRay, "uFov", 0.66f);
        setF(progRay, "uTime", time);
        setF(progRay, "uAspect", (float) lowW / Math.max(1, lowH));
        setF(progRay, "uFog", cfg.fog ? 1.35f : 2.6f);
        setF(progRay, "uLightning", Math.max(0, world.lightning));
        setF(progRay, "uFlashOn", world.player.flashlight && world.player.battery > 0 ? 1f : 0f);
        setF(progRay, "uFlashBat", world.player.battery / 100f);
        setI(progRay, "uLightCount", lightCount[0]);
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
        setV3(progRay, "uLightPosR", uLightPosR, 12);
        setV3(progRay, "uLightColI", uLightColI, 12);

        int n = Math.min(24, spriteList.size());
        setI(progRay, "uSpriteCount", n);
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
        setV3(progRay, "uSprPTile", uSprPTile, 24);
        setV3(progRay, "uSprSShift", uSprSShift, 24);

        drawQuad(progRay, "aPos");

        // post pass to screen
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, 0);
        GLES20.glViewport(0, 0, scrW, scrH);
        GLES20.glUseProgram(progPost);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, fbTex);
        setV(progPost, "uTex", 0);
        setF(progPost, "uTime", time);
        setF(progPost, "uGrain", cfg.grain ? 0.055f : 0.0f);
        setF(progPost, "uDamage", Math.max(0, Math.min(1, world.damageFlash)));
        float san = 1f - world.player.sanity / 100f;
        setF(progPost, "uSanity", san * san);
        setF(progPost, "uFlash", Math.max(0, Math.min(1, world.camFlash)));
        setF(progPost, "uVignette", 0.85f);
        setF(progPost, "uLightning", Math.max(0, world.lightning));
        drawQuad(progPost, "aPos");
    }

    private void drawQuad(int prog, String attr) {
        int loc = GLES20.glGetAttribLocation(prog, attr);
        GLES20.glEnableVertexAttribArray(loc);
        quad.position(0);
        GLES20.glVertexAttribPointer(loc, 2, GLES20.GL_FLOAT, false, 8, quad);
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP, 0, 4);
        GLES20.glDisableVertexAttribArray(loc);
    }

    private static int uni(int prog, String name) {
        return GLES20.glGetUniformLocation(prog, name);
    }

    private void setF(int prog, String name, float a, float b) {
        GLES20.glUniform2f(uni(prog, name), a, b);
    }

    private void setV(int prog, String name, int v) {
        GLES20.glUniform1i(uni(prog, name), v);
    }

    private void setF(int prog, String name, float v) {
        GLES20.glUniform1f(uni(prog, name), v);
    }

    private void setI(int prog, String name, int v) {
        GLES20.glUniform1i(uni(prog, name), v);
    }

    private void setV3(int prog, String name, FloatBuffer b, int count) {
        GLES20.glUniform3fv(uni(prog, name), count, b);
    }

    /** trigger map texture rebuild (door states changed). */
    public void markMapDirty() {
        mapDirty = true;
    }

    public void onQualityChanged() {
        int h = cfg.renderHeight();
        int w = (int) ((long) h * scrW / Math.max(1, scrH));
        buildFbo(w, h);
    }
}
