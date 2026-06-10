export const WHATSAPP_NUMBER = "918169187688"

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function openWhatsApp(message: string): void {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer")
}

export function buildConsultationMessage(
  name: string,
  phone: string,
  email: string,
  service: string,
  date: string,
  time: string,
  type: string,
  notes: string
): string {
  return [
    "New Consultation Request",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Preferred Date: ${date}`,
    `Preferred Time: ${time}`,
    `Type: ${type}`,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n")
}

export function buildAppointmentMessage(
  name: string,
  email: string,
  phone: string,
  service: string,
  day: string,
  time: string
): string {
  return [
    "New Appointment Request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Day: ${day}`,
    `Time: ${time}`,
  ].join("\n")
}

export function buildContactMessage(
  name: string,
  email: string,
  phone: string,
  message: string
): string {
  return [
    "New Contact Enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Message: ${message}`,
  ].join("\n")
}

export const WHATSAPP_MESSAGES = {
  appointment:
    "Hello The Hope Yoga Wellness Studio,\nI would like to book an appointment.",
  enquiry:
    "Hello The Hope Yoga Wellness Studio,\nI would like to know more about your services.",
  treatment: (name: string) =>
    `Hello,\nI would like more information about ${name}.`,
  yoga:
    "Hello,\nI would like information about your Yoga Programs.",
  consultation:
    "Hello The Hope Yoga Wellness Studio,\nI would like to book a consultation.",
} as const
