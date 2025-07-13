"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

export default function SEOHead({
  title = "Saqib | Web Developer & Designer",
  description = "Professional web developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and services.",
  keywords = "web developer, frontend developer, React developer, Next.js, portfolio, Saqib, web design",
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps) {
  const router = useRouter()
  const canonicalUrl = `https://yourdomain.com${router.asPath === "/" ? "" : router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.manifest" />
    </Head>
  )
}

