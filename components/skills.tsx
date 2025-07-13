import type React from "react"
import { CardWrapper } from "./ui/card-wrapper"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </CardWrapper>
  )
}

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      skills: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      title: "Development",
      icon: <Code size={24} />,
      skills: ["Git", "GitHub", "CI/CD", "Testing", "Agile", "Scrum"],
    },
    {
      title: "Other",
      icon: <Globe size={24} />,
      skills: ["SEO", "Performance Optimization", "Accessibility", "UI/UX Design"],
    },
  ]

  return (
    <section className="py-16" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I've spent years honing my skills in web development. Here's an overview of my technical expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} icon={category.icon} />
        ))}
      </div>
    </section>
  )
}

