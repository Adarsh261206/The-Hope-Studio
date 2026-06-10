"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, CheckCircle, Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"
import { openWhatsApp, buildConsultationMessage } from "@/lib/whatsapp"

const services = [
  "Yoga Consultation",
  "Naturopathy Consultation",
  "Therapeutic Massage",
  "Holistic Wellness Program",
  "Corporate Wellness Program",
  "Sound Therapy Session",
]

export default function BookConsultationPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const data = useRef({ name: "", phone: "", email: "", service: "", date: "", time: "", type: "in-person", notes: "" })

  const captureStep1 = () => {
    const name = (document.getElementById("consult-name") as HTMLInputElement)?.value || ""
    const phone = (document.getElementById("consult-phone") as HTMLInputElement)?.value || ""
    const email = (document.getElementById("consult-email") as HTMLInputElement)?.value || ""
    data.current = { ...data.current, name, phone, email }
  }

  const captureStep2 = () => {
    const service = (document.getElementById("consult-service") as HTMLSelectElement)?.value || ""
    const date = (document.getElementById("consult-date") as HTMLInputElement)?.value || ""
    const time = (document.getElementById("consult-time") as HTMLSelectElement)?.value || ""
    const type = (document.getElementById("consult-type") as HTMLSelectElement)?.value || "in-person"
    const notes = (document.getElementById("consult-notes") as HTMLTextAreaElement)?.value || ""
    data.current = { ...data.current, service, date, time, type, notes }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const d = data.current
    const msg = buildConsultationMessage(d.name, d.phone, d.email, d.service, d.date, d.time, d.type, d.notes)
    setSubmitted(true)
    setTimeout(() => openWhatsApp(msg), 800)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cream px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h1 className="heading-2 text-deep">Consultation Booked</h1>
          <p className="mt-4 body-large text-text-body">
            Your consultation has been successfully booked. We will reach out within 24 hours to confirm your appointment.
          </p>
          <p className="mt-2 text-sm text-text-body font-sans">
            From all of us at The Hope Yoga Wellness Studio — thank you for taking this step toward wellness.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 mt-8"
          >
            Back to Home
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-cream">
      <div className="container-main py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="subtitle-text inline-block mb-4">Get Started</span>
            <h1 className="heading-1 text-deep">Book a Consultation</h1>
            <p className="mt-4 body-large text-text-body max-w-lg mx-auto">
              Take the first step toward holistic wellness. Fill in your details and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-sans font-semibold transition-all duration-400 ${
                    step >= s
                      ? "bg-primary text-white"
                      : "bg-white text-text-body border border-stroke"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-[2px] transition-all duration-400 ${
                      step > s ? "bg-primary" : "bg-stroke"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-stroke shadow-soft">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="heading-4 text-deep">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Full Name *</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <input id="consult-name" type="text" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <input id="consult-phone" type="tel" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <input id="consult-email" type="email" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => { captureStep1(); setStep(2) }}
                      className="px-6 py-3 bg-primary text-white rounded-full text-sm font-sans font-medium hover:bg-primary-hover transition-all duration-300"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="heading-4 text-deep">Consultation Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Service Interested In *</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <select id="consult-service" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors appearance-none bg-white">
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Preferred Date *</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <input id="consult-date" type="date" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Preferred Time *</label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <select id="consult-time" required className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors appearance-none bg-white">
                          <option value="">Select time</option>
                          <option value="morning">Morning (6:00 – 10:00)</option>
                          <option value="midday">Midday (10:00 – 14:00)</option>
                          <option value="afternoon">Afternoon (14:00 – 17:00)</option>
                          <option value="evening">Evening (17:00 – 20:00)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Consultation Type</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-body" />
                        <select id="consult-type" className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors appearance-none bg-white">
                          <option value="in-person">In-Person</option>
                          <option value="online">Online / Video Call</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-sans font-medium text-deep mb-2">Additional Notes</label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-3 top-3 text-text-body" />
                        <textarea id="consult-notes" rows={3} className="w-full pl-10 pr-4 py-3 border border-stroke rounded-lg text-sm font-sans text-deep focus:outline-none focus:border-primary transition-colors" placeholder="Any specific concerns or preferences..." />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-stroke text-deep rounded-full text-sm font-sans font-medium hover:bg-cream transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => { captureStep2(); setStep(3) }}
                      className="px-6 py-3 bg-primary text-white rounded-full text-sm font-sans font-medium hover:bg-primary-hover transition-all duration-300"
                    >
                      Review Details
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="heading-4 text-deep">Review Your Consultation Details</h3>
                  <div className="bg-cream rounded-xl p-6 space-y-4">
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-text-body">Service</span>
                      <span className="text-deep font-medium">{data.current.service || "Not specified"}</span>
                    </div>
                    <div className="border-t border-stroke" />
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-text-body">Date</span>
                      <span className="text-deep font-medium">{data.current.date || "To be confirmed"}</span>
                    </div>
                    <div className="border-t border-stroke" />
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-text-body">Mode</span>
                      <span className="text-deep font-medium">{data.current.type === "online" ? "Online / Video Call" : "In-Person"}</span>
                    </div>
                  </div>
                  <p className="text-xs font-sans text-text-body">
                    By submitting, you agree to be contacted regarding your consultation request. We respect your privacy and will never share your information.
                  </p>
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-stroke text-deep rounded-full text-sm font-sans font-medium hover:bg-cream transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-primary text-white rounded-full text-sm font-sans font-medium hover:bg-primary-hover transition-all duration-300"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
