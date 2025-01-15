'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const CybersecurityPage = () => {
  const services = [
    {
      title: "Threat Assessment & Management",
      description: "Identify vulnerabilities and mitigate risks with our in-depth cybersecurity assessments."
    },
    {
      title: "Incident Response",
      description: "Rapid and effective response to security breaches to minimize impact and recovery time."
    },
    {
      title: "Network Security",
      description: "Comprehensive solutions to protect your network infrastructure against cyber threats."
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud environments with advanced monitoring and protection strategies."
    }
  ]

  const expertise = [
    "Cyber Threat Intelligence",
    "Penetration Testing",
    "Data Encryption",
    "Compliance & Governance",
    "Zero Trust Architecture",
    "Vulnerability Management"
  ]

  const securityStandards = [
    {
      title: "ISO 27001",
      description: "Information security management system compliance"
    },
    {
      title: "NIST Framework",
      description: "Cybersecurity framework implementation"
    },
    {
      title: "GDPR",
      description: "European data protection regulation compliance"
    },
    {
      title: "SOC 2",
      description: "Security, availability, and confidentiality controls"
    },
    {
      title: "PCI-DSS",
      description: "Financial Industry Compliance"
    }
  ]

  const securityMetrics = [
    "Mean Time to Detect (MTTD)",
    "Mean Time to Respond (MTTR)",
    "Security Posture Score",
    "Vulnerability Management Index",
    "Incident Response Rate",
    "Security Training Compliance"
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
                Cybersecurity Consulting
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your business from evolving cyber threats with our tailored cybersecurity solutions and expertise.
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=1000"
                alt="Cybersecurity Operations"
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

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
            Security Standards & Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                    <p className="text-muted-foreground">{standard.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">
            Security Metrics We Track
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {index + 1}
                </div>
                <span className="text-lg">{metric}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CybersecurityPage

