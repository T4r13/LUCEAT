import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Keep the manufacturer-owned product data unchanged while resolving its
// original public URLs to imported assets that Astro can optimize.
const imports = import.meta.glob<ImageMetadata>('../assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const images = Object.fromEntries(
  Object.entries(imports).map(([file, image]) => [file.replace('../assets', ''), image]),
);

// Two source files were misnamed: they carried a .jpg extension but held PNG
// data. They were renamed to their true encoding, so the paths still recorded
// in products.ts need redirecting to the file that now exists.
const aliases: Record<string, string> = {
  '/images/logo/logo-luceat.jpg': '/images/logo/logo-luceat.png',
  '/images/products/CREME DE CHANGE/CREME DE CHANGE.jpg':
    '/images/products/CREME DE CHANGE/CREME DE CHANGE.png',
};

/** Resolve a legacy `/images/...` URL to its imported asset, or fail the build. */
export function imageFor(url: string): ImageMetadata {
  const decoded = decodeURIComponent(url);
  const image = images[aliases[decoded] ?? decoded];
  if (!image) {
    throw new Error(
      `Image source not found: ${url}\n` +
        `Expected a file at src/assets${aliases[decoded] ?? decoded}.\n` +
        `Known sources:\n  ${Object.keys(images).sort().join('\n  ')}`,
    );
  }
  return image;
}

/**
 * Build-time optimized asset for images that cannot go through <Image>:
 * CSS background-image, meta tags, and runtime slideshow swaps.
 * Returns the hashed URL plus the emitted intrinsic size.
 */
export async function optimized(
  url: string,
  options: { width: number; format?: 'webp' | 'png'; quality?: number },
): Promise<{ src: string; width: number; height: number }> {
  const source = imageFor(url);
  const { width, format = 'webp', quality = 75 } = options;
  const outputWidth = Math.min(width, source.width);
  const image = await getImage({ src: source, width: outputWidth, format, quality });
  return {
    src: image.src,
    width: outputWidth,
    height: Math.round((outputWidth * source.height) / source.width),
  };
}
