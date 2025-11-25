import React from "react";
import styles from "./workers.module.css";

export default function Workers() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Workers</h1>
      <p className={styles.subtitle}>
        Workers will appear here once integrated with 2ND Member from an API
      </p>
      <p className={styles.placeholder}>(Data coming soon...)</p>
    </div>
  );
}
