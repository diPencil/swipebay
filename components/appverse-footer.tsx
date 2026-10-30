"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Zap,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import LazyVideo from "./lazy-video"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { SWIPEBAY_SERVICES } from "@/lib/services"
import { LanguageSwitcher } from "@/components/language-switcher"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function AppverseFooter() {
  const { locale, dictionary } = useLanguage()
  const d = dictionary.footer

  return (
    <section className="text-white">
      {/* Feature / Showcase Card */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 border border-white/10">
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            {/* Left copy - Satiated, authoritative enterprise narrative */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-medium text-purple-300">
                <Image
                  src={BRAND_CONFIG.assets.favicon}
                  alt={`${BRAND_CONFIG.name} icon`}
                  width={18}
                  height={18}
                  className="h-3.5 w-3.5 object-contain"
                />
                <span className="text-[11px] font-semibold tracking-widest uppercase">
                  {locale === "ar" ? "حلول رقمية متكاملة للمؤسسات" : "SCALABLE DIGITAL EXCELLENCE"}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
                {locale === "ar"
                  ? "نحول الأفكار المعقدة إلى برمجيات فائقة وهويات رقمية تدوم"
                  : "Engineering scalable platforms & memorable digital experiences"}
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
                {locale === "ar"
                  ? "من استراتيجية الهوية وتطوير البرمجيات المخصصة، إلى إدارة البنية السحابية وبوابات الدفع الإلكتروني، نضع الأساس التقني لنمو أعمالك بدون قوالب جاهزة."
                  : "From strategic brand identity and custom software engineering to high-performance cloud hosting and automated workflows, we build the technological foundation for tomorrow's leaders."}
              </p>

              {/* Three Value Pillars (Rich, satiated content) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#49CBDC]">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold text-white">
                      {locale === "ar" ? "جاهزية 99.98%" : "99.98% SLA"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {locale === "ar"
                      ? "بنية سحابية موزعة لضمان استقرار التشغيل على مدار الساعة."
                      : "Resilient microservices and managed cloud deployments."}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Layers className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold text-white">
                      {locale === "ar" ? "تكامل التخصصات" : "Unified Stack"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {locale === "ar"
                      ? "توحيد الهوية والبرمجيات وبوابات الدفع في منظومة واحدة."
                      : "Brand strategy, software, and payments in one place."}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#49CBDC]">
                    <Zap className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold text-white">
                      {locale === "ar" ? "تسليم مرن وسريع" : "Agile Delivery"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {locale === "ar"
                      ? "دورات تسليم رشيقة مع تواصل مباشر مع فريق المهندسين."
                      : "Transparent sprints with direct senior engineering access."}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  asChild
                  className="text-xs sm:text-sm font-semibold"
                >
                  <Link href="/enterprise">
                    {locale === "ar" ? "استكشف حلول الشركات" : "Explore Enterprise Solutions"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="text-xs sm:text-sm"
                >
                  <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{dictionary.common.contactViaWhatsApp}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              {/* Micro Trust Note */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                <span>
                  {locale === "ar"
                    ? "مقرات القاهرة والرياض · عقود تشغيل موثقة · معمارية مخصصة بالكامل"
                    : "Cairo & Riyadh hubs · Verified production SLAs · Zero generic templates"}
                </span>
              </div>
            </div>

            {/* Right mockup - Dedicated Engineered To Scale video */}
            <div className="mx-auto w-full max-w-[320px] lg:col-span-5">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl border border-white/10">
                <div className="relative aspect-[37/58] w-full overflow-hidden rounded-2xl bg-black">
                  <LazyVideo
                    src="/videos/Engineered%20To%20Scale.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label={`${BRAND_CONFIG.name} company showcase`}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand column */}
            <div className="space-y-4 md:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={BRAND_CONFIG.assets.logoGrid}
                  alt={`${BRAND_CONFIG.name} logo`}
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="max-w-md text-sm text-neutral-400 leading-relaxed">{d.description}</p>

              {/* Language Switcher in Footer */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs text-neutral-500 font-medium">{dictionary.common.language}:</span>
                <LanguageSwitcher variant="pill" />
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-300">
                {d.servicesTitle}
              </h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                {SWIPEBAY_SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${service.slug}`} className="hover:text-[#49CBDC] transition-colors">
                      {service[locale].title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/services" className="text-purple-300 hover:text-[#49CBDC] transition-colors font-medium">
                    {locale === "ar" ? "← جميع الخدمات (10)" : "All Services (10) →"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation Links */}
            <div>
              <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {d.navigationTitle}
              </h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <Link href="/" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.enterprise}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.solutions}
                  </Link>
                </li>
                <li>
                  <Link href="/gateway" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.gateway}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#49CBDC] transition-colors">
                    {dictionary.nav.about}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Factual Contact & Locations */}
            <div>
              <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {d.contactTitle}
              </h5>
              <ul className="space-y-3 text-xs text-neutral-400">
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#49CBDC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-[11px]">{d.headquarterLabel}:</span>
                    <span className="text-[11px] leading-tight text-neutral-400">{d.headquarterAddress}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-neutral-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-[11px]">{d.branchLabel}:</span>
                    <span className="text-[11px] leading-tight text-neutral-400">{d.branchAddress}</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <a
                    href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
                    dir="ltr"
                    className="hover:text-[#49CBDC] transition-colors font-mono text-[11px]"
                  >
                    {BRAND_CONFIG.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#49CBDC] shrink-0" />
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}`}
                    className="hover:text-[#49CBDC] transition-colors text-[11px]"
                  >
                    {BRAND_CONFIG.contact.email}
                  </a>
                </li>
              </ul>

              {/* Social Profiles */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3">
                <a
                  href={BRAND_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Swipebay on LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href={BRAND_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Swipebay on Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href={BRAND_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Swipebay on Facebook"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row">
            <div className="flex items-center flex-wrap gap-1.5 justify-center sm:justify-start">
              <span>&copy; 2026</span>
              <a
                href="https://swipebay.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mx-0.5 hover:opacity-80 transition-opacity"
                aria-label="Swipebay"
              >
                <Image
                  src="/swipebaygrid.png"
                  alt="Swipebay"
                  width={72}
                  height={18}
                  className="h-3.5 sm:h-4 w-auto object-contain inline-block brightness-0 invert"
                />
              </a>
              <span>
                {locale === "ar"
                  ? "- شركة رقمية وتقنية بواسطة"
                  : "- A Digital & Technology Company by"}
              </span>
              <a
                href="https://dipencil.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mx-0.5 hover:opacity-80 transition-opacity"
                title="Pencil"
              >
                <Image
                  src="/pencillogo.png"
                  alt="Pencil"
                  width={70}
                  height={16}
                  className="h-3.5 sm:h-4 w-auto object-contain inline-block"
                />
              </a>
              <span>
                {locale === "ar"
                  ? " | جميع الحقوق محفوظة لـ Pencil Studio."
                  : " | All rights reserved by Pencil Studio."}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-[#49CBDC] transition-colors">
                {d.revisions}
              </Link>
              <Link href="/t&c" className="hover:text-[#49CBDC] transition-colors">
                {d.terms}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
