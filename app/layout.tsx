import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [
    {
      name: "nainglinnkhant",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@nainglk",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
      },
    ],
  },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "sL0LMRnSjg7cJRIwDkRBwurl2b9hLftm-IpwJNdFnFE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(geist.className, "bg-neutral-950 antialiased")}>
        {children}
        <Analytics />
        <SpeedInsights />
        <TailwindIndicator />
      </body>
    </html>
  )
}
