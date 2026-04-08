import { socialFramework } from '../data/protocols'
import { BackButton } from '../App'

export default function SocialPage() {
  const sf = socialFramework
  return (
    <div className="page">
      <BackButton to="/library" label="Library" />
      <div className="page-header">
        <h1>Social Connection</h1>
        <p className="subtitle">The neuromodulators that only activate through other humans.</p>
      </div>

      <div className="info-box" style={{marginBottom:16}}>
        <p><strong>No supplement replaces this.</strong> Oxytocin, social endorphins, serotonin (belonging axis), and dopamine (social reward) all require human interaction.</p>
      </div>

      {/* Connection Types */}
      <div className="section">
        <div className="section-title">Neurochemistry of Connection</div>
        <div className="card">
          {sf.connectionTypes.map((c, i) => (
            <div key={i} className="exercise-row" style={{flexDirection:'column',alignItems:'stretch'}}>
              <div className="flex-between">
                <div className="exercise-name" style={{fontSize:14}}>{c.type}</div>
                <span className="tag tag-purple">{c.system}</span>
              </div>
              <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:3}}>{c.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Minimums */}
      <div className="section">
        <div className="section-title">Weekly Minimums</div>
        {sf.weeklyMinimums.map((w, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div className="flex-between" style={{marginBottom:4}}>
              <div style={{fontSize:15,fontWeight:600}}>{w.activity}</div>
              <span className="tag tag-blue">{w.freq}</span>
            </div>
            <div style={{fontSize:12,color:'var(--blue)',marginBottom:4}}>{w.systems}</div>
            <div style={{fontSize:13,color:'var(--text-secondary)'}}>{w.examples}</div>
          </div>
        ))}
      </div>

      {/* Monthly Targets */}
      <div className="section">
        <div className="section-title">Monthly Targets</div>
        <div className="card">
          {sf.monthlyTargets.map((m, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name" style={{fontSize:14}}>{m.activity}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{m.why}</div>
              </div>
              <div className="exercise-detail">{m.freq}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ideas by Effort */}
      <div className="section">
        <div className="section-title">Ideas by Effort Level</div>
        {sf.ideas.map((group, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div style={{fontSize:14,fontWeight:600,marginBottom:6,color: i===3 ? 'var(--orange)' : 'var(--text-primary)'}}>
              {group.effort === 'Gold Standard' ? '🏆 ' : ''}{group.effort} Effort
            </div>
            {group.items.map((item, j) => (
              <div key={j} style={{fontSize:13,color:'var(--text-secondary)',padding:'3px 0 3px 14px',position:'relative'}}>
                <span style={{position:'absolute',left:0}}>·</span>{item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
