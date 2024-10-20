import { AiOutlineArrowRight } from 'react-icons/ai';
import Reveal from '../utils/Reveal';
import SectionHeader from '../utils/SectionHeader';
import styles from './About.module.scss';
import SocialMediaLinks from '../nav/components/SocialMediaLinks';
import Stats from './Stats';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m a Software Developer with a strong foundation in computer science 
              and hands-on experience in web development. 

            </p>
          </Reveal>
          <Reveal>
            <div className={styles.aboutText}>
              <p>
                Recently, I&apos;ve completed an innovative program by{' '}
                <Link href="https://grtech.co.il/en/webbev-syllabus/">
                  <strong>Google and Reichman University</strong>
                </Link>
                , designed to train and re-skill candidates for software
                development roles, gaining approximately{' '}
                <strong>1,000 hours of coding experience</strong>.
              </p>
              <br />
              <p>
                Currently at LearnX, building client-side features and
                server-side functionalities using 
                <code className="chip">Python</code>,{' '}
                <code className="chip">FastAPI</code>,{' '}
                <code className="chip">TypeScript</code>,{' '}
                <code className="chip">React</code>,{' '}
                <code className="chip">PostgreSQL</code>.
                , and{' '}
                <code className="chip">Docker</code>
              </p>
            </div>
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
