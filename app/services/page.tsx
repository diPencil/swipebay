import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import {
  SWIPEBAY_SERVICES,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from "@/lib/services"
import { ServicesOverviewContent } from "./services-overview-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "خدماتنا وحلولنا الرقمية المتكاملة"
    : "Services & Specialized Digital Capabilities"
  const description = isAr
    ? "استكشف تخصصات سويب باي العشرة: تصميم الهويات التجارية، تطوير الويب والتطبيقات، حلول الذكاء الاصطناعي، وأتمتة العمليات، والبنية السحابية المدارة."
    : "Explore SWIPEBAY's 10 specialized digital capabilities: Brand Design, Web & App Development, Applied AI, Automation, Cloud Infrastructure, and Marketing."

  return constructPageMetadata({
    title,
    description,
    path: "/services",
    locale,
  })
}

export default async function ServicesPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  // Structured Data: Breadcrumb & Services Catalog
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: isAr ? "الرئيسية" : "Home", path: "/" },
    { name: isAr ? "الخدمات" : "Services", path: "/services" },
  ])

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

      <JsonLd id="services-breadcrumb-schema" data={breadcrumbData} />
      <JsonLd id="services-overview-schema" data={structuredData} />
    </>
  )
}
