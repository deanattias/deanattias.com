import { MouseEventHandler } from 'react';
import styles from './OutlineButton.module.scss';
import { AiFillFilePdf } from 'react-icons/ai';

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function OutlineButton({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      <AiFillFilePdf size="2.4rem" />
      {children}
    </button>
  );
}
