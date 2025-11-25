import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Star, Truck, ShieldCheck, Ruler } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would typically fetch data based on params.id
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
              <li>Kanjeevaram</li>
              <li>/</li>
              <li className="text-foreground font-medium">Royal Maroon Gold Zari</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] relative overflow-hidden bg-muted w-full">
                <Image src="/maroon-kanjeevaram-saree-high-quality.jpg" alt="Royal Maroon Saree" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square relative cursor-pointer bg-muted hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={`/saree-detail-.jpg?height=300&width=300&query=saree detail ${i}`}
                      alt={`View ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Handwoven Kanjeevaram
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Royal Maroon Gold Zari Silk Saree
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-medium">₹24,999</div>
                <div className="text-muted-foreground line-through decoration-1">₹32,000</div>
                <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">20% OFF</div>
              </div>

              <div className="flex items-center gap-2 mb-8 text-sm">
                <div className="flex text-primary">
                  <Star className="w-4 h-4 fill-primary" />
                  <Star className="w-4 h-4 fill-primary" />
                  <Star className="w-4 h-4 fill-primary" />
                  <Star className="w-4 h-4 fill-primary" />
                  <Star className="w-4 h-4 fill-primary" />
                </div>
                <span className="text-muted-foreground">(24 reviews)</span>
              </div>

              <div className="prose prose-sm text-muted-foreground mb-8">
                <p>
                  A masterpiece of traditional weaving, this Royal Maroon Kanjeevaram saree features intricate gold zari
                  work on the border and pallu. Crafted from pure mulberry silk, it drapes effortlessly, making it
                  perfect for weddings and festive occasions.
                </p>
              </div>

              {/* Selectors */}
              <div className="space-y-6 mb-8 border-y border-border py-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Blouse Option</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="blouse" className="accent-primary" defaultChecked />
                      <span className="text-sm">Unstitched Piece (Included)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="blouse" className="accent-primary" />
                      <span className="text-sm">Custom Stitching (+₹1500)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-foreground text-background h-12 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors">
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-wider text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-foreground" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-foreground" />
                  <span>Silk Mark Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-foreground" />
                  <span>Free Fall & Pico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

import { Heart } from "lucide-react"
