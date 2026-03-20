import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { themeScript } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { ChatFab }        from '@/components/chat/chat-fab'
import { SmoothScroll } from '@/components/smooth-scroll'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://adityakumar.dev'),
  title: {
    default:  'Aditya Kumar — Full-Stack Engineer',
    template: '%s — Aditya Kumar',
  },
  description: 'Full-stack software engineer specialising in real-time systems, GraphQL APIs, and fraud detection. 3+ years building at scale.',
  keywords:    ['Full-Stack Engineer', 'React', 'Next.js', 'GraphQL', 'Node.js', 'TypeScript'],
  authors:     [{ name: 'Aditya Kumar' }],
  openGraph: {
    title:     'Aditya Kumar — Full-Stack Engineer',
    description: 'Building systems that scale.',
    url:       'https://adityakumar.dev',
    siteName:  'Aditya Kumar',
    type:      'website',
    locale:    'en_US',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Aditya Kumar — Full-Stack Engineer',
    description: 'Building systems that scale.',
  },
  robots: {
    index:  true,
    follow: true,
  },
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
        <ChatFab />
        <SmoothScroll />
      </body>
    </html>
  )
}
