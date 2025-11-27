import React from "react";
import { NavLink } from "react-router-dom";
import workers_logo from "../assets/workers_logo.png";

function Header() {
  return (
    <header className="nav_header">
      <div className="nav_header-inner">
        {/* LEFT SIDE — Brand */}
        <div className="header-left">
          <img
            className="logo_header"
            src={workers_logo}
            alt="Skill-Connect logo"
          />

          <div className="nav_header-text">
            <span className="nav_header-tagline">SKILL-CONNECT</span>
            <h2 className="header_title">Browse Clients</h2>
            <p className="header_subtitle">
              Find trusted professionals and services near you.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — Navigation Links */}
        <ul className="header-links">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "header-link active-header-link" : "header-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "header-link active-header-link" : "header-link"
              }
            >
              Admin
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive ? "header-link active-header-link" : "header-link"
              }
            >
              Workers
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
