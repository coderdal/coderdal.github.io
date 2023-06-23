import styles from "@/styles/home.module.css";

import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { ImGithub } from "react-icons/im";

import CountUp from "react-countup";

function Home() {
  return (
    <>
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
              As a Software Developer I have experience in developing Frontend
              and Backend applications. I have a strong foundation in
              <span> HTML, CSS, JavaScript React JS, Vue JS and UI/UX</span> as
              well as experience with modern frameworks. I have a track record
              of delivering high-quality, user-friendly web applications, and I
              am skilled in both responsive design and mobile development.
            </p>
            <p className={styles.par}>
              I have experience collaborating with cross-functional teams,
              including designers, back-end developers, and project managers.
            </p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={6} />+
            </span>
            <span className={styles.description}>Years in Web Development</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={20} />+
            </span>
            <span className={styles.description}>Freelance Work</span>
          </div>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={30} />+
            </span>
            <span className={styles.description}>Projects</span>
          </div>
        </div>
      </section>
      {/* Social */}
      <div className={styles.social}>
        <a
          href="mailto:erdalcodes@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <IoMdMail />
        </a>
        <a
          href="https://github.com/coderdal"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <ImGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammederdal/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <IoLogoLinkedin />
        </a>
      </div>
    </>
  );
}

export default Home;
