import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutMe.png")}
          alt="?"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Academic.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Background</h3>
              <p>
              I am a third year computer science student at Carleton University, developing strong problem solving and coding skills. I enjoy applying my knowledge to real world challenges and projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/games.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Interests</h3>
              <p>
              I love playing video games and stay active through soccer and going to the gym, maintaining a balance between physical activity and mental pursuits
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hacker.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Experience and Aspirations</h3>
              <p>
              I have tutored high school students in math and participated in many coding hackathons. My goal is to work at a leading tech company and contribute to innovative projects
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};