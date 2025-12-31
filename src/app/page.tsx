"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import AwardCard from '@/components/AwardCard';
import SkillsList from '@/components/SkillsList';
import Modal from '@/components/Modal';
import { resumeData } from '@/data/resumeData';
import styles from './page.module.css';

export default function Home() {
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

  const renderModalContent = (item: any) => {
    if (!item) return null;
    // Determine type based on fields (naive check or passed context)
    // Common fields: title/role, company/organization, period/year, description (array or string)

    // Normalize data for display
    const title = item.title || item.role;
    const subtitle = item.company || item.organization || item.role; // Fallback for Project which has title+role
    const date = item.period || item.year;
    const location = item.location;
    const description = Array.isArray(item.description) ? item.description : [item.description];
    const image = item.image || item.logo;
    const link = item.website;

    return (
      <div>
        {image && (
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px' }} />
          </div>
        )}
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>{title}</h2>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{subtitle}</h3>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--secondary-foreground)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          <span>{date}</span>
          {location && <span>• {location}</span>}
        </div>

        {link && (
          <div style={{ marginBottom: '1.5rem' }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'var(--primary)',
                color: 'var(--background)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500'
              }}
            >
              Visit Website
            </a>
          </div>
        )}

        <ul style={{ paddingLeft: '1.5rem', color: 'var(--secondary-foreground)', lineHeight: '1.8' }}>
          {description.map((d: string, i: number) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{d}</li>
          ))}
        </ul>

        {item.techCheck && (
          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {item.techCheck.map((tech: string) => (
              <span key={tech} style={{
                padding: '0.25rem 0.75rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '100px',
                fontSize: '0.85rem',
                border: '1px solid var(--border)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Hero />

      <Section id="about" title="About">
        <div className={styles.aboutContent}>
          <p className={styles.text}>{resumeData.summary}</p>
          <div className={styles.education}>
            <h3>Education</h3>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className={styles.eduItem}>
                <div className={styles.eduHeader}>
                  <span className={styles.degree}>{edu.degree}</span>
                  <span className={styles.year}>{edu.period}</span>
                </div>
                <div className={styles.school}>{edu.school}, {edu.location}</div>
                <ul className={styles.eduDetails}>
                  {edu.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" className={styles.darkSection}>
        <div>
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              onClick={() => setSelectedItem(exp)}
            />
          ))}
        </div>
      </Section>

      <Section id="leadership" title="Leadership">
        <h3 className={styles.subHeading}>University & Technical Teams</h3>
        <div className={styles.projectsGrid}>
          {resumeData.extracurriculars.map((item, index) => (
            <ProjectCard
              key={`extra-${index}`}
              project={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>High School Initiatives</h3>
        <div className={styles.projectsGrid}>
          {resumeData.highSchoolInitiatives.map((item, index) => (
            <ProjectCard
              key={`hs-${index}`}
              project={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </Section>

      <Section id="awards" title="Awards & Certifications" className={styles.darkSection}>
        <div className={styles.projectsGrid}>
          {resumeData.awards.map((award, index) => (
            <AwardCard
              key={index}
              award={award}
              onClick={() => setSelectedItem(award)}
            />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <SkillsList categories={resumeData.skills} />
      </Section>

      <Section id="contact" title="Contact">
        <div className={styles.contactContainer}>
          <p>Interested in working together? Get in touch!</p>
          <a href="mailto:rlodh070@uottawa.ca" className="primaryBtn">Say Hello</a>
        </div>
      </Section>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {renderModalContent(selectedItem)}
      </Modal>
    </>
  );
}
