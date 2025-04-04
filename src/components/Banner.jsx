import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import Man from "../assets/Profileman.png";

const Banner = () => {
    const words = ["Deep Learning Engineer", "Frontend Developer", "Full Stack Developer", 'Machine Learning Engineer','Problem Solver'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const typingSpeed = isDeleting ? 80 : 100;
    const cursorBlinkSpeed = 500;
    useEffect(() => {
        // Typing Effect
        const currentWord = words[currentWordIndex];
        const typingTimer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => { }, 3000);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [charIndex, isDeleting, currentWordIndex]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, cursorBlinkSpeed);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <div className="banner" id="home">
            <div className="greeting-div">
                <div className="banner-bg">
                    <img src={Man} alt="" />
                    {/* <video autoPlay muted loop playsInline className='back-video'>
                        <source src={Video}/>
                    </video> */}
                </div>
                <div className="banner-content">
                    <h2>Hi There!</h2>
                    <p>
                        <div className="floating-text" style={{ fontSize: "60px" }}>I'M ABHAY TIWARI</div>
                        <br />
                        <br />
                        I am a <span className="changeText">{displayedText}<span className="cursor">|</span></span> </p>
                    <p>Passionate about creating
                        innovative solutions and leveraging technology for real-world impact. </p>
                    <div className="resumes">
                        <button className='btn'>
                            <a className="resume" href="/Abhay's Web Resume.pdf" download="Abhay_Tiwari_Resume.pdf">Web Resume</a>
                        </button>
                        <button className='btn'>
                            <a className="resume" href="/Abhay's AI Resume.pdf" download="Abhay_Tiwari_Resume.pdf">AI Resume</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
