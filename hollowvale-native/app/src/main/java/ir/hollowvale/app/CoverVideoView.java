package ir.hollowvale.app;

import android.content.Context;

import com.hollowengine.media.VideoStage;

/**
 * HOLLOW VALE v6 — cinematic video facade over the engine {@link VideoStage}.
 * Presentation unchanged: the video is always shown 100% complete (fit-center,
 * never cropped/zoomed) over an edge-to-edge blurred backdrop built from the
 * video's own frames; seamless looping; fail listener for graceful fallback.
 */
public class CoverVideoView extends VideoStage {
    public CoverVideoView(Context c, String rawResName, boolean playAudio, float volume,
                          boolean looping, Listener onFail) {
        super(c, rawResName, playAudio, volume, looping, onFail);
    }
}
