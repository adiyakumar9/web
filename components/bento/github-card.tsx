// Static contribution data — 26 weeks x 7 days (hardcoded, deterministic)
// Level 0 = empty, 1-4 = increasing activity (orange shades)
const CONTRIB_DATA = [
  0,1,2,1,3,4,2, 0,1,1,2,0,3,1, 1,2,4,3,1,0,2, 0,0,1,2,3,2,1,
  3,4,2,1,0,1,2, 0,2,3,1,4,2,0, 1,0,2,1,3,2,4, 2,1,0,3,2,1,0,
  0,1,3,2,1,4,2, 1,2,0,1,3,2,1, 4,2,1,0,2,3,1, 0,1,2,4,1,2,3,
  1,0,2,3,1,2,0, 2,4,1,3,2,0,1, 0,2,1,4,3,1,2, 1,0,3,2,1,4,0,
  2,1,0,3,2,4,1, 0,1,2,1,3,0,2, 3,2,1,4,0,1,2, 1,3,2,0,4,1,2,
  0,2,1,3,2,4,1, 1,0,2,3,1,2,4, 2,1,4,0,3,1,2, 0,1,2,3,4,1,0,
  1,2,0,3,1,4,2, 0,1,3,2,1,0,2,
]

const COLORS = [
  'var(--bg3)',
  'rgba(234,88,12,0.2)',
  'rgba(234,88,12,0.4)',
  'rgba(234,88,12,0.65)',
  'var(--accent)',
]

export function GithubCard() {
  return (
    <div
      className="col-span-2 rounded-2xl p-6 transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[2px] font-bold mb-3"
        style={{ color: 'var(--muted)' }}
      >
        GitHub Activity
      </div>
      <div
        className="grid gap-0.5"
        style={{ gridTemplateColumns: 'repeat(26, 1fr)' }}
      >
        {CONTRIB_DATA.map((level, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ background: COLORS[level] }}
          />
        ))}
      </div>
    </div>
  )
}
