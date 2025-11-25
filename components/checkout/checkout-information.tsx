"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface CheckoutInformationProps {
  formData: any
  updateFormData: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export function CheckoutInformation({ formData, updateFormData, onNext }: CheckoutInformationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border">
      <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="guest" />
          <Label htmlFor="guest" className="font-normal cursor-pointer">
            Continue as guest (no account needed)
          </Label>
        </div>

        <h3 className="text-xl font-serif font-bold pt-4">Shipping Address</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="House number, street name"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            required
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => updateFormData({ city: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => updateFormData({ state: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="pincode">PIN Code</Label>
            <Input
              id="pincode"
              placeholder="400001"
              value={formData.pincode}
              onChange={(e) => updateFormData({ pincode: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="save-address" />
          <Label htmlFor="save-address" className="font-normal cursor-pointer">
            Save this address for future orders
          </Label>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Continue to Shipping
        </Button>
      </div>
    </form>
  )
}
