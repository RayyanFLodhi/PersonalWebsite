import React from 'react';
import styles from './AwardCard.module.css';
import { Award } from '@/data/resumeData';

interface AwardCardProps {
    award: Award;
    onClick?: () => void;
}

const AwardCard: React.FC<AwardCardProps> = ({ award, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.header}>
                <h3 className={styles.title}>{award.title}</h3>
                <span className={styles.year}>{award.year}</span>
            </div>
            <div className={styles.organization}>{award.organization}</div>
            <p className={styles.description}>{award.description}</p>
            {award.image && (
                <div className={styles.imageContainer}>
                    <img src={award.image} alt={`${award.title}`} className={styles.image} />
                </div>
            )}
        </div>
    );
};

export default AwardCard;
