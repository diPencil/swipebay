import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { getAllIndustries, getIndustryBySlug } from "@/lib/solutions"
import { IndustryDetailContent } from "../industry-detail-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

interface IndustryPageProps {
  params: Promise<{
    industry: string
  }>
}

export async function generateStaticParams() {
  const industries = getAllIndustries()
  return industries.map((ind) => ({
    industry: ind.slug,
  }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const industry = getIndustryBySlug(resolvedParams.industry)
  if (!industry) {
    return {}
  }

  const locale = await getServerLocale()
  const isAr = locale === "ar"
  const indData = industry[locale]

  const title = `${indData.title} | ${isAr ? "حلول متخصصة" : "Domain Solutions"}`
  const description = indData.shortDescription

  return constructPageMetadata({
    title,
    description,
    path: `/solutions/${industry.slug}`,
    locale,
  })
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const resolvedParams = await params
  const industry = getIndustryBySlug(resolvedParams.industry)
  if (!industry) {
    notFound()
  }

  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const indData = industry[locale]

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BRAND_CONFIG.url}/solutions/${industry.slug}/#service`,
        name: indData.title,
        description: indData.shortDescription,
        provider: {
          "@type": "Organization",
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
        },
        areaServed: ["EG", "SA", "AE", "QA", "KW"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${indData.title} Solutions`,
          itemListElement: indData.solutionAreas.map((sa) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: sa.title,
              description: sa.description,
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
            name: isAr ? "الرئيسية" : "Home",
            item: BRAND_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isAr ? "الحلول" : "Solutions",
            item: `${BRAND_CONFIG.url}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: indData.title,
            item: `${BRAND_CONFIG.url}/solutions/${industry.slug}`,
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
        className={`min-h-[100dvh] text-white selection:bg-[#49CBDC]/30 selection:text-white ${isAr ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <IndustryDetailContent industry={industry} locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <JsonLd id={`industry-${industry.slug}-schema`} data={structuredData} />
    </>
  )
}
