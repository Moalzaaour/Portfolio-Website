import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/emailIcon.png")}
                    alt="email"
                    />
                    <a href="mailto:moalzaaour@cmail.carleton.ca">Email</a>
                </li>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="LinkedIn"
                    />
                    <a href="https://www.linkedin.com/in/mohammad-alzaaour-06b278140/">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/githubIcon.png")}
                    alt="Github"
                    />
                    <a href="https://github.com/Moalzaaour">Github</a>
                </li>
            </ul>
        </footer>
    )
}