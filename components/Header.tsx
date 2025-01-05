"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { 
  Moon, 
  Sun, 
  Menu,
  X,
  PenLine,
  Bell
} from 'lucide-react'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">DevConn</div>
          <div className="w-10 h-10" />
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          DevConn
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#trending" className="text-sm font-medium hover:text-primary transition-colors">
            Trending
          </a>
          <a href="#topics" className="text-sm font-medium hover:text-primary transition-colors">
            Topics
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </a>
          
          <div className="h-4 w-px bg-border" />
          
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
            <PenLine className="mr-2 h-4 w-4" />
            Write
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4 flex flex-col space-y-4">
              <a 
                href="#trending" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending
              </a>
              <a 
                href="#topics" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Topics
              </a>
              <a 
                href="#community" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </a>
              
              <div className="h-px bg-border" />
              
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                <PenLine className="mr-2 h-4 w-4" />
                Write
              </Button>
              
              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}