import './globals.css'
import { Irish_Grover, Inter } from 'next/font/google'

import { Sidebar } from '@/components/layout/Sidebar'
import ConditionalRightSidebar from '@/components/layout/ConditionalRightSidebar'
import { MobileNav } from '@/components/layout/MobileNav'

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-irish-grover',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${irishGrover.variable} ${inter.variable} bg-[#001208] text-white min-h-screen antialiased`}>
        <div className="flex w-full min-h-screen overflow-hidden">
          {/* Sidebar - Desktop Only */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 md:ml-64 overflow-x-hidden">
            {children}
          </main>

          <ConditionalRightSidebar />

          {/* Bottom Nav - Mobile Only */}
          <MobileNav />
        </div>
      </body>
    </html>
  )
}