'use client'

import Link from 'next/link'
import { useTilt } from '@/lib/use-tilt'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(4)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--accent)'
        el.style.boxShadow = '0 12px 40px rgba(234,88,12,0.1)'
      }}
    >
      {/* Thumbnail */}
      <div
        className="h-36 flex items-center justify-center text-4xl relative transition-colors duration-300"
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}
      >
        {project.icon}
        <div
          className="absolute bottom-2 right-3 text-[9px] font-bold uppercase tracking-wider"
          style={{ color: 'var(--muted)' }}
        >
          {project.hotTags.slice(0, 2).join(' · ') || project.tags.slice(0, 2).join(' · ')}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3
          className="text-[14px] font-extrabold tracking-tight mb-1.5"
          style={{ color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-[11px] leading-relaxed mb-3"
          style={{ color: 'var(--muted)' }}
        >
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.hotTags.map(t => (
            <span
              key={t}
              className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide text-accent"
              style={{
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
              }}
            >
              {t}
            </span>
          ))}
          {project.tags.slice(0, 2).map(t => (
            <span
              key={t}
              className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide"
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

        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="text-[10px] font-bold text-accent">
            {project.impact.split('·')[0].trim()}
          </span>
          <Link
            href={`/work/${project.slug}`}
            className="text-[10px] font-extrabold uppercase tracking-wider transition-colors group-hover:text-accent"
            style={{ color: 'var(--text)' }}
          >
            Case Study →
          </Link>
        </div>
      </div>
    </div>
  )
}
