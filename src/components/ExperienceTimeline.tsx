'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ExperienceTimeline.module.css';
import ExperienceCard from './ExperienceCard';
import Reveal from './Reveal';
import { Experience } from '@/data/resumeData';

interface ExperienceTimelineProps {
    items: Experience[];
    onSelect: (item: Experience) => void;
}

/** "2026", "2025 – 2026" or "2022 – Now" from a free-form period string. */
const yearLabel = (period: string) => {
    const years = Array.from(new Set(period.match(/\d{4}/g) ?? []));
    const open = /present/i.test(period);
    if (years.length === 0) return period;
    if (open) return `${years[0]} – Now`;
    return years.length > 1 ? `${years[0]} – ${years[years.length - 1]}` : years[0];
};

/**
 * Roles on a vertical spine. The spine fills as the reader scrolls (--p on the list) and each
 * node lights up when the fill passes it (--t on the item, measured from layout).
 */
const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items, onSelect }) => {
    const listRef = useRef<HTMLOListElement>(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const rows = Array.from(list.children) as HTMLElement[];
        let raf = 0;

        // offsetTop ignores the Reveal transform, so this is stable before/after the entrance.
        const layout = () => {
            const total = list.offsetHeight || 1;
            rows.forEach((row) => row.style.setProperty('--t', ((row.offsetTop + 28) / total).toFixed(4)));
        };

        const measure = () => {
            raf = 0;
            if (reduceMotion) {
                list.style.setProperty('--p', '1');
                return;
            }
            const rect = list.getBoundingClientRect();
            const focus = window.innerHeight * 0.62;
            const p = Math.min(1, Math.max(0, (focus - rect.top) / rect.height));
            list.style.setProperty('--p', p.toFixed(4));
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(measure);
        };
        const onResize = () => {
            layout();
            onScroll();
        };

        layout();
        measure();
        const ro = new ResizeObserver(onResize);
        ro.observe(list);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        return () => {
            ro.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [items.length]);

    return (
        <ol ref={listRef} className={styles.list}>
            {items.map((exp, i) => (
                <li key={`${exp.company}-${exp.role}`} className={styles.item}>
                    <Reveal delay={i === 0 ? 60 : 0} className={styles.reveal}>
                        <div className={styles.row}>
                            <div className={styles.when}>
                                <span className={styles.years}>{yearLabel(exp.period)}</span>
                                <span className={styles.where}>{exp.location}</span>
                            </div>
                            <div className={styles.nodeCol} aria-hidden="true">
                                <span className={styles.node} />
                            </div>
                            <ExperienceCard experience={exp} onClick={() => onSelect(exp)} />
                        </div>
                    </Reveal>
                </li>
            ))}
        </ol>
    );
};

export default ExperienceTimeline;
