'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const DevOpsPage = () => {
  const features = [
    "CI/CD Pipeline Implementation",
    "Infrastructure as Code (IaC)",
    "Container Orchestration",
    "Automated Testing",
    "Monitoring and Logging",
    "Security Integration (DevSecOps)"
  ]

  const tools = [
    {
      title: "Version Control",
      items: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      title: "CI/CD",
      items: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {
      title: "Containerization",
      items: ["Docker", "Kubernetes", "OpenShift"]
    },
    {
      title: "Monitoring",
      items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    }
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
                DevOps Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Streamline your development and operations with modern DevOps practices and tools.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?fit=crop&w=1000"
                alt="DevOps Pipeline"
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Tools & Technologies</h2>
              <div className="grid gap-6">
                {tools.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 bg-muted rounded-full text-sm"
                            >
                              {item}
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
    </div>
  )
}

export default DevOpsPage 