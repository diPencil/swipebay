import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { TermsContent } from "./terms-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "الشروط والأحكام والاتفاقية القانونية"
    : "Terms & Conditions & Master Agreement"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "تعرف على الشروط والأحكام والاتفاقية القانونية المعتمدة لشركة سويب باي، والتزامنا بنقل الملكية الفكرية بنسبة 100%، واتفاقيات السرية الثنائية، ومستويات الخدمة السحابية."
    : "Review SWIPEBAY's master commercial agreement, 100% intellectual property assignment, bilateral non-disclosure protection, milestone governance, and cloud service level guarantees."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/t&c`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/t&c`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} Terms & Conditions`,
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
