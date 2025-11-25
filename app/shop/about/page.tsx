// app/about/page.tsx
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { IndianRupee, Heart, Shield, Users, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Craftsmanship",
      description: "We celebrate the artistry and skill of traditional weavers, preserving ancient techniques for future generations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Authenticity Guaranteed",
      description: "Every saree is sourced directly from weaver communities, ensuring genuine craftsmanship and fair trade practices."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "We build lasting relationships with artisans, supporting their livelihoods and cultural heritage."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "Rigorous quality checks ensure every piece meets our high standards of craftsmanship and durability."
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Weaver Communities" },
    { number: "1000+", label: "Sarees Sold" },
    { number: "15+", label: "Indian States" }
  ]

  return (
    <>
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-900 to-purple-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-rose-100 mb-8">
              Weaving Traditions, Creating Legacies
            </p>
            <p className="text-lg text-rose-200 max-w-2xl mx-auto">
              Where every thread tells a story of heritage, and every saree carries the soul of Indian craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                The Kulvadhu Journey
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2015, Kulvadhu began as a humble endeavor to bridge the gap between India's master weavers 
                  and modern women who appreciate traditional craftsmanship. What started as a small boutique in Varanasi 
                  has blossomed into a trusted name for authentic handwoven sarees.
                </p>
                <p className="text-lg">
                  Our name <span className="font-semibold text-rose-700">"Kulvadhu"</span> translates to 
                  "the bride of the family," symbolizing our commitment to providing sarees that become 
                  cherished heirlooms, passed down through generations.
                </p>
                <p className="text-lg">
                  Today, we work directly with over 50 weaving communities across 15 Indian states, 
                  bringing you the finest Banarasi, Kanjeevaram, Chanderi, and other traditional weaves 
                  while ensuring fair wages and sustainable practices for our artisans.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-weaver.jpg"
                  alt="Traditional weaver at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-sm font-semibold">Since 2015</p>
                <p className="text-2xl font-bold">8+ Years</p>
                <p className="text-xs">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-rose-700 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every thread we weave and every relationship we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Commitment */}
      <section className="py-16 lg:py-24 bg-rose-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/artisan-community.jpg"
                  alt="Our artisan community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Supporting Artisan Communities
              </h2>
              <div className="space-y-4 text-rose-100">
                <p className="text-lg">
                  When you choose Kulvadhu, you're not just buying a saree - you're supporting 
                  generations of weaving traditions and helping preserve India's rich textile heritage.
                </p>
                <p className="text-lg">
                  We ensure that our artisans receive fair compensation for their exceptional work, 
                  providing them with sustainable livelihoods and helping their craft flourish for 
                  generations to come.
                </p>
                <p className="text-lg">
                  Our direct-to-artisan model eliminates middlemen, ensuring that your investment 
                  goes directly to the skilled hands that create these masterpieces.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center px-8 py-3 bg-white text-rose-700 rounded-lg font-semibold hover:bg-rose-100 transition-colors"
                >
                  <IndianRupee className="h-4 w-4 mr-2" />
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every Kulvadhu saree comes with our commitment to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-rose-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Authentic Handloom</h3>
                <p className="text-gray-600">100% genuine handwoven fabrics</p>
              </div>
              <div className="p-6 bg-rose-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality checks on every piece</p>
              </div>
              <div className="p-6 bg-rose-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Ethical Sourcing</h3>
                <p className="text-gray-600">Direct partnerships with weavers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}