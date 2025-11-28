import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Clientspage from "./Clientpage";

function Clients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/workers")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const filteredClients = clients.filter((w) => {
    const term = search.toLowerCase();
    return (
      w.name.toLowerCase().includes(term) ||
      w.title.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <div className="clients-search">
        <input
          type="text"
          placeholder="Search by name or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="clients-grid">
        {filteredClients.map((client) => (
          <Clientspage key={client.id} {...client} />
        ))}
      </div>
    </>
  );
}

export default Clients;
