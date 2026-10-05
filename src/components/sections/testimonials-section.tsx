"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "PontoonPro delivered our 200-berth marina expansion in Dubai ahead of schedule. The UV15 stabilization is no marketing claim - after 3 years of Gulf sun exposure, the pontoons look brand new. Their engineering team provided complete wave load calculations that satisfied our marine consultants.",
    name: "Ahmed Al-Rashid",
    role: "Marina Director",
    company: "Jumeirah Marina Group",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "We sourced 40,000 pontoon units for a 50MW floating solar installation in Thailand. The team's understanding of utility-scale PV requirements, including cable management and maintenance access, was world-class. Factory inspection exceeded our expectations - spotless production lines, full traceability.",
    name: "Somsak Charoen",
    role: "VP of Engineering",
    company: "Siam Solar Energy Co.",
    location: "Bangkok, Thailand",
    rating: 5,
  },
  {
    quote: "As a resort developer in the Maldives, I needed a supplier who understood luxury aesthetics and marine engineering equally. PontoonPro customized the color finish to match our teak decking and delivered the complete floating villa platform within 45 days CIF Male. Their installation supervisor flew out and trained our local crew in 3 days.",
    name: "Marco Castellani",
    role: "Development Director",
    company: "Azure Island Resorts",
    location: "Maldives / Milan, Italy",
    rating: 5,
  },
  {
    quote: "We have been importing HDPE pontoons from Taizhou for 8 years through various suppliers. PontoonPro is the first factory where the actual load test results matched the datasheet specifications within 2%. Their QC documentation package alone saved us 3 weeks of third-party verification.",
    name: "James Whitfield",
    role: "Procurement Manager",
    company: "Pacific Marine Contractors",
    location: "Auckland, New Zealand",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  }

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 ocean-radial pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          heading="Trusted by Marine Professionals Worldwide"
          description="Hear from the engineers, developers, and operators who build with PontoonPro every day."
        />

        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base md:text-lg text-white/65 leading-relaxed italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-white/40">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                    <p className="text-xs text-white/25">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-primary w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
