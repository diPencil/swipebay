import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        outline: "",
        secondary: "",
        purple: "",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
        raw: "",
      },
      size: {
        default: "h-8 sm:h-10 px-3.5 sm:px-7 py-1.5 sm:py-2.5 text-xs sm:text-sm has-[>svg]:px-3 sm:has-[>svg]:px-6",
        sm: "h-7 sm:h-8 px-2.5 sm:px-5 py-1 text-[11px] sm:text-xs has-[>svg]:px-2 sm:has-[>svg]:px-4",
        lg: "h-9 sm:h-12 px-4.5 sm:px-9 py-2 sm:py-3 text-xs sm:text-base has-[>svg]:px-3.5 sm:has-[>svg]:px-7",
        icon: "size-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const isIcon = size === "icon"
  const isLink = variant === "link"
  const isRaw = variant === "raw"
  const isSlanted = !isIcon && !isLink && !isRaw

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        isSlanted && "slanted-btn",
        isSlanted && (variant === "default" || variant === "primary") && "slanted-btn-primary",
        isSlanted && (variant === "outline" || variant === "secondary") && "slanted-btn-outline",
        isSlanted && variant === "purple" && "slanted-btn-purple",
        isSlanted && variant === "ghost" && "slanted-btn-ghost",
        isIcon && variant === "outline" && "border border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800",
        isIcon && variant === "default" && "bg-[#49CBDC] text-black hover:bg-[#67D6E4]",
        isIcon && variant === "ghost" && "hover:bg-white/10 text-white",
        className
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
