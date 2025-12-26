import React from 'react';
import styles from './AwardCard.module.css';
import { Award } from '@/data/resumeData';

interface AwardCardProps {
    award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{award.title}</h3>
                <span className={styles.year}>{award.year}</span>
            </div>
            <div className={styles.organization}>{award.organization}</div>
            <p className={styles.description}>{award.description}</p>
        </div>
    );
};

export default AwardCard;
