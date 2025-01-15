'use client'

import { motion } from "framer-motion"

const TermsPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title.",
        "This license shall automatically terminate if you violate any of these restrictions."
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "The materials on Canmic's website are provided on an 'as is' basis.",
        "Canmic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, Canmic does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    },
    {
      title: "Limitations",
      content: "In no event shall Canmic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Canmic's website."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{section.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage 