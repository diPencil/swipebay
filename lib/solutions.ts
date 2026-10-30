/**
 * SWIPEBAY Solutions, Industry Practices & Case Studies Architecture
 * Source of truth: https://swipebay.net/
 */

export interface IndustryLocalizedContent {
  title: string
  shortDescription: string
  tagline: string
  heroHeadline: string
  heroSubtitle: string
  overview: string
  challenges: Array<{
    title: string
    description: string
  }>
  solutionAreas: Array<{
    title: string
    description: string
    deliverables: string[]
  }>
  statPills: string[]
}

export interface IndustryDefinition {
  id: string
  slug: string
  order: number
  icon: string
  image: string
  featured: boolean
  en: IndustryLocalizedContent
  ar: IndustryLocalizedContent
}

export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudyLocalizedContent {
  title: string
  subtitle: string
  overview: string
  challenge: string
  role: string
  solutionsDelivered: string[]
  impactSummary: string
  results: string[]
}

export interface CaseStudyDefinition {
  id: string
  slug: string
  industrySlug: string
  clientName: string
  isClientPublic: boolean
  image: string
  status: "completed" | "active"
  technologies: string[]
  metrics: CaseStudyMetric[]
  en: CaseStudyLocalizedContent
  ar: CaseStudyLocalizedContent
}

/* =========================================================================
   VERIFIED INDUSTRIES CATALOG
   ========================================================================= */
