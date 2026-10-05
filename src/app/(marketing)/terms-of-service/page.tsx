export const dynamicParams = false;
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-white/55 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <h2 className="text-lg font-semibold text-white mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you agree to be bound by these Terms of Service.</p>
          <h2 className="text-lg font-semibold text-white mt-8">2. Intellectual Property</h2>
          <p>All content on this website, including text, images, graphics, and product specifications, is the property of {siteConfig.name} and protected by applicable intellectual property laws.</p>
          <h2 className="text-lg font-semibold text-white mt-8">3. Product Information</h2>
          <p>Product specifications and technical data provided on this website are for informational purposes. Final specifications are confirmed in the official quotation and purchase agreement.</p>
          <h2 className="text-lg font-semibold text-white mt-8">4. Limitation of Liability</h2>
          <p>{siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our products.</p>
          <h2 className="text-lg font-semibold text-white mt-8">5. Contact</h2>
          <p>For questions about these terms, contact {siteConfig.contact.email}.</p>
        </div>
      </div>
    </div>
  )
}
