import { dopamineProtocol } from '../data/protocols'
import { BackButton } from '../App'

export default function DopaminePage() {
  const dp = dopamineProtocol
  return (
    <div className="page">
      <BackButton to="/library" label="Library" />
      <div className="page-header">
        <h1>Dopamine Hygiene</h1>
        <p className="subtitle">Protect receptor sensitivity. Remove cheap dopamine sources.</p>
      </div>

      <div className="info-box warning" style={{marginBottom:16}}>
        <p><strong>Highest-ROI intervention.</strong> Receptor sensitivity matters more than raw dopamine levels. Cheap digital dopamine on top of Focalin = pouring water into a bucket with holes.</p>
      </div>

      {/* Layer 1: Eliminate */}
      <div className="section">
        <div className="section-title">Layer 1 — Eliminate</div>
        <div className="section-subtitle">Delete from iPhone</div>
        <div className="card">
          {dp.eliminate.map((e, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name" style={{color:'var(--red)'}}>{e.app}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{e.why}</div>
                <div style={{fontSize:11,color:'var(--green)',marginTop:2}}>Alt: {e.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2: Friction */}
      <div className="section">
        <div className="section-title">Layer 2 — Friction</div>
        <div className="section-subtitle">Screen Time Limits</div>
        <div className="card">
          {dp.screenTimeLimits.map((l, i) => (
            <div key={i} className="exercise-row">
              <div className="exercise-name">{l.limit}</div>
              <div className="exercise-detail">{l.setting}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Replace */}
      <div className="section">
        <div className="section-title">Layer 3 — Replace</div>
        <div className="card">
          {dp.replacements.map((r, i) => (
            <div key={i} className="exercise-row" style={{flexDirection:'column',alignItems:'stretch'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:14,color:'var(--red)',textDecoration:'line-through'}}>{r.old}</span>
                <span style={{fontSize:13,color:'var(--text-tertiary)'}}>→</span>
                <span style={{fontSize:14,color:'var(--green)',fontWeight:500}}>{r.replacement}</span>
              </div>
              <div style={{fontSize:11,color:'var(--blue)',marginTop:4}}>{r.benefit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="section">
        <div className="section-title">Apple Shortcuts</div>
        {dp.shortcuts.map((s, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div className="flex-between" style={{marginBottom:4}}>
              <div style={{fontSize:15,fontWeight:600}}>{s.name}</div>
              <span className="tag tag-blue">{s.trigger}</span>
            </div>
            <div style={{fontSize:13,color:'var(--text-secondary)'}}>{s.actions}</div>
          </div>
        ))}
      </div>

      {/* Recovery Timeline */}
      <div className="section">
        <div className="section-title">Recovery Timeline</div>
        <div className="card">
          {dp.recoveryTimeline.map((r, i) => (
            <div key={i} className="exercise-row" style={{flexDirection:'column',alignItems:'stretch'}}>
              <div style={{fontSize:14,fontWeight:600,color:'var(--blue)'}}>{r.time}</div>
              <div style={{fontSize:13,marginTop:2}}>{r.what}</div>
              <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{r.feel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="section">
        <div className="section-title">Metrics (iOS Screen Time)</div>
        <div className="card">
          {dp.metrics.map((m, i) => (
            <div key={i} className="exercise-row">
              <div className="exercise-name" style={{fontSize:14}}>{m.metric}</div>
              <div className="exercise-detail" style={{color:'var(--green)'}}>{m.target}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
