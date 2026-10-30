"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import { BRAND_CONFIG } from "@/lib/brand"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import {
  ENTERPRISE_PACKAGES,
  ENTERPRISE_BUSINESS_NEEDS,
  CONFIGURATOR_SECTORS,
  CONFIGURATOR_OBJECTIVES,
  CONFIGURATOR_SCOPES,
  ENTERPRISE_PROCESS_STEPS,
  ENTERPRISE_FAQS,
  EnterprisePackage,
} from "@/lib/enterprise"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Star,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  CheckCircle2,
  Check,
  ShieldCheck,
  Building2,
  Layers,
  Code2,
  Workflow,
  Server,
  CreditCard,
  Palette,
  TrendingUp,
  Compass,
  Utensils,
  GraduationCap,
  Briefcase,
  Sliders,
  ChevronDown,
  HelpCircle,
  Mail,
  Zap,
  Activity,
  ChevronRight,
  ChevronLeft,
  Cpu,
  RefreshCw,
  Clock,
  ExternalLink,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface EnterpriseContentProps {
  locale: Locale
  dict: Dictionary
}

export function EnterpriseContent({
  locale: initialLocale,
  dict: initialDict,
}: EnterpriseContentProps) {
  const { locale: currentLocale, dictionary: clientDict } = useLanguage()
  const locale = currentLocale || initialLocale
  const dict = clientDict || initialDict
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  // Section 02: Business Needs Active Tab
  const [activeNeedIndex, setActiveNeedIndex] = useState(0)

  // Section 04: Configurator State
  const [configStep, setConfigStep] = useState<number>(1)
  const [selectedSector, setSelectedSector] = useState<string>("hospitality-tourism")
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([
    "launch-platform",
    "automate-operations",
  ])
  const [selectedServiceSlugs, setSelectedServiceSlugs] = useState<string[]>([
    "web-app-development",
    "cloud-infrastructure",
  ])
  const [selectedScope, setSelectedScope] = useState<string>("multi-service")
  const [prefilledBundleId, setPrefilledBundleId] = useState<string | null>(null)

  // Section 08: FAQ Accordion State
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({
    "efaq-1": true,
  })

  const toggleFaq = (id: string) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Helper to prefill bundle into configurator
  const handleSelectBundle = (pkg: EnterprisePackage) => {
    setPrefilledBundleId(pkg.id)
    setSelectedServiceSlugs(pkg.suggestedServices)
    setConfigStep(3) // Jump to step 3 to view & customize services
    const configuratorElem = document.getElementById("configurator")
    if (configuratorElem) {
      configuratorElem.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Toggle Objective in Step 2
  const toggleObjective = (id: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Toggle Service in Step 3
  const toggleService = (slug: string) => {
    setSelectedServiceSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  // Generate formatted WhatsApp message payload
  const sectorObj = CONFIGURATOR_SECTORS.find((s) => s.id === selectedSector)
  const sectorTitle = sectorObj ? sectorObj.label[locale] : selectedSector

  const objectivesTitles = selectedObjectives
    .map((objId) => {
      const found = CONFIGURATOR_OBJECTIVES.find((o) => o.id === objId)
      return found ? found.label[locale] : objId
    })
    .join(isAr ? "، " : ", ")

  const servicesTitles = selectedServiceSlugs
    .map((slug) => {
      const found = SWIPEBAY_SERVICES.find((s) => s.slug === slug)
      return found ? found[locale].title : slug
    })
    .join(isAr ? "، " : ", ")

  const scopeObj = CONFIGURATOR_SCOPES.find((s) => s.id === selectedScope)
  const scopeTitle = scopeObj ? scopeObj.label[locale] : selectedScope

  const quoteMessage = isAr
    ? `مرحباً سويب باي، قمت بتخصيص حلول شركتنا عبر أداة Build Your Solution:\n\n• القطاع: ${sectorTitle}\n• الأهداف: ${objectivesTitles || "غير محدد"}\n• الخدمات المطلوبة (${selectedServiceSlugs.length}): ${servicesTitles || "غير محدد"}\n• نطاق التعاقد: ${scopeTitle}\n\nأود مناقشة المقترح الفني وعرض السعر المخصص.`
    : `Hello Swipebay, I configured our custom solution via the Build Your Solution tool:\n\n• Sector: ${sectorTitle}\n• Objectives: ${objectivesTitles || "Not specified"}\n• Services Requested (${selectedServiceSlugs.length}): ${servicesTitles || "Not specified"}\n• Scope: ${scopeTitle}\n\nI would like to receive an architectural scope and custom commercial quote.`

  const whatsappQuoteUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    quoteMessage
  )}`

  const contactPageUrl = `/contact?sector=${encodeURIComponent(
    selectedSector
  )}&services=${encodeURIComponent(selectedServiceSlugs.join(","))}&scope=${encodeURIComponent(
    selectedScope
  )}`

  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name) {
      case "Palette":
        return Palette
      case "Code2":
        return Code2
      case "TrendingUp":
        return TrendingUp
      case "Workflow":
        return Workflow
      case "Sparkles":
        return Sparkles
      case "Server":
        return Server
      case "CreditCard":
        return CreditCard
      case "Compass":
        return Compass
      case "Utensils":
        return Utensils
      case "GraduationCap":
        return GraduationCap
      case "Briefcase":
        return Briefcase
      default:
        return Building2
    }
  }

  return (
    <div className="relative space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: ENTERPRISE HERO (Matching the reference layout & avatar3 model)
          ========================================================================= */}
      <section className="relative pt-6 pb-4 sm:pt-12 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Centered Grand Title (Matches reference header) */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>
                {isAr ? "حلول المؤسسات وحزم الأعمال المخصصة" : "FLEXIBLE ENTERPRISE SOLUTIONS & PACKAGES"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              {isAr ? (
                <>
                  تمكين المؤسسات والشركات الرائدة{" "}
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    بحلول رقمية وهندسية مبتكرة.
                  </span>
                </>
              ) : (
                <>
                  Empowering Brands Through{" "}
                  <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                    Creative Enterprise Solutions.
                  </span>
                </>
              )}
            </h1>
          </div>

          {/* 3-Column Symmetrical Hero Stage (Flanked layout matching reference) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mt-8 sm:mt-12">
            {/* Left Flanking Column */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#49CBDC]">
                <span>● ARCHITECTURAL RIGOR</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {isAr
                  ? "من الهندسة البرمجية المخصصة إلى صياغة الهويات المؤسسية والبنية السحابية، نطور منظومات رقمية مرنة تتكامل بسلاسة مع أهدافك التجارية وتدفع نمو أعمالك المستدام."
                  : "From bespoke software architecture to high-trust branding and cloud infrastructure, we deliver innovative strategies that elevate your enterprise and drive measurable growth."}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 px-6 text-xs sm:text-sm font-medium"
                >
                  <a href="#configurator" className="inline-flex items-center gap-2">
                    <span>{isAr ? "خصص حزمة أعمالك" : "Build Your Solution"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column (avatar3 with Arched Pedestal & Overlapping Dual CTA Pill) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[506/740]">
                <Image
                  src="/images/avatar3.png"
                  alt="SWIPEBAY Enterprise Solutions"
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
                    {isAr ? "ابدأ مشروعك" : "Start Your Project"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="h-8 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-medium"
                >
                  <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                    <WhatsAppIcon className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "تواصل معنا" : "Let's Collaborate"}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Flanking Column (Trust & Star Rating Callout) */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-4 order-3">
              {/* 5 Stars Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#49CBDC] text-[#49CBDC] drop-shadow-[0_0_6px_rgba(73,203,220,0.6)]" />
                ))}
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? "10+ سنوات" : "10+ Years"}
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "سجل أعمال موثق للمؤسسات" : "Enterprise Experience"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "عقود تشغيل ومستوى خدمة 99.98%" : "99.98% SLA Availability"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "مقرات هندسية بالقاهرة والرياض" : "Cairo & Riyadh Hubs"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "أكواد برمجية مخصصة 100%" : "100% Configurable Scope"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Impact & Trust Strip (The 4-Metric Dark Glass Bar from reference) */}
          <div className="rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] mt-12 sm:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/10">
              <div className="space-y-1 pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  50+
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  {isAr ? "شركات ومؤسسات رائدة" : "Enterprise Platforms"}
                </div>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  10+
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  {isAr ? "سنوات خبرة موثقة" : "Years Experience"}
                </div>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#49CBDC] tracking-tight">
                  99.98%
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  {isAr ? "جاهزية البنية السحابية" : "Cloud SLA Uptime"}
                </div>
              </div>

              <div className="space-y-1 pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  {isAr ? "معمارية برمجية مخصصة" : "Bespoke Architecture"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: SOLUTIONS FOR DIFFERENT BUSINESS NEEDS
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
              <span>{isAr ? "استكشاف الحلول حسب الأهداف" : "OBJECTIVE-DRIVEN SOLUTIONS"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
              {isAr ? (
                <>
                  حلول هندسية مصممة لمعالجة{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    أهدافك التجارية الحقيقية
                  </span>
                </>
              ) : (
                <>
                  Engineered solutions aligned with{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    real enterprise objectives
                  </span>
                </>
              )}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              {isAr
                ? "حدد الهدف الاستراتيجي الذي تسعى شركتك لتحقيقه، واستكشف المنظومة البرمجية والإبداعية الأنسب لإنجازه."
                : "Select the strategic milestone your organization aims to achieve and discover the connected capabilities required to deliver it."}
            </p>
          </div>

          {/* Interactive Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-3">
              {ENTERPRISE_BUSINESS_NEEDS.map((need, idx) => {
                const NeedIcon = getIcon(need.icon)
                const isSelected = activeNeedIndex === idx
                return (
                  <button
                    key={need.id}
                    type="button"
                    onClick={() => setActiveNeedIndex(idx)}
                    className={`w-full text-left rtl:text-right p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                      isSelected
                        ? "border-[#49CBDC] bg-[#49CBDC]/10 text-white shadow-[0_0_20px_rgba(73,203,220,0.15)]"
                        : "border-white/10 bg-black/60 text-neutral-300 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#49CBDC] text-black"
                          : "bg-white/5 border border-white/10 text-neutral-400"
                      }`}
                    >
                      <NeedIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{need.title[locale]}</h4>
                      <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-1">
                        {need.shortDescription[locale]}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Active Detail Showcase */}
            <div className="lg:col-span-7">
              {(() => {
                const currentNeed = ENTERPRISE_BUSINESS_NEEDS[activeNeedIndex]
                const ActiveIcon = getIcon(currentNeed.icon)

                return (
                  <div className="rounded-3xl border border-white/15 bg-black/70 p-8 sm:p-12 backdrop-blur-2xl space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-48 w-48 bg-[#49CBDC]/10 blur-3xl pointer-events-none" />

                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC]">
                        <ActiveIcon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white">
                        {currentNeed.title[locale]}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                        {currentNeed.shortDescription[locale]}
                      </p>
                    </div>

                    {/* Strategic Benefit Callout */}
                    <div className="rounded-2xl border border-purple-500/30 bg-purple-950/30 p-5 space-y-1">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-purple-300 block">
                        {isAr ? "الأثر الاستراتيجي المباشر:" : "STRATEGIC IMPACT:"}
                      </span>
                      <p className="text-xs text-purple-100 font-light leading-relaxed">
                        {currentNeed.strategicBenefit[locale]}
                      </p>
                    </div>

                    {/* Connected SWIPEBAY Services */}
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block">
                        {isAr ? "الخدمات المعتمدة المتصلة بهذا الهدف:" : "CONNECTED VERIFIED CAPABILITIES:"}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentNeed.connectedServiceSlugs.map((slug) => {
                          const srv = SWIPEBAY_SERVICES.find((s) => s.slug === slug)
                          if (!srv) return null
                          return (
                            <Link
                              key={srv.id}
                              href={`/services/${srv.slug}`}
                              className="group rounded-xl border border-white/10 bg-white/5 p-3.5 hover:border-[#49CBDC]/50 transition-all flex items-center justify-between"
                            >
                              <span className="text-xs font-medium text-white group-hover:text-[#49CBDC] transition-colors">
                                {srv[locale].title}
                              </span>
                              <ArrowDiag className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: ENTERPRISE PACKAGES (SOLUTION BUNDLES)
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{isAr ? "حزم الحلول المتكاملة المقترحة" : "PROPOSED SOLUTION BUNDLES"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
              {isAr ? (
                <>
                  منظومات عمل متناسقة{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    كنقطة انطلاق مخصصة
                  </span>
                </>
              ) : (
                <>
                  Coordinated solution bundles as a{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                    consultation starting point
                  </span>
                </>
              )}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              {isAr
                ? "حزم مرنة مقترحة تجمع الخدمات الأكثر تكاملاً معاً. لا نفرض قوالب جامدة أو أسعاراً مصطنعة، بل نعتبرها أساساً نخصصه حسب نطاق مشروعك الفعلي."
                : "Proposed starter bundles combining complementary disciplines. These represent configurable starting points tailored to your real enterprise scope, not fixed off-the-shelf packages."}
            </p>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENTERPRISE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-xl hover:border-[#49CBDC]/50 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-white">{pkg.name[locale]}</h3>
                    <p className="text-xs text-[#49CBDC] font-mono mt-1">
                      {pkg.tagline[locale]}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {pkg.description[locale]}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 block">
                      {isAr ? "أبرز مخرجات الحزمة:" : "Key Deliverables Included:"}
                    </span>
                    <ul className="space-y-2 text-xs text-neutral-300 font-light">
                      {pkg.highlights[locale].map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Services Tags */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 block">
                      {isAr ? "الخدمات المتضمنة:" : "Suggested Services:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.suggestedServices.map((slug) => {
                        const srv = SWIPEBAY_SERVICES.find((s) => s.slug === slug)
                        return (
                          <span
                            key={slug}
                            className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] text-neutral-300"
                          >
                            {srv ? srv[locale].title : slug}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-center text-xs text-neutral-400 font-mono">
                    {pkg.pricingModel[locale]}
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleSelectBundle(pkg)}
                    className="w-full text-white font-medium hover:text-black cursor-pointer"
                  >
                    <span>{isAr ? "تخصيص هذه الحزمة" : "Configure This Bundle"}</span>
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: BUILD YOUR SOLUTION (SIGNATURE INTERACTIVE CONFIGURATOR)
          ========================================================================= */}
      <section id="configurator" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#49CBDC]/30 bg-gradient-to-b from-neutral-900/90 via-black to-neutral-950 p-6 sm:p-12 md:p-16 backdrop-blur-2xl shadow-[0_16px_48px_rgba(73,203,220,0.1)] space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-medium text-[#49CBDC]">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "مُهندس الحلول المخصص" : "CUSTOM SOLUTION BUILDER"}</span>
              </div>
              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    ابنِ منظومة مشروعك في{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      خطوات بسيطة
                    </span>
                  </>
                ) : (
                  <>
                    Build your custom solution in{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      few intuitive steps
                    </span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                {isAr
                  ? "حدد قطاعك، أهدافك، والخدمات المطلوبة لاستخراج ملخص فني وطلب مقترح تجاري مخصص مباشرة."
                  : "Select your sector, objectives, and desired capabilities to formulate an architecture blueprint and request a custom commercial quote."}
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span>{isAr ? `المرحلة ${configStep} من 5` : `Step ${configStep} of 5`}</span>
                <span className="text-[#49CBDC]">
                  {configStep === 1 && (isAr ? "اختيار القطاع" : "Sector")}
                  {configStep === 2 && (isAr ? "الأهداف التجارية" : "Objectives")}
                  {configStep === 3 && (isAr ? "اختيار الخدمات" : "Capabilities")}
                  {configStep === 4 && (isAr ? "نطاق التعاقد" : "Scope")}
                  {configStep === 5 && (isAr ? "المراجعة وطلب العرض" : "Review & Request")}
                </span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-[#49CBDC] transition-all duration-300 rounded-full"
                  style={{ width: `${(configStep / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Sector Selection */}
            {configStep === 1 && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-light text-white">
                    {isAr ? "ما هو القطاع التجاري لمؤسستك؟" : "Select Your Business Sector"}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {isAr
                      ? "نطوع الهندسة البرمجية ومسارات الدفع وفق المعايير والواقع الاقتصادي لكل قطاع."
                      : "We adapt system architecture to match the regulatory and commercial realities of your sector."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CONFIGURATOR_SECTORS.map((sector) => {
                    const SectorIcon = getIcon(sector.icon)
                    const isSelected = selectedSector === sector.id
                    return (
                      <button
                        key={sector.id}
                        type="button"
                        onClick={() => setSelectedSector(sector.id)}
                        className={`text-left rtl:text-right p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                          isSelected
                            ? "border-[#49CBDC] bg-[#49CBDC]/10 text-white shadow-[0_0_16px_rgba(73,203,220,0.2)]"
                            : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <SectorIcon
                            className={`h-5 w-5 ${isSelected ? "text-[#49CBDC]" : "text-neutral-400"}`}
                          />
                          {isSelected && <Check className="h-4 w-4 text-[#49CBDC]" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">{sector.label[locale]}</h4>
                          <p className="text-xs text-neutral-400 font-light mt-1">
                            {sector.description[locale]}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Objectives Selection (Multi-select) */}
            {configStep === 2 && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-light text-white">
                    {isAr ? "ما هي أهدافكم التجارية الرئيسية؟ (اختر واحداً أو أكثر)" : "Select Your Primary Business Objectives (Multi-select)"}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {isAr
                      ? "يمكنك تحديد أكثر من هدف لتشكيل حزمة متكاملة تلبي تطلعات النمو لديك."
                      : "You can select multiple objectives to configure an interconnected solution."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CONFIGURATOR_OBJECTIVES.map((obj) => {
                    const ObjIcon = getIcon(obj.icon)
                    const isSelected = selectedObjectives.includes(obj.id)
                    return (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => toggleObjective(obj.id)}
                        className={`text-left rtl:text-right p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                          isSelected
                            ? "border-[#49CBDC] bg-[#49CBDC]/10 text-white shadow-[0_0_16px_rgba(73,203,220,0.15)]"
                            : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-[#49CBDC] text-black"
                              : "bg-white/5 border border-white/10 text-neutral-400"
                          }`}
                        >
                          <ObjIcon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white">{obj.label[locale]}</h4>
                            {isSelected && <Check className="h-4 w-4 text-[#49CBDC]" />}
                          </div>
                          <p className="text-xs text-neutral-400 font-light mt-1">
                            {obj.description[locale]}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Services Selection (10 Services) */}
            {configStep === 3 && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-light text-white">
                    {isAr ? "حدد التخصصات والخدمات المطلوبة" : "Select Required Services & Capabilities"}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {isAr
                      ? "اختر من خدمات سويب باي العشر المعتمدة. يمكنك الجمع بين أي عدد من التخصصات."
                      : "Choose from SWIPEBAY's ten core disciplines. Combine capabilities freely."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SWIPEBAY_SERVICES.map((srv) => {
                    const isSelected = selectedServiceSlugs.includes(srv.slug)
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.slug)}
                        className={`text-left rtl:text-right p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? "border-[#49CBDC] bg-[#49CBDC]/10 text-white shadow-[0_0_12px_rgba(73,203,220,0.15)]"
                            : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-neutral-400">0{srv.order}</span>
                            <h4 className="text-sm font-medium text-white">{srv[locale].title}</h4>
                          </div>
                          <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-1">
                            {srv[locale].shortDescription}
                          </p>
                        </div>
                        <div
                          className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? "bg-[#49CBDC] border-[#49CBDC] text-black"
                              : "border-white/20 bg-white/5"
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Engagement Scope */}
            {configStep === 4 && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-light text-white">
                    {isAr ? "ما هو نطاق التعاقد والجدول الزمني المفضل؟" : "Choose Engagement Scope & Framework"}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {isAr
                      ? "نوفر نماذج مرنة تبدأ من المشاريع المحددة وحتى الشراكات الاستراتيجية المستمرة."
                      : "We structure engagements from focused stage-based deliveries to continuous strategic partnerships."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CONFIGURATOR_SCOPES.map((scope) => {
                    const isSelected = selectedScope === scope.id
                    return (
                      <button
                        key={scope.id}
                        type="button"
                        onClick={() => setSelectedScope(scope.id)}
                        className={`text-left rtl:text-right p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                          isSelected
                            ? "border-[#49CBDC] bg-[#49CBDC]/10 text-white shadow-[0_0_16px_rgba(73,203,220,0.2)]"
                            : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[#49CBDC] uppercase">
                              {scope.timeline[locale]}
                            </span>
                            {isSelected && <Check className="h-4 w-4 text-[#49CBDC]" />}
                          </div>
                          <h4 className="text-base font-medium text-white">{scope.label[locale]}</h4>
                          <p className="text-xs text-neutral-400 font-light leading-relaxed">
                            {scope.description[locale]}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-white/5 text-[11px] text-neutral-400 font-light">
                          <strong className="text-neutral-300 font-medium">
                            {isAr ? "الأنسب لـ:" : "Best for:"}
                          </strong>{" "}
                          {scope.bestFor[locale]}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 5: Live Summary & Quote Request Action */}
            {configStep === 5 && (
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-light text-white">
                    {isAr ? "ملخص منظومة الحلول المخصصة" : "Review Your Custom Solution"}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    {isAr
                      ? "تم تجميع متطلباتك بدقة. يمكنك مراجعتها، أو التعديل عليها، ثم طلب المقترح التجاري فورياً."
                      : "Your architecture requirements have been assembled. Review the blueprint or dispatch your inquiry."}
                  </p>
                </div>

                {/* Blueprint Card */}
                <div className="rounded-3xl border border-white/15 bg-black/60 p-6 sm:p-8 backdrop-blur-xl space-y-6">
                  {/* Row 1: Sector & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase block mb-1">
                        {isAr ? "القطاع التجاري:" : "Domain Sector:"}
                      </span>
                      <span className="text-sm font-medium text-white">{sectorTitle}</span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase block mb-1">
                        {isAr ? "نطاق التعاقد:" : "Engagement Scope:"}
                      </span>
                      <span className="text-sm font-medium text-[#49CBDC]">{scopeTitle}</span>
                    </div>
                  </div>

                  {/* Row 2: Selected Objectives */}
                  <div className="space-y-2 pb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-neutral-400 uppercase block">
                      {isAr ? "الأهداف التجارية المحددة:" : "Target Objectives:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedObjectives.map((objId) => {
                        const found = CONFIGURATOR_OBJECTIVES.find((o) => o.id === objId)
                        return (
                          <span
                            key={objId}
                            className="rounded-full bg-purple-950/40 border border-purple-500/30 px-3 py-1 text-xs text-purple-200"
                          >
                            {found ? found.label[locale] : objId}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Row 3: Selected Services */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {isAr
                          ? `الخدمات المختارة (${selectedServiceSlugs.length}):`
                          : `Selected Services (${selectedServiceSlugs.length}):`}
                      </span>
                      <button
                        type="button"
                        onClick={() => setConfigStep(3)}
                        className="text-xs text-[#49CBDC] hover:underline"
                      >
                        {isAr ? "تعديل الخدمات" : "Edit Selection"}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedServiceSlugs.map((slug) => {
                        const srv = SWIPEBAY_SERVICES.find((s) => s.slug === slug)
                        return (
                          <span
                            key={slug}
                            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-neutral-200"
                          >
                            {srv ? srv[locale].title : slug}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Commercial Model Note */}
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-white/5 text-xs text-neutral-300 font-light flex items-center justify-between">
                    <span>{isAr ? "نموذج التسعير:" : "Pricing Framework:"}</span>
                    <span className="text-[#49CBDC] font-mono">
                      {isAr ? "عرض سعر مخصص حسب النطاق الفعلي" : "Custom Architecture Proposal"}
                    </span>
                  </div>
                </div>

                {/* Submission & Inquiry Handshakes (Zero Data Loss) */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="text-black font-semibold cursor-pointer"
                    >
                      <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                        {isAr ? "إرسال المواصفات عبر واتساب" : "Send Via WhatsApp"}
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="cursor-pointer"
                    >
                      <Link href={contactPageUrl}>
                        <Mail className="mr-2 h-4 w-4" />
                        {isAr ? "طلب المقترح عبر صفحة التواصل" : "Submit Via Contact Form"}
                      </Link>
                    </Button>
                  </div>
                  <p className="text-[11px] text-neutral-400 text-center font-light">
                    {isAr
                      ? "يتم تسليم كافة المتطلبات المحددة لمهندسي الحلول مباشرة مع الحفاظ التام على خياراتك."
                      : "Your full configuration is retained and handed directly to our solutions engineers."}
                  </p>
                </div>
              </div>
            )}

            {/* Configurator Navigation Controls (Back / Next) */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 max-w-3xl mx-auto">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setConfigStep((prev) => Math.max(1, prev - 1))}
                disabled={configStep === 1}
                className="text-xs text-neutral-400 hover:text-white disabled:opacity-30"
              >
                {isAr ? "← السابق" : "← Previous"}
              </Button>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <button
                    key={stepNum}
                    type="button"
                    onClick={() => setConfigStep(stepNum)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      configStep === stepNum
                        ? "bg-[#49CBDC] scale-125"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to step ${stepNum}`}
                  />
                ))}
              </div>

              {configStep < 5 ? (
                <Button
                  type="button"
                  onClick={() => setConfigStep((prev) => Math.min(5, prev + 1))}
                  className="text-black font-semibold px-6 text-xs cursor-pointer"
                >
                  <span>{isAr ? "التالي →" : "Next →"}</span>
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => setConfigStep(1)}
                  variant="outline"
                  className="text-xs text-neutral-300 hover:text-white cursor-pointer"
                >
                  {isAr ? "إعادة التخصيص" : "Reset Configuration"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: HOW WE WORK TOGETHER (5-STEP ENGAGEMENT JOURNEY)
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
              <span>{isAr ? "منهجية العمل والتعاقد" : "THE ENGAGEMENT LIFECYCLE"}</span>
            </div>
            <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
              {isAr ? (
                <>
                  من أول استشارة حتى{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    التشغيل المستمر والتوسع
                  </span>
                </>
              ) : (
                <>
                  From initial audit to{" "}
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                    continuous production scaling
                  </span>
                </>
              )}
            </h2>
            <p className="text-neutral-400 text-sm font-light">
              {isAr
                ? "خارطة طريق واضحة المعالم تضمن وضوح المخرجات، الشفافية المالية، والالتزام بأعلى معايير الجودة."
                : "A disciplined, transparent execution framework ensuring deliverable certainty, milestones, and architectural excellence."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ENTERPRISE_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl hover:border-[#49CBDC]/50 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#49CBDC] tracking-wider block">
                    STAGE // {step.step}
                  </span>
                  <h3 className="text-base font-normal text-white">{step.title[locale]}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {step.description[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: INDUSTRY ADAPTABILITY & VERIFIED PRACTICES
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/15 bg-neutral-950/80 p-8 sm:p-12 backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono text-[#49CBDC] uppercase tracking-wider block">
                  {isAr ? "تخصيص الحلول حسب القطاع" : "DOMAIN ADAPTABILITY"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white">
                  {isAr ? "حلول مصممة وفق الواقع الاقتصادي لقطاعك" : "Architected for Your Industry Dynamics"}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light">
                  {isAr
                    ? "استكشف كيف تترجم سويب باي حزم حلول الشركات لتخدم متطلبات الضيافة، المطاعم، والخدمات المهنية."
                    : "Discover how SWIPEBAY adapts enterprise packages to serve the unique operational rhythms of hospitality, dining, and advisory sectors."}
                </p>
              </div>

              <Link
                href="/solutions"
                className="text-xs font-medium text-[#49CBDC] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>{isAr ? "استعراض كافة حلول القطاعات" : "View All Domain Practices"}</span>
                <ArrowDiag className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/solutions/hospitality-tourism"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-[#49CBDC]/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300">PRACTICE // 01</span>
                    <Compass className="h-5 w-5 text-[#49CBDC]" />
                  </div>
                  <h4 className="text-xl font-normal text-white group-hover:text-[#49CBDC] transition-colors">
                    {isAr ? "قطاع الضيافة والسياحة والفنادق" : "Hospitality & Tourism Solutions"}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {isAr
                      ? "محركات حجز مباشرة، تقليل عمولات وكالات السفر الوسيطة، تكامل بوابات الدفع متعددة العملات، وتجارب نزلاء متميزة."
                      : "Direct booking engines, OTA commission reduction, multi-currency guest checkouts, and integrated concierge workflows."}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#49CBDC] font-medium pt-2">
                  <span>{isAr ? "استكشف حلول الضيافة" : "Explore Hospitality Practice"}</span>
                  <ArrowIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/solutions/restaurants-fnb"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-[#49CBDC]/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300">PRACTICE // 02</span>
                    <Utensils className="h-5 w-5 text-[#49CBDC]" />
                  </div>
                  <h4 className="text-xl font-normal text-white group-hover:text-[#49CBDC] transition-colors">
                    {isAr ? "قطاع المطاعم والأغذية والمشروبات" : "Restaurants & F&B Solutions"}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {isAr
                      ? "أتمتة نقاط البيع، مزامنة سلاسل الإمداد للفروع، طلبات الطاولات برمز QR، وخفض الهدر الغذائي بنسبة ملحوظة."
                      : "Enterprise POS automation, branch inventory synchronization, QR table ordering, and measurable kitchen waste reduction."}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#49CBDC] font-medium pt-2">
                  <span>{isAr ? "استكشف حلول المطاعم" : "Explore F&B Practice"}</span>
                  <ArrowIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: WHY A CONNECTED APPROACH MATTERS
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-black via-neutral-950 to-neutral-900 p-8 sm:p-12 md:p-16 backdrop-blur-2xl">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span>{isAr ? "القيمة الاستراتيجية للتكامل" : "THE STRATEGIC ADVANTAGE"}</span>
              </div>

              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
                {isAr ? (
                  <>
                    لماذا يُعد العمل مع شركة موحدة{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      أكثر كفاءة وربحية؟
                    </span>
                  </>
                ) : (
                  <>
                    Why a unified company approach delivers{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#49CBDC]">
                      superior enterprise outcomes
                    </span>
                  </>
                )}
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {isAr
                  ? "عندما تتولى وكالة تصميم الهوية، وتتولى شركة أخرى البرمجة، وفريق ثالث التسويق، تتشتت المسؤوليات وتحدث فجوات تقنية وتكاليف إضافية غير متوقعة. في سويب باي، يقود مهندسونا ومصممونا المنظومة ككتلة واحدة من البداية، لضمان تطابق الأداء والجماليات والأمان."
                  : "When visual identity, software code, marketing campaigns, and cloud hosting are outsourced to disconnected vendors, communication breaks down and costs spiral. SWIPEBAY eliminates vendor fragmentation by engineering every digital layer under unified architectural leadership."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
                <div className="space-y-1.5">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "تناغم التصميم والبرمجة" : "Zero Friction Handoffs"}</span>
                  </h4>
                  <p className="text-neutral-400 font-light">
                    {isAr
                      ? "المصممون والمطورون يعملون يداً بيد، مما يمنع التنازلات الجمالية أو التعقيدات البرمجية."
                      : "Designers and engineers collaborate from day zero, preventing compromises between vision and implementation."}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "مسؤولية تنفيذية واحدة" : "Single Accountability"}</span>
                  </h4>
                  <p className="text-neutral-400 font-light">
                    {isAr
                      ? "نقطة اتصال قيادية واحدة مسؤولة عن مواعيد التسليم، الجودة، واستقرار الأنظمة."
                      : "A dedicated technical director accountable for timelines, system uptime, and deliverable quality."}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#49CBDC]" />
                    <span>{isAr ? "استدامة واستقرار طويل المدى" : "Long-Term Maintainability"}</span>
                  </h4>
                  <p className="text-neutral-400 font-light">
                    {isAr
                      ? "كود نظيف ومعايير توثيق مؤسسية تتيح لمنصتك التوسع لسنوات دون الحاجة لإعادة بنائها."
                      : "Documented TypeScript codebases and cloud standards designed for multi-year scaling."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: ENTERPRISE FAQ ACCORDION
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
              <span>{isAr ? "الأسئلة الشائعة حول حلول الشركات" : "ENTERPRISE FAQ"}</span>
            </div>
            <h2 className="text-3xl font-extralight text-white sm:text-4xl">
              {isAr ? "كل ما تود معرفته عن التعاقد والتسعير" : "Commercial & Engagement Questions"}
            </h2>
          </div>

          <div className="space-y-4">
            {ENTERPRISE_FAQS.map((faq) => {
              const isOpen = openFaqs[faq.id]
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left rtl:text-right text-white hover:text-[#49CBDC] transition-colors"
                  >
                    <span className="text-base font-normal">{faq.q[locale]}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#49CBDC]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a[locale]}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/faq"
              className="text-xs font-medium text-[#49CBDC] hover:underline inline-flex items-center gap-1"
            >
              <span>{isAr ? "استعراض كافة الأسئلة الشائعة العامة" : "Visit General FAQ Knowledge Base"}</span>
              <ArrowDiag className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: ENTERPRISE CLOSING CTA
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
                <span>{isAr ? "جاهز لبناء حل مخصص لشركتك؟" : "READY FOR PURPOSE-BUILT ARCHITECTURE?"}</span>
              </div>

              <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl md:text-5xl">
                {isAr ? (
                  <>
                    لنبدأ في صياغة الحل المناسب{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      لطموحات مؤسستك اليوم.
                    </span>
                  </>
                ) : (
                  <>
                    Let us formulate the right solution for{" "}
                    <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC]">
                      your enterprise roadmap today.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {isAr
                  ? "ناقش متطلباتك مع فريقنا المعماري مباشرة. نقدم استشارات فنية واضحة ومقترحات مخصصة دون التزامات مسبقة."
                  : "Discuss your requirements directly with our software and creative directors. We provide transparent architectural scopes and custom proposals tailored to your timeline."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-9 text-black font-semibold"
                >
                  <a href="#configurator">
                    {isAr ? "ابدأ تخصيص الحلول" : "Build Your Solution"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-9"
                >
                  <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                    {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                  </a>
                </Button>
              </div>

              <div className="pt-6 text-xs text-neutral-400 font-light">
                {isAr
                  ? "مراجعة فنية للمتطلبات خلال 24 ساعة عمل رسمية."
                  : "Technical discovery response within 24 business hours."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

