"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The Hope Yoga Wellness Studio has completely transformed my life. After struggling with chronic stress and anxiety for years, Aakash's personalized yoga and meditation programs helped me find peace and balance. I feel stronger, calmer, and more connected to myself than ever before.",
    name: "Priya Sharma",
    role: "Yoga Practitioner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    initials: "PS",
  },
  {
    quote: "The corporate wellness program at our office has been a game-changer. Employee morale, focus, and productivity have all improved significantly. Aakash's approach is practical, engaging, and truly effective. Highly recommend for any organization!",
    name: "Rajesh Mehta",
    role: "HR Director, TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    initials: "RM",
  },
  {
    quote: "I've tried many massage therapies over the years, but nothing compares to the therapeutic massage at The Hope. The Deep Tissue and Aromatherapy treatments have relieved my chronic back pain in ways I never thought possible. True healing happens here.",
    name: "Ananya Patel",
    role: "Wellness Seeker",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    initials: "AP",
  },
  {
    quote: "Aakash Bora's approach to holistic wellness is truly unique. The combination of Yogic practices, Naturopathy, and therapeutic treatments creates a complete wellness experience. I have recommended The Hope to my entire family and extended circle. Truly life changing!",
    name: "Vikram Singh",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    initials: "VS",
  },
  {
    quote: "The sound therapy session was a revelation. I felt layers of stress melting away as the vibrations resonated through my body. The Shirodhara treatment left me in a state of deep relaxation I have never experienced before. The Hope is a sanctuary for the soul.",
    name: "Neha Gupta",
    role: "Holistic Therapy Client",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    initials: "NG",
  },
  {
    quote: "I was dealing with severe burnout and sleep issues when I found The Hope. Through their Stress Management Yoga and personalized wellness plan, I have regained my energy and peace of mind. Aakash is a wonderful guide on this wellness journey.",
    name: "Arun Kumar",
    role: "Stress Management Program",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    initials: "AK",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(goNext, 5000)
    return () => clearInterval(id)
  }, [goNext, isPaused])

  const t = testimonials[current]

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <Section className="bg-deep text-white" id="testimonials">
      <div className="text-center mb-12">
        <span className="subtitle-text inline-block mb-4 text-white/50">Testimonials</span>
        <h2 className="heading-2 text-white max-w-[30rem] mx-auto">
          Real Stories from Our Community
        </h2>
      </div>

      <div
        className="relative max-w-[40rem] mx-auto text-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Quote size={40} className="text-primary/30 mx-auto mb-6" strokeWidth={1} />
        </motion.div>

        <div className="relative h-[15rem] sm:h-[13rem] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="body-large text-white/80 leading-relaxed italic"
            >
              &ldquo;{t.quote}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div
            className="w-12 h-12 rounded-full bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url('${t.image}')` }}
          />
          <div className="text-left">
            <p className="text-sm font-sans font-semibold text-white">{t.name}</p>
            <p className="text-xs text-white/50 font-sans">{t.role}</p>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.button
            onClick={goPrev}
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-300 flex items-center justify-center text-sm"
          >
            ←
          </motion.button>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-primary w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
          <motion.button
            onClick={goNext}
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-300 flex items-center justify-center text-sm"
          >
            →
          </motion.button>
        </div>
      </div>
    </Section>
  )
}
