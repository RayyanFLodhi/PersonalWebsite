import React from 'react';
import styles from './SkillsList.module.css';
import Reveal from './Reveal';
import type { SkillCategory } from '@/data/resumeData';

export default function SkillsList({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className={styles.grid}>
      {categories.map((cat, i) => (
        <Reveal key={cat.category} delay={(i % 3) * 70}>
          <div className={styles.group} data-domain={cat.domain}>
            <h3 className={styles.heading}>
              <span className={styles.dot} aria-hidden="true" />
              {cat.category}
              <span className={`mono ${styles.count}`}>{String(cat.skills.length).padStart(2, '0')}</span>
            </h3>
            <ul className={styles.list}>
              {cat.skills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
