import { useRef, useCallback } from 'react'

export function useTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left)  / rect.width  - 0.5
      const y = (e.clientY - rect.top)   / rect.height - 0.5
      el.style.transform = `perspective(600px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) translateY(-3px)`
    },
    [maxDeg]
  )

  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
