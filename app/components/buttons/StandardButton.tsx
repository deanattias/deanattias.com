import { MouseEventHandler } from 'react';
import styles from './StandardButton.module.scss';

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function StandardButton({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
}
