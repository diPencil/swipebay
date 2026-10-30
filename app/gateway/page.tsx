import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { GatewayContent } from "./gateway-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "تكامل وهندسة بوابات الدفع الإلكتروني | SWIPEBAY"
    : "B2B Payment Gateway Integration & Engineering | SWIPEBAY"
  const description = isAr
    ? "خدمات هندسية متخصصة لربط وتكامل بوابات الدفع الإلكتروني والتحصيل الرقمي مع منصات الويب وتطبيقات الجوال ومتاجر الشركات."
    : "Professional technical integration and engineering services connecting digital platforms, web applications, and enterprise systems to modern digital payment gateways and merchant APIs."

  return constructPageMetadata({
    title,
    description,
    path: "/gateway",
    locale,
  })
}

export default async function GatewayPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BRAND_CONFIG.url}/gateway/#service`,
        name: isAr ? "خدمات تكامل بوابات الدفع الإلكتروني" : "B2B Payment Gateway Integration Services",
        description: isAr
          ? "خدمات هندسية واستشارية لدمج وربط بوابات الدفع الرقمية مع منصات وتطبيقات الأعمال."
          : "Professional engineering and technical integration services for digital payment gateways and merchant commerce workflows.",
        provider: {
          "@type": "Organization",
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
        },
        areaServed: ["EG", "SA", "AE", "QA", "KW"],
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
            name: isAr ? "بوابة الدفع" : "Payment Gateway",
            item: `${BRAND_CONFIG.url}/gateway`,
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
        <GatewayContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <JsonLd id="gateway-structured-data" data={structuredData} />
    </>
  )
}
