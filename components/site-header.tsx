import Link from "next/link"
import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-foreground">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
        

<Image
  src="logo.png"
  alt="Description of image"
  width={60}
  height={40}
  className="your-styles"
/>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          <Link href="/shop/new-arrivals" className="hover:text-primary transition-colors">
            New Arrivals
          </Link>
          <Link href="/shop/banarasi" className="hover:text-primary transition-colors">
            Banarasi
          </Link>
          <Link href="/shop/kanjeevaram" className="hover:text-primary transition-colors">
            Kanjeevaram
          </Link>
        </nav>

        <div className="flex items-center justify-center">
          <Link href="/" className="font-serif text-3xl font-bold tracking-tighter text-foreground">
            Kulvadhu
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          <Link href="/shop/wedding" className="hover:text-primary transition-colors">
            Wedding
          </Link>
          <Link href="/shop/style-guide" className="hover:text-primary transition-colors">
            Style Guide
          </Link>
          <Link href="/shop/about" className="hover:text-primary transition-colors">
            Our Story
          </Link>

         <div className="flex items-center gap-2">
    <Link href="/login" className="hover:text-primary transition-colors">
      Sign In
    </Link>
    <span className="text-muted-foreground">/</span>
    <Link href="/signup" className="hover:text-primary transition-colors">
      Sign Up
    </Link>
  </div>
        </nav>

        <div className="flex items-center gap-4 text-foreground">
          <button className="hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <Link href="/account" className="hover:text-primary transition-colors">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>
          <Link href="/cart" className="hover:text-primary transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary flex items-center justify-center text-[8px] text-white">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </header>

    
  )
}

