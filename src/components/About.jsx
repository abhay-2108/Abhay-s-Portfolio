import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Profile from '../assets/profile.jpg';
import '../styles/backgroundeffect.css';
import '../styles/About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const containerVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.3 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, x: 0, 
            transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
        }
    };

    return (
        <motion.div 
            className="about-section" id="about" ref={ref}
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}
        >
            <motion.div className="title" variants={childVariants}>
                <h2 className="about">About Me</h2>
            </motion.div>

            <div className="main-content">
                <motion.div className="profile" variants={childVariants}>
                    <img src={Profile} alt="Profile" />
                </motion.div>

                <motion.div className="content" variants={childVariants}>
                    <p>
                        I am a passionate and dedicated Computer Science Engineering student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning. 
                        With a strong foundation in computer science, I am eager to apply my knowledge to solve complex problems. My commitment to continuous learning 
                        and innovation drives me to contribute to advancements in AI and ML, making a tangible impact. Known for my hardworking nature, I constantly strive 
                        to expand my skill set and contribute effectively to any team or project.
                    </p>
                    
                    <motion.div variants={childVariants}>
                        <button className="btn">
                            <a className="resume" href="https://github.com/abhay-2108?tab=repositories" target="_blank">My Works</a>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
