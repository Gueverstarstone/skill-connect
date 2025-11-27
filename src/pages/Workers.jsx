import React, { useState, useEffect } from "react";
import { getWorkers } from "../api/api";
import WorkerCard from "../components/WorkerCard";
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
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}
