'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { ChatWindow } from './chat-window'

export function ChatFab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <ChatWindow onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[500] w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-rotate-6"
        style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          boxShadow: '0 4px 20px rgba(234,88,12,0.45)',
        }}
        aria-label="Open AI chat"
      >
        <MessageCircle size={22} />
        {/* Green online dot */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
      </button>
    </>
  )
}
