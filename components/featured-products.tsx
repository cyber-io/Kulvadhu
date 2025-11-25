import { ProductCard } from "./product-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "1",
    title: "Royal Maroon Kanjeevaram",
    price: 24999,
    category: "Kanjeevaram",
    image: "/maroon-kanjeevaram-saree-silk-model.jpg",
  },
  {
    id: "2",
    title: "Midnight Blue Banarasi",
    price: 18500,
    category: "Banarasi",
    image: "/blue-banarasi-saree-silk-model.jpg",
  },
  {
    id: "3",
    title: "Golden Ivory Tissue",
    price: 32000,
    category: "Tissue Silk",
    image: "/gold-tissue-silk-saree-model.jpg",
  },
  {
    id: "4",
    title: "Sage Green Organza",
    price: 12400,
    category: "Organza",
    image: "/green-organza-saree-model-floral.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container px-4 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-serif text-foreground mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh from the looms of Varanasi and Kanchipuram.</p>
          </div>
          <Link
            href="/shop/new-arrivals"
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/shop/new-arrivals"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
