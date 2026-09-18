import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { getAlternateUrl } from './src/i18n/routes.ts';

export default defineConfig({
  site: 'https://www.luceat.tn',
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap({
    filter: (page) => !/(?:^|\/)404(?:\/|\.html|$)/.test(new URL(page).pathname),
    serialize(item) {
      const { pathname, origin } = new URL(item.url);
      const fr = new URL(getAlternateUrl(pathname, 'fr'), origin).href;
      const en = new URL(getAlternateUrl(pathname, 'en'), origin).href;
      return { ...item, links: [
        { lang: 'fr', url: fr },
        { lang: 'en', url: en },
        { lang: 'x-default', url: fr },
      ] };
    },
  })],
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
