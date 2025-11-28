import React, { useState } from "react";
import Header from "../components/Header";
import Clientspage from "./Clientpage";
import clientsAll from "./ClientsData";

function Clients() {
  const [search, setSearch] = useState("");

  const filteredClientsAll = clientsAll.filter((w) => {
    const term = search.toLowerCase();
    return (
      w.name.toLowerCase().includes(term) ||
      w.title.toLowerCase().includes(term)
    );
  });

  return (
    <>
      {/* <Header /> */}

      <div className="clients-search">
        <input
          type="text"
          placeholder="Search by name or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="clients-grid">
        {filteredClientsAll.map((client) => (
          <Clientspage key={client.id} {...client} />
        ))}
      </div>
    </>
  );
}

export default Clients;
