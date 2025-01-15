'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const NewsPage = () => {
  const newsItems = [
    {
      title: "Canmic Launches New AI-Powered Analytics Platform",
      date: "March 15, 2024",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?fit=crop&w=800",
      excerpt: "Our latest platform leverages advanced AI to provide deeper insights for businesses."
    },
    {
      title: "Partnership Announcement with Leading Cloud Provider",
      date: "March 1, 2024",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800",
      excerpt: "Strategic partnership to enhance cloud solutions for enterprise clients."
    },
    {
      title: "Canmic Recognized as Top Tech Innovator 2024",
      date: "February 20, 2024",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?fit=crop&w=800",
      excerpt: "Industry recognition for our contributions to technological innovation."
    },
    {
      title: "Expanding Our Global Presence",
      date: "February 5, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?fit=crop&w=800",
      excerpt: "New office openings and team expansion across multiple regions."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Latest News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with Canmic&apos;s latest developments and achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="text-primary">{item.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage 