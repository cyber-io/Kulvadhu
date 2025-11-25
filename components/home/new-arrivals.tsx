import { ProductCard } from "@/components/product-card"

const newProducts = [
  {
    id: "1",
    name: "Royal Blue Zari Banarasi Silk Saree",
    price: 12999,
    originalPrice: 15999,
    image: "/royal-blue-banarasi-silk-saree-gold-zari-border-mo.jpg",
    badge: "New",
  },
  {
    id: "2",
    name: "Emerald Green Kanjeevaram Silk",
    price: 18999,
    image: "/emerald-green-kanjeevaram-silk-saree-traditional-b.jpg",
    badge: "New",
  },
  {
    id: "3",
    name: "Blush Pink Designer Saree",
    price: 8999,
    originalPrice: 10999,
    image: "/blush-pink-designer-saree-modern-contemporary-eleg.jpg",
    badge: "New",
  },
  {
    id: "4",
    name: "Classic Maroon Banarasi",
    price: 14999,
    image: "/maroon-red-banarasi-silk-saree-heavy-zari-work.jpg",
    badge: "New",
  },
]

export function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">New Arrivals</h2>
            <p className="text-lg text-muted-foreground">Fresh from our latest collection</p>
          </div>
          <a
            href="/new-arrivals"
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All
            <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="/new-arrivals" className="inline-flex items-center gap-2 text-primary font-medium">
            View All New Arrivals
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
