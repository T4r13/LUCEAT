import { copyFile, readdir, readFile, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const distDir = fileURLToPath(dist);

await copyFile(new URL('en/404/index.html', dist), new URL('en/404.html', dist));
console.log('Copied the English Cloudflare Pages 404 fallback.');

/*
 * products.ts records image paths as strings, so src/data/images.ts resolves
 * them through an eager import.meta.glob. That glob puts every source image in
 * the Vite module graph, and Vite then emits each original alongside the sized
 * WebPs that <Image>/getImage() actually produce - roughly 20 MB of files that
 * no page ever requests.
 *
 * Delete the raster assets in _astro/ that nothing in the built output refers
 * to. Matching is on the full hashed basename, so an original
 * ("TALC.D6T-tbSa.png") is never mistaken for a derived variant that shares its
 * source hash ("TALC.D6T-tbSa_1U42bb.webp").
 */
const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.xml', '.json', '.webmanifest', '.txt']);
const RASTER_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.avif', '.webp', '.gif']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : Promise.resolve([full]);
    }),
  );
  return nested.flat();
}

// Built CSS and JS contain bare "%" characters, so decode percent-escape runs
// individually and leave anything malformed exactly as it is.
const decodeLoosely = (text) =>
  text.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
    try {
      return decodeURIComponent(match);
    } catch {
      return match;
    }
  });

const allFiles = await walk(distDir);
const textFiles = allFiles.filter((file) => TEXT_EXTENSIONS.has(path.extname(file).toLowerCase()));
const sources = await Promise.all(textFiles.map((file) => readFile(file, 'utf8')));
// Search both the literal text and its decoded form: hrefs percent-encode the
// spaces and the registered-trademark sign that several filenames contain.
const haystack = sources.concat(sources.map(decodeLoosely));
const isReferenced = (name) => haystack.some((text) => text.includes(name));

const astroDir = path.join(distDir, '_astro');
const candidates = allFiles.filter(
  (file) =>
    path.dirname(file) === astroDir && RASTER_EXTENSIONS.has(path.extname(file).toLowerCase()),
);

let removed = 0;
let bytes = 0;
for (const file of candidates) {
  if (isReferenced(path.basename(file))) continue;
  bytes += (await stat(file)).size;
  await rm(file);
  removed += 1;
}

console.log(
  removed > 0
    ? `Pruned ${removed} unreferenced source image(s) from dist/_astro (${(bytes / 1048576).toFixed(2)} MB).`
    : 'No unreferenced images to prune from dist/_astro.',
);
