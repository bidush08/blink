interface AvatarProps {
  initials: string
  online?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  gradient?: boolean
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
  xl: 'w-24 h-24 text-2xl',
}

const colors = [
  'from-blue-500 to-blue-700',
  'from-teal-500 to-teal-700',
  'from-purple-500 to-purple-700',
  'from-pink-500 to-pink-700',
  'from-orange-500 to-orange-700',
  'from-green-500 to-green-700',
  'from-red-500 to-red-700',
  'from-indigo-500 to-indigo-700',
]

function getColor(initials: string) {
  const idx = initials.charCodeAt(0) % colors.length
  return colors[idx]
}

export function Avatar({ initials, online, size = 'md', gradient }: AvatarProps) {
  const color = getColor(initials)
  return (
    <div className="relative inline-flex flex-shrink-0">
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-semibold text-white`}>
        {initials.slice(0, 2)}
      </div>
      {online !== undefined && (
        <span className={`absolute bottom-0 right-0 ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'} rounded-full border-2 border-[#0B1220] ${online ? 'bg-green-500' : 'bg-gray-500'}`} />
      )}
    </div>
  )
}
