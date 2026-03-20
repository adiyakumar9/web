'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTilt } from '@/lib/use-tilt'
import type { Project } from '@/lib/projects'

export function FeaturedCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative rounded-xl p-5 mb-2.5 cursor-pointer overflow-hidden transition-[border-color,box-shadow] duration-300"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--accent)'
        el.style.boxShadow = '0 8px 32px rgba(234,88,12,0.12)'
      }}
    >
      {/* Gradient overlay — visible on hover via parent hover group */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(135deg, var(--accent-light) 0%, transparent 60%)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative">
        <div className="flex justify-between items-start mb-1">
          <span
            className="text-[10px] font-black tracking-wider"
            style={{ color: 'rgba(234,88,12,0.4)' }}
          >
            {project.num}
          </span>
          <ArrowUpRight size={16} style={{ color: 'var(--muted)' }} />
        </div>

        <h3
          className="text-[14px] font-extrabold tracking-tight mb-1"
          style={{ color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-[11px] mb-3 leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2.5">
          {project.hotTags.map(t => (
            <span
              key={t}
              className="text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide text-accent"
              style={{
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
              }}
            >
              {t}
            </span>
          ))}
          {project.tags.map(t => (
            <span
              key={t}
              className="text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide"
              style={{
                background: 'var(--bg3)',
                color: 'var(--text2)',
                border: '1px solid var(--border)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div
          className="text-[10px] font-bold pt-2.5 text-accent"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          ↑ {project.impact}
        </div>
      </div>
    </div>
  )
}
