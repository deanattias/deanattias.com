import styles from './SocialMediaLinks.module.scss';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
} from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SocialMediaLinks() {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://deanattias.medium.com/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillMediumCircle size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://linkedin.com/in/dean-attias/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://github.com/deanattias/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
}
