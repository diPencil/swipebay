/**
 * SWIPEBAY Enterprise Solutions, Packages & Configurator Architecture
 * Business reference: https://swipebay.net/
 */

export interface EnterprisePackage {
  id: string
  name: {
    en: string
    ar: string
  }
  tagline: {
    en: string
    ar: string
  }
  intendedFor: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  suggestedServices: string[] // Service slugs from lib/services.ts
  highlights: {
    en: string[]
    ar: string[]
  }
  pricingModel: {
    en: string
    ar: string
  }
}

export interface EnterpriseBusinessNeed {
  id: string
  icon: string
  title: {
    en: string
    ar: string
  }
  shortDescription: {
    en: string
    ar: string
  }
  connectedServiceSlugs: string[]
  strategicBenefit: {
    en: string
    ar: string
  }
}

export interface ConfiguratorSector {
  id: string
  label: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  icon: string
  href?: string
}

export interface ConfiguratorObjective {
  id: string
  label: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  icon: string
}

export interface EngagementScope {
  id: string
  label: {
    en: string
    ar: string
  }
  timeline: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  bestFor: {
    en: string
    ar: string
  }
}

/* =========================================================================
   1. PROPOSED SOLUTION BUNDLES (CONSULTATION STARTING POINTS)
   ========================================================================= */
