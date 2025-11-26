import React from "react";
import WorkerCard from "../components/WorkerCard";
import styles from "./workers.module.css";

export default function Workers() {
  // Mock worker data
  const workerList = [
    { id: 1, name: "Alice", job: "Plumber", status: "Active" },
    { id: 2, name: "Bob", job: "Electrician", status: "Busy" },
    { id: 3, name: "Charlie", job: "Carpenter", status: "Offline" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Workers</h1>
      <p className={styles.subtitle}>Select a worker to view details.</p>

      {/* Grid of cards */}
      <div className={styles.workerGrid}>
        {workerList.map((w) => (
          <WorkerCard key={w.id} worker={w} />
        ))}
      </div>
    </div>
  );
}
