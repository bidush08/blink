'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full bg-[#1A2540] relative transition-colors duration-300 flex items-center"
    >
      <span className={`absolute w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center transition-transform duration-300 ${theme === 'dark' ? 'translate-x-0.5' : 'translate-x-6'}`}>
        {theme === 'dark' ? <Moon className="w-3 h-3 text-white" /> : <Sun className="w-3 h-3 text-white" />}
      </span>
    </button>
  )
}
