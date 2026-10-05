export const dynamicParams = false;
import { BuoyancyCalculator } from "@/components/interactive/buoyancy-calculator"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Buoyancy & Area Calculator",
  description: "Calculate required HDPE pontoons, connectors, load capacity, and estimated shipping volume for any floating platform dimensions. Generate a complete RFQ in one click.",
}

export default function CalculatorPage() {
  return (
    <div className="pt-24">
      <BuoyancyCalculator />
    </div>
  )
}
