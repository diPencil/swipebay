"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

export function Hero() {
  const { locale, isRTL, dictionary } = useLanguage()
  const h = dictionary.hero
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  // Map each hero discipline card to its dedicated video from public/videos
  const videoByDiscipline: Record<string, string> = {
    "Robust Architecture": "/videos/Robust%20Architecture.mp4",
    "بنية برمجية متينة": "/videos/Robust%20Architecture.mp4",
    "Distinctive Brand": "/videos/Distinctive%20Brand.mp4",
    "هوية بصرية استثنائية": "/videos/Distinctive%20Brand.mp4",
    "High Availability": "/videos/High%20Availability.mp4",
    "جاهزية واستقرار مستمر": "/videos/High%20Availability.mp4",
    "Applied AI": "/videos/Applied%20AI.mp4",
    "ذكاء اصطناعي عملي": "/videos/Applied%20AI.mp4",
    "Targeted Growth": "/videos/Targeted%20Growth.mp4",
    "تسويق قائم على البيانات": "/videos/Targeted%20Growth.mp4",
  }

  const defaultVideos = [
    "/videos/Robust%20Architecture.mp4",
    "/videos/Distinctive%20Brand.mp4",
    "/videos/High%20Availability.mp4",
    "/videos/Applied%20AI.mp4",
    "/videos/Targeted%20Growth.mp4",
  ]

  return (
    <section className="relative isolate overflow-hidden pt-4 pb-10 sm:pt-8 sm:pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Eyebrow badge */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 backdrop-blur-md">
            <Image
              src={BRAND_CONFIG.assets.favicon}
              alt={`${BRAND_CONFIG.name} icon`}
              width={18}
              height={18}
              className="h-3.5 w-3.5 object-contain"
            />
            <span className="text-[11px] font-semibold tracking-wider text-purple-200 uppercase">
              {h.badge}
            </span>
          </div>

          {/* Purpose-Driven H1 - Controlled scale & density */}
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] max-w-3xl leading-[1.14]">
            <span className="block text-white">{h.titleLine1}</span>
            <span className="block text-[#49CBDC] drop-shadow-[0_0_24px_rgba(73,203,220,0.38)] mt-1">
              {h.titleLine2}
            </span>
            {h.titleLine3 ? (
              <span className="block text-white/90 mt-1">{h.titleLine3}</span>
            ) : null}
          </h1>

          {/* Description - Concise and elegant */}
          <p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-300/90 leading-relaxed">
            {h.description}
          </p>

          {/* Dual CTAs: Side-by-side on both mobile & desktop */}
          <div className="mt-5 sm:mt-6 flex flex-row items-center justify-center gap-2 sm:gap-3 max-w-full">
            <Button
              asChild
              className="h-9 sm:h-11 !px-3.5 xs:!px-4.5 sm:!px-8 text-xs sm:text-sm font-semibold shrink-0"
            >
              <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>{h.primaryCta}</span>
                <ArrowIcon className="h-3 w-3 ms-1 sm:h-4 sm:w-4 sm:ms-2 shrink-0" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-9 sm:h-11 !px-3.5 xs:!px-4.5 sm:!px-8 text-xs sm:text-sm font-medium shrink-0"
            >
              <Link href="/services">{h.secondaryCta}</Link>
            </Button>
          </div>

          {/* ========================================================
              DISCIPLINES SHOWCASE:
              - Desktop (lg+): Static 5-column grid across full width (untouched)
              - Mobile (< lg): Infinite continuous marquee loop
              ======================================================== */}

          {/* 1. Desktop Showcase: Static 5-Column Grid (Untouched) */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:w-full mt-10 sm:mt-12">
            {h.cards.map((card, idx) => {
              const videoUrl = videoByDiscipline[card.title] || defaultVideos[idx % defaultVideos.length]
              return (
                <div key={`desktop-${idx}`}>
                  <PhoneCard
                    title={card.title}
                    sub={card.sub}
                    badge={card.badge}
                    badgeIcon={card.badgeIcon}
                    videoSrc={videoUrl}
                    isRTL={isRTL}
                  />
                </div>
              )
            })}
          </div>

          {/* 2. Mobile & Tablet Showcase: Seamless Infinite Marquee Loop (Crisp, No Edge Fade) */}
          <div
            className="block lg:hidden w-full mt-8 relative overflow-hidden"
            dir="ltr"
          >
            <div
              className="flex gap-3 animate-hero-phones hover:[animation-play-state:paused] active:[animation-play-state:paused] py-1"
              style={{ width: "max-content" }}
            >
              {[...h.cards, ...h.cards, ...h.cards].map((card, idx) => {
                const videoUrl = videoByDiscipline[card.title] || defaultVideos[idx % defaultVideos.length]
                return (
                  <div
                    key={`mobile-marquee-${idx}`}
                    className="w-[150px] xs:w-[165px] sm:w-[185px] shrink-0"
                  >
                    <PhoneCard
                      title={card.title}
                      sub={card.sub}
                      badge={card.badge}
                      badgeIcon={card.badgeIcon}
                      videoSrc={videoUrl}
                      isRTL={isRTL}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title,
  sub,
  badge,
  badgeIcon,
  videoSrc,
  isRTL = false,
}: {
  title: string
  sub: string
  badge: string
  badgeIcon?: string
  videoSrc: string
  isRTL?: boolean
}) {
  const isSuperFeliz = badge.toLowerCase().includes("superfeliz")
  const iconSrc = badgeIcon || (isSuperFeliz ? "/technologies/superfeliz.svg" : null)

  return (
    <div className="relative rounded-[20px] sm:rounded-[28px] liquid-glass border border-white/10 p-1.5 sm:p-2 shadow-xl hover:border-purple-400/40 transition-all duration-300 group">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[15px] sm:rounded-2xl bg-black">
        <LazyVideo
          src={videoSrc}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} | ${sub}`}
        />

        {/* Liquid gradient overlay - Crystal clear top, focused dark base for bottom typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-35% to-transparent pointer-events-none" />

        <div
          className="relative z-10 flex h-full flex-col justify-between p-2.5 sm:p-3.5 text-start"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="mx-auto h-1 w-10 sm:h-1.5 sm:w-14 rounded-full bg-white/20" />

          <div className="space-y-1 sm:space-y-1.5 pb-0.5 sm:pb-1">
            <div className="text-xs sm:text-base font-bold leading-tight text-white drop-shadow-sm line-clamp-1 sm:line-clamp-none">
              {title}
            </div>
            <p className="text-[10px] sm:text-[11px] text-neutral-300 leading-snug line-clamp-2">
              {sub}
            </p>
            <div className="pt-0.5 sm:pt-1">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#49CBDC]/10 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-[#49CBDC] border border-[#49CBDC]/30 backdrop-blur-sm">
                {isSuperFeliz ? (
                  <SuperFelizIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 fill-current text-[#49CBDC]" />
                ) : iconSrc ? (
                  <Image
                    src={iconSrc}
                    alt={badge}
                    width={14}
                    height={14}
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 object-contain shrink-0"
                  />
                ) : (
                  <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                )}
                <span>{badge}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SuperFelizIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 608 619.3"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  )
}
