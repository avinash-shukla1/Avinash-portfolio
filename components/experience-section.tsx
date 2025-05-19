"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Education & Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic background and professional journey in the field of web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">Bachelor of Science</h4>
                  <p className="text-muted-foreground">Swami Vivekananda College, Raisen</p>
                  <p className="text-sm text-muted-foreground mt-1">2019 - 2022</p>
                  <p className="mt-2">
                    Completed my Bachelor&apos;s degree with a focus on computer science and mathematics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">Diploma of Computer Application (DCA)</h4>
                  <p className="text-muted-foreground">Makhanlal Chaturvedi University</p>
                  <p className="text-sm text-muted-foreground mt-1">2020 - 2021</p>
                  <p className="mt-2">
                    Specialized in computer applications, learning programming fundamentals, database management, and
                    web technologies.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item border-0 pb-0">
                  <h4 className="text-lg font-semibold">Full-Stack Web Development</h4>
                  <p className="text-muted-foreground">Sheryians Coding School</p>
                  <p className="text-sm text-muted-foreground mt-1">2022 - 2023</p>
                  <p className="mt-2">
                    Completed comprehensive training in MERN stack development, including frontend, backend, and
                    database technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Experience & Projects</h3>
          </div>

          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">WhatsApp Clone Project</h4>
                  <p className="text-muted-foreground">Personal Project</p>
                  <p className="text-sm text-muted-foreground mt-1">2023</p>
                  <p className="mt-2">
                    Developed a real-time messaging application using Node.js, Express, and Socket.io. Implemented user
                    authentication, real-time chat functionality, and message storage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">E-commerce Platform</h4>
                  <p className="text-muted-foreground">Personal Project</p>
                  <p className="text-sm text-muted-foreground mt-1">2023</p>
                  <p className="mt-2">
                    Built a fully functional e-commerce cart system with product management, user authentication, and
                    payment gateway integration. Used React for the frontend and Node.js/Express for the backend.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="timeline-item border-0 pb-0">
                  <h4 className="text-lg font-semibold">Seniors vs Juniors Web Development Championship</h4>
                  <p className="text-muted-foreground">Sheryians Coding School</p>
                  <p className="text-sm text-muted-foreground mt-1">2023</p>
                  <p className="mt-2">
                    Participated in the competition and had my design selected in the top 20 students. Demonstrated
                    skills in responsive design, animations, and modern web development techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
