import { DEFAULT_LOCALE, type Locale, isValidLocale } from "./config"
import { enDictionary } from "./dictionaries/en"
import { arDictionary } from "./dictionaries/ar"
import type { Dictionary } from "./types"

const dictionaries: Record<Locale, Dictionary> = {
  en: enDictionary,
  ar: arDictionary,
}

export function getDictionarySync(locale?: string | null): Dictionary {
  if (locale && isValidLocale(locale)) {
    return dictionaries[locale]
  }
  return dictionaries[DEFAULT_LOCALE]
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE]
}

