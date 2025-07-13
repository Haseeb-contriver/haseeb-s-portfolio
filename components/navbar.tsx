"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export default function StylishDeveloperLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex items-center gap-3 bg-gradient-to-r p-5 rounded-lg w-fit shadow-lg transition-all duration-300 ease-in-out"
      style={{
        boxShadow: isHovered ? "0 10px 25px rgba(0, 0, 0, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center justify-center bg-white text-black rounded-md p-1.5 px-3 transition-transform duration-300 ${isHovered ? "rotate-3" : ""}`}
      >
        <span className="font-mono text-sm font-bold tracking-tight">{`</>`}</span>
      </div>
      <span
        className={`text-white font-sans font-bold text-2xl tracking-tight transition-all duration-300 ${isHovered ? "tracking-wider" : ""}`}
        style={{
          textShadow: isHovered ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
        }}
      >
        Haseeb
      </span>
    </div>
  )
}



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <StylishDeveloperLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#works" className="text-white hover:text-primary transition-colors">
              Works
            </Link>
            <Link href="#skills" className="text-white hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#testimonials" className="text-white hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact"><Button>Contact</Button></Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <Link
                href="#services"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#works"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Works
              </Link>
              <Link
                href="#skills"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link href="#contact"><Button className="w-full">Contact</Button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

