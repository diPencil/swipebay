"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import { BRAND_CONFIG } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  Smartphone,
  QrCode,
  Link2,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownLeft,
  CheckCircle2,
  Sparkles,
  Lock,
  RefreshCw,
  Server,
  FileCode2,
  Sliders,
  DollarSign,
  HelpCircle,
  Building2,
  Check,
  ChevronDown,
  Terminal,
  Activity,
  Globe2,
  Database,
  Cpu,
  Clock,
  Copy,
  Code2,
  ShoppingBag,
  Boxes,
  Star,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface GatewayContentProps {
  locale: Locale
  dict: Dictionary
}

export function GatewayContent({ locale: initialLocale, dict: initialDict }: GatewayContentProps) {
  const { locale: currentLocale, dictionary: clientDict } = useLanguage()
  const locale = currentLocale || initialLocale
  const dict = clientDict || initialDict
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  // Section 01: Currency Telemetry State
  const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "EGP" | "SAR">("USD")

  const currencyData = {
    USD: {
      symbol: "$",
      code: "USD",
      balance: "48,259.00",
      income: "39,820.00",
      expense: "8,439.00",
      weekly: "184,259.00",
      transfer: "34,259.00",
    },
    EGP: {
      symbol: "EGP ",
      code: "EGP",
      balance: "2,412,950",
      income: "1,991,000",
      expense: "421,950",
      weekly: "9,212,950",
      transfer: "1,712,950",
    },
    SAR: {
      symbol: "SAR ",
      code: "SAR",
      balance: "180,970",
      income: "149,325",
      expense: "31,645",
      weekly: "690,970",
      transfer: "128,470",
    },
  }

  // Section 02: Payment Experience Channel Switcher
  const [activeChannel, setActiveChannel] = useState<"web" | "app" | "links" | "omnichannel">("web")

  // Section 03: Capabilities Tab
  const [activeCapability, setActiveCapability] = useState<number>(0)

  // Section 04: Business Use Case Tab
  const [activeUseCase, setActiveUseCase] = useState<number>(0)

  // Section 05: Integration Pathway
  const [activePathway, setActivePathway] = useState<"api" | "sdk" | "plugins" | "hosted">("api")
  const [copiedSnippet, setCopiedSnippet] = useState(false)

  const handleCopySnippet = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedSnippet(true)
      setTimeout(() => setCopiedSnippet(false), 2000)
    }
  }

  // Section 08: FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    "faq-1": true,
  })

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود استشارة مهندسيكم حول دمج وتطوير بوابات الدفع الإلكتروني لمشروعنا.`
      : `Hello Swipebay, I would like to consult your engineers regarding payment gateway integration and architecture for our platform.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  return (
    <div className="relative space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: GATEWAY HERO (Flanked 3-Column Layout with avatar14 & Arched Pedestal)
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
                {isAr ? "منظومة معمارية متقدمة لتوجيه بوابات الدفع" : "ENTERPRISE B2B PAYMENT ORCHESTRATION"}
              </span>
            </div>

            {/* Editorial H1 with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              {isAr ? (
                <>
                  <span className="block text-white">إدارة المدفوعات والسيولة</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    بمنظومة ربط موحدة
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white">Financial Settlement</span>
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    With Unified Payment Rails
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
                <span>{isAr ? "● توجيه المدفوعات والسيولة" : "● PAYMENT ORCHESTRATION"}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {isAr
                  ? "نصمم مسارات دفع موحدة لربط منصتك بأهم بوابات الدفع في مصر والشرق الأوسط، مع معالجة لحظية، أمان مشفر، وتوفيق مالي مؤتمت بالكامل."
                  : "Streamline checkout workflows, multi-channel payment flows, and automated reconciliation across Egypt and the GCC engineered for high reliability and seamless customer journeys."}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 px-6 text-xs sm:text-sm font-medium"
                >
                  <a href="#rails" className="inline-flex items-center gap-2">
                    <span>{isAr ? "استكشف مسارات الربط" : "Explore Payment Rails"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar14 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar14 */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[506/740]">
                <Image
                  src="/images/avatar14.png"
                  alt={isAr ? "معمارية بوابات الدفع سويب باي" : "SWIPEBAY Unified Payment Rails"}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Floating Liquid-Glass Dual-CTA Capsule: Slanted Board */}
              <div className="relative z-20 -mt-8 sm:-mt-10 slanted-board flex items-center gap-1.5 sm:gap-2">
                <Button
                  asChild
                  className="h-8 sm:h-10 px-3.5 sm:px-6 text-xs sm:text-sm font-semibold"
                >
                  <Link href="/contact">
                    {isAr ? "احجز استشارة معمارية" : "Request Consultation"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="h-8 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-medium"
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
                  99.98%
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "جاهزية تشغيلية واتفاقية SLA" : "High Availability SLA"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "تشفير تام وحماية التوكنز" : "Tokenized PCI-DSS Compliance"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "تحويل آلي ذكي بين المحصلين" : "Multi-Acquirer Dynamic Fallback"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "توفيق مالي فوري T+0" : "Realtime T+0 Settlement Rails"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Trust Indicators */}
          <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#49CBDC]" />
              <span>{isAr ? "تشفير TLS 1.3 وحماية التوكنز" : "Tokenized PCI-Compliant Architecture"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-[#49CBDC]" />
              <span>{isAr ? "جاهزية تشغيلية 99.98%" : "99.98% Gateway Uptime"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-[#49CBDC]" />
              <span>{isAr ? "مصر والخليج وبوابات دولية" : "Egypt, GCC & Global Acquirers"}</span>
            </div>
          </div>

          {/* =========================================================================
              TIERED FINANCIAL SHOWCASE (Matches the reference 3-card stepped composition)
              ========================================================================= */}
          <div className="relative max-w-6xl mx-auto mt-12 sm:mt-16 pt-4">
            {/* Layered Stepped Glass Background Panels (The architectural depth from reference) */}
            <div className="absolute -left-4 sm:left-4 bottom-14 w-60 sm:w-72 h-64 sm:h-72 rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-md -rotate-1 pointer-events-none hidden md:block" />
            <div className="absolute -left-1 sm:left-12 bottom-6 w-56 sm:w-64 h-56 sm:h-64 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-md pointer-events-none hidden md:block" />

            <div className="absolute -right-4 sm:right-4 bottom-14 w-60 sm:w-72 h-64 sm:h-72 rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-md rotate-1 pointer-events-none hidden md:block" />
            <div className="absolute -right-1 sm:right-12 bottom-6 w-56 sm:w-64 h-56 sm:h-64 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-md pointer-events-none hidden md:block" />

            {/* Central Glow behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#49CBDC]/10 blur-[120px] pointer-events-none rounded-full" />

            {/* The 3 Cards Foreground Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative z-10">
              {/* CARD 1: LEFT - "Settlement & Balances" (Tier 1) */}
              <div className="md:col-span-12 lg:col-span-4 rounded-3xl border border-white/15 bg-neutral-950/85 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[#49CBDC]/40 transition-all duration-300 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_16px_rgba(139,92,246,0.25)]">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {isAr ? "رصيد التسويات الحالية" : "Settlement Balance"}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {isAr ? "محدث لحظياً · T+0" : "Real-time T+0 Node"}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
                    +24.8%
                  </span>
                </div>

                {/* Big Metric Display */}
                <div>
                  <div className="text-xs text-neutral-400 font-light">
                    {isAr ? "إجمالي الرصيد القابل للتحويل" : "Available Liquid Balance"}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 flex items-baseline gap-1.5">
                    <span>{currencyData[selectedCurrency].symbol}</span>
                    <span>{currencyData[selectedCurrency].balance}</span>
                    <span className="text-xs font-mono text-neutral-400 font-normal">
                      {currencyData[selectedCurrency].code}
                    </span>
                  </div>
                </div>

                {/* Two Breakdown Boxes (Income vs Expense in Reference) */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Collections (Income) */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-1 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                      <ArrowDownLeft className="h-3.5 w-3.5" />
                      <span className="text-[11px] font-medium">
                        {isAr ? "المحصل" : "Collections"}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono">
                      {currencyData[selectedCurrency].symbol}{currencyData[selectedCurrency].income}
                    </div>
                    <div className="text-[9px] text-neutral-400">
                      {isAr ? "مقبوضات البوابات" : "Inflow via Acquirers"}
                    </div>
                  </div>

                  {/* Disbursements (Expense) */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-1 hover:border-cyan-400/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-[#49CBDC] text-xs">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      <span className="text-[11px] font-medium">
                        {isAr ? "التحويلات" : "Payouts"}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono">
                      {currencyData[selectedCurrency].symbol}{currencyData[selectedCurrency].expense}
                    </div>
                    <div className="text-[9px] text-neutral-400">
                      {isAr ? "تسوية الحسابات" : "Disbursed to Bank"}
                    </div>
                  </div>
                </div>

                {/* Footer Micro Trust */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                    <span>{isAr ? "تسوية آلية معتمدة" : "Automated Reconciliation"}</span>
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">IPN / SARIE</span>
                </div>
              </div>

              {/* CARD 2: CENTER - "Weekly Transaction Overview with Smooth Wave Chart" (Tier 2 - Focal Hero Card) */}
              <div className="md:col-span-12 lg:col-span-4 rounded-3xl border border-[#49CBDC]/40 bg-neutral-950/90 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(73,203,220,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] md:-translate-y-4 space-y-5 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#49CBDC]/15 border border-[#49CBDC]/40 flex items-center justify-center text-[#49CBDC] shadow-[0_0_16px_rgba(73,203,220,0.3)]">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {isAr ? "نظرة عامة على المعاملات الأسبوعية" : "Weekly Overview"}
                      </span>
                      <span className="text-[10px] font-mono text-[#49CBDC]">
                        {isAr ? "معدل النجاح: 99.4%" : "Authorization: 99.4%"}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
                    +32.4%
                  </span>
                </div>

                {/* Big Metric Display + Currency Selector */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-neutral-400 font-light">
                      {isAr ? "حجم المعاملات المكتملة" : "Gross Settled Volume"}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#49CBDC] tracking-tight mt-1">
                      {currencyData[selectedCurrency].symbol}{currencyData[selectedCurrency].weekly}
                    </div>
                  </div>

                  {/* Currency Switcher Tabs */}
                  <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-0.5 text-[10px] font-mono">
                    {(["USD", "EGP", "SAR"] as const).map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => setSelectedCurrency(curr)}
                        className={`px-2 py-1 rounded-lg transition-all ${selectedCurrency === curr
                            ? "bg-[#49CBDC] text-black font-bold shadow-[0_0_10px_rgba(73,203,220,0.4)]"
                            : "text-neutral-400 hover:text-white"
                          }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Smooth Wave Area Chart (Exact visual hallmark of the reference) */}
                <div className="relative pt-2">
                  <svg
                    viewBox="0 0 360 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-28 overflow-visible"
                  >
                    <defs>
                      <linearGradient id="cyanPurpleWaveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#49CBDC" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="verticalBarGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#49CBDC" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#49CBDC" stopOpacity="0.02" />
                      </linearGradient>
                      <filter id="waveGlow" x="-10%" y="-20%" width="120%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#49CBDC" floodOpacity="0.45" />
                      </filter>
                    </defs>

                    {/* Subtle Vertical Day Indicator Bars (Like reference) */}
                    {[20, 75, 130, 185, 240, 295, 345].map((xPos, barIdx) => (
                      <rect
                        key={barIdx}
                        x={xPos - 8}
                        y="15"
                        width="16"
                        height="95"
                        rx="8"
                        fill="url(#verticalBarGrad)"
                      />
                    ))}

                    {/* Wave Area Fill */}
                    <path
                      d="M 0,85 C 35,80 65,35 100,60 C 135,85 170,25 210,50 C 255,75 290,15 325,35 C 345,45 355,25 360,20 L 360,120 L 0,120 Z"
                      fill="url(#cyanPurpleWaveGrad)"
                    />

                    {/* Smooth Wave Line */}
                    <path
                      d="M 0,85 C 35,80 65,35 100,60 C 135,85 170,25 210,50 C 255,75 290,15 325,35 C 345,45 355,25 360,20"
                      stroke="#49CBDC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      filter="url(#waveGlow)"
                    />

                    {/* Highlight Peak Dot with Animated Pulse */}
                    <g transform="translate(325, 35)">
                      <circle r="6" fill="#49CBDC" opacity="0.3" className="animate-ping" />
                      <circle r="4" fill="#49CBDC" />
                      <circle r="2" fill="#FFFFFF" />
                    </g>
                  </svg>

                  {/* 7 Days of the Week Labels */}
                  <div className="flex justify-between px-2 pt-2 text-[10px] font-mono text-neutral-400">
                    {isAr
                      ? ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((d, dIdx) => (
                        <span key={dIdx}>{d}</span>
                      ))
                      : ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((d, dIdx) => (
                        <span key={dIdx}>{d}</span>
                      ))}
                  </div>
                </div>

                {/* Acquirer Health Indicator Strip */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Paymob (100%)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Fawry (99.98%)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#49CBDC]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC]" />
                    <span>Apple Pay (28ms)</span>
                  </div>
                </div>
              </div>

              {/* CARD 3: RIGHT - "Bank Transfer & Routing Rails" (Tier 1) */}
              <div className="md:col-span-12 lg:col-span-4 rounded-3xl border border-white/15 bg-neutral-950/85 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[#49CBDC]/40 transition-all duration-300 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#49CBDC]/15 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC] shadow-[0_0_16px_rgba(73,203,220,0.25)]">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {isAr ? "مسارات التحويل وتوجيه البوابات" : "Cross-Border & Bank Rails"}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {isAr ? "تحويل بديل آلي · 42ms" : "Multi-Acquirer Auto-Routing"}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#49CBDC]/15 border border-[#49CBDC]/30 px-2 py-0.5 text-[11px] font-mono font-medium text-[#49CBDC]">
                    +18.2%
                  </span>
                </div>

                {/* The Visual Transfer Rail Diagram (Matching the reference's circular node transfer line!) */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="text-[11px] font-medium text-neutral-400">
                      {isAr ? "مسار المعاملة الحي" : "Live Settlement Path"}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">AUTO-HEALTHY</span>
                  </div>

                  {/* Transfer Route Line with Origin & Destination Avatars */}
                  <div className="relative py-3 flex items-center justify-between">
                    {/* Origin Node (Cairo Commerce Node) */}
                    <div className="flex flex-col items-center gap-1 z-10">
                      <div className="h-10 w-10 rounded-full border border-white/20 bg-neutral-900 flex items-center justify-center shadow-md">
                        <span className="text-base">🇪🇬</span>
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400">
                        {isAr ? "نقطة القاهرة" : "Cairo Node"}
                      </span>
                    </div>

                    {/* Connecting Dashed Animated Route Line with Center Router Badge */}
                    <div className="flex-1 relative flex items-center justify-center mx-2">
                      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#49CBDC] to-transparent border-t border-dashed border-[#49CBDC]/60" />
                      <div className="absolute rounded-full border border-[#49CBDC]/40 bg-black/90 px-2 py-0.5 text-[9px] font-mono text-[#49CBDC] shadow-[0_0_12px_rgba(73,203,220,0.35)] flex items-center gap-1">
                        <Zap className="h-2.5 w-2.5 text-[#49CBDC]" />
                        <span>42ms</span>
                      </div>
                    </div>

                    {/* Destination Node (Riyadh Settlement / GCC) */}
                    <div className="flex flex-col items-center gap-1 z-10">
                      <div className="h-10 w-10 rounded-full border border-[#49CBDC]/40 bg-[#49CBDC]/10 flex items-center justify-center shadow-md">
                        <span className="text-base">🇸🇦</span>
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400">
                        {isAr ? "نقطة الرياض" : "Riyadh Hub"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Big Metric Display */}
                <div>
                  <div className="text-xs text-neutral-400 font-light">
                    {isAr ? "حجم التحويلات الفورية اليوم" : "Cross-Border Settlement Rate"}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 flex items-baseline gap-1.5">
                    <span>{currencyData[selectedCurrency].symbol}</span>
                    <span>{currencyData[selectedCurrency].transfer}</span>
                    <span className="text-xs font-mono text-neutral-400 font-normal">
                      {currencyData[selectedCurrency].code}
                    </span>
                  </div>
                </div>

                {/* Performance Footnote */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{isAr ? "تحويل فوري في حال تعطل البنك" : "Dynamic Auto-Fallback"}</span>
                  </span>
                  <span className="font-mono text-[10px] text-neutral-300">0.4s Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: PAYMENT EXPERIENCE CONCEPT DEMONSTRATION
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "قنوات ونماذج التحصيل" : "OMNICHANNEL CHECKOUT EXPERIENCES"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
              {isAr ? (
                <>
                  تجربة دفع مخصصة{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    لكل نقطة تفاعل مع العميل
                  </span>
                </>
              ) : (
                <>
                  Checkout experiences tailored for{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    every touchpoint
                  </span>
                </>
              )}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              {isAr
                ? "سواء كان عميلك يشتري من متجرك الإلكتروني، أو من داخل تطبيق الهاتف، أو عبر رابط سداد في محادثة واتساب، نصمم تدفق الدفع ليكون فائق السلاسة وخالياً من التعقيد."
                : "Whether your clients complete purchases on your web store, inside a native mobile app, or via direct messaging invoice links, we engineer frictionless payment funnels that maximize completion rates."}
            </p>
          </div>

          {/* Channel selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "web", title: isAr ? "دفع الويب والمتاجر" : "E-Commerce Web", icon: Globe2 },
              { id: "app", title: isAr ? "تطبيقات الجوال الأصلية" : "Native Mobile SDKs", icon: Smartphone },
              { id: "links", title: isAr ? "روابط الفواتير وواتساب" : "Payment Links & Invoicing", icon: Link2 },
              { id: "omnichannel", title: isAr ? "مزامنة الفروع ونقاط البيع" : "POS & Omnichannel Sync", icon: QrCode },
            ].map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeChannel === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveChannel(tab.id as any)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-all ${isActive
                      ? "bg-[#49CBDC] text-black font-semibold shadow-[0_0_20px_rgba(73,203,220,0.35)]"
                      : "bg-white/5 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                >
                  <TabIcon className="h-4 w-4" />
                  <span>{tab.title}</span>
                </button>
              )
            })}
          </div>

          {/* Channel Content Card */}
          <div className="rounded-3xl border border-white/10 bg-black/60 p-8 sm:p-12 backdrop-blur-xl">
            {activeChannel === "web" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#49CBDC] uppercase tracking-wider">
                    {isAr ? "مسار الويب المخصص" : "CUSTOM WEB CHECKOUT"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {isAr
                      ? "صفحات دفع سريعة، مدمجة بدون تحويلات بطيئة تشتت العميل"
                      : "Seamless in-page checkout without jarring redirects"}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed">
                    {isAr
                      ? "يتسبب التحويل لصفحات بنكية خارجية بطيئة في فقدان حتى 35% من المشترين. نهندس واجهات دفع مدمجة كلياً باستخدام حقول آمنة ومشفرة (Hosted Fields) تحافظ على هوية علامتك التجارية وتعزز الثقة."
                      : "Redirecting customers to clunky external bank portals causes up to 35% cart abandonment. We engineer seamless iframe-based and tokenized hosted fields directly inside your domain, preserving your visual identity and maximizing completion."}
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "دعم كامل لـ Apple Pay و Google Pay على الويب بنقرة واحدة" : "1-Click Apple Pay & Google Pay web integration"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "حفظ آمن لبيانات البطاقات (Token Vault) للشراء السريع مستقبلاً" : "Secure token vaulting for frictionless returning customer checkout"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "التحقق المزدوج الذكي 3D Secure 2.0 دون أي تعقيد" : "Smart 3D Secure 2.0 frictionless authentication"}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 font-mono text-xs text-neutral-300 space-y-3">
                  <div className="text-neutral-400 border-b border-white/10 pb-2">
                    // WEB_CHECKOUT_PIPELINE
                  </div>
                  <div className="text-cyan-300 font-medium">POST /api/v1/payments/create-session</div>
                  <div className="bg-black/80 p-3 rounded-lg text-[11px] leading-relaxed text-neutral-400">
                    {`{
  "amount": 145000,
  "currency": "EGP",
  "payment_methods": ["card", "applepay", "fawry", "tabby"],
  "customer": { "email": "client@enterprise.com" },
  "return_url": "https://yourdomain.com/checkout/success"
}`}
                  </div>
                  <div className="text-emerald-400 text-[11px]">
                    ✓ Client Session Token generated (TTL: 15m)
                  </div>
                </div>
              </div>
            )}

            {activeChannel === "app" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#49CBDC] uppercase tracking-wider">
                    {isAr ? "حزم التطبيقات الأصلية" : "NATIVE MOBILE APP SDKs"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {isAr
                      ? "دفع مدمج داخل تطبيقات iOS و Android و Flutter"
                      : "Native in-app checkout with FaceID and instant settlement"}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed">
                    {isAr
                      ? "ندمج مكتبات الدفع المعتمدة مباشرة داخل تطبيقاتك، مع دعم المصادقة الحيوية عبر بصمة الوجه (FaceID) وبصمة الإصبع لتجربة شراء فائقة السرعة لا تتجاوز ثانيتين."
                      : "We embed hardened payment SDKs directly into your iOS, Android, and Flutter applications. Users authenticate instantly via FaceID or biometric fingerprint, concluding transactions within 2 seconds without ever leaving your application."}
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "دعم Apple Pay و Google Pay الأصلي بالكامل" : "Native Apple Pay PassKit & Google Pay API integration"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "إدارة الاشتراكات الشهرية وتجديدها الآلي" : "Mobile in-app subscription and auto-renew lifecycle"}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 font-mono text-xs text-neutral-300 space-y-3">
                  <div className="text-neutral-400 border-b border-white/10 pb-2">
                    // FLUTTER / SWIFT PASSTHROUGH
                  </div>
                  <div className="text-purple-300">SwipebayPaymentEngine.presentCheckout(</div>
                  <div className="bg-black/80 p-3 rounded-lg text-[11px] text-neutral-400">
                    {`context: context,
session: validatedSession,
onSuccess: (receipt) => handleInstantReceipt(receipt),
onError: (failure) => triggerSmartFallback(failure)`}
                  </div>
                  <div className="text-emerald-400 text-[11px]">
                    ✓ Biometric authorization accepted
                  </div>
                </div>
              </div>
            )}

            {activeChannel === "links" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#49CBDC] uppercase tracking-wider">
                    {isAr ? "روابط السداد المؤتمتة" : "INSTANT PAYMENT LINKS & INVOICING"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {isAr
                      ? "أنشئ روابط سداد وأرسلها لعملائك عبر واتساب والبريد بضغطة زر"
                      : "Generate and dispatch dynamic invoice links via WhatsApp and SMS"}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed">
                    {isAr
                      ? "مثالي للشركات الاستشارية، مقدمي الخدمات، وحجوزات الفنادق والفعاليات. يمكنك إنشاء رابط دفع مخصص لمبلغ محدد وإرساله للعميل، ليقوم بالسداد فورياً عبر بطاقته أو محفظته الإلكترونية."
                      : "Ideal for consulting firms, enterprise B2B sales, custom hospitality reservations, and event ticketing. Issue dynamic, token-protected payment links that customers can open on any device to settle invoices in seconds."}
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "ربط فوري بإشعارات واتساب الرسمية عبر WhatsApp Cloud API" : "Automated dispatch via WhatsApp Business Cloud API"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "تحديد مدة صلاحية للرابط وتذكيرات تلقائية قبل الانتهاء" : "Configurable link expiration and automated polite reminders"}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 space-y-4">
                  <div className="text-xs font-mono text-neutral-400 border-b border-white/10 pb-2">
                    // MOCK INVOICE PREVIEW
                  </div>
                  <div className="rounded-xl border border-[#49CBDC]/30 bg-[#49CBDC]/5 p-4 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">INVOICE:</span>
                      <span className="text-white font-mono">#INV-2026-089</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">CLIENT:</span>
                      <span className="text-white">Al-Futtaim Hospitality</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">AMOUNT:</span>
                      <span className="text-[#49CBDC] font-mono font-bold">18,500 AED</span>
                    </div>
                    <div className="pt-2 text-center">
                      <span className="inline-block rounded-full bg-[#49CBDC] text-black px-4 py-1 text-xs font-medium">
                        {isAr ? "رابط سداد نشط وآمن" : "Secure Pay Link Active"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeChannel === "omnichannel" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#49CBDC] uppercase tracking-wider">
                    {isAr ? "التزامن الشامل للفروع" : "OMNICHANNEL & POS SYNCHRONIZATION"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {isAr
                      ? "ربط مبيعات الفروع وأجهزة الكاشير بمتجرك الإلكتروني في نظام مالي موحد"
                      : "Unifying retail store POS machines with e-commerce ledgers"}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed">
                    {isAr
                      ? "تخلص من ازدواجية التقارير المحاسبية. نربط ماكينات نقاط البيع (POS) في فروعك مع متجرك وتطبيقك، لتتجمع كافة المدفوعات في لوحة تحكم مركزية واحدة مع توفيق مالي فوري."
                      : "Eliminate conflicting financial spreadsheets. We bridge in-store physical POS terminals with your web and mobile platforms, routing every transaction into a single unified financial ledger."}
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "مزامنة حية للمخزون ومبيعات الفروع لحظة بلحظة" : "Real-time inventory deduction across physical and digital sales"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC]" />
                      <span>{isAr ? "تصدير آلي للقيود المحاسبية لأنظمة Odoo و SAP" : "Automated journal entry export to ERP systems (Odoo, SAP)"}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 space-y-4 font-mono text-xs">
                  <div className="text-neutral-400 border-b border-white/10 pb-2">
                    // UNIFIED LEDGER SYNC
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-neutral-300">
                      <span>Branch Cairo-01 (POS Terminal):</span>
                      <span className="text-emerald-400">ONLINE // SYNCED</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Online Web Store:</span>
                      <span className="text-emerald-400">ONLINE // SYNCED</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Mobile In-App Orders:</span>
                      <span className="text-emerald-400">ONLINE // SYNCED</span>
                    </div>
                    <div className="mt-3 p-2.5 rounded-lg bg-black border border-white/10 text-neutral-400">
                      Unified Daily Settlement Total: <strong className="text-white">412,890 EGP</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: CORE ENTERPRISE PAYMENT CAPABILITIES
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
              <span>{isAr ? "القدرات الهندسية الأساسية" : "CORE PAYMENT CAPABILITIES"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
              {isAr ? (
                <>
                  بنية تحتية مصممة للسرعة،{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    المرونة والاستقرار المالي
                  </span>
                </>
              ) : (
                <>
                  Enterprise infrastructure built for{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    resilience & zero drop-offs
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: isAr ? "تجميع وتوحيد بوابات الدفع (Multi-Gateway)" : "Unified Multi-Gateway Aggregation",
                desc: isAr
                  ? "ربط بوابات متعددة (Paymob، Stripe، Fawry، Tap) في واجهة برمجية واحدة تتيح لك التبديل والتوجيه دون إعادة كتابة الكود."
                  : "Connect multiple payment acquirers under a unified API abstraction layer, allowing seamless routing without rewriting application code.",
              },
              {
                icon: Globe2,
                title: isAr ? "وسائل الدفع المحلية والإقليمية" : "Local & Regional Payment Methods",
                desc: isAr
                  ? "تغطية شاملة: مدى في السعودية، كي نت في الكويت، ميزة والمحافظ وفوري في مصر، أبل باي، وبوابات التقسيط (تابي وتمارا)."
                  : "Full coverage of domestic rails: Mada, KNET, Meeza, Vodafone Cash, InstaPay, Fawry kiosks, Apple Pay, Tabby, and Tamara.",
              },
              {
                icon: Zap,
                title: isAr ? "معالجة فورية للـ Webhooks وتأكيد الطلبات" : "Real-Time Webhooks & Reconciliation",
                desc: isAr
                  ? "بنية استقبال Webhook عالية التوافر ومحصنة بمفاتيح Idempotency لضمان عدم تكرار الخصم أو فقدان أي معاملة أثناء ذروة الضغط."
                  : "Zero-drop webhook listeners with idempotency guarantees, preventing duplicate debits and ensuring instant order fulfillment under heavy traffic.",
              },
              {
                icon: Sliders,
                title: isAr ? "التوجيه الذكي ومسارات التخطي (Fallback)" : "Smart Routing & Acquirer Fallback",
                desc: isAr
                  ? "عند حدوث عطل مؤقت في بنك معين، يقوم النظام تلقائياً وبأجزاء من الثانية بتوجيه المعاملة لمسار بديل لإنقاذ عملية الشراء."
                  : "Automatic sub-second failover rerouting transactions to backup acquiring banks when a primary provider experiences downtime or elevated declines.",
              },
              {
                icon: RefreshCw,
                title: isAr ? "التسوية الآلية وإدارة الاسترداد (Refunds)" : "Automated Settlement & Refunds",
                desc: isAr
                  ? "أتمتة تسوية المبالغ، حساب عمولات البوابات، وإمكانية تنفيذ عمليات الاسترداد الجزئي أو الكلي بنقرة واحدة من لوحة التحكم."
                  : "Automated merchant payout verification, fee deduction calculations, and 1-click full or partial refunds directly synced with your database.",
              },
              {
                icon: ShieldCheck,
                title: isAr ? "التشفير التام وحماية التوكنز (Tokenization)" : "Tokenization & Secure Customer Vaults",
                desc: isAr
                  ? "حفظ بطاقات العملاء على شكل شفرات رقمية (Tokens) آمنة لدى البوابات المرخصة، لتمكين الشراء بنقرة واحدة دون تخزين أي بيانات حساسة."
                  : "Secure customer card vaulting via acquirer tokenization tokens, enabling 1-click repeat purchases without holding raw PAN data on agency servers.",
              },
            ].map((cap, cIdx) => {
              const CapIcon = cap.icon
              return (
                <div
                  key={cIdx}
                  className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-xl hover:border-[#49CBDC]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC]">
                      <CapIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-normal text-white">{cap.title}</h3>
                    <p className="text-sm font-light text-neutral-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: INDUSTRY-SPECIFIC PAYMENT USE CASES
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/90 via-black to-black p-8 sm:p-12 md:p-16 backdrop-blur-2xl">
            <div className="max-w-3xl space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "تطبيقات المدفوعات حسب القطاع" : "SECTOR-SPECIFIC PAYMENT ARCHITECTURES"}</span>
              </div>
              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
                {isAr ? (
                  <>
                    كيف تختلف متطلبات الدفع{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      من صناعة إلى أخرى؟
                    </span>
                  </>
                ) : (
                  <>
                    Tailored payment blueprints for{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      distinct enterprise sectors
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  sector: isAr ? "الفنادق والسياحة" : "Hospitality & Resorts",
                  features: isAr
                    ? [
                      "حجز مسبق مع تعليق المبلغ (Pre-Auth)",
                      "تأمين أضرار قابل للاسترداد التلقائي",
                      "دعم التحويل الآلي لعملات الضيوف الأجانب",
                      "روابط سداد لتأكيد حجوزات الواتساب",
                    ]
                    : [
                      "Pre-authorization hold workflows",
                      "Refundable security deposits",
                      "Multi-currency conversion (USD/EUR/SAR)",
                      "WhatsApp payment links for concierge",
                    ],
                },
                {
                  sector: isAr ? "المطاعم والأغذية" : "Restaurants & F&B",
                  features: isAr
                    ? [
                      "دفع سريع برمز QR على طاولات الطعام",
                      "تجميع مبيعات الفروع في حساب موحد",
                      "تقسيم الفواتير بين رواد المطعم",
                      "مزامنة فورية مع نظام إدارة المطبخ (KDS)",
                    ]
                    : [
                      "Table QR payment & bill splitting",
                      "Multi-branch consolidated settlements",
                      "Sub-2s mobile wallet checkout",
                      "Instant sync with Kitchen Display Systems",
                    ],
                },
                {
                  sector: isAr ? "التعليم والمنصات" : "Education & E-Learning",
                  features: isAr
                    ? [
                      "أقساط دراسية شهرية مجدولة تلقائياً",
                      "أكواد دفع فوري عبر منافذ البيع للطلاب",
                      "تجديد اشتراكات الكورسات الشهرية",
                      "إصدار إيصالات رسمية معتمدة ضريبياً",
                    ]
                    : [
                      "Automated recurring term installments",
                      "Fawry kiosk cash codes for students",
                      "Auto-renewing monthly subscriptions",
                      "Tax-compliant digital invoices",
                    ],
                },
                {
                  sector: isAr ? "الشركات والاستشارات" : "Corporate & B2B Advisory",
                  features: isAr
                    ? [
                      "تحصيل مستحقات العقود والخدمات الشهرية",
                      "روابط دفع للمطالبات المالية الكبيرة",
                      "إشعارات تلقائية عبر البريد قبل الاستحقاق",
                      "سجلات تدقيق مالية متكاملة لمدققي الحسابات",
                    ]
                    : [
                      "High-limit retainer card processing",
                      "Automated milestone invoices",
                      "Corporate bank transfer confirmations",
                      "Comprehensive compliance audit logs",
                    ],
                },
              ].map((useCase, uIdx) => (
                <div
                  key={uIdx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-4"
                >
                  <h3 className="text-lg font-medium text-white text-[#49CBDC]">
                    {useCase.sector}
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-300 font-light">
                    {useCase.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: INTEGRATION ARCHITECTURE TIMELINE & DEVELOPER EXPERIENCE
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "مسارات التكامل البرمجي والهندسي" : "INTEGRATION ARCHITECTURE PATHWAYS"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
              {isAr ? (
                <>
                  مرونة كاملة للتكامل{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    مع أي بنية برمجية
                  </span>
                </>
              ) : (
                <>
                  Flexible engineering pathways for{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    any enterprise stack
                  </span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              {isAr
                ? "من التحكم المعماري العميق عبر واجهات REST API والأنظمة الموزعة، وصولاً إلى الإطلاق التجاري الفوري لصفحات الدفع المستضافة؛ صممنا مساراً معمارياً متدرجاً يتكيف مع نضج بنيتك التقنية وسرعة طرحك في السوق."
                : "From granular API control and distributed microservices to turnkey hosted checkouts, our architectural pathways adapt to your engineering stack, compliance posture, and time-to-market timeline."}
            </p>
          </div>

          {/* Timeline Pathway Data & Layout */}
          {(() => {
            const pathways = [
              {
                id: "api" as const,
                step: "01",
                badge: "REST / GraphQL",
                archetype: isAr ? "تحكم معماري كامل" : "Full Architectural Control",
                title: isAr ? "واجهات REST API & Webhooks" : "REST API & Webhooks",
                leadTime: isAr ? "أسبوع إلى أسبوعين" : "1–2 Sprints",
                target: isAr ? "للمهندسين والأنظمة الكبرى" : "For Core Engineering Teams",
                desc: isAr
                  ? "للمنصات المخصصة والتطبيقات السحابية الكبرى التي تتطلب تحكماً كاملاً في كل مرحلة من مراحل المعالجة وتوجيه المدفوعات."
                  : "For custom enterprise architectures, microservices, and headless frontends demanding total control over payment orchestration.",
                highlights: isAr
                  ? [
                    "مفاتيح منع التكرار (Idempotency) وتوثيق التوقيع الرقمي HMAC",
                    "إرسال الويب هوكس الفوري مع إعادة المحاولة التلقائية عند الانقطاع",
                    "بيئة تجريبية معزولة (Sandbox) مع سجلات تدقيق تفصيلية لكل طلب",
                  ]
                  : [
                    "Idempotency keys with automated HMAC cryptographic verification",
                    "Sub-100ms webhook dispatch with exponential retry queues",
                    "Isolated sandbox simulation with end-to-end telemetry logging",
                  ],
                icon: Terminal,
                codePreview: {
                  lang: "bash / cURL",
                  file: "create_payment_intent.sh",
                  code: `curl -X POST https://api.swipebay.net/v1/charges \\
  -H "Authorization: Bearer sk_live_9f82b7..." \\
  -H "Idempotency-Key: idemp_8492048102" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 250000,
    "currency": "EGP",
    "payment_method": "card",
    "capture": true,
    "metadata": { "order_id": "ORD-2026-99" }
  }'`,
                },
              },
              {
                id: "sdk" as const,
                step: "02",
                badge: "iOS / Android / Flutter",
                archetype: isAr ? "تجربة أصلية مدمجة" : "Native In-App Checkout",
                title: isAr ? "حزم التطبيقات الأصلية SDKs" : "Native Mobile SDKs",
                leadTime: isAr ? "3 إلى 5 أيام" : "3–5 Days",
                target: isAr ? "لتطبيقات الهواتف الذكية" : "For Native Mobile Apps",
                desc: isAr
                  ? "حزم جاهزة ومحكمة الأمان لتطبيقات Flutter و React Native و iOS و Android مع دعم كامل لـ Apple Pay والمصادقة البيومترية."
                  : "Production SDKs for iOS Swift, Android Kotlin, Flutter, and React Native with native biometric checkout and zero external redirects.",
                highlights: isAr
                  ? [
                    "دعم أصيل لـ Apple Pay و Google Pay دون مغادرة التطبيق",
                    "تشفير وحفظ البطاقات مسبقاً متوافق مع معايير PCI-DSS SAQ A-EP",
                    "مكونات واجهة مستخدم متكيفة تدعم الوضعين الداكن والفاتح والعربية",
                  ]
                  : [
                    "Native Apple Pay & Google Pay with zero external web redirects",
                    "Pre-certified PCI-DSS SAQ A-EP encrypted card vaulting",
                    "Adaptive dark/light mode UI kits localized for Arabic & English",
                  ],
                icon: Smartphone,
                codePreview: {
                  lang: "swift / iOS",
                  file: "SwipebayPaymentSheet.swift",
                  code: `import SwipebaySDK

let config = SwipebayConfiguration(
    publishableKey: "pk_live_418...",
    merchantIdentifier: "merchant.net.swipebay.store",
    applePayEnabled: true
)

Swipebay.presentPaymentSheet(
    for: PaymentIntent(id: "pi_9921", amount: 1450.0, currency: .SAR),
    from: currentViewController
) { result in
    switch result {
    case .completed: notifyOrderPlaced()
    case .failed(let err): logPaymentTelemetry(err)
    case .canceled: handleUserDismiss()
    }
}`,
                },
              },
              {
                id: "plugins" as const,
                step: "03",
                badge: "Shopify / WooCommerce",
                archetype: isAr ? "إضافات المنصات التجارية" : "Hardened E-Com Connectors",
                title: isAr ? "إضافات المنصات الجاهزة" : "E-Commerce Plugins",
                leadTime: isAr ? "24 إلى 48 ساعة" : "24–48 Hours",
                target: isAr ? "للمتاجر الإلكترونية النشطة" : "For Rapid E-Commerce Platforms",
                desc: isAr
                  ? "ربط وتخصيص بوابات الدفع لمتاجر Shopify و WooCommerce و Magento مع تحسين مسار الـ Checkout والتسوية التلقائية للمخزون."
                  : "Hardened, customized payment plugins for Shopify, WooCommerce, and Magento with optimized single-page checkout.",
                highlights: isAr
                  ? [
                    "تكامل مباشر بنقرة واحدة مع مزامنة حالات الطلبات لحظياً في لوحة التحكم",
                    "دعم خطط التقسيط (تابي، تمارا، فوري) ومحافظ الهواتف الذكية في صفحة واحدة",
                    "معالجة الاسترداد التلقائي للمبالغ (Refunds) مباشرة من لوحة متجرك",
                  ]
                  : [
                    "1-click installation with bidirectional real-time order status sync",
                    "Multi-rail checkout supporting Tabby, Tamara, Fawry & Mobile Wallets",
                    "Automated refund processing and invoice reconciliation from store admin",
                  ],
                icon: ShoppingBag,
                codePreview: {
                  lang: "json / config",
                  file: "swipebay-woocommerce-config.json",
                  code: `{
  "plugin": "swipebay-woocommerce",
  "version": "4.2.0",
  "features": {
    "seamless_checkout": true,
    "instant_webhooks": true,
    "supported_currencies": ["EGP", "SAR", "USD", "AED"],
    "bnpl_providers": ["tabby", "tamara", "sympl"],
    "auto_capture": true
  },
  "settlement": {
    "auto_reconcile": true,
    "webhook_endpoint": "https://store.domain.com/?wc-api=swipebay_gateway"
  }
}`,
                },
              },
              {
                id: "hosted" as const,
                step: "04",
                badge: "Turnkey Hosted",
                archetype: isAr ? "إطلاق فوري بدون أكواد" : "Zero-Code Instant Launch",
                title: isAr ? "صفحات الدفع المستضافة" : "Hosted Checkout Pages",
                leadTime: isAr ? "إطلاق فوري (ساعات)" : "Instant (Hours)",
                target: isAr ? "للشركات والمبيعات المباشرة" : "For Invoicing & Fast Go-Live",
                desc: isAr
                  ? "صفحات دفع مستضافة متوافقة مع الهوية البصرية، وروابط فواتير ديناميكية تتيح الإطلاق السريع دون الحاجة لشهادات تدقيق معقدة."
                  : "Branded, turnkey hosted payment pages and dynamic invoice links for ultra-rapid market launch with zero PCI compliance overhead.",
                highlights: isAr
                  ? [
                    "توليد روابط دفع فورية ومشاركتها عبر الواتساب أو الرسائل القصيرة SMS",
                    "إعفاء كامل من متطلبات شهادات PCI DSS على خوادم العميل (SAQ-A)",
                    "تخصيص كامل للألوان والشعار والنطاق الفرعي ليتطابق مع هويتك البصرية",
                  ]
                  : [
                    "Generate instant, sharable payment links via WhatsApp, SMS, or Email",
                    "Zero server compliance liability (Fully hosted under PCI-DSS Level 1)",
                    "Complete visual white-labeling with custom subdomains and brand assets",
                  ],
                icon: Globe2,
                codePreview: {
                  lang: "javascript / sdk",
                  file: "generatePaymentLink.js",
                  code: `// Generate an authenticated hosted invoice link
const session = await swipebay.checkoutSessions.create({
  customer: {
    name: "Enterprise Client",
    phone: "+201000000000",
    email: "client@enterprise.com"
  },
  line_items: [
    { name: "Annual Enterprise License", amount: 85000, currency: "EGP" }
  ],
  success_url: "https://yourbrand.com/success?session_id={CHECKOUT_SESSION_ID}",
  cancel_url: "https://yourbrand.com/cancel"
});

console.log("Hosted Payment URL:", session.url);
// Output: https://pay.swipebay.net/session/cs_live_839218...`,
                },
              },
            ]

            const selectedPathwayData =
              pathways.find((p) => p.id === activePathway) || pathways[0]

            return (
              <div className="space-y-8">
                {/* Desktop Continuous Architectural Pipeline Rail (Horizontal Stepper Spine) */}
                <div className="relative pt-6 pb-2 hidden lg:block">
                  {/* The Pipeline Conduit Track */}
                  <div className="absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-white/10 via-[#49CBDC]/50 to-white/10 rounded-full" />
                  <div className="absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-transparent via-[#49CBDC] to-transparent opacity-70 blur-[3px]" />

                  {/* 4 Connected Stations */}
                  <div className="relative grid grid-cols-4 gap-6">
                    {pathways.map((item) => {
                      const isSelected = activePathway === item.id
                      const ItemIcon = item.icon
                      return (
                        <div key={item.id} className="flex flex-col items-center">
                          {/* Interactive Milestone Button */}
                          <button
                            type="button"
                            onClick={() => setActivePathway(item.id)}
                            className={`group relative z-10 flex items-center justify-center rounded-full transition-all duration-300 ${isSelected
                                ? "w-13 h-13 bg-neutral-950 border-2 border-[#49CBDC] shadow-[0_0_25px_rgba(73,203,220,0.7)] scale-110"
                                : "w-11 h-11 bg-neutral-950/90 border border-white/20 hover:border-[#49CBDC]/60 hover:scale-105"
                              }`}
                          >
                            {isSelected && (
                              <span className="absolute -inset-1 rounded-full border border-[#49CBDC]/50 animate-ping opacity-40 pointer-events-none" />
                            )}
                            <ItemIcon
                              className={`h-5 w-5 transition-colors ${isSelected ? "text-[#49CBDC]" : "text-neutral-400 group-hover:text-white"
                                }`}
                            />
                          </button>

                          {/* Station Step Label */}
                          <div className="mt-2.5 text-center">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all ${isSelected
                                  ? "bg-[#49CBDC]/20 text-[#49CBDC] border border-[#49CBDC]/50 shadow-[0_0_12px_rgba(73,203,220,0.3)]"
                                  : "bg-white/5 text-neutral-400 border border-white/10"
                                }`}
                            >
                              {isAr ? `المرحلة ${item.step}` : `STAGE ${item.step}`}
                            </span>
                          </div>

                          {/* Vertical Connector Stem descending to card */}
                          <div
                            className={`w-[2px] h-6 transition-all duration-300 mt-1 ${isSelected
                                ? "bg-gradient-to-b from-[#49CBDC] to-[#49CBDC]/30 shadow-[0_0_8px_rgba(73,203,220,0.8)]"
                                : "bg-gradient-to-b from-white/15 to-transparent"
                              }`}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* The 4 Timeline Architectural Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pathways.map((item) => {
                    const isSelected = activePathway === item.id
                    const ItemIcon = item.icon
                    return (
                      <div
                        key={item.id}
                        onClick={() => setActivePathway(item.id)}
                        className={`group relative rounded-3xl p-6 sm:p-7 backdrop-blur-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${isSelected
                            ? "border-2 border-[#49CBDC] bg-gradient-to-b from-neutral-950 via-neutral-900/95 to-neutral-950 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_35px_rgba(73,203,220,0.22)] -translate-y-1.5"
                            : "border border-white/12 bg-neutral-950/70 hover:border-[#49CBDC]/40 hover:bg-neutral-950/90 hover:-translate-y-1"
                          }`}
                      >
                        {/* Radiant Top Edge Glow on Active Card */}
                        {isSelected && (
                          <div className="absolute -top-[1px] inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#49CBDC] to-transparent shadow-[0_0_12px_#49CBDC]" />
                        )}

                        <div className="space-y-4">
                          {/* Card Header: Step & Velocity */}
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${isSelected
                                  ? "bg-[#49CBDC]/20 text-[#49CBDC] border border-[#49CBDC]/40"
                                  : "bg-white/5 text-neutral-300 border border-white/10"
                                }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#49CBDC] animate-pulse" : "bg-neutral-400"
                                  }`}
                              />
                              <span>{isAr ? `المرحلة ${item.step}` : `STAGE ${item.step}`}</span>
                            </span>

                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                              <Clock className="h-3 w-3 text-[#49CBDC]" />
                              <span>{item.leadTime}</span>
                            </span>
                          </div>

                          {/* Icon & Technology Stack Pill */}
                          <div className="flex items-center gap-3 pt-1">
                            <div
                              className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${isSelected
                                  ? "border-[#49CBDC]/60 bg-[#49CBDC]/15 text-[#49CBDC] shadow-[0_0_15px_rgba(73,203,220,0.3)]"
                                  : "border-white/10 bg-white/5 text-neutral-300 group-hover:text-white group-hover:border-white/20"
                                }`}
                            >
                              <ItemIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-[#49CBDC]">
                                {item.badge}
                              </span>
                              <div className="text-[11px] font-medium text-neutral-400 mt-0.5">
                                {item.archetype}
                              </div>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="space-y-2 pt-1">
                            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#49CBDC] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-neutral-300 font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          {/* Engineering Deliverables Checklist */}
                          <div className="space-y-2 pt-3 border-t border-white/10">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                              {isAr ? "المعايير الهندسية:" : "ENGINEERING DELIVERABLES:"}
                            </div>
                            <ul className="space-y-1.5">
                              {item.highlights.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-2 text-[11px] text-neutral-300 font-light leading-relaxed"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Card Footer: Target Audience & Spec Trigger */}
                        <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                          <div className="text-[11px] font-mono text-neutral-400">
                            {item.target}
                          </div>
                          <div
                            className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors ${isSelected
                                ? "text-[#49CBDC]"
                                : "text-neutral-400 group-hover:text-white"
                              }`}
                          >
                            <span>
                              {isSelected
                                ? isAr
                                  ? "المسار المختار"
                                  : "Active Focus"
                                : isAr
                                  ? "عرض الكود"
                                  : "View Spec"}
                            </span>
                            <ArrowIcon className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Interactive Developer & Architecture Blueprint Terminal Console */}
                <div className="mt-8 rounded-3xl border border-white/15 bg-neutral-950/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
                  {/* Console Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-3">
                      {/* Mac Terminal Indicators */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                      </div>

                      <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />

                      {/* File Name & Language */}
                      <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-[#49CBDC]" />
                        <span className="text-xs font-mono font-medium text-white">
                          {selectedPathwayData.codePreview.file}
                        </span>
                        <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-neutral-400">
                          {selectedPathwayData.codePreview.lang}
                        </span>
                      </div>
                    </div>

                    {/* Telemetry Indicator & Copy Snippet */}
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>TLS 1.3 • PCI-DSS SAQ-A Certified • 99.98% SLA</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopySnippet(selectedPathwayData.codePreview.code)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-all"
                      >
                        {copiedSnippet ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">{isAr ? "تم النسخ" : "Copied"}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-[#49CBDC]" />
                            <span>{isAr ? "نسخ الكود" : "Copy Snippet"}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Code Body */}
                  <div className="p-6 sm:p-8 bg-black/60 overflow-x-auto">
                    <pre className="font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed tracking-wide select-all">
                      <code>{selectedPathwayData.codePreview.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: SECURITY, COMPLIANCE & REGULATORY TRANSPARENCY
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/10 p-8 sm:p-12 md:p-16 backdrop-blur-2xl">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "الأمان والتوافق الرقابي والشفافية" : "SECURITY, COMPLIANCE & REGULATORY TRANSPARENCY"}</span>
              </div>

              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
                {isAr ? (
                  <>
                    هندسة آمنة تحمي بيانات عملائك{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                      وتلتزم بأعلى المعايير المصرفية
                    </span>
                  </>
                ) : (
                  <>
                    Hardened security protecting customer data{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                      with zero compromise
                    </span>
                  </>
                )}
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {isAr
                  ? "تلتزم سويب باي بتقديم خدمات استشارية وهندسية رفيعة المستوى لدمج وتنظيم بوابات الدفع. نحن لسنا بنكاً مرخصاً أو جهة تحصيل مالية مستقلة، بل شريككم التكنولوجي والهندسي الذي يربط منصاتكم مباشرة بالمؤسسات المصرفية وبوابات الدفع المرخصة رسمياً من البنك المركزي المصري وهيئات النقد في الخليج (مثل Paymob، فوري، Stripe، تابي، تمارا)."
                  : "SWIPEBAY is a specialized software engineering and payment systems consultancy. We are not a licensed acquiring bank, financial institution, or custodian of customer funds. We act as your engineering and architecture partner, seamlessly integrating your digital assets with licensed, Central Bank-authorized payment acquirers and gateways (such as Paymob, Fawry, Stripe, Tabby, and Tamara)."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <div className="text-white text-sm font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "حماية البطاقات (Tokenization)" : "Strict Tokenization"}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    {isAr
                      ? "لا نقوم إطلاقاً بتخزين أرقام البطاقات الحساسة (PAN) على خوادمنا. تتم معالجتها وتشفيرها حصرياً لدى البوابات المرخصة."
                      : "We never store raw credit card numbers (PAN) or CVVs on application servers. Data is tokenized securely at licensed acquirers."}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-white text-sm font-medium flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "تشفير TLS 1.3 & توقيع HMAC" : "TLS 1.3 & HMAC Signatures"}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    {isAr
                      ? "كافة طلبات الـ Webhooks مؤمنة بتواقيع رقمية سرية لمنع هجمات التلاعب وتكرار الطلبات."
                      : "Every webhook dispatch is validated against cryptographic HMAC-SHA256 signatures, preventing spoofing and replay attacks."}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-white text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "امتثال لمعايير PCI-DSS" : "PCI-DSS Scope Reduction"}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    {isAr
                      ? "نصمم مسارات الدفع بحيث تقلص متطلبات التدقيق الأمني (SAQ-A) على شركتكم إلى الحد الأدنى الممكن قانوناً."
                      : "We design checkout flows to qualify your business for the simplest SAQ-A compliance tier, eliminating arduous PCI audit burdens."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: 4-STEP ONBOARDING & ENGINEERING JOURNEY
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "منهجية العمل والتنفيذ" : "THE 4-STEP ENGINEERING JOURNEY"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              {isAr ? (
                <>
                  من التدقيق الأولي إلى{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    التشغيل المباشر
                  </span>
                </>
              ) : (
                <>
                  From architecture audit to{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    production launch
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: isAr ? "دراسة الاحتياجات والتدقيق" : "Requirements & Audit",
                desc: isAr
                  ? "مراجعة نموذج أعمالك، حجم المعاملات المتوقع، العملات المستهدفة، وتحديد البوابات الأنسب لخفض العمولات."
                  : "We analyze transaction volume projections, target currencies, and business models to recommend optimal acquirers.",
              },
              {
                step: "02",
                title: isAr ? "اختيار البوابات والتعاقد" : "Acquirer Selection",
                desc: isAr
                  ? "مساعدتكم في إنهاء الإجراءات الفنية مع البوابات المرخصة وفتح حسابات التجار الرسمية باسم شركتكم."
                  : "Assisting your team in navigating onboarding with licensed payment providers and obtaining merchant credentials.",
              },
              {
                step: "03",
                title: isAr ? "التطوير في بيئة الاختبار" : "Sandbox Engineering",
                desc: isAr
                  ? "برمجة مسارات الدفع، محاكاة سيناريوهات الرفض والـ 3D Secure، وتأكيد موثوقية استلام الـ Webhook."
                  : "Developing checkout components, configuring webhooks, and simulating decline edge cases in staging environments.",
              },
              {
                step: "04",
                title: isAr ? "الإطلاق والمراقبة الحية" : "Live Launch & Monitoring",
                desc: isAr
                  ? "التحويل للإنتاج الفعلي مع مراقبة حية لمعدلات النجاح وسرعة الاستجابة وتقديم الدعم الفني المستمر."
                  : "Switching to live merchant keys, stress testing authorization velocity, and providing ongoing infrastructure monitoring.",
              },
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl relative space-y-4"
              >
                <span className="text-xs font-mono text-[#49CBDC] tracking-wider uppercase block">
                  STEP // {step.step}
                </span>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: GATEWAY FAQ ACCORDION
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-neutral-300">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "الأسئلة الشائعة حول بوابات الدفع" : "FREQUENTLY ASKED QUESTIONS"}</span>
            </div>
            <h2 className="text-3xl font-extralight text-white sm:text-4xl">
              {isAr ? "كل ما تود معرفته عن خدمات الدفع" : "Everything You Need to Know"}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "faq-1",
                q: isAr ? "ما هي بوابات الدفع التي تقوم سويب باي بدمجها؟" : "Which payment gateways does SWIPEBAY integrate?",
                a: isAr
                  ? "ندمج كافة البوابات الرائدة في الشرق الأوسط والعالم: في مصر (Paymob، فوري، كاش يو، أوباي)، وفي الخليج (ميسر، تاب، هايبرباي، تابي، تمارا)، إضافة للبوابات العالمية (Stripe، Checkout.com، PayPal). كما نربط المحافظ الإلكترونية وشبكة المدفوعات اللحظية إنستاباي."
                  : "We integrate all leading regional and international providers: In Egypt (Paymob, Fawry, OPay), in the GCC (Moyasar, Tap, HyperPay, Tabby, Tamara), alongside global providers (Stripe, Checkout.com, PayPal). We also support mobile wallets and instant banking networks.",
              },
              {
                id: "faq-2",
                q: isAr ? "هل تحتفظ سويب باي بأموال المعاملات أو تأخذ نسبة منها؟" : "Does SWIPEBAY hold transaction funds or take a percentage?",
                a: isAr
                  ? "لا إطلاقاً. أموال مبيعاتك تذهب مباشرة من بنك العميل إلى حسابك البنكي التجاري المسجل لدى بوابة الدفع المرخصة. تتقاضى سويب باي فقط أتعاب هندسية واستشارية ثابتة مقابل التطوير والتكامل، دون اقتطاع أي عمولة من إيراداتك."
                  : "No, never. All transaction proceeds settle directly into your verified corporate bank account with the licensed acquirer. SWIPEBAY charges fixed engineering and consulting fees for architecture, implementation, and maintenance; we take zero cut from your transaction revenue.",
              },
              {
                id: "faq-3",
                q: isAr ? "كم يستغرق ربط واختبار بوابة الدفع في المنصة؟" : "How long does a typical payment gateway integration take?",
                a: isAr
                  ? "يعتمد ذلك على نوع البنية: التكامل القياسي للمتاجر والصفحات المستضافة يستغرق عادة من 5 إلى 10 أيام عمل. بينما الأنظمة المعقدة متعددة البوابات (Multi-Acquirer Orchestration) ومزامنة الفروع تتراوح بين أسبوعين إلى 4 أسابيع بما في ذلك اختبارات الأمان والضغط."
                  : "Standard e-commerce integrations take 5 to 10 business days. Complex multi-acquirer orchestration engines with automated ERP reconciliation and omnichannel POS sync typically take 2 to 4 weeks, including security audits and failover stress testing.",
              },
              {
                id: "faq-4",
                q: isAr ? "كيف تتعاملون مع أمان البطاقات ومعايير PCI-DSS؟" : "How do you handle card security and PCI-DSS compliance?",
                a: isAr
                  ? "نعتمد هندسة التوكنز والحقول المستضافة (Tokenization & Hosted Fields). يعني هذا أن بيانات البطاقة تدخل مباشرة من متصفح العميل إلى خوادم البوابة المشفرة دون المرور عبر خوادم موقعك، مما يعفيك قانونياً من أعباء شهادات PCI المعقدة ويوفر أقصى حماية لعملائك."
                  : "We utilize tokenized hosted fields and secure iframe components. Cardholder data is sent directly from the customer's browser to the acquirer's encrypted vault without ever traversing your application servers. This places your business in the simplified SAQ-A compliance scope.",
              },
              {
                id: "faq-5",
                q: isAr ? "هل يمكن قبول الدفع بعملات متعددة (دولار، يورو، ريال، درهم)؟" : "Can we accept payments in multiple currencies (USD, EUR, SAR, AED)?",
                a: isAr
                  ? "نعم، نبرمج المنظومة لتحديد العملة المناسبة تلقائياً حسب دولة العميل، أو السماح له باختيار عملة الدفع المفضلة، مع الربط ببوابات تدعم التسوية المباشرة بالعملات الأجنبية لتفادي خسائر فروق الصرف."
                  : "Yes. We configure multi-currency detection and dynamic currency conversion, allowing international customers to pay in their domestic currencies while settling into your preferred settlement currency to minimize foreign exchange losses.",
              },
            ].map((item) => {
              const isOpen = openFaq[item.id]
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left rtl:text-right text-white hover:text-[#49CBDC] transition-colors"
                  >
                    <span className="text-base font-normal">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#49CBDC]" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: FINAL HIGH-IMPACT GATEWAY CTA
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
                <span>{isAr ? "ابدأ اليوم مع مهندسي المدفوعات" : "ELEVATE YOUR PAYMENT INFRASTRUCTURE"}</span>
              </div>

              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    توقف عن خسارة العملاء أثناء الدفع.{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      ابنِ مسار دفع فائق التحويل اليوم.
                    </span>
                  </>
                ) : (
                  <>
                    Stop losing customers at checkout.{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      Build a frictionless payment pipeline.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {isAr
                  ? "ناقش متطلبات الربط، العملات، وأفضل البوابات المناسبة لنشاطك التجاري في جلسة استشارية فنية مع خبرائنا."
                  : "Discuss acquirer selection, webhook architectures, and fraud prevention strategies in an engineering consultation with our payment leads."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-9 text-black font-semibold"
                >
                  <Link href="/contact">
                    {isAr ? "احجز جلسة استشارية للمدفوعات" : "Book Payment Architecture Session"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-9"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {isAr ? "محادثة فورية عبر واتساب" : "Chat on WhatsApp"}
                  </a>
                </Button>
              </div>

              <div className="pt-6 text-xs text-neutral-400 font-light">
                {isAr
                  ? "نساعدك في اختيار البوابات الأقل عمولة والأكثر استقراراً لقطاعك التجاري."
                  : "We advise on minimizing transaction processing fees and optimizing approval ratios."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
