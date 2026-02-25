'use client'
import { useState } from 'react'
import { Search, PenSquare } from 'lucide-react'
import { mockChats } from '@/data/mock'
import { ChatTile } from '@/components/chat/ChatTile'
import { SearchBar } from '@/components/ui/SearchBar'
import { FAB } from '@/components/ui/FAB'
import { BottomNav } from '@/components/layout/BottomNav'

export default function ChatsPage() {
  const [query, setQuery] = useState('')
  const filtered = mockChats.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 pt-12 pb-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Blink</h1>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
              <PenSquare className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <SearchBar placeholder="Search chats..." onSearch={setQuery} />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#1A2540] flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-500 text-sm">No chats found</p>
          </div>
        ) : (
          <div className="py-2">
            {filtered.map(chat => <ChatTile key={chat.id} chat={chat} />)}
          </div>
        )}
      </div>

      <FAB />
      <BottomNav />
    </div>
  )
}
