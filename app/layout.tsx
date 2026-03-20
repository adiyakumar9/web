import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { themeScript } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Aditya Kumar — Full-Stack Engineer',
  description:
    'Full-stack software engineer specialising in real-time systems, GraphQL APIs, and fraud detection. 3+ years building at scale.',
  keywords: ['Full-Stack Engineer', 'React', 'Next.js', 'GraphQL', 'Node.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  )
}
