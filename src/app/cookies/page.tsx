'use client'

import { motion } from "framer-motion"

const CookiePolicyPage = () => {
  const sections = [
    {
      title: "What Are Cookies",
      content: "Cookies are small pieces of text sent to your web browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you."
    },
    {
      title: "How We Use Cookies",
      content: [
        "Essential cookies: Required for the website to function properly",
        "Analytics cookies: Help us understand how visitors interact with our website",
        "Marketing cookies: Used to track visitors across websites to display relevant advertisements",
        "Preference cookies: Enable the website to remember information that changes how the website behaves or looks"
      ]
    },
    {
      title: "Managing Cookies",
      content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work."
    },
    {
      title: "Types of Cookies We Use",
      content: [
        {
          name: "Strictly Necessary Cookies",
          description: "Required for the operation of our website. They include, for example, cookies that enable you to log into secure areas."
        },
        {
          name: "Performance Cookies",
          description: "Allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it."
        },
        {
          name: "Functionality Cookies",
          description: "Used to recognize you when you return to our website. This enables us to personalize our content for you."
        }
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
              Cookie Policy
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
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{section.content}</p>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-4">More Information</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at{' '}
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

export default CookiePolicyPage 