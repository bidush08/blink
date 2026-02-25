import { CheckCheck } from 'lucide-react'
import type { Message } from '@/data/mock'

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-1`}>
      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
        message.sent
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm'
          : 'bg-[#1A2540] text-gray-200 rounded-bl-sm'
      }`}>
        <p className="text-[15px] leading-relaxed">{message.text}</p>
        <div className={`flex items-center gap-1 mt-1 ${message.sent ? 'justify-end' : 'justify-start'}`}>
          <span className="text-[11px] opacity-70">{message.timestamp}</span>
          {message.sent && (
            <CheckCheck className={`w-3.5 h-3.5 ${message.read ? 'text-teal-300' : 'opacity-60'}`} />
          )}
        </div>
      </div>
    </div>
  )
}
