package com.hollowengine.media;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.SurfaceTexture;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.Surface;
import android.view.TextureView;
import android.widget.FrameLayout;
import android.widget.ImageView;

/**
 * HollowEngine — cinematic video stage with "fit + blurred fill" presentation.
 *
 * The video is ALWAYS shown 100% complete (no cropping, no zoom) with a FIT-CENTER
 * transform, while an edge-to-edge blurred, darkened backdrop rendered from the
 * video's own frames fills the rest of the screen. Result: the whole file is visible
 * AND the screen looks full-bleed on every aspect ratio (16:9, 19.5:9, 20:9, 21:9...).
 *
 * Loops seamlessly, optional audio volume, and NEVER crashes: any error is reported
 * through {@link Listener#onVideoFailed()} so the host can fall back gracefully.
 */
public class VideoStage extends FrameLayout implements TextureView.SurfaceTextureListener {

    /** Called when the video cannot be played at all (missing/corrupt/codec error). */
    public interface Listener {
        void onVideoFailed();
    }

    private static final String TAG = "VideoStage";
    private static final int BLUR_W = 64, BLUR_H = 36;   // tiny backdrop frame → cheap blur
    private static final long BLUR_MS = 160;             // backdrop refresh interval

    private final String rawName;
    private final boolean withAudio;
    private final float audioVolume;
    private final boolean loop;
    private final Listener failListener;
    private Runnable onCompleted;

    private final ImageView backdrop;
    private final TextureView tex;
    private final Paint dimPaint = new Paint();
    private final Handler ui = new Handler(Looper.getMainLooper());

    private MediaPlayer player;
    private Surface surface;
    private boolean preparedOnSurface = false;
    private boolean surfaceReady = false;
    private boolean released = false;
    private boolean started = false;
    private int videoW = 0, videoH = 0;
    private float savedPosition = -1f; // fraction 0..1 for pause/resume continuity
    private Bitmap lastBlur;
    private boolean backdropBusy = false;

