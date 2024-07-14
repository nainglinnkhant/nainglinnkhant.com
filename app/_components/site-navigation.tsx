"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { useIsScrolled } from "@/hooks/use-is-scrolled"

const NAV_ITEMS = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Skills", link: "#skills" },
]

export function SiteNavigation() {
  const { isScrolled } = useIsScrolled()

  return (
    <nav
      aria-label="Site navigation"
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <ul
        className={cn(
          "flex items-center gap-6 rounded-full border bg-background px-[26px] py-2 shadow-xl backdrop-blur-md supports-[backdrop-filter]:bg-background/40",
          !isScrolled && "bg-gradient-to-r from-neutral-900 to-background"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="rounded-sm text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
