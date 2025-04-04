import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

const skills = {
  Frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind', level: 90 },
    { name: 'React', level: 80 },
  ],
  'Backend & Languages': [
    { name: 'C', level: 90 },
    { name: 'C++', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'Restful API', level: 75 },
  ],
  'AI & ML': [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Deep Learning', level: 75 },
    { name: 'TensorFlow', level: 75 },
    { name: 'Pytorch', level: 65 },
  ],
  'Tools & Technologies': [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 80 },
    { name: 'Docker', level: 75 },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, 
      ease: [0.25, 1, 0.5, 1], 
    },
  },
};
const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="title">My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="skills-section"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>{category}</h3>
            {skillList.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">
                  {skill.name} <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <p className="skill-end">
        I'm committed to continuously enhancing my skills by exploring emerging technologies and staying informed about the latest trends in web development.
      </p>
    </div>
  );
};

export default Skills;