export const ENTERPRISE_PACKAGES: EnterprisePackage[] = [
  {
    id: "digital-presence",
    name: {
      en: "Digital Presence Foundation",
      ar: "حزمة الحضور الرقمي المتكامل",
    },
    tagline: {
      en: "From brand architecture to high-performance web deployment.",
      ar: "من بناء الهوية البصرية إلى تشغيل الموقع الإلكتروني المدار.",
    },
    intendedFor: {
      en: "Emerging enterprises and established businesses needing a modernized, authoritative digital presence.",
      ar: "الشركات الصاعدة والمؤسسات الراغبة في تحديث هويتها وترسيخ حضورها الرقمي بمظهر موثوق.",
    },
    description: {
      en: "A unified foundation combining brand strategy, bespoke web engineering, ultra-fast cloud hosting, and secure corporate email accounts.",
      ar: "منظومة أساسية متكاملة تجمع بين استراتيجية الهوية البصرية، تطوير الويب المخصص، الاستضافة السحابية الآمنة، وحسابات البريد الرسمي.",
    },
    suggestedServices: [
      "branding-design",
      "web-app-development",
      "cloud-infrastructure",
      "email-hosting",
    ],
    highlights: {
      en: [
        "Comprehensive brand identity guidelines and asset kit",
        "Custom responsive web platform engineered for sub-second load times",
        "Enterprise-grade cloud hosting with 99.98% uptime SLA",
        "Encrypted domain email accounts with anti-spam filtration",
      ],
      ar: [
        "دليل هوية بصرية متكامل وحزمة مخرجات تصميمية شاملة",
        "منصة ويب سريعة ومتجاوبة مصممة هندسياً للتحميل الفوري",
        "استضافة سحابية مدارة بمستوى جاهزية 99.98%",
        "حسابات بريد إلكتروني رسمي مشفر مع حماية متقدمة من الرسائل المزعجة",
      ],
    },
    pricingModel: {
      en: "Custom Scope & Architecture Quote",
      ar: "عرض سعر مخصص حسب متطلبات النطاق",
    },
  },
  {
    id: "business-growth",
    name: {
      en: "Business Growth & Acquisition",
      ar: "حزمة نمو الأعمال واستقطاب العملاء",
    },
    tagline: {
      en: "Audited marketing, motion content, and automated funnel workflows.",
      ar: "حملات تسويقية مدروسة، إنتاج وسائط إبداعية، وأتمتة مسارات التحويل.",
    },
    intendedFor: {
      en: "Commercial brands seeking to accelerate sales pipeline velocity and customer acquisition with high-end creative assets.",
      ar: "الشركات التجارية الساعية لتسريع وتيرة المبيعات واستقطاب العملاء بمحتوى مرئي إبداعي رفيع المستوى.",
    },
    description: {
      en: "An interconnected growth engine pairing targeted performance marketing and commercial video production with conversion optimization and automated lead management.",
      ar: "محرك نمو متكامل يربط بين الحملات التسويقية الموجهة، إنتاج الفيديو الإعلاني، تحسين معدلات التحويل، وأتمتة إدارة العملاء المحتملين.",
    },
    suggestedServices: [
      "digital-marketing",
      "media-production",
      "web-app-development",
      "workflow-systems",
    ],
    highlights: {
      en: [
        "Data-driven multi-channel marketing campaigns (Search, Meta, LinkedIn)",
        "Enterprise-grade video production and commercial creative storytelling",
        "Landing page conversion optimization and analytics auditing",
        "Automated CRM sync and instant WhatsApp sales lead routing",
      ],
      ar: [
        "حملات تسويقية متعددة القنوات قائمة على البيانات وتحليل الأداء",
        "إنتاج إعلانات مرئية وسينمائية احترافية تعكس ثقل علامتك التجارية",
        "تحسين صفحات الهبوط ومسارات الشراء لتحقيق أقصى عائد على الإنفاق",
        "أتمتة مزامنة بيانات العملاء وتوجيه طلبات الشراء فورياً لفرق المبيعات",
      ],
    },
    pricingModel: {
      en: "Custom Monthly Scope / Milestone Retainer",
      ar: "عرض سعر مخصص بنظام المراحل أو الاشتراك الشهري",
    },
  },
  {
    id: "enterprise-transformation",
    name: {
      en: "Enterprise Platform & Transformation",
      ar: "حزمة التحول المؤسسي والمنصات المتقدمة",
    },
    tagline: {
      en: "Custom platforms, applied AI workflows, and multi-acquirer checkout.",
      ar: "منصات برمجية مخصصة، مسارات ذكاء اصطناعي، وبوابات دفع متعددة القنوات.",
    },
    intendedFor: {
      en: "Large organizations, hospitality operators, and institutions needing deep digital operational transformation and resilient infrastructure.",
      ar: "المؤسسات الكبرى، مجموعات الضيافة، والشركات التي تتطلب تحولاً رقمياً عميقاً وبنية تحتية فائقة الاستقرار.",
    },
    description: {
      en: "End-to-end bespoke digital transformation unifying custom mobile/web apps, workflow orchestration, applied AI document processing, cloud systems, and resilient payment gateways.",
      ar: "منظومة تحول شاملة توحد تطبيقات الويب والجوال المخصصة، أتمتة العمليات الإدارية، معالجة المستندات بالذكاء الاصطناعي، البنية السحابية، وبوابات الدفع.",
    },
    suggestedServices: [
      "web-app-development",
      "ai-automation",
      "workflow-systems",
      "cloud-infrastructure",
      "vulnerability-assessment",
    ],
    highlights: {
      en: [
        "High-concurrency web and mobile software tailored to internal workflows",
        "Applied AI models for autonomous document handling and data extraction",
        "Integrated multi-acquirer payment gateway with webhook reconciliation",
        "Hardened security auditing and vulnerability assessments before launch",
      ],
      ar: [
        "برمجيات ويب وجوال متقدمة مخصصة بالكامل لعمليات شركتك الداخلية",
        "نماذج ذكاء اصطناعي تطبيقية لمعالجة المستندات واستخلاص البيانات آلياً",
        "تكامل شامل مع بوابات الدفع المتعددة وتوفيق مالي فوري للمعاملات",
        "تدقيق أمني شامل واختبارات اختراق معتمدة لضمان أمان البيانات قبل الإطلاق",
      ],
    },
    pricingModel: {
      en: "Tailored Enterprise Architecture Proposal",
      ar: "مقترح هندسي ومعماري مؤسسي مخصص",
    },
  },
]

/* =========================================================================
   2. BUSINESS OBJECTIVES & NEEDS EXPLORER
   ========================================================================= */
