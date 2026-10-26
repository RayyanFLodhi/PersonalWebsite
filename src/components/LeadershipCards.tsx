import React from 'react';
import styles from './Leadership.module.css';
import { Project } from '@/data/resumeData';
import { isRealImage } from '@/lib/media';

const initials = (title: string) =>
    title
        .split(/[\s(]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

interface TeamCardProps {
    item: Project;
    onClick?: () => void;
}

/** Horizontal media card for a technical team or club: image (or monogram) left, summary right. */
export const TeamCard: React.FC<TeamCardProps> = ({ item, onClick }) => (
    <article className={styles.team} onClick={onClick}>
        <div className={styles.teamMedia}>
            {isRealImage(item.image) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt="" />
            ) : (
                <span className={styles.monogram}>{initials(item.title)}</span>
            )}
        </div>
        <div className={styles.teamBody}>
            <div className={styles.teamTop}>
                <h3 className={styles.teamTitle}>{item.title}</h3>
                <span className={styles.teamPeriod}>{item.period}</span>
            </div>
            <p className={styles.teamRole}>{item.role}</p>
            {item.highlight && <span className={styles.pill}>{item.highlight}</span>}
            <p className={styles.teamSummary}>{item.description[0]}</p>
            <span className={styles.more}>
                Details<span aria-hidden="true"> →</span>
            </span>
        </div>
    </article>
);

interface LedgerProps {
    items: Project[];
    onSelect: (item: Project) => void;
}

/** Dense two-column list for the long tail of initiatives: one line each, click for the story. */
export const InitiativeLedger: React.FC<LedgerProps> = ({ items, onSelect }) => (
    <ul className={styles.ledger}>
        {items.map((item, i) => (
            <li key={item.title} className={styles.rowItem}>
                <button type="button" className={styles.row} onClick={() => onSelect(item)}>
                    <span className={styles.thumb}>
                        {isRealImage(item.image) ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={item.image} alt="" />
                        ) : (
                            <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
                        )}
                    </span>
                    <span className={styles.rowText}>
                        <span className={styles.rowTitle}>{item.title}</span>
                        <span className={styles.rowMeta}>
                            {item.role} · {item.period}
                        </span>
                        {item.highlight && <span className={`${styles.pill} ${styles.rowPill}`}>{item.highlight}</span>}
                    </span>
                    <span className={styles.chevron} aria-hidden="true">
                        →
                    </span>
                </button>
            </li>
        ))}
    </ul>
);
