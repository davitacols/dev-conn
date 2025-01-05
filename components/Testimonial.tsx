import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <Quote className="w-8 h-8 text-primary mb-4" />
          <p className="text-lg mb-4 flex-grow">{quote}</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

