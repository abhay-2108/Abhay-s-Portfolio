import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`container ${scrolled ? "scrolled" : ""}`}>
            <div className="name-container">
                <span className="first-letter">A</span>
                <span className="rest-of-name">BHAY</span>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>

            <nav className={menuOpen ? "navigation-bar responsive" : "navigation-bar"}>
                <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation("home"); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}>About</a></li>
                    <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavigation("skills"); }}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation("projects"); }}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation("contact"); }}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
