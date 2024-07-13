import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { getExperiences } from "@/lib/notion"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export async function Experience() {
  const experiences = await getExperiences()

  return (
    <section id="experience" className="overflow-x-hidden px-6 pb-20 sm:px-16">
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-6 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          Work experience
        </h3>

        <div className="flex flex-col gap-5">
          {experiences.map((experience) => (
            <div key={experience.companyName} className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full border p-1">
                  <Image
                    src={experience.companyImageUrl}
                    alt={experience.companyName}
                    width={36}
                    height={36}
                    className="size-9 rounded-full border-border"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {experience.companyLink ? (
                    <Link
                      href={experience.companyLink}
                      target="__blank"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
