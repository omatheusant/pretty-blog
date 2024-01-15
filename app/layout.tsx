import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "300", "400", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Lud Photos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary min-h-screen`}>{children}</body>
    </html>
  )
}
