import styles from "@/styles/header.module.css";

import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

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
            {t("navbar.home")}
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-navlink" : "")}
          >
            {t("navbar.projects")}
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-navlink" : "")}
          >
            {t("navbar.contact")}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
