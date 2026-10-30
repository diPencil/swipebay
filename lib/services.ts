/**
 * Official SWIPEBAY Services Architecture & Content Catalog
 * Source of truth: https://swipebay.net/
 */

export type ServiceCategory = "creative" | "engineering" | "intelligence" | "infrastructure"

export interface ServicePracticalApplication {
  title: string
  description: string
}

export interface ServiceProcessStep {
  step: string
  title: string
  description: string
}

export interface ServiceLocalizedContent {
  title: string
  shortDescription: string
  tagline: string
  overview: string
  challengeStatement: string
  deliverables: string[]
  practicalApplications: ServicePracticalApplication[]
  processSteps: ServiceProcessStep[]
}

export interface ServiceDefinition {
  id: string
  slug: string
  order: number
  category: ServiceCategory
  icon: string
  image: string
  relatedSlugs: string[]
  en: ServiceLocalizedContent
  ar: ServiceLocalizedContent
}

export const SERVICE_CATEGORIES: Record<
  ServiceCategory,
  {
    id: ServiceCategory
    en: { name: string; description: string }
    ar: { name: string; description: string }
  }
> = {
  creative: {
    id: "creative",
    en: {
      name: "Brand & Creative Systems",
      description: "Visual identity design, high-impact commercial media, and memorable storytelling.",
    },
    ar: {
      name: "الهوية والإنتاج الإبداعي",
      description: "تصميم الهويات التجارية، الإنتاج المرئي التجاري، وصناعة القصص البصرية الراسخة.",
    },
  },
  engineering: {
    id: "engineering",
    en: {
      name: "Core Digital Engineering",
      description: "Robust software engineering, scalable web & mobile platforms, and growth strategy.",
    },
    ar: {
      name: "الهندسة البرمجية والنمو",
      description: "تطوير البرمجيات المتقدمة، منصات الويب وتطبيقات الهواتف، واستراتيجيات التوسع.",
    },
  },
  intelligence: {
    id: "intelligence",
    en: {
      name: "Applied Intelligence & Automation",
      description: "Bespoke AI integrations, cognitive assistants, and autonomous workflow pipelines.",
    },
    ar: {
      name: "الذكاء الاصطناعي والأتمتة",
      description: "تكامل حلول الذكاء الاصطناعي، المساعدين الأذكياء، وأتمتة مسارات العمل المؤسسية.",
    },
  },
  infrastructure: {
    id: "infrastructure",
    en: {
      name: "Critical Infrastructure & IT",
      description: "High-availability cloud hosting, enterprise email suites, and resilient IT operations.",
    },
    ar: {
      name: "البنية السحابية وتكنولوجيا المعلومات",
      description: "استضافة سحابية عالية الاستقرار، بريد رسمي للشركات، وإدارة البنية التحتية الحيوية.",
    },
  },
}

