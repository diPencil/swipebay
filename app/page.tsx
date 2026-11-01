import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientBrandsMarquee } from "@/components/client-brands-marquee"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { MerchantsFeatureSection } from "@/components/merchants-feature-section"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import {
  constructPageMetadata,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  return constructPageMetadata({
    title: dict.meta.title,
    description: dict.meta.description,
    path: "/",
    locale,
    keywords: dict.meta.keywords.split(", "),
  })
}

export default async function Page() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)

  const organizationStructuredData = buildOrganizationJsonLd(locale)
  const websiteStructuredData = buildWebSiteJsonLd()

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
        <MerchantsFeatureSection />
        <AppverseFooter />
      </main>

      <JsonLd id="org-structured-data" data={organizationStructuredData} />
      <JsonLd id="website-structured-data" data={websiteStructuredData} />
      <JsonLd id="services-structured-data" data={servicesStructuredData} />
    </>
  )
}
