"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  Menu,
  HelpCircle,
  Info,
  CreditCard,
  Layers,
  Building2,
  Sparkles,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { BRAND_CONFIG } from "@/lib/brand"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const { isRTL, dictionary } = useLanguage()

  const links = [
    { href: "/services", label: dictionary.nav.services, icon: Sparkles },
    { href: "/solutions", label: dictionary.nav.solutions, icon: Layers },
    { href: "/gateway", label: dictionary.nav.gateway, icon: CreditCard },
    { href: "/enterprise", label: dictionary.nav.enterprise, icon: Building2 },
    { href: "/faq", label: dictionary.nav.faq, icon: HelpCircle },
    { href: "/about", label: dictionary.nav.about, icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo - Never flipped */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image
              src={BRAND_CONFIG.assets.logoGrid}
              alt={`${BRAND_CONFIG.name} logo`}
              width={140}
              height={35}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav - Direct Links (No dropdown) */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#49CBDC] transition-colors font-medium text-white/90"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Controls: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <Button
              asChild
              size="sm"
              className="text-xs font-semibold"
            >
              <Link href="/contact">
                {dictionary.nav.contactUs}
              </Link>
            </Button>
          </div>

          {/* Mobile Nav Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher className="scale-90" />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800 h-9 w-9"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={isRTL ? "left" : "right"}
                className="liquid-glass border-gray-800 p-0 w-72 flex flex-col"
              >
                <SheetTitle className="sr-only">
                  {isRTL ? "قائمة التصفح الرئيسية" : "Main Navigation"}
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {isRTL ? "روابط أقسام موقع سويب باي" : "SWIPEBAY navigation links"}
                </SheetDescription>

                {/* Brand Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                  <Image
                    src={BRAND_CONFIG.assets.logoGrid}
                    alt={`${BRAND_CONFIG.name} logo`}
                    width={130}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200 overflow-y-auto px-2 flex-1">
                  {links.map((l) => {
                    const IconComp = l.icon
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-900 hover:text-[#49CBDC] transition-colors"
                      >
                        <IconComp className="h-4 w-4 text-purple-300" />
                        <span className="text-sm font-medium">{l.label}</span>
                      </Link>
                    )
                  })}
                </nav>

                {/* Bottom Drawer Actions */}
                <div className="border-t border-gray-800 p-4 space-y-3 bg-gray-950/60">
                  <div className="flex justify-center">
                    <LanguageSwitcher variant="pill" />
                  </div>
                  <Button
                    asChild
                    className="w-full h-10 text-xs font-semibold"
                  >
                    <Link href="/contact">
                      {dictionary.nav.contactUs}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
