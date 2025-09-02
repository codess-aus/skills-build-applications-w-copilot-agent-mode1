import React, { useState } from 'react';
import ImageCarousel from './components/ImageCarousel';
import './App.css';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function App() {
  const [view, setView] = useState('users');

  return (
    <div className="App">
      <header className="App-header octofit-header d-flex align-items-center">
        <div style={{ width: 160 }}>
          <ImageCarousel images={['/mona-the-rivetertocat.png', '/steroidtocat.png', '/yogitocat.png']} />
        </div>
        <div>
          <h1 className="mb-0">Octofit Tracker</h1>
          <small className="text-light">Team fitness tracking dashboard</small>
        </div>
      </header>

      <nav className="my-3 d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={() => setView('users')}>Users</button>
        <button className="btn btn-primary" onClick={() => setView('teams')}>Teams</button>
        <button className="btn btn-primary" onClick={() => setView('activities')}>Activities</button>
        <button className="btn btn-primary" onClick={() => setView('leaderboard')}>Leaderboard</button>
        <button className="btn btn-primary" onClick={() => setView('workouts')}>Workouts</button>
      </nav>

      <main className="container">
        {view === 'users' && <Users />}
        {view === 'teams' && <Teams />}
        {view === 'activities' && <Activities />}
        {view === 'leaderboard' && <Leaderboard />}
        {view === 'workouts' && <Workouts />}
      </main>
    </div>
  );
}

export default App;
