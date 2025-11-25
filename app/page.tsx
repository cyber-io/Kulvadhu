import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { EditorialSection } from "@/components/editorial-section"
import { FeaturesGrid } from "@/components/features-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <EditorialSection />
        <FeaturesGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
