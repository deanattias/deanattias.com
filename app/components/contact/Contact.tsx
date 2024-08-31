import Link from 'next/link';
import Reveal from '../utils/Reveal';
import styles from './Contact.module.scss';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.cotactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>Contact</h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactText}>
            Feel free to connect with me on{' '}
            <Link href={'https://linkedin.com/in/dean-attias/'}>LinkedIn</Link>{' '}
            or send me an email.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href={'mailto:dean.attias@gmail.com'}>
            <div className={styles.contactEmail}>
              <MdEmail size="2.4rem" />
              <span>dean.attias@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
