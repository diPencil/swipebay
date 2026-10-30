export interface Dictionary {
  meta: {
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
  nav: {
    services: string
    solutions: string
    gateway: string
    enterprise: string
    pricing: string
    faq: string
    blog?: string
    about: string
    contactUs: string
    getAQuote: string
    home: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    titleLine3?: string
    description: string
    primaryCta: string
    secondaryCta: string
    cards: Array<{
      title: string
      sub: string
      badge: string
      badgeIcon?: string
    }>
    mediaNote?: string
  }
  clientBrands: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    dropdownTitle: string
    exploreService: string
    viewAllServices: string
    requestQuoteFor: string
  }
  servicesExperience: {
    heroBadge: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    ctaConsultation: string
    ctaExplore: string
    ecosystemBadge: string
    ecosystemTitle: string
    ecosystemSubtitle: string
    allDisciplinesBadge: string
    allDisciplinesTitle: string
    allDisciplinesSubtitle: string
    categoryFilterAll: string
    detailOverviewHeading: string
    detailChallengeHeading: string
    detailDeliverablesHeading: string
    detailApplicationsHeading: string
    detailProcessHeading: string
    detailRelatedHeading: string
    detailCtaBadge: string
    detailCtaTitle: string
    detailCtaSubtitle: string
    detailCtaWhatsApp: string
    detailCtaEmail: string
    breadcrumbsHome: string
    breadcrumbsServices: string
    exploreCapabilities: string
    viewDetails: string
  }
  features: {
    badge?: string
    title: string
    titleLine1?: string
    titleHighlight?: string
    subtitle: string
    card1Tag: string
    card1Title: string
    card1Desc: string
    card1Pillars: string[]
    card2Tag: string
    card2Title: string
    card2Desc: string
    card2Pillars: string[]
  }
  techMarquee: {
    badge: string
    title: string
    subtitle: string
    cta: string
  }
  pricing: {
    badge: string
    title: string
    subtitle: string
    cta: string
    models: Array<{
      id: string
      name: string
      subtitle: string
      tag: string
      popular?: boolean
      features: string[]
      ctaLabel: string
    }>
  }
  footer: {
    tagline: string
    description: string
    navigationTitle: string
    servicesTitle: string
    contactTitle: string
    socialTitle: string
    headquarterLabel: string
    headquarterAddress: string
    branchLabel: string
    branchAddress: string
    phoneLabel: string
    emailLabel: string
    copyright: string
    terms: string
    revisions: string
    privacy: string
  }
  common: {
    language: string
    switchLanguage: string
    arabic: string
    english: string
    contactViaWhatsApp: string
    sendEmail: string
    callUs: string
  }
  faqExperience: {
    heroBadge: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    searchPlaceholder: string
    noResultsTitle: string
    noResultsSubtitle: string
    categories: {
      all: string
      general: string
      services: string
      process: string
      infrastructure: string
      billing: string
    }
    featuredBadge: string
    featuredTitle: string
    featuredSubtitle: string
    featuredSidebarTitle: string
    featuredSidebarSubtitle: string
    accordionBadge: string
    accordionTitle: string
    ctaBadge: string
    ctaTitle: string
    ctaSubtitle: string
    ctaWhatsApp: string
    ctaEmail: string
    items: Array<{
      id: string
      category: "general" | "services" | "process" | "infrastructure" | "billing"
      question: string
      answer: string
    }>
    featuredItems: Array<{
      id: string
      question: string
      answer: string
      tag: string
    }>
  }
  aboutExperience: {
    heroBadge: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    heroCtaPrimary: string
    heroCtaSecondary: string
    heroTags: string[]

    whoWeAreBadge: string
    whoWeAreTitle: string
    whoWeAreSubtitle: string
    whoWeAreLead: string
    whoWeAreParagraph1: string
    whoWeAreParagraph2: string
    whoWeArePillars: Array<{
      title: string
      desc: string
    }>
    whoWeAreCardBadge: string
    whoWeAreCardTitle: string
    whoWeAreCardSubtitle: string

    philosophyBadge: string
    philosophyQuote: string
    philosophySubtitle: string
    principles: Array<{
      number: string
      title: string
      description: string
    }>

    missionBadge: string
    missionTitle: string
    missionStatement: string
    missionLabel: string
    visionTitle: string
    visionStatement: string
    visionLabel: string

    valuesBadge: string
    valuesTitle: string
    valuesTitleLine1?: string
    valuesTitleHighlight?: string
    valuesSubtitle: string
    valuesList: Array<{
      number: string
      title: string
      tagline: string
      description: string
    }>

    capabilitiesBadge: string
    capabilitiesTitle: string
    capabilitiesSubtitle: string
    capabilitiesCta: string

    processBadge: string
    processTitle: string
    processSubtitle: string
    processStages: Array<{
      step: string
      title: string
      summary: string
      details: string[]
    }>

    industriesBadge: string
    industriesTitle: string
    industriesSubtitle: string
    industriesList: Array<{
      id: string
      sector: string
      description: string
      highlights: string[]
    }>

    testimonialsBadge: string
    testimonialsTitle: string
    testimonialsSubtitle: string
    testimonialsList: Array<{
      id: string
      quote: string
      author: string
      role: string
      sector: string
    }>

    synthesisBadge: string
    synthesisTitle: string
    synthesisHighlight: string
    synthesisSubtitle: string
    creativePanelTitle: string
    creativePanelDesc: string
    creativePoints: string[]
    technicalPanelTitle: string
    technicalPanelDesc: string
    technicalPoints: string[]

    ctaBadge: string
    ctaTitle: string
    ctaSubtitle: string
    ctaWhatsApp: string
    ctaEmail: string
    ctaServices: string
  }

  contactExperience: {
    heroBadge: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    directAccessTitle: string
    directAccessDesc: string
    slaResponseTitle: string
    slaResponseDesc: string
    ndaTitle: string
    ndaDesc: string
    activeTelemetryLabel: string
    ctaWhatsApp: string
    ctaCall: string
    ctaEmail: string
    formBadge: string
    formTitle: string
    formSubtitle: string
    formNameLabel: string
    formNamePlaceholder: string
    formEmailLabel: string
    formEmailPlaceholder: string
    formPhoneLabel: string
    formPhonePlaceholder: string
    formCompanyLabel: string
    formCompanyPlaceholder: string
    formServiceLabel: string
    formBudgetLabel: string
    formMessageLabel: string
    formMessagePlaceholder: string
    formSubmit: string
    formSubmitting: string
    formSuccessTitle: string
    formSuccessDesc: string
    hubBadge: string
    hubTitle: string
    hubSubtitle: string
    locationHqLabel: string
    locationHqAddress: string
    locationBranchLabel: string
    locationBranchAddress: string
    hoursLabel: string
    hoursValue: string
    faqBadge: string
    faqTitle: string
    faqSubtitle: string
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}
