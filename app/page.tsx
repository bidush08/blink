'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Zap } from 'lucide-react'

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/chats')
    }, 2000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0B1220] via-[#101A2E] to-[#0B2040]">
      <div className="animate-fade-in flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-2xl shadow-blue-500/30">
          <Zap className="w-10 h-10 text-white" fill="white" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Blink
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Connect instantly</p>
        </div>
      </div>
      <div className="absolute bottom-12 animate-pulse">
        <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 mx-auto" />
      </div>
    </div>
  )
}
