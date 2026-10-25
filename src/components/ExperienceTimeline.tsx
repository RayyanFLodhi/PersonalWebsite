'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ExperienceTimeline.module.css';
import Reveal from './Reveal';
import type { Experience } from '@/data/resumeData';

const PREVIEW = 3;

function Entry({ exp, index }: { exp: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = exp.description.length - PREVIEW;
  const bullets = expanded ? exp.description : exp.description.slice(0, PREVIEW);

  return (
    <Reveal delay={Math.min(index, 3) * 60}>
      <article className={styles.entry} data-domain={exp.domain}>
        <div className={styles.when}>
          <span className={`mono ${styles.period}`}>{exp.period}</span>
          {exp.current && (
            <span className={`mono ${styles.nowTag}`}>
              <span className={styles.nowDot} aria-hidden="true" />
              Now
            </span>
          )}
          <span className={`mono ${styles.loc}`}>{exp.location}</span>
        </div>

        <div className={styles.spine} aria-hidden="true">
          <span className={styles.node} />
        </div>

        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.logo}>
              {exp.logo ? <Image src={exp.logo} alt="" width={48} height={48} /> : <span>{exp.monogram}</span>}
            </div>
            <div className={styles.titles}>
              <h3 className={`display ${styles.role}`}>{exp.role}</h3>
              <p className={styles.company}>
                {exp.website ? (
                  <a href={exp.website} target="_blank" rel="noopener noreferrer">
                    {exp.company} ↗
                  </a>
                ) : (
                  exp.company
                )}
              </p>
            </div>
          </div>

          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {hidden > 0 && (
            <button className={`mono ${styles.more}`} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? 'Show less' : `Show ${hidden} more`}
              <span aria-hidden="true">{expanded ? ' ↑' : ' ↓'}</span>
            </button>
          )}

          <div className={styles.tags}>
            {exp.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className={styles.timeline}>
      {items.map((exp, i) => (
        <Entry key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
      ))}
    </div>
  );
}
