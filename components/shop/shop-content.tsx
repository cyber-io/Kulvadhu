"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop/shop-filters"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock product data - in real app, this would come from API
const allProducts = Array.from({ length: 24 }, (_, i) => ({
  id: `prod-${i + 1}`,
  name: `Premium Silk Saree ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 5000,
  originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 25000) + 10000 : undefined,
  image: "/placeholder.svg?height=600&width=450",
  badge: Math.random() > 0.7 ? "New" : undefined,
  rating: 4.5 + Math.random() * 0.5,
  reviews: Math.floor(Math.random() * 200) + 20,
}))

interface ShopContentProps {
  category: string
}

export function ShopContent({ category }: ShopContentProps) {
  const [sortBy, setSortBy] = useState("featured")
  const [products] = useState(allProducts)

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-medium text-foreground">{products.length}</span> products
        </p>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden bg-transparent">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-9">Filters</h3>
              <ShopFilters />
            </SheetContent>
          </Sheet>

          {/* Sort By */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-66 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold mb-6">Filters</h3>
            <ShopFilters />
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                title={product.name}
                price={product.price}
                category={category}
                image={product.image}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
