import React, { useEffect } from "react";
import "../styles/backgroundeffect.css";

const StarryBackground = () => {
    useEffect(() => {
        const starContainer = document.getElementById("star-container");
        if (starContainer) {
            // Clear any existing stars to prevent duplication
            starContainer.innerHTML = "";
            // Create 100 stars for a full-page effect
            for (let i = 0; i < 100; i++) {
                const star = document.createElement("div");
                star.className = "star";
                star.style.top = Math.random() * 100 + "vh";
                star.style.left = Math.random() * 100 + "vw";
                star.style.animationDuration = (Math.random() * 3 + 1) + "s";
                starContainer.appendChild(star);
            }
        }
    }, []);

    return (
        <>
            <div id="star-container"></div>
            
            <div className="floating-shape shape1"></div>
            <div className="floating-shape shape2"></div>
            <div className="floating-shape shape3"></div>
            <div className="floating-shape shape4"></div>
            <div className="floating-shape shape5"></div>
        </>
    );
};

export default StarryBackground;
