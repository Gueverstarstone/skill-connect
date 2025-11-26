import React, { useState } from "react";
import WorkerForm from "../components/WorkerForm";
import styles from "./admin.module.css";

export default function Admin() {
  const [workers, setWorkers] = useState([]);

  // receives worker data from WorkerForm
  const handleAddWorker = (worker) => {
    setWorkers([...workers, worker]); // save in frontend
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <WorkerForm onSubmit={handleAddWorker} />

      <h2>Saved Workers</h2>
      <ul>
        {workers.map((w, i) => (
          <li key={i} style={{ marginBottom: "15px", listStyle: "none" }}>
            <img
              src={w.profilePicture}
              alt="avatar"
              width="60"
              height="60"
              style={{ borderRadius: "50%" }}
            />
            <strong>{w.name}</strong> — {w.speciality} ({w.location})
          </li>
        ))}
      </ul>
    </div>
  );
}
