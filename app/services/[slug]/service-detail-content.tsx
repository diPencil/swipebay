"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  SWIPEBAY_SERVICES,
  SERVICE_CATEGORIES,
  type ServiceDefinition,
  type ServiceCategory,
} from "@/lib/services"
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
  CheckCircle2,
  Layers,
  Shield,
  ShieldCheck,
  Zap,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Phone,
  FileText,
  Mail as MailIcon,
  HelpCircle,
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

interface ServiceDetailContentProps {
  locale: Locale
  dict: Dictionary
  service: ServiceDefinition
  relatedServices: ServiceDefinition[]
  categoryInfo?: {
    id: ServiceCategory
    en: { name: string; description: string }
    ar: { name: string; description: string }
  }
}

function getServiceFaqs(service: ServiceDefinition, locale: Locale) {
  const isAr = locale === "ar"
  const serviceTitle = service[locale].title

  let categoryFaq = {
    q: isAr
      ? "ما هي المعايير الهندسية والتقنية المعتمدة في تنفيذ هذه الخدمة؟"
      : "What engineering and architecture standards govern this service?",
    a: isAr
      ? "نعتمد على بنية برمجية حديثة وفائقة الأداء (Next.js، React، TypeScript، Node.js، Python، وقواعد بيانات PostgreSQL) مع توثيق تقني صارم لضمان سهولة التطوير وقابلية التوسع دون أي ديون تقنية."
      : "We utilize modern, high-concurrency stacks including Next.js, React, TypeScript, Node.js, Python, and PostgreSQL, accompanied by strict type contracts, automated linting, and sub-second execution benchmarks."
  }

  if (service.category === "creative") {
    categoryFaq = {
      q: isAr
        ? "ما هي صيغ الملفات ومخرجات أدلة الهوية البصرية التي نتسلمها؟"
        : "What brand deliverables and source asset formats do we receive?",
      a: isAr
        ? "تتسلمون حزمة إنتاج كاملة تشمل الملفات المتجهة المفتوحة (SVG, Figma, AI)، وأدلة النشر وتطبيقات الهوية الرقمية والطباعية، وتدرجات الألوان، مع تراخيص الاستخدام التجاري غير المحدود."
        : "You receive full vector master files (SVG, Figma, Illustrator), digital and print style guides, design tokens, and unrestricted commercial usage licenses."
    }
  } else if (service.category === "intelligence") {
    categoryFaq = {
      q: isAr
        ? "كيف تضمنون خصوصية وسرية بيانات الشركة عند ربط نماذج الذكاء الاصطناعي؟"
        : "How do you ensure corporate data privacy when integrating AI models?",
      a: isAr
        ? "نطبق بروتوكولات عزل البيانات الحازمة (Zero-Data Retention) مع استضافة النماذج في بيئات سحابية خاصة (Private VPC) مع تشفير كامل لقواعد البيانات أثناء النقل والتخزين بموجب معايير SOC2."
        : "We enforce zero-retention enterprise API boundaries, private VPC model deployments, role-based access control, and end-to-end encryption for in-transit and at-rest enterprise data."
    }
  } else if (service.category === "infrastructure") {
    categoryFaq = {
      q: isAr
        ? "ما هي نسبة الجاهزية المضمونة (Uptime SLA) وإجراءات النسخ الاحتياطي؟"
        : "What uptime SLA and disaster recovery protocols are guaranteed?",
      a: isAr
        ? "نلتزم بنسبة جاهزية لا تقل عن 99.98% مع نسخ احتياطي يومي موزع جغرافياً، ومراقبة سحابية حية ومكافحة هجمات DDoS فورية على مدار الساعة لضمان استمرارية الأعمال."
        : "We guarantee a minimum 99.98% uptime SLA, automated geo-redundant daily backups, active DDoS mitigation, and 24/7 real-time telemetry monitoring."
    }
  }

  return [
    {
      q: isAr
        ? `ما هو الجدول الزمني ومراحل تنفيذ خدمة ${serviceTitle}؟`
        : `What is the expected delivery timeline for ${serviceTitle}?`,
      a: isAr
        ? "تتراوح مدة التنفيذ عادة بين أسبوعين إلى 6 أسابيع حسب المتطلبات المعتمدة، وتُنفذ عبر سبرنتات مرحلية مع مراجعات أسبوعية وبيئة تجريبية تفاعلية متاحة لفريقكم طوال الوقت."
        : "Engagements typically range from 2 to 6 weeks depending on functional scope, executed across structured bi-weekly sprints with continuous staging access and weekly milestone demos."
    },
    categoryFaq,
    {
      q: isAr
        ? "من يمتلك حقوق الملكية الفكرية والأكواد البرمجية بعد انتهاء المشروع؟"
        : "Who owns the intellectual property and source code upon completion?",
      a: isAr
        ? "تنتقل ملكية 100% من الأكواد المصدرية، التصاميم، وإعدادات البنية التحتية بالكامل لشركتكم فور التسليم، دون أي قيود أو اشتراكات شهرية ملزمة لشركتنا."
        : "100% of all intellectual property, source repositories, designs, and cloud infrastructure configurations belong entirely to your company upon final delivery with zero vendor lock-in."
    },
    {
      q: isAr
        ? "هل يمكن توقيع اتفاقية عدم إفصاح وسرية معلومات (NDA) قبل بدء المشروع؟"
        : "Can we execute a mutual Non-Disclosure Agreement (NDA) before sharing technical details?",
      a: isAr
        ? "نعم، السرية المؤسسية هي مبدأنا الأساسي. نوفر نموذج اتفاقية سرية متبادلة (NDA) ملزمة قانونياً يتم توقيعها قبل مشاركة أي ملفات أو مناقشة أسرار العمل."
        : "Yes, confidentiality is standard operational practice. We execute bilateral Non-Disclosure Agreements (NDA) prior to receiving proprietary documents or architecture discussions."
    },
    {
      q: isAr
        ? "ما هي الضمانات والدعم الفني المقدم بعد إطلاق الخدمة؟"
        : "What post-launch warranty and technical support are provided?",
      a: isAr
        ? "تشمل كل خدمة فترة ضمان تشغيلي كاملة لمعالجة أي ملاحظات برمجية، مع توفير خيارات عقود صيانة ودعم فني مستمر بموجب اتفاقيات مستوى خدمة (SLA) محددة."
        : "Every engagement includes an operational warranty period covering defect remediation, coupled with optional ongoing maintenance retainers and dedicated SLA support."
    }
  ]
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

export function ServiceDetailContent({
  locale,
  dict,
  service,
  relatedServices,
  categoryInfo,
}: ServiceDetailContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight
  const PrevIcon = isAr ? ChevronRight : ChevronLeft
  const NextIcon = isAr ? ChevronLeft : ChevronRight
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight
  const exp = dict.servicesExperience
  const serviceData = service[locale]
  const IconComponent = ICON_MAP[service.icon] || Code2
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "prev" | "next") => {
    if (!sliderRef.current) return
    const cardWidth = 370
    const delta = direction === "next"
      ? (isAr ? -cardWidth : cardWidth)
      : (isAr ? cardWidth : -cardWidth)
    sliderRef.current.scrollBy({ left: delta, behavior: "smooth" })
  }

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const faqs = getServiceFaqs(service, locale)

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً سويب باي، أود استشارة حول خدمة: ${serviceData.title}`
      : `Hello Swipebay, I would like to consult on: ${serviceData.title}`
  )
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${whatsappMessage}`

  const emailSubject = encodeURIComponent(
    isAr
      ? `طلب استشارة: ${serviceData.title} - ${BRAND_CONFIG.name}`
      : `Consultation Inquiry: ${serviceData.title} - ${BRAND_CONFIG.name}`
  )
  const emailUrl = `mailto:${BRAND_CONFIG.contact.email}?subject=${emailSubject}`

  return (
    <div className="space-y-16 pb-24 sm:space-y-24">
      {/* =========================================================================
          SECTION 01: GRAND EDITORIAL HEADER & BREADCRUMBS
          ========================================================================= */}
      <section className="relative isolate overflow-hidden pt-6 pb-6 sm:pt-10 sm:pb-8 border-b border-white/10 bg-gradient-to-b from-neutral-950/80 via-black to-black">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-neutral-400 mb-6 flex-wrap font-mono"
          >
            <Link
              href="/"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>{exp.breadcrumbsHome}</span>
            </Link>
            <ChevronIcon className="h-3 w-3 text-neutral-600 shrink-0" />
            <Link
              href="/services"
              className="hover:text-cyan-300 transition-colors"
            >
              <span>{exp.breadcrumbsServices}</span>
            </Link>
            <ChevronIcon className="h-3 w-3 text-neutral-600 shrink-0" />
            <span className="text-[#49CBDC] font-semibold truncate max-w-[200px] sm:max-w-none">
              {serviceData.title}
            </span>
          </nav>

          {/* Banner Title Stage */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              {/* Category & Order Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="font-mono uppercase tracking-wider">
                  {isAr
                    ? `تخصص 0${service.order} • ${categoryInfo ? categoryInfo.ar.name : service.category}`
                    : `DISCIPLINE 0${service.order} • ${categoryInfo ? categoryInfo.en.name : service.category}`}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.12]">
                {serviceData.title}
              </h1>

              <p className="text-base sm:text-xl font-bold bg-gradient-to-r from-white via-cyan-200 to-[#49CBDC] bg-clip-text text-transparent">
                {serviceData.tagline}
              </p>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                asChild
                className="text-xs sm:text-sm font-bold text-black cursor-pointer"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{isAr ? "محادثة فورية" : "Inquire via WhatsApp"}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <a href={emailUrl} className="gap-2">
                  <MailIcon className="h-3.5 w-3.5 text-purple-300" />
                  <span>{isAr ? "مراسلة الشركة" : "Email Scope"}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: TWO-COLUMN STAGE (SIDEBAR + MAIN CONTENT AREA)
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ---------------------------------------------------------------------
              LEFT COLUMN: STICKY SERVICES SIDEBAR (4 COLS)
              --------------------------------------------------------------------- */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 self-start order-2 lg:order-1">
            {/* Widget 1: All 10 Services Navigation Menu */}
            <div className="rounded-[28px] liquid-glass-enhanced border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                  {isAr ? "دليل التخصصات" : "ALL 10 DISCIPLINES"}
                </span>
                <h3 className="text-lg font-black text-white mt-0.5">
                  {isAr ? "مجالات الخدمات الهندسية" : "All 10 Disciplines"}
                </h3>
              </div>

              <div className="space-y-2">
                {SWIPEBAY_SERVICES.map((s) => {
                  const isActive = s.slug === service.slug
                  const sTitle = s[locale].title

                  return (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl transition-all duration-300 ${isActive
                        ? "bg-gradient-to-r from-[#49CBDC] to-[#67D6E4] text-black font-extrabold shadow-[0_0_20px_rgba(73,203,220,0.35)] scale-[1.01]"
                        : "bg-neutral-950/70 border border-white/10 text-neutral-300 hover:text-white hover:border-[#49CBDC]/50 hover:bg-[#49CBDC]/[0.05]"
                        }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span
                          className={`font-mono text-xs font-bold shrink-0 ${isActive ? "text-black" : "text-[#49CBDC]"
                            }`}
                        >
                          0{s.order}
                        </span>
                        <span className="text-xs sm:text-sm font-bold truncate">
                          {sTitle}
                        </span>
                      </div>

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-transform ${isActive
                          ? "bg-black text-[#49CBDC]"
                          : "bg-white/5 text-neutral-400 group-hover:bg-[#49CBDC]/20 group-hover:text-[#49CBDC] group-hover:scale-105"
                          }`}
                      >
                        <ChevronIcon className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Widget 2: Direct Advice & Consultation Card (Swipebay Brand Purple/Violet matching language switcher) */}
            <div className="rounded-[28px] bg-purple-600 text-white p-6 sm:p-7 relative overflow-hidden shadow-[0_20px_50px_rgba(147,51,234,0.35)] space-y-5 border border-purple-500 group">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-[#49CBDC] shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-black tracking-widest text-purple-200 uppercase">
                    {isAr ? "استشارة فورية" : "DIRECT ADVICE"}
                  </span>
                  <h4 className="text-xl font-black text-white leading-tight">
                    {isAr ? "تحتاج استشارة فنية؟" : "Need Expert Guidance?"}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-purple-100 font-medium leading-relaxed">
                {isAr
                  ? "تواصل مباشرة مع كبار مهندسينا لتقييم المتطلبات الفنية، الجدوى الهندسية، والجدول الزمني لمشروعك."
                  : "Speak directly with our senior specialists to assess technical requirements, scope feasibility, and milestone schedules."}
              </p>

              <div className="rounded-2xl bg-black/25 border border-white/20 p-4 space-y-1">
                <div className="text-[10px] text-purple-200 font-mono font-bold uppercase tracking-wider">
                  {isAr ? "الخط المباشر المعتمد" : "OFFICIAL DIRECT TELEPHONE"}
                </div>
                <a
                  href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
                  className="font-mono text-base sm:text-lg font-black text-white hover:text-cyan-200 transition-colors block"
                  dir="ltr"
                >
                  {BRAND_CONFIG.contact.phone}
                </a>
              </div>

              <Button
                asChild
                className="w-full text-xs sm:text-sm font-bold text-black cursor-pointer"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{isAr ? "محادثة فورية عبر واتساب" : "Connect on WhatsApp"}</span>
                </a>
              </Button>

              <div className="flex items-center justify-between text-[11px] text-purple-200 font-mono font-semibold pt-1 border-t border-purple-400/30">
                <span>{isAr ? "استجابة أولية خلال أقل من ساعتين" : "Under 2-Hour Response SLA"}</span>
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              </div>
            </div>

            {/* Widget 3: Download Technical Scope / NDA (Matching reference PDF button) */}
            <Link
              href="/contact#direct-channels"
              className="group block rounded-2xl liquid-glass border border-white/15 p-4 sm:p-5 hover:border-purple-400/50 hover:bg-purple-950/20 transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      {isAr ? "طلب دراسة فنية ونموذج NDA" : "Request Scope Brief & NDA"}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                      {isAr ? "اتفاقية سرية ومواصفات معتمدة" : "Bilateral NDA & Technical Specs"}
                    </div>
                  </div>
                </div>
                <ArrowIcon className="h-4 w-4 text-neutral-500 group-hover:text-purple-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
              </div>
            </Link>
          </aside>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN: SERVICE MAIN CONTENT STAGE (8 COLS)
              --------------------------------------------------------------------- */}
          <main className="lg:col-span-8 space-y-12 sm:space-y-16 order-1 lg:order-2">
            {/* 1. Large Featured Showcase Banner (Exact native 2097x750 image ratio with ZERO cropping) */}
            <div className="relative aspect-[2097/750] w-full rounded-[28px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src={service.image}
                alt={serviceData.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
              />

              {/* Floating Discipline Pill in Banner Corner */}
              <div className="absolute top-3 start-3 sm:top-5 sm:start-5 z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-lg">
                  <IconComponent className="h-3.5 w-3.5 text-[#49CBDC]" />
                  <span className="font-mono tracking-wider">
                    {categoryInfo ? categoryInfo[locale].name : service.category}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Service Overview Section (Matching Reference Service Overview) */}
            <div className="rounded-[28px] liquid-glass border border-white/15 p-6 sm:p-10 space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                  {exp.detailOverviewHeading || (isAr ? "نظرة عامة على الخدمة" : "SERVICE OVERVIEW")}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  {serviceData.title}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-[#49CBDC] mt-1">
                  {serviceData.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {serviceData.overview}
              </p>
            </div>

            {/* 3. Service Center: Challenge Callout & 2 Sub-Cards (Matching Reference Service Center) */}
            <div className="rounded-[28px] liquid-glass border border-white/15 p-6 sm:p-10 space-y-8">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-300 uppercase">
                  {isAr ? "مركز القيمة الهندسية" : "CORE VALUE & ARCHITECTURE"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {exp.detailChallengeHeading}
                </h3>
              </div>

              {/* Bordered Quote Callout Box (Matching reference quote box with accent border) */}
              <div className="rounded-2xl border-s-4 border-[#49CBDC] bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md shadow-md space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#49CBDC] tracking-widest">
                  {isAr ? "التحدي التجاري الذي نحله" : "THE BUSINESS CHALLENGE WE RESOLVE"}
                </span>
                <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed italic">
                  &ldquo;{serviceData.challengeStatement}&rdquo;
                </p>
              </div>

              {/* 2 Sub-Cards Side-by-Side (Matching reference 2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Sub-Card 1: Scope & Deliverables */}
                <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#49CBDC]/40 transition-colors shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#49CBDC]">
                      <CheckCircle2 className="h-5 w-5" />
                      <h4 className="text-base font-bold text-white">
                        {exp.detailDeliverablesHeading}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400">
                      {isAr
                        ? "المخرجات المعتمدة التي تتسلمها مؤسستك بدقة ومطابقة للمعايير."
                        : "Verified technical outputs delivered with full compliance."}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {serviceData.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] p-2.5 hover:border-[#49CBDC]/30 hover:bg-white/[0.06] transition-all"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#49CBDC] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-neutral-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Card 2: Practical Applications */}
                <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-purple-400/40 transition-colors shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-purple-300">
                      <Layers className="h-5 w-5" />
                      <h4 className="text-base font-bold text-white">
                        {exp.detailApplicationsHeading}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400">
                      {isAr
                        ? "حالات استخدام واقعية تعكس التأثير المباشر على نمو أعمالك."
                        : "Real-world operational use cases driving strategic momentum."}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {serviceData.practicalApplications.map((app, aIdx) => (
                      <div
                        key={aIdx}
                        className="rounded-xl border border-white/5 bg-white/[0.03] p-3 hover:border-purple-400/30 hover:bg-purple-950/20 transition-all space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#49CBDC] rounded bg-[#49CBDC]/10 border border-[#49CBDC]/20 px-1.5 py-0.5">
                            0{aIdx + 1}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {app.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed ps-7">
                          {app.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Execution Methodology (4-Step Pipeline) */}
            <div className="rounded-[28px] liquid-glass border border-white/15 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                  {isAr ? "منهجية التنفيذ" : "DELIVERY PIPELINE"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {exp.detailProcessHeading}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {isAr
                    ? "منهجية تنفيذ دقيقة تضمن أعلى معايير الجودة والشفافية من أول جلسة استكشاف وحتى الإطلاق والدعم المستمر."
                    : "A disciplined, transparent delivery framework from initial discovery through production deployment."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {serviceData.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-neutral-950/70 p-5 hover:border-[#49CBDC]/40 hover:bg-white/[0.04] transition-all duration-300 group shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-2xl font-black text-[#49CBDC] group-hover:scale-105 transition-transform">
                          {step.step}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-purple-400 group-hover:bg-[#49CBDC] transition-colors" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#49CBDC] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Frequently Asked Questions (Matching Reference Accordion FAQ) */}
            <div className="rounded-[28px] liquid-glass border border-white/15 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                  {isAr ? "الأسئلة الشائعة" : "FREQUENTLY ASKED QUESTIONS"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {isAr ? "الأسئلة الشائعة حول هذه الخدمة" : "Frequently Asked Questions"}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {isAr
                    ? "إجابات مباشرة حول معايير التعاقد، الجداول الزمنية، حقوق الملكية الفكرية، واتفاقيات السرية."
                    : "Clear, authoritative answers regarding procurement, project timelines, IP ownership, and NDA agreements."}
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx

                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                        ? "border-[#49CBDC]/60 bg-[#49CBDC]/[0.06] shadow-[0_0_20px_rgba(73,203,220,0.15)]"
                        : "border-white/10 bg-neutral-950/60 hover:border-white/20 hover:bg-white/[0.02]"
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-start cursor-pointer transition-colors"
                      >
                        <span
                          className={`text-xs sm:text-sm font-bold pe-4 ${isOpen ? "text-[#49CBDC]" : "text-white"
                            }`}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-all ${isOpen
                            ? "bg-[#49CBDC] text-black"
                            : "bg-white/5 text-neutral-400"
                            }`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300/90 leading-relaxed border-t border-white/5 font-light">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: ALL 10 DISCIPLINES INTERACTIVE SLIDER
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-[28px] liquid-glass border border-white/15 p-6 sm:p-10 space-y-8 relative overflow-hidden">
          {/* Background ambient lighting */}
          <div className="absolute -top-24 -end-24 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -start-24 w-80 h-80 bg-[#49CBDC]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#49CBDC]" />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  {isAr ? "المنظومة الرقمية الشاملة" : "CONNECTED ARCHITECTURE"}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {isAr ? "كافة تخصصات سويب باي (10)" : "Explore All 10 Disciplines"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {isAr
                  ? "منظومة حلول متكاملة تغذي بعضها البعض، من الهوية والتصميم وحتى البرمجة والذكاء الاصطناعي والبنية السحابية."
                  : "A seamless end-to-end ecosystem where every discipline reinforces the next - from brand and code to applied AI and high-availability cloud."}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
              <Button
                asChild
                variant="outline"
                className="text-xs font-semibold text-neutral-200 hover:text-white"
              >
                <Link href="/services" className="gap-1.5">
                  <span>{exp.allDisciplinesTitle || (isAr ? "الدليل الشامل" : "All 10 Disciplines")}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </Button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleScroll("prev")}
                  aria-label={isAr ? "الخدمات السابقة" : "Previous services"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#49CBDC] border border-white/15 text-white hover:text-black transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <PrevIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("next")}
                  aria-label={isAr ? "الخدمات التالية" : "Next services"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#49CBDC] border border-white/15 text-white hover:text-black transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <NextIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Carousel Track */}
          <div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3 px-1 -mx-1 relative z-10"
          >
            {SWIPEBAY_SERVICES.map((sItem) => {
              const IconComp = ICON_MAP[sItem.icon] || Code2
              const data = sItem[locale]
              const specMeta = SERVICE_SPEC_METRICS[sItem.slug]?.[locale]
              const isCurrent = sItem.slug === service.slug

              return (
                <div
                  key={sItem.id}
                  className={`group relative rounded-[26px] p-3 sm:p-3.5 liquid-glass border transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(73,203,220,0.18)] flex flex-col justify-between overflow-hidden cursor-pointer shrink-0 snap-start w-[290px] sm:w-[330px] md:w-[360px] ${isCurrent
                      ? "border-[#49CBDC]/80 ring-1 ring-[#49CBDC]/40 bg-[#49CBDC]/[0.03]"
                      : "border-white/12 hover:border-[#49CBDC]/50"
                    }`}
                >
                  {/* Background corner ambient glow on hover */}
                  <div className="absolute -top-12 -end-12 w-32 h-32 bg-[#49CBDC]/0 group-hover:bg-[#49CBDC]/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                  {/* Inner Top Photographic Image Frame (Exact match to /services catalog) */}
                  <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                    <Image
                      src={sItem.image}
                      alt={data.title}
                      fill
                      sizes="(max-width: 768px) 290px, 360px"
                      className="object-cover object-left group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 pointer-events-none" />

                    {/* Top-Start Category Pill Badge */}
                    <div className="absolute top-2.5 start-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/75 border border-white/20 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-white backdrop-blur-md shadow-lg z-20">
                      <IconComp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#49CBDC]" />
                      <span>{specMeta?.badge || SERVICE_CATEGORIES[sItem.category]?.[locale]?.name || sItem.category}</span>
                    </div>

                    {/* Top-End Floating Circular Action Button */}
                    <div className="absolute top-2.5 end-2.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20 group-hover:bg-[#49CBDC] border border-white/30 text-white group-hover:text-black backdrop-blur-md shadow-lg group-hover:scale-110 transition-all duration-300 z-20">
                      <ArrowDiag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </div>

                  {/* Content Area Below Image */}
                  <div className="px-1.5 pt-4 pb-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#49CBDC] transition-colors leading-snug">
                          {data.title}
                        </h4>
                        {isCurrent && (
                          <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-[#49CBDC] bg-[#49CBDC]/15 border border-[#49CBDC]/30 px-2 py-0.5 rounded-full">
                            {isAr ? "الحالية" : "ACTIVE"}
                          </span>
                        )}
                      </div>
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
                    href={`/services/${sItem.slug}`}
                    className="absolute inset-0 z-30"
                    aria-label={data.title}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
