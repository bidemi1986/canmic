'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const ConsultingPage = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Guide your organization through digital evolution with strategic technology adoption."
    },
    {
      title: "Technology Strategy",
      description: "Develop comprehensive tech roadmaps aligned with your business objectives."
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through data-driven insights."
    },
    {
      title: "Change Management",
      description: "Facilitate smooth transitions with effective change management strategies."
    }
  ]

  const expertise = [
    "Strategic Planning",
    "Business Analysis",
    "Risk Management",
    "Technology Assessment",
    "Project Management",
    "Industry Best Practices"
  ]

  const industries = [
    {
      title: "Energy & Resources",
      areas: [
        {
          name: "Oil & Gas",
          subareas: ["Upstream", "Midstream", "Downstream", "Trading"]
        },
        {
          name: "Mining",
          subareas: ["Precious Metals", "Base Metals", "Industrial Minerals", "Mining Technology"]
        },
        {
          name: "Renewable Energy",
          subareas: ["Solar", "Wind", "Hydroelectric", "Energy Storage", "Green Hydrogen"]
        }
      ]
    },
    {
      title: "Manufacturing & Industrial",
      areas: [
        {
          name: "Automotive",
          subareas: ["OEMs", "Suppliers", "Electric Vehicles", "Connected Cars"]
        },
        {
          name: "Construction",
          subareas: ["Commercial", "Residential", "Infrastructure", "Smart Buildings"]
        },
        {
          name: "Industrial Equipment",
          subareas: ["Heavy Machinery", "Automation", "Process Control"]
        }
      ]
    },
    {
      title: "Financial Services",
      areas: [
        {
          name: "Banking",
          subareas: ["Retail", "Commercial", "Investment", "Digital Banking"]
        },
        {
          name: "Insurance",
          subareas: ["Life & Health", "Property & Casualty", "Reinsurance"]
        },
        {
          name: "FinTech",
          subareas: ["Payments", "Blockchain", "Digital Assets", "RegTech"]
        }
      ]
    },
    {
      title: "Education & Research",
      areas: [
        {
          name: "Higher Education",
          subareas: ["Universities", "Research Institutions", "Online Learning", "EdTech"]
        },
        {
          name: "Professional Development",
          subareas: ["Corporate Training", "Certification Programs", "Skills Assessment"]
        },
        {
          name: "Research & Development",
          subareas: ["Academic Research", "Industry Collaboration", "Innovation Centers"]
        }
      ]
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
                Consulting Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Strategic guidance to transform your business and drive innovation
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=1000"
                alt="Consulting Services"
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Expertise</h2>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Services</h2>
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/15 via-purple-500/10 to-slate-950/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full backdrop-blur-sm bg-white/50 dark:bg-slate-950/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{industry.title}</h3>
                    <div className="space-y-6">
                      {industry.areas.map((area) => (
                        <div key={area.name} className="space-y-2">
                          <h4 className="text-lg font-semibold">{area.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {area.subareas.map((subarea) => (
                              <span
                                key={subarea}
                                className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors"
                              >
                                {subarea}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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

export default ConsultingPage 