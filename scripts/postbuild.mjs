import { copyFile, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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

/*
 * Fill in the CSP script hashes. Astro inlines the component scripts, so the
 * policy in public/_headers ships a SCRIPT_HASHES placeholder and the real
 * sha256 digests are computed here, after the bundles that produced them
 * exist. Hashing the exact bytes between the script tags is what the CSP spec
 * requires, so any change to a component script updates the policy with it.
 */
const headersFile = path.join(distDir, '_headers');
const htmlFiles = allFiles.filter((file) => path.extname(file).toLowerCase() === '.html');

const inlineScripts = new Set();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\ssrc=/.test(match[1])) continue;
    inlineScripts.add(match[2]);
  }
}

const hashes = [...inlineScripts]
  .map((body) => `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`)
  .sort();

let headers;
try {
  headers = await readFile(headersFile, 'utf8');
} catch {
  headers = undefined;
}

const PLACEHOLDER = '__SCRIPT_HASHES__';

if (headers === undefined) {
  // Warning-and-continue here used to mean a missing public/_headers shipped a
  // green build with no CSP, no Permissions-Policy and no nosniff at all.
  throw new Error(
    'dist/_headers is missing, so this build would deploy with no security ' +
      'headers. public/_headers should have been copied into dist/ by the build.',
  );
}

// Guard the count: a plain String.replace would quietly patch only the first
// occurrence, which is exactly how a policy ends up shipping its placeholder.
const occurrences = headers.split(PLACEHOLDER).length - 1;
if (occurrences !== 1) {
  throw new Error(
    `Expected exactly one ${PLACEHOLDER} in dist/_headers, found ${occurrences}.`,
  );
}

const written = headers.replace(PLACEHOLDER, hashes.join(' '));
await writeFile(headersFile, written, 'utf8');

/*
 * Re-read what was actually written and confirm the policy line covers every
 * inline script still present in the output. This catches a substitution that
 * silently no-ops, a policy line that lost its hashes, and any later step that
 * edits HTML after the hashes were computed - each of which would otherwise
 * surface as a blank page in production rather than as a failed build.
 *
 * It checks the Content-Security-Policy line specifically, not the whole file,
 * because the surrounding comment block also mentions hashes.
 */
const policyLine = written
  .split(/\r?\n/)
  .find((line) => line.includes('Content-Security-Policy'));

if (!policyLine) {
  throw new Error('dist/_headers has no Content-Security-Policy line to verify.');
}

const uncovered = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\ssrc=/.test(match[1])) continue;
    const digest = createHash('sha256').update(match[2], 'utf8').digest('base64');
    if (!policyLine.includes(`'sha256-${digest}'`)) {
      uncovered.push(
        `${path.relative(distDir, file)}: ${match[2].slice(0, 70).replace(/\s+/g, ' ')}`,
      );
    }
  }
}

if (uncovered.length > 0) {
  throw new Error(
    `CSP would block ${uncovered.length} inline script(s) - the policy has no ` +
      `matching hash:\n  ${uncovered.join('\n  ')}`,
  );
}

console.log(
  `Wrote CSP with ${hashes.length} inline-script hash(es) to dist/_headers; ` +
    'verified every inline script in the output is covered.',
);
