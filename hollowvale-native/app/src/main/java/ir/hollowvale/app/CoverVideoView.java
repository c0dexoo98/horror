package ir.hollowvale.app;

import android.content.Context;
import android.graphics.Matrix;
import android.graphics.SurfaceTexture;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.util.Log;
import android.view.Surface;
import android.view.TextureView;

/**
 * HOLLOW VALE v4 — full-bleed "cover" video surface.
 * Plays a res/raw video scaled to COVER the whole view (aspect preserved,
 * overflow cropped — no letterbox bars, no stretching). Loops seamlessly,
 * optional audio volume, and NEVER crashes: any error is reported through
 * {@link Listener#onVideoFailed()} so the host can fall back gracefully.
 */
public class CoverVideoView extends TextureView implements TextureView.SurfaceTextureListener {

    /** Called when the video cannot be played at all (missing/corrupt/codec error). */
    public interface Listener {
        void onVideoFailed();
    }

    private static final String TAG = "CoverVideo";

    private final String rawName;
    private final boolean withAudio;
    private final float audioVolume;
    private final boolean loop;
    private final Listener failListener;
    private Runnable onCompleted;

    private MediaPlayer player;
    private Surface surface;
    private boolean preparedOnSurface = false;
    private boolean surfaceReady = false;
    private boolean released = false;
    private int videoW = 0, videoH = 0;
    private boolean started = false;
    private float savedPosition = -1f; // fraction 0..1 for pause/resume continuity

    public CoverVideoView(Context c, String rawResName, boolean playAudio, float volume,
                          boolean looping, Listener onFail) {
        super(c);
        this.rawName = rawResName == null ? "" : rawResName;
        this.withAudio = playAudio;
        this.audioVolume = volume;
        this.loop = looping;
        this.failListener = onFail;
        setOpaque(true);
        setSurfaceTextureListener(this);
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
                        applyCoverMatrix();
                        mp.start();
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
        if (failListener != null) failListener.onVideoFailed();
    }

    /** Scale the video texture so it covers this view, centered (crop overflow). */
    private void applyCoverMatrix() {
        if (videoW <= 0 || videoH <= 0 || getWidth() <= 0 || getHeight() <= 0) return;
        float vw = videoW, vh = videoH;
        float sw = getWidth(), sh = getHeight();
        float scale = Math.max(sw / vw, sh / vh);
        Matrix m = new Matrix();
        float dx = (sw - vw * scale) * 0.5f;
        float dy = (sh - vh * scale) * 0.5f;
        m.setScale(scale, scale);
        m.postTranslate(dx, dy);
        setTransform(m);
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        applyCoverMatrix();
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
            applyCoverMatrix();
            tryOpen();
        } catch (Throwable t) {
            fail();
        }
    }

    @Override
    public void onSurfaceTextureSizeChanged(SurfaceTexture st, int width, int height) {
        applyCoverMatrix();
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
        try {
            if (surface != null) surface.release();
        } catch (Throwable ignored) {
        }
        surface = null;
        return true;
    }

    @Override
    public void onSurfaceTextureUpdated(SurfaceTexture st) {
        // frame rendered — nothing to do
    }
}