export const ENTERPRISE_BUSINESS_NEEDS: EnterpriseBusinessNeed[] = [
  {
    id: "presence",
    icon: "Palette",
    title: {
      en: "Establishing an Authoritative Digital Presence",
      ar: "ترسيخ حضور رقمي ومؤسسي موثوق",
    },
    shortDescription: {
      en: "Stand out in competitive markets with a cohesive brand identity and a fast, modern digital showcase.",
      ar: "التميز في الأسواق التنافسية بهوية بصرية رصينة ومنصة ويب حديثة وسريعة تعكس مكانتك الريادية.",
    },
    connectedServiceSlugs: ["branding-design", "web-app-development", "cloud-infrastructure"],
    strategicBenefit: {
      en: "Enhances enterprise credibility, builds instant buyer trust, and establishes market authority.",
      ar: "يعزز مصداقية المؤسسة، يبني ثقة العملاء الفورية، ويرسخ المكانة السوقية.",
    },
  },
  {
    id: "platforms",
    icon: "Code2",
    title: {
      en: "Engineering Custom Web & Mobile Platforms",
      ar: "تطوير منصات وتطبيقات ويب وجوال متخصصة",
    },
    shortDescription: {
      en: "Bespoke software systems engineered for high traffic, complex business logic, and seamless user experiences.",
      ar: "برمجيات مخصصة بالكامل مصممة لتحمل كثافة الزوار، معالجة العمليات المعقدة، وتقديم تجربة مستخدم سلسة.",
    },
    connectedServiceSlugs: ["web-app-development", "cloud-infrastructure", "vulnerability-assessment"],
    strategicBenefit: {
      en: "Eliminates rigid software license limits and delivers tailor-made operational control.",
      ar: "يتخلص من قيود البرمجيات الجاهزة ويمنحك تحكماً تشغيلياً كاملاً ومصمماً لاحتياجاتك.",
    },
  },
  {
    id: "acquisition",
    icon: "TrendingUp",
    title: {
      en: "Scaling Customer Acquisition & Revenue",
      ar: "توسيع استقطاب العملاء ونمو الإيرادات",
    },
    shortDescription: {
      en: "Turn marketing spend into measurable business growth with targeted performance campaigns and commercial video production.",
      ar: "تحويل الميزانيات التسويقية إلى نمو تجاري ملموس عبر حملات مدروسة ومحتوى مرئي عالي التأثير.",
    },
    connectedServiceSlugs: ["digital-marketing", "media-production", "workflow-systems"],
    strategicBenefit: {
      en: "Lower customer acquisition costs and higher lifetime value through consistent funnel optimization.",
      ar: "خفض تكلفة استقطاب العميل وزيادة القيمة الاستثمارية عبر تحسين مسارات البيع باستمرار.",
    },
  },
  {
    id: "automation",
    icon: "Workflow",
    title: {
      en: "Streamlining Operations Through Automation",
      ar: "أتمتة العمليات التشغيلية وسلاسل الإمداد",
    },
    shortDescription: {
      en: "Connect fragmented databases, ERP systems, and communication channels into autonomous, zero-error workflows.",
      ar: "ربط قواعد البيانات المتباعدة وأنظمة ERP وقنوات التواصل في مسارات عمل آلية خالية من الأخطاء.",
    },
    connectedServiceSlugs: ["workflow-systems", "business-solutions", "ai-automation"],
    strategicBenefit: {
      en: "Saves hundreds of manual administrative hours monthly while preventing costly operational mistakes.",
      ar: "يوفر مئات الساعات الإدارية الروتينية شهرياً ويمنع الأخطاء التشغيلية المكلفة.",
    },
  },
  {
    id: "ai",
    icon: "Sparkles",
    title: {
      en: "Integrating Applied Enterprise AI",
      ar: "دمج حلول الذكاء الاصطناعي التطبيقي",
    },
    shortDescription: {
      en: "Deploy domain-specific AI models that handle automated client inquiries, document processing, and predictive analytics.",
      ar: "تطبيق نماذج ذكاء اصطناعي تفهم طبيعة نشاطك للرد الآلي، معالجة المستندات، وتحليل المؤشرات المستقبلية.",
    },
    connectedServiceSlugs: ["ai-automation", "workflow-systems", "web-app-development"],
    strategicBenefit: {
      en: "Delivers 24/7 responsiveness and automated decision support across your commercial ecosystem.",
      ar: "يوفر استجابة فورية على مدار الساعة ودعماً ذكياً لاتخاذ القرارات التشغيلية.",
    },
  },
  {
    id: "infrastructure",
    icon: "Server",
    title: {
      en: "Resilient Cloud & Communication Infrastructure",
      ar: "بنية تحتية سحابية واستضافة رسمية آمنة",
    },
    shortDescription: {
      en: "Ensure constant availability, rapid load speeds, and hardened data protection for critical digital operations.",
      ar: "ضمان الاستقرار المستمر، سرعة التحميل الفائقة، وحماية البيانات الحساسة لكافة عملياتك الرقمية.",
    },
    connectedServiceSlugs: ["cloud-infrastructure", "email-hosting", "vulnerability-assessment"],
    strategicBenefit: {
      en: "Protects enterprise continuity, prevents data breaches, and ensures 99.98% operational uptime.",
      ar: "يحمي استمرارية الأعمال، يمنع الاختراقات وتسريب البيانات، ويضمن استقرار الأنظمة بنسبة 99.98%.",
    },
  },
]

