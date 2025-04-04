import React from 'react';
import { useInView } from 'react-intersection-observer';
import './styles/fade.css'
import Backgroundeffect from './components/backgroundeffect';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/skills'
// import Carousel from './components/carousel'
import Projects from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'
import './styles/GlobalStyles.css';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.2, 
        triggerOnce: false, 
    });

    return (
        <div
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};


const App = () => {
    return (
        <div>
            <Backgroundeffect />
                <Header />
            <FadeInSection>
                <Banner />
            </FadeInSection>
            <FadeInSection>
                <About />
            </FadeInSection>
            <Skills />
            <FadeInSection>
                {/* <Carousel /> */}
            </FadeInSection>
            <FadeInSection>
                <Projects />
            </FadeInSection>
            <FadeInSection>
                <Contact />
            </FadeInSection>
            <FadeInSection>
                <Footer />
            </FadeInSection>
        </div>
    );
};

export default App;
