import React from 'react';
import Image from 'next/image';
import styles from './AwardsList.module.css';
import Reveal from './Reveal';
import type { Award } from '@/data/resumeData';

const ICON: Record<Award['kind'], string> = {
  award: '★',
  certification: '◆',
  clearance: '⬢',
};

export default function AwardsList({ awards }: { awards: Award[] }) {
  const clearance = awards.filter((a) => a.kind === 'clearance');
  const wins = awards.filter((a) => a.kind === 'award');
  const certs = awards.filter((a) => a.kind === 'certification');

  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        {clearance.map((a) => (
          <Reveal key={a.title}>
            <div className={`${styles.row} ${styles.clearance}`}>
              <span className={`mono ${styles.year}`}>{a.year}</span>
              <span className={styles.icon} aria-hidden="true">{ICON.clearance}</span>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.org}>{a.organization}</p>
                <p className={styles.desc}>{a.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
        {wins.map((a, i) => (
          <Reveal key={a.title} delay={i * 50}>
            <div className={styles.row}>
              <span className={`mono ${styles.year}`}>{a.year}</span>
              <span className={styles.icon} aria-hidden="true">{ICON.award}</span>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.org}>{a.organization}</p>
                <p className={styles.desc}>{a.description}</p>
              </div>
              {a.image && <Image className={styles.thumb} src={a.image} alt="" width={72} height={72} />}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.side} delay={120}>
        <p className={`mono ${styles.sideHead}`}>Certifications</p>
        <ul className={styles.certs}>
          {certs.map((c) => (
            <li key={c.title}>
              <span className={styles.icon} aria-hidden="true">{ICON.certification}</span>
              <div>
                <strong>{c.title}</strong>
                <span className={`mono ${styles.certYear}`}>{c.year}</span>
                <p>{c.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