/* =========================================================================
   3. CONFIGURATOR STATIC SECTORS & OBJECTIVES
   ========================================================================= */
export const CONFIGURATOR_SECTORS: ConfiguratorSector[] = [
  {
    id: "hospitality-tourism",
    label: {
      en: "Hospitality & Tourism",
      ar: "الضيافة والسياحة",
    },
    description: {
      en: "Hotels, luxury resorts, travel agencies, and boutique operators.",
      ar: "الفنادق، المنتجعات، وكالات السفر، ومقدمو تجارب الضيافة.",
    },
    icon: "Compass",
    href: "/solutions/hospitality-tourism",
  },
  {
    id: "restaurants-fnb",
    label: {
      en: "Restaurants & F&B",
      ar: "المطاعم والأغذية",
    },
    description: {
      en: "Regional restaurant groups, cafes, and multi-branch food chains.",
      ar: "المطاعم الراقية، سلاسل المقاهي، ومجموعات الأغذية متعددة الفروع.",
    },
    icon: "Utensils",
    href: "/solutions/restaurants-fnb",
  },
  {
    id: "education-e-learning",
    label: {
      en: "Education & E-Learning",
      ar: "التعليم والتدريب الرقمي",
    },
    description: {
      en: "Academic institutions, training academies, and virtual learning platforms.",
      ar: "المؤسسات الأكاديمية، أكاديميات التدريب، ومنصات التعليم الافتراضي.",
    },
    icon: "GraduationCap",
    href: "/solutions/education-e-learning",
  },
  {
    id: "professional-services",
    label: {
      en: "Professional Services & Advisory",
      ar: "الخدمات المهنية والاستشارات",
    },
    description: {
      en: "Consulting firms, legal practices, and corporate advisory groups.",
      ar: "شركات الاستشارات الإدارية، مكاتب المحاماة، ومجموعات الأعمال.",
    },
    icon: "Briefcase",
    href: "/solutions/professional-services",
  },
  {
    id: "other",
    label: {
      en: "Other Industry / Emerging Venture",
      ar: "قطاع تجاري آخر / مشروع واعد",
    },
    description: {
      en: "Retail, healthcare, real estate, technology, or bespoke business models.",
      ar: "التجارة، الرعاية الصحية، التطوير العقاري، أو نماذج الأعمال التخصصية.",
    },
    icon: "Building2",
  },
]

