"use client"

import React, { createContext, useContext, useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, type Locale, isRTL, isValidLocale } from "./config"
import { getDictionarySync } from "./get-dictionary"
import type { Dictionary } from "./types"

interface LanguageContextType {
  locale: Locale
  dir: "ltr" | "rtl"
  isRTL: boolean
  dictionary: Dictionary
  setLocale: (newLocale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
}

export function LanguageProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [, startTransition] = useTransition()
  const router = useRouter()

  // Apply DOM attributes and set persistent cookie without changing URL
  const applyLocaleToDOM = (loc: Locale) => {
    const dir = isRTL(loc) ? "rtl" : "ltr"
    if (typeof document !== "undefined") {
      document.documentElement.lang = loc === "ar" ? "ar-EG" : "en-US"
      document.documentElement.dir = dir
      document.documentElement.classList.toggle("font-arabic", loc === "ar")
      if (document.body) {
        document.body.classList.toggle("font-arabic", loc === "ar")
      }
      document.cookie = `${LOCALE_COOKIE_NAME}=${loc}; path=/; max-age=31536000; SameSite=Lax`
    }
  }

  // Sync state if initialLocale changes from server
  useEffect(() => {
    if (initialLocale && initialLocale !== locale) {
      setLocaleState(initialLocale)
      applyLocaleToDOM(initialLocale)
    }
  }, [initialLocale])

  const setLocale = (newLocale: Locale) => {
    if (!isValidLocale(newLocale) || newLocale === locale) return
    startTransition(() => {
      setLocaleState(newLocale)
      applyLocaleToDOM(newLocale)
      // Refresh Server Components on the current language-neutral route
      router.refresh()
    })
  }

  const toggleLocale = () => {
    const next = locale === "en" ? "ar" : "en"
    setLocale(next)
  }

  const dir = isRTL(locale) ? "rtl" : "ltr"
  const dictionary = getDictionarySync(locale)

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir,
        isRTL: dir === "rtl",
        dictionary,
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    const fallbackLocale = DEFAULT_LOCALE
    return {
      locale: fallbackLocale,
      dir: "ltr",
      isRTL: false,
      dictionary: getDictionarySync(fallbackLocale),
      setLocale: () => {},
      toggleLocale: () => {},
    }
  }
  return context
}

export function useTranslation(): { t: Dictionary; locale: Locale; isRTL: boolean } {
  const { dictionary, locale, isRTL } = useLanguage()
  return { t: dictionary, locale, isRTL }
}
