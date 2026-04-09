import { useState, useEffect, useRef } from 'react'
import { haptic } from '../utils/haptics'

const TIERS = [
  { label: 'Wk 1–2', seconds: 30 },
  { label: 'Wk 3–4', seconds: 60 },
  { label: 'Wk 5–8', seconds: 90 },
  { label: 'Wk 9–12', seconds: 120 },
]

export default function ColdTimer({ onClose }) {
  const [tier, setTier] = useState(0)
  const [state, setState] = useState('idle')
  const [remaining, setRemaining] = useState(TIERS[0].seconds)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)

  const target = TIERS[tier].seconds

  useEffect(() => {
    if (state !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setElapsed(e => e + 1)
      setRemaining(r => {
        if (r <= 1) {
          setState('complete')
          haptic(200)
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [state])

  const selectTier = (i) => {
    setTier(i)
    setRemaining(TIERS[i].seconds)
    setElapsed(0)
    setState('idle')
  }

  const start = () => { setState('running'); haptic(25) }
  const pause = () => setState('paused')
  const resume = () => setState('running')
  const stop = () => { setState('idle'); setRemaining(target); setElapsed(0) }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return m > 0 ? `${m}:${String(sec).padStart(2, '0')}` : `${sec}`
  }

  const progress = target > 0 ? (target - remaining) / target : 0
  const isWarning = remaining <= 10 && remaining > 0 && state === 'running'
  const notes = [
    'Focus on controlled nasal breathing through the shock.',
    'Breathe through it. The urge to gasp is the NE hit landing.',
    'Dopamine surge peaks around 1–2 min and sustains for hours.',
    'Protocol range shown to produce 250% dopamine elevation.',
  ]

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">Cold Shower</div>
        <div className="timer-subtitle">Select your current progression tier</div>

        <div className="tier-selector">
          {TIERS.map((t, i) => (
            <button key={i} className={`tier-btn ${tier === i ? 'active' : ''}`} onClick={() => selectTier(i)}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="cold-countdown">{formatTime(target)}</div>
        <div style={{fontSize:13, color:'var(--text-tertiary)', textAlign:'center', marginTop:8, maxWidth:260}}>
          {notes[tier]}
        </div>

        <div className="timer-controls" style={{marginTop:40}}>
          <button className="btn-timer" onClick={start}>Start</button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="cold-countdown final">{formatTime(elapsed)}</div>
        <div style={{fontSize:20, fontWeight:700, color:'var(--green)', textAlign:'center', marginTop:12}}>
          Done.
        </div>
        <div style={{fontSize:14, color:'var(--text-tertiary)', textAlign:'center', marginTop:8}}>
          Dopamine elevated for hours. Nasal breathe through the rewarming.
        </div>
        <div className="timer-controls" style={{marginTop:40}}>
          <button className="btn-timer" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="timer-overlay">
      <button className="timer-close" onClick={onClose}>✕</button>
      <div className="timer-title">Cold Shower · {TIERS[tier].label}</div>
      <div className="timer-subtitle">Nasal breathing. Stay in it.</div>

      <div className={`cold-countdown ${isWarning ? 'warning' : ''}`}>
        {formatTime(remaining)}
      </div>

      {/* Simple progress bar */}
      <div style={{width:'80%', maxWidth:280, height:4, borderRadius:2, background:'var(--separator)', marginTop:24}}>
        <div style={{width:`${progress * 100}%`, height:'100%', borderRadius:2, background: isWarning ? 'var(--orange)' : 'var(--blue)', transition:'width 1s linear'}} />
      </div>

      <div style={{fontSize:13, color:'var(--text-tertiary)', marginTop:12}}>
        {formatTime(elapsed)} elapsed
      </div>

      <div className="timer-controls" style={{marginTop:32}}>
        {state === 'running' ? (
          <button className="btn-timer btn-timer-secondary" onClick={pause}>Pause</button>
        ) : (
          <button className="btn-timer" onClick={resume}>Resume</button>
        )}
        <button className="btn-timer btn-timer-stop" onClick={stop}>Stop</button>
      </div>
    </div>
  )
}
