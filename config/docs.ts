
import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Register Clinic",
      href: "/join/clinics",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  sidebarNav: [
  ],
}
