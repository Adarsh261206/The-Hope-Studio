import type { NavItem, MegaMenuSection } from "@/types/navigation"

function menu(title: string, description: string, items: { label: string; href: string }[]): MegaMenuSection {
  return { title, description, items }
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    megaMenu: menu(
      "About The Hope",
      "Learn about our journey, mission, and the holistic wellness vision founded by Aakash Bora.",
      [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Mission", href: "/about/mission" },
        { label: "Founder", href: "/about/founder" },
        { label: "Certifications", href: "/about/certifications" },
      ]
    ),
  },
  {
    label: "Yoga",
    href: "/yoga",
    dropdown: [
      { label: "Meditation Yoga", href: "/yoga/meditation" },
      { label: "Power Yoga", href: "/yoga/power" },
      { label: "Ashtanga Yoga", href: "/yoga/ashtanga" },
      { label: "Vinyasa Yoga", href: "/yoga/vinyasa" },
      { label: "Corporate Yoga Programs", href: "/corporate-wellness" },
    ],
  },
  {
    label: "Wellness",
    href: "/treatments",
    dropdown: [
      { label: "Treatments", href: "/treatments" },
      { label: "Doctors & Teachers", href: "/experts" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blog",
    dropdown: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Events", href: "/resources/events" },
      { label: "Products", href: "/resources/products" },
    ],
  },
  { label: "Contact", href: "/contact" },
]
