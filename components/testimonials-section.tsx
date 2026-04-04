"use client"

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@nextui-org/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

const testimonials: Testimonial[] = [
  {
    quote: "During Ahmed's time with us, he completed all assigned tasks and showed initiative to take on additional responsibilities. I found his overall performance to be good.",
    name: "Indresh Saluja",
    designation: "Chief Operations Officer",
    src: "/assets/images/indresh.jpeg",
  },
  {
    quote: "I recommend Ahmed to any prospective opportunities as he would be a valuable member of the team.",
    name: "Washington Gichuru",
    designation: "Head Of Information Technology at Acorn",
    src: "/assets/images/washington.jpeg",
  },
  {
    quote: "During Ahmed's time with us, he completed all assigned tasks and showed initiative to take on additional responsibilities. I found his overall performance to be good.",
    name: "John Musembi",
    designation: "Chief Operations Officer Wesnet",
    src: "/assets/images/wesnet.webp",
  },
]

export const TestimonialsSection = ({
  autoplay = true,
}: {
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, handleNext])

  const getRotateY = (index: number) => {
    // Use a deterministic pattern based on index
    const rotations = [8, -8, 6, -6, 4, -4]
    return rotations[index % rotations.length]
  }

  return (
    <section className="relative px-6 py-24 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="relative mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          What People Say
        </h2>
        <p className="text-muted-foreground">
          Testimonials from clients and colleagues I've worked with
        </p>
      </div>
      
      <div className="max-w-sm sm:max-w-none md:max-w-4xl mx-auto antialiased">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: getRotateY(index),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : getRotateY(index),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: getRotateY(index),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      fill
                      className="rounded-3xl object-cover object-center"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-xl font-bold text-primary">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-muted-foreground">{testimonials[active].designation}</p>
              <motion.p className="mt-8 text-foreground leading-relaxed">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex justify-center sm:justify-start gap-4 pt-12 md:pt-0">
              <Button
                onPress={handlePrev}
                aria-label="Previous testimonial"
                isIconOnly
                className="group/button bg-primary text-primary-foreground"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="group-hover/button:rotate-12 transition-transform duration-300"
                />
              </Button>
              <Button
                isIconOnly
                onPress={handleNext}
                aria-label="Next testimonial"
                className="group/button bg-primary text-primary-foreground"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover/button:-rotate-12 transition-transform duration-300"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
