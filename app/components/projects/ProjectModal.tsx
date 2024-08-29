'use client';

import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import styles from './ProjectModal.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import ReactDOM from 'react-dom';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { useKey } from 'react-use';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  sourceCode: string;
  projectLink: string;
  techStack: string[];
  modalContent: JSX.Element;
}

export default function ProjectModal({
  modalContent,
  projectLink,
  setIsOpen,
  isOpen,
  imgSrc,
  title,
  sourceCode,
  techStack,
}: Props) {
  useKey('Escape', () => setIsOpen(false), {}, [isOpen]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body!.style.overflowY = 'hidden';
    } else {
      body!.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          priority
          src={imgSrc}
          alt={`A screenshot showcasing the ${title} project.`}
          width={500}
          height={400}
          className={styles.modalImage}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <code className={styles.modalTechStack}>{techStack.join(' - ')}</code>
          <div className={styles.suppliedContent}>{modalContent}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>Links</p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={sourceCode}>
                <AiFillGithub />
                <span></span>
                Source Code
              </Link>
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <BsFillRocketTakeoffFill /> <span></span>Website
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById('modal-root')!);
}
