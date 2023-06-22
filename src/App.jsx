import Header from "@/components/Header.jsx";

import styles from "@/styles/app.module.css";

import { Outlet } from "react-router-dom";

import { useEffect } from "react";

import i18next from "i18next";

function App() {
  useEffect(() => {
    if (localStorage.getItem("language")) return;

    // get user's browser language
    const userLanguage = (navigator.language || navigator.userLanguage).split(
      "-"
    )[0];

    // change the app language
    localStorage.setItem("language", userLanguage);
    i18next.changeLanguage(userLanguage);
  }, []);

  return (
    <main className={styles.container}>
      <Header />

      <Outlet />
    </main>
  );
}

export default App;
