import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const TITLE = "Naing Linn Khant"
const DESCRIPTION =
  "Software engineer who loves crafting beautiful and accessible websites"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [
    {
      name: "nainglinnkhant",
      url: "https://nainglinnkhant-v2.vercel.app",
    },
  ],
  metadataBase: new URL("https://nainglinnkhant-v2.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@nainglk",
    images: [
      {
        url: "https://nainglinnkhant-v2.vercel.app/opengraph-image.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    url: "https://nainglinnkhant-v2.vercel.app",
    locale: "en_US",
    images: [
      {
        url: "https://nainglinnkhant-v2.vercel.app/opengraph-image.png",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "antialiased")}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
