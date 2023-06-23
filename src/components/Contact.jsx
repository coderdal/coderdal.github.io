import styles from "@/styles/contact.module.css";

import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { ImGithub, ImStackoverflow } from "react-icons/im";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2 className={styles.contactTitle}>{t("contactTitle")}</h2>
      <p className={styles.contactDescription}>{t("contactDescription")}</p>
      <p className={styles.contactDescription}>E-mail: erdalcodes@gmail.com</p>
      <div className={styles.socialLinks}>
        <a href="mailto:erdalcodes@gmail.com" target="_blank" rel="noreferrer">
          <IoMdMail />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammederdal/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/coderdal" target="_blank" rel="noreferrer">
          <ImGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/15223969/coderdal"
          target="_blank"
          rel="noreferrer"
        >
          <ImStackoverflow />
        </a>
      </div>
    </section>
  );
}

export default Contact;
