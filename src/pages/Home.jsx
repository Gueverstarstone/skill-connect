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
        {/* Client Card */}
        {/* Client Card */}
        <Link to="/workers" className={styles.card}>
          <h2 className={styles.cardTitle}>I am a Client</h2>
          <p className={styles.cardText}>
            Find qualified workers for jobs you need help with or tasks you
            cannot do yourself.
          </p>

          <div className={styles.btnWrapper}>
            <Link to="/workers" className={styles.findBtn}>
              Find a Worker
            </Link>
          </div>
        </Link>

        {/* Admin Card */}
        <Link to="/admin" className={`${styles.card} ${styles.admin}`}>
          <h2 className={styles.cardTitle}>Admin Panel</h2>
          <p className={styles.cardText}>
            {/* Placeholder — we’ll add admin text later */}
          </p>
        </Link>
      </div>
    </div>
  );
}
