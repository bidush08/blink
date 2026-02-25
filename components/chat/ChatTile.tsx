import Link from 'next/link'
import { Pin } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import type { Chat } from '@/data/mock'

interface ChatTileProps {
  chat: Chat
}

export function ChatTile({ chat }: ChatTileProps) {
  return (
    <Link href={`/chats/${chat.id}`}>
      <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#1A2540] transition-colors cursor-pointer rounded-xl mx-2">
        <Avatar initials={chat.avatar} online={chat.online} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-100 text-[15px]">{chat.name}</span>
              {chat.pinned && <Pin className="w-3 h-3 text-gray-500 rotate-45" />}
            </div>
            <span className={`text-xs ${chat.unread > 0 ? 'text-blue-400' : 'text-gray-500'}`}>{chat.timestamp}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400 truncate pr-2">{chat.lastMessage}</span>
            <Badge count={chat.unread} />
          </div>
        </div>
      </div>
    </Link>
  )
}
