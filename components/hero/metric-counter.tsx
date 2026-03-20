'use client'

import { useCounter } from '@/lib/use-counter'

interface Props {
  value:   number
  suffix:  string
  label:   string
  prefix?: string
}

export function MetricCounter({ value, suffix, label, prefix = '' }: Props) {
  const { count, ref } = useCounter(value)

  return (
    <div
      ref={ref}
      className="flex-1 p-4 relative overflow-hidden cursor-default group"
      style={{ borderRight: '1px solid var(--border)' }}
    >
      {/* Sweep underline on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500"
      />
      <div
        className="text-[26px] font-black tracking-tighter"
        style={{ color: 'var(--text)' }}
      >
        {prefix}{count}<span className="text-accent">{suffix}</span>
      </div>
      <div
        className="text-[9px] uppercase tracking-widest mt-0.5"
        style={{ color: 'var(--muted)' }}
      >
        {label}
      </div>
    </div>
  )
}
