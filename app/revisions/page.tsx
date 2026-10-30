import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { RevisionsContent } from "./revisions-content"
import { constructPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "سياسة التعديلات والمراجعات الهندسية"
    : "Revision Policy & Iteration Framework"
  const description = isAr
    ? "تعرف على إرشادات التعديلات والمراجعات المرحلية في سويب باي، وإدارة نطاق العمل المشترك، والدعم الفني بعد تسليم المشاريع."
    : "Review SWIPEBAY's structured project revision guidelines, collaborative review milestones, scope management, and post-delivery support framework."

  return constructPageMetadata({
    title,
    description,
    path: "/revisions",
    locale,
  })
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
