#!/usr/bin/env bash
# Rebuild public/holo/app.js from holo/app.js (three.js inlined, one self-contained file).
# Only needed after editing holo/app.js; the site itself needs no npm install.
set -euo pipefail
cd "$(dirname "$0")"
[ -d node_modules/three ] || npm install --ignore-scripts --no-audit --no-fund
BUN_BIN="${BUN:-$(command -v bun || echo "$HOME/.bun/bin/bun")}"
if [ -x "$BUN_BIN" ]; then
  "$BUN_BIN" build ./app.js --outfile=../public/holo/app.js --target=browser --minify
else
  npx --yes esbuild app.js --bundle --format=esm --target=es2020 --minify --outfile=../public/holo/app.js
fi
