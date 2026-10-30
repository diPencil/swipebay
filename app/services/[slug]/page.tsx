import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
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

  const title = isAr
    ? `${serviceData.title} | ${BRAND_CONFIG.name}`
    : `${serviceData.title} | ${BRAND_CONFIG.name}`
  const description = serviceData.shortDescription

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BRAND_CONFIG.url}/services/${service.slug}`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${serviceData.title} - ${BRAND_CONFIG.name}`,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: serviceData.title,
        description: serviceData.overview,
        provider: {
          "@type": "Organization",
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
        },
        url: `${BRAND_CONFIG.url}/services/${service.slug}`,
        areaServed: ["Egypt", "Saudi Arabia", "United Arab Emirates", "Middle East"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: serviceData.title,
          itemListElement: serviceData.deliverables.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.servicesExperience.breadcrumbsHome,
            item: BRAND_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.servicesExperience.breadcrumbsServices,
            item: `${BRAND_CONFIG.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: serviceData.title,
            item: `${BRAND_CONFIG.url}/services/${service.slug}`,
          },
        ],
      },
    ],
  }

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

      <Script
        id={`service-${service.slug}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  )
}
