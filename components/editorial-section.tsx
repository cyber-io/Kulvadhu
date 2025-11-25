import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export function EditorialSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image src="/indian-woman-draping-saree-mirror.jpg" alt="Styling a Saree" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 hover:bg-white/30 transition-colors group">
                  <Play className="h-8 w-8 text-white ml-1 fill-white" />
                </button>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary -z-10 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm uppercase tracking-widest font-semibold mb-4 block">
              Kulvadhu
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight">
              Master the Art of <br />
              <span className="italic">Timeless Elegance</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p>
                A saree is not just a garment; it is a canvas of expression. Whether you prefer the classic Nivi drape
                or a contemporary structured look, our style guide helps you find your signature silhouette.
              </p>
              <p>
                Explore our curated tutorials on draping, accessorizing, and caring for your heirloom silks to ensure
                they last for generations.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/style-guide"
                className="inline-block border-b border-foreground text-foreground pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
              >
                Read the Style Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
