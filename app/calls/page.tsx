'use client'
import { Phone } from 'lucide-react'
import { mockCalls } from '@/data/mock'
import { CallTile } from '@/components/calls/CallTile'
import { FAB } from '@/components/ui/FAB'
import { BottomNav } from '@/components/layout/BottomNav'

export default function CallsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] pb-20">
      <div className="sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 pt-12 pb-4">
          <h1 className="text-2xl font-bold text-gray-100">Calls</h1>
        </div>
      </div>

      <div className="py-2">
        {mockCalls.map(call => <CallTile key={call.id} call={call} />)}
      </div>

      <FAB icon={<Phone className="w-6 h-6 text-white" />} />
      <BottomNav />
    </div>
  )
}
