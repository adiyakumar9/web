const badges = ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'Vercel']

export function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-3 px-5 py-4 md:px-10 md:py-5"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span className="text-[10px]" style={{ color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Aditya Kumar
      </span>
      <div className="flex gap-2 flex-wrap justify-center">
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
        Lucknow · Open to remote
      </span>
    </footer>
  )
}