export const SWIPEBAY_SERVICES: ServiceDefinition[] = [
  {
    id: "branding-design",
    slug: "branding-design",
    image: "/images/services/branding.jpg",
    order: 1,
    category: "creative",
    icon: "Palette",
    relatedSlugs: ["media-production", "web-app-development", "marketing"],
    en: {
      title: "Branding Design",
      shortDescription: "Strategic visual identities, logo architecture, and brand guidelines built for modern market recognition.",
      tagline: "Distinction by design.",
      overview:
        "A brand is more than a logo. It is the operating system of your market reputation. We engineer cohesive visual systems that articulate company values, establish immediate credibility, and project market authority across every customer touchpoint.",
      challengeStatement:
        "Many growing companies struggle with fragmented visual identities, inconsistent customer messaging, or legacy graphics that fail to reflect their true technical and commercial capabilities.",
      deliverables: [
        "Visual Identity Systems & Logo Architecture",
        "Brand Strategy & Market Positioning",
        "Comprehensive Design Tokens & Styleguides",
        "Typography Hierarchy & Custom Color Palettes",
        "Marketing Collateral & Corporate Stationery",
        "Digital & Social Media Asset Kits",
      ],
      practicalApplications: [
        {
          title: "Corporate Identity Modernization",
          description: "Elevating established enterprises with a refreshed, contemporary visual system that aligns with modern expectations.",
        },
        {
          title: "New Venture & Product Launch",
          description: "Architecting a distinctive, market-ready identity from the ground up to establish immediate authority.",
        },
        {
          title: "Cross-Platform Design System",
          description: "Standardizing typography, icons, colors, and design tokens for engineering and design team consistency.",
        },
        {
          title: "Executive & Investor Collateral",
          description: "Designing high-stakes presentation decks, annual reports, and physical collateral that reinforce enterprise credibility.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Discovery & Market Research",
          description: "We audit your competitive landscape, company values, audience expectations, and strategic commercial goals.",
        },
        {
          step: "02",
          title: "Concept Exploration",
          description: "Our art directors develop contrasting visual directions, exploring typography, symbol geometry, and mood systems.",
        },
        {
          step: "03",
          title: "System Architecture & Refinement",
          description: "Selected directions are expanded into rigorous grids, clear color spaces, and complete design component libraries.",
        },
        {
          step: "04",
          title: "Deliverables & Asset Guidelines",
          description: "We deliver full vector packages, export suites, and a comprehensive brand manual for effortless team execution.",
        },
      ],
    },
    ar: {
      title: "تصميم الهوية التجارية",
      shortDescription: "هويات بصرية استراتيجية، تصميم شعارات، وأدلة علامة تجارية متكاملة تُرسخ مكانتكم في السوق.",
      tagline: "تصميم يصنع التميز.",
      overview:
        "الهوية التجارية ليست مجرد شعار، بل هي النظام البصري الذي يُعبر عن هوية ومصداقية شركتك أمام العملاء. نبتكر أنظمة بصرية متكاملة تعكس جوهر الشركة، وتبني الثقة مع الجمهور، وتضمن تناغماً مطلقاً عبر جميع المنصات الرقمية والمطبوعة.",
      challengeStatement:
        "تواجه العديد من الشركات تحدي تشتت هويتها البصرية أو اعتمادها على تصاميم قديمة لم تعد تليق بحجم تطور خدماتها ومكانتها التنافسية.",
      deliverables: [
        "أنظمة الهوية البصرية المتكاملة وهندسة الشعارات",
        "استراتيجية العلامة التجارية والتموضع التنافسي",
        "أدلة التصميم والخطوط والألوان القياسية",
        "تنسيقات الخطوط ولوحات الألوان المعتمدة",
        "المواد التسويقية والمطبوعات الرسمية للشركات",
        "حزم الأصول الرقمية لمنصات التواصل الاجتماعي",
      ],
      practicalApplications: [
        {
          title: "تحديث الهويات المؤسسية القائمة",
          description: "إعادة صياغة الهوية البصرية للشركات العريقة برؤية حديثة تواكب متطلبات السوق الحالية.",
        },
        {
          title: "إطلاق المنتجات والشركات الجديدة",
          description: "بناء هوية جديدة متكاملة من البداية لترسيخ حضور قوي وثقة فورية لدى العملاء والمستثمرين.",
        },
        {
          title: "توحيد أنظمة التصميم الرقمي",
          description: "تنسيق عناصر التصميم والألوان والخطوط لتسهيل عمل فرق البرمجة والتسويق بأسلوب موحد.",
        },
        {
          title: "عروض الاستثمار والمواد الرسمية",
          description: "تصميم العروض التقديمية والتقارير المالية والسنوية بصورة احترافية تعكس المكانة الحقيقية للشركة.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "البحث واستكشاف الهوية",
          description: "دراسة معمقة للمجال والمنافسين، وفهم رؤية الشركة وجمهورها المستهدف بدقة.",
        },
        {
          step: "02",
          title: "ابتكار المفاهيم البصرية",
          description: "يقوم فريق التوجيه الفني بتطوير عدة مسارات بصرية أولية تشمل الألوان والخطوط والشعار.",
        },
        {
          step: "03",
          title: "البناء والتطوير المتكامل",
          description: "تطوير المسار المعتمد وتوسيعه ليشمل كافة تطبيقات الهوية وقواعد استخدامها الدقيقة.",
        },
        {
          step: "04",
          title: "تسليم الأدلة والأصول النهائية",
          description: "تزويدكم بكافة ملفات التصميم الأصلية ودليل شامل (Brand Guidelines) لضمان الاستخدام الصحيح مستقبلاً.",
        },
      ],
    },
  },
  {
    id: "media-production",
    slug: "media-production",
    image: "/images/services/media-production.jpg",
    order: 2,
    category: "creative",
    icon: "Video",
    relatedSlugs: ["branding-design", "marketing", "web-app-development"],
    en: {
      title: "Media Production",
      shortDescription: "High-end commercial video production, motion graphics, and visual storytelling that engage audiences.",
      tagline: "Cinematic impact for real business growth.",
      overview:
        "Modern audiences demand cinematic clarity. We produce commercial films, product showcase videos, and motion graphics that capture attention within the first three seconds and communicate complex commercial value in a compelling visual narrative.",
      challengeStatement:
        "Static graphics and text-heavy explainers no longer achieve high engagement in digital channels where audiences expect broadcast-grade visual pacing and emotional resonance.",
      deliverables: [
        "Commercial Video Production & Brand Films",
        "Motion Graphics & 2D/3D Product Visualizations",
        "Corporate Documentaries & Leadership Overviews",
        "Short-Form Video Content for Social Advertising",
        "High-Fidelity Audio Design & Sound Mixing",
        "Multi-Platform Aspect Ratio Formatting (16:9, 9:16, 1:1)",
      ],
      practicalApplications: [
        {
          title: "Product Launch Campaigns",
          description: "Showcasing product craftsmanship, hardware details, and functional advantages with broadcast-grade lighting and motion.",
        },
        {
          title: "Digital Advertising Creatives",
          description: "Crafting high-hook video ad variations for Meta, TikTok, and YouTube campaigns optimized for conversion.",
        },
        {
          title: "Corporate & Investor Storytelling",
          description: "Documentary-style corporate profiles that communicate institutional scale, milestones, and leadership vision.",
        },
        {
          title: "Explainer Motion Graphics",
          description: "Simplifying sophisticated SaaS workflows, fintech platforms, or technical architectures through elegant 2D/3D motion.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Concept & Narrative Scripting",
          description: "We craft targeted treatments, scene scripts, and voiceover copy tailored to your campaign objectives.",
        },
        {
          step: "02",
          title: "Storyboarding & Styleframes",
          description: "Visualizing every key transition, framing choice, and typographic cue before entering production.",
        },
        {
          step: "03",
          title: "Production & Motion Design",
          description: "Executing cinematography or rendering 2D/3D animations with disciplined attention to pacing, light, and depth.",
        },
        {
          step: "04",
          title: "Sound Design & Final Mastering",
          description: "Integrating professional soundscapes, voice tracks, and color grade mastering across all distribution formats.",
        },
      ],
    },
    ar: {
      title: "الإنتاج الإعلامي والمرئي",
      shortDescription: "إنتاج سينمائي تجاري، موشن جرافيك، ومحتوى مرئي مؤثر يروي قصة علامتكم باحترافية.",
      tagline: "أثر بصري يقود نمو الأعمال.",
      overview:
        "يتطلب جذب اهتمام الجمهور اليوم إتقاناً بصرياً سينمائياً. ننتج إعلانات تجارية، وفيديوهات ترويجية للمنتجات، ورسوماً متحركة متطورة (موشن جرافيك) تخطف الأنظار في الثواني الأولى وتترجم القيمة التجارية لشركتكم بأسلوب مشوق ومقنع.",
      challengeStatement:
        "لم تعد الصور الثابتة أو النصوص الطويلة كافية لتحقيق معدلات تفاعل مرتفعة في عالم رقمي سريع يعتمد كلياً على المحتوى المرئي فائق الجودة.",
      deliverables: [
        "إنتاج الفيديوهات والإعلانات التجارية والأفلام الدعائية",
        "موشن جرافيك ورسوم متحركة ثنائية وثلاثية الأبعاد (2D/3D)",
        "الأفلام المؤسسية والوثائقية لتوثيق مسيرة الشركات",
        "محتوى مرئي سريع ومخصص للإعلانات عبر منصات التواصل",
        "تصميم وهندسة المؤثرات الصوتية والموسيقى التصويرية",
        "تصدير المواد بكافة الأبعاد المناسبة للمنصات (16:9, 9:16, 1:1)",
      ],
      practicalApplications: [
        {
          title: "إطلاق المنتجات والخدمات الجديدة",
          description: "إبراز تفاصيل ومزايا المنتجات بإضاءة وزوايا تصوير سينمائية تعزز رغبة الشراء لدى المستهلكين.",
        },
        {
          title: "الإعلانات الرقمية عالية التحويل",
          description: "صناعة فيديوهات إعلانية مبتكرة مخصصة لمنصات Meta و TikTok و YouTube تحقق أعلى عوائد للميزانيات.",
        },
        {
          title: "أفلام الهوية واستعراض الإنجازات",
          description: "توثيق حجم أعمال الشركة وقصص نجاحها بأسلوب وثائقي راقٍ يعزز مكانتها أمام العملاء والشركاء.",
        },
        {
          title: "فيديوهات الشرح التوضيحية (Explainer)",
          description: "تبسيط طريقة عمل التطبيقات والمنصات المعقدة عبر رسوم متحركة سلسة يسهل استيعابها.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "صياغة الفكرة وكتابة السيناريو",
          description: "تطوير المفهوم الإبداعي وكتابة النصوص والتعليق الصوتي بما يخدم أهداف الحملة بدقة.",
        },
        {
          step: "02",
          title: "رسم لوحة القصة (Storyboarding)",
          description: "تصميم المشاهد وتحديد زوايا الحركة والانتقالات البصرية قبل بدء مراحل التنفيذ الفعلي.",
        },
        {
          step: "03",
          title: "الإنتاج والتحريك والمونتاج",
          description: "تصوير المشاهد أو تحريك الرسوم ثنائية وثلاثية الأبعاد بأعلى معايير الإتقان والتناغم الزمني.",
        },
        {
          step: "04",
          title: "الهندسة الصوتية والتسليم النهائي",
          description: "دمج المؤثرات الصوتية والموسيقى وتدقيق الألوان وتجهيز الملفات بمختلف المقاسات المطلوبة.",
        },
      ],
    },
  },
  {
    id: "web-app-development",
    slug: "web-app-development",
    image: "/images/services/web-app.jpg",
    order: 3,
    category: "engineering",
    icon: "Code2",
    relatedSlugs: ["ai-integration", "automation", "cloud-it-services"],
    en: {
      title: "Web & App Development",
      shortDescription: "Fast, reliable web platforms and native mobile applications engineered for security, speed, and scale.",
      tagline: "Robust engineering for critical digital platforms.",
      overview:
        "Your software infrastructure is the backbone of your digital operation. We build high-speed web platforms, enterprise dashboards, and mobile applications with clean architecture, strict TypeScript typing, responsive layouts, and rock-solid backend reliability.",
      challengeStatement:
        "Generic website builders and fragile software hacks quickly crumble under high user traffic, deliver slow page load times, and create technical debt that halts company growth.",
      deliverables: [
        "Custom Full-Stack Web Applications (Next.js, React, Node.js)",
        "Mobile App Engineering for iOS & Android",
        "Scalable Headless & E-Commerce Architectures",
        "REST & GraphQL API Engineering with Strict Schemas",
        "Enterprise Admin Portals & Interactive Dashboards",
        "Performance Optimization, WCAG Accessibility & Core Web Vitals",
      ],
      practicalApplications: [
        {
          title: "Enterprise Web Applications",
          description: "Building resilient internal portals, transactional client portals, and data management systems.",
        },
        {
          title: "Cross-Platform Mobile Apps",
          description: "Designing native-performance mobile apps delivering consistent user experiences across iOS and Android.",
        },
        {
          title: "High-Traffic E-Commerce Systems",
          description: "Engineering headless commerce with lightning-fast checkouts, multi-currency handling, and inventory sync.",
        },
        {
          title: "Custom System Integrations",
          description: "Connecting bespoke frontends with legacy ERPs, payment gateways, CRM databases, and microservices.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Architecture & Data Modeling",
          description: "We define schema types, API boundaries, security constraints, and database relationships before writing code.",
        },
        {
          step: "02",
          title: "Component & UX Engineering",
          description: "Developing accessible, responsive design components that mirror your brand design system with precision.",
        },
        {
          step: "03",
          title: "Full-Stack Implementation & Testing",
          description: "Writing clean, type-safe logic backed by unit, integration, and load testing against real network conditions.",
        },
        {
          step: "04",
          title: "Deployment & Automated CI/CD",
          description: "Configuring continuous delivery pipelines, zero-downtime releases, and automated observability.",
        },
      ],
    },
    ar: {
      title: "تطوير الويب والتطبيقات",
      shortDescription: "تطوير منصات ويب سريعة وتطبيقات هواتف ذكية متطورة تتميز بأعلى معايير الأمان وقابلية التوسع.",
      tagline: "حلول برمجية متقدمة تلبي تطلعات أعمالكم.",
      overview:
        "تمثل البنية البرمجية العمود الفقري لعملياتكم الرقمية. نقوم ببرمجة وبناء منصات ويب فائقة السرعة، ولوحات تحكم إدارية متطورة، وتطبيقات هواتف ذكية متينة تعتمد على بنية معمارية نظيفة، وتقنيات حديثة، واستقرار تشغيلي يتحمل ضغط النمو المستمر.",
      challengeStatement:
        "تنهار الحلول البرمجية الارتجالية والقوالب الجاهزة الضعيفة أمام تزايد أعداد الزوار، مما يتسبب في بطء التحميل، وتكرار الأعطال، وتراكم الديون التقنية التي تعيق توسع الشركة.",
      deliverables: [
        "تطبيقات ويب مخصصة ومتكاملة (Full-Stack Next.js, React, Node.js)",
        "تطوير تطبيقات الهواتف الذكية لنظامي iOS و Android",
        "منصات تجارة إلكترونية متطورة قابلة للتوسع والربط",
        "بناء واجهات برمجة التطبيقات (APIs) الآمنة والسريعة",
        "لوحات تحكم إدارية تفاعلية وأنظمة لإدارة البيانات",
        "تحسين سرعة التصفح ومعايير الأمان وتجربة المستخدم",
      ],
      practicalApplications: [
        {
          title: "المنصات المؤسسية وتطبيقات الأعمال",
          description: "تطوير بوابات رقمية آمنة تخدم العملاء والموظفين وتسهل المعاملات الإدارية والمالية بدقة.",
        },
        {
          title: "تطبيقات الهواتف الذكية متعددة المنصات",
          description: "بناء تطبيقات هواتف سريعة ومصممة بأعلى معايير تجربة المستخدم لتعمل بكفاءة عبر هواتف آيفون وأندرويد.",
        },
        {
          title: "المتاجر الإلكترونية المتطورة",
          description: "هندسة متاجر رقمية سريعة التحميل تدعم بوابات الدفع المتعددة والربط اللحظي مع المخزون.",
        },
        {
          title: "الربط التقني بين الأنظمة (Integrations)",
          description: "ربط واجهات الويب مع أنظمة الشركة الداخلية (ERP) وقواعد البيانات وبرامج إدارة العملاء بسلاسة.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "التخطيط وهندسة البيانات",
          description: "تحديد الهيكل المعماري للبرمجيات، واجهات الربط، ومتطلبات الأمان قبل البدء في كتابة الشيفرة البرمجية.",
        },
        {
          step: "02",
          title: "تصميم الواجهات وتجربة المستخدم",
          description: "بناء عناصر واجهة المستخدم بمرونة تامة وتوافق مع الهوية البصرية لضمان راحة وسهولة التصفح.",
        },
        {
          step: "03",
          title: "البرمجة والاختبارات الدقيقة",
          description: "كتابة شيفرات برمجية نظيفة وخالية من الثغرات، مع إجراء اختبارات أداء وأمان واختبار ضغط البيانات.",
        },
        {
          step: "04",
          title: "الإطلاق وإعداد خطط النشر المستمر",
          description: "نشر المشروع على الخوادم وإعداد أنظمة المراقبة التلقائية لضمان استقرار المنصة بدون توقف.",
        },
      ],
    },
  },
  {
    id: "business-consulting",
    slug: "business-consulting",
    image: "/images/services/consulting.jpg",
    order: 4,
    category: "engineering",
    icon: "Briefcase",
    relatedSlugs: ["automation", "web-app-development", "marketing"],
    en: {
      title: "Business Consulting",
      shortDescription: "Data-grounded consulting on digital transformation, operational efficiency, and scalable market growth.",
      tagline: "Strategic clarity for modern enterprises.",
      overview:
        "Technology investments only generate value when aligned with commercial logic. We partner with founders, executives, and department leaders to evaluate digital maturity, uncover operational bottlenecks, and formulate actionable technology roadmaps that deliver quantifiable ROI.",
      challengeStatement:
        "Organizations often waste significant capital on software licenses they underutilize, manual workflows that drain employee time, and unaligned digital strategies that create operational friction.",
      deliverables: [
        "Digital Transformation Strategy & Modernization Roadmaps",
        "Operational Workflow & Process Bottleneck Audits",
        "Technology Stack Evaluation & Vendor Selection",
        "Product-Market Positioning & Commercial Growth Planning",
        "Software Architecture Feasibility Studies",
        "Change Management & Technical Team Enablement",
      ],
      practicalApplications: [
        {
          title: "Digital Maturity Evaluation",
          description: "Conducting diagnostic audits across your business operations to identify high-leverage opportunities for digital intervention.",
        },
        {
          title: "Software Stack Consolidation",
          description: "Reviewing existing SaaS and custom software investments to eliminate duplicate expenses and improve interoperability.",
        },
        {
          title: "Growth Strategy Roadmapping",
          description: "Formulating a phased 12-to-24-month technology and operational roadmap aligned with commercial revenue targets.",
        },
        {
          title: "Technical Feasibility & Due Diligence",
          description: "Evaluating architectural viability and implementation risks before committing significant capital to new platforms.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Stakeholder Discovery & Context",
          description: "We interview leadership teams, audit operational workflows, and review existing technical systems.",
        },
        {
          step: "02",
          title: "Diagnostic Audit & Analysis",
          description: "Identifying inefficiencies, security gaps, friction points, and opportunities for automation.",
        },
        {
          step: "03",
          title: "Strategic Roadmap Formulation",
          description: "Delivering a clear, prioritized blueprint with technology choices, resource allocation, and milestone metrics.",
        },
        {
          step: "04",
          title: "Implementation Oversight",
          description: "Guiding execution teams through technical adoption, vendor evaluations, and milestone reviews.",
        },
      ],
    },
    ar: {
      title: "الاستشارات وتطوير الأعمال",
      shortDescription: "استشارات استراتيجية مبنية على البيانات لقيادة التحول الرقمي، رفع الكفاءة، وتسريع النمو.",
      tagline: "رؤية استراتيجية واضحة للمؤسسات الطموحة.",
      overview:
        "لا تحقق الاستثمارات التقنية قيمتها إلا عندما ترتبط مباشرة بالأهداف التجارية للشركة. نعمل جنباً إلى جنب مع قيادات الشركات لتقييم الجاهزية الرقمية، واكتشاف معوقات الإنتاجية، وصياغة خرائط طريق تقنية واضحة تحقق عوائد استثمارية ملموسة وتقلل الهدر المالي.",
      challengeStatement:
        "تهدر الكثير من الشركات ميزانيات ضخمة في شراء اشتراكات برمجية غير متوافقة، أو إبقاء موظفيها في مهام يدوية روتينية تستهلك الوقت وتعيق سرعة التوسع.",
      deliverables: [
        "استراتيجيات التحول الرقمي الشامل وخرائط التحديث التقني",
        "تدقيق وتحليل كفاءة العمليات وسير العمل الداخلي",
        "تقييم البنى البرمجية واختيار الحلول والموردين الأنسب",
        "خطط النمو والتوسع المؤسسي المدروسة",
        "دراسات الجدوى الفنية للمنصات والمشاريع الرقمية الجديدة",
        "إدارة التغيير وتأهيل فرق العمل لاستخدام الأنظمة الحديثة",
      ],
      practicalApplications: [
        {
          title: "تقييم الجاهزية الرقمية للشركات",
          description: "إجراء تدقيق شامل للعمليات الداخلية للكشف عن فرص التطوير التقني ذات التأثير السريع على المبيعات والكفاءة.",
        },
        {
          title: "ترشيد وتطوير البنية البرمجية",
          description: "مراجعة الاشتراكات والبرامج المستخدمة للقضاء على الازدواجية وخفض التكاليف التشغيلية الزائدة.",
        },
        {
          title: "صياغة خطط النمو التقني",
          description: "وضع خارطة طريق تنفيذية تمتد من 12 إلى 24 شهراً متوافقة مع الأهداف المالية والتوسعية للمؤسسة.",
        },
        {
          title: "دراسات الجدوى الفنية والتقييم الاستثماري",
          description: "فحص متانة الخيارات التقنية ومخاطرها قبل توجيه رؤوس الأموال لبناء منصات أو أنظمة جديدة.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "جلسات الاستماع وتحليل الوضع الراهن",
          description: "الاجتماع بالإدارات التنفيذية وفهم التحديات التشغيلية والبرمجيات المستخدمة حالياً بدقة.",
        },
        {
          step: "02",
          title: "التدقيق التشغيلي والتحليلي",
          description: "تحديد نقاط الهدر الزمني والمالي، وتوثيق الفجوات التقنية وفرص الأتمتة المتاحة.",
        },
        {
          step: "03",
          title: "صياغة المخطط الاستراتيجي",
          description: "تقديم تقرير تنفيذي مفصل يحدد الأولويات، والحلول التقنية الموصى بها، ومؤشرات قياس الأداء.",
        },
        {
          step: "04",
          title: "المتابعة والإشراف على التنفيذ",
          description: "مرافقة فرق العمل ومتابعة تطبيق التوصيات وتدريب الكوادر لضمان تحقيق النتائج المرجوة.",
        },
      ],
    },
  },
  {
    id: "marketing",
    slug: "marketing",
    image: "/images/services/marketing.jpg",
    order: 5,
    category: "engineering",
    icon: "Megaphone",
    relatedSlugs: ["media-production", "branding-design", "business-consulting"],
    en: {
      title: "Marketing & Growth",
      shortDescription: "Performance marketing, SEO, and omnichannel campaigns focused on customer acquisition and return on ad spend.",
      tagline: "Measurable acquisition, sustainable retention.",
      overview:
        "Marketing without disciplined attribution is merely expense. We engineer data-backed digital marketing systems spanning search engine dominance, high-return performance advertising, and funnel optimization to turn qualified interest into measurable commercial revenue.",
      challengeStatement:
        "Companies frequently burn marketing budgets on broad ad impressions that fail to produce qualified leads or clear revenue attribution, leaving leadership uncertain about actual marketing returns.",
      deliverables: [
        "Performance Advertising Campaigns (Google, Meta, TikTok, LinkedIn)",
        "Search Engine Optimization (Technical, On-Page & Semantic SEO)",
        "Conversion Rate Optimization (CRO) & Funnel Analysis",
        "Strategic Content Architecture & Multi-Channel Distribution",
        "Customer Acquisition Attribution & Real-Time Analytics Dashboards",
        "Audience Segmentation & Retargeting Infrastructure",
      ],
      practicalApplications: [
        {
          title: "High-Intent Lead Generation",
          description: "Deploying targeted Google Search and LinkedIn ad funnels capturing enterprise decision-makers actively seeking solutions.",
        },
        {
          title: "Long-Term Organic Search Dominance",
          description: "Technical SEO audits, speed optimizations, and authoritative content clusters engineered for sustainable rank leadership.",
        },
        {
          title: "E-Commerce ROAS Optimization",
          description: "Executing granular creative testing and retargeting architectures to maximize return on ad spend for consumer brands.",
        },
        {
          title: "Funnel & Landing Page Optimization",
          description: "Auditing user conversion paths, eliminating friction, and improving conversion rates across public touchpoints.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Market & Audience Auditing",
          description: "Analyzing search volume, competitor bidding behavior, buyer intent signals, and historical performance.",
        },
        {
          step: "02",
          title: "Funnel Architecture & Tracking Setup",
          description: "Configuring server-side tracking, custom conversions, and analytics dashboards before spending ad capital.",
        },
        {
          step: "03",
          title: "Creative Deployment & Agile Testing",
          description: "Launching disciplined creative angles, copy variations, and audience cohorts with real-time budget adjustments.",
        },
        {
          step: "04",
          title: "Optimization & Scaling",
          description: "Scaling high-performing segments, cutting ineffective spend, and continuously testing landing page conversions.",
        },
      ],
    },
    ar: {
      title: "التسويق واستراتيجيات النمو",
      shortDescription: "حملات تسويقية مبنية على الأداء، وتحسين محركات البحث لتحقيق أعلى عائد على الاستثمار.",
      tagline: "تسويق قائم على النتائج والنمو المستدام.",
      overview:
        "التسويق بدون قياس دقيق للعائد هو مجرد هدر للميزانيات. نصمم وندير منظومات تسويق رقمي مبنية على تحليل البيانات، تجمع بين تصدر نتائج محركات البحث (SEO)، وإعلانات الأداء المدفوعة، وتحسين مسارات التحويل لتحويل الزوار إلى عملاء فعليين ومبيعات مؤكدة.",
      challengeStatement:
        "تهدر العديد من الشركات ميزانياتها الإعلانية على مشاهدات سطحية أو حملات عشوائية لا تجلب عملاء مستهدفين ولا توفر تقارير واضحة توضح العائد الحقيقي على الإنفاق.",
      deliverables: [
        "إدارة الحملات الإعلانية المدفوعة (Google, Meta, TikTok, LinkedIn)",
        "تحسين محركات البحث (SEO الداخلي والتقني وبناء الروابط)",
        "تحسين معدلات التحويل والمبيعات (CRO) وفحص مسارات الزوار",
        "استراتيجيات صناعة المحتوى التنافسي وتوزيعه عبر القنوات",
        "ربط بكسلات التتبع ولوحات التحليل اللحظي لنتائج الحملات",
        "هيكلة شرائح الجمهور المستهدف وإعادة الاستهداف الذكي",
      ],
      practicalApplications: [
        {
          title: "جلب العملاء المحتملين (Lead Generation)",
          description: "إطلاق حملات بحث دقيقة عبر Google و LinkedIn تستهدف أصحاب القرار في الشركات في لحظة بحثهم عن الخدمة.",
        },
        {
          title: "تصدر نتائج محركات البحث المستدام",
          description: "تهيئة المواقع تقنياً وصياغة مقالات متخصصة تضمن تصدر الكلمات البحثية الرئيسية في قطاع أعمالكم.",
        },
        {
          title: "مضاعفة مبيعات المتاجر الإلكترونية",
          description: "اختبار الرسائل الإعلانية وبناء مسارات إعادة استهداف ذكية لزيادة متوسط قيمة الطلب وخفض كلفة الاستحواذ.",
        },
        {
          title: "تطوير صفحات الهبوط ومسار التحويل",
          description: "تحليل تجربة الزائر داخل الموقع وإزالة نقاط التردد لرفع نسبة العملاء المسجلين أو المشترين.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "تحليل السوق وسلوك الجمهور",
          description: "دراسة نية الشراء، وحجم الكلمات البحثية، وأنشطة المنافسين لتحديد أفضل الفرص الإعلانية.",
        },
        {
          step: "02",
          title: "إعداد بكسلات التتبع والقياس",
          description: "ربط وتأكيد أدوات التتبع المتقدمة لضمان تسجيل كل عملية تحويل بدقة وشفافية متناهية.",
        },
        {
          step: "03",
          title: "إطلاق الحملات والاختبار المرحلي",
          description: "إطلاق عدة نسخ من الإعلانات والتصاميم لاختبار أداء كل شريحة وتوجيه الميزانية نحو الإعلانات الأكثر ربحاً.",
        },
        {
          step: "04",
          title: "التحسين المستمر ومضاعفة النتائج",
          description: "متابعة يومية لمؤشرات الأداء، وخفض تكلفة الحصول على العميل، وتوسيع نطاق الحملات الناجحة.",
        },
      ],
    },
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    image: "/images/services/ai-integration.jpg",
    order: 6,
    category: "intelligence",
    icon: "Sparkles",
    relatedSlugs: ["automation", "web-app-development", "cloud-it-services"],
    en: {
      title: "AI Integration",
      shortDescription: "Practical artificial intelligence integrations, custom LLM solutions, and automated predictive workflows.",
      tagline: "Applied intelligence, engineered for business utility.",
      overview:
        "Artificial intelligence is only valuable when it solves operational friction. We embed production-ready Large Language Model (LLM) pipelines, specialized AI assistants, and intelligent data extraction systems directly into your enterprise software, eliminating repetitive overhead with strict data privacy.",
      challengeStatement:
        "Most businesses struggle to move beyond novelty AI chatbots into production-grade systems that interact reliably with real business databases, respect enterprise privacy, and provide accurate answers without hallucinations.",
      deliverables: [
        "Custom Enterprise AI Assistants & Internal Copilots",
        "Retrieval-Augmented Generation (RAG) Architecture & Vector Databases",
        "Fine-Tuned LLM Pipelines & Structured Output Extraction",
        "Automated Document Processing & Unstructured Data Parsing",
        "Intelligent Semantic Search across Corporate Knowledge Bases",
        "Enterprise Data Privacy, Guardrails & LLM Latency Auditing",
      ],
      practicalApplications: [
        {
          title: "Customer Support Copilots",
          description: "Grounding automated assistants on verified company documentation to resolve customer inquiries 24/7 without hallucinations.",
        },
        {
          title: "Automated Document Extraction",
          description: "Parsing PDFs, invoices, contracts, and scanned forms into structured database records within seconds.",
        },
        {
          title: "Internal Knowledge Retrieval",
          description: "Allowing team members to query internal policies, technical documentation, and project histories using natural language.",
        },
        {
          title: "Predictive Operations & Categorization",
          description: "Automatically triaging incoming support tickets, tagging sales leads, and analyzing sentiment at scale.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Use-Case & Security Evaluation",
          description: "We identify high-impact processes and establish strict data isolation boundaries to protect confidential IP.",
        },
        {
          step: "02",
          title: "Data Pipeline & RAG Engineering",
          description: "Building vector stores, chunking strategies, and retrieval pipelines that supply models with factual context.",
        },
        {
          step: "03",
          title: "Integration & Guardrail Implementation",
          description: "Connecting models to your web or mobile app with input validation, output guardrails, and latency caching.",
        },
        {
          step: "04",
          title: "Evaluation & Continuous Tuning",
          description: "Benchmarking factual accuracy, monitoring prompt costs, and refining retrieval models with production telemetry.",
        },
      ],
    },
    ar: {
      title: "تكامل وحلول الذكاء الاصطناعي",
      shortDescription: "دمج تقنيات الذكاء الاصطناعي التوليدي والنماذج المخصصة لأتمتة المهام وتطوير المنتجات.",
      tagline: "ذكاء اصطناعي عملي يخدم أهداف مؤسستك.",
      overview:
        "تكمن القيمة الحقيقية للذكاء الاصطناعي في حل التحديات التشغيلية اليومية للشركات. نقوم بدمج نماذج اللغات الكبيرة (LLMs) والحلول الذكية داخل برمجياتكم وأنظمتكم القائمة، مع الالتزام بأعلى معايير حماية وخصوصية البيانات المؤسسية لمنع تسريب أي معلومات حساسة.",
      challengeStatement:
        "تجد معظم الشركات صعوبة في الانتقال من التجارب الترفيهية للذكاء الاصطناعي إلى بناء أنظمة مؤسسية معتمدة ترتبط بقواعد بياناتها الحقيقية وتجيب بدقة خالية من الأخطاء التخيلية.",
      deliverables: [
        "بناء مساعدين أذكياء مخصصين لخدمة العملاء وفرق العمل",
        "تطبيق تقنيات البحث الدلالي واسترجاع البيانات (RAG & Vector DBs)",
        "دمج وتطويع نماذج الذكاء الاصطناعي لاستخراج البيانات المنظمة",
        "المعالجة التلقائية للمستندات والعقود والملفات المعقدة",
        "محركات بحث ذكية داخل قواعد المعرفة والسياسات الداخلية",
        "حوكمة أمان البيانات ووضع ضوابط صارمة لحماية سرية الشركة",
      ],
      practicalApplications: [
        {
          title: "مساعدين أذكياء لخدمة العملاء",
          description: "توفير مساعد ذكي مدرب على سياسات ومنتجات شركتكم للرد على استفسارات العملاء على مدار الساعة بدقة مطلقة.",
        },
        {
          title: "استخراج البيانات التلقائي من المستندات",
          description: "تحويل الفواتير والعقود وملفات PDF إلى بيانات منظمة تدخل قواعد البيانات في أجزاء من الثانية دون إدخال يدوي.",
        },
        {
          title: "محرك البحث الذكي لفرق العمل",
          description: "تمكين الموظفين من الوصول الفوري لأي معلومة أو سياسة داخلية عبر طرح أسئلة باللغة الطبيعية والحصول على إجابات موثقة.",
        },
        {
          title: "تصنيف وتوجيه الطلبات آلياً",
          description: "فرز التذاكر الواردة وتصنيف العملاء المحتملين وتحليل مشاعر الرسائل لتحسين سرعة وجودة الاستجابة.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "دراسة الجدوى وتحديد معايير الأمان",
          description: "تحديد مسارات العمل المناسبة للأتمتة الذكية ورسم حدود حماية سرية بيانات الشركة وبيانات عملائها.",
        },
        {
          step: "02",
          title: "هندسة البيانات وقواعد الاسترجاع (RAG)",
          description: "معالجة بيانات الشركة وبناء قواعد استرجاع ذكية تزود النموذج بالحقائق الدقيقة قبل توليد الإجابة.",
        },
        {
          step: "03",
          title: "الربط البرمجي ووضع الضوابط (Guardrails)",
          description: "توصيل النماذج الذكية بالواجهات البرمجية وتطبيق فلاتر منع الإجابات الخاطئة وضمان سرعة الاستجابة.",
        },
        {
          step: "04",
          title: "الاختبار الدقيق والمراقبة المستمرة",
          description: "متابعة دقة الإجابات، والتحكم في تكاليف الاستهلاك، وتحسين استجابة الأنظمة مع الاستخدام الفعلي.",
        },
      ],
    },
  },
  {
    id: "automation",
    slug: "automation",
    image: "/images/services/automation.jpg",
    order: 7,
    category: "intelligence",
    icon: "Workflow",
    relatedSlugs: ["ai-integration", "business-consulting", "web-app-development"],
    en: {
      title: "Automation Solutions",
      shortDescription: "End-to-end workflow automation linking CRMs, ERPs, and internal operations to minimize manual effort.",
      tagline: "Frictionless operations at scale.",
      overview:
        "Manual data entry and disjointed software systems silently bleed company margins. We architect resilient automated workflows that link customer interactions, billing systems, ERP records, and operational databases into a single, cohesive engine that runs 24/7 without human intervention.",
      challengeStatement:
        "Teams waste hundreds of hours each month re-typing lead data across platforms, generating routine invoices manually, and troubleshooting human data entry mistakes.",
      deliverables: [
        "Cross-System ERP & CRM Orchestration",
        "Automated Lead Capture, Enrichment & Routing Pipelines",
        "Automated Invoicing, Payment Confirmations & Financial Sync",
        "Custom Webhook Integration Architecture & Event-Driven Triggers",
        "Scheduled Operational Reporting & Automated Metric Summaries",
        "Error-Handling Protocols, Retry Queues & System Health Alerts",
      ],
      practicalApplications: [
        {
          title: "Lead-to-Deal Pipeline Sync",
          description: "Automatically syncing landing page inquiries into CRM records, assigning sales reps, and triggering instant customer alerts.",
        },
        {
          title: "Billing & Financial Reconciliation",
          description: "Triggering automatic invoices, syncing payment receipts with accounting systems, and updating account access immediately.",
        },
        {
          title: "Cross-Platform Inventory Updates",
          description: "Synchronizing stock availability between ecommerce storefronts, warehouse databases, and point-of-sale systems.",
        },
        {
          title: "Automated Customer Onboarding",
          description: "Provisioning account access, generating welcome documentation, and scheduling follow-up cadences without manual friction.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Operational Process Mapping",
          description: "We document every manual step, data transfer, and platform touchpoint across your existing operations.",
        },
        {
          step: "02",
          title: "Integration & Schema Design",
          description: "Establishing API connection points, webhook listeners, field mappings, and security authentications.",
        },
        {
          step: "03",
          title: "Pipeline Construction & Testing",
          description: "Building automated logic with error handling, retry backoffs, and fallback alerts for edge cases.",
        },
        {
          step: "04",
          title: "Deployment & Telemetry Monitoring",
          description: "Activating live pipelines with logging dashboards to track throughput, execution latency, and error prevention.",
        },
      ],
    },
    ar: {
      title: "أتمتة العمليات وسير العمل",
      shortDescription: "ربط وتكامل الأنظمة المؤسسية (ERP و CRM) لأتمتة المهام الروتينية والقضاء على الأخطاء اليدوية.",
      tagline: "عمليات تشغيلية بلا تعقيد أو هدر للوقت.",
      overview:
        "يؤدي الإدخال اليدوي للبيانات وتشتت البرامج المختلفة إلى هدر الوقت وزيادة الأخطاء البشرية. نصمم ونبني مسارات أتمتة محكمة تربط بين برامج إدارة الموارد (ERP)، وأنظمة العملاء (CRM)، وبوابات الدفع، لتتدفق البيانات بسلاسة وتعمل منظومتكم التشغيلية تلقائياً على مدار الساعة.",
      challengeStatement:
        "تضيع فرق العمل مئات الساعات شهرياً في نقل البيانات يدوياً بين البرامج، وإصدار الفواتير الروتينية، ومحاولة معالجة أخطاء الإدخال المكررة.",
      deliverables: [
        "الربط والتكامل التلقائي بين أنظمة ERP و CRM",
        "أتمتة استقبال وتوزيع ومتابعة طلبات العملاء الجدد",
        "أنظمة الفوترة التلقائية وإشعارات الدفع والربط المحاسبي",
        "بناء مسارات التكامل عبر Webhooks والأنظمة الحدثية",
        "تقارير تشغيلية آلية دورية تُرسل لفرق الإدارة",
        "بناء بروتوكولات حماية وتتبع الأخطاء وإعادة المحاولة التلقائية",
      ],
      practicalApplications: [
        {
          title: "مزامنة دورة المبيعات والعملاء المحتملين",
          description: "تسجيل بيانات العملاء الواردة من الموقع داخل نظام CRM وتعيين مسؤول المبيعات وإرسال رسالة ترحيبية فوراً.",
        },
        {
          title: "أتمتة الفواتير والتحصيل المالي",
          description: "إصدار وتأكيد الفواتير تلقائياً فور إتمام الدفع، وتحديث البرامج المحاسبية وتفعيل الاشتراكات بلا تدخل بشري.",
        },
        {
          title: "المزامنة اللحظية بين المتجر والمخزون",
          description: "تحديث كميات المنتجات المباعة عبر متجركم فوراً لضمان عدم بيع أي منتج غير متوفر وتفادي الإحراج مع العملاء.",
        },
        {
          title: "أتمتة تأهيل العملاء الجدد (Onboarding)",
          description: "إنشاء الحسابات، وإرسال بيانات تسجيل الدخول وملفات الإرشادات الترحيبية بصورة مؤتمتة فور توقيع العقود.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "رسم وتوثيق مسار العمليات اليدوية",
          description: "توثيق كل خطوة يدوية وتحديد البرامج المشاركة والبيانات التي تحتاج للنقل والمزامنة بدقة.",
        },
        {
          step: "02",
          title: "تحديد آليات الربط (APIs & Webhooks)",
          description: "تصميم البنية التقنية ومطابقة حقول البيانات وتأمين مفاتيح الربط والتوثيق الأمني.",
        },
        {
          step: "03",
          title: "برمجة وبناء مسارات العمل واختبارها",
          description: "بناء التدفقات المؤتمتة مع إعداد أنظمة معالجة الاستثناءات والتنبيه التلقائي في حال حدوث أي خطأ.",
        },
        {
          step: "04",
          title: "التشغيل والمراقبة اللحظية",
          description: "بدء تشغيل مسارات الأتمتة ومتابعة أدائها وسرعتها لضمان توفير آلاف الساعات لفرق العمل لديكم.",
        },
      ],
    },
  },
  {
    id: "hosting-plans",
    slug: "hosting-plans",
    image: "/images/services/hosting-plans.jpg",
    order: 8,
    category: "infrastructure",
    icon: "Server",
    relatedSlugs: ["cloud-it-services", "email-plans", "web-app-development"],
    en: {
      title: "Hosting Plans",
      shortDescription: "Enterprise-grade web and application hosting with guaranteed uptime, DDoS protection, and regular backups.",
      tagline: "High-availability infrastructure you can rely on.",
      overview:
        "Every second of downtime costs revenue and brand trust. We provide fully managed cloud hosting, dedicated VPS environments, and optimized web infrastructure designed for mission-critical applications, supported by active security defense and continuous performance tuning.",
      challengeStatement:
        "Cheap shared hosting environments offer poor server isolation, frequent unexplained outages during traffic surges, and absent technical support when issues arise.",
      deliverables: [
        "Fully Managed Cloud Hosting & Isolated VPS Environments",
        "Automated Daily & Weekly Cloud Backups with One-Click Recovery",
        "Free SSL Certificates & Advanced HTTP/3 CDN Acceleration",
        "Hardened Web Application Firewalls (WAF) & DDoS Protection",
        "24/7 Server Resource Monitoring & Instant Outage Alerts",
        "Zero-Downtime Migration from Previous Hosting Providers",
      ],
      practicalApplications: [
        {
          title: "Corporate Websites & Brand Portals",
          description: "Ensuring zero-downtime, global asset caching, and pristine page-load speeds for high-profile business destinations.",
        },
        {
          title: "High-Traffic E-Commerce Stores",
          description: "Allocating dedicated CPU and RAM resources that absorb flash sales and seasonal traffic spikes without lag.",
        },
        {
          title: "Custom Web Application Backends",
          description: "Hosting Node.js, Python, or PHP backends in hardened environments with isolated database clusters.",
        },
        {
          title: "Regional Middle East Acceleration",
          description: "Routing traffic through regional low-latency edge points to ensure rapid response times across Egypt and the Gulf.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Resource & Bandwidth Sizing",
          description: "We analyze your expected traffic patterns, database complexity, and storage requirements to select the right tier.",
        },
        {
          step: "02",
          title: "Server Provisioning & Security Hardening",
          description: "Configuring hardened OS images, firewalls, database permissions, and SSL encryption.",
        },
        {
          step: "03",
          title: "Zero-Downtime Migration & Cutover",
          description: "Transferring files, databases, and DNS records with synchronized cutover to avoid service interruption.",
        },
        {
          step: "04",
          title: "Ongoing Monitoring & Care",
          description: "Continuous telemetry monitoring, patch management, and automated backups managed entirely by our IT team.",
        },
      ],
    },
    ar: {
      title: "خطط وحلول الاستضافة",
      shortDescription: "استضافة سحابية عالية الأداء بمستويات استقرار مضمونة وحماية متقدمة للبيانات والمنصات.",
      tagline: "بنية استضافة آمنة ومستقرة على مدار الساعة.",
      overview:
        "توقف الموقع عن العمل لدقائق معدودة يكلف الشركات خسائر مادية مباشرة ويهز ثقة العملاء. نوفر خدمات استضافة سحابية مدارة بالكامل، وخوادم افتراضية وخاصة (VPS) مهيأة خصيصاً للمواقع والمنصات الحيوية لضمان سرعة التصفح والاستقرار الدائم تحت أقصى ضغط.",
      challengeStatement:
        "تتسبب الاستضافات المشتركة الرخيصة في بطء فادح للمواقع، وتوقف متكرر ومفاجئ عند زيادة الزوار، مع غياب الدعم الفني المتخصص عند حدوث أي أزمة.",
      deliverables: [
        "استضافة سحابية مُدارة وخوادم افتراضية مخصصة وعالية الأداء (VPS)",
        "نسخ احتياطي مؤتمت يومي وأسبوعي مع إمكانية الاستعادة الفورية",
        "شهادات أمان مجانية (SSL) وشبكات تسريع محتوى عالمية (CDN)",
        "جدار ناري برمجيات وحماية متقدمة ضد هجمات حجب الخدمة (DDoS)",
        "مراقبة لحظية لاستقرار الخوادم 24/7 وتدخل فوري عند أي طارئ",
        "نقل مجاني وكامل لبيانات موقعكم الحالي دون توقف الخدمة",
      ],
      practicalApplications: [
        {
          title: "استضافة المواقع والمنصات الرسمية",
          description: "ضمان استقرار وسرعة تحميل فائقة لمواقع الشركات الكبرى دون أي انقطاع في الخدمة أمام الزوار والشركاء.",
        },
        {
          title: "متاجر التجارة الإلكترونية عالية الزيارات",
          description: "خوادم بموارد معالجة وذاكرة مخصصة تتحمل حملات التخفيضات ومواسم الشراء دون أي بطء أو تعليق لعمليات الشراء.",
        },
        {
          title: "استضافة تطبيقات الويب وقواعد البيانات",
          description: "بيئة تشغيلية آمنة ومعزولة لتطبيقات Node.js و Python وقواعد بيانات PostgreSQL بأعلى سرعات استجابة.",
        },
        {
          title: "تسريع التصفح في مصر ودول الخليج",
          description: "توزيع محتوى الموقع عبر مراكز بيانات متطورة تضمن سرعة فتح فائقة للزوار في مصر والسعودية والإمارات ومختلف الدول.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "تقدير الاحتياجات والموارد",
          description: "فحص حجم الزيارات الحالي، وحجم قواعد البيانات، والموارد المطلوبة لترشيح الخادم والاشتراك الأنسب لمشروعكم.",
        },
        {
          step: "02",
          title: "تهيئة الخادم وتطبيق معايير الأمان",
          description: "تثبيت برمجيات الخادم وتفعيل الجدران النارية وشهادات الأمان وقواعد البيانات المعزولة بأعلى معايير الحماية.",
        },
        {
          step: "03",
          title: "نقل البيانات الآمن دون توقف",
          description: "نقل ملفات ومحتويات الموقع وقواعد البيانات بسلاسة وتوجيه النطاق دون أي انقطاع في تصفح الموقع.",
        },
        {
          step: "04",
          title: "المراقبة والصيانة المستمرة",
          description: "متابعة استقرار الخادم لحظة بلحظة، وإجراء التحديثات الأمنية الدورية، وضمان أخذ النسخ الاحتياطية بنجاح.",
        },
      ],
    },
  },
  {
    id: "email-plans",
    slug: "email-plans",
    image: "/images/services/email-plans.jpg",
    order: 9,
    category: "infrastructure",
    icon: "Mail",
    relatedSlugs: ["hosting-plans", "cloud-it-services", "branding-design"],
    en: {
      title: "Business Email Plans",
      shortDescription: "Secure, professional domain-linked email suites built for enterprise collaboration and spam-free delivery.",
      tagline: "Reputable corporate communication.",
      overview:
        "Sending commercial proposals from free consumer email addresses damages business credibility. We configure, secure, and manage enterprise email environments linked to your company domain, featuring hardened deliverability records and spam-free inbox delivery.",
      challengeStatement:
        "Unauthenticated business emails routinely land in client spam folders, face blacklisting due to poor DNS configuration, and expose companies to phishing attacks.",
      deliverables: [
        "Custom Domain Business Email Accounts (name@yourcompany.com)",
        "Google Workspace & Microsoft 365 Setup & Administration",
        "Hardened SPF, DKIM, and DMARC Authentication Records",
        "Zero-Loss Email Migration from Legacy Servers",
        "Advanced Anti-Spam, Anti-Phishing & Malware Filtering",
        "Seamless Sync across Mobile (iOS/Android) and Desktop Clients",
      ],
      practicalApplications: [
        {
          title: "Corporate Identity Credibility",
          description: "Equipping every team member with professional inboxes linked to your domain for trustworthy corporate correspondence.",
        },
        {
          title: "Inbox Deliverability Repair",
          description: "Auditing domain reputation and configuring DKIM/DMARC protocols to ensure invoices and proposals never hit spam.",
        },
        {
          title: "Google Workspace & M365 Setup",
          description: "Managing corporate migrations to Google Workspace or Microsoft 365 for collaborative docs, calendars, and storage.",
        },
        {
          title: "Executive Email Encryption & Security",
          description: "Deploying multi-factor authentication, security policies, and encrypted archiving for legal compliance.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Domain & DNS Security Audit",
          description: "We inspect your DNS zones to assess existing mail records, sender reputation, and deliverability health.",
        },
        {
          step: "02",
          title: "Platform Selection & Account Setup",
          description: "Provisioning organization domains on Google Workspace, Microsoft 365, or private business email suites.",
        },
        {
          step: "03",
          title: "Authentication Hardening (SPF/DKIM/DMARC)",
          description: "Generating cryptographic DKIM keys and DMARC enforcement policies so mailbox providers verify your identity.",
        },
        {
          step: "04",
          title: "Historical Mail Migration & Team Handover",
          description: "Migrating existing inboxes, contacts, and calendar schedules with zero data loss and simple device setup guides.",
        },
      ],
    },
    ar: {
      title: "خطط البريد الإلكتروني للشركات",
      shortDescription: "حلول بريد إلكتروني رسمي آمنة باسم نطاق شركتكم تدعم التعاون وتضمن أعلى درجات وصول الرسائل.",
      tagline: "تواصل مؤسسي احترافي وموثوق.",
      overview:
        "إرسال العروض الرسمية من عناوين بريد عامة ومجانية يقلل من ثقة ومصداقية شركتك أمام العملاء. نوفر ونهيئ خوادم بريد إلكتروني رسمي باسم نطاق شركتكم، مع تطبيق أحدث معايير التوثيق الأمني العالمية لضمان وصول مراسلاتكم إلى صناديق الوارد مباشرة دون أن تُصنف كرسائل مزعجة (Spam).",
      challengeStatement:
        "تعاني الكثير من الشركات من وصول رسائلها وعروض أسعارها لمجلد الرسائل غير المرغوبة (Junk/Spam)، أو تعرض بريدها للاختراق والحظر نتيجة غياب الإعدادات الأمنية الصحيحة.",
      deliverables: [
        "حسابات بريد إلكتروني رسمية باسم نطاق شركتكم (name@yourcompany.com)",
        "تهيئة وإدارة اشتراكات Google Workspace و Microsoft 365",
        "تكوين بروتوكولات الأمان العالمية للبريد (SPF و DKIM و DMARC)",
        "نقل المراسلات القديمة من الخوادم السابقة بأمان ودون فقدان أي رسالة",
        "فلاتر متطورة للحماية من الرسائل الاحتيالية والفيروسات والبريد المزعج",
        "ربط ومزامنة البريد بسلاسة عبر هواتف آيفون وأندرويد وبرامج Outlook",
      ],
      practicalApplications: [
        {
          title: "تعزيز مصداقية التواصل المؤسسي",
          description: "تزويد كل موظف وإدارة ببريد رسمي يعكس احترافية الشركة أمام العملاء والموردين والجهات الحكومية.",
        },
        {
          title: "معالجة مشكلة وصول الرسائل إلى الـ Spam",
          description: "تدقيق سجلات النطاق وتفعيل التشفير والتوقيع الرقمي لضمان وصول الرسائل والفواتير لصندوق الوارد الرئيسي.",
        },
        {
          title: "إعداد منظومات Google Workspace و Office 365",
          description: "تهيئة بيئات العمل السحابية المتقدمة التي تجمع بين البريد والمستندات المشتركة والاجتماعات الافتراضية.",
        },
        {
          title: "حماية وتشفير المراسلات السرية",
          description: "تطبيق التحقق بخطوتين (2FA) وسياسات الأمان لحماية حسابات المدراء التنفيذيين من محاولات الاختراق.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "فحص سجلات النطاق والبريد الحالي",
          description: "تدقيق إعدادات DNS الحالية وتقييم سمعة النطاق لدى خوادم البريد العالمية واكتشاف أسباب التعثر.",
        },
        {
          step: "02",
          title: "اختيار المنصة وتهيئة الحسابات",
          description: "إنشاء حساب المؤسسة واختيار المنصة الأنسب (سحابية مخصصة، Google Workspace، أو Microsoft 365).",
        },
        {
          step: "03",
          title: "تفعيل بروتوكولات الحماية (SPF/DKIM/DMARC)",
          description: "توليد مفاتيح التشفير الرقمي والربط الآمن مع النطاق لإثبات هوية المرسل رسمياً ومنع انتحال صفة شركتكم.",
        },
        {
          step: "04",
          title: "نقل الرسائل السابقة وتسليم الحسابات",
          description: "ترحيل كامل الرسائل والمجلدات القديمة إلى الخادم الجديد وتزويد الموظفين بأدلة الربط السريع على هواتفهم.",
        },
      ],
    },
  },
  {
    id: "cloud-it-services",
    slug: "cloud-it-services",
    image: "/images/services/cloud-it.jpg",
    order: 10,
    category: "infrastructure",
    icon: "Cloud",
    relatedSlugs: ["hosting-plans", "email-plans", "automation"],
    en: {
      title: "Cloud & IT Services",
      shortDescription: "Comprehensive cloud architecture, cybersecurity defense, and managed IT infrastructure for enterprises.",
      tagline: "Resilient infrastructure for modern organizations.",
      overview:
        "Modern business agility relies on resilient cloud systems. From cloud migrations to ongoing network security and disaster recovery planning, our IT specialists ensure your technology foundations remain secure, compliant, cost-optimized, and continuously operational.",
      challengeStatement:
        "Many companies suffer from spiraling cloud hosting bills, unmonitored infrastructure vulnerabilities, and the terrifying absence of tested disaster recovery plans.",
      deliverables: [
        "Cloud Architecture & Migration (AWS, Google Cloud, Microsoft Azure)",
        "Cybersecurity Hardening, Access Control & Compliance Audits",
        "Automated Disaster Recovery Planning & Multi-Region Redundancy",
        "Cloud Cost Optimization & Infrastructure Right-Sizing",
        "Managed Database Clusters & Continuous Backup Replication",
        "Ongoing IT Systems Administration & Dedicated Technical Support",
      ],
      practicalApplications: [
        {
          title: "Cloud Migration Strategy",
          description: "Transitioning legacy applications and databases to secure, scalable public cloud environments with minimal downtime.",
        },
        {
          title: "Cybersecurity Audits & Vulnerability Patching",
          description: "Reviewing network permissions, firewalls, and credential hygiene to protect against data breaches.",
        },
        {
          title: "Disaster Recovery & Redundancy",
          description: "Architecting automated cross-region database replication and failover routines that guarantee business continuity.",
        },
        {
          title: "Cloud Bill Optimization",
          description: "Auditing idle resources, right-sizing compute instances, and introducing reserved instances to cut monthly cloud overhead.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "Infrastructure Assessment & Scope",
          description: "We audit your current servers, dependencies, security policies, and performance bottlenecks.",
        },
        {
          step: "02",
          title: "Cloud Blueprint & Security Architecture",
          description: "Designing isolated VPCs, subnets, IAM role policies, and automated replication pathways.",
        },
        {
          step: "03",
          title: "Staged Migration & Validation",
          description: "Executing data transfers and staging tests in parallel to verify system integrity before production cutover.",
        },
        {
          step: "04",
          title: "24/7 Monitoring & Managed Care",
          description: "Providing ongoing patch management, backup verification, and rapid-response technical support.",
        },
      ],
    },
    ar: {
      title: "البنية السحابية وتكنولوجيا المعلومات",
      shortDescription: "بناء وإدارة البنى السحابية المتطورة، وحلول الأمن السيبراني لضمان استمرارية الأعمال وحماية البيانات.",
      tagline: "بنية تحتية مرنة تحمي وتدعم مسيرة أعمالكم.",
      overview:
        "تعتمد مرونة الشركات الحديثة على صلابة بنيتها السحابية. نقدم حلولاً متكاملة لإدارة البنية التحتية لتكنولوجيا المعلومات، بدءاً من بناء وتأمين خوادم السحابة وحلول التعافي من الكوارث، وحتى تطبيق أحدث معايير الأمان السيبراني ومراقبة التكاليف لضمان استمرارية أعمالكم بأعلى كفاءة.",
      challengeStatement:
        "تعاني العديد من الشركات من تضخم فواتير السحابة دون داعٍ، ووجود ثغرات أمنية غير مرصودة، وغياب خطة واضحة ومجربة لاستعادة البيانات في حال وقوع أي حادث أو عطل طارئ.",
      deliverables: [
        "بناء وإدارة البنية السحابية وترحيل الأنظمة (AWS, Azure, Google Cloud)",
        "تدقيق وتطبيق معايير الأمن السيبراني والتحكم في صلاحيات الوصول",
        "خطط استعادة البيانات بعد الكوارث (Disaster Recovery) والنسخ المتعدد",
        "ترشيد وخفض تكاليف الخوادم والاشتراكات السحابية الزائدة",
        "إدارة وتأمين قواعد البيانات والمزامنة اللحظية للنسخ الاحتياطية",
        "إدارة تشغيلية مستمرة لأنظمة تكنولوجيا المعلومات ودعم فني متخصص",
      ],
      practicalApplications: [
        {
          title: "الترحيل السحابي الآمن للأنظمة",
          description: "نقل قواعد البيانات والبرمجيات القديمة إلى منصات سحابية آمنة قابلة للتوسع مع أدنى قدر من توقف الخدمة.",
        },
        {
          title: "تدقيق الأمن السيبراني وسد الثغرات",
          description: "مراجعة الجدران النارية، وصلاحيات الموظفين، وسياسات التشفير لضمان حماية بيانات الشركة من التسريب والاختراق.",
        },
        {
          title: "خطط التعافي وضمان استمرارية الأعمال",
          description: "بناء أنظمة مزامنة احتياطية تعمل في مراكز بيانات متعددة لضمان عودة الأنظمة للعمل في دقائق عند حدوث أي خلل.",
        },
        {
          title: "ترشيد فواتير الخوادم السحابية",
          description: "تحليل استهلاك الخوادم وإلغاء الموارد غير المستخدمة لإعادة ضبط الفاتورة وخفض التكاليف الشهرية بشكل ملحوظ.",
        },
      ],
      processSteps: [
        {
          step: "01",
          title: "تدقيق البنية التحتية والأنظمة الحالية",
          description: "فحص أداء الخوادم، ومصادر استهلاك الميزانية، وتحديد المخاطر الأمنية ونقاط الضعف الحالية بدقة.",
        },
        {
          step: "02",
          title: "تصميم المخطط السحابي والأمني",
          description: "رسم هيكل الشبكات الافتراضية المعزولة (VPC)، وتحديد صلاحيات المستخدمين، وخطة النسخ الاحتياطي التلقائي.",
        },
        {
          step: "03",
          title: "الترحيل المرحلي واختبار الاستقرار",
          description: "نقل البيانات والأنظمة واختبار كفاءتها في بيئة موازية قبل إتمام النقل النهائي لضمان سلامة العمليات.",
        },
        {
          step: "04",
          title: "الإدارة المستمرة والدعم الفني الاستباقي",
          description: "مراقبة الأنظمة ومتابعة التحديثات الأمنية والتأكد من سلامة النسخ الاحتياطية بصورة يومية ودعم فني متخصص.",
        },
      ],
    },
  },
]

export const getServiceBySlug = (slug: string): ServiceDefinition | undefined => {
  return SWIPEBAY_SERVICES.find((s) => s.slug === slug)
}

export const getRelatedServices = (slugs: string[]): ServiceDefinition[] => {
  return SWIPEBAY_SERVICES.filter((s) => slugs.includes(s.slug))
}
