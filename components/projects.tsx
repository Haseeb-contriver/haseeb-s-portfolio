"use client"

import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Github, X, Tag, ChevronLeft } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Project data with expanded details
const projects = [
  {
    id: "neufluence",
    title: "Neufluence",
    description: "A platform connecting influencers and brands for sponsorship opportunities using social media data.",
    fullDescription:
      "Neufluence is a Next.js-based platform designed to connect influencers with brands for sponsorship opportunities. Influencers can create detailed profiles showcasing their social media stats and engagement metrics, while brands can easily find and collaborate with influencers based on their performance and reach. The platform integrates TikTok data for real-time profile and engagement tracking.",
    image: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Website-Images_Neufluence-4%20%281%29-Ute7zdQfAIDQLkiaBz6ijYYXXCDl8P.webp?height=300&width=400",  // Replace with actual image URL
    detailImage: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot-2024-02-20-at-10.54.53-AM-1-e1708444781836%20%281%29-xBFgK40lMdj17SU82CDVY5d70KzJoO.webp?height=600&width=1200",  // Replace with actual image URL
    demoLink: "https://neufluence.com/",  // Add demo link if available
    githubLink: "#",  // Add GitHub link if available
    technologies: ["Next.js", "TikTok API", "Material-UI", "Firebase", "Cloud Firestore"],
    challenges:
      "The main challenge was securely integrating TikTok API to fetch influencer account data and display it in a user-friendly, customized way. Ensuring seamless authentication and real-time data retrieval while maintaining platform performance was also a priority.",
    solutions:
      "Implemented a secure TikTok account integration allowing influencers to easily link their accounts. I developed a custom template to display the influencer's profile statistics and engagement metrics. Authentication and data retrieval were streamlined to ensure a smooth experience for users linking their TikTok profiles.",
    features: [
      "TikTok account integration for influencer profiles",
      "Custom-designed template pages for displaying profile statistics and engagement metrics",
      "Seamless authentication and data retrieval",
      "User-friendly interface for influencers to manage their profiles and showcase data"
    ],
    overview:
      "Neufluence is a Next.js-based platform that connects influencers with brands for sponsorships. Influencers can create profiles that display their social media stats and engagement metrics, enabling brands to find suitable partners for marketing campaigns. By integrating TikTok’s API, the platform provides real-time access to influencers' social media performance data, enhancing collaboration opportunities.",
    timeline: "Dec 2022 - Apr 2023",
    role: "Frontend Developer"
  },
  {
    id: "order-made-simple",
    title: "Order Made Simple (OMS)",
    description: "A platform designed to streamline the stock ordering process for small and independent foodservice operators.",
    fullDescription:
      "Orders Made Simple (OMS) is a platform designed to streamline the stock ordering process for small and independent foodservice operators. It provides a fast, efficient, and user-friendly system for chefs, owners, and managers to place orders quickly while ensuring competitive pricing—eliminating the hassle of supplier negotiations. The platform is equipped with an AI-powered order generation system and detailed menu management features to enhance operational efficiency.",
    image: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/2021-10-27-WwE7ZbPutFFZJKCW9hyez2GI7C2JG0.webp?height=300&width=400",  // Replace with actual image URL
    detailImage: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot-2025-03-14-022750-aMTIkD0SKZvEjfjNPJ4VPNzyXJ1Xdx.webp?height=600&width=1200",  // Replace with actual image URL
    demoLink: "https://ordersmadesimple.com/",  // Add demo link if available
    githubLink: "#",  // Add GitHub link if available
    technologies: ["React Native", "React.js", "Node.js", "AWS Lambda", "AWS SQS", "Expo"],
    challenges:
      "Key challenges included automating the ordering process with AI, optimizing backend performance for quick order generation and handling high volumes of requests, and integrating real-time messaging queues for background tasks. Performance issues were resolved by improving backend services and optimizing data flow.",
    solutions:
      "Implemented AI-powered order generation to enhance automation in the ordering process and streamline order placements. Integrated AWS SQS for background task handling, improving system efficiency. Additionally, optimized the mobile and desktop applications to ensure smooth user experience, including real-time updates and efficient order management.",
    features: [
      "Order management system for creating, sending, deleting, and generating order receipts",
      "AI-powered order generation via email for enhanced automation",
      "Menu Builder with recipe creation and editing",
      "Allergen information table for detailed recipe insights",
      "Gross profit calculations and dynamic alerts for price changes",
      "Automated profit margin adjustments based on price fluctuations"
    ],
    overview:
      "Orders Made Simple (OMS) is a platform designed to streamline the stock ordering process for small and independent foodservice operators. It offers an efficient, user-friendly interface for placing orders, while ensuring competitive pricing and eliminating the need for supplier negotiations. The platform is powered by React Native (Expo) for mobile apps, React.js for desktop applications, and utilizes Node.js with AWS Lambda for the backend. AWS SQS handles background tasks, ensuring efficient order processing and management.",
    timeline: "Feb 2022 - Present",
    role: "Frontend Developer"
  },
  {
    id: "muzzle-run",
    title: "Muzzle Run",
    description: "An NFT-based platform for breeding greyhound racing dogs in the game Muzzle Run.",
    fullDescription:
      "Muzzle Run is a platform that enables users to access and breed greyhound racing dogs for the game. The Breeders Den provides 24/7 access to 107 breeder dogs, eliminating the need to purchase breeder dogs or find breeding partners. Players can streamline the breeding process, giving them full control without external coordination. The platform integrates blockchain technology for seamless NFT management, enhancing the gaming experience.",
    image: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot-2025-03-14-023012-0BE2HYt2ryyAjMQYPY6MKwgLAkYYVj.webp?height=300&width=400",  // Replace with actual image URL
    detailImage: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot-2025-03-14-023012-0BE2HYt2ryyAjMQYPY6MKwgLAkYYVj.webp?height=600&width=1200",  // Replace with actual image URL
    demoLink: "https://thebreedersden.com/whippets",  // Add demo link if available
    githubLink: "#",  // Add GitHub link if available
    technologies: ["Next.js", "Node.js", "Firebase", "Alchemy", "OpenSea API", "MetaMask"],
    challenges:
      "The primary challenge was dealing with missing NFT metadata when retrieving data from Alchemy. Some NFT details were available on OpenSea but not fetched by Alchemy due to inconsistencies in data retrieval speeds. The slow response times of OpenSea’s API also added complexity to the process.",
    solutions:
      "To address the metadata issue, I implemented a fallback mechanism: first, metadata was fetched from Alchemy, and if any data was missing, the system would query OpenSea as a backup. This approach ensured faster retrieval of data while maintaining data completeness, thus reducing reliance on OpenSea’s slower API.",
    features: [
      "NFT Listing with Advanced Filters for browsing and searching breeder dogs",
      "User Account Pages with the ability to view owned NFTs",
      "Listing and unlisting NFTs directly on the platform",
      "Shareable personalized NFT listing pages",
      "MetaMask Wallet integration for secure management of NFTs",
      "Real-time NFT metadata fetched from Alchemy"
    ],
    overview:
      "Muzzle Run is an NFT-based platform designed for the game Muzzle Run. It allows players to access and breed greyhound racing dogs by providing 24/7 access to 107 breeder dogs. The platform eliminates the need for purchasing breeder dogs or finding partners for breeding, enabling users to streamline the entire process. Developed with Next.js for the frontend, Node.js for the backend, and Firebase for the database and deployment, the platform integrates blockchain features like MetaMask wallet support, Alchemy, and OpenSea APIs for seamless NFT management.",
    timeline: "Aug 2023 - Apr 2024",
    role: "Full Stack Developer"
  },
  {
    id: "nft-marketplace-dashboard",
    title: "NFT Marketplace Dashboard",
    description: "A modern dashboard for NFT trading with real-time updates and analytics.",
    fullDescription:
      "This NFT marketplace dashboard provides a comprehensive solution for tracking, analyzing, and trading digital assets. Built with performance and user experience in mind, it features real-time data updates, interactive charts, and a seamless trading interface.",
    image: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot%202025-03-16%20031754-8L7EZDcjsqEKuPv1tq9ybuUW7yeWfk.webp?height=300&width=400",
    detailImage: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/Screenshot%202025-03-16%20031754-8L7EZDcjsqEKuPv1tq9ybuUW7yeWfk.webp?height=600&width=1200",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Ethers.js"],
    challenges:
      "One of the main challenges was implementing real-time data synchronization across multiple views while maintaining performance. We also needed to ensure the UI remained responsive and intuitive despite the complex data being displayed.",
    solutions:
      "We implemented a custom WebSocket solution for real-time updates and used virtualized lists to handle large datasets efficiently. The UI was designed with a focus on progressive disclosure to prevent overwhelming users with information.",
    features: [
      "Real-time price tracking for NFT collections",
      "Portfolio management and performance analytics",
      "Trading interface with gas fee optimization",
      "Customizable watchlists and alerts",
      "Historical data visualization with interactive charts",
    ],
    timeline: "3 months",
    role: "Lead Frontend Developer",
  },
  {
    id: "metri-corr",
    title: "Metri-Corr",
    description: "Advanced solutions for remote monitoring and prevention of corrosion in steel structures.",
    fullDescription:
      "MetriCorr provides advanced solutions for remote monitoring and prevention of corrosion in steel structures. It was developed in response to severe external corrosion at Crossbridge Refinery in Fredericia, Denmark. Despite having a Cathodic Protection (CP) system, the refinery faced significant pipeline corrosion, and MetriCorr’s monitoring technology identified root causes, preventing costly pipeline replacement.",
    image: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/1726884332140-qC9WaiOtuUG3ZjQhg0lTpYYaSqhAwg.webp?height=300&width=400",  // Replace with actual image URL
    detailImage: "https://x0xi89gol64etorp.public.blob.vercel-storage.com/1726884332140-qC9WaiOtuUG3ZjQhg0lTpYYaSqhAwg.webp?height=600&width=1200",  // Replace with actual image URL  
    demoLink: "https://www.metricorr.com/",  // Add demo link if available
    githubLink: "#",  // Add GitHub link if available
    technologies: ["React.js", "Material-UI", "MUI V5", "Data Grid", "Highcharts"],
    challenges:
      "Key challenges included optimizing rendering and state management for handling large datasets, migrating from Material-Table to MUI V5 & Data Grid to resolve compatibility issues with React 18, implementing custom Highcharts for advanced data visualization, and improving the overall user experience for better usability.",
    solutions:
      "To address performance issues, rendering and state management were optimized for large datasets. Migration to MUI V5 & Data Grid solved compatibility challenges with React 18. Custom Highcharts were implemented for advanced data visualization needs, and UI/UX enhancements were made to improve data presentation, ensuring a more intuitive experience for the users.",
    features: [
      "Manual Survey Module for custom data entry",
      "Multiple Survey Types (Manual, On-Off, Depol Survey)",
      "Real-time device status dashboard",
      "Custom Chainage Graphs for visualizing pipeline conditions",
      "Alert system for notifying critical corrosion metrics changes"
    ],
    overview: "CP Survey: MetriCorr offers a complete remote monitoring solution for pipelines and other buried assets. The system covers everything from field measurements performed by state-of-the-art corrosion probes and data loggers to data transmission, data storage, and web/app-based analysis tools. The solution offers data communication via cellular, satellite, or fiber/LAN, with slimline loggers designed for test-station installation. These loggers are equipped with an LTE Cat. 1 module for 4G/5G operation, ensuring reliable and seamless data transmission.",
    timeline: "Aug 2022 - Present",
    role: "Frontend Developer"
  },
  // {
  //   id: "erp-pack",
  //   title: "ERP Pack",
  //   description: "An HR Management System for employee management, access control, and attendance tracking.",
  //   fullDescription:
  //     "ERP Pack is a comprehensive HR Management System designed to streamline employee management, access control, and attendance tracking. This was my first project in the field, where I worked on various modules, fixed issues, and completed unfinished features to improve the system’s stability and usability.",
  //   image: "/placeholder.svg?height=300&width=400",  // Replace with actual image URL
  //   detailImage: "/placeholder.svg?height=600&width=1200",  // Replace with actual image URL
  //   demoLink: "#",  // Add demo link if available
  //   githubLink: "#",  // Add GitHub link if available
  //   technologies: ["React.js", "Node.js", "Attendance Device Integration"],
  //   challenges:
  //     "The main challenges included ensuring seamless attendance tracking integration and resolving stability issues across the platform.",
  //   solutions:
  //     "Implemented role-based access control with user-admin and super-admin modules. Integrated custom data filters for improved management and successfully integrated attendance device data for accurate tracking.",
  //   features: [
  //     "User-Admin & Super-Admin Modules for role-based access control",
  //     "Custom Data Filters for advanced data management",
  //     "Attendance Device Integration for seamless employee tracking",
  //     "Bug Fixes & Completion of Unfinished Features for system stability"
  //   ],
  //   overview:
  //     "ERP Pack is an HR management system that streamlines employee management, attendance tracking, and access control, developed using React.js for the frontend and Node.js for the backend. The system integrates attendance devices and features role-based access control, custom data filters, and improvements in system stability.",
  //   timeline: "May 2021 - Feb 2023",
  //   role: "Frontend Developer"
  // },

  // {
  //   id: "texology",
  //   title: "Texology",
  //   description: "A web application for withholding tax consultancy, offering tools and insights for tax-related processes.",
  //   fullDescription:
  //     "Texology is a web application designed to assist clients with withholding tax consultancy. The platform offers various tools and insights to streamline tax-related processes, making it easier for clients to navigate and manage their tax obligations.",
  //   image: "/placeholder.svg?height=300&width=400",  // Replace with actual image URL
  //   detailImage: "/placeholder.svg?height=600&width=1200",  // Replace with actual image URL
  //   demoLink: "#",  // Add demo link if available
  //   githubLink: "#",  // Add GitHub link if available
  //   technologies: ["React.js", "TypeScript", "REST APIs"],
  //   challenges:
  //     "Integrating REST APIs smoothly and ensuring type safety across the frontend and backend were key challenges.",
  //   solutions:
  //     "Implemented API integrations using TypeScript, ensuring smooth data exchange between the frontend and backend while maintaining type safety. Worked on routing and page structure to improve user navigation and the overall user experience.",
  //   features: [
  //     "API Integrations with TypeScript for type safety",
  //     "Improved routing and page structure for enhanced navigation",
  //     "Streamlined tax-related tools and insights for clients"
  //   ],
  //   overview:
  //     "Texology is a web application focused on withholding tax consultancy. Built with React.js and TypeScript, it facilitates smooth API integrations and improves the user experience through optimized routing and page structure.",
  //   timeline: "May 2021 - Sep 2021",
  //   role: "Frontend Developer"
  // },
  
  // {
  //   id: "e-commerce-platform",
  //   title: "E-commerce Platform",
  //   description: "Full-featured e-commerce solution with cart, checkout, and payment integration.",
  //   fullDescription:
  //     "This e-commerce platform provides businesses with everything they need to sell products online. From inventory management to secure checkout and payment processing, the platform handles the entire e-commerce workflow with a focus on security and user experience.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   detailImage: "/placeholder.svg?height=600&width=1200",
  //   demoLink: "#",
  //   githubLink: "#",
  //   technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe API"],
  //   challenges:
  //     "Creating a seamless checkout experience while integrating multiple payment providers was particularly challenging. We also needed to ensure the platform could handle high traffic during sales events.",
  //   solutions:
  //     "We implemented a modular payment gateway system that allows easy integration of different providers. The application architecture was designed with scalability in mind, using serverless functions for key operations.",
  //   features: [
  //     "Product catalog with advanced filtering",
  //     "User accounts and order history",
  //     "Secure checkout with multiple payment options",
  //     "Inventory management system",
  //     "Analytics dashboard for store owners",
  //   ],
  //   timeline: "6 months",
  //   role: "Full Stack Developer",
  // },

]

