import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Star, Truck, ShieldCheck, Ruler, Heart } from "lucide-react"

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
              <li>New Arrivals</li>
            </ol>
          </nav>


          {/* ---------------------- */}
          {/* ⭐ NEW ARRIVALS SECTION */}
          {/* ---------------------- */}
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              New Arrivals
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Emerald Green Zari Silk Saree",
                  img: "/green-saree.jpg",
                  price: "₹21,499",
                },
                {
                  title: "Royal Blue Kanjeevaram Saree",
                  img: "/blue-saree.jpg",
                  price: "₹26,999",
                },
                {
                  title: "Classic Wedding Red Saree",
                  img: "/red-saree.jpg",
                  price: "₹28,500",
                },
                {
                  title: "Pastel Peach Gold Weave Saree",
                  img: "/peach-saree.jpg",
                  price: "₹19,999",
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="group cursor-pointer border border-border overflow-hidden bg-background"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-medium">{product.title}</h3>
                    <p className="text-primary font-semibold">{product.price}</p>
                  </div>
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
