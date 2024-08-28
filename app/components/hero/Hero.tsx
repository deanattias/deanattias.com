import { motion } from 'framer-motion';
import StandardButton from '../buttons/StandardButton';
import Reveal from '../utils/Reveal';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.wrapper}>
          <Reveal>
            <h1 className={styles.title}>Hi, I&apos;m Dean<span>.</span></h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subtitle}>
              I&apos;m a <span>Full Stack Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo exercitationem a hic impedit cumque officia suscipit quae, cum facilis, numquam sequi sapiente, aut molestiae doloribus deserunt vitae. Saepe, qui?</p>
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
