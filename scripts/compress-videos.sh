#!/bin/bash
set -e
cd "$(dirname "$0")/../public/previews"

videos=(
  parser-lab
  bauer-debarras
  la-gragna-guette
  tenders
  tldfetch
  drams-react
  kimi-antonelli
  oyo-escapes
  liftov-bordeaux
)

for f in "${videos[@]}"; do
  src="${f}.mp4"
  tmp="${f}.tmp.mp4"
  if [ ! -f "$src" ]; then
    echo "SKIP: $src not found"
    continue
  fi
  echo "Compressing $src..."
  ffmpeg -y -i "$src" \
    -vf "scale=640:-2" \
    -c:v libx264 -crf 30 -preset slow \
    -an \
    -movflags +faststart \
    "$tmp"
  mv "$tmp" "$src"
  echo "Done: $src"
done

# Remove unused source file
if [ -f "la-gragna-guette.mov" ]; then
  rm "la-gragna-guette.mov"
  echo "Removed la-gragna-guette.mov"
fi

echo "All done."
