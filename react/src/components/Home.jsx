import styles from "@/styles/home.module.css";

import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { ImGithub } from "react-icons/im";

import CountUp from "react-countup";

import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

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
              {t("homepage.summaryFirst")}
              <span> {t("homepage.summarySecond")}</span>{" "}
              {t("homepage.summaryThird")}
            </p>
            <p className={styles.par}>{t("homepage.summaryFourth")}</p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={6} />+
            </span>
            <span className={styles.description}>
              {t("homepage.yearsindev")}
            </span>
          </div>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={20} />+
            </span>
            <span className={styles.description}>
              {t("homepage.freelanceWork")}
            </span>
          </div>
          <div className={styles.skill}>
            <span className={styles.count}>
              <CountUp end={30} />+
            </span>
            <span className={styles.description}>{t("homepage.projects")}</span>
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
