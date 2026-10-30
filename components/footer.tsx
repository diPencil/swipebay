import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-400 md:flex-row">
        <div className="flex items-center flex-wrap gap-1.5 justify-center md:justify-start">
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
          <span>- A Digital & Technology Company by</span>
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
          <span> | All rights reserved by Pencil Studio.</span>
        </div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-[#49CBDC]">
            Privacy
          </a>
          <a href="#terms" className="hover:text-[#49CBDC]">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
