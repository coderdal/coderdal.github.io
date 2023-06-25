import styles from "@/styles/loading.module.css";

import { useEffect } from "react";

function Loading() {
  useEffect(() => {
    console.log("loading");
  });

  return (
    <section className={styles.section}>
      <div className={styles.anim}>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
      </div>
      <p className={styles.text}>Loading...</p>
    </section>
  );
}

export default Loading;
