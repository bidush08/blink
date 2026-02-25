import { ChevronRight } from 'lucide-react'
import { ReactNode } from 'react'

interface SettingsItemProps {
  icon: ReactNode
  label: string
  subtitle?: string
  rightElement?: ReactNode
  onClick?: () => void
  danger?: boolean
}

export function SettingsItem({ icon, label, subtitle, rightElement, onClick, danger }: SettingsItemProps) {
  const Tag = rightElement ? 'div' : 'button'
  return (
    <Tag
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-[#1A2540] transition-colors text-left cursor-pointer"
    >
      <div className="w-9 h-9 rounded-xl bg-[#1A2540] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className={`text-[15px] font-medium ${danger ? 'text-red-400' : 'text-gray-100'}`}>{label}</div>
        {subtitle && <div className="text-xs text-gray-500 mt-0.5">{subtitle}</div>}
      </div>
      {rightElement || <ChevronRight className="w-4 h-4 text-gray-600" />}
    </Tag>
  )
}
