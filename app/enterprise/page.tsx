import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { EnterpriseContent } from "./enterprise-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "حلول الشركات وحزم الأعمال المخصصة"
    : "Enterprise Solutions & Custom Packages"
  const description = isAr
    ? "حلول رقمية متكاملة وحزم أعمال مخصصة للمؤسسات تجمع بين هندسة البرمجيات، الهوية البصرية، الذكاء الاصطناعي، الأتمتة، والبنية السحابية مع أداة تفاعلية لتخصيص الحلول وطلب عروض الأسعار."
    : "Flexible B2B enterprise solutions and multi-service packages unifying bespoke engineering, brand architecture, applied AI, workflow automation, and resilient cloud infrastructure with an interactive solution configurator."

  return constructPageMetadata({
    title,
    description,
    path: "/enterprise",
    locale,
  })
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

      <JsonLd id="enterprise-structured-data" data={structuredData} />
    </>
  )
}

