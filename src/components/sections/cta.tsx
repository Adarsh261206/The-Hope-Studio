"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { ArrowUpRight, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "The Hope Yoga Wellness Studio, Guwahati, Assam",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@thehopeyoga.com",
  },
  {
    icon: Clock,
    label: "Studio Hours",
    value: "Mon–Sat: 6:00 AM – 8:00 PM",
  },
]

export function CTASection() {
  return (
    <Section className="bg-deep text-white overflow-hidden relative" id="cta">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
      </div>

      <div className="relative z-[2] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-text inline-block mb-4 text-white/50">
            Begin Your Journey
          </span>
          <h2 className="heading-2 text-white">
            Take the First Step Toward a Healthier, Happier You
          </h2>
          <p className="mt-5 body-large text-white/70 leading-relaxed">
            Ready to transform your life? Book a consultation with Aakash Bora and discover a personalized wellness plan that integrates Yoga, Naturopathy, and Holistic Healing tailored to your unique needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.consultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2 bg-white text-primary rounded-full text-base font-sans font-medium hover:bg-white/90 transition-all duration-300 active:scale-[0.97]"
            >
              Book Your Consultation
              <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-primary-hover transition-all duration-300">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.enquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2 border border-white/20 text-white/80 rounded-full text-base font-sans font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {contactDetails.map((detail) => {
            const Icon = detail.icon
            return (
              <div
                key={detail.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs font-sans font-medium text-white/50 uppercase tracking-wider">
                      {detail.label}
                    </p>
                    <p className="text-sm font-sans text-white/90 mt-1">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
