/**
 * Image optimizer for PachoTours.
 *
 * Walks `public/` for source rasters (.jpg/.jpeg/.png), and for each one
 * generates responsive WebP variants (only at widths <= the original, so we
 * never upscale). Output lives next to the source as `<name>-<width>.webp`.
 *
 * It also writes `src/Data/imageManifest.json`, mapping each public path to
 * the widths actually generated. The <Picture> component reads this manifest
 * to build a correct `srcset` (and falls back to a plain <img> for any image
 * not present in the manifest).
 *
 * Idempotent: skips a variant if it already exists and is newer than the
 * source. Run with:  pnpm optimize:images
 */
import { readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MANIFEST_PATH = path.join(ROOT, 'src', 'Data', 'imageManifest.json');

const WIDTHS = [480, 768, 1200, 1920];
const QUALITY = 78;
const SOURCE_RE = /\.(jpe?g|png)$/i;
// Small UI assets served via plain <img>, not <Picture> — skip them.
const SKIP_RE = /(^|\/)logo[^/]*$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

/** True if `out` exists and is newer than `src`. */
async function isFresh(src, out) {
  if (!existsSync(out)) return false;
  const [s, o] = await Promise.all([stat(src), stat(out)]);
  return o.mtimeMs >= s.mtimeMs;
}

async function run() {
  if (!existsSync(PUBLIC_DIR)) {
    console.error(`No existe ${PUBLIC_DIR}`);
    process.exit(1);
  }

  const manifest = {};
  let generated = 0;
  let skipped = 0;

  for await (const file of walk(PUBLIC_DIR)) {
    if (!SOURCE_RE.test(file)) continue;
    const rel = path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
    if (SKIP_RE.test(rel)) continue;

    const { width: srcWidth } = await sharp(file).metadata();
    const dir = path.dirname(file);
    const baseName = path.basename(file).replace(SOURCE_RE, '');
    // public path used by the app, e.g. "/tours/sporadic.jpg"
    const publicPath = '/' + path.relative(PUBLIC_DIR, file).split(path.sep).join('/');

    // Only widths that fit the original; always include the original width
    // when it's smaller than our largest target so we don't lose fidelity.
    const targets = [...new Set(WIDTHS.filter((w) => w <= srcWidth))];
    if (srcWidth < WIDTHS[0]) targets.push(srcWidth);

    const widthsDone = [];
    for (const w of targets) {
      const out = path.join(dir, `${baseName}-${w}.webp`);
      widthsDone.push(w);
      if (await isFresh(file, out)) {
        skipped++;
        continue;
      }
      await mkdir(dir, { recursive: true });
      await sharp(file).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
      generated++;
      console.log(`✓ ${path.relative(ROOT, out)}`);
    }

    if (widthsDone.length) manifest[publicPath] = widthsDone.sort((a, b) => a - b);
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
  console.log(
    `\nListo. Generadas: ${generated}, sin cambios: ${skipped}. ` +
      `Manifest: ${path.relative(ROOT, MANIFEST_PATH)} (${Object.keys(manifest).length} imágenes).`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
