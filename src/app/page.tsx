import React from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Stats from '@/components/Stats';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Card from '@/components/Card';
import AwardsList from '@/components/AwardsList';
import SkillsList from '@/components/SkillsList';
import { resumeData } from '@/data/resumeData';
import styles from './page.module.css';

export default function Home() {
  const current = resumeData.experience.filter((e) => e.current);

  return (
    <>
      <Hero />
      <Ticker items={resumeData.ticker} />
      <Stats stats={resumeData.stats} />

      {/* 01 — About */}
      <Section id="about" index={1} eyebrow="Mission brief" title="Software that has to work in the physical world.">
        <div className={styles.about}>
          <Reveal className={styles.portraitWrap}>
            <figure className={styles.portrait}>
              <div className={styles.portraitImg}>
                <Image src="/profile-1.png" alt="Rayyan Lodhi" fill sizes="(max-width: 960px) 100vw, 40vw" priority={false} />
              </div>
              <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
              <figcaption className="mono">Fig. 02 — Rayyan, Ottawa</figcaption>
            </figure>
          </Reveal>

          <div className={styles.aboutText}>
            <Reveal delay={80}>
              {resumeData.intro.map((p, i) => (
                <p key={i} className={styles.para}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={160} className={styles.nowCard}>
              <p className={`mono ${styles.nowHead}`}>
                <span className={styles.nowDot} aria-hidden="true" />
                Active assignments
              </p>
              <ul className={styles.nowList}>
                {current.map((e) => (
                  <li key={e.company} data-domain={e.domain}>
                    <span className={styles.nowRole}>{e.role}</span>
                    <span className={styles.nowCompany}>{e.company}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <p className={`mono ${styles.eduHead}`}>Education</p>
              <ul className={styles.edu}>
                {resumeData.education.map((edu) => (
                  <li key={edu.school}>
                    <div className={styles.eduTop}>
                      <strong>{edu.degree}</strong>
                      <span className={`mono ${styles.eduPeriod}`}>{edu.period}</span>
                    </div>
                    <p className={styles.eduSchool}>
                      {edu.school} · {edu.location}
                    </p>
                    <ul className={styles.eduDetails}>
                      {edu.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 02 — Experience */}
      <Section
        id="experience"
        index={2}
        eyebrow="Flight log"
        title="Experience"
        lede="Research, government and startup work across simulation, data engineering, computer vision and internal tooling."
        tone="tint"
      >
        <ExperienceTimeline items={resumeData.experience} />
      </Section>

      {/* 03 — Projects */}
      <Section
        id="projects"
        index={3}
        eyebrow="Payloads"
        title="Projects"
        lede="Hackathon builds, research prototypes and lab work. Each one is a tracked target on the scope above."
      >
        <div className={styles.cards}>
          {resumeData.projects.map((p, i) => (
            <Card key={p.code} item={p} index={i} />
          ))}
        </div>
      </Section>

      {/* 04 — Leadership */}
      <Section
        id="leadership"
        index={4}
        eyebrow="Crew"
        title="Leadership & teams"
        lede="Rover team, campus organizations and the community work that started this whole thing."
        tone="tint"
      >
        <div className={styles.cards}>
          {resumeData.leadership.map((p, i) => (
            <Card key={p.code} item={p} index={i} />
          ))}
        </div>

        <details className={styles.earlier}>
          <summary className="mono">
            Earlier chapters · high school <span aria-hidden="true">↓</span>
          </summary>
          <div className={`${styles.cards} ${styles.cardsTight}`}>
            {resumeData.earlier.map((p, i) => (
              <Card key={p.code} item={p} index={i} />
            ))}
          </div>
        </details>
      </Section>

      {/* 05 — Awards */}
      <Section id="awards" index={5} eyebrow="Commendations" title="Awards & certifications">
        <AwardsList awards={resumeData.awards} />
      </Section>

      {/* 06 — Skills */}
      <Section id="skills" index={6} eyebrow="Instrument panel" title="Skills" tone="tint">
        <SkillsList categories={resumeData.skills} />
      </Section>

      {/* 07 — Contact */}
      <Section id="contact" index={7} eyebrow="Open channel" title="Let's build something that works in the field." tone="ink">
        <div className={styles.contact}>
          <Reveal>
            <p className={styles.contactLede}>
              Looking for co-op opportunities and interesting problems in simulation, robotics, computer vision and data
              engineering. Email is the fastest way to reach me.
            </p>
          </Reveal>
          <Reveal delay={100} className={styles.contactActions}>
            <a href={`mailto:${resumeData.email}`} className={`btn accent ${styles.contactBtn}`}>
              {resumeData.email}
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className={`btn ${styles.contactGhost}`}>
              LinkedIn ↗
            </a>
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className={`btn ${styles.contactGhost}`}>
              GitHub ↗
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
