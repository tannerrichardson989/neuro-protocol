import { useState, useEffect, useRef } from 'react'
import { haptic } from '../utils/haptics'

export default function IntervalTimer({ config, exercises, onClose }) {
  if (config.type === 'work-rest') return <WorkRestTimer config={config} exercises={exercises} onClose={onClose} />
  if (config.type === 'emom') return <EMOMTimer config={config} exercises={exercises} onClose={onClose} />
  if (config.type === 'hold') return <HoldTimer exercises={exercises} holdDuration={config.holdDuration} onClose={onClose} />
  return null
}

function WorkRestTimer({ config, exercises, onClose }) {
  const [state, setState] = useState('idle')
  const [phase, setPhase] = useState('work') // work | rest | roundRest
  const [exerciseIdx, setExerciseIdx] = useState(0)
  const [round, setRound] = useState(1)
  const [remaining, setRemaining] = useState(config.workDuration)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const intervalRef = useRef(null)

  const exCount = Math.min(config.exerciseCount, exercises.length)

  useEffect(() => {
    if (state !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setTotalElapsed(e => e + 1)
      setRemaining(r => {
        if (r <= 1) {
          advance()
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [state, phase, exerciseIdx, round])

  const advance = () => {
    if (phase === 'work') {
      haptic(25)
      setPhase('rest')
      setRemaining(config.restDuration)
    } else if (phase === 'rest') {
      const nextEx = exerciseIdx + 1
      if (nextEx >= exCount) {
        // Round done
        if (round >= config.rounds) {
          setState('complete')
          haptic(200)
          return
        }
        if (config.roundRest > 0) {
          haptic(50)
          setPhase('roundRest')
          setRemaining(config.roundRest)
        } else {
          startNextRound()
        }
      } else {
        haptic(15)
        setExerciseIdx(nextEx)
        setPhase('work')
        setRemaining(config.workDuration)
      }
    } else if (phase === 'roundRest') {
      startNextRound()
    }
  }

  const startNextRound = () => {
    haptic(50)
    setRound(r => r + 1)
    setExerciseIdx(0)
    setPhase('work')
    setRemaining(config.workDuration)
  }

  const start = () => { setState('running'); haptic(25) }
  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">{config.workDuration}s / {config.restDuration}s</div>
        <div className="timer-subtitle">{exCount} exercises · {config.rounds} rounds</div>
        <div style={{marginTop:24, width:'100%', maxWidth:300}}>
          {exercises.slice(0, exCount).map((e, i) => (
            <div key={i} style={{fontSize:14, color:'var(--text-secondary)', padding:'6px 0', borderBottom:'0.5px solid var(--separator)'}}>
              {i + 1}. {e}
            </div>
          ))}
        </div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={start}>Start</button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div style={{fontSize:48, fontWeight:700, color:'var(--green)'}}>Done</div>
        <div style={{fontSize:15, color:'var(--text-secondary)', marginTop:8}}>{config.rounds} rounds · {formatTime(totalElapsed)}</div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  const phaseColor = phase === 'work' ? 'work' : phase === 'rest' ? 'rest' : 'rest'
  const phaseLabel = phase === 'work' ? 'WORK' : phase === 'rest' ? 'REST' : 'ROUND REST'

  return (
    <div className="timer-overlay">
      <div className={`interval-phase-bar ${phaseColor}`} />
      <button className="timer-close" onClick={onClose}>✕</button>

      {phase !== 'roundRest' && (
        <div className="interval-exercise">
          {exercises[exerciseIdx] || `Exercise ${exerciseIdx + 1}`}
        </div>
      )}

      <div className={`interval-phase-label ${phaseColor}`}>{phaseLabel}</div>

      <div className="interval-countdown" style={{color: phase === 'work' ? 'var(--green)' : 'var(--orange)'}}>
        {remaining}
      </div>

      <div className="interval-progress">
        Round {round}/{config.rounds}
        {phase !== 'roundRest' && ` · Exercise ${exerciseIdx + 1}/${exCount}`}
      </div>

      <div style={{fontSize:12, color:'var(--text-tertiary)', marginTop:8}}>
        {formatTime(totalElapsed)}
      </div>

      <div className="timer-controls" style={{marginTop:24}}>
        <button className="btn-timer btn-timer-stop" onClick={onClose}>Stop</button>
      </div>
    </div>
  )
}

function EMOMTimer({ config, exercises, onClose }) {
  const [state, setState] = useState('idle')
  const [exerciseIdx, setExerciseIdx] = useState(0)
  const [round, setRound] = useState(1)
  const [remaining, setRemaining] = useState(config.intervalDuration)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const intervalRef = useRef(null)

  const exCount = Math.min(config.exerciseCount, exercises.length)

  useEffect(() => {
    if (state !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setTotalElapsed(e => e + 1)
      setRemaining(r => {
        if (r <= 1) {
          // Next exercise
          const nextEx = exerciseIdx + 1
          if (nextEx >= exCount) {
            if (round >= config.rounds) {
              setState('complete')
              haptic(200)
              return 0
            }
            haptic(50)
            setRound(rd => rd + 1)
            setExerciseIdx(0)
          } else {
            haptic(25)
            setExerciseIdx(nextEx)
          }
          return config.intervalDuration
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [state, exerciseIdx, round])

  const start = () => { setState('running'); haptic(25) }
  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">EMOM × {config.rounds * exCount} min</div>
        <div className="timer-subtitle">{exCount} exercises · {config.rounds} rounds</div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={start}>Start</button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div style={{fontSize:48, fontWeight:700, color:'var(--green)'}}>Done</div>
        <div style={{fontSize:15, color:'var(--text-secondary)', marginTop:8}}>{formatTime(totalElapsed)}</div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="timer-overlay">
      <div className="interval-phase-bar work" />
      <button className="timer-close" onClick={onClose}>✕</button>

      <div className="interval-exercise">
        {exercises[exerciseIdx] || `Exercise ${exerciseIdx + 1}`}
      </div>

      <div className="interval-phase-label work">EMOM</div>

      <div className="interval-countdown" style={{color:'var(--blue)'}}>
        {remaining}
      </div>

      <div className="interval-progress">
        Round {round}/{config.rounds} · Exercise {exerciseIdx + 1}/{exCount}
      </div>

      <div style={{fontSize:12, color:'var(--text-tertiary)', marginTop:8}}>
        {formatTime(totalElapsed)}
      </div>

      <div className="timer-controls" style={{marginTop:24}}>
        <button className="btn-timer btn-timer-stop" onClick={onClose}>Stop</button>
      </div>
    </div>
  )
}

function HoldTimer({ exercises, holdDuration, onClose }) {
  const [state, setState] = useState('idle')
  const [exerciseIdx, setExerciseIdx] = useState(0)
  const [remaining, setRemaining] = useState(holdDuration)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (state !== 'running') {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setTotalElapsed(e => e + 1)
      setRemaining(r => {
        if (r <= 1) {
          haptic(25)
          if (exerciseIdx + 1 >= exercises.length) {
            setState('complete')
            haptic(200)
            return 0
          }
          setExerciseIdx(i => i + 1)
          return holdDuration
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [state, exerciseIdx])

  const start = () => { setState('running'); haptic(25) }
  const skip = () => {
    haptic(15)
    if (exerciseIdx + 1 >= exercises.length) {
      setState('complete')
      haptic(200)
    } else {
      setExerciseIdx(i => i + 1)
      setRemaining(holdDuration)
    }
  }
  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (state === 'idle') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div className="timer-title">Mobility Holds</div>
        <div className="timer-subtitle">{exercises.length} positions · {holdDuration}s each</div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={start}>Start</button>
        </div>
      </div>
    )
  }

  if (state === 'complete') {
    return (
      <div className="timer-overlay">
        <button className="timer-close" onClick={onClose}>✕</button>
        <div style={{fontSize:48, fontWeight:700, color:'var(--green)'}}>Done</div>
        <div style={{fontSize:15, color:'var(--text-secondary)', marginTop:8}}>{formatTime(totalElapsed)}</div>
        <div className="timer-controls" style={{marginTop:32}}>
          <button className="btn-timer" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="timer-overlay">
      <div className="interval-phase-bar hold" />
      <button className="timer-close" onClick={onClose}>✕</button>

      <div className="interval-exercise">
        {exercises[exerciseIdx] || `Hold ${exerciseIdx + 1}`}
      </div>

      <div className="interval-phase-label hold">HOLD</div>

      <div className="interval-countdown" style={{color:'var(--blue)'}}>
        {remaining}
      </div>

      <div className="interval-progress">
        {exerciseIdx + 1} of {exercises.length}
      </div>

      <div className="timer-controls" style={{marginTop:24}}>
        <button className="btn-timer btn-timer-secondary" onClick={skip}>Skip</button>
        <button className="btn-timer btn-timer-stop" onClick={onClose}>Stop</button>
      </div>
    </div>
  )
}
