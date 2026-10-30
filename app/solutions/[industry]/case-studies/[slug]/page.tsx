import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import {
  getPublishedCaseStudies,
  getCaseStudyBySlug,
  getIndustryBySlug,
} from "@/lib/solutions"
import { CaseStudyContent } from "./case-study-content"
import {
  constructPageMetadata,
  JsonLd,
} from "@/lib/seo"

interface CaseStudyPageProps {
  params: Promise<{
    industry: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const caseStudies = getPublishedCaseStudies()
  return caseStudies.map((cs) => ({
    industry: cs.industrySlug,
    slug: cs.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug)
  if (!caseStudy || !caseStudy.isPublished) {
    return {}
  }

  const locale = await getServerLocale()
  const isAr = locale === "ar"
  const csData = caseStudy[locale]

  const title = `${csData.title} | ${caseStudy.clientName}`
  const description = csData.subtitle

  return constructPageMetadata({
    title,
    description,
    path: `/solutions/${caseStudy.industrySlug}/case-studies/${caseStudy.slug}`,
    locale,
    ogType: "article",
    noindex: true,
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug)
  if (!caseStudy || !caseStudy.isPublished) {
    notFound()
  }

  const industry = getIndustryBySlug(resolvedParams.industry)
  if (!industry || industry.slug !== caseStudy.industrySlug) {
    notFound()
  }

  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const csData = caseStudy[locale]
  const indData = industry[locale]

  const structuredData = {
    "@context": "https://schema.org",
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
      {
        "@type": "ListItem",
        position: 4,
        name: csData.title,
        item: `${BRAND_CONFIG.url}/solutions/${industry.slug}/case-studies/${caseStudy.slug}`,
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
        <CaseStudyContent
          caseStudy={caseStudy}
          industry={industry}
          locale={locale}
          dict={dict}
        />
        <AppverseFooter />
      </main>

      <JsonLd id={`case-study-${caseStudy.slug}-schema`} data={structuredData} />
    </>
  )
}
