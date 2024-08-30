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
    title: 'codingforkids.io',
    imgSrc: '/project-images/coding-for-kids.png',
    sourceCode: null,
    projectLink: 'https://codingforkids.io/',
    techStack: [
      'TypeScript',
      'React',
      'Material UI',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Docker',
    ],
    description:
      'An innovative web platform for teaching kids how to code through engaging games.',
    modalContent: (
      <>
        <p>
          Working as part of a team of four software engineers to develop an
          innovative web platform for teaching kids how to code through engaging
          games.
        </p>
      </>
    ),
  },
  {
    title: 'Code with Tom',
    imgSrc: '/project-images/code-with-tom.png',
    sourceCode: 'https://github.com/deanattias/code-with-tom/',
    projectLink: 'https://code-with-tom-deans-projects-729ccfbf.vercel.app/',
    techStack: ['TypeScript', 'React', 'Socket.IO', 'Node.js', 'PostgreSQL'],
    description:
      'A real-time collaborative coding web platform using Socket.IO.',
    modalContent: (
      <>
        <p>
          Developed a real-time collaborative coding platform using React,
          Node.js, and TypeScript, incorporating Socket.IO for real-time
          interactions and PostgreSQL for secure data management, supporting
          features like mentor-student roles and interactive challenges.
        </p>
      </>
    ),
  },
  {
    title: "Yalla Let's Go",
    imgSrc: '/project-images/yalla-lets-go.png',
    sourceCode: 'https://github.com/Ryuketsukami/walkSpotBot/',
    projectLink: '#',
    techStack: ['Python', 'Telegram API', 'Places API', 'Google Maps Platform'],
    description:
      'An adventurous game where a Telegram Bot guides players to random locations, challenging them to find each spot using only image-based hints.',
    modalContent: (
      <>
        <p>
          Developed a Telegram bot that utilizes the user&apos;s location to
          suggest nearby places, integrating hints in the form of images
          retrieved from the Google Places API.
        </p>
        <p>
          Implemented real-time interaction using Telegram API, providing an
          engaging and interactive experience for users seeking location-based
          activities.
        </p>
      </>
    ),
  },
];
