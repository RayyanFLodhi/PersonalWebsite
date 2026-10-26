'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
    children: React.ReactNode;
    /** Extra delay in ms, handy for staggering cards in a grid. */
    delay?: number;
    className?: string;
}

/** Fades and lifts its children into place the first time they scroll into view. */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        // Reduced motion is handled in CSS (the wrapper simply renders visible).
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${shown ? styles.shown : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default Reveal;
