import { ShieldCheck, Truck, Gem } from "lucide-react"

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6">
              <Gem className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-primary mb-3">Authentic Craftsmanship</h3>
            <p className="text-background/70 font-light px-8">
              Sourced directly from master weavers in Varanasi, Kanchipuram, and Chanderi. Silk Mark certified.
            </p>
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0">
            <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-primary mb-3">Global Shipping</h3>
            <p className="text-background/70 font-light px-8">
              We deliver our heritage weaves to saree lovers across the globe with secure, tracked shipping.
            </p>
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0">
            <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-primary mb-3">Quality Promise</h3>
            <p className="text-background/70 font-light px-8">
              Every saree passes a rigorous 5-point quality check before it reaches your wardrobe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
