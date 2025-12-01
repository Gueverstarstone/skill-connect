import React, { useEffect, useState } from "react";
import Clientspage from "./Clientpage";
import { getWorkers } from "../api/api";

function Clients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchClients() {
      const data = await getWorkers();
      setClients(data);
    }
    fetchClients();
  }, []);

  const filteredClients = clients.filter((w) => {
    const term = search.toLowerCase();
    return w.name.toLowerCase().includes(term) || w.title.toLowerCase().includes(term);
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search by name or service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredClients.map((client) => (
          <Clientspage key={client.id} {...client} />
        ))}
      </div>
    </>
  );
}

export default Clients;
