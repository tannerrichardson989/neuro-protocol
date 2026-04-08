import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom'
import Today from './pages/Today'
import Schedule from './pages/Schedule'
import Train from './pages/Train'
import TrainDay from './pages/TrainDay'
import Nutrition from './pages/Nutrition'
import Library from './pages/Library'
import BreathworkDetail from './pages/BreathworkDetail'
import SleepPage from './pages/SleepPage'
import DopaminePage from './pages/DopaminePage'
import SocialPage from './pages/SocialPage'
import TrackingPage from './pages/TrackingPage'

function TabIcon({ name }) {
  const icons = {
    today: <svg viewBox="0 0 24 24"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>,
    schedule: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>,
    train: <svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>,
    nutrition: <svg viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/></svg>,
    library: <svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>,
  }
  return icons[name] || null
}

function BackButton({ to, label }) {
  const navigate = useNavigate()
  return (
    <div className="nav-header">
      <button className="back-btn" onClick={() => to ? navigate(to) : navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        {label || 'Back'}
      </button>
    </div>
  )
}

export { BackButton }

export default function App() {
  const location = useLocation()
  const isSubPage = location.pathname.split('/').length > 2

  return (
    <div className="app-container">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/train" element={<Train />} />
          <Route path="/train/:day" element={<TrainDay />} />
          <Route path="/nutrition/*" element={<Nutrition />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/breathwork/:id" element={<BreathworkDetail />} />
          <Route path="/library/sleep" element={<SleepPage />} />
          <Route path="/library/dopamine" element={<DopaminePage />} />
          <Route path="/library/social" element={<SocialPage />} />
          <Route path="/library/tracking" element={<TrackingPage />} />
        </Routes>
      </div>

      <nav className="tab-bar">
        <NavLink to="/" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`} end>
          <TabIcon name="today" /><span>Today</span>
        </NavLink>
        <NavLink to="/schedule" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`}>
          <TabIcon name="schedule" /><span>Schedule</span>
        </NavLink>
        <NavLink to="/train" className={({isActive}) => `tab-item ${isActive || location.pathname.startsWith('/train') ? 'active' : ''}`}>
          <TabIcon name="train" /><span>Train</span>
        </NavLink>
        <NavLink to="/nutrition" className={({isActive}) => `tab-item ${isActive || location.pathname.startsWith('/nutrition') ? 'active' : ''}`}>
          <TabIcon name="nutrition" /><span>Nutrition</span>
        </NavLink>
        <NavLink to="/library" className={({isActive}) => `tab-item ${isActive || location.pathname.startsWith('/library') ? 'active' : ''}`}>
          <TabIcon name="library" /><span>Library</span>
        </NavLink>
      </nav>
    </div>
  )
}
