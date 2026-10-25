'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import Reveal from './Reveal';
import type { Project } from '@/data/resumeData';

const PREVIEW = 2;

interface CardProps {
  item: Project;
  index?: number;
}

export default function Card({ item, index = 0 }: CardProps) {
  const [expanded, setExpanded] = useState(false);
  const hidden = item.description.length - PREVIEW;
  const bullets = expanded ? item.description : item.description.slice(0, PREVIEW);

  return (
    <Reveal delay={(index % 3) * 70} className={styles.wrap}>
      <article className={styles.card} data-domain={item.domain}>
        <div className={`${styles.header} ${item.image ? styles.hasImage : ''}`}>
          {item.image ? (
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 360px"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.pattern} aria-hidden="true">
              <span className={styles.bigCode}>{item.code}</span>
            </div>
          )}
          <span className={`mono ${styles.code}`}>{item.code}</span>
          <span className={`mono ${styles.period}`}>{item.period}</span>
        </div>

        <div className={styles.body}>
          <h3 className={`display ${styles.title}`}>{item.title}</h3>
          <p className={styles.subtitle}>{item.subtitle}</p>

          {item.highlight && (
            <p className={styles.highlight}>
              <span aria-hidden="true">▲</span> {item.highlight}
            </p>
          )}

          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {hidden > 0 && (
            <button className={`mono ${styles.more}`} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? 'Show less ↑' : `Show ${hidden} more ↓`}
            </button>
          )}

          <div className={styles.tags}>
            {item.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {(item.github || item.website) && (
            <div className={styles.links}>
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  Source ↗
                </a>
              )}
              {item.website && (
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
