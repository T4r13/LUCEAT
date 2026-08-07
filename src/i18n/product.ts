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
    for (const key of Object.keys(fallback) as (keyof ProductTranslation)[]) {
      const value = primary?.[key];
      const hasValue = Array.isArray(value) ? value.length > 0 : Boolean(value);
      if (hasValue) {
        (merged as any)[key] = value;
      } else if (key !== 'precautions') {
        // Empty precautions is a legitimate "none documented" state in French
        // too (see products.ts) — don't flag it as a pending translation.
        isPending = true;
      }
    }
  }

  return { ...merged, isPending };
}
