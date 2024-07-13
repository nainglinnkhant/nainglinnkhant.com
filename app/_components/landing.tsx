import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"

import { GlobeDialog } from "./globe-dialog"

export function Landing() {
  return (
    <div className="relative">
      <Spotlight
        className="md:-top-20 md:left-20 lg:-top-0 lg:left-[50] xl:-top-20 xl:left-60"
        fill="white"
      />

      <div className="mx-auto max-w-screen-lg overflow-x-hidden px-6 sm:px-16">
        <div className="flex h-svh w-full flex-col justify-center">
          <h1 className="text-xl font-bold text-neutral-200 lg:text-2xl">
            Hello, I&apos;m Naing Linn Khant.
          </h1>
          <h2 className="mb-8 mt-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            I love building beautiful and accessible websites.
          </h2>
          <p className="text-base font-medium text-neutral-200">
            I&apos;m a software engineer, who loves to craft things with
            TypeScript, based in{" "}
            <GlobeDialog>
              <Button
                variant="ghost"
                className="inline-block h-auto p-0 text-base font-bold underline hover:bg-transparent active:bg-transparent"
              >
                Bangkok
              </Button>
            </GlobeDialog>
            .
          </p>

          <Link
            href="/resume.pdf"
            className={cn(buttonVariants(), "mt-8 self-start rounded-full")}
            download="Naing Linn Khant (Resume)"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
