import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Blink',
  description: 'A modern WhatsApp-like chat application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="mobile-container">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
