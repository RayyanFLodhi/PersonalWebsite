import React from 'react';
import styles from './SectionTemplate.module.css';

/* Rename: component, props, and the data type it renders (define the type in src/data/resumeData.ts). */
interface Item {
    title: string;
    subtitle?: string;
    period?: string;
    description: string[];
    tags?: string[];
}

interface ItemCardProps {
    item: Item;
    onClick?: () => void;
}

/** One card in a section grid. Presentational: no hooks, so it stays a server component. */
const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.header}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.subtitle && <span className={styles.subtitle}>{item.subtitle}</span>}
            </div>
            {item.period && <div className={styles.meta}>{item.period}</div>}
            <ul className={styles.description}>
                {item.description.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
            {item.tags && item.tags.length > 0 && (
                <div className={styles.tags}>
                    {item.tags.map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemCard;

/* Mount in src/app/page.tsx:

<Section id="items" title="Items" className={styles.darkSection}>
  <div className={styles.projectsGrid}>
    {resumeData.items.map((item, i) => (
      <Reveal key={item.title} delay={(i % 3) * 70} className={styles.revealItem}>
        <ItemCard item={item} onClick={() => setSelectedItem(item)} />
      </Reveal>
    ))}
  </div>
</Section>
*/
