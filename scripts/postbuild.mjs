import { copyFile } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await copyFile(new URL('en/404/index.html', output), new URL('en/404.html', output));
console.log('Copied the English Cloudflare Pages 404 fallback.');
