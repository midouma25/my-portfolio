import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  // 1. إضافة خاصية "category" لكل مشروع
  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Full-Stack Platform",
      description: "A complete e-commerce application featuring secure user authentication and dynamic product management.",
      tech: "MERN Stack",
      category: "Web Dev"
    },
    {
      id: 2,
      title: "Algorithmic Forex Trading Bot",
      description: "A high-performance algorithmic trading system featuring a robust back-testing engine.",
      tech: "Python",
      category: "AI & Data"
    },
    {
      id: 3,
      title: "Multimodal AI Quality Evaluator",
      description: "A framework for analyzing and evaluating AI-generated audio and video.",
      tech: "Audio QA",
      category: "Media"
    }
  ];

  // 2. حالة الفلتر الحالي (الافتراضي هو 'All')
  const [filter, setFilter] = useState('All');

  // 3. فلترة المصفوفة بناءً على الزر المضغوط
  const filteredProjects = filter === 'All' 
    ? myProjects 
    : myProjects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      
      {/* 4. أزرار الفلترة */}
      <div className="filter-buttons">
        <button className={filter === 'All' ? 'active-filter' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'Web Dev' ? 'active-filter' : ''} onClick={() => setFilter('Web Dev')}>Web Dev</button>
        <button className={filter === 'AI & Data' ? 'active-filter' : ''} onClick={() => setFilter('AI & Data')}>AI & Data</button>
        <button className={filter === 'Media' ? 'active-filter' : ''} onClick={() => setFilter('Media')}>Media</button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
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