#!/usr/bin/env bash
# Restores the Kaplan & Sadock Study Companion dev tools into the fixed paths the scripts expect.
# Usage (from anywhere): bash restore.sh
# Expects: the site repo at /home/claude/kaplanstudy (main) and this branch checked out somewhere.
set -e
SRC="$(cd "$(dirname "$0")" && pwd)"
H=/home/claude
[ -d "$H/kaplanstudy/.git" ] || git clone https://github.com/isaymotion/KaplanStudy.git "$H/kaplanstudy"
mkdir -p "$H/tools" "$H/updwork"
cp -r "$SRC/tools/." "$H/tools/"
cp "$SRC/tools/fulltest.py" "$H/fulltest.py"
cp "$SRC/tools/srcs-check.js" /tmp/srcs4.js
cp -r "$SRC/updwork/." "$H/updwork/"
for d in "$SRC"/work/*; do cp -r "$d" "$H/"; done
echo "Restored: $H/tools, $H/fulltest.py, /tmp/srcs4.js, $H/updwork, $(ls "$SRC/work" | wc -l) work folders"
