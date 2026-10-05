import { cn } from "@/lib/utils"
import { forwardRef, type ButtonHTMLAttributes } from "react"

const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
  accent: "btn-accent",
  ghost: "text-white/60 hover:text-white hover:bg-white/5 rounded-full px-4 py-2 transition-colors",
} as const

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
