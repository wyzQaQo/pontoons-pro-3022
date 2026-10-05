import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

const SECRET = process.env.GEOFLOW_API_SECRET || "change-me-to-a-random-string"

interface GeoFlowPayload {
  title: string
  slug: string
  markdown: string
  meta_description: string
  keywords: string[]
  author?: string
  published_at?: string
  featured_image?: string
  category?: string
}

function verifySig(body: string, header: string | null): boolean {
  if (!header) return false
  const hmac = crypto.createHmac("sha256", SECRET).update(body).digest("hex")
  return header === `sha256=${hmac}`
}

function buildMdxFrontmatter(data: GeoFlowPayload): string {
  const lines: string[] = ["---"]
  lines.push(`title: "${data.title.replace(/"/g, '\\"')}"`)
  lines.push(`slug: "${data.slug}"`)
  lines.push(`description: "${data.meta_description.replace(/"/g, '\\"')}"`)
  if (data.published_at) lines.push(`publishedAt: "${data.published_at}"`)
  if (data.author) lines.push(`author: "${data.author}"`)
  if (data.featured_image) lines.push(`featuredImage: "${data.featured_image}"`)
  if (data.category) lines.push(`category: "${data.category}"`)
  if (data.keywords.length > 0) {
    lines.push(`keywords: [${data.keywords.map((k) => `"${k.replace(/"/g, '\\"')}"`).join(", ")}]`)
  }
  lines.push("---")
  lines.push("")
  lines.push(data.markdown)
  return lines.join("\n")
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("x-hub-signature")

  if (!verifySig(body, sig)) {
    console.warn("[GEOFlow] Unauthorized request received")
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  let data: GeoFlowPayload
  try {
    data = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: "invalid JSON body" }, { status: 400 })
  }

  if (!data.title || !data.slug || !data.markdown) {
    return NextResponse.json(
      { error: "missing required fields: title, slug, markdown" },
      { status: 422 }
    )
  }

  try {
    const dir = path.join(process.cwd(), "content", "articles")
    await mkdir(dir, { recursive: true })

    const filePath = path.join(dir, `${data.slug}.mdx`)
    const mdxContent = buildMdxFrontmatter(data)
    await writeFile(filePath, mdxContent, "utf-8")

    console.log(`[GEOFlow] Article saved: ${data.title} → content/articles/${data.slug}.mdx`)
  } catch (err) {
    console.error("[GEOFlow] Failed to write article:", err)
    return NextResponse.json({ error: "failed to save article" }, { status: 500 })
  }

  return NextResponse.json({
    status: "ok",
    slug: data.slug,
    url: `/blog/${data.slug}`,
    file: `content/articles/${data.slug}.mdx`,
  })
}
