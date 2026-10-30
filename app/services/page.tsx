import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import {
  SWIPEBAY_SERVICES,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from "@/lib/services"
import { ServicesOverviewContent } from "./services-overview-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  const title = isAr
    ? `خدماتنا وحلولنا الرقمية المتكاملة | ${BRAND_CONFIG.name}`
    : `Services & Digital Capabilities | ${BRAND_CONFIG.name}`
  const description = isAr
    ? "استكشف خدمات سويب باي: تصميم الهويات التجارية، تطوير الويب والتطبيقات، حلول الذكاء الاصطناعي، وأتمتة العمليات، والبنية السحابية المدارة."
    : "Explore Swipebay's 10 specialized digital disciplines: Brand Design, Web & App Development, Applied AI, Automation, Cloud Infrastructure, and Performance Marketing."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/services`,
    },
    openGraph: {
      title,
      description,
      url: `${BRAND_CONFIG.url}/services`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [BRAND_CONFIG.assets.logoGrid],
    },
  }
}

export default async function ServicesPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  // Structured Data for Services Catalog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dict.servicesExperience.allDisciplinesTitle,
    description: dict.servicesExperience.heroSubtitle,
    url: `${BRAND_CONFIG.url}/services`,
    numberOfItems: SWIPEBAY_SERVICES.length,
    itemListElement: SWIPEBAY_SERVICES.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: s[locale].title,
        url: `${BRAND_CONFIG.url}/services/${s.slug}`,
        description: s[locale].shortDescription,
        provider: {
          "@type": "Organization",
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
        },
      },
    })),
  }

  return (
    <>
      <main
        dir={isAr ? "rtl" : "ltr"}
        lang={isAr ? "ar-EG" : "en-US"}
        className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <ServicesOverviewContent
          locale={locale}
          dict={dict}
          services={SWIPEBAY_SERVICES}
          categories={SERVICE_CATEGORIES}
        />
        <AppverseFooter />
      </main>

      <Script
        id="services-overview-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  )
}
