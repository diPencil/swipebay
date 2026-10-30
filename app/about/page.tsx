import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { AboutContent } from "./about-content"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const isAr = locale === "ar"

  const title = isAr ? "من نحن | شركة سويب باي" : "About Us | The Company Behind The Work"
  const fullTitle = `${title} | ${BRAND_CONFIG.name}`

  const description = isAr
    ? "تعرف على سويب باي: شركة متكاملة للحلول الرقمية والتكنولوجيا الإبداعية تجمع بين وضوح الرؤية الاستراتيجية، الهندسة البرمجية المتقدمة، والهويات البصرية الراسخة."
    : "Discover SWIPEBAY: A multidisciplinary digital solutions and creative technology company bridging strategy, bespoke software engineering, and distinctive brand architecture."

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND_CONFIG.url}/about`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BRAND_CONFIG.url}/about`,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: BRAND_CONFIG.assets.logoGrid,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} | About Us`,
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

export default async function AboutPage() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"

  // Structured Data (Organization + AboutPage Schema)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${BRAND_CONFIG.url}/about/#webpage`,
        url: `${BRAND_CONFIG.url}/about`,
        name: isAr ? "من نحن | شركة سويب باي" : "About Us | SWIPEBAY Company",
        description: dict.aboutExperience.heroSubtitle,
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
        legalName: BRAND_CONFIG.legalName,
        url: BRAND_CONFIG.url,
        logo: `${BRAND_CONFIG.url}${BRAND_CONFIG.assets.logoGrid}`,
        description: BRAND_CONFIG.mission[locale],
        email: BRAND_CONFIG.contact.email,
        telephone: BRAND_CONFIG.contact.phone,
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
        <AboutContent locale={locale} dict={dict} />
        <AppverseFooter />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  )
}
