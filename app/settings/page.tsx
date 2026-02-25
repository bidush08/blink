'use client'
import { Bell, Lock, Palette, HardDrive, HelpCircle, Info } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import { SettingsItem } from '@/components/settings/SettingsItem'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { BottomNav } from '@/components/layout/BottomNav'

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] pb-20">
      <div className="sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-lg">
        <div className="px-4 pt-12 pb-4">
          <h1 className="text-2xl font-bold text-gray-100">Settings</h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="mx-4 mb-6">
        <div className="bg-[#101A2E] rounded-2xl p-4 flex items-center gap-4">
          <Avatar initials="Me" size="lg" />
          <div className="flex-1">
            <div className="font-bold text-gray-100 text-lg">You</div>
            <div className="text-sm text-gray-400">Hey there! I am using Blink.</div>
          </div>
          <button className="text-blue-400 text-sm font-medium">Edit</button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="mx-4 space-y-3">
        <div className="bg-[#101A2E] rounded-2xl overflow-hidden">
          <SettingsItem icon={<Lock className="w-4 h-4 text-blue-400" />} label="Privacy" subtitle="Last seen, blocked" />
          <div className="h-px bg-white/5 mx-4" />
          <SettingsItem icon={<Bell className="w-4 h-4 text-yellow-400" />} label="Notifications" subtitle="Message, group & call tones" />
          <div className="h-px bg-white/5 mx-4" />
          <SettingsItem
            icon={<Palette className="w-4 h-4 text-purple-400" />}
            label="Appearance"
            subtitle="Dark mode, theme"
            rightElement={<ThemeToggle />}
          />
          <div className="h-px bg-white/5 mx-4" />
          <SettingsItem icon={<HardDrive className="w-4 h-4 text-green-400" />} label="Storage & Data" subtitle="Network usage, auto-download" />
        </div>

        <div className="bg-[#101A2E] rounded-2xl overflow-hidden">
          <SettingsItem icon={<HelpCircle className="w-4 h-4 text-teal-400" />} label="Help" subtitle="Help center, contact us" />
          <div className="h-px bg-white/5 mx-4" />
          <SettingsItem icon={<Info className="w-4 h-4 text-gray-400" />} label="About Blink" subtitle="Version 1.0.0" />
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
