"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  getAllIndustries,
  getAllCaseStudies,
  IndustryDefinition,
  CaseStudyDefinition,
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
  TrendingUp,
  ShieldCheck,
  CreditCard,
  Layers,
  Code2,
  Palette,
  ExternalLink,
  ChevronRight,
  Building2,
  Clock,
  Award,
  Star,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface SolutionsContentProps {
  locale: Locale
  dict: Dictionary
}

export function SolutionsContent({ locale: initialLocale, dict: initialDict }: SolutionsContentProps) {
  const { locale: currentLocale, dictionary: clientDict } = useLanguage()
  const locale = currentLocale || initialLocale
  const dict = clientDict || initialDict
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  const industries = getAllIndustries()
  const caseStudies = getAllCaseStudies()

  // Icon map for industries
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

  // Active industry tab filter for case studies
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all")

  const filteredCaseStudies =
    selectedIndustry === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industrySlug === selectedIndustry)

  // Direct WhatsApp contact link
  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود استشارة فريقكم بخصوص الحلول التقنية المخصصة لقطاع عملنا.`
      : `Hello Swipebay, I would like to consult your team regarding custom digital solutions for our industry.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  return (
    <div className="relative space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: SOLUTIONS HERO (Flanked 3-Column Layout with avatar7 & Arched Pedestal)
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
                {isAr ? "معمارية القطاعات والمنظومات المنفذة" : "ENTERPRISE DOMAIN BLUEPRINTS & DEPLOYED PLATFORMS"}
              </span>
            </div>

            {/* Editorial H1 with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              {isAr ? (
                <>
                  <span className="block text-white">توسع بمستوى مؤسسي</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    بدون قوالب جاهزة
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white">Enterprise Scale</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    Without Generic Templates
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
                <span>{isAr ? "● معمارية المنظومات" : "● DOMAIN ARCHITECTURE"}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {isAr
                  ? "نطور منصات رقمية متخصصة لمحركات الحجز المباشر، بوابات الدفع المتعددة، ومزامنة نقاط البيع، مصممة خصيصاً لمنطق أرباحك وعملياتك التشغيلية."
                  : "We engineer domain-specific software platforms for direct booking, multi-acquirer checkout, and POS synchronization, tailored to your revenue operations."}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-purple-400/50 backdrop-blur-md transition-all"
                >
                  <a href="#industries" className="inline-flex items-center gap-2">
                    <span>{isAr ? "استكشف حلول القطاعات" : "Explore Sector Blueprints"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar7 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar7 */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[506/740]">
                <Image
                  src="/images/avatar7.png"
                  alt={isAr ? "منظومات سويب باي للقطاعات" : "SWIPEBAY Domain Solutions"}
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
                    <span>{isAr ? "استشارة عبر واتساب" : "WhatsApp Consultation"}</span>
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
                  {isAr ? "4 قطاعات" : "4 Core Sectors"}
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "منظومات تشغيلية منجزة إقليمياً" : "Deployed Regional Platforms"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "معمارية برمجية مخصصة 100%" : "Bespoke Architecture"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "بناء أصيل بلا قوالب جاهزة" : "Zero Generic Templates"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "جاهزية للربط المالي ونقاط البيع" : "Multi-Acquirer & POS Ready"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sector Jump Pills */}
          <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {industries.map((ind) => {
              const Icon = getIndustryIcon(ind.icon)
              const indData = ind[locale]
              return (
                <Link
                  key={ind.id}
                  href={`/solutions/${ind.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3.5 py-1.5 text-xs text-neutral-300 hover:text-white hover:border-[#49CBDC]/50 hover:bg-[#49CBDC]/10 transition-all duration-300"
                >
                  <Icon className="h-3.5 w-3.5 text-[#49CBDC]" />
                  <span>{indData.title}</span>
                </Link>
              )
            })}
          </div>

          {/* =========================================================================
              FLOATING 3D PERSPECTIVE DASHBOARD (Centerpiece with Overlapping Satellites)
              ========================================================================= */}
          <div className="relative mx-auto max-w-6xl mt-12 sm:mt-16 [perspective:1400px]">
            {/* Ambient Lighting Behind Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[75%] bg-gradient-to-tr from-purple-600/30 via-[#49CBDC]/20 to-purple-800/15 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* Overlapping Floating Satellite 01 (Left / Start Side) */}
            <div className="absolute -left-3 sm:-left-6 lg:-left-8 top-1/3 -translate-y-1/2 z-30 hidden md:flex items-center gap-3.5 p-4 rounded-2xl bg-black/90 border border-[#49CBDC]/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(73,203,220,0.3)] animate-float-gentle max-w-xs">
              <div className="h-10 w-10 rounded-xl bg-[#49CBDC]/20 border border-[#49CBDC]/40 flex items-center justify-center text-[#49CBDC] shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="space-y-0.5 text-left rtl:text-right">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">
                    {isAr ? "حجز مباشر مؤكد" : "Direct Booking Confirmed"}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 text-[10px] font-mono">
                    +$1,240
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {isAr ? "منتجع البحر الأحمر · دفع أبل باي" : "Red Sea Luxury Resort · Apple Pay"}
                </p>
                <span className="text-[10px] text-[#49CBDC] font-mono block">
                  {isAr ? "✓ توفير 0% عمولة وسيط (OTA)" : "✓ Zero OTA Commission Deducted"}
                </span>
              </div>
            </div>

            {/* Overlapping Floating Satellite 02 (Right / End Side) */}
            <div className="absolute -right-3 sm:-right-6 lg:-right-8 bottom-1/4 z-30 hidden md:flex items-center gap-3.5 p-4 rounded-2xl bg-black/90 border border-purple-400/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.3)] animate-float-gentle-reverse max-w-xs">
              <div className="h-10 w-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="space-y-0.5 text-left rtl:text-right">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">
                    {isAr ? "تذكرة المطبخ أرسلت فورياً" : "Kitchen Ticket Dispatched"}
                  </span>
                  <span className="rounded-full bg-[#49CBDC]/20 text-[#49CBDC] border border-[#49CBDC]/40 px-1.5 py-0.5 text-[10px] font-mono">
                    0.18s
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {isAr ? "طلب #8421 · طاولة 12 · الفرع الرئيسي" : "Order #8421 · Table 12 · Main Branch"}
                </p>
                <span className="text-[10px] text-purple-300 font-mono block">
                  {isAr ? "✓ خصم آلي لحظي من المخزون" : "✓ Central Inventory Auto-Deducted"}
                </span>
              </div>
            </div>

            {/* Main Application Window */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/20 bg-neutral-950/85 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_60px_rgba(73,203,220,0.12),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-700 ease-out sm:[transform:rotateX(6deg)_rotateY(0deg)] hover:sm:[transform:rotateX(1deg)_rotateY(0deg)] overflow-hidden">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 sm:px-6 py-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 font-mono text-[11px] text-neutral-400 hidden sm:inline">
                    SWIPEBAY // DOMAIN_OPERATIONS_TERMINAL_V3.8
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    {isAr ? "منظومة الإنتاج الحية · 28ms" : "Production Cluster · 28ms"}
                  </span>
                </div>
              </div>

              {/* Window Body: Sidebar + Main Canvas */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Sidebar (Desktop) */}
                <div className="hidden lg:flex flex-col w-60 shrink-0 border-r rtl:border-r-0 rtl:border-l border-white/10 bg-black/40 p-5 space-y-6">
                  <div className="flex items-center gap-2.5 px-2">
                    <div className="h-7 w-7 rounded-lg bg-[#49CBDC]/15 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC]">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">SWIPEBAY</div>
                      <div className="text-[10px] font-mono text-[#49CBDC]">ENTERPRISE OS</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-1">
                      {isAr ? "لوحات التحكم" : "CONTROL PLANES"}
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl bg-[#49CBDC]/15 border border-[#49CBDC]/30 px-3 py-2 text-xs font-medium text-[#49CBDC]">
                      <Layers className="h-3.5 w-3.5" />
                      <span>{isAr ? "نظرة تنفيذية عامة" : "Executive Overview"}</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                      <Compass className="h-3.5 w-3.5 text-neutral-400" />
                      <span>{isAr ? "محركات الضيافة" : "Hospitality Engines"}</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                      <Utensils className="h-3.5 w-3.5 text-neutral-400" />
                      <span>{isAr ? "المطابخ ونقاط البيع" : "Kitchen & POS Sync"}</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                      <GraduationCap className="h-3.5 w-3.5 text-neutral-400" />
                      <span>{isAr ? "منصات التعليم LMS" : "Academy LMS Suite"}</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                      <CreditCard className="h-3.5 w-3.5 text-neutral-400" />
                      <span>{isAr ? "بوابات الدفع المتعددة" : "Multi-Acquirer Rails"}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-neutral-400">
                        <span>{isAr ? "جاهزية المنظومة" : "System SLA"}</span>
                        <span className="text-emerald-400 font-mono">99.98%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[99.9%]" />
                      </div>
                      <div className="text-[10px] text-neutral-400 pt-1">
                        {isAr ? "لا يوجد انقطاعات مسجلة" : "Zero downtime events"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-5 sm:p-7 space-y-6">
                  {/* Top Welcome Banner */}
                  <div className="relative rounded-2xl border border-white/15 bg-gradient-to-r from-purple-950/80 via-black to-[#49CBDC]/15 p-5 sm:p-6 overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#49CBDC] font-mono tracking-wider">
                          <span>● LIVE TELEMETRY</span>
                          <span>·</span>
                          <span>CAIRO & RIYADH NODES</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                          {isAr ? "مركز القيادة الموحد لمنظومات الأعمال" : "Unified Domain Operations Center"}
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                          {isAr
                            ? "مؤشرات الأداء المباشرة لمنظومات الضيافة، المطابخ، المنصات التعليمية، وبوابات الدفع."
                            : "Live operational telemetry across hospitality, kitchen operations, education LMS, and payments."}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="rounded-full border border-[#49CBDC]/40 bg-[#49CBDC]/15 px-3 py-1 text-xs font-mono text-[#49CBDC]">
                          {isAr ? "● 4 قطاعات حية" : "● 4 Active Sectors"}
                        </span>
                        <span className="rounded-full border border-purple-400/40 bg-purple-900/40 px-3 py-1 text-xs font-mono text-purple-200">
                          {isAr ? "جاهزية الدفع 99.98%" : "99.98% Gateway Uptime"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1: Hospitality Direct Booking */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2 hover:border-[#49CBDC]/40 transition-colors">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>{isAr ? "الحجوزات المباشرة" : "Direct Bookings"}</span>
                        <Compass className="h-4 w-4 text-[#49CBDC]" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">1,420</div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-emerald-400 font-mono">+34.2% {isAr ? "هامش مباشر" : "Direct Margin"}</span>
                        <svg className="h-5 w-16 text-[#49CBDC]" viewBox="0 0 64 20" fill="none">
                          <path d="M0 16 L12 14 L24 10 L36 12 L48 6 L64 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-neutral-400">{isAr ? "محرك تيلي ترافيل والفنادق" : "TelliTravel & Resorts Engine"}</p>
                    </div>

                    {/* Card 2: Kitchen & POS Turnaround */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2 hover:border-purple-400/40 transition-colors">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>{isAr ? "سرعة المطبخ وPOS" : "Kitchen Turnaround"}</span>
                        <Utensils className="h-4 w-4 text-purple-300" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">8.4 <span className="text-sm font-normal text-neutral-400">min</span></div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-[#49CBDC] font-mono">-42% {isAr ? "وقت الانتظار" : "Order Waste"}</span>
                        <svg className="h-5 w-16 text-purple-400" viewBox="0 0 64 20" fill="none">
                          <path d="M0 4 L14 8 L28 6 L42 12 L54 14 L64 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-neutral-400">{isAr ? "مزامنة لحظية بين الفروع" : "Realtime Multi-Branch Sync"}</p>
                    </div>

                    {/* Card 3: LMS Active Learners */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2 hover:border-[#49CBDC]/40 transition-colors">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>{isAr ? "الدارسون النشطون" : "Active Learners"}</span>
                        <GraduationCap className="h-4 w-4 text-[#49CBDC]" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">20,450</div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-emerald-400 font-mono">98.2% {isAr ? "إتمام المحاضرات" : "Stream Uptime"}</span>
                        <svg className="h-5 w-16 text-[#49CBDC]" viewBox="0 0 64 20" fill="none">
                          <path d="M0 18 L16 12 L30 14 L44 8 L54 4 L64 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-neutral-400">{isAr ? "أكاديمية د. أحمد بدوي" : "Ahmed Badawy Advisory LMS"}</p>
                    </div>

                    {/* Card 4: Multi-Acquirer Gateway Volume */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-2 hover:border-emerald-400/40 transition-colors">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>{isAr ? "حجم المدفوعات" : "Gateway Volume"}</span>
                        <CreditCard className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">14.8M <span className="text-xs font-normal text-neutral-400">EGP</span></div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-emerald-400 font-mono">0.02% {isAr ? "فشل المعاملات" : "Drop Rate"}</span>
                        <svg className="h-5 w-16 text-emerald-400" viewBox="0 0 64 20" fill="none">
                          <path d="M0 16 L12 12 L24 8 L36 10 L50 4 L64 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-[10px] text-neutral-400">{isAr ? "باي موب · فوري · أبل باي" : "Paymob · Fawry · Apple Pay"}</p>
                    </div>
                  </div>

                  {/* Secondary Operational Modules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {/* Active Deployed Blueprints */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                          {isAr ? "المنظومات المنفذة قيد التشغيل" : "ACTIVE DEPLOYED ENGINES"}
                        </h3>
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="space-y-0.5">
                            <div className="text-xs font-medium text-white">
                              {isAr ? "محرك حجز تيلي ترافيل العالمي v2.4" : "TelliTravel Global Booking Engine v2.4"}
                            </div>
                            <div className="text-[10px] text-neutral-400">
                              {isAr ? "الضيافة والسياحة · دفع أبل باي وفيزا مباشر" : "Hospitality · Direct Apple Pay & Visa Checkout"}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                            ACTIVE
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="space-y-0.5">
                            <div className="text-xs font-medium text-white">
                              {isAr ? "مزامنة المطابخ ونقاط البيع السحابية" : "Cloud Kitchen & Multi-Branch POS"}
                            </div>
                            <div className="text-[10px] text-neutral-400">
                              {isAr ? "الأغذية والمشروبات · 0.18 ثانية زمن استجابة" : "Food & Beverage · 0.18s Latency Dispatch"}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                            ACTIVE
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="space-y-0.5">
                            <div className="text-xs font-medium text-white">
                              {isAr ? "أكاديمية د. أحمد بدوي للتعليم التنفيذي" : "Ahmed Badawy Advisory LMS Suite"}
                            </div>
                            <div className="text-[10px] text-neutral-400">
                              {isAr ? "التعليم والتدريب · 20,450 مقعد دراسي نشط" : "Education & Training · 20,450 Active Seats"}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                            ACTIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Resilience & Telemetry */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                          {isAr ? "الأتمتة واستمرارية الأعمال" : "AUTOMATED RESILIENCE & TELEMETRY"}
                        </h3>
                        <span className="text-[11px] font-mono text-[#49CBDC]">AUTO-HEALTHY</span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-white">
                              {isAr ? "التبديل التلقائي لبوابات الدفع (Multi-Acquirer)" : "Multi-Acquirer Dynamic Fallback"}
                            </span>
                            <span className="text-[10px] font-mono text-[#49CBDC]">42ms</span>
                          </div>
                          <p className="text-[11px] text-neutral-400">
                            {isAr
                              ? "تحويل فوري للمعاملة إلى محصل بديل تلقائياً في حال تعطل خوادم البنك الأساسي لمنع فقد أي عميل."
                              : "Instant automated traffic rerouting between Paymob and Fawry if an acquiring bank endpoint degrades."}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-white">
                              {isAr ? "الإشعارات الفورية للنزلاء والطلبات" : "Direct Guest & Order Notifications"}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">100% DISPATCHED</span>
                          </div>
                          <p className="text-[11px] text-neutral-400">
                            {isAr
                              ? "إرسال تأكيدات الحجز وفواتير نقاط البيع وشهادات الدارسين آلياً عبر واتساب والبريد فور إتمام الدفع."
                              : "Automated booking vouchers, POS receipts, and course credentials dispatched via WhatsApp & Email."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Social Proof & Trust Strip (Matches the reference bottom bar) */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left rtl:md:text-right max-w-xl">
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {isAr
                    ? "منظومات برمجية وتشغيلية مطورة خصيصاً للمؤسسات الرائدة، ومجموعات الضيافة، وسلاسل المطاعم، والمنصات التعليمية بمصر ودول الخليج."
                    : "Engineered and deployed for market-leading enterprises, luxury hospitality groups, multi-branch restaurant chains, and educational institutions across Egypt and the GCC."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5 text-xs text-neutral-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#49CBDC]" />
                  <span>{isAr ? "جاهزية بوابات الدفع 99.98%" : "99.98% Gateway Availability"}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1.5 text-xs text-purple-200">
                  <Layers className="h-3.5 w-3.5 text-purple-300" />
                  <span>{isAr ? "منظومة تشغيل موحدة 100%" : "Zero Vendor Fragmentation"}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1.5 text-xs text-[#49CBDC]">
                  <Award className="h-3.5 w-3.5 text-[#49CBDC]" />
                  <span>{isAr ? "تطبيقات تشغيلية موثقة إقليمياً" : "Verified Regional Deployments"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: INDUSTRIES PRACTICES NAVIGATOR (Clean Minimal Cards Matching Reference)
          ========================================================================= */}
      <section id="industries" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "مجالات التخصص القطاعي" : "INDUSTRY SECTOR BLUEPRINTS"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {isAr ? (
                <>
                  هندسة رقمية مخصصة{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-[#49CBDC]">
                    لقطاعات النمو الحيوية
                  </span>
                </>
              ) : (
                <>
                  Domain expertise engineered for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-[#49CBDC]">
                    high-growth markets
                  </span>
                </>
              )}
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light">
              {isAr
                ? "استكشف كيف تترجم سويب باي التحديات التشغيلية المعقدة في كل قطاع إلى ميزة تنافسية مستدامة ونمو مالي مباشر."
                : "Discover how SWIPEBAY transforms complex sector operational hurdles into sustainable competitive advantage and direct revenue."}
            </p>
          </div>

          {/* 4 Clean Minimal Cards in SWIPEBAY Liquid-Glass DNA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const Icon = getIndustryIcon(ind.icon)
              const indData = ind[locale]

              // SWIPEBAY Brand Theme for each card
              const theme = (() => {
                switch (ind.id) {
                  case "hospitality-tourism":
                    return {
                      iconBg: "border border-purple-400/40 bg-purple-950/60 text-purple-300 shadow-[0_0_16px_rgba(139,92,246,0.25)]",
                      glowColor: "bg-purple-600/20",
                      shape: (
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="purpleTorus" cx="35%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#d8b4fe" />
                              <stop offset="35%" stopColor="#a855f7" />
                              <stop offset="75%" stopColor="#7e22ce" />
                              <stop offset="100%" stopColor="#3b0764" />
                            </radialGradient>
                            <filter id="purpleTorusShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#7e22ce" floodOpacity="0.5" />
                            </filter>
                          </defs>
                          <g filter="url(#purpleTorusShadow)">
                            <path
                              d="M100 35 C140 35 168 62 168 100 C168 138 140 165 100 165 C60 165 32 138 32 100 C32 62 60 35 100 35 Z M100 68 C82 68 68 82 68 100 C68 118 82 132 100 132 C118 132 132 118 132 100 C132 82 118 68 100 68 Z"
                              fill="url(#purpleTorus)"
                            />
                            <ellipse cx="80" cy="52" rx="24" ry="10" transform="rotate(-20 80 52)" fill="white" opacity="0.45" />
                          </g>
                        </svg>
                      ),
                    }
                  case "restaurants-fnb":
                    return {
                      iconBg: "border border-cyan-400/40 bg-[#49CBDC]/15 text-[#49CBDC] shadow-[0_0_16px_rgba(73,203,220,0.25)]",
                      glowColor: "bg-[#49CBDC]/20",
                      shape: (
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="cyanBeanGrad" cx="35%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#a5f3fc" />
                              <stop offset="35%" stopColor="#49CBDC" />
                              <stop offset="70%" stopColor="#0891b2" />
                              <stop offset="100%" stopColor="#164e63" />
                            </radialGradient>
                            <filter id="cyanBeanShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#0891b2" floodOpacity="0.5" />
                            </filter>
                          </defs>
                          <g filter="url(#cyanBeanShadow)">
                            <path
                              d="M50 85 C40 130 75 165 125 165 C165 165 178 130 165 95 C152 60 120 45 85 45 C60 45 55 60 50 85 Z"
                              fill="url(#cyanBeanGrad)"
                            />
                            <ellipse cx="105" cy="62" rx="28" ry="12" transform="rotate(-15 105 62)" fill="white" opacity="0.5" />
                            <ellipse cx="65" cy="95" rx="14" ry="7" transform="rotate(50 65 95)" fill="white" opacity="0.3" />
                          </g>
                        </svg>
                      ),
                    }
                  case "education-e-learning":
                    return {
                      iconBg: "border border-purple-400/40 bg-purple-950/60 text-purple-200 shadow-[0_0_16px_rgba(139,92,246,0.25)]",
                      glowColor: "bg-purple-600/20",
                      shape: (
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="purpleInfinityGrad" cx="35%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#f3e8ff" />
                              <stop offset="30%" stopColor="#c084fc" />
                              <stop offset="65%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#3b0764" />
                            </radialGradient>
                            <filter id="purpleInfinityShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#7e22ce" floodOpacity="0.5" />
                            </filter>
                          </defs>
                          <g filter="url(#purpleInfinityShadow)">
                            {/* Under-weave loop segment */}
                            <path
                              d="M65 70 C35 70 20 95 20 120 C20 148 45 165 72 165 C100 165 125 135 145 105 C165 78 180 80 180 100"
                              stroke="#4c1d95"
                              strokeWidth="32"
                              strokeLinecap="round"
                            />
                            {/* Over-weave loop segment */}
                            <path
                              d="M55 145 C35 130 35 95 60 75 C85 55 115 85 135 110 C155 135 175 140 180 120 C185 95 170 70 145 70 C120 70 95 100 75 125"
                              stroke="url(#purpleInfinityGrad)"
                              strokeWidth="34"
                              strokeLinecap="round"
                            />
                            {/* Specular curved glints */}
                            <ellipse cx="60" cy="85" rx="16" ry="6" transform="rotate(-30 60 85)" fill="white" opacity="0.5" />
                            <ellipse cx="155" cy="80" rx="14" ry="5" transform="rotate(20 155 80)" fill="white" opacity="0.45" />
                          </g>
                        </svg>
                      ),
                    }
                  case "professional-services":
                  default:
                    return {
                      iconBg: "border border-cyan-400/40 bg-[#49CBDC]/15 text-[#49CBDC] shadow-[0_0_16px_rgba(73,203,220,0.25)]",
                      glowColor: "bg-[#49CBDC]/20",
                      shape: (
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <radialGradient id="techSphereGrad" cx="35%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#cffafe" />
                              <stop offset="35%" stopColor="#38bdf8" />
                              <stop offset="70%" stopColor="#0284c7" />
                              <stop offset="100%" stopColor="#082f49" />
                            </radialGradient>
                            <radialGradient id="techRingGrad" cx="30%" cy="30%" r="70%">
                              <stop offset="0%" stopColor="#a5f3fc" />
                              <stop offset="35%" stopColor="#49CBDC" />
                              <stop offset="75%" stopColor="#0891b2" />
                              <stop offset="100%" stopColor="#164e63" />
                            </radialGradient>
                            <filter id="techShapeShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#0284c7" floodOpacity="0.5" />
                            </filter>
                          </defs>
                          <g filter="url(#techShapeShadow)">
                            {/* Outer Orbital Gyro Ring (angled in perspective) */}
                            <ellipse
                              cx="100"
                              cy="100"
                              rx="75"
                              ry="46"
                              transform="rotate(-25 100 100)"
                              stroke="url(#techRingGrad)"
                              strokeWidth="18"
                            />
                            {/* Inner 3D Tech Core Sphere */}
                            <circle cx="100" cy="100" r="44" fill="url(#techSphereGrad)" />
                            {/* Foreground overlap of the orbital ring */}
                            <path
                              d="M45 125 C65 145 120 155 155 125"
                              stroke="url(#techRingGrad)"
                              strokeWidth="18"
                              strokeLinecap="round"
                            />
                            {/* Highlights */}
                            <ellipse cx="88" cy="85" rx="18" ry="9" transform="rotate(-30 88 85)" fill="white" opacity="0.6" />
                            <ellipse cx="120" cy="62" rx="14" ry="4" transform="rotate(-25 120 62)" fill="white" opacity="0.5" />
                          </g>
                        </svg>
                      ),
                    }
                }
              })()

              return (
                <Link
                  key={ind.id}
                  href={`/solutions/${ind.slug}`}
                  className="relative rounded-[28px] sm:rounded-[32px] border border-white/15 bg-neutral-950/70 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#49CBDC]/50 hover:shadow-[0_16px_50px_rgba(73,203,220,0.18)] transition-all duration-400 group overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[360px] cursor-pointer"
                >
                  {/* Subtle Corner Glow */}
                  <div className={`absolute -bottom-10 -right-10 rtl:-left-10 rtl:right-auto w-36 h-36 ${theme.glowColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-all duration-500`} />

                  {/* Top Content */}
                  <div className="relative z-10 space-y-3.5">
                    {/* Icon Pill */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${theme.iconBg} backdrop-blur-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#49CBDC] transition-colors">
                      {indData.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-neutral-300/80 font-normal leading-relaxed max-w-[240px]">
                      {indData.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="relative z-10 pt-6 flex items-center justify-between">
                    {/* Circular Action Button in SWIPEBAY Cyan */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#49CBDC] text-black font-semibold flex items-center justify-center shadow-[0_0_18px_rgba(73,203,220,0.35)] group-hover:bg-[#67D6E4] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(73,203,220,0.55)] transition-all duration-300">
                      <ArrowIcon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom-End 3D Decorative Fluid Shape in Brand Colors */}
                  <div className="absolute -bottom-8 -right-8 rtl:-left-8 rtl:right-auto w-36 h-36 sm:w-44 sm:h-44 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100">
                    {theme.shape}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: CONNECTED CAPABILITIES (CROSS-DISCIPLINE)
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/80 via-black to-black p-8 sm:p-12 md:p-16 backdrop-blur-2xl relative overflow-hidden">
            {/* Background plasma glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "منظومة عمل متكاملة" : "THE INTEGRATED ARCHITECTURE"}</span>
              </div>
              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    لا نعمل في جزر منعزلة.{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      نربط الهوية بالبرمجيات وبوابات الدفع.
                    </span>
                  </>
                ) : (
                  <>
                    We do not build in silos.{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      Brand, Code & Payments in one cohesive system.
                    </span>
                  </>
                )}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
                {isAr
                  ? "تكمن قوة سويب باي في قدرتنا على توحيد كافة عناصر التجربة الرقمية: من الهوية البصرية وإنتاج الوسائط، إلى البنية البرمجية السحابية وأتمتة مسارات الدفع والتحصيل تحت سقف واحد."
                  : "The true power of SWIPEBAY lies in our multidisciplinary foundation. We connect visual brand storytelling, custom web and mobile development, automated cloud workflows, and resilient payment gateways into unified enterprise platforms."}
              </p>
            </div>

            {/* 4 Foundation Pillars */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Palette,
                  title: isAr ? "الهوية والسرد البصري" : "Brand & Visual Narrative",
                  desc: isAr
                    ? "بناء حضور مؤسسي يرسخ مكانتك الرائدة ويكتسب ثقة عملائك وشركائك فورياً."
                    : "Establishing high-trust visual presence that positions you as the clear market authority.",
                },
                {
                  icon: Code2,
                  title: isAr ? "الهندسة البرمجية المخصصة" : "Bespoke Engineering",
                  desc: isAr
                    ? "منصات وتطبيقات ويب وجوال سريعة، مستقرة وقابلة للتوسع لتلبية مئات آلاف المستخدمين."
                    : "High-concurrency web and mobile platforms engineered for sub-second performance.",
                },
                {
                  icon: CreditCard,
                  title: isAr ? "تكامل بوابات الدفع" : "Payment Gateway Engineering",
                  desc: isAr
                    ? "مسارات دفع محلية ودولية (بطاقات، محافظ، فوري، تقسيط) مع تسوية آلية وسجلات تدقيق."
                    : "Multi-acquirer checkout flows, recurring billing, and automated merchant reconciliation.",
                },
                {
                  icon: TrendingUp,
                  title: isAr ? "الذكاء الاصطناعي والأتمتة" : "AI & Process Automation",
                  desc: isAr
                    ? "أتمتة العمليات التشغيلية، ومزامنة نقاط البيع مع سلاسل الإمداد لخفض الهدر وتسريع النمو."
                    : "Connecting operations, POS, inventory, and analytics into zero-waste autonomous workflows.",
                },
              ].map((pillar, pIdx) => {
                const PillIcon = pillar.icon
                return (
                  <div
                    key={pIdx}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-[#49CBDC]/40 transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC] mb-4">
                      <PillIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: SELECTED CASE STUDIES & REAL RESULTS
          ========================================================================= */}
      <section id="case-studies" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "مشاريع معتمدة ونتائج مثبتة" : "VERIFIED CASE STUDIES & METRICS"}</span>
              </div>
              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    نتائج واقعية{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      لشركات حقيقية
                    </span>
                  </>
                ) : (
                  <>
                    Real business impact for{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      real enterprise clients
                    </span>
                  </>
                )}
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                {isAr
                  ? "كافة المشاريع والإحصائيات أدناه مستمدة من سجل أعمال سويب باي الرسمي المعتمد في الشرق الأوسط."
                  : "All projects and performance figures below are drawn directly from SWIPEBAY's verified track record."}
              </p>
            </div>

            {/* Industry Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedIndustry("all")}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${selectedIndustry === "all"
                  ? "bg-[#49CBDC] text-black font-semibold shadow-[0_0_16px_rgba(73,203,220,0.4)]"
                  : "bg-white/5 text-neutral-400 hover:text-white border border-white/10"
                  }`}
              >
                {isAr ? "جميع القطاعات" : "All Sectors"}
              </button>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind.slug)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${selectedIndustry === ind.slug
                    ? "bg-[#49CBDC] text-black font-semibold shadow-[0_0_16px_rgba(73,203,220,0.4)]"
                    : "bg-white/5 text-neutral-400 hover:text-white border border-white/10"
                    }`}
                >
                  {ind[locale].title}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Gallery - Visual Editorial Showcase */}
          <div className="space-y-8 sm:space-y-10">
            {filteredCaseStudies.map((cs, idx) => {
              const csData = cs[locale]
              const indObj = industries.find((i) => i.slug === cs.industrySlug)
              const indName = indObj ? indObj[locale].title : cs.industrySlug
              const isEven = idx % 2 === 0

              return (
                <div
                  key={cs.id}
                  className="group relative rounded-3xl border border-white/15 bg-neutral-950/70 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#49CBDC]/50 hover:shadow-[0_20px_60px_rgba(73,203,220,0.12)] overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Media Column (5 cols) */}
                    <div
                      className={`relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black lg:col-span-5 ${!isEven ? "lg:order-last" : ""
                        }`}
                    >
                      <Image
                        src={cs.image}
                        alt={csData.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                      {/* Live Deployment Status Badge */}
                      <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-emerald-400">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          <span>{isAr ? "منظومة إنتاج حية" : "LIVE DEPLOYMENT"}</span>
                        </span>
                      </div>

                      {/* Floating Key Metric on Image */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                        <div className="rounded-xl border border-white/15 bg-black/80 backdrop-blur-md p-3 flex items-center justify-between">
                          <div>
                            <span className="text-xl sm:text-2xl font-black text-[#49CBDC] block">
                              {cs.metrics[0].value}
                            </span>
                            <span className="text-[11px] text-neutral-300 font-light block">
                              {cs.metrics[0].label}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                            VERIFIED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column (7 cols) */}
                    <div className="space-y-5 lg:col-span-7">
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-300">
                          <Building2 className="h-3 w-3 text-[#49CBDC]" />
                          <span>{indName}</span>
                        </div>

                        <span className="text-xs font-mono text-[#49CBDC] border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-2.5 py-0.5 rounded-full">
                          {isAr ? `العميل: ${cs.clientName}` : `Client: ${cs.clientName}`}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#49CBDC] transition-colors">
                          {csData.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-neutral-300/80 font-light leading-relaxed">
                          {csData.subtitle}
                        </p>
                      </div>

                      {/* Overview summary */}
                      <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                        {csData.overview}
                      </p>

                      {/* 3 Prominent Metric Cards */}
                      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                        {cs.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="rounded-xl border border-white/10 bg-white/5 p-3 text-center sm:text-left rtl:sm:text-right backdrop-blur-md hover:border-[#49CBDC]/30 transition-colors"
                          >
                            <div className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#49CBDC]">
                              {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5 line-clamp-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack & Action Footer */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {cs.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-400 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/solutions/${cs.industrySlug}/case-studies/${cs.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#49CBDC] px-5 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-[#67D6E4] shadow-[0_0_16px_rgba(73,203,220,0.3)] transition-all duration-300"
                        >
                          <span>{isAr ? "استعرض تفاصيل المشروع" : "Explore Case Study"}</span>
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: CONSULTATION CTA
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#49CBDC]/30 bg-gradient-to-r from-black via-neutral-950 to-neutral-900 p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#49CBDC]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "استشارة معمارية مخصصة" : "DOMAIN ARCHITECTURE CONSULTATION"}</span>
              </div>

              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    هل تبحث عن حل رقمي{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      مصمم خصيصاً لقطاعك؟
                    </span>
                  </>
                ) : (
                  <>
                    Looking for a digital platform{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      engineered for your domain?
                    </span>
                  </>
                )}
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {isAr
                  ? "تحدث مباشرة مع مستشاري البرمجيات وخبراء بوابات الدفع في سويب باي لدراسة احتياجات مؤسستك وبناء مخطط عمل مخصص."
                  : "Speak directly with SWIPEBAY software architects and payment integration leads to evaluate your organization's technical needs and map out a bespoke roadmap."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#49CBDC] px-8 text-black font-semibold hover:bg-[#67D6E4] transition-all duration-300 shadow-[0_0_24px_rgba(73,203,220,0.35)]"
                >
                  <Link href="/contact">
                    {isAr ? "احجز جلسة استشارية" : "Book Architecture Session"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#49CBDC]/40 bg-[#49CBDC]/10 px-8 text-[#49CBDC] hover:bg-[#49CBDC]/20 hover:border-[#49CBDC] transition-all"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {isAr ? "تواصل فورياً عبر واتساب" : "Chat on WhatsApp"}
                  </a>
                </Button>
              </div>

              <div className="pt-6 text-xs text-neutral-400 font-light">
                {isAr
                  ? "استجابة سريعة من مهندسي الحلول خلال ساعات العمل الرسمية."
                  : "Direct engineering consultation within standard Middle East business hours."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
