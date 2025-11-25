import { ProductCard } from "@/components/product-card"

const bestSellers = [
  {
    id: "5",
    name: "Crimson Red Wedding Saree",
    price: 24999,
    image: "/crimson-red-bridal-wedding-saree-heavy-embroidery-.jpg",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: "6",
    name: "Golden Yellow Kanjeevaram",
    price: 16999,
    image: "/golden-yellow-kanjeevaram-silk-saree-temple-border.jpg",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: "7",
    name: "Navy Blue Designer Georgette",
    price: 6999,
    image: "/placeholder.svg?height=600&width=450",
    badge: "Bestseller",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "8",
    name: "Sage Green Chanderi Silk",
    price: 9999,
    image: "/placeholder.svg?height=600&width=450",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 87,
  },
]

export function BestSellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Best Sellers</h2>
            <p className="text-lg text-muted-foreground">Customer favorites, loved by thousands</p>
          </div>
          <a
            href="/best-sellers"
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All
            <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
