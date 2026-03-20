'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'

interface Message { role: 'user' | 'bot'; text: string }

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages,  setMessages]  = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Aditya's AI assistant. Ask me anything about his work, skills, or experience." },
  ])
  const [input,     setInput]     = useState('')
  const [loading,   setLoading]   = useState(false)
  const [convId,    setConvId]    = useState<string | undefined>()
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(m => [...m, { role: 'user', text }])
    setLoading(true)
    try {
      const res  = await fetch('/api/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ message: text, conversationId: convId }),
      })
      const data = await res.json()
      const reply = typeof data.message === 'string'
        ? data.message
        : "Sorry, I couldn't respond right now."
      setMessages(m => [...m, { role: 'bot', text: reply }])
      if (typeof data.conversationId === 'string') setConvId(data.conversationId)
    } catch {
      setMessages(m => [...m, { role: 'bot', text: 'Connection error. Please try again.' }])
    }
    setLoading(false)
  }

  return (
    <div
      className="fixed bottom-24 right-6 z-[500] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
      style={{
        width: '340px',
        height: '460px',
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-accent text-white">
        <div>
          <div className="font-bold text-sm">Ask Aditya&apos;s AI</div>
          <div className="text-[10px] opacity-80">Powered by Botpress</div>
        </div>
        <button
          onClick={onClose}
          className="opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-[12px] leading-relaxed ${
                m.role === 'user' ? 'bg-accent text-white' : ''
              }`}
              style={
                m.role === 'bot'
                  ? {
                      background: 'var(--bg2)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                    }
                  : undefined
              }
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div
              className="px-3 py-2 rounded-xl text-[12px]"
              style={{
                background: 'var(--bg2)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              Thinking…
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="flex gap-2 p-3"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask anything…"
          className="flex-1 px-3 py-2 text-[12px] rounded-lg outline-none transition-colors"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text)',
          }}
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="w-9 h-9 flex items-center justify-center bg-accent text-white rounded-lg disabled:opacity-50 transition-colors hover:bg-accent2"
          aria-label="Send message"
        >
          <Send size={13} />
        </button>
      </div>
    </div>
  )
}
