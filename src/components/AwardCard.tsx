import React from 'react';
import styles from './AwardCard.module.css';
import { Award } from '@/data/resumeData';
import { isRealImage } from '@/lib/media';

interface AwardCardProps {
    award: Award;
    onClick?: () => void;
}

const isCertification = (award: Award) => /certif|clearance|belt|first aid|cpr/i.test(`${award.title} ${award.organization}`);

const AwardCard: React.FC<AwardCardProps> = ({ award, onClick }) => {
    const cert = isCertification(award);
    return (
        <article className={styles.card} onClick={onClick}>
            <div className={styles.top}>
                <span className={styles.year}>{award.year}</span>
                <span className={`${styles.kind} ${cert ? styles.kindCert : ''}`}>{cert ? 'Certification' : 'Award'}</span>
            </div>
            <h3 className={styles.title}>{award.title}</h3>
            <p className={styles.org}>{award.organization}</p>
            <p className={styles.description}>{award.description}</p>
            {isRealImage(award.image) && (
                <div className={styles.imageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={award.image} alt={award.title} className={styles.image} />
                </div>
            )}
        </article>
    );
};

export default AwardCard;
