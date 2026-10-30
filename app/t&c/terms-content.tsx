"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  Scale,
  ShieldCheck,
  FileCheck,
  Lock,
  Workflow,
  CreditCard,
  AlertTriangle,
  Gavel,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowUpLeft,
  Phone,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface TermsContentProps {
  locale: Locale
  dict: Dictionary
}

export function TermsContent({ locale, dict }: TermsContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const ArrowDiag = isAr ? ArrowUpLeft : ArrowUpRight

  const [activeSection, setActiveSection] = useState<string>("terms-1")
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const copySectionLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/t&c#${id}`
      navigator.clipboard.writeText(url)
      setCopiedSection(id)
      setTimeout(() => setCopiedSection(null), 2000)
    }
  }

  const sections = [
    {
      id: "terms-1",
      number: "01",
      icon: Scale,
      titleEn: "Scope of Agreement & Corporate Entity",
      titleAr: "هوية الشركة ونطاق سريان الاتفاقية",
      taglineEn: "Governing commercial, technical, and creative engagements",
      taglineAr: "الإطار الحاكم للعلاقات التجارية والتعاقدات الهندسية والإبداعية",
      summaryEn:
        `These Terms and Conditions govern all commercial agreements, technical execution, and digital services rendered by ${BRAND_CONFIG.legalName} ("SWIPEBAY", "Company", "we", "our") to corporate clients, entrepreneurs, and partner organizations ("Client", "you"). Headquartered in Giza and Cairo, Egypt, we engineer software, digital brand systems, cloud infrastructure, and enterprise AI integrations.`,
      summaryAr:
        `تحكم هذه الشروط والأحكام كافة الاتفاقيات التجارية، وعمليات التنفيذ الهندسي، والخدمات الرقمية المقدمة من شركة ${BRAND_CONFIG.legalName} ("سويب باي"، "الشركة") إلى الشركات والمؤسسات الشريكة ("العميل"). ومقرنا الرسمي في الجيزة والقاهرة بمصر، حيث نختص بهندسة وتطوير البرمجيات المتقدمة، وبناء منظومات الهوية الرقمية، والبنى السحابية، وحلول الذكاء الاصطناعي للمؤسسات.`,
      pointsEn: [
        "Engagement commences upon execution of a formal project proposal, signed statement of work (SOW), or receipt of initial milestone deposit",
        "These terms apply equally to fixed-scope projects, dedicated engineering retainers, and ongoing SLA maintenance agreements",
        "Any customized provisions explicitly defined in a bilateral Master Services Agreement (MSA) shall supersede these general terms in case of conflict",
        "Both parties confirm full legal capacity to enter into binding enterprise obligations",
      ],
      pointsAr: [
        "يسري التعاقد رسمياً بمجرد اعتماد مقترح العمل (SOW)، أو توقيع العقد، أو سداد الدفعة الأولى للمرحلة الأولى",
        "تطبق هذه الشروط على المشروعات المحددة النطاق، وعقود فرق العمل المخصصة، وعقود الصيانة السحابية المستمرة (SLA)",
        "تسري أي بنود خاصة يتم الاتفاق عليها كتابياً في عقد رئيسي مستقل (MSA) كأولوية في حال تعارضها مع هذه الشروط العامة",
        "يقر الطرفان بالأهلية القانونية والصفة التجارية الكاملة للدخول في التزامات تعاقدية ملزمة",
      ],
      badgeEn: "Governance",
      badgeAr: "الحوكمة",
    },
    {
      id: "terms-2",
      number: "02",
      icon: FileCheck,
      titleEn: "100% Intellectual Property & Source Code Transfer",
      titleAr: "الملكية الفكرية وحقوق الأكواد المصدرية الكاملة",
      taglineEn: "Zero vendor lock-in with total client ownership upon settlement",
      taglineAr: "ملكية تامة للعميل بنسبة 100% ودون أي قيود أو احتكار برمجيات",
      summaryEn:
        "Unlike legacy software vendors, SWIPEBAY operates on a strict principle of client IP sovereignty. Upon full financial settlement of contracted milestones, 100% of all custom software code, vector assets, database schemas, and documentation become the exclusive intellectual property of the Client.",
      summaryAr:
        "على خلاف الممارسات التقليدية لبعض الشركات، تعتمد سويب باي مبدأ السيادة الكاملة للعميل على أصوله الرقمية. فور استكمال سداد المستحقات المالية للمراحل المعتمدة، تنتقل ملكية 100% من الأكواد المصدرية، التصاميم المتجهة، هياكل قواعد البيانات، والوثائق الهندسية بالكامل وحصرياً إلى العميل.",
      pointsEn: [
        "Full unrestricted transfer of custom source repositories (GitHub / GitLab / Bitbucket) with zero license fees",
        "Open vector brand deliverables (SVG, Figma master files, AI) provided with unlimited commercial reproduction rights",
        "Pre-existing open-source libraries or third-party frameworks remain governed by their respective licenses (MIT, Apache 2.0)",
        "SWIPEBAY retains only the non-exclusive privilege to showcase non-confidential visual outputs in our portfolio unless prohibited by NDA",
      ],
      pointsAr: [
        "نقل كامل وغير مقيد لمستودعات الأكواد المصدرية (GitHub / GitLab) فور التسليم النهائي دون أي رسوم ترخيص لاحقة",
        "تسليم ملفات الهوية المفتوحة (Figma, SVG, Illustrator) مع حقوق استخدام ونشر تجاري غير محدودة",
        "تظل المكتبات مفتوحة المصدر أو الأطر الخارجية خاضعة لتراخيصها العالمية الأصلية (مثل MIT و Apache 2.0)",
        "تحتفظ سويب باي بحق عرض المخرجات البصرية غير السرية ضمن سابقة أعمالها العامة، ما لم تنص اتفاقية سرية (NDA) صريحة على خلاف ذلك",
      ],
      badgeEn: "IP Sovereignty",
      badgeAr: "الملكية الفكرية",
    },
    {
      id: "terms-3",
      number: "03",
      icon: Lock,
      titleEn: "Mutual Confidentiality & Bilateral NDA Protection",
      titleAr: "اتفاقية السرية المتبادلة وحماية البيانات",
      taglineEn: "Rigorous safeguards for proprietary architectures and commercial data",
      taglineAr: "حماية حازمة للخطط التجارية، والبيانات الحساسة، وهندسة الأنظمة",
      summaryEn:
        "Enterprise discretion is fundamental to our operational integrity. Both parties commit to treating all proprietary technical documentation, financial records, customer databases, and product roadmaps as strictly confidential with duty of utmost care.",
      summaryAr:
        "السرية المؤسسية هي أساس موثوقيتنا الهندسية. يلتزم الطرفان بمعاملة كافة الوثائق التقنية، والبيانات المالية، وقواعد بيانات المستخدمين، وخطط إطلاق المنتجات كأسرار تجارية محمية بأعلى معايير الأمان القانوني والتقني.",
      pointsEn: [
        "Bilateral Non-Disclosure Agreements (NDA) executed prior to architectural briefings or codebase ingestion",
        "Role-based credential isolation for staging databases, production servers, and API keys",
        "Strict Zero-Data Retention boundaries enforced on applied AI integrations and LLM fine-tuning pipelines",
        "Confidentiality obligations survive termination of the commercial engagement for a minimum period of 3 years",
      ],
      pointsAr: [
        "توقيع اتفاقية سرية متبادلة (NDA) ملزمة قانونياً قبل مناقشة أسرار العمل أو استلام أي أكواد أو بيانات",
        "عزل كامل لصلاحيات الوصول لقواعد البيانات والبيئات التجريبية ومفاتيح الربط البرمجي (APIs)",
        "تطبيق بروتوكولات عدم الاحتفاظ بالبيانات (Zero-Data Retention) في تكاملات نماذج الذكاء الاصطناعي المؤسسية",
        "تظل التزامات السرية سارية وملزمة لمدة لا تقل عن 3 سنوات بعد انتهاء التعاقد التجاري بين الطرفين",
      ],
      badgeEn: "Data Security",
      badgeAr: "سرية البيانات",
    },
    {
      id: "terms-4",
      number: "04",
      icon: Workflow,
      titleEn: "Project Scoping, Sprints & Milestone Reviews",
      titleAr: "منهجية التعاقد وتسليم المراحل وسبرنتات العمل",
      taglineEn: "Disciplined delivery milestones governed by our official Revision Policy",
      taglineAr: "تسليم مرحلي منظم وخاضع رسمياً لسياسة التعديلات المعتمدة",
      summaryEn:
        "Projects are delivered in structured sprint milestones with continuous staging visibility. Scope adjustments, revision rounds, and feedback intervals are strictly governed by the official SWIPEBAY Revision Policy.",
      summaryAr:
        "يتم تنفيذ المشروعات عبر سبرنتات مرحلية واضحة مع إتاحة بيئة تجريبية حية طوال الوقت. تخضع كافة التعديلات وجولات المراجعة وضمانات ما بعد الإطلاق لسياسة التعديلات الرسمية الخاصة بسويب باي.",
      pointsEn: [
        "All feedback loops, design iterations, and defect resolutions follow our official Revision Policy",
        "Milestones require formal written sign-off before proceeding to subsequent production phases",
        "Staging environments simulate production conditions to validate high concurrency, responsive rendering, and security",
        "Delivery schedules depend on timely mutual collaboration and credential handovers as specified in the project roadmap",
      ],
      pointsAr: [
        "تخضع كافة مراجعات التصميم وتعديلات الأكواد لسياسة التعديلات الرسمية المعتمدة والمعلنة",
        "يتطلب الانتقال بين مراحل الإنتاج اعتماداً كتابياً صريحاً من المشرف المعتمد للمشروع",
        "تحاكي البيئات التجريبية ظروف الإنتاج الحقيقية لاختبار سرعة الاستجابة، والتوافق، والأمان",
        "ترتبط الجداول الزمنية للتسليم بالتعاون المتبادل وتوفير المتطلبات في مواعيدها المتفق عليها",
      ],
      badgeEn: "Delivery Discipline",
      badgeAr: "منهجية التسليم",
    },
    {
      id: "terms-5",
      number: "05",
      icon: CheckCircle2,
      titleEn: "Client Collaboration & Material Ownership",
      titleAr: "التزامات العميل وتوفير المواد المعتمدة",
      taglineEn: "Collaborative partnership and lawful authorization of submitted assets",
      taglineAr: "شراكة تعاونية وضمان قانونية كافة المواد والملفات المقدمة للتنفيذ",
      summaryEn:
        "Successful digital products require active partnership. The Client agrees to provide necessary brand assets, copywriting approvals, and third-party account credentials in a timely manner to maintain sprint momentum.",
      summaryAr:
        "يتطلب بناء منتجات رقمية استثنائية تفاعلاً وثيقاً ومستمراً. يلتزم العميل بتوفير المواد النصية، والأصول المعتمدة، وبيانات الربط الخاصة بالحسابات الخارجية في الأوقات المحددة للحفاظ على سرعة الإنجاز.",
      pointsEn: [
        "Client warrants that all trademarks, images, media, and proprietary texts provided do not infringe third-party copyrights",
        "Designation of an authorized decision-maker to eliminate conflicting review inputs",
        "Timely provisioning of domain DNS records, payment gateway API keys, and third-party SaaS credentials",
        "SWIPEBAY is not liable for schedule delays caused by deferred client approvals or missing external prerequisites",
      ],
      pointsAr: [
        "يقر العميل بأن كافة العلامات التجارية، والصور، والنصوص المقدمة منه لا تنتهك أي حقوق ملكية فكرية لأطراف أخرى",
        "تسمية مسؤول قرار معتمد لتوحيد الملاحظات ومنع التوجيهات المتعارضة أثناء مراحل التطوير",
        "توفير إعدادات النطاق (DNS)، ومفاتيح بوابات الدفع الإلكتروني، وحسابات السحابة في مواعيدها",
        "لا تتحمل سويب باي مسؤولية أي تأخير في مواعيد التسليم ناتج عن تأخر موافقات العميل أو نقص البيانات المطلوبة",
      ],
      badgeEn: "Collaboration",
      badgeAr: "التزامات العميل",
    },
    {
      id: "terms-6",
      number: "06",
      icon: CreditCard,
      titleEn: "Commercial Terms, Invoicing & Settlement",
      titleAr: "الشروط المالية، الفواتير، وجداول السداد",
      taglineEn: "Transparent milestone pricing with zero hidden surcharges",
      taglineAr: "تسعير مرحلي شفاف وواضح وبلا أي رسوم أو اشتراكات خفية",
      summaryEn:
        "We believe in commercial clarity. All fees are agreed upon upfront within fixed milestone proposals or transparent sprint retainers. Direct third-party infrastructure compute fees are billed directly to client accounts without agency markups.",
      summaryAr:
        "نلتزم بالوضوح والنزاهة المالية الكاملة. يتم الاتفاق على التكاليف مسبقاً وفق مقترحات تسليم محددة أو عبر عقود دورات برمجية واضحة. يتم سداد تكاليف الخوادم واستهلاك السحابة الخارجية مباشرة لحساب العميل دون أي هوامش ربح وسيطة.",
      pointsEn: [
        "Milestone invoicing: Initial commencement deposit, scheduled progress milestones, and final pre-launch settlement",
        "All third-party infrastructure fees (AWS, GCP, Vercel, domain registries, SMS gateways) are maintained directly on client-owned billing accounts",
        "Late payments exceeding 15 business days may result in temporary staging suspension until account normalization",
        "Official tax invoices issued with corporate registration details in accordance with applicable tax regulations",
      ],
      pointsAr: [
        "نظام الفوترة المرحلي: دفعة بدء المشروع، دفعات مرتبطة بمحطات تسليم محددة، ودفعة التسليم النهائي قبل النشر",
        "فواتير الخوادم والبنية السحابية الخارجية (مثل AWS، Cloudflare، وبوابات الدفع) ترتبط مباشرة ببطاقات العميل دون أي إضافة",
        "قد يؤدي تأخر سداد الدفعات المستحقة لأكثر من 15 يوم عمل إلى تعليق مؤقت للبيئة التجريبية حتى تسوية الفاتورة",
        "إصدار فواتير ضريبية رسمية معتمدة وفقاً للقوانين واللوائح التنظيمية المعمول بها",
      ],
      badgeEn: "Commercial Integrity",
      badgeAr: "النزاهة المالية",
    },
    {
      id: "terms-7",
      number: "07",
      icon: AlertTriangle,
      titleEn: "Limitation of Liability & Service Guarantees",
      titleAr: "حدود المسؤولية وضمانات الجاهزية السحابية",
      taglineEn: "Enterprise 99.98% High Availability SLA with balanced risk allocation",
      taglineAr: "جاهزية سحابية بنسبة 99.98% مع توزيع عادل ومتوازن للمسؤولية",
      summaryEn:
        "We engineer resilient, secure systems adhering to enterprise software engineering standards. While we commit to high availability benchmarks, commercial liability is sensibly bounded to ensure balanced enterprise partnership.",
      summaryAr:
        "نبني منصات برمجية متينة وآمنة تخضع لأعلى معايير الهندسة البرمجية العالمية. ومع التزامنا بنسب جاهزية فائقة، تخضع المسؤولية القانونية لحدود تجارية عادلة تضمن التوازن واستقرار الشراكة بين الطرفين.",
      pointsEn: [
        "Cloud Hosting Availability governed by our 99.98% High-Availability SLA tier",
        "Cumulative financial liability for any proven breach is strictly capped at the total amount paid by Client for the specific affected milestone",
        "Neither party shall be liable for indirect, incidental, punitive, or consequential damages including loss of projected profits",
        "Force Majeure protections apply to regional network outages, major telecom blackouts, or global cloud provider disruptions",
      ],
      pointsAr: [
        "تلتزم خدمات الاستضافة السحابية المدارة بنسبة جاهزية تشغيلية لا تقل عن 99.98% بموجب اتفاقية SLA",
        "تقتصر المسؤولية المالية الإجمالية عن أي إخلال مثبت على إجمالي المبالغ المدفوعة من العميل عن المرحلة المتأثرة تحديداً",
        "لا يتحمل أي من الطرفين مسؤولية الأضرار غير المباشرة أو التبعية أو فوات الأرباح التجارية التقديرية",
        "تنطبق بنود القوة القاهرة على الأعطال الإقليمية العامة للإنترنت، أو كوارث مزودي السحابة العالميين الخارجة عن السيطرة",
      ],
      badgeEn: "Risk & SLAs",
      badgeAr: "مستويات الخدمة",
    },
    {
      id: "terms-8",
      number: "08",
      icon: Gavel,
      titleEn: "Governing Law, Jurisdiction & Dispute Resolution",
      titleAr: "القانون الحاكم، الاختصاص القضائي، وفض النزاعات",
      taglineEn: "Commitment to mutual good-faith conciliation and recognized jurisdiction",
      taglineAr: "التزام كامل بحسن النية وحل أي خلافات استناداً للقوانين المعتمدة",
      summaryEn:
        "These Terms shall be interpreted and enforced under the laws of the Arab Republic of Egypt. In the event of any disagreement, both parties commit to an amicable executive consultation before resorting to formal legal avenues.",
      summaryAr:
        "تخضع هذه الشروط والأحكام وتُفسر وفقاً لأحكام القوانين التجارية المعمول بها في جمهورية مصر العربية. وفي حال حدوث أي خلاف، يلتزم الطرفان بعقد جلسات تفاوض ودية مباشرة بين ممثليهما القانونيين قبل اللجوء إلى أي إجراءات قضائية رسمية.",
      pointsEn: [
        "Mandatory 30-day amicable consultation period between executive leadership prior to formal litigation",
        "Jurisdiction assigned to competent commercial courts in Cairo / Giza, Egypt, with arbitration options for international GCC and global partners",
        "Severability: If any provision is deemed unenforceable, the remaining provisions shall remain in full force and effect",
        "These terms constitute the complete understanding between the parties regarding service engagement principles",
      ],
      pointsAr: [
        "مهلة تفاوض ودية ملزمة مدتها 30 يوماً بين القيادة التنفيذية للطرفين للوصول لحل مرضي قبل أي نزاع رسمي",
        "ينعقد الاختصاص القضائي للمحاكم الاقتصادية والتجارية المختصة بالقاهرة والجيزة، مع خيارات التحكيم التجاري للعملاء الدوليين",
        "استقلالية البنود: في حال بطلان أو عدم قابلية تطبيق أي بند، تظل باقي البنود سارية ونافذة بالكامل",
        "تشكل هذه الشروط والأحكام الإطار الشامل المتفق عليه الحاكم لمبادئ تقديم الخدمات والتعاون المشترك",
      ],
      badgeEn: "Legal Jurisdiction",
      badgeAr: "الاختصاص القانوني",
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
              <Scale className="h-3.5 w-3.5 text-[#49CBDC]" />
              <span className="font-mono uppercase tracking-wider">
                {isAr ? "الإطار القانوني والحوكمة // الشروط والأحكام" : "LEGAL FRAMEWORK // TERMS & CONDITIONS"}
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
                  {isAr ? "شروط تعاقد عادلة." : "Clear Commercial Terms."}
                </span>
                <span className="block bg-gradient-to-r from-[#49CBDC] via-[#67D6E4] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(73,203,220,0.35)] mt-1">
                  {isAr ? "وحماية كاملة للملكية الفكرية." : "Complete IP Protection."}
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {isAr
                  ? "تحدد هذه الشروط والأحكام أسس الشراكة التجارية والتقنية مع سويب باي، والتزامنا بنقل ملكية 100% من الأكواد والتصاميم لمؤسستك دون أي احتكار."
                  : "These Terms define the principles of partnership with SWIPEBAY - guaranteeing 100% intellectual property transfer, bilateral NDA confidentiality, and enterprise SLA reliability."}
              </p>
            </div>
          </div>

          {/* 4 Quick Legal Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-[#49CBDC]/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#49CBDC]">01</span>
                <FileCheck className="h-4 w-4 text-[#49CBDC]" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "ملكية فكرية 100%" : "100% IP Transfer"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "ملكية حصرية وكاملة للأكواد والتصاميم دون قيود." : "Full client ownership of custom source code and brand assets."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-purple-400/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300">02</span>
                <Lock className="h-4 w-4 text-purple-300" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "سرية متبادلة صارمة" : "Bilateral NDA"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "حماية مشددة لأسرار العمل، الخوارزميات، وقواعد البيانات." : "Strict confidentiality agreements protecting business IP."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-[#49CBDC]/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#49CBDC]">03</span>
                <Workflow className="h-4 w-4 text-[#49CBDC]" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "تسليم مرحلي منظم" : "Milestone Roadmap"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "مراحل تسليم مرتبطة بمخرجات واضحة واعتمادات رسمية." : "Structured sprint cycles with live staging demonstrations."}
              </p>
            </div>

            <div className="rounded-2xl liquid-glass border border-white/10 p-5 space-y-2 hover:border-purple-400/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300">04</span>
                <ShieldCheck className="h-4 w-4 text-purple-300" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? "جاهزية 99.98% SLA" : "99.98% Cloud SLA"}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {isAr ? "استقرار سحابي عالي مع مراقبة مدار الساعة 24/7." : "High availability architecture with continuous monitoring."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTENT SECTION: INTERACTIVE STICKY SIDEBAR + LEGAL CLAUSES
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left/Start Column: Sticky Navigation Directory (4 Cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-[28px] liquid-glass border border-white/15 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Gavel className="h-4 w-4 text-[#49CBDC]" />
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  {isAr ? "أقسام الشروط والبنود" : "Terms & Sections Index"}
                </span>
              </div>

              <nav className="space-y-1.5" aria-label="Terms and Conditions Navigation">
                {sections.map((s) => {
                  const isActive = activeSection === s.id
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={() => setActiveSection(s.id)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl text-xs transition-all ${isActive
                          ? "bg-[#49CBDC]/15 border border-[#49CBDC]/40 text-[#49CBDC] font-bold"
                          : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-[10px] opacity-70 shrink-0">
                          {s.number}
                        </span>
                        <span className="truncate">
                          {isAr ? s.titleAr : s.titleEn}
                        </span>
                      </div>
                      <ArrowIcon className={`h-3 w-3 shrink-0 transition-transform ${isActive ? "text-[#49CBDC] translate-x-0.5 rtl:-translate-x-0.5" : "text-neutral-600 group-hover:text-neutral-300"
                        }`} />
                    </a>
                  )
                })}
              </nav>
            </div>

            {/* Revision Policy Reference Card */}
            <div className="rounded-[28px] bg-cyan-950/40 border border-cyan-500/30 p-5 sm:p-6 space-y-4 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-[#49CBDC]/20 border border-[#49CBDC]/40 flex items-center justify-center text-[#49CBDC]">
                  <FileCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isAr ? "سياسة التعديلات والمراجعات" : "Revision Policy Framework"}
                  </h4>
                  <p className="text-[11px] text-[#49CBDC]/80">
                    {isAr ? "معايير مراجعة وتعديل مخرجات العمل" : "Review rules & warranty periods"}
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {isAr
                  ? "تخضع كافة مراجعات التصميم، الأكواد البرمجية، وفترات الضمان المجانية بعد الإطلاق إلى سياسة التعديلات الرسمية."
                  : "All sprint review loops, design adjustments, and post-launch operational warranties are governed by our dedicated Revision Policy."}
              </p>

              <Button
                asChild
                className="w-full text-xs font-bold text-black cursor-pointer"
              >
                <Link href="/revisions" className="gap-2">
                  <span>{isAr ? "استعراض سياسة التعديلات" : "Read Revision Policy"}</span>
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {/* Legal Inquiries Widget */}
            <div className="rounded-[28px] liquid-glass border border-white/10 p-5 sm:p-6 space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                {isAr ? "الاستفسارات القانونية والتعاقدية" : "LEGAL & CONTRACTUAL INQUIRIES"}
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {isAr
                  ? "لطلب مراجعة مسودة اتفاقية سرية (NDA) خاصة أو صياغة عقد رئيسي (MSA)، يرجى التواصل مع فريقنا القانوني:"
                  : "To request customized bilateral NDAs or tailored enterprise Master Services Agreements (MSA), contact our legal team:"}
              </p>
              <div className="space-y-1.5 pt-1">
                <a
                  href={`mailto:${BRAND_CONFIG.contact.email}`}
                  className="block font-mono text-xs font-semibold text-[#49CBDC] hover:underline"
                >
                  {BRAND_CONFIG.contact.email}
                </a>
                <div className="text-[11px] font-mono text-neutral-400" dir="ltr">
                  {BRAND_CONFIG.contact.phone}
                </div>
              </div>
            </div>
          </aside>

          {/* Right/End Column: Detailed Clauses (8 Cols) */}
          <main className="lg:col-span-8 space-y-8 sm:space-y-10">
            {sections.map((sec) => {
              const isCopied = copiedSection === sec.id
              const IconComp = sec.icon

              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="rounded-[28px] liquid-glass-enhanced border border-white/15 p-6 sm:p-9 space-y-6 scroll-mt-28 relative overflow-hidden transition-all duration-300 hover:border-purple-400/40 shadow-xl group"
                >
                  {/* Subtle Corner Glow */}
                  <div className="absolute -top-16 -end-16 w-44 h-44 bg-purple-600/5 group-hover:bg-purple-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                  {/* Header Row: Clause Index, Badges & Copy Link Button */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-950/60 border border-purple-500/30 text-[#49CBDC]">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                        {sec.number}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/5 border border-white/15 px-3 py-0.5 text-[10px] sm:text-xs font-semibold text-purple-200">
                        {isAr ? sec.badgeAr : sec.badgeEn}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => copySectionLink(sec.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-400 hover:text-white hover:border-[#49CBDC]/40 hover:bg-[#49CBDC]/10 transition-all cursor-pointer"
                      title={isAr ? "نسخ رابط هذا البند" : "Copy section link"}
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                      {isAr ? sec.titleAr : sec.titleEn}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#49CBDC]">
                      {isAr ? sec.taglineAr : sec.taglineEn}
                    </p>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed relative z-10">
                    {isAr ? sec.summaryAr : sec.summaryEn}
                  </p>

                  {/* Bulleted Specifics */}
                  <div className="space-y-2.5 pt-2 relative z-10">
                    {(isAr ? sec.pointsAr : sec.pointsEn).map((point, pIdx) => (
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
              {isAr ? "الشراكة الهندسية المؤسسية" : "ENTERPRISE ASSURANCE"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr
                ? "هل تحتاج صياغة اتفاقية خاصة لمؤسستك؟"
                : "Need a tailored enterprise agreement?"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {isAr
                ? "نوفر للشركات الكبرى نماذج اتفاقيات سرية متبادلة (Bilateral NDAs) وعقود خدمات رئيسية (MSAs) مخصصة تلبي متطلباتكم القانونية والتنظيمية."
                : "We execute bilateral Non-Disclosure Agreements (NDA) and tailored Master Services Agreements (MSA) for enterprise partners in Egypt, the GCC, and worldwide."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              asChild
              className="text-black font-bold text-xs sm:text-sm cursor-pointer"
            >
              <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <WhatsAppIcon className="h-4 w-4" />
                <span>{isAr ? "محادثة فورية مع المستشار الفني" : "Connect on WhatsApp"}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <Link href="/contact" className="gap-2">
                <span>{isAr ? "تواصل معنا مباشرة" : "Contact Our Team"}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

