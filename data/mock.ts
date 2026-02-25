export interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
  pinned?: boolean
  typing?: boolean
}

export interface Message {
  id: string
  text: string
  sent: boolean
  timestamp: string
  read: boolean
  date?: string
}

export interface Call {
  id: string
  name: string
  avatar: string
  type: 'incoming' | 'outgoing' | 'missed'
  callType: 'voice' | 'video'
  timestamp: string
  duration?: string
}

export interface Status {
  id: string
  name: string
  avatar: string
  timestamp: string
  seen: boolean
  isMe?: boolean
}

export const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'AJ',
    lastMessage: 'Hey! Are you coming to the party tonight? 🎉',
    timestamp: '10:42 AM',
    unread: 3,
    online: true,
    pinned: true,
  },
  {
    id: '2',
    name: 'Team Rocket 🚀',
    avatar: 'TR',
    lastMessage: 'Design review at 3pm today',
    timestamp: '9:15 AM',
    unread: 7,
    online: false,
    pinned: true,
  },
  {
    id: '3',
    name: 'Bob Martinez',
    avatar: 'BM',
    lastMessage: "Sure, I'll send the files over.",
    timestamp: 'Yesterday',
    unread: 0,
    online: true,
  },
  {
    id: '4',
    name: 'Clara Williams',
    avatar: 'CW',
    lastMessage: '😂😂😂 that was hilarious!',
    timestamp: 'Yesterday',
    unread: 1,
    online: false,
  },
  {
    id: '5',
    name: 'David Lee',
    avatar: 'DL',
    lastMessage: 'The project deadline is next Friday.',
    timestamp: 'Mon',
    unread: 0,
    online: true,
  },
  {
    id: '6',
    name: 'Emma Davis',
    avatar: 'ED',
    lastMessage: "Thanks for the help! You're amazing ✨",
    timestamp: 'Mon',
    unread: 0,
    online: false,
  },
  {
    id: '7',
    name: 'Frank Wilson',
    avatar: 'FW',
    lastMessage: 'Can we reschedule our call?',
    timestamp: 'Sun',
    unread: 2,
    online: false,
  },
  {
    id: '8',
    name: 'Grace Taylor',
    avatar: 'GT',
    lastMessage: 'Just sent you the invoice.',
    timestamp: 'Sun',
    unread: 0,
    online: true,
  },
  {
    id: '9',
    name: 'Henry Brown',
    avatar: 'HB',
    lastMessage: "Let's grab lunch this week!",
    timestamp: 'Sat',
    unread: 0,
    online: false,
  },
  {
    id: '10',
    name: 'Iris Chen',
    avatar: 'IC',
    lastMessage: 'The new design looks incredible!',
    timestamp: 'Sat',
    unread: 4,
    online: true,
  },
  {
    id: '11',
    name: 'Jake Anderson',
    avatar: 'JA',
    lastMessage: 'Did you see the game last night? 🏀',
    timestamp: 'Fri',
    unread: 0,
    online: false,
  },
  {
    id: '12',
    name: 'Kylie Morris',
    avatar: 'KM',
    lastMessage: "I'll be there in 10 minutes!",
    timestamp: 'Fri',
    unread: 0,
    online: true,
  },
]

export const mockMessages: Record<string, Message[]> = {
  '1': [
    { id: 'm1', text: 'Hey! How are you doing?', sent: false, timestamp: '10:30 AM', read: true, date: 'Today' },
    { id: 'm2', text: "I'm great! Just finished the new design 🎨", sent: true, timestamp: '10:32 AM', read: true },
    { id: 'm3', text: "Oh wow, that's awesome! Can you share it?", sent: false, timestamp: '10:33 AM', read: true },
    { id: 'm4', text: "Sure! I'll send it over in a bit.", sent: true, timestamp: '10:35 AM', read: true },
    { id: 'm5', text: 'Perfect! Also, are you coming to the party tonight? 🎉', sent: false, timestamp: '10:40 AM', read: true },
    { id: 'm6', text: 'Hey! Are you coming to the party tonight? 🎉', sent: false, timestamp: '10:42 AM', read: false },
  ],
}

export const mockCalls: Call[] = [
  {
    id: 'c1',
    name: 'Alice Johnson',
    avatar: 'AJ',
    type: 'incoming',
    callType: 'video',
    timestamp: 'Today, 10:30 AM',
    duration: '5:23',
  },
  {
    id: 'c2',
    name: 'Bob Martinez',
    avatar: 'BM',
    type: 'missed',
    callType: 'voice',
    timestamp: 'Today, 9:15 AM',
  },
  {
    id: 'c3',
    name: 'Clara Williams',
    avatar: 'CW',
    type: 'outgoing',
    callType: 'voice',
    timestamp: 'Yesterday, 6:45 PM',
    duration: '12:05',
  },
  {
    id: 'c4',
    name: 'David Lee',
    avatar: 'DL',
    type: 'missed',
    callType: 'video',
    timestamp: 'Yesterday, 3:20 PM',
  },
  {
    id: 'c5',
    name: 'Emma Davis',
    avatar: 'ED',
    type: 'incoming',
    callType: 'voice',
    timestamp: 'Mon, 11:00 AM',
    duration: '3:10',
  },
  {
    id: 'c6',
    name: 'Frank Wilson',
    avatar: 'FW',
    type: 'outgoing',
    callType: 'video',
    timestamp: 'Mon, 8:30 AM',
    duration: '28:45',
  },
]

export const mockStatuses: Status[] = [
  {
    id: 's0',
    name: 'My Status',
    avatar: 'Me',
    timestamp: 'Add status',
    seen: true,
    isMe: true,
  },
  {
    id: 's1',
    name: 'Alice Johnson',
    avatar: 'AJ',
    timestamp: '10 minutes ago',
    seen: false,
  },
  {
    id: 's2',
    name: 'Bob Martinez',
    avatar: 'BM',
    timestamp: '45 minutes ago',
    seen: false,
  },
  {
    id: 's3',
    name: 'Clara Williams',
    avatar: 'CW',
    timestamp: '2 hours ago',
    seen: true,
  },
  {
    id: 's4',
    name: 'David Lee',
    avatar: 'DL',
    timestamp: '3 hours ago',
    seen: false,
  },
  {
    id: 's5',
    name: 'Emma Davis',
    avatar: 'ED',
    timestamp: '5 hours ago',
    seen: true,
  },
]
