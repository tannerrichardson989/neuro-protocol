import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { workoutDetails } from '../data/workouts'
import { getTimerConfig } from '../data/workoutTimerConfigs'
import IntervalTimer from '../components/IntervalTimer'
import { BackButton } from '../App'

export default function TrainDay() {
  const { day } = useParams()
  const workout = workoutDetails[day]
  const [expanded, setExpanded] = useState({})
  const [activeTimer, setActiveTimer] = useState(null)

  if (!workout) return <div className="page"><BackButton to="/train" label="Train" /><div className="empty-msg">Workout not found</div></div>

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="page">
      {activeTimer && (
        <IntervalTimer
          config={activeTimer.config}
          exercises={activeTimer.exercises}
          onClose={() => setActiveTimer(null)}
        />
      )}
      <BackButton to="/train" label="Train" />
      <div className="page-header" style={{marginBottom:8}}>
        <h1>{workout.title}</h1>
        <p className="subtitle">{workout.subtitle}</p>
      </div>

      {/* Warm-up */}
      {workout.warmup.length > 0 && (
        <div className="section">
          <div className="section-subtitle">Warm-Up</div>
          <div className="card" style={{padding:0}}>
            {workout.warmup.map((e, i) => {
              const key = `warmup-${i}`
              const isOpen = expanded[key]
              return (
                <div key={i}>
                  <div
                    className="exercise-row exercise-row-tap"
                    onClick={() => e.instructions && toggleExpand(key)}
                    style={{cursor: e.instructions ? 'pointer' : 'default', padding: '10px 16px'}}
                  >
                    <div style={{flex:1, minWidth:0}}>
                      <div className="exercise-name">{e.exercise}</div>
                    </div>
                    <div className="exercise-detail">{e.detail}</div>
                    {e.instructions && <span className={`expand-chevron ${isOpen ? 'open' : ''}`}>›</span>}
                  </div>
                  {isOpen && e.instructions && (
                    <div className="exercise-instructions">
                      {e.instructions}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Blocks */}
      {workout.blocks.map((block, i) => {
        const timerConfig = getTimerConfig(day, block.name)
        return (
          <div key={i} className="section">
            <div className="section-title" style={{fontSize:18}}>{block.name}</div>
            {block.format && (
              <div className="info-box" style={{marginBottom:10}}>
                <p>{block.format}</p>
              </div>
            )}
            {timerConfig && (
              <div style={{textAlign:'center', marginBottom:10}}>
                <button
                  className="btn-timer btn-timer-sm"
                  onClick={() => setActiveTimer({
                    config: timerConfig,
                    exercises: block.exercises.map(e => e.exercise),
                  })}
                >
                  Start Timer
                </button>
              </div>
            )}
            {block.exercises.length > 0 && (
              <div className="card" style={{padding:0}}>
                {block.exercises.map((e, j) => {
                  const key = `block-${i}-${j}`
                  const isOpen = expanded[key]
                  return (
                    <div key={j}>
                      <div
                        className="exercise-row exercise-row-tap"
                        onClick={() => e.instructions && toggleExpand(key)}
                        style={{cursor: e.instructions ? 'pointer' : 'default', padding: '10px 16px'}}
                      >
                        <div style={{flex:1, minWidth:0}}>
                          <div className="exercise-name">{e.exercise}</div>
                        </div>
                        <div className="exercise-detail">{e.detail}</div>
                        {e.instructions && <span className={`expand-chevron ${isOpen ? 'open' : ''}`}>›</span>}
                      </div>
                      {isOpen && e.instructions && (
                        <div className="exercise-instructions">
                          {e.instructions}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      {/* Cooldown */}
      <div className="section">
        <div className="section-subtitle">Cooldown</div>
        <div className="card">
          <div className="protocol-text" style={{fontSize:14}}>{workout.cooldown}</div>
        </div>
      </div>
    </div>
  )
}
