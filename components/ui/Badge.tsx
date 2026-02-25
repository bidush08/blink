interface BadgeProps {
  count: number
}

export function Badge({ count }: BadgeProps) {
  if (count === 0) return null
  return (
    <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs font-semibold animate-pulse-badge">
      {count > 99 ? '99+' : count}
    </span>
  )
}
