import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

// Define default metadata
export const metadata: Metadata = {
  title: {
    default: "Haseeb | Web Developer & Designer",
    template: "%s | Haseeb"
  },
  description: "Professional web developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and services.",
  keywords: ["web developer", "frontend developer", "React developer", "Next.js", "portfolio", "Haseeb", "web design"],
  authors: [{ name: "Haseeb" }],
  creator: "Haseeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3001.com",
    title: "Haseeb | Web Developer & Designer",
    description: "Professional web developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and services.",
    siteName: "Haseeb Portfolio",
    images: [
      {
        // url: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot%202025-03-14%20035702-fx5vEPW2DE8S56vJN5gt5OJRcSXZTv.webp",
        url: "https://docs.google.com/document/d/1O1LQRXR1gxOMZZ7tyo2gC80N49difg7uZcKNBczck78/edit?pli=1&tab=t.0",
        width: 1200,
        height: 630,
        alt: "Haseeb - Web Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Haseeb | Web Developer & Designer",
    description: "Professional web developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and services.",
    images: ["https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot%202025-03-14%20035702-fx5vEPW2DE8S56vJN5gt5OJRcSXZTv.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.manifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
