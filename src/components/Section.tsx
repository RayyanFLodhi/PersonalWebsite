import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            <div className="container">
                {title && <h2 className="section-title">{title}</h2>}
                {children}
            </div>
        </section>
    );
};

export default Section;
