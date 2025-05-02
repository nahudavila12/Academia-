import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ChatBot from "@/components/chat-virutal/chat-virtual"
import LiveSupport from "@/components/live-support/live-support"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gisela Echavarria - Plataforma Educativa de Belleza",
  description:
    "Aprende las últimas técnicas y tendencias en maquillaje, peluquería y estética con los mejores profesionales.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
          {children}
          <ChatBot />
          <LiveSupport />
      </body>
    </html>
  )
}
