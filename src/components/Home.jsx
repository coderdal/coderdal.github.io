import styles from "@/styles/home.module.css";

function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.introduce}>
        <div className={styles.hello}>
          <span>Hi I&apos;m</span>
          <br />
          Muhammed ERDAL
          <br />
          <span className={styles.title}>a Software Developer</span>
        </div>
        <div className={styles.brief}>
          <p className={styles.par}>
            As a Software Developer I have experience in developing Frontend and
            Backend applications. I have a strong foundation in
            <span> HTML, CSS, JavaScript React JS, Vue JS and UI/UX</span> as
            well as experience with modern frameworks. I have a track record of
            delivering high-quality, user-friendly web applications, and I am
            skilled in both responsive design and mobile development.
          </p>
          <p className={styles.par}>
            I have experience collaborating with cross-functional teams,
            including designers, back-end developers, and project managers.
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <span className={styles.count}>6+</span>
          <span className={styles.description}>Years in Web Development</span>
        </div>
        <div className={styles.skill}>
          <span className={styles.count}>50+</span>
          <span className={styles.description}>Freelance Work</span>
        </div>
        <div className={styles.skill}>
          <span className={styles.count}>20+</span>
          <span className={styles.description}>Projects</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
