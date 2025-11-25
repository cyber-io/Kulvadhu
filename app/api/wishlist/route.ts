import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getTokenFromHeader, verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const token = getTokenFromHeader(request.headers.get('authorization'))
    const payload = verifyToken(token)

    const wishlist = await prisma.wishlistItem.findMany({
      where: { userId: payload.userId },
      include: {
        product: {
          include: {
            images: {
              where: { isPrimary: true },
              take: 1
            },
            reviews: {
              select: {
                rating: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const wishlistWithRating = wishlist.map(item => ({
      ...item,
      product: {
        ...item.product,
        averageRating: item.product.reviews.length > 0 
          ? item.product.reviews.reduce((acc, review) => acc + review.rating, 0) / item.product.reviews.length
          : 0
      }
    }))

    return NextResponse.json({ wishlist: wishlistWithRating })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = getTokenFromHeader(request.headers.get('authorization'))
    const payload = verifyToken(token)
    const { productId } = await request.json()

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    // Check if already in wishlist
    const existingItem = await prisma.wishlistItem.findUnique({
      where: {
        userId_productId: {
          userId: payload.userId,
          productId
        }
      }
    })

    if (existingItem) {
      return NextResponse.json(
        { error: 'Product already in wishlist' },
        { status: 400 }
      )
    }

    const wishlistItem = await prisma.wishlistItem.create({
      data: {
        userId: payload.userId,
        productId
      },
      include: {
        product: {
          include: {
            images: {
              where: { isPrimary: true },
              take: 1
            }
          }
        }
      }
    })

    return NextResponse.json({ wishlistItem })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const token = getTokenFromHeader(request.headers.get('authorization'))
    const payload = verifyToken(token)
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    await prisma.wishlistItem.delete({
      where: {
        userId_productId: {
          userId: payload.userId,
          productId
        }
      }
    })

    return NextResponse.json({ message: 'Removed from wishlist' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
}