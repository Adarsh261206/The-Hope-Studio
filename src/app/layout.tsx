import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thehopeyoga.com"),
  title: {
    default: "The Hope Yoga Wellness Studio | Yoga, Naturopathy & Holistic Healing",
    template: "%s | The Hope Yoga Wellness Studio",
  },
  description:
    "Transform your health, wellness, and lifestyle naturally through Yoga, Naturopathy, Therapeutic Healing, Wellness Programs, and Holistic Treatments.",
  keywords: [
    "Yoga Wellness Studio",
    "Yoga Classes",
    "Meditation",
    "Naturopathy",
    "Therapeutic Massage",
    "Holistic Healing",
    "Corporate Wellness",
    "Stress Management",
    "Wellness Programs",
    "Aakash Bora",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "The Hope Yoga Wellness Studio | Yoga, Naturopathy & Holistic Healing",
    description:
      "Transform your health, wellness, and lifestyle naturally through Yoga, Naturopathy, Therapeutic Healing, Wellness Programs, and Holistic Treatments.",
    url: "https://thehopeyoga.com",
    siteName: "The Hope Yoga Wellness Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Hope Yoga Wellness Studio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hope Yoga Wellness Studio",
    description:
      "Transform your health, wellness, and lifestyle naturally through Yoga, Naturopathy, Therapeutic Healing, Wellness Programs, and Holistic Treatments.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Hope Yoga Wellness Studio",
              founder: {
                "@type": "Person",
                name: "Aakash Bora",
              },
              description:
                "Transform your health, wellness, and lifestyle naturally through Yoga, Naturopathy, Therapeutic Healing, Wellness Programs, and Holistic Treatments.",
              industry: "Yoga & Wellness",
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
