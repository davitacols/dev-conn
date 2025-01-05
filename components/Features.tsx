import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Zap, BookOpen } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    title: "Knowledge Sharing",
    description: "Share your expertise and learn from others through in-depth articles and tutorials."
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-primary" />,
    title: "Community Collaboration",
    description: "Connect with like-minded developers, participate in discussions, and grow your network."
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: "Career Advancement",
    description: "Showcase your skills, find job opportunities, and accelerate your career growth."
  },
  {
    icon: <BookOpen className="h-8 w-8 mb-4 text-primary" />,
    title: "Continuous Learning",
    description: "Access a wealth of resources and stay up-to-date with the latest in tech."
  }
]

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join DevConn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

