'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Modern, responsive web applications built with the latest technologies"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      title: "API Development",
      description: "Robust and scalable API solutions for your business needs"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom enterprise software tailored to your organization"
    }
  ]

  const technologies = [
    {
      category: "Frontend",
      tech: ["React", "Next.js", "Vue", "Angular"]
    },
    {
      category: "Backend",
      tech: ["Node.js", "Python", "Java", "Go"]
    },
    {
      category: "Mobile",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Database",
      tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    }
  ]

  const process = [
    "Requirements Analysis",
    "Design & Architecture",
    "Development",
    "Testing & QA",
    "Deployment",
    "Maintenance & Support"
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Software Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Custom software solutions built with modern technologies and best practices
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=1000"
                alt="Software Development"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Services</h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Technologies</h2>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {tech.tech.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-muted rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <Check className="h-5 w-5 text-primary" />
                <span>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareDevelopmentPage 