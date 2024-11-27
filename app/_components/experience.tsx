import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getPlaiceholder } from "plaiceholder"

import { getExperiences } from "@/lib/notion"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionShell } from "@/components/section-shell"

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
      console.log(error.message)
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
      <h2 className="mb-6 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
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
                  className="size-9 rounded-full border-border"
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
                      "h-auto gap-1.5 self-start p-0 text-base font-semibold hover:bg-transparent hover:underline active:bg-transparent"
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

                <p className="text-sm text-neutral-400">
                  {experience.position}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400">{experience.duration}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
