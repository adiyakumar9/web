const experience = [
  { company: 'DEVtrust',         role: 'Software Engineer', date: 'Apr 2025 – Now',      active: true  },
  { company: 'ITH Technologies', role: 'SDE-1',             date: 'Aug 2022 – Jan 2024', active: false },
  { company: 'ITH Technologies', role: 'Trainee',           date: 'Feb 2022 – Aug 2022', active: false },
]

export function ExperienceCard() {
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
        Experience
      </div>
      <div className="flex flex-col">
        {experience.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-3 group"
            style={{
              borderBottom:
                i < experience.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div
              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-colors ${
                e.active ? 'bg-accent' : 'group-hover:bg-accent'
              }`}
              style={!e.active ? { background: 'var(--border)' } : undefined}
            />
            <div className="flex-1">
              <div
                className="text-[13px] font-extrabold"
                style={{ color: 'var(--text)' }}
              >
                {e.company}
              </div>
              <div className="text-[11px]" style={{ color: 'var(--muted)' }}>
                {e.role}
              </div>
            </div>
            <div
              className="text-[10px] whitespace-nowrap"
              style={{ color: 'var(--muted)' }}
            >
              {e.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
