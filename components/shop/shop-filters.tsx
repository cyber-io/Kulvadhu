"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const filterOptions = {
  fabric: ["Silk", "Cotton", "Georgette", "Chiffon", "Linen", "Chanderi", "Art Silk"],
  color: ["Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Black", "White", "Gold", "Orange"],
  occasion: ["Wedding", "Party", "Festival", "Casual", "Office", "Formal"],
  pattern: ["Solid", "Printed", "Embroidered", "Zari Work", "Temple Border", "Floral", "Geometric"],
}

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    fabric: [],
    color: [],
    occasion: [],
    pattern: [],
  })

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || []
      const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [category]: updated }
    })
  }

  const clearAll = () => {
    setSelectedFilters({
      fabric: [],
      color: [],
      occasion: [],
      pattern: [],
    })
    setPriceRange([0, 50000])
  }

  const hasActiveFilters = Object.values(selectedFilters).some((arr) => arr.length > 0)

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearAll} className="w-full text-destructive hover:text-destructive">
          Clear All Filters
        </Button>
      )}

      <Accordion type="multiple" defaultValue={["price", "fabric", "color", "occasion", "pattern"]} className="w-full">
        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-semibold">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={50000} step={1000} className="w-full" />
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">₹{priceRange[0].toLocaleString("en-IN")}</span>
                <span className="text-muted-foreground">to</span>
                <span className="font-medium">₹{priceRange[1].toLocaleString("en-IN")}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Fabric */}
        <AccordionItem value="fabric">
          <AccordionTrigger className="text-sm font-semibold">Fabric</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.fabric.map((fabric) => (
                <div key={fabric} className="flex items-center space-x-2">
                  <Checkbox
                    id={`fabric-${fabric}`}
                    checked={selectedFilters.fabric?.includes(fabric)}
                    onCheckedChange={() => toggleFilter("fabric", fabric)}
                  />
                  <Label htmlFor={`fabric-${fabric}`} className="text-sm font-normal cursor-pointer">
                    {fabric}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color */}
        <AccordionItem value="color">
          <AccordionTrigger className="text-sm font-semibold">Color</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {filterOptions.color.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={selectedFilters.color?.includes(color)}
                    onCheckedChange={() => toggleFilter("color", color)}
                  />
                  <Label htmlFor={`color-${color}`} className="text-sm font-normal cursor-pointer">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Occasion */}
        <AccordionItem value="occasion">
          <AccordionTrigger className="text-sm font-semibold">Occasion</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.occasion.map((occasion) => (
                <div key={occasion} className="flex items-center space-x-2">
                  <Checkbox
                    id={`occasion-${occasion}`}
                    checked={selectedFilters.occasion?.includes(occasion)}
                    onCheckedChange={() => toggleFilter("occasion", occasion)}
                  />
                  <Label htmlFor={`occasion-${occasion}`} className="text-sm font-normal cursor-pointer">
                    {occasion}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Pattern */}
        <AccordionItem value="pattern">
          <AccordionTrigger className="text-sm font-semibold">Pattern</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.pattern.map((pattern) => (
                <div key={pattern} className="flex items-center space-x-2">
                  <Checkbox
                    id={`pattern-${pattern}`}
                    checked={selectedFilters.pattern?.includes(pattern)}
                    onCheckedChange={() => toggleFilter("pattern", pattern)}
                  />
                  <Label htmlFor={`pattern-${pattern}`} className="text-sm font-normal cursor-pointer">
                    {pattern}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}


