import Marquee from "@/components/ui/marquee"

import { SKILLS } from "./skills"

export function SkillsMarquee() {
  return (
    <div className="relative mt-8 flex flex-col gap-3 overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-900 p-6 md:shadow-xl">
      <Marquee pauseOnHover className="[--gap:1.5rem]">
        {SKILLS.map((skill) => {
          const Icon = skill.icon

          return (
            <MarqueeItem key={skill.name}>
              <Icon className="size-7" />
            </MarqueeItem>
          )
        })}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--gap:1.5rem]">
        {SKILLS.map((skill) => {
          const Icon = skill.icon

          return (
            <MarqueeItem key={skill.name}>
              <Icon className="size-7" />
            </MarqueeItem>
          )
        })}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}

function MarqueeItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 to-90%">
      {children}
    </div>
  )
}
