'use client';

import styles from './home.module.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Heading from './components/nav/Heading';
import SideBar from './components/nav/SideBar';
import Projects from './components/projects/Projects';

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
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
