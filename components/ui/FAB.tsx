import { MessageSquarePlus } from 'lucide-react'

interface FABProps {
  onClick?: () => void
  icon?: React.ReactNode
}

export function FAB({ onClick, icon }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 active:scale-95 transition-transform duration-200 z-50"
    >
      {icon || <MessageSquarePlus className="w-6 h-6 text-white" />}
    </button>
  )
}
