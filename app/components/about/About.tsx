import { AiOutlineArrowRight } from 'react-icons/ai';
import Reveal from '../utils/Reveal';
import SectionHeader from '../utils/SectionHeader';
import styles from './About.module.scss';
import SocialMediaLinks from '../nav/components/SocialMediaLinks';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m Dean Attias, a full stack developer with hands-on
              experience and a strong foundation in computer science.
              <br />
              <br />A self-driven learner who enjoys solving complex problems
              and collaborating with talented teams.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently interning at LearnX, developing client-side and
              server-side features using React, TypeScript, Python FastAPI,
              Docker, and PostgreSQL.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>Feel free to reach out.</p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Find more about me here</span>
                <AiOutlineArrowRight />
              </div>
              <SocialMediaLinks />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
