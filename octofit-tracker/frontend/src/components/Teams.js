import React, { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('/api/teams/')
      .then(r => r.json())
      .then(setTeams)
      .catch(() => setTeams([]));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(t => (
          <li key={t._id}>{t.name} — members: {t.members ? t.members.length : 0}</li>
        ))}
      </ul>
    </div>
  );
}
