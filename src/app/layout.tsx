import type { Metadata } from "next";
import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Link from 'next/link'
import { MapPin, Phone, Mail, Twitter, Linkedin, Github } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canmic Consulting",
  description: "Advanced Technology Consulting",
};

const contactInfo = {
  address: "123 Business Avenue, Tech Park",
  city: "Toronto, ON M5V 2T6",
  phone: "+1 (647) 123-4567",
  email: "contact@canmic.com",
}

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Machine Learning', href: '/services/machine-learning' },
    { name: 'DevOps', href: '/services/devops' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'AWS Services', href: '/services/aws-services' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Consulting', href: '/services/consulting' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] 

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Canmic
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const Footer=() =>{
 return <footer className="border-t py-16 bg-background">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Canmic
        </h3>
        <p className="text-muted-foreground">
          The Right Solution for Your Business.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground flex items-start">
            <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
            <span>{contactInfo.address}<br />{contactInfo.city}</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
              {contactInfo.phone}
            </a>
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            <Mail className="mr-2 h-5 w-5 text-primary" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          {footerLinks.company.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          {footerLinks.services.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal & Social */}
      <div className="space-y-8">
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-16 pt-8 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Canmic. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
         {/* Footer */}
       <Footer/>
      </body>
    </html>
  );
}
