import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function StyleSection() {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Style Symphony</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Master the art of draping with our expert style guides. From traditional pleating techniques to modern
              styling tips, discover how to create the perfect look for every occasion.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Step-by-Step Draping Tutorials</h4>
                  <p className="text-sm text-accent-foreground/80">Learn various draping styles with video guides</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Occasion-Based Styling</h4>
                  <p className="text-sm text-accent-foreground/80">
                    Perfect saree choices for weddings, parties, and festivals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Blouse & Jewelry Pairing</h4>
                  <p className="text-sm text-accent-foreground/80">Complete your look with perfect accessories</p>
                </div>
              </div>
            </div>
            <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Style Guide
            </Button>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Saree draping tutorial"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-semibold mb-1">How to Drape a Banarasi Saree</h3>
              <p className="text-sm text-white/90">5 minutes • Beginner Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
