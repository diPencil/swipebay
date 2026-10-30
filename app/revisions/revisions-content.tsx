"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  RefreshCw,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  FileText,
  Phone,
  Mail,
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface RevisionsContentProps {
  locale: Locale
  dict: Dictionary
}

export function RevisionsContent({ locale, dict }: RevisionsContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  const [activeSection, setActiveSection] = useState<string>("section-1")
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const copySectionLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/revisions#${id}`
      navigator.clipboard.writeText(url)
      setCopiedSection(id)
      setTimeout(() => setCopiedSection(null), 2000)
    }
  }

  const pillars = [
    {
      id: "section-1",
      number: "01",
      titleEn: "Structured Milestone Review Protocol",
      titleAr: "منهجية المراجعة المرحلية المعتمدة",
      taglineEn: "Iterative feedback integrated into active delivery sprints",
      taglineAr: "مراجعات دورية مدمجة ضمن سبرنتات التنفيذ الأسبوعية",
      summaryEn:
        "Every project is structured across clearly demarcated delivery milestones (Discovery, Design Systems, Core Engineering, Staging Validation, and Production Launch). Feedback is collected systematically at each stage rather than deferred to project end.",
      summaryAr:
        "يتم تنظيم كل مشروع وفق محطات تسليم واضحة ومحددة سلفاً (جلسات الاستكشاف، تصميم الهوية والواجهات، التطوير البرمجي، التحقق في البيئة التجريبية، والإطلاق النهائي). يتم استقبال ومناقشة الملاحظات في كل مرحلة بشكل منتظم ومباشر لضمان التوافق التام.",
      pointsEn: [
        "Dedicated isolated staging URL provided for live interaction and testing",
        "Bi-weekly milestone demonstrations with executive and technical leads",
        "Documented review notes consolidated into actionable sprint tasks",
        "Direct Slack / WhatsApp channel with lead architects for rapid clarity",
      ],
      pointsAr: [
        "توفير بيئة تجريبية حية (Staging URL) لاختبار وتجربة الأنظمة بشكل مباشر",
        "جلسات مراجعة نصف أسبوعية لمناقشة مخرجات المراحل مع كبار المهندسين",
        "توثيق كافة التعديلات والملاحظات في مهام برمجية واضحة ومحددة",
        "قنوات تواصل مباشرة (WhatsApp / Slack) مع مديري المشروعات لسرعة اتخاذ القرار",
      ],
      badgeEn: "Core Framework",
      badgeAr: "الإطار الأساسي",
    },
    {
      id: "section-2",
      number: "02",
      titleEn: "In-Scope Iterations vs. Scope Expansion",
      titleAr: "التعديلات المشمولة مقابل توسيع نطاق العمل",
      taglineEn: "Distinguishing between design refinement and architectural changes",
      taglineAr: "التمييز الدقيق بين تنقيح التصميم وإضافة متطلبات برمجية جديدة",
      summaryEn:
        "We distinguish clearly between creative refinements within your contracted scope and feature additions that require scope expansion. This guarantees delivery velocity and budget predictability for both parties.",
      summaryAr:
        "نضع فاصلاً واضحاً وعادلاً بين التعديلات والتحسينات الإبداعية المشمولة في نطاق التعاقد، وبين الإضافات البرمجية أو الوظيفية الجديدة. هذا المعيار يضمن الالتزام بالجدول الزمني واستقرار الميزانية دون أي مفاجآت.",
      pointsEn: [
        "In-Scope: Typography tuning, color palette adjustments, layout rhythm, responsive refinements, micro-animations, copy adjustments, and UI component behavior",
        "In-Scope: Resolving edge cases, performance benchmarks, cross-browser compatibility, and accessibility standards",
        "Scope Expansion: Introducing unagreed third-party API integrations, creating brand-new unquoted modules, or altering the fundamental database architecture after milestone approval",
        "Expansion Protocol: Written change-order scoping with fixed pricing and timeline adjustment prior to commencement",
      ],
      pointsAr: [
        "التعديلات المشمولة: ضبط الخطوط، تعديل درجات الألوان، تحسين ترتيب العناصر، استجابة الشاشات، الحركات التفاعلية، وتنقيح النصوص البرمجية",
        "التعديلات المشمولة: معالجة الحالات الخاصة، ضبط سرعة التحميل، والتوافق عبر كافة المتصفحات والأجهزة المحمولة",
        "توسيع النطاق (خارج العقد): إضافة ربط مع بوابات أو أنظمة خارجية غير متفق عليها، بناء صفحات أو وحدات وظيفية جديدة، أو تغيير الهيكلية البرمجية بعد اعتمادها",
        "بروتوكول التوسيع: توثيق أي ميزة جديدة في ملحق عمل محدد التكلفة والجدول الزمني قبل البدء في كتابة الكود",
      ],
      badgeEn: "Scope Integrity",
      badgeAr: "حماية النطاق",
    },
    {
      id: "section-3",
      number: "03",
      titleEn: "Turnaround Sprints & Execution Benchmarks",
      titleAr: "الجداول الزمنية ودورات سبرنت التعديل",
      taglineEn: "Predictable, agile response times without project stalling",
      taglineAr: "سرعة تنفيذ مضمونة مع الحفاظ على وتيرة العمل دون توقف",
      summaryEn:
        "Revision requests are triaged by complexity and scheduled into active delivery pipelines. We respect production deadlines and ensure work flows smoothly without administrative bottlenecks.",
      summaryAr:
        "يتم تصنيف طلبات التعديل حسب حجمها التقني ودمجها مباشرة في دورات العمل الجارية. نلتزم بالمواعيد المحددة للإطلاق لضمان انتقال مشروعك إلى بيئة الإنتاج في الموعد المخطط له.",
      pointsEn: [
        "Minor Visual & Content Adjustments: Addressed within 24 to 48 business hours",
        "Functional Component Adjustments: Delivered within the ongoing bi-weekly sprint cycle",
        "Complex Architectural Refinements: Scoped and scheduled within 3 to 5 business days with staging demo",
        "Critical Deployment Blockers: Prioritized with immediate same-day triage and remediation",
      ],
      pointsAr: [
        "التعديلات البصرية والمحتوى السريع: تُنفذ عادة خلال 24 إلى 48 ساعة عمل",
        "تعديلات الوظائف والمكونات البرمجية: تُسلَّم ضمن دورة السبرنت الجارية",
        "التطويرات المعمارية المعقدة: يتم تحديد جدولها واختبارها تجريبياً خلال 3 إلى 5 أيام عمل",
        "الملاحظات الحرجة قبل الإطلاق: تحظى بأولوية قصوى ومعالجة فورية في نفس اليوم",
      ],
      badgeEn: "Velocity & SLAs",
      badgeAr: "معدلات الإنجاز",
    },
    {
      id: "section-4",
      number: "04",
      titleEn: "Client Milestone Sign-Off & Staging Freeze",
      titleAr: "اعتماد المراحل وتجميد الإصدارات التجريبية",
      taglineEn: "Stable checkpoints that prevent regression and rework",
      taglineAr: "محطات اعتماد رسمية تمنع تكرار الملاحظات وتحمي استقرار الكود",
      summaryEn:
        "Once a delivery milestone is reviewed, refined, and formally signed off, that foundational layer is frozen to allow subsequent phases to be constructed on a validated architecture. This protects the project from circular revisions.",
      summaryAr:
        "عند استكمال مراجعة مرحلة تسليم واعتمادها رسمياً من فريقكم، يتم تجميد الكود الخاص بها لنتمكن من بناء المراحل التالية فوق أساس برمجي متين ومستقر. يمنع هذا الإجراء تكرار التعديلات في أجزاء تم الانتهاء منها.",
      pointsEn: [
        "Client designates a single authorized representative or committee lead to consolidate feedback",
        "Formal written sign-off (email or project management confirmation) concludes each milestone",
        "Frozen layers remain protected; retrospective changes to approved milestones are quoted as separate sprints",
        "Full change history tracked transparently in Git repositories and milestone changelogs",
      ],
      pointsAr: [
        "تحديد مسؤول اتصال معتمد من طرف شركتكم لتوحيد وتنسيق الملاحظات ومنع تضارب التوجيهات",
        "اعتماد كتابي رسمي (عبر البريد أو نظام إدارة المشاريع) لإنهاء كل مرحلة تسليم",
        "تظل المراحل المعتمدة محمية ومستقرة، وأي تعديل بأثر رجعي على مرحلة منتهية يتم التعامل معه كطلب تطوير مستقل",
        "توثيق وتتبع تاريخ كافة التعديلات بشفافية كاملة في سجلات الأكواد (Git Repositories)",
      ],
      badgeEn: "Quality Assurance",
      badgeAr: "ضمان الجودة",
    },
    {
      id: "section-5",
      number: "05",
      titleEn: "Post-Launch Operational Warranty",
      titleAr: "الضمان التشغيلي والدعم الفني بعد الإطلاق",
      taglineEn: "Comprehensive warranty covering defect remediation and platform health",
      taglineAr: "فترة ضمان شاملة لإصلاح أي ملاحظات برمجية وضمان استقرار النظام",
      summaryEn:
        "Delivery does not end at deployment. Every project executed by SWIPEBAY includes a complimentary operational warranty period to monitor telemetry, patch unexpected edge-case behaviors, and ensure operational readiness.",
      summaryAr:
        "لا تنتهي علاقتنا مع عملائنا بمجرد تسليم المشروع. تتضمن كل خدمة ننفذها فترة ضمان تشغيلي مجانية لمراقبة أداء الخوادم، ومعالجة أي ثغرات برمجية غير متوقعة، وضمان أعلى جاهزية لمنصتكم.",
      pointsEn: [
        "30 to 90 Days Inclusive Warranty based on project complexity and enterprise tier",
        "Zero-Cost Remediation for any software bugs or layout inconsistencies within contracted scope",
        "Continuous uptime and performance monitoring across cloud infrastructure",
        "Seamless transition into optional ongoing SRE maintenance, SLA retainers, and security patching",
      ],
      pointsAr: [
        "فترة ضمان تمتد من 30 إلى 90 يوماً حسب حجم المشروع ونطاقه التعاقدي",
        "معالجة مجانية بالكامل لأي ملاحظة برمجية أو خطأ تقني ضمن نطاق العمل المعتمد",
        "مراقبة حية للأداء واستقرار الخوادم السحابية على مدار الساعة",
        "إمكانية الانتقال السلس إلى عقود صيانة ودعم فني مستمر (SLA) وتحديثات أمنية دورية",
      ],
      badgeEn: "Enterprise Warranty",
      badgeAr: "الضمان المؤسسي",
    },
    {
      id: "section-6",
      number: "06",
      titleEn: "Direct Communication & Conciliation",
      titleAr: "التواصل المباشر وحل أي ملاحظات طارئة",
      taglineEn: "Human collaboration with senior architects to ensure total satisfaction",
      taglineAr: "حوار مفتوح ومباشر مع قيادة الفريق لحل أي استفسار أو متطلب خاص",
      summaryEn:
        "If project perspectives ever diverge, we schedule an executive scoping conference within 48 hours with lead architects and client stakeholders to recalibrate expectations, refine deliverables, and proceed with complete clarity.",
      summaryAr:
        "إذا تطلبت مخرجات المشروع إعادة مواءمة، نعقد جلسة مراجعة تنفيذية مشتركة خلال 48 ساعة مع كبار مهندسينا ومسؤولي شركتكم لضبط الأولويات وتحديث الخطط التنفيذية بما يحقق الرضا التام والنجاح التجاري المستهدف.",
      pointsEn: [
        "Executive alignment session scheduled within 48 hours upon client request",
        "Actionable compromise roadmaps prioritizing business-critical features",
        "Unrestricted access to source files, repository commits, and architectural documentation",
        "100% intellectual property rights retained by client upon milestone settlement",
      ],
      pointsAr: [
        "عقد جلسة مواءمة تنفيذية خلال أقل من 48 ساعة عند طلب شركتكم",
        "وضع خطة عمل فورية تركز على الأولويات التجارية الأكثر تأثيراً في نمو أعمالكم",
        "حقوق وصول كاملة وغير مقيدة لكافة الملفات المصدرية ومستودعات الأكواد والتوثيق التقني",
        "انتقال ملكية 100% من الأكواد والتصاميم لمؤسستكم فور تسوية المرحلة",
      ],
      badgeEn: "Executive Partnership",
      badgeAr: "الشراكة التنفيذية",
    },
  ]

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* =========================================================================
          HERO SECTION: EDITORIAL BANNER WITH METRIC HIGHLIGHTS
          ========================================================================= */}
      <section className="relative isolate overflow-hidden pt-8 pb-6 sm:pt-14 sm:pb-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
              <RefreshCw className="h-3.5 w-3.5 text-[#49CBDC]" />
              <span className="font-mono uppercase tracking-wider">
                {isAr ? "الحوكمة المؤسسية // سياسة التعديلات" : "SWIPEBAY GOVERNANCE // REVISION FRAMEWORK"}
              </span>
            </div>

            <div className="text-[11px] font-mono text-neutral-400">
              {isAr ? "آخر تحديث رسمي: أكتوبر 2026 // الإصدار 3.2" : "LAST REVISED: OCTOBER 2026 // VERSION 3.2"}
            </div>
          </div>

          {/* Main Title & Editorial Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mt-8 sm:mt-12">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                <span className="block text-white">
                  {isAr ? "دقة هندسية في التصميم." : "Precision by Design."}
                </span>
                <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                  {isAr ? "وشفافية مطلقة في التنفيذ." : "Transparent by Principle."}
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {isAr
                  ? "توازن سياسة التعديلات لدينا بين المرونة الإبداعية والانضباط الهندسي؛ لضمان تطور منصتك الرقمية بسرعة ودقة خالية من أي ديون تقنية أو تكاليف غير معلنة."
                  : "Our revision policy balances creative agility with engineering discipline - ensuring your platform evolves smoothly without scope creep, hidden overhead, or technical compromise."}
              </p>
            </div>
          </div>

          {/* 4 Quick Architecture Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-[#49CBDC]/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#49CBDC]">01</span>
                <Layers className="h-4 w-4 text-[#49CBDC]" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "سبرنتات مراجعة مرحلية" : "Milestone Reviews"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "مراجعات دورية تفاعلية مدمجة في كل مرحلة إنتاج." : "Iterative review checkpoints integrated into bi-weekly sprints."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-purple-400/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300">02</span>
                <ShieldCheck className="h-4 w-4 text-purple-300" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "فصل واضح لنطاق العمل" : "Scope Protection"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "تمييز دقيق بين التحسين الإبداعي والإضافات الجديدة." : "Clear separation between creative refinement and feature expansion."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-[#49CBDC]/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#49CBDC]">03</span>
                <Clock className="h-4 w-4 text-[#49CBDC]" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "سرعة إنجاز موثوقة" : "Predictable Velocity"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "تنفيذ فوري للتعديلات السريعة خلال 24-48 ساعة عمل." : "24 to 48-hour typical turnaround for visual refinements."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-purple-400/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300">04</span>
                <CheckCircle2 className="h-4 w-4 text-purple-300" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "ضمان تشغيلي شامل" : "Operational Warranty"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "ضمان مجاني لمدة 30-90 يوماً لمعالجة أي ملاحظات برمجية." : "30 to 90 days inclusive defect remediation warranty."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTENT SECTION: INTERACTIVE STICKY SIDEBAR + EDITORIAL PILLARS
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left/Start Column: Sticky Navigation Directory (4 Cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-[28px] liquid-glass border border-white/15 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <FileText className="h-4 w-4 text-[#49CBDC]" />
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  {isAr ? "فهرس السياسة التنفيذية" : "Policy Framework Index"}
                </span>
              </div>

              <nav className="space-y-1.5" aria-label="Revision Policy Navigation">
                {pillars.map((p) => {
                  const isActive = activeSection === p.id
                  return (
                    <a
                      key={p.id}
                      href={`#${p.id}`}
                      onClick={() => setActiveSection(p.id)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl text-xs transition-all ${isActive
                          ? "bg-[#49CBDC]/15 border border-[#49CBDC]/40 text-[#49CBDC] font-bold"
                          : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-[10px] opacity-70 shrink-0">
                          {p.number}
                        </span>
                        <span className="truncate">
                          {isAr ? p.titleAr : p.titleEn}
                        </span>
                      </div>
                      <ArrowIcon className={`h-3 w-3 shrink-0 transition-transform ${isActive ? "text-[#49CBDC] translate-x-0.5 rtl:-translate-x-0.5" : "text-neutral-600 group-hover:text-neutral-300"
                        }`} />
                    </a>
                  )
                })}
              </nav>
            </div>

            {/* Direct Consultation Widget */}
            <div className="rounded-[28px] bg-purple-950/40 border border-purple-500/30 p-5 sm:p-6 space-y-4 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isAr ? "استفسار حول نطاق مشروعك؟" : "Questions About Scoping?"}
                  </h4>
                  <p className="text-[11px] text-purple-300/80">
                    {isAr ? "تواصل مع كبار مهندسينا مباشرة" : "Speak directly with our team"}
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {isAr
                  ? "نوفر مراجعة استكشافية شفافة لكافة المواصفات وتحديد عدد دورات المراجعة الموصى بها قبل توقيع العقد."
                  : "We provide upfront scoping transparently detailing iteration cycles and staging milestones before engagement."}
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#49CBDC] py-2.5 text-xs font-bold text-black hover:bg-[#67D6E4] shadow-md transition-all cursor-pointer"
                >
                  <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>{isAr ? "استشارة فورية عبر واتساب" : "Chat on WhatsApp"}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-white/20 bg-white/5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 hover:border-purple-400/50 transition-all cursor-pointer"
                >
                  <Link href={`mailto:${BRAND_CONFIG.contact.email}`} className="gap-2">
                    <Mail className="h-3.5 w-3.5 text-purple-300" />
                    <span>{BRAND_CONFIG.contact.email}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Right/End Column: Detailed Pillars (8 Cols) */}
          <main className="lg:col-span-8 space-y-8 sm:space-y-10">
            {pillars.map((pillar) => {
              const isCopied = copiedSection === pillar.id

              return (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="rounded-[28px] liquid-glass-enhanced border border-white/15 p-6 sm:p-9 space-y-6 scroll-mt-28 relative overflow-hidden transition-all duration-300 hover:border-[#49CBDC]/40 shadow-xl group"
                >
                  {/* Subtle Corner Glow */}
                  <div className="absolute -top-16 -end-16 w-44 h-44 bg-[#49CBDC]/5 group-hover:bg-[#49CBDC]/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                  {/* Header Row: Pillar Index, Badges & Copy Link Button */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-[#49CBDC]">
                        {pillar.number}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/5 border border-white/15 px-3 py-0.5 text-[10px] sm:text-xs font-semibold text-purple-200">
                        {isAr ? pillar.badgeAr : pillar.badgeEn}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => copySectionLink(pillar.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-400 hover:text-white hover:border-[#49CBDC]/40 hover:bg-[#49CBDC]/10 transition-all cursor-pointer"
                      title={isAr ? "نسخ رابط هذا البند" : "Copy clause link"}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">{isAr ? "تم النسخ" : "Copied"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>{isAr ? "نسخ الرابط" : "Share"}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-cyan-100 transition-colors">
                      {isAr ? pillar.titleAr : pillar.titleEn}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#49CBDC]">
                      {isAr ? pillar.taglineAr : pillar.taglineEn}
                    </p>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed relative z-10">
                    {isAr ? pillar.summaryAr : pillar.summaryEn}
                  </p>

                  {/* Bulleted Specifics */}
                  <div className="space-y-2.5 pt-2 relative z-10">
                    {(isAr ? pillar.pointsAr : pillar.pointsEn).map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:bg-white/[0.04] hover:border-white/10 transition-all"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#49CBDC] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </main>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM ASSURANCE STRIP
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-[28px] liquid-glass border border-white/15 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
              {isAr ? "حوكمة العقود والشفافية" : "COMMERCIAL CLARITY"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr
                ? "جاهز لبدء مشروعك بشفافية هندسية كاملة؟"
                : "Ready to engineer your next milestone?"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {isAr
                ? "فريقنا الهندسي متاح لمناقشة أهدافك وتقديم جدول تسليم مفصل يشمل كافة دورات المراجعة والضمان التشغيلي."
                : "Speak with our technical leadership to receive an upfront scope document detailing all iteration milestones and SLA warranties."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              asChild
              className="rounded-full bg-[#49CBDC] px-8 py-3.5 text-black font-bold text-xs sm:text-sm hover:bg-[#67D6E4] shadow-[0_0_25px_rgba(73,203,220,0.35)] transition-all cursor-pointer"
            >
              <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <WhatsAppIcon className="h-4 w-4" />
                <span>{isAr ? "محادثة فورية عبر واتساب" : "Start a Conversation"}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-purple-400/50 transition-all cursor-pointer"
            >
              <Link href="/t&c" className="gap-2">
                <span>{isAr ? "مراجعة الشروط والأحكام" : "Read Terms & Conditions"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

