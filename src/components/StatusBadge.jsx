import React from "react";
import styles from "./statusbadge.module.css";

export default function StatusBadge({ status }) {
  //color logic based on worker status
  const statusColors = {
    Active: styles.active,
    Busy: styles.busy,
    Offline: styles.offline,
  };
  return (
    <div>
      <span className={`${styles.badge} ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
}
