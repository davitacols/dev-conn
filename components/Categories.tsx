import { Button } from "@/components/ui/button"
import { Code, Server, Cpu, Globe, Database, Shield } from 'lucide-react'

const categories = [
  { name: "Web Development", icon: <Globe className="w-6 h-6" /> },
  { name: "Backend", icon: <Server className="w-6 h-6" /> },
  { name: "DevOps", icon: <Cpu className="w-6 h-6" /> },
  { name: "Data Science", icon: <Database className="w-6 h-6" /> },
  { name: "Cybersecurity", icon: <Shield className="w-6 h-6" /> },
  { name: "Programming Languages", icon: <Code className="w-6 h-6" /> },
]

export function Categories() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Button key={index} variant="outline" className="h-auto py-4 flex flex-col items-center">
              {category.icon}
              <span className="mt-2">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