interface ProjectProps {
  id: string
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  onClick: () => void
}

function ProjectCard({ title, description, image, demoLink, githubLink, onClick }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group cursor-pointer" onClick={onClick} >
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
          onClick={(e) => e.stopPropagation()}
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        {/* <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
          onClick={(e) => e.stopPropagation()}
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button> */}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
          onClick={() => {
            console.log("clicked ")
            onClick()
          }}
        >
          View
        </Button>



      </div>
    </CardWrapper>
  )
}

function ProjectDetailView({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-xl overflow-hidden">
          <div className="relative">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={project.detailImage || "/placeholder.svg?height=600&width=1200"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              <span className="text-sm">Back</span>
            </button>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-400 mb-8">{project.fullDescription}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Project Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Role</h4>
                      <p className="text-gray-400">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Timeline</h4>
                      <p className="text-gray-400">{project.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 text-gray-400 space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Challenges & Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Challenges</h4>
                      <p className="text-gray-400">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Solutions</h4>
                      <p className="text-gray-400">{project.solutions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-black/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                      >
                        <Tag size={12} className="mr-1" /> {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} /> View Live Demo
                      </a>
                    </Button>

                    {/* <Button
                      variant="outline"
                      asChild
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} /> View Source Code
                      </a>
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  console.log("selectedProject---", selectedProject)

  return (
    <section className="py-16 relative" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest web development projects. Each project demonstrates my commitment to creating innovative and
          user-friendly digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

