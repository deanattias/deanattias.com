import Reveal from '../utils/Reveal';
import styles from './Experience.module.scss';

interface Props {
  comapny: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export default function ExperienceItem({
  comapny,
  position,
  period,
  location,
  description,
  techStack,
}: Props) {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.comapny}>{comapny}</span>
        </Reveal>
        <Reveal>
          <span className={styles.period}>{period}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span className={styles.location}>{location}</span>
        </Reveal>
      </div>
      <div className={styles.description}>
        {description.map((line) => (
          <Reveal>
            <p className={styles.description} key={line}>
              {line}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className={styles.techStack}>
          {techStack.map((item) => (
            <code key={item} className="chip">
              {item}
            </code>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
