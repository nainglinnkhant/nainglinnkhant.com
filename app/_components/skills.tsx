import { DrizzleIcon } from "@/components/icons/drizzle-icon"
import { ExpressJsIcon } from "@/components/icons/expressjs-icon"
import { FirebaseIcon } from "@/components/icons/firebase-icon"
import { MySQLIcon } from "@/components/icons/mysql-icon"
import { NestJSIcon } from "@/components/icons/nestjs-icon"
import { NextJsIcon } from "@/components/icons/nextjs-icon"
import { NodeJsIcon } from "@/components/icons/nodejs-icon"
import { PostgreSQLIcon } from "@/components/icons/postgresql-icon"
import { PrismaIcon } from "@/components/icons/prisma-icon"
import { ReactJsIcon } from "@/components/icons/reactjs-icon"
import { SupabaseIcon } from "@/components/icons/supabase-icon"
import { TailwindCSSIcon } from "@/components/icons/tailwindcss-icon"
import { TypeScriptIcon } from "@/components/icons/typescript-icon"
import { SectionShell } from "@/components/section-shell"

import { SkillsMarquee } from "./skills-marquee"

export const SKILLS = [
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Next.js",
    icon: NextJsIcon,
  },
  {
    name: "React.js",
    icon: ReactJsIcon,
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSSIcon,
  },
  {
    name: "Node.js",
    icon: NodeJsIcon,
  },
  {
    name: "Express.js",
    icon: ExpressJsIcon,
  },
  {
    name: "NestJS",
    icon: NestJSIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    name: "Supabase",
    icon: SupabaseIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Drizzle",
    icon: DrizzleIcon,
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
  },
]

export function Skills() {
  return (
    <SectionShell id="skills" className="pb-32">
      <h3 className="mb-8 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        Skills
      </h3>

      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {SKILLS.map((skill) => {
          const Icon = skill.icon

          return (
            <li
              key={skill.name}
              className="flex select-none items-center gap-2 text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              <Icon className="size-4" />
              <span className="font-semibold">{skill.name}</span>
            </li>
          )
        })}
      </ul>

      <SkillsMarquee />
    </SectionShell>
  )
}
