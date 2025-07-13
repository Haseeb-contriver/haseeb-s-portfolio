import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              I am Haseeb
              <span className="block text-primary mt-2">Next-Level Frontend Developer.</span>
            </h1>
            <p className="text-gray-400 mb-8">
              I help their company and experience problems by building accessible and inclusive web products and digital
              experiences.
            </p>
            <div className="flex gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                >
                  Contact Me
                </Button>
              </Link>
              {/* <Link href="https://x0xi89gol64etorp.public.blob.vercel-storage.com/muhammad%20saqib%20%287%29-62UjyjNaH5FzJUO4mT4CYEtj2sEjEO.pdf" target='_blank'> */}
              <Link href="https://docs.google.com/document/d/1O1LQRXR1gxOMZZ7tyo2gC80N49difg7uZcKNBczck78/edit?pli=1&tab=t.0" target='_blank'>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="https://x0xi89gol64etorp.public.blob.vercel-storage.com/1719347211618-_2_-XXcxLvDDRVfRmYWJZxvHc5MiyawyVO.webp"
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />
        <Testimonials />

        {/* Contact Section */}
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Haseeb</h3>
              <p className="text-gray-400">
                Full Stack Developer based in your location. Available for freelance work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>haseebtahir787@gmail.com</li>
                <li>+92 3259181505</li>
                <li>Faisal Town Moon Market, Lahore, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Haseeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

