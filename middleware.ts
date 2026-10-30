import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LOCALES = ["en", "ar"] as const
const DEFAULT_LOCALE = "en"
const LOCALE_COOKIE_NAME = "swipebay_locale"

function getPreferredLocale(request: NextRequest): string {
  // 1. Check existing cookie
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value
  if (cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage && acceptLanguage.toLowerCase().includes("ar")) {
    return "ar"
  }

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Admin authentication check (preserve existing functionality)
  if (
    pathname === "/admin" ||
    (pathname.startsWith("/admin/") && !pathname.startsWith("/admin/login"))
  ) {
    const adminSession = request.cookies.get("admin-session")
    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
    return NextResponse.next()
  }

  if (pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  // 2. Redirect legacy uppercase /About to canonical lowercase /about
  if (pathname === "/About") {
    const redirectUrl = new URL("/about", request.url)
    return NextResponse.redirect(redirectUrl, 308)
  }

  // 3. Redirect legacy /en and /ar URLs to clean, language-neutral URLs
  if (pathname === "/en" || pathname === "/ar" || pathname.startsWith("/en/") || pathname.startsWith("/ar/")) {
    const localeMatch = pathname.match(/^\/(en|ar)(\/.*)?$/)
    const targetLocale = localeMatch ? localeMatch[1] : DEFAULT_LOCALE
    const cleanPath = (localeMatch && localeMatch[2]) ? localeMatch[2] : "/"

    const redirectUrl = new URL(cleanPath, request.url)
    const response = NextResponse.redirect(redirectUrl, 308)

    // Save locale preference to cookie during redirection
    response.cookies.set(LOCALE_COOKIE_NAME, targetLocale, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    })

    return response
  }

  // 3. For clean public routes: resolve locale and pass via request headers to Server Components
  const activeLocale = getPreferredLocale(request)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-swipebay-locale", activeLocale)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Prevent shared caching across different language preferences
  response.headers.set("Vary", "Cookie, Accept-Encoding")

  // Ensure cookie is established if not already present
  if (!request.cookies.has(LOCALE_COOKIE_NAME)) {
    response.cookies.set(LOCALE_COOKIE_NAME, activeLocale, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static, _next/image
     * - api routes
     * - static assets with extensions (.png, .jpg, .svg, .ico, .mp4, .woff, .woff2, etc.)
     */
    "/((?!api|_next/static|_next/image|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|woff|woff2)$).*)",
  ],
}
