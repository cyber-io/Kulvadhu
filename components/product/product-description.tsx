import { Separator } from "@/components/ui/separator"

interface ProductDescriptionProps {
  product: {
    name: string
    fabric: string
  }
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-serif font-bold mb-6">Product Description</h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Elevate your ethnic wardrobe with this exquisite {product.name}. Handcrafted by master weavers in Varanasi,
          this saree represents centuries of traditional artistry combined with contemporary elegance.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-4">
          The rich {product.fabric.toLowerCase()} fabric features intricate zari work that catches light beautifully,
          creating a mesmerizing effect. The traditional motifs along the border and pallu showcase the timeless
          craftsmanship that Banarasi sarees are renowned for worldwide.
        </p>

        <Separator className="my-6" />

        <h3 className="text-xl font-semibold mb-4">Craftsmanship & Heritage</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Each thread tells a story of skilled artisans who have perfected their craft over generations. The weaving
          process can take anywhere from 15 days to several months, depending on the complexity of the design. This
          dedication to quality ensures that you receive a truly authentic piece.
        </p>

        <h3 className="text-xl font-semibold mb-4">Styling Suggestions</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Perfect for weddings, festivals, and grand celebrations</li>
          <li>Pair with traditional gold jewelry for a classic look</li>
          <li>Style with a contrasting blouse for a contemporary twist</li>
          <li>Complete with elegant jhumkas and a statement necklace</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Complete the Look</h3>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          {[
            { name: "Designer Blouse", price: 1999, image: "/placeholder.svg?height=200&width=150" },
            { name: "Silk Petticoat", price: 799, image: "/placeholder.svg?height=200&width=150" },
            { name: "Gold Necklace Set", price: 4999, image: "/placeholder.svg?height=200&width=150" },
            { name: "Embroidered Clutch", price: 1299, image: "/placeholder.svg?height=200&width=150" },
          ].map((item) => (
            <div key={item.name} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full aspect-[3/4] object-cover rounded mb-2"
              />
              <h4 className="font-medium text-sm mb-1">{item.name}</h4>
              <p className="text-sm font-semibold">₹{item.price.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
