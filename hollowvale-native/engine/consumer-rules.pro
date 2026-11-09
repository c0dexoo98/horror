# HollowEngine consumer ProGuard rules.
# Keep shader-source reader & video stage class names (reflection-free, but be safe).
-keep class com.hollowengine.media.VideoStage { *; }
