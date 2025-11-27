import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Admin
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Workers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
