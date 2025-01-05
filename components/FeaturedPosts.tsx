import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from 'next/link'

const featuredPosts = [
  {
    title: "The Future of JavaScript: What's Coming in ES2022",
    excerpt: "Explore the exciting new features and improvements coming to JavaScript in the next ECMAScript release.",
    author: "Sarah Johnson",
    date: "June 1, 2023",
    category: "JavaScript",
    slug: "future-of-javascript-es2022"
  },
  {
    title: "Building Scalable Microservices with Go",
    excerpt: "Learn how to design and implement robust microservices architectures using Go and best practices.",
    author: "Michael Chen",
    date: "May 28, 2023",
    category: "Go",
    slug: "building-scalable-microservices-go"
  },
  {
    title: "Mastering React Hooks: Advanced Patterns",
    excerpt: "Take your React skills to the next level with advanced hook patterns and custom hook creation techniques.",
    author: "Emma Rodriguez",
    date: "May 25, 2023",
    category: "React",
    slug: "mastering-react-hooks-advanced-patterns"
  }
]

export function FeaturedPosts() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-sm text-primary mb-2">{post.category}</div>
                <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  {post.title}
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

