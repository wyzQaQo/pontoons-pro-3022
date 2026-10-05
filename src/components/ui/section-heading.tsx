import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-[1.1]">
        {heading}
      </h2>
      {description && (
        <p className="mt-5 text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
