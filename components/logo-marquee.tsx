"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

interface TechItem {
  name: string
  category: string
  iconSrc: string
  invertOnDark?: boolean
}

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)
  const { dictionary, isRTL } = useLanguage()
  const t = dictionary.techMarquee

  const rowOne: TechItem[] = [
    { name: "Next.js", category: "Full-Stack Web", iconSrc: "/technologies/next-dot-js-svgrepo-com.svg", invertOnDark: true },
    { name: "React", category: "UI Architecture", iconSrc: "/technologies/react-svgrepo-com.svg" },
    { name: "TypeScript", category: "Type Safety", iconSrc: "/technologies/typescript-icon-svgrepo-com.svg" },
    { name: "JavaScript", category: "Core Frontend", iconSrc: "/technologies/js-svgrepo-com.svg" },
    { name: "Tailwind CSS", category: "Design System", iconSrc: "/technologies/tailwind-css-svgrepo-com.svg", invertOnDark: true },
    { name: "Node.js", category: "Backend Runtime", iconSrc: "/technologies/node-js-svgrepo-com.svg" },
    { name: "Python", category: "AI & Automation", iconSrc: "/technologies/python-svgrepo-com.svg" },
    { name: "FastAPI", category: "Async APIs", iconSrc: "/technologies/fastapi-svgrepo-com.svg", invertOnDark: true },
    { name: "NestJS", category: "Enterprise Node", iconSrc: "/technologies/nestjs-svgrepo-com.svg" },
    { name: "PostgreSQL", category: "Relational DB", iconSrc: "/technologies/postgresql-logo-svgrepo-com.svg" },
    { name: "Redis", category: "In-Memory Cache", iconSrc: "/technologies/redis-svgrepo-com.svg" },
    { name: "Docker", category: "Containers", iconSrc: "/technologies/docker-svgrepo-com.svg" },
    { name: "GraphQL", category: "API Layer", iconSrc: "/technologies/graphql-svgrepo-com.svg" },
  ]

  const rowTwo: TechItem[] = [
    { name: "Vue.js", category: "Reactive UI", iconSrc: "/technologies/vue-js-svgrepo-com.svg", invertOnDark: true },
    { name: "Angular", category: "Web Framework", iconSrc: "/technologies/angular-svgrepo-com.svg" },
    { name: "Django", category: "Python Web", iconSrc: "/technologies/django-svgrepo-com.svg" },
    { name: "Laravel", category: "PHP Ecosystem", iconSrc: "/technologies/laravel-svgrepo-com.svg" },
    { name: "PHP", category: "Server Scripting", iconSrc: "/technologies/php2-svgrepo-com.svg" },
    { name: ".NET Core", category: "Enterprise Core", iconSrc: "/technologies/aspnet-svgrepo-com.svg", invertOnDark: true },
    { name: "Ruby on Rails", category: "MVC Framework", iconSrc: "/technologies/rails-svgrepo-com.svg" },
    { name: "MySQL", category: "Enterprise SQL", iconSrc: "/technologies/mysql-svgrepo-com.svg" },
    { name: "MongoDB", category: "NoSQL Database", iconSrc: "/technologies/mongo-svgrepo-com.svg" },
    { name: "AWS EC2", category: "Cloud & VPC", iconSrc: "/technologies/aws-ec2-svgrepo-com.svg" },
    { name: "Firebase", category: "Cloud Backend", iconSrc: "/technologies/firebase-svgrepo-com.svg" },
    { name: "Git", category: "Version Control", iconSrc: "/technologies/git-svgrepo-com.svg", invertOnDark: true },
    { name: "RESTful APIs", category: "Service Mesh", iconSrc: "/technologies/rest-api-svgrepo-com.svg", invertOnDark: true },
    { name: "Redux", category: "State Engine", iconSrc: "/technologies/redux-svgrepo-com.svg" },
  ]

  const TechCard = ({ item, rowId }: { item: TechItem; rowId: string }) => {
    return (
      <div
        className="flex-shrink-0 mx-2.5"
        onMouseEnter={() => setPausedRow(rowId)}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div className="h-16 px-5 rounded-2xl liquid-glass border border-white/10 hover:border-[#49CBDC]/50 backdrop-blur-xl flex flex-row items-center gap-3.5 transition-all duration-300 group cursor-default hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(73,203,220,0.15)] text-left">
          {/* Frameless floating icon (enlarged slightly without inner bounding box) */}
          <div className="shrink-0 flex items-center justify-center">
            <Image
              src={item.iconSrc}
              alt={item.name}
              width={30}
              height={30}
              className={`h-7 w-7 sm:h-[30px] sm:w-[30px] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                item.invertOnDark ? "invert brightness-150" : ""
              }`}
            />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white group-hover:text-cyan-100 transition-colors">
              {item.name}
            </div>
            <div className="text-[10px] text-neutral-400 font-mono tracking-wide">
              {item.category}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-end">
          <div className="text-center sm:text-start space-y-3">
            <div>
              <a
                href="https://dipencil.com/"
                target="_blank"
                rel="noopener noreferrer"
                title={isRTL ? "بنسل ستوديو" : "Pencil Studio"}
                aria-label={isRTL ? "بنسل ستوديو (يفتح في نافذة جديدة)" : "Pencil Studio (opens in a new window)"}
                className="group inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-cyan-200 transition-all duration-300 hover:border-[#49CBDC] hover:shadow-[0_0_20px_rgba(73,203,220,0.35)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49CBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(73, 203, 220, 0.4)",
                }}
              >
                <Image
                  src="/pencil-icon.png"
                  alt="Pencil Studio emblem"
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <span className="tracking-wider uppercase text-[11px] sm:text-xs text-cyan-200 font-semibold group-hover:text-white transition-colors">
                  {t.badge}
                </span>
              </a>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl sm:max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Dual Marquee Rows - Strict LTR Track for Brand Logos, Geometry & Loop Parity */}
        <div className="relative" dir="ltr">
          {/* Row 1 - Scrolling Right */}
          <div className="flex overflow-hidden mb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-right whitespace-nowrap"
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...rowOne, ...rowOne, ...rowOne].map((item, index) => (
                <TechCard key={`first-${index}`} item={item} rowId="first" />
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-left whitespace-nowrap"
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...rowTwo, ...rowTwo, ...rowTwo].map((item, index) => (
                <TechCard key={`second-${index}`} item={item} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
