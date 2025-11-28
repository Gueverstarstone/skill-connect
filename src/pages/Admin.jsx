import React, { useState, useEffect } from "react";
import WorkerForm from "../components/WorkerForm";
import { addWorker, getWorkers } from "../api/api";
import styles from "./admin.module.css";

export default function Admin() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    async function fetchWorkers() {
      const data = await getWorkers();
      setWorkers(data);
    }
    fetchWorkers();
  }, []);

  const handleAddWorker = async (worker) => {
    try {
      const newWorker = await addWorker(worker); // Save to backend
      setWorkers([...workers, newWorker]);       // Update local state
    } catch (error) {
      console.error("Error adding worker:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <WorkerForm onSubmit={handleAddWorker} />

      <h2>Saved Workers</h2>
      <ul>
        {workers.map((w) => (
          <li key={w.id} style={{ marginBottom: "15px", listStyle: "none" }}>
            <img
              src={w.profilePicture || w.avatar}
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
