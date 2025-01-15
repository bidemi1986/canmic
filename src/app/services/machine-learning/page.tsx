'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const MachineLearningPage = () => {
  const features = [
    "Custom ML model development",
    "Predictive analytics",
    "Natural Language Processing",
    "Computer Vision solutions",
    "Data preprocessing and analysis",
    "Model deployment and monitoring"
  ]

  const useCases = [
    {
      title: "Predictive Maintenance",
      description: "Prevent equipment failures and optimize maintenance schedules."
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and predict future trends."
    },
    {
      title: "Process Optimization",
      description: "Streamline operations with AI-driven insights."
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
                Machine Learning Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Harness the power of AI to transform your business with our custom machine learning solutions.
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
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?fit=crop&w=1000"
                alt="Machine Learning Visualization"
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Use Cases</h2>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                        <p className="text-muted-foreground">{useCase.description}</p>
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

export default MachineLearningPage 