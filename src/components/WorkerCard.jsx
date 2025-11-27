import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge"; // Assuming you want to show status
import styles from "./workercard.module.css";

/*
  WorkerCard Component
  --------------------
  - Displays basic worker info in a card layout
  - Accepts worker props { id, name, speciality, location, experience }
  - Clicking the "View Details" link redirects to /workers/:id
*/

export default function WorkerCard({ worker }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        {/* Display worker name */}
        <h3 className={styles.name}>{worker.name}</h3>

        {/* Specialty displayed as a button */}
        <button className={styles.specialtyBtn}>
          {worker.speciality}
        </button>

        {/* Worker info */}
        <p className={styles.location}>📍 {worker.location}</p>
        <p className={styles.experience}>👨‍🔧 {worker.experience} years</p>
      </div>

      {/* Opens detailed page */}
      <Link to={`/workers/${worker.id}`} className={styles.detailsBtn}>
        View Details →
      </Link>
    </div>
  );
}
