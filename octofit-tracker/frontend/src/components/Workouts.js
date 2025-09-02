import React, { useEffect, useState } from 'react';

export default function Workouts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/api/workouts/')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {items.map(w => (
          <li key={w._id}>{w.name} — {w.description}</li>
        ))}
      </ul>
    </div>
  );
}
