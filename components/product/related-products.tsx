import { ProductCard } from "@/components/product-card"

const relatedProducts = [
  {
    id: "9",
    name: "Navy Blue Banarasi Silk",
    price: 13999,
    image: "/placeholder.svg?height=600&width=450",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "10",
    name: "Maroon Wedding Saree",
    price: 16999,
    originalPrice: 19999,
    image: "/placeholder.svg?height=600&width=450",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "11",
    name: "Golden Silk Kanjeevaram",
    price: 18999,
    image: "/placeholder.svg?height=600&width=450",
    rating: 4.8,
    reviews: 92,
  },
  {
    id: "12",
    name: "Teal Green Designer Saree",
    price: 9999,
    image: "/placeholder.svg?height=600&width=450",
    rating: 4.6,
    reviews: 67,
  },
]

interface RelatedProductsProps {
  currentProductId: string
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
