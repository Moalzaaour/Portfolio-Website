import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, My Name is Mohammad Alzaaour</h1>
                <p className={styles.description}>
                    I am a Third Year Computer Science Student in the Artificial Intelligence and Machine Learning Stream
                </p>
                <p className={styles.description}>
                    Available to work for 4 to 8 months
                </p>
                <a href="mailto:moalzaaour@cmail.carleton.ca" className={styles.contactBtn}>Contact Me!</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Picture of me" className={styles.heroImg}/>
                <div className={StyleSheet.topBlur} />
                <div className={StyleSheet.botBlur} />
        </section>
    );
};