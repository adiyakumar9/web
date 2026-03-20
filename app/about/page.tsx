import { BentoGrid }       from '@/components/bento/bento-grid'
import { BioCard }         from '@/components/bento/bio-card'
import { CurrentlyCard }   from '@/components/bento/currently-card'
import { StatCard }        from '@/components/bento/stat-card'
import { StackCard }       from '@/components/bento/stack-card'
import { GithubCard }      from '@/components/bento/github-card'
import { TestimonialCard } from '@/components/bento/testimonial-card'
import { ExperienceCard }  from '@/components/bento/experience-card'

export const metadata = {
  title: 'About — Aditya Kumar',
  description:
    'Full-stack & mobile engineer with 3+ years experience in real-time systems, fraud detection, GraphQL APIs, and biometric mobile applications.',
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 md:px-10 md:py-16">
      <div className="mb-10">
        <div
          className="text-[9px] uppercase tracking-[3px] font-bold mb-3"
          style={{ color: 'var(--muted)' }}
        >
          About
        </div>
        <h1
          className="font-black"
          style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            letterSpacing: '-0.08em',
            color: 'var(--text)',
          }}
        >
          A bit about me<span className="text-accent">.</span>
        </h1>
      </div>

      <BentoGrid>
        <BioCard />
        <CurrentlyCard />
        <StatCard value="3" label="Years experience" />
        <StackCard />
        <StatCard value="8" label="Projects shipped" />
        <GithubCard />
        <TestimonialCard />
        <ExperienceCard />
      </BentoGrid>
    </div>
  )
}
