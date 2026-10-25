import React from 'react';
import styles from './Stats.module.css';
import Reveal from './Reveal';
import type { Stat } from '@/data/resumeData';

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <div className={`container ${styles.wrap}`}>
      <dl className={styles.grid}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className={styles.item}>
            <dd className={`display ${styles.value}`}>{s.value}</dd>
            <dt className={styles.label}>{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
