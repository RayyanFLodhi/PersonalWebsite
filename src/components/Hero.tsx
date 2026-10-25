'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styles from './Hero.module.css';
import Radar, { Blip } from './Radar';
import { resumeData } from '@/data/resumeData';

function RotatingLine({ items }: { items: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 2800);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <span className={styles.rotating} aria-live="polite">
      <span key={i} className={styles.rotatingItem}>
        {items[i]}
      </span>
    </span>
  );
}

export default function Hero() {
  // Place projects + leadership on the scope deterministically
  const blips = useMemo<Blip[]>(() => {
    const items = [...resumeData.projects, ...resumeData.leadership.slice(0, 2)];
    return items.map((p, idx) => {
      const n = items.length;
      const angle = (360 / n) * idx + 17; // spread evenly with a small offset
      const r = 0.32 + ((idx * 7) % 5) * 0.13; // 0.32..0.84
      return { label: p.short ?? p.title, angle, r, domain: p.domain };
    });
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`mono ${styles.eyebrow}`}>
            <span className={styles.statusDot} aria-hidden="true" />
            Online · {resumeData.location} · 45.42°N 75.70°W
          </p>

          <h1 id="hero-name" className={`display ${styles.name}`}>
            {resumeData.name}
          </h1>

          <p className={`display ${styles.statement}`}>
            I build systems that <em data-domain="ai">sense</em>, <em data-domain="data">decide</em> and{' '}
            <em data-domain="embedded">move</em>.
          </p>

          <p className={styles.lede}>
            Computer Engineering student at uOttawa. Currently building Counter-UAS simulation tools at the Computational
            Analysis and Research Group. Previously Statistics Canada and Retailogists.
          </p>

          <p className={styles.now}>
            <span className={`mono ${styles.nowLabel}`}>Now</span>
            <RotatingLine items={resumeData.nowDoing} />
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn accent">
              See the work
            </a>
            <a href={resumeData.resumePdf} target="_blank" rel="noopener noreferrer" className="btn ghost">
              Resume ↗
            </a>
            <div className={styles.social}>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1ZM7.1 20.4H3.6V9h3.5v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.7C24 .8 23.2 0 22.2 0Z" />
                </svg>
              </a>
              <a href={`mailto:${resumeData.email}`} aria-label="Email" title="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.scopeWrap}>
          <div className={styles.scopePanel}>
            <div className={styles.scopeHead}>
              <span className="mono">Scope 01 · Project track</span>
              <span className={`mono ${styles.scopeLive}`}>
                <span className={styles.liveDot} aria-hidden="true" />
                Live
              </span>
            </div>
            <Radar blips={blips} className={styles.radar} />
            <ul className={styles.legend} aria-label="Legend">
              <li data-domain="ai">AI / Vision</li>
              <li data-domain="embedded">Embedded</li>
              <li data-domain="data">Data</li>
              <li data-domain="people">Community</li>
            </ul>
            <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
            <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
            <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
            <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
          </div>
          <p className={`mono ${styles.caption}`}>Fig. 01 — hover to read bearing and range</p>
        </div>
      </div>

      <a href="#about" className={`mono ${styles.scrollHint}`}>
        Scroll <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
