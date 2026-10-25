import React from 'react';
import styles from './ExperienceCard.module.css';
import { Experience } from '@/data/resumeData';

interface ExperienceCardProps {
    experience: Experience;
    onClick?: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.header}>
                {experience.logo && (
                    <div className={styles.logoContainer}>
                        <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className={styles.logo}
                        />
                    </div>
                )}
                <div className={styles.headerContent}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.role}>{experience.role}</h3>
                        {experience.website && (
                            <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.websiteLink}
                            >
                                Visit
                            </a>
                        )}
                    </div>
                    <div className={styles.companyRow}>
                        <div className={styles.companyCluster}>
                            <h4 className={styles.company}>{experience.company}</h4>
                            {experience.location && (
                                <>
                                    <span className={styles.clusterSep} aria-hidden="true">
                                        ·
                                    </span>
                                    <span className={styles.location}>{experience.location}</span>
                                </>
                            )}
                        </div>
                        <span className={styles.date}>{experience.period}</span>
                    </div>
                </div>
            </div>
            <ul className={styles.description}>
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
