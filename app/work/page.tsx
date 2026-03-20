import { projects }     from '@/lib/projects'
import { ProjectCard }  from '@/components/work/project-card'

export const metadata = {
  title: 'Work — Aditya Kumar',
  description:
    'Selected projects by Aditya Kumar — real-time systems, GraphQL APIs, and full-stack applications.',
}

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-16">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div
            className="text-[9px] uppercase tracking-[3px] font-bold mb-3"
            style={{ color: 'var(--muted)' }}
          >
            Selected Work
          </div>
          <h1
            className="font-black"
            style={{ fontSize: '42px', letterSpacing: '-0.08em', color: 'var(--text)' }}
          >
            Projects<span className="text-accent">.</span>
          </h1>
        </div>
        <p
          className="text-[13px] max-w-xs text-right"
          style={{ color: 'var(--muted)' }}
        >
          {projects.length} projects · real-time, scalable, production-grade
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
