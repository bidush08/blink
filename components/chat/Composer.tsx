'use client'
import { useState } from 'react'
import { Paperclip, Smile, Mic, Send } from 'lucide-react'

interface ComposerProps {
  onSend?: (text: string) => void
}

export function Composer({ onSend }: ComposerProps) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (text.trim()) {
      onSend?.(text.trim())
      setText('')
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex items-center gap-2 px-3 py-3 bg-[#101A2E] border-t border-white/5">
      <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
        <Paperclip className="w-5 h-5 text-gray-400" />
      </button>
      <div className="flex-1 flex items-center gap-2 bg-[#1A2540] rounded-full px-4 py-2">
        <Smile className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Message"
          className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 text-[15px] focus:outline-none"
        />
      </div>
      <button
        onClick={handleSend}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 transition-transform"
      >
        {text ? <Send className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-white" />}
      </button>
    </div>
  )
}
