import { siteConfig } from "@/config/site"

/* ── Organization Schema (site-wide) ── */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 888, Binhai Industrial Zone",
      addressLocality: "Taizhou",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    foundingDate: "2008",
    numberOfEmployees: siteConfig.company.employees,
    knowsAbout: [
      "HDPE floating dock systems",
      "Modular pontoon manufacturing",
      "Floating solar platforms",
      "Marine infrastructure",
      "Jet ski drive-on docks",
      "Yacht marina pontoons",
    ],
    areaServed: {
      "@type": "Continent",
      name: "Worldwide",
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

/* ── Product Schema (per product page) ── */
export function ProductSchema({
  name,
  description,
  image,
  category,
}: {
  name: string
  description: string
  image: string
  category: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    category,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        eligibleQuantity: { "@type": "QuantitativeValue", minValue: 1, unitCode: "C62" },
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

/* ── FAQPage Schema (every page with FAQ) ── */
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

/* ── BreadcrumbList Schema (per page) ── */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

/* ── WebSite Schema with Sitelinks SearchBox ── */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

/* ── LocalBusiness Schema ── */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/og.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 888, Binhai Industrial Zone",
      addressLocality: "Taizhou",
      addressRegion: "Zhejiang",
      postalCode: "318000",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6558,
      longitude: 121.4165,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
