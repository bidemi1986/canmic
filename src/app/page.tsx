'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cog, Database, Cloud, Smartphone, Users, ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from 'next/link'
import { Parallax } from 'react-parallax';


const expertiseItems = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Unlock the power of data-driven insights with our custom ML models.",
    href: "/services/machine-learning"
  },
  {
    icon: Cog,
    title: "DevOps",
    description: "Streamline development and operations workflows for faster delivery cycles and greater reliability.",
    href: "/services/devops"
  },
  {
    icon: Database,
    title: "Cybersecurity",
    description: "Maximize Oracle's potential with expert guidance in database management and enterprise applications.",
    href: "/services/cybersecurity"
  },
  {
    icon: Cloud,
    title: "AWS Cloud Services",
    description: "Leverage AWS scalability with our certified professionals for migration, architecture, and optimization.",
    href: "/services/aws-services"
  },
  {
    icon: Smartphone,
    title: "Software Development",
    description: "Create intuitive, scalable applications with our expert mobile and web development team.",
    href: "/services/software-development"
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Navigate challenges with our strategic planning and digital transformation expertise.",
    href: "/services/consulting"
  }
]

const whyChooseUs = [
  {
    title: "Tailored Solutions",
    description: "Every business is unique, and so are our strategies. We deliver custom-fit solutions that address your specific challenges."
  },
  {
    title: "End-to-End Expertise",
    description: "From strategy to execution, our team is with you every step of the way."
  },
  {
    title: "Innovation-Focused",
    description: "With a strong focus on AI and emerging technologies, we bring you the tools of tomorrow, today."
  },
  {
    title: "Commitment to Excellence",
    description: "We're driven by a passion for delivering quality, reliability, and results."
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      
      {/* Hero Section - Add pt-16 to account for fixed header */}
      <section className="p-2 pt-16 relative bg-gradient-to-br from-primary/20 via-purple-500/10 to-background overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Your Trusted Partner in Innovation
            </motion.h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We empower businesses with the right solutions to thrive in today&apos;s fast-evolving landscape.
              From startups to enterprises, we&apos;re here to elevate your success.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-6">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section - Enhanced cards with hover effects */}
      <section id="expertise" className="py-24 bg-gradient-to-b from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive solutions for your business needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                      <CardContent className="p-6 bg-gradient-to-br from-background to-muted">
                        <motion.div 
                          className="mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="h-12 w-12 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                        <motion.div 
                          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className="h-5 w-5 text-primary" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section - Enhanced with parallax and gradient overlay */}
      <section id="innovation" className="relative">
        <Parallax
          blur={0}
          bgImage="https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          bgImageAlt="Innovation Technology Background"
          strength={200}
          className="relative"
        >
          <div className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-purple-500/90 to-primary/90 mix-blend-multiply" />
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white"
                  >
                    Innovation Beyond Boundaries
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/90 text-lg mb-8"
                  >
                    At Canmic, we&apos;re not just about solving today&apos;s problems—we&apos;re creating the future. 
                    Our in-house AI-powered apps and software for the internet are designed to revolutionize 
                    the way you work, connect, and grow.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button variant="secondary" size="lg">
                      Explore Our Solutions
                    </Button>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 z-10" />
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1720551257701-276a00cd1ff5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Innovation visualization"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Why Choose Us Section - Enhanced cards with stagger effect */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
            Why Choose Canmic?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-6 bg-gradient-to-br from-background to-muted">
                      <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with gradient and button animations */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2 
            className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: true }}
          >
            Let&apos;s Build the Future Together
          </motion.h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-8">
            Ready to take your business to the next level? Discover how Canmic can help you innovate, 
            scale, and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

