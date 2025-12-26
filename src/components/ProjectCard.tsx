import React from 'react';
import styles from './ProjectCard.module.css';
import { Project } from '@/data/resumeData';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.role}>{project.role}</span>
            </div>
            <div className={styles.meta}>
                <span>{project.period}</span>
                {project.location && <span> • {project.location}</span>}
            </div>
            <ul className={styles.description}>
                {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {project.techCheck && project.techCheck.length > 0 && (
                <div className={styles.tags}>
                    {project.techCheck.map((tech) => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
