import React from 'react';
import styles from './SkillsList.module.css';
import { SkillCategory } from '@/data/resumeData';

interface SkillsListProps {
    categories: SkillCategory[];
}

const SkillsList: React.FC<SkillsListProps> = ({ categories }) => {
    return (
        <div className={styles.grid}>
            {categories.map((cat) => (
                <div key={cat.category} className={styles.category}>
                    <h3 className={styles.categoryTitle}>{cat.category}</h3>
                    <div className={styles.skills}>
                        {cat.skills.map((skill) => (
                            <span key={skill} className={styles.skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;
