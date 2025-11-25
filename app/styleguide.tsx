// app/style-guide/page.tsx
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';

export default function StyleGuidePage() {
  const styleTips = [
    {
      title: 'Draping Techniques',
      description: 'Learn different ways to drape your saree for various occasions.',
      image: '/images/draping.jpg'
    },
    {
      title: 'Blouse Designs',
      description: 'Explore trending blouse patterns and designs.',
      image: '/images/blouse-designs.jpg'
    },
    {
      title: 'Accessory Pairing',
      description: 'Complete your look with perfect jewelry and accessories.',
      image: '/images/accessories.jpg'
    },
    {
      title: 'Fabric Care',
      description: 'Maintain your sarees with proper care instructions.',
      image: '/images/fabric-care.jpg'
    }
  ];

  return (
    <>
      <SiteHeader />
      <div className="bg-gradient-to-r from-sage-500 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Style Guide</h1>
          <p className="text-emerald-100 text-lg">
            Master the art of saree styling with our expert guides
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {styleTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-8">
            How to Drape a Saree
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>Video Tutorial Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
            Saree by Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-maroon-700 mb-2">Wedding</h3>
              <p className="text-gray-600">Heavy silks and rich zari work</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-maroon-700 mb-2">Office</h3>
              <p className="text-gray-600">Subtle prints and comfortable fabrics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-maroon-700 mb-2">Casual</h3>
              <p className="text-gray-600">Light cottons and simple designs</p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}