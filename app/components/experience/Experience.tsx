import SectionHeader from '../utils/SectionHeader';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem comapny={item.company} key={item.company} {...item} />
      ))}
    </section>
  );
}

const experience = [
  {
    company: 'LearnX',
    position: 'Full Stack Developer',
    period: 'Mar 2024 - Present',
    location: 'Remote',
    description: [
      'Implemented client-side features using React, TypeScript, and Material UI, enhancing user experience and engagement.',
      'Developed and maintained RESTful APIs with FastAPI and managed data in PostgreSQL, improving application performance and scalability.',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Python',
      'FastAPI',
      'Material UI',
      'PostgreSQL',
      'SQLAlchemy',
      'Docker',
    ],
  },
];
