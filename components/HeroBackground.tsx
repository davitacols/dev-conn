import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export const HeroBackground: React.FC = () => (
  <div className="absolute inset-0">
    {/* Abstract shapes */}
    <div className="absolute w-full h-full bg-[radial-gradient(circle_at_100%_100%,#4338ca,transparent_50%)]" />
    <div className="absolute w-full h-full bg-[radial-gradient(circle_at_0%_0%,#6366f1,transparent_50%)]" />
    
    {/* Featured article previews - stacked and slightly rotated */}
    <div className="absolute inset-0 flex items-center justify-center">
      {[15, 10, 5, 0].map((rotation, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="absolute"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <Card className="w-64 h-80 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="w-full h-32 bg-muted rounded-md mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-muted rounded" />
                <div className="h-4 w-1/2 bg-muted rounded" />
                <div className="h-4 w-2/3 bg-muted rounded" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
)

