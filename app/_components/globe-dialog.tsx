"use client"

import {
  DialogContent,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog"

import {
  Dialog,
  DialogDescription,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Globe } from "@/components/ui/globe"

interface GlobeDialogProps {
  children: React.ReactNode
}

export function GlobeDialog({ children }: GlobeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50"
        >
          <DialogTitle className="sr-only">Globe</DialogTitle>
          <DialogDescription className="sr-only">
            A globe that marks the location of Thailand.
          </DialogDescription>
          <Globe
            className="mx-auto w-[400px] max-w-[100vw] sm:w-[500px] md:w-[600px]"
            config={{
              markers: [{ location: [13.7563, 100.5018], size: 0.1 }],
              // Hard coded value to show Bangkok as the initial position
              phi: 2.9,
              dark: 1,
            }}
          />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
