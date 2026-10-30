/**
 * SWIPEBAY Verified Client Brands Catalog
 * Source of truth: public/brands/
 */

export interface BrandLogo {
  id: string
  name: string
  file: string
  src: string
  width: number
  height: number
  aspectRatio: number
}

export const ALL_CLIENT_BRANDS: BrandLogo[] = [
  {
    id: "albkht",
    name: "Al-Bakht",
    file: "albkht.webp",
    src: "/brands/albkht.webp",
    width: 743,
    height: 372,
    aspectRatio: 2.0,
  },
  {
    id: "aqarawii",
    name: "Aqarawii",
    file: "aqarawii.png",
    src: "/brands/aqarawii.png",
    width: 1073,
    height: 215,
    aspectRatio: 4.99,
  },
  {
    id: "esay-to-buy-24h",
    name: "Easy To Buy 24H",
    file: "Esay To Buy 24H.png",
    src: "/brands/Esay%20To%20Buy%2024H.png",
    width: 1866,
    height: 536,
    aspectRatio: 3.48,
  },
  {
    id: "gotravel",
    name: "Go Travel",
    file: "gotravel.png",
    src: "/brands/gotravel.png",
    width: 3600,
    height: 887,
    aspectRatio: 4.06,
  },
  {
    id: "hainan-soliman",
    name: "Hainan Soliman",
    file: "HainanSoliman.png",
    src: "/brands/HainanSoliman.png",
    width: 1156,
    height: 430,
    aspectRatio: 2.69,
  },
  {
    id: "hijaby-store",
    name: "Hijaby Store",
    file: "Hijaby Store.png",
    src: "/brands/Hijaby%20Store.png",
    width: 1536,
    height: 959,
    aspectRatio: 1.6,
  },
  {
    id: "kyrello-tours",
    name: "Kyrello Tours",
    file: "KyrelloTours.png",
    src: "/brands/KyrelloTours.png",
    width: 863,
    height: 206,
    aspectRatio: 4.19,
  },
  {
    id: "lan-wave-it",
    name: "LAN WAVE IT",
    file: "LAN WAVE IT.png",
    src: "/brands/LAN%20WAVE%20IT.png",
    width: 1536,
    height: 478,
    aspectRatio: 3.21,
  },
  {
    id: "magic-company",
    name: "Magic Company",
    file: "Magic Company.png",
    src: "/brands/Magic%20Company.png",
    width: 1536,
    height: 607,
    aspectRatio: 2.53,
  },
  {
    id: "maximum-power",
    name: "Maximum Power",
    file: "MaximumPower.png",
    src: "/brands/MaximumPower.png",
    width: 1536,
    height: 648,
    aspectRatio: 2.37,
  },
  {
    id: "mobiland",
    name: "MobiLand",
    file: "MobiLand.png",
    src: "/brands/MobiLand.png",
    width: 1536,
    height: 449,
    aspectRatio: 3.42,
  },
  {
    id: "musiclap",
    name: "MusicLAP",
    file: "MusicLAP.png",
    src: "/brands/MusicLAP.png",
    width: 1536,
    height: 471,
    aspectRatio: 3.26,
  },
  {
    id: "old-brand",
    name: "Old Brand",
    file: "Old Brand.png",
    src: "/brands/Old%20Brand.png",
    width: 2752,
    height: 871,
    aspectRatio: 3.16,
  },
  {
    id: "pinkway",
    name: "Pinkway",
    file: "pinkway.png",
    src: "/brands/pinkway.png",
    width: 779,
    height: 193,
    aspectRatio: 4.04,
  },
  {
    id: "platinum-safes",
    name: "Platinum Safes",
    file: "Platinum Safes.png",
    src: "/brands/Platinum%20Safes.png",
    width: 1536,
    height: 477,
    aspectRatio: 3.22,
  },
  {
    id: "sabatours",
    name: "Saba Tours",
    file: "sabatours.png",
    src: "/brands/sabatours.png",
    width: 1000,
    height: 631,
    aspectRatio: 1.58,
  },
  {
    id: "safe-guard",
    name: "Safe Guard",
    file: "Safe Guard.png",
    src: "/brands/Safe%20Guard.png",
    width: 1963,
    height: 548,
    aspectRatio: 3.58,
  },
  {
    id: "shopzawy",
    name: "Shopzawy",
    file: "shopzawy.png",
    src: "/brands/shopzawy.png",
    width: 477,
    height: 100,
    aspectRatio: 4.77,
  },
  {
    id: "starpyramids",
    name: "Star Pyramids",
    file: "starpyramids.png",
    src: "/brands/starpyramids.png",
    width: 8216,
    height: 1500,
    aspectRatio: 5.48,
  },
  {
    id: "sts-travel",
    name: "STS Travel",
    file: "STS Travel.png",
    src: "/brands/STS%20Travel.png",
    width: 4036,
    height: 1383,
    aspectRatio: 2.92,
  },
  {
    id: "stylish-holidays",
    name: "Stylish Holidays",
    file: "stylish holidays.png",
    src: "/brands/stylish%20holidays.png",
    width: 7159,
    height: 1500,
    aspectRatio: 4.77,
  },
  {
    id: "supercard",
    name: "SuperCard",
    file: "SuperCard.png",
    src: "/brands/SuperCard.png",
    width: 273,
    height: 59,
    aspectRatio: 4.63,
  },
  {
    id: "umraheasy",
    name: "UmrahEasy",
    file: "UmrahEasy.png",
    src: "/brands/UmrahEasy.png",
    width: 390,
    height: 106,
    aspectRatio: 3.68,
  },
]

/**
 * Split into two balanced sets:
 * Row 1 has 12 logos
 * Row 2 has 11 logos
 * Both rows feature diverse aspect ratios and colors.
 */
export const ROW_1_BRANDS: BrandLogo[] = ALL_CLIENT_BRANDS.slice(0, 12)
export const ROW_2_BRANDS: BrandLogo[] = ALL_CLIENT_BRANDS.slice(12)

