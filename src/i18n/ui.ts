import type { Locale } from './config';
import { fr } from './translations/fr';
import { en } from './translations/en';

export const dictionaries = { fr, en } as const;

// fr/en are declared `as const` so each editor gets literal-string
// autocomplete, but that also makes their two literal types mutually
// incompatible (e.g. "Accueil" vs "Home"). Widen leaf strings back to
// `string` for the shared dictionary shape so either locale satisfies it.
type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => Widen<R>
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;

export type UiDictionary = Widen<typeof fr>;

export function useTranslations(locale: Locale): UiDictionary {
  return dictionaries[locale];
}
