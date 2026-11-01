export type MerchantCategory = "payment" | "digital"

export interface Merchant {
  id: string
  name: {
    en: string
    ar: string
  }
  slug: string
  logo: string
  logoDark?: string
  logoLight?: string
  badgeBg?: "light" | "dark" | "blue"
  websiteUrl?: string
  categories: MerchantCategory[]
  status: "published" | "draft"
  displayOrder: number
  featured?: boolean
  altText: {
    en: string
    ar: string
  }
}

/**
 * Genuine merchants, businesses, and commercial partners working with SWIPEBAY.
 * Connected through payment gateway integrations and/or digital platforms.
 */
export const MERCHANTS: Merchant[] = [
  {
    id: "cairosky-travel",
    name: {
      en: "CairoSky Travel",
      ar: "كايروسكاي ترافيل",
    },
    slug: "cairosky-travel",
    logo: "/merchants/cairosky-travel.jpeg",
    badgeBg: "light",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 1,
    featured: true,
    altText: {
      en: "CairoSky Travel - Corporate partner logo",
      ar: "شعار كايروسكاي ترافيل",
    },
  },
  {
    id: "light-egypt-travel",
    name: {
      en: "Light Egypt Travel",
      ar: "لايت إيجيبت للسياحة",
    },
    slug: "light-egypt-travel",
    logo: "/merchants/light-egypt-travel.jpg",
    badgeBg: "light",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 2,
    featured: true,
    altText: {
      en: "Light Egypt Travel - Tourism partner logo",
      ar: "شعار لايت إيجيبت للسياحة",
    },
  },
  {
    id: "family-tours",
    name: {
      en: "Moussa Family Tours",
      ar: "موسى فاميلي تورز",
    },
    slug: "family-tours",
    logo: "/merchants/family-tours.jpg",
    badgeBg: "blue",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 3,
    featured: true,
    altText: {
      en: "Moussa Family Tours - Travel & tourism partner logo",
      ar: "شعار موسى فاميلي تورز",
    },
  },
  {
    id: "gardenia-group-hotel",
    name: {
      en: "Gardenia Group Hotel",
      ar: "فندق مجموعة جاردينيا",
    },
    slug: "gardenia-group-hotel",
    logo: "/merchants/gardenia-group-hotel.jpg",
    badgeBg: "light",
    categories: ["payment"],
    status: "published",
    displayOrder: 4,
    altText: {
      en: "Gardenia Group Hotel - Hospitality merchant logo",
      ar: "شعار فندق مجموعة جاردينيا",
    },
  },
  {
    id: "pyramids-sunrise-inn",
    name: {
      en: "Pyramids Sunrise Inn",
      ar: "بيراميدز صن رايز إن",
    },
    slug: "pyramids-sunrise-inn",
    logo: "/merchants/pyramids-sunrise-inn.jpg",
    badgeBg: "light",
    categories: ["payment"],
    status: "published",
    displayOrder: 5,
    altText: {
      en: "Pyramids Sunrise Inn - Hotel merchant logo",
      ar: "شعار بيراميدز صن رايز إن",
    },
  },
  {
    id: "up-town-hotel",
    name: {
      en: "Up Town Hotel",
      ar: "فندق أب تاون",
    },
    slug: "up-town-hotel",
    logo: "/merchants/up-town-hotel.jpg",
    badgeBg: "light",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 6,
    altText: {
      en: "Up Town Hotel - Hospitality partner logo",
      ar: "شعار فندق أب تاون",
    },
  },
  {
    id: "egypt-top-light-travel",
    name: {
      en: "Egypt Top Light Travel",
      ar: "إيجيبت توب لايت ترافيل",
    },
    slug: "egypt-top-light-travel",
    logo: "/merchants/egypt-top-light-travel.jpg",
    badgeBg: "dark",
    categories: ["payment"],
    status: "published",
    displayOrder: 7,
    altText: {
      en: "Egypt Top Light Travel - Travel merchant logo",
      ar: "شعار إيجيبت توب لايت ترافيل",
    },
  },
  {
    id: "travel-lovers-egypt",
    name: {
      en: "Travel Lovers Egypt",
      ar: "ترافيل لوفرز إيجيبت",
    },
    slug: "travel-lovers-egypt",
    logo: "/merchants/travel-lovers-egypt.jpg",
    badgeBg: "dark",
    categories: ["payment"],
    status: "published",
    displayOrder: 8,
    altText: {
      en: "Travel Lovers Egypt - Destination partner logo",
      ar: "شعار ترافيل لوفرز إيجيبت",
    },
  },
  {
    id: "travor-holidays",
    name: {
      en: "Travor Holidays",
      ar: "ترافور هوليدايز",
    },
    slug: "travor-holidays",
    logo: "/merchants/travor-holidays.jpg",
    badgeBg: "light",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 9,
    altText: {
      en: "Travor Holidays - Booking partner logo",
      ar: "شعار ترافور هوليدايز",
    },
  },
  {
    id: "nut-travel",
    name: {
      en: "Nût Travel",
      ar: "نوت ترافيل",
    },
    slug: "nut-travel",
    logo: "/merchants/nut-travel.jpg",
    badgeBg: "light",
    categories: ["payment"],
    status: "published",
    displayOrder: 10,
    altText: {
      en: "Nût Travel - Tourism merchant logo",
      ar: "شعار نوت ترافيل",
    },
  },
  {
    id: "bravo-tours",
    name: {
      en: "BT Bravo Tours",
      ar: "بي تي برافو تورز",
    },
    slug: "bravo-tours",
    logo: "/merchants/bt-bravo-tours.jpg",
    badgeBg: "light",
    categories: ["payment"],
    status: "published",
    displayOrder: 11,
    altText: {
      en: "BT Bravo Tours - Travel agency partner logo",
      ar: "شعار بي تي برافو تورز",
    },
  },
  {
    id: "saba-tours",
    name: {
      en: "Saba Tours",
      ar: "سبأ تورز",
    },
    slug: "saba-tours",
    logo: "/merchants/saba-tours.jpg",
    badgeBg: "light",
    categories: ["payment", "digital"],
    status: "published",
    displayOrder: 12,
    altText: {
      en: "Saba Tours - Travel and tourism partner logo",
      ar: "شعار سبأ تورز للسياحة",
    },
  },
]

/**
 * Filter published merchants by relationship category.
 */
export function getPublishedMerchants(category?: MerchantCategory | "all"): Merchant[] {
  const published = MERCHANTS.filter((m) => m.status === "published").sort(
    (a, b) => a.displayOrder - b.displayOrder
  )

  if (!category || category === "all") {
    return published
  }

  return published.filter((m) => m.categories.includes(category))
}

