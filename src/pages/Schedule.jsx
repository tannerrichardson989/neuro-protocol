import { Link } from 'react-router-dom'
import { phases, getTimeStatus, circadianAnchors, DAYS } from '../data/schedule'

export default function Schedule() {
  const now = new Date()
  const dayName = DAYS[now.getDay()]
  const isWeekend = now.getDay() === 0 || now.getDay() === 6

  return (
    <div className="page">
      <div className="page-header">
        <h1>Schedule</h1>
        <p className="subtitle">{isWeekend ? 'Weekend' : 'Weekday'} · {dayName}</p>
      </div>

      {isWeekend && (
        <div className="info-box" style={{marginBottom:16}}>
          <p><strong>Weekend Option:</strong> Training can move to morning (~7:15 AM) to free up evening for social plans. Or keep 5:10 PM for consistency.</p>
        </div>
      )}

      {phases.map(phase => (
        <div key={phase.id} className="section">
          <div className="phase-header">
            <div className="phase-name">{phase.name}</div>
            <div className="phase-time">{phase.time}</div>
          </div>
          <div className="timeline">
            {phase.items.map((item, i) => {
              const status = getTimeStatus(item.time)
              return (
                <Link
                  key={i}
                  to={item.link || '#'}
                  className={`timeline-item ${status}`}
                  style={{textDecoration:'none',color:'inherit'}}
                >
                  <div className="timeline-time">{formatTime(item.time)}</div>
                  <div className="timeline-action">{item.action}</div>
                  {item.systems.length > 0 && (
                    <div className="timeline-tags">
                      {item.systems.map(s => (
                        <span key={s} className={`tag ${getSystemColor(s)}`}>{s}</span>
                      ))}
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      ))}

      {/* Circadian Anchors */}
      <div className="section">
        <div className="section-title">Circadian Anchors</div>
        <div className="card">
          {circadianAnchors.map((a, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{a.anchor}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{a.purpose}</div>
              </div>
              <div className="exercise-detail">{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatTime(t) {
  const parts = t.split(':')
  let h = parseInt(parts[0])
  const m = parts[1] || '00'
  const ampm = h >= 12 ? 'PM' : 'AM'
  if (h > 12) h -= 12
  if (h === 0) h = 12
  return `${h}:${m} ${ampm}`
}

function getSystemColor(sys) {
  const s = sys.toLowerCase()
  if (s.includes('dopamine') || s.includes('bdnf')) return 'tag-purple'
  if (s.includes('serotonin') || s.includes('oxytocin')) return 'tag-pink'
  if (s.includes('gaba') || s.includes('parasympathetic')) return 'tag-teal'
  if (s.includes('acetylcholine') || s.includes('choline')) return 'tag-indigo'
  if (s.includes('ne') || s.includes('norepinephrine') || s.includes('cortisol')) return 'tag-orange'
  if (s.includes('no') || s.includes('nitric')) return 'tag-green'
  if (s.includes('endorphin') || s.includes('endocannabinoid')) return 'tag-yellow'
  if (s.includes('melatonin') || s.includes('adenosine') || s.includes('circadian') || s.includes('nrem')) return 'tag-blue'
  return 'tag-blue'
}
