#!/bin/bash
# HOLLOW VALE — Android APK build (no gradle; raw build-tools pipeline)
set -e
SDK=/home/z/android-sdk
BT=$SDK/build-tools/34.0.0
PLATFORM=$SDK/platforms/android-34/android.jar
JDK=$(ls -d /home/z/jdk-* | head -1)
export PATH="$JDK/bin:$PATH"
PROJ=/home/z/my-project/android-apk
OUT=/home/z/my-project/download
SERVER_URL="${1:-}"

echo "==> [1/7] Preparing project dirs"
rm -rf "$PROJ" && mkdir -p "$PROJ/src/com/hollowvale/game" "$PROJ/res/values" "$PROJ/res/mipmap" "$PROJ/assets/www" "$OUT"

echo "==> [2/7] Bundling game client with esbuild"
cat > /tmp/hv-config.js <<EOF
window.HV_CONFIG = { serverUrl: "$SERVER_URL" };
EOF
cd /home/z/my-project
bunx esbuild scripts/apk-entry.ts --bundle --format=iife --minify --target=es2017 \
  --define:process.env.NODE_ENV='"production"' \
  --outfile="$PROJ/assets/www/bundle.js" 2>&1 | tail -2
ls -la "$PROJ/assets/www/bundle.js"

echo "==> [3/7] Writing index.html"
cat > "$PROJ/assets/www/index.html" <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<title>HOLLOW VALE</title>
<style>
  html, body { margin: 0; padding: 0; background: #020204; overflow: hidden; width: 100%; height: 100%;
    touch-action: none; -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; }
  #hv-container { position: fixed; inset: 0; }
</style>
</head>
<body>
<div id="hv-container"></div>
<script src="hv-config.js"></script>
<script src="bundle.js"></script>
</body>
</html>
EOF
cp /tmp/hv-config.js "$PROJ/assets/www/hv-config.js"

echo "==> [4/7] Android sources & resources"
cat > "$PROJ/AndroidManifest.xml" <<'EOF'
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.hollowvale.game"
    android:versionCode="1"
    android:versionName="1.0">
    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-feature android:glEsVersion="0x00020000" android:required="true" />
    <application
        android:label="Hollow Vale"
        android:icon="@mipmap/ic_launcher"
        android:hardwareAccelerated="true"
        android:allowBackup="true"
        android:theme="@style/AppTheme">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="sensorLandscape"
            android:configChanges="orientation|screenSize|keyboardHidden|screenLayout|smallestScreenSize"
            android:launchMode="singleTask">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
EOF

cat > "$PROJ/res/values/styles.xml" <<'EOF'
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="AppTheme" parent="@android:style/Theme.Black.NoTitleBar.Fullscreen">
        <item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>
    </style>
</resources>
EOF

cat > "$PROJ/src/com/hollowvale/game/MainActivity.java" <<'EOF'
package com.hollowvale.game;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;

public class MainActivity extends Activity {
    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        webView = new WebView(this);
        setContentView(webView);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            s.setForceDark(WebSettings.FORCE_DARK_OFF);
        }
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        webView.setWebViewClient(new WebViewClient());
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/www/index.html");
        hideSystemBars();
    }

    private void hideSystemBars() {
        View decor = getWindow().getDecorView();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            getWindow().setDecorFitsSystemWindows(false);
            final WindowInsetsController c = decor.getWindowInsetsController();
            if (c != null) {
                c.hide(WindowInsets.Type.systemBars());
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            decor.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemBars();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) webView.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) webView.onResume();
        hideSystemBars();
    }

    @Override
    public void onBackPressed() {
        // the game handles its own pause menu; keep the app open
    }
}
EOF

# launcher icon: dark with red ring + eyes (simple vector-ish PNG via aapt)
python3 - <<'PYEOF'
import struct, zlib, os

