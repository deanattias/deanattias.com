import OutlineButton from '../buttons/OutlineButton';
import SocialMediaLinks from './components/SocialMediaLinks';
import styles from './Heading.module.scss';

export default function Heading() {
  return (
    <header className={styles.heading}>
      <SocialMediaLinks />
      <OutlineButton onClick={() => window.open('dean-attias-cv.pdf')}>
        My CV
      </OutlineButton>
    </header>
  );
}
