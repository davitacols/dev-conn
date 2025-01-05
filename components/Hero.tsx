import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">DevConn: Where Developers Share Knowledge</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Dive into a world of insightful articles, tutorials, and discussions. Connect with fellow developers and stay up-to-date with the latest in tech.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary">Start Reading</Button>
          <Button size="lg" variant="outline">Create Account</Button>
        </div>
      </div>
    </section>
  )
}

