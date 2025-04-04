import React, { useState } from "react";
import "../styles/projects.css";
import stock from "../assets/stock.png";
import credit from "../assets/credit.jpg";
import breast from "../assets/breast.webp";
import Shopping from "../assets/shopping.jpg";
import Vlab from "../assets/Vlab.jpeg";
import Dashboard from "../assets/Dashboard.jpg";
import Bank from "../assets/bank.jpg";
import Spam from "../assets/spam.jpg";
import Movie from "../assets/movie.jpg";
import AT from '../assets/AT1.jpg';

const allProjects = {
  web: [
    {
      title: "Healthcare Management System",
      description:
        "A secure, scalable healthcare management web app using Node.js, Express.js, and EJS, integrating patient records, efficient appointment scheduling, documentation, financial transactions, real-time communication, and an AI chatbot for emergency guidance.",
      details: "Built a healthcare management system with Node.js, Express.js, EJS, HTML, CSS, JavaScript, and an AI chatbot (Google API integration).",
      image: Dashboard,
      link: 'https://github.com/abhay-2108/Healthcare-Management-System',
    },
    {
      title: "Basic Banking System",
      description:
        "A robust banking system that supports secure, real-time transaction operations with comprehensive security protocols and a reliable MySQL database.",
      details: "Developed with Express.js, Node.js, and MySQL, ensuring secure, efficient banking transactions and robust data integrity.",
      image: Bank,
      link: 'https://github.com/abhay-2108/Basic-Banking-System',
    },
    {
      title: "UI/UX Redesign of Virtual Labs",
      description:
        "A comprehensive redesign of virtual labs aimed at enhancing engagement, accessibility, and usability for engineering students. The project features a modern, intuitive UI with cross-device compatibility, personalized learning experiences, and advanced interactive elements such as an AI-powered chatbot and multilingual support.",
      details: "Redesigned UI, intuitive navigation, personalization, AI-powered chatbot, multilingual support, and real-time data visualization.",
      image: Vlab,
      link: 'https://github.com/ShubhamxGupta/Virtual-Labs',
    },
    {
      title: "E-Commerce Website",
      description:
        "Built with HTML5, CSS3, and JavaScript, this site emphasizes modern design and smooth transitions. It’s hosted on GitHub Pages and optimized for cross-device compatibility, ensuring a fast, engaging user experience.",
      details: "A fully responsive e-commerce website offering a seamless online shopping experience with an intuitive UI that lets users easily browse products, manage their shopping cart, and navigate the site effortlessly.",
      image: Shopping,
      link: 'https://github.com/abhay-2108/E-Commerce-Website',
    },
  ],
  ml: [
    {
      title: "Fraud Detection System",
      description:
        "A deep learning-based credit card fraud detection system using an autoencoder neural network, developed in Python with Keras/TensorFlow. Achieved a training loss of 0.2362, validation loss of 0.1302, and set a reconstruction error threshold of 0.380976166091332 to effectively identify anomalous transactions.",
      details: "A deep learning-based credit card fraud detection system that leverages autoencoder neural networks to learn the inherent patterns of legitimate transactions.",
      image: credit,
      link: 'https://github.com/abhay-2108/Credit-Card-Fraud-Detection-Using-Autoencoders',
    },
    {
      title: "Stock Market Prediction",
      description:
        "Developed an advanced system to predict stock prices by leveraging machine learning and deep learning techniques for market trend analysis.",
      details: "Implemented with Random Forest and ANN models, ensuring robust, accurate stock price forecasting.",
      image: stock,
      link: 'https://github.com/abhay-2108/Stock-Prediction-using-Random-Forest-and-ANN',
    },
    {
      title: "Movie Recommendation System",
      description:
        "A content-based movie recommendation system that analyzes movie data using advanced NLP techniques to extract semantic features and user preferences. It employs scikit-learn for feature engineering and TensorFlow for integrating deep learning components, with cosine similarity calculating the relevance between movies to generate personalized recommendations.",
      details: "Built with Scikit-learn, NLP, Flask, HTML, and CSS, ensuring a responsive and intuitive user interface.",
      image: Movie,
      link: 'https://github.com/abhay-2108/Movie-Recommandation-System',
    },
    {
      title: "SMS Spam Detection",
      description:
        "Implements an SMS spam detection system that employs comprehensive text preprocessing, TF-IDF vectorization, and a Multinomial Naive Bayes classifier to accurately identify spam messages with accuracy: 0.972921 and precision: 0.982456",
      details: "Developed in Python with Flask API, ensuring robust efficient spam detection and a user-friendly interface.",
      image: Spam,
      link: 'https://github.com/abhay-2108/SMS-Spam-Detection',
    },
    {
      title: "Breast Cancer Prediction",
      description:
        "A machine learning solution for breast cancer prediction employing Support Vector Classifier and Regressor, leveraging comprehensive feature extraction and model evaluation techniques.",
      details: "Implemented in Python using Scikit-learn and Pandas with data preprocessing, feature selection, and model tuning.",
      image: breast,
      link: 'https://github.com/abhay-2108/Breast-Cancer-Prediction',
    },
    {
      title: "AI Powered Resume Analyzer",
      description:
        "An AI-powered Resume Analyzer and ATS tool that leverages Google Gemini AI, Flask, and PyMuPDF for efficient text extraction and intelligent analysis. It uses advanced NLP and ML techniques to parse, evaluate, and score resumes, providing actionable feedback to enhance candidate profiles for optimal ATS compatibility.",
      details: "Developed in Python with Flask, integrating NLP libraries and ML models for accurate resume parsing and scoring.",
      image: AT,
      link: 'https://github.com/abhay-2108/abhay-2108-AI-Powered-Resume-Analyzer-ATS',
    },
  ]
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");
  
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-filters">
        <button className={`btn ${selectedCategory === "web" ? "active" : ""}`} onClick={() => setSelectedCategory("web")}>Web Projects</button>
        <button className={`btn ${selectedCategory === "ml" ? "active" : ""}`} onClick={() => setSelectedCategory("ml")}>ML Projects</button>
      </div>
      <div className="projects-grid">
        {allProjects[selectedCategory].map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner" style={{ transition: "transform 0.6s ease-in-out" }}>
              <div className="card-front">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.details}</p>
                </div>
              </div>
              <div className="card-back">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <button className='btn-flip'>
                    <a target="_blank" className="resume" href={project.link}>Open Project</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <button className="btn-project">
        <a href="https://github.com/abhay-2108" target="_blank">View More Project</a>
      </button>
    </div>
  );
};

export default Projects;
