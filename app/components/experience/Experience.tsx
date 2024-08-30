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
      'Implementing client-side features using React, TypeScript, and Material UI, enhancing user experience and engagement.',
      'Developing and maintaining RESTful APIs with FastAPI and managing data in PostgreSQL, improving application performance and scalability.',
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
  {
    company: 'EY Israel',
    position: 'Manager, Strategy and Transactions',
    period: 'Aug 2018 - May 2023',
    location: 'Tel Aviv, Israel',
    description: [
      'Developed strong problem-solving and analytical skills by analyzing complex data, advising tech companies on M&A transactions.',
      'Collaborated with cross-functional teams to implement process improvements, resulting in a measurable increase in operational efficiency.',
    ],
    techStack: ['Problem-solving', 'Analytical thinking', 'Business strategy'],
  },
];
