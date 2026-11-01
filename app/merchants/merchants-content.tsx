"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Dictionary } from "@/lib/i18n/types"
import type { Merchant, MerchantCategory } from "@/lib/merchants"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import {
  Store,
  Layers,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Star,
} from "lucide-react"

interface MerchantsContentProps {
  locale: "en" | "ar"
  dictionary: Dictionary
  merchants: Merchant[]
}

export function MerchantsContent({
  locale,
  dictionary,
  merchants,
}: MerchantsContentProps) {
  const isAr = locale === "ar"
  const t = dictionary.merchantsPage
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight

  const [activeFilter, setActiveFilter] = useState<MerchantCategory | "all">("all")

  // Filtered merchants based on active category
  const filteredMerchants = useMemo(() => {
    if (activeFilter === "all") {
      return merchants
    }
    return merchants.filter((m) => m.categories.includes(activeFilter))
  }, [merchants, activeFilter])

  // Count per category
  const counts = useMemo(() => {
    return {
      all: merchants.length,
      payment: merchants.filter((m) => m.categories.includes("payment")).length,
      digital: merchants.filter((m) => m.categories.includes("digital")).length,
    }
  }, [merchants])

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود الاستفسار حول الانضمام لشبكة التجّار والشركاء أو ربط منصتنا بحلولكم الرقمية.`
      : `Hello Swipebay, I would like to inquire about joining the Merchant & Partner Network or integrating our digital platform.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  return (
    <div className="relative space-y-20 pb-20 sm:space-y-32 sm:pb-32 overflow-hidden">
      {/* =========================================================================
          SECTION 01: HERO (Signature Flanked 3-Column Layout with avatar19 & Arched Pedestal)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden pt-6 pb-4 sm:pt-12 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Centered Grand Title */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            {/* Eyebrow Badge with Favicon */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>
                {isAr ? "شبكة شركاء وتجار سويب باي" : "SWIPEBAY MERCHANT & PARTNER NETWORK"}
              </span>
            </div>

            {/* Editorial H1 with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              {isAr ? (
                <>
                  <span className="block text-white">شركات وعلامات تجارية</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    تجمعنا بها شراكات رقمية
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white">Businesses Connected</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    Through Swipebay
                  </span>
                </>
              )}
            </h1>
          </div>

          {/* 3-Column Symmetrical Hero Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mt-8 sm:mt-12">
            {/* Left Flanking Column */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#49CBDC]">
                <span>{isAr ? "● شبكة شركاء الأعمال" : "● MERCHANT ECOSYSTEM"}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {t.heroDescription}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="text-xs sm:text-sm font-medium"
                >
                  <a href="#network" className="inline-flex items-center gap-2">
                    <span>{isAr ? "استكشف شبكة الشركاء" : "Explore Merchant Network"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar19 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar19 */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[1122/1402]">
                <Image
                  src="/images/avatar19.png"
                  alt={isAr ? "شبكة تجار وشركاء سويب باي" : "SWIPEBAY Merchant & Partner Network"}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Floating Liquid-Glass Dual-CTA Capsule: Slanted Board */}
              <div className="relative z-20 -mt-8 sm:-mt-10 slanted-board flex items-center gap-1.5 sm:gap-2">
                <Button
                  asChild
                  className="text-xs sm:text-sm font-semibold"
                >
                  <Link href="/contact">
                    {isAr ? "انضم لشبكة الشركاء" : "Join Partner Network"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="text-xs sm:text-sm font-medium"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "استفسار عبر واتساب" : "WhatsApp Inquiry"}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Flanking Column: Trust & Disciplines Callout */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-4 order-3">
              {/* 5 Stars Rating with Cyan Glow */}
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#49CBDC] text-[#49CBDC] drop-shadow-[0_0_6px_rgba(73,203,220,0.6)]"
                  />
                ))}
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "علاقات تجارية وشراكات موثقة" : "Verified Business Relationships"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "تكامل دفع مباشر ومعتمد" : "Direct Gateway Integration"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "معايير أمان وتشفير PCI-DSS" : "PCI-DSS Grade Security"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "حلول وبنى برمجية متكاملة" : "Scalable Digital Systems"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: MERCHANT NETWORK SHOWCASE & FILTERING
          ======================================================== */}
      <section id="network" className="relative py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-[#49CBDC] uppercase">
                {t.sectionLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
                {t.sectionHeading}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
                {t.sectionDescription}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
              <div
                role="tablist"
                aria-label={isAr ? "تصنيفات الشركاء" : "Merchant Categories"}
                className="inline-flex items-center p-1 rounded-full liquid-glass border border-white/15 backdrop-blur-xl shrink-0 gap-1 min-w-max"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === "all"}
                  onClick={() => setActiveFilter("all")}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC] ${
                    activeFilter === "all"
                      ? "bg-[#49CBDC] text-black shadow-[0_0_20px_rgba(73,203,220,0.35)]"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="whitespace-nowrap">{t.filterAll}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeFilter === "all"
                        ? "bg-black/20 text-black font-bold"
                        : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {counts.all}
                  </span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === "payment"}
                  onClick={() => setActiveFilter("payment")}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC] ${
                    activeFilter === "payment"
                      ? "bg-[#49CBDC] text-black shadow-[0_0_20px_rgba(73,203,220,0.35)]"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <CreditCard className="h-3 w-3 shrink-0" />
                  <span className="whitespace-nowrap">{t.filterPayment}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeFilter === "payment"
                        ? "bg-black/20 text-black font-bold"
                        : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {counts.payment}
                  </span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === "digital"}
                  onClick={() => setActiveFilter("digital")}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC] ${
                    activeFilter === "digital"
                      ? "bg-[#49CBDC] text-black shadow-[0_0_20px_rgba(73,203,220,0.35)]"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Layers className="h-3 w-3 shrink-0" />
                  <span className="whitespace-nowrap">{t.filterDigital}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeFilter === "digital"
                        ? "bg-black/20 text-black font-bold"
                        : "bg-white/10 text-neutral-400"
                    }`}
                  >
                    {counts.digital}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Merchants Responsive Grid */}
          {filteredMerchants.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {filteredMerchants.map((merchant) => (
                <MerchantCard
                  key={merchant.id}
                  merchant={merchant}
                  locale={locale}
                  dictionary={dictionary}
                />
              ))}
            </div>
          ) : (
            /* Tasteful Localized Empty State */
            <div className="liquid-glass rounded-2xl border border-white/10 p-12 text-center max-w-lg mx-auto my-8">
              <Store className="h-10 w-10 text-neutral-500 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-white">
                {t.emptyStateTitle}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {t.emptyStateDescription}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveFilter("all")}
                className="mt-5 text-xs"
              >
                <span>{t.filterAll}</span>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SECTION 03: CLOSING CTA: Commercial Partnership Invitation
          ======================================================== */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative liquid-glass-enhanced rounded-3xl p-8 sm:p-14 border border-white/15 overflow-hidden text-center shadow-2xl">
            {/* Background lighting accents */}
            <div
              className="absolute -top-24 -left-24 w-72 h-72 bg-[#49CBDC]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#49CBDC] uppercase">
                {t.partnerNetworkBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {t.ctaHeading}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-xl mx-auto">
                {t.ctaDescription}
              </p>
              <div className="pt-4 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="px-8 text-sm font-semibold h-11"
                >
                  <Link href="/contact">
                    <span>{t.ctaButton}</span>
                    <ArrowIcon className="h-4 w-4 ms-2 shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Premium Merchant Card Component
 * Displays logo at full natural proportion inside its designated slot without awkward cropping,
 * providing subtle asset-matched framing and verified links.
 */
function MerchantCard({
  merchant,
  locale,
  dictionary,
}: {
  merchant: Merchant
  locale: "en" | "ar"
  dictionary: Dictionary
}) {
  const t = dictionary.merchantsPage
  const hasLink = Boolean(merchant.websiteUrl)

  // Determine logo container background styling based on merchant asset profile
  const getContainerBg = () => {
    switch (merchant.badgeBg) {
      case "dark":
        return "bg-black/95 border border-white/10 shadow-inner"
      case "blue":
        return "bg-[#0066cc] border border-white/20 shadow-inner"
      case "light":
      default:
        return "bg-white/[0.98] border border-white/20 shadow-inner"
    }
  }

  const CardContent = (
    <div className="flex flex-col h-full justify-between items-center w-full">
      {/* Logo Showcase Frame: Spacious aspect-[16/10] matching merchant banner assets */}
      <div
        className={`relative w-full aspect-[16/10] rounded-xl flex items-center justify-center p-2 sm:p-2.5 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] ${getContainerBg()}`}
      >
        <Image
          src={merchant.logo}
          alt={merchant.altText[locale]}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Merchant Meta Details */}
      <div className="w-full mt-3 space-y-1.5 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors truncate max-w-full">
            {merchant.name[locale]}
          </span>
          {hasLink && (
            <ExternalLink className="h-3 w-3 text-neutral-400 group-hover:text-[#49CBDC] transition-colors shrink-0" />
          )}
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {merchant.categories.includes("payment") && (
            <span className="text-[9px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#49CBDC]/10 text-[#49CBDC] border border-[#49CBDC]/30">
              {t.badgePayment}
            </span>
          )}
          {merchant.categories.includes("digital") && (
            <span className="text-[9px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-purple-950/40 text-purple-300 border border-purple-500/30">
              {t.badgeDigital}
            </span>
          )}
        </div>
      </div>
    </div>
  )

  const cardClasses =
    "liquid-glass rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-[#49CBDC]/50 hover:shadow-[0_0_25px_rgba(73,203,220,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC]"

  if (hasLink && merchant.websiteUrl) {
    return (
      <a
        href={merchant.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${merchant.name[locale]} - ${t.visitWebsite}`}
        className={cardClasses}
      >
        {CardContent}
      </a>
    )
  }

  return <div className={cardClasses}>{CardContent}</div>
}
