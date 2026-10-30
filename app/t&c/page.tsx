import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { TermsContent } from "./terms-content"
import { constructPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "الشروط والأحكام والاتفاقية القانونية"
    : "Terms & Conditions & Master Agreement"
  const description = isAr
    ? "تعرف على الشروط والأحكام العامة والاتفاقيات التجارية وسياسات سرية المعلومات وإرشادات التعامل والتعاقد مع سويب باي."
    : "Review SWIPEBAY's standard terms and conditions, commercial agreements, project milestones, confidential disclosure policies, and service engagement guidelines."

  return constructPageMetadata({
    title,
    description,
    path: "/t&c",
    locale,
  })
}

export default async function TermsAndConditionsPage() {
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
      <TermsContent locale={locale} dict={dict} />
      <AppverseFooter />
    </main>
  )
}
