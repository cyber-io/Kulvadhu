import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image - Using a placeholder that represents luxury/fabric */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elegant-saree-draping-model-silk-luxury-fashion-da.jpg"
          alt="Elegant Saree Model"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container px-4 text-center text-white">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/90">Handwoven Excellence</h2>
        <h1 className="mb-6 font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white drop-shadow-sm">
          The Art of the Drape
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl font-light text-white/90">
          Discover our curated collection of authentic Banarasi and Kanjeevaram silks, crafted for the modern muse.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop/new-arrivals"
            className="min-w-[180px] bg-white text-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Shop New Arrivals
          </Link>
          <Link
            href="/shop/wedding"
            className="min-w-[180px] border border-white text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-foreground transition-colors duration-300"
          >
            Wedding Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
