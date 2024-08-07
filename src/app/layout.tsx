import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Talent Trust',
  description:
    'If you have questions, please email us, and we will get back to you as soon as we can.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={open_sans.variable}>{children}</body>
    </html>
  )
}
