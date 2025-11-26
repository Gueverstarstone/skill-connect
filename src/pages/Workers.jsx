import React, { useState } from "react";
import styles from "./workers.module.css";

export default function Workers() {
  // Mock job requests for workers
  const initialJobs = [
    {
      id: 1,
      clientName: "Alice",
      job: "Plumber",
      description: "Fix leaking bathroom sink",
      location: "Nairobi",
      date: "2025-11-28",
      status: "Pending",
    },
    {
      id: 2,
      clientName: "Bob",
      job: "Electrician",
      description: "Install ceiling lights",
      location: "Westlands",
      date: "2025-11-27",
      status: "Pending",
    },
    {
      id: 3,
      clientName: "Charlie",
      job: "Carpenter",
      description: "Build a wooden cabinet",
      location: "Kasarani",
      date: "2025-11-30",
      status: "Accepted",
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);

  const handleAccept = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "Accepted" } : job));
  };

  const handleReject = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "Rejected" } : job));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Job Requests</h1>

      <div className={styles.workerGrid}>
        {jobs.map(job => (
          <div key={job.id} className={styles.jobCard}>
            {/* Status Badge */}
            {job.status === "Pending" && <span className={styles.pendingBadge}>Pending</span>}
            {job.status === "Accepted" && <span className={styles.acceptedBadge}>Accepted</span>}
            {job.status === "Rejected" && <span className={styles.rejectedBadge}>Rejected</span>}

            <h3 className={styles.clientName}>{job.clientName}</h3>
            <p className={styles.jobTitle}>{job.job}</p>
            <p className={styles.description}>{job.description}</p>

            <div className={styles.infoRow}>
              <span>📍 {job.location}</span>
              <span>📅 {job.date}</span>
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={() => handleAccept(job.id)}
                disabled={job.status === "Accepted"}
                className={styles.acceptBtn}
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(job.id)}
                disabled={job.status === "Rejected"}
                className={styles.rejectBtn}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
