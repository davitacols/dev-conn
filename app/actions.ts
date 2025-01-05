'use server'

import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get('email')
  
  if (!email || typeof email !== 'string') {
    return { success: false, message: "Email is required" }
  }
  
  const result = schema.safeParse({ email })
  
  if (!result.success) {
    return { success: false, message: result.error.issues[0].message }
  }

  try {
    await prisma.waitlistEntry.create({
      data: {
        email: result.data.email,
      },
    })
    return { success: true, message: "You've been added to the waitlist!" }
  } catch (error) {
    console.error('Failed to add email to waitlist:', error)
    return { success: false, message: "Failed to add you to the waitlist. Please try again later." }
  }
}

