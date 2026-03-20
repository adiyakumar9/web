const badges = ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'Vercel']

export function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-10 py-5"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span className="text-[10px]" style={{ color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Aditya Kumar
      </span>
      <div className="flex gap-2">
        {badges.map(b => (
          <span
            key={b}
            className="text-[9px] font-bold px-2 py-0.5 rounded tracking-wide"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              color: 'var(--muted)',
            }}
          >
            {b}
          </span>
        ))}
      </div>
      <span className="text-[10px]" style={{ color: 'var(--muted)' }}>
        New Delhi · Open to remote
      </span>
    </footer>
  )
}
