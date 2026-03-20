import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name:    string
  email:   string
  message: string
}

function validate(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false
  const { name, email, message } = body as Record<string, unknown>
  return (
    typeof name    === 'string' && name.trim().length > 0 &&
    typeof email   === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof message === 'string' && message.trim().length > 0
  )
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!validate(body)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    // In dev without key configured: log and return success so UI works
    console.log('[contact]', body)
    return NextResponse.json({ ok: true })
  }

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from:    'Portfolio Contact <onboarding@resend.dev>',
        to:      ['adityakumar950489@gmail.com'],
        subject: `Portfolio message from ${body.name}`,
        text:    `From: ${body.name} <${body.email}>\n\n${body.message}`,
      }),
    })

    if (!emailRes.ok) {
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 })
    }
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
