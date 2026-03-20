import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Aditya Kumar — Full-Stack Engineer'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px',
          background: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 18, color: '#9ca3af', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>
          FULL-STACK ENGINEER
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 96, fontWeight: 900, color: '#0f172a', letterSpacing: -4, lineHeight: 1 }}>
          <span>Aditya</span>
          <div style={{ display: 'flex' }}>
            <span>Kumar</span><span style={{ color: '#ea580c' }}>.</span>
          </div>
        </div>
        <div style={{ marginTop: 48, display: 'flex', gap: 32 }}>
          {[['100k+', 'Daily redirects'], ['-60%', 'API latency'], ['95+', 'Lighthouse']].map(([v, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#ea580c' }}>{v}</span>
              <span style={{ fontSize: 14, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 2 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
