"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BRAND_CONFIG } from "@/lib/brand"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Star,
  Building2,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface ContactContentProps {
  locale: Locale
  dict: Dictionary
}

export function ContactContent({ locale, dict }: ContactContentProps) {
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight
  const exp = dict.contactExperience

  const [copiedHq, setCopiedHq] = useState(false)
  const [copiedBranch, setCopiedBranch] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const copyToClipboard = (text: string, isHq: boolean) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      if (isHq) {
        setCopiedHq(true)
        setTimeout(() => setCopiedHq(false), 2000)
      } else {
        setCopiedBranch(true)
        setTimeout(() => setCopiedBranch(false), 2000)
      }
    }
  }

  return (
    <div className="space-y-24 pb-24 sm:space-y-32">
      {/* =========================================================================
          SECTION 01: HERO SECTION (Symmetrical 3-Column Company Stage)
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
              <span className="font-mono tracking-wider uppercase">{exp.heroBadge}</span>
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
                <span className="h-2 w-2 rounded-full bg-[#49CBDC] animate-pulse" />
                <span>DIRECT COMPANY ACCESS</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {exp.heroSubtitle}
              </p>

              {/* Trust Attributes */}
              <div className="space-y-2 text-xs text-neutral-300 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "تواصل مباشر مع كبار المهندسين" : "Direct Senior Architecture Access"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "اتفاقية سرية متبادلة (NDA)" : "Mutual Non-Disclosure Guaranteed"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "رد أولي خلال أقل من ساعتين" : "Under 2-Hour Response SLA"}</span>
                </div>
              </div>

              <div>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 px-6 text-xs sm:text-sm font-medium"
                >
                  <a href="#direct-channels" className="inline-flex items-center gap-2">
                    <span>{isAr ? "قنوات التواصل والمقرات" : "Direct Channels & Locations"}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Center Avatar Model Column: avatar16 with Arched Pedestal & Dual CTA Pill */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Arched Soft Pedestal in the background */}
              <div className="absolute inset-x-8 sm:inset-x-14 top-4 bottom-6 rounded-t-[140px] sm:rounded-t-[180px] bg-gradient-to-t from-neutral-950 via-purple-950/30 to-white/[0.04] border-t border-x border-white/15 backdrop-blur-xl pointer-events-none shadow-[0_-20px_50px_rgba(139,92,246,0.18)]" />

              {/* Ambient Circular Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#49CBDC]/15 blur-[90px] rounded-full pointer-events-none" />

              {/* Avatar Model Image: avatar16 (Chat Bubble & Phone Icon) */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] mx-auto aspect-[534/769]">
                <Image
                  src="/images/avatar16.png"
                  alt="SWIPEBAY Direct Company Consultation"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] select-none pointer-events-none"
                />
              </div>

              {/* Floating Liquid-Glass Dual-CTA Capsule: Slanted Board */}
              <div className="relative z-20 -mt-8 sm:-mt-10 slanted-board flex items-center gap-1.5 sm:gap-2">
                <Button
                  asChild
                  className="h-8 sm:h-10 px-3.5 sm:px-6 text-xs sm:text-sm font-semibold"
                >
                  <a
                    href={BRAND_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{exp.ctaWhatsApp}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="h-8 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-medium"
                >
                  <a href={`tel:${BRAND_CONFIG.contact.phoneRaw}`} className="inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#49CBDC]" />
                    <span>{exp.ctaCall}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Flanking Column: Live Telemetry & Company Standards */}
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
                  {isAr ? "استجابة فورية" : "< 2hr SLA"}
                </div>
                <div className="text-xs font-mono text-[#49CBDC] mt-0.5">
                  {exp.activeTelemetryLabel}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-400 font-light pt-1">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "القاهرة: 9:00 ص - 7:00 م (GMT+2)" : "Cairo Hub: 9:00 AM – 7:00 PM (GMT+2)"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "مراقبة سحابية على مدار الساعة 24/7" : "24/7 Monitored Cloud Telemetry"}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <span>{isAr ? "ملكية فكرية كاملة للأكواد والتصميم" : "100% Client Code & IP Rights"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Strip */}
          <div className="rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] mt-12 sm:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/10">
              <div className="space-y-1">
                <div className="font-mono text-3xl sm:text-4xl font-black text-[#49CBDC]">100%</div>
                <div className="text-xs text-neutral-300 font-medium">{exp.ndaTitle}</div>
                <div className="text-[11px] text-neutral-500">{exp.ndaDesc}</div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-purple-300">&lt; 2hr</div>
                <div className="text-xs text-neutral-300 font-medium">{exp.slaResponseTitle}</div>
                <div className="text-[11px] text-neutral-500">{exp.slaResponseDesc}</div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-white">0 Middlemen</div>
                <div className="text-xs text-neutral-300 font-medium">{exp.directAccessTitle}</div>
                <div className="text-[11px] text-neutral-500">{exp.directAccessDesc}</div>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <div className="font-mono text-3xl sm:text-4xl font-black text-[#49CBDC]">2 Hubs</div>
                <div className="text-xs text-neutral-300 font-medium">{isAr ? "الشيخ زايد وشيراتون" : "Zayed & Sheraton"}</div>
                <div className="text-[11px] text-neutral-500">{isAr ? "المقرات الفعلية للشركة" : "Physical Company Presence"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: EDITORIAL DIRECT COMMUNICATION & COMPANY LOCATIONS
          ========================================================================= */}
      <section id="direct-channels" className="container mx-auto px-4 max-w-7xl scroll-mt-24 space-y-12 sm:space-y-16">
        {/* A. Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-6 border-b border-white/10">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold text-[#49CBDC] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#49CBDC]" />
              <span>{isAr ? "قنوات التواصل والمقرات" : "COMMUNICATION & PRESENCE"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {isAr ? "كل مشروع استثنائي يبدأ بمحادثة حقيقية." : "Every good project starts with a conversation."}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3 pb-1">
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {isAr
                ? "سواء كنت تخطط لمنصة برمجية جديدة، أو تبني هوية بصرية متميزة، فريقنا مستعد لمناقشة أهدافك وتقديم رؤية هندسية واضحة."
                : "Whether you are planning a new software platform, shaping a distinctive brand system, or evaluating cloud infrastructure, our team is ready to discuss your goals with technical transparency."}
            </p>
          </div>
        </div>

        {/* B. Featured WhatsApp Communication (Wide Horizontal Composition) */}
        <div className="relative overflow-hidden rounded-[32px] liquid-glass-enhanced border border-[#49CBDC]/30 p-7 sm:p-10 lg:p-12 hover:border-[#49CBDC]/60 transition-all duration-500 group shadow-[0_25px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_70px_rgba(73,203,220,0.18)]">
          {/* Subtle Ambient Chromatic Glow */}
          <div className="absolute -top-32 -end-32 w-96 h-96 bg-[#49CBDC]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#49CBDC]/15 transition-all duration-700" />
          <div className="absolute -bottom-32 -start-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Start side: Icon, Title & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-black border border-[#49CBDC]/40 text-[#49CBDC] shadow-[0_0_20px_rgba(73,203,220,0.25)] group-hover:scale-105 group-hover:border-[#49CBDC] transition-all">
                  <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#49CBDC]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                    {isAr ? "القناة المباشرة الأولى // WHATSAPP" : "PRIMARY DIRECT CHANNEL // WHATSAPP"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {isAr ? "تحدث معنا مباشرة عبر واتساب" : "Start a direct conversation."}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
                {isAr
                  ? "الوسيلة الأسرع والأسهل لمناقشة أفكار مشروعك، إرسال المتطلبات الفنية، أو تحديد موعد لجلسة استكشافية."
                  : "The most direct way to discuss technical scopes, share preliminary briefs, or arrange an exploratory session with our team."}
              </p>
            </div>

            {/* End side: Large Phone Display & Call-to-Action */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end justify-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 lg:ps-8 lg:border-s lg:border-white/10">
              <div className="space-y-1 text-start lg:text-end rtl:lg:text-start">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  {isAr ? "الرقم المعتمد للشركة" : "OFFICIAL DIRECT LINE"}
                </div>
                <a
                  href={BRAND_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-2xl sm:text-3xl font-black text-white hover:text-[#49CBDC] transition-colors tracking-tight"
                  dir="ltr"
                >
                  {BRAND_CONFIG.contact.phone}
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="h-12 px-9 text-black font-bold text-sm sm:text-base"
              >
                <a
                  href={BRAND_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5"
                >
                  <span>{isAr ? "بدء محادثة الآن" : "Start Conversation"}</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* C. Secondary Communication Channels (Phone & Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Channel 1: Direct Telephone */}
          <a
            href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
            className="group rounded-[28px] liquid-glass border border-white/12 p-6 sm:p-8 hover:border-purple-400/50 hover:bg-purple-950/20 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-300 uppercase">
                  {isAr ? "الاتصال الهاتفي // PHONE" : "VOICE CHANNEL // PHONE"}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {isAr ? "الاتصال الهاتفي المباشر" : "Direct Telephone"}
                </h4>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:scale-105 group-hover:border-purple-400 group-hover:text-purple-200 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <Phone className="h-5 w-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {isAr
                ? "للمناقشات الصوتية المباشرة والاستفسارات السريعة حول خدمات ومواعيد انطلاق المشروعات."
                : "For direct voice briefings and immediate inquiries regarding service offerings or kickoff schedules."}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors" dir="ltr">
                {BRAND_CONFIG.contact.phone}
              </span>
              <ArrowIcon className="h-4 w-4 text-neutral-400 group-hover:text-purple-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
            </div>
          </a>

          {/* Channel 2: Corporate Email */}
          <a
            href={`mailto:${BRAND_CONFIG.contact.email}`}
            className="group rounded-[28px] liquid-glass border border-white/12 p-6 sm:p-8 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
                  {isAr ? "البريد الإلكتروني // EMAIL" : "OFFICIAL INBOX // EMAIL"}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#49CBDC] transition-colors">
                  {isAr ? "البريد الإلكتروني الرسمي" : "Corporate Email"}
                </h4>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-[#49CBDC] group-hover:scale-105 group-hover:border-cyan-400 group-hover:text-cyan-200 transition-all shadow-[0_0_15px_rgba(73,203,220,0.15)]">
                <Mail className="h-5 w-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {isAr
                ? "لإرسال كراسات الشروط (RFPs)، ملفات المواصفات الفنية التفصيلية، وطلبات مذكرات التفاهم والـ NDA."
                : "For formal RFPs, detailed architectural briefs, vendor evaluations, and mutual NDA requests."}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-[#49CBDC] transition-colors" dir="ltr">
                {BRAND_CONFIG.contact.email}
              </span>
              <ArrowIcon className="h-4 w-4 text-neutral-400 group-hover:text-[#49CBDC] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
            </div>
          </a>
        </div>

        {/* D. Company Locations (Separate Editorial Location Strip) */}
        <div className="pt-10 sm:pt-14 border-t border-white/10 space-y-8">
          {/* Location Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                {isAr ? "المقرات الفعلية // PHYSICAL PRESENCE" : "PHYSICAL PRESENCE // EGYPT"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {isAr ? "مقرات الشركة المعتمدة" : "Company Locations"}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              {isAr
                ? "مقران معتمدان للشركة في القاهرة الكبرى والجيزة لخدمة شركائنا في مصر والمنطقة."
                : "Two registered locations across Greater Cairo and Giza serving our partners locally and internationally."}
            </p>
          </div>

          {/* Two Balanced Address Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Location 1: Beverly Hills, El Sheikh Zayed */}
            <div className="space-y-4 p-6 sm:p-7 rounded-[26px] liquid-glass border border-white/10 hover:border-[#49CBDC]/30 transition-colors flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#49CBDC] bg-[#49CBDC]/10 border border-[#49CBDC]/20 px-2.5 py-0.5 rounded-full">
                    01 // GIZA & ZAYED
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Copy Address Button */}
                    <button
                      type="button"
                      onClick={() => copyToClipboard(exp.locationHqAddress, true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 hover:text-white hover:border-[#49CBDC]/40 hover:bg-[#49CBDC]/10 transition-all cursor-pointer"
                      title={isAr ? "نسخ العنوان" : "Copy address"}
                    >
                      {copiedHq ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400">{isAr ? "تم النسخ" : "Copied"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span className="text-[11px]">{isAr ? "نسخ" : "Copy"}</span>
                        </>
                      )}
                    </button>

                    {/* Google Maps Search Link */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exp.locationHqAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 hover:text-[#49CBDC] hover:border-[#49CBDC]/40 transition-all"
                      title={isAr ? "فتح الخريطة" : "Open in Google Maps"}
                    >
                      <MapPin className="h-3 w-3" />
                      <span className="text-[11px]">{isAr ? "الخريطة" : "Map"}</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {isAr ? "بيفرلي هيلز، الشيخ زايد" : "Beverly Hills, El Sheikh Zayed"}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {exp.locationHqAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Location 2: Sheraton, Heliopolis */}
            <div className="space-y-4 p-6 sm:p-7 rounded-[26px] liquid-glass border border-white/10 hover:border-purple-400/30 transition-colors flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
                    02 // CAIRO & SHERATON
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Copy Address Button */}
                    <button
                      type="button"
                      onClick={() => copyToClipboard(exp.locationBranchAddress, false)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 hover:text-white hover:border-purple-400/40 hover:bg-purple-950/20 transition-all cursor-pointer"
                      title={isAr ? "نسخ العنوان" : "Copy address"}
                    >
                      {copiedBranch ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400">{isAr ? "تم النسخ" : "Copied"}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span className="text-[11px]">{isAr ? "نسخ" : "Copy"}</span>
                        </>
                      )}
                    </button>

                    {/* Google Maps Search Link */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exp.locationBranchAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 hover:text-purple-300 hover:border-purple-400/40 transition-all"
                      title={isAr ? "فتح الخريطة" : "Open in Google Maps"}
                    >
                      <MapPin className="h-3 w-3" />
                      <span className="text-[11px]">{isAr ? "الخريطة" : "Map"}</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {isAr ? "مساكن شيراتون، مصر الجديدة" : "Sheraton, Heliopolis"}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {exp.locationBranchAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: ENGAGEMENT PROTOCOL & FAQS
          ========================================================================= */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#49CBDC] uppercase">
            {exp.faqBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {exp.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            {exp.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {exp.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl liquid-glass border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-start cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-white pe-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#49CBDC] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300/80 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