export const CONFIGURATOR_OBJECTIVES: ConfiguratorObjective[] = [
  {
    id: "launch-platform",
    label: {
      en: "Launch Custom Platform or App",
      ar: "إطلاق منصة رقمية أو تطبيق مخصص",
    },
    description: {
      en: "Engineer a high-speed web application or native iOS/Android system.",
      ar: "تطوير منصة ويب سريعة أو تطبيق جوال أصلي لأنظمة iOS و Android.",
    },
    icon: "Code2",
  },
  {
    id: "brand-identity",
    label: {
      en: "Establish or Refresh Brand Identity",
      ar: "بناء أو تجديد الهوية البصرية والمؤسسية",
    },
    description: {
      en: "Craft a distinct visual architecture, guidelines, and market positioning.",
      ar: "صياغة نظام بصري استثنائي، أدلة استخدام، وموقع سوقي رائد.",
    },
    icon: "Palette",
  },
  {
    id: "scale-acquisition",
    label: {
      en: "Scale Marketing & Customer Growth",
      ar: "توسيع التسويق واستقطاب العملاء",
    },
    description: {
      en: "Deploy audited advertising campaigns and commercial media content.",
      ar: "إطلاق حملات تسويقية موجهة وإنتاج محتوى مرئي إعلاني عالي التأثير.",
    },
    icon: "TrendingUp",
  },
  {
    id: "automate-operations",
    label: {
      en: "Automate Core Business Workflows",
      ar: "أتمتة العمليات والمهام التشغيلية",
    },
    description: {
      en: "Connect ERPs, databases, and customer channels into autonomous pipelines.",
      ar: "ربط أنظمة الـ ERP، قواعد البيانات، وقنوات العملاء في مسارات مؤتمتة.",
    },
    icon: "Workflow",
  },
  {
    id: "introduce-ai",
    label: {
      en: "Introduce Applied AI Capabilities",
      ar: "دمج تقنيات الذكاء الاصطناعي التطبيقي",
    },
    description: {
      en: "Integrate specialized models for document processing and customer service.",
      ar: "دمج نماذج ذكية لمعالجة المستندات وخدمة العملاء الآلية الفورية.",
    },
    icon: "Sparkles",
  },
  {
    id: "modernize-cloud",
    label: {
      en: "Modernize Cloud Hosting & Security",
      ar: "تحديث الاستضافة السحابية والأمان",
    },
    description: {
      en: "Secure cloud infrastructure, domain emails, and vulnerability audits.",
      ar: "تأمين البنية السحابية، البريد المؤسسي، وتدقيق الثغرات البرمجية.",
    },
    icon: "Server",
  },
  {
    id: "integrate-payments",
    label: {
      en: "Integrate Payment & Checkout Flows",
      ar: "تكامل بوابات الدفع الإلكتروني",
    },
    description: {
      en: "Multi-acquirer payment gateways, tokenization, and settlement sync.",
      ar: "ربط بوابات الدفع المتعددة، تشفير البطاقات، والتسوية المالية الآلية.",
    },
    icon: "CreditCard",
  },
]

export const CONFIGURATOR_SCOPES: EngagementScope[] = [
  {
    id: "focused",
    label: {
      en: "Focused Project",
      ar: "مشروع تخصصي محدد",
    },
    timeline: {
      en: "Typically 2 to 6 weeks",
      ar: "عادة من 2 إلى 6 أسابيع",
    },
    description: {
      en: "A defined, milestone-based implementation of specific deliverables (e.g. brand identity or single application).",
      ar: "تنفيذ مرحلي محدد لمخرجات واضحة (مثل تصميم هوية كاملة أو إطلاق تطبيق مستقل).",
    },
    bestFor: {
      en: "Businesses with a distinct immediate requirement and clear technical parameters.",
      ar: "الشركات التي تمتلك احتياجاً محدداً واضح المعالم ومتطلبات تقنية محددة مسبقاً.",
    },
  },
  {
    id: "multi-service",
    label: {
      en: "Multi-Service Implementation",
      ar: "تنفيذ متعدد الخدمات ومتكامل",
    },
    timeline: {
      en: "Typically 6 to 12 weeks",
      ar: "عادة من 6 إلى 12 أسبوعاً",
    },
    description: {
      en: "An integrated solution bundle combining brand, platform engineering, and infrastructure under a coordinated team.",
      ar: "حزمة حلول متكاملة تجمع بين الهوية، تطوير المنصة، والبنية السحابية تحت إدارة فريق موحد.",
    },
    bestFor: {
      en: "Organizations launching new digital platforms or undergoing a complete market repositioning.",
      ar: "المؤسسات التي تطلق منصات رقمية جديدة أو تعيد بناء حضورها السوقي بالكامل.",
    },
  },
  {
    id: "ongoing",
    label: {
      en: "Strategic Retainer & Partnership",
      ar: "شراكة استراتيجية مستمرة",
    },
    timeline: {
      en: "Quarterly or Annual Engagement",
      ar: "تعاقد ربع سنوي أو سنوي",
    },
    description: {
      en: "Ongoing technology advisory, continuous feature development, marketing management, and dedicated cloud oversight.",
      ar: "استشارات تقنية مستمرة، تطوير وتحديث دوري للمنصات، إدارة الحملات، ودعم سحابي متواصل.",
    },
    bestFor: {
      en: "Enterprises needing an agile, external technology and creative department scaling with their growth.",
      ar: "الشركات الكبرى التي تحتاج شريكاً تقنياً وإبداعياً متمرساً يواكب نموها وتوسعها المستمر.",
    },
  },
]

