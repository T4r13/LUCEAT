import type { Locale } from './config';
import type { Product, ProductTranslation } from '../data/products';

export interface ResolvedProductContent extends ProductTranslation {
  /** True when one or more fields fell back to French because the
   * translation is still pending review (locale !== 'fr' only). */
  isPending: boolean;
}

/**
 * Resolves a product's copy for the given locale, falling back field-by-field
 * to French when a translation hasn't been reviewed yet. Never invents
 * copy — a missing English field always falls back to the verified French
 * text rather than showing blank or fabricated content.
 */
export function getProductContent(product: Product, locale: Locale): ResolvedProductContent {
  const fallback = product.translations.fr;
  const primary = product.translations[locale];

  let isPending = false;
  const merged = { ...fallback } as ProductTranslation;

  if (locale !== 'fr') {
    const filled = (value: unknown) => (Array.isArray(value) ? value.length > 0 : Boolean(value));

    for (const key of Object.keys(fallback) as (keyof ProductTranslation)[]) {
      const value = primary?.[key];
      if (filled(value)) {
        (merged as any)[key] = value;
      } else if (filled(fallback[key])) {
        // Only a field that actually has French copy can be awaiting
        // translation. Fields left empty in French too (undocumented
        // precautions, a kit's empty highlight list) have nothing to translate,
        // so they must not flag the whole page as pending.
        isPending = true;
      }
    }
  }

  return { ...merged, isPending };
}
