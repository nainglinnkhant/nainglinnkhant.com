import { ExternalLink, GitFork, Star } from "lucide-react"
import Link from "next/link"

import { GitHubIcon } from "@/components/icons/github-icon"
import { SectionShell } from "@/components/section-shell"
import { buttonVariants } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

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
    link: "https://scribble.nainglinnkhant.com",
    description: (
      <>
        A drawing app which allows multiple users to draw on the same canvas in
        real-time.{" "}
        <Link
          href="https://www.youtube.com/@joshtriedcoding"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 decoration-muted-foreground underline-offset-[2.5px] hover:text-white hover:decoration-foreground"
        >
          @joshtriedcoding
        </Link>{" "}
        made a video about it and you can watch the video{" "}
        <Link
          aria-label="Video about scribble"
          href="https://www.youtube.com/watch?v=p-QgenD1Yrc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 decoration-muted-foreground underline-offset-[2.5px] hover:text-white hover:decoration-foreground"
        >
          here
        </Link>
        .
      </>
    ),
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
    link: "https://view-table.nainglinnkhant.com",
  },
  {
    name: "lingua-time",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "shadcn/ui"],
    link: "https://linguatime.nainglinnkhant.com",
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
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const currentProject = PROJECTS.find((p) => p.name === project.name)!
    return { ...project, ...currentProject }
  })

  return (
    <SectionShell id="projects" className="pt-20">
      <h2 className="mb-8 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text font-bold text-transparent text-xl lg:text-2xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-gradient-to-br from-neutral-500/50 to-90% to-neutral-950 p-px"
          >
            <MagicCard
              wrapperClassName="rounded-lg px-4 pb-4 pt-3 bg-gradient-to-br from-neutral-900 to-neutral-950 to-90%"
              className="flex flex-col gap-2 rounded-lg"
            >
              <div className="mb-2 flex items-center justify-between">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-auto p-0 font-semibold text-base hover:bg-transparent hover:underline active:bg-transparent"
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "tap-target h-auto p-0 hover:bg-transparent active:bg-transparent"
                          )}
                        >
                          <span className="sr-only">
                            View source code of {project.name}
                          </span>
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
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "tap-target h-auto p-0 hover:bg-transparent active:bg-transparent"
                          )}
                        >
                          <span className="sr-only">
                            Visit website of {project.name}
                          </span>
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
                  <span
                    aria-hidden="true"
                    className="font-medium text-neutral-400 text-sm"
                  >
                    {project.stargazers_count}
                  </span>
                  <span className="sr-only">
                    {`${project.stargazers_count} stars`}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <GitFork className="size-4 text-neutral-400" />
                  <span
                    aria-hidden="true"
                    className="font-medium text-neutral-400 text-sm"
                  >
                    {project.forks_count}
                  </span>
                  <span className="sr-only">
                    {`${project.forks_count} forks`}
                  </span>
                </div>
              </div>

              <ul
                aria-label="Tech stack"
                className="mt-2 flex flex-wrap items-center gap-2"
              >
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-neutral-700/50 bg-accent px-1.5 py-0.5 font-medium text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </MagicCard>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
