import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { meals, weeklyMealPlan, snacks, groceryList } from '../data/meals'
import { slots, medications, introductionSchedule, warningSymptoms } from '../data/supplements'

function NutritionTabs() {
  const location = useLocation()
  const path = location.pathname
  const tab = path.includes('supplements') ? 'supplements' : path.includes('grocery') ? 'grocery' : 'meals'

  return (
    <div className="page">
      <div className="page-header">
        <h1>Nutrition</h1>
      </div>

      <div className="segmented">
        <Link to="/nutrition" className={`seg-btn ${tab === 'meals' ? 'active' : ''}`}>Meals</Link>
        <Link to="/nutrition/grocery" className={`seg-btn ${tab === 'grocery' ? 'active' : ''}`}>Grocery</Link>
        <Link to="/nutrition/supplements" className={`seg-btn ${tab === 'supplements' ? 'active' : ''}`}>Supplements</Link>
      </div>

      <Routes>
        <Route index element={<MealsTab />} />
        <Route path="grocery" element={<GroceryTab />} />
        <Route path="supplements" element={<SupplementsTab />} />
      </Routes>
    </div>
  )
}

function MealsTab() {
  const [expanded, setExpanded] = useState(null)
  return (
    <>
      <div className="section">
        <div className="section-subtitle">4 Rotation Meals</div>
        {meals.map(meal => (
          <div key={meal.id} className="meal-card" onClick={() => setExpanded(expanded === meal.id ? null : meal.id)}>
            <div className="meal-card-header">
              <div>
                <div className="meal-card-title">{meal.emoji} {meal.name}</div>
                <div style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>{meal.targets}</div>
              </div>
              <div className="meal-card-time">{meal.time}</div>
            </div>
            {expanded === meal.id && (
              <>
                <div className="ingredient-list">
                  {meal.ingredients.map((ing, i) => (
                    <div key={i} className="ingredient-item">
                      <div>
                        <div>{ing.item}</div>
                        <div className="why">{ing.why}</div>
                      </div>
                      <div className="amount">{ing.amount}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding:'0 16px 14px',fontSize:13,color:'var(--text-tertiary)'}}>
                  <strong>Prep:</strong> {meal.prep}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-subtitle">Weekly Meal Plan</div>
        <div className="card" style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>
            </thead>
            <tbody>
              {weeklyMealPlan.map(d => (
                <tr key={d.day}>
                  <td><strong>{d.day}</strong><br/><span style={{fontSize:10,color:'var(--text-tertiary)'}}>{d.training}</span></td>
                  <td>{d.breakfast}</td>
                  <td>{d.lunch}</td>
                  <td>{d.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-subtitle">Snacks</div>
        <div className="card">
          {snacks.map((s, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{s.item}</div>
                <div style={{fontSize:11,color:'var(--blue)',marginTop:2}}>{s.target}</div>
              </div>
              <div className="exercise-detail">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function GroceryTab() {
  const total = groceryList.reduce((sum, cat) =>
    sum + cat.items.reduce((s, item) => s + parseFloat(item.price.replace('$','')), 0)
  , 0)

  return (
    <>
      <div className="info-box success" style={{marginBottom:16}}>
        <p><strong>Week 1: ~${total.toFixed(0)}</strong> · Week 2+ drops to ~$55–65 (pantry staples last 2–4 weeks)</p>
      </div>
      {groceryList.map(cat => (
        <div key={cat.category} className="grocery-category">
          <div className="grocery-category-title">{cat.category}</div>
          {cat.items.map((item, i) => (
            <div key={i} className="grocery-item">
              <div className="grocery-name">{item.name}</div>
              <div className="grocery-qty">{item.qty}</div>
              <div className="grocery-price">{item.price}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

function SupplementsTab() {
  return (
    <>
      {/* Medication Stack */}
      <div className="section">
        <div className="section-subtitle">Your Medications</div>
        <div className="card">
          {medications.map((med, i) => (
            <div key={i} className="exercise-row">
              <div style={{flex:1}}>
                <div className="exercise-name">{med.name}</div>
                <div style={{fontSize:11,color:'var(--text-tertiary)',marginTop:1}}>{med.mechanism}</div>
              </div>
              <div className="exercise-detail">{med.class}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slots */}
      {slots.map(slot => (
        <div key={slot.id} className="section" id={slot.id}>
          <div className="supp-slot">
            <div className="supp-slot-header">
              <div className="supp-slot-title">{slot.name.split('—')[0].trim()}</div>
              <div className="supp-slot-time">{slot.time}</div>
            </div>
            {slot.note && (
              <div style={{padding:'8px 16px',fontSize:12,color:'var(--text-tertiary)',borderBottom:'0.5px solid var(--separator)'}}>
                {slot.note}
              </div>
            )}
            {slot.supplements.map((s, i) => (
              <div key={i} className="supp-item">
                <div className={`supp-flag ${s.flag}`} />
                <div className="supp-info">
                  <div className="supp-name">{s.name}</div>
                  <div className="supp-dose">{s.dose}</div>
                  <div className="supp-target">{s.target}</div>
                  {s.note && <div style={{fontSize:11,color: s.flag === 'red' ? 'var(--red)' : 'var(--text-tertiary)',marginTop:2}}>{s.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Interaction Flags Legend */}
      <div className="section">
        <div className="section-subtitle">Flag Legend</div>
        <div className="card">
          <div style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0'}}><div className="supp-flag green"/><span style={{fontSize:13}}>GREEN — No known concerns</span></div>
          <div style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0'}}><div className="supp-flag yellow"/><span style={{fontSize:13}}>YELLOW — Lower risk, worth monitoring</span></div>
          <div style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0'}}><div className="supp-flag red"/><span style={{fontSize:13}}>RED — Discuss with prescriber first</span></div>
        </div>
      </div>

      {/* Introduction Schedule */}
      <div className="section">
        <div className="section-subtitle">Introduction Schedule</div>
        {introductionSchedule.map((s, i) => (
          <div key={i} className="card" style={{marginBottom:6}}>
            <div style={{fontSize:14,fontWeight:600}}>{s.week}</div>
            <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:2}}>{s.items}</div>
            <div style={{fontSize:11,color:'var(--text-tertiary)',marginTop:4}}>{s.note}</div>
          </div>
        ))}
      </div>

      {/* Warning Symptoms */}
      <div className="section">
        <div className="section-subtitle">Warning Signs</div>
        {warningSymptoms.map((w, i) => (
          <div key={i} className={`info-box ${w.severity}`} style={{marginBottom:8}}>
            <p><strong>{w.type}</strong><br/>{w.symptoms}<br/><em>{w.action}</em></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default NutritionTabs
