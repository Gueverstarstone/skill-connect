import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Admin
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/workers"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Workers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
