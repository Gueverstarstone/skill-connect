import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import RequestServiceForm from "../components/RequestServiceForm";
import styles from "./workerdetails.module.css";

export default function WorkerDetails() {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchWorker() {
      try {
        const docRef = doc(db, "workers", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setWorker({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Worker not found");
        }
      } catch (err) {
        console.error("Error fetching worker:", err);
      }
    }

    fetchWorker();
  }, [id]);

  if (!worker) return <p>Loading worker details...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{worker.name}</h1>

      <img
        src={worker.img?.src || "default-avatar.jpg"}
        alt={worker.name}
        className={styles.avatar}
      />

      <div className={styles.detailsCard}>
        <p>
          <span className={styles.highlight}>Title:</span> {worker.title}
        </p>
        <p>
          <span className={styles.highlight}>About:</span> {worker.about}
        </p>
        <p>
          <span className={styles.highlight}>Experience:</span>{" "}
          {worker.experience}
        </p>
        <p>
          <span className={styles.highlight}>Country:</span> {worker.country}
        </p>
        <p>
          <span className={styles.highlight}>Availability:</span>{" "}
          {worker.availability}
        </p>
        <p>
          <span className={styles.highlight}>Hourly Rate:</span>{" "}
          {worker.hourlyRate}
        </p>
        <p>
          <span className={styles.highlight}>Phone:</span> {worker.phone}
        </p>
        <p>
          <span className={styles.highlight}>Ratings:</span> {worker.ratings} ⭐
        </p>
        <p>
          <span className={styles.highlight}>Languages:</span>{" "}
          {worker.languages?.join(", ")}
        </p>
        <p>
          <span className={styles.highlight}>Services:</span>{" "}
          {worker.services?.join(", ")}
        </p>
      </div>

      <div className={styles.detailsCard}>
        <p>
          <span className={styles.highlight}>Location:</span>
          <a
            href={worker.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>
      </div>

      <div className={styles.profileButtons}>
        <button onClick={() => setShowForm(true)}>Request Service</button>
      </div>

      {showForm && (
        <div className={styles.formOverlay}>
          <RequestServiceForm
            worker={worker}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}
