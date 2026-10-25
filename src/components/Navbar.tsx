'use client';

import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { resumeData } from '@/data/resumeData';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const pad = (n: number) => String(n).padStart(2, '0');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number>(0); // 0 = hero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view for the "02 / 07" indicator
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          const idx = SECTIONS.findIndex((s) => s.id === visible[0].target.id);
          if (idx >= 0) setActive(idx + 1);
        } else if (window.scrollY < 200) {
          setActive(0);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.1, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.open : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Back to top">
          <span className={styles.mark} aria-hidden="true">
            <span />
          </span>
          <span className={styles.brandText}>
            {resumeData.name}
            <span className={styles.brandSub}>{resumeData.tagline}</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Sections">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`${styles.link} ${active === i + 1 ? styles.linkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className={styles.linkNum}>{pad(i + 1)}</span>
              {s.label}
            </a>
          ))}
          <a href={resumeData.resumePdf} target="_blank" rel="noopener noreferrer" className={`btn ghost ${styles.resume}`}>
            Resume ↗
          </a>
        </nav>

        <div className={styles.right}>
          <span className={`mono ${styles.counter}`} aria-live="polite">
            {pad(active)} <span className={styles.counterSep}>/</span> {pad(SECTIONS.length)}
          </span>
          <button
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
