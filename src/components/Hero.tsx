import React from 'react';
import styles from './Hero.module.css';
import { resumeData } from '@/data/resumeData';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hi, I&#39;m</p>
                    <h1 className={styles.name}>
                        <span className="gradient-text">{resumeData.name}</span>
                    </h1>
                    <h2 className={styles.title}>{resumeData.title}</h2>
                    <p className={styles.summary}>{resumeData.summary}</p>

                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryBtn}>Contact Me</a>
                        <a href="#projects" className={styles.secondaryBtn}>View Work</a>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundGlow}></div>
        </section>
    );
};

export default Hero;
