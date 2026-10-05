export const dynamicParams = false;
"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { CoreSolutionsSection } from "@/components/sections/core-solutions-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { CertificationMarquee } from "@/components/sections/certification-marquee"
import { BuoyancyCalculator } from "@/components/interactive/buoyancy-calculator"
import { FeaturesSection } from "@/components/sections/features-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoreSolutionsSection />
      <CertificationMarquee />
      <BuoyancyCalculator />
      <FeaturesSection />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
