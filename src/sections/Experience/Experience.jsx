import React from 'react';
import { motion } from 'framer-motion';
import styles from './ExperienceStyles.module.css';
import curve from '../../assets/curve.png';

const EXPERIENCES = [
  {
    year: 'JUNE 2024 - Present',
    role: 'Front End Developer',
    company: 'Assist 360',
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ['JavaScript', 'React.js', 'Next.js', 'MongoDB'],
  },
  {
    year: 'FEB 2024 - MAR 2024',
    role: 'React Developer',
    company: 'RK Soft',
    description: "Contributed to the design and development of user interfaces for web applications as a React Developer Intern. Assisted in building components using React and Next.js, while collaborating with backend teams to integrate frontend elements with Node.js APIs. Gained hands-on experience in implementing responsive designs, optimizing frontend performance, and utilizing tools like Redux for state management.",
    technologies: ['HTML', 'CSS', 'Bootstrap', ,'React','Redux','MySQL'],
  },
  {
    year: 'JULY 2023 - JAN 2024',
    role: 'Python Full Stack',
    company: 'E-box',
    description:"Completed a comprehensive Python Full Stack development course, covering front-end and back-end technologies. Gained hands-on experience with Python, MySQL, and RESTful API development. The course emphasized building dynamic web applications, integrating databases, and implementing best practices in full-stack development. Enhanced problem-solving skills through real-world projects and collaborative coding exercises.",
    technologies: ['Python', 'MySQL'],
  },
//   {
//     year: '2020 - 2021',
//     role: 'Software Engineer',
//     company: 'Paypal',
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
//   },
];

const Experience = () => {
  return (
    <section className={`${styles.experienceSection} my-10 p-3`}>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`${styles.header} flex justify-center flex-col w-full relative z-[4] mb-9`}
      >
        <div>
          <h1 className={`${styles.title} text-white text-5xl text-center`}>Experience</h1>
          <div className="text-center flex justify-center">
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt="Curve Decoration"
              className="h-[10px] mt-1"
            />
          </div>
        </div>
      </motion.div>

      <div className={`${styles.experienceList} relative max_width_screen w-full text-white`}>
        {EXPERIENCES.map((item, i) => (
          <div key={i} className={`${styles.experienceItem} relative z-[10] flex sm:flex-row flex-col mb-3 mx-1`}>
            {/* Year Section */}
            <div className={`${styles.year} flex justify-center sm:justify-start sm:my-0 my-2`}>
              {item.year}
            </div>
            
            {/* Details Section */}
            <div className={`${styles.details} flex flex-1 flex-col gap-3`}>
              <div className={`${styles.roleCompany} flex gap-2`}>
                <p className={styles.role}>{item.role} -</p>
                <p className={styles.company}>{item.company}</p>
              </div>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.technologies}>
                {item.technologies.map((tech, i) => (
                  <div key={i} className={styles.technology}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Gradient Backgrounds */}
        <div className={`${styles.gradient} ${styles.pink} absolute`} />
        <div className={`${styles.gradient} ${styles.blue} absolute`} />
        <div className={`${styles.gradient} ${styles.yellow} absolute`} />
      </div>
    </section>
  );
};

export default Experience;