/* =========================================================================
   4. HOW WE WORK TOGETHER (5-STEP ENGAGEMENT JOURNEY)
   ========================================================================= */
export const ENTERPRISE_PROCESS_STEPS = [
  {
    step: "01",
    title: {
      en: "Requirements Discovery & Technical Audit",
      ar: "جلسة الاستكشاف والتدقيق الأولي",
    },
    description: {
      en: "We analyze your business model, operational bottlenecks, technical stack, and target growth metrics in a focused advisory session.",
      ar: "ندرس نموذج أعمالك، التحديات التشغيلية، بنيتك التقنية الحالية، وأهداف النمو المرجوة في جلسة استشارية فنية معمقة.",
    },
  },
  {
    step: "02",
    title: {
      en: "Solution Scope & Architecture Blueprint",
      ar: "تحديد نطاق الحل والمعمارية البرمجية",
    },
    description: {
      en: "Our architects map out a concrete deliverable specification, data flow diagrams, security considerations, and milestone timelines.",
      ar: "يقوم مهندسونا برسم مخطط معماري متكامل، وتحديد المخرجات البرمجية بدقة، معايير الأمان، وجدول المراحل الزمنية.",
    },
  },
  {
    step: "03",
    title: {
      en: "Tailored Proposal & Milestone Agreement",
      ar: "المقترح المخصص وخارطة الإنجاز",
    },
    description: {
      en: "You receive a clear, comprehensive proposal outlining deliverables, technical stack, team allocation, and transparent pricing structure.",
      ar: "تتلقى مقترحاً تفصيلياً يوضح كافة المخرجات، الأدوات البرمجية المستخدمة، توزيع الفريق، ونموذج التسعير الواضح.",
    },
  },
  {
    step: "04",
    title: {
      en: "Agile Implementation & Testing",
      ar: "التنفيذ المرحلي والاختبارات الدقيقة",
    },
    description: {
      en: "We build and iterate with regular sprint demos, staging environments, security checks, and client feedback loops.",
      ar: "نبني ونطور وفق منهجية رشيقة تتيح لك مراجعة الإنجاز أسبوعياً في بيئات اختبارية مؤمنة مع تدقيق الجودة المستمر.",
    },
  },
  {
    step: "05",
    title: {
      en: "Production Launch & Continuous Evolution",
      ar: "الإطلاق الفعلي والتطوير المستمر",
    },
    description: {
      en: "Stress testing, DNS and cloud cutover, operational team handover, and ongoing performance monitoring to sustain scale.",
      ar: "اختبارات الضغط، الإطلاق الرسمي على الخوادم الحية، تدريب فريقك، ومراقبة مؤشرات الأداء لضمان الاستقرار والتوسع.",
    },
  },
]

/* =========================================================================
   5. ENTERPRISE FREQUENTLY ASKED QUESTIONS
   ========================================================================= */
