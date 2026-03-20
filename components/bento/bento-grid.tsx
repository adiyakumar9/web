export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {children}
    </div>
  )
}
