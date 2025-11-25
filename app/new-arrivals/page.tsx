import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShopContent } from "@/components/shop/shop-content"

export default function NewArrivalsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">New Arrivals</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Fresh from our latest collection - discover the newest additions to our curated saree collection
            </p>
          </div>
        </div>
        <ShopContent category="new-arrivals" />
      </main>
      <SiteFooter />
    </div>
  )
}
