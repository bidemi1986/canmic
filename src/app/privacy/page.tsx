'use client'

import { motion } from "framer-motion"

const PrivacyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Usage data and analytics",
        "Device and browser information",
        "Cookies and tracking technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell your personal information",
        "We may share data with trusted partners to help perform statistical analysis",
        "We will disclose your information where required by law",
        "Your data may be transferred in a merger or acquisition"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "Data encryption in transit and at rest",
        "Regular security assessments and updates",
        "Limited access to personal information by employees"
      ]
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
              Privacy Policy
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
            <p className="text-muted-foreground mb-8">
              At Canmic, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

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
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@canmic.com" className="text-primary hover:underline">
                  privacy@canmic.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage 