"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface ProductImagesProps {
  images: string[]
  name: string
}

export function ProductImages({ images, name }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${name} - View ${selectedImage + 1}`}
          className="h-full w-full object-cover"
        />
        {selectedImage === images.length - 1 && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-[3/4] overflow-hidden rounded-md border-2 transition-all ${
              selectedImage === index
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : "border-transparent hover:border-muted-foreground/20"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${name} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {index === images.length - 1 && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="h-4 w-4 text-white" fill="white" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex gap-2 text-sm text-muted-foreground">
        <span>📸 Front View</span>
        <span>•</span>
        <span>📸 Back View</span>
        <span>•</span>
        <span>🔍 Close-up</span>
        <span>•</span>
        <span>🎥 Video</span>
      </div>
    </div>
  )
}
