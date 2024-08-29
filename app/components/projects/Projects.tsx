import SectionHeader from '../utils/SectionHeader';
import Project from './Project';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
}

const projects = [
  {
    title: 'Project 1',
    imgSrc: '/public/project-images/coding-for-kids.png',
    sourceCode: '#',
    projectLink: '#',
    techStack: ['Next.js', 'Tailwind CSS'],
    description: 'A very complex project.',
    modalContent: (
      <>
        <p>Worked in a team of six developers.</p>
        <p>The front-end was built with React and Tailwind CSS.</p>
      </>
    ),
  },
  {
    title: 'Project 2',
    imgSrc: '/public/project-images/coding-for-kids.png',
    sourceCode: '#',
    projectLink: '#',
    techStack: ['Next.js', 'Tailwind CSS'],
    description: 'A very complex project.',
    modalContent: (
      <>
        <p>Worked in a team of six developers.</p>
        <p>The front-end was built with React and Tailwind CSS.</p>
      </>
    ),
  },
  {
    title: 'Project 3',
    imgSrc: '/public/project-images/coding-for-kids.png',
    sourceCode: '#',
    projectLink: '#',
    techStack: ['Next.js', 'Tailwind CSS'],
    description: 'A very complex project.',
    modalContent: (
      <>
        <p>Worked in a team of six developers.</p>
        <p>The front-end was built with React and Tailwind CSS.</p>
      </>
    ),
  },
  {
    title: 'Project 4',
    imgSrc: '/public/project-images/coding-for-kids.png',
    sourceCode: '#',
    projectLink: '#',
    techStack: ['Next.js', 'Tailwind CSS'],
    description: 'A very complex project.',
    modalContent: (
      <>
        <p>Worked in a team of six developers.</p>
        <p>The front-end was built with React and Tailwind CSS.</p>
      </>
    ),
  },
];
