import { Plus } from 'lucide-react'
import { Avatar } from './Avatar'

interface StatusRingProps {
  initials: string
  seen: boolean
  isMe?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function StatusRing({ initials, seen, isMe, size = 'md' }: StatusRingProps) {
  const ringSize = size === 'md' ? 'w-16 h-16' : size === 'lg' ? 'w-20 h-20' : 'w-12 h-12'
  const ringClass = seen ? 'p-0.5 bg-gray-600' : 'p-0.5 bg-gradient-to-br from-blue-500 to-teal-400'

  return (
    <div className="relative">
      <div className={`${ringSize} rounded-full ${ringClass}`}>
        <div className="w-full h-full rounded-full bg-[#0B1220] flex items-center justify-center p-0.5">
          <Avatar initials={initials} size={size === 'sm' ? 'sm' : 'md'} />
        </div>
      </div>
      {isMe && (
        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center border-2 border-[#0B1220]">
          <Plus className="w-3 h-3 text-white" />
        </div>
      )}
    </div>
  )
}
