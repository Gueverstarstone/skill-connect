import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Your Firebase setup
import styles from "./workerdetails.module.css";

export default function WorkerDetails() {
  const { id } = useParams(); // Get worker ID from URL params
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    // Fetch worker details from Firebase
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

    fetchWorker(); // Fetch data when the component mounts
  }, [id]);

  if (!worker) return <p>Loading worker details...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{worker.name}</h1>
      <img
        src={worker.avatar || worker.profilePicture}
        alt={worker.name}
        className={styles.avatar}
      />

      <div className={styles.detailsCard}>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Category:</span> {worker.category}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Speciality:</span> {worker.speciality}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Experience:</span> {worker.experience} years
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Location:</span> {worker.location}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Completed Jobs:</span> {worker.completedJobs}
        </p>
      </div>

      <div className={styles.detailsCard}>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Bio:</span> {worker.bio}
        </p>
      </div>

      <div className={styles.detailsCard}>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Skills:</span>
        </p>
        <ul className={styles.skillsList}>
          {worker.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className={styles.contactInfo}>
        <p><span className={styles.highlight}>Email:</span> {worker.email || "Not available"}</p>
        <p><span className={styles.highlight}>Phone:</span> {worker.phone || "Not available"}</p>
      </div>

      <div className={styles.socialLinks}>
        {worker.socialLinks?.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        ))}
      </div>

      <div className={styles.profileButtons}>
        <button>Request Service</button>
      </div>
    </div>
  );
}
