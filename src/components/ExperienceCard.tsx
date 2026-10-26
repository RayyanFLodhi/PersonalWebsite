import React from 'react';
import styles from './ExperienceCard.module.css';
import { Experience } from '@/data/resumeData';

interface ExperienceCardProps {
    experience: Experience;
    onClick?: () => void;
}

const isCurrent = (period: string) => /present/i.test(period);

/** Bullets shown on the card; the rest live in the modal. */
const PREVIEW_BULLETS = 3;

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
    const upcoming = !!experience.upcoming;
    const current = !upcoming && isCurrent(experience.period);
    const bullets = experience.description.slice(0, PREVIEW_BULLETS);
    const hidden = experience.description.length - bullets.length;

    return (
        <div className={`${styles.card} ${upcoming ? styles.cardUpcoming : ''}`} onClick={onClick}>
            <div className={styles.header}>
                {experience.logo && (
                    <div className={styles.logoContainer}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={experience.logo} alt={`${experience.company} logo`} className={styles.logo} />
                    </div>
                )}
                <div className={styles.headerContent}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.role}>
                            {experience.role}
                            {current && (
                                <span className={styles.current}>
                                    <span className={styles.currentDot} aria-hidden="true" />
                                    Current
                                </span>
                            )}
                            {upcoming && (
                                <span className={`${styles.current} ${styles.upcoming}`}>
                                    <span className={`${styles.currentDot} ${styles.upcomingDot}`} aria-hidden="true" />
                                    Incoming
                                </span>
                            )}
                        </h3>
                        {experience.website && (
                            <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.websiteLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Visit
                            </a>
                        )}
                    </div>
                    <div className={styles.companyRow}>
                        <h4 className={styles.company}>{experience.company}</h4>
                        <span className={styles.clusterSep} aria-hidden="true">
                            ·
                        </span>
                        <span className={styles.date}>{experience.period}</span>
                    </div>
                    {experience.highlight && <div className={styles.highlight}>{experience.highlight}</div>}
                </div>
            </div>
            <ul className={styles.description}>
                {bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {hidden > 0 && <span className={styles.moreNote}>+{hidden} more in details</span>}
        </div>
    );
};

export default ExperienceCard;
