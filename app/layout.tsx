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

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  return {
    metadataBase: new URL(BRAND_CONFIG.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${BRAND_CONFIG.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    authors: [{ name: BRAND_CONFIG.name, url: BRAND_CONFIG.url }],
    creator: BRAND_CONFIG.legalName,
    icons: {
      icon: BRAND_CONFIG.assets.favicon,
      shortcut: BRAND_CONFIG.assets.favicon,
      apple: BRAND_CONFIG.assets.favicon,
    },
    alternates: {
      canonical: BRAND_CONFIG.url,
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: BRAND_CONFIG.url,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: BRAND_CONFIG.name,
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [BRAND_CONFIG.assets.logoGrid],
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
        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" href={BRAND_CONFIG.assets.favicon} />
        <link rel="apple-touch-icon" href={BRAND_CONFIG.assets.favicon} />

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
