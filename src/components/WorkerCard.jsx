import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import styles from "./workercard.module.css";

/*
  WorkerCard Component
  --------------------
  - Displays basic worker info in a card layout
  - Accepts worker props { id, name, job, status }
  - Clicking the "View Details" link redirects to /workers/:id
*/

export default function WorkerCard({ worker }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.name}>{worker.name}</h3>
        <p className={styles.job}>{worker.job}</p>

        {/* Status Badge Component */}
        <StatusBadge status={worker.status} />
      </div>

      {/* Opens detailed page */}
      <Link to={`/workers/${worker.id}`} className={styles.detailsBtn}>
        View Details →
      </Link>
    </div>
  );
}
