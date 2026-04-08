import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sleepProtocol } from '../data/protocols'
import { BackButton } from '../App'

export default function SleepPage() {
  const sp = sleepProtocol
  return (
    <div className="page">
      <BackButton to="/library" label="Library" />
      <div className="page-header">
        <h1>Sleep Protocol</h1>
        <p className="subtitle">The master regulator. Every system resets during sleep.</p>
      </div>

      <div className="info-box" style={{marginBottom:16}}>
        <p><strong>Medication context:</strong> Focalin XR delays onset. Lexapro suppresses REM. Lamotrigine may cause insomnia. This protocol counteracts all three.</p>
      </div>

      {/* Anchor Times */}
      <div className="section">
        <div className="section-title">Anchor Your Wake Time</div>
        <div className="card">
          {sp.anchors.map((a, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{a.rule}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{a.why}</div>
              </div>
              <div className="exercise-detail" style={{maxWidth:140,textAlign:'right',whiteSpace:'normal',fontSize:12}}>{a.setting}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Light Protocol */}
      <div className="section">
        <div className="section-title">Light Protocol</div>
        <div className="card">
          {sp.lightProtocol.map((l, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name" style={{fontSize:14}}>{l.action}</div>
                <div style={{fontSize:11,color:'var(--text-tertiary)',marginTop:2}}>{l.why}</div>
              </div>
              <div className="exercise-detail" style={{fontSize:11,maxWidth:100,textAlign:'right',whiteSpace:'normal'}}>{l.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Temperature */}
      <div className="section">
        <div className="section-title">Temperature Protocol</div>
        <div className="card">
          {sp.temperatureProtocol.map((t, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{t.intervention}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{t.why}</div>
              </div>
              <div className="exercise-detail">{t.timing}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wind-Down Sequence */}
      <div className="section">
        <div className="section-title">Wind-Down Sequence</div>
        <div className="timeline" style={{paddingLeft:20}}>
          {sp.windDown.map((w, i) => (
            <div key={i} className="timeline-item" style={{cursor:'default'}}>
              <div className="timeline-time">{w.time}</div>
              <div className="timeline-action">{w.action}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Environment Checklist */}
      <div className="section">
        <div className="section-title">Environment Checklist</div>
        <div className="card">
          {sp.environmentChecklist.map((item, i) => (
            <div key={i} className="checklist-item">
              <CheckboxLocal />
              <span className="checklist-text">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 AM Protocol */}
      <div className="section">
        <div className="section-title">If You Wake at 3 AM</div>
        <div className="info-box danger" style={{marginBottom:10}}>
          <p><strong>Do NOT:</strong> {sp.threeAmProtocol.doNot.join(' · ')}</p>
        </div>
        <div className="info-box success">
          <p><strong>Do:</strong> {sp.threeAmProtocol.doThis.join(' · ')}</p>
        </div>
      </div>

      {/* Cognitive Shuffle */}
      <div className="section">
        <div className="section-title">Cognitive Shuffle</div>
        <div className="card">
          <div className="protocol-text" style={{fontSize:14}}>{sp.cognitiveShuffle}</div>
        </div>
      </div>
    </div>
  )
}

function CheckboxLocal() {
  const [checked, setChecked] = useState(false)
  return <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => setChecked(!checked)} />
}
