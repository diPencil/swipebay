import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import {
  SWIPEBAY_SERVICES,
  SERVICE_CATEGORIES,
  getServiceBySlug,
  getRelatedServices,
} from "@/lib/services"
import { ServiceDetailContent } from "./service-detail-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  JsonLd,
} from "@/lib/seo"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return SWIPEBAY_SERVICES.map((s) => ({
    slug: s.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    return {
      title: `Service Not Found | ${BRAND_CONFIG.name}`,
    }
  }

  const locale = await getServerLocale()
  const isAr = locale === "ar"
  const serviceData = service[locale]

  return constructPageMetadata({
    title: serviceData.title,
    description: serviceData.shortDescription,
    path: `/services/${service.slug}`,
    locale,
  })
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const serviceData = service[locale]

  const relatedServices = getRelatedServices(service.relatedSlugs)
  const categoryInfo = SERVICE_CATEGORIES[service.category]

  // JSON-LD Structured Data: Service + Breadcrumbs
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: isAr ? "الرئيسية" : "Home", path: "/" },
    { name: isAr ? "الخدمات" : "Services", path: "/services" },
    { name: serviceData.title, path: `/services/${service.slug}` },
  ])

  const serviceStructuredData = buildServiceJsonLd(service, locale)

  return (
    <>
      <main
        dir={isAr ? "rtl" : "ltr"}
        lang={isAr ? "ar-EG" : "en-US"}
        className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <ServiceDetailContent
          locale={locale}
          dict={dict}
          service={service}
          relatedServices={relatedServices}
          categoryInfo={categoryInfo}
        />
        <AppverseFooter />
      </main>

      <JsonLd id={`service-${service.slug}-breadcrumb`} data={breadcrumbData} />
      <JsonLd id={`service-${service.slug}-schema`} data={serviceStructuredData} />
    </>
  )
}