export const SWIPEBAY_INDUSTRIES: IndustryDefinition[] = [
  {
    id: "hospitality-tourism",
    slug: "hospitality-tourism",
    order: 1,
    icon: "Compass",
    image: "/images/services/branding.jpg",
    featured: true,
    en: {
      title: "Hospitality & Tourism",
      shortDescription:
        "High-conversion booking engines, experiential brand narratives, and multi-currency payment workflows engineered for resorts, travel providers, and boutique hotels.",
      tagline: "Direct bookings. Elevated guest journeys.",
      heroHeadline: "Digital hospitality engineered for guest loyalty and direct revenue.",
      heroSubtitle:
        "We help boutique hotels, luxury resorts, and regional tour operators reduce third-party agency dependency with high-speed direct booking platforms and connected digital guest experiences.",
      overview:
        "Modern travelers demand frictionless digital discovery, instant mobile check-ins, and secure multi-currency payment options. SWIPEBAY engineers bespoke hospitality ecosystems that connect your visual brand story directly with operational booking software, maximizing direct revenue and lifetime guest loyalty.",
      challenges: [
        {
          title: "High OTA Commission Dependency",
          description: "Online travel agencies capture 15% to 25% of booking value due to sub-optimal direct hotel website booking workflows."
        },
        {
          title: "Fragmented Guest Touchpoints",
          description: "Disconnected reservations, check-in desks, and concierge services create disjointed guest experiences and lost upsell revenue."
        },
        {
          title: "Multi-Currency Friction",
          description: "International travelers frequently abandon booking processes when pricing and regional payment methods lack seamless local settlement."
        }
      ],
      solutionAreas: [
        {
          title: "Direct Booking Engines & Websites",
          description: "Custom, ultra-fast web platforms optimized for room discovery, seasonal packages, and zero-drop-off checkout.",
          deliverables: ["Dynamic Room & Suite Showcase", "Real-Time Availability Engine", "Multi-Language Localization", "Integrated Gateway & Apple Pay"]
        },
        {
          title: "Guest Experience & Concierge Apps",
          description: "Native and web-based applications that empower guests from pre-arrival check-in to digital key access and room service.",
          deliverables: ["Digital Check-in & Registration", "In-Stay Service Ordering", "Automated Loyalty Rewards", "Direct WhatsApp Concierge Bot"]
        },
        {
          title: "Hospitality Brand Storytelling",
          description: "Cinematic media, identity design, and curated photography that convey the sensory exclusivity of your properties.",
          deliverables: ["Visual Identity & Typography", "Motion Showcase Video Assets", "Social Experience Content", "Print & Architectural Collateral"]
        }
      ],
      statPills: ["30% Higher Repeat Bookings", "Zero-Latency Availability", "Multi-Currency Settlement", "Direct OTA Independence"]
    },
    ar: {
      title: "الضيافة والسياحة",
      shortDescription:
        "محركات حجز مباشرة عالية التحويل، سرد بصري فاخر يبرز المرافق، وتجارب دفع متعددة العملات للفنادق الفاخرة وشركات السياحة.",
      tagline: "حجوزات مباشرة. وتجارب إقامة استثنائية.",
      heroHeadline: "حلول رقمية متكاملة لقطاع الضيافة تُعزز ولاء النزلاء وتضاعف الإيرادات المباشرة.",
      heroSubtitle:
        "نساعد الفنادق، المنتجعات، والشركات السياحية على تقليل الاعتماد على منصات الحجز الوسيطة من خلال بناء منصات حجز رقمية فائقة السرعة وتجارب نزلاء ذكية ومتصلة.",
      overview:
        "يتطلع المسافرون اليوم إلى استكشاف سلس، وحجز فوري عبر الهواتف الذكية، وخيارات دفع محلية ودولية آمنة. تبني سويب باي منظومات ضيافة رقمية تجمع بين الهوية الفندقية الراقية ومحركات الحجز التشغيلية لزيادة أرباحكم المباشرة.",
      challenges: [
        {
          title: "ارتفاع عمولات المنصات الوسيطة (OTAs)",
          description: "تستنزف منصات الحجز الخارجية ما بين 15% إلى 25% من قيمة الإقامة بسبب ضعف محركات الحجز المباشر على مواقع الفنادق."
        },
        {
          title: "تشتت نقاط التواصل مع النزيل",
          description: "فصل الحجز عن مكتب الاستقبال والخدمات الداخلية يحد من رضا النزلاء ويفوت فرص المبيعات الإضافية (Upselling)."
        },
        {
          title: "صعوبة قبول المدفوعات الدولية",
          description: "تراجع معدلات إتمام الحجز عند غياب العملات المفضلة وطرق الدفع الإقليمية الموثوقة كـ Apple Pay والبطاقات المحلية."
        }
      ],
      solutionAreas: [
        {
          title: "منصات ومحركات الحجز المباشر",
          description: "مواقع فائقة السرعة ومصممة خصيصاً لاستعراض الغرف، الأجنحة، وباقات الإقامة مع مسار دفع سلس يمنع التردد.",
          deliverables: ["استعراض تفاعلي للغرف والمرافق", "محرك توفر فوري بدون تأخير", "دعم متعدد اللغات والعملات", "ربط بوابات الدفع و Apple Pay"]
        },
        {
          title: "تطبيقات تجربة النزلاء والكونسيرج",
          description: "تطبيقات ويب وهواتف ذكية تمكن النزيل من تسجيل الوصول الرقمي، طلب الخدمات، والتواصل المباشر مع طاقم الفندق.",
          deliverables: ["تسجيل وصول ومغادرة رقمي", "طلب الوجبات والخدمات الداخلية", "برامج ولاء واسترداد نقاط", "كونسيرج رقمي متكامل مع واتساب"]
        },
        {
          title: "الهوية والسرد البصري للفنادق",
          description: "إنتاج مرئي سينمائي، تصاميم هوية فاخرة، ومحتوى تسويقي يجسد تجربة الإقامة الحصرية ويبرز فخامة المرافق.",
          deliverables: ["تصميم أدلة الهوية والخطوط الفندقية", "إنتاج فيديو عالي الجودة", "أصول تسويقية رقمية للمواسم", "مطبوعات وتجهيزات داخلية"]
        }
      ],
      statPills: ["زيادة 30% في الحجوزات المباشرة", "استجابة فورية لمحرك التوفر", "تسوية بجميع العملات العالمية", "استقلالية كاملة عن الوسطاء"]
    }
  },
  {
    id: "restaurants-fnb",
    slug: "restaurants-fnb",
    order: 2,
    icon: "Utensils",
    image: "/images/services/consulting.jpg",
    featured: true,
    en: {
      title: "Restaurants & Food & Beverage",
      shortDescription:
        "Cloud-based POS integrations, dynamic QR menu systems, direct ordering pipelines, and kitchen display automation for multi-branch dining brands.",
      tagline: "Faster turnover. Automated kitchen operations.",
      heroHeadline: "Engineering digital platforms and smart operations for restaurant leaders.",
      heroSubtitle:
        "From high-volume quick-service restaurants to fine dining chains, we engineer unified ordering systems, digital kitchen displays, and distinctive brand identities.",
      overview:
        "The food and beverage industry operates on thin margins and rapid turnover. Fragmented POS machines, delivery aggregator commissions, and inventory waste silently erode profitability. SWIPEBAY deploys connected restaurant technology that synchronizes front-of-house ordering directly with kitchen displays and centralized supply chains.",
      challenges: [
        {
          title: "Aggregator Commission Drain",
          description: "Delivery aggregators capture up to 30% of order totals, cutting deeply into restaurant profit margins."
        },
        {
          title: "Peak Hour Kitchen Bottlenecks",
          description: "Manual ticket printing and miscommunicated order modifications lead to kitchen delays, food waste, and customer dissatisfaction."
        },
        {
          title: "Multi-Branch Inventory Blindspots",
          description: "Managing perishable stock across multiple outlets without automated synchronization causes stockouts and excess spoilage."
        }
      ],
      solutionAreas: [
        {
          title: "Direct Digital Ordering & QR Menus",
          description: "Branded, lightning-fast web ordering portals that enable direct delivery and contactless dine-in ordering without app downloads.",
          deliverables: ["Dynamic Digital Menu System", "Zero-Commission Direct Delivery", "Table QR Ordering & Instant Pay", "Automated Customer Re-engagement"]
        },
        {
          title: "Kitchen Display & POS Orchestration",
          description: "Synchronized digital ticket routing that organizes kitchen prep stations, streamlines orders, and tracks prep time latency.",
          deliverables: ["Kitchen Display Systems (KDS)", "Multi-Station Order Routing", "POS Hardware & Cloud Integration", "Live Branch Performance Dashboard"]
        },
        {
          title: "Supply Chain & Waste Tracking",
          description: "Automated ingredient-level depletion tracking that alerts purchasing managers before key inventory items run out.",
          deliverables: ["Ingredient-Level Depletion Tracking", "Vendor Order Automations", "Multi-Branch Stock Synchronization", "Waste Reduction Analytics"]
        }
      ],
      statPills: ["45% Food Waste Reduction", "30% Faster Table Turnover", "Direct Delivery Independence", "Live Multi-Branch Sync"]
    },
    ar: {
      title: "المطاعم، المقاهي والأغذية",
      shortDescription:
        "ربط أنظمة نقاط البيع السحابية، قوائم الطعام الرقمية التفاعلية، منصات الطلب المباشر، وأتمتة شاشات المطابخ لسلاسل المطاعم المتعددة الفروع.",
      tagline: "سرعة في خدمة الطاولات. وأتمتة كاملة لعمليات المطبخ.",
      heroHeadline: "بناء المنظومات الرقمية وإدارة العمليات الذكية لرواد قطاع المطاعم والأغذية.",
      heroSubtitle:
        "من مطاعم الوجبات السريعة عالية الضغط إلى سلاسل المطاعم الفاخرة، نطور منصات طلب مباشر متقدمة، شاشات مطابخ رقمية، وهويات بصرية متميزة تصنع الفارق.",
      overview:
        "يقوم نجاح قطاع الأغذية والمشروبات على سرعة دوران الطاولات ودقة إدارة المخزون. يمثل الاعتماد على تطبيقات التوصيل الخارجية، وتشتت أنظمة الكاشير، وهدر المواد الأولية تحديات يومية تستنزف الأرباح. تقدم سويب باي حلولاً برمجية متزامنة تربط صالة الاستقبال بالمطبخ وسلاسل التوريد بسلاسة تامة.",
      challenges: [
        {
          title: "عمولات منصات التوصيل الباهظة",
          description: "تقتطع تطبيقات التوصيل ما يصل إلى 30% من قيمة كل طلب، مما يقلص هوامش ربح المطاعم بصورة حادة."
        },
        {
          title: "اختناقات التشغيل في أوقات الذروة",
          description: "طباعة البونات الورقية وتأخر تعديل الطلبات يتسبب في ارتباك المطابخ، هدر الوجبات، وتأخر خدمة العملاء."
        },
        {
          title: "غياب الرؤية اللحظية للمخزون بالفروع",
          description: "صعوبة إدارة المواد سريعة التلف عبر الفروع المتعددة دون مزامنة آلية يؤدي لنفاد الأصناف المفاجئ أو تلفها الزائد."
        }
      ],
      solutionAreas: [
        {
          title: "منصات الطلب المباشر وقوائم الـ QR",
          description: "منصات ويب خفيفة وسريعة تتيح للعملاء الطلب المباشر للتوصيل أو الطلب من الطاولة دون الحاجة لتثبيت تطبيقات.",
          deliverables: ["قوائم طعام رقمية تفاعلية ومحدثة", "منظومة طلب توصيل بدون عمولات", "طلب ودفع فوري من الطاولة بالـ QR", "إعادة استهداف العملاء تلقائياً"]
        },
        {
          title: "شاشات المطابخ وأتمتة الكاشير (KDS & POS)",
          description: "توجيه لحظي للطلبات لشاشات التحضير داخل المطبخ لتقليل وقت التجهيز والقضاء تماماً على أخطاء الطلبات اليدوية.",
          deliverables: ["شاشات مطابخ رقمية ذكية (KDS)", "توجيه الطلب لمحطة التحضير المناسبة", "ربط أجهزة ونقاط البيع السحابية", "لوحة تحكم مركزية لجميع الفروع"]
        },
        {
          title: "إدارة المخزون والحد من الهدر",
          description: "تتبع استهلاك المكونات بدقة مع كل وجبة تُباع، وإرسال تنبيهات تلقائية لمسؤولي المشتريات قبل نفاد المواد الأساسية.",
          deliverables: ["تتبع استهلاك المكونات بالجرام", "أتمتة أوامر الشراء من الموردين", "مزامنة المخزون بين الفروع والمستودعات", "تقارير تحليل الهدر ورفع الربحية"]
        }
      ],
      statPills: ["تقليل 45% في هدر الأغذية", "زيادة 30% في سرعة الطاولات", "استقلالية في أوردرات التوصيل", "مزامنة حية لجميع الفروع"]
    }
  },
  {
    id: "education-e-learning",
    slug: "education-e-learning",
    order: 3,
    icon: "GraduationCap",
    image: "/images/services/media-production.jpg",
    featured: false,
    en: {
      title: "Education & E-Learning",
      shortDescription:
        "Scalable learning management portals, student enrollment workflows, and academic brand identities built for universities, institutions, and modern educators.",
      tagline: "Scalable education platforms.",
      heroHeadline: "Scalable LMS portals and academic ecosystems for forward-thinking educators.",
      heroSubtitle:
        "We build high-capacity virtual classrooms, adaptive test engines, and unified student registration portals designed to support tens of thousands of active learners.",
      overview:
        "Digital education requires rock-solid video streaming resilience, intuitive student progress tracking, and effortless enrollment workflows. SWIPEBAY develops comprehensive academic platforms that eliminate server latency during exams while elevating institutional brand prestige.",
      challenges: [
        {
          title: "Exam-Time Server Crashes",
          description: "Legacy academic servers crash when thousands of students submit assessments concurrently."
        },
        {
          title: "Fragmented Video Lectures",
          description: "Unsecured, unindexed lecture video links lead to piracy and low student engagement."
        },
        {
          title: "Manual Registration Overhead",
          description: "Complex offline paperwork slows student enrollment and strains academic admissions staff."
        }
      ],
      solutionAreas: [
        {
          title: "Custom Learning Management Systems",
          description: "Scalable, secure cloud portals for course delivery, interactive assignments, and grading.",
          deliverables: ["Adaptive Learning Journeys", "Automated Grading Engines", "Encrypted HLS Video Streaming", "Student Analytics Dashboards"]
        }
      ],
      statPills: ["3x Course Completion Rate", "20,000+ Concurrent Students", "Encrypted HLS Video", "Instant Online Enrollment"]
    },
    ar: {
      title: "التعليم والمنصات التدريبية",
      shortDescription:
        "منصات تعليمية وإدارية قابلة للتوسع، بوابات تسجيل الطلاب، وهويات بصرية أكاديمية مصممة للجامعات والمؤسسات التعليمية المتقدمة.",
      tagline: "منصات تعليمية قابلة للتوسع.",
      heroHeadline: "بناء أنظمة إدارة التعلم المتقدمة والمنصات الأكاديمية للمؤسسات التعليمية.",
      heroSubtitle:
        "نطور قاعات دراسية افتراضية عالية الاستقرار، محركات اختبارات ذكية، وبوابات تسجيل موحدة مصممة لتحمل عشرات الآلاف من الطلاب المتزامنين.",
      overview:
        "يتطلب التعليم الرقمي بنية سحابية متينة تضمن بث المحاضرات دون انقطاع، وتتبعاً دقيقاً لتقدم الدارسين، ومسارات تسجيل سلسة. تطور سويب باي منصات أكاديمية تمنع سقوط الخوادم أثناء الامتحانات وترفع من مكانة المؤسسة التعليمية.",
      challenges: [
        {
          title: "انهيار الخوادم أوقات الامتحانات",
          description: "تتوقف الأنظمة التقليدية عن العمل عند دخول آلاف الطلاب في نفس اللحظة لأداء الاختبارات."
        },
        {
          title: "تسريب وتشتت المحاضرات المسجلة",
          description: "مشاركة الروابط غير المحمية يسبب قرصنة المحتوى التعليمي وضعف تفاعل الطلاب مع المادة العلمية."
        },
        {
          title: "أعباء التسجيل الإداري والورقي",
          description: "الإجراءات الورقية اليدوية تعطل قبول الطلاب وتشكل عبئاً كبيراً على لجان القبول والتسجيل."
        }
      ],
      solutionAreas: [
        {
          title: "أنظمة إدارة التعلم المخصصة (LMS)",
          description: "بوابات سحابية آمنة لبث المحاضرات، وإدارة الاختبارات التفاعلية، والتصحيح الآلي للنتائج.",
          deliverables: ["مسارات تعلم متكيفة لكل طالب", "محركات تصحيح واختبارات مؤتمتة", "بث فيديو مشفر بتقنية HLS", "لوحات متابعة أداء الطلاب والأساتذة"]
        }
      ],
      statPills: ["مضاعفة 3 أضعاف لإتمام الدورات", "أكثر من 20,000 طالب متزامن", "بث مشفر ضد التحميل والقرصنة", "تسجيل وقبول فوري عبر الإنترنت"]
    }
  },
  {
    id: "professional-services",
    slug: "professional-services",
    order: 4,
    icon: "Briefcase",
    image: "/images/services/web-app.jpg",
    featured: false,
    en: {
      title: "Professional Services & Tech",
      shortDescription:
        "Bespoke enterprise software, investor presentation systems, secure client portals, and cloud architecture for consulting firms and high-growth ventures.",
      tagline: "Secure portals. Automated client workflows.",
      heroHeadline: "High-security digital portals and workflow automations for consulting leaders.",
      heroSubtitle:
        "We build encrypted client workspaces, automated progress reporting pipelines, and digital billing suites for consulting, legal, and financial firms.",
      overview:
        "Client trust in professional services is forged through transparency, rapid responsiveness, and uncompromising information security. SWIPEBAY engineers bespoke client collaboration portals that automate routine reporting and document sign-offs, freeing senior partners to focus on advisory value.",
      challenges: [
        {
          title: "Unsecured Document Sharing",
          description: "Sharing sensitive audits and contracts via unencrypted email attachments invites severe compliance liabilities."
        },
        {
          title: "Manual Monthly Reporting",
          description: "Partners waste dozens of billable hours compiling fragmented reports from spreadsheets and internal tools."
        },
        {
          title: "Delayed Invoice Collection",
          description: "Manual invoice PDF dispatch and fragmented wire transfer tracking drag payment collection cycles out by 60+ days."
        }
      ],
      solutionAreas: [
        {
          title: "Encrypted Client Portals",
          description: "Secure, role-based workspaces for real-time project reporting, encrypted document exchange, and automated billing.",
          deliverables: ["Role-Based Access & Audit Logs", "Automated Deliverable Approvals", "Integrated Retainer Payments", "Secure Messaging & File Vault"]
        }
      ],
      statPills: ["50% Time Saved on Reporting", "65% Faster Invoice Settlement", "End-to-End Encryption", "Zero Team Overhead"]
    },
    ar: {
      title: "الخدمات المهنية والشركات التقنية",
      shortDescription:
        "برمجيات مخصصة للشركات، منصات عرض للمستثمرين، بوابات عملاء آمنة، وبنى سحابية متينة للشركات الاستشارية والناشئة سريعة النمو.",
      tagline: "بوابات عملاء مشفرة. وأتمتة مسارات العمل.",
      heroHeadline: "بوابات عملاء آمنة وأتمتة ذكية لمسارات العمل للشركات الاستشارية والمهنية.",
      heroSubtitle:
        "نطور مساحات عمل رقمية مشفرة، وأنظمة تقارير مرحلية مؤتمتة، وحلول دفع إلكتروني لشركات الاستشارات الإدارية والمالية والقانونية.",
      overview:
        "تقوم الثقة في قطاع الخدمات المهنية على الشفافية التامة وسرية المعلومات وسرعة الاستجابة. تبني سويب باي بوابات تعاون مخصصة مع العملاء تؤتمت التقارير الدورية والموافقات على المستندات، مما يتيح للشركاء التركيز على جوهر تقديم الاستشارات ذات القيمة العالية.",
      challenges: [
        {
          title: "مخاطر مشاركة المستندات عبر البريد",
          description: "إرسال التقارير المالية والعقود الحساسة في مرفقات بريدية غير مشفرة يعرض سرية بيانات العملاء لمخاطر بالغة."
        },
        {
          title: "استنزاف ساعات العمل في إعداد التقارير",
          description: "يهدر المستشارون ساعات ثمينة في تجميع التقارير اليدوية الشهرية من ملفات إكسل متعددة ومشتتة."
        },
        {
          title: "تأخر تحصيل المطالبات والفواتير",
          description: "إرسال الفواتير الورقية أو بصيغ PDF يدوية يؤخر دورات التحصيل المالي لأكثر من شهرين متتاليين."
        }
      ],
      solutionAreas: [
        {
          title: "بوابات العملاء المشفرة",
          description: "مساحات عمل آمنة محددة الصلاحيات لمتابعة تقدم المشاريع، تبادل الملفات المشفرة، وتسوية المدفوعات.",
          deliverables: ["صلاحيات دخول مشفرة وسجلات تدقيق", "اعتماد مرحلي مؤتمت للمخرجات", "دفع فوري لفواتير الخدمات", "خزنة مستندات سحابية مؤمنة"]
        }
      ],
      statPills: ["توفير 50% من وقت التقارير", "تحصيل الفواتير أسرع بـ 65%", "تشفير شامل من البداية للنهاية", "توسع دون زيادة في الكوادر"]
    }
  }
]

