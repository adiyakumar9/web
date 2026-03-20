export type ContribDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

export async function fetchContributions(): Promise<ContribDay[]> {
  const username = process.env.GITHUB_USERNAME
  if (!username) return []

  try {
    // GitHub's public contribution calendar SVG — no auth required
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: { Accept: 'text/html' },
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const html = await res.text()

    // Parse every <rect> element that has data-date and data-count attributes
    const rects = html.match(/<rect[^>]*data-date[^>]*>/g) ?? []

    const days: ContribDay[] = rects
      .map((rect) => {
        const dateMatch  = rect.match(/data-date="([^"]+)"/)
        const countMatch = rect.match(/data-count="(\d+)"/)
        if (!dateMatch || !countMatch) return null
        const count = parseInt(countMatch[1], 10)
        return { date: dateMatch[1], count, level: countToLevel(count) }
      })
      .filter((d): d is ContribDay => d !== null)

    // Return last 182 cells (26 weeks × 7 days) to match the grid
    return days.slice(-182)
  } catch {
    return []
  }
}
