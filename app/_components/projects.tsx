import Link from "next/link"
import { ExternalLink, GitFork, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { GitHubIcon } from "@/components/icons/github-icon"

const PROJECTS = [
  {
    name: "scribble",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Zustand",
      "Socket.io",
      "Express.js",
    ],
    link: "https://scribble-delta.vercel.app",
  },
  {
    name: "shadcn-view-table",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "tanstack/react-table",
      "Supabase",
      "Drizzle",
    ],
    link: "https://shadcn-view-table.vercel.app",
  },
  {
    name: "react-skeleton-image",
    tags: ["React.js", "TypeScript", "Rollup"],
    link: "https://www.npmjs.com/package/react-skeleton-image",
  },
  {
    name: "chat-app",
    tags: ["TypeScript", "React.js", "Socket.io", "Express.js"],
    link: "https://chat-app-ecru-seven.vercel.app",
  },
]

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
}

async function getProjectByName(name: string): Promise<Project> {
  const res = await fetch(`https://api.github.com/repos/nainglinnkhant/${name}`)
  return (await res.json()) as Project
}

export async function Projects() {
  const projectsRes = await Promise.all(
    PROJECTS.map((project) => getProjectByName(project.name))
  )
  const projects = projectsRes.map((project) => {
    const currentProject = PROJECTS.find((p) => p.name === project.name)
    return { ...project, ...currentProject }
  })

  return (
    <section id="projects" className="overflow-x-hidden px-6 pb-20 sm:px-16">
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-8 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Projects
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg bg-gradient-to-br from-neutral-500/50 to-neutral-950 to-90% p-px"
            >
              <MagicCard
                wrapperClassName="rounded-lg px-4 pb-4 pt-3 bg-gradient-to-br from-neutral-900 to-neutral-950 to-90%"
                className="flex flex-col gap-2 rounded-lg"
              >
                <div className="mb-2 flex items-center justify-between">
                  <Link
                    href={project.link!}
                    target="__blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-auto p-0 text-base font-semibold hover:bg-transparent hover:underline active:bg-transparent"
                    )}
                  >
                    {project.name}
                  </Link>

                  <div className="flex items-center gap-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.html_url}
                            target="__blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "ghost" }),
                              "h-auto p-0 hover:bg-transparent active:bg-transparent"
                            )}
                          >
                            <span className="sr-only">View source code</span>
                            <GitHubIcon className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gradient-to-t from-neutral-800 to-neutral-950">
                          <p>View source code</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.link!}
                            target="__blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "ghost" }),
                              "h-auto p-0 hover:bg-transparent active:bg-transparent"
                            )}
                          >
                            <span className="sr-only">Visit website</span>
                            <ExternalLink className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gradient-to-t from-neutral-800 to-neutral-950">
                          <p>Visit website</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <p className="text-neutral-100">{project.description}</p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <Star className="size-4 text-neutral-400" />
                    <span className="text-sm font-medium text-neutral-400">
                      {project.stargazers_count}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <GitFork className="size-4 text-neutral-400" />
                    <span className="text-sm font-medium text-neutral-400">
                      {project.forks_count}
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {project.tags?.map((tag) => (
                    <div
                      key={tag}
                      className="rounded border border-neutral-700/50 bg-accent px-1.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
