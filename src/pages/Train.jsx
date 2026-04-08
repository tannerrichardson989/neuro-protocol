import { Link } from 'react-router-dom'
import { weeklyOverview, coldProtocol, progressiveOverload } from '../data/workouts'

export default function Train() {
  const todayIdx = new Date().getDay()
  const dayMap = [6,0,1,2,3,4,5] // Sun=6, Mon=0, ...

  return (
    <div className="page">
      <div className="page-header">
        <h1>Train</h1>
        <p className="subtitle">7 days/week · Bodyweight only · 30–45 min</p>
      </div>

      {/* Weekly Grid */}
      <div className="section">
        <div className="workout-grid">
          {weeklyOverview.map((w, i) => (
            <Link
              key={w.day}
              to={`/train/${w.slug}`}
              className={`workout-day-cell ${dayMap[todayIdx] === i ? 'today' : ''}`}
            >
              <div className="day-label">{w.day}</div>
              <div className="day-icon">{w.icon}</div>
              <div className="day-type">{w.label.split(' ')[0]}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Today's Workout */}
      <div className="section">
        <div className="section-subtitle">Today</div>
        {(() => {
          const w = weeklyOverview[dayMap[todayIdx]]
          return (
            <Link to={`/train/${w.slug}`} className="card-link">
              <div className="card-link-row">
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <span style={{fontSize:28}}>{w.icon}</span>
                  <div className="card-link-content">
                    <div className="title">{w.label}</div>
                    <div className="desc">{w.duration} · {w.target}</div>
                  </div>
                </div>
                <span className="chevron">›</span>
              </div>
            </Link>
          )
        })()}
      </div>

      {/* Full Week List */}
      <div className="section">
        <div className="section-subtitle">Full Week</div>
        {weeklyOverview.map(w => (
          <Link key={w.slug} to={`/train/${w.slug}`} className="card-link" style={{marginBottom:6}}>
            <div className="card-link-row">
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <span style={{fontSize:20}}>{w.icon}</span>
                <div className="card-link-content">
                  <div className="title">{w.day} — {w.label}</div>
                  <div className="desc">{w.duration}</div>
                </div>
              </div>
              <span className="chevron">›</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Cold Protocol */}
      <div className="section">
        <div className="section-title">Cold Shower Protocol</div>
        <div className="info-box success" style={{marginBottom:12}}>
          <p><strong>Post-training, every day.</strong> Dopamine +250%, NE +300%, Endorphins ↑, NPY ↑</p>
        </div>
        <div className="card">
          {coldProtocol.map((c, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{c.duration}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{c.note}</div>
              </div>
              <div className="exercise-detail">{c.weeks}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progressive Overload */}
      <div className="section">
        <div className="section-title">Progressive Overload</div>
        {progressiveOverload.map((p, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div style={{fontSize:15,fontWeight:600,marginBottom:6}}>{p.phase}</div>
            {p.items.map((item, j) => (
              <div key={j} style={{fontSize:13,color:'var(--text-secondary)',padding:'3px 0',paddingLeft:12,position:'relative'}}>
                <span style={{position:'absolute',left:0}}>·</span>{item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
