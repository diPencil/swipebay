"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"

const ACCENT = "#49CBDC"

export function Pricing() {
  const { isRTL, dictionary } = useLanguage()
  const p = dictionary.pricing
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section id="pricing" className="text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div
            className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold text-cyan-200"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid rgba(73, 203, 220, 0.4)` }}
          >
            <Image
              src={BRAND_CONFIG.assets.favicon}
              alt={`${BRAND_CONFIG.name} icon`}
              width={16}
              height={16}
              className="h-3 w-3 object-contain"
            />
            <span>{p.badge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            {p.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-neutral-300 leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* 3 Engagement Model Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {p.models.map((model) => {
            const isPopular = !!model.popular
            const whatsappMessage = encodeURIComponent(
              `Hello Swipebay, I would like to inquire about the ${model.name} engagement model.`
            )
            const whatsappUrl = `https://wa.me/201040604666?text=${whatsappMessage}`

            return (
              <Card
                key={model.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? "liquid-glass-enhanced border-purple-400/50 shadow-[0_16px_50px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/40"
                    : "liquid-glass border-white/10 hover:border-purple-400/30 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute top-4 end-4 rounded-full bg-[#49CBDC]/15 border border-[#49CBDC]/40 px-2.5 py-0.5 text-[10px] font-bold text-[#49CBDC] uppercase tracking-wider">
                    {isRTL ? "الأكثر طلباً" : "Most Flexible"}
                  </div>
                )}

                <CardHeader className="space-y-3 pb-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                    {model.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {model.name}
                  </h3>
                  <p className="text-xs text-neutral-400 min-h-[36px] leading-relaxed">
                    {model.subtitle}
                  </p>

                  <div className="pt-2">
                    <Button
                      asChild
                      className={`w-full rounded-full py-2.5 text-xs font-semibold transition-all ${
                        isPopular
                          ? "bg-[#49CBDC] text-black hover:bg-[#67D6E4] shadow-[0_0_20px_rgba(73,203,220,0.3)] hover:scale-[1.01]"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                      }`}
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                        <span>{model.ctaLabel}</span>
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    {isRTL ? "يشمل النموذج:" : "Key Inclusions:"}
                  </div>
                  <ul className="space-y-2.5">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
