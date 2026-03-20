import { HeroLeft }  from './hero-left'
import { HeroRight } from './hero-right'

export function HeroSection() {
  return (
    <section
      className="grid min-h-[calc(100vh-56px)]"
      style={{
        gridTemplateColumns: '55% 45%',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <HeroLeft />
      <HeroRight />
    </section>
  )
}
