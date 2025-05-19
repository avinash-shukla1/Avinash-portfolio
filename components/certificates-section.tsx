"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Certificates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and achievements that validate my skills and expertise.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12"
      >
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jji3442aOv8lJIqCGX4D3IE8YWzWHg.png"
                        alt="React JS & Next JS Certificate"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Web Development Certificates</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Certificates from Sheryians Coding School for React JS & Next JS, Back-End Web Development, and
                        Front-End Web Development training programs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EIUc5N14YK1i5iwxmLsM1HRe7GIKx8.png"
                        alt="Certificate of Excellence"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Certificate of Excellence</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Recognition for outstanding performance and dedication to learning web development skills.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full bg-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          Seniors vs Juniors Web Development Championship 2023
                        </h3>
                        <p className="text-muted-foreground">
                          Recognized in the top 20 students for exceptional web design and development skills.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <Card className="max-w-2xl mx-auto card-hover">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Participated in Sheryians Coding School&apos;s Senior vs Junior competition, with design selected in
                  the top 20 students.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Certificate in Full-Stack Web Development (Front-end, Back-end, React).</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Developed multiple full-stack applications with real-time functionality.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
