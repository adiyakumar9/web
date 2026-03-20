import Link from 'next/link'
import type { Project } from '@/lib/projects'

export function CaseStudyLayout({
  project,
  prev,
  next,
}: {
  project: Project
  prev:    Project | null
  next:    Project | null
}) {
  const cs = project.caseStudy!

  return (
    <article className="max-w-3xl mx-auto px-5 py-10 md:px-10 md:py-16">
      {/* Back */}
      <Link
        href="/work"
        className="text-[11px] font-bold mb-8 inline-flex items-center gap-1 transition-colors hover:text-accent"
        style={{ color: 'var(--muted)' }}
      >
        ← All projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{project.icon}</span>
          <span
            className="text-[9px] font-bold uppercase tracking-[3px] text-accent"
          >
            {project.num}
          </span>
        </div>
        <h1
          className="font-black mb-4"
          style={{
            fontSize: 'clamp(24px, 5vw, 42px)',
            letterSpacing: '-0.06em',
            color: 'var(--text)',
          }}
        >
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {[...project.hotTags, ...project.tags].map(t => (
            <span
              key={t}
              className="text-[10px] font-bold px-2.5 py-1 rounded"
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
        <p className="text-[15px] font-bold text-accent">{project.impact}</p>
      </div>

      {/* Problem */}
      <section className="mb-10">
        <h2
          className="text-[11px] uppercase tracking-[3px] font-bold mb-3"
          style={{ color: 'var(--muted)' }}
        >
          The Problem
        </h2>
        <p
          className="text-[15px] leading-relaxed"
          style={{
            color: 'var(--text2)',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '16px',
          }}
        >
          {cs.problem}
        </p>
      </section>

      {/* Role */}
      <section className="mb-10">
        <h2
          className="text-[11px] uppercase tracking-[3px] font-bold mb-3"
          style={{ color: 'var(--muted)' }}
        >
          My Role
        </h2>
        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text2)' }}>
          {cs.role}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-10">
        <h2
          className="text-[11px] uppercase tracking-[3px] font-bold mb-3"
          style={{ color: 'var(--muted)' }}
        >
          The Solution
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-5"
          style={{ color: 'var(--text2)' }}
        >
          {cs.solution}
        </p>
        <ul className="flex flex-col gap-2">
          {cs.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[14px]"
              style={{ color: 'var(--text2)' }}
            >
              <span className="text-accent font-bold mt-0.5">✦</span> {h}
            </li>
          ))}
        </ul>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h2
          className="text-[11px] uppercase tracking-[3px] font-bold mb-4"
          style={{ color: 'var(--muted)' }}
        >
          Results
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cs.results.map((r, i) => (
            <div
              key={i}
              className="rounded-xl p-3 md:p-4 text-center transition-colors hover:border-accent"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg2)',
              }}
            >
              <div
                className="font-black tracking-tight"
                style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: 'var(--text)' }}
              >
                {r.value}
              </div>
              <div
                className="text-[9px] uppercase tracking-wide mt-1"
                style={{ color: 'var(--muted)' }}
              >
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mb-16">
        <h2
          className="text-[11px] uppercase tracking-[3px] font-bold mb-4"
          style={{ color: 'var(--muted)' }}
        >
          Tech Stack
        </h2>
        <div className="flex flex-col gap-2">
          {cs.techDetails.map((t, i) => (
            <div
              key={i}
              className="flex gap-4 py-3"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <span
                className="text-[13px] font-extrabold flex-shrink-0 w-24 md:w-28"
                style={{ color: 'var(--text)' }}
              >
                {t.name}
              </span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t.why}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <div className="flex gap-4">
        {prev && (
          <Link
            href={`/work/${prev.slug}`}
            className="flex-1 rounded-xl p-4 transition-colors hover:border-accent group"
            style={{ border: '1px solid var(--border)' }}
          >
            <div
              className="text-[9px] uppercase tracking-[2px] mb-1"
              style={{ color: 'var(--muted)' }}
            >
              ← Previous
            </div>
            <div
              className="text-[13px] font-bold group-hover:text-accent transition-colors"
              style={{ color: 'var(--text)' }}
            >
              {prev.title}
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="flex-1 rounded-xl p-4 transition-colors hover:border-accent group text-right"
            style={{ border: '1px solid var(--border)' }}
          >
            <div
              className="text-[9px] uppercase tracking-[2px] mb-1"
              style={{ color: 'var(--muted)' }}
            >
              Next →
            </div>
            <div
              className="text-[13px] font-bold group-hover:text-accent transition-colors"
              style={{ color: 'var(--text)' }}
            >
              {next.title}
            </div>
          </Link>
        )}
      </div>
    </article>
  )
}
