"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { CheckoutInformation } from "./checkout-information"
import { CheckoutShipping } from "./checkout-shipping"
import { CheckoutPayment } from "./checkout-payment"

const steps = [
  { id: 1, name: "Information", component: CheckoutInformation },
  { id: 2, name: "Shipping", component: CheckoutShipping },
  { id: 3, name: "Payment", component: CheckoutPayment },
]

export function CheckoutFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    shippingMethod: "standard",
    paymentMethod: "card",
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const CurrentStepComponent = steps[currentStep - 1].component

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep > step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-muted-foreground/30 text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-4 ${currentStep > step.id ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Current Step Content */}
        <CurrentStepComponent
          formData={formData}
          updateFormData={updateFormData}
          onNext={() => setCurrentStep((prev) => prev + 1)}
          onBack={() => setCurrentStep((prev) => prev - 1)}
        />
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-card p-6 rounded-lg border sticky top-24">
          <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {/* Sample cart items */}
            <div className="flex gap-4">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=80&width=60"
                  alt="Product"
                  className="w-16 h-20 object-cover rounded"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-2 mb-1">Royal Blue Zari Banarasi Silk Saree</h4>
                <p className="text-sm font-semibold">₹12,999</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=80&width=60"
                  alt="Product"
                  className="w-16 h-20 object-cover rounded"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-2 mb-1">Emerald Green Kanjeevaram Silk</h4>
                <p className="text-sm font-semibold">₹18,999</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 py-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">₹31,998</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium text-accent">FREE</span>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-primary">₹31,998</span>
          </div>
        </div>
      </div>
    </div>
  )
}
