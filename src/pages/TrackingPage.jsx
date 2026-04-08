import { useState, useEffect } from 'react'
import { dailyChecklist, weeklyReviewQuestions } from '../data/protocols'
import { BackButton } from '../App'

export default function TrackingPage() {
  const [checks, setChecks] = useState(() => {
    try {
      const saved = localStorage.getItem('neuro-daily-' + new Date().toDateString())
      return saved ? JSON.parse(saved) : {}
    } catch { return {} }
  })

  useEffect(() => {
    localStorage.setItem('neuro-daily-' + new Date().toDateString(), JSON.stringify(checks))
  }, [checks])

  const toggle = (id) => setChecks(prev => ({ ...prev, [id]: !prev[id] }))
  const score = Object.values(checks).filter(Boolean).length

  return (
    <div className="page">
      <BackButton to="/library" label="Library" />
      <div className="page-header">
        <h1>Tracking</h1>
        <p className="subtitle">Minimum-effort tracking that catches what matters</p>
      </div>

      {/* Score */}
      <div className="hero-card" style={{background: score >= 8 ? 'linear-gradient(135deg,#34C759,#30D158)' : score >= 5 ? 'linear-gradient(135deg,#FF9500,#FF6B00)' : 'linear-gradient(135deg,#FF3B30,#D63030)'}}>
        <div className="overline">Today's Adherence</div>
        <h2 style={{fontSize:42}}>{score}/10</h2>
        <div className="hero-sub">
          {score >= 8 ? 'Running the protocol. Results will come.' : score >= 5 ? 'Slipping. Focus on the 2-3 you\'re missing.' : 'Simplify. Do ONLY training + cold + sleep timing.'}
        </div>
      </div>

      {/* Daily Checklist */}
      <div className="section">
        <div className="section-title">Daily Checklist</div>
        <div className="card" style={{padding:0}}>
          {dailyChecklist.map(item => (
            <div key={item.id} className="checklist-item" onClick={() => toggle(item.id)} style={{cursor:'pointer'}}>
              <div className={`checkbox ${checks[item.id] ? 'checked' : ''}`} />
              <span className={`checklist-text ${checks[item.id] ? 'checked' : ''}`}>{item.label}</span>
              <span className="checklist-time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Review */}
      <div className="section">
        <div className="section-title">Weekly Review</div>
        <p style={{fontSize:13,color:'var(--text-tertiary)',marginBottom:12}}>5 minutes, Sunday evening. Answer honestly. 1–2 sentences max.</p>
        {weeklyReviewQuestions.map((cat, i) => (
          <div key={i} className="card" style={{marginBottom:10}}>
            <div style={{fontSize:14,fontWeight:600,color:'var(--blue)',marginBottom:8}}>{cat.category}</div>
            {cat.questions.map((q, j) => (
              <div key={j} style={{fontSize:13,color:'var(--text-secondary)',padding:'4px 0',borderBottom: j < cat.questions.length-1 ? '0.5px solid var(--separator)' : 'none'}}>
                {q}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Objective Metrics */}
      <div className="section">
        <div className="section-title">Objective Metrics</div>
        <div className="section-subtitle">Apple Watch / iPhone</div>
        <div className="card">
          {[
            { metric: 'HRV', where: 'Health → Heart', target: '↑ over weeks', why: 'Parasympathetic tone' },
            { metric: 'Resting HR', where: 'Health → Heart', target: '↓ over weeks', why: 'Cardiovascular fitness' },
            { metric: 'Sleep Duration', where: 'Health → Sleep', target: '7–9 hrs', why: 'Consistency' },
            { metric: 'Screen Time', where: 'Settings → Screen Time', target: '↓ total & pickups', why: 'Dopamine hygiene' },
          ].map((m, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name" style={{fontSize:14}}>{m.metric}</div>
                <div style={{fontSize:11,color:'var(--text-tertiary)',marginTop:1}}>{m.where}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:13,color:'var(--green)',fontWeight:600}}>{m.target}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-subtitle" style={{marginTop:16}}>No Device Needed</div>
        <div className="card">
          {[
            { metric: 'Morning energy (1–10)', what: 'Sleep quality proxy' },
            { metric: 'Cold shower tolerance', what: 'NE/dopamine system strength' },
            { metric: 'Workout performance', what: 'Progressive overload tracking' },
            { metric: 'Boredom tolerance', what: 'Dopamine receptor recovery' },
          ].map((m, i) => (
            <div key={i} className="exercise-row">
              <div className="exercise-name" style={{fontSize:14}}>{m.metric}</div>
              <div className="exercise-detail">{m.what}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Anti-Tracking Rule */}
      <div className="info-box warning" style={{marginTop:8}}>
        <p><strong>If tracking becomes stressful — stop tracking and just do the habits.</strong> The real metric: do you feel better than 4 weeks ago?</p>
      </div>
    </div>
  )
}
