import styles from "@/styles/projects.module.css";

import { VscOpenPreview } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.introduction}>
        <h2 className={styles.myProjects}>My Projects</h2>
      </div>
      <div className={styles.list}>
        <div className={styles.project}>
          <div className={styles.details}>
            <h4 className={styles.title}>Antrepo | Management App</h4>
            <p className={styles.description}>
              A web & mobile application developed to manage and monitor the
              warehouse area and works cycle.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.listItem}>
                • Works management, Area management, statistical reporting and
                excel functions were made.
              </li>
              <li className={styles.listItem}>
                • Developed using Vue, Quasar, Cordova, CSS.
              </li>
              <li className={styles.listItem}>
                • Hybrid application were developed.
              </li>
              <li className={styles.listItem}>
                • JWT authorization and Push Notifications service were used.
                ChartJS library were used.
              </li>
              <li className={styles.listItem}>
                • Frontend development, Git configuration were made.
              </li>

              <li className={styles.listItem}>
                • Vuex Store state management.
              </li>
              <li className={styles.listItem}>
                • Backend Service Communication.
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <a className={styles.disabled}>
              <VscOpenPreview />
            </a>
            <a className={styles.disabled}>
              <FiGithub />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.details}>
            <h4 className={styles.title}>Price Coin | Tracking App</h4>
            <p className={styles.description}>
              It allows you to follow the price of many cryptocurrencies
              instantly and more
            </p>
            <ul className={styles.detailList}>
              <li className={styles.listItem}>
                • Developed using React, Redux, Material UI, CSS.
              </li>
              <li className={styles.listItem}>
                • Mobile Responsive | Dark-Light Theme.
              </li>
              <li className={styles.listItem}>
                • Material Design principles were used.
              </li>
              <li className={styles.listItem}>
                • Backend Service Communication.
              </li>
              <li className={styles.listItem}>
                • Up-to-date real price information.
              </li>
              <li className={styles.listItem}>
                • Redux and React Router were used.
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <a
              href="https://pricecoin.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <VscOpenPreview />
            </a>
            <a
              href="https://github.com/coderdal/Price-Coin"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.details}>
            <h4 className={styles.title}>CanYouKnow | Quiz App</h4>
            <p className={styles.description}>
              A quiz application where you can test yourself by answering
              questions.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.listItem}>
                • Developed using React, Redux, Material UI, CSS.
              </li>
              <li className={styles.listItem}>
                • Mobile Responsive | Dark-Light Theme.
              </li>
              <li className={styles.listItem}>
                • Backend Service Communication.
              </li>
              <li className={styles.listItem}>
                • Unique questions in each game.
              </li>
              <li className={styles.listItem}>
                • Redux and React Router were used.
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <a
              href="https://canyouknow.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <VscOpenPreview />
            </a>
            <a
              href="https://github.com/coderdal/CanYouKnow"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.details}>
            <h4 className={styles.title}>ErdalGram | Social Media App</h4>
            <p className={styles.description}>
              A real-time social media application where you can share and
              connect.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.listItem}>
                • Developed using Vue, Vuex, CSS.
              </li>
              <li className={styles.listItem}>
                • Mobile Responsive | Dark-Light Theme.
              </li>
              <li className={styles.listItem}>
                • Firebase Service Communication.
              </li>
              <li className={styles.listItem}>• Vuex state management.</li>
            </ul>
          </div>
          <div className={styles.actions}>
            <a
              href="https://instagram-clone-vue-erdal.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <VscOpenPreview />
            </a>
            <a
              href="https://github.com/coderdal/instagram-clone-vue"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
