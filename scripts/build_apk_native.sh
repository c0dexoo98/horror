#!/bin/bash
# HOLLOW VALE NATIVE — Android APK build (custom Java engine, no WebView, no gradle)
set -e
SDK=/home/z/android-sdk
BT=$SDK/build-tools/34.0.0
PLATFORM=$SDK/platforms/android-34/android.jar
JDK=$(ls -d /home/z/jdk-* | head -1)
export PATH="$JDK/bin:$PATH"
PROJ=/home/z/my-project/hollowvale-native
OUT=/home/z/my-project/download

echo "==> [1/7] Preparing build dirs"
cd "$PROJ"
rm -rf build && mkdir -p build/classes build/dexout "$OUT"

echo "==> [2/7] Compiling resources"
"$BT/aapt2" compile --dir res -o build/compiled.zip

echo "==> [3/7] Linking resources -> base.apk"
"$BT/aapt2" link -o build/base.apk -I "$PLATFORM" --manifest AndroidManifest.xml \
  -R build/compiled.zip --auto-add-overlay

echo "==> [4/7] Compiling Java sources"
javac --release 11 -cp "$PLATFORM" -d build/classes \
  src/ir/hollowvale/*.java src/ir/hollowvale/engine/*.java src/ir/hollowvale/game/*.java

echo "==> [5/7] Dexing"
# NOTE: build-tools 34.0.0 ships R8 8.2.2-dev which crashes (NPE) on nested classes;
# use the stable standalone R8 jar instead.
R8JAR=/home/z/my-project/scripts/tools/r8.jar
if [ ! -f "$R8JAR" ]; then
  curl -sL -o "$R8JAR" "https://dl.google.com/android/maven2/com/android/tools/r8/8.3.37/r8-8.3.37.jar"
fi
CLASSES=$(ls build/classes/ir/hollowvale/*.class build/classes/ir/hollowvale/engine/*.class build/classes/ir/hollowvale/game/*.class)
java -Xmx1g -cp "$R8JAR" com.android.tools.r8.D8 --release --min-api 24 --lib "$PLATFORM" \
  --output build/dexout $CLASSES

echo "==> [6/7] Packing dex into APK"
cp build/dexout/classes.dex build/
cd build && "$BT/aapt" add base.apk classes.dex > /dev/null && cd ..

echo "==> [7/7] Aligning & signing"
rm -f build/hv.keystore
keytool -genkeypair -keystore build/hv.keystore -alias hv -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass hollowvale -keypass hollowvale -dname "CN=Hollow Vale Native, OU=Game, O=HV, L=Tehran, C=IR" 2>/dev/null
"$BT/zipalign" -f 4 build/base.apk build/aligned.apk
"$BT/apksigner" sign --ks build/hv.keystore --ks-pass pass:hollowvale --key-pass pass:hollowvale \
  --out "$OUT/HollowVale-Native.apk" build/aligned.apk
"$BT/apksigner" verify "$OUT/HollowVale-Native.apk" && echo "SIGNED OK"
ls -la "$OUT/HollowVale-Native.apk"
echo "BUILD COMPLETE: $OUT/HollowVale-Native.apk"
