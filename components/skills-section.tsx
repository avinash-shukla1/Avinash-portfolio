"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Server, Layers, Cpu, PenTool, Wrench } from "lucide-react"

const frontendSkills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "React.js", level: "Expert" },
  { name: "Next.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "GSAP", level: "Advanced" },
]

const backendSkills = [
  { name: "Node.js", level: "Expert" },
  { name: "Express.js", level: "Advanced" },
  { name: "MongoDB", level: "Expert" },
  { name: "RESTful APIs", level: "Advanced" },
  { name: "Socket.io", level: "Advanced" },
  { name: "Mongoose", level: "Advanced" },
  { name: "Passport.js", level: "Proficient" },
]

const otherSkills = [
  { name: "Git & GitHub", level: "Advanced" },
  { name: "VS Code", level: "Expert" },
  { name: "Postman", level: "Expert" },
  { name: "Payment Gateway Integration", level: "Advanced" },
  { name: "Google Auth", level: "Advanced" },
  { name: "Responsive Design", level: "Expert" },
  { name: "UI/UX Principles", level: "Advanced" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I&apos;ve developed expertise in various technologies across the full stack, with a focus on the MERN
          (MongoDB, Express, React, Node.js) ecosystem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2 p-2 rounded-lg transition-all duration-300 hover:bg-primary/5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        skill.level === "Expert" 
                          ? "bg-green-500/10 text-green-500"
                          : skill.level === "Advanced"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <div className="space-y-4">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <Code2 className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <Layers className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">React.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <Cpu className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <Database className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <PenTool className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Tailwind</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <Globe className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Next.js</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
