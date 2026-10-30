/**
 * SWIPEBAY Brand Identity & Corporate Configuration
 * Source of truth: https://swipebay.net/
 */

export const BRAND_CONFIG = {
  name: "SWIPEBAY",
  legalName: "Swipe Tech Company",
  shortName: "Swipebay",
  domain: "swipebay.net",
  url: "https://swipebay.net",
  industry: {
    en: "Digital Solutions & Creative Technology Agency",
    ar: "وكالة للحلول الرقمية والتكنولوجيا الإبداعية",
  },
  tagline: {
    en: "Empowering businesses through digital solutions and creative technology.",
    ar: "تمكين نمو الأعمال بحلول تقنية مبتكرة وتجارب رقمية متكاملة.",
  },
  mission: {
    en: "To engineer scalable software, build distinctive digital brands, and drive sustainable growth for forward-thinking businesses.",
    ar: "ابتكار برمجيات قابلة للتوسع، وتطوير هويات رقمية متميزة تدفع عجلة النمو المستدام للشركات الطموحة.",
  },
  vision: {
    en: "To be the leading technology and creative partner transforming enterprise capabilities across the Middle East and globally.",
    ar: "أن نكون الشريك التقني والإبداعي الرائد في قيادة التحول الرقمي للشركات في الشرق الأوسط والعالم.",
  },
  contact: {
    email: "sales@swipebay.net",
    phone: "+20 10 4060 4666",
    phoneRaw: "+201040604666",
    whatsappRaw: "201040604666",
    whatsappUrl: "https://wa.me/201040604666",
    locations: {
      headquarter: {
        en: "Area 13, Beverly Hills, El Sheikh Zayed, Giza, Egypt",
        ar: "المنطقة 13، بيفرلي هيلز، الشيخ زايد، الجيزة، مصر",
      },
      branch: {
        en: "9 Othman Ahmed Ramzy, Sheraton Al-Matar, El-Nozha, Cairo, Egypt",
        ar: "9 عثمان أحمد رمزي، مساكن شيراتون، النزهة، القاهرة، مصر",
      },
    },
  },
  assets: {
    logoGrid: "/swipebaygrid.png",
    logoDark: "/swipebay.png",
    favicon: "/favicon.png",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/swipebay",
    instagram: "https://www.instagram.com/swipebay",
    facebook: "https://www.facebook.com/swipebay",
  },
  colors: {
    primaryAccent: "#49CBDC", // SWIPEBAY Logo Cyan
    primaryAccentHover: "#67D6E4",
    primaryAccentGlow: "rgba(73, 203, 220, 0.35)",
    intelligenceAccent: "#8b5cf6", // Deep Violet / Purple
    background: "#000000",
  },
} as const

export type BrandConfig = typeof BRAND_CONFIG

