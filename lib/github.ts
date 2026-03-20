export type ContribDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

export async function fetchContributions(): Promise<ContribDay[]> {
  const token    = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME

  if (!token || !username) return []

  const to   = new Date()
  const from = new Date(to)
  from.setFullYear(from.getFullYear() - 1)

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username, from: from.toISOString(), to: to.toISOString() },
      }),
      next: { revalidate: 3600 }, // cache for 1 hour
    })

    if (!res.ok) return []

    const data = await res.json()
    const weeks = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []

    const days: ContribDay[] = weeks.flatMap(
      (week: { contributionDays: { date: string; contributionCount: number }[] }) =>
        week.contributionDays.map((d) => ({
          date:  d.date,
          count: d.contributionCount,
          level: countToLevel(d.contributionCount),
        }))
    )

    // Return last 26 weeks (182 days) to match the grid size
    return days.slice(-182)
  } catch {
    return []
  }
}
