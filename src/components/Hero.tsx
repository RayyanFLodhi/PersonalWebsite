'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { resumeData } from '@/data/resumeData';

const VIDEO_ID = 'WMvjvCNKLlE';
const CLIP_START = 227; // 3:47
const CLIP_END = 246; // 4:06
const POSTER = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

/* Minimal typings for the parts of the YouTube IFrame API we touch. */
interface YTPlayer {
    playVideo(): void;
    pauseVideo(): void;
    getCurrentTime(): number;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    destroy(): void;
}
interface YTPlayerEvent {
    target: YTPlayer;
    data?: number;
}
interface YTNamespace {
    Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
    PlayerState: { PLAYING: number };
}
declare global {
    interface Window {
        YT?: YTNamespace;
        onYouTubeIframeAPIReady?: () => void;
        __ytApiPromise?: Promise<YTNamespace>;
    }
}

/** Loads the IFrame API once and resolves when it is usable (safe across remounts). */
function loadYouTubeApi(): Promise<YTNamespace> {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (!window.__ytApiPromise) {
        window.__ytApiPromise = new Promise((resolve) => {
            const previous = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                previous?.();
                if (window.YT) resolve(window.YT);
            };
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            tag.async = true;
            document.head.appendChild(tag);
        });
    }
    return window.__ytApiPromise;
}

const Hero = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLElement>(null);
    const playerHostRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<YTPlayer | null>(null);
    const [playing, setPlaying] = useState(false);

    /* ---- Background video (poster shows instantly, player fades in when it actually plays) ---- */
    useEffect(() => {
        const host = playerHostRef.current;
        if (!host) return;
        let cancelled = false;
        let loopTimer: ReturnType<typeof setInterval> | null = null;

        loadYouTubeApi().then((YT) => {
            if (cancelled || !host.isConnected) return;
            // The API replaces the element we hand it with an <iframe>, so give it a node React doesn't own.
            const mount = document.createElement('div');
            host.appendChild(mount);
            playerRef.current = new YT.Player(mount, {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    disablekb: 1,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1,
                    iv_load_policy: 3,
                    start: CLIP_START,
                },
                events: {
                    onReady: (e: YTPlayerEvent) => {
                        e.target.playVideo();
                        loopTimer = setInterval(() => {
                            try {
                                if (e.target.getCurrentTime() >= CLIP_END) e.target.seekTo(CLIP_START, true);
                            } catch {
                                /* player torn down */
                            }
                        }, 100);
                    },
                    onStateChange: (e: YTPlayerEvent) => {
                        if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
                    },
                },
            });
        });

        return () => {
            cancelled = true;
            if (loopTimer) clearInterval(loopTimer);
            try {
                playerRef.current?.destroy();
            } catch {
                /* already gone */
            }
            playerRef.current = null;
            host.replaceChildren();
        };
    }, []);

    /* ---- Scroll choreography: write one progress value (0..1) to --p; CSS does the rest ---- */
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const stage = stageRef.current;
        if (!wrapper || !stage) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let target = 0;
        let current = -1;
        let raf = 0;
        let offscreen = false;

        const apply = (v: number) => {
            stage.style.setProperty('--p', v.toFixed(4));
            stage.dataset.phase = v > 0.4 ? 'copy' : 'intro';
        };

        const tick = () => {
            raf = 0;
            // Light smoothing so wheel "steps" feel fluid; snaps when close.
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

            // Don't burn CPU on a video nobody can see.
            const nowOffscreen = rect.bottom <= 0;
            if (nowOffscreen !== offscreen) {
                offscreen = nowOffscreen;
                try {
                    if (offscreen) playerRef.current?.pauseVideo();
                    else playerRef.current?.playVideo();
                } catch {
                    /* player not ready */
                }
            }

            if (reduceMotion) {
                if (current !== 1) {
                    current = 1;
                    apply(1);
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

    const stats = [
        { value: resumeData.experience.length, label: 'Roles' },
        { value: resumeData.projects.length + resumeData.extracurriculars.length, label: 'Teams & projects' },
        { value: resumeData.awards.length, label: 'Awards & certs' },
    ];

    const links = [
        { label: 'Resume', href: '/RayyanLodhisResume.pdf', primary: true, external: true },
        { label: 'Contact', href: '#contact' },
        { label: 'GitHub', href: 'https://github.com/RayyanFLodhi', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rayyan-lodhi/', external: true },
    ];

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <section ref={stageRef} className={styles.stage} aria-label="Introduction">
                {/* Video frame: full-bleed at the top, shrinks into a card as you scroll */}
                <div className={styles.frame}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.poster} src={POSTER} alt="" aria-hidden="true" />
                    <div ref={playerHostRef} className={`${styles.player} ${playing ? styles.playing : ''}`} />
                    <div className={styles.overlay} />
                </div>

                {/* Act 1: the name */}
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Hi, I&#39;m</p>
                    <h1 className={styles.name}>
                        <span className="gradient-text">{resumeData.name}</span>
                    </h1>
                    <p className={styles.introTitle}>{resumeData.title}</p>
                </div>

                {/* Act 2: the pitch */}
                <div className={styles.copy}>
                    <div className={`container ${styles.copyInner}`}>
                        <div className={styles.copyCol}>
                            <p className={styles.eyebrow}>{resumeData.title}</p>
                            <h2 className={styles.tagline}>{resumeData.tagline}</h2>
                            <p className={styles.summary}>{resumeData.summary}</p>

                            <div className={styles.actions}>
                                {links.map((l) => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        className={`${styles.heroBtn} ${l.primary ? styles.btnPrimary : styles.btnSecondary}`}
                                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>

                            {/* Act 3: the numbers */}
                            <div className={styles.stats}>
                                {stats.map((s) => (
                                    <div key={s.label} className={styles.stat}>
                                        <span className={styles.statValue}>{s.value}</span>
                                        <span className={styles.statLabel}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cue} aria-hidden="true">
                    <span className={styles.cueText}>Scroll</span>
                    <span className={styles.cueLine} />
                </div>
                <div className={styles.progress} aria-hidden="true" />
            </section>
        </div>
    );
};

export default Hero;
