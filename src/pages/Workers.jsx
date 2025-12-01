import React, { useEffect, useState } from "react";
import { getWorkers } from "../api/api";
import styles from "./workers.module.css";

export default function Workers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    async function fetchWorkers() {
      const data = await getWorkers();
      setWorkers(data);
    }
    fetchWorkers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Workers</h1>
      <div className={styles.workerGrid}>
        {workers.map((worker) => (
          <div key={worker.id} className={styles.workerCard}>
            <img src={worker.avatar || worker.profilePicture} alt={worker.name} className={styles.avatar} />
            <h2>{worker.name}</h2>
            <p><strong>Speciality:</strong> {worker.speciality}</p>
            <p><strong>Category:</strong> {worker.category}</p>
            <p><strong>Experience:</strong> {worker.experience} years</p>
            <p><strong>Location:</strong> {worker.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
