import { Link } from 'react-router-dom'
import { quickReference } from '../data/breathwork'
import { startupSequence } from '../data/protocols'

export default function Library() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Library</h1>
        <p className="subtitle">All protocols and reference guides</p>
      </div>

      {/* Protocol Grid */}
      <div className="section">
        <div className="section-subtitle">Protocols</div>
        <div className="protocol-grid">
          <Link to="/library/sleep" className="protocol-tile">
            <span className="tile-icon">🌙</span>
            <span className="tile-title">Sleep</span>
            <span className="tile-desc">Architecture, wind-down, environment</span>
          </Link>
          <Link to="/library/breathwork/cyclic-sighing" className="protocol-tile">
            <span className="tile-icon">🫁</span>
            <span className="tile-title">Breathwork</span>
            <span className="tile-desc">7 techniques + meditation</span>
          </Link>
          <Link to="/library/dopamine" className="protocol-tile">
            <span className="tile-icon">📱</span>
            <span className="tile-title">Dopamine</span>
            <span className="tile-desc">Digital hygiene & environment</span>
          </Link>
          <Link to="/library/social" className="protocol-tile">
            <span className="tile-icon">🤝</span>
            <span className="tile-title">Social</span>
            <span className="tile-desc">Connection framework</span>
          </Link>
          <Link to="/schedule" className="protocol-tile">
            <span className="tile-icon">🧠</span>
            <span className="tile-title">Schedule</span>
            <span className="tile-desc">Full daily circadian protocol</span>
          </Link>
        </div>
      </div>

      {/* Quick Reference - Breathwork */}
      <div className="section">
        <div className="section-title">Breathwork Quick Reference</div>
        <div className="card">
          {quickReference.map((q, i) => (
            <Link key={i} to={`/library/breathwork/${q.link}`} style={{textDecoration:'none',color:'inherit'}}>
              <div className="exercise-row">
                <div style={{flex:1}}>
                  <div className="exercise-name" style={{fontSize:14}}>{q.situation}</div>
                  <div style={{fontSize:12,color:'var(--blue)',marginTop:1}}>{q.technique}</div>
                </div>
                <div className="exercise-detail">{q.duration}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Startup Sequence */}
      <div className="section">
        <div className="section-title">Startup Sequence</div>
        <p className="subtitle" style={{marginBottom:12}}>How to phase in the full protocol</p>
        {startupSequence.map((s, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div className="flex-between" style={{marginBottom:6}}>
              <div style={{fontSize:15,fontWeight:700}}>{s.title}</div>
              <span className="tag tag-blue">{s.week}</span>
            </div>
            {s.items.map((item, j) => (
              <div key={j} style={{fontSize:13,color:'var(--text-secondary)',padding:'3px 0 3px 14px',position:'relative'}}>
                <span style={{position:'absolute',left:0,color:'var(--green)'}}>·</span>{item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
