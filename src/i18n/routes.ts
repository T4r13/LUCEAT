import type { Locale } from './config';

// The two locale trees use genuinely different path segments (produits vs
// products, a-propos vs about), not just a locale prefix — Astro's built-in
// i18n helpers can't derive that mapping, so it's kept explicit here.
type RouteKey = 'home' | 'products' | 'about' | 'contact';

const staticRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: '/', en: '/en/' },
  products: { fr: '/produits', en: '/en/products' },
  about: { fr: '/a-propos', en: '/en/about' },
  contact: { fr: '/contact', en: '/en/contact' },
};

const productSlugPattern: Record<Locale, RegExp> = {
  fr: /^\/produits\/([^/]+)\/?$/,
  en: /^\/en\/products\/([^/]+)\/?$/,
};

export function detectLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

// Astro.url.pathname carries a trailing slash for directory-style static
// routes (e.g. "/produits/"), but the route map below is defined without
// one — normalize so exact-match lookups don't silently miss.
function normalize(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function path(route: RouteKey, locale: Locale): string {
  return staticRoutes[route][locale];
}

export function productPath(slug: string, locale: Locale): string {
  return locale === 'fr' ? `/produits/${slug}` : `/en/products/${slug}`;
}

/**
 * Given the current pathname, return the equivalent URL in targetLocale.
 * Falls back to that locale's homepage only if the current route can't be
 * matched — the language switcher should otherwise always land on the
 * equivalent page, never the homepage by default.
 */
export function getAlternateUrl(pathname: string, targetLocale: Locale): string {
  const frSlugMatch = pathname.match(productSlugPattern.fr);
  if (frSlugMatch) return productPath(frSlugMatch[1], targetLocale);

  const enSlugMatch = pathname.match(productSlugPattern.en);
  if (enSlugMatch) return productPath(enSlugMatch[1], targetLocale);

  const normalized = normalize(pathname);
  for (const key of Object.keys(staticRoutes) as RouteKey[]) {
    const entry = staticRoutes[key];
    if (normalize(entry.fr) === normalized || normalize(entry.en) === normalized) {
      return entry[targetLocale];
    }
  }

  return staticRoutes.home[targetLocale];
}
