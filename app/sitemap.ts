import type { MetadataRoute } from "next"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import { SWIPEBAY_INDUSTRIES } from "@/lib/solutions"
import { CANONICAL_ORIGIN } from "@/lib/seo"

/**
 * Official Next.js XML Sitemap Engine.
 * Serves canonical sitemap at https://swipebay.net/sitemap.xml.
 * Excludes admin, checkout, APIs, unverified draft records, and template leftover pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Stable baseline date for published canonical pages
  const lastModified = new Date("2026-10-30T00:00:00.000Z")

  // Core Static Routes (10 URLs)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${CANONICAL_ORIGIN}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${CANONICAL_ORIGIN}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL_ORIGIN}/solutions`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL_ORIGIN}/gateway`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL_ORIGIN}/enterprise`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL_ORIGIN}/merchants`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${CANONICAL_ORIGIN}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL_ORIGIN}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL_ORIGIN}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${CANONICAL_ORIGIN}/revisions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${CANONICAL_ORIGIN}/t&c`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // 10 Published Services
  const serviceRoutes: MetadataRoute.Sitemap = SWIPEBAY_SERVICES.map((s) => ({
    url: `${CANONICAL_ORIGIN}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 4 Published Domain Industries
  const industryRoutes: MetadataRoute.Sitemap = SWIPEBAY_INDUSTRIES.map((ind) => ({
    url: `${CANONICAL_ORIGIN}/solutions/${ind.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
  ]
}

