import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.content}>
                    <h2 className={styles.name}>Rayyan Lodhi</h2>
                    <p className={styles.tagline}>Building the future, one line of code at a time.</p>
                </div>
                <div className={styles.links}>
                    <a href="mailto:rlodh070@uottawa.ca" className={styles.link}>Email</a>
                    <a href="https://github.com/RayyanFLodhi" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                    <a href="https://www.linkedin.com/in/rayyan-lodhi-002bab1a4/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Rayyan Lodhi. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