/* =========================================================================
   VERIFIED REAL CASE STUDIES
   ========================================================================= */
export const SWIPEBAY_CASE_STUDIES: CaseStudyDefinition[] = [
  {
    id: "guest-experience-platform",
    slug: "guest-experience-platform",
    industrySlug: "hospitality-tourism",
    clientName: "TelliTravel & Boutique Hospitality Chain",
    isClientPublic: true,
    image: "/images/services/branding.jpg",
    status: "completed",
    technologies: ["Next.js App Router", "TypeScript", "React Native", "PostgreSQL", "Stripe & Paymob Gateway", "Cloudflare CDN"],
    metrics: [
      { value: "+30%", label: "Repeat Bookings" },
      { value: "90%", label: "Guest Satisfaction" },
      { value: "40%", label: "Lower OTA Fees" }
    ],
    en: {
      title: "Guest Experience Platform for Boutique Hotel Chain",
      subtitle: "Unified direct booking engine, digital check-in, and multi-currency mobile concierge.",
      overview:
        "TelliTravel, in partnership with regional luxury boutique operators, required a transformation of their guest booking journey. The goal was to establish complete digital independence from high-fee third-party travel aggregators while elevating personalized guest service.",
      challenge:
        "The hotel chain suffered from low direct booking retention, high OTA commission bleed (over 20% per stay), and disjointed communication between front-desk staff and on-property guests.",
      role:
        "SWIPEBAY acted as the primary digital solutions and engineering partner, architecting the custom web booking portal, native mobile guest concierge app, and secure multi-currency payment gateway integrations.",
      solutionsDelivered: [
        "Bespoke high-speed Next.js direct reservation web engine with real-time room inventory synchronization",
        "Mobile guest application offering frictionless digital pre-arrival check-in, keyless room requests, and dining booking",
        "Integrated multi-gateway payment orchestration supporting Visa, Mastercard, Apple Pay, and local MENA payment methods",
        "Direct-to-staff concierge messaging system connected to internal operations and room service dispatch"
      ],
      impactSummary:
        "The platform transformed the hotel's revenue dynamics, shifting over a third of total reservation volume to direct channels within the first six months.",
      results: [
        "30% increase in repeat guest direct bookings within the first two quarters",
        "90% verified guest satisfaction rating logged through post-stay feedback",
        "Estimated 40% reduction in commission fees surrendered to third-party aggregators",
        "Zero downtime recorded throughout peak holiday booking traffic"
      ]
    },
    ar: {
      title: "منصة تجربة النزلاء لسلسلة فنادق البوتيك",
      subtitle: "محرك حجز مباشر موحد، تسجيل وصول رقمي، وكونسيرج ذكي متعدد العملات.",
      overview:
        "احتاجت علامة تيلي ترافيل (TelliTravel) بالتعاون مع مشغلي فنادق بوتيك فاخرة إلى تطوير جذري لمسار حجز وإقامة النزلاء، بهدف تحقيق استقلالية رقمية كاملة عن منصات الحجز الخارجية باهظة العمولات وتوفير خدمة إقامة شخصية راقية.",
      challenge:
        "عانت سلسلة الفنادق من تدني نسبة الحجوزات المباشرة، واستنزاف عمولات المنصات الوسيطة (أكثر من 20% لكل حجز)، وتشتت قنوات التواصل بين طاقم الاستقبال والنزلاء أثناء إقامتهم.",
      role:
        "تولت سويب باي دور الشريك التقني والهندسي الشامل، حيث طورت محرك الحجز المباشر للويب، وتطبيق الهواتف الذكية المخصص للنزلاء، وبنية بوابات الدفع المتعددة العملات.",
      solutionsDelivered: [
        "محرك حجز ويب فائق السرعة بتقنية Next.js مع مزامنة لحظية لتوفر الغرف والأجنحة الفندقية",
        "تطبيق نزلاء ذكي يتيح تسجيل الوصول المسبق، طلب الخدمات الداخلية، وحجز الطاولات والمرافق",
        "ربط بوابات دفع متعددة تدعم بطاقات الائتمان الدولية، Apple Pay، والخيارات الإقليمية الموثوقة",
        "نظام محادثة كونسيرج مباشر يربط النزيل فورياً بطاقم الخدمة وإدارة الغرف"
      ],
      impactSummary:
        "أحدثت المنصة تحولاً كبيراً في إيرادات الفنادق، حيث نقلت أكثر من ثلث إجمالي الحجوزات إلى القنوات الرقمية المباشرة خلال الأشهر الستة الأولى من الإطلاق.",
      results: [
        "زيادة بنسبة 30% في الحجوزات المباشرة المتكررة للنزلاء خلال أول ربعين سنويين",
        "تحقيق نسبة 90% في مؤشر رضا النزلاء الموثق عبر التقييمات الرقمية بعد الإقامة",
        "توفير ما يقدر بـ 40% من العمولات التي كانت تُدفع سابقاً للوسطاء الخارجيين",
        "استقرار تشغيلي تام بنسبة 100% دون أي توقف أثناء مواسم الذروة السياحية"
      ]
    }
  },
  {
    id: "pos-supply-chain-automation",
    slug: "pos-supply-chain-automation",
    industrySlug: "restaurants-fnb",
    clientName: "Regional Restaurant & Hospitality Group",
    isClientPublic: true,
    image: "/images/services/consulting.jpg",
    status: "completed",
    technologies: ["Next.js", "Node.js Microservices", "PostgreSQL", "Redis", "WebSockets", "Thermal Printer & KDS APIs"],
    metrics: [
      { value: "45%", label: "Food Waste Cut" },
      { value: "30%", label: "Faster Turnover" },
      { value: "50+", label: "Branches Synced" }
    ],
    en: {
      title: "POS & Supply Chain Automation for Restaurant Chain",
      subtitle: "Cloud-based point of sale, kitchen display routing, and multi-branch inventory synchronization.",
      overview:
        "A growing regional hospitality and dining brand operating across Egypt and the Gulf faced severe operational bottlenecks as it expanded beyond 50 branch locations. SWIPEBAY engineered an end-to-end restaurant management infrastructure.",
      challenge:
        "Manual order taking, paper ticket confusion during peak dinner rush, and delayed inventory updates across dozens of branches caused significant ingredient spoilage, long customer wait times, and inaccurate food costing.",
      role:
        "SWIPEBAY designed and deployed a unified, cloud-native restaurant operations suite, replacing fragmented third-party POS machines with connected touch interfaces, kitchen display monitors, and automated warehouse inventory sync.",
      solutionsDelivered: [
        "Cloud-based touch POS system with split-second table and take-out order entry",
        "Multi-station Kitchen Display System (KDS) routing orders automatically to grill, beverage, and dessert prep stations",
        "Real-time ingredient depletion tracking that deducts stock per dish sold and triggers automated vendor purchase orders",
        "Centralized executive dashboard displaying live branch revenue, labor efficiency, and high-margin item sales"
      ],
      impactSummary:
        "The unified system eliminated operational chaos in the kitchen, sped up dining room table turns, and slashed food waste dramatically across all 50+ operating branches.",
      results: [
        "45% verified reduction in ingredient food waste through precise recipe-level stock depletion",
        "30% faster average table turnover during peak operating hours",
        "100% centralized inventory visibility across all regional branch locations",
        "Sub-second order transmission between waitstaff tablets and kitchen prep screens"
      ]
    },
    ar: {
      title: "أتمتة نقاط البيع وسلاسل الإمداد لسلسلة مطاعم متعددة الفروع",
      subtitle: "كاشير سحابي متطور، توجيه ذكي لشاشات المطابخ، ومزامنة لحظية للمخزون عبر الفروع.",
      overview:
        "واجهت مجموعة مطاعم وضيافة إقليمية سريعة النمو في مصر والخليج تحديات تشغيلية معقدة مع توسعها لأكثر من 50 فرعاً. قامت سويب باي بهندسة بنية تشغيلية متكاملة للمطاعم.",
      challenge:
        "تسببت الطلبات اليدوية، والبونات الورقية في أوقات الذروة، وتأخر تقارير المخزون في هدر كميات كبيرة من الأغذية، وتأخر خدمة الزبائن، وصعوبة حساب تكلفة الوجبات الفعلية بدقة.",
      role:
        "طورت سويب باي منظومة تشغيل مطاعم سحابية بالكامل، مستبدلة أجهزة الكاشير المشتتة بشاشات لمس متصلة، شاشات مطابخ رقمية، وأتمتة شاملة لمزامنة المستودعات المركزية.",
      solutionsDelivered: [
        "نظام كاشير ونقاط بيع سحابي فائق السرعة يدعم طلبات الطاولات والتوصيل والاستلام",
        "شاشات مطابخ ذكية (KDS) توجه أصناف الطلب آلياً لمحطات التحضير المناسبة (شواية، سلطات، مشروبات)",
        "تتبع دقيق لاستهلاك المكونات بالجرام مع كل طلب، مع أتمتة أوامر الشراء عند بلوغ حد الأمان",
        "لوحة مؤشرات تنفيذية تعرض إيرادات الفروع، سرعة الخدمة، ونسب أرباح الأطباق لحظياً"
      ],
      impactSummary:
        "قضى النظام على الارتباك داخل المطابخ في أوقات الذروة، وسرّع من دورة خدمة الطاولات، وخفّض تكلفة هدر المواد الغذائية بصورة ملحوظة عبر كافة فروع المجموعة.",
      results: [
        "تقليل موثق بنسبة 45% في هدر الأغذية والمكونات بفضل التتبع الدقيق للوصفات",
        "تسريع دورة دوران الطاولات بنسبة 30% خلال ساعات العمل الأكثر ازدحاماً",
        "رؤية ومراقبة لحظية بنسبة 100% لمخزون كافة الفروع من مكان واحد",
        "زمن انتقال أقل من ثانية واحدة بين تسجيل الطلب وظهوره على شاشات الطهاة"
      ]
    }
  },
  {
    id: "virtual-learning-management-system",
    slug: "virtual-learning-management-system",
    industrySlug: "education-e-learning",
    clientName: "Higher Education Academic Institution",
    isClientPublic: false,
    image: "/images/services/media-production.jpg",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3 & CloudFront", "HLS Video Streaming", "Docker"],
    metrics: [
      { value: "3x", label: "Completion Rate" },
      { value: "20k+", label: "Concurrent Users" },
      { value: "55%", label: "Faster Grading" }
    ],
    en: {
      title: "Virtual Learning Management System for University",
      subtitle: "Scalable cloud LMS with live streaming, automated assessments, and student progress tracking.",
      overview:
        "A major academic institution partnered with SWIPEBAY to replace an aging, rigid classroom management portal with a modern, scalable learning ecosystem capable of supporting peak exam traffic.",
      challenge:
        "Previous software crashed under heavy midterm submission volumes, lacked adaptive video compression for students with slower mobile connections, and forced professors into manual grading bottlenecks.",
      role:
        "SWIPEBAY engineered an enterprise-grade, Docker-containerized learning platform with multi-bitrate HLS video delivery, real-time quiz assessment engines, and automated student analytics.",
      solutionsDelivered: [
        "Scalable cloud LMS supporting interactive lectures, video chapters, and downloadable resources",
        "Automated grading engine for multiple-choice and short-answer exams, freeing faculty time",
        "Encrypted, anti-piracy video streaming pipeline with adaptive quality for all bandwidth conditions",
        "Student and faculty progress dashboards tracking attendance, quiz completion, and grade analytics"
      ],
      impactSummary:
        "The new academic platform enabled seamless remote and hybrid learning without a single server failure during university-wide examination periods.",
      results: [
        "3x increase in student course completion rates across digital learning tracks",
        "Successfully stress-tested to support over 20,000 active concurrent examination sessions",
        "55% reduction in professor administrative grading and paper processing time",
        "Zero video piracy incidents recorded due to encrypted stream delivery"
      ]
    },
    ar: {
      title: "نظام إدارة التعلم الافتراضي للمؤسسات الأكاديمية",
      subtitle: "منصة سحابية متطورة تدعم بث المحاضرات، الامتحانات المؤتمتة، وتتبع أداء الطلاب.",
      overview:
        "تعاونت مؤسسة أكاديمية كبرى مع سويب باي لاستبدال بوابة تعليمية قديمة بمنظومة تعليم إلكتروني سحابية حديثة قادرة على استيعاب ذروة اختبارات نهاية الفصل.",
      challenge:
        "تكرر توقف النظام السابق أوقات تسليم الامتحانات، وافتقر إلى تقنيات ضغط الفيديو المتكيفة لخدمة الطلاب ذوي سرعات الإنترنت المنخفضة، مع إجهاد الأساتذة في التصحيح اليدوي.",
      role:
        "طورت سويب باي منصة أكاديمية مؤسسية مدعومة بالحاويات البرمجية (Docker)، وبث فيديو عالي الدقة، ومحركات اختبارات فورية مع تحليلات ذكية لبيانات الطلاب.",
      solutionsDelivered: [
        "منصة LMS سحابية تدعم المحاضرات التفاعلية، الفصول المقسمة، وتحميل المواد العلمية",
        "محرك تصحيح آلي للاختبارات الدورية مع إصدار فوري للنتائج ورصد الدرجات",
        "بنية بث فيديو مشفرة بتقنية HLS تتكيف تلقائياً مع سرعة اتصال كل طالب لمنع التقطيع",
        "لوحات تحكم تفاعلية للطلاب والأساتذة لمتابعة نسب الحضور والتفوق الأكاديمي"
      ],
      impactSummary:
        "وفرت المنصة بيئة تعليمية هجينة مستقرة تماماً، مكنت آلاف الطلاب من أداء امتحاناتهم بيسر ودون تسجيل أي انقطاع للخوادم طوال العام الدراسي.",
      results: [
        "مضاعفة معدلات إتمام المقررات التعليمية بمقدار 3 أضعاف عبر المسارات الرقمية",
        "تحمل تشغيلي تم اختباره بنجاح لأكثر من 20,000 جلسة امتحان نشطة في نفس اللحظة",
        "توفير 55% من الوقت الإداري المستغرق في تصحيح الاختبارات ورصد الدرجات",
        "حماية كاملة للمحتوى التعليمي من القرصنة والتحميل غير المصرح به بفضل التشفير"
      ]
    }
  },
  {
    id: "client-portal-workflow-automation",
    slug: "client-portal-workflow-automation",
    industrySlug: "professional-services",
    clientName: "Consulting & Financial Advisory Group",
    isClientPublic: false,
    image: "/images/services/web-app.jpg",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Bespoke Webhooks", "SendGrid & WhatsApp API", "AES-256 Encryption"],
    metrics: [
      { value: "50%", label: "Time Saved" },
      { value: "65%", label: "Faster Invoices" },
      { value: "100%", label: "Security Pass" }
    ],
    en: {
      title: "Secure Client Portal & Workflow Automation for Advisory Firm",
      subtitle: "Encrypted workspaces, milestone progress tracking, and automated retainer billing.",
      overview:
        "A premium financial and management consulting practice managing corporate clients across Egypt and the Gulf needed to replace unencrypted email communication with an enterprise-grade digital portal.",
      challenge:
        "Sharing confidential financial models and advisory memos over email attachments created security vulnerabilities, while manual PDF invoicing led to payment delays averaging 60+ days.",
      role:
        "SWIPEBAY developed a hardened, branded client portal with two-factor authentication, automated project status updates, and integrated digital invoice settlement.",
      solutionsDelivered: [
        "Encrypted client workspace with role-based document access and comprehensive audit logging",
        "Milestone tracking dashboard where clients review and approve deliverables with legal audit trails",
        "Automated notification pipelines via encrypted email and WhatsApp for critical document updates",
        "Integrated payment workflows enabling clients to settle retainer invoices instantly via wire or card"
      ],
      impactSummary:
        "The portal elevated the firm's client perception, streamlined administrative workflows, and accelerated invoice collection significantly.",
      results: [
        "50% time saved by senior partners on compiling routine monthly client progress reports",
        "65% faster invoice payment settlement through embedded payment links and automated reminders",
        "100% compliance audit pass with zero data exposure incidents across corporate engagements",
        "Scaled active client accounts by 40% without increasing administrative support staff"
      ]
    },
    ar: {
      title: "بوابة عملاء آمنة وأتمتة مسارات العمل لشركة استشارات",
      subtitle: "مساحات عمل مشفرة، متابعة مرحلية للإنجاز، وسداد فوري للمطالبات المالية.",
      overview:
        "احتاجت شركة استشارات إدارية ومالية رائدة تدير حسابات شركات كبرى في مصر والخليج إلى استبدال المراسلات البريدية غير المؤمنة ببوابة رقمية مؤسسية محكمة الأمان.",
      challenge:
        "شكل تداول التقارير المالية والعقود السرية عبر مرفقات البريد مخاطر أمنية واضحة، بينما تسبب إرسال الفواتير اليدوية في تأخر سداد المطالبات لأكثر من شهرين.",
      role:
        "طورت سويب باي بوابة عملاء مشفرة تحمل هوية الشركة، مزودة بالمصادقة الثنائية، ومتابعة حية للمشاريع، مع ربط بوابات دفع وسداد آلي للفواتير الشهرية.",
      solutionsDelivered: [
        "مساحة عمل رقمية مشفرة بصلاحيات دخول دقيقة وسجلات تدقيق لكافة الأنشطة",
        "لوحة متابعة للمراحل يراجع من خلالها العميل المخرجات ويعتمدها بمسار توثيق قانوني",
        "مسارات إشعار مؤتمتة عبر البريد المشفر وواتساب لإخطار العميل فور تحديث التقارير",
        "منظومة فوترة رقمية تتيح للعميل سداد المستحقات بضغطة زر عبر البطاقات أو التحويل المباشر"
      ],
      impactSummary:
        "عززت البوابة من ثقة العملاء المؤسسيين، وتخلصت من الأعباء الإدارية الروتينية، وسرّعت من تدفق الإيرادات المالية بصورة ملموسة.",
      results: [
        "توفير 50% من وقت الشركاء المستغرق سابقاً في تجميع وإعداد التقارير الشهرية",
        "تسريع تحصيل الفواتير بنسبة 65% بفضل روابط السداد الفورية والتنبيهات المؤتمتة",
        "اجتياز كامل لمعايير التدقيق الأمني دون تسجيل أي اختراق أو تسريب لبيانات العملاء",
        "زيادة عدد حسابات العملاء النشطة بنسبة 40% دون الحاجة لتوظيف كوادر إدارية إضافية"
      ]
    }
  }
]

/* =========================================================================
   HELPER UTILITY FUNCTIONS
   ========================================================================= */
export function getAllIndustries(): IndustryDefinition[] {
  return [...SWIPEBAY_INDUSTRIES].sort((a, b) => a.order - b.order)
}

export function getIndustryBySlug(slug: string): IndustryDefinition | undefined {
  return SWIPEBAY_INDUSTRIES.find((ind) => ind.slug === slug)
}

export function getAllCaseStudies(): CaseStudyDefinition[] {
  return SWIPEBAY_CASE_STUDIES
}

export function getCaseStudyBySlug(slug: string): CaseStudyDefinition | undefined {
  return SWIPEBAY_CASE_STUDIES.find((cs) => cs.slug === slug)
}

export function getCaseStudiesByIndustry(industrySlug: string): CaseStudyDefinition[] {
  return SWIPEBAY_CASE_STUDIES.filter((cs) => cs.industrySlug === industrySlug)
}
