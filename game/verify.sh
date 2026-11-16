#!/usr/bin/env bash
# Hollow Vale — game checks. Requires the HollowEngine repo beside this one
# (or HOLLOW_ENGINE_DIR pointing at it). Verifies the deterministic campaign.
set -u
DIR="$(cd "$(dirname "$0")" && pwd)"
ENG="${HOLLOW_ENGINE_DIR:-$(dirname "$(dirname "$DIR")")/hollowengine}"
HOLLOW="$ENG/hollow"
JAVA=/home/z/my-project/tools/jdk-21.0.13+9/bin

bold(){ printf '\033[1m%s\033[0m\n' "$*"; }
red(){ printf '\033[0;31m%s\033[0m\n' "$*"; }
green(){ printf '\033[0;32m%s\033[0m\n' "$*"; }

fails=0
bold "== hollow vale — game verify"

# 1. scene loads + renders non-blank with HUD
out=$("$JAVA/java" -cp "$ENG/build-out/cli:$ENG/build-out/engine:$ENG/build-out/editor" \
      com.hollow.cli.Main render "$DIR" --frames 60 --out "$DIR/frame.png" 2>&1)
echo "$out" | grep -q "fill" && green "OK  render (60 frames)" || { red "FAIL render"; echo "$out"; fails=1; }

# 2. the deterministic campaign reaches the ESCAPED ending within 7000 frames
out=$("$JAVA/java" -cp "$ENG/build-out/cli:$ENG/build-out/engine:$ENG/build-out/editor" \
      com.hollow.cli.Main run "$DIR" --frames 7000 2>&1)
echo "$out" | grep -q "ENDING: ESCAPED" && green "OK  campaign: ESCAPED" || { red "FAIL campaign"; echo "$out" | tail -5; fails=1; }
echo "$out" | grep -q "M6: the ritual burns" && green "OK  mother manifests" || { red "FAIL mother"; fails=1; }
echo "$out" | grep -q "THE MOTHER BURNS" && green "OK  mother banished" || { red "FAIL banish"; fails=1; }
echo "$out" | grep -q "charm 5/5" && green "OK  all 5 charms" || { red "FAIL charms"; fails=1; }

# 3. determinism: same run, same ending line
out2=$("$JAVA/java" -cp "$ENG/build-out/cli:$ENG/build-out/engine:$ENG/build-out/editor" \
       com.hollow.cli.Main run "$DIR" --frames 7000 2>&1)
a=$(echo "$out" | grep -E "ENDING|STATS" | md5sum)
b=$(echo "$out2" | grep -E "ENDING|STATS" | md5sum)
[ "$a" = "$b" ] && green "OK  deterministic (identical ending+stats)" || { red "FAIL determinism"; fails=1; }

if [ "$fails" = 0 ]; then
  bold "VALE: ALL GREEN"
else
  bold "VALE: FAILED"
  exit 1
fi
