import { useEffect, useState } from "react"

export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0)
    })
  }, [])

  return { isScrolled }
}
