import { Award, RefreshCw, Headset } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Authentic Quality",
    description:
      "Every saree is sourced directly from master weavers and verified for authenticity. We guarantee premium quality with traditional craftsmanship.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "15-day hassle-free returns and exchanges. Your satisfaction is our priority. Free return shipping on all orders.",
  },
  {
    icon: Headset,
    title: "Expert Styling Support",
    description:
      "Our style experts are here to help you choose the perfect saree and accessories. Book a free consultation anytime.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 border-t">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose Silk Symphony</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for authentic, premium sarees with an exceptional shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
