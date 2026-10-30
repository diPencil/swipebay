"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { ROW_1_BRANDS, ROW_2_BRANDS, BrandLogo } from "@/lib/brands"
import { BRAND_CONFIG } from "@/lib/brand"

export function ClientBrandsMarquee() {
  const { isRTL, dictionary } = useLanguage()
  const t = dictionary.clientBrands

  const [pausedRow, setPausedRow] = useState<"row1" | "row2" | "all" | null>(null)

  // 3 repetitions guarantee a mathematically seamless loop with zero empty gaps at any resolution
  const rowOneItems = [...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS]
  const rowTwoItems = [...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS]

  const BrandCard = ({
    brand,
    rowId,
    index,
  }: {
    brand: BrandLogo
    rowId: "row1" | "row2"
    index: number
  }) => {
    // Only the first repetition is exposed to assistive technologies to prevent redundant reading
    const isDuplicate = index >= (rowId === "row1" ? ROW_1_BRANDS.length : ROW_2_BRANDS.length)

    return (
      <div
        className="flex-shrink-0 mx-3 sm:mx-5 group cursor-default"
        aria-hidden={isDuplicate}
        onMouseEnter={() => setPausedRow(rowId)}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div className="flex items-center justify-center h-10 sm:h-12 px-2 sm:px-3 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={brand.src}
            alt={isDuplicate ? "" : brand.name}
            width={brand.width}
            height={brand.height}
            unoptimized
            loading="lazy"
            className="max-h-7 sm:max-h-8 w-auto max-w-[95px] sm:max-w-[120px] object-contain transition-transform duration-300 select-none pointer-events-none"
          />
        </div>
      </div>
    )
  }

  return (
    <section
      aria-label={t.title}
      className="relative py-16 sm:py-24 overflow-hidden border-t border-b border-white/[0.06]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Image
              src={BRAND_CONFIG.assets.favicon}
              alt={`${BRAND_CONFIG.name} icon`}
              width={18}
              height={18}
              className="h-3.5 w-3.5 object-contain"
            />
            <span>{t.badge}</span>
          </div>

          {/* Headline | Exactly matching Services Section style */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
            {isRTL ? (
              <>
                <span className="block text-white">علامات تجارية رائدة.</span>
                <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                  وضعنا بصمتنا في مسيرتها.
                </span>
              </>
            ) : (
              <>
                <span className="block text-white">Brands we&apos;ve</span>
                <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                  proudly worked with.
                </span>
              </>
            )}
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Dual Marquee Track Container
            Note: dir="ltr" is strictly applied to the marquee tracks so that
            Row 1 consistently scrolls right-to-left and Row 2 consistently scrolls left-to-right
            in both English and Arabic language modes. */}
        <div
          dir="ltr"
          className="relative w-full space-y-4 sm:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {/* Row 1 | Continuous movement right to left */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-scroll-left whitespace-nowrap will-change-transform"
              style={{
                animationPlayState: pausedRow === "row1" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {rowOneItems.map((brand, idx) => (
                <BrandCard
                  key={`row1-${brand.id}-${idx}`}
                  brand={brand}
                  rowId="row1"
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Row 2 | Continuous movement left to right */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-scroll-right whitespace-nowrap will-change-transform"
              style={{
                animationPlayState: pausedRow === "row2" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {rowTwoItems.map((brand, idx) => (
                <BrandCard
                  key={`row2-${brand.id}-${idx}`}
                  brand={brand}
                  rowId="row2"
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

