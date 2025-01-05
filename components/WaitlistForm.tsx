'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { subscribeToWaitlist } from '@/app/actions'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      type="submit" 
      className="w-full sm:w-auto"
      disabled={pending}
    >
      {pending ? 'Joining...' : 'Join Waitlist'}
    </Button>
  )
}

export function WaitlistForm() {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)
  const [email, setEmail] = useState('')

  async function handleSubmit(formData: FormData) {
    try {
      const result = await subscribeToWaitlist(formData)
      
      if (result.success) {
        setEmail('')
        setMessage({ 
          text: result.message || 'Successfully joined the waitlist!', 
          type: 'success' 
        })
      } else {
        setMessage({ 
          text: result.message || 'Failed to join waitlist. Please try again.', 
          type: 'error' 
        })
      }
    } catch (error) {
      setMessage({ 
        text: 'An unexpected error occurred. Please try again later.', 
        type: 'error' 
      })
    }
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <form action={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            aria-label="Email address"
            autoComplete="email"
          />
          <SubmitButton />
        </div>
        
        {message && (
          <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
            <AlertDescription>
              {message.text}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  )
}

