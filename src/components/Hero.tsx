'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { resumeData } from '@/data/resumeData';

const Hero = () => {
    const playerRef = useRef<any>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Create player when API is ready
        (window as any).onYouTubeIframeAPIReady = () => {
            playerRef.current = new (window as any).YT.Player('hero-video', {
                videoId: 'WMvjvCNKLlE',
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    start: 227, // 3:47
                },
                events: {
                    onReady: (event: any) => {
                        event.target.playVideo();
                        // Check every 100ms if we've reached the end time
                        intervalRef.current = setInterval(() => {
                            const currentTime = event.target.getCurrentTime();
                            // Loop back to start at 4:06 (246 seconds)
                            if (currentTime >= 246) {
                                event.target.seekTo(227, true);
                            }
                        }, 100);
                    },
                },
            });
        };

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.videoBackground}>
                <div id="hero-video" className={styles.backgroundVideo}></div>
                <div className={styles.videoOverlay}></div>
            </div>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hi, I&#39;m</p>
                    <h1 className={styles.name}>
                        <span className="gradient-text">{resumeData.name}</span>
                    </h1>
                    <h2 className={styles.title}>{resumeData.title}</h2>
                    <p className={styles.summary}>{resumeData.summary}</p>

                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryBtn}>Contact Me</a>
                        <a href="#projects" className={styles.secondaryBtn}>View Work</a>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundGlow}></div>
        </section>
    );
};

export default Hero;
