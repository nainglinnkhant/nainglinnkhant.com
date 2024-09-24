import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons/github-icon"
import { LinkedinIcon } from "@/components/icons/linkedin-icon"
import { XLogoIcon } from "@/components/icons/x-logo-icon"
import { SectionShell } from "@/components/section-shell"

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/nainglinnkhant",
    icon: GitHubIcon,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/nainglinnkhant",
    icon: LinkedinIcon,
  },
  { name: "X", link: "https://x.com/nainglk", icon: XLogoIcon },
]

export function Contact() {
  return (
    <SectionShell id="contact" className="flex flex-col gap-6 py-32">
      <h2 className="bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-center text-xl font-bold text-transparent lg:text-2xl">
        Contact
      </h2>

      <p className="text-center text-neutral-100">
        Wanna know more about my work? Got any questions? <br /> Or just want to
        say hi? Go ahead.
      </p>

      <Link
        aria-label="Contact me via email"
        href="mailto:nainglinnkhnt@gmail.com"
        className={cn(buttonVariants(), "self-center rounded-full")}
      >
        Contact
      </Link>

      <ul
        aria-label="Social and contact links"
        className="mt-4 flex items-center gap-8 self-center"
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
