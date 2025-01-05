import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
}

export function BlogPostCard({ title, excerpt, author, date, slug }: BlogPostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <Link href={`/blog/${slug}`} className="text-2xl font-semibold text-gray-900 hover:text-gray-700">{title}</Link>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-gray-500">
        <span>{author}</span>
        <span>{date}</span>
      </CardFooter>
    </Card>
  )
}

