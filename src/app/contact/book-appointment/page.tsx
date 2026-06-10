"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
} from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Sun,
  Heart,
} from "lucide-react"
import { openWhatsApp, buildAppointmentMessage } from "@/lib/whatsapp"

const services = [
  {
    id: "yoga",
    title: "Yoga Class",
    description: "Group or private sessions tailored to your level.",
    icon: Sparkles,
  },
  {
    id: "treatment",
    title: "Treatment",
    description: "Holistic spa and body treatments for deep relaxation.",
    icon: Sun,
  },
  {
    id: "consultation",
    title: "Consultation",
    description: "One-on-one wellness consultation with our experts.",
    icon: Heart,
  },
]

const timeSlots = [
  { day: "Mon, Jun 15", slots: ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"] },
  { day: "Tue, Jun 16", slots: ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"] },
  { day: "Wed, Jun 17", slots: ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"] },
  { day: "Thu, Jun 18", slots: ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"] },
  { day: "Fri, Jun 19", slots: ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"] },
]

const steps = ["Service", "Date & Time", "Details", "Confirm"]

export default function BookAppointmentPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()

  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [details, setDetails] = useState({ name: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const canNext = () => {
    if (step === 0) return !!selectedService
    if (step === 1) return !!selectedDay && !!selectedTime
    if (step === 2) return !!details.name && !!details.email
    return true
  }

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleSubmit = () => {
    const msg = buildAppointmentMessage(
      details.name,
      details.email,
      details.phone,
      selectedService || "",
      selectedDay || "",
      selectedTime || ""
    )
    setSubmitted(true)
    setTimeout(() => openWhatsApp(msg), 800)
  }

  if (submitted) {
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
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center px-6"
          >
            <motion.span
              variants={fadeUp}
              className="subtitle-text text-white/80 inline-block mb-4"
            >
              You&apos;re All Set
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="heading-1 text-white max-w-3xl mx-auto"
            >
              Consultation Booked
            </motion.h1>
          </motion.div>
        </section>
        <Section className="bg-cream">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center p-10 bg-white rounded-lg"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-primary" />
            </div>
            <h3 className="heading-3 text-deep mb-3">Thank You!</h3>
            <p className="body-regular text-text-body mb-2">
              Your consultation has been successfully booked. A confirmation
              email will be sent to{" "}
              <span className="text-deep font-medium">{details.email}</span>.
            </p>
            <p className="body-regular text-text-body">
              We look forward to welcoming you to The Hope Yoga Wellness Studio.
            </p>
          </motion.div>
        </Section>
      </>
    )
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
            Reserve Your Session
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Book Consultation
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Choose your service, pick a time, and reserve your spot.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="max-w-2xl mx-auto">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-sans font-medium transition-all duration-300",
                    i < step
                      ? "bg-primary text-white"
                      : i === step
                        ? "bg-primary text-white"
                        : "bg-white text-text-body border border-stroke"
                  )}
                >
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                <span
                  className={cn(
                    "body-regular hidden sm:inline transition-colors duration-300",
                    i <= step ? "text-deep font-medium" : "text-text-body"
                  )}
                >
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-8 h-px mx-1 transition-colors duration-300",
                      i < step ? "bg-primary" : "bg-stroke"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Select Service */}
              {step === 0 && (
                <div className="space-y-4">
                  <h3 className="heading-3 text-deep text-center mb-2">
                    Select a Service
                  </h3>
                  <p className="body-regular text-text-body text-center mb-8 max-w-md mx-auto">
                    Choose the type of session that best suits your needs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon
                      const selected = selectedService === service.id
                      return (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={cn(
                            "p-6 rounded-lg text-left transition-all duration-300",
                            selected
                              ? "bg-primary text-white ring-2 ring-primary"
                              : "bg-white text-text-body hover:ring-2 hover:ring-primary/30"
                          )}
                        >
                          <div
                            className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                              selected
                                ? "bg-white/20"
                                : "bg-primary/10"
                            )}
                          >
                            <Icon
                              size={24}
                              className={
                                selected ? "text-white" : "text-primary"
                              }
                            />
                          </div>
                          <h5
                            className={cn(
                              "heading-5 mb-1",
                              selected ? "text-white" : "text-deep"
                            )}
                          >
                            {service.title}
                          </h5>
                          <p className="body-regular">
                            {service.description}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 1 && (
                <div>
                  <h3 className="heading-3 text-deep text-center mb-2">
                    Select Date & Time
                  </h3>
                  <p className="body-regular text-text-body text-center mb-8 max-w-md mx-auto">
                    Pick a day and time that works for you.
                  </p>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {timeSlots.map((d) => (
                        <button
                          key={d.day}
                          onClick={() => {
                            setSelectedDay(d.day)
                            setSelectedTime(null)
                          }}
                          className={cn(
                            "p-4 rounded-lg text-center transition-all duration-300",
                            selectedDay === d.day
                              ? "bg-primary text-white ring-2 ring-primary"
                              : "bg-white text-text-body hover:ring-2 hover:ring-primary/30"
                          )}
                        >
                          <span className="body-regular font-medium block">
                            {d.day}
                          </span>
                        </button>
                      ))}
                    </div>
                    {selectedDay && (
                      <div>
                        <p className="body-regular text-deep font-medium mb-3">
                          Available Times
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {timeSlots
                            .find((d) => d.day === selectedDay)
                            ?.slots.map((t) => (
                              <button
                                key={t}
                                onClick={() => setSelectedTime(t)}
                                className={cn(
                                  "px-5 py-2.5 rounded-lg text-sm font-sans font-medium transition-all duration-300",
                                  selectedTime === t
                                    ? "bg-primary text-white"
                                    : "bg-white text-text-body border border-stroke hover:border-primary/50"
                                )}
                              >
                                {t}
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Your Details */}
              {step === 2 && (
                <div>
                  <h3 className="heading-3 text-deep text-center mb-2">
                    Your Details
                  </h3>
                  <p className="body-regular text-text-body text-center mb-8 max-w-md mx-auto">
                    Let us know who you are so we can confirm your booking.
                  </p>
                  <div className="max-w-md mx-auto space-y-5">
                    <div>
                      <label className="block body-regular text-deep font-medium mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        value={details.name}
                        onChange={(e) =>
                          setDetails({ ...details, name: e.target.value })
                        }
                        required
                        className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block body-regular text-deep font-medium mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={details.email}
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
                        required
                        className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block body-regular text-deep font-medium mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={details.phone}
                        onChange={(e) =>
                          setDetails({ ...details, phone: e.target.value })
                        }
                        className="w-full px-5 py-3.5 bg-white rounded-lg border border-stroke/60 text-deep body-regular focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-body/50"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 3 && (
                <div>
                  <h3 className="heading-3 text-deep text-center mb-2">
                    Confirm Booking
                  </h3>
                  <p className="body-regular text-text-body text-center mb-8 max-w-md mx-auto">
                    Please review your consultation details before submitting.
                  </p>
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">
                        Service
                      </span>
                      <span className="body-regular text-deep font-medium capitalize">
                        {selectedService}
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">Day</span>
                      <span className="body-regular text-deep font-medium">
                        {selectedDay}
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">Time</span>
                      <span className="body-regular text-deep font-medium">
                        {selectedTime}
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">Name</span>
                      <span className="body-regular text-deep font-medium">
                        {details.name}
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">Email</span>
                      <span className="body-regular text-deep font-medium">
                        {details.email}
                      </span>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between">
                      <span className="body-regular text-text-body">Phone</span>
                      <span className="body-regular text-deep font-medium">
                        {details.phone || "—"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={cn(
                "group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-sans font-medium transition-all duration-300",
                step === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              )}
            >
              <ChevronLeft size={18} />
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canNext()}
                className={cn(
                  "group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-sans font-medium transition-all duration-300",
                  canNext()
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "opacity-30 cursor-not-allowed"
                )}
              >
                Next
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-sans font-medium bg-primary text-white hover:bg-primary-hover transition-all duration-300"
              >
                Confirm Booking
                <Check size={18} />
              </button>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
