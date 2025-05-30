import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getPlaiceholder } from "plaiceholder"

import { SectionShell } from "@/components/section-shell"
import { buttonVariants } from "@/components/ui/button"
import { getExperiences } from "@/lib/notion"
import { cn } from "@/lib/utils"

const FALLBACK_BLUR_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAIAAABuYg/PAAAAKklEQVR4nO3NQQEAAAQEMCS/6FLw2gqsk9SXeZtkMplMJpPJZDKZTCY7tzObAciPXSbJAAAAAElFTkSuQmCC"

export async function getBlurUrl(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)
    if (!res.ok) throw new Error("Failed to fetch the image.")
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    if (error instanceof Error) {
      // biome-ignore lint/suspicious/noConsole: <explanation>
      console.error(error.message)
    }
  }
}

export async function Experience() {
  const experiences = await getExperiences()
  const blurUrls = await Promise.all(
    experiences.map((experience) => getBlurUrl(experience.companyImageUrl))
  )

  return (
    <SectionShell id="experience" className="pt-20">
      <h2 className="mb-6 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text font-bold text-transparent text-xl lg:text-2xl">
        Work experience
      </h2>

      <ul className="flex flex-col gap-5">
        {experiences.map((experience, index) => (
          <li key={experience.companyName} className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full border p-1">
                <Image
                  src={experience.companyImageUrl}
                  alt={`${experience.companyName} logo`}
                  width={36}
                  height={36}
                  placeholder="blur"
                  blurDataURL={blurUrls[index] || FALLBACK_BLUR_URL}
                  className="size-9 rounded-full border-border object-cover"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-1">
                {experience.companyLink ? (
                  <Link
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-auto gap-1.5 self-start p-0 font-semibold text-base hover:bg-transparent hover:underline active:bg-transparent"
                    )}
                  >
                    {experience.companyName}
                    <ExternalLink className="size-4" />
                  </Link>
                ) : (
                  <span className="font-semibold">
                    {experience.companyName}
                  </span>
                )}

                <p className="text-neutral-400 text-sm">
                  {experience.position}
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm">{experience.duration}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
