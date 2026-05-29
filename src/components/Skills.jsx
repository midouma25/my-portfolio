import React from 'react';
import './Skills.css';

function Skills() {
const skillCategories = [
    {
      title: "💻 Full-Stack Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Node.js & Express", "MongoDB & PostgreSQL", "Git / GitHub"]
    },
    {
      title: "🤖 AI & Data Algorithms",
      skills: ["Python", "Machine Learning Basics", "Trading Algorithms", "Data Analysis", "Prompt Engineering"]
    },
    {
      title: "🎛️ Audio Engineering & Media",
      skills: [
        "Adobe Audition & Sony Vegas Pro",
        "Noise Reduction & Denoising",
        "Pitch Shifting & Voice Modulation",
        "Delay, Reverb & De-reverb Effects",
        "Custom Audio Filters & Equalization (EQ)",
        "Precise Audio-Visual Synchronization"
      ]
    }
  ];
  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">Technical & Creative Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3 className="skill-category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;