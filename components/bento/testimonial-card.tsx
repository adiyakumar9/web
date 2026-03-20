export function TestimonialCard() {
  return (
    <div
      className="col-span-1 sm:col-span-2 rounded-2xl p-6 transition-colors hover:border-accent"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[2px] font-bold mb-3"
        style={{ color: 'var(--muted)' }}
      >
        Recommendation
      </div>
      <p
        className="text-[13px] leading-relaxed italic mb-4"
        style={{ color: 'var(--text2)' }}
      >
        <span className="text-accent text-2xl leading-none align-bottom mr-1">&ldquo;</span>
        Aditya has a rare ability to architect scalable solutions while keeping
        delivery timelines. His GraphQL optimisations cut our API latency by
        60% — genuinely impressive engineering work.
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-extrabold"
          style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))' }}
        >
          RT
        </div>
        <div>
          <div className="text-[12px] font-bold" style={{ color: 'var(--text)' }}>
            Rahul T.
          </div>
          <div className="text-[10px]" style={{ color: 'var(--muted)' }}>
            Senior Engineer, DEVtrust
          </div>
        </div>
      </div>
    </div>
  )
}
