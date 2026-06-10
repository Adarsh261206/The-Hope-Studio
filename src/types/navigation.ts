export interface NavDropdownItem {
  label: string
  href: string
}

export interface MegaMenuSection {
  title: string
  description: string
  items: NavDropdownItem[]
}

export interface NavItem {
  label: string
  href: string
  megaMenu?: MegaMenuSection
  dropdown?: NavDropdownItem[]
}

export interface NavbarProps {
  transparent?: boolean
}
