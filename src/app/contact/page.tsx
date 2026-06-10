"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
} from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { openWhatsApp, buildContactMessage } from "@/lib/whatsapp"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "42 Yoga Harmony Road, Riverside, CA 92501",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (951) 782-0900",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@thehopeyogawellness.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 6:00 AM - 8:00 PM",
  },
]

export default function ContactPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: formRef, isVisible: formVisible } = useScrollReveal()
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = buildContactMessage(form.name, form.email, form.phone, form.message)
    setSubmitted(true)
    setTimeout(() => openWhatsApp(msg), 800)
  }

  return (
    <>
      <section className="relative h-[70vh] min-h-[32rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
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
            Connect With Us
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            We&apos;d love to hear from you. Reach out and start your wellness
            journey.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeader
              title="Send a Message"
              subtitle="Contact Form"
              align="left"
            />
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 bg-white rounded-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h4 className="heading-4 text-deep mb-2">Thank You!</h4>
                <p className="body-regular text-text-body">
                  Your message has been sent. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeUp}>
                  <label className="block body-regular text-deep font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block body-regular text-deep font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block body-regular text-deep font-medium mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block body-regular text-deep font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className={cn(
                      "group inline-flex items-center gap-2 px-8 py-3.5",
                      "bg-primary text-white rounded-full text-base font-sans font-medium",
                      "hover:bg-primary-hover transition-all duration-300"
                    )}
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          <motion.div
            ref={infoRef}
            initial="hidden"
            animate={infoVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeader
              title="Contact Information"
              subtitle="Reach Us"
              align="left"
            />
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i * 0.1}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="heading-5 text-deep mb-1">
                        {item.title}
                      </h5>
                      <p className="body-regular text-text-body">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
