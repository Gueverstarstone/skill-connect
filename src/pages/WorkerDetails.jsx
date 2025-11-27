import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWorkers } from "../api/api";
import styles from "./workerdetails.module.css";

export default function WorkerDetails() {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    async function fetchWorker() {
      const allWorkers = await getWorkers();
      const foundWorker = allWorkers.find((w) => w.id === id);
      setWorker(foundWorker);
    }
    fetchWorker();
  }, [id]);

  if (!worker) return <p>Loading worker details...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{worker.name}</h1>
      <img src={worker.avatar || worker.profilePicture} alt={worker.name} className={styles.avatar} />
      <p><strong>Category:</strong> {worker.category}</p>
      <p><strong>Speciality:</strong> {worker.speciality}</p>
      <p><strong>Experience:</strong> {worker.experience} years</p>
      <p><strong>Location:</strong> {worker.location}</p>
      <p><strong>Completed Jobs:</strong> {worker.completedJobs}</p>
      <p><strong>Bio:</strong> {worker.bio}</p>
      <p><strong>Skills:</strong> {worker.skills.join(", ")}</p>
    </div>
  );
}