    public VideoStage(Context c, String rawResName, boolean playAudio, float volume,
                      boolean looping, Listener onFail) {
        super(c);
        this.rawName = rawResName == null ? "" : rawResName;
        this.withAudio = playAudio;
        this.audioVolume = volume;
        this.loop = looping;
        this.failListener = onFail;

        // edge-to-edge blurred backdrop (built from the video's own frames)
        backdrop = new ImageView(c);
        backdrop.setScaleType(ImageView.ScaleType.CENTER_CROP);
        backdrop.setImageBitmap(null);
        addView(backdrop, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        // the sharp video itself — fit-center, never cropped
        tex = new TextureView(c);
        tex.setOpaque(false); // area outside the video quad shows the blurred backdrop
        tex.setSurfaceTextureListener(this);
        addView(tex, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        setBackgroundColor(0xFF000000);
    }

    /** Begin playback (safe to call any time; waits for surface if needed). */
    public void start() {
        started = true;
        tryOpen();
    }

    /** Invoked when a non-looping video finishes playing naturally. */
    public void setOnCompleted(Runnable r) {
        this.onCompleted = r;
    }

    /** Pause playback, remembering position so resume() continues seamlessly. */
    public void pausePlayback() {
        try {
            if (player != null && player.isPlaying()) {
                savedPosition = (float) player.getCurrentPosition()
                        / Math.max(1, player.getDuration());
                player.pause();
            }
        } catch (Throwable ignored) {
        }
    }

    /** Resume from where pausePlayback() left off. */
    public void resumePlayback() {
        try {
            if (player != null) {
                if (savedPosition >= 0f && savedPosition < 0.99f) {
                    player.seekTo((int) (savedPosition * Math.max(1, player.getDuration())));
                    savedPosition = -1f;
                }
                if (!player.isPlaying()) player.start();
            }
        } catch (Throwable ignored) {
        }
    }

    public void release() {
        released = true;
        started = false;
        stopBlurTicker();
        try {
            if (player != null) {
                player.stop();
                player.release();
            }
        } catch (Throwable ignored) {
        }
        player = null;
        try {
            if (surface != null) surface.release();
        } catch (Throwable ignored) {
        }
        surface = null;
        if (lastBlur != null) {
            lastBlur.recycle();
            lastBlur = null;
        }
    }

    // ---------------------------------------------------------------- internals

    private void tryOpen() {
        if (released || !started || !surfaceReady || preparedOnSurface || player != null) return;
        try {
            int id = getResources().getIdentifier(rawName, "raw", getContext().getPackageName());
            if (id == 0) {
                fail();
                return;
            }
            MediaPlayer mp = new MediaPlayer();
            AudioAttributes aa = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MOVIE)
                    .build();
            mp.setAudioAttributes(aa);
            android.content.res.AssetFileDescriptor afd =
                    getContext().getResources().openRawResourceFd(id);
            mp.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
            try {
                afd.close(); // MediaPlayer dups the fd internally — close ours
            } catch (Throwable ignored) {
            }
            mp.setSurface(surface);
            if (withAudio) {
                mp.setVolume(audioVolume, audioVolume);
            } else {
                mp.setVolume(0f, 0f);
            }
            mp.setLooping(loop);
            mp.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    preparedOnSurface = true;
                    try {
                        videoW = mp.getVideoWidth();
                        videoH = mp.getVideoHeight();
                        applyFitMatrix();
                        mp.start();
                        startBlurTicker();
                    } catch (Throwable ignored) {
                    }
                }
            });
            mp.setOnErrorListener(new MediaPlayer.OnErrorListener() {
                @Override
                public boolean onError(MediaPlayer mp, int what, int extra) {
                    fail();
                    return true;
                }
            });
            mp.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                @Override
                public void onCompletion(MediaPlayer mp) {
                    if (loop) {
                        // looping=true: completion rarely fires; safety net — restart
                        try {
                            mp.seekTo(0);
                            mp.start();
                        } catch (Throwable ignored) {
                        }
                    } else if (onCompleted != null) {
                        post(new Runnable() {
                            @Override
                            public void run() {
                                if (onCompleted != null) onCompleted.run();
                            }
                        });
                    }
                }
            });
            mp.prepareAsync();
            player = mp;
        } catch (Throwable t) {
            Log.w(TAG, "open failed: " + t);
            fail();
        }
    }

    private void fail() {
        try {
            if (player != null) {
                player.stop();
                player.release();
            }
        } catch (Throwable ignored) {
        }
        player = null;
        preparedOnSurface = false;
        stopBlurTicker();
        if (failListener != null) failListener.onVideoFailed();
    }

    // ------------------------------------------------- fit-center video matrix

    /** Scale the video texture to fit ENTIRELY inside this view, centered (no crop). */
    private void applyFitMatrix() {
        if (videoW <= 0 || videoH <= 0 || tex.getWidth() <= 0 || tex.getHeight() <= 0) return;
        float vw = videoW, vh = videoH;
        float sw = tex.getWidth(), sh = tex.getHeight();
        float scale = Math.min(sw / vw, sh / vh);
        Matrix m = new Matrix();
        float dx = (sw - vw * scale) * 0.5f;
        float dy = (sh - vh * scale) * 0.5f;
        m.setScale(scale, scale);
        m.postTranslate(dx, dy);
        tex.setTransform(m);
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        applyFitMatrix();
    }

    // ------------------------------------------------- blurred backdrop ticker

    private final Runnable blurTick = new Runnable() {
        @Override
        public void run() {
            updateBackdrop();
            if (player != null && !released) {
                ui.postDelayed(this, BLUR_MS);
            }
        }
    };

    private void startBlurTicker() {
        stopBlurTicker();
        ui.postDelayed(blurTick, BLUR_MS);
    }

    private void stopBlurTicker() {
        ui.removeCallbacks(blurTick);
    }

    /** Grab the current frame small, blur it, dim it → edge-to-edge backdrop. */
    private void updateBackdrop() {
        try {
            if (released || backdropBusy || tex.getWidth() <= 0) return;
            Bitmap f = tex.getBitmap(BLUR_W, BLUR_H);
            if (f == null) return;
            backdropBusy = true;
            Bitmap b = blurDim(f, 2, 120);
            if (b != null) {
                backdrop.setImageBitmap(b);
                if (lastBlur != null && lastBlur != b && !lastBlur.isRecycled()) lastBlur.recycle();
                lastBlur = b;
            }
            f.recycle();
        } catch (Throwable ignored) {
        } finally {
            backdropBusy = false;
        }
    }

    /** Two-pass box blur + darkening — tiny bitmaps make this virtually free. */
    private static Bitmap blurDim(Bitmap src, int radius, int dimAlpha) {
        int w = src.getWidth(), h = src.getHeight();
        int[] px = new int[w * h];
        src.getPixels(px, 0, w, 0, 0, w, h);
        for (int pass = 0; pass < 2; pass++) {
            // horizontal
            int[] tmp = new int[w * h];
            for (int y = 0; y < h; y++) {
                int row = y * w;
                for (int x = 0; x < w; x++) {
                    int a = 0, r = 0, g = 0, b = 0, n = 0;
                    for (int k = -radius; k <= radius; k++) {
                        int xx = x + k;
                        if (xx < 0) xx = 0;
                        if (xx >= w) xx = w - 1;
                        int c = px[row + xx];
                        a += (c >>> 24) & 0xFF;
                        r += (c >>> 16) & 0xFF;
                        g += (c >>> 8) & 0xFF;
                        b += c & 0xFF;
                        n++;
                    }
                    tmp[row + x] = ((a / n) << 24) | ((r / n) << 16) | ((g / n) << 8) | (b / n);
                }
            }
            // vertical
            for (int x = 0; x < w; x++) {
                for (int y = 0; y < h; y++) {
                    int a = 0, r = 0, g = 0, b = 0, n = 0;
                    for (int k = -radius; k <= radius; k++) {
                        int yy = y + k;
                        if (yy < 0) yy = 0;
                        if (yy >= h) yy = h - 1;
                        int c = tmp[yy * w + x];
                        a += (c >>> 24) & 0xFF;
                        r += (c >>> 16) & 0xFF;
                        g += (c >>> 8) & 0xFF;
                        b += c & 0xFF;
                        n++;
                    }
                    px[y * w + x] = ((a / n) << 24) | ((r / n) << 16) | ((g / n) << 8) | (b / n);
                }
            }
        }
        Bitmap out = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        out.setPixels(px, 0, w, 0, 0, w, h);
        // dim so UI text stays readable and the backdrop feels moody
        Canvas cv = new Canvas(out);
        Paint p = new Paint(Paint.ANTI_ALIAS_FLAG);
        p.setColor((dimAlpha << 24) | 0x000000);
        cv.drawRect(0, 0, w, h, p);
        return out;
    }

    // ------------------------------------------------- TextureView callbacks

    @Override
    public void onSurfaceTextureAvailable(SurfaceTexture st, int width, int height) {
        if (released) return;
        try {
            surface = new Surface(st);
            surfaceReady = true;
            preparedOnSurface = false;
            player = null;
            applyFitMatrix();
            tryOpen();
        } catch (Throwable t) {
            fail();
        }
    }

    @Override
    public void onSurfaceTextureSizeChanged(SurfaceTexture st, int width, int height) {
        applyFitMatrix();
    }

    @Override
    public boolean onSurfaceTextureDestroyed(SurfaceTexture st) {
        try {
            if (player != null) {
                player.stop();
                player.release();
            }
        } catch (Throwable ignored) {
        }
        player = null;
        preparedOnSurface = false;
        surfaceReady = false;
        stopBlurTicker();
        try {
            if (surface != null) surface.release();
        } catch (Throwable ignored) {
        }
        surface = null;
        return true;
    }

    @Override
    public void onSurfaceTextureUpdated(SurfaceTexture st) {
        // frame rendered — backdrop ticker picks frames up on its own schedule
    }
}
