import { useEffect } from 'react'

const SCHEDULE = [
  { key: 'slot1', hour: 6, min: 5, title: 'Slot 1 Supplements', body: 'L-Tyrosine, NAC — empty stomach' },
  { key: 'slot2', hour: 6, min: 15, title: 'Slot 2 + Breakfast', body: 'Alpha-GPC, ALCAR, B Complex, D3, Omega-3, Lion\'s Mane, Creatine' },
  { key: 'caffeine', hour: 12, min: 45, title: 'Caffeine Cutoff', body: 'Last caffeine now. Hard cutoff.' },
  { key: 'training', hour: 17, min: 10, title: 'Training Time', body: 'Today\'s workout is ready.' },
  { key: 'slot3', hour: 18, min: 15, title: 'Slot 3 Supplements', body: 'Mag Glycinate, Glycine, Taurine, Uridine — with dinner' },
  { key: 'winddown', hour: 21, min: 0, title: 'Wind Down', body: 'Phone down. Start wind-down sequence.' },
]

export { SCHEDULE }

export function useNotificationScheduler(prefs) {
  useEffect(() => {
    if (!prefs || !prefs.enabled) return
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return

    const now = new Date()
    const timeouts = []

    SCHEDULE.forEach(item => {
      if (!prefs[item.key]) return
      const target = new Date(now)
      target.setHours(item.hour, item.min, 0, 0)
      const delay = target.getTime() - now.getTime()
      if (delay > 0) {
        timeouts.push(setTimeout(() => {
          new Notification(item.title, {
            body: item.body,
            icon: '/icon-192.png',
            badge: '/icon-192.png',
          })
        }, delay))
      }
    })

    return () => timeouts.forEach(clearTimeout)
  }, [prefs])
}

export function getDefaultPrefs() {
  return {
    enabled: false,
    slot1: true,
    slot2: true,
    caffeine: true,
    training: true,
    slot3: true,
    winddown: true,
  }
}

export function loadNotifPrefs() {
  try {
    const saved = localStorage.getItem('notifPrefs')
    return saved ? JSON.parse(saved) : getDefaultPrefs()
  } catch {
    return getDefaultPrefs()
  }
}

export function saveNotifPrefs(prefs) {
  localStorage.setItem('notifPrefs', JSON.stringify(prefs))
}
