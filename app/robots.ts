import type { MetadataRoute } from "next"
import { CANONICAL_ORIGIN } from "@/lib/seo"

/**
 * Official Next.js Robots.txt Generator.
 * Available at https://swipebay.net/robots.txt.
 * Allows crawling of all public content while protecting administrative and internal routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/checkout",
          "/api/",
        ],
      },
    ],
    sitemap: `${CANONICAL_ORIGIN}/sitemap.xml`,
    host: CANONICAL_ORIGIN,
  }
}

