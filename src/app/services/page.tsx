'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Brain, Cog, Shield, Cloud, Smartphone, Users } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Unlock the power of data-driven insights with our custom ML models.",
      href: "/services/machine-learning"
    },
    {
      icon: Cog,
      title: "DevOps",
      description: "Streamline development and operations workflows for faster delivery cycles.",
      href: "/services/devops"
    },
    {
      icon: Shield, 
      title: "Cybersecurity",
      description: "We provide comprehensive cybersecurity solutions to protect your business from cyber threats.",
      href: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "AWS Services",
      description: "Leverage AWS scalability with our certified professionals.",
      href: "/services/aws-services"
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description: "Create intuitive, scalable applications with our expert team.",
      href: "/services/software-development"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Navigate challenges with our strategic planning expertise.",
      href: "/services/consulting"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center text-primary">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 