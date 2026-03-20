export function BioCard() {
  return (
    <div
      className="col-span-1 sm:col-span-2 rounded-2xl p-6 transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[2px] font-bold mb-2"
        style={{ color: 'var(--muted)' }}
      >
        Bio
      </div>
      <h2
        className="text-2xl font-black tracking-tight mb-1"
        style={{ color: 'var(--text)' }}
      >
        Full-Stack<br />
        <span className="text-accent">Engineer.</span>
      </h2>
      <p
        className="text-[13px] leading-relaxed mt-3"
        style={{ color: 'var(--text2)' }}
      >
        I build the systems behind products — real-time data pipelines, fraud
        detection engines, GraphQL APIs, and offline-first biometric mobile
        systems. I care about performance, clean code, and shipping things that
        actually work at scale.
      </p>
    </div>
  )
}
