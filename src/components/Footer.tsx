import React from 'react';
import styles from './Footer.module.css';
import { resumeData } from '@/data/resumeData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={`mono ${styles.left}`}>
          © {new Date().getFullYear()} {resumeData.name} · {resumeData.location}
        </p>
        <nav className={styles.links} aria-label="Footer">
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${resumeData.email}`}>Email</a>
          <a href="#top">Top ↑</a>
        </nav>
        <p className={`mono ${styles.right}`}>Built with Next.js · No trackers</p>
      </div>
    </footer>
  );
}
