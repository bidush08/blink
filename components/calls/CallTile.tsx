import { PhoneIncoming, PhoneOutgoing, PhoneMissed, Phone, Video } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import type { Call } from '@/data/mock'

interface CallTileProps {
  call: Call
}

export function CallTile({ call }: CallTileProps) {
  const Icon = call.type === 'incoming' ? PhoneIncoming : call.type === 'outgoing' ? PhoneOutgoing : PhoneMissed
  const iconColor = call.type === 'missed' ? 'text-red-400' : 'text-green-400'

  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#1A2540] transition-colors rounded-xl mx-2">
      <Avatar initials={call.avatar} size="md" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-semibold text-gray-100 text-[15px]">{call.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          <span className={`text-sm ${call.type === 'missed' ? 'text-red-400' : 'text-gray-400'}`}>{call.timestamp}</span>
          {call.duration && <span className="text-sm text-gray-500">· {call.duration}</span>}
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A2540] hover:bg-[#243050] transition-colors">
        {call.callType === 'video' ? <Video className="w-5 h-5 text-blue-400" /> : <Phone className="w-5 h-5 text-blue-400" />}
      </button>
    </div>
  )
}
