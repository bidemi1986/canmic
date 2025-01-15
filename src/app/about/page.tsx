'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Bidemi Akinade",
      role: "Co-Founder", 
      image: "/bidemi.JPG",
      bio: "Software Development / Artificial intelligence & Design Lead"
    },
    {
      name: "Seyi Adeniyan",
      role: "Co-Founder",
      image: "/seyi.png",
      bio: "Expert in Cybersecurity and Business Analytics."
    },
    // {
    //   name: "Michael Chen",
    //   role: "Head of Innovation",
    //   image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=800",
    //   bio: "Leading our R&D initiatives in machine learning and emerging technologies."
    // }
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
              About Canmic
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Driving innovation and digital transformation since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To empower businesses through innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading force in digital transformation, setting new standards in 
                technological innovation and client success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?fit=crop&w=1000"
                alt="Office space"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div 
                  className="w-full h-160 aspect-square rounded-lg mb-4 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    // Optional gradient overlay for better text readability if needed
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${member.image})`
                  }}
                />
                <h3 className="text-xl font-bold tracking-tighter mt-4">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 