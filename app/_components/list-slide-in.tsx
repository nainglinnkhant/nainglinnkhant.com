"use client"

import { useRef } from "react"
import {
  motion,
  useInView,
  type MotionProps,
  type Variants,
} from "framer-motion"

const list: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const item = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: -0, opacity: 1 },
}

export function ListSlideIn({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & MotionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={list}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ListItemSlideIn({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & MotionProps) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  )
}
