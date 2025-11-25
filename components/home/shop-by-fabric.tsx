import Link from "next/link"
import { ArrowRight } from "lucide-react"

const fabrics = [
  {
    name: "Banarasi Silk",
    image: "/banarasi-silk-saree-red-gold-zari-work-close-up-te.jpg",
    href: "/shop/banarasi",
    description: "Rich traditions, intricate zari",
  },
  {
    name: "Kanjeevaram",
    image: "/kanjeevaram-silk-saree-royal-blue-temple-border-go.jpg",
    href: "/shop/kanjeevaram",
    description: "South Indian heritage",
  },
  {
    name: "Designer Sarees",
    image: "/modern-designer-saree-contemporary-print-pastel-co.jpg",
    href: "/shop/designer",
    description: "Contemporary elegance",
  },
  {
    name: "Chanderi & Maheshwari",
    image: "/chanderi-saree-lightweight-traditional-handloom-pa.jpg",
    href: "/shop/chanderi",
    description: "Lightweight luxury",
  },
  {
    name: "Georgette & Chiffon",
    image: "/chiffon-saree-flowy-printed-elegant-drape.jpg",
    href: "/shop/georgette",
    description: "Effortless drape",
  },
  {
    name: "Wedding Collection",
    image: "/bridal-wedding-saree-heavy-embroidery-red-gold-lux.jpg",
    href: "/shop/wedding",
    description: "For your special day",
  },
]

export function ShopByFabric() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop by Fabric</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of authentic sarees, each crafted with care by skilled artisans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fabrics.map((fabric) => (
            <Link
              key={fabric.href}
              href={fabric.href}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted"
            >
              <img
                src={fabric.image || "/placeholder.svg"}
                alt={fabric.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{fabric.name}</h3>
                <p className="text-white/90 mb-3">{fabric.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Explore Collection
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
