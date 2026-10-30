"use client"

import React from "react"
import { useLanguage } from "@/lib/i18n"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  className?: string
  variant?: "pill" | "minimal" | "text"
}

export function LanguageSwitcher({
  className = "",
  variant = "pill",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  const handleLanguageSwitch = (targetLocale: "en" | "ar") => {
    if (targetLocale === locale) return
    // Directly updates client context, sets cookie, updates DOM dir/lang, and triggers router.refresh()
    setLocale(targetLocale)
  }

  if (variant === "text") {
    return (
      <div className={`flex items-center gap-2 text-xs font-medium text-neutral-400 ${className}`}>
        <Globe className="h-3.5 w-3.5 text-neutral-400" />
        <button
          type="button"
          onClick={() => handleLanguageSwitch("en")}
          className={`transition-colors hover:text-white ${locale === "en" ? "text-purple-300 font-semibold" : ""}`}
        >
          English
        </button>
        <span className="text-neutral-600">|</span>
        <button
          type="button"
          onClick={() => handleLanguageSwitch("ar")}
          className={`transition-colors hover:text-white font-arabic ${locale === "ar" ? "text-purple-300 font-semibold" : ""}`}
        >
          العربية
        </button>
      </div>
    )
  }

  // Default "pill" design: sleek, liquid-glass badge matching header aesthetic
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-md transition-all hover:border-purple-400/40 ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => handleLanguageSwitch("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
          locale === "en"
            ? "bg-purple-600/80 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageSwitch("ar")}
        aria-pressed={locale === "ar"}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all font-arabic ${
          locale === "ar"
            ? "bg-purple-600/80 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        العربية
      </button>
    </div>
  )
}
