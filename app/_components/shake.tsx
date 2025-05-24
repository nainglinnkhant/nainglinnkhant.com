"use client"

import { type MotionProps, type MotionStyle, motion } from "framer-motion"
import { useState } from "react"

export function Shake({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & MotionProps) {
  const [rotate, setRotate] = useState<number | null>(null)
  const styleObj: MotionStyle | undefined =
    typeof rotate === "number" ? { rotate } : undefined

  return (
    <motion.div
      whileHover={{
        rotate: [-10, 10, -10, 10, -10, 10, 0],
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      onMouseLeave={() => setRotate(0)}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={styleObj}
      {...props}
    >
      {children}
    </motion.div>
  )
}
