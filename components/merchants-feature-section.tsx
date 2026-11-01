"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { getPublishedMerchants, type Merchant } from "@/lib/merchants"
import { Button } from "@/components/ui/button"
import {
  Store,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"

export function MerchantsFeatureSection() {
  const { dictionary, locale, isRTL } = useLanguage()
  const t = dictionary.merchantsFeature
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  const [pausedRow, setPausedRow] = useState<"row1" | "row2" | null>(null)

  const allMerchants = getPublishedMerchants("all")

  // Split into two balanced tracks
  const midPoint = Math.ceil(allMerchants.length / 2)
  const track1 = allMerchants.slice(0, midPoint)
  const track2 = allMerchants.slice(midPoint)

  // Repeat items for seamless continuous looping
  const rowOneItems = [...track1, ...track1, ...track1]
  const rowTwoItems = [...track2, ...track2, ...track2]

  const getContainerBg = (badgeBg?: "light" | "dark" | "blue") => {
    switch (badgeBg) {
      case "dark":
        return "bg-black/95 border border-white/10"
      case "blue":
        return "bg-[#0066cc] border border-white/20"
      case "light":
      default:
        return "bg-white/[0.98] border border-white/20"
    }
  }

  const MerchantFeatureCard = ({
    merchant,
    rowId,
  }: {
    merchant: Merchant
    rowId: "row1" | "row2"
  }) => {
    return (
      <Link
        href="/merchants"
        className="w-[135px] sm:w-[175px] md:w-[210px] lg:w-[235px] shrink-0 mx-1.5 sm:mx-2.5 liquid-glass-enhanced rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-white/10 hover:border-[#49CBDC]/60 hover:shadow-[0_8px_30px_rgba(73,203,220,0.25)] hover:scale-[1.03] transition-all duration-300 block group/card"
        onMouseEnter={() => setPausedRow(rowId)}
        onMouseLeave={() => setPausedRow(null)}
        aria-label={merchant.name[locale]}
      >
        {/* Logo Showcase Frame - Pure Logos Only, No Text */}
        <div
          className={`relative w-full aspect-[16/10] rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2.5 overflow-hidden transition-transform duration-300 group-hover/card:scale-[1.02] ${getContainerBg(
            merchant.badgeBg
          )}`}
        >
          <Image
            src={merchant.logo}
            alt={merchant.name[locale]}
            fill
            sizes="(max-width: 640px) 135px, 235px"
            className="object-contain p-1 sm:p-1.5 transition-transform duration-300 group-hover/card:scale-108"
            loading="lazy"
          />
        </div>
      </Link>
    )
  }

  return (
    <section
      id="merchants-network"
      aria-label={t.badge}
      className="text-white py-16 sm:py-24 relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* Atmospheric Ambient Glows */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#49CBDC]/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* =========================================================
              LEFT COLUMN: Editorial Narrative, CTAs & Value Bullets
              (Overlaps above the moving cards with relative z-20)
              ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-20 text-center lg:text-left rtl:lg:text-right space-y-6">
            {/* Subtle soft backdrop ensuring crisp contrast against overlapping cards */}
            <div
              className={`absolute -inset-y-8 -inset-x-6 ${
                isRTL ? "lg:-left-12 lg:-right-6" : "lg:-right-12 lg:-left-6"
              } bg-black/85 blur-2xl rounded-3xl -z-10 pointer-events-none lg:block hidden`}
              aria-hidden="true"
            />

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={16}
                height={16}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{t.badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.14]">
              <span className="block text-white">{t.titlePart1}</span>
              <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                {t.titlePart2}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>

            {/* Two Action Buttons: Side by Side */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 flex-row flex-wrap sm:flex-nowrap">
              <Button
                asChild
                className="h-10 sm:h-11 px-4 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0"
              >
                <Link href="/merchants" className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span>{t.btnMerchants}</span>
                  <ArrowIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-10 sm:h-11 px-4 sm:px-5 text-xs sm:text-sm font-medium border-white/15 hover:border-[#49CBDC]/50 hover:bg-white/[0.04] whitespace-nowrap shrink-0"
              >
                <Link href="/gateway" className="inline-flex items-center gap-1.5 sm:gap-2">
                  <CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#49CBDC] shrink-0" />
                  <span>{t.btnGateway}</span>
                </Link>
              </Button>
            </div>

            {/* Value Bullets */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300 text-left rtl:text-right">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                <span>{t.bullet1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                <span>{t.bullet2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                <span>{t.bullet3}</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Frameless Moving Animated Merchant Stream
              (Extended width reaching deep towards/underneath the text column on desktop;
               clean edge-to-edge stream with no side fades on mobile)
              ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 -mx-4 sm:mx-0 lg:-ms-32 xl:-ms-48 2xl:-ms-60 lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] 2xl:w-[calc(100%+15rem)] overflow-hidden py-2 sm:py-3">
            {/* Text-Facing Edge Fade: Deep, ultra-smooth gradient on desktop; hidden on mobile */}
            <div
              className={`hidden sm:block absolute inset-y-0 ${
                isRTL
                  ? "right-0 bg-gradient-to-l from-black via-black/95 via-30% to-transparent"
                  : "left-0 bg-gradient-to-r from-black via-black/95 via-30% to-transparent"
              } sm:w-24 md:w-36 lg:w-80 xl:w-96 2xl:w-[26rem] z-20 pointer-events-none`}
              aria-hidden="true"
            />

            {/* Outer Edge Fade: Soft fade at viewport margin; hidden on mobile */}
            <div
              className={`hidden sm:block absolute inset-y-0 ${
                isRTL
                  ? "left-0 bg-gradient-to-r from-black via-black/80 to-transparent"
                  : "right-0 bg-gradient-to-l from-black via-black/80 to-transparent"
              } sm:w-16 md:w-24 lg:w-32 z-20 pointer-events-none`}
              aria-hidden="true"
            />

            {/* Moving Marquee Tracks */}
            <div
              className="space-y-3 sm:space-y-4 lg:space-y-5 overflow-hidden"
              dir="ltr"
            >
              {/* Row 1: Smooth Infinite Scroll Left */}
              <div
                className="flex w-max animate-scroll-left hover:[animation-play-state:paused]"
                style={{
                  animationPlayState: pausedRow === "row1" ? "paused" : "running",
                  animationDuration: "36s",
                }}
              >
                {rowOneItems.map((merchant, idx) => (
                  <MerchantFeatureCard
                    key={`r1-${merchant.id}-${idx}`}
                    merchant={merchant}
                    rowId="row1"
                  />
                ))}
              </div>

              {/* Row 2: Smooth Infinite Scroll Right */}
              <div
                className="flex w-max animate-scroll-right hover:[animation-play-state:paused]"
                style={{
                  animationPlayState: pausedRow === "row2" ? "paused" : "running",
                  animationDuration: "40s",
                }}
              >
                {rowTwoItems.map((merchant, idx) => (
                  <MerchantFeatureCard
                    key={`r2-${merchant.id}-${idx}`}
                    merchant={merchant}
                    rowId="row2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
