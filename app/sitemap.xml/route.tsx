import { SWIPEBAY_SERVICES } from "@/lib/services"
import { SWIPEBAY_INDUSTRIES, SWIPEBAY_CASE_STUDIES } from "@/lib/solutions"

const STATIC_URLS = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/solutions", priority: "0.9", changefreq: "weekly" },
  { url: "/gateway", priority: "0.9", changefreq: "weekly" },
  { url: "/enterprise", priority: "0.9", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/faq", priority: "0.7", changefreq: "monthly" },
]

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const lastmod = new Date().toISOString()

  const serviceUrls = SWIPEBAY_SERVICES.map((s) => ({
    url: `/services/${s.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  }))

  const industryUrls = SWIPEBAY_INDUSTRIES.map((ind) => ({
    url: `/solutions/${ind.slug}`,
    priority: "0.85",
    changefreq: "weekly",
  }))

  const caseStudyUrls = SWIPEBAY_CASE_STUDIES.map((cs) => ({
    url: `/solutions/${cs.industrySlug}/case-studies/${cs.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }))

  const allUrls = [
    ...STATIC_URLS,
    ...serviceUrls,
    ...industryUrls,
    ...caseStudyUrls,
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${origin}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
