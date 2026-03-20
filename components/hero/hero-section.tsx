import { HeroLeft }  from './hero-left'
import { HeroRight } from './hero-right'

export function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[55%_45%] md:min-h-[calc(100vh-56px)]"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <HeroLeft />
      <HeroRight />
    </section>
  )
}
