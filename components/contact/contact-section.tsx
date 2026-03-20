'use client'

import { useState } from 'react'
import { Github, Linkedin, Download, Send } from 'lucide-react'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Left — info */}
      <div
        className="px-5 py-12 md:px-10 md:py-[72px]"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="text-[9px] uppercase tracking-[3px] font-bold mb-4"
          style={{ color: 'var(--muted)' }}
        >
          Get in touch
        </div>
        <h2
          className="font-black leading-[0.95] mb-5"
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            letterSpacing: '-0.1em',
            color: 'var(--text)',
          }}
        >
          Let&apos;s build<br />something<br />
          <span className="text-accent">great.</span>
        </h2>
        <p
          className="text-[14px] leading-relaxed max-w-sm mb-8"
          style={{ color: 'var(--text2)' }}
        >
          Open to full-time roles, freelance projects, and conversations about
          interesting engineering problems.
        </p>
        <a
          href="mailto:adityakumar950489@gmail.com"
          className="text-[14px] font-bold text-accent flex items-center gap-2 mb-1.5 hover:gap-3 transition-all"
        >
          ✉ adityakumar950489@gmail.com ↗
        </a>
        <p className="text-[11px] mb-6" style={{ color: 'var(--muted)' }}>
          📍 Lucknow, India · +91 9113400868
        </p>
        <div className="flex gap-2 flex-wrap">
          {[
            { icon: <Github size={13} />,   label: 'GitHub',   href: 'https://github.com/adiyakumar9' },
            { icon: <Linkedin size={13} />, label: 'LinkedIn', href: 'https://linkedin.com/in/aditya-kumar-singh-6b544418b/' },
            { icon: <Download size={13} />, label: 'Resume',   href: '/resume.pdf' },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-bold transition-all hover:-translate-y-px"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text2)',
                background: 'var(--bg)',
              }}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="px-5 py-12 md:px-10 md:py-[72px]" style={{ background: 'var(--bg2)' }}>
        <div
          className="text-[9px] uppercase tracking-[3px] font-bold mb-6"
          style={{ color: 'var(--muted)' }}
        >
          Send a message
        </div>
        <form onSubmit={handleSubmit}>
          {[
            { name: 'name',  label: 'Name',  type: 'text',  placeholder: 'Jane Smith'         },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com'   },
          ].map(f => (
            <div key={f.name} className="mb-4">
              <label
                className="block text-[10px] font-bold uppercase tracking-widest mb-1.5"
                style={{ color: 'var(--muted)' }}
              >
                {f.label}
              </label>
              <input
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required
                className="w-full px-3.5 py-2.5 rounded-lg text-[13px] outline-none transition-all"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  color: 'var(--text)',
                }}
              />
            </div>
          ))}
          <div className="mb-4">
            <label
              className="block text-[10px] font-bold uppercase tracking-widest mb-1.5"
              style={{ color: 'var(--muted)' }}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about the project or role..."
              required
              className="w-full px-3.5 py-2.5 rounded-lg text-[13px] outline-none transition-all resize-none"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--text)',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-bold text-[13px] bg-accent transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ boxShadow: '0 4px 16px rgba(234,88,12,0.3)' }}
          >
            <Send size={13} />
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent! 🎉' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p className="text-[11px] text-red-500 mt-2 text-center">
              Something went wrong. Try emailing directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
