import { useParams, Link } from 'react-router-dom'
import { techniques, meditationStyles, quickReference } from '../data/breathwork'
import { BackButton } from '../App'

export default function BreathworkDetail() {
  const { id } = useParams()
  const technique = techniques.find(t => t.id === id)

  return (
    <div className="page">
      <BackButton to="/library" label="Library" />

      {technique ? (
        <>
          <div className="page-header" style={{marginBottom:8}}>
            <h1>{technique.name}</h1>
            <p className="subtitle">{technique.target}</p>
          </div>

          <div style={{marginBottom:12}}>
            {technique.systems.map(s => <span key={s} className="tag tag-purple">{s}</span>)}
          </div>

          <div className="technique-meta" style={{marginBottom:16}}>
            <div className="technique-meta-item"><strong>Duration:</strong> {technique.duration}</div>
          </div>

          <div className="info-box" style={{marginBottom:16}}>
            <p><strong>When to use:</strong> {technique.when}</p>
          </div>

          <div className="section">
            <div className="section-title" style={{fontSize:18}}>How To</div>
            <div className="card">
              <ol className="step-list">
                {technique.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="section">
            <div className="section-title" style={{fontSize:18}}>Why It Works</div>
            <div className="card">
              <div className="protocol-text">{technique.why}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="page-header"><h1>Breathwork</h1></div>
      )}

      {/* All Techniques */}
      <div className="section">
        <div className="section-title">All Techniques</div>
        {techniques.map(t => (
          <Link key={t.id} to={`/library/breathwork/${t.id}`} className="card-link" style={{marginBottom:6}}>
            <div className="card-link-row">
              <div className="card-link-content">
                <div className="title">{t.name}</div>
                <div className="desc">{t.duration} · {t.target.split('.')[0]}</div>
              </div>
              <span className="chevron">›</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Meditation Styles */}
      <div className="section">
        <div className="section-title">Meditation Styles</div>
        {meditationStyles.map((m, i) => (
          <div key={i} className="card" style={{marginBottom:8}}>
            <div style={{fontSize:15,fontWeight:600}}>{m.style}</div>
            <div style={{fontSize:12,color:'var(--blue)',marginTop:2}}>{m.systems}</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:4}}>{m.best}</div>
            <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{m.duration}</div>
          </div>
        ))}
      </div>

      {/* Quick Reference */}
      <div className="section">
        <div className="section-title">When to Use What</div>
        <div className="card">
          {quickReference.map((q, i) => (
            <Link key={i} to={`/library/breathwork/${q.link}`} style={{textDecoration:'none',color:'inherit'}}>
              <div className="exercise-row">
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:500}}>{q.situation}</div>
                  <div style={{fontSize:12,color:'var(--blue)',marginTop:1}}>{q.technique}</div>
                </div>
                <div className="exercise-detail">{q.duration}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
