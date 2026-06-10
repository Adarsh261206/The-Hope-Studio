"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
} from "@/hooks/use-scroll-reveal"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"

const attractions = [
  {
    name: "Sunrise Meditation Point",
    description: "A serene hilltop offering panoramic views — just a 10-minute walk from the retreat.",
  },
  {
    name: "Lotus Lake",
    description: "A peaceful lake surrounded by walking trails, perfect for morning reflection.",
  },
  {
    name: "The Zen Garden",
    description: "A beautifully landscaped garden with traditional meditation pavilions.",
  },
  {
    name: "Wellness Valley Market",
    description: "Local organic market with fresh produce, herbs, and artisanal wellness products.",
  },
]

export default function LocationPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal()
  const { ref: attractionsRef, isVisible: attractionsVisible } = useScrollReveal()
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[70vh] min-h-[32rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop')",
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
            Find Us
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Our Location
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Nestled in the heart of Wellness Valley, surrounded by nature&apos;s
            tranquility.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={mapVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeader
              title="Find Us Here"
              subtitle="Our Address"
              align="left"
            />
            <motion.div
              variants={fadeUp}
              className="w-full h-[20rem] rounded-lg bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 flex items-center justify-center mb-8"
            >
              <div className="text-center">
                <MapPin size={40} className="text-primary mx-auto mb-2" />
                <span className="heading-5 text-primary">Map</span>
                <p className="body-regular text-primary-600 mt-1 max-w-xs mx-auto">
                  42 Yoga Harmony Road, Riverside, CA 92501
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-lg">
              <h5 className="heading-5 text-deep mb-3 flex items-center gap-2">
                <Navigation size={18} className="text-primary" />
                Directions
              </h5>
              <p className="body-regular text-text-body mb-3">
                We are located 15 minutes from Downtown Riverside. Free
                parking is available on-site for all guests.
              </p>
              <p className="body-regular text-text-body">
                The nearest airport is Ontario International (ONT), about a
                45-minute drive from the retreat. We offer complimentary shuttle
                service for overnight guests — simply let us know your arrival
                time.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeader
              title="Contact Details"
              subtitle="Get in Touch"
              align="left"
            />
            <div className="space-y-4">
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 p-6 bg-white rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="heading-5 text-deep mb-1">Address</h5>
                  <p className="body-regular text-text-body">
                    42 Yoga Harmony Road
                    <br />
                    Riverside, CA 92501
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                custom={0.1}
                className="flex items-start gap-4 p-6 bg-white rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="heading-5 text-deep mb-1">Phone</h5>
                  <p className="body-regular text-text-body">
                    +1 (951) 782-0900
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                custom={0.2}
                className="flex items-start gap-4 p-6 bg-white rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="heading-5 text-deep mb-1">Email</h5>
                  <p className="body-regular text-text-body">
                    hello@thehopeyogawellness.com
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div
          ref={attractionsRef}
          initial="hidden"
          animate={attractionsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeader
            title="Nearby Attractions"
            subtitle="Explore the Area"
            description="Make the most of your visit with these nearby destinations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, i) => (
              <motion.div
                key={attraction.name}
                variants={fadeUp}
                custom={i * 0.1}
                className="p-6 bg-cream rounded-lg"
              >
                <h5 className="heading-5 text-deep mb-2">
                  {attraction.name}
                </h5>
                <p className="body-regular text-text-body">
                  {attraction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  )
}
