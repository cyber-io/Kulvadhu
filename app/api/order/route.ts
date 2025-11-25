import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getTokenFromHeader, verifyToken } from '@/lib/auth'
import { generateOrderNumber } from '@/lib/utils'
import { sendOrderConfirmation } from '@/lib/email'

export async function GET(request: NextRequest) {
  try {
    const token = getTokenFromHeader(request.headers.get('authorization'))
    const payload = verifyToken(token)

    const orders = await prisma.order.findMany({
      where: { userId: payload.userId },
      include: {
        items: {
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
        },
        shippingAddress: true,
        billingAddress: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ orders })
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
    const { items, shippingAddressId, billingAddressId, totalAmount, paymentMethod } = await request.json()

    if (!items || !shippingAddressId || !billingAddressId || !totalAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const orderNumber = generateOrderNumber()

    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: payload.userId,
        totalAmount,
        shippingAddressId,
        billingAddressId,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            variant: item.variant
          }))
        },
        payments: {
          create: {
            amount: totalAmount,
            method: paymentMethod,
            status: paymentMethod === 'COD' ? 'COMPLETED' : 'PENDING'
          }
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
        shippingAddress: true,
        billingAddress: true
      }
    })

    // Clear cart after successful order
    await prisma.cartItem.deleteMany({
      where: { userId: payload.userId }
    })

    // Send order confirmation email
    try {
      const user = await prisma.user.findUnique({
        where: { id: payload.userId }
      })
      if (user) {
        await sendOrderConfirmation(user.email, orderNumber, totalAmount)
      }
    } catch (emailError) {
      console.error('Failed to send order confirmation email:', emailError)
    }

    return NextResponse.json({ order }, { status: 201 })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}