import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users/')
      .then(r => r.json())
      .then(setUsers)
      .catch(() => setUsers([]));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.username || u.email}</li>
        ))}
      </ul>
    </div>
  );
}
