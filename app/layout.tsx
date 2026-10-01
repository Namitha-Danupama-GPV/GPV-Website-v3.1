import type React from "react"
import { defaultMetadata } from './../metadata/defaultMetadata.js'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProgressCircle } from "@/components/progress-circle"
import { Toaster } from "sonner";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden max-w-full">
      <head>
        <link rel="icon" href="/Logo-v6.ico" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-full max-w-full relative`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <MainNav />
          <Toaster richColors position="top-center" />
          {children}
          <ProgressCircle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}