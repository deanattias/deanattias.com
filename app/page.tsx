'use client';

import styles from './Home.module.scss';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Heading from './components/nav/Heading';
import SideBar from './components/nav/SideBar';

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Heading />
          <Hero />
          <About />
          <div
            style={{
              height: '200px',
              background:
                'linear-gradien(180deg, var(--background), var(--background-dark))',
            }}
          />
        </main>
      </div>
    </>
  );
}
