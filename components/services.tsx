"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import { BRAND_CONFIG } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function Services() {
  const { locale, isRTL, dictionary } = useLanguage()
  const s = dictionary.services
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  // Sort services strictly by their established order 1 to 10
  const sortedServices = [...SWIPEBAY_SERVICES].sort((a, b) => a.order - b.order)

  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
      {/* Section Header */}
      <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <Image
            src={BRAND_CONFIG.assets.favicon}
            alt={`${BRAND_CONFIG.name} icon`}
            width={18}
            height={18}
            className="h-3.5 w-3.5 object-contain"
          />
          <span>{s.dropdownTitle || (isRTL ? "خدمات سويب باي" : "OUR SERVICES")}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
          {isRTL ? (
            <>
              <span className="block text-white">تخصصات متعددة.</span>
              <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                برؤية استراتيجية موحدة.
              </span>
            </>
          ) : (
            <>
              <span className="block text-white">Different disciplines.</span>
              <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                One connected vision.
              </span>
            </>
          )}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          {s.sectionSubtitle}
        </p>
      </div>

      {/* Horizontal Services Showcase */}
      <div className="border-t border-white/10">
        {sortedServices.map((service) => {
          const data = service[locale]
          const formattedNumber = String(service.order).padStart(2, "0")

          return (
            <div
              key={service.id}
              className="group relative border-b border-white/10 py-8 sm:py-10 lg:py-12 transition-colors duration-300 hover:border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left Column: Number Badge + Large Lightweight Uppercase Title + Short Description + CTA */}
                <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                    {/* Number Badge */}
                    <span className="inline-flex items-center justify-center shrink-0 h-7 px-2.5 rounded-md border border-[#49CBDC]/40 bg-[#49CBDC]/10 text-xs font-mono font-bold text-[#49CBDC] transition-all duration-300 group-hover:border-[#49CBDC] group-hover:bg-[#49CBDC]/20 group-hover:shadow-[0_0_12px_rgba(73,203,220,0.4)]">
                      {formattedNumber}
                    </span>

                    {/* Service Title */}
                    <Link href={`/services/${service.slug}`} className="block group/title">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-wider uppercase text-white transition-colors duration-300 group-hover:text-white group-hover/title:text-[#49CBDC]">
                        {data.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Concise 1-2 line description directly under title */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-xl">
                    {data.shortDescription}
                  </p>

                  {/* Explore Action */}
                  <div className="pt-1">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-[#49CBDC] transition-colors"
                    >
                      <span>{s.exploreService}</span>
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Large Rectangular Service Image */}
                <div className="lg:col-span-6">
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="relative w-full aspect-[2.7/1] sm:aspect-[3/1] lg:aspect-[3.2/1] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl transition-all duration-500 group-hover:border-[#49CBDC]/40 group-hover:shadow-[0_12px_40px_rgba(73,203,220,0.18)]">
                      <Image
                        src={service.image}
                        alt={data.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      {/* Subtle Ambient Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Overview Navigation CTA */}
      <div className="pt-12 sm:pt-16 text-center">
        <Button
          asChild
          variant="outline"
          className="rounded-full border-white/20 bg-white/5 px-8 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-[#49CBDC]/50 hover:text-[#49CBDC] transition-all"
        >
          <Link href="/services" className="gap-2">
            <span>{s.viewAllServices}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
