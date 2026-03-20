// value: pass the numeric string only e.g. "3" or "10" — the "+" is appended automatically
interface Props { value: string; label: string }

export function StatCard({ value, label }: Props) {
  return (
    <div
      className="col-span-1 rounded-2xl p-6 flex flex-col justify-between transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[2px] font-bold"
        style={{ color: 'var(--muted)' }}
      >
        {label}
      </div>
      <div
        className="text-5xl font-black"
        style={{ letterSpacing: '-3px', color: 'var(--text)' }}
      >
        {value}<span className="text-accent">+</span>
      </div>
    </div>
  )
}
