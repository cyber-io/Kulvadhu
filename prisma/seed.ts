import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Banarasi',
        slug: 'banarasi',
        description: 'Traditional Banarasi silk sarees from Varanasi with intricate zari work'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Kanjeevaram',
        slug: 'kanjeevaram',
        description: 'Pure silk Kanjeevaram sarees from South India with temple borders'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Chanderi',
        slug: 'chanderi',
        description: 'Lightweight Chanderi sarees perfect for summer wear'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Wedding Collection',
        slug: 'wedding',
        description: 'Heavy bridal sarees for special occasions'
      }
    })
  ])

  console.log('Created categories:', categories.map(c => c.name))

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Royal Blue Zari Banarasi Silk Saree',
        slug: 'royal-blue-zari-banarasi',
        description: 'Exquisite Banarasi silk saree with intricate zari work in royal blue color',
        price: 12500,
        comparePrice: 15000,
        categoryId: categories[0].id,
        featured: true,
        quantity: 10,
        images: {
          create: [
            {
              url: '/images/sarees/blue-banarasi-1.jpg',
              alt: 'Royal Blue Banarasi Saree',
              isPrimary: true
            }
          ]
        },
        variants: {
          create: [
            { name: 'Size', value: '6.5 meters', price: 0 },
            { name: 'Size', value: '9 meters', price: 2000 }
          ]
        }
      }
    }),
    prisma.product.create({
      data: {
        name: 'Peach Pink Kanjeevaram with Golden Border',
        slug: 'peach-pink-kanjeevaram',
        description: 'Traditional Kanjeevaram silk saree in peach pink with golden temple border',
        price: 18900,
        categoryId: categories[1].id,
        featured: true,
        quantity: 8,
        images: {
          create: [
            {
              url: '/images/sarees/peach-kanjeevaram-1.jpg',
              alt: 'Peach Pink Kanjeevaram Saree',
              isPrimary: true
            }
          ]
        }
      }
    })
  ])

  console.log('Created products:', products.map(p => p.name))

  // Create admin user
  const hashedPassword = await hashPassword('admin123')
  const admin = await prisma.user.create({
    data: {
      email: 'admin@kulvadhu.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN'
    }
  })

  console.log('Created admin user')

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })