import { useState, useEffect } from 'react'

export default function PrepMode({ todayMeals, allMeals, onClose }) {
  const [checked, setChecked] = useState({})

  // Keep screen awake
  useEffect(() => {
    let wakeLock = null
    const request = async () => {
      try { wakeLock = await navigator.wakeLock.request('screen') } catch {}
    }
    request()
    const onVis = () => { if (document.visibilityState === 'visible') request() }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      if (wakeLock) wakeLock.release()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  const toggle = (mealKey, idx) => {
    const key = `${mealKey}-${idx}`
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const findMeal = (name) => {
    if (!name) return null
    const n = name.toLowerCase()
    return allMeals.find(m => m.name.toLowerCase().includes(n) || n.includes(m.name.toLowerCase()))
  }

  const mealSlots = [
    { key: 'breakfast', label: 'Breakfast', name: todayMeals.breakfast },
    { key: 'lunch', label: 'Lunch', name: todayMeals.lunch },
    { key: 'dinner', label: 'Dinner', name: todayMeals.dinner },
  ]

  return (
    <div className="prep-overlay">
      <div className="prep-header">
        <h2>Prep Mode</h2>
        <button className="timer-close" style={{position:'static'}} onClick={onClose}>✕</button>
      </div>

      {mealSlots.map(slot => {
        const meal = findMeal(slot.name)
        if (!meal) {
          return (
            <div key={slot.key} style={{marginBottom:24}}>
              <div className="prep-meal-title">{slot.label}</div>
              <div className="prep-meal-meta">{slot.name}</div>
              <div style={{fontSize:14, color:'var(--text-tertiary)', padding:'12px 0'}}>
                No prep needed — enjoy!
              </div>
            </div>
          )
        }
        return (
          <div key={slot.key} style={{marginBottom:28}}>
            <div className="prep-meal-title">{slot.label}: {meal.name}</div>
            <div className="prep-meal-meta">{meal.emoji} · {meal.time} · {meal.targets}</div>

            <div>
              {meal.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className={`prep-ingredient ${checked[`${slot.key}-${idx}`] ? 'checked' : ''}`}
                  onClick={() => toggle(slot.key, idx)}
                >
                  <div className="prep-check" />
                  <div className="prep-item-name">{ing.item}</div>
                  <div className="prep-item-amount">{ing.amount}</div>
                </div>
              ))}
            </div>

            {meal.prep && (
              <div className="prep-instructions">
                <strong>Prep:</strong> {meal.prep}
              </div>
            )}
          </div>
        )
      })}

      <div className="prep-wake-lock">
        Screen stays on while prep mode is active
      </div>
    </div>
  )
}
