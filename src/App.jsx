import Header from "@/components/Header.jsx";

import styles from "@/styles/app.module.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className={styles.container}>
      <Header />

      <Outlet />
    </main>
  );
}

export default App;
