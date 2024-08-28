import { motion } from 'framer-motion';
import StandardButton from '../buttons/StandardButton';
import Reveal from '../utils/Reveal';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Profile from '@/public/profile.jpg';
import SocialMediaLinks from '../nav/components/SocialMediaLinks';
import { MdEmail } from 'react-icons/md';

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
            <h1></h1>
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
            <p className={styles.about}>
              I loves tackling hard, important problems alongside talented
              people. With a solid foundation in computer science fundamentals
              and hands-on experience in web development, I&apos;m passionate
              about continuously learning and improving.
            </p>
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
