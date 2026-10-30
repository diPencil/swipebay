import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientBrandsMarquee } from "@/components/client-brands-marquee"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { SWIPEBAY_SERVICES } from "@/lib/services"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    alternates: {
      canonical: BRAND_CONFIG.url,
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: BRAND_CONFIG.url,
      siteName: BRAND_CONFIG.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} | ${dict.meta.title}`,
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

export default async function Page() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  // SWIPEBAY Organization Structured Data (Clean language-neutral canonicals)
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BRAND_CONFIG.url}/#organization`,
    name: BRAND_CONFIG.name,
    legalName: BRAND_CONFIG.legalName,
    url: BRAND_CONFIG.url,
    logo: `${BRAND_CONFIG.url}${BRAND_CONFIG.assets.logoGrid}`,
    description: BRAND_CONFIG.mission[locale],
    email: BRAND_CONFIG.contact.email,
    telephone: BRAND_CONFIG.contact.phone,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: BRAND_CONFIG.contact.locations.headquarter[locale],
        addressLocality: "El Sheikh Zayed",
        addressRegion: "Giza",
        addressCountry: "EG",
      },
      {
        "@type": "PostalAddress",
        streetAddress: BRAND_CONFIG.contact.locations.branch[locale],
        addressLocality: "El-Nozha",
        addressRegion: "Cairo",
        addressCountry: "EG",
      },
    ],
    sameAs: [
      BRAND_CONFIG.social.linkedin,
      BRAND_CONFIG.social.instagram,
      BRAND_CONFIG.social.facebook,
    ],
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BRAND_CONFIG.url}/#website`,
    url: BRAND_CONFIG.url,
    name: BRAND_CONFIG.name,
    inLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Arabic", alternateName: "ar" },
    ],
  }

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dict.services.sectionTitle,
    itemListElement: SWIPEBAY_SERVICES.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: s[locale].title,
        description: s[locale].shortDescription,
        provider: {
          "@type": "Organization",
          name: BRAND_CONFIG.name,
        },
      },
    })),
  }

  return (
    <>
      <main
        dir={locale === "ar" ? "rtl" : "ltr"}
        lang={locale === "ar" ? "ar-EG" : "en-US"}
        className={`min-h-[100dvh] text-white ${locale === "ar" ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <Hero />
        <ClientBrandsMarquee />
        <Services />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      <Script
        id="org-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <Script
        id="services-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
    </>
  )
}
