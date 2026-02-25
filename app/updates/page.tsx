'use client'
import { mockStatuses } from '@/data/mock'
import { StatusRing } from '@/components/ui/StatusRing'
import { BottomNav } from '@/components/layout/BottomNav'

export default function UpdatesPage() {
  const myStatus = mockStatuses.find(s => s.isMe)
  const contactStatuses = mockStatuses.filter(s => !s.isMe)

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] pb-20">
      <div className="sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-lg">
        <div className="px-4 pt-12 pb-4">
          <h1 className="text-2xl font-bold text-gray-100">Updates</h1>
        </div>
      </div>

      {/* My Status */}
      {myStatus && (
        <div className="px-4 mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">My Status</p>
          <div className="flex items-center gap-3 p-3 bg-[#101A2E] rounded-2xl">
            <StatusRing initials={myStatus.avatar} seen={myStatus.seen} isMe={true} />
            <div>
              <div className="font-semibold text-gray-100">{myStatus.name}</div>
              <div className="text-sm text-gray-400">{myStatus.timestamp}</div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Updates */}
      <div className="px-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Updates</p>
        <div className="bg-[#101A2E] rounded-2xl overflow-hidden">
          {contactStatuses.map((status, i) => (
            <div key={status.id}>
              <div className="flex items-center gap-3 p-3 hover:bg-[#1A2540] transition-colors cursor-pointer">
                <StatusRing initials={status.avatar} seen={status.seen} />
                <div>
                  <div className="font-semibold text-gray-100">{status.name}</div>
                  <div className="text-sm text-gray-400">{status.timestamp}</div>
                </div>
              </div>
              {i < contactStatuses.length - 1 && <div className="h-px bg-white/5 mx-3" />}
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
