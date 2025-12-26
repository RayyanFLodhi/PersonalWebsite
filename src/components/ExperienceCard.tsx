import React from 'react';
import styles from './ExperienceCard.module.css';
import { Experience } from '@/data/resumeData';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.role}>{experience.role}</h3>
                    <h4 className={styles.company}>{experience.company}</h4>
                </div>
                <div className={styles.meta}>
                    <span className={styles.date}>{experience.period}</span>
                    <span className={styles.location}>{experience.location}</span>
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
