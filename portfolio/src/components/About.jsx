import React from 'react';
import raj from '../assets/raj_circle.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={raj}
              alt="John Doe"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with 1.5+ years of experience in building web applications.
              I specialize in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                B.Tech. in Computer Science and Engineering <br />
                MIT-ADT University<br />
                2023 - 2027
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>AWS Certified Developer Associate</li>
                <li>MongoDB Certified Developer</li>
                <li>Google Cloud Professional Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
