import React from "react";
import { Link } from "react-router-dom";
import styles from "./workers.module.css";

export default function Workers() {
  // Temporary mock data until your API is ready
  const workerList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Workers</h1>
      <p className={styles.subtitle}>
        Workers will appear here once integrated with 2ND Member from an API
      </p>

      {/* Worker list */}
      <ul className={styles.workerList}>
        {workerList.map((worker) => (
          <li key={worker.id} className={styles.workerItem}>
            <Link to={`/workers/${worker.id}`} className={styles.workerLink}>
              {worker.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
