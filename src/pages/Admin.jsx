import React from "react";
import styles from "./admin.module.css";

export default function Admin() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.subtitle}>
        CRUD panel of workers will be added here by member 2.
      </p>
    </div>
  );
}
