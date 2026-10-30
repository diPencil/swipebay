import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { EnterpriseContent } from "./enterprise-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "حلول الشركات وحزم الأعمال المخصصة"
    : "Enterprise Solutions & Custom Packages"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "حلول رقمية متكاملة وحزم أعمال مخصصة للمؤسسات تجمع بين هندسة البرمجيات، الهوية البصرية، الذكاء الاصطناعي، الأتمتة، والبنية السحابية مع أداة تفاعلية لتخصيص الحلول وطلب عروض الأسعار."
    : "Flexible B2B enterprise solutions and multi-service packages unifying bespoke engineering, brand architecture, applied AI, workflow automation, and resilient cloud infrastructure with an interactive solution configurator."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/enterprise`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/enterprise`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} | Enterprise Solutions`,
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

export default async function EnterprisePage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BRAND_CONFIG.url}/enterprise/#service`,
        name: isAr ? "حلول وحزم الشركات المخصصة" : "B2B Enterprise Solutions & Packages",
        description: isAr
          ? "تطوير حلول برمجية وهندسية وبصرية متكاملة للمؤسسات والشركات الكبرى."
          : "Tailored enterprise solutions unifying software development, AI, branding, and cloud architecture.",
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
            name: isAr ? "حلول الشركات" : "Enterprise",
            item: `${BRAND_CONFIG.url}/enterprise`,
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
        <EnterpriseContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}

