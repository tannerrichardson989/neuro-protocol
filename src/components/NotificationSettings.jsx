import { useState } from 'react'
import { SCHEDULE, loadNotifPrefs, saveNotifPrefs } from '../utils/notifications'
import { haptic } from '../utils/haptics'

const TIME_LABELS = {
  slot1: '6:05 AM',
  slot2: '6:15 AM',
  caffeine: '12:45 PM',
  training: '5:10 PM',
  slot3: '6:15 PM',
  winddown: '9:00 PM',
}

export default function NotificationSettings() {
  const [prefs, setPrefs] = useState(loadNotifPrefs)
  const [permState, setPermState] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied'
  )

  const updatePref = (key, value) => {
    const next = { ...prefs, [key]: value }
    setPrefs(next)
    saveNotifPrefs(next)
  }

  const enableNotifications = async () => {
    if (typeof Notification === 'undefined') return
    const result = await Notification.requestPermission()
    setPermState(result)
    if (result === 'granted') {
      updatePref('enabled', true)
      haptic(25)
    }
  }

  const toggleMaster = () => {
    if (!prefs.enabled) {
      if (permState === 'granted') {
        updatePref('enabled', true)
      } else {
        enableNotifications()
      }
    } else {
      updatePref('enabled', false)
    }
    haptic(10)
  }

  return (
    <div className="notif-settings">
      <div className="notif-item">
        <div>
          <div className="notif-item-label">Notifications</div>
          <div className="notif-item-time">
            {permState === 'denied' ? 'Blocked in browser settings' :
             prefs.enabled ? 'Active while app is open' : 'Off'}
          </div>
        </div>
        <button
          className={`toggle-switch ${prefs.enabled && permState === 'granted' ? 'active' : ''}`}
          onClick={toggleMaster}
          disabled={permState === 'denied'}
          style={permState === 'denied' ? {opacity:0.4} : {}}
        />
      </div>

      {prefs.enabled && permState === 'granted' && (
        <>
          {SCHEDULE.map(item => (
            <div key={item.key} className="notif-item">
              <div>
                <div className="notif-item-label">{item.title}</div>
                <div className="notif-item-time">{TIME_LABELS[item.key]}</div>
              </div>
              <button
                className={`toggle-switch ${prefs[item.key] ? 'active' : ''}`}
                onClick={() => { updatePref(item.key, !prefs[item.key]); haptic(10) }}
              />
            </div>
          ))}
        </>
      )}
    </div>
  )
}
