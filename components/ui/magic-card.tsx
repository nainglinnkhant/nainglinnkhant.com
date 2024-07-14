"use client"

import React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

export interface MagicCardProps {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  wrapperClassName?: string
}

export function MagicCard({
  children,
  className = "",
  gradientSize = 200,
  gradientColor = "#262626",
  wrapperClassName = "",
}: MagicCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()

        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 text-black dark:bg-black dark:text-white",
        wrapperClassName
      )}
    >
      <div className={cn("relative z-10 size-full", className)}>{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
					`,
        }}
      />
    </div>
  )
}
