import styles from "@/styles/header.module.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">me.</Link>
      </div>
      <nav></nav>
    </header>
  );
}

export default Header;
