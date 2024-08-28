import { AiOutlineArrowRight } from 'react-icons/ai';
import Reveal from '../utils/Reveal';
import SectionHeader from '../utils/SectionHeader';
import styles from './About.module.scss';
import SocialMediaLinks from '../nav/components/SocialMediaLinks';
import Stats from './Stats';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m a full stack developer with hands-on experience and a
              strong foundation in computer science.
              <br />
              <br />A self-driven learner who enjoys solving complex problems
              and collaborating with talented teams.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently interning at LearnX, developing client-side and
              server-side features using <code>React</code>,{' '}
              <code>TypeScript</code>, <code>Python</code>, <code>FastAPI</code>
              , <code>Docker</code>, and <code>PostgreSQL</code>.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <label>More about me</label>
                <AiOutlineArrowRight />
              </div>
              <SocialMediaLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
}
