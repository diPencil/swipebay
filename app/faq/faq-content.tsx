"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  Search,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Layers,
  Code2,
  Workflow,
  Server,
  CreditCard,
  Mail,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  Star,
  CheckCircle2,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface FaqContentProps {
  locale: Locale
  dict: Dictionary
}

type CategoryKey = "all" | "general" | "services" | "process" | "infrastructure" | "billing"

export function FaqContent({ locale, dict }: FaqContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight
  const faq = dict.faqExperience

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "gen-1": true, // First item opened by default for immediate context
  })

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filter items by category and search term
  const filteredItems = useMemo(() => {
    return faq.items.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [faq.items, activeCategory, searchQuery])

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryKey, number> = {
      all: faq.items.length,
      general: 0,
      services: 0,
      process: 0,
      infrastructure: 0,
      billing: 0,
    }
    faq.items.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++
      }
    })
    return counts
  }, [faq.items])

  const categoryOrder: CategoryKey[] = [
    "all",
    "general",
    "services",
    "process",
    "infrastructure",
    "billing",
  ]

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود الاستفسار حول متطلبات مشروعنا التقني.`
      : `Hello Swipebay, I would like to inquire about our project requirements.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  const emailSubject = encodeURIComponent(
    isAr
      ? `استفسار تقني جديد - ${BRAND_CONFIG.name}`
      : `New Technical Inquiry - ${BRAND_CONFIG.name}`
  )
  const emailUrl = `mailto:${BRAND_CONFIG.contact.email}?subject=${emailSubject}`

  return (
    <div className="space-y-24 pb-20 sm:space-y-32">
      {/* SECTION 01: Editorial FAQ Hero (Flanked 3-Column Layout with avatar15 & Arched Pedestal) */}
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
              <span>{faq.heroBadge}</span>
            </div>

            {/* Editorial H1 with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              <span className="block text-white">{faq.heroTitle}</span>
              <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                {faq.heroHighlight}
              </span>
            </h1>
          </div>

          {/* 3-Column Symmetrical Hero Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mt-8 sm:mt-12">
            {/* Left Flanking Column */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#49CBDC]">
                <span>{isAr ? "● شفافية معمارية وتعاقدية" : "● ENGINEERING TRANSPARENCY"}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {faq.heroSubtitle}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-purple-400/50 backdrop-blur-md transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <WhatsAppIcon className="h-3.5 w-3.5 text-[#49CBDC]" />
                    <span>{isAr ? "استشارة مباشرة" : "Direct Consultation"}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar15 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar15 */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[506/740]">
                <Image
                  src="/images/avatar15.png"
                  alt={isAr ? "دليل ومعايير سويب باي" : "SWIPEBAY Knowledge & Standards"}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Floating Liquid-Glass Dual-CTA Capsule */}
              <div className="relative z-20 -mt-8 sm:-mt-10 rounded-full border border-white/20 bg-neutral-950/85 backdrop-blur-2xl p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(73,203,220,0.25)] flex items-center gap-1.5 sm:gap-2">
                <Button
                  asChild
                  className="rounded-full bg-[#49CBDC] px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-[#67D6E4] shadow-[0_0_15px_rgba(73,203,220,0.4)] transition-all"
                >
                  <Link href="/contact">
                    {isAr ? "ابدأ مشروعك" : "Start Your Project"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white hover:text-[#49CBDC] hover:bg-white/5 transition-all"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "استفسار سريع" : "Quick Inquiry"}</span>
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
                  {faq.items.length}+
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "إجابة ومعيار موثق" : "Verified Standards & Answers"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "تسليم الشيفرات والملكية 100%" : "Full IP & Source Code Transfer"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "اتفاقيات SLA معتمدة وموثقة" : "Binding Production SLAs"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "دعم هندسي مستمر بعد الإطلاق" : "Post-Launch Engineering Support"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Search Field with Animated Glowing Stroke Beam */}
          <div className="pt-8 sm:pt-12 max-w-xl mx-auto">
            <div className="relative group/search rounded-2xl">
              {/* 1. Ambient Outer Aura Glow (Blooms on focus & hover) */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-[#49CBDC]/40 to-purple-600/30 blur-xl opacity-0 group-focus-within/search:opacity-100 group-hover/search:opacity-30 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* 2. Rotating Beam Border Wrapper */}
              <div className="relative p-[1.5px] rounded-2xl overflow-hidden transition-all duration-300">
                {/* Moving Conic Gradient Laser Stroke */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square pointer-events-none opacity-0 group-focus-within/search:opacity-100 group-hover/search:opacity-35 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full animate-search-spin"
                    style={{
                      background:
                        "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #8b5cf6 315deg, #49CBDC 345deg, #ffffff 360deg)",
                    }}
                  />
                </div>

                {/* Static Border when Idle */}
                <div
                  className="absolute inset-0 rounded-2xl border border-white/15 group-focus-within/search:border-transparent transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* 3. Inner Liquid Glass Surface */}
                <div className="relative flex items-center rounded-[14.5px] bg-[#0c0d12]/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                  <Search className="absolute start-4 h-4 w-4 text-neutral-400 group-focus-within/search:text-[#49CBDC] group-focus-within/search:drop-shadow-[0_0_8px_rgba(73,203,220,0.6)] transition-all pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={faq.searchPlaceholder}
                    className="w-full h-12 bg-transparent ps-11 pe-11 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute end-3.5 h-6 w-6 flex items-center justify-center rounded-full bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: FAQ Category Navigation */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryOrder.map((catKey) => {
            const count = categoryCounts[catKey]
            const isActive = activeCategory === catKey

            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveCategory(catKey)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-[#49CBDC] text-black shadow-[0_0_20px_rgba(73,203,220,0.35)]"
                    : "liquid-glass border border-white/10 text-neutral-400 hover:text-white hover:border-purple-400/40"
                }`}
              >
                <span>{faq.categories[catKey]}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-black/20 text-black font-bold"
                      : "bg-white/5 text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* SECTION 03: Interactive FAQ Accordion */}
      <section className="container mx-auto px-4 max-w-4xl">
        {filteredItems.length > 0 ? (
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isOpen = !!openItems[item.id]

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "liquid-glass-enhanced border-[#49CBDC]/40 shadow-[0_10px_35px_rgba(73,203,220,0.1)]"
                      : "liquid-glass border-white/10 hover:border-purple-400/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC]"
                  >
                    <div className="space-y-1.5 flex-1 pe-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#49CBDC] bg-[#49CBDC]/10 border border-[#49CBDC]/20 px-2 py-0.5 rounded-full">
                          {faq.categories[item.category]}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#49CBDC] border-[#49CBDC] text-black rotate-180"
                          : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 mt-1">
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-3">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 rounded-3xl liquid-glass border border-white/10 p-8 space-y-3">
            <HelpCircle className="h-8 w-8 text-neutral-500 mx-auto" />
            <h3 className="text-base font-bold text-white">
              {faq.noResultsTitle}
            </h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              {faq.noResultsSubtitle}
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="rounded-full border-white/20 text-xs"
              >
                {isAr ? "إعادة ضبط التصفية" : "Reset Filters"}
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 04: Featured Questions (Strategic Clarity Split Panel) */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl liquid-glass-enhanced border border-white/15 p-7 sm:p-10 md:p-12 overflow-hidden relative">
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-0 end-0 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Strategic Context */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{faq.featuredBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {faq.featuredTitle}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                {faq.featuredSubtitle}
              </p>

              {/* Quote Block */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-2 mt-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider text-[#49CBDC]">
                  {faq.featuredSidebarTitle}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {faq.featuredSidebarSubtitle}
                </p>
              </div>
            </div>

            {/* Right Column: 3 Strategic Featured Cards */}
            <div className="lg:col-span-7 space-y-4">
              {faq.featuredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#49CBDC]/40 hover:bg-[#49CBDC]/[0.02] transition-all duration-300 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#49CBDC] uppercase tracking-wider bg-[#49CBDC]/10 border border-[#49CBDC]/20 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-600">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Contact / Further Assistance CTA */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl liquid-glass-enhanced p-8 sm:p-12 md:p-14 border border-purple-500/30 text-center overflow-hidden">
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(73,203,220,0.12),transparent_70%)] pointer-events-none" />

          <div className="mx-auto max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#49CBDC]/40 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-[#49CBDC] backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={16}
                height={16}
                className="h-3 w-3 object-contain"
              />
              <span>{faq.ctaBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {faq.ctaTitle}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {faq.ctaSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                asChild
                className="rounded-full bg-[#49CBDC] px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(73,203,220,0.35)] hover:bg-[#67D6E4] hover:scale-[1.02] transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{faq.ctaWhatsApp}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-purple-400/50 transition-all"
              >
                <a href={emailUrl} className="gap-2">
                  <Mail className="h-4 w-4 text-[#49CBDC]" />
                  <span>{faq.ctaEmail}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

