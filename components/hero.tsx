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

          {/* Dual CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-[#49CBDC] px-7 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(73,203,220,0.35)] hover:bg-[#67D6E4] hover:shadow-[0_0_28px_rgba(73,203,220,0.5)] hover:scale-[1.02] transition-all"
            >
              <a href={BRAND_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>{h.primaryCta}</span>
                <ArrowIcon className="h-4 w-4 ms-2" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-[#49CBDC]/40 backdrop-blur-md transition-all"
            >
              <Link href="/services">{h.secondaryCta}</Link>
            </Button>
          </div>

          {/* Disciplines Showcase Grid (Responsive phone cards) */}
          <div className="mt-10 sm:mt-12 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {h.cards.map((card, idx) => {
              const videoUrl = videoByDiscipline[card.title] || defaultVideos[idx % defaultVideos.length]
              // Responsive visibility matches original design
              const visibility =
                idx <= 2
                  ? "block"
                  : idx === 3
                    ? "hidden sm:block"
                    : "hidden lg:block"

              return (
                <div key={idx} className={visibility}>
                  <PhoneCard
                    title={card.title}
                    sub={card.sub}
                    badge={card.badge}
                    videoSrc={videoUrl}
                  />
                </div>
              )
            })}
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
  videoSrc,
}: {
  title: string
  sub: string
  badge: string
  videoSrc: string
}) {
  return (
    <div className="relative rounded-[28px] liquid-glass border border-white/10 p-2 shadow-xl hover:border-purple-400/40 transition-all duration-300 group">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={videoSrc}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} | ${sub}`}
        />

        {/* Liquid gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col justify-between p-3.5 text-start">
          <div className="mx-auto h-1.5 w-14 rounded-full bg-white/20" />

          <div className="space-y-1.5 pb-1">
            <div className="text-base font-bold leading-tight text-white drop-shadow-sm">
              {title}
            </div>
            <p className="text-[11px] text-neutral-300 leading-snug line-clamp-2">
              {sub}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#49CBDC]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#49CBDC] border border-[#49CBDC]/30 backdrop-blur-sm">
                <Sparkles className="h-2.5 w-2.5" />
                <span>{badge}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
