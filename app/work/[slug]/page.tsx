import { notFound }                        from 'next/navigation'
import { projects, getProjectBySlug }      from '@/lib/projects'
import { CaseStudyLayout }                 from '@/components/work/case-study-layout'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project  = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title:       `${project.title} — Aditya Kumar`,
    description: project.shortDesc,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project  = getProjectBySlug(slug)
  if (!project || !project.caseStudy) notFound()

  const idx  = projects.indexOf(project)
  const prev = idx > 0                    ? projects[idx - 1] : null
  const next = idx < projects.length - 1  ? projects[idx + 1] : null

  return <CaseStudyLayout project={project} prev={prev} next={next} />
}