export const ENTERPRISE_FAQS = [
  {
    id: "efaq-1",
    q: {
      en: "How does SWIPEBAY formulate enterprise project pricing?",
      ar: "كيف تحدد سويب باي تسعير المشاريع وحلول الشركات؟",
    },
    a: {
      en: "Because enterprise solutions vary in technical complexity, integrations, and deliverable scale, pricing is structured on a Custom Scope model. Following our initial architecture consultation, we prepare a transparent, itemized proposal detailing deliverables, timelines, and milestones with zero hidden surprises.",
      ar: "نظراً لأن متطلبات المؤسسات تختلف في التعقيد البرمجي وحجم المخرجات، فإننا نعتمد نموذج 'عرض السعر المخصص'. بعد جلسة الاستكشاف الأولية، نقدم مقترحاً شفافاً ومفصلاً يوضح كل مرحلة ومخرجاتها وتكلفتها بدقة ودون أي تكاليف خفية.",
    },
  },
  {
    id: "efaq-2",
    q: {
      en: "Can we combine services from different disciplines into a single contract?",
      ar: "هل يمكننا دمج خدمات من مجالات مختلفة في تعاقد واحد؟",
    },
    a: {
      en: "Yes, this is SWIPEBAY's core strength. We assemble multidisciplinary teams uniting Brand Strategy, Software Engineering, Media Production, AI Automation, and Cloud Infrastructure under a single project director, eliminating the friction of managing multiple disconnected vendors.",
      ar: "نعم، هذه هي نقطة القوة المحورية في سويب باي. نوحد فرقا متكاملة تشمل الهوية البصرية، الهندسة البرمجية، إنتاج الفيديو، الذكاء الاصطناعي، والاستضافة السحابية تحت قيادة مدير مشروع موحد، مما يعفيك من عناء التنسيق بين شركات ومستقلين متعددين.",
    },
  },
  {
    id: "efaq-3",
    q: {
      en: "How long does it take to receive a custom quote after submitting our requirements?",
      ar: "كم يستغرق استلام عرض السعر والمقترح الفني بعد إرسال المتطلبات؟",
    },
    a: {
      en: "Our solutions engineering leads review your submitted configuration within 24 business hours. If requirements are clear, an initial architectural scope and estimate is delivered promptly; for complex enterprise systems, we schedule a 30-minute discovery call first.",
      ar: "يقوم مهندسو الحلول بمراجعة البيانات المرسلة خلال 24 ساعة عمل. إذا كانت المتطلبات واضحة، يتم إرسال المقترح الفني والتقديري سريعاً، وفي المشاريع الكبرى المعقدة نحدد مكالمة استكشافية مدتها 30 دقيقة لتدقيق التفاصيل.",
    },
  },
  {
    id: "efaq-4",
    q: {
      en: "What engagement models do you offer for ongoing services?",
      ar: "ما هي نماذج التعاقد المتاحة للخدمات المستمرة؟",
    },
    a: {
      en: "We offer both milestone-based fixed projects (with scheduled stage deliveries) and dedicated strategic retainers. Retainers provide a dedicated allocation of senior engineering, design, and marketing resources each month to continuously scale and maintain your platform.",
      ar: "نوفر كلاً من التعاقدات المرحلية محددة المخرجات (Fixed-Scope Milestones) والشراكات الاستراتيجية المستمرة (Dedicated Retainers) التي توفر لفريقك ساعات مخصصة شهرياً من كبار المطورين والمصممين لتطوير وصيانة منصتك باستمرار.",
    },
  },
  {
    id: "efaq-5",
    q: {
      en: "Do you offer service level agreements (SLAs) for enterprise cloud hosting?",
      ar: "هل تقدمون اتفاقيات مستوى خدمة (SLA) للاستضافة السحابية المؤسسية؟",
    },
    a: {
      en: "Yes. For enterprise infrastructure and managed cloud environments, we structure custom SLAs guaranteeing up to 99.98% uptime, proactive threat monitoring, daily automated database backups, and prioritized technical escalation protocols.",
      ar: "نعم. للبنية التحتية والاستضافات السحابية المدارة للشركات، نصيغ اتفاقيات مستوى خدمة تضمن جاهزية حتى 99.98%، ومراقبة حية للأمان، ونسخاً احتياطياً يومياً، مع قنوات دعم فني ذات أولوية قصوى.",
    },
  },
]

