import type { MetadataRoute } from "next"
import { BRAND_CONFIG } from "@/lib/brand"
import { CANONICAL_ORIGIN } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_CONFIG.name} - Digital Solutions & Creative Technology Company`,
    short_name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.tagline.en,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}

