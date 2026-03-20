import { fetchContributions } from '@/lib/github'

const COLORS = [
  'var(--bg3)',
  'rgba(234,88,12,0.2)',
  'rgba(234,88,12,0.4)',
  'rgba(234,88,12,0.65)',
  'var(--accent)',
]

export async function GithubCard() {
  const days = await fetchContributions()

  // If no data (token not set or API error), show empty grid
  const cells = days.length > 0
    ? days
    : Array.from({ length: 182 }, (_, i) => ({ date: '', count: 0, level: 0 as const }))

  const totalContribs = days.reduce((sum, d) => sum + d.count, 0)

  return (
    <div
      className="col-span-2 rounded-2xl p-6 transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="text-[9px] uppercase tracking-[2px] font-bold"
          style={{ color: 'var(--muted)' }}
        >
          GitHub Activity
        </div>
        {totalContribs > 0 && (
          <div
            className="text-[9px] uppercase tracking-[1px]"
            style={{ color: 'var(--muted)' }}
          >
            {totalContribs} contributions this year
          </div>
        )}
      </div>
      <div
        className="grid gap-0.5"
        style={{ gridTemplateColumns: 'repeat(26, 1fr)' }}
      >
        {cells.map((day, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ background: COLORS[day.level] }}
            title={day.date ? `${day.date}: ${day.count} contributions` : undefined}
          />
        ))}
      </div>
    </div>
  )
}
