export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2">
      <div className="bg-[#1A2540] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce-dot"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </div>
    </div>
  )
}
