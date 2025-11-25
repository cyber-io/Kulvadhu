'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  price: number
  category: string
  image: string
}

export function ProductCard({ id, title, price, category, image }: ProductCardProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Format price only on client side to avoid hydration mismatch
  const formattedPrice = isMounted ? `₹${price?.toLocaleString() ?? '0'}` : '₹0'

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-red-600">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
          <button className="text-xs uppercase tracking-widest font-semibold text-foreground hover:text-primary">
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{category}</p>
        <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          <Link href={`/product/${id}`}>{title}</Link>
        </h3>
        <p className="font-medium text-foreground">{formattedPrice}</p>
      </div>
    </div>
  )
}