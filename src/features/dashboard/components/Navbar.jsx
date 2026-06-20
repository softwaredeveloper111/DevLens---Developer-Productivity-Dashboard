import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <NavLink to="/dashboard" className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className={styles.logoText}>DevLens</span>
        <span className={styles.badge}>beta</span>
      </NavLink>

      {/* Center: Nav links */}
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>Documentation</a>
        <a href="#" className={styles.navLink}>APIs</a>
        <a href="#" className={styles.navLink}>About</a>
      </div>

      {/* Right: Theme toggle */}
      <div className={styles.navRight}>
        <button className={styles.themeToggle} aria-label="Toggle theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          Theme
        </button>

        {/* Mobile hamburger */}
        <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="Open menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
