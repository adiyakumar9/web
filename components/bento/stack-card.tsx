const primary   = ['Next.js', 'React', 'Node.js', 'GraphQL', 'TypeScript', 'React Native']
const secondary = ['PostgreSQL', 'Angular', 'Docker', 'AWS', 'Redis', 'WatermelonDB', 'Neurotec SDK', 'Tailwind']

export function StackCard() {
  return (
    <div
      className="col-span-1 sm:col-span-2 rounded-2xl p-6 transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[2px] font-bold mb-3"
        style={{ color: 'var(--muted)' }}
      >
        Core Stack
      </div>
      <div className="flex flex-wrap gap-2">
        {primary.map(t => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-[10px] font-bold text-accent hover:scale-105 transition-transform cursor-default"
            style={{
              background: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
            }}
          >
            {t}
          </span>
        ))}
        {secondary.map(t => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-[10px] font-bold cursor-default transition-all hover:scale-105"
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
    </div>
  )
}
