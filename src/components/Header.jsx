import styles from "@/styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>me.</div>
      <nav></nav>
    </header>
  );
}

export default Header;
