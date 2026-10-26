import React from 'react';
import styles from './ProjectCard.module.css';
import { Project } from '@/data/resumeData';
import { isRealImage } from '@/lib/media';

interface ProjectCardProps {
    project: Project;
    onClick?: () => void;
    /** Zero-based position in the grid, rendered as "01", "02", ... */
    index?: number;
    /** Spans the full grid row and splits into copy + outcome panel. */
    featured?: boolean;
}

/** Recruiters scan for "is there code I can read?", so name the destination honestly. */
const linkLabel = (url: string) => (/github\.com/i.test(url) ? 'View on GitHub' : 'Live Demo');

const PREVIEW_BULLETS = 2;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index, featured = false }) => {
    const bullets = featured ? project.description : project.description.slice(0, PREVIEW_BULLETS);
    const hidden = project.description.length - bullets.length;

    return (
        <article className={`${styles.card} ${featured ? styles.featured : ''}`} onClick={onClick}>
            <div className={styles.main}>
                <div className={styles.topline}>
                    {index !== undefined && <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>}
                    <span className={styles.meta}>
                        {project.period}
                        {project.location && <> · {project.location}</>}
                    </span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.role}>{project.role}</p>
                <ul className={styles.description}>
                    {bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                {hidden > 0 && (
                    <span className={styles.moreNote}>
                        +{hidden} more in details
                    </span>
                )}
            </div>

            <div className={styles.aside}>
                {project.highlight && (
                    <div className={styles.highlight}>
                        <span className={styles.highlightLabel}>Outcome</span>
                        {project.highlight}
                    </div>
                )}
                {isRealImage(project.image) && (
                    <div className={styles.imageContainer}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.image} alt={`${project.title} preview`} className={styles.projectImage} />
                    </div>
                )}
                {project.techCheck && project.techCheck.length > 0 && (
                    <div className={styles.tags}>
                        {project.techCheck.map((tech) => (
                            <span key={tech} className={styles.tag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                <div className={styles.actions}>
                    {project.website ? (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.websiteLink}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {linkLabel(project.website)}
                        </a>
                    ) : (
                        <span />
                    )}
                    <span className={styles.open}>
                        Details<span aria-hidden="true"> →</span>
                    </span>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
