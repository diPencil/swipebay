import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { getAllIndustries } from "@/lib/solutions"
import { SolutionsContent } from "./solutions-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "حلول القطاعات والمشاريع المنفذة"
    : "Industry Solutions & Deployed Case Studies"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "اكتشف حلول سويب باي المتخصصة للقطاعات الحيوية: الضيافة والسياحة، المطاعم والأغذية، التعليم الرقمي، والخدمات المهنية، مع مشاريع واقعية ونتائج مثبتة."
    : "Explore SWIPEBAY's domain-specific digital solutions for Hospitality, Restaurants, Education, and Professional Services with verified enterprise case studies and measurable results."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/solutions`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/solutions`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} | Industry Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [BRAND_CONFIG.assets.logoGrid],
    },
  }
}

export default async function SolutionsPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const industries = getAllIndustries()

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BRAND_CONFIG.url}/solutions/#webpage`,
        url: `${BRAND_CONFIG.url}/solutions`,
        name: isAr ? "حلول القطاعات | سويب باي" : "Industry Solutions | SWIPEBAY",
        description: isAr
          ? "حلول تقنية وهندسية متخصصة ومشاريع منفذة في قطاعات الضيافة، المطاعم، والتعليم."
          : "Domain-specific digital solutions and deployed enterprise case studies.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${BRAND_CONFIG.url}/#website`,
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
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
        ],
      },
      {
        "@type": "ItemList",
        name: isAr ? "القطاعات المتخصصة" : "Industry Practices",
        itemListElement: industries.map((ind, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: ind[locale].title,
          url: `${BRAND_CONFIG.url}/solutions/${ind.slug}`,
        })),
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
        <SolutionsContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
