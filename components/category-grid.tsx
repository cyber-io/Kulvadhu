import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Banarasi Silk",
    image: "/banarasi-silk-saree-texture-red-gold.jpg",
    href: "/shop/banarasi",
  },
  {
    title: "Kanjeevaram",
    image: "/kanjeevaram-saree-silk-gold-border.jpg",
    href: "/shop/kanjeevaram",
  },
  {
    title: "Chanderi",
    image: "/chanderi-saree-pastel-fabric.jpg",
    href: "/shop/chanderi",
  },
  {
    title: "Bridal Edit",
    image: "/indian-bride-red-saree-jewelry.jpg",
    href: "/shop/wedding",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Curated Collections</h2>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">
            Explore our finest weaves, sorted by region and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-70" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                <h3 className="text-2xl font-serif text-white italic">{category.title}</h3>
                <span className="mt-2 inline-block text-xs uppercase tracking-widest text-white/80 border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
