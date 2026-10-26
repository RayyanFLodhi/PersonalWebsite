import React from 'react';
import styles from './Section.module.css';
import Reveal from './Reveal';

interface SectionProps {
    id: string;
    title?: string;
    /** Small uppercase label above the title, e.g. "Where I've worked". */
    eyebrow?: string;
    /** One-sentence framing under the title. */
    lede?: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, eyebrow, lede, children, className }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            <div className="container">
                {(title || eyebrow) && (
                    <Reveal>
                        <header className={styles.header}>
                            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                            {title && <h2 className="section-title">{title}</h2>}
                            {lede && <p className={styles.lede}>{lede}</p>}
                        </header>
                    </Reveal>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
