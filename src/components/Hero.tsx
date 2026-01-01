import React from 'react';
import styles from './Hero.module.css';
import { resumeData } from '@/data/resumeData';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.videoBackground}>
                <iframe
                    className={styles.backgroundVideo}
                    src="https://www.youtube.com/embed/WMvjvCNKLlE?start=227&end=245&autoplay=1&mute=1&loop=1&playlist=WMvjvCNKLlE&controls=0&modestbranding=1&rel=0&showinfo=0"
                    title="Background Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <div className={styles.videoOverlay}></div>
            </div>
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
