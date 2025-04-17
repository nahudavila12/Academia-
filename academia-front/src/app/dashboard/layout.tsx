"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Esta función será pasada al sidebar para controlar su estado
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-[#F9F5F6]">
      <DashboardSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className="flex flex-1 flex-col transition-all duration-300 ease-in-out"
        style={{
          marginLeft: sidebarOpen ? "16rem" : "4rem",
          width: sidebarOpen ? "calc(100% - 16rem)" : "calc(100% - 4rem)",
        }}
      >
        <DashboardHeader toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 h-[calc(100vh-4rem)] overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
