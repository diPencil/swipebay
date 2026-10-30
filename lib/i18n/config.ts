/**
 * SWIPEBAY Internationalization Configuration
 */

export const LOCALES = ["en", "ar"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"
export const LOCALE_COOKIE_NAME = "swipebay_locale"

export interface LocaleMetadata {
  code: Locale
  name: string
  nativeName: string
  dir: "ltr" | "rtl"
  langTag: string
}

export const LOCALES_METADATA: Record<Locale, LocaleMetadata> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    langTag: "en-US",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    langTag: "ar-EG",
  },
}

export function isValidLocale(locale: unknown): locale is Locale {
  return typeof locale === "string" && LOCALES.includes(locale as Locale)
}

export function isRTL(locale: Locale): boolean {
  return LOCALES_METADATA[locale]?.dir === "rtl"
}

