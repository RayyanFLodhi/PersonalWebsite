"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Section from '@/components/Section';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectCard from '@/components/ProjectCard';
import { TeamCard, InitiativeLedger } from '@/components/LeadershipCards';
import AwardCard from '@/components/AwardCard';
import SkillsList from '@/components/SkillsList';
import Modal from '@/components/Modal';
import Reveal from '@/components/Reveal';
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
    const rawImage = item.image || item.logo;
    const image = rawImage && !/placeholder/i.test(rawImage) ? rawImage : undefined;
    const link = item.website;
    const highlight = item.highlight;

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

        {highlight && <div className={styles.modalHighlight}>{highlight}</div>}

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
              {/github\.com/i.test(link) ? 'View on GitHub' : 'Visit Website'}
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

  const [featuredProject, ...otherProjects] = resumeData.projects;

  return (
    <>
      <Hero />

      {/* Scroll-driven flight: Mars -> orbit -> drone airspace -> office */}
      <Journey />

      <Section
        id="experience"
        title="Experience"
        eyebrow="Where I've worked"
        lede="Eight roles across research, government, startups and teaching. Click any one for the full story."
        className={styles.darkSection}
      >
        <ExperienceTimeline items={resumeData.experience} onSelect={setSelectedItem} />
      </Section>

      <Section
        id="projects"
        title="Projects"
        eyebrow="What I've built"
        lede="Hackathon builds and research tooling, with code you can read."
      >
        <div className={styles.projectsGrid}>
          <Reveal className={styles.revealFeatured}>
            <ProjectCard
              project={featuredProject}
              index={0}
              featured
              onClick={() => setSelectedItem(featuredProject)}
            />
          </Reveal>
          {otherProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 70} className={styles.revealItem}>
              <ProjectCard
                project={project}
                index={index + 1}
                onClick={() => setSelectedItem(project)}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="leadership"
        title="Leadership & Campus involvement"
        eyebrow="Teams & community"
        lede="The rover team, the developer community, and a decade of speaking and organizing."
        className={styles.darkSection}
      >
        <div className={styles.teamsGrid}>
          {resumeData.extracurriculars.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 70} className={styles.revealItem}>
              <TeamCard item={item} onClick={() => setSelectedItem(item)} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={`${styles.subHeading} ${styles.subHeadingSpaced}`}>Earlier initiatives</h3>
        </Reveal>
        <Reveal delay={60}>
          <InitiativeLedger items={resumeData.highSchoolInitiatives} onSelect={setSelectedItem} />
        </Reveal>
      </Section>

      <Section id="awards" title="Awards & Certifications" eyebrow="Recognition">
        <div className={styles.awardsGrid}>
          {resumeData.awards.map((award, index) => (
            <Reveal key={award.title} delay={(index % 4) * 60} className={styles.revealItem}>
              <AwardCard
                award={award}
                onClick={() => setSelectedItem(award)}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" eyebrow="Toolbox" className={styles.darkSection}>
        <Reveal delay={80}>
          <SkillsList categories={resumeData.skills} />
        </Reveal>
      </Section>

      <Section id="contact" title="Contact" eyebrow="Say hi">
        <Reveal delay={80}>
          <div className={styles.contactContainer}>
            <p>Open to co-op and internship opportunities. Let&#39;s talk.</p>
            <a href={`mailto:${resumeData.email}`} className="primaryBtn">Say Hello</a>
          </div>
        </Reveal>
      </Section>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {renderModalContent(selectedItem)}
      </Modal>
    </>
  );
}
