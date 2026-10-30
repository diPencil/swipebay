import { cookies, headers } from "next/headers"
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, isValidLocale, type Locale } from "./config"

/**
 * Server-side locale resolution for Next.js Server Components and Metadata.
 * Resolves locale from the 'swipebay_locale' cookie first,
 * then falls back to 'x-swipebay-locale' request header set by middleware,
 * and defaults to 'en'.
 */
export async function getServerLocale(): Promise<Locale> {
  try {
    const cookieStore = await cookies()
    const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value
    if (isValidLocale(cookieLocale)) {
      return cookieLocale
    }
  } catch {
    // cookies() may throw in certain build-time static contexts
  }

  try {
    const headerStore = await headers()
    const headerLocale = headerStore.get("x-swipebay-locale")
    if (isValidLocale(headerLocale)) {
      return headerLocale
    }
  } catch {
    // headers() may throw in certain build-time static contexts
  }

  return DEFAULT_LOCALE
}

