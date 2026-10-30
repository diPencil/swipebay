import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { RevisionsContent } from "./revisions-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "سياسة التعديلات والمراجعات الهندسية"
    : "Revision Policy & Iteration Framework"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "تعرف على سياسة التعديلات والمراجعات المرحلية في سويب باي، والتزامنا بالشفافية المطلقة، وحماية نطاق العمل، والضمان التشغيلي بعد الإطلاق."
    : "Review SWIPEBAY's structured revision policy, sprint-based iteration frameworks, milestone sign-offs, and inclusive operational warranties."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/revisions`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/revisions`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} Revision Policy`,
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

export default async function RevisionPolicyPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={isAr ? "ar-EG" : "en-US"}
      className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
    >
      <SiteHeader />
      <RevisionsContent locale={locale} dict={dict} />
      <AppverseFooter />
    </main>
  )
}
