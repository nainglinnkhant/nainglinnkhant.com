"use client"

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
          "flex rounded-full border bg-background px-3.5 py-2 shadow-xl backdrop-blur-md supports-[backdrop-filter]:bg-background/70",
          !isScrolled && "bg-gradient-to-r from-neutral-900 to-background"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              className="rounded-full px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
