
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Star, Truck, ShieldCheck, Ruler, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 pt-12 pb-24">
        <div className="container px-4 mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-sm text-muted-foreground mb-8">
            <ol className="flex items-center gap-2">
              <li>Home</li>
              <li>/</li>
              <li>Style Guide</li>
            </ol>
          </nav>

          {/* ----------------------------- */}
          {/* TYPOGRAPHY */}
          {/* ----------------------------- */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6">Typography</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">Label / Tagline</p>
              </div>

              <h1 className="text-4xl font-serif">H1 – Royal Maroon Gold Zari Saree</h1>
              <h2 className="text-3xl font-serif">H2 – Kanjeevaram Collection</h2>
              <h3 className="text-2xl font-serif">H3 – Handwoven Silk</h3>

              <p className="text-base text-muted-foreground">
                Body Text – For descriptions, product information, and paragraphs across the website.
              </p>

              <p className="text-sm text-muted-foreground">
                Small Text – For subtle UI details and secondary information.
              </p>
            </div>
          </section>

          {/* ----------------------------- */}
          {/* COLORS */}
          {/* ----------------------------- */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6">Colors</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { label: "Primary", class: "bg-primary" },
                { label: "Foreground", class: "bg-foreground" },
                { label: "Muted", class: "bg-muted" },
                { label: "Border", class: "bg-border" },
              ].map((c) => (
                <div key={c.label} className="space-y-3">
                  <div className={`w-full h-20 rounded ${c.class}`} />
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------- */}
          {/* BUTTONS */}
          {/* ----------------------------- */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6">Buttons</h2>

            <div className="flex flex-wrap gap-4">
              <Button className="uppercase tracking-widest">Primary Button</Button>
              <Button variant="outline" className="uppercase tracking-widest">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </section>

    
          {/* ----------------------------- */}
          {/* IMAGERY */}
          {/* ----------------------------- */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif mb-6">Imagery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {["/maroon-kanjeevaram-saree-high-quality.jpg", "/blue-saree.jpg", "/green-saree.jpg"].map((img, i) => (
                <div key={i} className="aspect-[3/4] relative overflow-hidden rounded bg-muted">
                  <Image src={img} alt="Saree sample" fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
