import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, duration = 1200) {
  const [count,   setCount]   = useState(0)
  const [started, setStarted] = useState(false)
  const observerRef           = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = observerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start: number | undefined
    const step = (ts: number) => {
      if (start === undefined) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref: observerRef }
}
