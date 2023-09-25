import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch the list of client names from your Express API
    fetch('http://localhost:5000/api/clientNames')
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client}>
            <Link to={`/clients/${client}`}>{client}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
