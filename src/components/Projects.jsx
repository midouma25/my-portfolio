import React from 'react';
import './Projects.css';

function Projects() {
  // مصفوفة مشاريعك الحقيقية والاحترافية
  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Full-Stack Platform",
      description: "My university graduation project. A complete e-commerce application featuring secure user authentication, dynamic product management, and a seamless checkout experience.",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)"
    },
    {
      id: 2,
      title: "Algorithmic Forex Trading Bot",
      description: "A high-performance algorithmic trading system featuring a robust back-testing engine to evaluate and execute fast, accurate trading strategies.",
      tech: "Python, Trading Algorithms, API Integration"
    },
    {
      id: 3,
      title: "Multimodal AI Quality Evaluator",
      description: "A framework for analyzing and evaluating AI-generated audio and video, focusing on lip-sync accuracy, emotional resonance, and contextual matching.",
      tech: "AI Data Analysis, QA, Critical Listening"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech-box">
              <span className="project-tech">{project.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;