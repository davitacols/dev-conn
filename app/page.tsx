"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Star, Pen, ArrowRight, BookOpen, Users, Heart, MessageCircle, TrendingUp, Share2, Bookmark, Check, ChevronRight, AlertCircle } from 'lucide-react'
import { HeroBackground } from '@/components/HeroBackground'
import { Testimonial } from '@/components/Testimonial'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('writer')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    setSubmitted(true)
    console.log('Form submitted:', { email, role })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with side-by-side layout */}
      <section className="relative min-h-screen pt-20">
        <div className="container h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
            {/* Left side - Form and copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                <span>Join the DevConn Beta</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Where{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                  developers
                </span>{' '}
                share their stories
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Share your knowledge, connect with fellow developers, and build your audience. 
                Join the community of tech writers shaping the future of development.
              </p>

              {!submitted ? (
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <Tabs defaultValue="writer" onValueChange={setRole} className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="writer">Writer</TabsTrigger>
                        <TabsTrigger value="reader">Reader</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="h-12"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        {error && (
                          <p className="text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {error}
                          </p>
                        )}
                      </div>
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                        Get Early Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    <p className="text-sm text-muted-foreground text-center">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 text-green-500 p-6 rounded-lg backdrop-blur-sm border border-green-500/20"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-center mb-4">Welcome to DevConn! We'll notify you when your access is ready.</p>
                  <p className="text-sm text-center text-green-600">
                    In the meantime, follow us on{' '}
                    <a href="#" className="underline hover:text-green-700">Twitter</a>
                    {' '}for updates and developer tips!
                  </p>
                </motion.div>
              )}

              <div className="mt-6 flex items-center gap-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>5,000+ writers</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>10,000+ articles</span>
                </div>
              </div>

              
            </motion.div>

            {/* Right side - Hero image/illustrations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[600px] rounded-lg overflow-hidden hidden lg:block"
            >
              <HeroBackground />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Write, Share, Grow</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to share your developer journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Pen,
                title: "Rich Text Editor",
                description: "Write beautiful articles with our Markdown editor, code snippets, and image support."
              },
              {
                icon: Share2,
                title: "Built-in Audience",
                description: "Reach thousands of developers instantly with our recommendation engine."
              },
              {
                icon: TrendingUp,
                title: "Growth Analytics",
                description: "Track your audience growth, article performance, and engagement metrics."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                stat: "1M+",
                label: "Monthly Readers"
              },
              {
                icon: MessageCircle,
                stat: "50K+",
                label: "Comments"
              },
              {
                icon: Bookmark,
                stat: "100K+",
                label: "Saved Articles"
              },
              {
                icon: Users,
                stat: "5K+",
                label: "Active Writers"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{item.stat}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Writers Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from developers who have grown their audience on DevConn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="DevConn has been a game-changer for my career. I've connected with so many like-minded developers and even landed a job through my articles!"
              author="Alex Chen"
              role="Senior Frontend Developer"
            />
            <Testimonial
              quote="The engagement I get on DevConn is incredible. The community is supportive, and the platform's reach has helped me grow my personal brand significantly."
              author="Samantha Lee"
              role="Full Stack Engineer"
            />
            <Testimonial
              quote="As a new developer, DevConn gave me a place to share my learning journey. The feedback I've received has been invaluable for my growth."
              author="Michael Johnson"
              role="Junior Developer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Start Your DevConn Journey Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the waitlist and be among the first to share your story, connect with fellow developers, and grow your audience on DevConn.
              </p>
              <Button 
                size="lg" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
              >
                Get Early Access
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

