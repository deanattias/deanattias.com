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
              <code className="chip">TypeScript</code>
              <code className="chip">Node.js</code>
              <code className="chip">Python</code>
              <code className="chip">FastAPI</code>
              <code className="chip">React</code>
              <code className="chip">Next.js</code>
              <code className="chip">Material UI</code>
              <code className="chip">Tailwind CSS</code>
              <code className="chip">Sass</code>
              <code className="chip">Vue</code>
              <code className="chip">Express</code>
              <code className="chip">PostgreSQL</code>
              <code className="chip">MongoDB</code>
              <code className="chip">Docker</code>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillExperiment size="2.4rem" color="var(--brand)" />
            <span>Experimenting with</span>
          </h4>
          <div className={styles.statGrid}>
            <code className="chip">Nuxt</code>
            <code className="chip">AWS</code>
            <code className="chip">Supabase</code>
            <code className="chip">Redux</code>
            <code className="chip">Storybook</code>
            <code className="chip">Figma</code>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
