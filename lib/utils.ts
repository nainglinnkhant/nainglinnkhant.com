import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
export function getHasTouchScreen() {
  let hasTouchScreen = false

  if (!(typeof navigator === "object")) return

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen =
      (navigator as { msMaxTouchPoints: number }).msMaxTouchPoints > 0
  } else {
    const mQ = matchMedia?.("(pointer:coarse)")
    if (mQ?.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches
    } else if ("orientation" in window) {
      hasTouchScreen = true // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const UA = (navigator as { userAgent: string }).userAgent
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    }
  }

  return hasTouchScreen
}
