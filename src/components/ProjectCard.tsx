import React from 'react';
import styles from './ProjectCard.module.css';
import { Project } from '@/data/resumeData';

interface ProjectCardProps {
    project: Project;
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.header}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.role}>{project.role}</span>
                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.websiteLink}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Website
                    </a>
                )}
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
            {project.image && (
                <div className={styles.imageContainer}>
                    <img src={project.image} alt={`${project.title} preview`} className={styles.projectImage} />
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
