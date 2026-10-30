import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { GatewayContent } from "./gateway-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "هندسة وتكامل بوابات الدفع الإلكتروني"
    : "B2B Payment Gateway Integration & Engineering"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "خدمات هندسية متقدمة لربط وتكامل بوابات الدفع الإلكتروني (Paymob، فوري، Stripe، تابي، تمارا، أبل باي) مع منصات الويب وتطبيقات الجوال ونقاط البيع في مصر والخليج."
    : "Enterprise payment gateway engineering, multi-acquirer checkout flows, tokenization, and automated reconciliation connecting platforms to Paymob, Fawry, Stripe, Tabby, and Apple Pay."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/gateway`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/gateway`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} | Payment Gateway Engineering`,
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
        name: isAr ? "هندسة بوابات الدفع الإلكتروني" : "B2B Payment Gateway Integration Services",
        description: isAr
          ? "تطوير ودمج بوابات الدفع والتحصيل الرقمي متعددة القنوات في مصر والخليج."
          : "Enterprise payment gateway engineering, checkout orchestration, and financial webhook reconciliation.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
