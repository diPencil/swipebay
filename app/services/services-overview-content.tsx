"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import type { ServiceDefinition, ServiceCategory } from "@/lib/services"
import {
  Palette,
  Video,
  Code2,
  Briefcase,
  Megaphone,
  Sparkles,
  Workflow,
  Server,
  Mail,
  Cloud,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  Star,
  CheckCircle2,
  Layers,
  Shield,
  Zap,
  LucideIcon,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const ICON_MAP: Record<string, LucideIcon> = {
  Palette,
  Video,
  Code2,
  Briefcase,
  Megaphone,
  Sparkles,
  Workflow,
  Server,
  Mail,
  Cloud,
}

const SERVICE_SPEC_METRICS: Record<
  string,
  {
    en: { specValue: string; specLabel: string; badge: string }
    ar: { specValue: string; specLabel: string; badge: string }
  }
> = {
  "branding-design": {
    en: { specValue: "Complete System", specLabel: "Brand Architecture", badge: "Brand Identity" },
    ar: { specValue: "منظومة متكاملة", specLabel: "هيكلية الهوية", badge: "الهوية والتصميم" },
  },
  "media-production": {
    en: { specValue: "Cinema 4K / UHD", specLabel: "Production Quality", badge: "Commercial Media" },
    ar: { specValue: "سينمائي 4K / UHD", specLabel: "جودة الإنتاج", badge: "الإنتاج المرئي" },
  },
  "web-app-development": {
    en: { specValue: "Full-Stack Custom", specLabel: "Software Engine", badge: "Software Engineering" },
    ar: { specValue: "تطوير برمجي كامل", specLabel: "المعمارية البرمجية", badge: "الهندسة البرمجية" },
  },
  "business-consulting": {
    en: { specValue: "Strategic Advisory", specLabel: "Executive Scope", badge: "Executive Advisory" },
    ar: { specValue: "استشارات تنفيذية", specLabel: "الإطار الاستراتيجي", badge: "الاستشارات الاستراتيجية" },
  },
  "marketing": {
    en: { specValue: "Data-Driven ROI", specLabel: "Growth Metric", badge: "Growth Marketing" },
    ar: { specValue: "عائد أداء مقاس", specLabel: "نموذج النمو", badge: "التسويق والنمو" },
  },
  "ai-integration": {
    en: { specValue: "Domain LLM & RAG", specLabel: "AI Architecture", badge: "Applied AI" },
    ar: { specValue: "نماذج ذكاء مخصصة", specLabel: "معمارية الذكاء", badge: "الذكاء الاصطناعي" },
  },
  "automation": {
    en: { specValue: "Zero-Touch Ops", specLabel: "Pipeline Automation", badge: "Workflow Engine" },
    ar: { specValue: "أتمتة بدون تدخل", specLabel: "التدفق التشغيلي", badge: "محرك الأتمتة" },
  },
  "hosting-plans": {
    en: { specValue: "99.98% SLA", specLabel: "Cloud Availability", badge: "Cloud Hosting" },
    ar: { specValue: "جاهزية 99.98%", specLabel: "الاستقرار السحابي", badge: "الاستضافة السحابية" },
  },
  "email-plans": {
    en: { specValue: "DKIM / SPF Sealed", specLabel: "Security Protocol", badge: "Enterprise Email" },
    ar: { specValue: "حماية وتشفير عالي", specLabel: "معايير الأمان", badge: "البريد المؤسسي" },
  },
  "cloud-it-services": {
    en: { specValue: "99.99% High Availability", specLabel: "Enterprise SRE", badge: "Critical Cloud & IT" },
    ar: { specValue: "جاهزية 99.99%", specLabel: "استقرار البنية", badge: "البنية السحابية الحيوية" },
  },
}

interface ServicesOverviewContentProps {
  locale: Locale
  dict: Dictionary
  services: ServiceDefinition[]
  categories: Record<
    ServiceCategory,
    {
      id: ServiceCategory
      en: { name: string; description: string }
      ar: { name: string; description: string }
    }
  >
}

export function ServicesOverviewContent({
  locale,
  dict,
  services,
  categories,
}: ServicesOverviewContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all")
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight
  const exp = dict.servicesExperience

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory)

  const categoryKeys: ServiceCategory[] = ["creative", "engineering", "intelligence", "infrastructure"]

  // Architectural Synergy metadata for Section 02 (Cross-Pillar Reinforcement)
  const categorySynergyMeta: Record<
    ServiceCategory,
    {
      number: string
      accentHex: string
      avatar: string
      badgeEn: string
      badgeAr: string
      highlightEn: string
      highlightAr: string
      conduitEn: string
      conduitAr: string
      descEn: string
      descAr: string
    }
  > = {
    creative: {
      number: "01",
      accentHex: "#8b5cf6",
      avatar: "/images/avatar9.png",
      badgeEn: "Brand & Design",
      badgeAr: "الهوية والتصميم",
      highlightEn: "100% Bespoke Brand Systems",
      highlightAr: "نظم وهوية أصيلة 100%",
      conduitEn: "→ Feeds Design Tokens & UI Specs",
      conduitAr: "← يغذي مكونات التصميم والكود",
      descEn: "Every visual asset, brand system, and interactive interface is engineered with architectural rigor, ensuring seamless translation into production code.",
      descAr: "كل أصل بصري ومنظومة هوية وتجربة مستخدم نصممها وفق قواعد هيكلية دقيقة تضمن انتقالها بسلاسة لكود برمجي عالي الأداء.",
    },
    engineering: {
      number: "02",
      accentHex: "#49CBDC",
      avatar: "/images/avatar8.png",
      badgeEn: "Digital Engineering",
      badgeAr: "الهندسة البرمجية",
      highlightEn: "Sub-Second Latency & Strict Typing",
      highlightAr: "سرعة فائقة وأكواد محكمة",
      conduitEn: "→ Connects Logic to AI Pipelines",
      conduitAr: "← يربط المعمارية بأنظمة الذكاء",
      descEn: "We construct resilient software platforms and API integrations with strict typing, clean patterns, and sub-second execution speeds.",
      descAr: "نطور منصات الويب والموبايل وبوابات الدفع وفق معمارية برمجية نقية وآمنة، خالية من القوالب الجاهزة وتتحمل أعلى ضغط تشغيلي.",
    },
    intelligence: {
      number: "03",
      accentHex: "#8b5cf6",
      avatar: "/images/avatar12.png",
      badgeEn: "Applied AI",
      badgeAr: "الذكاء الاصطناعي",
      highlightEn: "Autonomous AI Workflows",
      highlightAr: "أتمتة ذكية لمسارات العمل",
      conduitEn: "→ Deploys Automations on Cloud",
      conduitAr: "← ينشر الأتمتة على السحابة",
      descEn: "We embed domain-specific AI models, automated workflows, and intelligent data pipelines to eliminate bottlenecks and multiply velocity.",
      descAr: "ندمج نماذج الذكاء الاصطناعي وأتمتة مسارات العمل لتقليل الاحتكاك التشغيلي ومضاعفة الإنتاجية وسرعة اتخاذ القرار.",
    },
    infrastructure: {
      number: "04",
      accentHex: "#49CBDC",
      avatar: "/images/avatar13.png",
      badgeEn: "Cloud & Reliability",
      badgeAr: "السحابة والاستقرار",
      highlightEn: "99.98% High Availability SLA",
      highlightAr: "جاهزية سحابية 99.98%",
      conduitEn: "↺ Guarantees 99.98% SLA Loop",
      conduitAr: "↺ يضمن استقرار المنظومة بالكامل",
      descEn: "Hardened Kubernetes clusters, secure VPC networks, business email systems, and tier-one cloud hosting that keeps operations bulletproof.",
      descAr: "بيئات سحابية معززة، خوادم مهيأة بأعلى معايير الحماية، إدارة بريد المؤسسات، وضمان استقرار تشغيلي مستمر بلا توقف.",
    },
  }

  return (
    <div className="space-y-24 pb-20 sm:space-y-32">
      {/* =========================================================================
          SECTION 01: SERVICES HERO (Flanked 3-Column Layout with avatar4 & Arched Pedestal)
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
              <span>{exp.heroBadge}</span>
            </div>

            {/* Editorial H1 with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              <span className="block text-white">{exp.heroTitle}</span>
              <span className="block mt-1 bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                {exp.heroHighlight}
              </span>
            </h1>
          </div>

          {/* 3-Column Symmetrical Hero Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mt-8 sm:mt-12">
            {/* Left Flanking Column */}
            <div className="lg:col-span-3 text-center lg:text-left rtl:lg:text-right space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#49CBDC]">
                <span>● CONNECTED CAPABILITIES</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {exp.heroSubtitle}
              </p>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-purple-400/50 backdrop-blur-md transition-all"
                >
                  <a href="#catalog" className="inline-flex items-center gap-2">
                    <span>{exp.ctaExplore}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar4 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar4 */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[390px] mx-auto aspect-[506/740]">
                <Image
                  src="/images/avatar4.png"
                  alt="SWIPEBAY Specialized Services"
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
                    href={BRAND_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#49CBDC]" />
                    <span>{exp.ctaConsultation}</span>
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
                  {isAr ? "10 تخصصات" : "10 Disciplines"}
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {isAr ? "شركة هندسية وإبداعية موحدة" : "Single Accountable Company"}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "أكواد برمجية مخصصة 100%" : "100% In-House Engineering"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "بناء أصيل بلا قوالب جاهزة" : "Zero Generic Templates"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "جاهزية سحابية ومستوى خدمة 99.98%" : "99.98% High Availability SLA"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Impact & Trust Strip (4-Metric Dark Glass Bar from reference) */}
          <div className="rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] mt-12 sm:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/10">
              <div className="space-y-1">
                <div className="font-mono text-3xl sm:text-4xl font-black text-[#49CBDC]">10</div>
                <div className="text-xs text-neutral-300 font-medium">
                  {isAr ? "مجالات تخصصية دقيقة" : "Specialized Disciplines"}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {isAr ? "تغطي دورة المنتج بالكامل" : "Full Product Lifecycle"}
                </div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-purple-300">04</div>
                <div className="text-xs text-neutral-300 font-medium">
                  {isAr ? "ركائز حلول متكاملة" : "Core Solution Pillars"}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {isAr ? "تصميم وهندسة وذكاء وسحابة" : "Design, Code, AI & Cloud"}
                </div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="text-xs text-neutral-300 font-medium">
                  {isAr ? "ملكية فكرية ونقل أكواد كامل" : "Full IP Ownership"}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {isAr ? "بلا أي ارتهان لموردين" : "Zero Vendor Lock-in"}
                </div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-[#49CBDC]">24/7</div>
                <div className="text-xs text-neutral-300 font-medium">
                  {isAr ? "استقرار سحابي وعقود SLA" : "High Availability SLA"}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {isAr ? "مراقبة مستمرة للأداء" : "Proactive Real-Time Monitoring"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: CONTINUOUS VALUE STREAM (Connected Cross-Pillar Reinforcement)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        {/* Section Header with Signature Dual-Tone Gradient */}
        <div className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Image
              src={BRAND_CONFIG.assets.favicon}
              alt={`${BRAND_CONFIG.name} icon`}
              width={16}
              height={16}
              className="h-3.5 w-3.5 object-contain"
            />
            <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">
              {exp.ecosystemBadge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
            <span className="block text-white">
              {isAr ? "كيف تتكامل منظومة تخصصاتنا" : "How Our Disciplines"}
            </span>
            <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
              {isAr ? "لتعزيز نمو أعمالك الرقمية." : "Reinforce One Another."}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-2xl mx-auto mt-4">
            {exp.ecosystemSubtitle}
          </p>
        </div>

        {/* 4-Stage Continuous Value Stream Grid with Integrated 3D Avatars (Reference Concept) */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Flow Line behind the cards */}
          <div className="hidden lg:block absolute top-10 inset-x-16 h-[2px] bg-gradient-to-r from-purple-500/25 via-[#49CBDC]/40 to-purple-500/25 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {categoryKeys.map((catKey, index) => {
              const catInfo = categories[catKey][locale]
              const catServices = services.filter((s) => s.category === catKey)
              const meta = categorySynergyMeta[catKey]
              const isLast = index === categoryKeys.length - 1

              return (
                <div key={catKey} className="relative group">
                  {/* Floating Transfer Conduit Arrow between cards (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -end-3.5 top-8 z-20 h-7 w-7 items-center justify-center rounded-full bg-neutral-950 border border-white/20 text-[#49CBDC] shadow-[0_0_15px_rgba(73,203,220,0.3)] group-hover:border-[#49CBDC] group-hover:shadow-[0_0_20px_rgba(73,203,220,0.6)] group-hover:scale-110 transition-all duration-300">
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </div>
                  )}

                  {/* Main Architectural Glass Monolith Card */}
                  <div className="relative h-full rounded-[28px] liquid-glass border border-white/12 p-6 flex flex-col justify-between transition-all duration-500 hover:border-[#49CBDC]/50 hover:shadow-[0_16px_50px_rgba(73,203,220,0.18)] hover:-translate-y-2 overflow-hidden">
                    {/* Ambient Corner Chromatic Glow */}
                    <div
                      className="absolute -top-12 -start-12 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-75"
                      style={{ backgroundColor: meta.accentHex }}
                    />

                    {/* Top Content Area */}
                    <div className="space-y-4 relative z-10">
                      {/* Top Row: Phase Tag + Icon Pod */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 px-3 py-1 text-[10px] font-mono font-bold tracking-wider text-purple-300 uppercase shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC] animate-pulse" />
                          {isAr ? `المرحلة ${meta.number}` : `PHASE ${meta.number}`}
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950/80 border border-white/15 text-[#49CBDC] shadow-[0_0_15px_rgba(73,203,220,0.12)] group-hover:border-[#49CBDC]/60 group-hover:scale-105 transition-all">
                          {catKey === "creative" && <Palette className="h-4 w-4 text-purple-300" />}
                          {catKey === "engineering" && <Code2 className="h-4 w-4 text-[#49CBDC]" />}
                          {catKey === "intelligence" && <Sparkles className="h-4 w-4 text-purple-300" />}
                          {catKey === "infrastructure" && <Server className="h-4 w-4 text-[#49CBDC]" />}
                        </div>
                      </div>

                      {/* Title & Category Badge */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-100 transition-colors leading-tight">
                          {catInfo.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#49CBDC] mt-1 tracking-wide">
                          {isAr ? meta.badgeAr : meta.badgeEn}
                        </p>
                      </div>

                      {/* Concise Value Description */}
                      <p className="text-xs sm:text-sm text-neutral-300/85 leading-relaxed line-clamp-3">
                        {isAr ? meta.descAr : meta.descEn}
                      </p>

                      {/* Strategic Highlight Badge */}
                      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-cyan-200/90 group-hover:border-[#49CBDC]/30 group-hover:bg-[#49CBDC]/[0.06] transition-all">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC] shrink-0" />
                        <span className="truncate">{isAr ? meta.highlightAr : meta.highlightEn}</span>
                      </div>
                    </div>

                    {/* Integrated 3D Avatar Centerpiece (Reference Concept) */}
                    <div className="relative mt-6 pt-2 w-full h-56 sm:h-64 flex items-end justify-center">
                      {/* Arched Soft Pedestal Backdrop */}
                      <div className="absolute inset-x-3 bottom-0 top-3 rounded-t-[90px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.05] border-t border-x border-white/12 backdrop-blur-md pointer-events-none group-hover:border-[#49CBDC]/35 transition-colors" />

                      {/* Ambient Radial Aura */}
                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 blur-2xl rounded-full pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                        style={{ backgroundColor: `${meta.accentHex}40` }}
                      />

                      {/* 3D Avatar Image */}
                      <div className="relative z-10 w-full h-full flex items-end justify-center">
                        <Image
                          src={meta.avatar}
                          alt={catInfo.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Bottom Action Pill: Seamlessly Filters & Scrolls into Catalog */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(catKey);
                        const el = document.getElementById("catalog");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative z-10 mt-5 w-full flex items-center justify-between rounded-full border border-white/10 bg-neutral-950/70 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white/90 hover:text-white group-hover:border-[#49CBDC]/40 group-hover:bg-[#49CBDC]/10 group-hover:text-[#49CBDC] transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                    >
                      <span className="truncate">
                        {isAr
                          ? `استعراض خدمات القسم (${catServices.length})`
                          : `Explore ${catInfo.name} (${catServices.length})`}
                      </span>
                      <ArrowDiag className="h-3.5 w-3.5 shrink-0 text-neutral-400 group-hover:text-[#49CBDC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 transition-transform ms-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Unbroken Loop Circuit Bar */}
        <div className="mt-8 sm:mt-10 rounded-2xl liquid-glass border border-white/15 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 text-[#49CBDC]">
              <Workflow className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {isAr ? "حلقة القيمة المتصلة (The Closed Reinforcement Loop)" : "The Unbroken Reinforcement Loop"}
              </div>
              <div className="text-[11px] text-neutral-400">
                {isAr
                  ? "التصميم يغذي الكود ──> والكود يغذي الذكاء ──> والذكاء يستقر في السحابة ──> والسحابة تعزز عائد الاستثمار وثقة العملاء."
                  : "Brand Feeds Code ──> Code Powers AI ──> AI Deploys on Cloud ──> Cloud Guarantees ROI & Trust."}
              </div>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-all shrink-0"
          >
            <a href="#catalog" className="inline-flex items-center gap-1.5">
              <span>{isAr ? "استعرض كافة الخدمات (10)" : "Explore All 10 Services"}</span>
              <ArrowIcon className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </section>

      {/* 3. Comprehensive Service Catalog & Interactive Filter */}
      <section id="catalog" className="container mx-auto px-4 max-w-7xl scroll-mt-24">
        <div className="mb-10 text-center space-y-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
              {exp.allDisciplinesBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {exp.allDisciplinesTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              {exp.allDisciplinesSubtitle}
            </p>
          </div>

          {/* Filter Pills - All on a Single Horizontal Row without Wrapping */}
          <div className="pt-2 w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-2.5 min-w-full px-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold transition-all ${selectedCategory === "all"
                    ? "bg-[#49CBDC] text-black shadow-[0_0_15px_rgba(73,203,220,0.3)]"
                    : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
              >
                {exp.categoryFilterAll}
              </button>
              {categoryKeys.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSelectedCategory(k)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold transition-all ${selectedCategory === k
                      ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {categories[k][locale].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 10 Services Reference Grid (3 - 3 - 3 - 1 Layout with Photographic Media & Specs) */}
        <div className="grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">
          {filteredServices.map((service, index) => {
            const IconComp = ICON_MAP[service.icon] || Code2
            const data = service[locale]
            const specMeta = SERVICE_SPEC_METRICS[service.slug]?.[locale]
            const isWide = filteredServices.length === 10 && index === 9

            // Row 4: Wide horizontal card for 10th service (Critical Cloud & IT)
            if (isWide) {
              return (
                <div
                  key={service.id}
                  className="col-span-1 md:col-span-2 lg:col-span-3 group relative rounded-[28px] p-5 sm:p-7 lg:p-8 liquid-glass-enhanced border border-purple-500/30 hover:border-[#49CBDC]/50 transition-all duration-500 hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_rgba(73,203,220,0.2)] overflow-hidden"
                >
                  {/* Background ambient lighting */}
                  <div className="absolute -top-24 -end-24 w-80 h-80 bg-[#49CBDC]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#49CBDC]/15 transition-all" />
                  <div className="absolute -bottom-24 -start-24 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Start: Details, Metrics & Actions (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* Eyebrow badge */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 px-3 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC] animate-pulse" />
                          {categories[service.category][locale].name}
                        </span>
                        <span className="font-mono text-xs font-bold tracking-wider text-neutral-400">
                          {isAr ? "الخدمة المؤسسية // 10" : "PRACTICE // 10"}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-cyan-100 transition-colors leading-tight">
                          {data.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-[#49CBDC] mt-2 tracking-wide">
                          {data.tagline}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                        {data.shortDescription}
                      </p>

                      {/* Bottom specs & CTA */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-5 sm:gap-6">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#49CBDC]">
                              <Layers className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white leading-tight">
                                {data.deliverables.length} {isAr ? "مخرجات معتمدة" : "Deliverables"}
                              </div>
                              <div className="text-[10px] text-neutral-400">
                                {isAr ? "تسليم بنية كاملة" : "Full Scope"}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-purple-400">
                              <Shield className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white leading-tight">
                                {isAr ? "جاهزية 99.99%" : "99.99% High Availability"}
                              </div>
                              <div className="text-[10px] text-neutral-400">
                                {isAr ? "استقرار تشغيلي مستمر" : "Enterprise SRE Tier"}
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#49CBDC] px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(73,203,220,0.35)] hover:bg-[#67D6E4] hover:scale-105 transition-all duration-300 relative z-30"
                        >
                          <span>{exp.viewDetails}</span>
                          <ArrowIcon className="h-3.5 w-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* End: Image Showcase (7 cols - Widened container to reveal full 2097x750 graphic) */}
                    <div className="lg:col-span-7 relative w-full h-[200px] sm:h-[240px] lg:h-[270px] rounded-2xl overflow-hidden bg-neutral-950 border border-white/15 shadow-2xl">
                      <Image
                        src={service.image}
                        alt={data.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 pointer-events-none" />

                      {/* Floating pill badge on image - Left Side */}
                      <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 rounded-full bg-black/75 border border-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-lg z-20">
                        <Zap className="h-3.5 w-3.5 text-[#49CBDC]" />
                        <span>{isAr ? "بنية سحابية حيوية" : "Critical Infrastructure"}</span>
                      </div>

                      {/* Floating circular action button on image - Right Side */}
                      <Link
                        href={`/services/${service.slug}`}
                        aria-label={data.title}
                        className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 hover:bg-[#49CBDC] border border-white/30 text-white hover:text-black backdrop-blur-md shadow-lg group-hover:bg-[#49CBDC] group-hover:text-black group-hover:scale-110 transition-all duration-300 z-30"
                      >
                        <ArrowDiag className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }

            // Rows 1 - 3: Standard Vertical Cards (3x3 grid)
            return (
              <div
                key={service.id}
                className="group relative rounded-[26px] p-3 sm:p-3.5 liquid-glass border border-white/12 hover:border-[#49CBDC]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(73,203,220,0.18)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background corner ambient glow on hover */}
                <div className="absolute -top-12 -end-12 w-32 h-32 bg-[#49CBDC]/0 group-hover:bg-[#49CBDC]/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                {/* Inner Top Photographic Image Frame (Anchored to Left to show complete typography & artwork) */}
                <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                  <Image
                    src={service.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 pointer-events-none" />

                  {/* Top-Left Category Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/75 border border-white/20 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-white backdrop-blur-md shadow-lg z-20">
                    <IconComp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#49CBDC]" />
                    <span>{specMeta?.badge || categories[service.category][locale].name}</span>
                  </div>

                  {/* Top-Right Floating Circular Action Button (Positioned clearly on the right) */}
                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={data.title}
                    className="absolute top-2.5 right-2.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20 hover:bg-[#49CBDC] border border-white/30 text-white hover:text-black backdrop-blur-md shadow-lg group-hover:bg-[#49CBDC] group-hover:text-black group-hover:scale-110 transition-all duration-300 z-30"
                  >
                    <ArrowDiag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>

                {/* Content Area Below Image */}
                <div className="px-1.5 pt-4 pb-1 flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/services/${service.slug}`} className="block">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#49CBDC] transition-colors leading-snug">
                        {data.title}
                      </h3>
                    </Link>
                    <div className="text-xs font-semibold text-[#49CBDC] mt-1 tracking-wide">
                      {data.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed mt-2 line-clamp-2 min-h-[38px]">
                      {data.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Divided Specifications Bar */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 grid grid-cols-2 gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#49CBDC]">
                        <Layers className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-tight truncate">
                          {data.deliverables.length} {isAr ? "مخرجات" : "Deliverables"}
                        </div>
                        <div className="text-[10px] text-neutral-400 truncate">
                          {isAr ? "نطاق المخرجات" : "Key Scope"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-purple-400">
                        <Shield className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-tight truncate">
                          {specMeta?.specValue || (isAr ? "معيار مؤسسي" : "Enterprise Standard")}
                        </div>
                        <div className="text-[10px] text-neutral-400 truncate">
                          {specMeta?.specLabel || (isAr ? "المعيار الهندسي" : "Architecture")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Card Clickable Overlay Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={data.title}
                />
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Strategic Consulting Banner */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="rounded-3xl liquid-glass-enhanced border border-purple-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#49CBDC] uppercase">
                {exp.detailCtaBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {exp.detailCtaTitle}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                {exp.detailCtaSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <Button
                asChild
                className="rounded-full bg-[#49CBDC] px-6 py-3 text-xs font-semibold text-black shadow-[0_0_20px_rgba(73,203,220,0.35)] hover:bg-[#67D6E4] hover:scale-[1.02] transition-all text-center"
              >
                <a
                  href={BRAND_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{exp.detailCtaWhatsApp}</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-6 py-3 text-xs font-medium text-white hover:bg-white/10 hover:border-purple-400/50 transition-all text-center"
              >
                <a href={`mailto:${BRAND_CONFIG.contact.email}`}>
                  {exp.detailCtaEmail}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
