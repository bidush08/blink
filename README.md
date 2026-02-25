# ⚡ Blink

A modern, sleek WhatsApp-like chat application UI built with **Next.js 14** (App Router) and **Tailwind CSS**. Premium, polished, and production-ready with beautiful UI/UX.

## 📸 Screenshots

> Coming soon — run locally to see the app in action!

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3+
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Language**: TypeScript

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
blink/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Splash screen
│   ├── chats/              # Chat list + individual threads
│   ├── calls/              # Call history
│   ├── updates/            # Status updates
│   ├── settings/           # App settings
│   └── profile/[id]/       # User profile
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── chat/               # Chat-specific components
│   ├── calls/              # Call components
│   ├── settings/           # Settings components
│   └── layout/             # Layout components (BottomNav)
├── context/                # React context (ThemeContext)
├── data/                   # Mock data
└── styles/                 # Global styles
```

## ✨ Features

- 💬 **Chat List** – Conversations with avatars, unread badges, timestamps
- 💬 **Chat Thread** – Message bubbles, typing indicator, real-time-like replies
- 📞 **Calls Tab** – Incoming/outgoing/missed call history
- 🔄 **Updates Tab** – Status updates with gradient rings for unseen
- ⚙️ **Settings** – Profile card, settings items with icons
- 🌙 **Dark Mode** – Default dark theme with toggle
- 📱 **Mobile-first** – Optimized for 430px viewport, centered on desktop
- 🎨 **Design System** – Blink Blue (#3B82F6) + Teal (#2DD4BF) gradient palette
- ✨ **Animations** – Fade in, slide up, typing indicator, badge pulse
