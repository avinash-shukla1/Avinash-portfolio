"use client"

import { motion } from "framer-motion"
import { Code, Laptop, Server, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I&apos;m a passionate Full-Stack Web Developer specializing in the MERN stack. With a strong foundation in
          both frontend and backend technologies, I create responsive, user-friendly web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                I build responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like
                Tailwind.
              </p>
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
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                I develop robust server-side applications using Node.js, Express, and implement RESTful APIs for
                seamless data flow.
              </p>
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
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p className="text-muted-foreground">
                I work with MongoDB for NoSQL database solutions and design efficient data models for web applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Integration</h3>
              <p className="text-muted-foreground">
                I combine frontend and backend technologies to create complete, end-to-end web solutions with seamless
                functionality.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <Card className="card-hover">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I started my journey in web development with a strong curiosity about how websites work. After completing
              my Bachelor of Science degree from Swami Vivekananda College and a Diploma in Computer Application from
              Makhanlal Chaturvedi University, I focused on mastering the MERN stack.
            </p>
            <p className="text-muted-foreground">
              I&apos;ve worked on various projects ranging from e-commerce platforms to real-time chat applications.
              I&apos;m constantly learning and exploring new technologies to enhance my skills. When I&apos;m not
              coding, I enjoy exploring new tech trends and contributing to open-source projects.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
