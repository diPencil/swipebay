import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { ContactContent } from "./contact-content"
import {
  constructPageMetadata,
  buildBreadcrumbJsonLd,
  JsonLd,
} from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr
    ? "تواصل معنا | شركة سويب باي للهندسة الرقمية"
    : "Contact Us | SWIPEBAY Digital Solutions Company"
  const description = isAr
    ? "تواصل مباشرة مع شركة سويب باي: استشارة معمارية متقدمة لتطوير منصات الويب والموبايل، بوابات الدفع، الذكاء الاصطناعي، والبنية السحابية في مصر والشرق الأوسط."
    : "Connect directly with SWIPEBAY Company. Direct consultation with principal engineers, software architects, and brand directors for bespoke digital systems across Egypt and the MENA region."

  return constructPageMetadata({
    title,
    description,
    path: "/contact",
    locale,
  })
}

export default async function ContactPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  // Structured Data (ContactPage + Organization Schema)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BRAND_CONFIG.url}/contact/#webpage`,
        url: `${BRAND_CONFIG.url}/contact`,
        name: isAr ? "تواصل معنا | شركة سويب باي" : "Contact Us | SWIPEBAY Company",
        description: dict.contactExperience.heroSubtitle,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${BRAND_CONFIG.url}/#website`,
          name: BRAND_CONFIG.name,
          url: BRAND_CONFIG.url,
        },
      },
      {
        "@type": "Organization",
        "@id": `${BRAND_CONFIG.url}/#organization`,
        name: BRAND_CONFIG.name,
        url: BRAND_CONFIG.url,
        logo: `${BRAND_CONFIG.url}${BRAND_CONFIG.assets.logoGrid}`,
        email: BRAND_CONFIG.contact.email,
        telephone: BRAND_CONFIG.contact.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: BRAND_CONFIG.contact.phone,
            contactType: "customer service",
            email: BRAND_CONFIG.contact.email,
            availableLanguage: ["Arabic", "English"],
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: BRAND_CONFIG.contact.locations.headquarter[locale],
            addressLocality: "El Sheikh Zayed",
            addressRegion: "Giza",
            addressCountry: "EG",
          },
          {
            "@type": "PostalAddress",
            streetAddress: BRAND_CONFIG.contact.locations.branch[locale],
            addressLocality: "El-Nozha",
            addressRegion: "Cairo",
            addressCountry: "EG",
          },
        ],
        sameAs: [
          BRAND_CONFIG.social.linkedin,
          BRAND_CONFIG.social.instagram,
          BRAND_CONFIG.social.facebook,
        ],
      },
    ],
  }

  return (
    <>
      <main
        dir={isAr ? "rtl" : "ltr"}
        lang={isAr ? "ar-EG" : "en-US"}
        className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
      >
        <SiteHeader />
        <ContactContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <JsonLd id="contact-structured-data" data={structuredData} />
    </>
  )
}

