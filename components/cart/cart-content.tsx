"use client"

import { useState } from "react"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const initialCartItems = [
  {
    id: "1",
    name: "Royal Blue Zari Banarasi Silk Saree",
    price: 12999,
    quantity: 1,
    image: "/placeholder.svg?height=300&width=225",
    color: "Royal Blue",
    blouse: "With unstitched blouse piece",
  },
  {
    id: "2",
    name: "Emerald Green Kanjeevaram Silk",
    price: 18999,
    quantity: 1,
    image: "/placeholder.svg?height=300&width=225",
    color: "Emerald Green",
    blouse: "Saree only",
  },
]

export function CartContent() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 2999 ? 0 : 99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mb-6" />
        <h2 className="text-2xl font-serif font-bold mb-3">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some beautiful sarees to your cart to get started</p>
        <Button asChild size="lg">
          <Link href="/shop/banarasi">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-card p-6 rounded-lg border">
            <div className="flex gap-6">
              <Link href={`/product/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
              </Link>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <Link href={`/product/${item.id}`}>
                    <h3 className="font-semibold hover:text-primary transition-colors">{item.name}</h3>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-1 mb-4">
                  <p>Color: {item.color}</p>
                  <p>{item.blouse}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-muted-foreground">₹{item.price.toLocaleString("en-IN")} each</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-card p-6 rounded-lg border sticky top-24">
          <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
              <span className="font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? <span className="text-accent">FREE</span> : `₹${shipping}`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-muted-foreground">
                Add ₹{(3000 - subtotal).toLocaleString("en-IN")} more for free shipping
              </p>
            )}
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between mb-6">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-primary">₹{total.toLocaleString("en-IN")}</span>
          </div>

          <Button asChild size="lg" className="w-full mb-4">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>

          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/shop/banarasi" className="text-sm text-primary hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
