import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { MERCHANTS } from "@/lib/merchants"
import { MerchantsContent } from "./merchants-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  CANONICAL_ORIGIN,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "التجّار والشركاء | سوايب باي"
    : "Merchants & Business Partners | SWIPEBAY"
  const description = isAr
    ? "تعرّف على التجّار والشركات التي تتعاون مع سوايب باي في تكامل بوابات الدفع الإلكتروني والحلول والخدمات الرقمية."
    : "Explore merchants and businesses working with SWIPEBAY through payment gateway integrations and digital technology services."

  return constructPageMetadata({
    title,
    description,
    path: "/merchants",
    locale,
    noindex: false,
    keywords: isAr
      ? [
          "تجار سوايب باي",
          "شركاء سوايب باي",
          "بوابات دفع الكتروني",
          "دفع رقمي للشركات",
          "تكامل بوابات الدفع",
          "SWIPEBAY Merchants",
        ]
      : [
          "SWIPEBAY merchants",
          "SWIPEBAY partners",
          "payment gateway merchants",
          "digital payment network",
          "enterprise payment integration",
          "B2B commerce partners",
        ],
  })
}

export default async function MerchantsPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  const breadcrumbs = buildBreadcrumbJsonLd([
    {
      name: isAr ? "الرئيسية" : "Home",
      path: "/",
    },
    {
      name: isAr ? "التجّار والشركاء" : "Merchants & Partners",
      path: "/merchants",
    },
  ])

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${CANONICAL_ORIGIN}/merchants/#webpage`,
    url: `${CANONICAL_ORIGIN}/merchants`,
    name: isAr ? "شبكة التجّار والشركاء | سوايب باي" : "Merchants & Business Partners | SWIPEBAY",
    description: isAr
      ? "شبكة التجّار والشركات التي تجمعنا بها حلول الدفع الإلكتروني والخدمات الرقمية."
      : "A growing network of merchants and businesses connected through payment technology and digital services.",
    isPartOf: {
      "@type": "WebSite",
      name: BRAND_CONFIG.name,
      url: CANONICAL_ORIGIN,
    },
    about: {
      "@type": "Organization",
      name: BRAND_CONFIG.name,
      url: BRAND_CONFIG.url,
    },
    mainEntity: {
      "@type": "ItemList",
      name: isAr ? "قائمة التجّار والشركاء المعتمدين" : "SWIPEBAY Merchant & Partner Network",
      numberOfItems: MERCHANTS.length,
      itemListElement: MERCHANTS.map((merchant, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Organization",
          name: merchant.name[locale],
          image: `${CANONICAL_ORIGIN}${merchant.logo}`,
        },
      })),
    },
  }

  return (
    <>
      <main
        dir={isAr ? "rtl" : "ltr"}
        lang={isAr ? "ar-EG" : "en-US"}
        className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <MerchantsContent
          locale={locale}
          dictionary={dict}
          merchants={MERCHANTS}
        />
        <AppverseFooter />
      </main>

      <JsonLd id="merchants-breadcrumbs" data={breadcrumbs} />
      <JsonLd id="merchants-collection" data={collectionStructuredData} />
    </>
  )
}
