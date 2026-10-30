import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { getServerLocale } from "@/lib/i18n/server"
import { getDictionarySync } from "@/lib/i18n/get-dictionary"
import { BRAND_CONFIG } from "@/lib/brand"
import { ArrowRight, ArrowLeft, Home, Sparkles } from "lucide-react"

export default async function NotFound() {
  const locale = await getServerLocale()
  const dict = getDictionarySync(locale)
  const isAr = locale === "ar"
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={isAr ? "ar-EG" : "en-US"}
      className={`min-h-[100dvh] text-white ${isAr ? "font-arabic" : ""}`}
    >
      <SiteHeader />
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl text-center">
        <div className="relative rounded-3xl liquid-glass-enhanced p-10 sm:p-16 border border-white/15">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md mb-6">
            <Image
              src={BRAND_CONFIG.assets.favicon}
              alt={`${BRAND_CONFIG.name} icon`}
              width={18}
              height={18}
              className="h-3.5 w-3.5 object-contain"
            />
            <span>404 ERROR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            {isAr
              ? "عذراً، الصفحة أو الخدمة التي تبحث عنها غير متوفرة أو قد تم نقلها."
              : "The page or service you are looking for does not exist or has been relocated."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-[#49CBDC] px-6 py-2.5 text-xs sm:text-sm font-semibold text-black shadow-[0_0_20px_rgba(73,203,220,0.35)] hover:bg-[#67D6E4] transition-all"
            >
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                <span>{dict.nav.home}</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-purple-400/50 transition-all"
            >
              <Link href="/services" className="gap-2">
                <span>{dict.nav.services}</span>
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <AppverseFooter />
    </main>
  )
}
