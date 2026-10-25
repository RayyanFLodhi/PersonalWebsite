import React from 'react';
import styles from './Section.module.css';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  index: number;
  eyebrow: string; // mono label, e.g. "Flight log"
  title: string;
  lede?: string;
  tone?: 'plain' | 'tint' | 'ink';
  children: React.ReactNode;
}

export default function Section({ id, index, eyebrow, title, lede, tone = 'plain', children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <p className={`mono ${styles.eyebrow}`}>
            <span className={styles.num}>{String(index).padStart(2, '0')}</span>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className={`display ${styles.title}`}>{title}</h2>
          {lede && <p className={styles.lede}>{lede}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
