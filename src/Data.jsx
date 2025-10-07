import React, { useState, useEffect } from 'react';

export default function Data() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading user data... ⏳</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {datas.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> <br />
            Company: {user.company.name} <br />
            City: {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
