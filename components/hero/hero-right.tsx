import { featuredProjects } from '@/lib/projects'
import { FeaturedCard } from './featured-card'

export function HeroRight() {
  return (
    <div
      className="flex flex-col justify-center px-12 py-16"
      style={{ background: 'var(--bg2)' }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-[9px] font-bold uppercase tracking-[3px]"
          style={{ color: 'var(--muted)' }}
        >
          Featured Projects
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
      </div>

      {/* Featured cards */}
      {featuredProjects.map(p => (
        <FeaturedCard key={p.slug} project={p} />
      ))}

      {/* Currently building */}
      <div
        className="flex items-center gap-3 mt-1.5 p-4 rounded-xl"
        style={{
          background: 'var(--accent-light)',
          border: '1px dashed var(--accent-border)',
        }}
      >
        <span
          className="text-xl"
          style={{ animation: 'spin-gear 4s linear infinite', display: 'inline-block' }}
        >
          ⚙️
        </span>
        <div className="text-[12px]" style={{ color: 'var(--text2)' }}>
          <strong className="text-accent font-bold">Currently: </strong>
          Rebuilding this portfolio in Next.js with a clean minimal design system.
        </div>
      </div>
    </div>
  )
}
