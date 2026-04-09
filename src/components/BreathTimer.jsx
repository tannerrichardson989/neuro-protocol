import { useState, useEffect, useRef, useCallback } from 'react'
import { haptic } from '../utils/haptics'

export default function BreathTimer({ config, technique, onClose }) {
  if (config.type === 'wim-hof') return <WimHofTimer config={config} technique={technique} onClose={onClose} />
  return <CycleTimer config={config} technique={technique} onClose={onClose} />
}

function CycleTimer({ config, technique, onClose }) {
  const [state, setState] = useState('idle') // idle | running | paused | complete
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [phaseTime, setPhaseTime] = useState(config.phases[0].duration)
  const [cycle, setCycle] = useState(1)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)

  const totalCycles = config.defaultCycles || Math.floor((config.totalSeconds || 300) / config.phases.reduce((s, p) => s + p.duration, 0))
  const isTimed = config.type === 'timed'
  const totalTarget = isTimed ? config.totalSeconds : null

  const advancePhase = useCallback(() => {
    haptic(15)
    const nextIdx = phaseIdx + 1
    if (nextIdx >= config.phases.length) {
      // Cycle complete
      if (isTimed) {
        // Timed mode: keep cycling until totalSeconds reached
        setPhaseIdx(0)
        setPhaseTime(config.phases[0].duration)
        setCycle(c => c + 1)
      } else {
        const nextCycle = cycle + 1
        if (nextCycle > totalCycles) {
          setState('complete')
          haptic(200)
          return
        }
        setCycle(nextCycle)
        setPhaseIdx(0)
        setPhaseTime(config.phases[0].duration)
      }
    } else {
      setPhaseIdx(nextIdx)
      setPhaseTime(config.phases[nextIdx].duration)
    }
  }, [phaseIdx, cycle, totalCycles, config.phases, isTimed])

  useEffect(() => {
    if (state !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setElapsed(e => {
        const next = e + 1
        if (isTimed && next >= totalTarget) {
          setState('complete')
          haptic(200)
        }
        return next
      })
      setPhaseTime(t => {
        if (t <= 1) {
          advancePhase()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [state, advancePhase, isTimed, totalTarget])

  const phase = config.phases[phaseIdx]
  const isHold = phase.isHold

  const start = () => { setState('running'); haptic(25) }
  const pause = () => setState('paused')
  const resume = () => setState('running')
  const stop = () => {
    setState('idle')
    setPhaseIdx(0)
    setPhaseTime(config.phases[0].duration)
    setCycle(1)
    setElapsed(0)
  }

  const formatElapsed = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">{technique}</div>
        <div className="timer-subtitle">
          {isTimed ? `${Math.floor(totalTarget / 60)} min session` : `${totalCycles} cycles`}
        </div>
        <div className="breath-circle" style={{transform: 'scale(0.7)', transitionDuration: '0.3s'}}>
          <div className="breath-phase" style={{fontSize:16, color:'var(--text-tertiary)'}}>Ready</div>
        </div>
        <div className="timer-controls" style={{marginTop:48}}>
          <button className="btn-timer" onClick={start}>Start</button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="breath-circle" style={{transform:'scale(0.8)', transitionDuration:'0.3s', borderColor:'var(--green)', background:'radial-gradient(circle, rgba(52,199,89,0.15), rgba(52,199,89,0.05))'}}>
          <div className="breath-phase" style={{color:'var(--green)'}}>Done</div>
          <div className="breath-seconds" style={{color:'var(--green)', fontSize:28}}>{formatElapsed(elapsed)}</div>
        </div>
        <div className="breath-meta" style={{marginTop:24}}>
          <div>{isTimed ? `${Math.floor(elapsed/60)} minutes` : `${cycle - 1} cycles`} completed</div>
        </div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="timer-overlay">
      <button className="timer-close" onClick={onClose}>✕</button>
      <div className="timer-title">{technique}</div>
      <div className="timer-subtitle">
        {isTimed ? formatElapsed(elapsed) + ' / ' + formatElapsed(totalTarget) : `Cycle ${cycle} of ${totalCycles}`}
      </div>
      <div
        className={`breath-circle ${isHold ? 'hold' : ''}`}
        style={{
          transform: `scale(${phase.scale})`,
          transitionDuration: `${state === 'running' ? phase.duration * 0.9 : 0.3}s`,
        }}
      >
        <div className="breath-phase">{phase.label}</div>
        <div className="breath-seconds">{phaseTime}</div>
      </div>
      <div className="breath-meta">
        {!isTimed && <div>Cycle <strong>{cycle}</strong> of <strong>{totalCycles}</strong></div>}
        <div style={{marginTop:4}}>{formatElapsed(elapsed)}</div>
      </div>
      <div className="timer-controls">
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

function WimHofTimer({ config, technique, onClose }) {
  const [state, setState] = useState('idle') // idle | breathing | retention | recovery | roundComplete | complete
  const [round, setRound] = useState(1)
  const [breathCount, setBreathCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [retentionTime, setRetentionTime] = useState(0)
  const [isInhale, setIsInhale] = useState(true)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const [retentionTimes, setRetentionTimes] = useState([])
  const intervalRef = useRef(null)

  useEffect(() => {
    if (state === 'idle' || state === 'roundComplete' || state === 'complete') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setTotalElapsed(e => e + 1)

      if (state === 'breathing') {
        setSeconds(s => {
          if (s <= 1) {
            setIsInhale(prev => !prev)
            if (!isInhale) {
              // Completed one full breath
              setBreathCount(c => {
                const next = c + 1
                if (next >= config.breathsPerRound) {
                  // Move to retention
                  setState('retention')
                  setSeconds(0)
                  haptic(50)
                  return next
                }
                return next
              })
            }
            return config.breathDuration / 2
          }
          return s - 1
        })
      } else if (state === 'retention') {
        setRetentionTime(t => t + 1)
        setSeconds(s => s + 1)
      } else if (state === 'recovery') {
        setSeconds(s => {
          if (s <= 1) {
            // Recovery done, round complete
            haptic(100)
            if (round >= config.rounds) {
              setState('complete')
            } else {
              setState('roundComplete')
            }
            return 0
          }
          return s - 1
        })
      }
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [state, isInhale, round, config])

  const startBreathing = () => {
    setState('breathing')
    setBreathCount(0)
    setIsInhale(true)
    setSeconds(1)
    haptic(25)
  }

  const endRetention = () => {
    setRetentionTimes(prev => [...prev, retentionTime])
    setState('recovery')
    setSeconds(config.recoveryHold)
    setRetentionTime(0)
    haptic(50)
  }

  const nextRound = () => {
    setRound(r => r + 1)
    startBreathing()
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">{technique}</div>
        <div className="timer-subtitle">{config.rounds} rounds · {config.breathsPerRound} breaths per round</div>
        <div className="wh-breath-count" style={{fontSize:48, marginTop:32}}>
          {config.rounds} Rounds
        </div>
        <div className="wh-instruction" style={{marginTop:16, maxWidth:280}}>
          {config.breathsPerRound} deep breaths, then hold with empty lungs, then {config.recoveryHold}s recovery hold
        </div>
        <div className="timer-controls" style={{marginTop:48}}>
          <button className="btn-timer" onClick={startBreathing}>Begin</button>
        </div>
      </div>
    )
  }

  if (state === 'breathing') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="wh-round-indicator">Round {round} of {config.rounds}</div>
        <div
          className="breath-circle"
          style={{
            transform: `scale(${isInhale ? 1 : 0.55})`,
            transitionDuration: `${config.breathDuration / 2 * 0.9}s`,
          }}
        >
          <div className="breath-phase">{isInhale ? 'In' : 'Out'}</div>
          <div className="breath-seconds" style={{fontSize:56}}>{breathCount}</div>
        </div>
        <div className="breath-meta">
          <div>Breath <strong>{breathCount}</strong> of <strong>{config.breathsPerRound}</strong></div>
          <div style={{marginTop:4}}>Breathe fast and deep</div>
        </div>
      </div>
    )
  }

  if (state === 'retention') {
    return (
      <div className="timer-overlay" onClick={endRetention}>
        <button className="timer-close" onClick={(e) => { e.stopPropagation(); onClose() }}>✕</button>
        <div className="wh-round-indicator">Round {round} of {config.rounds} · Retention</div>
        <div
          className="breath-circle hold"
          style={{transform:'scale(0.5)', transitionDuration:'2s'}}
        >
          <div className="breath-phase">Hold</div>
          <div className="breath-seconds" style={{color:'var(--orange)'}}>{formatTime(seconds)}</div>
        </div>
        <div className="breath-meta">
          <div>Lungs empty — hold as long as you can</div>
        </div>
        <div className="wh-tap-prompt">Tap anywhere when done</div>
      </div>
    )
  }

  if (state === 'recovery') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="wh-round-indicator">Round {round} of {config.rounds} · Recovery</div>
        <div
          className="breath-circle"
          style={{transform:'scale(1)', transitionDuration:'1s', borderColor:'var(--green)', background:'radial-gradient(circle, rgba(52,199,89,0.15), rgba(52,199,89,0.05))'}}
        >
          <div className="breath-phase" style={{color:'var(--green)'}}>Hold Full</div>
          <div className="breath-seconds" style={{color:'var(--green)'}}>{seconds}</div>
        </div>
        <div className="breath-meta">
          <div>Inhale fully and hold for {config.recoveryHold} seconds</div>
        </div>
      </div>
    )
  }

  if (state === 'roundComplete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">Round {round} Complete</div>
        <div className="timer-subtitle">Retention: {formatTime(retentionTimes[retentionTimes.length - 1] || 0)}</div>
        <div style={{marginTop:24}}>
          {retentionTimes.map((t, i) => (
            <div key={i} style={{fontSize:14, color:'var(--text-secondary)', padding:'4px 0'}}>
              Round {i + 1}: {formatTime(t)}
            </div>
          ))}
        </div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={nextRound}>
            Round {round + 1}
          </button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">All {config.rounds} Rounds Complete</div>
        <div className="timer-subtitle">{formatTime(totalElapsed)} total</div>
        <div style={{marginTop:24}}>
          {retentionTimes.map((t, i) => (
            <div key={i} style={{fontSize:15, color:'var(--text-secondary)', padding:'6px 0'}}>
              Round {i + 1} retention: <strong>{formatTime(t)}</strong>
            </div>
          ))}
        </div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={onClose}>Done</button>
        </div>
      </div>
    )
  }

  return null
}
