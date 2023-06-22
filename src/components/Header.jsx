import styles from "@/styles/header.module.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">me.</NavLink>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.link}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-navlink" : "")}
          >
            Home
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-navlink" : "")}
          >
            Projects
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-navlink" : "")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
