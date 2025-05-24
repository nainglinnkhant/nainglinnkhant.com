import Link from "next/link"

import BlurFade from "@/components/ui/blur-fade"
import { Button, buttonVariants } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { GlobeDialog } from "./globe-dialog"

const BLUR_FADE_DELAY = 0.04

export function Landing() {
  return (
    <section id="about" className="relative overflow-hidden">
      <Spotlight
        className="md:-top-20 lg:-top-0 xl:-top-20 md:left-20 lg:left-[50] xl:left-60"
        fill="white"
      />

      <div className="mx-auto max-w-screen-lg overflow-x-hidden px-6 sm:px-16">
        <div className="flex h-svh w-full flex-col justify-center">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h1 className="text-center font-bold text-neutral-200 text-xl sm:text-left lg:text-2xl">
              Hello, I&apos;m Naing Linn Khant.
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} className="mt-4 mb-8">
            <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl text-transparent sm:text-left md:text-6xl lg:text-7xl">
              I love building beautiful and accessible websites.
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="text-center font-medium text-base text-neutral-200 sm:text-left">
              I&apos;m a software engineer, who loves to craft things with
              TypeScript, based in{" "}
              <GlobeDialog>
                <Button
                  type="button"
                  aria-label="Open globe dialog"
                  variant="ghost"
                  className="relative inline-block h-auto p-0 font-bold text-base underline decoration-1 decoration-muted-foreground underline-offset-[2.5px] hover:bg-transparent hover:decoration-foreground active:bg-transparent"
                >
                  <div className="-right-1.5 -top-0.5 absolute size-2.5 animate-pulse rounded-full bg-orange-400" />
                  Bangkok
                </Button>
              </GlobeDialog>
              .
            </p>
          </BlurFade>

          <BlurFade
            delay={BLUR_FADE_DELAY * 6}
            className="self-center sm:self-start"
          >
            <Link
              href={`${siteConfig.url}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "mt-8 rounded-full")}
            >
              Resume
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
