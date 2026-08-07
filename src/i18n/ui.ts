import type { Locale } from './config';
import { fr } from './translations/fr';
import { en } from './translations/en';

export const dictionaries = { fr, en } as const;

export type UiDictionary = typeof fr;

export function useTranslations(locale: Locale): UiDictionary {
  return dictionaries[locale];
}
