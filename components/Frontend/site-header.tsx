import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/ui/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/ui/main-nav"
import { MobileNav } from "@/components/ui/mobile-nav"
import { Button, buttonVariants } from "@/components/ui/button"
import { PersonIcon } from "@radix-ui/react-icons"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-4">
            <Button asChild>
              <Link href="/login">
             <PersonIcon className="mr-2 h-4 w-4" /> Login
             </Link>
           </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}