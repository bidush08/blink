'use client'
import { useState, useRef, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react'
import { mockChats, mockMessages, Message } from '@/data/mock'
import { Avatar } from '@/components/ui/Avatar'
import { MessageBubble } from '@/components/chat/MessageBubble'
import { Composer } from '@/components/chat/Composer'
import { TypingIndicator } from '@/components/chat/TypingIndicator'

export default function ChatPage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()
  const chat = mockChats.find(c => c.id === id) || mockChats[0]
  const [messages, setMessages] = useState<Message[]>(mockMessages[id] || [
    { id: 'init', text: 'Hey! 👋', sent: false, timestamp: '10:00 AM', read: true, date: 'Today' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: Date.now().toString(),
      text,
      sent: true,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    }
    setMessages(prev => [...prev, newMsg])

    // Simulate typing then reply
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Got it! 👍',
        sent: false,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        read: false,
      }
      setMessages(prev => [...prev, reply])
    }, 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-[#0B1220]">
      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-3 bg-[#101A2E] border-b border-white/5 pt-12">
        <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <Avatar initials={chat.avatar} online={chat.online} size="sm" />
          <div>
            <div className="font-semibold text-gray-100 text-[15px] leading-tight">{chat.name}</div>
            <div className="text-xs text-green-400">{chat.online ? 'Online' : 'Last seen recently'}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
            <Video className="w-5 h-5 text-gray-300" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
            <Phone className="w-5 h-5 text-gray-300" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.date && (
              <div className="flex justify-center my-4">
                <span className="text-xs text-gray-500 bg-[#1A2540] px-3 py-1 rounded-full">{msg.date}</span>
              </div>
            )}
            <MessageBubble message={msg} />
          </div>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Composer */}
      <Composer onSend={handleSend} />
    </div>
  )
}
