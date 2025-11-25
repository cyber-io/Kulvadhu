"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Smartphone, Building } from "lucide-react"

interface CheckoutPaymentProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

const paymentMethods = [
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Pay securely with your card",
    icon: CreditCard,
  },
  {
    id: "upi",
    name: "UPI",
    description: "GPay, PhonePe, Paytm & more",
    icon: Smartphone,
  },
  {
    id: "netbanking",
    name: "Net Banking",
    description: "All major banks supported",
    icon: Building,
  },
]

export function CheckoutPayment({ formData, updateFormData, onBack }: CheckoutPaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      alert("Order placed successfully! Thank you for your purchase.")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border">
      <h2 className="text-2xl font-serif font-bold mb-6">Payment Method</h2>

      <RadioGroup
        value={formData.paymentMethod}
        onValueChange={(value) => updateFormData({ paymentMethod: value })}
        className="space-y-4 mb-8"
      >
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center space-x-3">
            <RadioGroupItem value={method.id} id={method.id} />
            <Label
              htmlFor={method.id}
              className="flex items-center gap-4 flex-1 cursor-pointer p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <method.icon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">{method.name}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>

      {formData.paymentMethod === "card" && (
        <div className="space-y-4 mb-8 p-4 border rounded-lg">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" type="password" maxLength={3} required />
            </div>
          </div>
          <div>
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input id="cardName" placeholder="Name on card" required />
          </div>
        </div>
      )}

      {formData.paymentMethod === "upi" && (
        <div className="space-y-4 mb-8 p-4 border rounded-lg">
          <div>
            <Label htmlFor="upiId">UPI ID</Label>
            <Input id="upiId" placeholder="yourname@upi" required />
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1 bg-transparent">
          Back
        </Button>
        <Button type="submit" size="lg" className="flex-1" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Place Order"}
        </Button>
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Your payment information is secure and encrypted</p>
      </div>
    </form>
  )
}
