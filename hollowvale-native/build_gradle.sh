#!/bin/bash
# HOLLOW VALE v6 — official Gradle build (SDK + JDK21 + Gradle 8.7 + AGP 8.4.2)
# v6: the game builds on the HollowEngine ':engine' module.
set -e
export JAVA_HOME=/home/z/jdk21
export ANDROID_HOME=/home/z/android-sdk
export PATH="$JAVA_HOME/bin:$PATH"
cd /home/z/my-project/hollowvale-native
./gradlew assembleRelease --no-daemon
BT=/home/z/android-sdk/build-tools/34.0.0
OUT=/home/z/my-project/download
mkdir -p "$OUT"
cp app/build/outputs/apk/release/app-release.apk "$OUT/HollowVale.apk"
"$BT/apksigner" verify "$OUT/HollowVale.apk" && echo 'SIGNED OK'
ls -la "$OUT/HollowVale.apk"
echo 'BUILD COMPLETE'
