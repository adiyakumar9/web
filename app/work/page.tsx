import { projects }     from '@/lib/projects'
import { ProjectCard }  from '@/components/work/project-card'

export const metadata = {
  title: 'Work — Aditya Kumar',
  description:
    'Selected projects by Aditya Kumar — real-time systems, GraphQL APIs, biometric mobile, and full-stack applications.',
}

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 md:px-10 md:py-16">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end mb-10 md:mb-12">
        <div>
          <div
            className="text-[9px] uppercase tracking-[3px] font-bold mb-3"
            style={{ color: 'var(--muted)' }}
          >
            Selected Work
          </div>
          <h1
            className="font-black"
            style={{ fontSize: 'clamp(28px, 5vw, 42px)', letterSpacing: '-0.08em', color: 'var(--text)' }}
          >
            Projects<span className="text-accent">.</span>
          </h1>
        </div>
        <p
          className="text-[13px] md:max-w-xs md:text-right"
          style={{ color: 'var(--muted)' }}
        >
          {projects.length} projects · real-time, scalable, production-grade
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
