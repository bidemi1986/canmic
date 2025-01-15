'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const AWSServicesPage = () => {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure and applications to AWS"
    },
    {
      title: "Architecture Design",
      description: "Well-architected solutions following AWS best practices"
    },
    {
      title: "Serverless Solutions",
      description: "Modern, scalable applications using AWS Lambda and related services"
    },
    {
      title: "DevOps on AWS",
      description: "Automated deployment and management using AWS native tools"
    }
  ]

  const certifications = [
    "AWS Solutions Architect Professional",
    "AWS DevOps Engineer Professional",
    "AWS Security Specialty",
    "AWS Database Specialty",
    "AWS Advanced Networking"
  ]

  const technologies = [
    {
      category: "Compute",
      services: ["EC2", "Lambda", "ECS", "EKS"]
    },
    {
      category: "Storage",
      services: ["S3", "EBS", "EFS", "Glacier"]
    },
    {
      category: "Database",
      services: ["RDS", "DynamoDB", "Aurora", "Redshift"]
    },
    {
      category: "Networking",
      services: ["VPC", "Route 53", "CloudFront", "API Gateway"]
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
                AWS Cloud Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build, deploy, and scale your applications with AWS cloud expertise
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=1000"
                alt="AWS Cloud Services"
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">AWS Technologies</h2>
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
                          {tech.services.map((service) => (
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8">AWS Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <Check className="h-5 w-5 text-primary" />
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AWSServicesPage 