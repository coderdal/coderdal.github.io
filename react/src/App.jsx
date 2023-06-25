import Header from "@/components/Header.jsx";

import Loading from "@/components/Loading.jsx";

import styles from "@/styles/app.module.css";

import { Outlet } from "react-router-dom";

import i18next from "i18next";

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [location]);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className={styles.container}>
      <Header />

      <Outlet />
    </main>
  );
}

export default App;
