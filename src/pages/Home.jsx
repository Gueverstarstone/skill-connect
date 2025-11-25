import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleSpan}>
        Connect with Skilled Professionals Instantly
      </h1>
      <p>
        Discover trusted, verified professionals from every occupation across
        Kenya. Skill Connect makes it easy to find the right expert, build
        strong teams, or grow your own career—all with confidence and
        transparency.
      </p>
      <p className={styles.subtitle}>Select how you'd like to continue:</p>

      <div className={styles.roles}>
        <Link to="/workers" className={styles.roleBtn}>
          Find Workers
        </Link>

        <Link to="/admin" className={`${styles.roleBtn} ${styles.admin}`}>
          Admin Panel
        </Link>
      </div>
    </div>
  );
}
