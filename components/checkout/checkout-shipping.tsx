"use client"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Truck, Zap } from "lucide-react"

interface CheckoutShippingProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

const shippingOptions = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Delivery in 5-7 business days",
    price: 0,
    icon: Truck,
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "Delivery in 2-3 business days",
    price: 299,
    icon: Zap,
  },
]

export function CheckoutShipping({ formData, updateFormData, onNext, onBack }: CheckoutShippingProps) {
  return (
    <div className="bg-card p-8 rounded-lg border">
      <h2 className="text-2xl font-serif font-bold mb-6">Shipping Method</h2>

      <div className="mb-6 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm font-medium mb-1">Shipping to:</p>
        <p className="text-sm text-muted-foreground">
          {formData.firstName} {formData.lastName}
          <br />
          {formData.address}
          <br />
          {formData.city}, {formData.state} - {formData.pincode}
        </p>
      </div>

      <RadioGroup
        value={formData.shippingMethod}
        onValueChange={(value) => updateFormData({ shippingMethod: value })}
        className="space-y-4 mb-8"
      >
        {shippingOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-3">
            <RadioGroupItem value={option.id} id={option.id} />
            <Label
              htmlFor={option.id}
              className="flex items-center justify-between flex-1 cursor-pointer p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <option.icon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">{option.name}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
              <p className="font-semibold">{option.price === 0 ? "FREE" : `₹${option.price}`}</p>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex gap-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1 bg-transparent">
          Back
        </Button>
        <Button type="button" size="lg" onClick={onNext} className="flex-1">
          Continue to Payment
        </Button>
      </div>
    </div>
  )
}
