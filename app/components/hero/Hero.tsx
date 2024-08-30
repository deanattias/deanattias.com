import { motion } from 'framer-motion';
import StandardButton from '../buttons/StandardButton';
import Reveal from '../utils/Reveal';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Profile from '@/public/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.wrapper}>
          <Reveal>
            <code>$ ./hello_world</code>
          </Reveal>
          <Reveal>
            <h1 className={styles.title}>Hi, I&apos;m Dean 👋🏼</h1>
          </Reveal>
          <Reveal>
            <code>$ whoami</code>
          </Reveal>
          <Reveal>
            <h2 className={styles.subtitle}>
              I&apos;m a <span>Full Stack Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className={styles.about}>
              <p>
                A self-driven learner who enjoys solving complex problems and
                collaborating with talented teams.
              </p>
              <br />
              <p>
                Currently interning at <Link href="#experience">LearnX</Link>,
                where we are building{' '}
                <Link target="_blank" href="https://codingforkids.io/">
                  <i>codingforkids.io</i>
                </Link>
                {', '}
                an <Link href="#projects">innovative web platform</Link> for
                teaching kids how to code through engaging games. My involvement
                includes developing client-side and server-side features
                end-to-end.
              </p>
            </div>
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
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Dean Attias | Full Stack Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
    </section>
  );
}
