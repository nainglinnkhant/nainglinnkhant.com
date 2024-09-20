import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionShell } from "@/components/section-shell"

import { SOCIAL_LINKS } from "./contact"

export function About() {
  return (
    <SectionShell className="flex flex-col gap-4">
      <h3 className="mb-2 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        About me
      </h3>
      <p>
        A dedicated software engineer with an inquisitive, detail-oriented,
        open-minded, and responsible mindset. My excitement lies in trying out
        new things and applying them in practical situations. Throughout my
        career, I&apos;ve worked on various projects and delivered high-quality,
        performant, appealing, accessible, and scalable websites and software.
      </p>
      <p>
        My core expertise is in frontend development, where I ensure
        accessibility, scalability, and performance by strictly adhering to best
        practices and utilizing efficient tools. Additionally, I have a fair
        share of backend and database knowledge and have worked with PostgreSQL,
        MySQL, and NestJS. I love building open-source software in my free time.
      </p>
      <p>You can find me on:</p>
      <ul
        aria-label="Social and contact links"
        className="flex items-center gap-4 pb-1"
      >
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon

          return (
            <li key={link.name}>
              <Link
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "size-auto rounded-full hover:bg-transparent active:bg-transparent"
                )}
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="size-5 text-neutral-300 transition-colors duration-200 hover:text-white" />
              </Link>
            </li>
          )
        })}
      </ul>
    </SectionShell>
  )
}