def make_icon(size):
    # RGBA icon: dark bg, red circle, amber eyes
    px = bytearray()
    cx = cy = size / 2
    r_ring = size * 0.30
    r_eye = size * 0.045
    ex1, ex2 = cx - size*0.08, cx + size*0.08
    ey = cy - size*0.02
    for y in range(size):
        for x in range(size):
            dx, dy = x - cx, y - cy
            d = (dx*dx + dy*dy) ** 0.5
            r, g, b, a = 9, 7, 8, 255
            if abs(d - r_ring) < size*0.025:   # ring
                r, g, b = 143, 29, 29
            elif d < r_ring:                    # inside face: slightly lighter
                r, g, b = 26, 20, 22
                de1 = ((x-ex1)**2 + (y-ey)**2) ** 0.5
                de2 = ((x-ex2)**2 + (y-ey)**2) ** 0.5
                if de1 < r_eye or de2 < r_eye:
                    r, g, b = 255, 179, 42
            px += bytes((r, g, b, a))
    raw = b''.join(b'\x00' + bytes(px[y*size*4:(y+1)*size*4]) for y in range(size))
    def chunk(t, data):
        c = struct.pack('>I', len(data)) + t + data
        return c + struct.pack('>I', zlib.crc32(t + data) & 0xffffffff)
    ihdr = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')

res = os.environ.get('PROJ', '/home/z/my-project/android-apk') + '/res'
for dpi, s in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    os.makedirs(f'{res}/mipmap-{dpi}', exist_ok=True)
    open(f'{res}/mipmap-{dpi}/ic_launcher.png','wb').write(make_icon(s))
print('icons written')
PYEOF
export PROJ=$PROJ
python3 - <<'PYEOF'
import struct, zlib, os
def make_icon(size):
    px = bytearray()
    cx = cy = size / 2
    r_ring = size * 0.30
    r_eye = size * 0.045
    ex1, ex2 = cx - size*0.08, cx + size*0.08
    ey = cy - size*0.02
    for y in range(size):
        for x in range(size):
            dx, dy = x - cx, y - cy
            d = (dx*dx + dy*dy) ** 0.5
            r, g, b, a = 9, 7, 8, 255
            if abs(d - r_ring) < size*0.025:
                r, g, b = 143, 29, 29
            elif d < r_ring:
                r, g, b = 26, 20, 22
                de1 = ((x-ex1)**2 + (y-ey)**2) ** 0.5
                de2 = ((x-ex2)**2 + (y-ey)**2) ** 0.5
                if de1 < r_eye or de2 < r_eye:
                    r, g, b = 255, 179, 42
            px += bytes((r, g, b, a))
    raw = b''.join(b'\x00' + bytes(px[y*size*4:(y+1)*size*4]) for y in range(size))
    def chunk(t, data):
        c = struct.pack('>I', len(data)) + t + data
        return c + struct.pack('>I', zlib.crc32(t + data) & 0xffffffff)
    ihdr = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
res = '/home/z/my-project/android-apk/res'
for dpi, s in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    os.makedirs(f'{res}/mipmap-{dpi}', exist_ok=True)
    open(f'{res}/mipmap-{dpi}/ic_launcher.png','wb').write(make_icon(s))
print('icons ok')
PYEOF

echo "==> [5/7] Compiling resources + java + dex"
cd "$PROJ"
"$BT/aapt2" compile --dir res -o compiled.zip
"$BT/aapt2" link -o base.apk -I "$PLATFORM" --manifest AndroidManifest.xml -R compiled.zip --auto-add-overlay
javac --release 11 -cp "$PLATFORM" -d classes src/com/hollowvale/game/MainActivity.java 2>&1 | head -5 || true
mkdir -p dexout
"$BT/d8" --release --min-api 24 --lib "$PLATFORM" --output dexout classes/com/hollowvale/game/*.class
cd "$PROJ" && cp dexout/classes.dex . && "$BT/aapt" add base.apk classes.dex

echo "==> [6/7] Adding game assets"
cd "$PROJ/assets" && zip -r ../base.apk www -x '.*' > /dev/null

echo "==> [7/7] Aligning & signing"
cd "$PROJ"
rm -f hv_debug.keystore
keytool -genkeypair -keystore hv_debug.keystore -alias hv -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass hollowvale -keypass hollowvale -dname "CN=Hollow Vale, OU=Game, O=HV, L=Tehran, C=IR" 2>/dev/null
"$BT/zipalign" -f 4 base.apk aligned.apk
"$BT/apksigner" sign --ks hv_debug.keystore --ks-pass pass:hollowvale --key-pass pass:hollowvale --out "$OUT/HollowVale.apk" aligned.apk
"$BT/apksigner" verify "$OUT/HollowVale.apk" && echo "SIGNED OK"
ls -la "$OUT/HollowVale.apk"
echo "BUILD COMPLETE: $OUT/HollowVale.apk"
