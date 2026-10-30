"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  IndustryDefinition,
  getCaseStudiesByIndustry,
  getAllIndustries,
} from "@/lib/solutions"
import { BRAND_CONFIG } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import {
  Compass,
  Utensils,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Layers,
  FileText,
  Award,
  ChevronRight,
  Check,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface IndustryDetailContentProps {
  industry: IndustryDefinition
  locale: Locale
  dict: Dictionary
}

export function IndustryDetailContent({
  industry,
  locale: initialLocale,
  dict: initialDict,
}: IndustryDetailContentProps) {
  const { locale: currentLocale, dictionary: clientDict } = useLanguage()
  const locale = currentLocale || initialLocale
  const dict = clientDict || initialDict
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  const indData = industry[locale]
  const relatedCaseStudies = getCaseStudiesByIndustry(industry.slug)
  const allIndustries = getAllIndustries()

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return Compass
      case "Utensils":
        return Utensils
      case "GraduationCap":
        return GraduationCap
      case "Briefcase":
      default:
        return Briefcase
    }
  }

  const IndustryIcon = getIndustryIcon(industry.icon)

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود مناقشة مشروع رقمي مخصص لقطاع ${indData.title}.`
      : `Hello Swipebay, I would like to discuss a custom digital initiative for the ${indData.title} sector.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  return (
    <div className="relative space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: INDUSTRY HERO
          ========================================================================= */}
      <section className="relative pt-6 pb-4 sm:pt-12 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white transition-colors">
              {isAr ? "الحلول" : "Solutions"}
            </Link>
            <span>/</span>
            <span className="text-[#49CBDC]">{indData.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-4 py-1.5 text-xs font-medium text-[#49CBDC]">
                <IndustryIcon className="h-3.5 w-3.5" />
                <span>{indData.title}</span>
              </div>

              <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
                {indData.heroHeadline}
              </h1>

              <p className="text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                {indData.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#49CBDC] px-8 text-black font-semibold hover:bg-[#67D6E4] transition-all shadow-[0_0_24px_rgba(73,203,220,0.35)]"
                >
                  <Link href="/contact">
                    {isAr ? "احجز استشارة متخصصة" : "Consult Our Specialists"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#49CBDC]/40 bg-[#49CBDC]/10 px-6 text-[#49CBDC] hover:bg-[#49CBDC]/20 transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {isAr ? "تواصل عبر واتساب" : "WhatsApp Direct"}
                  </a>
                </Button>
              </div>

              {/* Stat Pills */}
              <div className="pt-6 flex flex-wrap gap-2">
                {indData.statPills.map((stat, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs text-purple-200"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#49CBDC]" />
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Key Metrics & Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-[#49CBDC]/15 blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                      {isAr ? "واقع القطاع والحلول" : "PRACTICE SNAPSHOT"}
                    </span>
                    <span className="text-xs text-[#49CBDC] font-mono">
                      VERIFIED 2026
                    </span>
                  </div>

                  <p className="text-sm font-light text-neutral-300 leading-relaxed">
                    {indData.overview}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      {isAr ? "المخرجات الهندسية الرئيسية:" : "Key Technical Deliverables:"}
                    </span>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {indData.solutionAreas.slice(0, 3).map((area, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                          <span>{area.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: INDUSTRY CHALLENGES
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "التحديات التشغيلية" : "CRITICAL OPERATIONAL HURDLES"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              {isAr ? (
                <>
                  التحديات التي نواجهها{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    ونحلها هندسياً
                  </span>
                </>
              ) : (
                <>
                  Hurdles we dismantle through{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    purposeful engineering
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {indData.challenges.map((ch, cIdx) => (
              <div
                key={cIdx}
                className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">0{cIdx + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  </div>
                  <h3 className="text-xl font-normal text-white">{ch.title}</h3>
                  <p className="text-sm font-light text-neutral-400 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: SOLUTION AREAS & BLUEPRINTS
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "مجالات الحلول والتنفيذ" : "SYSTEM ARCHITECTURE & DELIVERABLES"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              {isAr ? (
                <>
                  منظومة الحلول المصممة{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    لنمو أعمالك
                  </span>
                </>
              ) : (
                <>
                  Bespoke solution blueprints{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    built for scale
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {indData.solutionAreas.map((area, aIdx) => (
              <div
                key={aIdx}
                className="group rounded-3xl border border-white/10 bg-neutral-950/80 p-8 backdrop-blur-xl hover:border-[#49CBDC]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="h-10 w-10 rounded-2xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC] font-mono text-sm">
                    0{aIdx + 1}
                  </div>

                  <h3 className="text-2xl font-normal text-white group-hover:text-[#49CBDC] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm font-light text-neutral-300 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <span className="text-xs uppercase font-medium tracking-wider text-neutral-400">
                      {isAr ? "المخرجات التقنية:" : "Deliverables included:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {area.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-neutral-300"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: FEATURED CASE STUDIES IN THIS INDUSTRY
          ========================================================================= */}
      {relatedCaseStudies.length > 0 && (
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "مشاريع منفذة في هذا القطاع" : "DEPLOYED WORK IN THIS SECTOR"}</span>
              </div>
              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
                {isAr ? (
                  <>
                    قصص نجاح واقعية{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      ونتائج بالأرقام
                    </span>
                  </>
                ) : (
                  <>
                    Proven outcomes &{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      measurable impact
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="space-y-8">
              {relatedCaseStudies.map((cs) => {
                const csData = cs[locale]
                return (
                  <div
                    key={cs.id}
                    className="rounded-3xl border border-white/15 bg-black/80 p-8 sm:p-12 backdrop-blur-2xl hover:border-[#49CBDC]/50 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#49CBDC]/10 border border-[#49CBDC]/30 px-3 py-1 text-xs font-mono text-[#49CBDC]">
                            {isAr ? `العميل: ${cs.clientName}` : `Client: ${cs.clientName}`}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {isAr ? "منظومة قيد التشغيل المباشر" : "Active Production Deployment"}
                          </span>
                        </div>

                        <h3 className="text-3xl font-normal text-white">{csData.title}</h3>
                        <p className="text-neutral-300 text-sm font-light leading-relaxed">
                          {csData.overview}
                        </p>

                        {/* Results bullet list */}
                        <div className="space-y-2 pt-2">
                          <span className="text-xs uppercase font-medium tracking-wider text-neutral-400">
                            {isAr ? "النتائج المحققة:" : "Key Results Achieved:"}
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-300">
                            {csData.results.slice(0, 3).map((res, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button
                            asChild
                            className="rounded-full bg-[#49CBDC] text-black font-semibold hover:bg-[#67D6E4]"
                          >
                            <Link href={`/solutions/${cs.industrySlug}/case-studies/${cs.slug}`}>
                              {isAr ? "دراسة الحالة الكاملة" : "Read In-Depth Case Study"}
                              <ArrowIcon className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right Metrics Grid */}
                      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                        {cs.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
                          >
                            <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#49CBDC]">
                              {m.value}
                            </div>
                            <div className="text-xs text-neutral-400 font-light mt-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 05: OTHER SECTORS NAVIGATION
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6">
              {isAr ? "استكشف قطاعات أخرى:" : "Explore Other Industry Practices:"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {allIndustries
                .filter((ind) => ind.slug !== industry.slug)
                .map((otherInd) => {
                  const Icon = getIndustryIcon(otherInd.icon)
                  return (
                    <Link
                      key={otherInd.id}
                      href={`/solutions/${otherInd.slug}`}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-[#49CBDC]/50 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#49CBDC]" />
                        <span className="text-sm font-medium text-white group-hover:text-[#49CBDC] transition-colors">
                          {otherInd[locale].title}
                        </span>
                      </div>
                      <ArrowDiag className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: CONSULTATION CTA
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#49CBDC]/30 bg-black p-8 sm:p-12 text-center backdrop-blur-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-extralight text-white sm:text-4xl">
                {isAr ? (
                  <>
                    جاهز لبناء منصة رقمية رائدة في{" "}
                    <span className="text-[#49CBDC]">{indData.title}</span>؟
                  </>
                ) : (
                  <>
                    Ready to scale your{" "}
                    <span className="text-[#49CBDC]">{indData.title}</span> infrastructure?
                  </>
                )}
              </h2>
              <p className="text-neutral-300 text-sm font-light">
                {isAr
                  ? "تواصل مع فريقنا الهندسي اليوم لوضع خارطة طريق تقنية تعزز العائد على الاستثمار وتقلل الاعتماد على المنصات الوسيطة."
                  : "Connect with our engineering leads to design a digital roadmap that drives direct bookings and operational independence."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#49CBDC] px-8 text-black font-semibold hover:bg-[#67D6E4]"
                >
                  <Link href="/contact">
                    {isAr ? "ابدأ الآن" : "Get in Touch"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#49CBDC]/40 text-[#49CBDC] hover:bg-[#49CBDC]/10"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
