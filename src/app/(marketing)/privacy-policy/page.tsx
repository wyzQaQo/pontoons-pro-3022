export const dynamicParams = false;
import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-white/55 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <h2 className="text-lg font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>When you submit an inquiry through our contact form, we collect your name, email address, company name, phone number, and project details. This information is used solely to respond to your inquiry and provide relevant product information.</p>
          <h2 className="text-lg font-semibold text-white mt-8">2. How We Use Your Information</h2>
          <p>We use the information you provide to respond to inquiries, prepare quotations, send relevant product documentation, and improve our services. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          <h2 className="text-lg font-semibold text-white mt-8">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="text-lg font-semibold text-white mt-8">4. Contact</h2>
          <p>For questions about this privacy policy, please contact us at {siteConfig.contact.email}.</p>
        </div>
      </div>
    </div>
  )
}
