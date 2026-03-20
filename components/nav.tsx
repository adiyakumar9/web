'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/theme-provider'

const links = [
  { href: '/',         label: 'Home'    },
  { href: '/work',     label: 'Work'    },
  { href: '/about',    label: 'About'   },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const { toggle } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    const handler = (e: Event) => setIsDark((e as CustomEvent).detail)
    window.addEventListener('theme-change', handler)
    return () => window.removeEventListener('theme-change', handler)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-10 h-14"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-[15px] font-black tracking-tight"
        style={{ color: 'var(--text)' }}
      >
        <span
          className="w-2 h-2 rounded-full bg-accent"
          style={{ animation: 'ripple 2s infinite', boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' }}
        />
        Aditya Kumar
      </Link>

      {/* Nav links */}
      <div className="flex gap-1">
        {links.map(({ href, label }) => {
          const active =
            href === '/'
              ? pathname === '/'
              : pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/'
          return (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
              style={{
                color: active ? 'var(--text)' : 'var(--muted)',
                fontWeight: active ? 700 : 500,
                background: 'transparent',
              }}
              onMouseEnter={e => {
                if (!active) {
                  (e.target as HTMLElement).style.color = 'var(--text)'
                  ;(e.target as HTMLElement).style.background = 'var(--bg3)'
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  (e.target as HTMLElement).style.color = 'var(--muted)'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                }
              }}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
          style={{ border: '1px solid var(--border)', background: 'var(--bg2)', color: 'var(--text)' }}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
          style={{ border: '1px solid var(--border)', color: 'var(--text2)', background: 'transparent' }}
        >
          <Download size={11} /> Resume
        </a>
        <Link
          href="/#contact"
          className="px-3 py-1.5 rounded-md text-xs font-bold text-white bg-accent transition-all hover:-translate-y-px"
          style={{ boxShadow: '0 2px 12px rgba(234,88,12,0.35)' }}
        >
          Hire Me
        </Link>
      </div>
    </nav>
  )
}
