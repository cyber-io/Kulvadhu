"use client"

import { useState } from "react"
import { Star, Heart, Share2, Truck, RotateCcw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProductInfoProps {
  product: {
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviewCount: number
    fabric: string
    blousepiece: string
    care: string
    colors: string[]
    occasions: string[]
    inStock: boolean
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [blouseOption, setBlouseOption] = useState("included")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="space-y-6">
      {/* Title & Rating */}
      <div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-balance">{product.name}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-secondary">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
          <Badge variant={product.inStock ? "default" : "secondary"} className="bg-accent text-accent-foreground">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <Badge variant="destructive" className="text-sm">
              {discount}% OFF
            </Badge>
          </>
        )}
      </div>

      <Separator />

      {/* Product Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Fabric:</span>
          <span className="font-medium">{product.fabric}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Blouse Piece:</span>
          <span className="font-medium">{product.blousepiece}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Care:</span>
          <span className="font-medium">{product.care}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Occasions:</span>
          <span className="font-medium">{product.occasions.join(", ")}</span>
        </div>
      </div>

      <Separator />

      {/* Color Selection */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Available Colors</Label>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-3">
          {product.colors.map((color) => (
            <div key={color} className="flex items-center">
              <RadioGroupItem value={color} id={color} className="peer sr-only" />
              <Label
                htmlFor={color}
                className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
              >
                {color}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Blouse Selection */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Blouse Options</Label>
        <RadioGroup value={blouseOption} onValueChange={setBlouseOption} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="included" id="included" />
            <Label htmlFor="included" className="font-normal cursor-pointer">
              With unstitched blouse piece (Included)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ready-made" id="ready-made" />
            <Label htmlFor="ready-made" className="font-normal cursor-pointer">
              Add ready-made stitched blouse (+₹1,999)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none" className="font-normal cursor-pointer">
              Saree only (No blouse)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button size="lg" className="flex-1 text-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90">
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="default"
          className="flex-1 text-lg h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          Buy Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-12 px-4 bg-transparent"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-4 bg-transparent">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex flex-col items-center text-center">
          <Truck className="h-6 w-6 text-primary mb-2" />
          <span className="text-xs font-medium">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <RotateCcw className="h-6 w-6 text-primary mb-2" />
          <span className="text-xs font-medium">15-Day Returns</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Shield className="h-6 w-6 text-primary mb-2" />
          <span className="text-xs font-medium">Authentic</span>
        </div>
      </div>

      {/* Accordions */}
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="size-guide">
          <AccordionTrigger className="text-sm font-semibold">Size Guide</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm leading-relaxed">
              <p className="font-medium">Standard Saree Dimensions:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Length: 5.5 meters (for draping)</li>
                <li>Blouse Piece: 0.8 meters (unstitched)</li>
                <li>Width: 44-47 inches</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                One size fits all body types. The draping style determines the final fit and look.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="draping-tips">
          <AccordionTrigger className="text-sm font-semibold">Draping Tips</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>For Banarasi silk sarees, we recommend:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Start with a well-fitted petticoat at your comfort level</li>
                <li>Use safety pins to secure pleats for a neat look</li>
                <li>The heavy pallu drapes beautifully over the shoulder</li>
                <li>Make 7-8 pleats for a traditional look</li>
              </ul>
              <Button variant="link" className="p-0 h-auto text-primary mt-2">
                Watch Video Tutorial →
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
