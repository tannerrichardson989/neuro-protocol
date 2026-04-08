import { Link } from 'react-router-dom'
import { phases, getCurrentPhase, getTimeStatus, dayVariations, DAYS } from '../data/schedule'
import { weeklyOverview, getTodayWorkout } from '../data/workouts'
import { getTodayMeals, meals } from '../data/meals'
import { slots } from '../data/supplements'

export default function Today() {
  const now = new Date()
  const dayName = DAYS[now.getDay()]
  const { phase, status, next } = getCurrentPhase()
  const dayIdx = now.getDay() === 0 ? 6 : now.getDay() - 1
  const todayWorkout = weeklyOverview[dayIdx]
  const todayMeals = getTodayMeals()
  const variation = dayVariations[dayIdx]
  const h = now.getHours()
  const greeting = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening'

  const currentItems = phase ? phase.items.filter(item => {
    const s = getTimeStatus(item.time)
    return s === 'active-now'
  }) : []

  const nextItems = phase ? phase.items.filter(item => getTimeStatus(item.time) === 'future').slice(0, 2) : []

  return (
    <div className="page">
      <div className="page-header">
        <p className="subtitle">{dayName}, {now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
        <h1>{greeting}</h1>
      </div>

      {/* Current Phase Hero */}
      <div className="hero-card">
        <div className="overline">Current Phase</div>
        <h2>{status}</h2>
        <div className="hero-sub">Next: {next}</div>
      </div>

      {/* Now / Coming Up */}
      {(currentItems.length > 0 || nextItems.length > 0) && (
        <div className="section">
          <div className="section-subtitle">
            {currentItems.length > 0 ? 'Right Now' : 'Coming Up'}
          </div>
          {(currentItems.length > 0 ? currentItems : nextItems).map((item, i) => (
            <Link key={i} to={item.link || '/schedule'} className="card-link">
              <div className="card-link-row">
                <div className="card-link-content">
                  <div className="title" style={{fontSize:15,fontWeight:500}}>{item.action}</div>
                  {item.systems.length > 0 && (
                    <div style={{marginTop:6}}>
                      {item.systems.map(s => <span key={s} className="tag tag-blue">{s}</span>)}
                    </div>
                  )}
                </div>
                <span className="chevron">›</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Today's Workout */}
      <div className="section">
        <div className="section-subtitle">Today's Workout</div>
        <Link to={`/train/${todayWorkout.slug}`} className="card-link">
          <div className="card-link-row">
            <div className="card-link-content">
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <span style={{fontSize:24}}>{todayWorkout.icon}</span>
                <div>
                  <div className="title">{todayWorkout.label}</div>
                  <div className="desc">{todayWorkout.duration} · {todayWorkout.target}</div>
                </div>
              </div>
            </div>
            <span className="chevron">›</span>
          </div>
        </Link>
        {variation && (
          <div className="card card-compact" style={{fontSize:13,color:'var(--text-tertiary)'}}>
            {variation.notes}
          </div>
        )}
      </div>

      {/* Today's Meals */}
      <div className="section">
        <div className="section-subtitle">Today's Meals</div>
        <div className="card">
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            <Link to="/nutrition" style={{textDecoration:'none',color:'inherit'}}>
              <div className="flex-between">
                <div><span style={{color:'var(--text-tertiary)',fontSize:12}}>Breakfast</span><br/><strong style={{fontSize:15}}>{todayMeals.breakfast}</strong></div>
                <span style={{color:'var(--text-quaternary)'}}>›</span>
              </div>
            </Link>
            <div className="divider" style={{margin:'2px 0'}}/>
            <Link to="/nutrition" style={{textDecoration:'none',color:'inherit'}}>
              <div className="flex-between">
                <div><span style={{color:'var(--text-tertiary)',fontSize:12}}>Lunch (pack)</span><br/><strong style={{fontSize:15}}>{todayMeals.lunch}</strong></div>
                <span style={{color:'var(--text-quaternary)'}}>›</span>
              </div>
            </Link>
            <div className="divider" style={{margin:'2px 0'}}/>
            <Link to="/nutrition" style={{textDecoration:'none',color:'inherit'}}>
              <div className="flex-between">
                <div><span style={{color:'var(--text-tertiary)',fontSize:12}}>Dinner (post-training)</span><br/><strong style={{fontSize:15}}>{todayMeals.dinner}</strong></div>
                <span style={{color:'var(--text-quaternary)'}}>›</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Supplements Quick View */}
      <div className="section">
        <div className="section-subtitle">Supplements Today</div>
        {slots.map(slot => (
          <Link key={slot.id} to="/nutrition/supplements" className="card-link" style={{marginBottom:8}}>
            <div className="flex-between">
              <div>
                <div style={{fontSize:14,fontWeight:600}}>{slot.name.split('—')[0].trim()}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)'}}>{slot.time} · {slot.supplements.filter(s=>s.flag!=='red').length} items</div>
              </div>
              <span className="chevron">›</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="section">
        <div className="section-subtitle">Quick Access</div>
        <div className="grid-2">
          <Link to="/library/breathwork/physiological-sigh" className="protocol-tile">
            <span className="tile-icon">🫁</span>
            <span className="tile-title">Calm Down</span>
            <span className="tile-desc">Physiological sigh</span>
          </Link>
          <Link to="/library/tracking" className="protocol-tile">
            <span className="tile-icon">✅</span>
            <span className="tile-title">Daily Check</span>
            <span className="tile-desc">Track adherence</span>
          </Link>
          <Link to="/library/sleep" className="protocol-tile">
            <span className="tile-icon">🌙</span>
            <span className="tile-title">Wind Down</span>
            <span className="tile-desc">Sleep protocol</span>
          </Link>
          <Link to="/library/social" className="protocol-tile">
            <span className="tile-icon">🤝</span>
            <span className="tile-title">Connect</span>
            <span className="tile-desc">Social framework</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
