'use client';

import styles from './Home.module.scss';
import Heading from './components/nav/Heading';

export default function Home() {
  return (
    <div className={styles.home}>
      <main id="main">
        <Heading />
      </main>
    </div>
  );
}
