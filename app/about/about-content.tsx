"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import { BRAND_CONFIG } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Quote,
  GraduationCap,
  Compass,
  Utensils,
  Briefcase,
  Code2,
  Layers,
  Mail,
  Check,
  Activity,
  Lock,
  Cpu,
  CreditCard,
  Clock,
  Server,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface AboutContentProps {
  locale: Locale
  dict: Dictionary
}

export function AboutContent({ locale, dict }: AboutContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ab = dict.aboutExperience

  // Section 06: Capabilities Slider State
  const [capabilityIndex, setCapabilityIndex] = useState(0)
  const sortedServices = [...SWIPEBAY_SERVICES].sort((a, b) => a.order - b.order)
  const maxCapabilityIndex = Math.max(0, sortedServices.length - 3)

  const nextCapability = () => {
    setCapabilityIndex((prev) => (prev >= maxCapabilityIndex ? 0 : prev + 1))
  }
  const prevCapability = () => {
    setCapabilityIndex((prev) => (prev <= 0 ? maxCapabilityIndex : prev - 1))
  }

  // Section 08: Industries Slider State
  const [industryIndex, setIndustryIndex] = useState(0)
  const totalIndustries = ab.industriesList.length

  const nextIndustry = () => {
    setIndustryIndex((prev) => (prev + 1) % totalIndustries)
  }
  const prevIndustry = () => {
    setIndustryIndex((prev) => (prev - 1 + totalIndustries) % totalIndustries)
  }

  // Section 09: Testimonials Slider State
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const totalTestimonials = ab.testimonialsList.length

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % totalTestimonials)
  }
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
  }

  // Verified Contact URLs
  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود استكشاف إمكانية التعاون في مشروع رقمي جديد.`
      : `Hello Swipebay, I would like to explore partnering on a new digital initiative.`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`
  const emailSubject = encodeURIComponent(
    isAr ? `استفسار مشروع جديد - ${BRAND_CONFIG.name}` : `New Project Inquiry - ${BRAND_CONFIG.name}`
  )
  const emailUrl = `mailto:${BRAND_CONFIG.contact.email}?subject=${emailSubject}`

  // Value icon mapping (6 values for complete architectural integrity)
  const valueIcons = [Target, Shield, Zap, Users, TrendingUp, Code2]
  const industryIcons = [GraduationCap, Compass, Utensils, Briefcase]

  // Value metadata with dedicated avatar, satellite floating cards and bullet points per standard
  const valueMetadata = [
    {
      avatar: "/images/avatar5.png",
      accentPillEn: "Commercial Logic",
      accentPillAr: "منطق تجاري حقيقي",
      metricEn: "ROI & Revenue Focused",
      metricAr: "تركيز على العائد والأرباح",
      bulletsEn: [
        "Every architecture decision starts with commercial intent",
        "Prioritizing high-leverage business workflows first",
        "Measurable milestone KPIs agreed before code begins",
      ],
      bulletsAr: [
        "كل قرار معماري ينطلق من أهداف أعمال وتجارة واضحة",
        "أولوية مطلقة لمسارات العمل الأكثر تأثيراً على الإيرادات",
        "مؤشرات أداء متفق عليها تعاقدياً قبل كتابة أول سطر كود",
      ],
      cards: [
        { icon: Target, labelEn: "Commercial ROI", labelAr: "عائد الاستثمار", valEn: "+38% Margin", valAr: "+38% هامش ربح" },
        { icon: TrendingUp, labelEn: "Growth Roadmap", labelAr: "خطة التوسع", valEn: "Q1-Q4 Plan", valAr: "خطة ربع سنوية" },
        { icon: Zap, labelEn: "Conversion Funnel", labelAr: "قمع التحويل", valEn: "99.4% Flow", valAr: "تدفق 99.4%" },
        { icon: CheckCircle2, labelEn: "Business Intent", labelAr: "الجدوى التجارية", valEn: "100% Validated", valAr: "موثقة 100%" },
      ],
    },
    {
      avatar: "/images/avatar8.png",
      accentPillEn: "100% IP Transfer",
      accentPillAr: "ملكية الأكواد 100%",
      metricEn: "Zero Vendor Lock-In",
      metricAr: "بدون أي احتكار للمنصة",
      bulletsEn: [
        "Full source code and deployment scripts handed over",
        "Transparent milestone pricing with no hidden clauses",
        "Clear, honest technical feasibility assessments",
      ],
      bulletsAr: [
        "تسليم كامل الشيفرات المصدرية وإعدادات الاستضافة",
        "تسعير مرحلي شفاف دون أي رسوم أو شروط مبهمة",
        "تقييمات هندسية صادقة ومباشرة لجدوى الميزات التقنية",
      ],
      cards: [
        { icon: Shield, labelEn: "Full IP Transfer", labelAr: "ملكية كاملة", valEn: "100% Client IP", valAr: "مملوكة لك 100%" },
        { icon: Code2, labelEn: "Source Repos", labelAr: "المستودعات البرمجية", valEn: "Direct Access", valAr: "تسليم فوري" },
        { icon: Lock, labelEn: "Zero Lock-In", labelAr: "بلا قيود احتكارية", valEn: "Self-Hostable", valAr: "استقلالية كاملة" },
        { icon: CheckCircle2, labelEn: "Clear Milestones", labelAr: "دفعات مرحلية", valEn: "Transparent", valAr: "شفافة ومحددة" },
      ],
    },
    {
      avatar: "/images/avatar11.png",
      accentPillEn: "Modern AI & Cloud",
      accentPillAr: "ذكاء اصطناعي وحوسبة سحابية",
      metricEn: "Utility Over Novelty",
      metricAr: "فائدة عملية لا بهرجة",
      bulletsEn: [
        "Applied LLM and RAG integrations that resolve actual bottlenecks",
        "Microservices and serverless stacks built for speed and economy",
        "Adopting dependable, modern open-source foundations",
      ],
      bulletsAr: [
        "تطبيقات ذكاء اصطناعي ونماذج لغوية تحل معضلات تشغيلية واقعية",
        "بنى سحابية مصغرة مصممة للسرعة وتوفير تكاليف التشغيل",
        "اعتماد أحدث التقنيات مفتوحة المصدر عالية الاستقرار",
      ],
      cards: [
        { icon: Sparkles, labelEn: "Applied AI", labelAr: "ذكاء اصطناعي", valEn: "Custom RAG", valAr: "نماذج مخصصة" },
        { icon: Cpu, labelEn: "Microservices", labelAr: "بنى مصغرة", valEn: "Docker & K8s", valAr: "سحابية حديثة" },
        { icon: Zap, labelEn: "Sync Latency", labelAr: "زمن الاستجابة", valEn: "0.18s Event", valAr: "0.18 ثانية" },
        { icon: CheckCircle2, labelEn: "Engineered Utility", labelAr: "جدوى هندسية", valEn: "Zero Novelty", valAr: "بلا بهرجة" },
      ],
    },
    {
      avatar: "/images/avatar9.png",
      accentPillEn: "Dedicated Company Care",
      accentPillAr: "فريق هندسي مخصص",
      metricEn: "Direct Senior Engineering",
      metricAr: "مهندسون تنفيذيون كبار",
      bulletsEn: [
        "Direct collaboration with senior engineers, no account middlemen",
        "Continuous guidance and proactive architectural reviews",
        "Long-term post-launch reliability and scaling care",
      ],
      bulletsAr: [
        "تواصل مباشر مع كبار المهندسين والمصممين دون وسطاء",
        "استشارات مستمرة ومراجعات استباقية لمعمارية النظام",
        "رعاية تشغيلية ممتدة لضمان استقرار وتوسع المنصة بعد الإطلاق",
      ],
      cards: [
        { icon: Users, labelEn: "Senior Squad", labelAr: "فريق النخبة", valEn: "Direct Access", valAr: "تواصل مباشر" },
        { icon: Clock, labelEn: "Rapid Turnaround", labelAr: "سرعة التجاوب", valEn: "< 2hr SLA", valAr: "< ساعتين" },
        { icon: Briefcase, labelEn: "Sprint Cadence", labelAr: "دورات العمل", valEn: "Bi-Weekly", valAr: "نصف شهرية" },
        { icon: CheckCircle2, labelEn: "Long-Term Care", labelAr: "رعاية تشغيلية", valEn: "Active Retainer", valAr: "شراكة ممتدة" },
      ],
    },
    {
      avatar: "/images/avatar10.png",
      flipEn: true,
      accentPillEn: "99.98% SLA",
      accentPillAr: "اتفاقية تشغيل 99.98%",
      metricEn: "Sub-Second Latency",
      metricAr: "سرعة استجابة فائقة",
      bulletsEn: [
        "High-converting UX validated by user behavior analytics",
        "Zero-downtime deployments and multi-region resilience",
        "Realtime performance observability and telemetry",
      ],
      bulletsAr: [
        "واجهات فائقة التحويل مدعومة بتحليلات سلوك المستخدمين",
        "تحديثات حية دون أي انقطاع مع نسخ احتياطي متعدد المناطق",
        "مراقبة لحظية شاملة للأداء وسرعة الاستجابة لجميع العمليات",
      ],
      cards: [
        { icon: TrendingUp, labelEn: "High Availability", labelAr: "جاهزية المنظومة", valEn: "99.98% SLA", valAr: "99.98% SLA" },
        { icon: Activity, labelEn: "Edge Latency", labelAr: "زمن التحميل", valEn: "< 45ms P99", valAr: "< 45ms" },
        { icon: CreditCard, labelEn: "Checkout Rate", labelAr: "إتمام الشراء", valEn: "+42% Conversion", valAr: "+42% تحويل" },
        { icon: CheckCircle2, labelEn: "Telemetry Hub", labelAr: "مراقبة لحظية", valEn: "24/7 Monitored", valAr: "رصد 24/7" },
      ],
    },
    {
      avatar: "/images/avatar13.png",
      accentPillEn: "Zero Technical Debt",
      accentPillAr: "أكواد نقية بلا ديون تقنية",
      metricEn: "Production-Grade Quality",
      metricAr: "معايير برمجية مؤسسية",
      bulletsEn: [
        "Rigorous peer code reviews and strict static typing",
        "Automated CI/CD pipelines and regression test suites",
        "Scalable modular codebases engineered for a decade of growth",
      ],
      bulletsAr: [
        "مراجعة صارمة للأكواد وتطبيق أعلى معايير أمان الأنظمة",
        "أنابيب نشر مؤتمتة واختبارات شاملة لمنع أي أخطاء برمجية",
        "بنية معيارية مرنة مهيأة للتوسع والنمو لسنوات قادمة",
      ],
      cards: [
        { icon: Code2, labelEn: "Clean Code", labelAr: "معمارية برمجية", valEn: "Strict TypeScript", valAr: "أكواد محكمة" },
        { icon: Shield, labelEn: "Automated Tests", labelAr: "اختبارات مؤتمتة", valEn: "100% CI/CD Pass", valAr: "فحص آلي كامل" },
        { icon: Server, labelEn: "Zero Tech Debt", labelAr: "بلا ديون تقنية", valEn: "Decade Scalable", valAr: "مهيأ لسنوات" },
        { icon: CheckCircle2, labelEn: "Security Audited", labelAr: "أمان وفحص", valEn: "OWASP Standards", valAr: "معايير OWASP" },
      ],
    },
  ]

  return (
    <div className="space-y-24 pb-24 sm:space-y-36 sm:pb-36 overflow-hidden">
      {/* =========================================================================
          SECTION 01: ARCHITECTURAL SHOWCASE HERO
          ========================================================================= */}
      <section className="relative pt-6 pb-4 sm:pt-12 sm:pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Grand Frosted Glass Stage Container */}
          <div className="relative rounded-[32px] sm:rounded-[44px] border border-white/15 bg-gradient-to-b from-neutral-950/80 via-neutral-900/60 to-neutral-950/90 backdrop-blur-3xl py-12 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            {/* Ambient Background Backlights */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#49CBDC]/15 blur-[120px] rounded-full pointer-events-none" />

            {/* Giant Centerpiece Typography Watermark */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none overflow-hidden z-0">
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] font-black tracking-tight text-white/[0.04] sm:text-white/[0.06] uppercase inline-block leading-none">
                SWIPEBAY
              </span>
            </div>

            {/* Inner Content Stage */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-4 py-1.5 text-xs font-medium text-purple-300 shadow-[0_0_16px_rgba(139,92,246,0.2)] backdrop-blur-md">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="uppercase tracking-wider">{ab.heroBadge}</span>
              </div>

              {/* Grand Headline (Aligned with /gateway scale) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                <span className="block text-white">{ab.heroTitle}</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-[#49CBDC] drop-shadow-[0_0_30px_rgba(73,203,220,0.35)]">
                  {ab.heroHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                {isAr ? (
                  <>
                    <span className="sm:block">
                      سويب باي هي وكالة متكاملة للحلول الرقمية والتكنولوجيا الإبداعية.
                    </span>
                    <span className="sm:block mt-0.5">
                      نجمع بين الرؤية الاستراتيجية، الهندسة البرمجية، الهويات الراسخة، والبنية السحابية في شركة واحدة متكاملة.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="sm:block">
                      SWIPEBAY is a multidisciplinary digital solutions and creative technology agency.
                    </span>
                    <span className="sm:block mt-0.5">
                      We bridge strategic clarity, bespoke software engineering, visual identity, and cloud infrastructure into one connected company.
                    </span>
                  </>
                )}
              </p>

              {/* Centered Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
                <Button
                  asChild
                  className="h-11 px-8 text-black font-semibold text-sm"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{ab.heroCtaPrimary}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 px-8 text-sm font-semibold"
                >
                  <Link href="/services" className="inline-flex items-center gap-2">
                    <span>{ab.heroCtaSecondary}</span>
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: WHO WE ARE (2-COLUMN COMPOSITION)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Column 1: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="uppercase tracking-wider">{ab.whoWeAreBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {ab.whoWeAreTitle}
            </h2>

            <p className="text-base sm:text-lg font-medium text-neutral-200 leading-relaxed border-s-2 border-[#49CBDC] ps-4">
              {ab.whoWeAreLead}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              <p>{ab.whoWeAreParagraph1}</p>
              <p>{ab.whoWeAreParagraph2}</p>
            </div>
          </div>

          {/* Column 2: Company Pillars Panel */}
          <div className="lg:col-span-5 space-y-4">
            {ab.whoWeArePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl liquid-glass border border-white/10 p-6 transition-all duration-300 hover:border-[#49CBDC]/40 hover:bg-[#49CBDC]/[0.02] space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#49CBDC] transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="font-mono text-xs font-bold text-neutral-600">0{idx + 1}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: THE WAY WE THINK (EDITORIAL PHILOSOPHY)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-3xl liquid-glass-enhanced border border-purple-500/30 p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 end-0 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Editorial Statement */}
            <div className="lg:col-span-6 space-y-5 text-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-[#49CBDC] backdrop-blur-md">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="uppercase tracking-wider">{ab.philosophyBadge}</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug tracking-tight">
                &ldquo;{ab.philosophyQuote}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
                {ab.philosophySubtitle}
              </p>
            </div>

            {/* Right: 3 Concise Principles with Fine Dividers */}
            <div className="lg:col-span-6 space-y-6">
              {ab.principles.map((pr, idx) => (
                <div key={idx} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#49CBDC] bg-[#49CBDC]/10 border border-[#49CBDC]/20 px-2 py-0.5 rounded">
                      {pr.number}
                    </span>
                    <h3 className="text-base font-bold text-white">{pr.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed ps-9">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OUR MISSION & DIRECTION (SYMMETRICAL DUAL SHOWCASE)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Verified Mission */}
          <div className="group relative rounded-[28px] overflow-hidden border border-purple-500/30 aspect-[16/10] sm:aspect-[16/9] w-full hover:border-purple-400/60 hover:shadow-[0_20px_50px_rgba(139,92,246,0.22)] hover:-translate-y-1 transition-all duration-500 shadow-xl">
            {/* Background Image: OUR-VERIFIED-MISSION.jpg (100% Clean with ZERO gradient) */}
            <Image
              src="/images/OUR-VERIFIED-MISSION.jpg"
              alt={ab.missionTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
            />

            {/* Top Bar: Eyebrow Badge & Status Indicator */}
            <div className="absolute top-3.5 start-3.5 end-3.5 sm:top-4 sm:start-4 sm:end-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-black/70 px-3 py-1 text-[11px] font-semibold text-purple-200 backdrop-blur-md shadow-md pointer-events-auto">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={16}
                  height={16}
                  className="h-3 w-3 object-contain"
                />
                <span className="uppercase tracking-wider font-mono">{ab.missionLabel}</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </div>

            {/* Bottom Content Area: Title & Statement directly on the image (Aligned Left with high-transparency frosted glass) */}
            <div className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 z-10 w-[82%] sm:w-[66%] md:w-[60%] lg:w-[56%] max-w-[450px] rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md p-3.5 sm:p-4 space-y-1.5 shadow-2xl">
              <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight">
                {ab.missionTitle}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed border-s-2 border-[#49CBDC] ps-2.5">
                &ldquo;{ab.missionStatement}&rdquo;
              </p>

              <div className="pt-2 border-t border-white/10 text-[10px] text-neutral-400 font-mono flex items-center justify-between">
                <span>AUTHENTICATED PURPOSE // SWIPEBAY.NET</span>
                <span className="text-[#49CBDC] text-[10px] font-semibold uppercase tracking-wider">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Card 2: Strategic Direction */}
          <div className="group relative rounded-[28px] overflow-hidden border border-[#49CBDC]/30 aspect-[16/10] sm:aspect-[16/9] w-full hover:border-[#49CBDC]/60 hover:shadow-[0_20px_50px_rgba(73,203,220,0.22)] hover:-translate-y-1 transition-all duration-500 shadow-xl">
            {/* Background Image: OUR-DIRECTION.jpg (100% Clean with ZERO gradient) */}
            <Image
              src="/images/OUR-DIRECTION.jpg"
              alt={ab.visionTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
            />

            {/* Top Bar: Eyebrow Badge & Status Indicator */}
            <div className="absolute top-3.5 start-3.5 end-3.5 sm:top-4 sm:start-4 sm:end-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/40 bg-black/70 px-3 py-1 text-[11px] font-semibold text-[#49CBDC] backdrop-blur-md shadow-md pointer-events-auto">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={16}
                  height={16}
                  className="h-3 w-3 object-contain"
                />
                <span className="uppercase tracking-wider font-mono">{ab.visionLabel}</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-[#49CBDC] animate-pulse shadow-[0_0_8px_rgba(73,203,220,0.8)]" />
            </div>

            {/* Bottom Content Area: Title & Statement directly on the image (Aligned Left with high-transparency frosted glass) */}
            <div className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 z-10 w-[82%] sm:w-[66%] md:w-[60%] lg:w-[56%] max-w-[450px] rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md p-3.5 sm:p-4 space-y-1.5 shadow-2xl">
              <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight">
                {ab.visionTitle}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                {ab.visionStatement}
              </p>

              <div className="pt-2 border-t border-white/10 text-[10px] text-neutral-400 font-mono flex items-center justify-between">
                <span>FORWARD TRAJECTORY // 2025 - 2030</span>
                <span className="text-[#49CBDC] text-[10px] font-semibold uppercase tracking-wider">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: OUR VALUES (6 ALTERNATING TWO-COLUMN SECTIONS WITH AVATARS)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-16 sm:space-y-24">
          {/* Header with Signature SWIPEBAY Dual-Tone Gradient */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={16}
                height={16}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">
                {ab.valuesBadge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14]">
              <span className="block text-white">
                {ab.valuesTitleLine1 || (isAr ? "المبادئ التي تحكم" : "Principles That Govern")}
              </span>
              <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                {ab.valuesTitleHighlight || (isAr ? "كيفية بنائنا للحلول وشراكاتنا." : "How We Build & Partner.")}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-2xl mx-auto mt-4">
              {ab.valuesSubtitle}
            </p>
          </div>

          {/* 6 Alternating Zigzag Sections (Matching reference model staging & 4 floating cards) */}
          <div className="space-y-24 sm:space-y-36 lg:space-y-44">
            {ab.valuesList.map((val, idx) => {
              const isEven = idx % 2 === 0
              const meta = valueMetadata[idx] || valueMetadata[0]

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 text-start ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    {/* Category Pill Eyebrow (like "TRENDING NOW" in reference) */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-purple-300 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC] animate-pulse" />
                      <span>{isAr ? `معيار // ${val.number}` : `STANDARD // ${val.number}`}</span>
                      <span className="text-white/30">·</span>
                      <span className="text-neutral-400 font-sans normal-case text-[11px]">
                        {isAr ? "معايير سويب باي" : "SWIPEBAY CORE"}
                      </span>
                    </div>

                    {/* Main Title & Tagline */}
                    <div className="space-y-2.5">
                      <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        {val.title}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-[#49CBDC] tracking-wide">
                        {val.tagline}
                      </p>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed font-light">
                      {val.description}
                    </p>

                    {/* Operational Inclusions / Bullets */}
                    <div className="space-y-2.5 pt-3 border-t border-white/10">
                      {(isAr ? meta.bulletsAr : meta.bulletsEn).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <CheckCircle2 className="h-4 w-4 text-[#49CBDC] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social proof line like "Loved by 50,000+ customers" in reference */}
                    <div className="pt-1 text-xs text-neutral-400 font-mono flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        {isAr
                          ? "معتمد وموثق في بيئة الإنتاج لعملاء سويب باي"
                          : "ENFORCED IN PRODUCTION // 100% VERIFIED"}
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Button
                        asChild
                        className="h-11 px-8 text-black font-semibold text-sm"
                      >
                        <Link href="/contact" className="inline-flex items-center gap-2">
                          <span>{isAr ? "ابدأ شراكتك معنا" : "Partner With Swipebay"}</span>
                          <ArrowIcon className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Avatar Stage Column - Large Model with Tilted Glossy Pod & 4 Floating Cards */}
                  <div
                    className={`lg:col-span-6 relative flex items-center justify-center ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative w-full max-w-[460px] sm:max-w-[520px] h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] flex items-end justify-center group/avatar">
                      {/* Ambient Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-[#49CBDC]/25 via-purple-600/30 to-transparent blur-[100px] rounded-full pointer-events-none" />

                      {/* Massive 3D Glossy Liquid-Glass Capsule Pod (like the red/orange shape in the reference) */}
                      <div
                        className={`absolute inset-x-3 sm:inset-x-6 top-10 sm:top-14 bottom-6 sm:bottom-8 rounded-[50px] sm:rounded-[70px] bg-gradient-to-tr from-purple-950/80 via-purple-700/35 to-cyan-500/25 border-2 border-white/20 backdrop-blur-3xl shadow-[0_30px_90px_rgba(139,92,246,0.35),inset_0_2px_8px_rgba(255,255,255,0.4)] pointer-events-none transition-transform duration-700 ${meta.flipEn && !isAr
                            ? "rotate-6 sm:rotate-12 group-hover/avatar:rotate-8"
                            : isEven
                              ? "-rotate-6 sm:-rotate-12 group-hover/avatar:-rotate-8"
                              : "rotate-6 sm:rotate-12 group-hover/avatar:rotate-8"
                          }`}
                      >
                        {/* Specular gloss reflection */}
                        <div className="absolute inset-0 rounded-[50px] sm:rounded-[70px] bg-gradient-to-b from-white/20 via-transparent to-black/50 pointer-events-none" />
                      </div>

                      {/* Floating Card 1: Top-Start (Near shoulder/head) */}
                      {meta.cards && meta.cards[0] && (
                        <div className="absolute top-2 sm:top-6 -start-2 sm:-start-6 z-20 animate-float-gentle">
                          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-neutral-950/90 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(73,203,220,0.15)] hover:border-[#49CBDC]/70 hover:scale-105 transition-all duration-300">
                            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-[#49CBDC] shrink-0">
                              {React.createElement(meta.cards[0].icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
                            </div>
                            <div className="text-start rtl:text-right">
                              <span className="block text-xs sm:text-[13px] font-bold text-white tracking-tight">
                                {isAr ? meta.cards[0].labelAr : meta.cards[0].labelEn}
                              </span>
                              <span className="block text-[10px] sm:text-[11px] font-mono font-semibold text-[#49CBDC] mt-0.5">
                                {isAr ? meta.cards[0].valAr : meta.cards[0].valEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Floating Card 2: Top-End (Near head/ear) */}
                      {meta.cards && meta.cards[1] && (
                        <div className="absolute top-8 sm:top-14 -end-2 sm:-end-6 z-20 animate-float-gentle-reverse">
                          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-neutral-950/90 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(73,203,220,0.15)] hover:border-[#49CBDC]/70 hover:scale-105 transition-all duration-300">
                            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-[#49CBDC] shrink-0">
                              {React.createElement(meta.cards[1].icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
                            </div>
                            <div className="text-start rtl:text-right">
                              <span className="block text-xs sm:text-[13px] font-bold text-white tracking-tight">
                                {isAr ? meta.cards[1].labelAr : meta.cards[1].labelEn}
                              </span>
                              <span className="block text-[10px] sm:text-[11px] font-mono font-semibold text-[#49CBDC] mt-0.5">
                                {isAr ? meta.cards[1].valAr : meta.cards[1].valEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Floating Card 3: Mid-Start (Near elbow/torso) */}
                      {meta.cards && meta.cards[2] && (
                        <div className="absolute top-[52%] -translate-y-1/2 -start-3 sm:-start-8 z-20 animate-float-gentle">
                          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-neutral-950/90 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(73,203,220,0.15)] hover:border-[#49CBDC]/70 hover:scale-105 transition-all duration-300">
                            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-[#49CBDC] shrink-0">
                              {React.createElement(meta.cards[2].icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
                            </div>
                            <div className="text-start rtl:text-right">
                              <span className="block text-xs sm:text-[13px] font-bold text-white tracking-tight">
                                {isAr ? meta.cards[2].labelAr : meta.cards[2].labelEn}
                              </span>
                              <span className="block text-[10px] sm:text-[11px] font-mono font-semibold text-[#49CBDC] mt-0.5">
                                {isAr ? meta.cards[2].valAr : meta.cards[2].valEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Floating Card 4: Bottom-End (Near hip/leg) */}
                      {meta.cards && meta.cards[3] && (
                        <div className="absolute bottom-8 sm:bottom-14 -end-2 sm:-end-6 z-20 animate-float-gentle-reverse">
                          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl border border-white/20 bg-neutral-950/90 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(73,203,220,0.15)] hover:border-[#49CBDC]/70 hover:scale-105 transition-all duration-300">
                            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#49CBDC]/20 border border-[#49CBDC]/40 flex items-center justify-center text-[#49CBDC] shrink-0">
                              {React.createElement(meta.cards[3].icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
                            </div>
                            <div className="text-start rtl:text-right">
                              <span className="block text-xs sm:text-[13px] font-bold text-white tracking-tight">
                                {isAr ? meta.cards[3].labelAr : meta.cards[3].labelEn}
                              </span>
                              <span className="block text-[10px] sm:text-[11px] font-mono font-semibold text-[#49CBDC] mt-0.5">
                                {isAr ? meta.cards[3].valAr : meta.cards[3].valEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* The Avatar Model - Large, towering, free-standing like the reference */}
                      <div
                        className={`relative z-10 w-full h-[460px] sm:h-[540px] md:h-[600px] lg:h-[660px] ${meta.flipEn && !isAr ? "-scale-x-100" : ""
                          }`}
                      >
                        <Image
                          src={meta.avatar}
                          alt={val.title}
                          fill
                          sizes="(max-width: 640px) 380px, (max-width: 1024px) 460px, 520px"
                          priority={idx === 0}
                          className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover/avatar:scale-[1.03]"
                        />
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
          SECTION 06: WHAT WE BRING TOGETHER (CAPABILITIES SLIDER)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-8">
          {/* Header + Slider Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-3 text-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="uppercase tracking-wider">{ab.capabilitiesBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {ab.capabilitiesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
                {ab.capabilitiesSubtitle}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prevCapability}
                aria-label="Previous capabilities"
                className="h-10 w-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextCapability}
                aria-label="Next capabilities"
                className="h-10 w-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Slider Content Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.slice(capabilityIndex, capabilityIndex + 3).map((srv) => {
              const data = srv[locale]
              return (
                <div
                  key={srv.id}
                  className="rounded-2xl liquid-glass border border-white/10 p-6 space-y-4 hover:border-[#49CBDC]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative w-full aspect-[2.4/1] rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                      <Image
                        src={srv.image}
                        alt={data.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 30vw, 90vw"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#49CBDC]">
                        {String(srv.order).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-neutral-500">
                        {srv.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#49CBDC] transition-colors">
                      {data.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {data.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#49CBDC] hover:text-white transition-colors"
                    >
                      <span>{dict.services.exploreService}</span>
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View All Button */}
          <div className="text-center pt-2">
            <Button
              asChild
              variant="outline"
              className="h-11 px-8 text-xs sm:text-sm font-semibold"
            >
              <Link href="/services" className="gap-2">
                <span>{ab.capabilitiesCta}</span>
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: HOW WE APPROACH THE WORK (PROCESS TIMELINE)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="uppercase tracking-wider">{ab.processBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {ab.processTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              {ab.processSubtitle}
            </p>
          </div>

          {/* Timeline Grid (4 Stages) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ab.processStages.map((stg, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl liquid-glass border border-white/10 p-6 space-y-4 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-950/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-2xl font-black text-[#49CBDC]">
                      {stg.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-500">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {stg.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                    {stg.summary}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {stg.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11px] text-neutral-400 leading-snug">
                        <CheckCircle2 className="h-3 w-3 text-[#49CBDC] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: INDUSTRIES & BUSINESS CONTEXT (SECTOR CAROUSEL)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-3xl liquid-glass-enhanced border border-purple-500/25 p-8 sm:p-12 space-y-8">
          {/* Header + Sector Nav */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-3 text-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="uppercase tracking-wider">{ab.industriesBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {ab.industriesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
                {ab.industriesSubtitle}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prevIndustry}
                aria-label="Previous industry sector"
                className="h-10 w-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextIndustry}
                aria-label="Next industry sector"
                className="h-10 w-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sliding Industry Track */}
          <div className="overflow-hidden pt-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: isAr
                  ? `translateX(${industryIndex * 100}%)`
                  : `translateX(-${industryIndex * 100}%)`,
              }}
            >
              {ab.industriesList.map((ind, idx) => {
                const IconComponent = industryIcons[idx] || Briefcase

                return (
                  <div key={ind.id} className="w-full shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-5 text-start">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#49CBDC]/10 border border-[#49CBDC]/30 text-[#49CBDC]">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-neutral-500">
                            SECTOR 0{idx + 1} // 0{totalIndustries}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {ind.sector}
                        </h3>

                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                          {ind.description}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-2">
                          {ind.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-4">
                          <h4 className="text-xs font-mono font-bold text-[#49CBDC] uppercase tracking-wider">
                            VERIFIED SECTOR PRESENCE
                          </h4>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {isAr
                              ? "نقدم استشارات وتطويراً برمجياً مصمماً خصيصاً ليتناسب مع اللوائح، تجارب المستخدم، وطبيعة المنافسة في هذا القطاع."
                              : "Delivering architectural engineering and creative identity tailored to regulatory, operational, and customer requirements in this sector."}
                          </p>
                          <div className="flex items-center gap-2 pt-2 text-xs text-neutral-300 font-semibold">
                            <Check className="h-3.5 w-3.5 text-[#49CBDC]" />
                            <span>{isAr ? "دعم متعدد اللغات والعملات" : "Multi-Currency & Bilingual Deployments"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {ab.industriesList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndustryIndex(idx)}
                aria-label={`Go to industry slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${industryIndex === idx ? "w-8 bg-[#49CBDC]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: CLIENT PERSPECTIVES (VERIFIED TESTIMONIALS SLIDER)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="uppercase tracking-wider">{ab.testimonialsBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {ab.testimonialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              {ab.testimonialsSubtitle}
            </p>
          </div>

          {/* Testimonials Slider Container */}
          <div className="relative rounded-3xl liquid-glass-enhanced border border-purple-500/30 p-8 sm:p-14 text-center space-y-8 overflow-hidden">
            {/* Backlight Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(73,203,220,0.1),transparent_70%)] pointer-events-none" />

            <Quote className="h-10 w-10 text-[#49CBDC]/40 mx-auto" />

            {/* Sliding Testimonials Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: isAr
                    ? `translateX(${testimonialIndex * 100}%)`
                    : `translateX(-${testimonialIndex * 100}%)`,
                }}
              >
                {ab.testimonialsList.map((item) => (
                  <div key={item.id} className="w-full shrink-0 px-2 sm:px-6 space-y-6">
                    <blockquote className="text-lg sm:text-2xl md:text-3xl font-light text-white leading-relaxed max-w-3xl mx-auto tracking-tight">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">{item.author}</h4>
                      <p className="text-xs font-semibold text-[#49CBDC]">
                        {item.role} &mdash; <span className="text-neutral-400">{item.sector}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls Inside Card */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="h-9 w-9 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2 px-2">
                {ab.testimonialsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === idx ? "w-6 bg-[#49CBDC]" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="h-9 w-9 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#49CBDC]/50 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CREATIVE & TECHNICAL CONVERGENCE
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-3xl liquid-glass border border-white/15 p-8 sm:p-12 md:p-16 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#49CBDC]/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-[#49CBDC] backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={18}
                height={18}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="uppercase tracking-wider">{ab.synthesisBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              <span>{ab.synthesisTitle} </span>
              <span className="bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(73,203,220,0.35)]">
                {ab.synthesisHighlight}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              {ab.synthesisSubtitle}
            </p>
          </div>

          {/* Two Contrasting Coordinated Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1: Creative Mindset */}
            <div className="rounded-2xl liquid-glass border border-purple-500/30 p-8 space-y-5 hover:border-purple-400/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-950/70 border border-purple-400/40 text-purple-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{ab.creativePanelTitle}</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {ab.creativePanelDesc}
              </p>
              <ul className="space-y-2.5 pt-2 border-t border-white/10">
                {ab.creativePoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel 2: Technical Mindset */}
            <div className="rounded-2xl liquid-glass border border-[#49CBDC]/30 p-8 space-y-5 hover:border-[#49CBDC]/60 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/70 border border-[#49CBDC]/40 text-[#49CBDC]">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{ab.technicalPanelTitle}</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {ab.technicalPanelDesc}
              </p>
              <ul className="space-y-2.5 pt-2 border-t border-white/10">
                {ab.technicalPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CONSULTATION CTA
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl liquid-glass-enhanced p-8 sm:p-14 text-center border border-purple-500/35 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(73,203,220,0.15),transparent_70%)] pointer-events-none" />

          <div className="mx-auto max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#49CBDC]/40 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-[#49CBDC] backdrop-blur-md">
              <Image
                src={BRAND_CONFIG.assets.favicon}
                alt={`${BRAND_CONFIG.name} icon`}
                width={16}
                height={16}
                className="h-3.5 w-3.5 object-contain"
              />
              <span>{ab.ctaBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              {ab.ctaTitle}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {ab.ctaSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                asChild
                className="h-11 px-8 text-sm font-semibold text-black"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{ab.ctaWhatsApp}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 px-8 text-sm font-semibold"
              >
                <a href={emailUrl} className="gap-2">
                  <Mail className="h-4 w-4 text-[#49CBDC]" />
                  <span>{ab.ctaEmail}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="h-11 px-6 text-sm font-semibold"
              >
                <Link href="/services" className="gap-2">
                  <span>{ab.ctaServices}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
