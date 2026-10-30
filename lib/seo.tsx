import type { Metadata } from "next"
import React from "react"
import { BRAND_CONFIG } from "./brand"
import type { ServiceDefinition } from "./services"
import type { CaseStudyDefinition } from "./solutions"

export const CANONICAL_ORIGIN = "https://swipebay.net"

/**
 * Normalizes any relative or absolute path into an absolute canonical URL.
 * Guarantees https://swipebay.net origin, strips trailing slashes (except root),
 * and prevents localhost URLs from escaping into production.
 */
export function buildCanonicalUrl(path = "/"): string {
  if (!path || path === "/") return CANONICAL_ORIGIN
  // Remove query strings and fragments if present
  const clean = path.split("?")[0].split("#")[0]
  const normalizedPath = clean.startsWith("/") ? clean : `/${clean}`
  const trimmed = normalizedPath.endsWith("/") ? normalizedPath.slice(0, -1) : normalizedPath
  return `${CANONICAL_ORIGIN}${trimmed}`
}

export interface PageMetadataOptions {
  title: string
  description: string
  path: string
  locale: "en" | "ar"
  ogType?: "website" | "article"
  image?: string
  noindex?: boolean
  keywords?: string[]
}

/**
 * Centralized type-safe Next.js Metadata factory.
 * Guarantees standard canonical, Open Graph, Twitter cards, and crawler directives.
 */
export function constructPageMetadata({
  title,
  description,
  path,
  locale,
  ogType = "website",
  image = BRAND_CONFIG.assets.logoGrid,
  noindex = false,
  keywords,
}: PageMetadataOptions): Metadata {
  const isAr = locale === "ar"
  const canonicalUrl = buildCanonicalUrl(path)
  const fullTitle = title.includes(BRAND_CONFIG.name) ? title : `${title} | ${BRAND_CONFIG.name}`
  const absoluteImageUrl = image.startsWith("http") ? image : `${CANONICAL_ORIGIN}${image.startsWith("/") ? image : `/${image}`}`

  return {
    title,
    description,
    keywords: keywords ?? (isAr
      ? ["سويب باي", "حلول برمجية", "تطوير تطبيقات", "تصميم هويات", "ذكاء اصطناعي", "بوابات دفع", "استضافة سحابية"]
      : ["SWIPEBAY", "digital solutions", "software engineering", "brand identity", "applied AI", "payment gateway", "cloud infrastructure"]),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: BRAND_CONFIG.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: ogType,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteImageUrl],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }
}

/**
 * Schema.org Organization structured data using verified legal details.
 */
export function buildOrganizationJsonLd(locale: "en" | "ar" = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: BRAND_CONFIG.name,
    url: CANONICAL_ORIGIN,
    logo: `${CANONICAL_ORIGIN}${BRAND_CONFIG.assets.logoGrid}`,
    image: `${CANONICAL_ORIGIN}${BRAND_CONFIG.assets.logoGrid}`,
    description: BRAND_CONFIG.mission[locale],
    email: BRAND_CONFIG.contact.email,
    telephone: BRAND_CONFIG.contact.phoneRaw,
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
        addressLocality: "Sheraton, El-Nozha",
        addressRegion: "Cairo",
        addressCountry: "EG",
      },
    ],
    sameAs: [
      BRAND_CONFIG.social.linkedin,
      BRAND_CONFIG.social.instagram,
      BRAND_CONFIG.social.facebook,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND_CONFIG.contact.phoneRaw,
        contactType: "sales",
        email: BRAND_CONFIG.contact.email,
        availableLanguage: ["English", "Arabic"],
      },
    ],
  }
}

/**
 * Schema.org WebSite structured data.
 */
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CANONICAL_ORIGIN}/#website`,
    url: CANONICAL_ORIGIN,
    name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.tagline.en,
    publisher: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
    inLanguage: ["en", "ar"],
  }
}

/**
 * Schema.org BreadcrumbList structured data.
 */
export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  }
}

/**
 * Schema.org Service structured data for catalog services.
 */
export function buildServiceJsonLd(service: ServiceDefinition, locale: "en" | "ar" = "en") {
  const sData = service[locale]
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_ORIGIN}/services/${service.slug}#service`,
    name: sData.title,
    description: sData.overview || sData.shortDescription,
    url: `${CANONICAL_ORIGIN}/services/${service.slug}`,
    provider: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
    serviceType: service.category,
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "AdministrativeArea", name: "Middle East" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${sData.title} Deliverables`,
      itemListElement: sData.deliverables.map((deliv, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: deliv,
        },
        position: idx + 1,
      })),
    },
  }
}

/**
 * Schema.org Article / Case Study structured data for verified case studies.
 */
export function buildCaseStudyJsonLd(caseStudy: CaseStudyDefinition, locale: "en" | "ar" = "en") {
  const csData = caseStudy[locale]
  const canonicalUrl = `${CANONICAL_ORIGIN}/solutions/${caseStudy.industrySlug}/case-studies/${caseStudy.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: csData.title,
    description: csData.subtitle || csData.overview,
    url: canonicalUrl,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    publisher: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
    author: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
    about: {
      "@type": "Organization",
      name: caseStudy.clientName,
    },
  }
}

/**
 * Schema.org FAQPage structured data for visible FAQs.
 */
export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }
}

/**
 * XSS-safe Server-Rendered JSON-LD script tag.
 */
export function JsonLd({ data, id }: { data: Record<string, unknown> | Array<Record<string, unknown>>; id?: string }) {
  if (!data) return null
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  )
}
