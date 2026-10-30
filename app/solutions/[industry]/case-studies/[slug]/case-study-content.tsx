"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  CaseStudyDefinition,
  IndustryDefinition,
  getAllCaseStudies,
} from "@/lib/solutions"
import { BRAND_CONFIG } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  Code2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
  Check,
  Server,
  Zap,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface CaseStudyContentProps {
  caseStudy: CaseStudyDefinition
  industry: IndustryDefinition
  locale: Locale
  dict: Dictionary
}

export function CaseStudyContent({
  caseStudy,
  industry,
  locale: initialLocale,
  dict: initialDict,
}: CaseStudyContentProps) {
  const { locale: currentLocale, dictionary: clientDict } = useLanguage()
  const locale = currentLocale || initialLocale
  const dict = clientDict || initialDict
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  const csData = caseStudy[locale]
  const indData = industry[locale]
  const otherCaseStudies = getAllCaseStudies().filter((cs) => cs.slug !== caseStudy.slug)

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، اطلعت على مشروع (${csData.title}) وأود مناقشة حل مماثل لمؤسستنا.`
      : `Hello Swipebay, I reviewed the case study for (${csData.title}) and would like to explore a similar solution for our organization.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  return (
    <div className="relative space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: CASE STUDY HERO
          ========================================================================= */}
      <section className="relative pt-8 md:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white transition-colors">
              {isAr ? "الحلول" : "Solutions"}
            </Link>
            <span>/</span>
            <Link href={`/solutions/${industry.slug}`} className="hover:text-white transition-colors">
              {indData.title}
            </Link>
            <span>/</span>
            <span className="text-[#49CBDC] truncate max-w-xs">{csData.title}</span>
          </nav>

          <div className="space-y-8 max-w-4xl">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3.5 py-1 text-xs font-mono text-[#49CBDC]">
                <Building2 className="h-3.5 w-3.5" />
                <span>{isAr ? `العميل: ${caseStudy.clientName}` : `Client: ${caseStudy.clientName}`}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
                <Layers className="h-3 w-3" />
                <span>{indData.title}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-300">
                <CheckCircle2 className="h-3 w-3" />
                <span>{isAr ? "منظومة قيد التشغيل المباشر" : "Active Production System"}</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
              {csData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-300 font-light leading-relaxed">
              {csData.subtitle}
            </p>

            {/* CTA bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="text-black font-semibold cursor-pointer"
              >
                <Link href="/contact">
                  {isAr ? "ناقش مشروعاً مشابهاً" : "Request Similar Architecture"}
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="cursor-pointer"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4 text-[#49CBDC]" />
                  {isAr ? "محادثة سريعة عبر واتساب" : "Chat on WhatsApp"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: HIGH-IMPACT METRICS STRIP
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#49CBDC]/30 bg-neutral-950/80 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(73,203,220,0.08)]">
            <div className="mb-4 text-xs font-mono tracking-wider uppercase text-neutral-400">
              {isAr ? "المؤشرات الرقمية المعتمدة" : "VERIFIED PERFORMANCE METRICS"}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {caseStudy.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#49CBDC]">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400 font-light">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: DEEP-DIVE NARRATIVE
          ========================================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* 1. Context & Overview */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                  <Image
                    src={BRAND_CONFIG.assets.favicon}
                    alt={`${BRAND_CONFIG.name} icon`}
                    width={16}
                    height={16}
                    className="h-3 w-3 object-contain"
                  />
                  <span>{isAr ? "خلفية المشروع" : "PROJECT CONTEXT"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  {isAr ? "الواقع التشغيلي قبل التدخل" : "The Context & Operational Baseline"}
                </h2>
                <p className="text-base text-neutral-300 font-light leading-relaxed">
                  {csData.overview}
                </p>
              </div>

              {/* 2. The Core Challenge */}
              <div className="space-y-4 rounded-3xl border border-red-500/20 bg-red-950/10 p-8 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-red-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{isAr ? "جوهر التحدي البرمجي والتشغيلي" : "THE CORE STRATEGIC CHALLENGE"}</span>
                </div>
                <p className="text-base text-neutral-200 font-light leading-relaxed">
                  {csData.challenge}
                </p>
              </div>

              {/* 3. SWIPEBAY Role & Strategy */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-[#49CBDC]/10 px-3 py-1 text-xs text-[#49CBDC]">
                  <Image
                    src={BRAND_CONFIG.assets.favicon}
                    alt={`${BRAND_CONFIG.name} icon`}
                    width={16}
                    height={16}
                    className="h-3 w-3 object-contain"
                  />
                  <span>{isAr ? "دور سويب باي الاستراتيجي والهندسي" : "SWIPEBAY ENGINEERING & STRATEGY ROLE"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  {isAr ? "كيف صممنا الحل وبنيناه؟" : "How We Designed & Built The Solution"}
                </h2>
                <p className="text-base text-neutral-300 font-light leading-relaxed">
                  {csData.role}
                </p>
              </div>

              {/* 4. Solutions Delivered */}
              <div className="space-y-6">
                <h3 className="text-xl font-normal text-white">
                  {isAr ? "المخرجات والمنظومات المنفذة:" : "Delivered Architecture & Modules:"}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {csData.solutionsDelivered.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#49CBDC]/10 border border-[#49CBDC]/30 flex items-center justify-center text-[#49CBDC] shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm text-neutral-200 font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Impact & Results */}
              <div className="space-y-6 rounded-3xl border border-[#49CBDC]/30 bg-neutral-950 p-8 sm:p-10 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#49CBDC]">
                  <TrendingUp className="h-4 w-4" />
                  <span>{isAr ? "الأثر المالي والتشغيلي المباشر" : "MEASURABLE BUSINESS IMPACT"}</span>
                </div>
                <p className="text-base text-neutral-200 font-light leading-relaxed">
                  {csData.impactSummary}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                    {isAr ? "مؤشرات النجاح المحققة:" : "Verified Results Ledger:"}
                  </span>
                  <ul className="space-y-2.5">
                    {csData.results.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                        <CheckCircle2 className="h-4 w-4 text-[#49CBDC] shrink-0 mt-1" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Project Snapshot Card */}
              <div className="rounded-3xl border border-white/10 bg-black/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-3">
                  {isAr ? "ملخص المشروع" : "Project Snapshot"}
                </h4>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-neutral-400 block mb-1">
                      {isAr ? "العميل والشريك:" : "Client Partner:"}
                    </span>
                    <span className="text-white font-medium text-sm">{caseStudy.clientName}</span>
                  </div>

                  <div>
                    <span className="text-neutral-400 block mb-1">
                      {isAr ? "القطاع التجاري:" : "Domain Practice:"}
                    </span>
                    <Link
                      href={`/solutions/${industry.slug}`}
                      className="text-[#49CBDC] hover:underline"
                    >
                      {indData.title}
                    </Link>
                  </div>

                  <div>
                    <span className="text-neutral-400 block mb-1">
                      {isAr ? "حالة المشروع:" : "Deployment Status:"}
                    </span>
                    <span className="text-emerald-400 font-mono">
                      {isAr ? "مكتمل ويعمل بالكامل" : "Production Live"}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    {isAr ? "البنية التقنية المستخدمة:" : "Technologies Deployed:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="rounded-3xl border border-purple-500/30 bg-purple-950/20 p-6 sm:p-8 backdrop-blur-xl space-y-4">
                <h4 className="text-lg font-normal text-white">
                  {isAr ? "هل تواجه تحديات مماثلة؟" : "Facing Similar Challenges?"}
                </h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {isAr
                    ? "مهندسونا ومصممونا جاهزون لمراجعة بنيتك الرقمية الحالية وتقديم خطة معمارية محكمة."
                    : "Our software architects and UI designers are ready to audit your current stack and formulate a clear execution blueprint."}
                </p>
                <Button
                  asChild
                  className="w-full text-black font-semibold cursor-pointer"
                >
                  <Link href="/contact">
                    {isAr ? "تواصل مع مهندسينا" : "Talk to Our Team"}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OTHER CASE STUDIES
          ========================================================================= */}
      {otherCaseStudies.length > 0 && (
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/10 pt-16">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-light text-white">
                  {isAr ? "مشاريع ودراسات حالة أخرى" : "More Deployed Case Studies"}
                </h3>
                <Link
                  href="/solutions"
                  className="text-xs font-medium text-[#49CBDC] hover:underline flex items-center gap-1"
                >
                  <span>{isAr ? "عرض جميع الحلول" : "View All Solutions"}</span>
                  <ArrowDiag className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherCaseStudies.slice(0, 3).map((cs) => (
                  <Link
                    key={cs.id}
                    href={`/solutions/${cs.industrySlug}/case-studies/${cs.slug}`}
                    className="group rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl hover:border-[#49CBDC]/50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span className="text-[11px] font-mono text-[#49CBDC]">
                        {cs.clientName}
                      </span>
                      <h4 className="text-lg font-normal text-white group-hover:text-[#49CBDC] transition-colors">
                        {cs[locale].title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-light line-clamp-2">
                        {cs[locale].overview}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-white to-[#49CBDC] font-medium">
                        {cs.metrics[0].value} {cs.metrics[0].label}
                      </span>
                      <ArrowDiag className="h-4 w-4 text-neutral-400 group-hover:text-white" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
