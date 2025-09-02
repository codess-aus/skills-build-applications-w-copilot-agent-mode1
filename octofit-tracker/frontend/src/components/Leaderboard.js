import React, { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/api/leaderboard/')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {items.map(l => (
          <li key={l._id}>{l.user && (l.user.username || l.user.email)} — {l.score}</li>
        ))}
      </ol>
    </div>
  );
}
