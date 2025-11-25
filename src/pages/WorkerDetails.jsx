import React from "react";
import { useParams } from "react-router-dom";
import styles from "./workerdetails.module.css";

export default function WorkerDetails() {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Worker Details <span className={styles.highlight}>(ID: {id})</span>
      </h1>
      <p className={styles.subtitle}>
        Member 3 will load worker info & job request form here.
      </p>
      <div className={styles.detailsCard}>
        <p>Name: Placeholder Name</p>
        <p>Position: Placeholder Position</p>
        <p>Status: Active</p>
        {/* You can replace this with dynamic data from API later */}
      </div>
    </div>
  );
}
