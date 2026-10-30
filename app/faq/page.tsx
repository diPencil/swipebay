import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { FaqContent } from "./faq-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "الأسئلة الشائعة وقاعدة المعرفة التقنية"
    : "FAQ & Technical Knowledge Base"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "إجابات شاملة ومفصلة حول خدمات سويب باي، منهجية التنفيذ البرمجي، تكامل الذكاء الاصطناعي، الاستضافة السحابية، ونماذج التعاقد والشفافية."
    : "Explore comprehensive answers regarding SWIPEBAY's service scope, engineering workflows, applied AI integration, hosting SLA, and commercial transparency."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/faq`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/faq`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} FAQ`,
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

export default async function FAQPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const faq = dict.faqExperience

  // Structured Data Schema for Search Engines (FAQPage)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        <FaqContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  )
}
