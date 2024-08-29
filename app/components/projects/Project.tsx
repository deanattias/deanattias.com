import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';
import Reveal from '../utils/Reveal';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { ProjectModal } from './ProjectModal';

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  techStack: string[];
  title: string;
  sourceCode: string;
}

export default function Project({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  sourceCode,
  techStack,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={1000}
            height={0}
            style={{
              width: hovered ? '90% !important' : '85% !important',
            }}
          />
        </div>
        <div className={styles.project}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
              <Link href={sourceCode} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </Link>
              <Link href={projectLink} target="_blank" rel="nofollow">
                <BsFillRocketTakeoffFill size="2.5rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description} <br />
              <span onClick={() => setIsOpen(true)}>Learn more {'>'} </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        sourceCode={sourceCode}
        techStack={techStack}
      />
    </>
  );
}
