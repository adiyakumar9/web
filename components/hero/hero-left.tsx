import Link from 'next/link'
import { MetricCounter } from './metric-counter'

export function HeroLeft() {
  return (
    <div
      className="flex flex-col justify-center px-5 py-12 md:px-10 md:py-[72px] relative"
      style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      {/* Dot grid background — fades out toward right */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 85% at 20% 50%, black, transparent)',
          maskImage:
            'radial-gradient(ellipse 65% 85% at 20% 50%, black, transparent)',
        }}
      />

      {/* Availability badge */}
      <div
        className="relative flex items-center gap-2 w-fit mb-6 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide text-accent"
        style={{
          background: 'var(--accent-light)',
          border: '1px solid var(--accent-border)',
        }}
      >
        <span
          className="w-2 h-2 rounded-full bg-green-500"
          style={{ animation: 'ripple 2s infinite', boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' }}
        />
        Open to opportunities
      </div>

      {/* Name */}
      <h1
        className="relative text-[clamp(48px,6vw,72px)] font-black leading-[0.9] mb-5"
        style={{ letterSpacing: '-0.04em', color: 'var(--text)' }}
      >
        Aditya<br />
        <span
          style={{
            WebkitTextStroke: '2px var(--text)',
            color: 'transparent',
          }}
        >
          Kumar
        </span>
        <span className="text-accent">.</span>
      </h1>

      {/* Bio */}
      <p
        className="relative text-[15px] leading-relaxed max-w-md mb-8"
        style={{
          color: 'var(--text2)',
          borderLeft: '3px solid var(--accent)',
          paddingLeft: '16px',
        }}
      >
        Full-stack &amp; mobile engineer specialising in{' '}
        <strong style={{ color: 'var(--text)' }}>real-time systems</strong>,{' '}
        <strong style={{ color: 'var(--text)' }}>fraud detection</strong>,{' '}
        <strong style={{ color: 'var(--text)' }}>biometric systems</strong>, and{' '}
        <strong style={{ color: 'var(--text)' }}>scalable APIs</strong>. 3+ years shipping
        production at DEVtrust.
      </p>

      {/* Metrics row */}
      <div
        className="relative flex overflow-hidden rounded-xl mb-8"
        style={{
          border: '1px solid var(--border)',
          background: 'var(--card)',
        }}
      >
        <MetricCounter value={100} suffix="k+" label="Daily link redirects" />
        <MetricCounter value={60}  suffix="%" prefix="−" label="API latency" />
        {/* Static third metric — no counter needed */}
        <div
          className="flex-1 p-4 relative overflow-hidden cursor-default group"
        >
          <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500" />
          <div
            className="text-[26px] font-black tracking-tighter"
            style={{ color: 'var(--text)' }}
          >
            95<span className="text-accent">+</span>
          </div>
          <div
            className="text-[9px] uppercase tracking-widest mt-0.5"
            style={{ color: 'var(--muted)' }}
          >
            Lighthouse
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="relative flex items-center gap-3 flex-wrap">
        <Link
          href="/work"
          className="px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors"
          style={{ background: 'var(--text)', color: 'var(--bg)' }}
        >
          See my work →
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--text2)',
            background: 'transparent',
          }}
        >
          Resume ↗
        </a>
      </div>
    </div>
  )
}
