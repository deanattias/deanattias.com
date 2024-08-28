import { AiFillCode, AiFillExperiment } from 'react-icons/ai';
import styles from './Stats.module.scss';
import Reveal from '../utils/Reveal';

export default function Stats() {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div>
          <div className={styles.statColumn}>
            <h4>
              <AiFillCode size="2.4rem" color="var(--brand)" />
              <span>Tech stack</span>
            </h4>
            <div className={styles.statGrid}>
              <span className="chip">TypeScript</span>
              <span className="chip">Node.js</span>
              <span className="chip">Python</span>
              <span className="chip">FastAPI</span>
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">Material UI</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Sass</span>
              <span className="chip">Vue</span>
              <span className="chip">Express</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Docker</span>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillExperiment size="2.4rem" color="var(--brand)" />
            <span>Experimenting with..</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Nuxt</span>
            <span className="chip">AWS</span>
            <span className="chip">Supabase</span>
            <span className="chip">Redux</span>
            <span className="chip">Storybook</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
