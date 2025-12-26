import React from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import AwardCard from '@/components/AwardCard';
import SkillsList from '@/components/SkillsList';
import { resumeData } from '@/data/resumeData';
import styles from './page.module.css';

export default function Home() {
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
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>

      <Section id="leadership" title="Leadership">
        <h3 className={styles.subHeading}>University & Technical Teams</h3>
        <div className={styles.projectsGrid}>
          {resumeData.extracurriculars.map((item, index) => (
            <ProjectCard key={`extra-${index}`} project={item} />
          ))}
        </div>

        <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>High School Initiatives</h3>
        <div className={styles.projectsGrid}>
          {resumeData.highSchoolInitiatives.map((item, index) => (
            <ProjectCard key={`hs-${index}`} project={item} />
          ))}
        </div>
      </Section>

      <Section id="awards" title="Awards & Certifications" className={styles.darkSection}>
        <div className={styles.projectsGrid}>
          {resumeData.awards.map((award, index) => (
            <AwardCard key={index} award={award} />
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
    </>
  );
}
