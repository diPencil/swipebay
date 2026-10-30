import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider, isRTL } from "@/lib/i18n"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { CANONICAL_ORIGIN } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  return {
    metadataBase: new URL(CANONICAL_ORIGIN),
    title: {
      default: dict.meta.title,
      template: `%s | ${BRAND_CONFIG.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    authors: [{ name: BRAND_CONFIG.name, url: CANONICAL_ORIGIN }],
    creator: BRAND_CONFIG.name,
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    alternates: {
      canonical: CANONICAL_ORIGIN,
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: CANONICAL_ORIGIN,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: BRAND_CONFIG.name,
      images: [
        {
          url: `${CANONICAL_ORIGIN}${BRAND_CONFIG.assets.logoGrid}`,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} — ${dict.meta.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [`${CANONICAL_ORIGIN}${BRAND_CONFIG.assets.logoGrid}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getServerLocale()
  const dir = isRTL(locale) ? "rtl" : "ltr"
  const langTag = locale === "ar" ? "ar-EG" : "en-US"

  return (
    <html
      lang={langTag}
      dir={dir}
      className={`${inter.className} ${locale === "ar" ? "font-arabic" : ""}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon & Web App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = '${BRAND_CONFIG.assets.favicon}';
            }
            updateFavicon();
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>

        {/* Universal Media Drag & Right-Click Protection on Images and Videos */}
        <Script id="disable-media-drag" strategy="afterInteractive">
          {`
            (function() {
              function blockMediaAction(e) {
                var t = e.target;
                if (!t) return;
                var tag = t.tagName ? t.tagName.toUpperCase() : '';
                if (tag === 'IMG' || tag === 'VIDEO' || (t.closest && (t.closest('img') || t.closest('video') || t.closest('picture')))) {
                  e.preventDefault();
                  return false;
                }
              }
              window.addEventListener('dragstart', blockMediaAction, { capture: true });
              window.addEventListener('contextmenu', blockMediaAction, { capture: true });
            })();
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider initialLocale={locale}>
          <Suspense fallback={null}>
            <div className="fixed inset-0 z-0 bg-black">
              <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
            </div>
            <div className="relative z-10">{children}</div>
          </Suspense>
        </LanguageProvider>

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
