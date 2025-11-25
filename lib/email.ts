import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendWelcomeEmail(email: string, name: string) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Welcome to Kulvadhu - Your Saree Journey Begins!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e11d48;">Welcome to Kulvadhu, ${name}! 🎉</h2>
        <p>We're thrilled to have you join our community of saree lovers.</p>
        <p>Discover exquisite handwoven sarees and create your perfect collection.</p>
        <a href="${process.env.NEXTAUTH_URL}/shop" style="background-color: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 16px 0;">
          Start Shopping
        </a>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendOrderConfirmation(email: string, orderNumber: string, total: number) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Order Confirmation - ${orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e11d48;">Thank you for your order! 🙏</h2>
        <p>Your order <strong>${orderNumber}</strong> has been confirmed.</p>
        <p>Total Amount: <strong>₹${total}</strong></p>
        <p>We'll notify you when your order ships.</p>
        <a href="${process.env.NEXTAUTH_URL}/track-order?order=${orderNumber}" style="background-color: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 16px 0;">
          Track Your Order
        </a>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}