import { useParams } from 'react-router-dom'
import { workoutDetails } from '../data/workouts'
import { BackButton } from '../App'

export default function TrainDay() {
  const { day } = useParams()
  const workout = workoutDetails[day]

  if (!workout) return <div className="page"><BackButton to="/train" label="Train" /><div className="empty-msg">Workout not found</div></div>

  return (
    <div className="page">
      <BackButton to="/train" label="Train" />
      <div className="page-header" style={{marginBottom:8}}>
        <h1>{workout.title}</h1>
        <p className="subtitle">{workout.subtitle}</p>
      </div>

      {/* Warm-up */}
      {workout.warmup.length > 0 && (
        <div className="section">
          <div className="section-subtitle">Warm-Up</div>
          <div className="card">
            {workout.warmup.map((e, i) => (
              <div key={i} className="exercise-row">
                <div className="exercise-name">{e.exercise}</div>
                <div className="exercise-detail">{e.detail}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blocks */}
      {workout.blocks.map((block, i) => (
        <div key={i} className="section">
          <div className="section-title" style={{fontSize:18}}>{block.name}</div>
          {block.format && (
            <div className="info-box" style={{marginBottom:10}}>
              <p>{block.format}</p>
            </div>
          )}
          {block.exercises.length > 0 && (
            <div className="card">
              {block.exercises.map((e, j) => (
                <div key={j} className="exercise-row">
                  <div style={{flex:1}}>
                    <div className="exercise-name">{e.exercise}</div>
                  </div>
                  <div className="exercise-detail">{e.detail}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

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
