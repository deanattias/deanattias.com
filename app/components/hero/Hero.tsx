import { motion } from 'framer-motion';
import StandardButton from '../buttons/StandardButton';
import Reveal from '../utils/Reveal';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={`seciton-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>Dean Attias</h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subtitle}>
              <span>Full Stack Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.about}>Insert about text here.</p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
