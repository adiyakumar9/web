import { NextRequest, NextResponse } from 'next/server'

const BOTPRESS_URL = process.env.BOTPRESS_WEBHOOK_URL ?? ''

// Simple in-memory rate limit (resets on cold start)
const rateMap = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string): boolean {
  const now   = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + 15 * 60 * 1000 })
    return false
  }
  if (entry.count >= 50) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  let body: { message?: unknown; conversationId?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { message, conversationId } = body
  if (typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
  }

  if (!BOTPRESS_URL) {
    return NextResponse.json({ error: 'Chatbot not configured' }, { status: 503 })
  }

  try {
    const res = await fetch(BOTPRESS_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ message, conversationId }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Chatbot unavailable' }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Chatbot unavailable' }, { status: 502 })
  }
}
