import React from 'react';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Lead developer for enterprise web applications, managing a team of 5 developers.',
    achievements: [
      'Implemented microservices architecture reducing system downtime by 40%',
      'Developed CI/CD pipeline improving deployment efficiency by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    company: 'Digital Innovations Ltd.',
    position: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Developed responsive web applications for various clients in the finance sector.',
    achievements: [
      'Built real-time dashboard reducing data latency by 50%',
      'Implemented responsive design patterns improving mobile usage by 35%',
      'Optimized application performance increasing load speed by 40%',
    ],
    technologies: ['Vue.js', 'TypeScript', 'GraphQL', 'Sass'],
  },
  {
    company: 'StartUp Hub',
    position: 'Junior Developer',
    period: '2018 - 2019',
    description: 'Worked on various startup projects developing MVPs and prototypes.',
    achievements: [
      'Developed e-commerce platform from scratch',
      'Implemented payment gateway integration',
      'Created responsive email templates',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'MySQL'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800"
            >
              <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] top-0"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
