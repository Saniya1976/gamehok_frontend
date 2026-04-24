// src/app/layout.tsx
import './globals.css'

import { Sidebar } from '@/components/layout/Sidebar'
import { RightSidebar } from '@/components/layout/RightSidebar'
import { MobileNav } from '@/components/layout/MobileNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#001208] text-white min-h-screen antialiased">
        <div className="flex w-full min-h-screen overflow-hidden">
          {/* Sidebar - Desktop Only */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 overflow-x-hidden">
            {children}
          </main>

          {/* Right Sidebar - Large screens only */}
          <RightSidebar />

          {/* Bottom Nav - Mobile Only */}
          <MobileNav />
        </div>
      </body>
    </html>
  )
}