import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { FaqContent } from "./faq-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "الأسئلة الشائعة وقاعدة المعرفة التقنية"
    : "FAQ & Technical Knowledge Base"
  const description = isAr
    ? "إجابات واضحة حول خدمات سويب باي، منهجية التنفيذ الهندسي، تكامل الذكاء الاصطناعي، الحلول السحابية، ونماذج التعاقد والعمل المشترك."
    : "Explore answers regarding SWIPEBAY's digital services, engineering workflows, AI integration, managed cloud infrastructure, and project engagement models."

  return constructPageMetadata({
    title,
    description,
    path: "/faq",
    locale,
  })
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

      <JsonLd id="faq-structured-data" data={structuredData} />
    </>
  )
}
