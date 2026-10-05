export const dynamicParams = false;
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getProductBySlug, getRelatedProducts, productCategories } from "@/config/products"
import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/structured-data"
import { ArrowLeft, Download, Check, ChevronRight, Anchor } from "lucide-react"
import { InternalLinkingSection } from "@/components/interactive/internal-linking"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const category = productCategories.find((c) => c.id === product.categoryId)
  return {
    title: product.name,
    description: product.shortDescription,
    keywords: product.seoKeywords,
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.images[0] || `${siteConfig.url}/og.jpg`],
    },
    other: {
      "product:category": category?.name || "",
    },
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.id)
  const category = productCategories.find((c) => c.id === product.categoryId)

  /* breadcrumb trail */
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/products" },
  ]
  if (category) breadcrumbs.push({ name: category.name, href: `/products/${category.slug}` })
  breadcrumbs.push({ name: product.name, href: `/products/${product.slug}` })

  return (
    <div className="pt-24 pb-24">
      {/* ── Structured Data ── */}
      <ProductSchema
        name={product.name}
        description={product.shortDescription}
        image={siteConfig.url + (product.images[0] || "/og.jpg")}
        category={category?.name || "Floating Dock Products"}
      />
      {product.faqs.length > 0 && <FAQSchema faqs={product.faqs} />}
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            <ArrowLeft size={15} /> Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-white/3 overflow-hidden">
              <img
                src={product.images[0] || `https://picsum.photos/seed/${product.slug}/800/600`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-white/3 overflow-hidden">
                    <img src={img} alt={`${product.name} view ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {category && (
              <Link href={`/products/${category.slug}`} className="inline-block mb-4">
                <Badge variant="primary">{category.name}</Badge>
              </Link>
            )}
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
            <p className="text-white/55 leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-3 mb-8">
              {product.features.slice(0, 6).map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-success mt-0.5 shrink-0" />
                  <span className="text-sm text-white/55">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary !px-8">
                Request Quote
              </Link>
              <Link href="/resources/calculator" className="btn-outline !px-8">
                Buoyancy Calculator
              </Link>
            </div>

            {product.downloads.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-3">Downloads</h3>
                <div className="flex flex-wrap gap-2">
                  {product.downloads.map((dl) => (
                    <a
                      key={dl.name}
                      href={dl.url}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:bg-white/8 transition-colors"
                    >
                      <Download size={14} />
                      {dl.name} ({dl.type})
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>
            <div className="glass-card divide-y divide-white/5">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-white/40">{spec.label}</span>
                  <span className="text-sm font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">Applications</h2>
            <div className="glass-card p-6">
              <div className="grid grid-cols-1 gap-3">
                {product.applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 p-3 rounded-xl bg-white/3">
                    <Anchor size={16} className="text-primary shrink-0" />
                    <span className="text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {product.faqs.length > 0 && (
          <div className="mb-20">
            <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="glass-card divide-y divide-white/5">
              {product.faqs.map((faq) => (
                <details key={faq.question} className="group p-6 cursor-pointer">
                  <summary className="font-medium text-sm flex items-center justify-between list-none">
                    {faq.question}
                    <ChevronRight size={16} className="transition-transform group-open:rotate-90 text-white/30" />
                  </summary>
                  <p className="mt-4 text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <InternalLinkingSection excludeSlug={`/products/${product.slug}`} />

        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`} className="glass-card p-5 group hover:border-primary/20 transition-colors">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                  <p className="text-xs text-white/40 line-clamp-2">{rp.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
