"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Users, CheckCircle2 } from "lucide-react"

export function Features() {
  const { dictionary, isRTL } = useLanguage()
  const f = dictionary.features

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-24 max-w-6xl">
      {/* Section Header with Signature SWIPEBAY DNA */}
      <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
        {/* Eyebrow Pill Badge with Universal Favicon Icon */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <Image
            src={BRAND_CONFIG.assets.favicon}
            alt={`${BRAND_CONFIG.name} icon`}
            width={16}
            height={16}
            className="h-3.5 w-3.5 object-contain"
          />
          <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">
            {f.badge || (isRTL ? "لماذا سويب باي" : "WHY SWIPEBAY")}
          </span>
        </div>

        {/* Dual-Tone Signature Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
          <span className="block text-white">
            {f.titleLine1 || (isRTL ? "لماذا تختار الشركات الرائدة" : "Why Ambitious Companies")}
          </span>
          <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
            {f.titleHighlight || (isRTL ? "شراكة سويب باي؟" : "Partner With SWIPEBAY.")}
          </span>
        </h2>

        {/* Supporting Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-2xl mx-auto">
          {f.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card 1: Engineering Integrity & Architecture */}
        <Card className="liquid-glass border border-white/15 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between">
          <CardHeader className="space-y-2 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#49CBDC]/10 border border-[#49CBDC]/30 text-[#49CBDC]">
                <Cpu className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-semibold tracking-widest text-[#49CBDC] uppercase">
                {f.card1Tag}
              </p>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {f.card1Title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
              {f.card1Desc}
            </p>

            {/* Architectural pillars */}
            <div className="space-y-2 pt-3">
              {f.card1Pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#49CBDC] shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200 leading-snug">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </CardHeader>

          {/* Media Slots: ENGINEERING INTEGRITY 1 & 2 */}
          <CardContent className="p-6 sm:p-8 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-neutral-950 group/img">
                <Image
                  src="/images/ENGINEERING-INTEGRITY1.jpg"
                  alt="Swipebay Engineering Integrity preview 1"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                  sizes="(min-width: 768px) 260px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-neutral-950 group/img">
                <Image
                  src="/images/ENGINEERING-INTEGRITY2.jpg"
                  alt="Swipebay Engineering Integrity preview 2"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                  sizes="(min-width: 768px) 260px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Strategic Execution & Direct Collaboration */}
        <Card className="liquid-glass border border-white/15 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between">
          <CardHeader className="space-y-2 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-400/10 border border-purple-400/30 text-purple-300">
                <Users className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-semibold tracking-widest text-purple-300 uppercase">
                {f.card2Tag}
              </p>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {f.card2Title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
              {f.card2Desc}
            </p>

            {/* Strategic pillars */}
            <div className="space-y-2 pt-3">
              {f.card2Pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200 leading-snug">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </CardHeader>

          {/* Media Slots: DELIBERATE EXECUTION 1 & 2 */}
          <CardContent className="p-6 sm:p-8 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-neutral-950 group/img">
                <Image
                  src="/images/DELIBERATE-EXECUTION1.jpg"
                  alt="Swipebay Deliberate Execution preview 1"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                  sizes="(min-width: 768px) 260px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-neutral-950 group/img">
                <Image
                  src="/images/DELIBERATE-EXECUTION2.jpg"
                  alt="Swipebay Deliberate Execution preview 2"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                  sizes="(min-width: 768px) 260px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
