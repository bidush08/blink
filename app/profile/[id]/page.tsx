'use client'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, MessageCircle, Phone, Video, Image } from 'lucide-react'
import { mockChats } from '@/data/mock'
import { Avatar } from '@/components/ui/Avatar'

export default function ProfilePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()
  const chat = mockChats.find(c => c.id === id) || mockChats[0]

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220]">
      <div className="flex items-center px-3 pt-12 pb-3 bg-[#101A2E] border-b border-white/5">
        <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A2540] transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <h1 className="ml-2 text-lg font-semibold text-gray-100">Profile</h1>
      </div>

      {/* Profile info */}
      <div className="flex flex-col items-center py-8 gap-4">
        <Avatar initials={chat.avatar} size="xl" online={chat.online} />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-100">{chat.name}</h2>
          <p className="text-gray-400 mt-1">+1 (555) 000-0000</p>
          <p className="text-gray-500 text-sm mt-1">Hey there! I am using Blink.</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-6 mt-2">
          {[
            { icon: MessageCircle, label: 'Message' },
            { icon: Phone, label: 'Call' },
            { icon: Video, label: 'Video' },
          ].map(({ icon: Icon, label }) => (
            <button key={label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-[#101A2E] flex items-center justify-center hover:bg-[#1A2540] transition-colors">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xs text-gray-400">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Media tabs */}
      <div className="mx-4">
        <div className="flex border-b border-white/10 mb-4">
          {['Media', 'Links', 'Docs'].map((tab, i) => (
            <button key={tab} className={`flex-1 py-3 text-sm font-medium transition-colors ${i === 0 ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-[#101A2E] flex items-center justify-center">
              <Image className="w-6 h-6 text-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
