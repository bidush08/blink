'use client'
import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch?.(e.target.value)
  }

  const clear = () => {
    setQuery('')
    onSearch?.('')
  }

  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2.5 rounded-full bg-[#1A2540] text-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
      />
      {query && (
        <button onClick={clear} className="absolute right-3">
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}
    </div>
  )
}
