'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, Phone, Circle, Settings } from 'lucide-react'

const tabs = [
  { href: '/chats', icon: MessageCircle, label: 'Chats' },
  { href: '/calls', icon: Phone, label: 'Calls' },
  { href: '/updates', icon: Circle, label: 'Updates' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#101A2E]/90 backdrop-blur-lg border-t border-white/5 z-50">
      <div className="flex items-center">
        {tabs.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={href} href={href} className="flex-1">
              <div className="flex flex-col items-center justify-center py-3 gap-0.5">
                <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-blue-500/20' : ''}`}>
                  <Icon className={`w-5 h-5 transition-colors ${active ? 'text-blue-400' : 'text-gray-500'}`} />
                </div>
                <span className={`text-[10px] font-medium transition-colors ${active ? 'text-blue-400' : 'text-gray-500'}`}>{label}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
