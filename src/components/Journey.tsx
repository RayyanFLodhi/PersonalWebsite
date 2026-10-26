'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Journey.module.css';
import { MarsScene, OrbitScene, SkyScene, OfficeScene } from './JourneyScenes';
import { resumeData } from '@/data/resumeData';

/*
 * A scroll-driven "camera flight" through four places the work has taken me:
 * Mars yard (rover) -> Earth orbit (Telesat) -> low altitude (counter-UAS) -> the office.
 *
 * Same contract as the Hero: JS writes one --p value (0..1) onto the pinned stage, CSS derives
 * the camera position, parallax and caption cross-fades from it. The four scenes live in a 3x2
 * grid of viewport-sized cells and the camera traces an L-shaped route through them.
 */

/* --p thresholds where the active chapter flips (keep in sync with the caption windows in CSS). */
const CHAPTER_BREAKS = [0.24, 0.56, 0.86];

const chapterAt = (p: number) => CHAPTER_BREAKS.filter((b) => p >= b).length;

const Journey = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const stage = stageRef.current;
        if (!wrapper || !stage) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let target = 0;
        let current = -1;
        let raf = 0;

        const apply = (v: number) => {
            stage.style.setProperty('--p', v.toFixed(4));
            stage.dataset.chapter = String(chapterAt(v));
        };

        const tick = () => {
            raf = 0;
            const next =
                current < 0 || Math.abs(target - current) < 0.0008 ? target : current + (target - current) * 0.16;
            if (next !== current) {
                current = next;
                apply(current);
            }
            if (current !== target) raf = requestAnimationFrame(tick);
        };

        const measure = () => {
            const rect = wrapper.getBoundingClientRect();
            const range = wrapper.offsetHeight - window.innerHeight;
            target = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1;

            // Nothing on screen: skip the smoothing loop entirely.
            const visible = rect.bottom > 0 && rect.top < window.innerHeight;
            stage.dataset.visible = visible ? 'true' : 'false';

            if (reduceMotion) {
                if (current !== 1) {
                    current = 1;
                    apply(1);
                }
                return;
            }
            if (!visible) {
                if (current !== target) {
                    current = target;
                    apply(current);
                }
                return;
            }
            if (!raf) raf = requestAnimationFrame(tick);
        };

        measure();
        window.addEventListener('scroll', measure, { passive: true });
        window.addEventListener('resize', measure);
        return () => {
            window.removeEventListener('scroll', measure);
            window.removeEventListener('resize', measure);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={wrapperRef} id="journey" className={styles.wrapper}>
            <section ref={stageRef} className={styles.stage} aria-label="Where the work has taken me">
                {/* Far layer: stars drift slower than the scenes for depth */}
                <div className={styles.stars} aria-hidden="true" />

                {/* The world: a 3 x 2 grid of viewport-sized scenes */}
                <div className={styles.world} aria-hidden="true">
                    <div className={`${styles.cell} ${styles.cellOrbit}`}>
                        <OrbitScene />
                    </div>
                    <div className={`${styles.cell} ${styles.cellMars}`}>
                        <MarsScene />
                    </div>
                    <div className={`${styles.cell} ${styles.cellSky}`}>
                        <SkyScene />
                    </div>
                    <div className={`${styles.cell} ${styles.cellOffice}`}>
                        <OfficeScene />
                    </div>
                </div>

                <div className={styles.vignette} aria-hidden="true" />

                <header className={styles.heading}>
                    <p className={styles.eyebrow}>The route so far</p>
                    <p className={styles.headingNote}>Scroll to fly through it</p>
                </header>

                {/* Chapter captions: one is visible at a time, cross-faded from --p */}
                <div className={styles.captions}>
                    {resumeData.journey.map((c, i) => (
                        <article key={c.scene} className={styles.caption} data-index={i}>
                            <p className={styles.kicker}>{c.kicker}</p>
                            <h3 className={styles.title}>{c.title}</h3>
                            <p className={styles.body}>{c.body}</p>
                            <a href={c.cta.href} className={styles.cta}>
                                {c.cta.label}
                                <span aria-hidden="true"> →</span>
                            </a>
                        </article>
                    ))}
                </div>

                {/* Progress rail */}
                <ol className={styles.rail} aria-hidden="true">
                    {resumeData.journey.map((c) => (
                        <li key={c.scene} className={styles.railDot} />
                    ))}
                </ol>
            </section>
        </div>
    );
};

export default Journey;
