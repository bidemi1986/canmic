'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Looking for an experienced software engineer to join our core development team."
    },
    {
      title: "Machine Learning Engineer",
      department: "AI & Data Science",
      location: "Remote",
      type: "Full-time",
      description: "Join our AI team to build next-generation machine learning solutions."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Help us scale and maintain our cloud infrastructure and deployment pipelines."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Drive product strategy and execution for our enterprise solutions."
    }
  ]

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health benefits",
    "Flexible work arrangements",
    "Professional development budget",
    "Regular team events",
    "Modern tech stack"
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future of technology with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">{position.description}</p>
                      </div>
                      <Button className="md:self-start">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage 