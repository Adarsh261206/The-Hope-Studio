"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/cn"

const upcomingEvents = [
  {
    date: "Jun 15",
    title: "Sunrise Yoga Flow",
    description:
      "Begin your day with a gentle yoga flow at The Hope Yoga Wellness Studio, followed by a mindful breakfast.",
    time: "6:00 AM – 8:30 AM",
  },
  {
    date: "Jun 22",
    title: "Mindfulness & Meditation Workshop",
    description:
      "A deep-dive into meditation techniques, breathwork, and mindful living practices for all levels.",
    time: "10:00 AM – 1:00 PM",
  },
  {
    date: "Jul 5",
    title: "Ayurvedic Wellness Talk",
    description:
      "Learn about doshas, seasonal routines, and Ayurvedic nutrition from our resident holistic health expert.",
    time: "3:00 PM – 5:00 PM",
  },
  {
    date: "Jul 19",
    title: "Full Moon Sound Bath",
    description:
      "Immerse yourself in the healing vibrations of crystal bowls, gongs, and guided meditation under the full moon.",
    time: "7:00 PM – 9:00 PM",
  },
  {
    date: "Aug 2",
    title: "Weekend Wellness Intensive",
    description:
      "A two-day immersive experience combining yoga, meditation, and holistic wellness practices at The Hope Yoga Wellness Studio.",
    time: "9:00 AM Sat – 4:00 PM Sun",
  },
]

const pastEvents = [
  {
    date: "May 10",
    title: "Spring Detox Workshop",
    description:
      "A cleansing workshop at The Hope Yoga Wellness Studio focused on gentle yoga, herbal teas, and rejuvenating practices.",
  },
  {
    date: "Apr 26",
    title: "Yoga for Beginners Series",
    description:
      "An introductory series at The Hope Yoga Wellness Studio covering foundational poses, breathing techniques, and the philosophy of yoga.",
  },
  {
    date: "Apr 12",
    title: "Nature Meditation Walk",
    description:
      "A guided walking meditation connecting with nature through all five senses.",
  },
]

export default function EventsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: upcomingRef, isVisible: upcomingVisible } = useScrollReveal()
  const { ref: pastRef, isVisible: pastVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="subtitle-text text-white/80 inline-block mb-4"
          >
            Gather & Grow
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Events
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Join us at The Hope Yoga Wellness Studio for workshops, classes,
            and gatherings that nurture body, mind, and spirit.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={upcomingRef}>
          <SectionHeader
            title="Upcoming Events"
            subtitle="What's On"
            description="Reserve your spot at our upcoming wellness events and experiences."
            align="left"
          />
        </div>
        <motion.div
          ref={upcomingRef}
          initial="hidden"
          animate={upcomingVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-6"
        >
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.title}
              variants={scaleIn}
              custom={i * 0.1}
              className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-white rounded-xl border border-stroke/50 group hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary">
                  {event.date.split(" ")[0]}
                </span>
                <span className="heading-5 text-primary leading-none mt-1">
                  {event.date.split(" ")[1]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="heading-5 text-deep mb-1">{event.title}</h5>
                <p className="body-regular text-text-body mb-2">
                  {event.description}
                </p>
                <span className="body-small text-text-body/60">
                  {event.time}
                </span>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="#"
                  className={cn(
                    "group/btn inline-flex items-center gap-2 px-5 py-2",
                    "bg-primary text-white rounded-full text-sm font-sans font-medium",
                    "hover:bg-primary-hover transition-all duration-300"
                  )}
                >
                  Join
                  <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-white/90">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div ref={pastRef}>
          <SectionHeader
            title="Past Events"
            subtitle="Previous Gatherings"
            align="left"
          />
        </div>
        <motion.div
          ref={pastRef}
          initial="hidden"
          animate={pastVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.title}
              variants={scaleIn}
              custom={i * 0.1}
              className="p-6 bg-cream rounded-xl border border-stroke/30"
            >
              <span className="subtitle-text text-primary/60 inline-block mb-3">
                {event.date}
              </span>
              <h5 className="heading-5 text-deep mb-2">{event.title}</h5>
              <p className="body-regular text-text-body">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
