import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-foreground block mb-6">
              Kulvadhu
            </Link>
            <p className="text-muted-foreground font-light mb-6">
              Celebrating the timeless elegance of Indian handlooms. We weave stories of tradition, luxury, and grace
              into every six yards.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/dd_kulvadhu?igsh=MTNnY29xc3htbzBiOQ==" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/share/1BZA5SEgsF/" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/@kulvadhu_dd?si=3haWjLnLG6Ix2JMp" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/shop/new-arrivals" className="hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop/banarasi" className="hover:text-primary transition-colors">
                  Banarasi Silk
                </Link>
              </li>
              <li>
                <Link href="/shop/kanjeevaram" className="hover:text-primary transition-colors">
                  Kanjeevaram
                </Link>
              </li>
              <li>
                <Link href="/shop/wedding" className="hover:text-primary transition-colors">
                  Wedding Collection
                </Link>
              </li>
              <li>
                <Link href="/shop/designer" className="hover:text-primary transition-colors">
                  Designer Edits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/track-order" className="hover:text-primary transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-muted-foreground/30 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-wider">
          <p>© 2025 Kulvadhu. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
